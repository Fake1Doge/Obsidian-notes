# Introduction to Computers and Programming

### Key Concepts & Definitions
* **Computer:** A programmable machine designed to follow instructions.
* **Program:** A set of instructions in computer memory to make the computer do something.
* **Programmer:** A person who writes instructions (programs) to make the computer perform a task.
* **Main Hardware Components:**
    * **CPU (Central Processing Unit):** The "brain" of the computer.
        * **Control Unit:** Retrieves and decodes program instructions and coordinates computer activities.
        * **Arithmetic & Logic Unit (ALU):** Hardware optimized for high-speed numeric calculations and true/false decisions.
    * **Main Memory (RAM):** Volatile memory (erased when power is off) used for temporary storage. Organized into **bits** (0 or 1) and **bytes** (8 consecutive bits). Each byte has a unique **address**.
    * **Secondary Storage:** Non-volatile storage (retains data without power) such as hard drives, SSDs, and flash drives.
    * **Input Devices:** Send information to the computer from the outside (keyboard, mouse, scanner).
    * **Output Devices:** Display information from the computer (monitor, printer, speakers).
* **Software Categories:**
    * **System Software:** Manages computer hardware (e.g., Operating Systems like Windows/Linux, utility programs, software development tools).
    * **Application Software:** Programs that provide services to the user (e.g., Word processing, games, web browsers).
* **Programming Languages:**
    * **Low-Level (Machine Language):** Binary numbers (1s and 0s) directly understood by the CPU. Specific to the hardware.
    * **High-Level:** Closer to human language (e.g., C++, Java, Python). Must be translated into machine language to run.
* **From Source to Executable:**
    1.  **Source Code:** The program written in a high-level language.
    2.  **Preprocessor:** Converts source file directives.
    3.  **Compiler:** Converts source program into machine instructions (Object Code).
    4.  **Linker:** Connects hardware-specific code and libraries to produce the final **Executable File**.
* **Integrated Development Environment (IDE):** Combines tools (text editor, compiler, debugger) into a single application (e.g., Visual Studio, Code::Blocks).

### Elements of a Program
* **Key Words (Reserved Words):** Words with special meaning in the language (e.g., `int`, `double`, `return`, `using`, `namespace`). Cannot be used for other purposes.
* **Programmer-Defined Identifiers:** Names defined by the programmer for variables, functions, etc. (e.g., `hours`, `rate`, `pay`).
* **Operators:** Perform operations on data (e.g., Arithmetic `+`, `-`, `*`; Assignment `=`).
* **Punctuation:** Characters that mark the end of a statement (`;`) or separate items.
* **Syntax:** The grammar rules that must be followed.
* **Variable:** A named storage location in the computer's memory for holding a piece of data.
    * **Variable Definition:** Specifies the type of data and the variable name (e.g., `double hours;`).

### The Programming Process
1.  **Define** what the program is to do.
2.  **Visualize** the program running.
3.  **Design** using tools like hierarchy charts, flowcharts, or pseudocode.
4.  **Check** the model for logical errors.
5.  **Type** the code, compile it, and correct syntax errors.
6.  **Run** the program with test data.
7.  **Correct** runtime/logic errors and validate results.

### Programming Paradigms
* **Procedural Programming:** Focuses on the **process**. Procedures (functions) are written to process data.
* **Object-Oriented Programming (OOP):** Focuses on **objects**, which contain both data and the means to manipulate the data. Messages are sent to objects to perform operations.

---

# Introduction to C++

### Parts of a C++ Program
* **Comments (`//`):** Ignored by the compiler. Used to document code.
* **Preprocessor Directive (`#include <iostream>`):** Inserts the contents of another file into the program. `iostream` is required for input/output operations.
* **Namespace (`using namespace std;`):** Declares that the program will use entities (like `cout`, `cin`) from the standard namespace.
* **Main Function (`int main()`):** The starting point of every C++ program.
* **Braces (`{ }`):** Enclose a block of code (e.g., the body of `main`).
* **Output Statement (`cout << ...`):** Displays information on the screen.
* **Return Statement (`return 0;`):** Ends the main function and sends a signal (usually 0 for success) back to the operating system.

### Special Characters
| Character | Name | Meaning |
| :--- | :--- | :--- |
| `//` | Double Slash | Beginning of a comment |
| `#` | Pound Sign | Beginning of a preprocessor directive |
| `< >` | Open/Close Brackets | Enclose filename in `#include` |
| `( )` | Open/Close Parentheses | Used when naming a function |
| `{ }` | Open/Close Braces | Encloses a group of statements |
| `" "` | Quotation Marks | Encloses string of characters |
| `;` | Semicolon | End of a programming statement |

### The `cout` Object
* **Console Output:** Used to display output on the computer screen.
* **Stream Insertion Operator (`<<`):** Sends data to `cout`.
    * Example: `cout << "Hello there!";`
* **Multiple Items:** Can send multiple items in one statement.
    * Example: `cout << "Hello " << "there!";`
* **`endl` Manipulator:** Starts a new line of output.
    * Example: `cout << "Hello" << endl;
`
* **`\n` Escape Sequence:** Also starts a new line. Must be inside quotes.
    * Example: `cout << "Hello\n";`

### Identifiers
* **Identifiers:** Programmer-defined names for variables, functions, etc.
* **Rules:**
    1.  Must begin with a letter or underscore (`_`).
    2.  Following characters can be letters, digits, or underscores.
    3.  **Case Sensitive:** `Total`, `total`, and `TOTAL` are different identifiers.
    4.  Cannot use C++ Key Words (e.g., `int`, `class`, `return`).

### Variables and Data Types
A **variable** is a storage location in memory. It must be defined before use.

#### Integer Data Types
Used to hold whole numbers.
*   **Types:** `short` (2 bytes), `int` (4 bytes), `long` (4 bytes), `long long` (8 bytes).
*   **Signed vs. Unsigned:** `unsigned` types can only hold non-negative values but have a larger positive range.
*   **Literals:**
    *   `20` (int)
    *   `1234L` (long)
    *   `324LL` (long long)
    *   `075` (Octal, starts with 0)
    *   `0x75A` (Hexadecimal, starts with 0x)

#### Character Data Type (`char`)
Used to hold a single character.
*   Stored as a 1-byte integer (ASCII code).
*   **Literal:** Enclosed in single quotes `' '`.
    *   Example: `char letter = 'A';` (Stored as 65).

#### Floating-Point Data Types
Used to hold real numbers (with decimals).
*   **Types:**
    *   `float`: Single precision (4 bytes).
    *   `double`: Double precision (8 bytes, default for literals).
    *   `long double`: Extended precision.
*   **Literals:**
    *   Standard: `12.45`, `-3.8`
    *   Scientific Notation: `3.14159E1` ($3.14159 \times 10^1$)
    *   Suffixes: `1.2F` (float), `1.2L` (long double).

#### The `bool` Data Type
*   Represents boolean values: `true` or `false`.
*   Stored internally as integers: `true` becomes `1` (or any non-zero), `false` becomes `0`.

#### The `string` Class
*   **Not** a built-in primitive type. Requires `#include <string>`.
*   Used to hold a sequence of characters.
*   **Character String vs `string` Class:**
    *   **C-String:** A series of characters stored in adjacent memory, terminated by the **null terminator** `\0`.
        *   Example: `"Hello"` is stored as `H`, `e`, `l`, `l`, `o`, `\0`.
    *   **`string` object:** Easier to use, dynamic sizing.
        *   Example: `string name = "George";`

### Operations & Initialization
*   **Assignment (`=`):** Copies the value on the right to the variable on the left.
    *   **L-value:** The item on the left must be a variable (storage location), not a literal or expression. `12 = item;` is an **ERROR**.
*   **Initialization:** Assigning a value at the time of definition.
    *   `int length = 12;`
    *   `auto` (C++11): The compiler infers the type from the value. `auto amount = 100;` (int).
*   **Arithmetic Operators:**
    *   **Unary:** 1 operand (e.g., `-5`).
    *   **Binary:** 2 operands (e.g., `13 - 7`).
        *   `+` Addition
        *   `-` Subtraction
        *   `*` Multiplication
        *   `/` Division
            *   **Integer Division:** If both operands are integers, the result is an integer (decimals truncated). `13 / 5` is `2`.
        *   `%` Modulus (Remainder): Only works with integers. `13 % 5` is `3`.
    *   **Ternary:** 3 operands (e.g., `exp1 ? exp2 : exp3`).
*   **`sizeof` Operator:** Returns the size of a data type or variable in bytes.
    *   Example: `sizeof(double)` usually returns 8.

### Scope
*   **Scope:** The part of the program where a variable can be accessed.
*   A variable cannot be used **before** it is defined.
*   Variables defined inside a function (local variables) are not accessible outside it.

### Comments & Style
*   **Single-Line Comment:** `// ...` (To end of line).
*   **Multi-Line Comment:** `/* ... */` (Can span multiple lines).
*   **Named Constants:** Use `const` to create "read-only" variables.
    *   Convention: ALL_CAPS names.
    *   Example: `const double TAX_RATE = 0.0675;`
*   **Programming Style:** Using spaces, tabs, and blank lines to make code readable. This is ignored by the compiler but critical for humans.

---

# Expressions and Interactivity

### The `cin` Object
* **Standard Input:** Used to read input from the keyboard.
* **Stream Extraction Operator (`>>`):** Retrieves data from the input stream and stores it in a variable.
    * Example: `cin >> height;`
* **Input Requirements:**
    * Requires `iostream`.
    * The user must press [Enter] to send data to the program.
* **Multiple Inputs:** Can read multiple values in one statement. Values must be separated by spaces.
    * Example: `cin >> length >> width;`
* **Prompting:** Always display a prompt (via `cout`) *before* `cin` to tell the user what to enter.

### Mathematical Expressions
* **Order of Operations:**
    1.  **Parentheses `()`:** Highest precedence.
    2.  **Unary `+`, `-`, `!`:** (Right to left).
    3.  **Multiplication `*`, Division `/`, Modulus `%`:** (Left to right).
    4.  **Addition `+`, Subtraction `-`:** (Left to right).
* **Algebraic vs. C++:**
    *   Algebra: $Area = lw$ $\rightarrow$ C++: `Area = l * w;`
    *   Algebra: $m = \frac{y_2 - y_1}{x_2 - x_1}$ $\rightarrow$ C++: `m = (y2 - y1) / (x2 - x1);`
* **Type Conversion (Coercion):**
    *   **Promotion:** Converting to a higher type (e.g., `int` to `double`).
    *   **Demotion:** Converting to a lower type (e.g., `double` to `int` - causes truncation).
    *   **Rules:**
        *   `char`, `short`, `unsigned short` automatically promote to `int`.
        *   In `5 + 2.5`, `5` is promoted to `double`, result is `double`.
    *   **Type Casting:** Manual conversion.
        *   C++ Style: `static_cast<DataType>(Value)` **(Preferred)**
        *   C Style: `(DataType)Value` or `DataType(Value)`
        *   Example: `average = static_cast<double>(sum) / count;` ensures floating-point division.
* **Overflow/Underflow:** Assigning a value too large or too small for a variable type. It "wraps around" and produces incorrect results without warning.

### Special Assignment Operators
*   **Combined Assignment:** Shorthand for standard operations.
    *   `x += 5;` is equivalent to `x = x + 5;`
    *   `y -= 2;` is equivalent to `y = y - 2;`
    *   `z *= 10;` is equivalent to `z = z * 10;`
    *   `a /= b;` is equivalent to `a = a / b;`
    *   `c %= 3;` is equivalent to `c = c % 3;

### Formatting Output
Requires `#include <iomanip>`.
*   **`setw(n)`:** Sets the minimum print field width to `n` spaces. Right-justified by default. Affects **only the next** value.
*   **`fixed`:** Displays floating-point numbers in fixed-point notation (decimal).
*   **`setprecision(n)`:**
    *   Without `fixed`: Sets total number of significant digits.
    *   With `fixed`: Sets number of digits *after* the decimal point.
*   **`showpoint`:** Forces decimal point and trailing zeros to display.
*   **`left` / `right`:** Controls alignment.

### Working with Characters and Strings
*   **`cin >> stringVar`:** Reads a string but **stops at whitespace** (space, tab, newline). Cannot read "John Doe".
*   **`getline(cin, stringVar)`:** Reads an entire line of text, including spaces, until [Enter] is pressed.
*   **`cin.get()`:** Reads a single character, including whitespace.
*   **`cin.ignore()`:** Skips characters in the keyboard buffer. Often used to skip the newline character left by `cin >>` before calling `getline`.
*   **String Operators:**
    *   `+` Concatenation (joining strings).
    *   `+=` Append.
    *   `.length()` Function returns the number of characters.

### Mathematical Library Functions
Requires `#include <cmath>`.
*   `pow(base, exp)`: Returns base raised to the power of exp.
*   `sqrt(x)`: Returns the square root of x.
*   `sin(x)`, `cos(x)`, `tan(x)`: Trigonometric functions (input in radians).
*   `abs(x)`: Absolute value (for integers).
*   **Random Numbers (`cstdlib`):**
    *   `rand()`: Returns a random integer.
    *   `srand(seed)`: Seeds the random number generator (usually with `time(0)` from `ctime`) to ensure unique sequences.

---

# Making Decisions (Selection Structures)

### Relational Operators
Used to compare two values (operands). The result is a **Boolean** value: `true` (1) or `false` (0).
*   `>` Greater than
*   `<` Less than
*   `>=` Greater than or equal to
*   `<=` Less than or equal to
*   `==` Equal to
*   `!=` Not equal to

> [!NOTE] Relational Expressions
> *   Can be assigned to a variable: `bool result = x <= y;`
> *   Assigns `0` for false, `1` for true.
> *   `if (x)`: Executed if x is any non-zero value.

> [!WARNING] Common Pitfall
> Do not confuse the equality operator `==` with the assignment operator `=`. 
> *   `if (x = 2)` assigns 2 to x (which is true/non-zero), so the block ALWAYS executes.
> *   `if (x == 2)` correctly tests if x equals 2.

### The `if` Statement
Allows statements to be conditionally executed or skipped.
*   **Syntax:**
    ```cpp
    if (expression)
        statement;
    ```
*   **True/False:** If the `expression` is true (non-zero), the `statement` is executed. If false (zero), it is skipped.
*   **Block:** To execute multiple statements, enclose them in braces `{}`.
    ```cpp
    if (score > 90) {
        grade = 'A';
        cout << "Excellent!";
    }
    ```
*   **Note:** Do not put a semicolon `;` after the `if (expression)` line, or the if statement will do nothing (it treats the semicolon as a null statement).

### The `if/else` Statement
Executes one block of code if the condition is true, and a different block if it is false.
*   **Syntax:**
    ```cpp
    if (expression) {
        // Executed if true
    } else {
        // Executed if false
    }
    ```

### Nested `if` Statements
An `if` statement inside another `if` statement.
*   Used to test multiple conditions in sequence.
*   **`if/else if` Chain:** Tests a series of conditions until one is found to be true.
    ```cpp
    if (score >= 90)
        grade = 'A';
    else if (score >= 80)
        grade = 'B';
    else
        grade = 'C'; // Default if none of the above match
    ```
*   **Trailing `else`:** Optional, but useful for catching errors or handling invalid inputs (default case).

### Flags
A variable (usually `bool` or `int`) that signals a condition.
*   Example:
    ```cpp
    bool salesQuotaMet = false; // Flag initialized to false
    if (sales > QUOTA)
        salesQuotaMet = true; // Set flag to true
    if (salesQuotaMet) ...
    ```

### Logical Operators
Used to combine multiple boolean expressions into a single compound expression.
*   **`&&` (AND):** True only if **both** operands are true.
*   **`||` (OR):** True if **either** operand (or both) is true.
*   **`!` (NOT):** Reverses the truth of the operand (`!true` is `false`).

**Precedence (Order of Operations):**
1.  `!` (NOT)
2.  `&&` (AND)
3.  `||` (OR)

**Short-Circuit Evaluation:**
*   `&&`: If the left operand is false, the right operand is **skipped** (result is already known to be false).
*   `||`: If the left operand is true, the right operand is **skipped** (result is already known to be true).

### Checking Ranges
*   **Correct:** `if (x >= 20 && x <= 40)` checks if x is within [20, 40].
*   **Incorrect:** `if (20 <= x <= 40)` is mathematically correct but syntactically wrong logic in C++. It evaluates `(20 <= x)` to 0 or 1, then compares that result to 40 (which is always true).

### Menus
Menu-driven programs allow users to select actions from a list.
*   **Organization:**
    1.  Display list of numbered or lettered choices.
    2.  Prompt user to make a selection.
    3.  Test the user's selection using `if/else if` or `switch` statements.
    4.  Execute the corresponding code.

### Validating User Input
Input validation is the process of inspecting data given to the program by the user and determining if it is valid.
*   **Concept:** "Garbage in, garbage out". Bad input produces bad output.
*   **Tests:**
    *   **Range:** Is the number within a valid range? (e.g., age 0-120).
    *   **Reasonableness:** Does the data make sense?
    *   **Valid Menu Choice:** Did the user pick a number from the menu?
    *   **Divide by Zero:** Check if a divisor is 0 before dividing.

### Comparing Characters and Strings
*   **Characters:** Compared using their **ASCII values**.
    *   `'A'` (65) < `'B'` (66) is true.
    *   `'1'` (49) < `'2'` (50) is true.
    *   Lowercase letters have higher ASCII values than uppercase letters (`'a' > 'Z'`).
*   **Strings (C++ `string` objects):** Compared lexicographically (like a dictionary).
    *   "Mary" < "Mary Jane" (Shorter string comes first if it's a prefix).
    *   "ABC" < "XYZ".

### The Conditional Operator (`?:`)
A shorthand for a simple `if/else` statement. It is a **ternary** operator (3 operands).
*   **Syntax:** `expression ? value_if_true : value_if_false`
*   **Example:**
    ```cpp
    x = (y > 10) ? 100 : 0;
    // Equivalent to:
    // if (y > 10) x = 100; else x = 0;
    ```

### The `switch` Statement
An alternative to `if/else if` for testing an integer expression against multiple constant values.
*   **Syntax:**
    ```cpp
    switch (IntegerExpression) {
        case Constant1:
            // code
            break; // Exits the switch
        case Constant2:
            // code
            break;
        default:
            // code executes if no case matches
    }
    ```
*   **Requirements:**
    *   The expression must evaluate to an **integer** or **char** (not float or string).
    *   `case` values must be **constant literals**.
*   **`break`:** Used to exit the switch structure.
*   **Fall-through:** Without a `break` statement, the program continues executing the next case's statements.

### More About Blocks and Scope
*   **Local Scope:** Variables defined inside a block `{}` are only visible within that block.
*   **Lifetime:** They are created when execution enters the block and destroyed when it leaves.
*   **Variables with Same Name:**
    *   You can define a variable inside an inner block with the same name as a variable in an outer block.
    *   The inner definition **shadows** (hides) the outer definition while in the inner block.
    *   Generally considered **bad practice** as it confuses readability.

---

# Loops

### The Increment and Decrement Operators
*   **Increment (`++`):** Adds 1 to a variable. `val++;` is the same as `val = val + 1;`
*   **Decrement (`--`):** Subtracts 1 from a variable. `val--;` is the same as `val = val - 1;`
*   **Prefix vs. Postfix:**
    *   **Prefix (`++val`):** Increments the variable, *then* uses the new value in the expression.
    *   **Postfix (`val++`):** Uses the current value in the expression, *then* increments the variable.

### The `while` Loop
A **pretest loop** that repeats a statement or block as long as a condition is true.
*   **Syntax:**
    ```cpp
    while (expression) {
        statement;
    }
    ```
*   **How it works:**
    1.  Evaluate `expression`.
    2.  If true, execute `statement`.
    3.  Repeat.
    4.  If false, exit the loop.
*   **Infinite Loops:** If the `expression` never becomes false, the loop repeats forever. The loop body must contain code that eventually makes the expression false.
*   **Input Validation:** The `while` loop is ideal for validating input.
    ```cpp
    cout << "Enter a number (1-10): ";
    cin >> number;
    while (number < 1 || number > 10) {
        cout << "Invalid. Enter a number (1-10): ";
        cin >> number;
    }
    ```

### Counters
A variable used to control the number of times a loop iterates.
*   Must be initialized *before* the loop.
*   Must be incremented/decremented *inside* the loop.

### The `do-while` Loop
A **posttest loop** that executes the loop body *at least once*, then tests the condition.
*   **Syntax:**
    ```cpp
    do {
        statement;
    } while (expression); // Note the semicolon!
    ```
*   **Usage:** Useful for menus where the menu must be shown at least once.

### The `for` Loop
A **pretest loop** ideal for situations where the exact number of iterations is known (count-controlled loop).
*   **Syntax:**
    ```cpp
    for (initialization; test; update) {
        statement;
    }
    ```
*   **Components:**
    1.  **Initialization:** Runs once at the start (e.g., `int count = 0;`).
    2.  **Test:** Checked before each iteration. If true, continue; if false, quit.
    3.  **Update:** Executed at the end of each iteration (e.g., `count++`).
*   **Example:**
    ```cpp
    for (int i = 0; i < 5; i++) {
        cout << "Hello!" << endl;
    }
    ```

### Running Totals & Accumulators
*   **Accumulator:** A variable used to keep a running total.
*   **Requirement:** Must be initialized to `0` before the loop.
    ```cpp
    int sum = 0;
    while (num <= 10) {
        sum += num;
        num++;
    }
    ```

### Sentinels
A special value that marks the end of a list of values.
*   Used when the user doesn't know how many items they will enter.
*   **Example:** "Enter test scores (enter -1 to finish):"
    *   Here, `-1` is the sentinel. It must be a value that cannot be a valid data item.

### Nested Loops
A loop inside another loop.
*   **Logic:** The inner loop completes all its iterations for *each* single iteration of the outer loop.
*   **Total Iterations:** (Inner Iterations) $\times$ (Outer Iterations).

### Breaking and Continuing
*   **`break`:** Immediately terminates the loop. Use sparingly.
*   **`continue`:** Stops the current iteration and jumps to the test expression (or update expression in a `for` loop) to start the next iteration.

### Deciding Which Loop to Use
*   **`while`:** Loop runs as long as a condition is true. Good for input validation.
*   **`do-while`:** Loop must run at least once. Good for menus.
*   **`for`:** Exact number of iterations is known (or easily calculable).

---

# File Processing

### Key Concepts
*   **Data Persistence:** Files allow data to be retained between program runs.
*   **Text File:** Contains data encoded as text (readable by humans).
*   **Binary File:** Contains data not encoded as text (efficient, but not readable).
*   **File Stream Objects:** Special variables used to access files.
    *   `ifstream`: For input from a file.
    *   `ofstream`: For output to a file.
    *   `fstream`: For both input and output.
*   **Header:** Requires `#include <fstream>`.

### Steps to Use a File
1.  **Open** the file: Link the stream object to a physical file.
2.  **Process** the file: Read from or write to the file.
3.  **Close** the file: Disconnect the stream object.

### Syntax & Basic Operations

**Opening a File:**
```cpp
ifstream inputFile;
inputFile.open("data.txt"); // Open for reading

ofstream outputFile;
outputFile.open("results.txt"); // Open for writing (erases existing content!)
```

**Checking for Success:**
Always check if a file opened successfully before using it.
```cpp
if (inputFile.fail()) { // or just: if (!inputFile)
    cout << "Error opening file.";
}
```

**Writing to a File:**
Use the stream insertion operator `<<`, just like with `cout`.
```cpp
outputFile << "Hello World" << endl;
outputFile << 100;
```

**Reading from a File:**
Use the stream extraction operator `>>`, just like with `cin`.
```cpp
int number;
inputFile >> number; // Reads a value from the file into 'number'
```

**Closing a File:**
```cpp
inputFile.close();
outputFile.close();
```

### Processing Files with Loops

**Reading Until End of File (EOF):**
The extraction operator returns `true` if a value was successfully read and `false` if the end of the file was reached (or an error occurred).
```cpp
while (inputFile >> number) {
    cout << number << endl;
}
```

### Advanced File Operations

**File Open Modes:**
Flags used to control how a file is opened. Can be combined with `|`.
*   `ios::in`: Input mode (default for `ifstream`).
*   `ios::out`: Output mode (default for `ofstream`).
*   `ios::app`: Append mode. Writes are added to the end.
*   `ios::binary`: Binary mode.

**User-Specified Filenames:**
```cpp
string filename;
cout << "Enter filename: ";
cin >> filename;
inputFile.open(filename); // In C++11 and later, strings work directly
```

**Reading Lines with `getline`:**
To read a whole line (including spaces) from a file.
```cpp
string line;
getline(inputFile, line);
```

**Member Functions:**
*   `get(char)`: Reads a single character.
*   `put(char)`: Writes a single character.

**Binary Files:**
*   **Write:** `file.write(address, size)`
*   **Read:** `file.read(address, size)`
    *   *Address* must be cast to `char *`.
    *   *Example:* `file.write(reinterpret_cast<char*>(&number), sizeof(number));`

**Random Access:**
Moving the read/write position (cursor) within a file.
*   `seekg(offset, mode)`: Seek Get (Input).
*   `seekp(offset, mode)`: Seek Put (Output).
*   **Modes:** `ios::beg` (beginning), `ios::cur` (current), `ios::end` (end).
*   **Example:** `file.seekg(25L, ios::beg);` // Move to the 25th byte from start.

---

# Computational Thinking

### Introduction
**Computational Thinking (CT)** is a thought process involved in formulating problems and their solutions so that the solutions are represented in a form that can be effectively carried out by an information-processing agent (like a computer or human). It is a fundamental skill for the 21st century, enabling us to solve complex problems, understand systems, and understand human behavior.

### The Six Concepts of Computational Thinking
1.  **Decomposition:**
    *   Breaking down a large, complex problem into smaller, more manageable parts (sub-problems).
    *   *Example:* Creating an app involves breaking it down into: Design, Coding (Input/Output, Processing), Testing, etc.
2.  **Pattern Recognition:**
    *   Looking for similarities or trends (patterns) within problems.
    *   *Benefit:* If a solution exists for a similar problem, we can reuse or adapt it.
    *   *Example:* Recognizing that calculating the area of a rectangle is similar for all rectangles, regardless of size.
3.  **Abstraction:**
    *   Focusing on the important information only, ignoring irrelevant details.
    *   *Goal:* To create a general model or representation of the problem.
    *   *Example:* A map of a subway system shows lines and stations but ignores street names and building heights.
4.  **Algorithms:**
    *   Developing a step-by-step solution to the problem, or the rules to follow to solve the problem.
    *   *Definition:* A finite set of unambiguous instructions that, given some set of initial conditions, enables a person or machine to perform a sequence of events.
5.  **Logical Reasoning:**
    *   Using logic to analyze and deduce whether a solution makes sense or to predict behavior.
    *   *Application:* Debugging code, predicting the output of a loop.
6.  **Evaluation:**
    *   Making sure the solution is efficient and effective.
    *   *Questions:* Does it work? Is it fast enough? Does it use too many resources?

### Problem Solving Method in Programming
The process of developing a program generally follows these 5 steps:

1.  **Problem Analysis:**
    *   Understand the problem statement.
    *   Identify **Input**, **Process**, and **Output** (IPO).
    *   Identify constraints and formulas.
2.  **Design the Solution (Algorithm):**
    *   Plan the logic without worrying about syntax.
    *   **Tools:**
        *   **Pseudocode:** Informal language that resembles a programming language but has no strict syntax.
        *   **Flowcharts:** Graphical representation of the algorithm using standard symbols (terminals, process blocks, decision diamonds, I/O parallelograms).
3.  **Implementation:**
    *   Translate the algorithm into a specific programming language (e.g., C++).
    *   *Note:* Never simply copy pseudocode; adapt it to the language's syntax.
4.  **Testing & Verification:**
    *   Check for errors (bugs).
        *   **Syntax Errors:** Violation of language rules (detected by compiler).
        *   **Logic Errors:** Program runs but produces incorrect results (harder to detect).
        *   **Runtime Errors:** Errors that occur during execution (e.g., divide by zero).
5.  **Documentation:**
    *   **Internal:** Comments within the code for other programmers.
    *   **External:** User manuals, requirements specifications.

### Algorithm Design Tools

#### Flowcharts
Visual diagrams used to represent algorithms.
*   **Oval (Terminal):** Start/End.
*   **Parallelogram (I/O):** Input/Output operations (e.g., `Read x`, `Print y`).
*   **Rectangle (Process):** Calculations or assignments (e.g., `sum = a + b`).
*   **Diamond (Decision):** Questions with Yes/No branches (e.g., `is x > 10?`).
*   **Arrows:** Flow of control.

#### Pseudocode
Text-based description of the algorithm.
*   *Example:*
    ```text
    Start
    Get price
    Get quantity
    total = price * quantity
    Display total
    End
    ```

### Code Documentation
*   **Header:** Includes programmer name, date, and program description.
*   **In-line Comments:** Explain complex logic or variable purposes.
*   **Function Comments:** Describe what a function does, its inputs (parameters), and its output (return value).

---

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
    *   **`delete`:** Frees the memory back to the heap.

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