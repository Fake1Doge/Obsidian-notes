#include "FileSystem.h"
#include "FileSystemException.h"
#include <iostream>
#include <fstream>
#include <sstream>
#include <limits>

FileSystem::FileSystem() {
    root = new Folder("Root", nullptr);
    currentFolder = root;
    loadStructureFromFile("filesystem.txt");
}

FileSystem::~FileSystem() {
    delete root; // Calls ~Folder() to recursively clean up all nested folders
}

std::vector<std::string> FileSystem::split(const std::string& s, char delim) {
    std::vector<std::string> tokens;
    std::string token;
    std::istringstream tokenStream(s);
    while (std::getline(tokenStream, token, delim)) {
        if (!token.empty()) {
            tokens.push_back(token);
        }
    }
    return tokens;
}

void FileSystem::parseFileName(const std::string& fullName, std::string& name, std::string& ext) {
    size_t dotPos = fullName.rfind('.');
    if (dotPos == std::string::npos) {
        name = fullName;
        ext = "";
    } else {
        name = fullName.substr(0, dotPos);
        ext = fullName.substr(dotPos + 1);
    }
}

void FileSystem::loadStructureFromFile(const std::string& filename) {
    std::ifstream file(filename);
    if (!file.is_open()) {
        std::cout << "Initial file " << filename << " not found. Starting with empty Root." << std::endl;
        return;
    }

    std::string line;
    while (std::getline(file, line)) {
        // Strip carriage returns from Windows style line endings
        if (!line.empty() && line.back() == '\r') {
            line.pop_back();
        }
        if (line.empty()) continue;

        if (line.rfind("FOLDER ", 0) == 0) {
            std::string pathStr = line.substr(7);
            std::vector<std::string> pathComponents = split(pathStr, '/');
            
            if (pathComponents.empty() || pathComponents[0] != root->getName()) continue;

            Folder* temp = root;
            for (size_t i = 1; i < pathComponents.size(); ++i) {
                std::string currentDirName = pathComponents[i];
                if (!temp->hasSubfolder(currentDirName)) {
                    Folder* newFolder = new Folder(currentDirName, temp);
                    temp->addSubfolder(newFolder);
                    temp = newFolder;
                } else {
                    for (Folder* sub : temp->getSubfolders()) {
                        if (sub->getName() == currentDirName) {
                            temp = sub;
                            break;
                        }
                    }
                }
            }
        } 
        else if (line.rfind("FILE ", 0) == 0) {
            std::string pathStr = line.substr(5);
            std::vector<std::string> pathComponents = split(pathStr, '/');
            
            if (pathComponents.size() < 2 || pathComponents[0] != root->getName()) continue;

            // Traverse all directories up to the final file's folder
            Folder* temp = root;
            for (size_t i = 1; i < pathComponents.size() - 1; ++i) {
                std::string currentDirName = pathComponents[i];
                if (!temp->hasSubfolder(currentDirName)) {
                    Folder* newFolder = new Folder(currentDirName, temp);
                    temp->addSubfolder(newFolder);
                    temp = newFolder;
                } else {
                    for (Folder* sub : temp->getSubfolders()) {
                        if (sub->getName() == currentDirName) {
                            temp = sub;
                            break;
                        }
                    }
                }
            }

            std::string fullFileName = pathComponents.back();
            std::string name, ext;
            parseFileName(fullFileName, name, ext);

            if (!temp->hasFile(fullFileName)) {
                temp->addFile(File(name, ext));
            }
        }
    }
    file.close();
}

std::string FileSystem::getCurrentPath() const {
    std::vector<std::string> pathComponents;
    Folder* temp = currentFolder;
    while (temp != nullptr) {
        pathComponents.push_back(temp->getName());
        temp = temp->getParent();
    }
    
    std::string path = "";
    for (auto it = pathComponents.rbegin(); it != pathComponents.rend(); ++it) {
        if (path != "") path += "/";
        path += *it;
    }
    return path;
}

void FileSystem::createFolder(const std::string& name) {
    if (name.empty()) {
        throw FileSystemException("Folder name cannot be empty.");
    }
    if (currentFolder->hasSubfolder(name)) {
        throw FileSystemException("Duplicate folder name! Folder '" + name + "' already exists.");
    }
    Folder* newFolder = new Folder(name, currentFolder);
    currentFolder->addSubfolder(newFolder);
    std::cout << "Folder '" << name << "' created successfully." << std::endl;
}

void FileSystem::createFile(const std::string& name, const std::string& extension) {
    if (name.empty()) {
        throw FileSystemException("File name cannot be empty.");
    }
    if (extension.empty()) {
        throw FileSystemException("File extension cannot be empty.");
    }
    std::string fullName = name + "." + extension;
    if (currentFolder->hasFile(fullName)) {
        throw FileSystemException("Duplicate file name! File '" + fullName + "' already exists.");
    }
    currentFolder->addFile(File(name, extension));
    std::cout << "File '" << fullName << "' created successfully." << std::endl;
}

void FileSystem::displayCurrentFolder() const {
    std::cout << "Contents of [" << currentFolder->getName() << "]:" << std::endl;
    
    const auto& subfolders = currentFolder->getSubfolders();
    const auto& files = currentFolder->getFiles();
    
    if (subfolders.empty() && files.empty()) {
        std::cout << "  (empty)" << std::endl;
        return;
    }
    
    for (Folder* sub : subfolders) {
        std::cout << "  [DIR]  " << sub->getName() << std::endl;
    }
    for (const File& file : files) {
        std::cout << "  [FILE] " << file.getFullName() << std::endl;
    }
}

void FileSystem::displayFullTree() const {
    root->displayTree();
}

void FileSystem::searchFile(const std::string& fullName) const {
    if (fullName.empty()) {
        std::cout << "Please enter a valid file name to search." << std::endl;
        return;
    }
    std::vector<std::string> foundPaths;
    root->searchFile(fullName, root->getName(), foundPaths);
    
    if (foundPaths.empty()) {
        std::cout << "File '" << fullName << "' not found." << std::endl;
    } else {
        std::cout << "Found " << foundPaths.size() << " match(es):" << std::endl;
        for (const std::string& path : foundPaths) {
            std::cout << "  " << path << std::endl;
        }
    }
}

void FileSystem::enterFolder(const std::string& name) {
    if (name.empty()) {
        throw FileSystemException("Folder name cannot be empty.");
    }
    for (Folder* sub : currentFolder->getSubfolders()) {
        if (sub->getName() == name) {
            currentFolder = sub;
            std::cout << "Moved to folder '" << name << "'." << std::endl;
            return;
        }
    }
    throw FileSystemException("Folder '" + name + "' does not exist.");
}

void FileSystem::goBackToParent() {
    Folder* parent = currentFolder->getParent();
    if (parent == nullptr) {
        throw FileSystemException("Already at Root. Cannot go back.");
    }
    currentFolder = parent;
    std::cout << "Returned to folder '" << currentFolder->getName() << "'." << std::endl;
}

void FileSystem::deleteFile(const std::string& fullName) {
    if (fullName.empty()) {
        throw FileSystemException("File name cannot be empty.");
    }
    if (!currentFolder->hasFile(fullName)) {
        throw FileSystemException("File '" + fullName + "' does not exist.");
    }
    currentFolder->removeFile(fullName);
    std::cout << "File '" << fullName << "' deleted." << std::endl;
}

void FileSystem::deleteFolder(const std::string& name) {
    if (name.empty()) {
        throw FileSystemException("Folder name cannot be empty.");
    }
    if (!currentFolder->hasSubfolder(name)) {
        throw FileSystemException("Folder '" + name + "' does not exist.");
    }
    currentFolder->removeSubfolder(name);
    std::cout << "Folder '" << name << "' deleted." << std::endl;
}

void FileSystem::run() {
    int choice = 0;
    while (true) {
        std::cout << "\n======================================" << std::endl;
        std::cout << " Current Path: " << getCurrentPath() << std::endl;
        std::cout << "======================================" << std::endl;
        std::cout << "1. Create Folder\n2. Create File\n3. Display Current Folder\n4. Display Full Folder Tree\n5. Search File\n6. Enter Folder\n7. Go Back to Parent Folder\n8. Delete File\n9. Delete Folder\n10. Show Current Path\n11. Exit" << std::endl;
        std::cout << "Enter choice (1-11): ";
        if (!(std::cin >> choice)) {
            std::cout << "Invalid choice." << std::endl;
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            continue;
        }
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        if (choice == 11) break;
        try {
            switch (choice) {
                case 1: {
                    std::string folderName;
                    std::cout << "Enter folder name: ";
                    std::getline(std::cin, folderName);
                    createFolder(folderName);
                    break;
                }
                case 2: {
                    std::string fileName, fileExt;
                    std::cout << "Enter file name: ";
                    std::getline(std::cin, fileName);
                    std::cout << "Enter file extension: ";
                    std::getline(std::cin, fileExt);
                    createFile(fileName, fileExt);
                    break;
                }
                case 3: displayCurrentFolder(); break;
                case 4: displayFullTree(); break;
                case 5: {
                    std::string searchName;
                    std::cout << "Enter file name: ";
                    std::getline(std::cin, searchName);
                    searchFile(searchName);
                    break;
                }
                case 6: {
                    std::string targetFolder;
                    std::cout << "Enter folder name: ";
                    std::getline(std::cin, targetFolder);
                    enterFolder(targetFolder);
                    break;
                }
                case 7: goBackToParent(); break;
                case 8: {
                    std::string deleteFileName;
                    std::cout << "Enter file name: ";
                    std::getline(std::cin, deleteFileName);
                    deleteFile(deleteFileName);
                    break;
                }
                case 9: {
                    std::string deleteFolderName;
                    std::cout << "Enter folder name: ";
                    std::getline(std::cin, deleteFolderName);
                    deleteFolder(deleteFolderName);
                    break;
                }
                case 10: std::cout << "Path: " << getCurrentPath() << std::endl; break;
                default: std::cout << "Invalid choice." << std::endl; break;
            }
        } catch (const FileSystemException& e) {
            std::cout << "Error: " << e.what() << std::endl;
        } catch (const std::exception& e) {
            std::cout << "Unexpected error: " << e.what() << std::endl;
        }
    }
}
