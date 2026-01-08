# Topic 7: Central Processing Unit

## CPU Structure
[cite_start]The CPU is responsible for fetching instructions, interpreting them, fetching data, processing data, and writing data back to memory or I/O modules[cite: 433, 434]. Its internal structure consists of four main components:

* [cite_start]**Arithmetic and Logic Unit (ALU)**: Performs the actual computation or processing of data[cite: 434].
* [cite_start]**Control Unit (CU)**: Controls the movement of data and instructions into and out of the processor, and controls the operation of the ALU[cite: 434].
* [cite_start]**Registers**: Provide internal memory storage for the CPU[cite: 434].
* [cite_start]**System Bus**: Interconnects the Control Unit, ALU, and Registers to allow data, address, and control signals to flow between them and the rest of the system[cite: 434].

---

## Register Organisation
[cite_start]Registers are the top level of the memory hierarchy and provide the fastest storage[cite: 439]. They are categorized by function.

### User-Visible vs. Control & Status Registers
> **User-Visible Registers**: These can be referenced by the programmer via machine language or assembly instructions. [cite_start]They allow the programmer to minimize main memory references[cite: 439].
> 
> **Control & Status Registers**: These are used by the Control Unit to control the operation of the processor and by privileged operating system routines to control the execution of programs. [cite_start]They are generally not visible to application programs[cite: 448].

### Key Specific Registers
[cite_start]These registers are essential for instruction execution[cite: 448, 449, 451]:

* **Program Counter (PC)**: Contains the address of the instruction to be fetched. [cite_start]It is updated by the CPU after each fetch to point to the next instruction[cite: 448].
* **Instruction Register (IR)**: Contains the instruction most recently fetched. [cite_start]The opcode and operand specifiers are analyzed here[cite: 448].
* [cite_start]**Memory Address Register (MAR)**: Contains the address of a location in memory[cite: 449].
* [cite_start]**Memory Buffer Register (MBR)**: Contains the data to be written to memory or the data most recently read from memory[cite: 449].
* [cite_start]**Program Status Word (PSW)**: A register (or set of registers) that contains condition codes (flags) such as zero, overflow, and supervisor mode status[cite: 451].

### Register Sets Comparison: Motorola MC68000 vs. Intel 8086
[cite_start][cite: 454, 455]

| Feature | Motorola MC68000 | Intel 8086 |
| :--- | :--- | :--- |
| **Register Width** | 32-bit registers | 16-bit registers |
| **Data Registers** | 8 data registers (used for data manipulation and index addressing). Allows 8, 16, & 32-bit operations. | 4 data registers (AX, BX, CX, DX). Can be general purpose but often used implicitly (e.g., Accumulator). |
| **Address Registers** | 9 address registers (contain 32-bit addresses). | 4 pointer and index registers (SP, BP, SI, DI). Sometimes used implicitly (e.g., segment offset). |
| **Design Philosophy** | Very regular instruction set; no special purpose registers. | Every register is special-purpose (though some allow general use). |

---

## The Instruction Cycle
[cite_start]The processing of an instruction consists of several distinct stages[cite: 456, 460, 465, 467, 469]:

* **Fetch Cycle**:
    * The PC holds the address of the next instruction.
    * The processor fetches the instruction from memory.
    * The PC is incremented.
    * [cite_start]The instruction is loaded into the IR[cite: 456].
* **Execute Cycle**:
    * The processor interprets the instruction in the IR.
    * [cite_start]It performs required actions such as data transfer (CPU-Memory/IO), data processing (ALU), or control alteration (Jumps)[cite: 460].
* **Interrupt Cycle**:
    * [cite_start]The processor checks for interrupts (from I/O, timers, or hardware failure)[cite: 466].
    * [cite_start]If an interrupt is pending, the processor suspends the current program, saves the context (current PC), and sets the PC to the interrupt handler address[cite: 467].
* **Indirect Cycle**:
    * If indirect addressing is used, an additional memory access is required to fetch the operands.
    * [cite_start]The address bits from the MBR are transferred to the MAR to fetch the effective address of the operand[cite: 469].

---

## Instruction Pipelining

### Concept
Pipelining is analogous to an assembly line. It improves performance by overlapping the execution of current instructions with the fetching of future instructions. [cite_start]This is known as **instruction prefetch**[cite: 478].

* **2-Stage Pipeline**: Separates the process into **Fetch** and **Execute**. While one instruction is executing, the next is being fetched. [cite_start]However, execution is usually longer than fetch, and branches can invalidate the prefetched instruction[cite: 481].
* **6-Stage Pipeline**: To gain further speedup, the pipeline is decomposed into more stages of roughly equal duration:
    1.  **Fetch Instruction (FI)**
    2.  **Decode Instruction (DI)**
    3.  **Calculate Operands (CO)**
    4.  **Fetch Operands (FO)**
    5.  **Execute Instruction (EI)**
    6.  [cite_start]**Write Operand (WO)**[cite: 482].

### Pipeline Performance Formula
[cite_start][cite: 486]

The speedup factor ($S$) from pipelining is determined by comparing the time taken without a pipeline ($T_1$) to the time taken with a $k$-stage pipeline ($T_k$) for $n$ instructions.

$$T_1 = nk$$

$$T_k = k + (n - 1)$$

$$S = \frac{T_1}{T_k} = \frac{nk}{k + (n - 1)}$$

---

## Branching
Conditional branches are a major problem for pipelines because they disrupt the sequential flow of instructions. [cite_start]Several approaches exist to handle them[cite: 487]:

* **Multiple Streams**: The pipeline replicates the initial stages to fetch both potential paths (branch taken and not taken). [cite_start]This leads to bus and register contention[cite: 488].
* **Prefetch Branch Target**: The target of the branch is prefetched in addition to the sequential instructions. [cite_start]The target is kept until the branch decision is executed[cite: 489].
* **Loop Buffer**: A small, very fast memory maintained by the fetch stage that contains the $n$ most recently fetched instructions. [cite_start]This is effective for small loops as the instructions can be fetched from the buffer instead of main memory[cite: 490].
* **Branch Prediction**: The CPU attempts to guess the outcome of a branch before it is executed to keep the pipeline full.
    * [cite_start]**Static**: Predict "never taken" or "always taken"[cite: 491].
    * [cite_start]**Dynamic**: Uses a history table to record previous outcomes and predict based on history (e.g., "Taken/Not Taken" switch)[cite: 491, 492].
    * [cite_start]**Delayed Branching**: The compiler rearranges instructions so that useful work (like an ADD) is performed while the branch is being resolved, preventing the pipeline from being flushed[cite: 494].