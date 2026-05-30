#ifndef FILE_H
#define FILE_H

#include <string>

class File {
private:
    std::string name;
    std::string extension;

public:
    File(const std::string& name, const std::string& extension);
    
    std::string getName() const;
    std::string getExtension() const;
    std::string getFullName() const; // Combines name + "." + extension
};

#endif // FILE_H
