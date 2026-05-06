#include <iostream>
#include <fstream>
#include <string>
#include "Traveler.h"
#include "Review.h"

using namespace std;

const int MAX_TRAVELERS = 100;

// Friend function implementation (External Utility)
// Accesses private data (points, reviewCount) without breaking encapsulation
void topReviewersAnalytics(Traveler travelers[], int count) {
    cout << "\n=== Analytics: Top Reviewers ===" << endl;
    if (count == 0) {
        cout << "No travelers found." << endl;
        return;
    }

    // Find traveler with most reviews and highest points
    Traveler* mostReviewsTraveler = &travelers[0];
    Traveler* highestPointsTraveler = &travelers[0];

    for (int i = 1; i < count; i++) {
        // Accessing private 'reviewCount' directly due to friend status
        if (travelers[i].reviewCount > mostReviewsTraveler->reviewCount) { 
            mostReviewsTraveler = &travelers[i];
        }
        
        // Using overloaded operator > to compare objects based on points
        if (travelers[i] > *highestPointsTraveler) { 
            highestPointsTraveler = &travelers[i];
        }
    }

    cout << "Traveler with MOST REVIEWS:" << endl;
    cout << mostReviewsTraveler->getName() << " (" << mostReviewsTraveler->reviewCount << " reviews)" << endl;

    cout << "\nTraveler with HIGHEST LOYALTY POINTS:" << endl;
    cout << highestPointsTraveler->getName() << " (" << highestPointsTraveler->points << " points)" << endl;
    cout << "=================================" << endl;
}

// Function to trim whitespace/tabs from ends of strings
string trim(const string& str) {
    size_t first = str.find_first_not_of(" \t\r\n");
    if (string::npos == first) return "";
    size_t last = str.find_last_not_of(" \t\r\n");
    return str.substr(first, (last - first + 1));
}

int main() {
    // Single primary entity object array encapsulating data (Entity-Centric Lifecycle)
    Traveler travelers[MAX_TRAVELERS];
    int travelerCount = 0;

    // --- File Reading: Users.txt ---
    ifstream usersFile("users.txt");
    if (usersFile.is_open()) {
        string line;
        while (getline(usersFile, line) && travelerCount < MAX_TRAVELERS) {
            if (trim(line).empty()) continue;
            
            // Manual string splitting by tab '\t' without sstream
            string fields[5];
            int fieldCount = 0;
            size_t start = 0, end = 0;
            
            while ((end = line.find('\t', start)) != string::npos && fieldCount < 4) {
                fields[fieldCount++] = line.substr(start, end - start);
                start = end + 1;
            }
            if (fieldCount < 5) {
                fields[fieldCount] = line.substr(start);
            }

            string id = trim(fields[0]);
            string name = trim(fields[1]);
            string email = trim(fields[2]);
            string membershipStr = trim(fields[3]);
            string pointsStr = trim(fields[4]);
            
            int points = 0;
            if (!pointsStr.empty()) {
                points = stoi(pointsStr);
            }

            travelers[travelerCount] = Traveler(id, name, email, membershipStr, points);
            travelerCount++;
        }
        usersFile.close();
    } else {
        cout << "Error opening users.txt. Please ensure the file is in the correct directory." << endl;
    }

    // --- File Reading: Reviews.txt ---
    ifstream reviewsFile("reviews.txt");
    if (reviewsFile.is_open()) {
        string line;
        while (getline(reviewsFile, line)) {
            if (trim(line).empty()) continue;

            // Manual string splitting by tab '\t' without sstream
            string fields[4];
            int fieldCount = 0;
            size_t start = 0, end = 0;
            
            while ((end = line.find('\t', start)) != string::npos && fieldCount < 3) {
                fields[fieldCount++] = line.substr(start, end - start);
                start = end + 1;
            }
            if (fieldCount < 4) {
                fields[fieldCount] = line.substr(start);
            }

            string userID = trim(fields[0]);
            string ratingStr = trim(fields[1]);
            string comment = trim(fields[2]);
            string hotelName = trim(fields[3]);

            int rating = 0;
            if (!ratingStr.empty()) {
                rating = stoi(ratingStr);
            }

            // Find matching traveler and add review
            Traveler* t = Traveler::findTravelerByID(travelers, travelerCount, userID);
            if (t != nullptr) {
                Review rev(rating, comment, hotelName);
                t->addReview(rev);
            }
        }
        reviewsFile.close();
    } else {
        cout << "Error opening reviews.txt. Please ensure the file is in the correct directory." << endl;
    }

    // --- Console GUI (Menu System) ---
    int choice = 0;
    while (choice != 5) {
        cout << "\n===================================" << endl;
        cout << "       HOTEL REVIEW SYSTEM       " << endl;
        cout << "===================================" << endl;
        cout << "1. Property Deep-Dive (Search Hotel)" << endl;
        cout << "2. Traveler Profile (Manage Profile)" << endl;
        cout << "3. Top-Pick Matcher (Hotel Rankings)" << endl;
        cout << "4. Top Reviewers Analytics" << endl;
        cout << "5. Exit System" << endl;
        cout << "Enter your choice: ";
        
        if (!(cin >> choice)) {
            cin.clear(); // clear error flag
            cin.ignore(10000, '\n'); // discard invalid input
            continue;
        }

        if (choice == 1) {
            cin.ignore();
            string hName;
            cout << "Enter exact Hotel Name (e.g., Grand Imperial Hotel): ";
            getline(cin, hName);
            // Processing logic happens entirely inside class member functions
            Traveler::propertyDeepDive(travelers, travelerCount, trim(hName));
        } 
        else if (choice == 2) {
            cin.ignore();
            string tID;
            cout << "Enter Traveler UserID (e.g., U001): ";
            getline(cin, tID);
            Traveler* t = Traveler::findTravelerByID(travelers, travelerCount, trim(tID));
            if (t != nullptr) {
                t->displayProfile();
                t->displayAuthoredReviews();
            } else {
                cout << "Traveler not found!" << endl;
            }
        } 
        else if (choice == 3) {
            Traveler::topPickMatcher(travelers, travelerCount);
        }
        else if (choice == 4) {
            // Calls the external utility Friend Function
            topReviewersAnalytics(travelers, travelerCount);
        }
        else if (choice == 5) {
            cout << "Writing to output file and shutting down..." << endl;
            // Write to output file exactly once before termination (One-Time I/O Rule)
            ofstream outFile("SystemReport.txt");
            if (outFile.is_open()) {
                outFile << "=== System Report ===\n";
                outFile << "Total Registered Travelers: " << travelerCount << "\n\n";
                for (int i = 0; i < travelerCount; i++) {
                    outFile << "Traveler: " << travelers[i].getName() << " (" << travelers[i].getUserID() << ")\n";
                    outFile << "Total Reviews: " << travelers[i].getReviewCount() << "\n\n";
                }
                outFile.close();
                cout << "Report successfully written to SystemReport.txt." << endl;
            } else {
                cout << "Error writing output file." << endl;
            }
            cout << "Goodbye!" << endl;
        }
        else {
            cout << "Invalid choice. Please try again." << endl;
        }
    }

    return 0;
}
