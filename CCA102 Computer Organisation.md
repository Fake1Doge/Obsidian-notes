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


---
tags: [ #ComputerOrganization, #IO_Management, #CS ]
topics: [ "Interfacing", "DMA", "Interrupts", "RAID", "Bus Architectures" ]
---

# Topic 9: Interfacing and Communication

## 1. I/O Module Fundamentals
The I/O module acts as the critical bridge between the high-speed CPU/Memory (via the System Bus) and the slower, diverse peripheral devices.

> [!INFO] Definition
> An **I/O Module** is not just a connector; it is a logical interface that manages the flow of data, control signals, and status information between the processor and external devices.

### Generic Model
* **System Bus Side:** Connects via Address Lines, Data Lines, and Control Lines.
* **Device Side:** Connects via tailored data links to specific peripherals.

### Key Functions
1.  **Control & Timing:** Coordinates the flow of traffic between internal resources and external devices.
    * *Example Sequence:* CPU checks status $\to$ I/O module returns status $\to$ If ready, CPU requests transfer $\to$ Module gets data from device $\to$ Module transfers to CPU.
2.  **CPU Communication:**
    * **Command Decoding:** Translates signals (e.g., `READ SECTOR`) into device actions.
    * **Data:** Exchanges data via the data bus.
    * **Status Reporting:** Reports states like `BUSY` or `READY`.
    * **Address Recognition:** Identifies the unique address of the peripheral.
3.  **Device Communication:** Sends commands, status info, and data to the peripheral.
4.  **Data Buffering:** Essential for speed matching.
    * CPU/Memory transfer rates are high; Peripheral rates are low.
    * Data is buffered in the module to prevent the CPU from slowing down to the device's speed.
5.  **Error Detection:** Detects mechanical errors (paper jam) or transmission errors (parity bits).

---

## 2. I/O Techniques: The Core Triad
There are three main techniques for handling I/O operations, evolving from simple to complex to efficient.

### A. Programmed I/O
The CPU has direct control over the I/O operation including sensing status, sending read/write commands, and transferring data.

* **Mechanism:**
    1.  CPU issues an I/O command.
    2.  I/O module performs the action and sets bits in its status register.
    3.  **Busy Waiting:** The CPU must repeatedly poll (check) the status register to see if the operation is complete.
* **Addressing Modes:**
    * **Memory-Mapped I/O:** Devices and memory share a single address space. No special commands; standard `Load/Store` works. Uses up memory address space.
        * *Example:* 10 address lines support $2^{10} = 1024$ total locations for *both* memory and I/O.
    * **Isolated I/O:** Separate address spaces. Requires special commands (e.g., `IN`, `OUT`).
        * *Example:* 10 address lines support $1024$ memory locations **AND** $1024$ I/O addresses.

> [!WARNING] Bottleneck
> **Wastes CPU Time.** The processor spends nearly all its time in a wait loop checking the device status (polling), severely degrading system performance.

### B. Interrupt-Driven I/O
Overcomes the CPU waiting problem. The CPU issues a command and continues executing other useful work. The I/O module interrupts the CPU when ready.

#### The Process
1.  **CPU Viewpoint:** Issue read command $\to$ Do other work $\to$ Receive Interrupt $\to$ Save Context (PC, Registers) $\to$ Process Interrupt (Fetch data) $\to$ Restore Context.
2.  **I/O Module Viewpoint:** Receive read command $\to$ Get data from peripheral $\to$ Signal Interrupt $\to$ Wait for CPU request $\to$ Transfer data.

#### Design Issues & Solutions
* **Identification (Who interrupted?):**
    * *Multiple Lines:* Impractical for many devices.
    * *Software Poll:* CPU asks each module "Did you interrupt?" (Slow).
    * *Daisy Chain (Hardware Poll):* Interrupt Acknowledge sent down a chain of modules. The requesting module places its vector ID on the bus.
    * *Bus Arbitration (Vectored Interrupt):* Module must claim the bus (Master) before raising an interrupt.
* **Priority:** Higher priority lines/modules can interrupt lower priority service routines.

#### Intel 82C59A Interrupt Controller
A dedicated chip to manage interrupts for the CPU.
* **Capacity:** Handles 8 interrupt lines.
* **Cascadable:** Can be cascaded (Master/Slave) to handle up to 64 lines (e.g., 1 Master + 8 Slaves).
* **Operation:** Accepts external interrupts $\to$ Determines priority $\to$ Signals CPU (`INTR`) $\to$ CPU Acknowledges $\to$ Controller puts vector on data bus.

### C. Direct Memory Access (DMA)
Even with interrupts, the CPU is still involved in moving *every* word of data between I/O and memory. DMA removes the CPU from the data transfer path entirely.

* **Function:** A dedicated DMA module takes over the system bus to transfer data directly to/from memory.
* **Operation:**
    1.  CPU sends the DMA controller: Read/Write command, Device Address, **Starting Memory Address**, and **Amount of Data**.
    2.  CPU continues other work.
    3.  DMA manages the transfer.
    4.  DMA interrupts CPU only when the *entire block* is transferred.

> [!INFO] Cycle Stealing
> The DMA controller forces the CPU to suspend operation for one bus cycle to transfer one word. This is **not** an interrupt (no context switch). It merely pauses the CPU for a moment, slightly slowing execution but vastly increasing I/O throughput.

#### DMA Configurations
1.  **Single Bus, Detached:** DMA acts as a surrogate CPU. Inefficient because every word transfer requires two bus cycles (I/O $\to$ DMA, then DMA $\to$ Memory).
2.  **Single Bus, Integrated:** DMA and I/O are in one module. Uses bus only once per word.
3.  **Separate I/O Bus:** A separate bus connects I/O modules to the DMA. The DMA is attached to the system bus. Best efficiency.

---

## 3. I/O Channels
As I/O devices became more complex (e.g., 3D graphics), standard DMA wasn't enough. I/O Channels are essentially primitive processors dedicated to I/O.

* **Architecture:** The CPU instructs the I/O Channel to execute an **I/O Program** located in memory.
* **Types:**
    * **Selector Channel:** Controls multiple high-speed devices but selects only **one** at a time for transfer.
    * **Multiplexor Channel:** Handles multiple low-speed devices simultaneously (byte-interleaved).

---

## 4. External Interfaces

### FireWire (IEEE 1394)
High-performance serial bus for digital cameras, VCRs, etc.
* **Topology:** Daisy chain (up to 63 devices per port). Automatic configuration (no terminators).
* **Protocol Stack:**
    1.  **Physical Layer:** Electrical signaling, arbitration.
    2.  **Link Layer:** Packet transmission (Asynchronous or Isochronous).
    3.  **Transaction Layer:** Request-response protocol.
* **Arbitration:** Based on a tree structure. Root is arbiter. First-come-first-served with natural priority (nearest to root wins).
* **Transmission Types:**
    * *Asynchronous:* Variable data, explicit address, acknowledged (good for data integrity).
    * *Isochronous:* Fixed intervals, simplified addressing, no ACK (good for streaming video).

### Universal Serial Bus (USB)
Standard for low-cost, plug-and-play connection.
* **Topology:** Tree structure controlled by a **Root Hub**.
* **Addressing:** 7-bit address (up to 127 devices). Address 0 is used for a newly connected device until assigned a unique address.
* **Frames:** Data flows in 1ms frames.
* **Packet Types:**
    * **Control (Token):** Addressing, initiating transfer (IN, OUT, SOF).
    * **Data:** Carries the payload (up to 8192 bits).
    * **Handshake:** ACK/NAK for error handling.

---

## 5. Networking Hardware
Hardware required to bridge a computer to a network.

* **Network Interface Card (NIC):**
    * OSI Layers: Physical and Data Link.
    * Functions: Signal encoding, parallel-to-serial conversion, buffering, Media Access Control (MAC).
* **Hub (Physical Layer Device):**
    * Functions as a multi-port repeater.
    * Amplifies and repeats signals to all ports.
    * **Constraint:** Extends the *Collision Domain*. All devices connected to a hub compete for bandwidth.
* **Router (Network Layer Device):**
    * Connects different LANs/Data Links.
    * Uses logical addressing (IP).
    * **Separates Broadcast Domains.**
    * Strips data link headers/footers and re-encapsulates frames.

---

## 6. RAID (Redundant Array of Independent Disks)
A storage technology that combines multiple disk drive components into a logical unit to improve performance and/or redundancy.

### Key Characteristics
1.  Viewed by OS as a single logical drive.
2.  Data is distributed via **Striping**.
3.  Redundancy (parity/mirroring) is used for recoverability (except Level 0).

### RAID Levels

| Level      | Name               | Description                                                 | Redundancy                                             |
| :--------- | :----------------- | :---------------------------------------------------------- | :----------------------------------------------------- |
| **RAID 0** | Striping           | Data is stripped across disks. High performance (R/W).      | **None** (1 failure = total data loss).                |
| **RAID 1** | Mirroring          | Data is duplicated on two disks.                            | High (100% redundancy). Expensive ($2N$ disks).        |
| **RAID 2** | Hamming Code       | Bit-level striping. Uses Hamming code for error correction. | High overhead (requires many check disks).             |
| **RAID 3** | Bit Parity         | Bit-level striping. Single parity disk.                     | Good for large transfers.                              |
| **RAID 4** | Block Parity       | Block-level striping. Dedicated parity disk.                | Parity disk is a bottleneck for writes.                |
| **RAID 5** | Distributed Parity | Block-level striping. Parity distributed across all disks.  | Balanced performance/redundancy. No single bottleneck. |
| **RAID 6** | Dual Parity        | Two distinct parity blocks for each data block.             | Can withstand **two** simultaneous drive failures.     |


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