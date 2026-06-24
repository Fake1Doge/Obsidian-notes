## 1. File.h
```cpp
#ifndef FILE_H
#define FILE_H

#include <string>

using namespace std;

class File {
private:
    string name;
    string extension;

public:
    File(string name, string extension);
    string getName() const;
    string getExtension() const;
    string getFullName() const;
};

#endif

```
## 2. File.cpp
```cpp
#include "File.h"

using namespace std;

File::File(string name, string extension) : name(name), extension(extension) {}

string File::getName() const { return name; }
string File::getExtension() const { return extension; }
string File::getFullName() const { return name + "." + extension; }

```
## 3. Folder.h
```cpp
#ifndef FOLDER_H
#define FOLDER_H

#include <string>
#include <vector>
#include "File.h"

using namespace std;

class Folder {
private:
    string name;
    Folder* parent;
    vector<File> files;
    vector<Folder*> subfolders;

public:
    Folder(string folderName, Folder* parentFolder);
    ~Folder();

    string getName() const;
    Folder* getParent() const;
    const vector<File>& getFiles() const;
    const vector<Folder*>& getSubfolders() const;

    void addFile(File file);
    void addSubfolder(Folder* folder);

    bool hasFile(string fullName) const;
    bool hasSubfolder(string folderName) const;

    Folder* findSubfolder(string folderName) const;

    void removeFile(string fullName);
    void removeSubfolder(string folderName);

    void displayTree(string prefix = "") const;
    void searchFileRecursive(string fileName, string currentPath, bool& found) const;
    void cleanupRecursive();
};

#endif

```
## 4. Folder.cpp
```cpp
#include "Folder.h"
#include <iostream>
#include <string>
#include <vector>

using namespace std;

Folder::Folder(string folderName, Folder* parentFolder) {
    name = folderName;
    parent = parentFolder;
}

Folder::~Folder() {
    cleanupRecursive();
}

string Folder::getName() const { return name; }
Folder* Folder::getParent() const { return parent; }
const vector<File>& Folder::getFiles() const { return files; }
const vector<Folder*>& Folder::getSubfolders() const { return subfolders; }

void Folder::addFile(File file) {
    if (hasFile(file.getFullName())) {
        throw string("Duplicate file name error: A file named '" + file.getFullName() + "' already exists.");
    }
    files.push_back(file);
}

void Folder::addSubfolder(Folder* folder) {
    if (hasSubfolder(folder->getName())) {
        throw string("Duplicate folder name error: A folder named '" + folder->getName() + "' already exists.");
    }
    subfolders.push_back(folder);
}

bool Folder::hasFile(string fullName) const {
    for (const File& file : files) {
        if (file.getFullName() == fullName) {
            return true;
        }
    }
    return false;
}

bool Folder::hasSubfolder(string folderName) const {
    for (const Folder* sub : subfolders) {
        if (sub->getName() == folderName) {
            return true;
        }
    }
    return false;
}

void Folder::removeFile(string fullName) {
    int index = -1;
    for (int i = 0; i < files.size(); i++) {
        if (files[i].getFullName() == fullName) {
            index = i;
            break;
        }
    }
    if (index != -1) {
        files.erase(files.begin() + index);
    } else {
        throw string("Error: File '" + fullName + "' not found.");
    }
}

void Folder::removeSubfolder(string folderName) {
    int index = -1;
    for (int i = 0; i < subfolders.size(); i++) {
        if (subfolders[i]->getName() == folderName) {
            index = i;
            break;
        }
    }
    if (index != -1) {
        Folder* folderToDelete = subfolders[index];
        subfolders.erase(subfolders.begin() + index);
        delete folderToDelete;
    } else {
        throw string("Error: Folder '" + folderName + "' not found.");
    }
}

void Folder::displayTree(string prefix) const {
    cout << name << "/\n";

    int numSubfolders = subfolders.size();
    int numFiles = files.size();
    int totalItems = numSubfolders + numFiles;
    int currentItemIndex = 0;

    for (Folder* sub : subfolders) {
        currentItemIndex++;
        bool isLast = (currentItemIndex == totalItems);

        cout << prefix << (isLast ? "└── " : "├── ");

        sub->displayTree(prefix + (isLast ? "    " : "│   "));
    }

    for (const File& file : files) {
        currentItemIndex++;
        bool isLast = (currentItemIndex == totalItems);

        cout << prefix << (isLast ? "└── " : "├── ") << file.getFullName() << "\n";
    }
}

void Folder::searchFileRecursive(string fileName, string currentPath, bool& found) const {
    string myPath = currentPath + name + "/";

    for (const File& file : files) {
        if (file.getFullName() == fileName) {
            cout << "Found: " << myPath << file.getFullName() << "\n";
            found = true;
        }
    }
    for (Folder* sub : subfolders) {
        sub->searchFileRecursive(fileName, myPath, found);
    }
}

void Folder::cleanupRecursive() {
    for (Folder* sub : subfolders) {
        delete sub;
    }
    subfolders.clear();
    files.clear();
}

```
## 5. FileSystem.h
```cpp
#ifndef FILESYSTEM_H
#define FILESYSTEM_H

#include "Folder.h"
#include <string>
#include <vector>

class FileSystem {
private:
    Folder* root;
    Folder* currentFolder;

    void parseAndBuildStructure(string type, string pathStr);

public:
    FileSystem();
    ~FileSystem();

    void loadFromFile(string filename);
    void createFolder(string folderName);
    void createFile(string name, string ext);
    void displayCurrentFolder() const;
    void displayFullTree() const;
    void searchFile(string fileName) const;
    void enterFolder(string folderName);
    void goBackToParent();
    void deleteFile(string fullName);
    void deleteFolder(string folderName);
    void showCurrentPath() const;

    void runMenu();
};

#endif

```
## 6. FileSystem.cpp
```cpp
#include "FileSystem.h"
#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

FileSystem::FileSystem() {
    root = new Folder("Root", nullptr);
    currentFolder = root;
}

FileSystem::~FileSystem() {
    delete root;
}

void FileSystem::loadFromFile(string filename) {
    ifstream file(filename);
    if (!file.is_open()) {
        cout << "[Warning] " << filename << " not found. Starting clean.\n";
        return;
    }

    string type, pathStr;
    int lineNum = 0;
    while (file >> type >> pathStr) {
        try {
            lineNum++;
            parseAndBuildStructure(type, pathStr);
        } catch (...) {
            cout << "[Warning] Line " << lineNum << " in " << filename << "is corrupted and skipped.\n";
        }
    }
    file.close();
    cout << "Initial file structure loaded from " << filename << ".\n";
}

void FileSystem::parseAndBuildStructure(string type, string pathStr) {
    vector<string> pathSegments;
    string remaining = pathStr;
    int pos = remaining.find('/');

    while (pos != -1) {
        string piece = remaining.substr(0, pos);
        if (piece.length() > 0) pathSegments.push_back(piece);
        remaining = remaining.substr(pos + 1);
        pos = remaining.find('/');
    }
    if (remaining.length() > 0) {
        pathSegments.push_back(remaining);
    }

    if (pathSegments.size() == 0 || pathSegments[0] != "Root") return;

    Folder* traverseNode = root;
    int limit = pathSegments.size();
    if (type == "FILE") {
        limit = pathSegments.size() - 1;
    }

    for (int i = 1; i < limit; i++) {
        if (traverseNode->hasSubfolder(pathSegments[i])) {
            traverseNode = traverseNode->findSubfolder(pathSegments[i]);
        } else {
            Folder* newBox = new Folder(pathSegments[i], traverseNode);
            traverseNode->addSubfolder(newBox);
            traverseNode = newBox;
        }
    }

    if (type == "FILE" && pathSegments.size() >= 2) {
        string fileWithExt = pathSegments[pathSegments.size() - 1];
        int dotPos = fileWithExt.find('.');
        string fName = fileWithExt;
        string fExt = "txt";

        if (dotPos != -1) {
            fName = fileWithExt.substr(0, dotPos);
            fExt = fileWithExt.substr(dotPos + 1);
        }

        if (!traverseNode->hasFile(fileWithExt)) {
            traverseNode->addFile(File(fName, fExt));
        }
    }
}

void FileSystem::createFolder(string folderName) {
    if (folderName.length() == 0) throw string("Folder name cannot be empty.");
    Folder* newFolder = new Folder(folderName, currentFolder);
    try {
        currentFolder->addSubfolder(newFolder);
    } catch (...) {
        delete newFolder;
        throw;
    }
}

void FileSystem::createFile(string name, string ext) {
    if (name.length() == 0) throw string("File name cannot be empty.");
    if (ext.length() == 0) throw string("Extension cannot be empty.");
    currentFolder->addFile(File(name, ext));
}

void FileSystem::displayCurrentFolder() const {
    cout << "\n--- Current Folder: " << currentFolder->getName() << " ---\n";
    cout << "[Subfolders]:\n";
    for (Folder* sub : currentFolder->getSubfolders()) {
        cout << "  " << sub->getName() << "/\n";
    }
    cout << "[Files]:\n";
    for (const File& file : currentFolder->getFiles()) {
        cout << "  " << file.getFullName() << "\n";
    }
}

void FileSystem::displayFullTree() const {
    cout << "\n--- Full Hierarchical Folder Tree ---\n";
    root->displayTree();
}

void FileSystem::searchFile(string fileName) const {
    cout << "\nSearching globally for '" << fileName << "':\n";
    bool found = false;
    root->searchFileRecursive(fileName, "", found);
    if (!found) {
        cout << "No file matching '" << fileName << "' discovered.\n";
    }
}

void FileSystem::enterFolder(string folderName) {
    Folder* target = currentFolder->findSubfolder(folderName);
    if (target == nullptr) {
        throw string("Navigation Failure: Directory '" + folderName + "' does not exist.");
    }
    currentFolder = target;
}

void FileSystem::goBackToParent() {
    if (currentFolder == root) {
        throw string("Navigation Limit: Already at Root layer. Cannot step backwards.");
    }
    currentFolder = currentFolder->getParent();
}

void FileSystem::deleteFile(string fullName) {
    try {
        currentFolder->removeFile(fullName);
        cout << "File '" << fullName << "' successfully deleted.\n";
    } catch (const string& errorMsg) {
        throw;
    }
}

void FileSystem::deleteFolder(string folderName) {
    try {
        currentFolder->removeSubfolder(folderName);
        cout << "Folder '" << folderName << "' and all its contents deleted successfully.\n";
    } catch (const string& errorMsg) {
        throw;
    }
}

void FileSystem::showCurrentPath() const {
    vector<string> pathParts;
    Folder* temp = currentFolder;
    while (temp != nullptr) {
        pathParts.insert(pathParts.begin(), temp->getName());
        temp = temp->getParent();
    }
    cout << "Current Path: ";
    for (int i = 0; i < pathParts.size(); i++) {
        cout << pathParts[i];
        if (i < pathParts.size() - 1) {
            cout << "/";
        }
    }
    cout << "\n";
}

void FileSystem::runMenu() {
    int choice = 0;
    while (choice != 11) {
        cout << "\n===============================\n";
        cout << "   MINI FILE SYSTEM EXPLORER   \n";
        cout << "===============================\n";
        cout << "1. Create Folder\n" << "2. Create File\n" << "3. Display Current Folder\n" << "4. Display Full Folder Tree\n"
                << "5. Search File\n" << "6. Enter Folder\n" << "7. Go Back to Parent Folder\n" << "8. Delete File\n"
                << "9. Delete Folder\n" << "10. Show Current Path\n" << "11. Exit\n";
        cout << "Choose option (1-11): ";

        if (!(cin >> choice)) {
            cout << "Invalid entry. Please input a numbers.\n";
            cin.clear();
            string junk;
            getline(cin, junk);
            continue;
        }
        string discard;
        getline(cin, discard);

        try {
            switch (choice) {
                case 1: {
                    string fName;
                    cout << "Enter folder name: ";
                    getline(cin, fName);
                    createFolder(fName);
                    cout << "Folder created successfully.\n";
                    break;
                }
                case 2: {
                    string fName, fExt;
                    cout << "Enter file name (without extension): ";
                    getline(cin, fName);
                    cout << "Enter extension: ";
                    getline(cin, fExt);
                    createFile(fName, fExt);
                    cout << "File created successfully.\n";
                    break;
                }
                case 3:
                    displayCurrentFolder();
                    break;
                case 4:
                    displayFullTree();
                    break;
                case 5: {
                    string fTarget;
                    cout << "Enter filename to locate (with extension): ";
                    getline(cin, fTarget);
                    searchFile(fTarget);
                    break;
                }
                case 6: {
                    string fTarget;
                    cout << "Enter target subfolder name: ";
                    getline(cin, fTarget);
                    enterFolder(fTarget);
                    break;
                }
                case 7:
                    goBackToParent();
                    cout << "Returned successfully.\n";
                    break;
                case 8: {
                    string fTarget;
                    cout << "Enter filename to delete (with extension): ";
                    getline(cin, fTarget);
                    deleteFile(fTarget);
                    break;
                }
                case 9: {
                    string fTarget;
                    cout << "Enter folder name to delete: ";
                    getline(cin, fTarget);
                    deleteFolder(fTarget);
                    break;
                }
                case 10:
                    showCurrentPath();
                    break;
                case 11:
                    cout << "Exiting terminal session. Goodbye!\n";
                    break;
                default:
                    cout << "Choice out of bounds.\n";
            }
        } catch (string errorMsg) {
            cout << "\n[ERROR] " << errorMsg << "\n";
        } catch (...) {
            cout << "\n[ERROR] An unexpected error occurred.\n";
        }
    }
}

```
## 7. main.cpp
```cpp
#include "FileSystem.h"

using namespace std;

int main() {
    FileSystem fs;
    fs.loadFromFile("filesystem.txt");
    fs.runMenu();
    return 0;
}

```
```

```
#include <string>
#include <vector>
#include "File.h"

using namespace std;

class Folder {
private:
    string name;
    Folder* parent;
    vector<File> files;
    vector<Folder*> subfolders;

public:
    Folder(string folderName, Folder* parentFolder);
    ~Folder();

    string getName() const;
    Folder* getParent() const;
    const vector<File>& getFiles() const;
    const vector<Folder*>& getSubfolders() const;

    void addFile(File file);
    void addSubfolder(Folder* folder);

    bool hasFile(string fullName) const;
    bool hasSubfolder(string folderName) const;

    Folder* findSubfolder(string folderName) const;

    void removeFile(string fullName);
    void removeSubfolder(string folderName);

    void displayTree(string prefix = "") const;
    void searchFileRecursive(string fileName, string currentPath, bool& found) const;
    void cleanupRecursive();
};

#endif

```
## 4. Folder.cpp
```cpp
#include "Folder.h"
#include <iostream>
#include <string>
#include <vector>

using namespace std;

Folder::Folder(string folderName, Folder* parentFolder) {
    name = folderName;
    parent = parentFolder;
}

Folder::~Folder() {
    cleanupRecursive();
}

string Folder::getName() const { return name; }
Folder* Folder::getParent() const { return parent; }
const vector<File>& Folder::getFiles() const { return files; }
const vector<Folder*>& Folder::getSubfolders() const { return subfolders; }

void Folder::addFile(File file) {
    if (hasFile(file.getFullName())) {
        throw string("Duplicate file name error: A file named '" + file.getFullName() + "' already exists.");
    }
    files.push_back(file);
}

void Folder::addSubfolder(Folder* folder) {
    if (hasSubfolder(folder->getName())) {
        throw string("Duplicate folder name error: A folder named '" + folder->getName() + "' already exists.");
    }
    subfolders.push_back(folder);
}

bool Folder::hasFile(string fullName) const {
    for (const File& file : files) {
        if (file.getFullName() == fullName) {
            return true;
        }
    }
    return false;
}

bool Folder::hasSubfolder(string folderName) const {
    for (const Folder* sub : subfolders) {
        if (sub->getName() == folderName) {
            return true;
        }
    }
    return false;
}

void Folder::removeFile(string fullName) {
    int index = -1;
    for (int i = 0; i < files.size(); i++) {
        if (files[i].getFullName() == fullName) {
            index = i;
            break;
        }
    }
    if (index != -1) {
        files.erase(files.begin() + index);
    } else {
        throw string("Error: File '" + fullName + "' not found.");
    }
}

void Folder::removeSubfolder(string folderName) {
    int index = -1;
    for (int i = 0; i < subfolders.size(); i++) {
        if (subfolders[i]->getName() == folderName) {
            index = i;
            break;
        }
    }
    if (index != -1) {
        Folder* folderToDelete = subfolders[index];
        subfolders.erase(subfolders.begin() + index);
        delete folderToDelete;
    } else {
        throw string("Error: Folder '" + folderName + "' not found.");
    }
}

void Folder::displayTree(string prefix) const {
    cout << name << "/\n";

    int numSubfolders = subfolders.size();
    int numFiles = files.size();
    int totalItems = numSubfolders + numFiles;
    int currentItemIndex = 0;

    for (Folder* sub : subfolders) {
        currentItemIndex++;
        bool isLast = (currentItemIndex == totalItems);

        cout << prefix << (isLast ? "└── " : "├── ");

        sub->displayTree(prefix + (isLast ? "    " : "│   "));
    }

    for (const File& file : files) {
        currentItemIndex++;
        bool isLast = (currentItemIndex == totalItems);

        cout << prefix << (isLast ? "└── " : "├── ") << file.getFullName() << "\n";
    }
}

void Folder::searchFileRecursive(string fileName, string currentPath, bool& found) const {
    string myPath = currentPath + name + "/";

    for (const File& file : files) {
        if (file.getFullName() == fileName) {
            cout << "Found: " << myPath << file.getFullName() << "\n";
            found = true;
        }
    }
    for (Folder* sub : subfolders) {
        sub->searchFileRecursive(fileName, myPath, found);
    }
}

void Folder::cleanupRecursive() {
    for (Folder* sub : subfolders) {
        delete sub;
    }
    subfolders.clear();
    files.clear();
}

```
## 5. FileSystem.h
```cpp
#ifndef FILESYSTEM_H
#define FILESYSTEM_H

#include "Folder.h"
#include <string>
#include <vector>

class FileSystem {
private:
    Folder* root;
    Folder* currentFolder;

    void parseAndBuildStructure(string type, string pathStr);

public:
    FileSystem();
    ~FileSystem();

    void loadFromFile(string filename);
    void createFolder(string folderName);
    void createFile(string name, string ext);
    void displayCurrentFolder() const;
    void displayFullTree() const;
    void searchFile(string fileName) const;
    void enterFolder(string folderName);
    void goBackToParent();
    void deleteFile(string fullName);
    void deleteFolder(string folderName);
    void showCurrentPath() const;

    void runMenu();
};

#endif

```
## 6. FileSystem.cpp
```cpp
#include "FileSystem.h"
#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

FileSystem::FileSystem() {
    root = new Folder("Root", nullptr);
    currentFolder = root;
}

FileSystem::~FileSystem() {
    delete root;
}

void FileSystem::loadFromFile(string filename) {
    ifstream file(filename);
    if (!file.is_open()) {
        cout << "[Warning] " << filename << " not found. Starting clean.\n";
        return;
    }

    string type, pathStr;
    int lineNum = 0;
    while (file >> type >> pathStr) {
        try {
            lineNum++;
            parseAndBuildStructure(type, pathStr);
        } catch (...) {
            cout << "[Warning] Line " << lineNum << " in " << filename << "is corrupted and skipped.\n";
        }
    }
    file.close();
    cout << "Initial file structure loaded from " << filename << ".\n";
}

void FileSystem::parseAndBuildStructure(string type, string pathStr) {
    vector<string> pathSegments;
    string remaining = pathStr;
    int pos = remaining.find('/');

    while (pos != -1) {
        string piece = remaining.substr(0, pos);
        if (piece.length() > 0) pathSegments.push_back(piece);
        remaining = remaining.substr(pos + 1);
        pos = remaining.find('/');
    }
    if (remaining.length() > 0) {
        pathSegments.push_back(remaining);
    }

    if (pathSegments.size() == 0 || pathSegments[0] != "Root") return;

    Folder* traverseNode = root;
    int limit = pathSegments.size();
    if (type == "FILE") {
        limit = pathSegments.size() - 1;
    }

    for (int i = 1; i < limit; i++) {
        if (traverseNode->hasSubfolder(pathSegments[i])) {
            traverseNode = traverseNode->findSubfolder(pathSegments[i]);
        } else {
            Folder* newBox = new Folder(pathSegments[i], traverseNode);
            traverseNode->addSubfolder(newBox);
            traverseNode = newBox;
        }
    }

    if (type == "FILE" && pathSegments.size() >= 2) {
        string fileWithExt = pathSegments[pathSegments.size() - 1];
        int dotPos = fileWithExt.find('.');
        string fName = fileWithExt;
        string fExt = "txt";

        if (dotPos != -1) {
            fName = fileWithExt.substr(0, dotPos);
            fExt = fileWithExt.substr(dotPos + 1);
        }

        if (!traverseNode->hasFile(fileWithExt)) {
            traverseNode->addFile(File(fName, fExt));
        }
    }
}

void FileSystem::createFolder(string folderName) {
    if (folderName.length() == 0) throw string("Folder name cannot be empty.");
    Folder* newFolder = new Folder(folderName, currentFolder);
    try {
        currentFolder->addSubfolder(newFolder);
    } catch (...) {
        delete newFolder;
        throw;
    }
}

void FileSystem::createFile(string name, string ext) {
    if (name.length() == 0) throw string("File name cannot be empty.");
    if (ext.length() == 0) throw string("Extension cannot be empty.");
    currentFolder->addFile(File(name, ext));
}

void FileSystem::displayCurrentFolder() const {
    cout << "\n--- Current Folder: " << currentFolder->getName() << " ---\n";
    cout << "[Subfolders]:\n";
    for (Folder* sub : currentFolder->getSubfolders()) {
        cout << "  " << sub->getName() << "/\n";
    }
    cout << "[Files]:\n";
    for (const File& file : currentFolder->getFiles()) {
        cout << "  " << file.getFullName() << "\n";
    }
}

void FileSystem::displayFullTree() const {
    cout << "\n--- Full Hierarchical Folder Tree ---\n";
    root->displayTree();
}

void FileSystem::searchFile(string fileName) const {
    cout << "\nSearching globally for '" << fileName << "':\n";
    bool found = false;
    root->searchFileRecursive(fileName, "", found);
    if (!found) {
        cout << "No file matching '" << fileName << "' discovered.\n";
    }
}

void FileSystem::enterFolder(string folderName) {
    Folder* target = currentFolder->findSubfolder(folderName);
    if (target == nullptr) {
        throw string("Navigation Failure: Directory '" + folderName + "' does not exist.");
    }
    currentFolder = target;
}

void FileSystem::goBackToParent() {
    if (currentFolder == root) {
        throw string("Navigation Limit: Already at Root layer. Cannot step backwards.");
    }
    currentFolder = currentFolder->getParent();
}

void FileSystem::deleteFile(string fullName) {
    try {
        currentFolder->removeFile(fullName);
        cout << "File '" << fullName << "' successfully deleted.\n";
    } catch (const string& errorMsg) {
        throw;
    }
}

void FileSystem::deleteFolder(string folderName) {
    try {
        currentFolder->removeSubfolder(folderName);
        cout << "Folder '" << folderName << "' and all its contents deleted successfully.\n";
    } catch (const string& errorMsg) {
        throw;
    }
}

void FileSystem::showCurrentPath() const {
    vector<string> pathParts;
    Folder* temp = currentFolder;
    while (temp != nullptr) {
        pathParts.insert(pathParts.begin(), temp->getName());
        temp = temp->getParent();
    }
    cout << "Current Path: ";
    for (int i = 0; i < pathParts.size(); i++) {
        cout << pathParts[i];
        if (i < pathParts.size() - 1) {
            cout << "/";
        }
    }
    cout << "\n";
}

void FileSystem::runMenu() {
    int choice = 0;
    while (choice != 11) {
        cout << "\n===============================\n";
        cout << "   MINI FILE SYSTEM EXPLORER   \n";
        cout << "===============================\n";
        cout << "1. Create Folder\n" << "2. Create File\n" << "3. Display Current Folder\n" << "4. Display Full Folder Tree\n"
                << "5. Search File\n" << "6. Enter Folder\n" << "7. Go Back to Parent Folder\n" << "8. Delete File\n"
                << "9. Delete Folder\n" << "10. Show Current Path\n" << "11. Exit\n";
        cout << "Choose option (1-11): ";

        if (!(cin >> choice)) {
            cout << "Invalid entry. Please input a numbers.\n";
            cin.clear();
            string junk;
            getline(cin, junk);
            continue;
        }
        string discard;
        getline(cin, discard);

        try {
            switch (choice) {
                case 1: {
                    string fName;
                    cout << "Enter folder name: ";
                    getline(cin, fName);
                    createFolder(fName);
                    cout << "Folder created successfully.\n";
                    break;
                }
                case 2: {
                    string fName, fExt;
                    cout << "Enter file name (without extension): ";
                    getline(cin, fName);
                    cout << "Enter extension: ";
                    getline(cin, fExt);
                    createFile(fName, fExt);
                    cout << "File created successfully.\n";
                    break;
                }
                case 3:
                    displayCurrentFolder();
                    break;
                case 4:
                    displayFullTree();
                    break;
                case 5: {
                    string fTarget;
                    cout << "Enter filename to locate (with extension): ";
                    getline(cin, fTarget);
                    searchFile(fTarget);
                    break;
                }
                case 6: {
                    string fTarget;
                    cout << "Enter target subfolder name: ";
                    getline(cin, fTarget);
                    enterFolder(fTarget);
                    break;
                }
                case 7:
                    goBackToParent();
                    cout << "Returned successfully.\n";
                    break;
                case 8: {
                    string fTarget;
                    cout << "Enter filename to delete (with extension): ";
                    getline(cin, fTarget);
                    deleteFile(fTarget);
                    break;
                }
                case 9: {
                    string fTarget;
                    cout << "Enter folder name to delete: ";
                    getline(cin, fTarget);
                    deleteFolder(fTarget);
                    break;
                }
                case 10:
                    showCurrentPath();
                    break;
                case 11:
                    cout << "Exiting terminal session. Goodbye!\n";
                    break;
                default:
                    cout << "Choice out of bounds.\n";
            }
        } catch (string errorMsg) {
            cout << "\n[ERROR] " << errorMsg << "\n";
        } catch (...) {
            cout << "\n[ERROR] An unexpected error occurred.\n";
        }
    }
}

```
## 7. main.cpp
```cpp
#include "FileSystem.h"

using namespace std;

int main() {
    FileSystem fs;
    fs.loadFromFile("filesystem.txt");
    fs.runMenu();
    return 0;
}

```
```

```
