#ifndef REVIEW_H
#define REVIEW_H

#include <string>
#include <iostream>

using namespace std;

class Review {
private:
    int rating;
    string comment;
    string hotelName;

public:
    Review() : rating(0), comment(""), hotelName("") {}
    Review(int rating, string comment, string hotelName) : rating(rating), comment(comment), hotelName(hotelName) {}

    int getRating() const { return rating; }
    string getComment() const { return comment; }
    string getHotelName() const { return hotelName; }

    void setRating(int rating) { this->rating = rating; }
    void setComment(string comment) { this->comment = comment; }
    void setHotelName(string hotelName) { this->hotelName = hotelName; }

    // Operator Overloading: Compare ratings of two reviews
    bool operator>(const Review& other) const {
        return this->rating > other.rating;
    }
    bool operator<(const Review& other) const {
        return this->rating < other.rating;
    }

    void displayReview() const {
        cout << "Hotel: " << hotelName << " | Rating: " << rating << "/5" << endl;
        cout << "Comment: " << comment << endl;
    }
};

#endif
