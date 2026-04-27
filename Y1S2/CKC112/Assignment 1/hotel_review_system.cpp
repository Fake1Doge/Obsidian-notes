#include <iostream>
#include <fstream>
#include <string>
#include <iomanip>

using namespace std;

// Fixed-size constraints (No STL)
const int MAX_REVIEWS = 50;
const int MAX_TRAVELERS = 50;

// ==========================================
// 1. CLASS DEFINITIONS & COMPOSITION
// ==========================================

class Review {
private:
    string hotelName;
    float rating;
    float pricePerNight;
    string comment;

public:
    Review() : hotelName(""), rating(0.0), pricePerNight(0.0), comment("") {}
    Review(string h, float r, float p, string c) : hotelName(h), rating(r), pricePerNight(p), comment(c) {}
    
    // OPERATOR OVERLOADING: Overloading > to compare ratings
    bool operator>(const Review& other) const {
        return this->rating > other.rating;
    }
    
    string getHotelName() const { return hotelName; }
    float getRating() const { return rating; }
    float getPrice() const { return pricePerNight; }
    
    void display() const {
        cout << "  Hotel: " << hotelName << " | Rating: " << rating 
             << " | Price: $" << pricePerNight << "\n  Comment: " << comment << "\n";
    }

    // Forward declaration of friend function
    friend void generateHotelReport(const string& targetHotel, class Traveler travelers[], int travelerCount);
};

// Base Class
class User {
protected:
    string username;
    float budget;
public:
    User() : username(""), budget(0.0) {}
    User(string u, float b) : username(u), budget(b) {}
    
    string getUsername() const { return username; }
    float getBudget() const { return budget; }
};

// INHERITANCE: Traveler inherits from User
class Traveler : public User {
private:
    string loyaltyTier;
    // COMPOSITION: Primary class "owns" an array of another class
    Review reviews[MAX_REVIEWS]; 
    int reviewCount;

public:
    Traveler() : User(), loyaltyTier("Bronze"), reviewCount(0) {}
    Traveler(string u, float b, string tier) : User(u, b), loyaltyTier(tier), reviewCount(0) {}
    
    void addReview(const Review& r) {
        if (reviewCount < MAX_REVIEWS) {
            reviews[reviewCount++] = r;
        }
    }

    int getReviewCount() const { return reviewCount; }
    Review getReview(int index) const { return reviews[index]; }

    void displayProfile() const {
        cout << "\n=====================================\n";
        cout << "Traveler Profile: " << username << "\n";
        cout << "Loyalty Tier: " << loyaltyTier << "\n";
        cout << "Budget: $" << budget << "\n";
        cout << "Authored Reviews (" << reviewCount << "):\n";
        for (int i = 0; i < reviewCount; i++) {
            reviews[i].display();
            cout << "-------------------------------------\n";
        }
    }

    // LOGIC LOCATION: Processing must occur strictly inside class member functions
    void findTopPick(const Traveler allTravelers[], int travelerCount) const {
        Review bestHotel;
        bool foundAny = false;

        for (int i = 0; i < travelerCount; i++) {
            for (int j = 0; j < allTravelers[i].getReviewCount(); j++) {
                Review currentReview = allTravelers[i].getReview(j);
                if (currentReview.getPrice() <= this->budget) {
                    // Uses Operator Overloading >
                    if (!foundAny || currentReview > bestHotel) { 
                        bestHotel = currentReview;
                        foundAny = true;
                    }
                }
            }
        }

        cout << "\n--- Top-Pick Matcher for " << username << " (Budget: $" << budget << ") ---\n";
        if (foundAny) {
            cout << "Recommended Hotel: " << bestHotel.getHotelName() << "\n";
            cout << "Rating: " << bestHotel.getRating() << " | Price: $" << bestHotel.getPrice() << "\n";
        } else {
            cout << "No hotels found within budget.\n";
        }
    }

    // FRIEND FUNCTION Declaration
    friend void generateHotelReport(const string& targetHotel, Traveler travelers[], int travelerCount);
};

// ==========================================
// 2. FRIEND FUNCTION IMPLEMENTATION
// ==========================================
// Accesses private data 'reviews' and 'reviewCount' directly
void generateHotelReport(const string& targetHotel, Traveler travelers[], int travelerCount) {
    cout << "\n--- Property Deep-Dive: " << targetHotel << " ---\n";
    bool found = false;
    float totalRating = 0;
    int count = 0;

    for (int i = 0; i < travelerCount; i++) {
        for (int j = 0; j < travelers[i].reviewCount; j++) { // Accessing private member
            if (travelers[i].reviews[j].hotelName == targetHotel) { // Accessing private member
                cout << "Review by " << travelers[i].username << ": " << travelers[i].reviews[j].rating << " stars\n";
                cout << "  \"" << travelers[i].reviews[j].comment << "\"\n";
                totalRating += travelers[i].reviews[j].rating;
                count++;
                found = true;
            }
        }
    }
    
    if (found) {
        cout << "\nSummary: Average Rating for " << targetHotel << " is " << fixed << setprecision(1) << (totalRating / count) << " stars.\n";
    } else {
        cout << "No reviews found for " << targetHotel << ".\n";
    }
}

// ==========================================
// 3. MAIN FUNCTION (Entity-Centric Lifecycle)
// ==========================================
int main() {
    // SINGLE PRIMARY ENTITY: Fixed-size array representing the system state
    Traveler travelers[MAX_TRAVELERS];
    int travelerCount = 0;

    // --- ONE-TIME I/O: READ AT STARTUP ---
    ifstream userFile("Users.txt");
    if (userFile.is_open()) {
        string name, tier;
        float budget;
        while (userFile >> name >> budget >> tier && travelerCount < MAX_TRAVELERS) {
            travelers[travelerCount++] = Traveler(name, budget, tier);
        }
        userFile.close();
    } else {
        cout << "Error: Could not read Users.txt. Continuing with empty system.\n";
    }

    // Temporary storage to STRICTLY avoid processing logic in file-reading loops
    string tempUsernames[MAX_REVIEWS * MAX_TRAVELERS];
    Review tempReviews[MAX_REVIEWS * MAX_TRAVELERS];
    int tempReviewCount = 0;

    ifstream reviewFile("Reviews.txt");
    if (reviewFile.is_open()) {
        string username, hotel, comment;
        float rating, price;
        // Purely reading - NO logic, matching, or calculation happens here.
        while (reviewFile >> username >> hotel >> rating >> price >> comment && tempReviewCount < (MAX_REVIEWS * MAX_TRAVELERS)) {
            tempUsernames[tempReviewCount] = username;
            tempReviews[tempReviewCount] = Review(hotel, rating, price, comment);
            tempReviewCount++;
        }
        reviewFile.close();
    } else {
        cout << "Error: Could not read Reviews.txt.\n";
    }

    // Processing mapping logic OUTSIDE the file-reading loop
    for (int r = 0; r < tempReviewCount; r++) {
        for (int t = 0; t < travelerCount; t++) {
            if (travelers[t].getUsername() == tempUsernames[r]) {
                travelers[t].addReview(tempReviews[r]);
                break;
            }
        }
    }

    // --- CONSOLE-BASED GUI (MENU) ---
    int choice = 0;
    while (choice != 4) {
        cout << "\n=== Traveler's Hotel Rating System ===\n";
        cout << "1. Traveler Profile (View All)\n";
        cout << "2. Property Deep-Dive (Search by Hotel)\n";
        cout << "3. Top-Pick Matcher (Search by User Budget)\n";
        cout << "4. Exit & Save\n";
        cout << "Enter choice: ";
        cin >> choice;

        if (choice == 1) {
            for (int i = 0; i < travelerCount; i++) {
                travelers[i].displayProfile();
            }
        } 
        else if (choice == 2) {
            string hotelQuery;
            cout << "Enter Hotel Name: ";
            cin >> hotelQuery;
            generateHotelReport(hotelQuery, travelers, travelerCount);
        } 
        else if (choice == 3) {
            string userQuery;
            cout << "Enter Traveler Username: ";
            cin >> userQuery;
            
            bool userFound = false;
            for(int i = 0; i < travelerCount; i++) {
                if (travelers[i].getUsername() == userQuery) {
                    travelers[i].findTopPick(travelers, travelerCount);
                    userFound = true;
                    break;
                }
            }
            if (!userFound) {
                cout << "User not found.\n";
            }
        }
    }

    // --- ONE-TIME I/O: WRITE AT TERMINATION ---
    ofstream outFile("Output_Summary.txt");
    if (outFile.is_open()) {
        outFile << "--- System Run Completed ---\n";
        outFile << "Total Travelers: " << travelerCount << "\n";
        for (int i = 0; i < travelerCount; i++) {
            outFile << travelers[i].getUsername() << " authored " << travelers[i].getReviewCount() << " reviews.\n";
        }
        outFile.close();
        cout << "\nData successfully saved to Output_Summary.txt.\nExiting...\n";
    }

    return 0;
}