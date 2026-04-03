# CKC112 Object Oriented Programming

---

## Part 1: Structured Data

## 1. Abstract Data Types

- A data type that specifies:
    - values that can be stored
    - operations that can be done on the values
- User of an abstract data type does not need to know the implementation of the data type, e.g., how the data is stored.
- ADTs are created by programmers.

### 1.1 Abstraction and Data Types
- **Abstraction**: a definition that captures general characteristics without details.
    - Example: An abstract triangle is a 3-sided polygon. A specific triangle may be scalene, isosceles, or equilateral.
- **Data Type**: defines the values that can be stored in a variable and the operations that can be performed on it.

## 2. Combining Data into Structures

- **Structure**: C++ construct that allows multiple variables to be grouped together.
- **General Format**:
    ```cpp
    struct \<structName\> {
        type1 field1;
        type2 field2;
        // ...
    };
    ```

### 2.1 Example `struct` Declaration
```cpp
struct Student {
    int studentID;
    string name;
    short yearInSchool;
    double gpa;
};
```
> [!note] Important
> - Must have a semicolon `;` after the closing brace `}`.
> - `struct` names commonly begin with an uppercase letter.
> - Multiple fields of the same type can be in a comma-separated list (e.g., `string name, address;`).

### 2.2 Defining Variables
- A `struct` declaration does not allocate memory or create variables.
- To define variables, use the structure tag as the type name:
    ```cpp
    Student bill;
    ```

## 3. Accessing Structure Members

- Use the **dot (.) operator** to refer to members of `struct` variables:
    ```cpp
    cin \>\> stu1.studentID;
    getline(cin, stu1.name);
    stu1.gpa = 3.75;
    ```
- Member variables can be used in any manner appropriate for their data type.

### 3.1 Displaying a `struct` Variable
To display the contents of a `struct` variable, you must display each field separately using the dot operator. You cannot print the entire struct directly:
```cpp
cout \<\< bill; // won't work
cout \<\< bill.studentID \<\< endl;
cout \<\< bill.name \<\< endl;
```

### 3.2 Comparing `struct` Variables
- Cannot compare `struct` variables directly:
    ```cpp
    if (bill == william) // won't work
    ```
- Instead, you must compare them on a field basis:
    ```cpp
    if (bill.studentID == william.studentID) { ... }
    ```

## 4. Initializing a Structure

- A `struct` variable can be initialized when defined:
    ```cpp
    Student s = {11465, "Joan", 2, 3.75};
    ```
- Can also be initialized member-by-member after definition:
    ```cpp
    s.name = "Joan";
    s.gpa = 3.75;
    ```
- You may initialize only some members, but you cannot skip over members.
- You **cannot** initialize members in the structure declaration itself, since this does not allocate memory.

## 5. Arrays of Structures

- Structures can be defined in arrays.
- They can be used in place of parallel arrays.
    ```cpp
    const int NUM_STUDENTS = 20;
    Student stuList[NUM_STUDENTS];
    ```
- Individual structures are accessible using subscript notation.
- Fields within structures are accessible using dot notation:
    ```cpp
    cout \<\< stuList[5].studentID;
    ```

## 6. Nested Structures

- A structure can contain another structure as a member.
    ```cpp
    struct PersonInfo {
        string name, address, city;
    };

    struct Student {
        int studentID;
        PersonInfo pData;
        short yearInSchool;
        double gpa;
    };
    ```
- Use the dot operator multiple times to refer to fields of nested structures:
    ```cpp
    Student s;
    s.pData.name = "Joanne";
    s.pData.city = "Tulsa";
    ```

## 7. Structures as Function Arguments

- May pass members of `struct` variables to functions:
    ```cpp
    computeGPA(stu.gpa);
    ```
- May pass entire `struct` variables to functions:
    ```cpp
    showData(stu);
    ```
- Can use reference parameter if the function needs to modify the contents of the structure variable.

> [!tip] Extra Notes: Performance
> - Using a **value parameter** for a structure can slow down a program and waste space because it creates a complete copy of the structure.
> - Using a **reference parameter** speeds up the program, but the function may change data in the structure.
> - Using a **`const` reference parameter** allows read-only access to the reference parameter, does not waste space, and is fast.

## 8. Returning a Structure from a Function

- A function can return a `struct`:
    ```cpp
    Student getStudentData(); // prototype
    stu1 = getStudentData();  // call
    ```
- The function must define a local structure for internal use and return it via the `return` statement.

## 9. Using Structured Binding Declarations with Structures

- A **structured binding declaration** defines a set of variables and initializes them with the values that are stored in a structure.
- Also known as *unpacking a structure*. (Introduced in C++ 17).
- **General format**:
    ```cpp
    auto [variable1, variable2, etc...] = structureVar;
    ```
- **Example**:
    ```cpp
    struct Automobile {
        string make;
        int year;
        double mileage;
    };
    Automobile car = {"Porsche", 2020, 12400.0};
    auto [first, second, third] = car;
    
    cout \<\< first \<\< endl; // Displays: Porsche
    ```

## 10. Pointers to Structures

- A structure variable has an address.
- Pointers to structures are variables that can hold the address of a structure:
    ```cpp
    Student *stuPtr;
    ```
- Can use the `&` operator to assign an address:
    ```cpp
    stuPtr = &stu1;
    ```
- A structure pointer can be a function parameter.

### 10.1 Accessing Structure Members via Pointer Variables
- Must use `()` to dereference the pointer variable, not the field within the structure:
    ```cpp
    cout \<\< (*stuPtr).studentID;
    ```
- Alternatively, use the structure pointer operator (arrow operator `-\>`) to eliminate `()` and use clearer notation:
    ```cpp
    cout \<\< stuPtr-\>studentID;
    ```

## 11. Enumerated Data Types

- An enumerated data type is a programmer-defined data type. It consists of values known as **enumerators**, which represent integer constants.
    ```cpp
    enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY };
    ```
- The identifiers (e.g., `MONDAY`, `TUESDAY`) are enumerators. They are not strings, so they are not enclosed in quotes.
- Defining a variable:
    ```cpp
    Day workDay;
    ```
- We may assign any of the enumerators to a variable of the `Day` type:
    ```cpp
    workDay = WEDNESDAY;
    ```

### 11.1 Internals of `enum`
- Think of an enumerator as an integer named constant.
- Internally, the compiler assigns integer values to the enumerators, beginning at 0.
    - MONDAY = 0, TUESDAY = 1, WEDNESDAY = 2, etc.

### 11.2 Assigning and Comparing `enum` Values
- **Assigning an integer to an `enum` variable**: You cannot directly assign an integer value. You must cast the integer:
    ```cpp
    workDay = static_cast\<Day\>(3); // Valid
    // workDay = 3; // Error!
    ```
- **Assigning an enumerator to an `int` variable**: You CAN assign an enumerator to an `int` variable directly:
    ```cpp
    int x = THURSDAY; // assigns 3 to x
    ```
- **Comparing enumerator values**: Can be compared using relational operators (e.g., `if (FRIDAY \> MONDAY)`).

### 11.3 Anonymous Enumerated Types
An anonymous enumerated type does not have a name:
```cpp
enum { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY };
```

### 11.4 Math Operators with `enum` Variables
You can run into problems when trying to perform math operations with `enum` variables:
```cpp
Day day1, day2;
day1 = TUESDAY;
day2 = day1 + 1; // ERROR! Will not work!
```
- The expression `day1 + 1` results in the integer value 2, and you cannot store an `int` in an `enum` variable without casting.
- **Fix**: Use a cast to explicitly convert the result:
    ```cpp
    day2 = static_cast\<Day\>(day1 + 1);
    ```

### 11.5 Using an `enum` to Step through an Array
- Because enumerators are stored as integers, you can use them as array subscripts:
    ```cpp
    sales[MONDAY] = 1525.0;
    ```
- You **cannot** use the `++` operator directly on an `enum` variable in a `for` loop. You must rewrite the loop's update expression using a cast:
    ```cpp
    for (workDay = MONDAY; workDay \<= FRIDAY; workDay = static_cast\<Day\>(workDay + 1)) {
        cout \<\< sales[workDay];
    }
    ```

### 11.6 Strongly Typed enums
- In C++ 11 and later, you can use a **strongly typed enum** (also known as an enum class).
- Allows you to have multiple enumerators in the same scope with the same name.
    ```cpp
    enum class Presidents { MCKINLEY, ROOSEVELT, TAFT };
    enum class VicePresidents { ROOSEVELT, FAIRBANKS, SHERMAN };
    ```
- **Prefix** the enumerator with the name of the `enum`, followed by the `::` operator:
    ```cpp
    Presidents prez = Presidents::ROOSEVELT;
    ```
- Use a cast operator to retrieve the integer value:
    ```cpp
    int x = static_cast\<int\>(Presidents::ROOSEVELT);
    ```
- You can also declare the type and define variables in one statement:
    ```cpp
    enum Car { PORSCHE, FERRARI, JAGUAR } sportsCar;
    ```

---

## Part 2: Introduction to Classes

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
