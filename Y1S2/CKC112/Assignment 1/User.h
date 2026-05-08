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
                cout << "----------------------------------------" << endl;
            }
        }
    }
};

#endif
