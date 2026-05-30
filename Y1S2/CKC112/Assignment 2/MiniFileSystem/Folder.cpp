#include "Folder.h"
#include <iostream>

Folder::Folder(const std::string& name, Folder* parent)
    : name(name), parent(parent) {}

Folder::~Folder() {
    // Recursive cleanup of dynamic memory on heap
    for (Folder* sub : subfolders) {
        delete sub; // Deleting calls subfolder's destructor recursively
    }
    subfolders.clear();
}

std::string Folder::getName() const {
    return name;
}

Folder* Folder::getParent() const {
    return parent;
}

const std::vector<File>& Folder::getFiles() const {
    return files;
}

const std::vector<Folder*>& Folder::getSubfolders() const {
    return subfolders;
}

void Folder::addFile(const File& file) {
    files.push_back(file);
}

void Folder::addSubfolder(Folder* folder) {
    subfolders.push_back(folder);
}

bool Folder::hasFile(const std::string& fullName) const {
    for (const File& file : files) {
        if (file.getFullName() == fullName) {
            return true;
        }
    }
    return false;
}

bool Folder::hasSubfolder(const std::string& folderName) const {
    for (const Folder* sub : subfolders) {
        if (sub->getName() == folderName) {
            return true;
        }
    }
    return false;
}

void Folder::removeFile(const std::string& fullName) {
    for (auto it = files.begin(); it != files.end(); ++it) {
        if (it->getFullName() == fullName) {
            files.erase(it);
            return;
        }
    }
}

void Folder::removeSubfolder(const std::string& folderName) {
    for (auto it = subfolders.begin(); it != subfolders.end(); ++it) {
        if ((*it)->getName() == folderName) {
            delete *it; // Destructor takes care of recursive deletion
            subfolders.erase(it);
            return;
        }
    }
}

void Folder::displayTree(int depth) const {
    if (depth == 0) {
        std::cout << name << std::endl;
    }
    
    std::string indent = "";
    for (int i = 0; i < depth; ++i) {
        indent += " | ";
    }
    
    // Subfolders printed first, triggering displayTree recursively
    for (Folder* sub : subfolders) {
        std::cout << indent << " | " << sub->getName() << std::endl;
        sub->displayTree(depth + 1);
    }
    
    // Files printed after subfolders at same level
    for (const File& file : files) {
        std::cout << indent << " | " << file.getFullName() << std::endl;
    }
}

void Folder::searchFile(const std::string& fullName, const std::string& currentPath, std::vector<std::string>& foundPaths) const {
    for (const File& file : files) {
        if (file.getFullName() == fullName) {
            foundPaths.push_back(currentPath + "/" + file.getFullName());
        }
    }
    for (Folder* sub : subfolders) {
        sub->searchFile(fullName, currentPath + "/" + sub->getName(), foundPaths);
    }
}
