# Chapter 1: Structured Data

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

> [!example] Example: Program 11-1
> ```cpp
> // This program demonstrates the use of structures.
> #include <iostream>
> #include <string>
> #include <iomanip>
> using namespace std;
> 
> struct PayRoll
> {
>     int empNumber;   // Employee number
>     string name;     // Employee's name
>     double hours;    // Hours worked
>     double payRate;  // Hourly payRate
>     double grossPay; // Gross pay
> };
> 
> int main()
> {
>     PayRoll employee; // employee is a PayRoll structure.
> 
>     // Get the employee's number.
>     cout << "Enter the employee's number: ";
>     cin >> employee.empNumber;
> 
>     // Get the employee's name.
>     cout << "Enter the employee's name: ";
>     cin.ignore(); // To skip the remaining '\n' character
>     getline(cin, employee.name);
> 
>     // Get the hours worked by the employee.
>     cout << "How many hours did the employee work? ";
>     cin >> employee.hours;
> 
>     // Get the employee's hourly pay rate.
>     cout << "What is the employee's hourly payRate? ";
>     cin >> employee.payRate;
> 
>     // Calculate the employee's gross pay.
>     employee.grossPay = employee.hours * employee.payRate;
> 
>     // Display the employee data.
>     cout << "Here is the employee's payroll data:\n";
>     cout << "Name: " << employee.name << endl;
>     cout << "Number: " << employee.empNumber << endl;
>     cout << "Hours worked: " << employee.hours << endl;
>     cout << "Hourly payRate: " << employee.payRate << endl;
>     cout << fixed << showpoint << setprecision(2);
>     cout << "Gross Pay: $" << employee.grossPay << endl;
>     return 0;
> }
> ```

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

> [!example] Example: Excerpts from Program 11-3
> ```cpp
> struct EmployeePay
> {
>     string name;       // Employee name
>     int empNum;        // Employee number
>     double payRate;    // Hourly pay rate
>     double hours;      // Hours worked
>     double grossPay;   // Gross pay
> };
> 
> EmployeePay employee1 = {"Betty Ross", 141, 18.75};
> EmployeePay employee2 = {"Jill Sandburg", 142, 17.50};
> ```

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

> [!example] Example: Program 11-4
> ```cpp
> // This program uses an array of structures.
> #include <iostream>
> #include <iomanip>
> using namespace std;
> 
> struct PayInfo
> {
>     int hours;       // Hours worked
>     double payRate;  // Hourly pay rate
> };
> 
> int main()
> {
>     const int NUM_WORKERS = 3;       // Number of workers
>     PayInfo workers[NUM_WORKERS];    // Array of structures
>     int index;                       // Loop counter
> 
>     // Get employee pay data.
>     cout << "Enter the hours worked by " << NUM_WORKERS
>          << " employees and their hourly rates.\n";
> 
>     for (index = 0; index < NUM_WORKERS; index++)
>     {
>         // Get the hours worked by an employee.
>         cout << "Hours worked by employee #" << (index + 1) << ": ";
>         cin >> workers[index].hours;
> 
>         // Get the employee's hourly pay rate.
>         cout << "Hourly pay rate for employee #" << (index + 1) << ": ";
>         cin >> workers[index].payRate;
>         cout << endl;
>     }
> 
>     // Display each employee's gross pay.
>     cout << "Here is the gross pay for each employee:\n";
>     cout << fixed << showpoint << setprecision(2);
>     for (index = 0; index < NUM_WORKERS; index++)
>     {
>         double gross;
>         gross = workers[index].hours * workers[index].payRate;
>         cout << "Employee #" << (index + 1) << ": $" << gross << endl;
>     }
>     return 0;
> }
> ```

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

> [!example] Example: Program 11-7
> ```cpp
> // This program uses a function to return a structure.
> #include <iostream>
> #include <iomanip>
> #include <cmath> // For the pow function
> using namespace std;
> 
> // Constant for Pi.
> const double PI = 3.14159;
> 
> // Structure declaration
> struct Circle
> {
>     double radius;      // A circle's radius
>     double diameter;    // A circle's diameter
>     double area;        // A circle's area
> };
> 
> // Function prototype
> Circle getCircle();
> 
> int main()
> {
>     Circle c; // Define a structure variable
> 
>     // Get data about the circle.
>     c = getCircle();
> 
>     // Display the circle data.
>     cout << "The radius and area of the circle are:\n";
>     cout << fixed << setprecision(2);
>     cout << "Radius: " << c.radius << endl;
>     cout << "Area: " << c.area << endl;
>     return 0;
> }
> 
> Circle getCircle()
> {
>     Circle tempCircle; // Temporary structure variable
> 
>     // Store circle data in the temporary variable.
>     cout << "Enter the diameter of a circle: ";
>     cin >> tempCircle.diameter;
> 
>     // Calculate the circle's radius and area.
>     tempCircle.radius = tempCircle.diameter / 2.0;
>     tempCircle.area = PI * pow(tempCircle.radius, 2.0);
> 
>     // Return the temporary variable.
>     return tempCircle;
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

> [!example] Example: Program 11-8
> ```cpp
> // This program uses a structured binding declaration to unpack a structure that is returned from a function.
> #include <iostream>
> #include <string>
> using namespace std;
> 
> struct Contact
> {
>     string name;
>     string email;
> };
> 
> // Function prototype
> Contact getContact();
> 
> int main()
> {
>     // Get the user's contact info.
>     auto [userName, userEmail] = getContact();
> 
>     // Display the user's contact info.
>     cout << "You entered:\n";
>     cout << userName << endl;
>     cout << userEmail << endl;
>     return 0;
> }
> 
> Contact getContact()
> {
>     // Temporary Contact variable
>     Contact c;
> 
>     // Get the contact info.
>     cout << "Enter your name: ";
>     getline(cin, c.name);
>     cout << "Enter your email address: ";
>     getline(cin, c.email);
> 
>     return c;
> }
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

> [!example] Example: Excerpt from Program 11-9
> ```cpp
> void getData(Student *s)
> {
>     // Get the student name.
>     cout << "Student name: ";
>     getline(cin, s->name);
> 
>     // Get the student ID number.
>     cout << "Student ID Number: ";
>     cin >> s->idNum;
> 
>     // Get the credit hours enrolled.
>     cout << "Credit Hours Enrolled: ";
>     cin >> s->creditHours;
> 
>     // Get the GPA.
>     cout << "Current GPA: ";
>     cin >> s->gpa;
> }
> ```

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

> [!example] Example: Program 11-10
> ```cpp
> // This program demonstrates an enumerated data type.
> #include <iostream>
> #include <iomanip>
> using namespace std;
> 
> enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY };
> 
> int main()
> {
>     const int NUM_DAYS = 5;       // The number of days
>     double sales[NUM_DAYS];       // To hold sales for each day
>     double total = 0.0;           // Accumulator
>     int index;                    // Loop counter
> 
>     // Get the sales for each day.
>     for (index = MONDAY; index <= FRIDAY; index++)
>     {
>         cout << "Enter the sales for day " << index << ": ";
>         cin >> sales[index];
>     }
> 
>     // Calculate the total sales.
>     for (index = MONDAY; index <= FRIDAY; index++)
>         total += sales[index];
> 
>     // Display the total.
>     cout << "The total sales are $" << setprecision(2)
>          << fixed << total << endl;
> 
>     return 0;
> }
> ```

- **Anonymous Enumerated Types:** An anonymous enumerated type does not have a name:
  ```cpp
  enum { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY };
  ```
- **Math Operators:** You cannot perform math operations and assign them directly to an `enum` variable because the result is an integer (e.g., `day2 = day1 + 1; // ERROR!`). Fix this by casting: `day2 = static_cast<Day>(day1 + 1);`
- **Using `enum` with Arrays:** Because enumerators are stored as integers, you can use them as array subscripts: `sales[MONDAY] = 1525.0;`
- **Stepping through Arrays:** You cannot use the `++` operator on an `enum` variable. Use casting for the update expression: `workDay = static_cast<Day>(workDay + 1)`

> [!example] Example: Program 11-11
> ```cpp
> // This program demonstrates an enumerated data type.
> #include <iostream>
> #include <iomanip>
> using namespace std;
> 
> enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY };
> 
> int main()
> {
>     const int NUM_DAYS = 5;       // The number of days
>     double sales[NUM_DAYS];       // To hold sales for each day
>     double total = 0.0;           // Accumulator
>     Day workDay;                  // Loop counter
> 
>     // Get the sales for each day.
>     for (workDay = MONDAY; workDay <= FRIDAY;
>          workDay = static_cast<Day>(workDay + 1))
>     {
>         cout << "Enter the sales for day " << workDay << ": ";
>         cin >> sales[workDay];
>     }
> 
>     // Calculate the total sales.
>     for (workDay = MONDAY; workDay <= FRIDAY;
>          workDay = static_cast<Day>(workDay + 1))
>         total += sales[workDay];
> 
>     // Display the total.
>     cout << "The total sales are $" << setprecision(2)
>          << fixed << total << endl;
> 
>     return 0;
> }
> ```

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

# Chapter 2: Introduction to Classes

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

# Chapter 3: More About Classes

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

---

# Chapter 4: Inheritance, Polymorphism, and Virtual Functions

## 4.1 What Is Inheritance?
> [!info] Definition: Inheritance
> Provides a way to create a new class from an existing class. The new class is a specialized version of the existing class.

- Inheritance establishes an **"is a"** relationship between classes.
  > [!example] Example: "is a" Relationship
  > - A poodle is a dog
  > - A car is a vehicle
  > - A flower is a plant
  > - A football player is an athlete

### Terminology and Notation
- **Base class (or parent):** Inherited from.
- **Derived class (or child):** Inherits from the base class.
- **Notation:**
  ```cpp
  class Student // base class
  {
      // ...
  };
  
  class UnderGrad : public Student // derived class
  {
      // ...
  };
  ```

> [!note] What Does a Child Have?
> An object of the derived class has all members defined in the child class and all members declared in the parent class.
> An object of the derived class can use all `public` members defined in the child class and all `public` members defined in the parent class.

## 4.2 Protected Members and Class Access
- **`protected` member access specification:** Like `private`, but accessible by objects of the derived class.
- **Class access specification:** Determines how `private`, `protected`, and `public` members of the base class are inherited by the derived class.

### Class Access Specifiers
1. **`public`:** Object of derived class can be treated as object of base class (not vice-versa).
2. **`protected`:** More restrictive than `public`, but allows derived classes to know details of parents.
3. **`private`:** Prevents objects of derived class from being treated as objects of base class.

## 4.3 Constructors and Destructors in Base and Derived Classes
- Derived classes can have their own constructors and destructors.
- **Creation Order:** When an object of a derived class is created, the base class's constructor is executed first, followed by the derived class's constructor.
- **Destruction Order:** When an object of a derived class is destroyed, its destructor is called first, then that of the base class.

### Passing Arguments to Base Class Constructor
- Allows selection between multiple base class constructors.
- Specify arguments to the base constructor on the derived constructor heading:
  ```cpp
  Square::Square(int side) : Rectangle(side, side)
  ```
- Must be done if the base class has no default constructor.

### Constructor Inheritance
- In a derived class, some constructors can be inherited from the base class.
- Constructors that **cannot** be inherited are:
  - Default constructor
  - Copy constructor
  - Move constructor

## 4.4 Redefining Base Class Functions
> [!info] Definition: Redefining
> A function in a derived class that has the same name and parameter list as a function in the base class. Typically used to replace a function in the base class with different actions in the derived class.

- **Redefining vs. Overloading:** With overloading, parameter lists must be different.
- Objects of the base class use the base class version of the function; objects of the derived class use the derived class version.

> [!warning] Problem with Redefining
> If a base class function `x()` calls a redefined function `y()`, and an object of the derived class calls `x()`, static binding causes the base class version of `y()` to be called instead of the derived class version.

## 4.5 Class Hierarchies
- A base class can be derived from another base class.
- This creates a hierarchy (e.g., `GradedActivity` -> `FinalExam`, `PassFailActivity` -> `PassFailExam`).

## 4.6 Polymorphism and Virtual Member Functions
> [!info] Definition: Virtual Member Function
> A function in a base class that expects to be redefined in a derived class. Defined with the keyword `virtual`.
> ```cpp
> virtual void Y() { ... }
> ```

- **Dynamic Binding:** Functions bound at run time to the function that they call. Virtual functions use dynamic binding.
- **Static Binding:** Functions bound at compile time. Used when functions are not virtual.

> [!note] Polymorphism
> Polymorphism means the ability to take many forms. A virtual function is dynamically bound to calls at runtime based on the type of object making the call.

### Polymorphism Requires References or Pointers
> [!warning] Important
> Polymorphic behavior is only possible when an object is referenced by a **reference variable or a pointer**.

- **Base Class Pointers:** You can define a pointer to a base class object and assign it the address of a derived class object. Base class pointers and references only know about members of the base class.
- Redefined functions in the derived class will be ignored unless the base class declares the function `virtual`.

### Redefining vs. Overriding
- Redefined functions are statically bound.
- Overridden functions are dynamically bound.
- So, a virtual function is overridden, and a non-virtual function is redefined.

### Virtual Destructors
> [!tip] Best Practice
> It's a good idea to make destructors `virtual` if the class could ever become a base class. Otherwise, the compiler will perform static binding on the destructor if the class is ever derived from.

### C++11's `override` and `final` Keywords
- **`override`**: Tells the compiler that the function is supposed to override a function in the base class.
- **`final`**: When a member function is declared with this keyword, it cannot be overridden in a derived class.

## 4.7 Abstract Base Classes and Pure Virtual Functions
> [!info] Definition: Pure Virtual Function
> A virtual member function that **must** be overridden in a derived class that has objects.
> ```cpp
> virtual void Y() = 0;
> ```
> The `= 0` indicates a pure virtual function. It must have no function definition in the base class.

> [!info] Definition: Abstract Base Class
> A class that can have no objects. Serves as a basis for derived classes that may/will have objects. A class becomes an abstract base class when one or more of its member functions is a pure virtual function.

## 4.8 Multiple Inheritance
- A derived class can have more than one base class.
- Each base class can have its own access specification:
  ```cpp
  class Cube : public Square, public RectSolid
  ```
- Arguments can be passed to both base classes' constructors. Base class constructors are called in the order given in the class declaration.
- **Problem:** What if base classes have member variables/functions with the same name?
- **Solution:** 
  - Derived class redefines the multiply-defined function.
  - Derived class invokes member function in a particular base class using scope resolution operator `::`.

---

# Chapter 5: Recursion Examples (Quick Sort)

## 5.1 Quick Sort Algorithm
> [!info] Definition: Quick Sort
> A highly efficient sorting algorithm that uses a divide-and-conquer strategy. It partitions an array into two sublists based on a pivot element.

### Implementation Example
```cpp
void quickSort(int set[], int start, int end)
{
   int pivotPoint;
   if (start < end)
   {
      // Get the pivot point.
      pivotPoint = partition(set, start, end);
      // Sort the first sublist.
      quickSort(set, start, pivotPoint - 1);
      // Sort the second sublist.
      quickSort(set, pivotPoint + 1, end);
   }
}

int partition(int set[], int start, int end)
{
   int pivotValue, pivotIndex, mid;
   mid = (start + end) / 2;
   swap(set[start], set[mid]);
   pivotIndex = start;
   pivotValue = set[start];
   for (int scan = start + 1; scan <= end; scan++)
   {
      if (set[scan] < pivotValue)
      {
          pivotIndex++;
          swap(set[pivotIndex], set[scan]);
      }
   }
   swap(set[start], set[pivotIndex]);
   return pivotIndex;
}
```

> [!example] Trace Example
> For an array: `7 3 9 2 0 1 8 4 6 5`
> 1. `mid = (0 + 9) / 2 = 4`. The element at index 4 is `0`.
> 2. `swap(set[start], set[mid])` swaps `7` and `0`. Array becomes `0 3 9 2 7 1 8 4 6 5`.
> 3. `pivotIndex = 0`, `pivotValue = 0`.
> 4. The loop scans from index 1 to 9. Since all elements (3, 9, 2, 7, 1, 8, 4, 6, 5) are greater than `0`, `pivotIndex` does not increment.
> 5. End of loop, swap `start` and `pivotIndex`. Since both are 0, array doesn't change.
> 6. Pivot `0` is now at its correct sorted position (index 0).
> 7. The algorithm recursively calls `quickSort` on the right sublist `(pivotPoint + 1, end)` which is `(1, 9)`.
> 
> *Sublist 2: `3 9 2 7 1 8 4 6 5` (Indices 1 to 9)*
> 1. `mid = (1 + 9) / 2 = 5`. The element at index 5 is `1`.
> 2. `swap(set[start], set[mid])` swaps `3` and `1`. Array becomes `0 1 9 2 7 3 8 4 6 5`.
> 3. `pivotIndex = 1`, `pivotValue = 1`.
> 4. The loop scans from index 2 to 9. No elements are less than `1`.
> 5. End of loop, swap `start` and `pivotIndex`. Array doesn't change.
> 6. Pivot `1` is now at its correct sorted position.
> 7. The algorithm recursively calls `quickSort` on the right sublist `(2, 9)`.
>
> *Sublist 3: `9 2 7 3 8 4 6 5` (Indices 2 to 9)*
> 1. `mid = (2 + 9) / 2 = 5`. The element at index 5 is `3`.
> 2. `swap(set[start], set[mid])` swaps `9` and `3`. Array becomes `0 1 3 2 7 9 8 4 6 5`.
> 3. `pivotIndex = 2`, `pivotValue = 3`.
> 4. The loop scans from index 3 to 9. The only element less than `3` is `2` (at index 3).
> 5. `pivotIndex` increments to 3. Swap `set[3]` and `set[3]`.
> 6. End of loop, swap `start` (index 2, value `3`) and `pivotIndex` (index 3, value `2`). Array becomes `0 1 2 3 7 9 8 4 6 5`.
> 7. Pivot `3` is now at its correct sorted position (index 3).
> 8. Recursively process left sublist (index 2: `2`) and right sublist (indices 4 to 9).

---

# Chapter 6: Recursion Examples (Towers of Hanoi)

## 6.1 Towers of Hanoi Example
The repetitive steps involved in solving the Towers of Hanoi (ToH) game can be easily implemented in a recursive algorithm.

### Rules of Towers of Hanoi
1. Only one disc may be moved at a time.
2. A disc cannot be placed on top of a smaller disc.
3. All discs must be stored on a peg except while being moved.

### Base Cases and Recursive Steps
- **One Disk:** Move the only disk from the first peg to the third peg.
- **Two Disks:** 
  - Move disc 1 to peg 2.
  - Move disc 2 to peg 3.
  - Move disc 1 to peg 3.
- **Three Disks:** The process involves moving the top 2 disks to the intermediate peg, moving the largest disk to the destination, and then moving the 2 disks from the intermediate peg to the destination.

### Pseudo Code for n Disks
```
If n > 0 Then
   Move n - 1 discs from peg 1 to peg 2, using peg 3 as a temporary peg.
   Move the remaining disc from peg 1 to peg 3.
   Move n - 1 discs from peg 2 to peg 3, using peg 1 as a temporary peg.
End If
```
- **Number of moves:** $2^n - 1$

### Recursive ToH Function
```cpp
void moveDiscs(int num, int A, int B, int C)
{
   if (num > 0)
   {
      moveDiscs(num - 1, A, C, B);
      cout << "Move a disc from peg " << A << " to peg " << C << endl;
      moveDiscs(num - 1, B, A, C);
   }
}
```

> [!example] Example: Program Using ToH Recursive Function
> ```cpp
> #include <iostream>
> using namespace std;
> void moveDiscs(int, int, int, int);
> 
> int main()
> {
>    const int NUM_DISCS = 3;
>    const int A = 1;
>    const int B = 2;
>    const int C = 3;
>    
>    moveDiscs(NUM_DISCS, A, B, C);
>    cout << "All the pegs are moved!\n";
>    return 0;
> }
> ```
> **Output:**
> ```text
> Move a disc from peg 1 to peg 3
> Move a disc from peg 1 to peg 2
> Move a disc from peg 3 to peg 2
> Move a disc from peg 1 to peg 3
> Move a disc from peg 2 to peg 1
> Move a disc from peg 2 to peg 3
> Move a disc from peg 1 to peg 3
> All the pegs are moved!
> ```

> [!tip] Extra Notes: Tracing ToH for 3 Disks
> 1. `moveDiscs(3, A, B, C)` calls `moveDiscs(2, A, C, B)`.
> 2. `moveDiscs(2, A, C, B)` calls `moveDiscs(1, A, B, C)`.
> 3. `moveDiscs(1, A, B, C)` calls `moveDiscs(0, A, C, B)`, then moves Peg 1 to 3, then calls `moveDiscs(0, B, A, C)`.
> 4. It backtracks and moves Peg 1 to 2, then evaluates `moveDiscs(1, C, A, B)`... and so forth until the puzzle is solved.

## 6.2 QuickSort Algorithm
> [!info] Definition: QuickSort
> It sorts a list by dividing it into two sub-lists. Between the sub-lists there is a selected value known as the pivot. The algorithm exchanges the other values in the list until all the elements in sub-list 1 are less than the pivot, and all the elements in sub-list 2 are greater than the pivot.

- The algorithm repeats the procedure on sub-list 1, and then on sub-list 2.
- The recursion stops when there is only one element in a sub-list. At that point, the original list is completely sorted.
- The algorithm is coded primarily in two functions: `quickSort` and `partition`.
- `quickSort` is a recursive function.

> [!note] Overlap with Previous Chapter
> QuickSort was covered in detail in the previous chapter. The code structure for `quickSort` and `partition` remains the same.

## 6.3 Exhaustive Algorithms
> [!info] Definition: Exhaustive Algorithm
> An exhaustive algorithm finds a best combination of items by looking at all the possible combinations.

> [!example] Example: Coin Change
> Finding change for a certain amount of money that uses the fewest coins.
> - The user enters the amount of money in terms of cents.
> - The output is a set of coins which has the same amount as the input with the minimum number of coins.

## 6.4 Recursive vs Iteration

### Recursion
**Pros:**
- It models certain algorithms most accurately.
- Results in shorter, simpler functions.

**Cons:**
- May not execute very efficiently.

### Iteration
**Pros:**
- Executes effectively more efficiently than recursion.

**Cons:**
- Often is harder to code or understand.

---

# Chapter 7: Recursion

## 7.1 Introduction to Recursion
> [!info] Definition: Recursive Function
> A function that calls itself is a recursive function.

```cpp
void message()
{
    cout << "This is a recursive function.\n";
    message();
}
```

> [!warning] Problem with Infinite Recursion
> If a recursive function has no way to stop, it acts like an infinite loop. This leads the program to crash due to a **Stack Overflow**.

### The Stack Mechanism
- The computer’s memory for recursive functions operates like a vertical stack of dishes.
- It follows the **Last-In, First-Out (LIFO)** mechanism.
- The last item pushed onto the stack is the first item to be popped (removed).
- In recursive functions, each call pushes a new stack frame (containing the return address and local variables) onto the memory.
- Because computer memory is finite, pushing frames infinitely leads to a **Stack Overflow**, the point where the "pile" hits the ceiling and crashes.

### Solution: Adding a Condition to Stop
```cpp
void message(int times)
{
   if (times > 0)
   {
       cout << "This is a recursive function.\n";
       message(times - 1);  // recursive call
   }
} // Control returns here from the recursive call, causing the function to return.
```

## 7.2 Solving Problems with Recursion
> [!info] Principle of Recursive Problem Solving
> A problem can be solved with recursion if it can be broken down into successive smaller problems that are identical to the overall problem.

- Any problem that can be solved recursively can also be solved iteratively, using a loop.
- **Overhead:** Recursive algorithms are usually less efficient than iterative algorithms. Function calls impose overhead on the system:
  - Allocating memory for parameters and local variables.
  - Storing the address of the program location where control returns after the function terminates.
- **Why use it?** Some repetitive problems are more easily solved with recursion than with iteration. The programmer might be able to design a recursive algorithm faster.

### Recursion Rules
- If the problem can be solved now, without recursion, then the function solves it and returns.
- If the problem cannot be solved now, then the function reduces it to a smaller but similar problem and calls itself to solve the smaller problem.

> [!note] Base Case and Recursive Case
> - **Base Case:** Identifying at least one case in which the problem can be solved without recursion.
> - **Recursive Case:** Determining a way to solve the problem in all other circumstances using recursion.
> 
> The recursive case will continue until one of the base cases is met.

## 7.3 Recursion Types
> [!info] Direct Recursion
> A function calls itself.

> [!info] Indirect Recursion
> Function A calls function B, and function B calls function A.
> Or, Function A calls function B, function B calls function C... and finally the last function calls function A.

## 7.4 Recursion Examples

### Factorial
The factorial of a non-negative number can be defined by the following rules:
- If n = 0 then `n! = 1`
- If n > 0 then `n! = 1 * 2 * 3 * ... * n` (or `n * (n - 1)!`)

```cpp
int factorial(int n)
{
   if (n == 0)
      return 1;
   else
      return n * factorial(n - 1);
}
```

### Character Finder
Finds the occurrences of a specific character in a string.
```cpp
int numChars(char search, string str, int subscript)
{
   if (subscript >= str.length())
   {
      return 0;
   }
   else if (str[subscript] == search)
   {
      return 1 + numChars(search, str, subscript+1);
   }
   else
   {
      return numChars(search, str, subscript+1);
   }
}
```

### Greatest Common Divisor (GCD)
- `gcd(x, y) = y`, if `y` divides `x` evenly.
- `gcd(x, y) = gcd(y, remainder of x / y)`, otherwise.

```cpp
int gcd(int x, int y)
{
   if (x % y == 0)
      return y;
   else
      return gcd(y, x % y);
}
```

### Binary Search: Iterative vs Recursive
**Recursive Algorithm:**
- If `array[middle]` equals the search value, then the value is found.
- Else, if `array[middle]` is less than the search value, perform a binary search on the upper half.
- Else, if `array[middle]` is greater than the search value, perform a binary search on the lower half.
- **Base cases:** `array[middle] == value` and `first > last`.

```cpp
// Recursive Binary Search
int binarySearch(int array[], int first, int last, int value)
{
   int middle; 
   if (first > last)
      return -1;
      
   middle = (first + last) / 2;
   
   if (array[middle] == value)
      return middle;
   if (array[middle] < value)
      return binarySearch(array, middle+1, last, value);
   else
      return binarySearch(array, first, middle-1, value);
}
```

```cpp
// Iterative Binary Search
int binarySearch(int array[], int first, int last, int value)
{
   while (first <= last)
   {
      int middle = (first + last) / 2;
      if (array[middle] == value)
         return middle;
      else if (array[middle] < value)
         first = middle + 1;
      else
         last = middle - 1;
   }
   return -1;
}
```

---

# Chapter 8: Strings and Vectors

## 8.1 Introduction to Strings
- In C++, a **C-string** is a sequence of characters stored in consecutive memory locations, terminated by a null character (`\0`).
- The C++ language stores strings primarily in two ways:
  1. As `string` objects
  2. As C-strings
- **Null Terminator:** `\0` ("backslash zero") is the escape sequence representing the null terminator (ASCII code 0).
- The C programming language does not provide a string class like C++ does; C relies solely on C-strings.

### C-String Library Functions
- `strlen()`: Returns length of string.
- `strcat()`: Concatenates strings.
- `strcpy()`: Copies strings.
- `strstr()`: Finds a substring.
- `strcmp()`: Compares strings.

## 8.2 C++ String Class
- Standard C++ provides a special data type for storing and working with strings via `#include <string>`.
- The `string` class is an **Abstract Data Type (ADT)**.
- It is not a built-in, primitive data type like `int` or `char`. It is a programmer-defined data type accompanying the C++ language.
- Being an ADT means you interact with what it does, while how it is implemented is hidden.

### Defining and Using String Objects
```cpp
string movieTitle;
movieTitle = "Fast and Furious";
cout << "My favorite movie is " << movieTitle << endl;
```

> [!example] Example: Reading a Line
> ```cpp
> string name;
> cout << "What is your name? ";
> getline(cin, name);
> cout << "Good morning " << name << endl;
> ```

### Comparing String Objects
- You can use relational operators (`<`, `>`, `<=`, `>=`, `==`, `!=`) directly on `string` objects without needing library functions.
- Comparisons with C-strings are also valid (e.g., `str == "William"`).

> [!note] Ways to Define String Objects
> - `string address;` (Empty string)
> - `string name("William Smith");` (Initialized)
> - `string person1(person2);` (Copy of another string or C-string)
> - `string set1(set2, 5);` (Initialized with first 5 chars of `set2`)
> - `string lineFull('z', 10);` (Initialized with 10 'z' characters)
> - `string firstName(fullName, 0, 7);` (Substring of length 7 starting at index 0)

### String Operators
- `>>`: Extracts characters from a stream (stops at space).
- `<<`: Inserts string into a stream.
- `=`: Assigns content.
- `+=` or `+`: Concatenates strings.
- `[]`: Array-subscript notation to access individual characters.

### String Class Member Functions
- **Appending:** `.append(n, 'z')`, `.append(str2)`, `.append(str2, n)`, `.append(str2, x, n)`
- **Assigning:** `.assign(n, 'z')`, `.assign(str2)`, `.assign(str2, n)`, `.assign(str2, x, n)`
- **Accessing:** `.at(x)`, `.back()`, `.front()`, `.begin()`, `.end()`
- **C-string Conversion:** `.c_str()` returns the address to the first element (e.g. `char* ptr = str1.c_str()`).
- **Info:** `.capacity()`, `.length()`, `.size()`, `.empty()`
- **Modifying:** `.clear()`, `.erase(x, n)`, `.insert(x, n, 'z')`, `.insert(x, str)`, `.replace(x, n, str)`, `.resize(n, 'z')`, `.swap(str)`
- **Searching:** `.find(str, x)`, `.compare(str2)`
- **Substrings:** `.substr(x, n)`

## 8.3 Vectors
- C++ offers a **vector** data type, which in many ways is superior to standard arrays.
- Vectors are not part of the C++ language but were created in addition to built-in types.
- A vector is a **sequence container**.

### Similarities to Arrays
- Holds a sequence of values/elements.
- Stores elements in contiguous memory locations.
- Array subscript operator `[]` can be used to read individual elements.

### Advantages over Arrays
- No need to declare the number of elements in advance.
- If a new value is added to a full vector, the vector automatically increases its size to accommodate it.
- Vectors can report the number of elements they contain.

### Defining a Vector
- Requires `#include <vector>`.
- `vector<int> numbers;`
- `vector<int> numbers(10);` (Starts with size 10)
- `vector<int> numbers(10, 2);` (Size 10, initialized with value 2)
- `vector<int> set2(set1);` (Copy from another vector)
- `vector<int> numbers { 10, 20, 30, 40 };` (Initialized with values)

### Under the Hood: Dynamic Memory
- Each time we enter data more than the starting size, the vector is assigned a new memory location to accommodate the new size. It also releases the old memory allocated.

### Range-Based for Loop
```cpp
vector<int> numbers { 10, 20, 30, 40, 50 };
for (int val : numbers)
    cout << val << endl;

// By reference to modify:
for (int &val : numbers)
{
    cout << "Enter an integer value: ";
    cin >> val;
}
```

### Vector Member Functions
- `.push_back(val)`: Stores a value as the last element. If the vector is full, it creates a new last element.
- `.size()`: Returns the number of elements contained. Especially useful when passing vectors to functions.
- `.pop_back()`: Removes the last element from the vector.
- `.clear()`: Completely clears the contents of a vector.
- `.empty()`: Returns true if the vector is empty.
- `.reverse()`: Reverses the order of the elements in the vector.

> [!warning] Out of Bounds
> It is not possible to use the `[]` operator to add a new element to a vector that does not exist. Use `push_back` instead.
