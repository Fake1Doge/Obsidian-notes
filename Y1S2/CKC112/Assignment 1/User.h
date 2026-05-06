#ifndef USER_H
#define USER_H

#include <string>

using namespace std;

class User {
protected:
    string userID;
    string name;
    string email;

public:
    User() : userID(""), name(""), email("") {}
    User(string userID, string name, string email) : userID(userID), name(name), email(email) {}

    string getUserID() const { return userID; }
    string getName() const { return name; }
    string getEmail() const { return email; }

    void setUserID(string userID) { this->userID = userID; }
    void setName(string name) { this->name = name; }
    void setEmail(string email) { this->email = email; }
};

#endif
