#include "File.h"

File::File(const std::string& name, const std::string& extension)
    : name(name), extension(extension) {}

std::string File::getName() const {
    return name;
}

std::string File::getExtension() const {
    return extension;
}

std::string File::getFullName() const {
    return name + "." + extension;
}
