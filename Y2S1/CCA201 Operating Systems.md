---
title: CCA201 Operating Systems
course_code: CCA201
course_name: Operating Systems
semester: Y2S1
tags:
  - operating-systems
  - systems-programming
  - memory-management
  - kernel
  - concurrency
  - comp-sci
aliases:
  - CCA201
  - Operating Systems
---

# Chapter 1: Introduction to Operating Systems & Computer System Architecture

## 1.1 Fundamentals of Operating Systems

### 1.1.1 What is an Operating System?
A computer system consists of two primary operational domains: **Hardware** (tangible physical and electronic components such as the Central Processing Unit, Random Access Memory, storage drives, and peripheral controllers) and **Software** (programs, data structures, and instruction sets executed by the processor).

> [!info] Definition: Operating System (OS)
> An **Operating System** is the chief software component of a computer system. It acts as an intermediary between user applications and the raw underlying hardware, responsible for managing, virtualizing, and arbitrating all hardware resources (processing time, main memory, physical storage, and I/O devices) while enforcing system protection, security, and access control.

```mermaid
flowchart TD
    subgraph UsersApplications["User & Application Tier"]
        U1["End Users / Operators"]
        App1["Application Programs (Compilers, Web Browsers, Databases)"]
    end

    subgraph OperatingSystemTier["Operating System Tier (Chief Software Component)"]
        direction TB
        UI["User Interface (CLI / GUI)"]
        subgraph Subsystems["Core Subsystem Managers"]
            direction LR
            MM["Memory<br/>Manager"]
            PM["Processor<br/>Manager"]
            DM["Device<br/>Manager"]
            FM["File<br/>Manager"]
        end
        NM["Network Manager (Distributed / Cloud Services)"]
    end

    subgraph HardwareTier["Hardware Tier (Physical Infrastructure)"]
        CPU["Central Processing Unit (CPU)"]
        RAM["Main Memory (RAM)"]
        Storage["Secondary Storage (SSD / HDD)"]
        IO["I/O Peripherals & Network Interfaces"]
    end

    UsersApplications --> UI
    UI --> Subsystems
    Subsystems <--> NM
    Subsystems --> HardwareTier
```

The operating system executes two primary, non-negotiable responsibilities:
1. **Resource Arbitration:** Enforcing policies that resolve:
   - *Who* gets access to each system resource.
   - *When* access is granted.
   - *How much* time or capacity is allocated.
2. **Resource Allocation and Deallocation:** Dynamically reserving physical resources upon valid request and reclaiming them cleanly when operations complete or terminate.

---

## 1.2 Operating System Subsystem Architecture

Modern operating systems are constructed from modular subsystem managers. Each manager performs a specialized role while interacting continuously with neighboring managers to maintain system integrity.

```mermaid
flowchart LR
    subgraph CoreManagers["The Four Core Subsystem Managers"]
        direction TB
        MemMgr["1. Memory Manager<br/>• RAM Allocation & Tracking<br/>• Memory Protection<br/>• Address Translation"]
        ProcMgr["2. Processor Manager<br/>• CPU Scheduling<br/>• Process State Transitions<br/>• Multiprogramming"]
        DevMgr["3. Device Manager<br/>• Peripheral Allocation<br/>• Device Drivers & Ports<br/>• Buffering & Spooling"]
        FileMgr["4. File Manager<br/>• File System Structure<br/>• Access Rights Enforcement<br/>• Secondary Storage Mapping"]
    end

    subgraph PeripheralManagers["Coordination & Interface Layers"]
        NetMgr["Network Manager<br/>(Coordinates Shared Network Resources)"]
        UserInt["User Interface<br/>(CLI & GUI Command Interpretation)"]
    end

    CoreManagers <===> NetMgr
    CoreManagers <===> UserInt
```

### 1.2.1 Main Memory Manager
Main Memory (Random Access Memory, RAM) is the high-speed workspace where instructions and active data must reside for the CPU to execute them.
- **Volatile Storage:** RAM requires an uninterrupted electrical current to maintain its state; disconnecting power results in instantaneous data loss.
- **Subsystem Responsibilities:**
  1. *Validation:* Checks the validity and legality of every incoming memory request from active processes.
  2. *Allocation & Mapping:* Assigns contiguous or virtual address blocks to incoming programs.
  3. *Protection:* Strictly guards the memory block assigned to the operating system kernel from unauthorized user-space mutation.
  4. *Deallocation & Reclaiming:* Reclaims allocated memory upon job termination and compacts/rearranges fragmented areas.

> [!note] Firmware and Read-Only Memory (ROM)
> In contrast to volatile RAM, **Read-Only Memory (ROM)** is permanent, non-volatile memory embedded on the motherboard. ROM stores the system firmware (BIOS / UEFI), which contains the initialization instructions executed immediately upon powering on the computer to locate, verify, and load the operating system bootloader from secondary storage into RAM.

### 1.2.2 Processor Manager
The Processor Manager controls access to the Central Processing Unit (CPU) and tracks the lifecycle of every active program in execution (a **process**).
- **Process Traffic Controller:** When a process completes its task, blocks for an I/O operation, or exhausts its allocated execution time slice (quantum), the Processor Manager interrupts execution, preserves state registers, reclaims the CPU, and assigns it to the next ready process.
- **Multicore & Multiprocessor Coordination:** On modern multicore processors, the Processor Manager orchestrates load balancing, thread affinities, and synchronization to avoid cache thrashing and deadlocks.

### 1.2.3 Device Manager
The Device Manager monitors, configures, and interfaces with all physical peripherals connected to the computer system (monitors, keyboards, storage disk controllers, printers, USB buses, and network cards).
- **Subsystem Responsibilities:**
  1. Identifies each peripheral device uniquely and attaches appropriate device drivers.
  2. Implements device allocation policies (dedicated allocation, shared allocation, or virtual spooling).
  3. Initiates device operations and monitors status registers and hardware interrupts.
  4. Reclaims devices upon process completion.

### 1.2.4 File Manager
The File Manager maintains the logical structure, hierarchical directories, and physical storage records for every file on the system (data files, compiled binaries, shell scripts, and system utilities).
- **Subsystem Responsibilities:**
  1. *Access Permissions:* Enforces strict access controls (read-only, read-write, execute, append, delete).
  2. *Storage Allocation:* Determines how file bytes are organized onto physical storage blocks (contiguous, linked, or indexed block allocation).
  3. *Cataloging & Indexing:* Maintains directories, file allocation tables, inodes, and metadata pointers for rapid retrieval.

### 1.2.5 Network Manager & User Interface
- **Network Manager:** Required in networked and distributed operating systems. Coordinates communications across local and wide-area networks, enabling authorized sharing of distributed memory, remote CPUs, network storage (NAS/SAN), databases, and printers.
- **User Interface (UI):** Direct user-facing component that accepts commands and translates them into system requests:
  - **Command-Line Interface (CLI):** Text-driven terminal shell requiring precise syntax, flags, and keyword commands. Offers high automation capability through scripting.
  - **Graphical User Interface (GUI):** Visual desktop environment with windows, icons, menus, and pointer devices (WIMP). Lowers cognitive barrier for non-technical users.

---

## 1.3 Subsystem Cooperation: A Complete Interaction Lifecycle

No operating system manager functions in isolation. A single routine user action triggers a coordinated cascade across all subsystem managers.

```mermaid
sequenceDiagram
    autonumber
    actor User as User / Mouse
    participant DM as Device Manager
    participant UI as User Interface
    participant PM as Processor Manager
    participant FM as File Manager
    participant MM as Memory Manager
    participant CPU as CPU Execution Core
    participant Disk as Secondary Storage

    User->>DM: Double-clicks application icon on desktop
    DM->>UI: Dispatches hardware mouse interrupt & coordinates
    UI->>PM: Submits request to launch executable program
    PM->>PM: Acknowledges request (displays waiting/loading cursor)
    PM->>MM: Checks if program binary already resides in RAM
    alt Program Not In Main Memory
        MM->>FM: Requests program file location on disk
        FM->>Disk: Calculates block cluster address on storage
        Disk-->>DM: Reads binary stream from physical disk sectors
        DM-->>MM: Streams raw executable bytes to Memory Manager
    end
    MM->>MM: Allocates contiguous/virtual memory space & records base addresses
    MM->>PM: Signals memory allocation ready for execution
    PM->>CPU: Schedules process thread & loads program counter
    CPU->>CPU: Executes application logic & user instructions
    alt User Modifies and Saves File
        CPU->>FM: Dispatches file write request
        FM->>DM: Transmits write payload and block coordinates
        DM->>Disk: Flushes data blocks to persistent storage
    end
    CPU->>PM: Process terminates or yields execution
    PM->>MM: Deallocates memory space and updates free lists
    PM->>UI: Updates display window to render completed status
```

---

## 1.4 Evolution of Computing Hardware and Operating Systems

Operating system architectures have evolved in direct synchronization with underlying semiconductor breakthroughs and hardware paradigms.

### 1.4.1 Moore's Law and Hardware Classifications
In 1965, Gordon Moore posited that the number of transistors packed onto an integrated circuit would double approximately every 18 to 24 months, with per-component cost declining exponentially. This exponential trajectory transformed computing systems across five operational tiers:

| Computing Platform | Typical Operating Systems | Primary Architectural Focus |
| :--- | :--- | :--- |
| **Supercomputers** | Linux, UNIX custom microkernels | Extreme parallel throughput, petaflop processing, scientific MPI |
| **Mainframe Computers** | IBM z/OS, Linux, UNIX | High-volume I/O, enterprise transaction consistency (ACID), zero downtime |
| **Workstations & Servers** | Linux, Windows Server, macOS Server, UNIX | Multi-tenant virtualization, containerization, microservice orchestration |
| **Laptops & Desktops** | Microsoft Windows, macOS, Linux distributions | Responsive GUI, interactive multimedia, user-friendly device plug-and-play |
| **Mobile & Embedded / IoT** | Android, iOS, FreeRTOS, Embedded Linux | Power conservation, minimal memory footprints, real-time sensor processing |

### 1.4.2 Historical Timeline of Operating Systems

```mermaid
timeline
    title Evolution of Operating Systems & Hardware
    1940s : First Generation : Main console operation : Plugboards & vacuum tubes : Manual register inspection : Grace Hopper's first computer bug (moth in relay)
    1950s : Second Generation : Transistors & magnetic tapes : Human machine operators : Batch processing introduced : I/O buffers and record blocking to reduce CPU idle time
    1960s : Third Generation : Integrated Circuits (ICs) : Multiprogramming (passive interrupts & active time-slicing) : Slower I/O vs faster CPU discrepancy managed
    1970s : Fourth Generation (Early) : Virtual memory systems developed : Overcomes physical RAM limitations : Commercial banking automation reaches public terminals
    1980s : Fourth Generation (Mid) : VLSI & Microprocessors : Personal Computers (PCs) flourish : Firmware on motherboards : Multiprocessing (multi-CPU) architectures
    1990s : The Networked Era : World Wide Web (WWW) emerges : Internet-connected operating systems : Heightened network security demands : Multimedia computing
    2000s : Modern Virtualization : Hypervisors & Virtual Machines (VMs) : Multicore processors (dual/quad core chips) : Shared cache and memory arbitration
    2010s-Present : Cloud & Pervasive Systems : Mobile smartphone ubiquity (iOS, Android) : Distributed cloud clusters : Extreme multicore scalability : IoT & RTOS
```

> [!example] Historical Note: Dr. Grace Hopper and the First Computer Bug
> In 1947, while working on the Harvard Mark II electromechanical computer, Dr. Grace Hopper and her engineering team investigated an unexplained machine stoppage. Inside relay #70 of Panel F, they discovered a moth trapped between the contact points. They taped the moth into their logbook with the entry: *"First actual case of bug being found."* This incident popularized the terms **debugging** and **bug** in software engineering.

---

## 1.5 Taxonomy and Classifications of Operating Systems

Operating systems are categorized based on two primary operational criteria: **Response Time** (the latency elapsed between receiving an input stimulus and producing an output reaction) and the **Method of Data Entry**.

```mermaid
flowchart TD
    subgraph OSTypes["Operating System Classifications"]
        direction TB
        Batch["1. Batch Systems<br/>• Non-interactive grouping<br/>• Metric: Throughput<br/>• Turnaround: Hours to days"]
        Interactive["2. Interactive Systems<br/>• Direct terminal engagement<br/>• Time-sliced CPU sharing<br/>• Turnaround: Seconds to minutes"]
        RTOS["3. Real-Time Systems (RTOS)<br/>• Deterministic deadlines<br/>• Time-critical control<br/>• Turnaround: Microseconds to milliseconds"]
        Hybrid["4. Hybrid Systems<br/>• Mixed workload<br/>• Interactive foreground<br/>• Batch background execution"]
        Embedded["5. Embedded Systems<br/>• Dedicated microcontrollers<br/>• Lean footprint, ROM kernel<br/>• Non-interchangeable software"]
    end
```

### 1.5.1 Batch Systems
- **Mechanics:** User jobs are collected into batches and submitted as a single bundle. The operating system processes jobs sequentially without user interaction.
- **Performance Metric:** Measured by **throughput** (the total number of jobs completed per unit of time) rather than immediate response latency.
- **Turnaround:** Ranging from hours to days. Ideal for bulk payroll calculations, end-of-month financial reconciliations, and batch billing runs.

### 1.5.2 Interactive Systems
- **Mechanics:** Designed for direct, conversational interaction between users and running programs via terminals or GUIs.
- **Architecture:** The CPU shares its processing time across multiple concurrent jobs using round-robin time slicing, providing rapid turnaround for iterative program authoring and debugging.
- **Turnaround:** Fractions of a second to a few minutes.

### 1.5.3 Real-Time Operating Systems (RTOS)
Used in mission-critical, time-sensitive environments where the **predictable timeliness** of a computation is as critical as its logical correctness.
- **Hard Real-Time Systems:** Missing an execution deadline constitutes a catastrophic system failure (e.g., flight control fly-by-wire avionics, nuclear reactor monitoring, missile guidance systems, and medical defibrillators).
- **Soft Real-Time Systems:** Missing a deadline results in degraded performance or quality of service, but does not cause total physical destruction (e.g., multimedia video streaming, telecommunications packet routing, and industrial automated manufacturing sensors).

### 1.5.4 Hybrid and Embedded Systems
- **Hybrid Operating Systems:** Combines interactive and batch capabilities. Supports interactive user sessions in the foreground while executing compute-heavy batch workloads in the background during idle CPU cycles.
- **Embedded Operating Systems:** Specialized, lean operating systems burned directly into non-volatile ROM/Flash chips embedded within consumer and industrial appliances (automobiles, elevators, IoT edge nodes, and smart thermostats). Characteristics include a minimal microkernel, highly constrained memory footprints, and non-interchangeable software configurations.

---

## 1.6 Role and Objectives of the Software Designer

The overarching goal of an operating system architect is to **maximize the utilization of physical resources (memory, processing cores, storage devices, and communication channels) while minimizing downtime and operational latency**.

In designing an operating system, the system architect must balance complex competing constraints:
- Available RAM physical limits and hardware memory protection mechanisms.
- Number, type, and cache coherence of available CPU cores.
- Variety and throughput capabilities of supported peripheral hardware.
- High-assurance security and cryptographic access barriers against network intrusions.

---

# Chapter 2: Early Memory Management Schemes, Allocation Strategies & Dynamic Compaction

## 2.1 The Memory Management Problem

System throughput and computing performance are inextricably bound to memory management:
1. The **volume of physical memory** available to concurrent programs.
2. The **algorithmic efficiency** with which the Memory Manager allocates, monitors, protects, and reclaims memory blocks during active execution.

> [!info] Main Memory (RAM) vs. Secondary Storage (SSD/HDD)
> Both main memory and secondary storage measure capacity in bytes (KB, MB, GB, TB) and hold binary programs and data. However, their physical mechanisms diverge:
> - **Main Memory (Primary Storage):** High-speed, semiconductor-based, byte-addressable, and **volatile**. All program instructions must be staged into RAM before the CPU can fetch and execute them.
> - **Secondary Storage (Persistent Storage):** Magnetic or flash-based (HDD/SSD), block-addressable, significantly slower (orders of magnitude greater latency), and **non-volatile**.

```mermaid
flowchart TD
    subgraph MemoryHierarchy["Memory Hierarchy & Access Latency"]
        direction TB
        Registers["CPU Registers (~0.5 - 1 ns)"]
        Cache["L1/L2/L3 SRAM Caches (~1 - 10 ns)"]
        RAM["Main Memory - DRAM (~50 - 100 ns)"]
        SSD["Secondary Storage - NVMe / Flash SSD (~10 - 100 µs)"]
        HDD["Secondary Storage - Magnetic Hard Disk (~5 - 10 ms)"]
    end
    Registers --> Cache --> RAM --> SSD --> HDD
```

### 2.1.1 The PC Bootstrapping Sequence
The bootstrapping process demonstrates how firmware bridges permanent non-volatile storage and volatile main memory:
1. Power is applied to the motherboard; CPU hardware registers are initialized to a hardwired memory address pointing to the **ROM BIOS / UEFI** firmware.
2. The firmware executes the **Power-On Self-Test (POST)** to verify processor registers, RAM modules, device buses, and hardware controllers.
3. The BIOS queries CMOS settings to determine the prioritized boot sequence (NVMe SSD, SATA HDD, USB Flash Drive, or Network PXE).
4. The initial sector (Master Boot Record / EFI System Partition) is loaded into RAM, transferring execution control to the OS **bootloader** (e.g., GRUB or Windows Boot Manager).
5. The bootloader loads the core operating system kernel into protected RAM, initializes the Memory Manager and Processor Manager, and transfers control to the kernel init process.

---

## 2.2 Four Foundational Early Memory Allocation Schemes

To trace the development of modern virtual memory, operating system engineering evaluates four historical memory allocation architectures.

```mermaid
flowchart TD
    subgraph EarlyAllocationSchemes["Taxonomy of Early Memory Allocation Schemes"]
        direction TB
        S1["1. Single-User Contiguous Allocation<br/>• Monolithic memory<br/>• Exactly 1 active program<br/>• No multiprogramming"]
        S2["2. Fixed Partitions (Static)<br/>• Memory carved into static slots<br/>• Supports multiprogramming<br/>• Suffers from Internal Fragmentation"]
        S3["3. Dynamic Partitions (Variable)<br/>• Partitions carved per job size<br/>• First-Come, First-Served<br/>• Suffers from External Fragmentation"]
        S4["4. Relocatable Dynamic Partitions<br/>• Compaction / Defragmentation<br/>• Hardware Relocation & Bounds Registers<br/>• Dynamic Address Translation"]
    end
    S1 --> S2 --> S3 --> S4
```

### 2.2.1 Scheme 1: Single-User Contiguous Allocation
In early computing systems (late 1940s and early 1950s), the entire physical memory was allocated contiguously to a single active program at any given time.
- **Workflow:**
  1. The Memory Manager checks the size of an incoming job from the submission queue.
  2. If the job size is smaller than or equal to total available user memory space, the entire program is loaded into memory starting from the boundary of the OS space.
  3. The job executes to completion.
  4. Upon termination, the Memory Manager clears the memory space, reclaims the entire partition, and evaluates the next job in the queue.
- **Severe Limitations:**
  - Zero support for multiprogramming: CPU remains idle whenever the running job blocks for slow I/O devices (magnetic tape reads).
  - Unused memory capacity is completely wasted.
  - Commercially unviable for modern multi-user enterprises.

### 2.2.2 Scheme 2: Fixed Partitions
Introduced to enable **multiprogramming** by partitioning main memory into multiple discrete, static regions.
- **Mechanics:**
  - Main memory is subdivided into fixed partitions during system configuration (reconfiguration requires a full operating system reboot).
  - Each partition can host **exactly one job** at a time.
  - The Memory Manager tracks the state of each partition using a structured **Memory Table**:

| Partition Size | Memory Start Address | Current Access / Job | Partition Status |
| :--- | :--- | :--- | :--- |
| **100 KB** | `200K` | Job 1 (80 KB) | Busy |
| **25 KB** | `300K` | Job 4 (25 KB) | Busy |
| **25 KB** | `325K` | — | **Free** |
| **50 KB** | `350K` | Job 2 (30 KB) | Busy |

- **Failure Modes & Fragmentation:**
  - If incoming jobs are significantly larger than the available partitions, they cannot be loaded and suffer extensive turnaround delays.
  - If a job is smaller than its assigned fixed partition, the leftover unused memory within that partition cannot be allocated to any other process. This phenomenon is known as **Internal Fragmentation**.

> [!warning] Definition: Internal Fragmentation
> **Internal Fragmentation** is the memory waste occurring *inside* an allocated partition when the memory space assigned to a job is larger than the actual memory requested or required by that job. Because the entire fixed partition is reserved for a single process, the residual space remains unusable by all other jobs.

### 2.2.3 Scheme 3: Dynamic Partitions
Dynamic Partitioning eliminates internal fragmentation by allocating to each incoming job **only the exact volume of contiguous memory requested** when the job is loaded.
- **Mechanics:**
  - Memory is not subdivided in advance.
  - When Job 1 arrives requesting 200 KB, the Memory Manager carves out a 200 KB partition exactly. When Job 2 arrives requesting 150 KB, a 150 KB block is carved out immediately adjacent.
  - As long as initial jobs enter sequentially, memory utilization approaches 100%.
- **Emergence of External Fragmentation:**
  - As jobs complete execution in unpredictable order, they leave arbitrary empty holes throughout the address space.
  - When new jobs arrive, their sizes may not match the vacated holes.
  - Memory becomes peppered with tiny non-contiguous blocks of free memory. Even if the *sum* of all free spaces is more than enough to satisfy an incoming job, the job cannot load because it requires a single **contiguous** allocation. This is known as **External Fragmentation**.

> [!warning] Definition: External Fragmentation
> **External Fragmentation** is the memory waste occurring *between* allocated memory blocks when total free physical memory is mathematically sufficient to satisfy a process request, but the free space is fragmented into scattered, non-contiguous holes such that no single contiguous block is large enough to load the job.

---

## 2.3 Partition Allocation Algorithms: First-Fit vs. Best-Fit

When a process requests memory in a system with variable free blocks, the Memory Manager must apply an allocation algorithm to select an appropriate block from the free list.

```mermaid
flowchart TD
    subgraph FirstFitAlg["First-Fit Memory Allocation"]
        FF_List["Free List Ordered by:<br/>Memory Address (Low to High)"]
        FF_Search["Scan list from beginning;<br/>Select the FIRST block >= Job Size"]
        FF_Adv["Advantage: Fast allocation;<br/>Minimal search overhead"]
        FF_Dis["Disadvantage: Wastes memory;<br/>Premature external fragmentation"]
        FF_List --> FF_Search --> FF_Adv & FF_Dis
    end

    subgraph BestFitAlg["Best-Fit Memory Allocation"]
        BF_List["Free List Ordered by:<br/>Block Size (Smallest to Largest)"]
        BF_Search["Scan ENTIRE list;<br/>Select SMALLEST block >= Job Size"]
        BF_Adv["Advantage: Minimizes leftover hole size;<br/>Preserves larger contiguous blocks"]
        BF_Dis["Disadvantage: High search overhead;<br/>Generates tiny unusable slivers"]
        BF_List --> BF_Search --> BF_Adv & BF_Dis
    end
```

### 2.3.1 Comparative Analysis: First-Fit vs. Best-Fit

| Dimension | First-Fit Allocation | Best-Fit Allocation |
| :--- | :--- | :--- |
| **List Organization** | Ordered sequentially by **memory address** (from lowest memory location to highest). | Ordered strictly by **memory block size** (from smallest block to largest block). |
| **Search Strategy** | Scans from start of list and stops at the **very first block** large enough to hold the job. | Must search the **entire table** to find the smallest block that fits the job. |
| **Allocation Speed** | **Fast:** Halts scanning immediately upon discovering a suitable hole. | **Slower:** Incurs high processing overhead evaluating every entry or re-sorting lists. |
| **Memory Efficiency** | Tends to fragment lower memory addresses rapidly; leaves large blocks intact at higher addresses. | Minimizes unused residual space in the allocated block, reducing immediate space loss. |
| **Fragment Characteristics**| Produces medium-sized leftover fragments that may still accommodate smaller jobs. | Produces microscopic leftover holes ("slivers") that are too small for any real process to utilize. |

### 2.3.2 Bookshelf Analogy
- **Best-Fit:** Imagine organizing books onto shelves where shelves are ordered strictly by height. When a new book arrives, you search every shelf to find the tightest fit so minimal vertical gap is wasted.
- **First-Fit:** You walk past the shelves starting at the bottom and push the book into the very first shelf that has sufficient clearance, regardless of whether a tighter fit exists higher up.

### 2.3.3 Hypothetical Alternatives: Next-Fit and Worst-Fit
- **Next-Fit:** Begins scanning from the memory location of the *last allocated block* rather than restarting from the beginning of the list each time. Distributes allocations more evenly across memory, preventing excessive fragmentation at the bottom.
- **Worst-Fit:** Allocates the *largest available free block* to the job. The theoretical rationale is that subtracting a job from the largest block will leave a substantial residual hole that is still large enough to comfortably accommodate another process. While useful in theoretical modeling, it performs poorly in actual systems.

---

## 2.4 Deallocation Mechanics in Dynamic Partition Systems

When a process terminates, the Memory Manager must reclaim its physical space and maintain the integrity of the free memory tables. In a dynamic-partition system, deallocation is classified into three topological cases depending on the adjacency of the released block:

```mermaid
flowchart TD
    subgraph DeallocationCases["The Three Dynamic Deallocation Cases"]
        direction TB
        C1["Case 1: Adjacent to ONE Free Block<br/>• Released block is directly bordered by 1 free block.<br/>• Action: Merge the two blocks into a single combined entry.<br/>• Starting address set to lowest boundary; sizes summed."]
        C2["Case 2: Between TWO Free Blocks<br/>• Released block sits directly between two existing free blocks.<br/>• Action: Merge all three partitions into one large contiguous block.<br/>• Starting address set to smallest beginning address; entry 3 marked null."]
        C3["Case 3: Isolated Block (Surrounded by Busy Blocks)<br/>• Released block has busy allocations on both boundaries.<br/>• Action: Add a new entry into the Free List.<br/>• Replace an available null entry slot in the memory table."]
    end
```

### 2.4.1 Case 1: Joining Two Free Blocks
- **Scenario:** The released memory block sits immediately adjacent to one existing free memory block (either above or below).
- **Execution:**
  - Let Job A release a block of size $200$ at address $7600$.
  - An existing free block of size $5$ resides at address $7800$ (or immediately adjacent).
  - The Memory Manager updates the entry's starting address to reflect the lowest address ($7600$) and sums the sizes:
    $$\text{New Combined Size} = 200 + 5 = 205 \text{ units}$$
  - The total number of free entries in the table remains unchanged.

### 2.4.2 Case 2: Joining Three Free Blocks
- **Scenario:** The released memory block is sandwiched directly between two existing free memory blocks.
- **Execution:**
  - Example: Free block of size $20$ at starting address $7560$; released block of size $200$ at address $7580$; adjacent free block of size $205$ at address $7780$.
  - The Memory Manager merges all three partitions into a single contiguous entry:
    $$\text{Total Unified Size} = 20 + 200 + 205 = 425 \text{ units}$$
  - The starting address is set to the lowest boundary ($7560$).
  - The second redundant free list entry is cleared and assigned a **null entry** status, freeing up an entry in the table.

### 2.4.3 Case 3: Deallocating an Isolated Block
- **Scenario:** The released memory block is isolated from all other free blocks (both upper and lower boundaries are occupied by busy active jobs).
- **Execution:**
  - The released block cannot be merged with neighboring blocks.
  - The Memory Manager searches the Free List for an available **null entry** slot.
  - The starting address and size of the released block are written into this newly allocated slot in the Free List.

---

## 2.5 Relocatable Dynamic Partitions: Compaction & Hardware Registers

### 2.5.1 Memory Compaction (Defragmentation)
To solve the external fragmentation inherent in dynamic partitions, the operating system employs **Memory Compaction** (also termed *defragmentation* or *garbage collection*).
- **Process:** The Memory Manager halts active processing, relocates running programs toward one contiguous boundary of memory (typically starting directly above the operating system kernel), and consolidates all scattered empty holes into a single, unified free memory partition.
- **Outcome:** Waiting jobs that previously could not load due to fragmented space can now fit into the consolidated free partition.

```mermaid
flowchart LR
    subgraph BeforeCompaction["(a) Memory Before Compaction"]
        OS1["OS (10K)"]
        J1["Job 1 (40K)"]
        H1["Free Hole (30K)"]
        J2["Job 2 (50K)"]
        H2["Free Hole (66K)"]
    end

    subgraph AfterCompaction["(b) Memory After Compaction"]
        OS2["OS (10K)"]
        J1b["Job 1 (40K)"]
        J2b["Job 2 (50K)"]
        BigHole["Consolidated Free Partition (96K)<br/>--> Fits Job 6 (84K)!"]
    end

    BeforeCompaction ==>|Compaction / Relocation| AfterCompaction
```

### 2.5.2 Hardware Assistance: Bounds & Relocation Registers
Relocating a program in physical memory invalidates all absolute memory addresses embedded in its code (such as jump targets, function pointers, and global variable addresses). To execute compaction without manually recompiling or patching binary code, modern computer architectures implement **Hardware Address Translation Registers**:

```mermaid
flowchart LR
    subgraph CPUExecution["CPU Instruction Execution"]
        LogicalAddr["Logical Address<br/>(Program Relative: 0 to L)"]
    end

    subgraph HardwareCheck["Hardware Protection & Translation Unit"]
        direction TB
        BoundsCheck{"Is Logical Address < Bounds Register?"}
        RelocAdd["Physical Address = Logical Address + Relocation Register"]
    end

    subgraph PhysicalMemoryLocation["Physical RAM Address"]
        PhysicalRAM["Physical RAM Word"]
        TrapErr["Memory Protection Fault (Trap to Kernel)"]
    end

    LogicalAddr --> BoundsCheck
    BoundsCheck -- "No (Out of Bounds)" --> TrapErr
    BoundsCheck -- "Yes (Legal)" --> RelocAdd
    RelocAdd --> PhysicalRAM
```

1. **Bounds Register (Protection):**
   - Stores the maximum legal logical address or length of the allocated partition.
   - For every memory access instruction generated by the CPU, hardware compares the logical address against the Bounds Register. If the program attempts to read or write an address beyond this bound, the CPU triggers a **Memory Protection Fault** interrupt, halting execution before memory corruption can occur.
2. **Relocation Register (Base Address Translation):**
   - Holds the physical base memory address where the program currently resides in RAM.
   - Whenever a program instruction references an address, the hardware automatically adds the contents of the Relocation Register to the logical address before placing the signal onto the physical memory bus:
     $$\text{Physical Address} = \text{Logical Address} + \text{Contents of Relocation Register}$$
   - When the Memory Manager moves a program during compaction, it updates **only the value in the Relocation Register**. The executable binary code requires zero internal modification.

### 2.5.3 Compaction Overhead and Timing Strategies
Compaction is computationally expensive. Moving megabytes or gigabytes of memory blocks consumes substantial CPU cycles and suspends all user-space execution. 

System designers optimize compaction timing by triggering the routine under specific conditions:
1. **On-Demand Allocation Failure:** Trigger compaction only when an incoming job cannot find a contiguous block, but total free memory is greater than or equal to the requested size.
2. **Threshold Occupancy:** Trigger compaction when the percentage of busy fragmented memory crosses a predefined threshold (e.g., $75\%$ fragmentation).
3. **Queue Wait-Time Expiration:** Trigger compaction when one or more jobs have lingered in the waiting queue beyond a maximum tolerated latency window.
4. **Prescribed Time Intervals:** Execute periodic defragmentation during scheduled low-load operational periods.
