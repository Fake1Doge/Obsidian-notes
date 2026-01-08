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

# Topic 8: Control Unit

## Control Unit Basics
The Control Unit (CU) is the component responsible for managing the operations of the processor. To characterize the CU, one must define the basic elements of the processor and the functions the CU must perform.

### Functional Requirements
The Control Unit performs two basic tasks:
1.  **Sequencing:** Causing the CPU to step through a series of micro-operations in the correct sequence.
2.  **Execution:** Causing the performance of each micro-operation by producing Control Signals.

### Inputs and Outputs
For the Control Unit to perform its function, it relies on specific inputs to determine the state of the system and produces outputs to control system behavior.

**Inputs:**
* **Clock:** Used for sequencing; generally one micro-instruction (or set of parallel micro-instructions) is performed per clock cycle.
* **Instruction Register (IR):** Contains the Op-code for the current instruction, determining which micro-instructions are performed.
* **Flags:** Indicate the status of the CPU (e.g., results of previous ALU operations).
* **Control Signals (from Control Bus):** Includes signals like interrupts and acknowledgments.

**Outputs:**
* **Control Signals within CPU:**
    * Cause data movement between registers.
    * Activate specific ALU functions.
* **Control Signals to Control Bus:**
    * To Memory (e.g., Read/Write).
    * To I/O Modules.

---

## Micro-Operations
A computer executes a program by cycling through instruction cycles. Each cycle is made up of a sequence of **micro-operations**.

### Role of Registers
* **Memory Address Register (MAR):** Connected to the address bus; specifies the address for a read or write operation.
* **Memory Buffer Register (MBR):** Connected to the data bus; holds data to be written to memory or the last data read from memory.
* **Program Counter (PC):** Holds the address of the next instruction to be fetched.
* **Instruction Register (IR):** Holds the last instruction fetched.

### The Fetch Sequence
The fetch cycle reads the next instruction from memory into the IR.
1.  **Step 1:** The address of the next instruction is moved from the **PC** to the **MAR** (since MAR is the only register connected to the address bus).
2.  **Step 2:** The Control Unit issues a **READ** command. The result (instruction data) appears on the data bus and is copied into the **MBR**. In parallel, the **PC** is incremented to point to the next instruction.
3.  **Step 3:** The instruction data is moved from the **MBR** to the **IR**, freeing the MBR for further data fetches.

### Symbolic Micro-operations (Fetch Cycle)
Using symbolic notation ($t$ = time unit/clock cycle, $I$ = instruction length):
* $t_1: MAR \leftarrow (PC)$
* $t_2: MBR \leftarrow Memory$
* $t_2: PC \leftarrow (PC) + I$
* $t_3: IR \leftarrow (MBR)$

---

## Instruction Cycles

### Indirect Cycle
Used to fetch the address of operands if indirect addressing is used.
* $t_1: MAR \leftarrow (IR_{address})$
* $t_2: MBR \leftarrow Memory$
* $t_3: IR_{address} \leftarrow (MBR_{address})$

### Interrupt Cycle
At the end of an execute cycle, the processor checks for interrupts. If one occurs:
* $t_1: MBR \leftarrow (PC)$
* $t_2: MAR \leftarrow Save\_Address$
* $t_2: PC \leftarrow Routine\_Address$
* $t_3: Memory \leftarrow (MBR)$

### Execute Cycles
The micro-operations for the Execute cycle differ for every instruction.

**ADD R1, X** (Add contents of location X to Register 1)
* $t_1: MAR \leftarrow (IR_{address})$
* $t_2: MBR \leftarrow Memory$
* $t_3: R1 \leftarrow (R1) + (MBR)$

**ISZ X** (Increment and Skip if Zero)
* $t_1: MAR \leftarrow (IR_{address})$
* $t_2: MBR \leftarrow Memory$
* $t_3: MBR \leftarrow (MBR) + 1$
* $t_4: Memory \leftarrow (MBR)$
* $t_4: \text{IF } (MBR) = 0 \text{ THEN } PC \leftarrow (PC) + I$

**BSA X** (Branch and Save Address)
* $t_1: MAR \leftarrow (IR_{address})$
* $t_2: MBR \leftarrow (PC)$
* $t_3: PC \leftarrow (IR_{address})$
* $t_4: Memory \leftarrow (MBR)$
* $t_5: PC \leftarrow (PC) + I$

### Rules for Clock Cycle Grouping
1.  **Proper Sequence:** Events must happen in order (e.g., `MAR <- (PC)` must happen before `MBR <- Memory`).
2.  **Avoid Conflicts:** You cannot read from and write to the same register in the same time unit.
3.  **MBR Constraints:** `MBR <- Memory` and `IR <- (MBR)` should not occur in the same cycle.

---

## Implementation Types

### Hardwired Implementation
In a hardwired implementation, the Control Unit is a combinatorial circuit.
* **Key Characteristics:**
    * Uses a **Decoder** (takes Op-code and produces a single output).
    * Uses a **Counter** and **Timing Generator** to distinguish distinct time steps ($t_1, t_2...$).
    * Logic is unique for each Op-code.
* **Disadvantages:**
    * Complex sequencing and logic.
    * Difficult to design, test, and modify (inflexible).
    * New instructions are hard to add.

### Micro-programmed Control
Uses sequences of micro-instructions (firmware) to control complex operations. A micro-program acts as middleware between hardware and software.

#### Horizontal vs. Vertical Microprogramming

| Feature | Vertical Micro-programming | Horizontal Micro-programming |
| :--- | :--- | :--- |
| **Width** | Narrow (Compact) | Wide memory word |
| **Encoding** | Highly encoded (log2 n bits) | Little encoding (Direct control) |
| **Parallelism** | Limited ability to express parallelism | High degree of parallel operations |
| **Mechanism** | Requires a decoder to identify control lines | Every bit attached to a control line |
| **Speed** | Slower (due to decoding) | Fast execution |

---

## Microinstruction Sequencing
In a micro-programmed unit, the sequence logic must determine the address of the next micro-instruction to be executed.

### Design Considerations
* **Size of Microinstructions:** Minimizing the size of the control memory reduces cost.
* **Address Generation Time:** Must be fast enough to execute within the clock cycle.

### Addressing Techniques
The control memory address is generated based on the current micro-instruction, condition flags, and the Instruction Register (IR).

**Techniques based on Address Format:**
1.  **Two Address Fields:** The micro-instruction contains two address fields. A multiplexer selects between them or the Op-code to determine the next address.
2.  **Single Address Field:** Offers options: Address field, IR code, or Next sequential address.
3.  **Variable Format:** Uses one bit to designate format. One format allows for control signals; the other format is used for branching/addressing.

**Address Generation Types:**
* **Explicit:** The address is explicitly available in the micro-instruction (e.g., Two-field mapping).
* **Implicit:** Additional logic is required to generate the address (e.g., Mapping Op-code to address, Adding/Combining portions of addresses, Residual control).