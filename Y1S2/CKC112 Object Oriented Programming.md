# 1. Structured Data

## 1.1 Abstract Data Types
> [!info] Definition: Abstract Data Type (ADT)
> A data type that specifies:
> - values that can be stored
> - operations that can be done on the values

- A user of an abstract data type does not need to know the implementation of the data type (e.g., how the data is stored). 
- ADTs are created by programmers.

> [!info] Definition: Abstraction
> A definition that captures general characteristics without details.
> 
> > [!example] Example: Abstract Triangle
> > An abstract triangle is a 3-sided polygon. A specific triangle may be scalene, isosceles, or equilateral.

> [!info] Definition: Data Type
> Defines the values that can be stored in a variable and the operations that can be performed on it.

## 1.2 Combining Data into Structures
> [!info] Definition: Structure
> C++ construct that allows multiple variables to be grouped together.

**General Format:**
```cpp
struct <structName>
{
    type1 field1;
    type2 field2;
    // ...
};
```

> [!example] Example `struct` Declaration
> ```cpp
> struct Student
> {
>     int studentID;
>     string name;
>     short yearInSchool;
>     double gpa;
> }; // Structure tag is "Student", members are studentID, name, yearInSchool, gpa
> ```

> [!note] Important Notes on `struct` Declarations
> - Must have `;` after the closing `}`.
> - `struct` names commonly begin with an uppercase letter.
> - Multiple fields of the same type can be in a comma-separated list:
>   ```cpp
>   string name,
>          address;
>   ```

### Defining Variables
- A `struct` declaration does not allocate memory or create variables. 
- To define variables, use the structure tag as the type name:
  ```cpp
  Student bill;
  ```

## 1.3 Accessing Structure Members
- Use the dot (`.`) operator to refer to members of `struct` variables:
  ```cpp
  cin >> stu1.studentID;
  getline(cin, stu1.name);
  stu1.gpa = 3.75;
  ```
- Member variables can be used in any manner appropriate for their data type.

> [!warning] Common Mistake: Displaying a `struct` Variable
> To display the contents of a `struct` variable, you must display each field separately using the dot operator.
> ```cpp
> cout << bill; // won't work
> cout << bill.studentID << endl; // Correct
> cout << bill.name << endl; // Correct
> ```

> [!warning] Common Mistake: Comparing `struct` Variables
> You cannot compare `struct` variables directly:
> ```cpp
> if (bill == william) // won't work
> ```
> Instead, must compare on a field basis:
> ```cpp
> if (bill.studentID == william.studentID) // Correct
> ```

## 1.4 Initializing a Structure
- A `struct` variable can be initialized when defined:
  ```cpp
  Student s = {11465, "Joan", 2, 3.75};
  ```
- Can also be initialized member-by-member after definition:
  ```cpp
  s.name = "Joan";
  s.gpa = 3.75;
  ```

> [!note] More on Initializing a Structure
> - May initialize only some members: `Student bill = {14579};`
> - Cannot skip over members: `Student s = {1234, "John", , 2.83}; // illegal`
> - Cannot initialize in the structure declaration, since this does not allocate memory.

## 1.5 Arrays of Structures
- Structures can be defined in arrays.
- Can be used in place of parallel arrays.
  ```cpp
  const int NUM_STUDENTS = 20;
  Student stuList[NUM_STUDENTS];
  ```
- Individual structures accessible using subscript notation.
- Fields within structures accessible using dot notation:
  ```cpp
  cout << stuList[5].studentID;
  ```

## 1.6 Nested Structures
A structure can contain another structure as a member:
```cpp
struct PersonInfo
{
    string name,
           address,
           city;
};

struct Student
{
    int studentID;
    PersonInfo pData;
    short yearInSchool;
    double gpa;
};
```
- **Members of Nested Structures:** Use the dot operator multiple times to refer to fields of nested structures:
  ```cpp
  Student s;
  s.pData.name = "Joanne";
  s.pData.city = "Tulsa";
  ```

## 1.7 Structures as Function Arguments
- May pass members of `struct` variables to functions: `computeGPA(stu.gpa);`
- May pass entire `struct` variables to functions: `showData(stu);`

> [!note] Important Notes on Function Arguments
> - Using a value parameter for a structure can slow down a program and waste space.
> - Using a reference parameter will speed up the program, but the function may change data in the structure.
> - Using a `const` reference parameter allows read-only access to the reference parameter, does not waste space, and increases speed.

> [!example] Example of `const` Reference Parameter
> ```cpp
> void showItem(const InventoryItem &p)
> {
>     cout << "Part Number: " << p.partNum << endl;
> }
> ```

## 1.8 Returning a Structure from a Function
- A function can return a `struct`:
  ```cpp
  Student getStudentData(); // prototype
  stu1 = getStudentData(); // call
  ```
- The function must define a local structure:
  - for internal use
  - for use with the `return` statement

> [!example] Example: Returning a Structure
> ```cpp
> Student getStudentData()
> {
>     Student tempStu;
>     cin >> tempStu.studentID;
>     getline(cin, tempStu.pData.name);
>     // ...
>     return tempStu;
> }
> ```

## 1.9 Using Structured Binding Declarations with Structures
- A structured binding declaration defines a set of variables and initializes them with the values that are stored in a structure.
- This process is known as *unpacking a structure*.
- Can also be used to unpack arrays.
- Structured binding declarations were introduced in C++17.

**General format:**
```cpp
auto [variable1, variable2, etc...] = structureVar;
```

> [!example] Example: Structured Binding
> ```cpp
> struct Automobile
> {
>     string make;
>     int year;
>     double mileage;
> };
> Automobile car = { "Porsche", 2020, 12400.0 };
> auto [first, second, third] = car;
> 
> cout << first << endl;  // Displays: Porsche
> cout << second << endl; // Displays: 2020
> cout << third << endl;  // Displays: 12400.0
> ```

## 1.10 Pointers to Structures
- A structure variable has an address.
- Pointers to structures are variables that can hold the address of a structure:
  ```cpp
  Student *stuPtr;
  ```
- Can use `&` operator to assign address: `stuPtr = &stu1;`
- A structure pointer can be a function parameter.

### Accessing Structure Members via Pointer Variables
- Must use `()` to dereference the pointer variable, not the field within the structure:
  ```cpp
  cout << (*stuPtr).studentID;
  ```
- Can use the **structure pointer operator** (`->`) to eliminate `()` and use clearer notation:
  ```cpp
  cout << stuPtr->studentID;
  ```

## 1.11 Enumerated Data Types
- An enumerated data type is a programmer-defined data type. It consists of values known as *enumerators*, which represent integer constants.

> [!example] Example
> ```cpp
> enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY };
> ```
> The identifiers inside the braces are enumerators. They represent the values that belong to the `Day` data type.

- The enumerators are not strings, so they aren't enclosed in quotes. They are identifiers.
- Once created, you can define variables of that type: `Day workDay;`
- You may assign any of the enumerators to a variable of that type: `workDay = WEDNESDAY;`

> [!info] Definition: Enumerator
> Think of an enumerator as an integer named constant. Internally, the compiler assigns integer values to the enumerators, beginning at 0.
> E.g., `MONDAY = 0`, `TUESDAY = 1`, `WEDNESDAY = 2`, etc.

### Operations on `enum` Variables
- **Assigning an integer:** You cannot directly assign an integer value to an `enum` variable (e.g., `workDay = 3; // Error!`). Instead, you must cast the integer: `workDay = static_cast<Day>(3);`
- **Assigning to an `int`:** You CAN assign an enumerator to an `int` variable:
  ```cpp
  int x;
  x = THURSDAY; // assigns 3 to x
  ```
- **Comparing:** Enumerator values can be compared using relational operators (e.g., `if (FRIDAY > MONDAY)`).
- **Anonymous Enumerated Types:** An anonymous enumerated type does not have a name:
  ```cpp
  enum { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY };
  ```
- **Math Operators:** You cannot perform math operations and assign them directly to an `enum` variable because the result is an integer (e.g., `day2 = day1 + 1; // ERROR!`). Fix this by casting: `day2 = static_cast<Day>(day1 + 1);`
- **Using `enum` with Arrays:** Because enumerators are stored as integers, you can use them as array subscripts: `sales[MONDAY] = 1525.0;`
- **Stepping through Arrays:** You cannot use the `++` operator on an `enum` variable. Use casting for the update expression: `workDay = static_cast<Day>(workDay + 1)`
- **Unique Scopes:** Enumerators must be unique within the same scope (unless using strongly typed enums). Error results if the same enumerator name is declared twice.

### Strongly Typed enums (C++11)
- C++11 introduced a new type known as a strongly typed enum.
- Allows you to have multiple enumerators in the same scope with the same name.
  ```cpp
  enum class Presidents { MCKINLEY, ROOSEVELT, TAFT };
  enum class VicePresidents { ROOSEVELT, FAIRBANKS, SHERMAN };
  ```
- Prefix the enumerator with the name of the `enum`, followed by the `::` operator:
  ```cpp
  Presidents prez = Presidents::ROOSEVELT;
  ```
- Use a cast operator to retrieve integer value:
  ```cpp
  int x = static_cast<int>(Presidents::ROOSEVELT);
  ```

> [!tip] Extra Notes: Declaring the Type and Defining Variables in One Statement
> You can declare an enumerated data type and define one or more variables of the type in the same statement:
> ```cpp
> enum Car { PORSCHE, FERRARI, JAGUAR } sportsCar;
> ```
> This code declares the `Car` data type and defines a variable named `sportsCar`.

---

# 2. Introduction to Classes

## 2.1 Procedural and Object-Oriented Programming
- **Procedural programming:** Focuses on the process/actions that occur in a program.
  - **Limitations:** If the data structures change, many functions must also be changed. Programs based on complex function hierarchies are difficult to understand and maintain, difficult to modify and extend, and easy to break.
- **Object-Oriented programming:** Based on the data and the functions that operate on it. Objects are instances of ADTs that represent the data and its functions.

> [!info] Object-Oriented Programming Terminology
> - **class:** like a `struct` (allows bundling of related variables), but variables and functions in the class can have different properties than in a `struct`.
> - **object:** an instance of a `class`, in the same way that a variable can be an instance of a `struct`. (A Class is like a blueprint and objects are like houses built from the blueprint).
> - **attributes:** members of a class.
> - **methods or behaviors:** member functions of a class.
> - **data hiding:** restricting access to certain members of an object.
> - **public interface:** members of an object that are available outside of the object. This allows the object to provide access to some data and functions without sharing its internal details and design, and provides some protection from data corruption.

## 2.2 Introduction to Classes
- Objects are created from a `class`.

**Format:**
```cpp
class ClassName
{
    declaration;
    declaration;
};
```

### Access Specifiers
- Used to control access to members of the class.
- `public`: can be accessed by functions outside of the class.
- `private`: can only be called by or accessed by functions that are members of the class.
- **Notes on Access Specifiers:**
  - Can be listed in any order in a class.
  - Can appear multiple times in a class.
  - If not specified, the default is `private`.

> [!example] Example Class
> ```cpp
> class Rectangle
> {
>     private:
>         double width;
>         double length;
>     public:
>         void setWidth(double);
>         void setLength(double);
>         double getWidth() const;
>         double getLength() const;
>         double getArea() const;
> };
> ```

### Using `const` With Member Functions
- `const` appearing after the parentheses in a member function declaration specifies that the function will not change any data in the calling object.
  ```cpp
  double getWidth() const;
  ```

### Defining a Member Function
- Put prototype in class declaration.
- Define function using class name and scope resolution operator (`::`).
  ```cpp
  int Rectangle::setWidth(double w)
  {
      width = w;
  }
  ```

> [!info] Definition: Accessors and Mutators
> - **Mutator:** A member function that stores a value in a `private` member variable, or changes its value in some way.
> - **Accessor:** Function that retrieves a value from a `private` member variable. Accessors do not change an object's data, so they should be marked `const`.

## 2.3 Defining an Instance of a Class
- An object is an instance of a class.
- Defined like structure variables: `Rectangle r;`
- Access members using dot operator:
  ```cpp
  r.setWidth(5.2);
  cout << r.getWidth();
  ```
- Compiler error if attempt to access a `private` member using the dot operator.

> [!tip] Avoiding Stale Data
> Some data is the result of a calculation (e.g., area of a rectangle = length x width). If we use an `area` variable and change `length` or `width` without updating `area`, then `area` becomes *stale*. To avoid stale data, it is best to calculate the value of that data within a member function rather than store it in a variable.

### Pointers to Objects and Dynamic Allocation
- Can define a pointer to an object: `Rectangle *rPtr = nullptr;`
- Can access public members via pointer using `->`:
  ```cpp
  rPtr = &otherRectangle;
  rPtr->setLength(12.5);
  ```
- We can also use a pointer to dynamically allocate an object:
  ```cpp
  Rectangle *rectPtr = nullptr;
  rectPtr = new Rectangle;
  rectPtr->setWidth(10.0);
  delete rectPtr;
  rectPtr = nullptr;
  ```

## 2.4 Why Have Private Members?
- Making data members `private` provides data protection.
- Data can be accessed only through `public` functions.
- Public functions define the class's public interface. Code outside the class must use the class's public member functions to interact with the object.

## 2.5 Separating Specification from Implementation
- Place class declaration in a header file that serves as the **class specification file**. Name the file `ClassName.h` (e.g., `Rectangle.h`).
- Place member function definitions in `ClassName.cpp` (e.g., `Rectangle.cpp`). The file should `#include` the class specification file.
- Programs that use the class must `#include` the class specification file, and be compiled and linked with the member function definitions.

## 2.6 Inline Member Functions
- Member functions can be defined `inline`:
  - inline: in class declaration
  - after the class declaration
- Inline appropriate for short function bodies:
  ```cpp
  int getWidth() const
  { return width; }
  ```
- **Tradeoffs (Inline vs. Regular Member Functions):**
  - **Regular functions:** when called, compiler stores return address of call, allocates memory for local variables, etc.
  - **Inline functions:** Code is copied into program in place of call. Results in a larger executable program, but no function call overhead, hence faster execution.

## 2.7 Constructors
- Member function that is automatically called when an object is created.
- Purpose is to construct an object.
- Constructor function name is the class name.
- Has no return type.

> [!tip] In-Place Initialization (C++11)
> If you are using C++11 or later, you can initialize a member variable in its declaration statement.
> ```cpp
> class Rectangle {
>     private:
>         double width = 0.0;
>         double length = 0.0;
> };
> ```

### Default Constructors
- A default constructor is a constructor that takes no arguments.
- If you write a class with no constructor at all, C++ will write a default constructor for you, one that does nothing.
- A simple instantiation of a class calls the default constructor: `Rectangle r;`

## 2.8 Passing Arguments to Constructors
- To create a constructor that takes arguments:
  - indicate parameters in prototype: `Rectangle(double, double);`
  - use parameters in the definition.
- Pass arguments to the constructor when you create an object: `Rectangle r(10, 5);`

> [!note] More About Default Constructors
> - If all of a constructor's parameters have default arguments, then it is a default constructor. Example: `Rectangle(double = 0, double = 0);`
> - Creating an object and passing no arguments will cause this constructor to execute.
> - **Classes with No Default Constructor:** When all of a class's constructors require arguments, then the class has NO default constructor. You must pass the required arguments to the constructor when creating an object.

## 2.9 Destructors
- Member function automatically called when an object is destroyed.
- Destructor name is `~classname` (e.g., `~Rectangle`).
- Has no return type; takes no arguments.
- Only one destructor per class, i.e., it cannot be overloaded.
- If constructor allocates dynamic memory, destructor should release it.

> [!warning] Important Rule
> Do not provide more than one default constructor for a class: one that takes no arguments and one that has default arguments for all parameters (this will not compile). Since a destructor takes no arguments, there can only be one destructor for a class.

> [!note] Constructors, Destructors, and Dynamically Allocated Objects
> When an object is dynamically allocated with the `new` operator, its constructor executes. When the object is destroyed with `delete`, its destructor executes.

## 2.10 Overloading Constructors
- A class can have more than one constructor.
- Overloaded constructors in a class must have different parameter lists.
  ```cpp
  Rectangle();
  Rectangle(double);
  Rectangle(double, double);
  ```

> [!tip] Constructor Delegation (C++11)
> In C++11, it is possible for one constructor to call another constructor in the same class. This is known as constructor delegation.

### Member Function Overloading
- Non-constructor member functions can also be overloaded.
  ```cpp
  void setCost(double);
  void setCost(char *);
  ```
- Must have unique parameter lists as for constructors.

## 2.11 Using Private Member Functions
- A `private` member function can only be called by another member function.
- It is used for internal processing by the class, not for use outside of the class.

## 2.12 Arrays of Objects
- Objects can be the elements of an array: `InventoryItem inventory[40];`
- Default constructor for object is used when array is defined.
- Must use initializer list to invoke constructor that takes arguments:
  ```cpp
  InventoryItem inventory[3] = { "Hammer", "Wrench", "Pliers" };
  ```
- If the constructor requires more than one argument, the initializer must take the form of a function call:
  ```cpp
  InventoryItem inventory[3] = { 
      InventoryItem("Hammer", 6.95, 12),
      InventoryItem("Wrench", 8.75, 20) 
  };
  ```
- It isn't necessary to call the same constructor for each object in an array.
- Objects in an array are referenced using subscripts. Member functions are referenced using dot notation:
  ```cpp
  inventory[2].setUnits(30);
  cout << inventory[2].getUnits();
  ```

## 2.13 The Unified Modeling Language (UML)
- UML stands for Unified Modeling Language.
- The UML provides a set of standard diagrams for graphically depicting object-oriented systems.

### UML Class Diagram
- A UML diagram for a class has three main sections:
  1. Class name goes here
  2. Member variables are listed here
  3. Member functions are listed here

### UML Notation
- **Access Specification Notation:** Indicate a private member with a minus (`-`) and a public member with a plus (`+`).
- **Data Type Notation:** Place a colon followed by the name of the data type after the name of the variable.
  ```text
  - width : double
  - length : double
  ```
- **Parameter Type Notation:** Place a colon followed by the name of the data type after the name of the variable.
  ```text
  + setWidth(w : double)
  ```
- **Function Return Type Notation:** Place a colon followed by the name of the data type after the function's parameter list.
  ```text
  + setWidth(w : double) : void
  ```

> [!example] UML Example for Rectangle Class
> ```text
> -----------------------------------
>             Rectangle
> -----------------------------------
> - width : double
> - length : double
> -----------------------------------
> + setWidth(w : double) : bool
> + setLength(len : double) : bool
> + getWidth() : double
> + getLength() : double
> + getArea() : double
> -----------------------------------
> ```

---

# 3. More About Classes

## 3.1 Instance and Static Members
- **Instance variable:** a member variable in a class. Each object has its own copy.
- **Static variable:** one variable shared among all objects of a class.
- **Static member function:** can be used to access a static member variable; can be called before any objects are defined.
  - Declared with `static` before the return type.
  - Static member functions can only access static member data.
  - Can be called independent of objects.

> [!example] Example: Static Member Declaration and Usage
> ```cpp
> class Tree {
> private:
>     static int objectCount; // Static member variable
> public:
>     Tree() { objectCount++; }
>     static int getObjectCount() const { return objectCount; } // Static member function
> };
> 
> // Definition of the static member variable, written outside the class
> int Tree::objectCount = 0;
> 
> // Calling the function independent of an object
> int num = Tree::getObjectCount();
> ```

## 3.2 Friends of Classes
> [!info] Definition: Friend
> A function or class that is not a member of a class, but has access to private members of the class.

- A friend function can be a stand-alone function or a member function of another class.
- It is declared a friend of a class with the `friend` keyword in the function prototype.

> [!example] Example: Friend Function Declarations
> **Stand-alone function:**
> ```cpp
> friend void setAVal(intVal&, int);
> ```
> **Member function of another class:**
> ```cpp
> friend void SomeClass::setNum(int num);
> ```

> [!example] Example: Friend Class Declarations
> ```cpp
> class FriendClass {
>     // ...
> };
> 
> class NewClass {
> public:
>     friend class FriendClass; // declares entire class FriendClass as a friend
>     // ...
> };
> ```

## 3.3 Memberwise Assignment
- Can use the `=` operator to assign one object to another, or to initialize an object with an object's data.
- Copies member to member. For example, `instance2 = instance1;` means copy all member values from `instance1` and assign to the corresponding member variables of `instance2`.
- Use at initialization: `Rectangle r2 = r1;`

## 3.4 Copy Constructors
- A special constructor used when a newly created object is initialized to the data of another object of the same class.
- The default copy constructor copies field-to-field, which works fine in many cases.

> [!warning] Problem with Dynamic Memory
> What if the object contains a pointer? Using memberwise copy with objects containing dynamic memory results in both objects pointing to the same dynamic memory address. Modifying one object will affect the other.

### Programmer-Defined Copy Constructor
- Allows us to solve the problem with objects containing pointers by allocating separate dynamic memory.
- The copy constructor takes a reference parameter to an object of the class.

> [!example] Example: Programmer-Defined Copy Constructor
> ```cpp
> SomeClass::SomeClass(const SomeClass &obj) {
>     value = new int;
>     *value = *obj.value;
> }
> ```

> [!note] Why `const`?
> Since the copy constructor has a reference to the object it is copying from, it can modify that object. To prevent this from happening, make the object parameter `const`.

## 3.5 Operator Overloading
- Operators such as `=`, `+`, and others can be redefined when used with objects of a class.
- The name of the function for the overloaded operator is `operator` followed by the operator symbol (e.g., `operator+` or `operator=`).
- The prototype for the overloaded operator goes in the declaration of the class that is overloading it.

> [!example] Example: Operator Overloading Prototype
> ```cpp
> void operator=(const SomeClass &rval);
> ```
> The operator is called via the object on the left side:
> ```cpp
> object1.operator=(object2); // Invoked as a member function
> object1 = object2; // Used in a conventional manner
> ```

### Returning a Value
- An overloaded operator can return a value. To support notations like `object1 = object2 = object3;`, the return type should be the same as the left operand, and the function should end with `return *this;`.

> [!example] Example: Overloaded Operator Returning a Value
> ```cpp
> class Point2d {
> private:
>     int x, y;
> public:
>     double operator-(const Point2d &right) {
>         return sqrt(pow((x - right.x), 2) + pow((y - right.y), 2));
>     }
> };
> 
> // Usage:
> Point2d point1(2, 2), point2(4, 4);
> cout << point2 - point1 << endl; // Compute and display distance between 2 points
> ```

### The `this` Pointer
> [!info] Definition: `this` Pointer
> A predefined pointer available to a class's member functions. It always points to the instance (object) of the class whose function is being called.

- It is passed as a hidden argument to all non-static member functions.
- If `getStudentName` is operating on `student1`, the `this` pointer is pointing to `student1`.

### Notes on Overloaded Operators
- Can change the meaning of an operator, but cannot change the number of operands.
- Only certain operators can be overloaded. You **cannot** overload the following operators:
  - `?:`
  - `.`
  - `.*`
  - `::`
  - `sizeof`
- `++` and `--` operators are overloaded differently for prefix vs. postfix notation.
- Overloaded relational operators should return a `bool` value.
- Overloaded stream operators (`>>`, `<<`) must return a reference to `istream` or `ostream` objects and take `istream` or `ostream` objects as parameters.
- Overloaded `[]` operator can create classes that behave like arrays, provide bounds-checking on subscripts. It must consider constructors and destructors, and it returns a reference to the object, not the object itself.

## 3.6 Object Conversion
> [!note] Syllabus Removed
> This topic was marked as removed from the syllabus.

## 3.7 Aggregation
> [!info] Definition: Aggregation
> When a class is a member of another class.

- Supports the modeling of a "has a" relationship between classes (the enclosing class "has a" enclosed class).
- It uses the same notation as for structures within structures.

> [!example] Example: Aggregation
> ```cpp
> class StudentInfo {
> private:
>     string firstName, LastName;
>     string address, city, state, zip;
>     // ...
> };
> 
> class Student {
> private:
>     StudentInfo personalData; // Aggregation
>     // ...
> };
> ```

## 3.8 Rvalue References and Move Semantics
> [!note] Syllabus Removed
> This topic was marked as removed from the syllabus, but detailed notes are included below for reference.

### Temporary Values, Lvalues, and Rvalues
- When an expression like `x = 2 * 6;` is evaluated, the value `12` is stored in memory as a temporary value. It is then assigned to the variable `x` and discarded.
- **Lvalues:** Values that persist beyond the statement that created them and have names that make them accessible to other statements in the program.
- **Rvalues:** Values that are temporary and cannot be accessed beyond the statement that created them.

### Rvalue References
> [!info] Definition: Rvalue Reference
> A reference variable that can refer only to temporary objects that would otherwise have no name.

- Rvalue references are used to write **move constructors** and **move assignment operators** (otherwise known as move semantics).
- Move semantics increase the performance of classes that contain pointers or references to outside data by "stealing" the pointer from the temporary object instead of allocating new memory and copying the data.

> [!tip] Extra Notes: Move Semantics
> When an object is about to be destroyed (like a temporary return value from a function), copying its dynamically allocated data is wasteful. A move constructor simply copies the pointer to the data and then sets the temporary object's pointer to `nullptr`. This is much faster than a deep copy.

### When to Implement Move Semantics
- In any class that contains a pointer or reference to an outside piece of data, the class should have:
  - Copy constructor
  - Move constructor
  - Copy assignment operator
  - Move assignment operator

### Default Operations, `default`, and `delete`
- The compiler automatically generates a default constructor, copy constructor, copy assignment operator, move constructor, and destructor.
- If you write *any* of these in a class, the compiler will not provide default versions.
- **`default` keyword:** You can use the `default` keyword to declare which default operations you want the compiler to automatically provide.
  ```cpp
  MyClass() = default; // Generates a default constructor
  ```
- **`delete` keyword:** You can use the `delete` keyword to declare which default operations you do *not* want the compiler to automatically provide.
  ```cpp
  MyClass(const MyClass&) = delete; // Specifies no default copy constructor
  ```
  As a result, objects of this class cannot be copied.
