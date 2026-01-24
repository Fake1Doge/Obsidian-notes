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
    * *Control Unit:* Retrieves and decodes instructions.
    * *ALU (Arithmetic & Logic Unit):* Performs mathematical operations and logical comparisons.
* **Main Memory (RAM):** Volatile memory used for currently running programs. Data is lost when power is off.
    * Organized into **bits** (0/1) and **bytes** (8 bits).
    * Each byte has a unique **address**.
* **Secondary Storage:** Non-volatile storage (retains data when off). Examples: Hard drives, SSDs, Flash drives.

### Programming Basics
* **Algorithm:** A set of well-defined steps to solve a problem.
* **Language Levels:**
    * *Machine Language:* Binary instructions (101101) directly executed by the CPU.
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
```cpp
#include <iostream>   // Preprocessor directive
using namespace std;  // Namespace definition

int main()            // Main function (entry point)
{
    cout << "Hello";  // Statement
    return 0;         // Signal success to OS
}