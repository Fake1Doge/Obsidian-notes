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

