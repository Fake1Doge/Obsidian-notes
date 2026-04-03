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