#ifndef REVIEW_H
#define REVIEW_H

#include <string>
#include <iostream>

using namespace std;

class Review {
private:
    string id;
    int rating;
    string review;
    string hotelName;

public:
    Review() : id(""), rating(0), review(""), hotelName("") {}
    Review(string id, int rating, string review, string hotelName) : id(id), rating(rating), review(review), hotelName(hotelName) {}

    string getId() const { return id; }
    int getRating() const { return rating; }
    string getReview() const { return review; }
    string getHotelName() const { return hotelName; }

    void setId(string id) { this->id = id; }
    void setRating(int rating) { this->rating = rating; }
    void setReview(string review) { this->review = review; }
    void setHotelName(string hotelName) { this->hotelName = hotelName; }

    // Operator Overloading: Compare ratings of two reviews
    bool operator>(const Review& other) const {
        return this->rating > other.rating;
    }
    bool operator<(const Review& other) const {
        return this->rating < other.rating;
    }

    void displayReview() const {
        cout << "User ID: " << id << " | Hotel: " << hotelName << " | Rating: " << rating << "/5" << endl;
        cout << "Review: " << review << endl;
    }
};

#endif
