# CCA102 Computer Organisation: Topics 7-13

**Tags:** #CCA102 #ComputerArchitecture #StudyNotes #Semester2
**Source:** Wrapup 2526 Topics 7-13.pdf

---

## [[Topic 7: Central Processing Unit]]

> [!SUMMARY] Core Function
> The CPU is responsible for fetching instructions, interpreting them, fetching data, processing data (ALU), and writing data back to memory or I/O.

### 1. CPU Structure
The CPU consists of three main components connected by the **Internal CPU Bus**:
* **Arithmetic and Logic Unit (ALU):** Performs actual computation (Arithmetic & Boolean logic, Status Flags, Shifter, Complementer).
* **Control Unit (CU):** Controls the movement of data and instructions.
* **Registers:** Internal memory for temporary storage.

### 2. System Bus Connection
 The CPU connects to the rest of the computer via the **System Bus**:
* **Control Bus:** Transmits control signals.
* **Data Bus:** Carries data.
* **Address Bus:** Identifies locations in memory.

### 3. Registers
Registers are the top level of the memory hierarchy (fastest).
* **User-visible registers:** Accessible to the programmer (e.g., General Purpose Registers).
* **Control and status registers:** Used by the CU and OS (e.g., Program Counter, Instruction Register).

### 4. The Instruction Cycle
The cycle includes sub-cycles:
1.  **Fetch:** Read next instruction from memory.
2.  **Execute:** Interpret opcode and perform operation.
3.  **Interrupt:** Save state and service interrupt.
4.  **Indirect:** Additional memory access to fetch operands.

### 5. Instruction Pipelining
> [!NOTE] Analogy
> Pipelining is like an **assembly line**. While one instruction is being executed, the next is being fetched.

**Performance:**
* **Prefetch:** Fetching the next instruction during the execution of the current one.
* **Speedup Formula:**
    $$S = \frac{T_1}{T_k} = \frac{nk}{k + (n-1)}$$
    Where:
    * $n$ = number of instructions
    * $k$ = number of stages
    * $T_1$ = Time without pipeline
    * $T_k$ = Time with pipeline

**Performance Limits (Hazards):**
* **Resource Conflict:** Different stages accessing the same memory/register.
* **Data Dependencies:** Waiting for an operand.
* **Conditional Branches:** Can cause "Branch Penalty" (pipeline flush).

---

## [[Topic 8: Control Unit]]

### 1. Micro-Operations
* Program execution is a sequence of **Instruction Cycles**.
* Instruction cycles are sequences of **Sub-cycles** (Fetch, Execute, etc.).
* Sub-cycles are sequences of **Micro-operations ($\mu$Ops)**.
* $\mu$Ops are the atomic operations of the CPU.

### 2. Control Unit Functions
1.  **Sequencing:** Causing the CPU to step through $\mu$Ops in the correct order.
2.  **Execution:** Causing the performance of each $\mu$Op by issuing **Control Signals**.

### 3. Inputs and Outputs
* **Inputs:** Clock, Instruction Register (Op-code), Flags (Status), Control Signals from Bus.
* **Outputs:** Signals within CPU (data movement, ALU functions) and Signals to Control Bus (to Memory, to I/O).

### 4. Implementation Types
* **Hardwired:** (Implied comparison).
* **Micro-programmed:**
    * Uses **Control Words** stored in **Control Memory**.
    * Considered "Firmware".
    * **Vertical Micro-programming:** Uses codes that must be decoded (slower, narrower words).
    * **Horizontal Micro-programming:** Every bit connects to a control line (faster, wider words, no decoding).

---

## [[Topic 9: Interfacing and Communication]]

> [!QUESTION] Why do we need I/O Modules?
> Peripherals are slower than the CPU, have different data formats, and diverse operating modes. The I/O module acts as a bridge.

### 1. I/O Module Functions
* Control and Timing.
* CPU/Device Communication.
* Data Buffering.
* Error Detection.

### 2. I/O Techniques
| Technique | Description | CPU Utilization |
| :--- | :--- | :--- |
| **Programmed I/O** | CPU waits for the I/O module (polls status). | High (Wasteful) |
| **Interrupt-driven I/O** | I/O module interrupts CPU when ready. | Medium (Efficient) |
| **DMA (Direct Memory Access)** | Dedicated module handles transfer to memory. | Low (CPU only sets up) |

### 3. Interface Types
* **Parallel:** Multiple lines, multiple bits simultaneously (e.g., old printers).
* **Serial:** One line, bits transmitted sequentially (e.g., USB, Mouse).
    * **USB:** Simple, low cost, plug-and-play.

---

## [[Topic 10: Memory]]

### 1. Memory Classification
* **Main Memory:** CPU accessible, volatile (mostly).
* **Secondary Memory:** Storage (Disk, Tape), non-volatile.

### 2. Access Methods
* **Sequential:** Start at beginning, read in order (e.g., Tape).
* **Direct:** Jump to vicinity, then search (e.g., Hard Disk).
* **Random:** Unique address, independent access time (e.g., RAM).
* **Associative:** Retrieve based on content comparison, not address (e.g., Cache).

### 3. RAM Types
* **SRAM (Static):** Faster, more expensive, used for Cache.
* **DRAM (Dynamic):** Slower, cheaper, requires refreshing, used for Main Memory.

### 4. Error Correction
* **Hard Failure:** Permanent physical defect.
* **Soft Error:** Random, non-destructive (e.g., power issue).
* **Hamming Code:** A simple error-correcting code capable of detecting and correcting single-bit errors.

---

## [[Topic 11: Cache Memory]]

> [!INFO] Principle: Locality of Reference
> If a data block is fetched, it is likely that future references will be to that same location or nearby locations.

### 1. Structure
* **Block:** Unit of data in Main Memory.
* **Line:** Unit of storage in Cache (Tag + Block).
* Cache size ($C$) is much smaller than Memory size ($M$).

### 2. Mapping Functions
How do we map Main Memory blocks to Cache Lines?

**A. Direct Mapping**
* Each block maps to **one** specific line.
* Formula: $i = j \pmod m$
    * $i$: Cache line number
    * $j$: Memory block number
    * $m$: Number of lines in cache
* Address splits into: **Tag | Line | Word**

**B. Associative Mapping**
* Block can load into **any** line.
* Must search all tags simultaneously (complex hardware).
* Address splits into: **Tag | Word**

**C. Set Associative Mapping**
* Cache is divided into sets ($v$). Each set has $k$ lines.
* Block maps to any line within a specific **set**.
* Formula: $i = j \pmod v$
* Address splits into: **Tag | Set | Word**

---

## [[Topic 12: Memory Management & Virtual Memory]]

### 1. Swapping
* Moving processes between Main Memory and a "Backing Store" (Disk) to allow more processes than physical RAM can hold.
* **Problem:** I/O is slow.

### 2. Paging
* **Frames:** Fixed-size chunks of physical memory.
* **Pages:** Fixed-size chunks of a logical process.
* **Page Table:** Maintained by OS to map Logical Addresses (Page # + Offset) to Physical Addresses (Frame # + Offset).

### 3. Virtual Memory (Demand Paging)
* Do not load all pages of a process immediately. Bring them in only when required.
* **Page Fault:** Occurs when a requested page is not in RAM. OS must swap it in.

> [!DANGER] Thrashing
> When the OS spends more time swapping pages in and out than executing instructions. Caused by having too many processes in too little memory.

---

## [[Topic 13: Multiprocessor Organisation]]

### 1. Flynn’s Classification
| Type | Instructions | Data Streams | Example |
| :--- | :--- | :--- | :--- |
| **SISD** | Single | Single | Uniprocessor |
| **SIMD** | Single | Multiple | Vector/Array Processor (GPU) |
| **MISD** | Multiple | Single | (Theoretical/Never implemented) |
| **MIMD** | Multiple | Multiple | SMP, Clusters |

### 2. MIMD Architectures
* **Shared Memory (Tightly Coupled):** Symmetric Multiprocessors (SMP).
* **Distributed Memory (Loosely Coupled):** Clusters.

### 3. Symmetric Multiprocessors (SMP)
* Two or more similar processors.
* Share same memory and I/O.
* Connected by a bus.
* Single Integrated OS.

### 4. Multicore Computers
* **Core:** The "Brain" of the CPU.
* A single CPU chip contains multiple execution cores (Dual-core, Quad-core).
* **Cache Structure:**
    * **L1:** Usually dedicated per core (split into Instruction L1-I and Data L1-D).
    * **L2:** Can be dedicated or shared across cores.