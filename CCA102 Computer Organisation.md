## Topic 1: Introduction to Computer Organisation and Architecture

### 1.1 Architecture vs. Organisation
*   **Computer Architecture**: Refers to the attributes of a system visible to the programmer (the "what"). It deals with the functional behavior of the system and the logical execution of a program.
    *   *Examples*: Instruction set, data representation (number of bits), I/O mechanisms, addressing techniques.
    *   *Analogy*: The design specifications (e.g., "Is there a multiply instruction?").
*   **Computer Organisation**: Refers to the operational units and their interconnections that realize the architectural specifications (the "how"). It deals with structural relationships and hardware details transparent to the programmer.
    *   *Examples*: Control signals, interfaces between computer and peripherals, memory technology, clock frequency.
    *   *Analogy*: The implementation (e.g., "Is there a hardware multiply unit or is it done by repeated addition?").
*   **The "Family" Concept**: Manufacturers (like IBM or Intel) often produce a family of computer models that share the **same architecture** but have **different organisations**. This allows for code compatibility (upward compatibility) across models with different prices and performance levels.

### 1.2 Structure and Function
A computer is a complex system described hierarchically:
1.  **Structure**: How components relate to each other.
    *   **CPU (Central Processing Unit)**: Controls operation and performs data processing.
        *   *Internal Components*: ALU (Arithmetic Logic Unit), Registers, Control Unit, Internal Interconnection.
    *   **Main Memory**: Stores data.
    *   **I/O (Input/Output)**: Moves data between the computer and the external environment (peripherals).
    *   **System Interconnection**: Mechanism for communication (e.g., System Bus) among CPU, memory, and I/O.
2.  **Function**: The operation of individual components.
    *   **Data Processing**: Performing arithmetic or logical operations on data.
    *   **Data Storage**: Storing data temporarily (short-term) or permanently (long-term).
    *   **Data Movement**: Transferring data between the computer and the outside world (I/O) or within internal components.
    *   **Control**: Managing the resources and coordinating the performance of the functional parts.

### 1.3 History of Computers
*   **1st Generation (Vacuum Tubes)**: 1946-1957.
    *   **ENIAC (1946)**: First general-purpose electronic digital computer. Designed for artillery range tables. Decimal (not binary), hardwired (manual switches), 18,000 vacuum tubes, 30 tons.
    *   **Von Neumann / IAS (1952)**: Stored-program concept (instructions and data in the same memory). Binary. Prototype for modern computers.
*   **2nd Generation (Transistors)**: 1958-1964.
    *   Replaced vacuum tubes. Smaller, cheaper, less heat, solid-state (silicon).
    *   Introduction of **High-Level Languages** and system software.
    *   *Notable Machines*: IBM 7000 series, DEC PDP-1.
*   **3rd Generation (Integrated Circuits)**: 1965-1971.
    *   **Microelectronics**: Gates, memory cells, and interconnections on a single chip.
    *   **Moore's Law**: The number of transistors on a chip doubles approximately every 18 months (originally stated as every year).
    *   **IBM 360 (1964)**: First planned "family" of computers (common instruction set).
    *   **DEC PDP-8**: First minicomputer (smaller, cheaper, bus structure).
*   **Later Generations (LSI, VLSI, ULSI)**:
    *   **Semiconductor Memory**: 1970 Fairchild (256 bits). Memory capacity doubles approximately every year.
    *   **Microprocessors**:
        *   **Intel 4004 (1971)**: First microprocessor (all CPU components on a single chip). 4-bit.
        *   **Intel 8080 (1974)**: First general-purpose 8-bit microprocessor.
        *   **Intel 8086 (1978)**: 16-bit, instruction cache.
*   **Evolution of Architectures**:
    *   **x86 (CISC)**: Dominant in PCs/Servers. Evolved from 16-bit (8086) $\rightarrow$ 32-bit (80386, Multitasking) $\rightarrow$ Pipelining/FPU (486) $\rightarrow$ Superscalar (Pentium) $\rightarrow$ 64-bit (Core 2).
    *   **ARM (RISC)**: Dominant in Embedded Systems/Mobile. High speed, small die size, low power. Used in Cortex-A (Application), Cortex-R (Real-time), Cortex-M (Microcontroller).

### 1.4 Cloud Computing
A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (NIST definition).
*   **Service Models**:
    *   **SaaS (Software as a Service)**: Application software (e.g., Gmail, Dropbox).
    *   **PaaS (Platform as a Service)**: Building blocks, tools, and OS for developers (e.g., Google App Engine).
    *   **IaaS (Infrastructure as a Service)**: Raw processing, storage, and networks (e.g., AWS EC2).

### 1.5 Performance Assessment
*   **Clock Speed**: The speed at which a processor executes instructions, governed by the clock cycle time ($t = 1/f$).
*   **CPI (Cycles Per Instruction)**: The average number of clock cycles required to execute an instruction.
*   **MIPS (Millions of Instructions Per Second)**: A common measure of performance.
    $$\text{MIPS rate} = \frac{f}{\text{CPI} \times 10^6}$$
*   **Amdahl's Law**: The potential speedup of a program using multiple processors is limited by the sequential (non-parallelizable) portion of the code.
    *   *Implication*: Diminishing returns as you add more processors if the code isn't perfectly parallel.
*   **Benchmarks**: Standard programs used to compare performance.
    *   **SPEC (System Performance Evaluation Corporation)**: Industry standard. SPEC CPU2017 uses a suite of real-world programs (integer and floating-point) to test CPU, memory, and compiler performance.

---

## Topic 2: Number Systems

### 2.1 Positional Number Systems
In a positional number system, each number is represented by a string of digits in which each digit position $i$ has an associated weight $r^i$, where $r$ is the **radix** or **base** of the number system.

$$ \text{Value} = \sum (d_i \times r^i) $$

* **Decimal (Base 10)**: Digits 0-9. $r=10$.
* **Binary (Base 2)**: Digits 0, 1. $r=2$. Fundamental for digital systems.
    * *Terminology*:
        * **Bit**: A single binary digit (0 or 1).
        * **Nibble**: A group of 4 bits.
        * **Byte**: A group of 8 bits.
        * **Word**: A group of bits (typically 16, 32, or 64) processed as a unit.
* **Octal (Base 8)**: Digits 0-7. $r=8$. Commonly used in computer programming contexts (Unix permissions, etc.).
* **Hexadecimal (Base 16)**: Digits 0-9, A-F. $r=16$. Compact representation of binary.
* **Other Systems**: Base-12 (Duodecimal), Base-60 (Sexagesimal), Base-64 (Encoding).

### 2.2 Data Representation Principles
* **Digital Systems**: Discrete elements are represented by signals.
    * **Binary**: Only two states (0 and 1). Reliable and easy to implement with switches (transistors).
* **Data Cells**: Bits are grouped into cells (e.g., an 8-bit memory cell).
* **MSB (Most Significant Bit)**: The leftmost bit (highest weight).
* **LSB (Least Significant Bit)**: The rightmost bit (lowest weight).

### 2.3 Conversions

#### Binary/Octal/Hex to Decimal
Multiply each digit by $r^n$ (where $r$ is the base and $n$ is the position) and sum the results.
* *Binary Example*: $1101_2 = (1 \times 2^3) + (1 \times 2^2) + (0 \times 2^1) + (1 \times 2^0) = 8 + 4 + 0 + 1 = 13_{10}$.
* *Hex Example*: $2\text{C}_{16} = (2 \times 16^1) + (12 \times 16^0) = 32 + 12 = 44_{10}$.

#### Decimal to Binary/Octal/Hex (Integer)
Repeatedly divide the decimal number by the target base $r$ and record the remainder. Read remainders from bottom (MSB) to top (LSB).
* *Example*: Convert $13_{10}$ to Binary ($r=2$)
    * $13 / 2 = 6$ rem $1$ (LSB)
    * $6 / 2 = 3$ rem $0$
    * $3 / 2 = 1$ rem $1$
    * $1 / 2 = 0$ rem $1$ (MSB)
    * Result: $1101_2$

#### Decimal to Binary (Fraction)
Repeatedly multiply the fractional part by the target base $r$. The integer part of the result becomes the bit/digit.
* *Example*: $0.625_{10}$ to Binary
    * $0.625 \times 2 = 1.25$ $\rightarrow$ 1
    * $0.25 \times 2 = 0.50$ $\rightarrow$ 0
    * $0.50 \times 2 = 1.00$ $\rightarrow$ 1
    * Result: $0.101_2$

#### Binary $\leftrightarrow$ Octal $\leftrightarrow$ Hexadecimal
These conversions are done by grouping bits because $8 = 2^3$ and $16 = 2^4$.
* **Binary to Octal**: Group bits into **3s** starting from the radix point.
    * $110101_2 \rightarrow (110)(101) \rightarrow 65_8$.
* **Binary to Hexadecimal**: Group bits into **4s** (nibbles) starting from the radix point.
    * $11011010_2 \rightarrow (1101)(1010) \rightarrow \text{D} \text{A}_{16}$.
* **Hexadecimal to Binary**: Expand each hex digit into its 4-bit binary equivalent.
    * $\text{A}_{16} \rightarrow 1010_2$.

### 2.4 Character Codes
Computers must represent non-numeric data (text) using binary codes.

* **BCD (Binary Coded Decimal)**: Represents each decimal digit (0-9) with a 4-bit binary code.
    * *Example*: $9_{10} = 1001_{BCD}$. Unused codes: 1010 to 1111.
* **ASCII (American Standard Code for Information Interchange)**:
    * 7-bit code (128 characters).
    * Includes control characters (e.g., NULL, LF, CR) and printable characters (A-Z, a-z, 0-9, punctuation).
* **EBCDIC (Extended Binary Coded Decimal Interchange Code)**:
    * 8-bit code (256 characters).
    * Used mainly on **IBM mainframe** and midrange systems.
    * Incompatible with ASCII (different bit patterns for characters).

---

## Topic 3: Computer Arithmetic

### 3.1 Arithmetic Logic Unit (ALU)
*   **Definition**: A combinational circuit that performs arithmetic (ADD, SUB) and logical (AND, OR) operations.
*   **Inputs**: Data to be operated on (operands) from registers, Control signals from the Control Unit.
*   **Outputs**: Result of the operation (to registers/memory), Status flags (Zero, Negative, Overflow, Carry).

### 3.2 Integer Representation
*   **Unsigned Magnitude**: Represents only positive integers. Range: $0$ to $2^n - 1$.
*   **Signed Magnitude**: MSB is the sign (0=+, 1=-). Remaining bits are magnitude.
    *   *Drawback*: Two zeros (+0, -0), complex arithmetic.
*   **Two's Complement**: Most common method for signed integers.
    *   **Range**: $-2^{n-1}$ to $+(2^{n-1} - 1)$.
    *   **Negation Rule**: Invert all bits (1s complement) and add 1.
    *   **Extension**: To increase bit width (e.g., 8-bit to 16-bit), perform **Sign Extension** (replicate the MSB to the left).

### 3.3 Integer Arithmetic
*   **Addition/Subtraction**:
    *   Performed using the same hardware (adder). Subtraction is $A + (-B)$ (add 2's complement of B).
    *   **Overflow**: Occurs when the result of adding two numbers with the same sign yields a result with the opposite sign. (Carry into MSB $\neq$ Carry out of MSB).
*   **Multiplication**:
    *   **Unsigned Integers**: Uses the **Add-Shift** method. Iterate through multiplier bits; if 1, add multiplicand (shifted).
    *   **Signed Integers (Booth's Algorithm)**: Handles negative numbers without prior conversion.
        *   Examines pairs of bits $(Q_0, Q_{-1})$ where $Q_{-1}$ starts at 0.
        *   **10**: Subtract multiplicand from accumulator.
        *   **01**: Add multiplicand to accumulator.
        *   **00 or 11**: Arithmetic shift right only.
        *   *Advantage*: Faster than add-shift when there are strings of 1s in the multiplier (reduces additions).
*   **Division**:
    *   More complex than multiplication. Involves repetitive shifting and subtraction.
    *   **Restoring Division**: If subtraction yields a negative remainder, "restore" the value by adding the divisor back.

### 3.4 Floating-Point Representation (IEEE 754)
Used to represent real numbers (integers + fractions), especially very large or very small ones.
$$ \text{Value} = (-1)^S \times 1.M \times 2^{E - \text{Bias}} $$

*   **Format Components**:
    1.  **Sign Bit (S)**: 0 for positive, 1 for negative.
    2.  **Biased Exponent (E)**: Stored as an unsigned integer. Bias is subtracted to get the true exponent.
        *   *Why Bias?* To treat exponents as unsigned numbers for easy comparison.
    3.  **Significand/Mantissa (M)**: The fractional part. The leading '1' is implicit (hidden bit) for normalized numbers.

*   **IEEE 754 Standards**:
    *   **Single Precision (32-bit)**:
        *   Sign: 1 bit
        *   Exponent: 8 bits (Bias = 127)
        *   Significand: 23 bits
        *   Range: $\approx 10^{-38}$ to $10^{+38}$.
    *   **Double Precision (64-bit)**:
        *   Sign: 1 bit
        *   Exponent: 11 bits (Bias = 1023)
        *   Significand: 52 bits
        *   Range: $\approx 10^{-308}$ to $10^{+308}$.

### 3.5 Floating-Point Arithmetic
*   **Addition/Subtraction**:
    1.  **Check for zeros**.
    2.  **Align Significance**: Shift the significand of the number with the *smaller* exponent to the right until exponents match.
    3.  **Add/Subtract Significands**.
    4.  **Normalize**: Shift result and adjust exponent until leading bit is 1.
*   **Multiplication/Division**:
    1.  **Add/Subtract Exponents** (and handle bias).
    2.  **Multiply/Divide Significands**.
    3.  **Normalize** result.
    4.  **Round** result.
*   **Issues**:
    *   **Exponent Overflow**: Positive exponent exceeds maximum.
    *   **Exponent Underflow**: Negative exponent is too small (number too close to zero).
    *   **Significand Overflow**: Addition of same-sign numbers carries out.
    *   **Precision Loss**: Shifting during alignment drops bits.

---

## Topic 4: Digital Logic

### Part 1: Boolean Algebra & Combinational Circuits

#### 4.1 Boolean Algebra
*   **Fundamental Concepts**:
    *   **Variables**: Take values 0 (False/Low) or 1 (True/High).
    *   **Basic Operations**:
        *   **AND** ($A \cdot B$): True only if both inputs are True.
        *   **OR** ($A + B$): True if at least one input is True.
        *   **NOT** ($\bar{A}$ or $A'$): Inverts the input.
    *   **Other Operations**:
        *   **NAND**: NOT AND. True unless both inputs are True.
        *   **NOR**: NOT OR. True only if both inputs are False.
        *   **XOR** ($A \oplus B$): True if inputs differ (odd number of 1s).
*   **Basic Identities**:
    *   **DeMorgan’s Laws**:
        1.  $\overline{A \cdot B} = \bar{A} + \bar{B}$ (NAND equivalent to Bubbled OR)
        2.  $\overline{A + B} = \bar{A} \cdot \bar{B}$ (NOR equivalent to Bubbled AND)
    *   **Distributive Laws**: $A(B+C) = AB + AC$ and $A + BC = (A+B)(A+C)$.
    *   **Involution**: $\bar{\bar{A}} = A$.

#### 4.2 Simplification Techniques
*   **Algebraic Simplification**: Using identities to reduce terms.
*   **Canonical Forms**:
    *   **Sum of Products (SOP)**: Focuses on input combinations producing a **1**. Implemented with AND-OR logic.
    *   **Product of Sums (POS)**: Focuses on input combinations producing a **0**. Implemented with OR-AND logic.
*   **Karnaugh Maps (K-Maps)**:
    *   A graphical method for simplifying Boolean expressions (up to 4 variables).
    *   **Structure**: Grid cells arranged in **Gray Code** order (00, 01, 11, 10) so adjacent cells differ by only 1 bit.
    *   **Grouping Rules**:
        *   Group adjacent 1s in powers of 2 (1, 2, 4, 8, 16).
        *   Groups can wrap around edges.
        *   **Goal**: Largest possible groups, fewest number of groups.
    *   **Don't Care Conditions (X)**: Input combinations that never occur. Can be treated as 0 or 1 to optimize grouping.
*   **Quine-McCluskey Method**:
    *   Tabular method suitable for algorithms and >4 variables.
    *   Groups terms based on number of 1s, finds prime implicants, and selects the essential ones.

#### 4.3 Logic Gates Implementation
*   **Universal Gates**: **NAND** and **NOR** are functionally complete; any Boolean function can be implemented using only NAND or only NOR gates.
*   **Block Diagrams**: Visualizing functions using interconnected gates.

#### 4.4 Combinational Circuits
Circuits where the output depends **only** on the current input (Memoryless).

*   **Multiplexer (MUX)**:
    *   **Function**: Selects one of many data inputs and forwards it to a single output ("Data Selector").
    *   **Structure**: $2^n$ data inputs, $n$ select lines, 1 output.
    *   **Applications**: Data routing, parallel-to-serial conversion, implementing Boolean functions.
*   **Decoder**:
    *   **Function**: Converts binary information from $n$ input lines to a maximum of $2^n$ unique output lines.
    *   **Logic**: Only one output is asserted (active) at a time based on the input pattern.
    *   **Applications**: Memory address decoding (selecting specific RAM chips), instruction decoding.
*   **Read-Only Memory (ROM)**:
    *   Can be viewed as a combinational circuit where inputs (address) produce a fixed output (data).
    *   Structure: Decoder (AND array) followed by OR gates.
*   **Adders**:
    *   **Half Adder**: Adds 2 bits. Outputs **Sum** (XOR) and **Carry** (AND).
    *   **Full Adder**: Adds 3 bits (Bit A, Bit B, Carry-in). Outputs Sum and Carry-out.
    *   **Ripple Carry Adder**: $n$ full adders cascaded. Carry propagates through stages (Slow).
    *   **Carry Lookahead Adder**: Logic calculates carry signals independently of the sum bits to reduce propagation delay.

---

### Part 2: Sequential Circuits & PLDs

#### 4.5 Sequential Circuits
Circuits where the output depends on the current input **AND** the history of past inputs (Current State). Contains a **Feedback Path**.

*   **Flip-Flops (Bit Storage)**:
    *   **S-R Latch**: Simplest storage. Inputs Set (S) and Reset (R). undefined state if S=1, R=1.
    *   **Clocked S-R Flip-Flop**: Updates state only on clock pulse (Synchronous).
    *   **D Flip-Flop (Data)**: Single input $D$. Output $Q$ follows $D$ at clock edge. Ensures $S$ and $R$ are never equal. Used for building registers.
    *   **J-K Flip-Flop**: Improves S-R. If $J=1, K=1$, the output **Toggles** (inverts).
*   **Registers**:
    *   Group of flip-flops used to store binary data (e.g., 8-bit register).
    *   **Parallel Registers**: All bits written/read simultaneously.
    *   **Shift Registers**: Data is shifted serially (left or right) through the FFs. Used for serial-parallel interface.
*   **Counters**:
    *   Registers that cycle through a specific sequence of states (e.g., 0 to 15).
    *   **Ripple Counter (Asynchronous)**: The output of one flip-flop drives the clock of the next. Accumulates delay.
    *   **Synchronous Counter**: All flip-flops are triggered by a common clock. Faster and more stable.

#### 4.6 Programmable Logic Devices (PLDs)
General-purpose chips that can be configured to implement specific logic functions.

*   **PLA (Programmable Logic Array)**: Programmable **AND** plane feeding a Programmable **OR** plane. Flexible but expensive/complex.
*   **PAL (Programmable Array Logic)**: Programmable **AND** plane feeding a **Fixed OR** plane. Simpler, cheaper, but less flexible.
*   **CPLD (Complex PLD)**: Multiple SPLD-like blocks integrated on a single chip with interconnects.
*   **FPGA (Field-Programmable Gate Array)**:
    *   **Structure**: Massive array of **Logic Blocks** (Look-Up Tables/LUTs), **I/O Blocks**, and programmable **Interconnects**.
    *   **Programming**: Volatile (SRAM-based) usually. Defines truth tables in LUTs and routing switches.
    *   **Advantages**: High density, re-programmable, fast prototyping, parallel execution.

---

## Topic 5: Addressing and Instruction Set Characteristics & Functions

### 5.1 Memory Locations and Addresses
*   **Memory Structure**: Consists of millions of storage cells.
    *   **Bit**: Each cell stores a value of 0 or 1.
    *   **Word**: A group of $n$ bits (where $n$ is the word length, typically 16, 32, or 64 bits).
*   **Addressing**: Accessing memory requires a unique address for each location.
    *   $k$ address bits can address $2^k$ locations (Address Space).
*   **Byte Addressability**:
    *   Most modern computers assign an address to each **8-bit byte**.
    *   Successive addresses ($0, 1, 2, \dots$) refer to successive byte locations.
    *   If word length is 32 bits (4 bytes), words are located at addresses $0, 4, 8, \dots$.
*   **Word Alignment**:
    *   Words are "aligned" if they begin at a byte address that is a multiple of the number of bytes in a word.
    *   Example (16-bit word): Aligned at 0, 2, 4...
    *   Example (32-bit word): Aligned at 0, 4, 8...

#### Endianness
Two ways to assign byte addresses within a larger word (e.g., a 32-bit integer).
1.  **Big-Endian**:
    *   The **Most Significant Byte (MSB)** is stored at the **lowest** (first) address.
    *   "Big end first". Used by IBM 370, Motorola 68000, Internet protocols (Network Byte Order).
2.  **Little-Endian**:
    *   The **Least Significant Byte (LSB)** is stored at the **lowest** (first) address.
    *   "Little end first". Used by Intel x86.

### 5.2 Memory Operations
*   **Load (Read/Fetch)**:
    1.  Processor sends the **address** to memory.
    2.  Processor issues a **Read** control signal.
    3.  Memory reads data at that address and sends it to the processor.
*   **Store (Write)**:
    1.  Processor sends the **address** and the **data** to be written.
    2.  Processor issues a **Write** control signal.
    3.  Memory writes the data into the specified location (overwriting previous content).

### 5.3 Instructions and Sequencing

#### Notation
*   **Register Transfer Notation (RTN)**: Describes data transfer and operations.
    *   `R1 <- [LOC]`: Transfer content of memory location LOC to register R1.
    *   `R3 <- [R1] + [R2]`: Add contents of registers R1 and R2, store result in R3.
*   **Assembly Language Notation**: Represents machine instructions mnemonically.
    *   `Move LOC, R1`
    *   `Add R1, R2, R3`

#### Sequencing
*   **Program Counter (PC)**: Register holding the address of the *next* instruction to be executed.
*   **Straight-Line Sequencing**: The processor fetches an instruction, increments the PC (e.g., by 4 for 32-bit words) to point to the next sequential instruction, and then executes.
*   **Branching**: Altering the sequential flow (loops, if-statements).
    *   **Conditional Branch**: Branch only if a condition is met (e.g., `Branch>0 LOOP`).
    *   **Condition Codes (Flags)**: Bits (N, Z, V, C) recorded by the processor to track results of the last operation (Negative, Zero, Overflow, Carry).

### 5.4 Types of Instructions
1.  **Data Transfer**: Move data between memory and processor registers (e.g., `Move`, `Load`, `Store`, `Push`, `Pop`).
2.  **Arithmetic**: Math operations on numerical data (e.g., `Add`, `Sub`, `Multiply`, `Divide`, `Increment`).
3.  **Logical**: Bitwise operations (e.g., `AND`, `OR`, `NOT`, `XOR`, `Shift`, `Rotate`).
4.  **Conversion**: Changing data formats (e.g., Binary to Decimal).
5.  **Input/Output (I/O)**: Transfer programs/data between memory and external devices (may be memory-mapped or isolated).
6.  **System Control**: Privileged instructions for the OS (e.g., accessing control registers, Halt).
7.  **Transfer of Control**:
    *   **Branch/Jump**: `GoTo` logic.
    *   **Skip**: Implied address (e.g., "Skip next instruction if zero").
    *   **Subroutine Call**: `Call` (saves return address) and `Return`.

### 5.5 Types of Operands
Instructions operate on:
*   **Addresses**: Can be treated as unsigned integers.
*   **Numbers**: Integer (signed/unsigned), Floating-point, Packed Decimal.
*   **Characters**: ASCII (7-bit), EBCDIC (8-bit).
*   **Logical Data**: Bits or flags.

### 5.6 Number of Addresses
The number of address fields in an instruction impacts program length and complexity.

| Type | Format | Example ($A = B + C$) | Pros/Cons |
| :--- | :--- | :--- | :--- |
| **3-Address** | `Op Dest, Src1, Src2` | `ADD A, B, C` | **Pro**: Short programs. <br> **Con**: Instructions are very long (many bits). |
| **2-Address** | `Op Dest, Src` | `MOVE A, B`<br>`ADD A, C` | **Pro**: Shorter instructions than 3-addr. <br> **Con**: One operand is overwritten (Dest). Requires extra move. |
| **1-Address** | `Op Src` | `LOAD B`<br>`ADD C`<br>`STORE A` | **Implicit**: Uses **Accumulator (AC)**. <br> **Pro**: Short instructions. <br> **Con**: Longer programs (more instructions). |
| **0-Address** | `Op` (Implicit) | `PUSH B`<br>`PUSH C`<br>`ADD`<br>`POP A` | **Implicit**: Uses a **Stack**. <br> **Pro**: Very short instructions. <br> **Con**: Complex logic/stack management. |

### 5.7 Design Decisions
When designing an Instruction Set Architecture (ISA), architects must decide:
*   **Operation Repertoire**: How many and which operations to provide? How complex?
*   **Data Types**: Which types (integer, float, character) are supported directly?
*   **Instruction Formats**: Length of op-code, number of addresses, fixed vs. variable length.
*   **Registers**: Number of available CPU registers (more registers = faster access but expensive).
*   **Addressing Modes**: Methods to specify operand locations (e.g., direct, indirect, register).

---

## Topic 6: Addressing Modes and Instruction Formats

### 6.1 Addressing Modes
Addressing modes specify how the **Effective Address (EA)** of an operand is calculated. They offer a trade-off between address range, addressing flexibility, and the number of memory references/complexity.

*   **Notation**:
    *   $A$: Contents of the address field in the instruction.
    *   $R$: Contents of an address field that refers to a register.
    *   $EA$: Effective Address (actual location of the operand).
    *   $(X)$: Contents of memory location $X$ or register $X$.

#### 1. Immediate Addressing
*   **Mechanism**: The operand is part of the instruction itself.
    *   **Operand = A**
*   **Usage**: Defining constants or setting initial values.
*   **Pros**: No memory reference to fetch data (fast).
*   **Cons**: Limited range (operand size limited by address field size).

#### 2. Direct Addressing
*   **Mechanism**: The address field contains the address of the operand.
    *   **EA = A**
*   **Pros**: Simple, single memory reference.
*   **Cons**: Limited address space (address field is usually smaller than full memory space).

#### 3. Indirect Addressing
*   **Mechanism**: The address field points to a memory cell that contains the *address* of the operand (a pointer).
    *   **EA = (A)**
*   **Pros**: Large address space (word length determines address size). Can be nested/cascaded.
*   **Cons**: Multiple memory accesses to find operand (slower).

#### 4. Register Addressing
*   **Mechanism**: The operand is held in a register named in the address field.
    *   **EA = R**
*   **Pros**: Very fast (no memory access), very small address field needed (few registers).
*   **Cons**: Extremely limited address space (number of registers).

#### 5. Register Indirect Addressing
*   **Mechanism**: The register contains the address of the operand in memory.
    *   **EA = (R)**
*   **Pros**: Large address space ($2^n$), one fewer memory access than standard indirect addressing.
*   **Cons**: Requires one extra memory reference compared to register addressing.

#### 6. Displacement Addressing
*   **Mechanism**: Combines direct and register indirect addressing. Two values are used: a base value (usually in a register) and a displacement (in instruction).
    *   **EA = A + (R)**
*   **Variations**:
    *   **Relative Addressing**: $R = PC$. EA = A + (PC). Used for branch instructions (locality of reference).
    *   **Base-Register Addressing**: $R$ holds a base address; $A$ holds displacement. Good for relocating programs (segments).
    *   **Indexing**: $A$ = Base, $R$ = Displacement. Good for accessing arrays ($EA = A + Index$). Auto-indexing ($R++$) handles iteration.

#### 7. Stack Addressing
*   **Mechanism**: Operand is implicitly on top of the stack.
*   **Pros**: No memory reference required in the instruction (implicit).
*   **Cons**: Limited applicability (only works for stack-based logic).

### 6.2 Comparison of Addressing Modes

| Mode | Algorithm | Principal Advantage | Principal Disadvantage |
| :--- | :--- | :--- | :--- |
| **Immediate** | Operand = A | No memory reference | Limited operand magnitude |
| **Direct** | EA = A | Simple | Limited address space |
| **Indirect** | EA = (A) | Large address space | Multiple memory references |
| **Register** | EA = R | No memory reference | Limited address space |
| **Register Indirect** | EA = (R) | Large address space | Extra memory reference |
| **Displacement** | EA = A + (R) | Flexibility | Complexity |
| **Stack** | Implicit | No memory reference | Limited applicability |

### 6.3 Instruction Formats
The layout of bits in an instruction defined by its opcode, operands, and addressing modes.

#### Key Design Issues
*   **Instruction Length**: Affected by memory size, bus structure, and speed. Trade-off between powerful instructions (long) and saving space (short).
*   **Allocation of Bits**:
    *   Number of addressing modes (Implicit vs. Explicit).
    *   Number of operands (Typical is 2 or 3).
    *   Register vs. Memory support.
    *   Granularity of addresses.

#### Example Architectures
*   **PDP-11**:
    *   Variable instruction lengths (16, 32, 48 bits).
    *   Orthogonal set of addressing modes (independent of opcode).
    *   Highly flexible but complex hardware.
*   **VAX**:
    *   Focus on orthogonality.
    *   Highly variable format (0 to 6 operands).
    *   Opcode can be 1 or 2 bytes.
*   **x86**:
    *   Complex format with prefixes (e.g., LOCK, REP).
    *   Fields: Instruction Prefix, Segment Override, Opcode (1-3 bytes), ModR/M (Addressing), SIB (Scale Index Byte), Displacement, Immediate.
    *   Designed for backward compatibility.
*   **PowerPC**:
    *   Fixed instruction length (32 bits).
    *   Regular formats (Load/Store, Branch, Arithmetic).
    *   Simplifies decoding (RISC philosophy).

# Topic 7: Central Processing Unit

## 1. CPU Structure
The CPU is the "brain" of the computer, responsible for the following core functions:
*   **Fetch instructions**: Read instructions from memory.
*   **Interpret instructions**: Decode the instruction to determine the required action.
*   **Fetch data**: Read data from memory or I/O modules if needed for execution.
*   **Process data**: Perform arithmetic or logical operations on data.
*   **Write data**: Write the results of an operation to memory or an I/O module.

It consists of three major internal components connected by an **Internal CPU Bus**:
* **Arithmetic and Logic Unit (ALU)**: Performs the actual computation (arithmetic and boolean logic operations), status flagging, and shifting.
* **Control Unit (CU)**: Controls the movement of data and instructions into and out of the CPU and manages the operation of the ALU.
* **Registers**: Internal CPU memory used for temporary storage and high-speed access.

> [!INFO] System Bus Connection
> The CPU connects to the rest of the computer (Memory and I/O) via the **System Bus**, which is divided into:
> * **Data Bus**: Transfers actual data and instructions.
> * **Address Bus**: Identifies the location of data/instructions.
> * **Control Bus**: Transmits command signals (read, write, interrupt).

---

## 2. Register Organization
Registers provide high-speed temporary storage (working space) for the CPU.

### User-Visible Registers
Can be referenced by assembly-level instructions to minimize main memory references.
* **General Purpose**: May be true general purpose or restricted (specialized). 
    * *Design Issues*: Number of registers (typically 8-32), register size (large enough for full addresses/data types), and whether to allow combining two registers for double-length values.
    * *Trade-off*: More registers can reduce memory references but increase instruction size (more bits to specify the register).
* **Data Registers**: Often used for data manipulation (e.g., Accumulator); sometimes cannot be used for operand address calculation.
* **Address Registers**:
    * *Segment Pointer*: Holds the base address of a memory segment.
    * *Index Register*: Used for indexed addressing (often supports auto-indexing).
    * *Stack Pointer*: Points to the top of the system stack, allowing implicit addressing.
* **Condition Codes (Flags)**: Individual bits set by hardware (e.g., Sign, Zero, Carry, Overflow). Usually read implicitly by programs (e.g., for conditional jumps) but cannot always be set directly.

### Control & Status Registers
Used by the Control Unit and OS to manage execution.

| Register | Full Name | Function |
| :--- | :--- | :--- |
| **PC** | Program Counter | Contains the address of the *next* instruction to be fetched; updated after fetch. |
| **IR** | Instruction Register | Contains the fetched instruction; opcode and operand specifiers are analyzed here. |
| **MAR** | Memory Address Register | Connected to the address bus; specifies the location for the next read/write. |
| **MBR** | Memory Buffer Register | Connected to the data bus; holds data to be written or recently read. |
| **PSW** | Program Status Word | A set of flags indicating CPU status (e.g., Sign, Zero, Carry, Interrupt Enable, Supervisor/User Mode). |

> [!SUMMARY] Supervisor Mode (Kernel Mode)
> A privileged mode used by the OS (Intel "Ring 0"). It allows execution of privileged instructions and access to protected areas of memory/status registers not available to user programs.

### Case Study: Motorola MC68000 vs. Intel 8086

| Feature | Motorola MC68000 | Intel 8086 |
| :--- | :--- | :--- |
| **Architecture** | 32-bit (Regular instruction set) | 16-bit (Special-purpose focus) |
| **Data Registers** | 8 (D0-D7) for data manipulation. | 4 (AX, BX, CX, DX) - AX is Accumulator. |
| **Address Registers** | 9 (A0-A7 + Stack Pointers). | 4 Pointers/Index (SP, BP, SI, DI) + 4 Segment Registers (CS, DS, SS, ES). |
| **Flexibility** | High; very regular usage. | Lower; many registers have implicit uses. |

---

## 3. The Instruction Cycle
The execution of a single instruction involves several sub-cycles.

### Data Flow in Sub-Cycles
1.  **Fetch Cycle**: 
    *   `PC` contains address of next instruction.
    *   Address moved to `MAR`.
    *   Control Unit requests memory read.
    *   Result placed on Data Bus, copied to `MBR`, then to `IR`.
    *   `PC` is incremented by 1 (or instruction length).
2.  **Indirect Cycle**:
    *   `IR` is examined; if indirect addressing is used, `MBR` (address part) moved to `MAR`.
    *   Control Unit requests memory read to fetch the effective address.
3.  **Execute Cycle**: 
    *   Depends on the instruction in `IR`. May involve memory R/W, I/O, or register transfers.
4.  **Interrupt Cycle**:
    *   Current `PC` is saved to allow resumption (often pushed to stack or saved to `MBR` then memory).
    *   `PC` is loaded with the start address of the interrupt handler routine.

### Interrupts
* **Types**: Program (error), Timer (multitasking), I/O (device ready), Hardware Failure.
* **Handling**: Suspend program $\rightarrow$ Save Context (PC, PSW) $\rightarrow$ Set PC to Handler $\rightarrow$ Process $\rightarrow$ Restore Context.

---

## 4. Instruction Pipelining
Pipelining overlaps the execution of multiple instructions to increase throughput.

### The 6-Stage Pipeline
1.  **FI (Fetch Instruction)**: Read instruction from memory.
2.  **DI (Decode Instruction)**: Determine opcode and operand specifiers.
3.  **CO (Calculate Operands)**: Calculate effective addresses.
4.  **FO (Fetch Operands)**: Fetch operands from memory.
5.  **EI (Execute Instruction)**: Perform the operation.
6.  **WO (Write Operand)**: Store result in destination.

### Performance & Limits
* **Ideal Speedup**: Approaches $k$ (number of stages) for a large number of instructions $n$.
* **Limitations**: 
    * *Unequal Stage Duration*: Pipeline must wait for the slowest stage.
    * *Hazards*: 
        * **Resource Conflict**: Two stages needing memory at once.
        * **Data Dependency**: Instruction $B$ needs result of instruction $A$.
        * **Branch Penalty**: Conditional branches can invalidate prefetched instructions.

### Branching Solutions
* **Multiple Streams**: Fetching both possible paths (leads to bus contention).
* **Prefetch Branch Target**: Fetch target in addition to sequential next.
* **Loop Buffer**: Small, fast memory for recently fetched instructions; excellent for loops.
* **Branch Prediction**:
    * *Static*: Predict Never Taken, Always Taken, or predict based on Opcode.
    * *Dynamic*: Use a **Branch History Table** or Taken/Not Taken switches to track history.
* **Delayed Branching**: Rearranging instructions so the "delay slot" after a branch is filled with useful work.

### Example: Intel 80486 Pipelining
The 80486 uses a 5-stage pipeline:
1. **Fetch**: From cache or memory into prefetch buffers.
2. **Decode 1**: Opcode and addressing mode decoded.
3. **Decode 2**: Expands opcode into control signals and handles complex addressing.
4. **Execute**: ALU operations, cache access, and register updates.
5. **Write Back**: Updates registers and status flags.

---

## 5. Summary / Key Takeaways
* **Registers** are the fastest storage; design involves a trade-off between flexibility and instruction size.
* The **Instruction Cycle** data flow involves coordinated movement between PC, MAR, MBR, and IR.
* **Pipelining** significantly improves performance but requires complex logic to handle **Hazards** and **Branch Penalties**.
* **Modern CPUs** use advanced branch prediction and multilevel pipelining (e.g., Intel 80486's 5-stage design) to maintain efficiency.


# Topic 8: Control Unit

## 1. Control Unit Overview

The **Control Unit (CU)** is the nerve center of the processor, responsible for managing the execution of instructions by generating control signals.

> [!INFO] Functional Requirements
> To characterize the control unit, we must:
> 1.  **Define basic elements** of the processor.
> 2.  **Describe micro-operations** the processor performs.
> 3.  **Determine functions** the control unit must perform:
>     *   **Sequencing:** Causing the CPU to step through a series of micro-operations in the correct sequence based on the program logic.
>     *   **Execution:** Causing the performance of each individual micro-operation by generating specific control signals.

### Inputs & Outputs
To perform its function, the CU relies on specific inputs to determine the state of the system and produces outputs to control behavior.

**Inputs:**
* **Clock:** A repetitive sequence of pulses used to measure the duration of micro-operations.
* **Instruction Register (IR):** Contains the Op-code of the current instruction, which determines which micro-instructions are performed.
* **Flags:** Indicate the status of the CPU and results of previous ALU operations (e.g., Zero, Overflow).
* **Control Bus Signals:** Signals from the control bus, such as interrupt signals and acknowledgments.

**Outputs:**
* **Control Signals within the CPU:**
    * Cause data movement (register-to-register).
    * Activate specific ALU functions.
* **Control Signals to System Bus:**
    * **Control to Memory:** e.g., Read/Write signals.
    * **Control to I/O Modules:** e.g., I/O Read/Write.

---

## 2. Micro-Operations

> [!SUMMARY] Definition
> A **Micro-operation ($\mu$-op)** is the functional atomic operation of a CPU. Each instruction cycle (Fetch, Indirect, Execute, Interrupt) is made up of a sequence of these smaller, fundamental steps.

### The Cycles (Register Transfer Notation)

#### Fetch Cycle
The process of reading the next instruction from memory into the Instruction Register.
* **t1:** $MAR \leftarrow (PC)$
* **t2:** $MBR \leftarrow Memory$
    * $PC \leftarrow (PC) + I$ (Increment PC in parallel)
* **t3:** $IR \leftarrow (MBR)$

#### Indirect Cycle
Used if the instruction specifies an indirect address (pointer) for an operand.
* **t1:** $MAR \leftarrow (IR_{address})$
* **t2:** $MBR \leftarrow Memory$
* **t3:** $IR_{address} \leftarrow (MBR_{address})$

#### Interrupt Cycle
Occurs at the end of the execute cycle if an interrupt is pending. Saves the current context.
* **t1:** $MBR \leftarrow (PC)$
* **t2:** $MAR \leftarrow SaveAddress$
    * $PC \leftarrow RoutineAddress$
* **t3:** $Memory \leftarrow (MBR)$

#### Execute Cycle
The sequence differs for every instruction. Examples:

* **ADD R1, X** (Add content of X to R1):
    * $MAR \leftarrow (IR_{address})$
    * $MBR \leftarrow Memory$
    * $R1 \leftarrow (R1) + (MBR)$
* **ISZ X** (Increment and Skip if Zero):
    * $MAR \leftarrow (IR_{address})$
    * $MBR \leftarrow Memory$
    * $MBR \leftarrow (MBR) + 1$
    * $Memory \leftarrow (MBR)$
    * IF $((MBR) == 0)$ THEN $PC \leftarrow (PC) + I$
* **BSA X** (Branch and Save Address):
    * $MAR \leftarrow (IR_{address})$
    * $MBR \leftarrow (PC)$
    * $PC \leftarrow (IR_{address})$
    * $Memory \leftarrow (MBR)$
    * $PC \leftarrow (PC) + I$

### Instruction Cycle Code (ICC)
A 2-bit register often used to designate the state of the processor:
* **00:** Fetch
* **01:** Indirect
* **10:** Execute
* **11:** Interrupt

---

## 3. Implementation Approaches

There are two primary ways to design the logic of the Control Unit.

### Hardwired Implementation
The CU is a combinatorial circuit. The logic is implemented via gates, flip-flops, decoders, and counters.
* **Logic:** The Inputs (IR, Clock, Flags) are fed into a decoder and timing generator. Boolean expressions are derived for each control signal (e.g., $C5 = \bar{P} \cdot \bar{Q} \cdot T_2$).
* **Pros/Cons:** It is extremely fast (optimized for speed) but results in a complex, inflexible design that is difficult to test or modify (adding new instructions requires physical hardware changes). Preferred for **RISC** architectures.

### Micro-programmed Implementation
The CU logic is stored as a "program" (firmware) in a special memory called **Control Memory**.
* **Concept:** Instructions are broken down into **micro-instructions**. A sequence of micro-instructions is a **micro-program**.
* **Mechanism:** The opcode from the IR is mapped to a starting address in the Control Memory. The CU reads micro-instructions to generate control signals.
* **Structure:**
    * **Control Address Register (CAR):** Specifies the address of the next micro-instruction.
    * **Control Buffer Register (CBR):** Holds the micro-instruction currently being executed.
    * **Sequencing Logic:** Determines the next address to load into the CAR.
* **Pros/Cons:** Simplifies the design and allows for flexibility (can update instruction sets by changing firmware). However, it is generally slower than hardwired because of the memory access time. Preferred for **CISC** architectures.

### Comparison: Hardwired vs. Micro-programmed

| Feature          | Hardwired Control                       | Micro-programmed Control                    |
| :--------------- | :-------------------------------------- | :------------------------------------------ |
| **Speed**        | Fast (Direct hardware execution)        | Slow (Requires control memory access)       |
| **Complexity**   | Complex (Combinatorial logic)           | Simple (Systematic software-like structure) |
| **Flexibility**  | Inflexible (Difficult to modify)        | Flexible (Easy to update firmware)          |
| **Cost**         | Expensive (Design & testing complexity) | Cheaper (Regular memory structure)          |
| **Architecture** | Common in RISC                          | Common in CISC                              |

---

## 4. Micro-programmed Control Details

### Horizontal vs. Vertical Micro-instructions

| Feature | Horizontal Micro-programming | Vertical Micro-programming |
| :--- | :--- | :--- |
| **Word Width** | **Wide** (Long control words, e.g., 40-100 bits) | **Narrow** (Short control words, e.g., 16-40 bits) |
| **Encoding** | **Unpacked** (Little to no encoding). | **Packed** (Highly encoded). |
| **Parallelism** | High degree of parallel operations possible (1 bit per control line). | Limited ability to express parallelism. |
| **Logic** | Simple control logic (Direct mapping to signals). | Complex control logic (Requires decoders). |
| **Speed** | Faster execution. | Slower execution. |

### Sequencing Techniques
Determining the address of the next micro-instruction to execute.
1.  **Two Address Fields:** The micro-instruction contains two explicit address fields. A multiplexer selects one based on status flags. Simple but requires a wider word.
2.  **Single Address Field:** Contains one address field. The "next" address is chosen from: the Address Field, the IR code (mapping), or the Next Sequential Address.
3.  **Variable Format:** Uses a bit to designate the format. One format is for control signals; the other is for branching/sequencing.

### Address Generation
* **Explicit:** The address is explicitly available in the micro-instruction (e.g., Two-field).
* **Implicit:** Additional logic is required to generate the address (e.g., Mapping Opcode $\to$ Address, Adding/Combining address portions, Residual control).

### Encoding
* **Functional vs. Resource Encoding:**
    * *Functional:* Identifies functions (e.g., ALU op) and designates fields by function type.
    * *Resource:* Views the machine as independent resources and devotes one field to each resource.
* **Direct vs. Indirect Encoding:**
    * *Direct:* Bits directly control the line (or simple decode).
    * *Indirect:* One field determines the interpretation of another field (similar to mode bits).

---

## 5. Summary/Key Takeaways

* **Core Task:** The Control Unit bridges the gap between hardware (gates/ALU) and software (instructions) by converting Op-codes into electrical signals.
* **Cycle Hierarchy:** Program $\rightarrow$ Instruction Cycles $\rightarrow$ Micro-Operations.
* **Hardwired = Speed:** Best for simple instruction sets (RISC) where speed is critical. Logic is "baked in."
* **Micro-programmed = Flexibility:** Best for complex instruction sets (CISC). Logic is stored in ROM/Control Memory.
* **Fetch Cycle:** Almost identical for all instructions ($PC \rightarrow MAR \rightarrow Memory \rightarrow MBR \rightarrow IR$).
* **Micro-instruction Design:** A trade-off between word width (Horizontal) and encoding complexity (Vertical).


# Topic 9: Interfacing and Communication

## 1. I/O Module Fundamentals

The **I/O Module** acts as the critical bridge between the high-speed CPU/Memory (via the System Bus) and the slower, diverse peripheral devices.

### Why not connect peripherals directly?
1.  **Variety**: Peripherals vary widely in operation methods; it's impractical to incorporate logic for all of them into the CPU.
2.  **Data Transfer Rate**: Peripherals are often much slower than the CPU/RAM. Direct connection would bottle-neck the system.
3.  **Data Formats**: Peripherals use different data formats and word lengths than the computer's internal architecture.

### Key Functions of an I/O Module
1.  **Control & Timing**: Coordinates traffic between internal resources and external devices.
    *   *Steps:* CPU checks status $\to$ Module returns status $\to$ If ready, CPU requests transfer $\to$ Module gets data from device $\to$ Module transfers to CPU.
2.  **Processor Communication**:
    *   **Command Decoding**: Accepts commands (e.g., `READ SECTOR`, `SEEK`) from the address bus.
    *   **Data**: Exchanges data via the data bus.
    *   **Status Reporting**: Reports device state (BUSY, READY) to the CPU (common because peripherals are slow).
    *   **Address Recognition**: Recognizes the unique address of each managed peripheral.
3.  **Device Communication**: Performs commands, sends status info, and transmits data to the peripheral.
4.  **Data Buffering**: Essential for speed matching. Data is buffered in the module to prevent the CPU from slowing down to the device's transfer rate.
5.  **Error Detection**: Detects mechanical errors (paper jam) or transmission errors (parity bits).

---

## 2. I/O Techniques: The Core Triad

There are three main techniques for handling I/O operations, evolving from simple to efficient.

### A. Programmed I/O
The CPU has direct control over the I/O operation, including sensing status, sending read/write commands, and transferring data.

*   **Mechanism**:
    1.  CPU issues an I/O command.
    2.  I/O module performs the action and sets bits in its status register.
    3.  **Busy Waiting**: The CPU waits and repeatedly checks the status register until the operation is complete.
*   **Drawback**: Wastes enormous amounts of CPU time in tight wait loops.
*   **Addressing**:
    *   **Memory-Mapped**: I/O devices share the same address space as memory. Single read/write lines.
    *   **Isolated I/O**: Separate address spaces. Specialized commands (`IN`, `OUT`) and control lines.

### B. Interrupt-Driven I/O
Overcomes the CPU waiting problem. The CPU issues a command and continues executing other useful work. The I/O module interrupts the CPU when ready.

#### The Process
1.  **CPU**: Issues read command $\to$ Switches to other work.
2.  **I/O Module**: Gets data from peripheral $\to$ Signals **Interrupt**.
3.  **CPU Response**:
    *   Finishes current instruction.
    *   Acknowledges interrupt.
    *   **Saves Context**: Pushes PSW and PC to the control stack.
    *   Loads new PC from the Interrupt Vector.
    *   Executes **Interrupt Service Routine (ISR)** to process data.
    *   Restores context and resumes original program.

#### Design Issues
*   **Identification**: How does the CPU know *who* interrupted?
    *   *Software Poll*: Slow polling of each module.
    *   *Daisy Chain*: Hardware poll; acknowledgment signal propagates down a chain.
    *   *Bus Arbitration*: Module must claim the bus (Master) before raising an interrupt (Vectored Interrupt).
*   **Priority**: Higher priority modules can interrupt lower priority handlers.
*   **Example (Intel 82C59A)**: An external interrupt controller chip that manages 8 interrupt lines (cascadable to 64) and passes the vector to the CPU.

### C. Direct Memory Access (DMA)
Even with interrupts, the CPU is involved in moving *every word* of data between I/O and memory. DMA removes the CPU from the data transfer path entirely.

*   **Function**: A dedicated DMA controller takes over the system bus to transfer blocks of data.
*   **Operation**:
    1.  CPU tells DMA: Read/Write, Device Address, Starting Memory Address, Amount of Data.
    2.  CPU continues other work.
    3.  DMA manages the transfer directly to memory.
    4.  **Cycle Stealing**: The DMA controller forces the CPU to pause for one bus cycle to transfer a word. This is *not* an interrupt; it just slows instruction execution slightly.
    5.  DMA interrupts the CPU only when the **entire block** is finished.
*   **Configurations**:
    *   *Single Bus, Detached*: Inefficient (bus used twice per word).
    *   *Single Bus, Integrated*: DMA and I/O combined.
    *   *Separate I/O Bus*: Best efficiency; DMA acts as a bridge.

---

## 3. I/O Channels and Processors
As I/O demands grew (e.g., 3D graphics), DMA evolved into I/O Channels—specialized processors with their own instruction sets.

*   **I/O Channel**: Executes I/O instructions stored in main memory.
*   **Selector Channel**: Controls multiple high-speed devices but selects only **one** at a time for transfer.
*   **Multiplexor Channel**: Handles multiple low-speed devices simultaneously by interleaving bytes/blocks.

---

## 4. External Interfaces

### FireWire (IEEE 1394)
A high-performance serial bus for digital cameras, drives, and consumer electronics.
*   **Configuration**: Daisy chain (up to 63 devices). Automatic configuration (no IDs/terminators needed).
*   **Arbitration**: Tree-structured. The "Root" acts as arbiter. "First come, first served" with preference for devices closest to the root.
*   **Transmission Types**:
    *   **Asynchronous**: Variable data amount, acknowledged, uses explicit addresses. Good for data integrity.
    *   **Isochronous**: Fixed-rate data streams, multicast (simplified addressing), no acknowledgment. Essential for real-time video.

### Universal Serial Bus (USB)
Standard for low-cost, plug-and-play connection.
*   **Topology**: Tree structure managed by a **Root Hub** (Host).
*   **Polling**: The host polls hubs to detect new devices.
*   **Addressing**: Host assigns a unique 7-bit address to each device.
*   **Frames**: Communication occurs in 1ms frames.
*   **Packet Types**:
    *   **Control**: For configuration and command.
    *   **Data**: Carries the payload (up to 8192 bits).
    *   **Token**: Specifies the action (IN, OUT, SOF).
    *   **Handshake**: ACK/NAK for error handling.

---

## 5. RAID (Redundant Array of Independent Disks)
Combines multiple physical disk drives into a single logical unit to improve performance and/or redundancy.

| Level | Name | Description | Redundancy |
| :--- | :--- | :--- | :--- |
| **RAID 0** | Striping | Data is stripped across disks. High R/W speed. | **None**. 1 disk failure = total data loss. |
| **RAID 1** | Mirroring | Data is duplicated on two disks. | **High**. 100% redundancy. Expensive. |
| **RAID 2** | Hamming Code | Bit-level striping. Uses Hamming code for error correction. | High overhead (many check disks). Rare. |
| **RAID 3** | Bit Parity | Bit-level striping with a single dedicated parity disk. | Good for large transfers. |
| **RAID 4** | Block Parity | Block-level striping with a dedicated parity disk. | Parity disk becomes a write bottleneck. |
| **RAID 5** | Distributed Parity | Block-level striping. Parity is distributed across *all* disks. | **Balanced**. No single bottleneck. Most common. |
| **RAID 6** | Dual Parity | Like RAID 5 but with two independent parity blocks. | **Very High**. Survives two simultaneous disk failures. |


# Topic 10: Memory Systems

## 1. Memory Characteristics & Performance

### Key Characteristics

> [!INFO] Location
> - **CPU:** Registers (internal).
> - **Internal:** Main Memory (RAM), Cache.
> - **External:** Peripheral storage (Disk, Tape), accessible via I/O processors.

> [!INFO] Capacity
> - **Word Size:** The natural unit of organization (typically 8, 16, 32 bits).
> - **Addressable Units:** The smallest location that can be uniquely addressed.
>   - Formula: $2^A = N$, where $A$ is the length of the address in bits and $N$ is the number of addressable units.

> [!INFO] Unit of Transfer
> - **Internal:** Usually governed by the data bus width (equal to word length or larger).
> - **External:** Usually a block (much larger than a word).

### Access Methods

| Method | Description | Example |
| :--- | :--- | :--- |
| **Sequential** | Data is organized in records; read in specific linear sequence. Access time depends on location. | Tape |
| **Direct** | Individual blocks have unique addresses. Access involves jumping to a vicinity + sequential search. | Disk |
| **Random** | Individual addresses identify locations exactly. Access time is independent of location or previous access. | RAM |
| **Associative** | Data is located by comparing contents (addressing by content, not location). Access time is independent of location. | Cache |

### Performance Metrics

> [!INFO] Definitions
> - **Access Time:** >   - *RAM:* Time between presenting the address and getting valid data.
>   - *Non-RAM:* Time to position the read-write mechanism.
> - **Memory Cycle Time:** Access time + "recovery" time (time required for transients to die out on signal lines before next access).
> - **Transfer Rate:** Rate at which data moves in/out of memory.
>   - *RAM:* $1 / (\text{Cycle Time})$
>   - *Non-RAM Formula:* $T_N = T_A + \frac{N}{R}$
>     - $T_N$: Average time to read/write N bits
>     - $T_A$: Average access time
>     - $N$: Number of bits
>     - $R$: Transfer rate (bps)

---

## 2. The Memory Hierarchy

### The Hierarchy Pyramid
The memory system is designed as a hierarchy to balance trade-offs.

1.  **Registers** (In CPU)
2.  **L1 Cache**
3.  **L2 Cache**
4.  **Main Memory** (RAM)
5.  **Disk Cache**
6.  **Magnetic Disk**
7.  **Optical / Tape** (Offline Storage)

### Key Relationships & Trade-offs
As you move **down** the hierarchy (from Registers to Tape):
* **Cost per bit:** Decreases
* **Capacity:** Increases
* **Access Time:** Increases (Slower)
* **Frequency of Access:** Decreases (CPU accesses lower levels less often)

> [!NOTE] Design Goal
> The goal is to achieve the performance of the fastest memory at the cost of the cheapest memory by using a mix of technologies.

---

## 3. Semiconductor Memory (RAM & ROM)

### RAM Types: SRAM vs. DRAM

| Feature | SRAM (Static RAM) | DRAM (Dynamic RAM) |
| :--- | :--- | :--- |
| **Storage Mechanism** | Digital flip-flop logic gates. | Capacitors (stores charge). |
| **Refresh Required?** | **No** (stable as long as power is on). | **Yes** (charge leaks; needs periodic refresh). |
| **Structure** | Complex, larger cells (multiple transistors). | Simple, smaller cells (1 transistor + 1 capacitor). |
| **Density** | Lower density. | High density (more bits per chip). |
| **Cost** | More expensive. | Less expensive. |
| **Speed** | Faster. | Slower. |
| **Usage** | **Cache Memory**. | **Main Memory**. |

### ROM Types (Read-Only Memory)
ROM is non-volatile; data remains when power is lost.

* **Mask ROM:** Data wired into the chip during fabrication. High fixed cost; no error recovery.
* **PROM (Programmable ROM):** Can be written once electronically. Needs special equipment.
* **EPROM (Erasable PROM):** Erased by UV light. Entire chip must be erased before rewriting.
* **EEPROM (Electrically Erasable PROM):** Can erase specific bytes electronically. Slower to write than read.
* **Flash Memory:** Intermediate between EPROM and EEPROM. High density. Erases in blocks (faster than EPROM) but not byte-level.

### Error Correction
Memory requires logic to detect and correct errors.
* **Hard Failure:** Permanent physical defect (wear, environmental abuse).
* **Soft Error:** Random, non-destructive (power issues, alpha particles).

> [!example] Hamming Error Correcting Code
> Uses parity bits to detect and correct single-bit errors.
> - **Syndrome Word:** Result of XORing stored check bits with recalculated check bits.
>   - If **0**: No error.
>   - If **1 bit set**: Error in check bit (ignore).
>   - If **>1 bit set**: Indicates position of data bit error (invert to correct).
> - **Formula:** $2^K - 1 \ge M + K$ (Where $M$ is data bits, $K$ is check bits).

---

## 4. Advanced DRAM & Internal Organization

*> **Note:** While standard Cache Mapping (Direct/Associative) is not detailed in the source text, the file covers "Cache DRAM" and internal memory structure extensively.*

### Internal Organization of Memory Chips
* **Cell Array:** Cells are organized in a matrix ($W$ words $\times$ $B$ bits).
* **Operation:**
    * **Row Decoder:** Selects the row (Word line).
    * **Sense/Write Circuit:** Reads or writes data via Bit lines.
    * **Multiplexing:** To reduce pin count, row and column addresses are often multiplexed (sent sequentially) to the address buffer.

### Advanced DRAM Architectures
Basic DRAM has remained similar for decades; newer types improve speed and access logic.

1.  **SDRAM (Synchronous DRAM):**
    * Access is synchronized with the external system clock.
    * CPU doesn't have to wait (idle); it knows exactly when data will be ready.
    * **Burst Mode:** Allows a stream of data blocks to be fired out rapidly.

2.  **DDR-SDRAM:**
    * Sends data **twice** per clock cycle (on both the leading and trailing edges).

3.  **RDRAM (Rambus DRAM):**
    * Competitor to SDRAM (adopted by Intel for Pentium).
    * Uses a high-speed vertical package bus (up to 1.6 Gbps).
    * Impedances and clocking are very precisely defined.

4.  **Cache DRAM (CDRAM):**
    * Integrates a small **SRAM cache** (e.g., 16KB) directly onto the generic DRAM chip.
    * The SRAM can act as a true cache or a serial buffer for block access.

---

## 5. Summary / Key Takeaways

* **Hierarchy Principle:** Faster memory is more expensive and smaller. The CPU relies on a hierarchy (Registers $\to$ Cache $\to$ RAM $\to$ Disk) to optimize performance.
* **SRAM vs. DRAM:** SRAM is fast/expensive (Flip-flops) used for **Cache**. DRAM is dense/cheap (Capacitors) used for **Main Memory**.
* **Volatility:** RAM is volatile (loses data without power); ROM is non-volatile.
* **Hamming Code:** A method to detect and correct errors by storing extra "check bits" alongside data.
* **Interfacing:** Bandwidth is maximized using techniques like **SDRAM** (syncing with clock) and **Multiplexing addresses** (to save pins on the chip).


# Topic 10: Memory Systems

## 1. Memory Characteristics & Performance

### Key Characteristics

> [!INFO] Location
> - **CPU:** Registers (internal).
> - **Internal:** Main Memory (RAM), Cache.
> - **External:** Peripheral storage (Disk, Tape), accessible via I/O processors.

> [!INFO] Capacity
> - **Word Size:** The natural unit of organization (typically 8, 16, 32 bits).
> - **Addressable Units:** The smallest location that can be uniquely addressed.
>   - Formula: $2^A = N$, where $A$ is the length of the address in bits and $N$ is the number of addressable units.

> [!INFO] Unit of Transfer
> - **Internal:** Usually governed by the data bus width (equal to word length or larger).
> - **External:** Usually a block (much larger than a word).

### Access Methods

| Method | Description | Example |
| :--- | :--- | :--- |
| **Sequential** | Data is organized in records; read in specific linear sequence. Access time depends on location. | Tape |
| **Direct** | Individual blocks have unique addresses. Access involves jumping to a vicinity + sequential search. | Disk |
| **Random** | Individual addresses identify locations exactly. Access time is independent of location or previous access. | RAM |
| **Associative** | Data is located by comparing contents (addressing by content, not location). Access time is independent of location. | Cache |

### Performance Metrics

> [!INFO] Definitions
> - **Access Time:** >   - *RAM:* Time between presenting the address and getting valid data.
>   - *Non-RAM:* Time to position the read-write mechanism.
> - **Memory Cycle Time:** Access time + "recovery" time (time required for transients to die out on signal lines before next access).
> - **Transfer Rate:** Rate at which data moves in/out of memory.
>   - *RAM:* $1 / (\text{Cycle Time})$
>   - *Non-RAM Formula:* $T_N = T_A + \frac{N}{R}$
>     - $T_N$: Average time to read/write N bits
>     - $T_A$: Average access time
>     - $N$: Number of bits
>     - $R$: Transfer rate (bps)

---

## 2. The Memory Hierarchy

### The Hierarchy Pyramid
The memory system is designed as a hierarchy to balance trade-offs.

1.  **Registers** (In CPU)
2.  **L1 Cache**
3.  **L2 Cache**
4.  **Main Memory** (RAM)
5.  **Disk Cache**
6.  **Magnetic Disk**
7.  **Optical / Tape** (Offline Storage)

### Key Relationships & Trade-offs
As you move **down** the hierarchy (from Registers to Tape):
* **Cost per bit:** Decreases
* **Capacity:** Increases
* **Access Time:** Increases (Slower)
* **Frequency of Access:** Decreases (CPU accesses lower levels less often)

> [!NOTE] Design Goal
> The goal is to achieve the performance of the fastest memory at the cost of the cheapest memory by using a mix of technologies.

---

## 3. Semiconductor Memory (RAM & ROM)

### RAM Types: SRAM vs. DRAM

| Feature | SRAM (Static RAM) | DRAM (Dynamic RAM) |
| :--- | :--- | :--- |
| **Storage Mechanism** | Digital flip-flop logic gates. | Capacitors (stores charge). |
| **Refresh Required?** | **No** (stable as long as power is on). | **Yes** (charge leaks; needs periodic refresh). |
| **Structure** | Complex, larger cells (multiple transistors). | Simple, smaller cells (1 transistor + 1 capacitor). |
| **Density** | Lower density. | High density (more bits per chip). |
| **Cost** | More expensive. | Less expensive. |
| **Speed** | Faster. | Slower. |
| **Usage** | **Cache Memory**. | **Main Memory**. |

### ROM Types (Read-Only Memory)
ROM is non-volatile; data remains when power is lost.

* **Mask ROM:** Data wired into the chip during fabrication. High fixed cost; no error recovery.
* **PROM (Programmable ROM):** Can be written once electronically. Needs special equipment.
* **EPROM (Erasable PROM):** Erased by UV light. Entire chip must be erased before rewriting.
* **EEPROM (Electrically Erasable PROM):** Can erase specific bytes electronically. Slower to write than read.
* **Flash Memory:** Intermediate between EPROM and EEPROM. High density. Erases in blocks (faster than EPROM) but not byte-level.

### Error Correction
Memory requires logic to detect and correct errors.
* **Hard Failure:** Permanent physical defect (wear, environmental abuse).
* **Soft Error:** Random, non-destructive (power issues, alpha particles).

> [!example] Hamming Error Correcting Code
> Uses parity bits to detect and correct single-bit errors.
> - **Syndrome Word:** Result of XORing stored check bits with recalculated check bits.
>   - If **0**: No error.
>   - If **1 bit set**: Error in check bit (ignore).
>   - If **>1 bit set**: Indicates position of data bit error (invert to correct).
> - **Formula:** $2^K - 1 \ge M + K$ (Where $M$ is data bits, $K$ is check bits).

---

## 4. Advanced DRAM & Internal Organization

*> **Note:** While standard Cache Mapping (Direct/Associative) is not detailed in the source text, the file covers "Cache DRAM" and internal memory structure extensively.*

### Internal Organization of Memory Chips
* **Cell Array:** Cells are organized in a matrix ($W$ words $\times$ $B$ bits).
* **Operation:**
    * **Row Decoder:** Selects the row (Word line).
    * **Sense/Write Circuit:** Reads or writes data via Bit lines.
    * **Multiplexing:** To reduce pin count, row and column addresses are often multiplexed (sent sequentially) to the address buffer.

### Advanced DRAM Architectures
Basic DRAM has remained similar for decades; newer types improve speed and access logic.

1.  **SDRAM (Synchronous DRAM):**
    * Access is synchronized with the external system clock.
    * CPU doesn't have to wait (idle); it knows exactly when data will be ready.
    * **Burst Mode:** Allows a stream of data blocks to be fired out rapidly.

2.  **DDR-SDRAM:**
    * Sends data **twice** per clock cycle (on both the leading and trailing edges).

3.  **RDRAM (Rambus DRAM):**
    * Competitor to SDRAM (adopted by Intel for Pentium).
    * Uses a high-speed vertical package bus (up to 1.6 Gbps).
    * Impedances and clocking are very precisely defined.

4.  **Cache DRAM (CDRAM):**
    * Integrates a small **SRAM cache** (e.g., 16KB) directly onto the generic DRAM chip.
    * The SRAM can act as a true cache or a serial buffer for block access.

---

## 5. Summary / Key Takeaways

* **Hierarchy Principle:** Faster memory is more expensive and smaller. The CPU relies on a hierarchy (Registers $\to$ Cache $\to$ RAM $\to$ Disk) to optimize performance.
* **SRAM vs. DRAM:** SRAM is fast/expensive (Flip-flops) used for **Cache**. DRAM is dense/cheap (Capacitors) used for **Main Memory**.
* **Volatility:** RAM is volatile (loses data without power); ROM is non-volatile.
* **Hamming Code:** A method to detect and correct errors by storing extra "check bits" alongside data.
* **Interfacing:** Bandwidth is maximized using techniques like **SDRAM** (syncing with clock) and **Multiplexing addresses** (to save pins on the chip).


# Topic 11: Cache Memory Architecture

## 1. Principles & Motivation

### The Problem
There is a significant speed mismatch between the fast CPU and the slower Main Memory. As processor speed increases, the external bus becomes a bottleneck, causing the CPU to waste cycles waiting for data.

### The Solution: Cache Memory
Cache is a small, fast memory sitting between the CPU and Main Memory. It acts as a buffer to provide the CPU with the data it needs as quickly as possible.

> [!INFO] Locality of Reference
> Cache relies on the **Principle of Locality**: When a block of data is fetched for a single memory reference, it is highly likely that future references will be to that same location or adjacent locations.
> * **Temporal Locality:** reused data.
> * **Spatial Locality:** nearby data.

### Cache Operation
The CPU requests contents of a memory location. The system checks the cache:
1.  **Hit:** If present, data is delivered immediately (Fast).
2.  **Miss:** If not present, the required block is read from Main Memory into the Cache.
    * Then, the specific word is delivered to the CPU.

---

## 2. Cache Mapping Functions

Since there are fewer cache lines than main memory blocks, we need algorithms to map main memory blocks into cache lines.

### A. Direct Mapping
Each block of main memory maps to only **one specific** cache line.

* **Logic:**
    $$i = j \pmod m$$
    Where:
    * $i$ = cache line number
    * $j$ = main memory block number
    * $m$ = number of lines in cache

* **Address Structure:**
    The address is split into three fields:
    $$[ \text{Tag } (s-r) \mid \text{Line } (r) \mid \text{Word } (w) ]$$
    * **Word:** Identifies the unique word/byte within a block.
    * **Line (Slot):** Selects one specific line in the cache.
    * **Tag:** Compared against the tag stored in the cache line to verify if it's the correct block.

* **Pros:** Simple, inexpensive hardware.
* **Cons:** Fixed location. If a program repeatedly accesses two different blocks that map to the same line, they will constantly evict each other. This is called **Thrashing**.

### B. Associative Mapping
A main memory block can load into **any** line of the cache.

* **Logic:** No fixed mapping rule; flexibility is maximized.
* **Address Structure:**
    The address is interpreted as:
    $$[ \text{Tag } (s) \mid \text{Word } (w) ]$$
    * **Tag:** Uniquely identifies the block of memory.
    * **Word:** Identifies the specific data within the block.

* **Pros:** High hit ratio; prevents thrashing caused by fixed mappings.
* **Cons:** Complex circuitry. Every line's tag must be examined simultaneously (parallel search) to check for a match, which is expensive.

### C. Set Associative Mapping
A compromise between Direct and Associative. The cache is divided into $v$ sets, and each set contains $k$ lines ($k$-way associative).

* **Logic:**
    A block maps to a specific **set**, but can occupy **any line** within that set.
    $$i = j \pmod v$$
    Where:
    * $i$ = cache set number
    * $j$ = main memory block number
    * $v$ = number of sets

* **Address Structure:**
    $$[ \text{Tag } (s-d) \mid \text{Set } (d) \mid \text{Word } (w) ]$$
    * **Set:** Determines which set to look in.
    * **Tag:** Compared against all lines within that specific set.

* **Benefit:** Reduces the comparison hardware needed (only compare tags within one set) while maintaining better flexibility than Direct Mapping.

### Mapping Function Summary

| Feature | Direct Mapping | Associative Mapping | Set Associative Mapping |
| :--- | :--- | :--- | :--- |
| **Placement** | Fixed (1 location) | Flexible (Anywhere) | Semi-Flexible (Any line in fixed set) |
| **Hardware Cost** | Low (Simple) | High (Parallel Search) | Moderate |
| **Thrashing Risk** | High | Low | Low |
| **Search Speed** | Fastest | Slowest (due to complexity) | Fast |
| **Best Used For** | Large Caches | Small, High-Performance Caches | General Purpose (Modern Standard) |

---

## 3. Replacement Algorithms

When the cache (or a set) is full, a block must be replaced to make room for new data.

1.  **Least Recently Used (LRU):**
    * **Concept:** Replace the block that has gone unused for the longest time.
    * **Effectiveness:** Most effective/popular.
    * **Implementation:** Hardware maintains "USE" bits. e.g., in 2-way associative, if one line is referenced, the bit is set to 1, and the other is set to 0.
2.  **First In First Out (FIFO):**
    * **Concept:** Replace the block that has been in the cache the longest.
    * **Implementation:** Round-robin or circular buffer.
3.  **Least Frequently Used (LFU):**
    * **Concept:** Replace the block with the fewest hits.
    * **Implementation:** Associates a counter with each line.
4.  **Random:**
    * **Concept:** Pick a line at random.
    * **Performance:** Slightly inferior to algorithms based on usage history.

> [!Note]
> Direct Mapping does not need a replacement algorithm because each block has only **one** possible location. If a new block maps there, the old one is automatically evicted.

---

## 4. Write Policies

When data in the cache is altered, main memory must eventually be updated to maintain consistency.

### Write Through
* **Mechanism:** All writes go to **both** the Cache and Main Memory simultaneously.
* **Consistency:** Main memory is always valid (up to date).
* **Drawback:** Generates substantial memory traffic, which can slow down writes.

### Write Back
* **Mechanism:** Updates are made **only** in the cache initially. An "Update Bit" (or Dirty Bit) is set for that cache line.
* **Sync:** The block is written to main memory **only when it is replaced/evicted**.
* **Drawback:** Portions of main memory are invalid (out of sync) until the write-back occurs. I/O modules must access memory through the cache to ensure they get the correct data.

### Comparison Table

| Feature | Write Through | Write Back |
| :--- | :--- | :--- |
| **Update Timing** | Immediate (Simultaneous) | Deferred (On replacement) |
| **Data Consistency** | Main Memory always valid | Main Memory temporarily invalid |
| **Bus Traffic** | High (Every write accesses bus) | Low (Only accesses bus on eviction) |
| **Complexity** | Simple | Complex (Needs Dirty Bit & Logic) |
| **Speed** | Slower writes | Faster writes |

---

## 5. Cache Organization

### Multilevel Caches
Modern processors use multiple layers to balance size and speed.
* **L1 (Level 1):** On-chip (internal). Fastest, smallest. Eliminates external bus access for internal operations.
* **L2 (Level 2):** Originally external, now often on-chip. Accessed if data is not in L1.
* **L3 (Level 3):** Usually external (or shared on-die for multi-core).
* **Goal:** If SRAM (L2) is fast enough to match bus speed, data can be accessed with zero-wait states.

### Unified vs. Split Caches
* **Unified Cache:** Stores both Data and Instructions in the same cache.
    * *Advantage:* Higher hit rate generally; load balances automatically (e.g., if a program has many instructions and little data, the cache fills with instructions).
* **Split Cache:** Separate caches for **Instructions** and **Data**.
    * *Advantage:* Essential for pipelining. It eliminates contention between the **Instruction Fetch Unit** (trying to read code) and the **Execution Unit** (trying to load/store data).
    * *Usage:* Common in superscalar machines like Pentium and PowerPC.

---

## 6. Summary / Key Takeaways
* **Goal:** Cache acts as a buffer to match CPU speed with slower memory using the **Principle of Locality**.
* **Mapping:**
    * **Direct:** Simple, fixed mapping ($i=j\%m$), prone to thrashing.
    * **Associative:** Flexible, complex search, expensive.
    * **Set Associative:** Best of both worlds; maps to a set ($i=j\%v$), associative within the set.
* **Replacement:** **LRU** is the standard for associative caches. Direct mapping has no choice but to replace the resident block.
* **Write Policy:** **Write Back** reduces bus traffic but requires "Dirty Bits"; **Write Through** is safer but slower.
* **Structure:** Modern CPUs use **Split L1 Caches** (Instruction/Data) to support pipelining and **Multilevel (L1/L2/L3)** hierarchies to optimize access times.


# Topic 12: Virtual Memory

## 1. Memory Management Fundamentals

Memory management is the task of subdividing memory to accommodate multiple processes. The OS must manage the trade-offs between swapping, overhead, and efficient usage.

### Partitioning

Partitioning involves splitting the main memory into sections to allocate to processes (including the Operating System).

#### Fixed Partitioning
* **Concept**: Memory is divided into static partitions. These can be **Equal-size** or **Unequal-size**.
* **Allocation**: A process is loaded into a partition large enough to hold it.
* **Issues**:
    * **Internal Fragmentation**: If a process is smaller than the partition, the remaining space *inside* that partition is wasted.
    * Limits the number of active processes to the number of partitions.

#### Dynamic Partitioning
* **Concept**: Partitions are created dynamically. The OS allocates exactly the required memory to a process.
* **Allocation**: No pre-defined boundaries.
* **Issues**:
    * **External Fragmentation**: As processes are swapped in and out, memory becomes a checkerboard of used blocks and small "holes" too small to be useful.
    * **Solution**: **Compaction** (De-fragmentation) — The OS shifts processes to coalesce holes into one large free block (resource-intensive).

| Feature | Fixed Partitioning | Dynamic Partitioning |
| :--- | :--- | :--- |
| **Partition Size** | Fixed at boot time | Variable, determined by process size |
| **Fragmentation** | **Internal** (waste inside block) | **External** (waste between blocks) |
| **Complexity** | Low | Higher (requires compaction) |

### Simple Paging
Paging divides memory into fixed chunks to avoid external fragmentation.

* **Frames**: Fixed-size, small chunks of **physical memory**.
* **Pages**: Fixed-size, small chunks of the **process (logical memory)**.
* **Mapping**: The Operating System maintains a **Page Table** for each process to map active Pages to physical Frames.
    * A process does *not* require contiguous physical frames.

### Simple Segmentation
Segmentation allows the programmer to view memory as multiple address spaces (segments) rather than a linear sequence.

* **Segments**: Variable-sized blocks usually allocated to logical units (e.g., Program segment, Data segment, Stack).
* **Visibility**: Unlike paging, segmentation is **visible** to the programmer.
* **Protection**: Useful for assigning access rights (read/write/execute) to specific logic blocks.

---

## 2. Virtual Memory Principles

### Concept
Virtual memory allows the execution of processes that are not completely in main memory.
* **Real Memory**: The actual main memory (RAM) available.
* **Virtual Memory**: The programmer sees a much larger memory space than physically exists.
* **Mechanism**: The OS keeps only the currently active parts of a process in RAM and keeps the rest on the disk (Long-term queue).

### Demand Paging
* **Definition**: Pages are not loaded until they are actually required.
* **Process**:
    1.  CPU tries to access a page.
    2.  If valid bit is not set (page not in RAM), a **Page Fault** is triggered.
    3.  OS swaps the required page from disk into a free frame.
    4.  If memory is full, a page replacement algorithm selects a victim page to swap out.

> [!WARNING] Thrashing
> **Thrashing** occurs when the system spends more time swapping pages in and out than actually executing instructions.
> * **Cause**: Too many processes running with too little memory (over-committed).
> * **Symptoms**: Disk light is on constantly; CPU utilization drops.
> * **Solution**: Reduce degree of multiprogramming or add more RAM.

### Principle of Locality
Virtual memory relies on the observation that references to data and instructions tend to cluster.
* **Temporal Locality**: Recently accessed items are likely to be accessed again soon.
* **Spatial Locality**: Items near those recently accessed are likely to be accessed soon.
* *Note: This principle prevents constant thrashing under normal loads.*

---

## 3. Hardware Support

### Paging Address Translation
The CPU uses a **Logical Address** which the MMU (Memory Management Unit) translates into a **Physical Address**.

**Address Structure:**
$$\text{Logical Address} = [ \text{Page Number} \mid \text{Offset} ]$$

**The Translation Flow:**
1.  **Page Number**: Used as an index into the Process Page Table.
2.  **Frame Number**: Extracted from the Page Table entry.
3.  **Physical Address**: Combined with the original offset.
    $$\text{Physical Address} = [ \text{Frame Number} \mid \text{Offset} ]$$

### TLB (Translation Lookaside Buffer)
> [!INFO] What is the TLB?
> The **TLB** is a specialized, high-speed hardware cache that stores recent Page Table entries. It avoids the "double memory access" penalty (one access to read the Page Table, one to read data).

* **Operation**:
    1.  CPU extracts the Page Number.
    2.  **TLB Hit**: Frame number retrieved immediately (Fast).
    3.  **TLB Miss**: CPU must access the Page Table in main memory to get the frame number, then update the TLB.

### Page Table Structure
As processes grow, Page Tables themselves become large.
* **Multi-level Paging**: Using a Page Directory to point to secondary Page Tables (e.g., Pentium II uses a 2-level scheme).
* **Inverted Page Table**:
    * Instead of one entry per virtual page, there is one entry per **physical frame**.
    * Uses a **Hash Algorithm** to map the Virtual Page Number to the Frame.
    * Reduces memory required for tables but requires handling hash collisions (chaining).

---

## 4. OS Software Policies

### Fetch Policy
* **Demand Paging**: Bring pages in only when a Page Fault occurs. (Most common).
* **Pre-paging**: Bring in pages likely to be needed soon (exploits locality).

### Replacement Algorithms
When memory is full, the OS must choose a "victim" page to evict.
* **Locking**: Some frames (e.g., OS kernel, I/O buffers) are "locked" and cannot be swapped out.

**Basic Algorithms:**
1.  **Optimal**: Select the page that will not be used for the longest time. (Theoretical benchmark, impossible to implement perfectly).
2.  **LRU (Least Recently Used)**: Replace the page that has not been used for the longest time. (Approximates locality well, but high overhead).
3.  **FIFO (First-In-First-Out)**: Replace the oldest page in memory. (Simple, but can perform poorly).
4.  **Clock**: A variation of FIFO using a "use bit." It gives pages a "second chance" if they have been referenced recently, approximating LRU with less overhead.

---

## 5. Summary/Key Takeaways

* **Partitioning**: Fixed leads to internal fragmentation; Dynamic leads to external fragmentation.
* **Paging vs. Segmentation**: Paging is physical (fixed size, invisible to user); Segmentation is logical (variable size, visible to user).
* **Virtual Memory**: Allows execution of programs $>$ Physical RAM.
* **TLB**: Critical for performance to minimize memory access latency during address translation.
* **Thrashing**: The collapse of performance due to excessive paging; solved by adding RAM or reducing active processes.

---
# Topic 13: Multiprocessor Organisation

### 13.1 Flynn's Classification
A standard taxonomy for computer architectures based on the number of instruction streams and data streams simultaneously being processed.

* **SISD (Single Instruction, Single Data Stream)**
    * **Structure**: A single processor executes a single instruction stream to operate on data stored in a single memory.
    * **Example**: Standard uniprocessor systems.
* **SIMD (Single Instruction, Multiple Data Stream)**
    * **Structure**: A single machine instruction controls the simultaneous execution of a number of processing elements. Each processing element has an associated data memory.
    * **Operation**: Instructions are executed on a lockstep basis; each processor executes the same instruction on a different set of data.
    * **Examples**: Vector processors and array processors.
* **MISD (Multiple Instruction, Single Data Stream)**
    * **Structure**: A sequence of data is transmitted to a set of processors, each of which executes a different instruction sequence.
    * **Status**: This structure has never been commercially implemented.
* **MIMD (Multiple Instruction, Multiple Data Stream)**
    * **Structure**: A set of processors simultaneously execute different instruction sequences on different sets of data.
    * **Examples**: Symmetric Multiprocessors (SMPs), clusters, and Nonuniform Memory Access (NUMA) systems.

### 13.2 Taxonomy of Parallel Processor Architectures
The hierarchy of processor organizations is categorized as follows:

1.  **SISD** $\rightarrow$ Uniprocessor
2.  **SIMD** $\rightarrow$ Vector Processor, Array Processor
3.  **MISD** (Theoretical)
4.  **MIMD**
    * **Shared Memory (Tightly Coupled)**
        * Symmetric Multiprocessor (SMP)
        * Nonuniform Memory Access (NUMA)
    * **Distributed Memory (Loosely Coupled)**
        * Clusters

### 13.3 Symmetric Multiprocessors (SMP)
An SMP is a standalone computer system defined by the following characteristics:

* **Multiple Processors**: Contains two or more similar processors of comparable capability.
* **Shared Resources**: Processors share the same main memory and I/O facilities.
* **Interconnection**: Processors are connected by a bus or other internal connection scheme.
* **Uniform Access**: Memory access time is approximately the same for each processor.
* **Shared I/O**: All processors share access to I/O devices, either through the same channels or different channels providing paths to the same device.
* **Symmetry**: All processors can perform the same functions.
* **Integrated OS**: The system is controlled by an integrated operating system that manages interaction between processors at the job, task, file, and data element levels.

### 13.4 Multicore Computers
* **Core**: The "brain" of the CPU (also called a processing unit). It consists of an ALU, control unit, and registers.
* **Multicore**: A CPU chip that contains multiple cores (e.g., Dual-core = 2 cores, Quad-core = 4 cores).

#### Chip Organization Alternatives
* **Superscalar / SMT (Simultaneous Multithreading)**: Techniques used within cores to increase performance.
* **Cache Organization**:
    * **L1 Cache**: Typically split into Instruction (L1-I) and Data (L1-D) caches, dedicated to each core.
    * **L2 Cache**: Can be organized in different ways:
        * *Dedicated*: Each core has its own L2 cache.
        * *Shared*: All cores share a common L2 cache.