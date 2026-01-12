# Functions

### Key Concepts & Definitions
* **Modular Programming:** Breaking a program into smaller, manageable functions to improve maintainability and simplify writing.
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