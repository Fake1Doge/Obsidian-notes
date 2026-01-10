## Part 1: Functions
* **Modular Programming:** Definition and motivation.
* **Definitions & Calling:** Return types, parameters, arguments, and flow of control.
* **Prototypes:** Purpose, syntax, and placement.
* **Variable Scope & Lifetime:**
    * Local vs. Global variables (and why to avoid Globals).
    * Static Local Variables (initialization and lifetime).
* **Parameter Passing Methods:**
    * Pass by Value (copying mechanism).
    * Pass by Reference (using `&`, aliasing, modifying original data).
* **Advanced Features:**
    * Default Arguments (rules and syntax).
    * Function Overloading (same name, different parameter lists).
    * Returning values (including Boolean).

## Part 2: Arrays
* **Basics:** Memory layout, subscript accessing, and size calculation.
* **Initialization:** Syntax for partial and implicit sizing.
* **Processing:**
    * Iterating with loops.
    * **C++11 Range-Based For Loop:** Syntax and usage with `auto`.
* **Safety:** The "No Bounds Checking" rule and off-by-one errors.
* **Advanced Array Concepts:**
    * Parallel Arrays (relating data by subscript).
    * Arrays as Function Arguments (passing arrays vs. elements).
    * **2D Arrays:** Row-major order, nested loops for processing, and summing rows/columns.

## Part 3: Pointers
* **Concepts:** Definition, the Address Operator (`&`), and the Indirection Operator (`*`).
* **Pointer Variables:** Syntax, initialization (including `nullptr`).
* **Relationship with Arrays:** Array names as pointers, pointer arithmetic, and converting between subscript `[]` and pointer `*()` notation.
* **Pointers as Function Parameters:** Swapping values using pointers.
* **Dynamic Memory Allocation:**
    * Using `new` and `delete`.
    * Allocating dynamic arrays and freeing memory to prevent leaks.

**Constraint:** Do not introduce outside concepts not present in the slides (like vectors or smart pointers) unless necessary for syntax correctness. Focus on the specific examples provided in the files.