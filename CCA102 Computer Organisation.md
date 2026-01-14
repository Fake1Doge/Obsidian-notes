# Topic 7: Central Processing Unit

## 1. CPU Structure
The CPU is responsible for fetching instructions, interpreting them, fetching data, processing data, and writing data. It consists of three major internal components connected by an **Internal CPU Bus**:

* **Arithmetic and Logic Unit (ALU)**: Performs the actual computation (arithmetic and boolean logic operations), status flagging, and shifting.
* **Control Unit (CU)**: Controls the movement of data and instructions into and out of the CPU and controls the operation of the ALU.
* **Registers**: Internal CPU memory used for temporary storage and high-speed access.

> [!INFO] System Bus Connection
> The CPU connects to the rest of the computer (Memory and I/O) via the **System Bus**, which is divided into:
> * **Data Bus**: Transfers actual data and instructions.
> * **Address Bus**: Identifies the location of data/instructions.
> * **Control Bus**: Transmits command signals (read, write, interrupt).

---

## 2. Register Organization
Registers are at the top of the memory hierarchy (fastest). They function as working space for the CPU.

### User-Visible Registers
These can be referenced by assembly-level instructions to minimize main memory references.
* **General Purpose**: Can be used for data or addressing (pointers, counters).
* **Data Registers**: Used only to hold data (e.g., Accumulator). Cannot be used for operand address calculation.
* **Address Registers**:
    * *Segment Pointer*: Base address of the segment.
    * *Index Register*: Used for indexed addressing.
    * *Stack Pointer*: Points to the top of the stack (implicit addressing).
* **Condition Codes (Flags)**: Bits set by the CPU hardware as the result of operations (e.g., Positive, Zero, Overflow).

### Control & Status Registers
Used by the Control Unit and OS to control CPU operation. usually not visible to user programs.

| Register | Full Name | Function |
| :--- | :--- | :--- |
| **PC** | Program Counter | Contains the address of the *next* instruction to be fetched. |
| **IR** | Instruction Register | Contains the instruction currently being executed (opcode). |
| **MAR** | Memory Address Register | Contains the address of a memory location to read/write. |
| **MBR** | Memory Buffer Register | Contains the data to be written to memory or the data read from memory. |
| **PSW** | Program Status Word | A set of flags (Sign, Zero, Carry, Equal, Overflow, Interrupt Enable, Supervisor Mode). |

> [!SUMMARY] Supervisor Mode (Kernel Mode)
> A privileged mode used by the Operating System. It allows execution of privileged instructions (e.g., I/O control, memory management) that are not available to user programs.

### Case Study: Motorola MC68000 vs. Intel 8086

| Feature | Motorola MC68000 | Intel 8086 |
| :--- | :--- | :--- |
| **Architecture** | 32-bit | 16-bit |
| **Philosophy** | Regular instruction set; General Purpose focus. | Special Purpose focus; specialized registers. |
| **Data Registers** | 8 (D0-D7) for data manipulation. | 4 (AX, BX, CX, DX) - AX is Accumulator, BX Base, etc. |
| **Address Registers** | 9 (A0-A7 + Stack Pointers). | 4 Pointers/Index (SP, BP, SI, DI) + 4 Segment Registers (CS, DS, SS, ES). |
| **Flexibility** | High (fewer constraints on register usage). | Lower (implicit references to specific registers). |

---

## 3. The Instruction Cycle
The processing of an instruction is divided into sub-cycles.

### The Sub-Cycles
1.  **Fetch**: Read the next instruction from memory into the CPU.
    * PC address moved to MAR -> Memory Read -> Result to MBR -> Move to IR -> Increment PC.
2.  **Execute**: Interpret opcode and perform the operation (ALU, I/O, Data Transfer).
3.  **Interrupt**: Check for enabled interrupts. If pending, save current state and switch to interrupt handler.
4.  **Indirect**: If the instruction uses indirect addressing, this cycle accesses memory to fetch the effective address of the operand.

### Interrupts
Mechanisms for other modules to interrupt normal processing.
* **Types**: Program (overflow/error), Timer (multitasking), I/O (controller signal), Hardware Failure (parity error).
* **Handling Process**:
    1.  Suspend execution of current program.
    2.  **Save Context**: Save PC and PSW (often to the stack).
    3.  Load PC with the address of the Interrupt Handler.
    4.  Process interrupt.
    5.  Restore context and resume execution.

### Instruction Cycle Flow (State Diagram Summary)
1.  **Instruction Fetch**
2.  **Instruction Operation Decoding**
3.  **Operand Address Calculation** (If indirect, perform **Indirect Cycle**)
4.  **Operand Fetch**
5.  **Data Operation** (Execute)
6.  **Operand Store**
7.  **Interrupt Check** (If interrupt, perform **Interrupt Cycle**)
8.  Return to Step 1.

---

## 4. Instruction Pipelining
Pipelining is analogous to an assembly line. It increases throughput by overlapping the execution of consecutive instructions.

### The 6-Stage Pipeline
1.  **FI**: Fetch Instruction
2.  **DI**: Decode Instruction
3.  **CO**: Calculate Operands (Effective Address)
4.  **FO**: Fetch Operands
5.  **EI**: Execute Instruction
6.  **WO**: Write Operand

### Performance Formulas
Let $n$ be the number of instructions and $k$ be the number of stages.

**Time to execute without pipeline:**
$$T_1 = n \times k$$

**Time to execute with pipeline:**
$$T_k = k + (n - 1)$$
*(The first instruction takes $k$ cycles to fill the pipe; subsequent instructions finish every 1 cycle).*

**Speedup Factor ($S$):**
$$S = \frac{T_1}{T_k} = \frac{n \times k}{k + (n - 1)}$$

### Pipeline Hazards & Limitations
Pipelining does not perfectly multiply speed by $k$ due to:
1.  **Stage Duration**: Not all stages take equal time (pipeline moves at the speed of the slowest stage).
2.  **Overhead**: Data movement between buffers and control logic.
3.  **Resource Conflicts**: Multiple stages trying to access memory simultaneously (e.g., FI and FO).
4.  **Data Dependencies**: An instruction depends on the result of the previous one.
5.  **Branch Penalty**: Conditional branches disrupt the flow. If the pipeline fetches the wrong instructions, they must be flushed.

### Branching Solutions
Strategies to minimize the performance penalty of conditional branches:

* **Multiple Streams**: Replicate the initial pipeline stages to fetch *both* possible paths. (Expensive, leads to bus contention).
* **Prefetch Branch Target**: When a branch is recognized, prefetch the target instruction in addition to the next sequential one. Keep it until the branch decision is made.
* **Loop Buffer**: A small, very fast memory containing the most recently fetched instructions. Great for small loops; functions like a mini-cache.
* **Branch Prediction**:
    * *Static*: Predict "Never Taken" (assume standard flow) or "Always Taken" (>50% of branches are taken).
    * *Dynamic*: Uses a **Branch History Table** or state bits (Taken/Not Taken switch) to predict based on recent execution history.
* **Delayed Branching**: The CPU automatically rearranges instructions (with compiler support). Useful instructions that do not affect the branch are moved into the "delay slot" immediately following the branch, so the CPU stays busy while the branch resolves.

---

## 5. Summary / Key Takeaways
* **Registers** are the fastest storage; User-Visible registers (General, Data, Address) are for code, while Control registers (PC, IR, PSW) manage the CPU state.
* The **Instruction Cycle** is dynamic; it adapts to interrupts and indirect addressing needs.
* **Pipelining** improves performance by parallelizing instruction stages, but it is limited by **Hazards** (Structural, Data, Control).
* **Branch Prediction** and **Loop Buffers** are critical architectural optimizations to maintain pipeline efficiency in the face of non-sequential code execution.
* **Speedup Calculation**: Remember that ideal speedup approaches $k$ (number of stages) as $n$ (instructions) becomes very large.

# Topic 8: Control Unit

## 1. Control Unit Overview

The **Control Unit (CU)** is the nerve center of the processor, responsible for managing the execution of instructions by generating control signals.

> [!INFO] Functional Requirements
> The Control Unit must perform two basic tasks:
> 1.  **Sequencing:** Causing the CPU to step through a series of micro-operations in the correct sequence based on the program logic.
> 2.  **Execution:** Causing the performance of each individual micro-operation by generating specific control signals.

### Inputs & Outputs
To perform its function, the CU relies on specific inputs to determine the state of the system and produces outputs to control behavior.

**Inputs:**
* **Clock:** A repetitive sequence of pulses used to measure the duration of micro-operations.
* **Instruction Register (IR):** Contains the Op-code of the current instruction, which determines which micro-instructions are performed.
* **Flags:** Indicate the status of the CPU and results of previous ALU operations.
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
* **Pros/Cons:** Simplifies the design and allows for flexibility (can update instruction sets by changing firmware). However, it is generally slower than hardwired because of the memory access time. Preferred for **CISC** architectures.

### Comparison: Hardwired vs. Micro-programmed

| Feature | Hardwired Control | Micro-programmed Control |
| :--- | :--- | :--- |
| **Speed** | Fast (Direct hardware execution) | Slow (Requires control memory access) |
| **Complexity** | Complex (Combinatorial logic) | Simple (Systematic software-like structure) |
| **Flexibility** | Inflexible (Difficult to modify) | Flexible (Easy to update firmware) |
| **Cost** | Expensive (Design & testing complexity) | Cheaper (Regular memory structure) |
| **Architecture** | Common in RISC | Common in CISC |

---

## 4. Micro-programmed Control Details

### Horizontal vs. Vertical Micro-instructions

| Feature | Horizontal Micro-programming | Vertical Micro-programming |
| :--- | :--- | :--- |
| **Word Width** | Wide (Long control words, e.g., 40-100 bits) | Narrow (Short control words, e.g., 16-40 bits) |
| **Encoding** | Little to no encoding (Unpacked). | Highly encoded (Packed). |
| **Parallelism** | High degree of parallel operations possible. | Limited ability to express parallelism. |
| **Logic** | Simple control logic (Direct mapping to signals). | Complex control logic (Requires decoders). |

### Sequencing Techniques
Determining the address of the next micro-instruction to execute.
1.  **Two Address Fields:** The micro-instruction contains two explicit address fields. A multiplexer selects one based on status flags. Simple but requires a wider word.
2.  **Single Address Field:** Contains one address field. The "next" address is chosen from: the Address Field, the IR code (mapping), or the Next Sequential Address.
3.  **Variable Format:** Uses a bit to designate the format. One format is for control signals; the other is for branching/sequencing.

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