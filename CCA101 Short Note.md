# CCA101: Principle of Programming - Final Exam Revision Note

## Table of Contents
1. [[#Chapter 1: Introduction to Computers and Programming]]
2. [[#Chapter 2: Introduction to C++]]
3. [[#Chapter 3: Expressions and Interactivity]]
4. [[#Chapter 4: Making Decisions]]
5. [[#Chapter 5: Loops]]
6. [[#Chapter 6: File Processing]]
7. [[#Chapter 7: Computational Thinking]]
8. [[#Chapter 8: Functions]]
9. [[#Chapter 9: Arrays]]
10. [[#Chapter 10: Pointers]]

---

## Chapter 1: Introduction to Computers and Programming

### Key Hardware Components
* **CPU (Central Processing Unit):** The "brain" of the computer.
    * **Control Unit:** Retrieves and decodes instructions.
    * **ALU (Arithmetic & Logic Unit):** Performs mathematical operations and logical comparisons.
* **Main Memory (RAM):** Volatile memory used for currently running programs. Data is lost when power is off.
    * Organized into **bits** (0/1) and **bytes** (8 bits).
    * Each byte has a unique **address**.
* **Secondary Storage:** Non-volatile storage (retains data when off). Examples: Hard drives, SSDs, Flash drives.


[Image of computer hardware components diagram]


### Programming Basics
* **Algorithm:** A set of well-defined steps to solve a problem.
* **Language Levels:**
    * *Machine Language:* Binary instructions (`101101`) directly executed by the CPU.
    * *Low-Level Language:* Close to hardware (e.g., Assembly).
    * *High-Level Language:* Closer to human language (e.g., C++, Java).
* **The Compilation Process:**
    1.  **Source Code:** The code written by the programmer.
    2.  **Preprocessor:** Handles directives (lines starting with `#`).
    3.  **Compiler:** Translates source code into machine language (Object Code).
    4.  **Linker:** Connects the object code with library code to produce the **Executable**.
    

---

## Chapter 2: Introduction to C++

### Basic Structure
> The following is a basic C++ boilerplate:
>
> `#include <iostream>`  *(Preprocessor directive)*
> `using namespace std;` *(Namespace definition)*
>
> `int main()`            *(Main function - entry point)*
> `{`
>     `cout << "Hello";`  *(Statement)*
>     `return 0;`         *(Signal success to OS)*
> `}`

### Output (`cout`)
* Uses the **stream insertion operator** `<<`.
* **Newlines:**
    * `endl`: Inserts a newline and flushes the buffer.
    * `\n`: Escape sequence for a newline (embedded in strings).

### Data Types & Variables
> [!INFO] Definition
> **Variable:** A named storage location in the computer's memory for holding a piece of data.

* **Identifiers:** Names for variables/functions. Must start with a letter or underscore (`_`). Case-sensitive.
* **Primitive Types:**
    * `int`: Whole numbers (e.g., 42).
    * `double` / `float`: Real numbers/decimals (e.g., 3.14).
    * `char`: Single character (stored as ASCII integer).
    * `bool`: Boolean values (`true`/`false`).
    * `string`: Text strings (requires `#include <string>`).
* **`auto` Keyword:** Allows the compiler to deduce the type based on the initialization value.

---

## Chapter 3: Expressions and Interactivity

### Input (`cin`)
* Uses the **stream extraction operator** `>>`.
* Reads input from the keyboard.
* **Behavior:** Skips leading whitespace (spaces, tabs, newlines).
* **Prompting:** Always output a prompt using `cout` before using `cin` so the user knows what to enter.

### Mathematical Expressions
* **Order of Operations (Precedence):**
    1.  Parentheses `()`
    2.  Negation `-`
    3.  Multiplication `*`, Division `/`, Modulus `%` (Left to Right)
    4.  Addition `+`, Subtraction `-` (Left to Right)
* **Integer Division:** `int / int` results in an `int`. The fractional part is discarded (e.g., `5 / 2` is `2`).
* **Modulus (`%`):** Returns the remainder of division. Only works with integers (e.g., `5 % 2` is `1`).

### Type Conversion
* **Coercion:** Automatic conversion (e.g., `int` promotes to `double` in mixed math).
* **Casting:** Manual conversion using `static_cast`.
    * Example: `double result = static_cast<double>(numerator) / denominator;`

### Formatting Output
Requires `#include <iomanip>`.
* `setw(n)`: Sets the minimum print field width to `n` spaces.
* `fixed`: Forces output to display in decimal format (not scientific).
* `setprecision(n)`: Controls the number of digits after the decimal point.

---

## Chapter 4: Making Decisions

### Relational Operators
Evaluate to `true` (1) or `false` (0).
* `>` (Greater than)
* `<` (Less than)
* `>=` (Greater than or equal to)
* `<=` (Less than or equal to)
* `==` (Equal to) — *Note: distinct from assignment `=`*
* `!=` (Not equal to)

### Logical Operators
* `&&` (AND): True only if **both** sides are true.
* `||` (OR): True if **at least one** side is true.
* `!` (NOT): Reverses the truth value.

### Control Structures


[Image of flowchart for if-else statement]

* **`if` Statement:** Executes a block only if the condition is true.
* **`if/else`:** Executes one block if true, a different block if false.
* **Nested `if`:** Putting an `if` statement inside another `if` block.
* **Scope:** Variables defined inside a `{ }` block are local to that block and cannot be accessed outside it.

---

## Chapter 5: Loops

### Increment/Decrement
* `++` adds 1; `--` subtracts 1.
* **Prefix (`++x`):** Increment happens *before* the value is used.
* **Postfix (`x++`):** Value is used *before* the increment happens.

### Loop Types
1.  **`while` Loop (Pretest):**
    * Checks condition *before* the loop body.
    * Good for input validation (looping until valid data is entered).
2.  **`do-while` Loop (Posttest):**
    * Checks condition *after* the loop body.
    * **Always executes at least once.**
    * Syntax requires a semicolon at the end: `} while(condition);`
3.  **`for` Loop (Pretest):**
    * Best for counter-controlled loops (known number of iterations).
    * Syntax: `for (initialization; condition; update) { ... }`

### Loop Concepts
* **Accumulator:** A variable used to keep a running total (e.g., `sum += number`). Must be initialized to 0.
* **Sentinel:** A special value (e.g., -1) used to signal the end of a list of data.

---

## Chapter 6: File Processing

### File Stream Objects
Requires `#include <fstream>`.
* `ofstream`: For writing to files (Output).
* `ifstream`: For reading from files (Input).
* `fstream`: For both input and output.

### Basic Operations
1.  **Open:** `fileObject.open("filename.txt");`
2.  **Process:** Use `<<` to write to file, `>>` to read from file.
3.  **Close:** `fileObject.close();` (Critical to save data and prevent corruption).

### Reading Data
* **Reading to End of File (EOF):**
    > `while (inputFile >> value) { ... }`
    > *This loop continues as long as a value is successfully read.*

* **Binary Files:** Requires `ios::binary` flag and using `.read()` / `.write()` with `reinterpret_cast`.

---

## Chapter 7: Computational Thinking

### Definition
The thought processes involved in formulating a problem and expressing its solution in a way that a computer (human or machine) can effectively carry out.

### The 4 Pillars
1.  **Decomposition:** Breaking down a complex problem into smaller, manageable parts.
2.  **Pattern Recognition:** Observing trends, similarities, or patterns in data to simplify the problem.
3.  **Abstraction:** Filtering out unnecessary details to focus only on the relevant information (generalizing).
4.  **Algorithm Design:** Creating a step-by-step logic or set of rules to solve the problem.

---

## Chapter 8: Functions

### Modular Programming
Breaking a program into smaller components (functions) to improve maintainability and reusability.

### Function Structure
* **Prototype:** Declaration at the top of the code (e.g., `void printMsg();`). Tells the compiler the function exists.
* **Definition:** The actual code. Includes Header and Body `{}`.
* **Call:** Executing the function inside `main` or another function.

### Parameters vs Arguments
* **Parameter:** The variable in the function definition.
* **Argument:** The actual value passed during the function call.
* **Pass by Value:** The function gets a *copy* of the argument. Changing the parameter does *not* change the original argument.

### Return Values
* `return` statement sends a value back to the caller.
* `void` functions do not return a value.

---

## Chapter 9: Arrays

### Definition
A collection of variables of the **same data type** stored in consecutive memory locations.


### Syntax
* **Declaration:** `int numbers[5];` (Size must be a constant integer).
* **Initialization:** `int numbers[] = {10, 20, 30};` (Size implied).
* **Access:** `numbers[0]` is the first element. `numbers[4]` is the last.

### 2D Arrays
* Think of them as rows and columns (like a spreadsheet).
* Declaration: `int matrix[ROWS][COLS];`
* Access: `matrix[row_index][col_index];`
* Processing usually requires **nested loops**.

> [!WARNING] Common Pitfall
> **Bounds Checking:** C++ does *not* prevent you from accessing indices outside the array (e.g., index 10 in a size 5 array). This causes memory corruption.

---

## Chapter 10: Pointers

### Core Concepts
* **Address Operator (`&`):** Gets the memory address of a variable.
* **Pointer Variable:** A variable designed to hold a memory address.
    * Declaration: `int *ptr;`
* **Dereference Operator (`*`):** Accesses the value at the address the pointer is holding.

### Pointers and Arrays
* The name of an array is essentially a constant pointer to its first element.
* `array[i]` is equivalent to `*(array + i)`.

### Dynamic Memory Allocation
* **`new`:** Allocates memory at runtime (on the Heap).
    * `int *arr = new int[10];`
* **`delete`:** Frees the memory to prevent memory leaks.
    * `delete [] arr;`
    * `arr = nullptr;` (Good practice to prevent dangling pointers)