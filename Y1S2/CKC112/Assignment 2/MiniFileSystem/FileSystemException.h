#ifndef FILESYSTEMEXCEPTION_H
#define FILESYSTEMEXCEPTION_H

#include <stdexcept>
#include <string>

class FileSystemException : public std::runtime_error {
public:
    explicit FileSystemException(const std::string& message)
        : std::runtime_error(message) {}
};

#endif // FILESYSTEMEXCEPTION_H
