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
    string id;
    string name;
    string state;
    string email;
    
    // Composition (Has-A): A primary class must "own" an array of another class
    Review reviews[MAX_REVIEWS]; 
    int reviewCount;

public:
    User() : id(""), name(""), state(""), email(""), reviewCount(0) {}
    User(string id, string name, string state, string email)
        : id(id), name(name), state(state), email(email), reviewCount(0) {}

    string getId() const { return id; }
    string getName() const { return name; }
    string getState() const { return state; }
    string getEmail() const { return email; }
    int getReviewCount() const { return reviewCount; }

    void setId(string id) { this->id = id; }
    void setName(string name) { this->name = name; }
    void setState(string state) { this->state = state; }
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
    string memberType;
    int userPoint;

public:
    Member() : User(), memberType(""), userPoint(0) {}
    Member(string id, string name, string state, string email, string memberType, int userPoint)
        : User(id, name, state, email), memberType(memberType), userPoint(userPoint) {}

    string getMemberType() const { return memberType; }
    int getUserPoint() const { return userPoint; }

    void setMemberType(string memberType) { this->memberType = memberType; }
    void setUserPoint(int userPoint) { this->userPoint = userPoint; }

    void displayProfile() const {
        cout << "========================================" << endl;
        cout << "Member Profile: " << name << " (" << id << ")" << endl;
        cout << "State: " << state << " | Email: " << email << endl;
        cout << "Member Type: " << memberType << " | Points: " << userPoint << endl;
        cout << "Total Authored Reviews: " << reviewCount << endl;
        cout << "========================================" << endl;
    }

    // Operator Overloading: Compare loyalty points
    bool operator>(const Member& other) const {
        return this->userPoint > other.userPoint;
    }

    // Static member functions to process arrays
    static void propertyDeepDive(Member members[], int count, string targetHotel) {
        cout << "\n=== Property Deep-Dive: " << targetHotel << " ===" << endl;
        int matchCount = 0;
        int totalRating = 0;
        Review bestReview;
        bool hasBest = false;

        for (int i = 0; i < count; i++) {
            for (int j = 0; j < members[i].getReviewCount(); j++) {
                Review r = members[i].getReview(j);
                if (r.getHotelName() == targetHotel) {
                    cout << "Review by " << members[i].getName() << " (" << members[i].getMemberType() << "):" << endl;
                    cout << "Rating: " << r.getRating() << "/5" << endl;
                    cout << "Review: " << r.getReview() << endl;
                    cout << "-----------------------------------" << endl;
                    totalRating += r.getRating();
                    matchCount++;
                    
                    // Utilize overloaded operator>
                    if (!hasBest || r > bestReview) {
                        bestReview = r;
                        hasBest = true;
                    }
                }
            }
        }

        if (matchCount > 0) {
            double average = static_cast<double>(totalRating) / matchCount;
            cout << "Summary for " << targetHotel << ":" << endl;
            cout << "Total Reviews: " << matchCount << endl;
            cout << "Average Rating: " << fixed << setprecision(1) << average << " / 5.0" << endl;
            cout << "Highest Individual Rating: " << bestReview.getRating() << "/5 (\"" << bestReview.getReview() << "\")" << endl;
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
            if (members[i].getId() == id) {
                return &members[i];
            }
        }
        return nullptr;
    }

    // Friend Functions: allow an external utility to access private class members
    friend void topReviewersAnalytics(Member members[], int count);
};

#endif
