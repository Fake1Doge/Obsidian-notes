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
    * *Control Unit:* Retrieves/decodes instructions.
    * [cite_start]*ALU (Arithmetic & Logic Unit):* Performs math and true/false comparisons[cite: 10].
* **Main Memory (RAM):** Volatile memory. Erasable when power is off.
    * Organized into **bits** (0/1) and **bytes** (8 bits). [cite_start]Each byte has a unique **address**[cite: 13, 16].
* **Secondary Storage:** Non-volatile (retains data when off). [cite_start]Examples: Hard drives, USB, CD/DVD[cite: 20].

### Programming Basics
* [cite_start]**Algorithm:** A set of well-defined steps to solve a problem[cite: 26].
* **Language Levels:**
    * *Machine Language:* Binary (101101), directly executed by CPU.
    * *Low-Level:* Closer to hardware (Assembly).
    * [cite_start]*High-Level:* Closer to human language (C++, Java, Python)[cite: 41].
* **Compilation Process:**
    1.  **Source Code:** Written by programmer.
    2.  **Preprocessor:** Handles directives (e.g., `#include`).
    3.  **Compiler:** Converts to machine instructions (Object Code).
    4.  [cite_start]**Linker:** Connects libraries to produce **Executable**[cite: 52].

---

## Chapter 2: Introduction to C++

### Basic Structure
```cpp
#include <iostream> // Preprocessor directive
using namespace std; // Namespace

int main() // Main function (entry point)
{
    cout << "Hello World"; // Statement
    return 0; // Return to OS
}