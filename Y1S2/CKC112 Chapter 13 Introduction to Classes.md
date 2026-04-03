## 1. Procedural and Object-Oriented Programming

- **Procedural Programming**: Focuses on the process/actions that occur in a program.
- **Object-Oriented Programming**: Based on the data and the functions that operate on it. Objects are instances of ADTs (Abstract Data Types) that represent the data and its functions.

> [!warning] Limitations of Procedural Programming
> - If the data structures change, many functions must also be changed.
> - Programs that are based on complex function hierarchies are:
>     - difficult to understand and maintain
>     - difficult to modify and extend
>     - easy to break

## 2. Terminology: Classes and Objects

- **class**: like a `struct` (allows bundling of related variables), but variables and functions in the class can have different properties than in a `struct`.
- **object**: an instance of a `class`, in the same way that a variable can be an instance of a `struct`.
    - A Class is like a blueprint and objects are like houses built from the blueprint.
- **attributes**: members of a class.
- **methods or behaviors**: member functions of a class.

### 2.1 More on Objects
- **data hiding**: restricting access to certain members of an object.
- **public interface**: members of an object that are available outside of the object. This allows the object to provide access to some data and functions without sharing its internal details and design, providing protection from data corruption.

## 3. Introduction to Classes

- Objects are created from a `class`.
- **Format**:
    ```cpp
    class ClassName {
        declaration;
        declaration;
    };
    ```

### 3.1 Access Specifiers
Used to control access to members of the class. Can be listed in any order and appear multiple times in a class.
- `public`: can be accessed by functions outside of the class.
- `private`: can only be called by or accessed by functions that are members of the class.
- If not specified, the default is `private`.

### 3.2 Class Example
```cpp
class Rectangle {
    private:
        double width;
        double length;
    public:
        void setWidth(double);
        void setLength(double);
        double getWidth() const;
        double getLength() const;
        double getArea() const;
};
```

## 4. Class Member Functions

### 4.1 Using `const` With Member Functions
- `const` appearing after the parentheses in a member function declaration specifies that the function will not change any data in the calling object.
    ```cpp
    double getWidth() const;
    ```

### 4.2 Defining a Member Function
- Put the prototype in the class declaration.
- Define the function using the class name and the **scope resolution operator** (`::`).
    ```cpp
    void Rectangle::setWidth(double w) {
        width = w;
    }
    ```

### 4.3 Accessors and Mutators
- **Mutator**: a member function that stores a value in a private member variable, or changes its value in some way.
- **Accessor**: a function that retrieves a value from a private member variable. Accessors do not change an object's data, so they should be marked `const`.

## 5. Defining an Instance of a Class

- An object is an instance of a class. Defined like structure variables:
    ```cpp
    Rectangle r;
    ```
- Access members using the dot operator:
    ```cpp
    r.setWidth(5.2);
    cout \<\< r.getWidth();
    ```
- **Compiler error** if you attempt to access a `private` member using the dot operator.

> [!tip] Extra Notes: Avoiding Stale Data
> - Some data is the result of a calculation (e.g., area of a rectangle is length x width).
> - If we were to use an `area` variable in the `Rectangle` class, its value would be dependent on length and width.
> - If we change length or width without updating area, then `area` would become **stale**.
> - To avoid stale data, it is best to calculate the value of that data within a member function rather than store it in a variable.

## 6. Pointers to Objects

- Can define a pointer to an object:
    ```cpp
    Rectangle *rPtr = nullptr;
    ```
- Can access public members via pointer (using the arrow operator `-\>`):
    ```cpp
    rPtr = &otherRectangle;
    rPtr-\>setLength(12.5);
    cout \<\< rPtr-\>getLength() \<\< endl;
    ```
- **Dynamically Allocating an Object**:
    ```cpp
    Rectangle *rectPtr = new Rectangle;
    rectPtr-\>setWidth(10.0);
    delete rectPtr;
    rectPtr = nullptr;
    ```

## 7. Why Have Private Members?

- Making data members `private` provides data protection.
- Data can be accessed only through `public` functions.
- `public` functions define the class’s public interface. Code outside the class must use the class's public member functions to interact with the object.

## 8. Separating Specification from Implementation

- Place class declaration in a header file that serves as the **class specification file**. Name the file `ClassName.h` (e.g., `Rectangle.h`).
- Place member function definitions in `ClassName.cpp` (e.g., `Rectangle.cpp`). This file should `#include` the class specification file.
- Programs that use the class must `#include` the class specification file, and be compiled and linked with the member function definitions.

## 9. Inline Member Functions

- Member functions can be defined:
    - **inline**: in class declaration.
    - after the class declaration.
- Inline is appropriate for short function bodies:
    ```cpp
    int getWidth() const { return width; }
    ```
- **Tradeoffs – Inline vs. Regular Member Functions**:
    - *Regular functions*: when called, compiler stores return address of call, allocates memory for local variables, etc.
    - *Inline function*: code is copied into program in place of call. Larger executable program, but no function call overhead, hence faster execution.

## 10. Constructors

- Member function that is automatically called when an object is created.
- Purpose is to construct an object.
- Constructor function name is the class name.
- Has **no return type**.

### 10.1 In-Place Initialization
- Using C++11 or later, you can initialize a member variable in its declaration statement, just as you can with a regular variable.
    ```cpp
    class Rectangle {
        private:
            double width = 0.0;
            double length = 0.0;
        // ...
    };
    ```

### 10.2 Default Constructors
- A default constructor is a constructor that takes no arguments.
- If you write a class with **no** constructor at all, C++ will write a default constructor for you (one that does nothing).
- Instantiating a class with no arguments calls the default constructor:
    ```cpp
    Rectangle r;
    ```

### 10.3 Passing Arguments to Constructors
- To create a constructor that takes arguments:
    - indicate parameters in prototype: `Rectangle(double, double);`
    - use parameters in the definition.
- You can pass arguments to the constructor when you create an object:
    ```cpp
    Rectangle r(10, 5);
    ```
- If all of a constructor's parameters have default arguments, then it is a default constructor.
- **Classes with No Default Constructor**: When *all* of a class's constructors require arguments, then the class has NO default constructor. You must pass the required arguments to the constructor when creating an object.

## 11. Destructors

- Member function automatically called when an object is destroyed.
- Destructor name is `~classname` (e.g., `~Rectangle`).
- Has no return type; takes no arguments.
- Only one destructor per class, i.e., it cannot be overloaded.
- If the constructor allocates dynamic memory, the destructor should release it.

> [!note] Constructors, Destructors, and Dynamically Allocated Objects
> - When an object is dynamically allocated with the `new` operator, its constructor executes: `Rectangle *r = new Rectangle(10, 20);`
> - When the object is destroyed, its destructor executes: `delete r;`

## 12. Overloading Constructors

- A class can have more than one constructor.
- Overloaded constructors in a class must have different parameter lists:
    ```cpp
    Rectangle();
    Rectangle(double);
    Rectangle(double, double);
    ```

### 12.1 Constructor Delegation
- In C++ 11, it is possible for one constructor to call another constructor in the same class. This is known as constructor delegation.
- Do not provide more than one default constructor for a class: one that takes no arguments and one that has default arguments for all parameters (will not compile).
- Non-constructor member functions can also be overloaded (must have unique parameter lists).

## 13. Using Private Member Functions

- A `private` member function can only be called by another member function.
- It is used for internal processing by the class, not for use outside of the class.

## 14. Arrays of Objects

- Objects can be the elements of an array:
    ```cpp
    InventoryItem inventory[40];
    ```
- Default constructor for object is used when array is defined.
- Must use initializer list to invoke constructor that takes arguments:
    ```cpp
    InventoryItem inventory[3] = { "Hammer", "Wrench", "Pliers" };
    ```
- If the constructor requires more than one argument, the initializer must take the form of a function call:
    ```cpp
    InventoryItem inventory[3] = { InventoryItem("Hammer", 6.95, 12), ... };
    ```
- Accessing Objects in an Array:
    - Objects are referenced using subscripts.
    - Member functions are referenced using dot notation:
        ```cpp
        inventory[2].setUnits(30);
        ```

## 15. The Unified Modeling Language (UML)

- The UML provides a set of standard diagrams for graphically depicting object-oriented systems.

### 15.1 UML Class Diagram
- A UML diagram for a class has three main sections:
    1. Class name
    2. Member variables
    3. Member functions

### 15.2 UML Notations
- **Access Specification Notation**: Indicate a private member with a minus (`-`) and a public member with a plus (`+`).
- **Data Type Notation**: Place a colon followed by the name of the data type after the name of the variable (`- width : double`).
- **Parameter Type Notation**: Place a colon followed by the name of the data type after the name of the variable (`+ setWidth(w : double)`).
- **Return Type Notation**: Place a colon followed by the name of the data type after the function's parameter list (`+ setWidth(w : double) : void`).
- **Constructors and Destructors**: No return type is listed for constructors or destructors.
