#ifndef FILESYSTEM_H
#define FILESYSTEM_H

#include <string>
#include <vector>
#include "Folder.h"

class FileSystem {
private:
    Folder* root;
    Folder* currentFolder;

    // Internal helpers
    std::vector<std::string> split(const std::string& s, char delim);
    void parseFileName(const std::string& fullName, std::string& name, std::string& ext);
    void loadStructureFromFile(const std::string& filename);

public:
    FileSystem();
    ~FileSystem();

    void run();

    void createFolder(const std::string& name);
    void createFile(const std::string& name, const std::string& extension);
    void displayCurrentFolder() const;
    void displayFullTree() const;
    void searchFile(const std::string& fullName) const;
    void enterFolder(const std::string& name);
    void goBackToParent();
    void deleteFile(const std::string& fullName);
    void deleteFolder(const std::string& name);
    std::string getCurrentPath() const;
};

#endif // FILESYSTEM_H
