# Topic 7: Central Processing Unit

## CPU Structure
The CPU is responsible for fetching instructions, interpreting them, fetching data, processing data, and writing data back to memory or I/O modules. Its internal structure consists of four main components:

* **Arithmetic and Logic Unit (ALU)**: Performs the actual computation or processing of data.
* **Control Unit (CU)**: Controls the movement of data and instructions into and out of the processor, and controls the operation of the ALU.
* **Registers**: Provide internal memory storage for the CPU.
* **System Bus**: Interconnects the Control Unit, ALU, and Registers to allow data, address, and control signals to flow between them and the rest of the system.

---

## Register Organisation
Registers are the top level of the memory hierarchy and provide the fastest storage. They are categorized by function.

### User-Visible vs. Control & Status Registers
> **User-Visible Registers**: These can be referenced by the programmer via machine language or assembly instructions. They allow the programmer to minimize main memory references.

> **Control & Status Registers**: These are used by the Control Unit to control the operation of the processor and by privileged operating system routines to control the execution of programs. They are generally not visible to application programs.

### Key Specific Registers
These registers are essential for instruction execution:

* **Program Counter (PC)**: Contains the address of the instruction to be fetched. It is updated by the CPU after each fetch to point to the next instruction.
* **Instruction Register (IR)**: Contains the instruction most recently fetched. The opcode and operand specifiers are analyzed here.
* **Memory Address Register (MAR)**: Contains the address of a location in memory.
* **Memory Buffer Register (MBR)**: Contains the data to be written to memory or the data most recently read from memory.
* **Program Status Word (PSW)**: A register (or set of registers) that contains condition codes (flags) such as zero, overflow, and supervisor mode status.

### Register Sets Comparison: Motorola MC68000 vs. Intel 8086

| Feature | Motorola MC68000 | Intel 8086 |
| :--- | :--- | :--- |
| **Register Width** | 32-bit registers | 16-bit registers |
| **Data Registers** | 8 data registers (used for data manipulation and index addressing). Allows 8, 16, & 32-bit operations. | 4 data registers (AX, BX, CX, DX). Can be general purpose but often used implicitly (e.g., Accumulator). |
| **Address Registers** | 9 address registers (contain 32-bit addresses). | 4 pointer and index registers (SP, BP, SI, DI). Sometimes used implicitly (e.g., segment offset). |
| **Design Philosophy** | Very regular instruction set; no special purpose registers. | Every register is special-purpose (though some allow general use). |

---

## The Instruction Cycle
The processing of an instruction consists of several distinct stages:

* **Fetch Cycle**:
    * The PC holds the address of the next instruction.
    * The processor fetches the instruction from memory.
    * The PC is incremented.
    * The instruction is loaded into the IR.
* **Execute Cycle**:
    * The processor interprets the instruction in the IR.
    * It performs required actions such as data transfer (CPU-Memory/IO), data processing (ALU), or control alteration (Jumps).
* **Interrupt Cycle**:
    * The processor checks for interrupts (from I/O, timers, or hardware failure).
    * If an interrupt is pending, the processor suspends the current program, saves the context (current PC), and sets the PC to the start address of the interrupt handler routine.
* **Indirect Cycle**:
    * If indirect addressing is used, an additional memory access is required to fetch the operands.
    * The address bits from the MBR are transferred to the MAR to fetch the effective address of the operand.

---

## Instruction Pipelining

### Concept
Pipelining is analogous to an assembly line. It improves performance by overlapping the execution of current instructions with the fetching of future instructions. This is known as **instruction prefetch**.

* **2-Stage Pipeline**: Separates the process into **Fetch** and **Execute**. While one instruction is executing, the next is being fetched. However, execution is usually longer than fetch, and branches can invalidate the prefetched instruction.
* **6-Stage Pipeline**: To gain further speedup, the pipeline is decomposed into more stages of roughly equal duration:
    1.  **Fetch Instruction (FI)**
    2.  **Decode Instruction (DI)**
    3.  **Calculate Operands (CO)**
    4.  **Fetch Operands (FO)**
    5.  **Execute Instruction (EI)**
    6.  **Write Operand (WO)**.

### Pipeline Performance Formula

The speedup factor ($S$) from pipelining is determined by comparing the time taken without a pipeline ($T_1$) to the time taken with a $k$-stage pipeline ($T_k$) for $n$ instructions.

$$T_1 = nk$$

$$T_k = k + (n - 1)$$

$$S = \frac{T_1}{T_k} = \frac{nk}{k + (n - 1)}$$

---

## Branching
Conditional branches are a major problem for pipelines because they disrupt the sequential flow of instructions. Several approaches exist to handle them:

* **Multiple Streams**: The pipeline replicates the initial stages to fetch both potential paths (branch taken and not taken). This leads to bus and register contention.
* **Prefetch Branch Target**: The target of the branch is prefetched in addition to the sequential instructions. The target is kept until the branch decision is executed.
* **Loop Buffer**: A small, very fast memory maintained by the fetch stage that contains the $n$ most recently fetched instructions. This is effective for small loops as the instructions can be fetched from the buffer instead of main memory.
* **Branch Prediction**: The CPU attempts to guess the outcome of a branch before it is executed to keep the pipeline full.
    * **Static**: Predict "never taken" or "always taken".
    * **Dynamic**: Uses a history table to record previous outcomes and predict based on history (e.g., "Taken/Not Taken" switch).
    * **Delayed Branching**: The compiler rearranges instructions so that useful work (like an ADD) is performed while the branch is being resolved, preventing the pipeline from being flushed.