#ifndef TRAVELER_H
#define TRAVELER_H

#include "User.h"
#include "Review.h"
#include <iostream>
#include <iomanip>

const int MAX_REVIEWS = 50;

class Traveler : public User {
private:
    string membershipLevel;
    int points;
    
    // Composition (Has-A): A primary class must "own" an array of another class
    Review reviews[MAX_REVIEWS]; 
    int reviewCount;

public:
    Traveler() : User(), membershipLevel(""), points(0), reviewCount(0) {}
    Traveler(string userID, string name, string email, string membershipLevel, int points)
        : User(userID, name, email), membershipLevel(membershipLevel), points(points), reviewCount(0) {}

    string getMembershipLevel() const { return membershipLevel; }
    int getPoints() const { return points; }
    int getReviewCount() const { return reviewCount; }

    void setMembershipLevel(string membershipLevel) { this->membershipLevel = membershipLevel; }
    void setPoints(int points) { this->points = points; }

    void addReview(const Review& review) {
        if (reviewCount < MAX_REVIEWS) {
            reviews[reviewCount++] = review;
        } else {
            cout << "Maximum reviews reached for traveler " << name << endl;
        }
    }

    Review getReview(int index) const {
        if (index >= 0 && index < reviewCount) {
            return reviews[index];
        }
        return Review(); // Return empty if out of bounds
    }

    // Logic inside member functions
    void displayProfile() const {
        cout << "========================================" << endl;
        cout << "Traveler Profile: " << name << " (" << userID << ")" << endl;
        cout << "Email: " << email << endl;
        cout << "Membership: " << membershipLevel << " | Points: " << points << endl;
        cout << "Total Authored Reviews: " << reviewCount << endl;
        cout << "========================================" << endl;
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

    // Operator Overloading: Compare loyalty points
    bool operator>(const Traveler& other) const {
        return this->points > other.points;
    }

    // Static member functions to process arrays (satisfies Entity-Centric Lifecycle & Logic Location)
    static void propertyDeepDive(Traveler travelers[], int count, string targetHotel) {
        cout << "\n=== Property Deep-Dive: " << targetHotel << " ===" << endl;
        int matchCount = 0;
        int totalRating = 0;

        for (int i = 0; i < count; i++) {
            for (int j = 0; j < travelers[i].getReviewCount(); j++) {
                Review r = travelers[i].getReview(j);
                if (r.getHotelName() == targetHotel) {
                    cout << "Review by " << travelers[i].getName() << " (" << travelers[i].getMembershipLevel() << "):" << endl;
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

    static void topPickMatcher(Traveler travelers[], int count) {
        // Collect unique hotels and their ratings
        // Since we cannot use std::vector or map, we use parallel fixed-size arrays
        const int MAX_HOTELS = 100;
        string hotelNames[MAX_HOTELS];
        int hotelTotalRatings[MAX_HOTELS] = {0};
        int hotelReviewCounts[MAX_HOTELS] = {0};
        int uniqueHotelCount = 0;

        for (int i = 0; i < count; i++) {
            for (int j = 0; j < travelers[i].getReviewCount(); j++) {
                Review r = travelers[i].getReview(j);
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

    static Traveler* findTravelerByID(Traveler travelers[], int count, string id) {
        for (int i = 0; i < count; i++) {
            if (travelers[i].getUserID() == id) {
                return &travelers[i];
            }
        }
        return nullptr;
    }

    // Friend Functions: allow an external utility to access private class members
    friend void topReviewersAnalytics(Traveler travelers[], int count);
};

#endif
