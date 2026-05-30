#ifndef FOLDER_H
#define FOLDER_H

#include <string>
#include <vector>
#include "File.h"

class Folder {
private:
    std::string name;
    Folder* parent;
    std::vector<File> files;
    std::vector<Folder*> subfolders;

public:
    Folder(const std::string& name, Folder* parent = nullptr);
    ~Folder();

    std::string getName() const;
    Folder* getParent() const;
    const std::vector<File>& getFiles() const;
    const std::vector<Folder*>& getSubfolders() const;

    void addFile(const File& file);
    void addSubfolder(Folder* folder);

    bool hasFile(const std::string& fullName) const;
    bool hasSubfolder(const std::string& folderName) const;

    void removeFile(const std::string& fullName);
    void removeSubfolder(const std::string& folderName);

    // Recursive operations
    void displayTree(int depth = 0) const;
    void searchFile(const std::string& fullName, const std::string& currentPath, std::vector<std::string>& foundPaths) const;
};

#endif // FOLDER_H
