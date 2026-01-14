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


# Topic 9: Interfacing and Communication

## 1. I/O Module Fundamentals

### The Need for I/O Modules
Peripherals (External Devices) are not directly connected to the system bus for several critical reasons:
1.  **Variety:** Peripherals vary greatly in methods of operation.
2.  **Data Transfer Rates:** Most peripherals are much slower than the CPU and RAM.
3.  **Data Formats:** Peripherals often use different data formats and word lengths than the computer.

> [!INFO] Role of the I/O Module
> The I/O module acts as the "interface" or bridge. It isolates the CPU/Memory from the specific details of the peripheral device.

### Major Functions
The I/O module is responsible for:
* **Control & Timing:** Coordinating the flow of traffic between internal resources and external devices.
* **CPU Communication:**
    * *Command Decoding:* Accepting commands (e.g., READ SECTOR) from the CPU.
    * *Data:* Exchanging data between the CPU and the module.
    * *Status Reporting:* Reporting device states (BUSY, READY, ERROR).
    * *Address Recognition:* Recognizing the unique address for each peripheral.
* **Device Communication:** Handling commands, status, and data with the peripheral.
* **Data Buffering:** Essential for managing speed mismatches (transfer rates into the module can be high, while output to the device is slow).
* **Error Detection:** Reporting transmission errors (parity bits) or mechanical errors (paper jam).

### Structure
* **External Interface:** Connects to the peripheral (Data, Status, Control signals).
* **Internal Interface:** Connects to the System Bus (Address Lines, Data Lines, Control Lines).
* **Registers:**
    * *Data Registers:* Buffer data.
    * *Status/Control Registers:* Store current state and configuration.

---

## 2. I/O Techniques (The Big Three)

### A. Programmed I/O
The CPU has direct control over the I/O operation including sensing status, sending commands, and transferring data.

* **Process:**
    1.  CPU issues an I/O command.
    2.  CPU enters a wait loop, repeatedly checking (polling) the device status.
    3.  Once the device is "Ready," the CPU transfers the data.
* **Drawback:** Severe waste of CPU time ("Busy-waiting"). The processor is tied up checking status and cannot do other work.

### B. Interrupt-Driven I/O
Designed to overcome the CPU waiting problem.

* **Process:**
    1.  CPU issues a read command to the I/O module.
    2.  **CPU continues with other work.**
    3.  I/O module interrupts the CPU when data is ready.
    4.  CPU pauses current execution, saves context (PC, Registers), and processes the interrupt.
    5.  CPU reads the data and then restores the context to resume original work.
* **Benefit:** Greatly improves CPU utilization by removing the wait loop.

### C. Direct Memory Access (DMA)
Used when large amounts of data need to be moved. It removes the CPU from the data transfer path almost entirely.

* **Concept:** A dedicated DMA Controller module takes over the system bus to transfer blocks of data directly between the I/O device and Memory.
* **The Workflow:**
    1.  CPU tells DMA controller: Read/Write, Device Address, Starting Memory Address, Amount of Data.
    2.  CPU goes back to other work.
    3.  DMA handles the entire transfer.
    4.  DMA interrupts the CPU only when the *entire* block transfer is complete.

#### Transfer Modes
> [!NOTE] DMA Efficiency
> The CPU is only involved at the beginning (setup) and the end (interrupt).

* **Cycle Stealing:** The DMA controller takes control of the bus for a single bus cycle to transfer one word of data. The CPU is suspended just before it accesses the bus. This slows the CPU down slightly but is not a full context switch (Interrupt).
* **Burst Mode:** (Standard definition) The DMA holds the bus for a continuous block of data, preventing CPU access until the whole block is done.
* **Fly-by Transfer:** (Standard definition) Data is transferred directly between the source and destination in a single bus cycle without passing through the DMA controller's internal registers, increasing speed.

---

## 3. Comparison of I/O Techniques

| Technique | CPU Involvement | Hardware Complexity | Efficiency / Best Use Case |
| :--- | :--- | :--- | :--- |
| **Programmed I/O** | **High** (Busy-wait) | Low | Very low. Good for simple, low-speed devices where hardware cost must be minimized. |
| **Interrupt-Driven** | **Medium** (Setup + ISR) | Medium | Efficient for moderate data rates (e.g., Keyboard, Mouse). Overhead of context switching limits high-speed transfers. |
| **DMA** | **Low** (Setup + Finish) | High (Requires DMA Controller) | **High.** Best for block transfers (Disk Drives, Network Packets) where speed is critical. |

---

## 4. Interrupt Design Issues

### Device Identification
When an interrupt occurs, the CPU must determine which module issued it.
1.  **Multiple Interrupt Lines:** Impractical to have a specific line for every device.
2.  **Software Poll:** CPU jumps to a generic ISR and polls every module to see who is ready. (Slow).
3.  **Daisy Chain (Hardware Poll):** An "Interrupt Acknowledge" signal is sent down a chain of modules. The requesting module blocks the signal and places its vector on the bus.
4.  **Vectored Interrupt:** The module places a unique ID (Vector) on the data bus, which the CPU uses to jump directly to the specific handler routine.

### Bus Arbitration
* **Daisy Chain:** Priority is determined by the physical order of devices on the chain.
* **Bus Master/Arbitration:** A module must claim control of the bus (become Master) before raising an interrupt (e.g., PCI, SCSI).

---

## 5. Bus Communication

### Synchronous vs. Asynchronous
* **Synchronous:** Events are determined by a clock signal. Operations occur at fixed time slots.
* **Asynchronous:** Events depend on the occurrence of a previous event. Uses "Handshaking" (Request/Acknowledge) signals to coordinate data transfer.
    * *Note:* FireWire (IEEE 1394) uses split transactions and supports both Asynchronous (variable data, addressed) and Isochronous (fixed rate, real-time) transmission.

---

## 6. Summary/Key Takeaways

* **I/O Modules** are required to bridge the speed and format gap between the CPU and Peripherals.
* **Programmed I/O** is simple but wastes CPU cycles waiting for devices.
* **Interrupts** allow the CPU to multitask, processing I/O only when data is ready.
* **DMA** is the standard for high-speed data transfer, allowing the CPU to delegate memory operations to a dedicated controller.
* **Cycle Stealing** allows DMA to use the bus without a full CPU context switch.
* **RAID** (Redundant Array of Independent Disks) uses striping (performance) and parity/mirroring (redundancy) to manage multiple disks as a single logical unit.


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