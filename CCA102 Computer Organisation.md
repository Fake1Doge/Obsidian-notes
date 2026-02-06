## Topic 1: Introduction to Computer Organisation and Architecture

### 1.1 Architecture vs. Organisation
*   **Computer Architecture**: Attributes visible to the programmer (the "what").
    *   *Definition*: The architectural attributes that have a direct impact on the logical execution of a program.
    *   *Examples*: Instruction set, data representation (number of bits), I/O mechanisms, addressing techniques.
    *   *Analogy*: Architectural design specifications (e.g., "Is there a multiply instruction?").
*   **Computer Organisation**: Operational units and interconnections (the "how").
    *   *Definition*: The hardware details transparent to the programmer that realize the architectural specifications.
    *   *Examples*: Control signals, interfaces between computer and peripherals, memory technology, clock frequency.
    *   *Analogy*: Implementation details (e.g., "Is multiplication implemented by a hardware unit or repeated addition?").
*   **The "Family" Concept**:
    *   Manufacturers (e.g., IBM, Intel) produce a family of computers with the **same architecture** but **different organisations**.
    *   *Benefit*: Code compatibility (software runs on all models) while offering different price/performance points.

### 1.2 Structure and Function
A computer is a complex system best described using a **Top-Down** approach (decomposing the system into subparts).

#### 1. Structure (The Components)
How components relate to each other:
*   **CPU (Central Processing Unit)**: The "brain" that controls operation and performs data processing.
    *   *Registers*: Internal storage.
    *   *ALU (Arithmetic Logic Unit)*: Performs data processing.
    *   *Control Unit*: Interprets instructions and controls CPU flow.
    *   *Internal Interconnection*: Communication within the CPU.
*   **Main Memory**: Stores data and instructions.
*   **I/O (Input/Output)**: Moves data between the computer and the external environment.
*   **System Interconnection**: Mechanism for communication (e.g., System Bus) among CPU, memory, and I/O.

#### 2. Function (The Operations)
The operation of individual components can be categorized into four basic functions:
*   **Data Processing**: Performing arithmetic or logical operations.
*   **Data Storage**: Storing data short-term (RAM) or long-term (Disk).
*   **Data Movement**: Transferring data (I/O, internal paths).
*   **Control**: Managing resources and synchronizing functions (e.g., Control Unit).

### 1.3 History of Computers

#### 1st Generation: Vacuum Tubes (1946-1957)
*   **ENIAC (Electronic Numerical Integrator And Computer)**:
    *   *Purpose*: Designed for calculating artillery range tables (World War II).
    *   *Specs*: 18,000 vacuum tubes, 30 tons, 1,500 sq ft, 140 kW power.
    *   *Performance*: 5,000 additions per second.
    *   *Architecture*: **Decimal** machine (not binary), programmed manually via switches (tedious).
*   **von Neumann / IAS (Institute for Advanced Study)**:
    *   *Concept*: **Stored-Program Concept** (instructions and data stored in the same readable/writable memory).
    *   *Structure*:
        *   Main Memory: 4096 words of 40 bits each.
        *   ALU, Control Unit, and I/O equipment.
    *   *Significance*: The prototype for modern general-purpose computers.

#### 2nd Generation: Transistors (1958-1964)
*   **Transistors**: Invented at Bell Labs (1947). Made of solid-state silicon.
    *   *Advantages*: Smaller, cheaper, less heat dissipation, and more reliable than vacuum tubes.
*   **Technology Shift**:
    *   Introduction of **High-Level Languages** (FORTRAN, COBOL) and System Software.
    *   **IBM 7000 Series**: Faster, more memory.
    *   **DEC PDP-1**: First minicomputer.

#### 3rd Generation: Integrated Circuits (1965-1971)
*   **Microelectronics**: Placing gates, memory cells, and interconnections on a single silicon chip.
*   **Moore's Law**:
    *   Observation by Gordon Moore (Intel founder).
    *   *The Law*: The number of transistors on a chip doubles approximately every **18 months** (originally stated as every year).
    *   *Implication*: Exponential growth in power, decrease in cost/size.
*   **Notable Machines**:
    *   **IBM 360 (1964)**: First planned "family" of computers with a common instruction set.
    *   **DEC PDP-8**: First true minicomputer (cheap enough for lab benches).

#### Later Generations (LSI, VLSI, ULSI)
*   **Semiconductor Memory (1970)**: Fairchild introduced memory chips (size of a single core but held 256 bits). Non-destructive read, faster than magnetic core.
*   **Microprocessors (The CPU on a Chip)**:
    *   **Intel 4004 (1971)**: First microprocessor. 4-bit, designed for calculators.
    *   **Intel 8080 (1974)**: First general-purpose 8-bit microprocessor.
    *   **Intel 8086 (1978)**: 16-bit, introduced instruction cache and pipelining.

### 1.4 Evolution of Architectures

#### Intel x86 (CISC)
Dominant in PCs, Servers, and Cloud.
*   **8086 (1978)**: 16-bit.
*   **80386 (1985)**: 32-bit architecture, multitasking support.
*   **80486 (1989)**: Integrated Math Co-processor, L1 Cache.
*   **Pentium (1993)**: **Superscalar** (parallel instruction execution).
*   **Core 2 (2006)**: 64-bit architecture, multicore designs.

#### ARM (RISC)
Dominant in Mobile and Embedded Systems.
*   **Characteristics**: High speed, small die size, low power consumption.
*   **Product Families**:
    *   **Cortex-A (Application)**: Performance-intensive (Smartphones, Tablets, Linux/Android).
    *   **Cortex-R (Real-time)**: Time-critical/Safety-critical (Automotive braking, Hard drive controllers).
    *   **Cortex-M (Microcontroller)**: Low cost/power (IoT, Microcontrollers).

### 1.5 Cloud Computing
A model enabling ubiquitous, convenient, on-demand access to a shared pool of computing resources.
*   **SaaS (Software as a Service)**: Application software running on the cloud (e.g., Gmail, Dropbox, Office 365).
*   **PaaS (Platform as a Service)**: Building blocks, tools, and OS for developers to deploy apps (e.g., Google App Engine).
*   **IaaS (Infrastructure as a Service)**: Raw processing, storage, and networking (e.g., AWS EC2, Azure).

### 1.6 Performance Assessment

#### Processor Speed
*   **System Clock**: Synchronizes operations.
*   **Clock Rate ($f$)**: Pulses per second (Hz).
*   **Cycle Time ($t$)**: Time between pulses ($t = 1/f$).

#### Key Metrics
*   **CPI (Cycles Per Instruction)**: The average number of clock cycles a processor requires to execute an instruction.
    *   Different instructions (Add vs. Divide) take different amounts of time.
*   **MIPS (Millions of Instructions Per Second)**:
    $$ \text{MIPS rate} = \frac{\text{Clock Rate}}{CPI \times 10^6} $$
*   **Benchmarks**: Standard programs used to compare performance (e.g., **SPEC CPU2017** suite).

#### Amdahl's Law
Deals with the potential speedup of a program using multiple processors.
*   **Concept**: Speedup is limited by the sequential (non-parallelizable) portion of the code.
*   **Conclusion**: Adding more processors yields diminishing returns if the program isn't perfectly parallelizable.

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
*   **Role**: The "brain" of the computer's processing capability. It executes arithmetic and logical instructions.
*   **Inputs**:
    *   Data to be operated on (operands) from registers.
    *   Control signals from the Control Unit (CU).
*   **Outputs**:
    *   Result of the operation (to registers/memory).
    *   **Status Flags** (Condition Codes):
        *   **Zero (Z)**: Result is 0.
        *   **Negative (N)**: Result is negative.
        *   **Overflow (V)**: Result exceeds the storage capacity.
        *   **Carry (C)**: Carry out of the most significant bit.

### 3.2 Integer Representation
Computers store numbers in binary (0 and 1). While unsigned integers are straightforward, representing negative numbers requires specific notations.

#### 1. Unsigned Magnitude
*   **Representation**: All bits represent the magnitude.
*   **Range**: $0$ to $2^n - 1$.
*   **Pros**: Simple addition, one representation of zero.
*   **Cons**: Cannot represent negative numbers.

#### 2. Signed Magnitude
*   **Representation**: The Most Significant Bit (MSB) is the **Sign Bit** (0 = Positive, 1 = Negative). The remaining bits represent magnitude.
*   **Range**: $-(2^{n-1} - 1)$ to $+(2^{n-1} - 1)$.
*   **Pros**: Intuitive for humans.
*   **Cons**:
    *   **Two Zeros**: +0 (0000) and -0 (1000).
    *   **Complex Arithmetic**: Addition/subtraction logic must check signs and compare magnitudes.

#### 3. One's Complement
*   **Representation**: Negative numbers are formed by **inverting all bits** of the positive number.
*   **Example**: If $+5 = 0101$, then $-5 = 1010$.
*   **Cons**: Still has two zeros (+0 and -0). Arithmetic is slightly complex (end-around carry).

#### 4. Two's Complement (Standard)
*   **Representation**: The most common method. Negative numbers are formed by taking the 1's complement and **adding 1**.
    *   Rule: $\text{2's Comp} = \text{1's Comp} + 1$.
*   **Range**: $-2^{n-1}$ to $+(2^{n-1} - 1)$.
    *   *Note*: The range is asymmetric (one more negative number than positive).
*   **Advantages**:
    *   **One Zero**: Unique representation for zero.
    *   **Simplified Arithmetic**: Subtraction is treated as addition of a negative number ($A - B = A + (-B)$). No end-around carry is needed.
*   **Expansion**: To increase bit width (e.g., 8-bit to 16-bit), perform **Sign Extension** (replicate the MSB to the left).

### 3.3 Integer Arithmetic

#### Addition and Subtraction
*   **Addition**: Performed directly on bits.
*   **Subtraction**: Performed as $A + (\text{2's complement of } B)$.
*   **Overflow Rule**: Overflow occurs if two numbers with the **same sign** are added and the result has the **opposite sign**.
    *   $(+A) + (+B) \rightarrow (-C)$
    *   $(-A) + (-B) \rightarrow (+C)$
    *   Note: Overflow cannot occur when adding numbers with different signs.

#### Multiplication
*   **Unsigned Integers**:
    *   Uses **Add-Shift** method (similar to manual multiplication).
    *   Partial products are generated and shifted.
*   **Signed Integers (Booth's Algorithm)**:
    *   Handles signed multiplication without requiring prior conversion to positive numbers.
    *   **Logic**: Examines pairs of bits $(Q_0, Q_{-1})$ (current LSB and previous LSB).
        *   **00 or 11**: Shift only (No operation).
        *   **01**: Add Multiplicand, then Shift.
        *   **10**: Subtract Multiplicand, then Shift.
    *   **Benefit**: Faster than pure add-shift when there are strings of 1s (reduces the number of additions).

#### Division
*   More complex than multiplication.
*   **Restoring Division**:
    *   Shift remainder left.
    *   Subtract divisor.
    *   If result is negative, **restore** the remainder by adding the divisor back and set quotient bit to 0.
    *   Else, set quotient bit to 1.

### 3.4 Floating-Point Representation (IEEE 754)
Used to represent very large or very small real numbers using scientific notation principles: $\pm S \times B^{\pm E}$.

*   **Format**: 32-bit (Single Precision) or 64-bit (Double Precision).
    1.  **Sign Bit (S)**: 1 bit (0=+, 1=-).
    2.  **Biased Exponent (E)**:
        *   Stored as an unsigned value.
        *   **Bias**: Added to the true exponent to avoid negative numbers in the exponent field.
        *   *Single Precision Bias*: 127. (True Exponent = Stored Exponent - 127).
        *   *Double Precision Bias*: 1023.
    3.  **Significand (Mantissa)**:
        *   The fractional part of the number.
        *   **Normalization**: Numbers are normalized to $1.xxxxx...$
        *   **Hidden Bit**: The leading '1' is implied and not stored, increasing precision.

#### IEEE 754 Standards
| Parameter | Single Precision (32-bit) | Double Precision (64-bit) |
| :--- | :--- | :--- |
| Sign | 1 bit | 1 bit |
| Exponent | 8 bits (Bias 127) | 11 bits (Bias 1023) |
| Significand | 23 bits | 52 bits |
| Range | $\approx 10^{-38}$ to $10^{+38}$ | $\approx 10^{-308}$ to $10^{+308}$ |

### 3.5 Floating-Point Arithmetic
Floating-point math is more complex due to the need to align exponents.

#### Addition/Subtraction Phases
1.  **Check for Zeros**: If one operand is 0, the result is the other operand.
2.  **Align Significands**:
    *   Shift the significand of the number with the *smaller* exponent to the right.
    *   Increment its exponent until it matches the larger exponent.
3.  **Add/Subtract**: Perform operation on the aligned significands.
4.  **Normalize**: Shift the result (left or right) to restore the $1.xxxx$ format and adjust the exponent.

#### Issues
*   **Exponent Overflow**: Result is too large to be represented (+infinity).
*   **Exponent Underflow**: Result is too small (too close to zero) to be represented.
*   **Significand Overflow**: Addition of two significands causes a carry out (fixed by shifting right and incrementing exponent).
*   **Precision Loss**: Bits "falling off" during alignment shifting.

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

#### Memory Structure
Memory consists of millions of storage cells, each capable of storing a **bit** (binary digit) with a value of 0 or 1.
*   **Terminology**:
    *   **Bit**: Each digit in the binary system.
    *   **Nibble**: A group of 4 bits.
    *   **Byte**: A group of 8 bits.
    *   **Word**: A group of $n$ bits (word length), typically 16, 32, or 64 bits.

#### Addressing
To store or retrieve information, the processor needs a unique **address** for each location.
*   **Address Space**: $k$ address bits constitute an address space of $2^k$ addressable locations (0 through $2^k - 1$).
*   **Byte Addressability**: It is more practical to assign successive addresses to successive 8-bit byte locations.
    *   If word length = 32 bits (4 bytes), successive words are located at addresses 0, 4, 8, ...
*   **Word Alignment**: Words are aligned if they begin at a byte address that is a multiple of the number of bytes in a word.
    *   16-bit word ($2^1$ bytes): Aligned at 0, 2, 4...
    *   32-bit word ($2^2$ bytes): Aligned at 0, 4, 8...

#### Endianness
Endianness refers to how byte addresses are assigned within a multi-byte word.
1.  **Big-Endian**: Lower byte addresses are used for the **more significant** (leftmost) bytes. (Used by IBM 370, Motorola 68000).
2.  **Little-Endian**: Lower byte addresses are used for the **less significant** (rightmost) bytes. (Used by Intel x86).

#### Accessing Memory
*   **Numbers/Characters**: Usually occupy 1 word.
*   **Character Strings**:
    *   Beginning of string is indicated by the **byte address of the first character**.
    *   Successive byte locations contain successive characters.
    *   **End of string** is indicated by:
        *   A special control character (e.g., NULL).
        *   A separate memory location/register storing the string length.

### 5.2 Memory Operations
There are two basic operations between the processor and memory:
1.  **Load (Read/Fetch)**:
    *   Processor sends the address and a Read request.
    *   Memory reads the data at that address and sends it to the processor.
2.  **Store (Write)**:
    *   Processor sends the address along with the data to be written.
    *   Memory writes the data into the location, destroying the original content.

### 5.3 Instructions and Instruction Sequencing

#### Notation
*   **Register Transfer Notation (RTN)**: Describes data transfer and operations.
    *   `R1 <- [LOC]`: Content of memory location LOC is transferred to register R1.
    *   `R3 <- [R1] + [R2]`: Sum of contents of R1 and R2 is stored in R3.
*   **Assembly Language Notation**: Mnemonics for machine instructions.
    *   `Move LOC, R1`
    *   `Add R1, R2, R3`

#### Instruction Execution Phases
Programs are executed in two main phases:
1.  **Fetch Phase**: The processor fetches an instruction from memory based on the content of the **Program Counter (PC)**. The fetched instruction is placed in the **Instruction Register (IR)**.
2.  **Execution Phase**: The IR content is examined to determine the operation. The processor then fetches operands, performs the arithmetic/logic operation, and stores the results.

#### Sequencing and Branching
*   **Straight-Line Sequencing**: The PC is automatically incremented (e.g., +4 for 32-bit instructions) after each fetch to point to the next instruction.
*   **Branching**: Instead of the sequential address, a **new value** is loaded into the PC.
    *   **Conditional Branch**: Branch occurs only if a specific condition is met (checked via condition codes).
*   **Condition Codes (Flags)**: Stored in a status register to track results of operations:
    *   **N (Negative)**: 1 if result is negative.
    *   **Z (Zero)**: 1 if result is zero.
    *   **V (Overflow)**: 1 if arithmetic overflow occurs.
    *   **C (Carry)**: 1 if carry-out results from the operation.

### 5.4 Types of Operations

1.  **Data Transfer**: Perhaps the simplest for the CPU.
    *   Includes: Move, Store, Load, Exchange, Clear, Set, Push, Pop.
    *   CPU must specify source, destination, amount of data, and addressing mode.
    *   Requires calculating memory addresses, translating virtual to physical, and checking cache.
2.  **Arithmetic**:
    *   Operations: Add, Subtract, Multiply, Divide, Absolute, Increment, Decrement, Negate.
    *   Involves the ALU.
3.  **Logical**:
    *   **Bitwise**: AND, OR, NOT, XOR, EQUAL.
    *   **Shifts**:
        *   *Logical Shift*: Bits shifted out are lost; 0s are shifted in.
        *   *Arithmetic Shift*: Does not shift the sign bit; the sign bit is replicated.
    *   **Rotate (Cyclic Shift)**: Bits shifted out of one end are shifted into the other.
4.  **Conversion**: Changing formats (e.g., Binary to Decimal).
5.  **Input/Output (I/O)**: Specific instructions or memory-mapped I/O.
6.  **System Control**: Privileged instructions for OS use (e.g., Kernel mode, Ring 0).
7.  **Transfer of Control**: Branch, Skip, Procedure Call (uses stack for return addresses).

### 5.5 Types of Operands
*   **Addresses**: Unsigned integers used as locations.
*   **Numbers**: Integers (fixed-point), Floating-point, or Packed Decimal (0-9 represented by 4 bits).
*   **Characters**: ASCII (7-bit) or EBCDIC (8-bit).
*   **Logical Data**: Bits or flags.

### 5.6 Instruction Formats and Address Counts
The number of addresses in an instruction impacts program complexity and length.

| Format        | Example ($Y = (A-B)/(C+D*E)$)  | Characteristic                                    |
| :------------ | :----------------------------- | :------------------------------------------------ |
| **3-Address** | `SUB Y, A, B`                  | More complex instructions, shorter programs.      |
| **2-Address** | `MOVE Y, A`<br>`SUB Y, B`      | One operand is overwritten; requires extra moves. |
| **1-Address** | `LOAD D`<br>`MPY E`<br>`ADD C` | Uses an implicit **Accumulator (AC)**.            |
| **0-Address** | `PUSH A`<br>`PUSH B`<br>`SUB`  | Uses an implicit **Stack** (LIFO).                |

### 5.7 Data Structures: Stacks and Queues

*   **Stack**:
    *   LIFO (Last-In-First-Out).
    *   Elements added/removed at one end (**top**).
    *   **Stack Pointer (SP)**: Stores the address of the element at the top.
    *   Used for subroutines and nested procedure calls.
*   **Queue**:
    *   FIFO (First-In-First-Out).
    *   Grows in direction of increasing memory addresses.
    *   Two pointers required (Front and Back).

### 5.8 Design Decisions
Architects must balance several factors when designing an ISA:
*   **Operation Repertoire**: How many and how complex should operations be?
*   **Data Types**: Which types to support directly in hardware.
*   **Instruction Formats**: Length of opcode, number of addresses, fixed vs. variable length.
*   **Registers**: Number of CPU registers available and their specific uses.
*   **Addressing Modes**: Methods for specifying operand locations.

---

## Topic 6: Addressing Modes and Instruction Formats

### 6.1 Addressing Modes
Addressing modes are techniques used to specify the location of operands. They represent a design trade-off between **address range**, **addressing flexibility**, and the **number of memory references** (complexity).

*   **Notation**:
    *   $A$: Contents of the address field in the instruction.
    *   $R$: Contents of an address field that refers to a register.
    *   $EA$: Effective Address (actual location of the operand).
    *   $(X)$: Contents of memory location $X$ or register $X$.

#### 1. Immediate Addressing
*   **Mechanism**: The operand is part of the instruction itself.
    *   **Operand = A**
    *   *Example*: `ADD 5` (Add 5 to accumulator).
*   **Pros**:
    *   No memory reference to fetch data (saves time).
    *   Fast execution.
*   **Cons**:
    *   Limited range (operand size is limited by the width of the address field).
    *   Data is constant at run time.

#### 2. Direct Addressing
*   **Mechanism**: The address field contains the effective address of the operand.
    *   **EA = A**
    *   *Example*: `ADD A` (Add contents of cell A to accumulator).
*   **Pros**:
    *   Simple; requires only a single memory reference to access data.
    *   No additional calculations for EA.
*   **Cons**:
    *   Limited address space (address field is usually smaller than the full memory space).
    *   Address is constant, though data at that address may change.

#### 3. Indirect Addressing
*   **Mechanism**: The address field points to a memory cell that contains the *address* of the operand (a pointer).
    *   **EA = (A)**
    *   *Example*: `ADD (A)` (Look in A, find address B, look in B for operand).
*   **Pros**:
    *   **Large address space**: $2^n$ where $n$ is memory word length.
    *   Can be nested, multilevel, or cascaded (e.g., `EA = (...(A)...)`).
*   **Cons**:
    *   **Multiple memory accesses** required to find the operand (slower).

#### 4. Register Addressing
*   **Mechanism**: The operand is held in a register named in the address field.
    *   **EA = R**
*   **Pros**:
    *   **No memory access** (internal CPU bus access is very fast).
    *   Very small address field needed (fewer bits to address 32 registers than 4GB of memory).
    *   Shorter instruction length.
*   **Cons**:
    *   Extremely limited address space (restricted to the number of available registers).

#### 5. Register Indirect Addressing
*   **Mechanism**: The register contains the address of the operand in memory.
    *   **EA = (R)**
*   **Pros**:
    *   **Large address space** ($2^n$).
    *   One fewer memory access than standard indirect addressing (Register access + 1 Memory access).
*   **Cons**:
    *   Still requires one extra memory reference compared to direct register addressing.

#### 6. Displacement Addressing
*   **Mechanism**: Combines direct and register indirect addressing. The effective address is the sum of a register value and a displacement value.
    *   **EA = A + (R)**
    *   The address field holds two values:
        *   $A$: Base value (explicit displacement).
        *   $R$: Register holding a displacement (or vice versa).
*   **Variations**:
    *   **Relative Addressing ($R = PC$)**: `EA = A + (PC)`.
        *   Used for branch instructions.
        *   Exploits locality of reference.
    *   **Base-Register Addressing**: `EA = A + (R)`.
        *   $R$ holds the **Base Address** (start of a segment).
        *   $A$ holds the displacement.
        *   Good for program relocation (only the base register needs updating).
    *   **Indexing**: `EA = A + (R)`.
        *   $A$ = Base address.
        *   $R$ = Displacement (Index).
        *   Good for iterating through arrays (`Auto-indexing`: $R++$).

#### 7. Stack Addressing
*   **Mechanism**: Operand is implicitly on top of the stack.
    *   **Stack Pointer (SP)**: Register that tracks the address of the top of the stack.
*   **Pros**:
    *   No memory reference in the instruction (implicit).
    *   Very short instructions (0-address).
*   **Cons**:
    *   Limited applicability (only works for stack-based logic).

### 6.2 Comparison Summary

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
The instruction format defines the layout of bits in an instruction, including the Opcode, Operands, and Addressing Mode.

#### Key Design Issues
1.  **Instruction Length**:
    *   Affected by memory size, memory organization, bus structure, and processor speed.
    *   **Trade-off**: Powerful instructions (longer) vs. Saving space (shorter).
2.  **Allocation of Bits**:
    *   **Addressing Modes**: Implicit vs. Explicit.
    *   **Number of Operands**: Typical is 2 or 3.
    *   **Register vs. Memory**: How many registers?
    *   **Address Range**: Direct addressing range vs. Displacement size.
3.  **Variable vs. Fixed Length**:
    *   Variable length saves space but increases decoding complexity.
    *   Fixed length simplifies pipelining and decoding.

#### Example Architectures

**1. PDP-11 (Variable Length)**
*   **Lengths**: 16, 32, and 48-bit instructions.
*   **Formats**: 13 different formats.
*   **Design**: Orthogonal addressing modes (independent of opcode).
*   **Pros**: Develops efficient and compact programs.
*   **Cons**: Increases hardware cost and complexity.

**2. VAX (Highly Variable)**
*   **Philosophy**: All instructions should have a "natural" number of operands.
*   **Formats**: Highly variable.
    *   Opcode: 1 or 2 bytes.
    *   Operands: 0 to 6.
    *   Length: 1 byte (min) to 37 bytes (max).
*   **Feature**: Uses extended opcode with hexadecimal codes.

**3. x86 (Complex)**
*   **Characteristics**: Variety of formats; only the Opcode is always present.
*   **Structure**:
    *   **Instruction Prefixes** (0-4 bytes): e.g., `LOCK` (bus lock), `REP` (repeat string).
    *   **Segment Override**: Specific segment register.
    *   **Opcode**: 1 or 2 bytes.
    *   **ModR/M**: Addressing mode specifier (Mod, Reg/Opcode, R/M fields).
    *   **SIB**: Scale Index Byte (Scale, Index, Base) for complex addressing.
    *   **Displacement**: Optional (8, 16, or 32-bit).
    *   **Immediate**: Optional (8, 16, or 32-bit).
*   **Backward Compatibility**: Maintains support for 16-bit 8086 code.

**4. PowerPC (RISC / Fixed)**
*   **Characteristics**:
    *   **Fixed Length**: All instructions are 32 bits.
    *   **Regular Formats**: Similar bit allocation across instruction types.
*   **Examples**:
    *   **Load/Store**: 6-bit Opcode, 5-bit Dest, 5-bit Base, 16-bit Displacement.
    *   **Branch**: 6-bit Opcode, 24-bit addressing info.
    *   **Arithmetic**: 6-bit Opcode, 5-bit Dest, 5-bit Src, 16-bit Immediate.

# Topic 7: Central Processing Unit

## 1. Processor & Register Organisation

### 1.1 CPU Structure
The CPU is the "brain" of the computer, responsible for the following core functions:
*   **Fetch instructions**: Read instructions from memory.
*   **Interpret instructions**: Decode the instruction to determine the required action.
*   **Fetch data**: Read data from memory or I/O modules if needed for execution.
*   **Process data**: Perform arithmetic or logical operations on data.
*   **Write data**: Write the results of an operation to memory or an I/O module.

It consists of three major internal components connected by an **Internal CPU Bus**:
*   **Arithmetic and Logic Unit (ALU)**: Performs computation (arithmetic and boolean logic operations), status flagging, and shifting.
*   **Control Unit (CU)**: Controls the movement of data and instructions into and out of the CPU and manages the operation of the ALU.
*   **Registers**: Internal CPU memory used for temporary storage and high-speed access.

> [!INFO] System Bus Connection
> The CPU connects to the rest of the computer (Memory and I/O) via the **System Bus**, which is divided into:
> * **Data Bus**: Transfers actual data and instructions.
> * **Address Bus**: Identifies the location of data/instructions.
> * **Control Bus**: Transmits command signals (read, write, interrupt).

### 1.2 Register Organization
Registers provide high-speed temporary storage (working space) for the CPU.

#### User-Visible Registers
Can be referenced by assembly-level instructions to minimize main memory references.
*   **General Purpose**: May be true general purpose or restricted.
    *   *Design Issues*:
        *   **Specialized vs. General**: Specialized registers allow smaller instructions (implicit addressing) but reduce flexibility. General purpose increases flexibility but may increase instruction size.
        *   **Number**: Typically 8-32. Fewer registers result in more memory references; more registers increase context switch overhead.
        *   **Size**: Must be large enough to hold the largest address or data type. Some architectures allow combining two registers for double-length values.
*   **Data Registers**: Often used for data manipulation (e.g., Accumulator); sometimes cannot be used for operand address calculation.
*   **Address Registers**:
    *   *Segment Pointer*: Holds the base address of a memory segment.
    *   *Index Register*: Used for indexed addressing (often supports auto-indexing).
    *   *Stack Pointer*: Points to the top of the system stack, allowing implicit addressing.
*   **Condition Codes (Flags)**: Individual bits set by hardware to report operation results.
    *   **Sign (S)**: Sign bit of result.
    *   **Zero (Z)**: Result is zero.
    *   **Carry (C)**: Carry out or borrow.
    *   **Equal (E)**: Logical compare result.
    *   **Overflow (O)**: Arithmetic overflow.

#### Control & Status Registers
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

### 1.3 Case Study: Motorola MC68000 vs. Intel 8086

| Feature | Motorola MC68000 | Intel 8086 |
| :--- | :--- | :--- |
| **Architecture** | 32-bit (Regular instruction set) | 16-bit (Special-purpose focus) |
| **Data Registers** | 8 (D0-D7) for data manipulation. | 4 (AX, BX, CX, DX) - AX is Accumulator. |
| **Address Registers** | 9 (A0-A7 + Stack Pointers). | 4 Pointers/Index (SP, BP, SI, DI) + 4 Segment Registers (CS, DS, SS, ES). |
| **Flexibility** | High; very regular usage. | Lower; many registers have implicit uses. |

---

## 2. The Instruction Cycle
The execution of a single instruction involves several sub-cycles.

### 2.1 The Sub-Cycles
1.  **Fetch Cycle**:
    *   `PC` contains address of next instruction.
    *   Address moved to `MAR`.
    *   Control Unit requests memory read.
    *   Result placed on Data Bus, copied to `MBR`, then to `IR`.
    *   `PC` is incremented by 1 (or instruction length).
2.  **Indirect Cycle** (if required):
    *   `IR` is examined; if indirect addressing is used, `MBR` (address part) moved to `MAR`.
    *   Control Unit requests memory read to fetch the effective address.
3.  **Execute Cycle**:
    *   Depends on the instruction in `IR`. May involve memory R/W, I/O, or register transfers.
4.  **Interrupt Cycle**:
    *   Current `PC` is saved to allow resumption (often pushed to stack or saved to `MBR` then memory).
    *   `PC` is loaded with the start address of the interrupt handler routine.

### 2.2 Interrupts
*   **Types**: Program (error), Timer (multitasking), I/O (device ready), Hardware Failure.
*   **Handling**: Suspend program $\rightarrow$ Save Context (PC, PSW) $\rightarrow$ Set PC to Handler $\rightarrow$ Process $\rightarrow$ Restore Context.

---

## 3. Instruction Pipelining
Pipelining overlaps the execution of multiple instructions to increase throughput, similar to an assembly line.

### 3.1 The 6-Stage Pipeline
1.  **FI (Fetch Instruction)**: Read instruction from memory.
2.  **DI (Decode Instruction)**: Determine opcode and operand specifiers.
3.  **CO (Calculate Operands)**: Calculate effective addresses.
4.  **FO (Fetch Operands)**: Fetch operands from memory.
5.  **EI (Execute Instruction)**: Perform the operation.
6.  **WO (Write Operand)**: Store result in destination.

### 3.2 Performance & Limits
*   **Ideal Speedup**: Approaches $k$ (number of stages) for a large number of instructions $n$.
*   **Performance Formula**:
    *   Cycle Time $\tau = \max(\tau_i) + d$
    *   Total Time $T_k = [k + (n-1)]\tau$
    *   Speedup $S = \frac{T_1}{T_k} = \frac{nk}{k+(n-1)}$
*   **Limitations**:
    *   *Unequal Stage Duration*: Pipeline must wait for the slowest stage.
    *   *Hazards*:
        *   **Resource Conflict**: Two stages needing memory at once (e.g., FI and FO).
        *   **Data Dependency**: Instruction $B$ needs result of instruction $A$.
        *   **Branch Penalty**: Conditional branches can invalidate prefetched instructions.

### 3.3 Dealing with Branches
*   **Multiple Streams**: Replicate pipeline stages to fetch both possible paths. (Leads to bus contention).
*   **Prefetch Branch Target**: Fetch target in addition to sequential next.
*   **Loop Buffer**: Small, fast memory for recently fetched instructions. Excellent for loops (branch target is likely in buffer).
*   **Branch Prediction**:
    *   *Static*: Predict based on opcode or assume "Never Taken" / "Always Taken".
    *   *Dynamic*: Use run-time history.
        *   **Taken/Not Taken Switch**: 1 or 2 bits recording recent history.
        *   **Branch History Table**: Cache of recent branch addresses and history to predict future behavior.
*   **Delayed Branch**: Rearrange instructions so that useful work is done in the "delay slot" while the branch outcome is determined.

### 3.4 Example: Intel 80486 Pipelining
The 80486 uses a 5-stage pipeline:
1.  **Fetch**: From cache or memory into 16-byte prefetch buffers.
2.  **Decode 1**: Opcode and addressing mode decoded.
3.  **Decode 2**: Expands opcode into control signals and handles complex addressing.
4.  **Execute**: ALU operations, cache access, and register updates.
5.  **Write Back**: Updates registers and status flags.

---
# Topic 8: Control Unit

## 1. Functional Requirements & Structure

The **Control Unit (CU)** is the nerve center of the processor. It does not perform data processing itself but manages the resources that do.

### 1.1 Core Tasks
The CU has two primary functions:
1.  **Sequencing**: Causing the CPU to step through a series of micro-operations in the correct sequence based on the program logic.
2.  **Execution**: Causing the performance of each individual micro-operation by generating specific control signals.

### 1.2 Inputs & Outputs
To perform its function, the CU sits at the interface between the CPU and the rest of the system.

**Inputs (Status & Instruction):**
*   **Clock**: A repetitive sequence of pulses (System Clock). Used to measure the duration of micro-operations. One micro-instruction (or a set of parallel ones) is typically executed per clock cycle.
*   **Instruction Register (IR)**: Contains the Op-code of the current instruction. This is the primary input that determines *what* needs to be done.
*   **Flags (PSW)**: The Status Register (Zero, Overflow, Sign, etc.) indicates the outcome of previous ALU operations. Used for conditional branching logic.
*   **Control Bus Signals**: Signals from the system bus, such as **Interrupts** (IRQ) and **Acknowledgements** (ACK).

**Outputs (Control Signals):**
*   **Internal (Control within CPU)**:
    *   *Register Transfer*: Signals that open/close gates to allow data to move between registers and the internal bus.
    *   *ALU Functions*: Signals that tell the ALU which operation to perform (ADD, AND, SHIFT, etc.).
*   **External (Control to System Bus)**:
    *   *Memory Control*: Read (MR) and Write (MW) signals to the address/data bus.
    *   *I/O Control*: I/O Read and Write signals.

---

## 2. Micro-Operations

A program execution is a hierarchy: Program $\rightarrow$ Instruction Cycles $\rightarrow$ Micro-Operations. A **Micro-operation ($\mu$-op)** is the atomic, elemental operation of the CPU (e.g., "Move PC to MAR").

### 2.1 Rules for Grouping
Micro-operations can be grouped into clock cycles, but they must adhere to specific rules:
1.  **Proper Sequence**: Events must happen in order (e.g., MAR must be loaded *before* a Memory Read is triggered).
2.  **Resource Conflicts**: You cannot read and write to the same register in the same cycle (unless the hardware specifically supports it, like edge-triggered flip-flops).
3.  **Bus Conflicts**: Only one source can drive the bus at a time.

### 2.2 The Sub-Cycles (Register Transfer Notation)

#### Fetch Cycle
Standard for almost all instructions.
*   **T1**: $MAR \leftarrow (PC)$
    *   *Move Program Counter to Memory Address Register.*
*   **T2**: $MBR \leftarrow Memory$; $PC \leftarrow (PC) + I$
    *   *Read memory into Buffer Register; Increment PC (in parallel).*
*   **T3**: $IR \leftarrow (MBR)$
    *   *Move instruction to Instruction Register.*

#### Indirect Cycle
Occurs if the instruction specifies an indirect operand (pointer).
*   **T1**: $MAR \leftarrow (IR_{address})$
*   **T2**: $MBR \leftarrow Memory$
*   **T3**: $IR_{address} \leftarrow (MBR_{address})$
    *   *Replace the direct address in IR with the effective address found in memory.*

#### Interrupt Cycle
Occurs if an interrupt is pending at the end of the Execute cycle.
*   **T1**: $MBR \leftarrow (PC)$
    *   *Save return address.*
*   **T2**: $MAR \leftarrow Save\_Address$; $PC \leftarrow Routine\_Address$
    *   *Address to save PC (e.g., stack pointer); Load Jump Vector.*
*   **T3**: $Memory \leftarrow (MBR)$
    *   *Write Return Address to memory.*

#### Execute Cycle Examples
The micro-ops depend entirely on the Opcode.

*   **ADD R1, X** (Add contents of memory X to Register R1):
    *   **T1**: $MAR \leftarrow (IR_{address})$
    *   **T2**: $MBR \leftarrow Memory$
    *   **T3**: $R1 \leftarrow (R1) + (MBR)$
*   **ISZ X** (Increment and Skip if Zero - typically for loops):
    *   **T1**: $MAR \leftarrow (IR_{address})$
    *   **T2**: $MBR \leftarrow Memory$
    *   **T3**: $MBR \leftarrow (MBR) + 1$
    *   **T4**: $Memory \leftarrow (MBR)$; **IF** $((MBR) == 0)$ **THEN** $PC \leftarrow (PC) + 1$
*   **BSA X** (Branch and Save Address - Subroutine Call):
    *   **T1**: $MAR \leftarrow (IR_{address})$; $MBR \leftarrow (PC)$
    *   **T2**: $PC \leftarrow (IR_{address})$; $Memory \leftarrow (MBR)$
    *   **T3**: $PC \leftarrow (PC) + 1$

---

## 3. Implementation Approaches

There are two fundamental ways to build the Control Unit logic.

### 3.1 Hardwired Implementation
The CU is a massive **Combinatorial Logic Circuit**. The control signals are boolean functions of the inputs.
*   **Components**:
    *   **Instruction Decoder**: Converts the Opcode into a single active line (e.g., line $C_{ADD}$ is high).
    *   **Ring Counter / Timing Generator**: Produces a sequence of pulses ($T_1, T_2, \dots T_N$).
    *   **Logic Gates**: AND/OR gates combine the decoded opcode, timing signal, and flags.
*   **Logic Example**:
    *   Control Signal $C_5$ (e.g., "Read Memory") is needed during Fetch T2, Indirect T2, etc.
    *   Boolean: $C_5 = (Fetch \cdot T_2) + (Indirect \cdot T_2) + \dots$
*   **Pros**:
    *   **Speed**: Optimized for maximum performance (RISC philosophy).
*   **Cons**:
    *   **Complexity**: Wiring becomes unmanageable for large instruction sets.
    *   **Inflexible**: Adding a new instruction requires physically redesigning and soldering the chip.

### 3.2 Micro-programmed Implementation
The CU logic is implemented as "software" (firmware) stored in a special ROM called **Control Memory**.
*   **Concept**:
    *   Each **Instruction** (machine code) initiates a **Micro-program** (sequence of micro-instructions).
    *   Each **Micro-instruction** generates the control signals for one cycle.
*   **Pros**:
    *   **Flexible**: New instructions can be added by updating the ROM (firmware).
    *   **Simpler Design**: Systematic and error-resistant.
*   **Cons**:
    *   **Slower**: Fetching micro-instructions from ROM adds latency compared to direct hardware gates.

---

## 4. Micro-programmed Control Details

### 4.1 Organization
*   **Control Address Register (CAR)**: Holds the address of the *next* micro-instruction.
*   **Control Memory**: ROM holding the micro-instructions.
*   **Control Buffer Register (CBR)**: Holds the *current* micro-instruction being executed.
*   **Sequencing Logic**: Calculates the next CAR value based on flags and the current instruction.

### 4.2 Micro-instruction Types
The format of the bits in the Control Memory affects parallelism and size.

| Feature | Horizontal Micro-programming | Vertical Micro-programming |
| :--- | :--- | :--- |
| **Width** | **Wide** (e.g., 64-100+ bits). | **Narrow** (e.g., 16-32 bits). |
| **Encoding** | **Unencoded** (1 bit = 1 control line). | **Highly Encoded** (Opcode style). |
| **Parallelism**| **High**. Can toggle many lines at once. | **Low**. Limited by encoding format. |
| **Speed** | Faster execution (no decoding). | Slower (requires decoders). |
| **Logic** | Simple control logic. | Complex control logic (decoders needed). |

### 4.3 Sequencing Techniques (Next Address Logic)
How does the CU move from one micro-instruction to the next?

1.  **Two Address Fields**:
    *   The micro-instruction carries **two** explicit addresses (Address A and Address B).
    *   A Multiplexer selects A or B based on a Status Flag (Branching).
    *   *Pro*: Fast branching. *Con*: Wastes bits (wide word).
2.  **Single Address Field**:
    *   Next address is determined by:
        *   **Next Sequential**: Counter increment.
        *   **Branch**: Use the single address field if condition is met.
        *   **Mapping**: Use Opcode to jump to start of routine.
3.  **Variable Format**:
    *   One bit designates the format: Type 0 = Control Signals, Type 1 = Branching Logic.
    *   Saves space but requires a cycle for branching.

### 4.4 Address Generation
*   **Explicit**: The address is written directly in the micro-instruction (Jump to X).
*   **Implicit/Mapping**: The hardware maps the machine instruction Opcode (e.g., `0010`) to a Control Memory Address (e.g., `100000`) to start the routine.
*   **Residual Control**: Using a return address stack for micro-subroutines.

### 4.5 Encoding Approaches
*   **Direct**: Each bit controls one line (Horizontal).
*   **Indirect**: Bits refer to another register or field.
*   **Functional Encoding**: Group bits by function (e.g., 3 bits for ALU operation). Only one function can be active per group.
*   **Resource Encoding**: Group bits by resource (e.g., 3 bits for "Input to Bus"). Prevents bus conflicts.

---

## 5. Summary

*   The **Control Unit** is the "hardware program" that drives the CPU.
*   **Hardwired** CUs are fast circuits used in **RISC** processors where instruction sets are simple.
*   **Micro-programmed** CUs use firmware sequences, making them ideal for **CISC** processors (like Intel x86) with complex, variable-length instructions.
*   Design trade-offs revolve around **speed** (Hardwired/Horizontal) vs. **flexibility and size** (Micro-programmed/Vertical).


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
As I/O demands grew (e.g., 3D graphics), DMA evolved into I/O Channelsâ€”specialized processors with their own instruction sets.

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

### 1.1 Key Characteristics
*   **Location**:
    *   **CPU**: Registers (internal).
    *   **Internal**: Main Memory (RAM), Cache.
    *   **External**: Peripheral storage (Disk, Tape), accessible via I/O processors.
*   **Capacity**:
    *   **Expressed in**: Bytes (1 byte = 8 bits) or words.
    *   **Word Size**: The natural unit of organization (typically 8, 16, 32 bits).
    *   **Number of Words**: Or bytes.
*   **Unit of Transfer**:
    *   **Internal**: Governed by the data bus width (usually equal to word length, but can be larger e.g., 64, 128, 256 bits).
    *   **External**: Usually a block, which is much larger than a word.
*   **Physical Type**:
    *   **Semiconductor**: RAM, ROM.
    *   **Magnetic**: Disk, Tape.
    *   **Optical**: CD, DVD.
    *   **Others**: e.g., Hologram.
*   **Physical Characteristics**:
    *   **Volatile**: Information lost when power is off (e.g., RAM).
    *   **Non-volatile**: Information remains until deliberately changed (e.g., magnetic surface memories).
    *   **Non-erasable**: Cannot be changed after creation (e.g., ROM).
*   **Organisation**: Physical arrangement of bits into words (e.g., interleaved).

### 1.2 Access Methods

| Method | Description | Example |
| :--- | :--- | :--- |
| **Sequential** | Memory is organized into units of data (records). Access must start at the beginning and read in order. Access time depends on location of data and previous location. | Magnetic Tape |
| **Direct** | Individual blocks have a unique address. Access involves jumping to a vicinity plus a limited sequential search. Access time depends on location and previous location. | Magnetic Disk |
| **Random** | Individual addresses identify locations exactly. Access time is independent of the location or previous access. | RAM |
| **Associative** | Data is located by a comparison with contents of a portion of the store. Access time is independent of location or previous access. | Cache Memory |

### 1.3 Performance Metrics
*   **Access Time**:
    *   *For RAM*: Time between presenting the address and getting valid data.
    *   *For non-RAM*: Time taken to position the read-write mechanism at the desired location.
*   **Memory Cycle Time**: Primarily applied to RAM. It is the Access Time + the time required for transients to die out on signal lines before the next access.
*   **Transfer Rate**: Rate at which data can be moved in and out of the memory unit.
    *   *For RAM*: $1 / (\text{cycle time})$
    *   *For Non-RAM*: $T_N = T_A + \frac{N}{R}$ (where $T_N$ = average time to R/W N bits, $T_A$ = average access time, $N$ = number of bits, $R$ = transfer rate in bps).

### 1.4 Design Constraints
Computer memory design is a trade-off between three key factors:
1.  **Capacity**: How much data can be stored?
2.  **Access Time**: How fast is the memory? (Must be able to keep up with the processor).
3.  **Cost**: Must be reasonable in relationship to other components.
*   **Relationships**: 
    *   Faster access time $
ightarrow$ greater cost per bit.
    *   Greater capacity $
ightarrow$ smaller cost per bit.
    *   Greater capacity $
ightarrow$ slower access time.

---

## 2. The Memory Hierarchy

### 2.1 The Hierarchy Pyramid
The design solution to memory constraints is not to rely on a single technology, but to employ a memory hierarchy.

1.  **Registers** (In CPU)
2.  **L1 Cache**
3.  **L2 Cache**
4.  **Main Memory** (RAM)
5.  **Disk Cache**
6.  **Magnetic Disk**
7.  **Optical / Tape** (Offline Storage)

### 2.2 Key Relationships
As you move **down** the hierarchy:
*   Decreasing cost per bit.
*   Increasing capacity.
*   Increasing access time.
*   Decreasing frequency of memory access by the processor.

---

## 3. Semiconductor Main Memory

### 3.1 The Memory Cell
The basic element of semiconductor memory is the memory cell.
*   **Properties**:
    1.  Two stable states (representing binary 1 and 0).
    2.  Capable of being written into (to set the state).
    3.  Capable of being read to sense the state.
*   **Operation**:
    *   **Write**: Select line is activated, Control signal (R/W) is set to Write, and Data is fed in.
    *   **Read**: Select line is activated, Control signal is set to Read, and Sense line outputs the state.

### 3.2 RAM Types: SRAM vs. DRAM

| Feature | SRAM (Static RAM) | DRAM (Dynamic RAM) |
| :--- | :--- | :--- |
| **Storage Mechanism** | Digital device using traditional **flip-flop** logic gates. | Stores data as **charge on capacitors**. |
| **Refresh Required?** | **No** (stable as long as power is supplied). | **Yes** (charge leaks; needs periodic refresh every few ms). |
| **Structure** | Complex (multiple transistors per cell). | Simple (1 transistor, 1 capacitor per cell). |
| **Density/Size** | Lower density, larger physical size. | Higher density, smaller per cell. |
| **Cost** | More expensive. | Less expensive. |
| **Speed** | Faster. | Slower (due to refresh and capacitor charging). |
| **Typical Usage** | **Cache Memory**. | **Main Memory**. |

> [!INFO] DRAM Refresh
> All DRAMs require a **Refresh Circuit** on the chip. It disables the chip while cells are refreshed, stepping through all rows to read and write back the data. This slows down apparent performance.

### 3.3 ROM (Read-Only Memory)
ROM provides permanent, non-volatile storage.
*   **Applications**: Microprogramming, library subroutines, system programs (BIOS), function tables.
*   **Advantage**: Data/programs are permanent in main memory; no need to load from secondary storage.
*   **Disadvantage**: Data is wired into the chip during fabrication. High fixed cost and no room for error.

**Types of ROM**:
*   **PROM (Programmable ROM)**: Written once electronically after fabrication. Burning fuses at specific points achieves the '1' state.
*   **EPROM (Erasable PROM)**: Read and written electronically. Erased by exposure to **UV light** (entire chip is erased).
*   **EEPROM (Electrically Erasable PROM)**: Can be erased and written electronically at the byte level. Takes longer to write than read.
*   **Flash Memory**: Intermediate between EPROM and EEPROM. Erases in blocks rather than bytes. High density.

---

## 4. Chip Organisation and Advanced DRAM

### 4.1 Internal Organisation
Memory cells are organized in the form of a string or array.
*   **Address Decoder**: Converts the address bits to a signal that selects a specific word line ($W_0, W_1, \dots$).
*   **Sense/Write Circuit**: Reads or stores data in the selected word cell.
*   **Pin Calculation**: To address $1	ext{K}$ ($1024$ bit) memory cells:
    *   **$128 	imes 8$ organisation**: $7$ for word, $8$ for bit, $2$ for R/W+CS = $17+2$ pins.
    *   **$1024 	imes 1$ organisation**: $10$ for word, $1$ for bit, $2$ for R/W+CS = $13+2$ pins.
*   **Multiplexing**: To reduce pins, address is split into Row and Column addresses (e.g., $16	ext{Mbit}$ DRAM as $2048 	imes 2048 	imes 4$ array reduces address pins from $22$ to $11$).

### 4.2 Advanced DRAM Architectures
1.  **SDRAM (Synchronous DRAM)**: Access is synchronized with an external clock. CPU knows exactly when data will be ready. Supports **Burst Mode** (firing a stream of data in blocks).
2.  **DDR-SDRAM**: Sends data twice per clock cycle (leading and trailing edge).
3.  **RDRAM (Rambus DRAM)**: Uses a high-speed vertical bus (up to $1.6	ext{Gbps}$). Adopted by Intel for Pentium/Itanium.
4.  **Cache DRAM (CDRAM)**: Integrates a small SRAM cache ($16	ext{KB}$) onto a generic DRAM chip.

---

## 5. Error Correction

Memory is susceptible to failures:
*   **Hard Failure**: Permanent physical defect (wear, environment).
*   **Soft Error**: Random, non-destructive (power spikes, alpha particles).

### 5.1 Error Correcting Code (ECC) Function
When data is written, a calculation function $f$ produces a code $K$. Both are stored. When read, a new code $K'$ is generated. If $K 
eq K'$, an error is detected.

### 5.2 Hamming Error Correcting Code
*   **Syndrome Word**: XORed check bits. If $0$, no error.
*   **Capability**: Can correct single-bit errors.
*   **Formula**: $2^K - 1 \ge M + K$ (e.g., for $8$ data bits, $4$ check bits are needed because $2^4 - 1 = 15 \ge 8 + 4 = 12$).
*   **Characteristics**:
    *   If syndrome word is all $0$s $
ightarrow$ no error.
    *   If only one bit is $1$ $
ightarrow$ error in a check bit.
    *   If more than one bit is $1$ $
ightarrow$ value indicates position of the data bit in error.

---

## 6. Summary / Key Takeaways

*   **Memory Hierarchy**: Balances cost, capacity, and speed.
*   **SRAM vs DRAM**: SRAM (fast/cache) uses flip-flops; DRAM (dense/main) uses capacitors and requires refresh.
*   **ROM**: Non-volatile storage; varieties include PROM, EPROM, and Flash.
*   **Advanced DRAM**: Technologies like SDRAM and DDR improve throughput by syncing with clocks or doubling data rates.
*   **Error Correction**: Essential for reliability; Hamming codes allow for automatic correction of single-bit flips.

---
# Topic 11: Cache Memory Architecture

## 1. Principles & Motivation

### 1.1 The Speed Mismatch
There is a significant speed mismatch between the fast CPU and the slower Main Memory. As processor speed increases, the external bus becomes a bottleneck, causing the CPU to waste cycles waiting for data.

### 1.2 The Solution: Cache Memory
Cache is a small, fast memory sitting between the CPU and Main Memory. It acts as a buffer to provide the CPU with the data it needs as quickly as possible at the price of cheaper semiconductor memories.

> [!INFO] Locality of Reference
> Cache relies on the **Principle of Locality**: When a block of data is fetched for a single memory reference, it is highly likely that future references will be to that same location or adjacent locations.
> * **Temporal Locality**: Recently accessed data is likely to be accessed again soon.
> * **Spatial Locality**: Data near recently accessed data is likely to be accessed soon.

### 1.3 Cache Read Operation Sequence
1.  Receive address **RA** from CPU.
2.  Check if the block containing **RA** is in the cache.
3.  **If Yes (Hit)**: Fetch the word from cache and deliver to CPU.
4.  **If No (Miss)**:
    *   Access Main Memory for the block containing **RA**.
    *   Allocate a cache line for the block.
    *   Load the Main Memory block into the cache line.
    *   Deliver the word to the CPU.

---

## 2. Cache/Main Memory Structure

The relationship between cache and main memory is defined by the following parameters:

*   **Main Memory**: Consists of $2^n$ addressable words.
    *   Considered to consist of $M$ blocks of $K$ words each.
    *   $M = 2^n / K$.
*   **Cache**: Consists of $C$ lines (slots) of $K$ words each.
    *   The number of lines is much less than the number of blocks ($C \ll M$).
    *   Each line includes a **Tag** to identify which block of main memory is currently occupying it.

---

## 3. Elements of Cache Design

### 3.1 Mapping Functions
Since there are fewer cache lines than main memory blocks, algorithms are needed to determine where a block goes.

#### A. Direct Mapping
Each block of main memory maps to only **one specific** cache line.
*   **Logic**: $i = j \pmod m$ (where $i$ = line, $j$ = block, $m$ = lines in cache).
*   **Address Structure**: $[ \text{Tag } (s-r) \mid \text{Line } (r) \mid \text{Word } (w) ]$
    *   *Word*: Identifies unique word within a block.
    *   *Line*: Selects specific line in cache.
    *   *Tag*: Used to verify if the block in the line is the requested one.
*   **Pros**: Simple, inexpensive hardware.
*   **Cons**: Fixed location leads to **Thrashing** if a program repeatedly accesses two blocks that map to the same line.

#### B. Associative Mapping
A main memory block can load into **any** line of the cache.
*   **Logic**: No fixed mapping rule; every line's tag is examined for a match.
*   **Address Structure**: $[ \text{Tag } (s) \mid \text{Word } (w) ]$
*   **Pros**: High hit ratio; prevents thrashing.
*   **Cons**: Complex and expensive circuitry (requires parallel search/comparison logic).

#### C. Set Associative Mapping
A compromise between Direct and Associative. Cache is divided into $v$ sets, each containing $k$ lines ($k$-way associative).
*   **Logic**: $i = j \pmod v$ (where $i$ = set number).
*   **Address Structure**: $[ \text{Tag } (s-d) \mid \text{Set } (d) \mid \text{Word } (w) ]$
*   **Popularity**: 2-way ($v = m/2, k = 2$) is very common as it significantly improves hit rate over direct mapping at moderate cost.

---

### 3.2 Replacement Algorithms
Used when a new block must be loaded into a full cache (only applies to Associative and Set Associative).

1.  **Least Recently Used (LRU)**: Replace the block that has gone unused for the longest time. Most effective and popular.
2.  **First In First Out (FIFO)**: Replace the block that has been in the cache the longest (implemented as a circular buffer).
3.  **Least Frequently Used (LFU)**: Replace the block with the fewest hits using a counter.
4.  **Random**: Pick a line at random; performance is only slightly inferior to usage-based algorithms.

---

### 3.3 Write Policies
Determines when Main Memory is updated after a cache write.

*   **Write Through**:
    *   All writes go to **both** cache and main memory.
    *   *Pro*: Main memory is always valid.
    *   *Con*: High memory traffic slows down writes.
*   **Write Back**:
    *   Updates are made **only in cache**. An **Update Bit** (Dirty Bit) is set.
    *   Written to main memory only when the block is replaced.
    *   *Pro*: Faster writes, 15% of memory references are typically writes.
    *   *Con*: Portions of main memory are invalid until write-back; I/O must be careful.

> [!WARNING] Cache Coherency
> When multiple devices (e.g., I/O, other CPUs) have access to memory, cache data can become stale. Solutions include **Bus watching** (monitoring writes to main memory), **Hardware transparency**, and designating **Noncacheable memory**.

---

### 3.4 Block/Line Size
*   As block size increases, the hit ratio initially increases (Principle of Locality).
*   However, if block size becomes too large, the hit ratio decreases because:
    1.  Fewer blocks fit in the cache.
    2.  Additional words in the block are farther from the requested word and less likely to be needed soon.

---

## 4. Cache Organization & Case Studies

### 4.1 Number of Caches
*   **Multilevel Caches**:
    *   **L1**: On-chip, fastest. Eliminates external bus access.
    *   **L2**: Often on-chip now. Uses fast SRAM to match bus speed (zero-wait states).
    *   **L3**: Added for massive databases/server workloads.
*   **Unified vs. Split Caches**:
    *   **Unified**: One cache for data and instructions. Higher hit rate (automatic load balance).
    *   **Split**: Separate instruction and data caches. Essential for **Pipelining** to eliminate contention between instruction fetch and execution units.

### 4.2 Intel Cache Evolution
| Processor | Cache Feature |
| :--- | :--- |
| **80386** | No on-chip cache; external cache added via faster memory. |
| **80486** | 8KB on-chip L1 (4-way set associative, 16-byte lines). |
| **Pentium** | Two on-chip L1 caches (split data/instruction). |
| **Pentium Pro** | Back-side bus dedicated to L2 cache for higher speed. |
| **Pentium II** | L2 cache moved onto the processor chip. |
| **Pentium III**| L3 cache added off-chip. |
| **Pentium 4** | L1 instruction (12K mops), L1 data (16KB), L2 (512KB), L3 (1MB on-chip). |

### 4.3 Pentium 4 Design Reasoning
*   Decodes instructions into RISC-like **micro-ops** fixed length before L1 cache to allow superscalar pipelining.
*   Data cache is typically write-back but can be configured to write-through.
*   L2 and L3 caches are 8-way set-associative with 128-byte line sizes.

### 4.4 PowerPC Cache Examples
*   **601**: Single 32KB 8-way set associative.
*   **603**: 16KB (8KB data / 8KB instruction).
*   **G3 & G4**: 64KB L1, up to 1MB L2.
*   **G5**: 32KB instruction cache, 64KB data cache.

---

## 5. Summary / Key Takeaways
*   **Goal**: Bridge the CPU-Memory gap using the **Principle of Locality**.
*   **Trade-off**: Direct mapping is simple but prone to thrashing; associative mapping is flexible but expensive.
*   **Hierarchy**: Modern systems use multilevel split caches to support high-speed pipelined execution.
*   **Policies**: Write-back is more efficient for performance, while write-through ensures data consistency.

---
# Topic 12: Memory Management and Virtual Memory

## 1. Memory Management Fundamentals

Memory management is the task of subdividing memory to accommodate multiple processes while managing the trade-offs between swapping, overhead, and efficient usage.

*   **Uni-programming**: Memory is split into two parts: one for the Operating System (monitor) and one for the currently executing program.
*   **Multi-programming**: The "User" part of memory is sub-divided and shared among active processes.
*   **The Need for Swapping**: 
    *   **Problem**: I/O is extremely slow compared to the CPU. Even in multi-programming systems, the CPU can be idle most of the time waiting for I/O.
    *   **Solutions**: Increase main memory (expensive and leads to larger programs) or use **Swapping**.
*   **What is Swapping?**
    *   A long-term queue of processes is stored on disk.
    *   Processes are "swapped in" to main memory as space becomes available.
    *   When a process completes, it is moved out.
    *   If all processes in memory are blocked (e.g., waiting for I/O), the OS swaps a blocked process to an **intermediate queue** on disk and swaps in a ready process.

## 2. Partitioning Techniques

Partitioning involves splitting main memory into sections to allocate to processes.

### 2.1 Fixed Partitioning
*   **Concept**: Memory is divided into static partitions at boot time.
*   **Types**: 
    *   **Equal-size**: All partitions are the same size.
    *   **Unequal-size**: Partitions of varying sizes to better fit different process requirements.
*   **Issues**: **Internal Fragmentation**. If a process is smaller than the partition, the remaining space *inside* that partition is wasted.

### 2.2 Dynamic Partitioning
*   **Concept**: Partitions are created dynamically; the OS allocates exactly the required amount of memory to a process.
*   **Issues**: **External Fragmentation**. As processes are swapped in and out, memory becomes a checkerboard of used blocks and small "holes" too small to be useful.
*   **Solutions**:
    *   **Coalesce**: Join adjacent free holes into one larger hole.
    *   **Compaction**: The OS shifts processes in memory to collect all free blocks into one large block (De-fragmentation). This is a time-consuming I/O process.

| Feature | Fixed Partitioning | Dynamic Partitioning |
| :--- | :--- | :--- |
| **Partition Size** | Fixed at boot time | Variable, determined by process size |
| **Fragmentation** | **Internal** (waste inside block) | **External** (waste between blocks) |
| **Complexity** | Low | Higher (requires compaction) |

### 2.3 Relocation
*   **The Problem**: There is no guarantee that a process will load into the same place in memory after being swapped back in.
*   **Addresses**:
    *   **Logical Address**: A reference relative to the beginning of the program.
    *   **Physical Address**: The actual location in main memory.
*   **Mechanism**: The hardware performs an automatic conversion from logical to physical addresses using a **base address** (the start of the process in memory).

## 3. Paging and Segmentation

### 3.1 Simple Paging
*   Memory is split into equal-sized, small chunks called **page frames**.
*   Processes are split into equal-sized chunks called **pages**.
*   The OS maintains a list of free frames and allocates the required number to a process.
*   **Key Advantage**: A process does **not** require contiguous physical frames.
*   **Page Table**: Used by the OS to keep track of which process page is in which physical frame.

### 3.2 Segmentation
*   Unlike paging, segmentation is **visible to the programmer**.
*   Programs are divided into multiple address spaces (segments) of variable size (e.g., subroutine segment, stack segment, data segment).
*   **Advantages**:
    *   Simplifies handling growing data structures (expanding/shrinking segments).
    *   Lends itself to **sharing** (a segment can be addressed by multiple processes).
    *   Lends itself to **protection** (assigning different privileges/rights to specific logic blocks).

## 4. Virtual Memory Principles

### 4.1 Concept and Demand Paging
Virtual memory allows the execution of processes that are not completely in main memory.
*   **Real Memory**: The actual physical RAM available.
*   **Virtual Memory**: The programmer sees a much larger memory space than physically exists.
*   **Demand Paging**:
    *   Pages are brought into memory only when they are actually required.
    *   **Page Fault**: Triggered when the CPU tries to access a page not currently in memory. The OS must swap in the required page from disk.
*   **Principle of Locality**: Virtual memory works because references to data and instructions tend to cluster (Temporal and Spatial locality), preventing constant swapping.

### 4.2 Thrashing
*   **Definition**: Occurs when the system spends almost all its time swapping pages in and out rather than executing instructions.
*   **Symptoms**: Disk light is on constantly; little or no real work is being done.
*   **Solutions**:
    *   Use good page replacement algorithms (e.g., LRU).
    *   Reduce the degree of multi-programming (fewer active processes).
    *   Add more physical RAM.

## 5. Hardware and Control Structures

### 5.1 Page Table Structure
*   **Basic Mechanism**: Translates a virtual/logical address (page number + offset) into a physical address (frame number + offset).
*   **Size Problem**: In modern systems, page tables can occupy huge amounts of memory.
*   **Solutions**:
    *   **Multi-level Paging**: Uses a **Page Directory** to point to secondary page tables (e.g., Pentium II).
    *   **Inverted Page Table**: Maps physical frame numbers to virtual pages using a Hash algorithm, saving space regardless of the number of processes.

### 5.2 Translation Lookaside Buffer (TLB)
*   **The Problem**: Every virtual memory reference requires two physical memory accesses (one for the page table, one for the actual data), which increases latency.
*   **The Solution**: A **TLB** is a specialized high-speed cache for recently used page table entries.
*   **Operation**:
    *   CPU checks the TLB first.
    *   **TLB Hit**: The frame number is retrieved immediately.
    *   **TLB Miss**: The entry is retrieved from the page table in main memory and loaded into the TLB for future use.

## 6. Case Studies

### 6.1 Pentium II Memory Management
*   Provides hardware support for both segmentation and paging.
*   **Address Translation**: Uses a two-level lookup (Page Directory $\rightarrow$ Page Table $\rightarrow$ Offset).
*   **Protection**: 4 levels of privilege (0 = most protected/Kernel, 3 = least protected/User applications).
*   **Segmentation**: Each virtual address consists of a 16-bit segment ID and a 32-bit offset.

### 6.2 PowerPC Memory Management
*   **32-bit Architecture**: Uses paging with simple segmentation.
*   **64-bit Architecture**: Uses paging with more powerful segmentation.
*   **Block Address Translation**: Allows mapping large blocks of memory (e.g., graphics frame buffers) to bypass the standard paging mechanism for higher performance.

---
# Topic 13: Multiprocessor Organisation

## 1. Multiple Processor Organizations

### 1.1 Flynn's Classification
A standard taxonomy for computer architectures based on the number of instruction streams and data streams simultaneously being processed.

*   **SISD (Single Instruction, Single Data Stream)**:
    *   Single processor executes a single instruction stream to operate on data stored in a single memory.
    *   *Example*: Standard uniprocessor.
*   **SIMD (Single Instruction, Multiple Data Stream)**:
    *   Single machine instruction controls the simultaneous execution of a number of processing elements on a lockstep basis.
    *   Each processing element has an associated data memory.
    *   *Examples*: Vector processors, Array processors.
*   **MISD (Multiple Instruction, Single Data Stream)**:
    *   Sequence of data is transmitted to a set of processors, each executing a different instruction sequence.
    *   *Status*: Never commercially implemented.
*   **MIMD (Multiple Instruction, Multiple Data Stream)**:
    *   Set of processors simultaneously execute different instruction sequences on different sets of data.
    *   *Examples*: SMPs, Clusters, NUMA systems.

### 1.2 Taxonomy of Parallel Architectures
1.  **SISD** $\rightarrow$ Uniprocessor
2.  **SIMD** $\rightarrow$ Vector Processor, Array Processor
3.  **MIMD**:
    *   **Shared Memory (Tightly Coupled)**: Processors share memory and communicate via that shared memory.
        *   **Symmetric Multiprocessor (SMP)**
        *   **Nonuniform Memory Access (NUMA)**
    *   **Distributed Memory (Loosely Coupled)**: Collection of independent computers.
        *   **Clusters**

---

## 2. Symmetric Multiprocessors (SMP)

### 2.1 Characteristics
An SMP is a standalone computer system with the following characteristics:
*   **Multiple Processors**: Two or more similar processors of comparable capability.
*   **Shared Resources**: Processors share the same main memory and I/O facilities, interconnected by a bus or other internal connection scheme.
*   **Uniform Access**: Memory access time to any given area of memory is approximately the same for each processor.
*   **Shared I/O**: All processors share access to I/O devices.
*   **Symmetry**: All processors can perform the same functions.
*   **Integrated OS**: The system is controlled by an integrated OS that manages interaction between processors (scheduling, synchronization, memory management).

### 2.2 Advantages
*   **Performance**: Tasks can be executed in parallel.
*   **Availability**: Failure of a single processor does not halt the system.
*   **Incremental Growth**: User can enhance performance by adding additional processors.
*   **Scaling**: Vendors can offer a range of products based on the number of processors.

### 2.3 Organization
*   **Time Shared Bus**: Simplest form. Structure is similar to single processor system.
    *   *Pros*: Simplicity, Flexibility, Reliability.
    *   *Cons*: Performance limited by bus cycle time. Each processor needs local cache to reduce bus traffic.
*   **Multiport Memory**: Direct independent access of memory modules by each processor. Logic required to resolve conflicts.
*   **Central Control Unit**: Funnels separate data streams between independent modules. Buffers requests and performs arbitration.

---

## 3. Cache Coherence and MESI Protocol

### 3.1 The Problem
In SMPs with local caches, multiple copies of the same data can exist. If one processor updates its local cache, other copies become invalid/stale.
*   **Write Back** policy leads to inconsistency.
*   **Write Through** can also give problems unless caches monitor memory traffic.

### 3.2 Solutions
*   **Software**: Compiler and OS deal with the problem (overhead transferred to compile time). Conservative decisions may lead to inefficient cache use.
*   **Hardware**:
    *   **Directory Protocols**: Directory stored in main memory maintains information about copies. Effective for large scale systems but creates a central bottleneck.
    *   **Snoopy Protocols**: Distribute cache coherence responsibility among cache controllers. Each cache "snoops" on the bus. Suited for bus-based SMPs.

### 3.3 Snoopy Protocols
*   **Write Invalidate**: When a write is required, all other caches of the line are invalidated. The writing processor then has exclusive access. Used in Pentium II and PowerPC.
*   **Write Update**: Updated word is distributed to all other processors.

### 3.4 MESI Protocol (Write Invalidate)
Each line in the cache is marked with one of four states:
1.  **Modified (M)**: The line in the cache has been modified (different from main memory) and is available only in this cache.
2.  **Exclusive (E)**: The line in the cache is the same as main memory and is not present in any other cache.
3.  **Shared (S)**: The line in the cache is the same as main memory and may be present in other caches.
4.  **Invalid (I)**: The line in the cache does not contain valid data.

---

## 4. Clusters

### 4.1 Definition
A group of interconnected whole computers (nodes) working together as a unified resource. Creates the illusion of a single machine.
*   **Alternative to SMP**: High performance, High availability, Server applications.

### 4.2 Benefits
*   **Absolute Scalability**: Can grow far larger than SMPs.
*   **Incremental Scalability**: Can add new nodes easily.
*   **High Availability**: Failure of one node doesn't stop the cluster.
*   **Price/Performance**: Uses commodity hardware.

### 4.3 Configurations
*   **Standby Server, No Shared Disk**: One active, one passive (backup). Link for mirroring.
*   **Shared Disk**: Multiple active nodes share a RAID array.

---

## 5. Nonuniform Memory Access (NUMA)

In NUMA systems, all processors have access to all parts of memory, but:
*   **Access time differs** depending on which region of memory is accessed (local vs remote).
*   Different processors access different regions of memory at different speeds.

---

## 6. Multicore Organizations

### 6.1 Concept
*   **Core**: The "brain" (ALU, Control Unit, Registers).
*   **Multicore**: A single CPU chip containing multiple cores (e.g., Dual-core, Quad-core).

### 6.2 Chip Organization Alternatives
*   **Superscalar**: Multiple pipelines within a core.
*   **Simultaneous Multithreading (SMT)**: Hardware support for multiple threads per core.
*   **Cache Levels**:
    *   **Dedicated L1**: Separate L1-Instruction and L1-Data per core.
    *   **Dedicated L2**: Each core has its own L2 cache.
    *   **Shared L2**: All cores share a common L2 cache (allows data sharing without bus traffic).
    *   **Shared L3**: Common in modern high-performance chips.

### 6.3 Applications
*   Database servers
*   Web servers
*   Compilers
*   Multimedia applications
*   Scientific applications (CAD/CAM)