---
title: Coding Memory (CCA101 & CKC112)
tags:
  - memory
  - cpp
  - oop
  - programming
  - rules
---

# Coding Memory: Programming Principles & OOP (C++)

> [!IMPORTANT] Scope of Usage
> The programming and object-oriented coding knowledge in this memory document must be used **ONLY** when working on coding assignments (e.g., Assignment 1 and Assignment 2 under `Y1S2/CKC112/`). Do not apply these rules or knowledge to general system operations or non-coding tasks.

---

## 1. Core C++ Programming Fundamentals (CCA101)

### Compilation & Execution Flow
1. **Source Code**: Human-readable high-level code (`.cpp`, `.h`).
2. **Preprocessor**: Processes directives starting with `#` (e.g., `#include`, `#define`).
3. **Compiler**: Translates source code into hardware-specific machine instructions (Object Code, `.obj` / `.o`).
4. **Linker**: Combines object code with external libraries to generate the final **Executable File** (`.exe` / `.out`).

### Data Types & Input/Output
* **Primitive Types**: `short` (2B), `int` (4B), `long` (4B), `long long` (8B), `float` (4B), `double` (8B), `char` (1B, ASCII-based), and `bool` (stored as `1`/`0`).
* **Console I/O**:
  * `cin >> var` stops reading at whitespace (spaces, tabs, newlines).
  * `getline(cin, stringVar)` reads a full line including whitespace.
  * Use `cin.get()` to read a single character (including whitespace).
  * Always use `cin.ignore()` to clear the newline character from the input buffer before calling `getline` after a standard `cin >>` read.
* **Output Formatting (`<iomanip>`)**:
  * `setw(n)`: Sets minimum width of the *next* output only.
  * `fixed`: Displays decimals in fixed-point notation.
  * `setprecision(n)`: Sets significant digits (or decimal places when combined with `fixed`).
  * `showpoint`: Forces the decimal point and trailing zeros to display.

### Control Flows & Validation
* **Relational/Logical Operators**: Precedence order is `!` $\rightarrow$ `&&` $\rightarrow$ `||`.
* **Short-Circuit Evaluation**:
  * For `&&`: If left operand is false, the right is skipped.
  * For `||`: If left operand is true, the right is skipped.
* **Switch Case**: The expression must evaluate to an `integer` or `char`. Each case requires a constant literal and a `break;` statement to prevent fall-through.
* **Input Validation**: Use `while` loops (pretest) to repeatedly prompt until valid input is received. Use `do-while` loops (posttest) for menus that must render at least once.

### Functions & Variable Lifetime
* **Pass by Value**: Passes a copy of the argument. Modifications inside the function do not affect the original variable.
* **Pass by Reference**: Uses an ampersand (e.g., `void func(int &x)`). Passes an alias to the original variable, allowing modifications.
* **Static Local Variables**: Declared with `static` inside a function. Retain their values across function calls and are initialized only once.
* **Default Arguments**: Must be specified starting from the **rightmost** parameter.
* **Function Overloading**: Multiple functions can share a name if they have unique parameter lists (number or type of parameters).

### Arrays & Vectors
* **C-Arrays**: Contiguous memory blocks of the same type.
  * Passed to functions by reference/address by default. For 2D arrays, the column size must be specified: `void func(int arr[][COLS], int rows)`.
  * > [!DANGER] Bounds Checking
    > C++ does NOT perform array bounds checking. Accessing `arr[SIZE]` or beyond corrupts memory and causes undefined behavior.
* **Vectors (`std::vector`)**: Dynamic arrays that automatically resize.
  * Use `.push_back(val)` to append elements. Do not use the `[]` operator to add new elements to indices that do not exist.
  * Retrieve size with `.size()`. Clear contents with `.clear()`. Remove last element with `.pop_back()`.

### Pointer & Memory Management
* **Basic Pointer Operations**:
  * `&` (address-of) retrieves a variable's memory address.
  * `*` (dereference/indirection) accesses or modifies the value at the address.
  * Initialize pointers to `nullptr` to avoid wild/dangling pointers.
* **Array-Pointer Equivalence**: The array name is a constant pointer to the first element. `arr[i]` is identical to `*(arr + i)`.
* **Dynamic Memory**:
  * Allocate on the heap using `new` (single element) or `new[]` (array).
  * Free memory using `delete` or `delete[]` to prevent memory leaks.
  * After deleting, set the pointer to `nullptr`.
  * > [!WARNING] Dangling Pointers
    > Never return a pointer to a local variable from a function. The local variable is destroyed when the function exits, leaving the pointer dangling.

---

## 2. Object-Oriented Programming (CKC112)

### Structures (`struct`)
* User-defined types grouping multiple variables.
* Members are accessed using the dot (`.`) operator.
* Can be initialized using initializer lists (cannot skip members).
* **Passing Structures**:
  * Pass by value creates copies, wasting time/memory.
  * Pass by reference allows modification.
  * **Preferred**: Pass by `const` reference (e.g., `const Student &s`) for read-only access with zero copy overhead.
* **Structure Pointers**: Access members using `->` (e.g., `ptr->member` is equivalent to `(*ptr).member`).
* **Structured Binding (C++17)**: `auto [var1, var2] = structVar;` unpacks structure fields.

### Enumerations (`enum`)
* **Standard Enums**: `enum Day { MON, TUE };`
  * Implicitly mapped to integers starting at 0.
  * Cannot directly assign an integer to an enum variable; requires casting: `dayVal = static_cast<Day>(intVal)`.
  * Standard math operations and `++` are illegal without casting.
* **Strongly Typed Enums (C++11)**: `enum class Day { MON, TUE };`
  * Keeps enumerators scoped to the enum class (prevents name clashes).
  * Requires scope resolution: `Day::MON`.
  * Does not implicitly convert to integers (requires explicit casting).

### Classes & Encapsulation
* Classes contain attributes (member variables) and behaviors/methods (member functions).
* **Access Specifiers**:
  * `private`: Default access specifier. Only accessible by member functions of the class.
  * `public`: Accessible from outside the class (defines the public interface).
  * `protected`: Accessible by the class and its derived classes.
* **Accessors & Mutators**: Accessors (getters) should be marked `const` (e.g., `double getWidth() const;`) to guarantee they do not modify the object's state.
* **Specification vs. Implementation**: Declare the class in a header specification file (`ClassName.h`) and define member functions in an implementation file (`ClassName.cpp`).

### Constructors & Destructors
* **Constructors**: Automatically invoked when an object is created. Share the class name, have no return type, and can be overloaded.
* **Default Constructor**: Takes no arguments. Written automatically by the compiler if *no* constructors are declared.
* **Constructor Delegation (C++11)**: A constructor can call another constructor in the same class in its initialization list.
* **Destructors**: Automatically invoked when an object is destroyed (or `delete` is called on dynamic instances). Named `~ClassName`, has no return type, takes no arguments, and cannot be overloaded. Used to free dynamically allocated class resources.

### Static & Friend Members
* **Static Member Variables**: Shared among all instances of a class. Must be defined outside the class declaration.
* **Static Member Functions**: Can be called without instantiating an object (e.g., `ClassName::func()`). Can only access static member variables or static member functions.
* **Friend Functions & Classes**: Declared using the `friend` keyword. Are not members of the class, but are granted full access to its `private` and `protected` members.

### Memory & Operator Management
* **Copy Constructor**: Used when a new object is initialized with another object of the same class.
  * Default copy constructor performs a shallow copy (memberwise copy). If the class manages dynamic memory, this causes both objects to point to the same memory, leading to crashes or data corruption.
  * **Solution**: Define a custom copy constructor to allocate separate memory (deep copy): `ClassName(const ClassName &source)`.
* **Operator Overloading**: Overloaded operators are functions named `operator<symbol>`.
  * Cannot change operator precedence, associativity, or the number of operands.
  * Cannot overload: `?:` (ternary), `.` (member access), `.*` (pointer-to-member), `::` (scope resolution), and `sizeof`.
  * To support operator chaining (e.g., `a = b = c`), the assignment operator should return `*this` by reference.
  * The `this` pointer is a hidden, predefined pointer available inside non-static member functions that points to the calling object.
* **Move Semantics (C++11)**:
  * Lvalues persist in memory; Rvalues are temporary.
  * Rvalue reference (`&&`) allows binding to temporaries.
  * Move constructor / Move assignment operator "steals" pointers from temporary objects (setting source pointers to `nullptr`) instead of deep-copying, increasing performance.

### Inheritance & Polymorphism
* **Inheritance**: Models an "is-a" relationship (e.g., `class Derived : public Base`).
* **Construction Order**: Base constructor executes first, then the Derived constructor.
* **Destruction Order**: Derived destructor executes first, then the Base destructor.
* **Virtual Functions**: Declared with the `virtual` keyword. Opts into dynamic binding (resolved at runtime based on actual object type) rather than static binding (resolved at compile time).
* **Polymorphism**: Requires pointers or reference variables of the Base class type pointing/referencing Derived class instances.
* **Virtual Destructors**: Destructors in base classes should always be marked `virtual` if inheritance is expected, ensuring derived class destructors are properly called during cleanup.
* **C++11 Keywords**:
  * `override`: Assures the compiler that the function is overriding a base class virtual function.
  * `final`: Prevents a virtual function from being overridden or a class from being inherited.
* **Abstract Base Classes**: A class containing at least one **pure virtual function** (e.g., `virtual void draw() = 0;`). Cannot be instantiated; serves only as a template for derived classes.

### Recursion
* A function calling itself. Requires a **base case** to terminate and a **recursive case** that reduces the problem.
* Recursive calls push stack frames onto the call stack. Without a proper base case, this leads to infinite recursion and a **Stack Overflow** (LIFO stack depletion).
* **Recursion vs. Iteration**: Recursive solutions are often simpler to write for complex problems (e.g., QuickSort, Towers of Hanoi), but introduce call overhead (memory allocation and address tracking on the stack).

---
*Refer to [[Y1S1/CCA101 Principle of Programming|CCA101 Notes]] and [[Y1S2/CKC112 Object Oriented Programming|CKC112 Notes]] for detailed lecture records.*
