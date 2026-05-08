#include <iostream>
#include <fstream>
#include <string>
#include "Member.h"
#include "Review.h"

using namespace std;

// Friend Function Implementation
void topReviewersAnalytics(Member members[], int count) {
    cout << "\n=== Top Reviewers Analytics ===" << endl;
    if (count == 0) {
        cout << "No members found." << endl;
        return;
    }
    
    cout << "All Members List:" << endl;
    for (int i = 0; i < count; i++) {
        cout << "- " << members[i].getName() << " (" << members[i].getId() 
             << ") - Member Type: " << members[i].getMemberType() 
             << " | Points: " << members[i].userPoint << endl;
    }
    cout << "----------------------------------------" << endl;

    // Utilize overloaded operator> for Member
    Member mostLoyal = members[0];
    for (int i = 1; i < count; i++) {
        if (members[i] > mostLoyal) { // uses overloaded operator
            mostLoyal = members[i];
        }
    }
    
    cout << "Member(s) with the highest points (" << mostLoyal.userPoint << "):" << endl;
    for (int i = 0; i < count; i++) {
        if (members[i].userPoint == mostLoyal.userPoint) {
            cout << "- " << members[i].getName() << " (" << members[i].getId() 
                 << ") - Member Type: " << members[i].getMemberType() 
                 << " | Points: " << members[i].userPoint << endl;
        }
    }

    cout << "========================================" << endl;
}

int main() {
    const int MAX_MEMBERS = 100;
    Member members[MAX_MEMBERS];
    int memberCount = 0;

    // --- READ INPUT FILES EXACTLY ONCE AT START-UP ---

    // 1. Read Users
    ifstream userFile("users.txt");
    if (userFile.is_open()) {
        string line;
        while (getline(userFile, line)) {
            if (line.empty()) continue;
            
            string id, name, state, email, memberType, pointsStr;
            size_t pos = 0, nextPos = 0;
            
            // Strict tab-separated parser using string operations
            nextPos = line.find('\t', pos);
            id = line.substr(pos, nextPos - pos);
            if (nextPos != string::npos) pos = nextPos + 1;
            
            nextPos = line.find('\t', pos);
            name = line.substr(pos, nextPos - pos);
            if (nextPos != string::npos) pos = nextPos + 1;
            
            nextPos = line.find('\t', pos);
            state = line.substr(pos, nextPos - pos);
            if (nextPos != string::npos) pos = nextPos + 1;
            
            nextPos = line.find('\t', pos);
            email = line.substr(pos, nextPos - pos);
            if (nextPos != string::npos) pos = nextPos + 1;
            
            nextPos = line.find('\t', pos);
            memberType = line.substr(pos, nextPos - pos);
            if (nextPos != string::npos) pos = nextPos + 1;
            
            pointsStr = line.substr(pos);
            
            int points = 0;
            try { 
                if (!pointsStr.empty()) points = stoi(pointsStr); 
            } catch (...) {}
            
            if (memberCount < MAX_MEMBERS && !id.empty()) {
                members[memberCount++] = Member(id, name, state, email, memberType, points);
            }
        }
        userFile.close();
    } else {
        cout << "Warning: Could not open users.txt" << endl;
    }

    // 2. Read Reviews
    ifstream reviewFile("reviews.txt");
    if (reviewFile.is_open()) {
        string line;
        while (getline(reviewFile, line)) {
            if (line.empty()) continue;
            
            string id, ratingStr, reviewText, hotelName;
            size_t pos = 0, nextPos = 0;
            
            // Strict tab-separated parser using string operations
            nextPos = line.find('\t', pos);
            id = line.substr(pos, nextPos - pos);
            if (nextPos != string::npos) pos = nextPos + 1;
            
            nextPos = line.find('\t', pos);
            ratingStr = line.substr(pos, nextPos - pos);
            if (nextPos != string::npos) pos = nextPos + 1;
            
            nextPos = line.find('\t', pos);
            reviewText = line.substr(pos, nextPos - pos);
            if (nextPos != string::npos) pos = nextPos + 1;
            
            hotelName = line.substr(pos);
            
            int rating = 0;
            try { 
                if (!ratingStr.empty()) rating = stoi(ratingStr); 
            } catch (...) {}
            
            Member* m = Member::findMemberByID(members, memberCount, id);
            if (m != nullptr) {
                m->addReview(Review(id, rating, reviewText, hotelName));
            }
        }
        reviewFile.close();
    } else {
        cout << "Warning: Could not open reviews.txt" << endl;
    }


    // --- MENU LOOP ---
    int choice = 0;
    while (choice != 5) {
        cout << "\n--- Hotel Review System ---" << endl;
        cout << "1. Property Deep-Dive" << endl;
        cout << "2. Traveler Profile" << endl;
        cout << "3. Top-Pick Matcher" << endl;
        cout << "4. Top Reviewers Analytics" << endl;
        cout << "5. Exit" << endl;
        cout << "Enter choice: ";
        
        if (!(cin >> choice)) {
            cin.clear();
            cin.ignore(10000, '\n');
            cout << "Invalid input. Please enter a number." << endl;
            continue;
        }
        cin.ignore(10000, '\n'); // clear the rest of the input buffer

        if (choice == 1) {
            cout << "Enter Hotel Name: ";
            string hotel;
            getline(cin, hotel);
            Member::propertyDeepDive(members, memberCount, hotel);
        } else if (choice == 2) {
            cout << "Enter Traveler ID: ";
            string tid;
            getline(cin, tid);
            Member* m = Member::findMemberByID(members, memberCount, tid);
            if (m) {
                m->displayProfile();
                m->displayAuthoredReviews();
            } else {
                cout << "Traveler not found." << endl;
            }
        } else if (choice == 3) {
            Member::topPickMatcher(members, memberCount);
        } else if (choice == 4) {
            topReviewersAnalytics(members, memberCount);
        } else if (choice == 5) {
            cout << "Exiting..." << endl;
        } else {
            cout << "Invalid choice. Please try again." << endl;
        }
    }

    return 0;
}
