# C++ Study Notes: Functions, Arrays, and Pointers

## 1. Functions

### Key Concepts & Definitions
* **Modular Programming:** Breaking a program into smaller, manageable functions to improve maintainability and simplify code writing.
* **Function Definition:** The actual code of the function. Contains the **header** (return type, name, parameter list) and the **body** (statements).
* **Function Prototype:** A declaration (header + semicolon) placed above `main` to notify the compiler of a function's existence. Allows definitions to be placed in any order.
* **Arguments vs. Parameters:**
    * **Argument:** The value sent to the function during a call (e.g., `func(5)`).
    * **Parameter:** The variable defined in the function header that receives the argument (e.g., `void func(int x)`).
* **Scope:**
    * **Local Variables:** Defined inside a function; hidden from outside. Destroyed when the function terminates.
    * **Global Variables:** Defined outside all functions; accessible by any function defined after them.
* **Static Local Variables:** Local variables that retain their value between function calls. Initialized only once.
* **Pass by Value:** Default. A copy of the argument is passed. Changing the parameter does *not* affect the original argument.
* **Pass by Reference:** Uses `&`. The function receives a reference (alias) to the original argument, allowing it to modify the original variable.
* **Function Overloading:** Multiple functions with the same name but different parameter lists (signatures).

### Syntax
**Prototype & Definition:**
```cpp
// Prototype (placed before main)
void displayValue(int); 

// Definition (placed after main)
void displayValue(int num) {
    std::cout << "Value is " << num << std::endl;
}
```

**Pass by Reference:**
```cpp
void getDimensions(int &width, int &height) {
    width = 10; // Modifies the variable passed in
}
```

### Code Examples
**Static Local Variable:**
```cpp
void showStatic() {
    static int calls = 0; // Initialized only the first time
    calls++;
    std::cout << "Function called " << calls << " times.\n";
}
```

**Default Arguments:**
```cpp
// Prototype with default values
void displayStars(int cols = 10, int rows = 1);

// Correct Call
displayStars();     // Uses 10, 1
displayStars(5);    // Uses 5, 1
displayStars(7, 3); // Uses 7, 3
```

### Critical Details
* **Initialization:** Global variables initialize to zero by default. **Local variables do not**; they contain garbage data if not initialized.
* **Global Variables:** Avoid using them for data (debugging nightmare). Use **Global Constants** instead if needed.
* **Default Arguments:** Must be defined in the prototype. If an argument is omitted, all arguments to its right must also be omitted.
* **Reference Parameters:** You must pass a variable to a reference parameter, not a literal or expression (e.g., `func(5)` fails if `func` expects `int &`).

---

## 2. Arrays

### Key Concepts & Definitions
* **Definition:** A collection of values of the *same data type* stored in adjacent memory locations.
* **Size Declarator:** The number in brackets (e.g., `int arr[5]`) indicating total elements.
* **Memory Size:** Total bytes = `(Number of elements) * (Size of each element)`.
* **Initialization List:** Values in `{}` used to populate the array upon creation.
* **Implicit Sizing:** If the size declarator is omitted, the compiler determines size based on the number of items in the initialization list.
* **Range-Based For Loop:** A simplified loop (introduced in C++11) to iterate through all elements.
* **Parallel Arrays:** Two or more arrays where the same index relates to the same entity (e.g., `names[i]` and `scores[i]`).
* **2D Arrays:** Arrays of arrays, visualized as rows and columns.

### Syntax
**Declaration & Access:**
```cpp
const int SIZE = 5;
int tests[SIZE];     // Declaration
tests[0] = 100;      // Accessing first element (index 0)
```

**Initialization:**
```cpp
int numbers[5] = {1, 2, 3}; // Partial init: indexes 3 and 4 become 0
int ages[] = {25, 30, 45};  // Implicit size: 3 elements
```

**Range-Based Loop:**
```cpp
for (int val : numbers) {
    std::cout << val << endl;
}
```

### Code Examples
**Passing Array to Function:**
```cpp
// Function acts on original array (passed by address)
void doubleValues(int nums[], int size) {
    for (int i = 0; i < size; i++)
        nums[i] *= 2;
}
```

**2D Array Traversal:**
```cpp
const int ROWS = 3, COLS = 4;
int table[ROWS][COLS];

for (int r = 0; r < ROWS; r++) {
    for (int c = 0; c < COLS; c++) {
        table[r][c] = 0; // Initialize elements
    }
}
```

### Critical Details
* **NO Bounds Checking:** C++ does not prevent you from accessing `tests[10]` in a 5-element array. This causes memory corruption or crashes.
* **Off-By-One Errors:** Remember indices run from `0` to `size - 1`.
* **Assignment:** You cannot copy arrays with `=` (`arr1 = arr2` is illegal). You must use a loop to copy element-by-element.

---

## 3. Pointers

### Key Concepts & Definitions
* **Pointer:** A variable that holds a memory address.
* **Address Operator (`&`):** Returns the memory address of a variable (e.g., `&num`).
* **Indirection/Dereference Operator (`*`):** Accesses the value at the address held by the pointer.
* **Relationship with Arrays:** An array name acts as a constant pointer to the first element. `array[i]` is equivalent to `*(array + i)`.
* **Dynamic Memory:** Memory allocated during runtime using `new`. Must be manually released.
* **`nullptr`:** Keyword (C++11) representing a null pointer (address 0).

### Syntax
**Basics:**
```cpp
int x = 25;
int *ptr = &x;  // ptr holds address of x
*ptr = 100;     // Changes value of x to 100
```

**Dynamic Allocation:**
```cpp
// Allocate single variable
int *num = new int; 

// Allocate array
double *sales = new double[days]; 
```

**Releasing Memory:**
```cpp
delete num;         // Single variable
delete [] sales;    // Array
sales = nullptr;    // Best practice to prevent dangling pointer
```

### Code Examples
**Pointer Arithmetic:**
```cpp
int vals[] = {10, 20, 30};
int *valPtr = vals;

std::cout << *valPtr << endl;       // Prints 10
std::cout << *(valPtr + 1) << endl; // Prints 20
```

**Pointers as Function Parameters:**
```cpp
void getNum(int *input) {
    std::cin >> *input; // Stores input directly in the address provided
}

// Call
int number;
getNum(&number);
```

### Critical Details
* **Memory Leaks:** Failing to `delete` dynamically allocated memory keeps it occupied until the program ends.
* **Dangling Pointers:** Accessing a pointer after the memory it points to has been deleted causes undefined behavior.
* **Pointer Comparison:**
    * `ptr1 == ptr2` checks if they point to the **same location**.
    * `*ptr1 == *ptr2` checks if the **values** they point to are equal.