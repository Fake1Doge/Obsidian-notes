# Topic 1: Structured Data

## 1.1 Abstract Data Types
> [!info] Definition: Abstract Data Type (ADT)
> A data type that specifies the values that can be stored and the operations that can be done on the values.

* The user of an ADT does not need to know the implementation of the data type (e.g., how the data is stored).
* ADTs are created by programmers.

> [!info] Definition: Abstraction
> A definition that captures general characteristics without details.
> *Example:* An abstract triangle is a 3-sided polygon. A specific triangle may be scalene, isosceles, or equilateral.

> [!info] Definition: Data Type
> Defines the values that can be stored in a variable and the operations that can be performed on it.

## 1.2 Combining Data into Structures

> [!info] Definition: Structure
> A C++ construct that allows multiple variables to be grouped together.

### General Format
```cpp
struct <structName>
{
    type1 field1;
    type2 field2;
    // ...
};
```

### Example `struct` Declaration
```cpp
struct Student // structure tag
{
    int studentID;      // structure members
    string name;        // structure members
    short yearInSchool; // structure members
    double gpa;         // structure members
};
```

### `struct` Declaration Notes
* Must have a semicolon `;` after the closing brace `}`.
* `struct` names commonly begin with an uppercase letter.
* Multiple fields of the same type can be in a comma-separated list:
  ```cpp
  string name, address;
  ```

### Defining Variables
* A `struct` declaration **does not** allocate memory or create variables.
* To define variables, use the structure tag as the type name:
  ```cpp
  Student bill;
  ```

## 1.3 Accessing Structure Members
* Use the dot (`.`) operator to refer to members of `struct` variables:
  ```cpp
  cin >> stu1.studentID;
  getline(cin, stu1.name);
  stu1.gpa = 3.75;
  ```
* Member variables can be used in any manner appropriate for their data type.

### Displaying a `struct` Variable
> [!warning] Common Mistake
> Cannot output the entire structure at once.
> ```cpp
> cout << bill; // won't work
> ```

* Must display each field separately using the dot operator:
  ```cpp
  cout << bill.studentID << endl;
  cout << bill.name << endl;
  cout << bill.yearInSchool;
  cout << " " << bill.gpa;
  ```

### Comparing `struct` Variables
> [!warning] Common Mistake
> Cannot compare `struct` variables directly.
> ```cpp
> if (bill == william) // won't work
> ```

* Must compare on a field basis:
  ```cpp
  if (bill.studentID == william.studentID) // ...
  ```

## 1.4 Initializing a Structure
* A `struct` variable can be initialized when defined:
  ```cpp
  Student s = {11465, "Joan", 2, 3.75};
  ```
* Can also be initialized member-by-member after definition:
  ```cpp
  s.name = "Joan";
  s.gpa = 3.75;
  ```

### More on Initializing a Structure
* May initialize only some members:
  ```cpp
  Student bill = {14579};
  ```
* Cannot skip over members:
  ```cpp
  Student s = {1234, "John", , 2.83}; // illegal
  ```
* Cannot initialize in the structure declaration, since this does not allocate memory.

## 1.5 Arrays of Structures
* Structures can be defined in arrays.
* Can be used in place of parallel arrays.
  ```cpp
  const int NUM_STUDENTS = 20;
  Student stuList[NUM_STUDENTS];
  ```
* Individual structures are accessible using subscript notation.
* Fields within structures are accessible using dot notation:
  ```cpp
  cout << stuList[5].studentID;
  ```

## 1.6 Nested Structures
A structure can contain another structure as a member:
```cpp
struct PersonInfo
{
    string name, address, city;
};

struct Student
{
    int studentID;
    PersonInfo pData; // Nested structure
    short yearInSchool;
    double gpa;
};
```

### Members of Nested Structures
* Use the dot operator multiple times to refer to fields of nested structures:
  ```cpp
  Student s;
  s.pData.name = "Joanne";
  s.pData.city = "Tulsa";
  ```

## 1.7 Structures as Function Arguments
* May pass members of `struct` variables to functions:
  ```cpp
  computeGPA(stu.gpa);
  ```
* May pass entire `struct` variables to functions:
  ```cpp
  showData(stu);
  ```
* Can use a reference parameter if the function needs to modify the contents of the structure variable.

### Structures as Function Arguments - Notes
* Using a **value parameter** for a structure can slow down a program and waste space.
* Using a **reference parameter** will speed up the program, but the function may change the data in the structure.
* Using a **`const` reference parameter** allows read-only access to the reference parameter, does not waste space, and increases speed.

> [!example] Example: Using `const` Reference
> ```cpp
> void showItem(const InventoryItem &p)
> {
>     cout << fixed << showpoint << setprecision(2);
>     cout << "Part Number: " << p.partNum << endl;
>     // ...
> }
> ```

## 1.8 Returning a Structure from a Function
* A function can return a `struct`:
  ```cpp
  Student getStudentData(); // prototype
  stu1 = getStudentData(); // call
  ```
* The function must define a local structure for internal use and for use with the `return` statement.

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
> [!info] Structured Binding Declaration
> Defines a set of variables and initializes them with the values that are stored in a structure. This process is known as *unpacking a structure*. (Introduced in C++ 17). Can also be used to unpack arrays.

### General Format
```cpp
auto [variable1, variable2, etc...] = structureVar;
```

### Example
```cpp
struct Automobile
{
    string make;
    int year;
    double mileage;
};

Automobile car = { "Porsche", 2020, 12400.0 };
auto [first, second, third] = car;

cout << first << endl; // Porsche
cout << second << endl; // 2020
cout << third << endl; // 12400.0
```

## 1.10 Pointers to Structures
* A structure variable has an address.
* Pointers to structures are variables that can hold the address of a structure:
  ```cpp
  Student *stuPtr;
  ```
* Can use the `&` operator to assign an address:
  ```cpp
  stuPtr = &stu1;
  ```
* A structure pointer can be a function parameter.

### Accessing Structure Members via Pointer Variables
* Must use `()` to dereference the pointer variable, not the field within the structure:
  ```cpp
  cout << (*stuPtr).studentID;
  ```
* Can use the **structure pointer operator** (`->`) to eliminate `()` and use clearer notation:
  ```cpp
  cout << stuPtr->studentID;
  ```

## 1.12 Enumerated Data Types
> [!info] Enumerated Data Type
> A programmer-defined data type consisting of values known as **enumerators**, which represent integer constants.

### Example
```cpp
enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY };
```
* The identifiers `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, and `FRIDAY` are enumerators. They represent the values that belong to the `Day` data type.
* Note that the enumerators are **not strings**, so they aren't enclosed in quotes. They are identifiers.

### Defining Variables
Once you have created an enumerated data type, you can define variables of that type:
```cpp
Day workDay; // Defines workDay as a variable of the Day type.
```

### Assigning Values
You may assign any of the enumerators to a variable of the `Day` type:
```cpp
workDay = WEDNESDAY;
```

### What is an Enumerator?
* Think of it as an integer named constant.
* Internally, the compiler assigns integer values to the enumerators, **beginning at 0**.
* *In memory:* MONDAY = 0, TUESDAY = 1, WEDNESDAY = 2, THURSDAY = 3, FRIDAY = 4.

> [!example] Outputting Enumerators
> ```cpp
> cout << MONDAY << " " << WEDNESDAY << " " << FRIDAY << endl;
> ```
> *Output:* `0 2 4`

### Assigning an Integer to an `enum` Variable
> [!warning] Common Mistake
> You cannot directly assign an integer value to an `enum` variable.
> ```cpp
> workDay = 3; // Error!
> ```

* Instead, you must cast the integer:
  ```cpp
  workDay = static_cast<Day>(3);
  ```

### Assigning an Enumerator to an `int` Variable
* You **CAN** assign an enumerator to an `int` variable.
  ```cpp
  int x;
  x = THURSDAY; // Assigns 3 to x
  ```

### Comparing Enumerator Values
* Enumerator values can be compared using the relational operators.
  ```cpp
  if (FRIDAY > MONDAY)
  {
      cout << "Friday is greater than Monday.\n";
  }
  ```

### Anonymous Enumerated Types
An anonymous enumerated type is simply one that does not have a name:
```cpp
enum { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY };
```

### Using Math Operators with `enum` Variables
> [!warning] Common Mistake
> ```cpp
> Day day1, day2;
> day1 = TUESDAY;
> day2 = day1 + 1; // ERROR! Will not work!
> ```
> The expression `day1 + 1` results in the integer value 2, and you cannot store an `int` in an `enum` variable.

* You can fix this by using a cast to explicitly convert the result to `Day`:
  ```cpp
  day2 = static_cast<Day>(day1 + 1);
  ```

### Using an `enum` Variable to Step through an Array's Elements
* Because enumerators are stored in memory as integers, you can use them as array subscripts:
  ```cpp
  double sales[NUM_DAYS];
  sales[MONDAY] = 1525.0;
  ```
> [!warning] Common Mistake
> You cannot use the `++` operator on an `enum` variable in a loop.
> ```cpp
> // ERROR!
> for (workDay = MONDAY; workDay <= FRIDAY; workDay++)
> ```

* You must rewrite the loop’s update expression using a cast instead of `++`:
  ```cpp
  for (workDay = MONDAY; workDay <= FRIDAY; workDay = static_cast<Day>(workDay + 1))
  ```

### Enumerators Must Be Unique Within the Same Scope
* Enumerators must be unique within the same scope (unless strongly typed).
* Example of an error:
  ```cpp
  enum Presidents { MCKINLEY, ROOSEVELT, TAFT };
  enum VicePresidents { ROOSEVELT, FAIRBANKS, SHERMAN }; // Error: ROOSEVELT is declared twice.
  ```

### Strongly Typed `enum`s
* In C++ 11 and later, you can use a new type of `enum`, known as a **strongly typed enum**.
* Allows you to have multiple enumerators in the same scope with the same name.
  ```cpp
  enum class Presidents { MCKINLEY, ROOSEVELT, TAFT };
  enum class VicePresidents { ROOSEVELT, FAIRBANKS, SHERMAN };
  ```
* **Prefix** the enumerator with the name of the `enum`, followed by the `::` operator:
  ```cpp
  Presidents prez = Presidents::ROOSEVELT;
  VicePresidents vp = VicePresidents::ROOSEVELT;
  ```
* Use a cast operator to retrieve the integer value:
  ```cpp
  int x = static_cast<int>(Presidents::ROOSEVELT);
  ```

### Declaring the Type and Defining the Variables in One Statement
* You can declare an enumerated data type and define one or more variables of the type in the same statement:
  ```cpp
  enum Car { PORSCHE, FERRARI, JAGUAR } sportsCar;
  ```
* This code declares the `Car` data type and defines a variable named `sportsCar`.