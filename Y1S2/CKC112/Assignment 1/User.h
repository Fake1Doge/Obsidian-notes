#ifndef USER_H
#define USER_H

#include <string>
#include "Review.h"
#include <iostream>
#include <iomanip>

using namespace std;

const int MAX_REVIEWS = 50;

// Base Class: User
class User {
protected: // Protected so derived classes can access if needed
    string userID;
    string name;
    string email;
    
    // Composition (Has-A): A primary class must "own" an array of another class
    Review reviews[MAX_REVIEWS]; 
    int reviewCount;

public:
    User() : userID(""), name(""), email(""), reviewCount(0) {}
    User(string userID, string name, string email)
        : userID(userID), name(name), email(email), reviewCount(0) {}

    string getUserID() const { return userID; }
    string getName() const { return name; }
    string getEmail() const { return email; }
    int getReviewCount() const { return reviewCount; }

    void setUserID(string userID) { this->userID = userID; }
    void setName(string name) { this->name = name; }
    void setEmail(string email) { this->email = email; }

    void addReview(const Review& review) {
        if (reviewCount < MAX_REVIEWS) {
            reviews[reviewCount++] = review;
        } else {
            cout << "Maximum reviews reached for user " << name << endl;
        }
    }

    Review getReview(int index) const {
        if (index >= 0 && index < reviewCount) {
            return reviews[index];
        }
        return Review(); // Return empty if out of bounds
    }

    void displayAuthoredReviews() const {
        cout << "\n--- Reviews by " << name << " ---" << endl;
        if (reviewCount == 0) {
            cout << "No reviews authored yet." << endl;
        } else {
            for (int i = 0; i < reviewCount; i++) {
                cout << i + 1 << ". ";
                reviews[i].displayReview();
                cout << "---------------------------" << endl;
            }
        }
    }
};

// Derived Class: Member (Inherits from User)
class Member : public User {
private:
    string membershipLevel;
    int points;

public:
    Member() : User(), membershipLevel(""), points(0) {}
    Member(string userID, string name, string email, string membershipLevel, int points)
        : User(userID, name, email), membershipLevel(membershipLevel), points(points) {}

    string getMembershipLevel() const { return membershipLevel; }
    int getPoints() const { return points; }

    void setMembershipLevel(string membershipLevel) { this->membershipLevel = membershipLevel; }
    void setPoints(int points) { this->points = points; }

    void displayProfile() const {
        cout << "========================================" << endl;
        cout << "Member Profile: " << name << " (" << userID << ")" << endl;
        cout << "Email: " << email << endl;
        cout << "Membership: " << membershipLevel << " | Points: " << points << endl;
        cout << "Total Authored Reviews: " << reviewCount << endl;
        cout << "========================================" << endl;
    }

    // Operator Overloading: Compare loyalty points
    bool operator>(const Member& other) const {
        return this->points > other.points;
    }

    // Static member functions to process arrays
    static void propertyDeepDive(Member members[], int count, string targetHotel) {
        cout << "\n=== Property Deep-Dive: " << targetHotel << " ===" << endl;
        int matchCount = 0;
        int totalRating = 0;

        for (int i = 0; i < count; i++) {
            for (int j = 0; j < members[i].getReviewCount(); j++) {
                Review r = members[i].getReview(j);
                if (r.getHotelName() == targetHotel) {
                    cout << "Review by " << members[i].getName() << " (" << members[i].getMembershipLevel() << "):" << endl;
                    cout << "Rating: " << r.getRating() << "/5" << endl;
                    cout << "Comment: " << r.getComment() << endl;
                    cout << "-----------------------------------" << endl;
                    totalRating += r.getRating();
                    matchCount++;
                }
            }
        }

        if (matchCount > 0) {
            double average = static_cast<double>(totalRating) / matchCount;
            cout << "Summary for " << targetHotel << ":" << endl;
            cout << "Total Reviews: " << matchCount << endl;
            cout << "Average Rating: " << fixed << setprecision(1) << average << " / 5.0" << endl;
        } else {
            cout << "No reviews found for hotel: " << targetHotel << endl;
        }
        cout << "=======================================" << endl;
    }

    static void topPickMatcher(Member members[], int count) {
        // Collect unique hotels and their ratings
        const int MAX_HOTELS = 100;
        string hotelNames[MAX_HOTELS];
        int hotelTotalRatings[MAX_HOTELS] = {0};
        int hotelReviewCounts[MAX_HOTELS] = {0};
        int uniqueHotelCount = 0;

        for (int i = 0; i < count; i++) {
            for (int j = 0; j < members[i].getReviewCount(); j++) {
                Review r = members[i].getReview(j);
                string hName = r.getHotelName();
                
                // Check if hotel exists in array
                int hIndex = -1;
                for (int k = 0; k < uniqueHotelCount; k++) {
                    if (hotelNames[k] == hName) {
                        hIndex = k;
                        break;
                    }
                }

                if (hIndex == -1 && uniqueHotelCount < MAX_HOTELS) {
                    // New hotel found
                    hotelNames[uniqueHotelCount] = hName;
                    hotelTotalRatings[uniqueHotelCount] = r.getRating();
                    hotelReviewCounts[uniqueHotelCount] = 1;
                    uniqueHotelCount++;
                } else if (hIndex != -1) {
                    // Existing hotel
                    hotelTotalRatings[hIndex] += r.getRating();
                    hotelReviewCounts[hIndex]++;
                }
            }
        }

        if (uniqueHotelCount == 0) {
            cout << "No reviews available to match top picks." << endl;
            return;
        }

        // Find the highest rated hotel
        double maxAverage = -1.0;
        string topHotel = "";
        int topReviews = 0;

        cout << "\n=== Top-Pick Matcher: Hotel Rankings ===" << endl;
        for (int i = 0; i < uniqueHotelCount; i++) {
            double avg = static_cast<double>(hotelTotalRatings[i]) / hotelReviewCounts[i];
            cout << "Hotel: " << hotelNames[i] << " | Avg Rating: " << fixed << setprecision(1) << avg << " (" << hotelReviewCounts[i] << " reviews)" << endl;
            
            if (avg > maxAverage) {
                maxAverage = avg;
                topHotel = hotelNames[i];
                topReviews = hotelReviewCounts[i];
            }
        }

        cout << "\n*** Highest-Rated Hotel ***" << endl;
        cout << topHotel << " with an average rating of " << maxAverage << " (" << topReviews << " reviews)!" << endl;
        cout << "========================================" << endl;
    }

    static Member* findMemberByID(Member members[], int count, string id) {
        for (int i = 0; i < count; i++) {
            if (members[i].getUserID() == id) {
                return &members[i];
            }
        }
        return nullptr;
    }

    // Friend Functions: allow an external utility to access private class members
    friend void topReviewersAnalytics(Member members[], int count);
};

#endif
