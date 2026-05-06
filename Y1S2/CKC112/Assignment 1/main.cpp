#include <iostream>
#include <fstream>
#include <string>
#include "User.h"
#include "Review.h"

using namespace std;

const int MAX_MEMBERS = 100;

// Friend function implementation (External Utility)
// Accesses private data (points) without breaking encapsulation
void topReviewersAnalytics(Member members[], int count) {
    cout << "\n=== Analytics: Top Reviewers ===" << endl;
    if (count == 0) {
        cout << "No members found." << endl;
        return;
    }

    // Find member with most reviews and highest points
    Member* mostReviewsMember = &members[0];
    Member* highestPointsMember = &members[0];

    for (int i = 1; i < count; i++) {
        // Accessing 'reviewCount' (inherited from User) via getter
        if (members[i].getReviewCount() > mostReviewsMember->getReviewCount()) { 
            mostReviewsMember = &members[i];
        }
        
        // Using overloaded operator > to compare objects based on points
        if (members[i] > *highestPointsMember) { 
            highestPointsMember = &members[i];
        }
    }

    cout << "Member with MOST REVIEWS:" << endl;
    cout << mostReviewsMember->getName() << " (" << mostReviewsMember->getReviewCount() << " reviews)" << endl;

    cout << "\nMember with HIGHEST LOYALTY POINTS:" << endl;
    // Using friend access to access private 'points' directly
    cout << highestPointsMember->getName() << " (" << highestPointsMember->points << " points)" << endl;
    cout << "=================================" << endl;
}

// Function to trim whitespace/tabs from ends of strings
string trim(const string& str) {
    size_t first = str.find_first_not_of(" \t\r\n");
    if (string::npos == first) return "";
    size_t last = str.find_last_not_of(" \t\r\n");
    return str.substr(first, (last - first + 1));
}

// Custom string to integer conversion to avoid using stoi
int customStoi(const string& str) {
    int result = 0;
    int sign = 1;
    size_t i = 0;
    
    // Skip leading whitespaces
    while (i < str.length() && (str[i] == ' ' || str[i] == '\t' || str[i] == '\r' || str[i] == '\n')) i++;

    if (i < str.length() && str[i] == '-') {
        sign = -1;
        i++;
    } else if (i < str.length() && str[i] == '+') {
        i++;
    }

    for (; i < str.length(); i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            result = result * 10 + (str[i] - '0');
        } else {
            break; // Stop at first non-digit character
        }
    }
    return result * sign;
}

int main() {
    // Single primary entity object array encapsulating data (Entity-Centric Lifecycle)
    Member members[MAX_MEMBERS];
    int memberCount = 0;

    // --- File Reading: Users.txt ---
    ifstream usersFile("users.txt");
    if (usersFile.is_open()) {
        string line;
        while (getline(usersFile, line) && memberCount < MAX_MEMBERS) {
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
                points = customStoi(pointsStr);
            }

            members[memberCount] = Member(id, name, email, membershipStr, points);
            memberCount++;
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

            // Find matching member and add review
            Member* m = Member::findMemberByID(members, memberCount, userID);
            if (m != nullptr) {
                Review rev(rating, comment, hotelName);
                m->addReview(rev);
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
        cout << "2. Member Profile (Manage Profile)" << endl;
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
            Member::propertyDeepDive(members, memberCount, trim(hName));
        } 
        else if (choice == 2) {
            cin.ignore();
            string tID;
            cout << "Enter Member UserID (e.g., U001): ";
            getline(cin, tID);
            Member* m = Member::findMemberByID(members, memberCount, trim(tID));
            if (m != nullptr) {
                m->displayProfile();
                m->displayAuthoredReviews();
            } else {
                cout << "Member not found!" << endl;
            }
        } 
        else if (choice == 3) {
            Member::topPickMatcher(members, memberCount);
        }
        else if (choice == 4) {
            // Calls the external utility Friend Function
            topReviewersAnalytics(members, memberCount);
        }
        else if (choice == 5) {
            cout << "Writing to output file and shutting down..." << endl;
            // Write to output file exactly once before termination (One-Time I/O Rule)
            ofstream outFile("SystemReport.txt");
            if (outFile.is_open()) {
                outFile << "=== System Report ===\n";
                outFile << "Total Registered Members: " << memberCount << "\n\n";
                for (int i = 0; i < memberCount; i++) {
                    outFile << "Member: " << members[i].getName() << " (" << members[i].getUserID() << ")\n";
                    outFile << "Total Reviews: " << members[i].getReviewCount() << "\n\n";
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
