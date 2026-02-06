# Computer Organization: Revision Notes (Topics 7-13)

**Tags:** #computer-architecture #CPU #memory #cache #multiprocessing #exam-revision
**Reference Text:** Stallings, Computer Organization & Architecture

---

## Topic 7: Central Processing Unit (CPU)

### Core Components
The CPU is responsible for fetching, interpreting, processing, and writing data. Its internal structure consists of:
* **ALU (Arithmetic and Logic Unit):** Performs computation (arithmetic and boolean logic).
* **Control Unit (CU):** Controls data/instruction movement and decoding.
* **Registers:** Internal high-speed memory.
* **Interconnections:** Internal CPU bus connecting ALU, Registers, and CU.

### The Instruction Cycle
The basic cycle involves the following sub-cycles:
1.  **Fetch:** Read next instruction from memory into CPU.
2.  **Execute:** Interpret opcode and perform the operation.
3.  **Interrupt:** Save current process state and service interrupt (if applicable).
4.  **Indirect:** Additional memory access to fetch operands (if using indirect addressing).

### Instruction Pipelining
An analogy to an assembly line where various stages of instructions are processed simultaneously.
* **Prefetch:** Fetching the next instruction during the execution of the current one.
* **Performance Limits:**
    * *Waiting:* Stages might have unequal duration.
    * *Conditional Branches:* Can invalidate the pipeline content (Branch Penalty).
    * *Resource Conflicts:* Simultaneous access to memory or registers.

> [!math] Pipeline Performance Formulas
> **Without Pipeline:** $T_1 = nk$
> **With Pipeline:** $T_k = k + (n-1)$
> **Speedup ($S$):**
> $$S = \frac{T_1}{T_k} = \frac{nk}{k + (n-1)}$$
> Where:
> * $n$ = number of instructions
> * $k$ = number of stages

---

## Topic 8: Control Unit

### Micro-Operations
Program execution is broken down into atomic operations called **micro-operations ($\mu$Ops)**.
* **Sequencing:** Causing the CPU to step through $\mu$Ops in the correct order.
* **Execution:** Causing the performance of each $\mu$Op using control signals.

### Control Signals
The Control Unit acts as the brain, receiving inputs and generating outputs.
* **Inputs:** Clock, Instruction Register (Op-code), Flags (Status), Control Bus signals (Interrupts).
* **Outputs:**
    * *Internal:* Move data between registers, activate ALU functions.
    * *External:* Control bus signals to Memory and I/O modules.

### Micro-programmed Control
Instead of hardwired logic, a **micro-program** (firmware) defines the control unit's behavior.
* **Control Word:** A binary representation where bits represent control lines.
* **Implementation Types:**
    * *Vertical:* Encoded bits (requires decoding, slower, narrower words).
    * *Horizontal:* Unencoded (1 bit per line, faster, wider words).

---

## Topic 9: Interfacing and Communication

### I/O Modules
Peripherals are not connected directly to the system bus because they are slower, have diverse formats, and proprietary operation methods. An **I/O Module** acts as a bridge.

**Functions:**
* Interface to CPU/Memory (via System Bus).
* Interface to peripherals (via tailored data links).
* Buffering (to manage speed differences).
* Error detection.

### I/O Techniques
1.  **Programmed I/O:** CPU waits for I/O module (busy-wait). Wastes CPU time.
2.  **Interrupt-driven I/O:** CPU issues command and continues work. I/O module interrupts CPU when ready.
3.  **Direct Memory Access (DMA):**
    * Used for large data transfers.
    * DMA module takes control of the system bus.
    * Transfers block of data directly to/from memory without CPU intervention (except for start and end).

### Interface Types
* **Parallel:** Multiple lines, multiple bits transferred simultaneously (faster, e.g., old printers).
* **Serial:** Single line, bits transmitted one by one (slower but cheaper cabling, e.g., USB).

---

## Topic 10: Memory

### Memory Hierarchy
Organized by speed, cost, and capacity:
1.  **CPU Registers** (Fastest, Smallest)
2.  **Cache Memory**
3.  **Main Memory**
4.  **Secondary Memory** (Disk, Tape - Slowest, Largest)

### Access Methods
* **Sequential:** Start at beginning, read in order (e.g., Tape).
* **Direct:** Jump to vicinity, then sequential search (e.g., Disk).
* **Random:** Individual unique addresses, access time independent of location (e.g., RAM).
* **Associative:** Retrieved by comparing content portions, not address (e.g., Cache).

### Error Correction
* **Hard Failure:** Permanent physical defect.
* **Soft Error:** Random, non-destructive (e.g., power supply issue).
* **Hamming Code:** A method to detect and correct errors by storing extra code bits ($K$) alongside data bits ($M$).

---

## Topic 11: Cache Memory

**Purpose:** Exploit **Locality of Reference** (CPU is likely to access the same or nearby memory locations again) to speed up access.

### Structure
* **Main Memory:** Divided into $M$ blocks.
* **Cache:** Divided into $C$ lines (where $C \ll M$).
* **Tags:** Used to identify which block of main memory is currently stored in a cache line.

### Mapping Functions
Algorithms to determine where a memory block resides in the cache.

1.  **Direct Mapping:**
    * Each memory block maps to exactly **one** specific cache line.
    * Formula: $i = j \pmod m$ (where $i$ is cache line, $j$ is memory block).
    * *Pros:* Simple. *Cons:* Fixed location causes thrashing if two active blocks map to the same line.

2.  **Associative Mapping:**
    * A memory block can load into **any** cache line.
    * Tag uniquely identifies the block.
    * *Pros:* Flexible. *Cons:* Searching all tags is expensive/slow.

3.  **Set Associative Mapping:**
    * Compromise between Direct and Associative.
    * Cache is divided into sets. A block maps to a specific set, but can use *any* line within that set.
    * Formula: $i = j \pmod v$ (where $v$ is number of sets).

---

## Topic 12: Memory Management & Virtual Memory

### Concepts
* **Swapping:** Moving processes between main memory and a secondary storage (disk) queue to free up space.
* **Thrashing:** When the OS spends more time swapping data than executing instructions (occurs when memory is over-committed).

### Paging
* **Frames:** Fixed-size chunks of physical memory.
* **Pages:** Fixed-size chunks of logical process memory.
* **Page Table:** Tracks the mapping between a process's logical pages and physical frames.
* Allows non-contiguous allocation of memory.

### Virtual Memory (Demand Paging)
* Do not load all pages of a process initially.
* **Page Fault:** Occurs when the CPU requests a page not currently in main memory. The OS must swap it in.
* Allows programs larger than physical memory to run.

---

## Topic 13: Multiprocessor Organization

### Flynn’s Classification
A taxonomy of parallel processor architectures:
1.  **SISD (Single Instruction, Single Data):** Standard uniprocessor.
2.  **SIMD (Single Instruction, Multiple Data):** Vector/Array processors. One instruction controls multiple processing elements acting on different data (lockstep).
3.  **MISD (Multiple Instruction, Single Data):** Sequence of data transmitted to a set of processors. (Theoretical/Rare).
4.  **MIMD (Multiple Instruction, Multiple Data):** Clusters, SMPs. Processors execute different instructions on different data.

### Symmetric Multiprocessors (SMP)
* Two or more comparable processors.
* Share same memory and I/O.
* Controlled by a single integrated OS.
* Uniform memory access time for all processors.

### Multicore Computers
* **Core:** The "brain" of the CPU.
* Combining multiple cores (Dual-core, Quad-core) on a single chip.
* **Cache Strategy:**
    * **L1:** Usually dedicated per core (split into Instruction and Data).
    * **L2:** Can be dedicated per core or shared across cores.