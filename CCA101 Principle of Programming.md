# Functions

### Key Concepts & Definitions
* **Modular Programming:** The strategy of breaking a program up into smaller, manageable functions or modules. This improves maintainability and simplifies the writing process.
* **Function Definition:** The actual code that implements the function. It consists of two main parts:
    * **Header:** Contains the return type, function name, and parameter list.
    * **Body:** The block of statements enclosed in braces `{}` that performs the task.
* **Function Prototype:** A declaration statement (function header + semicolon) placed *before* the `main` function. It notifies the compiler of the function's name, return type, and parameters, allowing the function definition to be placed anywhere in the code.
* **Arguments vs. Parameters:**
    * **Argument:** The actual value or variable sent to the function during a function call (e.g., in `pow(2, 3)`, `2` and `3` are arguments).
    * **Parameter:** The variable defined in the function header that receives the argument's value (e.g., in `void func(int x)`, `x` is the parameter).
* **Return Statement:** Causes a function to end immediately and optionally sends a value back to the calling part of the program.
* **Scope (Lifetime):**
    * **Local Variables:** Defined *inside* a function. They are "hidden" from other functions and are destroyed when the function ends.
    * **Global Variables:** Defined *outside* all functions. They are accessible by any function defined after them.
* **Static Local Variables:** Variables declared with the `static` keyword inside a function. Unlike normal local variables, they **retain their value** between function calls and are initialized only once.
* **Pass by Value:** The default mechanism where a *copy* of the argument is passed. Changes to the parameter do not affect the original argument.
* **Pass by Reference:** Uses an ampersand (`&`) in the parameter list. The function receives a reference (alias) to the original argument, allowing it to modify the original variable.
* **Function Overloading:** Creating multiple functions with the *same name* but different **parameter lists** (different data types or number of parameters).

### Syntax
**Function Prototype:**
```cpp
// Syntax: ReturnType FunctionName(ParameterType, ParameterType);
void displayData(int, double); // Semicolon is required
```

**Function Definition:**
```cpp
// Syntax: ReturnType FunctionName(ParameterList) { Body }
int sum(int num1, int num2) 
{
    return num1 + num2;
}
```

**Pass by Reference:**
```cpp
void func(int &num); // 'num' is an alias for the original argument
```

### Code Examples

**1. Static Local Variable (Retaining Value)**
```cpp
void showStatic() 
{
    static int count = 0; // Initialized only once
    count++;
    cout << "I have been called " << count << " times.\n";
}
```

**2. Pass by Reference (Modifying Original)**
```cpp
void doubleValue(int &val) 
{
    val *= 2; // Modifies the variable passed from main
}

int main() {
    int x = 10;
    doubleValue(x);
    cout << x; // Prints 20
}
```

### Critical Details & Warnings
> [!WARNING] Initialization
> * **Global variables** are automatically initialized to `0` (numeric) or `NULL` (char).
> * **Local variables** are **NOT** automatically initialized. They contain "garbage" data until you assign them a value.

> [!TIP] Best Practices
> * **Global Variable Usage:** Avoid using global variables for general data because they make debugging difficult. Use **Global Constants** instead.
> * **Pass by Reference Restriction:** When using reference parameters (`int &x`), the argument passed **must be a variable**. You cannot pass a literal (like `5`) or an expression.
> * **Default Arguments:** If used, they must be assigned starting from the **rightmost** parameter.

---

# Arrays

### Key Concepts & Definitions
* **Array:** A variable that can store multiple values of the **same data type** in adjacent memory locations.
* **Size Declarator:** The number inside the brackets in the definition (e.g., `int tests[5]`). It indicates the total number of elements.
* **Subscript/Index:** The number used to access a specific element. Indices start at **0**.
* **Memory Usage:** The total memory consumed by an array is calculated as:
  $$(\text{Number of elements}) \times (\text{Size of each element})$$
* **Initialization List:** A series of values inside braces `{}` used to initialize the array upon creation.
* **Implicit Sizing:** If you provide an initialization list but leave the size declarator empty (e.g., `int arr[] = {1, 2}`), C++ counts the items to determine the size.
* **Range-Based For Loop:** A simplified loop introduced in C++11 that automatically iterates through every element in an array.
* **Parallel Arrays:** Two or more arrays where elements at the same index relate to each other (e.g., `studentID[0]` belongs to the same person as `grade[0]`).
* **2D Arrays:** Arrays with rows and columns, essentially an "array of arrays."

### Syntax
**Definition & Assignment:**
```cpp
const int SIZE = 5;
int numbers[SIZE]; // Definition
numbers[0] = 20;   // Assigning 20 to the first element
```

**Partial Initialization:**
```cpp
// First two elements are 1, 2. The rest are initialized to 0.
int numbers[5] = {1, 2}; 
```

**2D Array Definition:**
```cpp
// Type Name [Rows] [Cols]
double scores[3][4]; 
```

### Code Examples

**1. Range-Based For Loop**
```cpp
int values[] = {10, 20, 30};

// 'val' holds a copy of each element in turn
for (int val : values) 
{
    cout << val << endl;
}

// Use reference (&) to modify the array
for (int &val : values) 
{
    val++; // Increments actual array elements
}
```

**2. Processing a 2D Array (Nested Loops)**
```cpp
int table[3][2];
for (int row = 0; row < 3; row++) 
{
    for (int col = 0; col < 2; col++) 
    {
        cin >> table[row][col]; // Input for each cell
    }
}
```

### Critical Details & Warnings
> [!DANGER] Bounds Checking
> **C++ does NOT check if an index is valid.** Writing to `arr[5]` in a size-5 array (valid indices 0-4) writes to memory *outside* the array. This can corrupt other variables, crash the program, or cause unpredictable bugs.

> [!WARNING] Common Errors
> * **Off-By-One Errors:** A common mistake is iterating from `1` to `SIZE` instead of `0` to `SIZE - 1`.
> * **Copying Arrays:** You **cannot** use the assignment operator to copy arrays (`arr1 = arr2` is illegal). You must use a loop to copy element-by-element.

---

# Pointers

### Key Concepts & Definitions
* **Pointer:** A special variable that holds a **memory address** rather than a data value.
* **Address Operator (`&`):** A unary operator that returns the memory address of a variable (e.g., `&number`).
* **Indirection (Dereference) Operator (`*`):** Used to access or modify the value stored at the address a pointer is holding.
* **Pointer Variable:** Declared with an asterisk (e.g., `int *ptr`). It "points" to a specific data type.
* **Nullptr:** A keyword (C++11) representing the address `0`. It is best practice to initialize pointers to `nullptr` if they don't point to a valid address yet.
* **Array Name as Pointer:** The name of an array (without brackets) acts as a pointer to the **first element** of the array.
* **Dynamic Memory Allocation:**
    * **`new`:** Allocates memory from the heap (free store) while the program is running.
    * **`delete`:** Frees the memory back to the heap.

### Syntax
**Basic Pointer Operations:**
```cpp
int x = 25;
int *ptr = nullptr; // Define pointer
ptr = &x;           // Assign address of x to ptr
cout << *ptr;       // Dereference: Prints 25
*ptr = 100;         // Modify: Changes x to 100
```

**Dynamic Memory:**
```cpp
// Allocate a single integer
int *num = new int;

// Allocate an array
double *sales = new double[days]; 
```

### Code Examples

**1. Pointer Arithmetic**
```cpp
int arr[] = {10, 20, 30};
int *ptr = arr; // Points to arr[0]

ptr++;          // ptr now points to arr[1] (address + sizeof(int))
cout << *ptr;   // Prints 20
```

**2. Dynamic Array Management**
```cpp
void processSales(int numDays) 
{
    // Dynamically allocate array based on variable size
    double *sales = new double[numDays]; 

    // Use the array
    for (int i = 0; i < numDays; i++) {
        sales[i] = 0.0;
    }

    // CRITICAL: Free the memory
    delete [] sales; 
    sales = nullptr; 
}
```

### Critical Details & Warnings
> [!WARNING] Memory Safety
> * **Memory Leaks:** If you allocate memory with `new` but fail to use `delete`, that memory remains occupied (leaked) until the program terminates.
> * **Dangling Pointers:** After you `delete` a pointer, it still holds the old address. Accessing it causes undefined behavior. Always set `ptr = nullptr` after deleting.
> * **Type Mismatch:** Pointers are strictly typed. You cannot assign the address of a `double` to an `int *` pointer.

> [!NOTE] Pointer Comparison
> * `ptr1 == ptr2`: Compares **addresses** (do they point to the same place?).
> * `*ptr1 == *ptr2`: Compares **values** (is the data at those places equal?).