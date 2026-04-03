# CKC112 Object Oriented Programming

> [!abstract] Course Overview
> This course introduces the principles of Object-Oriented Programming (OOP) using C++. It covers abstract data types, structured data (structs), enumerated data types, and the transition to classes and objects. Key concepts include data hiding, encapsulation, constructors, destructors, and UML modelling.

---

## 1. Abstract Data Types (ADT) and Structures

### 1.1 Abstract Data Types
An ADT is a data type that specifies:
- The **values** that can be stored.
- The **operations** that can be done on those values.
- **Abstraction**: A definition that captures general characteristics without details (e.g., an abstract triangle is a 3-sided polygon).
- The user of an ADT does not need to know the implementation details (e.g., how data is stored).

### 1.2 Structured Data (struct)
A `struct` is a C++ construct that allows multiple variables of different types to be grouped together.

**Format:**
```cpp
struct StructName {
    type1 field1;
    type2 field2;
}; // Must have a semicolon after closing brace
```

> [!note] Important Notes on struct
> - The declaration does not allocate memory; it only defines the template.
> - Access members using the **dot operator** (`.`): `student1.gpa = 3.75;`.
> - Cannot compare struct variables directly (`if (bill == william)`); must compare field-by-field.
> - **Nested Structures**: A structure can contain another structure as a member.
> - **Function Arguments**: Structs can be passed to functions by value (slow) or by reference (fast). Use `const &` for read-only access.

### 1.3 Enumerated Data Types (enum)
An `enum` is a programmer-defined data type consisting of named integer constants.

```cpp
enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY };
```
- Internally, the compiler assigns integers starting at 0 (MONDAY = 0, TUESDAY = 1, etc.).
- **Strongly Typed enums** (C++11): Use `enum class` to prevent name conflicts in the same scope.
- **Casting**: You cannot directly assign an int to an enum; you must use `static_cast\<Day\>(3)`.

---

## 2. Introduction to Classes

### 2.1 Procedural vs. Object-Oriented Programming
- **Procedural Programming**: Focuses on the process/actions (functions) that occur in a program.
- **Object-Oriented Programming**: Based on the data and the functions that operate on it. Objects are instances of ADTs.

> [!warning] Limitations of Procedural Programming
> Programs based on complex function hierarchies are difficult to understand, maintain, and extend. If data structures change, many functions must also be changed.

### 2.2 Classes and Objects
- **Class**: A "blueprint" that describes an object (like a house plan).
- **Object**: An "instance" of a class (like a house built from the plan).
- **Attributes**: The data members of a class.
- **Methods/Behaviors**: The member functions of a class.

### 2.3 Access Specifiers
Used to control access to class members:
- **public**: Can be accessed by functions outside the class. Defines the **public interface**.
- **private**: Can only be called by/accessed by members of the same class. This facilitates **data hiding**.
- *Default*: If not specified, the default access for a class is `private`.

---

## 3. Class Implementation Details

### 3.1 Accessors and Mutators
- **Mutator (Setter)**: A member function that stores or changes a value in a private member variable.
- **Accessor (Getter)**: A function that retrieves a value from a private member variable. Accessors should be marked `const`.

### 3.2 Member Function Definition
Functions can be defined:
1. **Inline**: Defined inside the class declaration.
2. **Outside**: Declared in the class and defined using the **scope resolution operator** (`::`).

```cpp
void Rectangle::setWidth(double w) {
    width = w;
}
```

### 3.3 Constructors and Destructors
- **Constructor**: Automatically called when an object is created. Has no return type and shares the name of the class. Used to initialize objects.
    - **Default Constructor**: Takes no arguments.
    - **Overloading**: A class can have multiple constructors with different parameter lists.
- **Destructor**: Automatically called when an object is destroyed. Name is `~ClassName`. Only one destructor per class (cannot be overloaded).

### 3.4 Pointers and Dynamic Allocation
- **Pointers to Objects**: `Rectangle *rPtr = \&rect;`.
- **Member Access**: Use the arrow operator (`-\>`) for pointers: `rPtr-\>getLength();`.
- **Dynamic Allocation**: `Rectangle *r = new Rectangle(10, 20);` ... `delete r;`.

---

## 4. Unified Modeling Language (UML)

UML provides standard diagrams for depicting object-oriented systems.

### 4.1 UML Class Diagrams
Represented as a box with three sections:
1. **Top**: Class Name.
2. **Middle**: Attributes (Member variables).
3. **Bottom**: Methods (Member functions).

### 4.2 Notation Standards
- **Access**: `+` for public, `-` for private.
- **Data Types**: `variableName : type` (e.g., `- width : double`).
- **Functions**: `functionName(parameterName : type) : returnType`.
- **Constructors/Destructors**: No return type listed.

---

> [!tip] Extra Notes: Avoiding Stale Data
> To avoid **stale data**, it is better to calculate values (like the area of a rectangle) within a member function rather than storing them in a variable that might not be updated when its dependencies (width/length) change.
