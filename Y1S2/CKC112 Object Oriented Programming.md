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

# Chapter 5: Recursion

## 5.1 Introduction to Recursion
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

## 5.2 Solving Problems with Recursion
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

## 5.3 Recursion Types
> [!info] Direct Recursion
> A function calls itself.

> [!info] Indirect Recursion
> Function A calls function B, and function B calls function A.
> Or, Function A calls function B, function B calls function C... and finally the last function calls function A.

## 5.4 Recursion Examples

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

## 5.5 Quick Sort Algorithm
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

## 5.6 Towers of Hanoi Example
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

### QuickSort Algorithm (Review)
> [!info] Definition: QuickSort
> It sorts a list by dividing it into two sub-lists. Between the sub-lists there is a selected value known as the pivot. The algorithm exchanges the other values in the list until all the elements in sub-list 1 are less than the pivot, and all the elements in sub-list 2 are greater than the pivot.

- The algorithm repeats the procedure on sub-list 1, and then on sub-list 2.
- The recursion stops when there is only one element in a sub-list. At that point, the original list is completely sorted.
- The algorithm is coded primarily in two functions: `quickSort` and `partition`.
- `quickSort` is a recursive function.

> [!note] Overlap with Previous Chapter
> QuickSort was covered in detail in the previous chapter. The code structure for `quickSort` and `partition` remains the same.

## 5.7 Exhaustive Algorithms
> [!info] Definition: Exhaustive Algorithm
> An exhaustive algorithm finds a best combination of items by looking at all the possible combinations.

> [!example] Example: Coin Change
> Finding change for a certain amount of money that uses the fewest coins.
> - The user enters the amount of money in terms of cents.
> - The output is a set of coins which has the same amount as the input with the minimum number of coins.

## 5.8 Recursive vs Iteration

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

# Chapter 6: Strings and Vectors

## 6.1 Introduction to Strings
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

## 6.2 C++ String Class
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

## 6.3 Vectors
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

---

# Chapter 7: Pointers and Dynamic Variables

## 7.1 Pointer Data Type
> [!info] Definition: Pointer Data Type
> Every variable is allocated a section of memory large enough to hold a value of the variable's data type.
> - Each byte of memory has a unique address.
> - A variable's address is the address of the first byte allocated to that variable.
> - The address operator (`&`), when placed in front of a variable name, returns the address of that variable.

**General Concept:**
- Pointers store memory addresses of variables in hexadecimal format.
- Addresses are normally shown in hexadecimal in C++.

> [!example] Example: Accessing Address and Size of a Variable
> ```cpp
> int x = 25;
> cout << "The address of x is " << &x << endl;
> cout << "The size of x is " << sizeof(x) << " bytes\n";
> cout << "The value in x is " << x << endl;
> ```
> **Output:**
> ```text
> The address of x is 0x8f05
> The size of x is 4 bytes
> The value in x is 25
> ```

## 7.2 Pointer Variables
> [!info] Definition: Pointer Variable
> A pointer variable is a special variable that holds a memory address. It "points" to some piece of data stored in the computer's memory, allowing you to work with that data indirectly.

> [!warning] Reference vs. Pointer
> Do not confuse the address operator (`&`) with the `&` symbol used when defining a reference variable.
> - **Reference Variable:** Acts as an alias or an alternate name for an existing variable. Anything done to the reference variable is directly done to the variable it references.
> - **Pointer Variable:** Operates at a lower level and does not automatically do as much work for you. You must explicitly dereference it to access/modify the value.

> [!example] Example: Reference Variables
> ```cpp
> int main()
> {
>     int a = 10;
>     int &b = a; // b is a reference variable
>     cout << a << "\t" << b << "\n"; // Output: 10   10
>     b = 100;
>     cout << a << "\t" << b << "\n"; // Output: 100  100
>     a = 200;
>     cout << a << "\t" << b << "\n"; // Output: 200  200
>     return 0;
> }
> ```

### Why Use Pointer Variables?
- Dynamic memory allocation.
- Useful in algorithms that manipulate arrays and work with certain types of strings (C-strings).
- Creating and working with objects, and sharing access to those objects.
- Indirectly accessing and modifying the variable being pointed to using the **indirection (dereferencing) operator (`*`)**.

### Declaring and Initializing Pointers
- Place an asterisk (`*`) in front of the variable name to declare a pointer:
  ```cpp
  int *ptr;
  int* ptr; // Equivalent
  ```
- The data type (e.g., `int`) indicates that the pointer holds the address of an integer variable.
- **`nullptr`:** Introduced in C++11, `nullptr` points to address 0 of the memory and should be used to initialize pointers to avoid dangling pointers.
  ```cpp
  int *ptr = nullptr;
  ```

> [!example] Example: Storing Address and Dereferencing
> ```cpp
> int main()
> {
>     int x = 25;
>     int *ptr = nullptr;
>     ptr = &x; // Store the address of x in ptr
>     
>     cout << "The value in x is " << x << endl; // Output: 25
>     cout << "The address of x is " << ptr << endl; // Output: 0x7e00
>     
>     cout << "Dereferenced value: " << *ptr << endl; // Output: 25
>     *ptr = 100; // Manipulating the content of x via ptr
>     cout << "New value of x: " << x << endl; // Output: 100
>     return 0;
> }
> ```

> [!note] Three Uses of Asterisk (`*`) in C++
> 1. **Multiplication Operator:** `distance = speed * time;`
> 2. **Pointer Variable Definition:** `int *ptr = nullptr;`
> 3. **Indirection (Dereferencing) Operator:** `*ptr = 100;`

> [!warning] Common Mistake: Uninitialized Pointers
> When a pointer is declared, it does not point to any variable automatically. You **must** set the pointer to point to a valid address before dereferencing it.
> ```cpp
> // ILLEGAL / DANGEROUS
> int *p;
> *p = 100; // Error! Points to some random memory address
> 
> // CORRECT
> int *p;
> int x;
> p = &x;
> *p = 100; // Safe
> ```

## 7.3 Arrays and Pointers Relationship
- An array name, without brackets and a subscript, represents the starting address of the array. Thus, an array name is really a pointer.
- `*numbers` retrieves the value of the first element in the `numbers` array.

> [!example] Example: Array Name as a Pointer
> ```cpp
> int main()
> {
>     short numbers[] = {10, 20, 30, 40, 50};
>     cout << "The first element of the array is ";
>     cout << *numbers << endl; // Output: 10
>     return 0;
> }
> ```

### Pointer Arithmetic with Arrays
- When you add an integer value to a pointer, you are actually adding that `value * sizeof(data_type)` being referenced by the pointer.
- For a `short` array (each element is 2 bytes):
  - `*(numbers + 1)` is actually accessing the address `numbers + 1 * 2 bytes`.
  - `*(numbers + 2)` is actually accessing the address `numbers + 2 * 2 bytes`.
- **General Rule:** `array[index]` is equivalent to `*(array + index)`.

> [!warning] Array Bounds
> C++ performs no bounds checking on arrays. When stepping through an array with a pointer, it is possible to access an address outside the array, causing undefined behavior or crashes.

> [!note] Address Assignment
> The address operator `&` is not needed when assigning an array's address to a pointer, because the name of an array is already an address:
> ```cpp
> int *ptr = numbers; // Correct
> // int *ptr = &numbers; // Incorrect!
> ```
> However, use the address operator to get the address of an individual element:
> ```cpp
> ptr = &numbers[1]; // Correct
> ```

> [!example] Example: Accessing Array Elements using Pointer Notation
> ```cpp
> int main()
> {
>     const int SIZE = 5;
>     int numbers[SIZE];
>     
>     cout << "Enter " << SIZE << " numbers: ";
>     for (int count = 0; count < SIZE; count++)
>         cin >> *(numbers + count);
>         
>     cout << "Here are the numbers you entered:\n";
>     for (int count = 0; count < SIZE; count++)
>         cout << *(numbers + count) << " ";
>     cout << endl;
>     return 0;
> }
> ```

### Array Subscripting with Pointer Variables
- You can use the subscript operator `[]` on pointer variables just like array names.
- The only difference between array names and pointer variables is that **you cannot change the address an array name points to** (it is a constant pointer).

> [!example] Example: Legal and Illegal Pointer Operations
> ```cpp
> double readings[20], totals[20];
> double *dptr = nullptr;
> 
> dptr = readings; // LEGAL (dptr points to readings)
> dptr = totals;   // LEGAL (dptr points to totals)
> // readings = totals; // ILLEGAL (cannot change readings array address)
> // totals = dptr;     // ILLEGAL (cannot change totals array address)
> ```

## 7.4 Pointer Arithmetic Operations
- **Increment and Decrement:** `numPtr++` and `numPtr--` advance or regress the pointer by the size of one element of the underlying data type.
- **Integer Addition and Subtraction:** Adding/subtracting an integer to/from a pointer (`ptr + 4`, `ptr - 2`, `ptr += 2`, `ptr -= 1`).
- **Pointer Subtraction:** A pointer can be subtracted from another pointer of the same type to find the number of elements between them.
- **Illegal Operations:** You cannot multiply or divide pointers.

## 7.5 Pointers as Function Parameters
- Pointers can be passed as parameters to functions, allowing the function to modify the variable in the calling function (similar to pass-by-reference).

> [!example] Example: Modifying Value via Pointer Parameter
> ```cpp
> void doubleValue(int *val)
> {
>     *val *= 2; // Doubles the variable pointed to by val
> }
> 
> int main()
> {
>     int x = 5;
>     doubleValue(&x);
>     cout << x << endl; // Output: 10
>     return 0;
> }
> ```

> [!warning] Modifying the Pointer Itself
> In the function above, you cannot manipulate the pointer variable itself (e.g., make it point to another address and have it affect the caller's pointer). If you want to change the pointer address inside the function, you must pass it **by reference**:
> ```cpp
> void doubleValue(int *&val)
> {
>     val += 2; // Modifies the pointer itself, making it point 2 elements forward
> }
> ```

## 7.6 Dynamic Memory Allocation
- **Dynamic Memory Allocation:** Allocating memory during execution using the `new` operator.
  ```cpp
  int *iptr = nullptr;
  iptr = new int; // Allocates memory for a single int
  ```
- **Exceptions:** If the system runs out of memory and cannot allocate the requested space, C++ throws an exception and terminates the program.
- **Deallocating Memory:** To prevent memory leaks, dynamically allocated memory must be released using `delete` when no longer needed.
  ```cpp
  delete iptr; // Frees memory for a single variable
  iptr = nullptr; // Reset pointer to prevent dangling reference
  ```

### Dynamic Arrays
- You can allocate arrays dynamically when the size is not known until runtime.
- Use the brackets version of `new` and `delete`:
  ```cpp
  int *iptr = new int[100]; // Allocate array of 100 ints
  delete [] iptr; // Free array memory
  ```

> [!warning] Memory Leak
> Failure to release dynamically allocated memory using `delete` or `delete []` before the pointer variable goes out of scope results in a **memory leak**, where the memory remains allocated but inaccessible.

> [!example] Example: Dynamic Array of Custom Size
> ```cpp
> int main()
> {
>     double *sales = nullptr;
>     int numDays;
>     
>     cout << "How many days of sales figures do you wish to process? ";
>     cin >> numDays;
>     
>     sales = new double[numDays]; // Dynamic allocation
>     
>     cout << "Enter the sales figures below:\n";
>     for (int count = 0; count < numDays; count++)
>     {
>         cout << "Day " << (count + 1) << ": ";
>         cin >> sales[count];
>     }
>     
>     // Process data...
>     
>     delete [] sales; // Deallocation
>     sales = nullptr;
>     return 0;
> }
> ```

## 7.7 Shallow vs. Deep Copy
- **Shallow Copy:** Copying only the pointer address from one pointer to another. Both pointers end up pointing to the same memory location.
  ```cpp
  int *first = new int[10];
  int *second = first; // Shallow copy
  ```
  > [!warning] Shallow Copy Hazard
  > If `delete [] second;` is executed, the array is deleted. However, `first` still points to that address, making `first` an invalid/dangling pointer. Modifying or deleting `first` after this will cause errors.

- **Deep Copy:** Allocating separate memory for the destination pointer and copying the actual data values element-by-element.
  ```cpp
  int *first = new int[10];
  // ... store data in first ...
  int *second = new int[10]; // Allocate new memory
  for (int j = 0; j < 10; j++)
      second[j] = first[j]; // Deep copy
  ```

## 7.8 Dynamic Multi-Dimensional (2D) Arrays
There are two primary ways to create 2D arrays dynamically:

### 7.8.1 Array of Pointers (Fixed Rows, Dynamic Columns)
- Declaring an array of pointers:
  ```cpp
  int *board[4]; // Array of 4 pointers to int (rows are fixed at 4)
  ```
- Each pointer is then dynamically allocated columns:
  ```cpp
  for (int row = 0; row < 4; row++)
      board[row] = new int[6]; // Each row has 6 columns
  ```

### 7.8.2 Pointer to a Pointer (Dynamic Rows and Columns)
- Declaring a pointer to a pointer:
  ```cpp
  int **board = nullptr;
  ```
- Dynamically allocating the rows (an array of pointers to `int`):
  ```cpp
  board = new int*[10]; // Allocates 10 rows
  ```
- Dynamically allocating the columns for each row:
  ```cpp
  for (int row = 0; row < 10; row++)
      board[row] = new int[15]; // 15 columns per row
  ```

## 7.9 Pointers and Classes
- You can create pointers to objects of a class.
- Access public member functions using the member pointer selection operator (`->`).

> [!example] Example: Pointers to Objects
> ```cpp
> class classExample {
> public:
>     void setX(int a) { x = a; }
>     void print() { cout << "X = " << x << endl; }
> private:
>     int x;
> };
> 
> int main()
> {
>     classExample *cExpPtr = nullptr;
>     classExample cExpObject;
>     cExpPtr = &cExpObject;
>     
>     cExpPtr->setX(5);
>     cExpPtr->print(); // Output: X = 5
>     return 0;
> }
> ```

### Classes with Pointer Data Members (Memory Leak Prevention)
- If a class contains a pointer data member, the constructor or other member functions might allocate dynamic memory.
- When an object goes out of scope, its non-pointer member variables are destroyed, but the dynamically allocated memory pointed to by its pointer data member is **not** automatically freed. This leads to a memory leak.
- **Solution:** You must define a **destructor** in the class to explicitly delete the dynamic memory.

> [!example] Example: Destructor Deallocating Pointer Member
> ```cpp
> class pointerDataClass {
> public:
>     pointerDataClass() { p = new int[50]; } // Constructor allocates array
>     ~pointerDataClass(); // Destructor declaration
> private:
>     int x;
>     int lenP;
>     int *p;
> };
> 
> // Destructor definition
> pointerDataClass::~pointerDataClass()
> {
>     delete [] p; // Explicitly free dynamic memory
> }
> ```

---

# Chapter 8: Exceptions

Exceptions are used to signal errors or unexpected events that occur while a program is running. They provide a structured way to handle complex error conditions that may arise during execution.

## 8.1 Throwing and Handling Exceptions

In C++, error testing is often done using standard `if` statements or conditional checks (e.g., checking if a denominator is zero before performing division). However, when error checking is placed inside functions that return a value, standard return values may not suffice:
- E.g., returning `0` in a division function when the denominator is zero. Since `0` is a valid mathematical quotient, the calling function cannot distinguish between a successful calculation returning `0` and a failure.
- Exceptions solve this by bypassing the normal return channel to notify the caller of a runtime error.

### Throwing an Exception
An exception is a value or an object that signals an error.
- **Syntax:** The `throw` keyword followed by an argument representing the error value/object.
- **Throw Point:** The line of code where the `throw` statement is executed.
- The thrown argument can be of any type (e.g., a primitive type like `int` or `double`, a string, or a class object).

> [!example] Example 1: Throwing an Exception on Division by Zero
> ```cpp
> double divide(int numerator, int denominator) {
>     if (denominator == 0) {
>         string exceptionString = "ERROR: Cannot divide by zero.\n";
>         throw exceptionString; // Throw point
>     }
>     return static_cast<double>(numerator) / denominator;
> }
> ```

### Handling Exceptions
When a `throw` statement is executed, the normal program flow is interrupted, and control is transferred to an **exception handler**.
- **`try` block:** Encloses the code that calls functions or executes statements that might throw an exception.
- **`catch` block:** The exception handler itself. It follows immediately after the `try` block and specifies an **Exception Parameter** matching the type of the exception it can handle.
- A single `try` block can be followed by multiple `catch` blocks to handle different types of exceptions.
- If no exception is thrown in the `try` block, the `catch` blocks are completely bypassed, and execution resumes after the try/catch structure.

> [!example] Example 2: Catching a String Exception
> ```cpp
> int main() {
>     int num1, num2;
>     double quotient;
>     
>     cout << "Enter two numbers: ";
>     cin >> num1 >> num2;
>     
>     try {
>         quotient = divide(num1, num2);
>         cout << "The quotient is " << quotient << endl;
>     }
>     catch (string exceptionString) {
>         cout << exceptionString; // Handles the error
>     }
>     
>     cout << "End of the program.\n";
>     return 0;
> }
> ```

---

## 8.2 Object-Oriented Exception Handling (Exceptions with Classes)

Instead of throwing primitive data types, you can define custom classes to represent specific exceptions. This is particularly useful for separating interface error declarations.
- An exception class is typically defined as a nested class publically within the class whose member functions might throw it.
- **Syntax:** Nested exception class declaration.
  ```cpp
  class Rectangle {
  public:
      class NegativeSize { }; // Nested exception class
      // ...
  };
  ```
- **Throwing:** Throw an instance of the nested exception class using constructor syntax.
  ```cpp
  throw NegativeSize();
  ```
- **Catching:** Specify the nested class name using the scope resolution operator (`::`).
  ```cpp
  catch (Rectangle::NegativeSize) { ... }
  ```

> [!example] Example: Class-Based Exception Handling
> **`Rectangle.h`**
> ```cpp
> #ifndef RECTANGLE_H
> #define RECTANGLE_H
> 
> class Rectangle {
> private:
>     double width;
>     double length;
> public:
>     class NegativeSize { }; // Exception class
>     
>     Rectangle() { width = 0.0; length = 0.0; }
>     void setWidth(double);
>     void setLength(double);
>     double getArea() const { return width * length; }
> };
> #endif
> ```
> 
> **`Rectangle.cpp`**
> ```cpp
> #include "Rectangle.h"
> 
> void Rectangle::setWidth(double w) {
>     if (w >= 0)
>         width = w;
>     else
>         throw NegativeSize(); // Throwing class exception
> }
> 
> void Rectangle::setLength(double len) {
>     if (len >= 0)
>         length = len;
>     else
>         throw NegativeSize(); // Throwing class exception
> }
> ```
> 
> **`main.cpp`**
> ```cpp
> #include "Rectangle.h"
> 
> int main() {
>     Rectangle myRectangle;
>     try {
>         myRectangle.setWidth(5.0);
>         myRectangle.setLength(-2.0); // Throws NegativeSize
>     }
>     catch (Rectangle::NegativeSize) {
>         cout << "Error: A negative value was entered.\n";
>     }
>     return 0;
> }
> ```

---

## 8.3 Multiple Exceptions

A program can test for multiple types of errors and throw different types of exceptions.
- C++ allows catching multiple exceptions, but **each exception must be of a different type**.
- To handle this, write multiple `catch` blocks in sequence after the `try` block.

> [!example] Example: Distinguishing Between Negative Width and Negative Length
> **`Rectangle.h`**
> ```cpp
> class Rectangle {
> public:
>     class NegativeWidth { };  // Separate exception class for width
>     class NegativeLength { }; // Separate exception class for length
>     
>     void setWidth(double w) {
>         if (w < 0) throw NegativeWidth();
>         width = w;
>     }
>     void setLength(double len) {
>         if (len < 0) throw NegativeLength();
>         length = len;
>     }
>     // ...
> };
> ```
> 
> **`main.cpp`**
> ```cpp
> int main() {
>     Rectangle myRectangle;
>     try {
>         myRectangle.setWidth(-1.0);
>         myRectangle.setLength(5.0);
>     }
>     catch (Rectangle::NegativeWidth) {
>         cout << "Error: A negative value entered for width.\n";
>     }
>     catch (Rectangle::NegativeLength) {
>         cout << "Error: A negative value entered for length.\n";
>     }
>     return 0;
> }
> ```

---

## 8.4 Exception Handlers to Recover from Errors

In many interactive applications, you do not want the program to halt when an exception is thrown. Instead, you can use exception handlers to recover and prompt the user for valid data.
- **Recovery Pattern:** Place the user input and try/catch block inside a loop (e.g., `while (tryAgain)`).
- When a valid input is successfully processed without throwing an exception, set `tryAgain = false` to break the loop.
- If an exception is caught, display an error message and prompt the user to input data again.

> [!example] Example: Interactive Input Validation Loop
> ```cpp
> int main() {
>     double width;
>     bool tryAgain = true;
>     Rectangle myRectangle;
>     
>     cout << "Enter the rectangle's width: ";
>     cin >> width;
>     
>     while (tryAgain) {
>         try {
>             myRectangle.setWidth(width);
>             tryAgain = false; // Bypasses loop if no exception is thrown
>         }
>         catch (Rectangle::NegativeWidth) {
>             cout << "Please enter a nonnegative value: ";
>             cin >> width; // Retry input
>         }
>     }
>     return 0;
> }
> ```

---

## 8.5 Extracting Data from the Exception Class

Exception classes can contain member variables and functions, allowing the throwing function to pass diagnostic data (like the invalid value itself) back to the exception handler.
- Pass the invalid value to the constructor of the exception class and store it in a member variable.
- Define a member function (a getter) in the exception class to retrieve this data in the `catch` block.

> [!example] Example: Accessing Diagnostic Data from Exception Object
> **`Rectangle.h`**
> ```cpp
> class Rectangle {
> public:
>     class NegativeWidth {
>     private:
>         double value;
>     public:
>         NegativeWidth(double val) { value = val; }
>         double getValue() const { return value; }
>     };
>     
>     void setWidth(double w) {
>         if (w < 0) 
>             throw NegativeWidth(w); // Pass the bad value to constructor
>         width = w;
>     }
>     // ...
> };
> ```
> 
> **`main.cpp`**
> ```cpp
> int main() {
>     Rectangle myRectangle;
>     try {
>         myRectangle.setWidth(-15.5);
>     }
>     catch (Rectangle::NegativeWidth e) { // Catch exception object
>         cout << "Error: " << e.getValue() << " is an invalid value for width.\n";
>     }
>     return 0;
> }
> ```

---

## 8.6 Unwinding the Stack

Once an exception is thrown, the program cannot return to the throw point.
- The function executing the `throw` statement terminates immediately.
- If the exception is not caught in the immediate function, the calling function also terminates, propagating the exception up the call stack until a matching handler is found or the program terminates.
- **Stack Unwinding:** The process where the call stack is popped to find a handler.
- **Resource Management & Destructors:** As the stack unwinds, any local objects created in the `try` block or functions called since then have their **destructors automatically called**. This prevents memory/resource leaks of objects when an exception propagates.

---

## 8.7 Rethrowing an Exception

Try blocks can be nested within each other. In complex architectures, an inner catch block might want to handle part of the error locally (e.g., log it to a file or increment a counter) but still let the outer context know that an exception occurred.
- A catch block can rethrow the current exception by executing a blank `throw;` statement (with no argument).
- The exception is then passed to the next outer `try/catch` construct.

> [!example] Example: Local Logging and Rethrowing
> ```cpp
> #include <iostream>
> using namespace std;
> 
> void doSomething() {
>     try {
>         throw 10;
>     }
>     catch (int x) {
>         cout << "Inner Catch: Logged error locally.\n";
>         throw; // Rethrows the exception to the caller
>     }
> }
> 
> int main() {
>     try {
>         doSomething();
>     }
>     catch (int x) {
>         cout << "Outer Catch: Handled rethrown exception of value " << x << endl;
>     }
>     return 0;
> }
> ```
> **Output:**
> ```text
> Inner Catch: Logged error locally.
> Outer Catch: Handled rethrown exception of value 10
> ```

---

## 8.8 Handling the `bad_alloc` Exception

When the `new` operator fails to allocate requested memory (e.g., if the system runs out of memory), C++ throws a `bad_alloc` exception by default (rather than returning a null pointer).
- To catch this exception, include the `<new>` header directive.
- The `bad_alloc` exception class resides in the `std` namespace.

> [!example] Example: Catching `bad_alloc`
> ```cpp
> #include <iostream>
> #include <new> // Required for bad_alloc
> using namespace std;
> 
> int main() {
>     double *ptr = nullptr;
>     try {
>         // Attempting to allocate an extremely large array
>         ptr = new double[100000000000000]; 
>     }
>     catch (bad_alloc) {
>         cout << "Error: Insufficient memory allocated.\n";
>     }
>     return 0;
> }
> ```

---

# Chapter 9: Testing and Debugging

## 9.1 Introduction to Testing and Debugging
- Once a program has been designed, written, and successfully compiled and linked without errors, it is easy to assume that it works correctly.
- This is especially true if the program runs without aborting and produces output that seems "reasonable" at first glance.
- However, just because a program runs and produces output does not mean that it is correct.
- The program may still contain **logic errors** that cause the output to be incorrect under certain conditions.
## 9.2 Hand Tracing
> [!info] Definition: Hand Tracing
> Hand tracing is a debugging process where you pretend that you are the computer executing a program.
> Step through each of the program's statements one by one in sequence.

**Process:**
- Construct a chart (table) containing a column for each variable in the program.
- Step through the code from top to bottom.
- After each statement executes, record the updated contents of each variable in the corresponding column of the chart.

This process is highly effective for locating mathematical mistakes and other logic errors.

> [!example] Example: Hand Tracing Average Calculation
> Consider the following C++ code snippet that is supposed to calculate the average of three numbers:
> ```cpp
> int main() {
>     double num1, num2, num3, avg;
>     cout << "Enter the first number: ";
>     cin >> num1; // Input: 5
>     cout << "Enter the second number: ";
>     cin >> num2; // Input: 10
>     cout << "Enter the third number: ";
>     cin >> num3; // Input: 15
>     avg = num1 + num2 + num3 / 3;
>     cout << "The average is " << avg << endl;
>     return 0;
> }
> ```
> 
> **Hand Tracing Chart:**
> | Statement / Line | `num1` | `num2` | `num3` | `avg` |
> | :--- | :---: | :---: | :---: | :---: |
> | `double num1, num2, num3, avg;` | ? | ? | ? | ? |
> | `cin >> num1;` (user enters 5) | 5 | ? | ? | ? |
> | `cin >> num2;` (user enters 10) | 5 | 10 | ? | ? |
> | `cin >> num3;` (user enters 15) | 5 | 10 | 15 | ? |
> | `avg = num1 + num2 + num3 / 3;` | 5 | 10 | 15 | 20 |
> 
> **Revealed Error:**
> - The expected average of 5, 10, and 15 is 10.0. However, the hand trace shows `avg` is calculated as 20.0.
> - **Analysis:** Due to operator precedence, C++ evaluates division (`/`) before addition (`+`). The expression is evaluated as:
>   $$avg = num1 + num2 + \frac{num3}{3} = 5 + 10 + \frac{15}{3} = 5 + 10 + 5 = 20$$
> - **Correction:** Parentheses must be added to force the addition to occur first:
>   ```cpp
>   avg = (num1 + num2 + num3) / 3;
>   ```

## 9.3 Test Data Sets
- To determine if a program works correctly, it must be tested with data whose correct output is already known or can be predicted.
- **Quality over Quantity:** A small set of well-thought-out, high-quality test cases provides significantly more information about how a program works than twice as many random or poorly chosen test cases.
- **Design Principle:** Each test case should be designed to test a specific aspect of the program, and you must know exactly what each test set is verifying.

> [!example] Example: Test Case Analysis for Student Score Program
> Consider a program designed to prompt for a student's name and two scores, validate that each score is between 0 and 100 (non-inclusive of boundaries in the buggy version), calculate the average, and repeat until the user enters 'Q' or 'q' to quit.
> 
> **Buggy Code Snippet:**
> ```cpp
> int main() {
>     string name;
>     int count = 1, score, totalScore = 0;
>     double average;
>     cout << fixed << showpoint << setprecision(1);
>     cout << "Enter the first name of student " << count << " (or Q to quit): ";
>     cin >> name;
>     while (name != "Q" && name != "q") {
>         cout << "Enter score 1: ";
>         cin >> score;
>         if (score <= 0 || score >= 100) {
>             cout << "Score must be between 0 and 100. Please reenter: ";
>             cin >> score;
>         }
>         totalScore += score;
>         cout << "Enter score 2: ";
>         cin >> score;
>         if (score <= 0 || score >= 100) {
>             cout << "Score must be between 0 and 100. Please reenter: ";
>             cin >> score;
>         }
>         totalScore += score;
>         average = totalScore / 2;
>         cout << name << setw(6) << average << endl;
>         cout << "Enter the first name of student " << count++ << " (or Q to quit): ";
>         cin >> name;
>     }
>     return 0;
> }
> ```
> 
> **Test Cases and Revealed Errors:**
> | Test Case Characteristic | Input Sequence | Expected Correct Result | Actual Result / Error Revealed |
> | :--- | :--- | :--- | :--- |
> | **1. Standard Valid Test** | `Ali 80 90 Q` | `Ali 85.0` | `Ali 85.0` (Works as expected) |
> | **2. Decimal-Result Test** | `Ali 80 81 Q` | `Ali 80.5` | `Ali 80.0`. **Error:** Integer division `totalScore / 2` drops the fractional part because both operands are integers. To fix, cast or use a double literal: `totalScore / 2.0`. |
> | **3. Multiple-Student Test** | `Ali 80 90 Sara 70 80 Q` | `Ali 85.0`<br>`Sara 75.0` | `Ali 85.0`<br>`Sara 160.0`. **Error:** `totalScore` is not reset to `0` inside the loop for each new student, leading to accumulating scores. |
> | **4. Lower Boundary Test** | `Ali 0 80 Q` | `Ali 40.0` | Prompted to re-enter score. **Error:** Score of `0` is wrongly rejected. The validation condition `score <= 0` should be `score < 0` if `0` is a valid score. |
> | **5. Upper Boundary Test** | `Ali 100 80 Q` | `Ali 90.0` | Prompted to re-enter score. **Error:** Score of `100` is wrongly rejected. The validation condition `score >= 100` should be `score > 100` if `100` is a valid score. |
> | **6. Repeated Invalid Input** | `Ali -5 -10 80 90 Q` | Keep prompting until a valid score is entered | Accepts `-10`. **Error:** Validation uses an `if` statement instead of a `while` loop, allowing a second consecutive invalid input to pass through unchecked. |
> | **7. Incorrect Student Indexing** | `Ali 80 90 Sara 70 80 Q` | Sequence prompts: `student 1`, `student 2` | Prompts `student 1` for both Ali and Sara. **Error:** The post-increment `count++` in the loop prompt evaluates to the current count (1) before incrementing to 2, so it prompts "student 1" again. To fix, increment `count` separately or use `++count`. |

## 9.4 Stubs and Drivers
> [!info] Definition: Stubs and Drivers
> Stubs and drivers are diagnostic tools used to test and debug programs that rely on functions. They allow programmers to isolate and test individual functions independently of the rest of the program.

### Stubs
> [!info] Definition: Stub
> A stub is a dummy or placeholder function that is called instead of the actual function it represents during development.

- Typically, a stub displays a simple diagnostic message indicating that it was successfully called, along with the arguments passed to it, and returns a dummy test value.
- **Purpose:** Stubs let you focus testing on the overall flow and the parts of the program that call the function, without needing the actual function implementation to be ready.

> [!example] Example of a Stub
> ```cpp
> int sum(int num1, int num2) {
>     cout << "The sum function was called with the following arguments:\n"
>          << "1st number: " << num1 << endl 
>          << "2nd number: " << num2 << endl;
>     cout << "This function returns an integer to the calling function.\n";
>     return 0; // Returns dummy test value
> }
> ```

> [!tip] Extra Notes: Slide 21 Syntax Errors
> In the original lecture slide (Slide 21), the `sum` stub function code contains compiler syntax errors:
> 1. **Missing Semicolon:** The first `cout` statement lacks an ending semicolon.
> 2. **Smart Quotes:** The string literals use curly/smart double quotes `“` and `”` instead of straight ones (`"`), which will fail to compile in standard C++.
> 
> *The code example above shows the corrected C++ version.*

### Drivers
> [!info] Definition: Driver
> A driver is a program or script designed specifically to test a particular function in isolation by calling it directly.

- **Purpose:** If the function accepts arguments, the driver passes predetermined test data. If it returns a value, the driver displays the return value on the screen, allowing you to verify that the function performs correctly before integrating it into the larger project.

> [!example] Example 1: Static Variable Driver/Test
> A driver program to verify the behavior of a static counter function:
> ```cpp
> #include <iostream>
> using namespace std;
> 
> void counter();
> 
> int main() {
>     counter(); // Output: Function called 1 times.
>     counter(); // Output: Function called 2 times.
>     counter(); // Output: Function called 3 times.
>     return 0;
> }
> 
> void counter() {
>     static int count = 0;
>     count++;
>     cout << "Function called " << count << " times." << endl;
> }
> ```

> [!example] Example 2: Default Argument Testing Driver
> A driver program to verify parameter defaulting:
> ```cpp
> #include <iostream>
> using namespace std;
> 
> double calculateCost(double price, double taxRate = 0.05);
> 
> int main() {
>     cout << "Total cost with default tax: ";
>     cout << calculateCost(100) << endl; // Output: 105
>     
>     cout << "Total cost with custom tax: ";
>     cout << calculateCost(100, 0.1) << endl; // Output: 110
>     return 0;
> }
> 
> double calculateCost(double price, double taxRate) {
>     return price + (price * taxRate);
> }
> ```

> [!tip] Extra Notes: Slide 24 Syntax & Semantic Errors
> In the original lecture slide (Slide 24), the default argument testing driver code has several issues:
> 1. **Prototype Typo:** The prototype is declared as `double calculateCost(doube, double = 0.05);` with `doube` instead of `double`.
> 2. **Smart Quotes & Comma:** Curly double quotes are used, and the third print ends with a comma instead of a semicolon (`cout << "Total cost with custom tax: “,`).
> 3. **Redefined Default Argument:** The default value `= 0.05` is specified in both the function prototype and the function definition. In C++, default arguments must only be defined once (usually in the prototype/declaration).
> 
> *The code example above shows the corrected C++ version.*

> [!example] Example 3: Reference Parameter Verification Driver
> A driver to verify swapping variables by reference:
> ```cpp
> #include <iostream>
> using namespace std;
> 
> void swap(int &a, int &b);
> 
> int main() {
>     int x = 5, y = 10;
>     cout << "Before swap: x = " << x << ", y = " << y << endl; // 5, 10
>     swap(x, y);
>     cout << "After swap: x = " << x << ", y = " << y << endl;  // 10, 5
>     return 0;
> }
> 
> void swap(int &a, int &b) {
>     int temp = a;
>     a = b;
>     b = temp;
> }
> ```

> [!example] Example 4: Validation and Program Exit Driver
> A driver verifying critical validation paths:
> ```cpp
> #include <iostream>
> #include <cstdlib>
> using namespace std;
> 
> void checkNumber(int);
> 
> int main() {
>     int num;
>     cout << "Enter a number: ";
>     cin >> num;
>     checkNumber(num);
>     cout << "You entered: " << num << endl;
>     return 0;
> }
> 
> void checkNumber(int n) {
>     if (n < 0) {
>         cout << "Negative No. Exiting program." << endl;
>         exit(1);
>     }
> }
> `````

---

# Chapter 10: Templates and STL

## 10.1 Function Templates
A function template is a "generic" function that can work with any data type. The programmer writes the specifications of the function but substitutes parameter names for actual data types.

> [!info] Definition: Function Template
> A "generic" function definition that serves as a mold or template from which the compiler can generate one or more actual functions at compile-time based on the types used in calls.

### Core Concepts
- **Not an Actual Function:** A function template by itself does not consume memory or generate machine code. It is merely a blueprint.
- **Compiler Code Generation:** When the compiler encounters a call to a template function, it examines the data types of the arguments passed and automatically generates the matching function code (this is called template instantiation).
- **Generic Data Types:** Type parameters are used to specify generic data types inside the template prefix.

> [!note] Important Rules for Function Templates
> - All type parameters defined in the template prefix must appear at least once in the function's parameter list.
> - An actual instance of the function is created in memory only when the compiler encounters a call to it.
> - If a user-defined class object is passed to a template function, the class must support all operations performed on that parameter in the template (e.g., if the template uses `*`, the class must contain an overloaded `*` operator).

### Syntax of a Function Template
The general syntax begins with the template prefix:
```cpp
template <class T>
T square(T number)
{
    return number * number;
}
```
- **Template Prefix:** `template <class T>` tells the compiler that the following definition is a template, and that `T` is a generic type parameter.
- **Type Parameter:** `class T` (or `typename T`) declares `T` as a generic placeholder type that will be replaced with an actual data type (such as `int` or `double`) when the function is instantiated.

> [!example] Visualizing Code Generation
> Let's look at the difference between regular overloaded functions and a template definition:
> 
> **Regular Overloads (Manual Duplication):**
> ```cpp
> int square(int number) {
>     return number * number;
> }
> double square(double number) {
>     return number * number;
> }
> ```
> 
> **Template Definition (Compiler Handles Instances):**
> When the programmer calls `square(4)` and `square(6.2)`, the compiler automatically instantiates:
> 1. `int square(int number) { return number * number; }`
> 2. `double square(double number) { return number * number; }`

### Complete Implementation Example
Here is a complete program demonstrating the declaration and usage of the `square` template:

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

// Function template definition
template <class T>
T square(T num)
{
    return num * num;
}

int main()
{
    int userInt;
    double userDouble;
    
    cout << setprecision(5);
    cout << "Enter an integer and a floating-point value: ";
    cin >> userInt >> userDouble;
    
    // The compiler generates two separate versions of square at compile-time
    cout << "Here are their squares: ";
    cout << square(userInt) << " and " << square(userDouble) << endl;
    
    return 0;
}
```

### Reference Parameters in Function Templates
Function templates can also use reference variables to pass parameters by reference.

> [!example] Example: Generic Value Swapper
> Below is a function template that swaps the contents of two variables of the same type:
> ```cpp
> template <class T>
> void swapVars(T &var1, T &var2)
> {
>     T temp;
>     temp = var1;
>     var1 = var2;
>     var2 = temp;
> }
> ```

Here is a driver program demonstrating `swapVars` working with `char`, `int`, and `double` data types:

```cpp
#include <iostream>
using namespace std;

template <class T>
void swapVars(T &var1, T &var2)
{
    T temp;
    temp = var1;
    var1 = var2;
    var2 = temp;
}

int main()
{
    char firstChar, secondChar;
    int firstInt, secondInt;
    double firstDouble, secondDouble;

    cout << "Enter two characters: ";
    cin >> firstChar >> secondChar;
    swapVars(firstChar, secondChar);
    cout << firstChar << " " << secondChar << endl;

    cout << "Enter two integers: ";
    cin >> firstInt >> secondInt;
    swapVars(firstInt, secondInt);
    cout << firstInt << " " << secondInt << endl;

    cout << "Enter two floating-point numbers: ";
    cin >> firstDouble >> secondDouble;
    swapVars(firstDouble, secondDouble);
    cout << firstDouble << " " << secondDouble << endl;

    return 0;
}
```

### Function Templates with Multiple Data Types
You can define templates that accept multiple generic types by separating them with commas in the template prefix:
```cpp
template <class T1, class T2>
```

> [!note] Best Practice
> Each type parameter declared in the template prefix is recommended to be used somewhere in the template definition.

> [!example] Example: Determining the Larger Type Size
> This function compares the memory sizes of two different parameters and returns the larger size in bytes:
> ```cpp
> #include <iostream>
> using namespace std;
> 
> template <class T1, class T2>
> int largest(const T1 &var1, T2 &var2)
> {
>     if (sizeof(var1) > sizeof(var2))
>         return sizeof(var1);
>     else
>         return sizeof(var2);
> }
> 
> int main()
> {
>     int i = 0;
>     char c = ' ';
>     float f = 0.0;
>     double d = 0.0;
>     
>     cout << "Comparing an int and a double, the largest\n"
>          << "of the two is " << largest(i, d) << " bytes.\n"; // int (4) vs double (8) -> returns 8
>          
>     cout << "Comparing a char and a float, the largest\n"
>          << "of the two is " << largest(c, f) << " bytes.\n"; // char (1) vs float (4) -> returns 4
>          
>     return 0;
> }
> ```

### Overloading Function Templates
Like regular functions, function templates can be overloaded.
- Each overloaded template must have a unique parameter list so the compiler can resolve which template to use.
- The templates must be defined before they are called.

> [!example] Example: Overloaded `sum` Template
> ```cpp
> // Overload 1: Computes the sum of two values
> template <class T>
> T sum(T val1, T val2)
> {
>     return val1 + val2;
> }
> 
> // Overload 2: Computes the sum of three values
> template <class T>
> T sum(T val1, T val2, T val3)
> {
>     return val1 + val2 + val3;
> }
> ```

### How to Start Designing Templates
It is much easier to convert an existing, working function into a template than it is to design and write a template from scratch.
1. Write the function first as a regular function with a specific type (e.g., `int` or `double`).
2. Test and debug it to make sure it works correctly.
3. Once working, add the template prefix (e.g., `template <class T>`).
4. Replace the specific type names inside the function parameter list, return type, and local declarations with the type parameter placeholder `T`.

> [!tip] Extra Notes: typename vs class
> In C++ template prefixes, the keywords `class` and `typename` are completely interchangeable. For instance, `template <class T>` and `template <typename T>` behave identically. Historically, `class` was the original keyword, but `typename` was added to reduce confusion since templates can be parameterized with primitive types (like `int` or `char`), which are not actual classes.

> [!tip] Extra Notes: Compilation and Linking of Templates
> Unlike regular functions, templates are compiled on-demand. Since the compiler needs to see the template definition (not just its declaration) to instantiate the code, template definitions are almost always written directly in header files (`.h` or `.hpp`) rather than separated into `.cpp` implementation files. Placing template definitions in a `.cpp` file can lead to unresolved external symbol errors during linking.

## 10.2 Class Templates
Just as function templates allow us to write generic functions, class templates allow us to create generic classes and Abstract Data Types (ADTs).

> [!info] Definition: Class Template
> A blueprint for a class where member variables and/or member functions can use placeholder types, enabling the class to handle different data types without code duplication.

### Core Concepts
- **Preventing Duplication:** Class templates allow the programmer to write a single definition for a class instead of creating duplicate classes (e.g., `IntStack`, `DoubleStack`, `StringStack`) to handle different data types.
- **Explicit Instantiation:** Unlike function templates where the compiler can often infer type parameters from arguments, class templates **must** be instantiated with explicit type arguments (e.g., `<int>`, `<double>`) enclosed in angle brackets at the point of object definition.

### Syntax of a Class Template
Here is an example class template called `grade`:
```cpp
template <class T>
class grade
{
private:
    T score;
public:
    grade(T s) { score = s; }
    void setGrade(T s) { score = s; }
    T getGrade() { return score; }
};
```
- The template prefix `template <class T>` is placed immediately before the class definition.
- The type parameter `T` is used as the data type for the private member `score`, constructor argument, mutator argument, and accessor return type.

### Instantiating Class Objects
To define objects of a class template, pass the concrete type inside angle brackets:
```cpp
grade<int> testList[20];      // Array of 20 grade objects holding integer scores
grade<double> quizList[20];   // Array of 20 grade objects holding double scores
```
Once defined, these objects are used exactly like ordinary class objects:
```cpp
testList[0].setGrade(95);
quizList[0].setGrade(88.5);
```

### Defining Member Functions Outside the Class Definition
If you define member functions of a class template outside the class definition body, you must define them as function templates. The syntax requires:
1. The template prefix before each function definition.
2. The class name qualified with the type parameter (e.g., `ClassName<T>::FunctionName`).

> [!example] Example: Out-of-Class Member Function Definitions
> ```cpp
> template <class T>
> class grade
> {
> private:
>     T score;
> public:
>     grade(T s);
>     void setGrade(T s);
>     T getGrade();
> };
> 
> // Constructor definition
> template <class T>
> grade<T>::grade(T s)
> {
>     score = s;
> }
> 
> // Mutator definition
> template <class T>
> void grade<T>::setGrade(T s)
> {
>     score = s;
> }
> 
> // Accessor definition
> template <class T>
> T grade<T>::getGrade()
> {
>     return score;
> }
> ```

### Class Templates and Inheritance
Class templates can participate in inheritance hierarchies. A class template can inherit from another class template:
```cpp
template <class T>
class Rectangle
{
protected:
    T width;
    T length;
public:
    Rectangle(T w, T l) : width(w), length(l) {}
};

template <class T>
class Square : public Rectangle<T>
{
public:
    Square(T side) : Rectangle<T>(side, side) {}
};
```
> [!important] Crucial Inheritance Rule
> When deriving a class template from another class template, you must use the type parameter `T` (e.g., `<T>`) everywhere the base class name is referenced in the derived class declaration (such as `public Rectangle<T>`).

> [!tip] Extra Notes: Class Templates with Non-Type Parameters
> Class templates can also accept non-type parameters (also called value parameters), which are typically integers. These parameters act as compile-time constants.
> ```cpp
> template <class T, int size>
> class ArrayWrapper {
> private:
>     T arr[size]; // Statically-allocated array whose size is set at compile-time
> public:
>     T& operator[](int index) { return arr[index]; }
> };
> 
> // Usage:
> ArrayWrapper<int, 50> myIntArray; // Array of 50 integers
> ArrayWrapper<double, 10> myDoubleArray; // Array of 10 doubles
> ```

> [!tip] Extra Notes: Default Template Arguments
> Just as functions can have default parameter values, class templates can have default type arguments:
> ```cpp
> template <class T = int>
> class Counter {
>     T value;
> };
> // Usage:
> Counter<> myCounter; // Defaults to Counter<int>
> ```

## 10.3 Introduction to the Standard Template Library (STL)
The Standard Template Library (STL) is a powerful library of generic, reusable classes and functions in C++ that implement many commonly used data structures and algorithms.

> [!info] Definition: Standard Template Library (STL)
> A software library included in the C++ Standard Library containing generic containers, iterators, algorithms, and function objects.

### Core Components of STL
The STL is built upon three primary components:
1. **Containers:** Class templates that store and organize data in memory (e.g., arrays, linked lists, vectors).
2. **Iterators:** Pointer-like objects used to traverse the elements of a container. They act as the bridge between containers and algorithms.
3. **Algorithms:** Function templates that perform operations on containers (e.g., sorting, searching, copying) via iterators.

---

## 10.4 Introduction to Containers
A container is an STL class template designed to hold and organize elements in memory.

### Categories of Containers
STL containers are broadly classified into three types:
- **Sequence Containers:** Store elements in a linear sequence (e.g., `vector`, `list`, `deque`).
- **Associative Containers:** Store data in a sorted order for fast lookup (e.g., `set`, `map`). They use keys to access values.
- **Container Adapters:** Provide a restricted interface to sequence containers (e.g., `stack` (LIFO), `queue` (FIFO), `priority_queue`).

### Vector: A Dynamic Sequence Container
A `vector` is a sequence container that represents a dynamic array. It can grow or shrink in size automatically as elements are added or removed.

> [!example] Example: Vector Member Functions
> Here is a program demonstrating the usage of basic member functions like `size()`, `push_back()`, and `pop_back()`:
> ```cpp
> #include <iostream>
> #include <vector>
> using namespace std;
> 
> int main() { 
>     int count; 
>     vector<int> vect; 
>     
>     // Get initial size
>     cout << "vect starts with " << vect.size() << " elements.\n"; 
>     
>     // Append elements to the end of vector
>     for (count = 0; count < 10; count++) 
>         vect.push_back(count); 
>         
>     cout << "Now vect has " << vect.size() << " elements. Here they are:\n"; 
>     for (count = 0; count < vect.size(); count++) 
>         cout << vect[count] << " "; 
>     cout << endl; 
>     
>     // Remove elements from the end
>     cout << "Popping the values out of vect...\n"; 
>     for (count = 0; count < 10; count++) 
>         vect.pop_back(); 
>         
>     cout << "Now vect has " << vect.size() << " elements.\n"; 
>     return 0;
> }
> ```
> **Output:**
> ```text
> vect starts with 0 elements.
> Now vect has 10 elements. Here they are:
> 0 1 2 3 4 5 6 7 8 9 
> Popping the values out of vect...
> Now vect has 0 elements.
> ```

---

## 10.5 Introduction to Iterators
An iterator is an object that behaves like a pointer. It is used to point to and access individual elements within a container, allowing traversal.

### Core Iterator Operations
- `*iter` (Dereference): Accesses the element currently pointed to by the iterator.
- `iter++` / `iter--`: Moves the iterator forward or backward to the next/previous element.
- `begin()`: Member function of containers returning an iterator to the **first** element.
- `end()`: Member function of containers returning an iterator pointing to the element **just past the last element** (half-open range: `[begin, end)`).

> [!example] Example: Traversing Vector with Iterators
> The following program demonstrates how to declare an iterator and use it to traverse a vector in both forward and backward directions:
> ```cpp
> #include <iostream>
> #include <vector>
> using namespace std;
> 
> int main() { 
>     int count; 
>     vector<int> vect; 
>     
>     // Declaring an iterator for a vector of integers
>     vector<int>::iterator iter; 
>     
>     for(count = 0; count < 10; count++) 
>         vect.push_back(count); 
>         
>     cout << "Here are the values in vect: "; 
>     // Forward traversal using begin() and end()
>     for(iter = vect.begin(); iter < vect.end(); iter++) 
>         cout << *iter << " "; 
>         
>     cout << "\nand here they are backwards: "; 
>     // Backward traversal using end() - 1 and begin()
>     for(iter = vect.end() - 1; iter >= vect.begin(); iter--) 
>         cout << *iter << " "; 
>         
>     cout << endl;
>     return 0;
> }
> ```
> **Output:**
> ```text
> Here are the values in vect: 0 1 2 3 4 5 6 7 8 9 
> and here they are backwards: 9 8 7 6 5 4 3 2 1 0 
> ```

> [!tip] Extra Notes: The Half-Open Range [begin, end)
> STL uses half-open ranges. The iterator returned by `end()` does **not** point to a valid element; it points to the memory location immediately following the last element. Dereferencing `end()` causes undefined behavior. This design simplifies loops because the condition `iter != end()` is true as long as there are elements left to process.

## 10.6 STL Algorithms
The algorithms provided by the STL are implemented as function templates and perform various operations on elements of containers. They are designed to operate on container elements indirectly through iterators.

To use STL algorithms, you must include the `<algorithm>` header:
```cpp
#include <algorithm>
```

Here are 8 key algorithms provided by the STL:

### 10.6.1 `binary_search`
Tests whether a target value exists within a sorted range.
- **Complexity:** $O(\log n)$ comparisons.
- **Requirement:** The container elements must be sorted in ascending order before calling this function.
- **Return Type:** Returns `true` if the target is found, otherwise `false`.

> [!example] Code & Output: `binary_search`
> ```cpp
> #include <iostream>
> #include <vector>
> #include <algorithm> // Required for binary_search
> using namespace std;
> 
> int main() {
>     vector<int> numbers {10, 20, 30, 40, 50};
>     int target = 30;
>     
>     if (binary_search(numbers.begin(), numbers.end(), target))
>         cout << target << " was found in the vector!" << endl;
>     else
>         cout << target << " was not found." << endl;
>         
>     return 0;
> }
> ```
> **Output:**
> ```text
> 30 was found in the vector!
> ```

---

### 10.6.2 `count`
Counts the number of elements in a range that are equal to a specified target value.

> [!example] Code & Output: `count`
> ```cpp
> #include <iostream>
> #include <vector>
> #include <algorithm> // Required for count
> using namespace std;
> 
> int main() { 
>     vector<int> numbers {10, 20, 30, 20, 40, 20, 50};
>     int target = 20;
>     
>     int totalCount = count(numbers.begin(), numbers.end(), target);
>     cout << "The value " << target << " appears " << totalCount << " times." << endl;
>     
>     return 0;
> }
> ```
> **Output:**
> ```text
> The value 20 appears 3 times.
> ```

---

### 10.6.3 `find`
Locates the first occurrence of a specified value in a range.
- **Complexity:** Linear time $O(n)$.
- **Return Value:** An iterator to the first matching element. If no match is found, it returns the end iterator (`container.end()`).

> [!example] Code & Output: `find`
> ```cpp
> #include <iostream>
> #include <vector>
> #include <algorithm> // Required for find
> using namespace std;
> 
> int main() { 
>     vector<int> numbers {10, 20, 30, 40, 50};
>     int target = 40; 
>     
>     vector<int>::iterator resultIter = find(numbers.begin(), numbers.end(), target); 
>     
>     if (resultIter != numbers.end()) {
>         cout << "Found target " << target << "!" << endl;
>         // Calculate index by subtracting the beginning iterator
>         int index = resultIter - numbers.begin();
>         cout << "Found at location: " << index + 1 << endl;
>         cout << "Value stored at iterator location: " << *resultIter << endl;
>     } else {
>         cout << target << " was not found in the container." << endl;
>     }
>     return 0;
> }
> ```
> **Output:**
> ```text
> Found target 40!
> Found at location: 4
> Value stored at iterator location: 40
> ```

---

### 10.6.4 `for_each`
Applies a specified function or function object to each element within a range, from beginning to end.

> [!example] Code & Output: `for_each`
> ```cpp
> #include <iostream>
> #include <vector>
> #include <algorithm> // Required for for_each
> using namespace std;
> 
> void printDoubled(int element) { 
>     cout << (element * 2) << " ";
> }
> 
> int main() { 
>     vector<int> numbers {5, 10, 15, 20}; 
>     cout << "Doubled values: "; 
>     for_each(numbers.begin(), numbers.end(), printDoubled); 
>     cout << endl; 
>     return 0;
> }
> ```
> **Output:**
> ```text
> Doubled values: 10 20 30 40 
> ```

---

### 10.6.5 `max_element`
Finds the largest element in a range.
- **Return Value:** An iterator pointing to the first occurrence of the largest element. Returns the end iterator if the range is empty.

> [!example] Code & Output: `max_element`
> ```cpp
> #include <iostream>
> #include <vector>
> #include <algorithm> // Required for max_element
> using namespace std;
> 
> int main() { 
>     vector<int> numbers {23, 89, 45, 71, 12}; 
>     vector<int>::iterator maxIter = max_element(numbers.begin(), numbers.end()); 
>     
>     if (maxIter != numbers.end()) { 
>         cout << "The largest value is: " << *maxIter << endl; 
>         int index = maxIter - numbers.begin(); 
>         cout << "Found at index position: " << index << endl;
>     } else { 
>         cout << "The vector is empty." << endl;
>     }
>     return 0;
> }
> ```
> **Output:**
> ```text
> The largest value is: 89
> Found at index position: 1
> ```

---

### 10.6.6 `min_element`
Finds the smallest element in a range.
- **Return Value:** An iterator pointing to the first occurrence of the smallest element.

> [!example] Code & Output: `min_element`
> ```cpp
> #include <iostream>
> #include <vector>
> #include <algorithm> // Required for min_element
> using namespace std;
> 
> int main() { 
>     vector<int> numbers {67, 34, 89, 12, 55}; 
>     vector<int>::iterator minIter = min_element(numbers.begin(), numbers.end()); 
>     
>     if (minIter != numbers.end()) { 
>         cout << "The smallest value is: " << *minIter << endl; 
>         int index = minIter - numbers.begin(); 
>         cout << "Found at index position: " << index << endl;
>     } else {
>         cout << "The vector is empty." << endl;
>     }
>     return 0;
> }
> ```
> **Output:**
> ```text
> The smallest value is: 12
> Found at index position: 3
> ```

---

### 10.6.7 `random_shuffle`
Shuffles the elements in a range into a random order.
- **Note:** Uses a pseudorandom generator. It is common to seed `srand` using `time(0)`.

> [!example] Code & Output: `random_shuffle`
> ```cpp
> #include <iostream>
> #include <vector>
> #include <algorithm> // Required for random_shuffle
> #include <ctime>     // Required for time
> #include <cstdlib>   // Required for srand and rand
> using namespace std;
> 
> int main() { 
>     srand(time(0)); // Seed randomizer
>     vector<int> numbers {1, 2, 3, 4, 5, 6, 7, 8}; 
>     
>     cout << "Before shuffle: "; 
>     for (int num : numbers) 
>         cout << num << " "; 
>     cout << endl; 
>     
>     random_shuffle(numbers.begin(), numbers.end()); 
>     
>     cout << "After shuffle: "; 
>     for (int num : numbers) 
>         cout << num << " "; 
>     cout << endl; 
>     return 0;
> }
> ```
> **Output (Example):**
> ```text
> Before shuffle: 1 2 3 4 5 6 7 8 
> After shuffle: 5 1 3 8 2 7 4 6 
> ```

---

### 10.6.8 `sort`
Sorts the elements of a range in ascending order.
- **Complexity:** $O(n \log n)$ average and worst-case comparisons (using Introsort).

> [!example] Code & Output: `sort`
> ```cpp
> #include <iostream>
> #include <vector>
> #include <algorithm> // Required for sort
> using namespace std;
> 
> int main() { 
>     vector<int> numbers {45, 12, 89, 23, 71, 5}; 
>     
>     cout << "Before sorting: "; 
>     for (int num : numbers) 
>         cout << num << " "; 
>     cout << endl; 
>     
>     sort(numbers.begin(), numbers.end()); 
>     
>     cout << "After sorting: "; 
>     for (int num : numbers) 
>         cout << num << " "; 
>     cout << endl; 
>     return 0;
> }
> ```
> **Output:**
> ```text
> Before sorting: 45 12 89 23 71 5 
> After sorting: 5 12 23 45 71 89 
> ```

> [!tip] Extra Notes: Binary Search vs. Linear Search Complexity
> `std::binary_search` is much faster than `std::find` for large datasets because it runs in logarithmic time $O(\log n)$ by repeatedly halving the search space. However, it requires sorted input. If your data is unsorted, you must either sort it first (taking $O(n \log n)$ time) or use linear search (`std::find`), which takes $O(n)$ time.

> [!tip] Extra Notes: Deprecation and Removal of random_shuffle
> In modern C++, `std::random_shuffle` was deprecated in C++14 and completely removed in C++17 because it relied on the internal, low-quality `std::rand` generator. In modern projects, you should use `std::shuffle` along with standard C++11 random number generators, such as `std::mt19937`:
> ```cpp
> #include <random>
> #include <algorithm>
> // ...
> std::random_device rd;
> std::mt19937 g(rd());
> std::shuffle(numbers.begin(), numbers.end(), g);
> ```

## 10.7 Vector Class Template Member Functions
The `std::vector` class template provides a rich set of member functions to query and modify vector contents and manage capacity.

### Member Functions Reference Table

| Member Function | Description | Example Syntax |
| :--- | :--- | :--- |
| `at(element)` | Returns the value of the element located at the index `element`. Unlike the `[]` operator, `at()` performs bounds checking and throws an out-of-range exception if the index is invalid. | `x = vect.at(5);` |
| `back()` | Returns a reference to the last element in the vector. | `cout << vect.back() << endl;` |
| `begin()` | Returns an iterator pointing to the vector's first element. | `iter = vect.begin();` |
| `capacity()` | Returns the maximum number of elements that can be stored in the vector without allocating more memory. This is distinct from `size()`. | `x = vect.capacity();` |
| `clear()` | Deletes all elements from the vector, leaving it with a `size` of 0. | `vect.clear();` |
| `empty()` | Returns `true` if the vector contains zero elements; otherwise, returns `false`. | `if (vect.empty())` |
| `end()` | Returns an iterator pointing to the memory location immediately following the last element in the vector. | `iter = vect.end();` |
| `erase(iter)` | Removes the single element pointed to by the iterator `iter` from the vector. | `vect.erase(iter);` |
| `erase(iter1, iter2)` | Removes a range of elements starting at iterator `iter1` up to (but not including) iterator `iter2`. | `vect.erase(firstIter, secondIter);` |
| `front()` | Returns a reference to the first element in the vector. | `cout << vect.front() << endl;` |
| `insert(iter, value)` | Inserts `value` into the vector immediately before the element pointed to by iterator `iter`. | `vect.insert(iter, 22);` |
| `resize(n, value)` | Resizes the vector to contain `n` elements. If the vector grows, the new elements are initialized to `value`. | `vect.resize(10, 0);` |

> [!warning] Common Mistake: Reversing a Vector
> The lecture slide mentions `vect.reverse();`. However, in standard C++, `std::vector` does **not** have a `reverse()` member function. 
> 
> To reverse a vector, you must use the generic `std::reverse` algorithm from the `<algorithm>` library:
> ```cpp
> #include <algorithm>
> // ...
> std::reverse(vect.begin(), vect.end());
> ```
> *(Note: `std::list` does contain a `.reverse()` member function, which may be the source of this confusion).*

> [!tip] Extra Notes: size() vs capacity()
> It is important to distinguish between a vector's `size()` and its `capacity()`:
> - **Size:** The number of elements currently stored in the vector.
> - **Capacity:** The amount of elements the vector can store before it needs to reallocate its internal array to a larger memory block. Reallocation is an expensive $O(n)$ operation because it involves allocating new space, copying the existing elements, and deleting the old space. To avoid frequent reallocations, vectors typically double their capacity when full. You can pre-allocate memory using `vect.reserve(n)`.

---

# Chapter 11: Containers and Iterators

## 11.1 Introduction
> [!info] Objective
> By the end of this topic, you should be able to:
> 1. Differentiate between sequence containers, associative containers, and container adapters.
> 2. Detail the characteristics and performance trade-offs of vector, list, forward_list, and deque.
> 3. Compare ordered and unordered associative containers (sets, maps, multisets, multimaps).
> 4. Describe container adapters (stack, queue) and their underlying implementations.
> 5. Identify the five categories of iterators and map them to their compatible containers.

---

## 11.2 Part I: Sequence Containers
Sequence containers organize data in a linear sequence, similar to a standard array. Each element has a distinct position determined by its insertion order.

### 11.2.1 Vector (`vector`)
A dynamic array that allows fast random access but is inefficient for insertions or deletions anywhere other than at the end.
- **Header:** `#include <vector>`
- **Lookup:** $O(1)$ constant-time random access.
- **Insertion/Deletion:** $O(n)$ linear time if done in the middle (due to element shifting); $O(1)$ amortized at the end.

### 11.2.2 Singly Linked List (`forward_list`)
Added in C++11, this container represents a singly linked list. Each node contains a value and a pointer to the next node.
- **Header:** `#include <forward_list>`
- **Traversal:** Can only be traversed forward.
- **Insertion/Deletion:** $O(1)$ constant-time insertion or deletion at the beginning or after a given iterator. Highly memory-efficient as it does not store backward pointers.

> [!example] Complete C++ Implementation: `forward_list`
> ```cpp
> #include <iostream>
> #include <forward_list>
> using namespace std;
> 
> int main() {
>     forward_list<int> myList;
>     
>     // Insert elements at the front
>     myList.push_front(30);
>     myList.push_front(20);
>     myList.push_front(10);
>     myList.push_front(99); // List is now: {99, 10, 20, 30}
>     
>     // Remove first element
>     myList.pop_front(); // List is now: {10, 20, 30}
>     
>     cout << "Forward list elements: ";
>     for (int num : myList) {
>         cout << num << " ";
>     }
>     cout << endl;
>     return 0;
> }
> ```
> **Output:**
> ```text
> Forward list elements: 10 20 30
> ```

### 11.2.3 Doubly Linked List (`list`)
A doubly linked list where each node contains pointers to both the previous and next nodes.
- **Header:** `#include <list>`
- **Lookup:** $O(n)$ linear time. Random access is **not** supported.
- **Insertion/Deletion:** $O(1)$ constant-time insertion or deletion at any position once an iterator to the target position is acquired.

> [!example] Complete C++ Implementation: `list`
> ```cpp
> #include <iostream>
> #include <list>
> using namespace std;
> 
> int main() {
>     list<int> myList;
>     
>     // Append elements
>     myList.push_back(10);
>     myList.push_back(20);
>     myList.push_back(30);
>     myList.push_back(40); // List: {10, 20, 30, 40}
>     
>     // Remove last element
>     myList.pop_back(); // List: {10, 20, 30}
>     
>     cout << "List elements: ";
>     for (int num : myList) {
>         cout << num << " ";
>     }
>     cout << endl;
>     return 0;
> }
> ```
> **Output:**
> ```text
> List elements: 10 20 30
> ```

### 11.2.4 Double-Ended Queue (`deque`)
Pronounced "deck", this container provides the benefits of both vectors and lists in one class.

- **Header:** `#include <deque>`
- **Lookup:** $O(1)$ constant-time indexed access (using subscripting `[]`).
- **Insertion/Deletion:** $O(1)$ constant-time push and pop at both the front and the end. Inefficient for middle insertions.
- **Memory Architecture:** Unlike vectors, deques do not store elements in a single contiguous block of memory. Instead, they use a **manager object** containing an **address map** of pointers pointing to separate non-contiguous **heap memory chunks** (typically 512 bytes each). This prevents the need for a full reallocation of the entire container when growing.

```
       Manager Object (Address Map)
      +----+----+----+----+----+
      | &Z | &A | &B | &C | &D |
      +----+----+----+----+----+
        |    |    |
        |    |    +---> [ CHUNK B: 30 | 40 | 60 | .. ] -> Heap Region
        |    +--------> [ CHUNK A: 10 | 20 | .. ]
        +-------------> [ CHUNK Z:  5 | .. ]
```

> [!example] Complete C++ Implementation: `deque`
> ```cpp
> #include <iostream>
> #include <deque>
> using namespace std;
> 
> int main() {
>     deque<int> myDeque;
>     
>     myDeque.push_back(20);  // Deque: {20}
>     myDeque.push_back(30);  // Deque: {20, 30}
>     myDeque.push_front(10); // Deque: {10, 20, 30}
>     myDeque.push_front(99); // Deque: {99, 10, 20, 30}
>     myDeque.push_back(40);  // Deque: {99, 10, 20, 30, 40}
>     
>     myDeque.pop_front();    // Removes 99 -> Deque: {10, 20, 30, 40}
>     myDeque.pop_back();     // Removes 40 -> Deque: {10, 20, 30}
>     
>     cout << "Deque elements: ";
>     for (int i = 0; i < myDeque.size(); ++i) {
>         cout << myDeque[i] << " ";
>     }
>     cout << endl;
>     return 0;
> }
> ```
> **Output:**
> ```text
> Deque elements: 10 20 30
> ```

---

## 11.3 Part II: Associative Containers
Associative containers store data in an ordered (or hashed) structure where elements are accessed via keys rather than sequential indexes. This allows fast searches.

### 11.3.1 Key Container Types
1. **Set (`set`):** Stores a set of unique keys. Duplicate values are **not** allowed.
2. **Multiset (`multiset`):** Stores a set of keys. Duplicate values **are** allowed.
3. **Map (`map`):** Maps a set of unique keys to data elements (key-value pairs). Duplicate keys are **not** allowed.
4. **Multimap (`multimap`):** Maps keys to values. Duplicate keys **are** allowed (one-to-many relationship).

### 11.3.2 Ordered vs. Unordered Containers
Each associative container has an unordered counterpart (added in C++11): `unordered_set`, `unordered_multiset`, `unordered_map`, `unordered_multimap`.

- **Ordered Containers:**
  - **Structure:** Implemented internally using self-balancing binary search trees (usually Red-Black Trees).
  - **Order:** Elements are kept in sorted order based on keys (defaulting to ascending order using the `less<T>` comparator).
  - **Complexity:** $O(\log n)$ logarithmic search, insertion, and deletion.
- **Unordered Containers:**
  - **Structure:** Implemented internally using hash tables.
  - **Order:** Elements are unsorted; grouped into buckets based on hash values.
  - **Complexity:** $O(1)$ constant-time average search, insertion, and deletion. Offers much faster performance than ordered containers for large datasets when sorted traversal is not required.

---

### 11.3.3 Associative Containers Examples

> [!example] Complete C++ Implementation: `multiset` (Ordered vs. Unordered)
> ```cpp
> #include <iostream>
> #include <set>
> #include <unordered_set>
> using namespace std;
> 
> int main() {
>     // Ordered Multiset (Sorted automatically)
>     multiset<int> myMultiset;
>     myMultiset.insert(30);
>     myMultiset.insert(10);
>     myMultiset.insert(20);
>     myMultiset.insert(20); // Duplicate values allowed
>     myMultiset.insert(40); // Elements: {10, 20, 20, 30, 40}
>     myMultiset.erase(40);  // Elements: {10, 20, 20, 30}
>     
>     cout << "Ordered Multiset: ";
>     for (int num : myMultiset) cout << num << " ";
>     cout << endl;
>     
>     // Unordered Multiset (Hashed, unsorted)
>     unordered_multiset<int> myUnorderedMultiset;
>     myUnorderedMultiset.insert(30);
>     myUnorderedMultiset.insert(10);
>     myUnorderedMultiset.insert(20);
>     myUnorderedMultiset.insert(20);
>     
>     cout << "Unordered Multiset: ";
>     for (int num : myUnorderedMultiset) cout << num << " ";
>     cout << endl;
>     return 0;
> }
> ```
> **Output:**
> ```text
> Ordered Multiset: 10 20 20 30 
> Unordered Multiset: 20 20 10 30 
> ```

> [!example] Complete C++ Implementation: `set` (Ordered vs. Unordered)
> ```cpp
> #include <iostream>
> #include <set>
> #include <unordered_set>
> using namespace std;
> 
> int main() {
>     // Ordered Set
>     set<double> mySet;
>     mySet.insert(3.14);
>     mySet.insert(1.11);
>     mySet.insert(2.55);
>     mySet.insert(2.55); // Duplicate ignored!
>     mySet.insert(4.88); // Elements: {1.11, 2.55, 3.14, 4.88}
>     mySet.erase(4.88);
>     
>     cout << "Ordered Set: ";
>     for (double num : mySet) cout << num << " ";
>     cout << endl;
>     return 0;
> }
> ```
> **Output:**
> ```text
> Ordered Set: 1.11 2.55 3.14 
> ```

> [!example] Complete C++ Implementation: `multimap` (Ordered vs. Unordered)
> ```cpp
> #include <iostream>
> #include <map>
> #include <unordered_map>
> #include <string>
> using namespace std;
> 
> int main() {
>     // Ordered Multimap (keys sorted in ascending order)
>     multimap<int, string> schoolCatalog;
>     schoolCatalog.insert(make_pair(11, "Alice"));
>     schoolCatalog.insert(make_pair(9, "Bob"));
>     schoolCatalog.insert(make_pair(10, "Charlie"));
>     schoolCatalog.insert(make_pair(10, "David")); // Duplicate key (10) allowed
>     schoolCatalog.insert(make_pair(12, "Emma"));
>     schoolCatalog.erase(12);
>     
>     cout << "Ordered Multimap (Sorted by Grade):" << endl;
>     for (const auto& student : schoolCatalog) {
>         cout << "Grade " << student.first << ": " << student.second << endl;
>     }
>     return 0;
> }
> ```
> **Output:**
> ```text
> Ordered Multimap (Sorted by Grade):
> Grade 9: Bob
> Grade 10: Charlie
> Grade 10: David
> Grade 11: Alice
> ```

> [!example] Complete C++ Implementation: `map` (Ordered vs. Unordered)
> ```cpp
> #include <iostream>
> #include <map>
> #include <string>
> using namespace std;
> 
> int main() {
>     // Ordered Map (keys must be unique)
>     map<string, int> flightDelays;
>     flightDelays.insert(make_pair("JFK", 45));
>     flightDelays.insert(make_pair("LHR", 12));
>     flightDelays.insert(make_pair("HND", 0));
>     
>     // Attempt to insert duplicate key "JFK". 
>     // std::map::insert will ignore duplicate keys. The delay remains 45!
>     flightDelays.insert(make_pair("JFK", 90)); 
>     
>     flightDelays.erase("LHR");
>     
>     cout << "Ordered Map (Alphabetical):" << endl;
>     for (const auto& airport : flightDelays) {
>         cout << "Airport: " << airport.first << " | Delay: " << airport.second << " mins" << endl;
>     }
>     return 0;
> }
> ```
> **Output:**
> ```text
> Ordered Map (Alphabetical):
> Airport: HND | Delay: 0 mins
> Airport: JFK | Delay: 45 mins
> ```
> *Note: To update an existing key in a map, use subscript notation instead of insert: `flightDelays["JFK"] = 90;`*

---

## 11.4 Part III: Container Adapters
Container adapters are classes that wrap around standard sequence containers to present a restricted, specialized interface. They do **not** support iterators.

### 11.4.1 Stack Adapter (`stack`)
A Last-In, First-Out (LIFO) data structure. By default, it is implemented using a `std::deque` as the underlying container, but can also use `std::vector` or `std::list`.

- **Header:** `#include <stack>`
- **Key Operations:**
  - `push(element)`: Inserts element at the top (calls `push_back`).
  - `emplace(...)`: Constructs element in-place at the top.
  - `pop()`: Removes the top element (calls `pop_back`).
  - `top()`: Returns a reference to the top element (calls `back`).
  - `empty()`: Returns `true` if empty (calls `empty`).
  - `size()`: Returns the number of elements (calls `size`).

> [!example] Complete C++ Implementation: `stack`
> ```cpp
> #include <iostream>
> #include <stack>
> #include <string>
> using namespace std;
> 
> int main() {
>     stack<string> internetHistory;
>     
>     internetHistory.push("google.com");
>     internetHistory.emplace("wikipedia.org");
>     internetHistory.emplace("github.com");
>     
>     cout << "Initial stack size: " << internetHistory.size() << endl;
>     cout << "--- Backtracking (LIFO) ---" << endl;
>     while (!internetHistory.empty()) {
>         cout << "Current Page: " << internetHistory.top() << endl;
>         internetHistory.pop();
>     }
>     return 0;
> }
> ```
> **Output:**
> ```text
> Initial stack size: 3
> --- Backtracking (LIFO) ---
> Current Page: github.com
> Current Page: wikipedia.org
> Current Page: google.com
> ```

### 11.4.2 Queue Adapter (`queue`)
A First-In, First-Out (FIFO) data structure. By default, it uses a `std::deque` as the underlying container, but can also use `std::list`.

- **Header:** `#include <queue>`
- **Key Operations:**
  - `push(element)`: Inserts element at the back (calls `push_back`).
  - `pop()`: Removes element from the front (calls `pop_front`).
  - `front()`: Returns a reference to the front element (calls `front`).
  - `back()`: Returns a reference to the last element (calls `back`).

> [!example] Complete C++ Implementation: `queue`
> ```cpp
> #include <iostream>
> #include <queue>
> #include <string>
> using namespace std;
> 
> int main() {
>     queue<string> printQueue;
>     
>     printQueue.push("TaxReturn.pdf");
>     printQueue.push("Resume.pdf");
>     printQueue.push("Photo.jpg");
>     
>     cout << "Front item: " << printQueue.front() << endl;
>     cout << "Back item: " << printQueue.back() << endl;
>     cout << "--- Processing Print Queue (FIFO) ---" << endl;
>     while (!printQueue.empty()) {
>         cout << "Printing: " << printQueue.front() << endl;
>         printQueue.pop();
>     }
>     return 0;
> }
> ```
> **Output:**
> ```text
> Front item: TaxReturn.pdf
> Back item: Photo.jpg
> --- Processing Print Queue (FIFO) ---
> Printing: TaxReturn.pdf
> Printing: Resume.pdf
> Printing: Photo.jpg
> ```

---

## 11.5 Part IV: Iterators Detail

Iterators are generalizations of pointers. The type of container dictates the type of iterator supported:

### 11.5.1 Iterator Categories
1. **Forward Iterator:** Can only move forward in a container (supports `++`). Compatible with `std::forward_list`.
2. **Bidirectional Iterator:** Can move forward or backward (supports `++` and `--`). Compatible with `std::list`, `std::set`, `std::map`.
3. **Random-Access Iterator:** Can move forward/backward and jump to any index in constant time (supports `++`, `--`, `+`, `-`, `[]`, `<`, `>`). Compatible with `std::vector`, `std::deque`.
4. **Input Iterator:** Read-only iterator that can only move forward. Used to read from input streams.
5. **Output Iterator:** Write-only iterator that can only move forward. Used to write to output streams.






