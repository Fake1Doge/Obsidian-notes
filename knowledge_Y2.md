---
title: Master Knowledge Base - Year 2 (Y2S1 & Advanced Engineering Controls)
tags:
  - knowledge-base
  - comp-sci
  - software-engineering
  - year-2
  - y2s1
  - master-summary
aliases:
  - Computer Science & Software Engineering Year 2 Knowledge Base
  - Year 2 Master Knowledge Summary
date: 2026-10-18
---

# 🧠 Computer Science & Software Engineering Master Knowledge Base — Year 2

> [!abstract] Overview & Navigation
> This master document provides a comprehensive, interconnected synthesis of the engineering principles, systems foundations, and quantitative governance frameworks established across **Year 2 Semester 1 (Y2S1)**.
> 
> Every section, concept, formula, and glossary term links directly into the exact chapters and heading anchors of your Year 2 vault notes:
> 
> ### 💻 Year 2 Semester 1 Core Systems & Architecture Stream:
> - **[[Y2S1/CCA201 Operating Systems|CCA201: Operating Systems]]**
> - **[[Y2S1/CCA202 Database Fundamentals|CCA202: Database Fundamentals]]**
> - **[[Y2S1/CKS221 Software Architecture and Design|CKS221: Software Architecture and Design]]**
> - **[[Y2S1/CKS222 Software Process and Life Cycle|CKS222: Software Process and Life Cycle]]**
> 
> ---
> > [!tip] 🔙 Foundational Curriculum Navigation
> > For Year 1 foundations (C++ programming, computer organization, discrete mathematics, system analysis, OOP, and software requirements), navigate to:
> > **[[knowledge_Y1|🧠 Year 1 Master Knowledge Base (Y1S1 & Y1S2 Foundations)]]**

---

## 🗺️ Academic Roadmap & Interdisciplinary Architecture (Year 2)

```mermaid
flowchart TD
    subgraph Y1_Foundations ["Year 1 Prerequisites & Foundations"]
        CCA102["CCA102: Computer Organisation<br/>(Registers, ALU, Memory Bus)"]
        CCA101["CCA101: Principles of Programming<br/>(Pointers, Memory Layout)"]
        CKC111["CKC111: Discrete Structures<br/>(Relational Algebra, Sets, Logic)"]
        CCA103["CCA103: System Analysis & Design<br/>(Class Diagrams, Workflows)"]
        CKC112["CKC112: Object-Oriented Programming<br/>(Classes, Encapsulation, C++)"]
        CKS121["CKS121: Software Requirements<br/>(EARS, Non-Functional Criteria)"]
    end

    subgraph Y2S1_Core ["Year 2 Semester 1: Systems, Data & Process Architecture"]
        direction TB
        subgraph InfrastructureLayer ["Systems & Data Foundations"]
            CCA201["CCA201: Operating Systems<br/>• Subsystem Managers (Memory, CPU, Device, File)<br/>• Memory Allocation & Compaction<br/>• Hardware Protection Registers"]
            CCA202["CCA202: Database Fundamentals<br/>• RDBMS & File System Evolution<br/>• Data Anomalies & Normalization<br/>• ANSI/SPARC 4-Tier Abstraction"]
        end

        subgraph DesignGovernanceLayer ["Architecture & Quantitative Governance"]
            CKS221["CKS221: Software Architecture & Design<br/>• Kruchten's 4+1 View Model<br/>• Module, C&C, Allocation Structures<br/>• Architectural Quality Attributes"]
            CKS222["CKS222: Software Process & Life Cycle<br/>• Descriptive Process Modeling (8 Steps)<br/>• Quantitative Governance (EVM Triads)<br/>• Agile, Scrum, XP & Lean Security (SDL-Agile)"]
        end
    end

    CCA102 -->|Instruction Execution & Interrupts| CCA201
    CCA101 -->|Memory Addresses & Pointer Offsets| CCA201
    CKC111 -->|Relations, Tuples & First-Order Predicates| CCA202
    CCA103 -->|Logical Schemas & Conceptual ERDs| CCA202
    CKC112 -->|Object-Oriented Decomposition| CKS221
    CKS121 -->|Quality Attributes & Non-Functional Specs| CKS221
    CKS121 -->|Requirement Traceability & GWT Criteria| CKS222
    CCA103 -->|Process Lifecycle Milestones| CKS222

    CCA201 <==>|File Block I/O & RAM Buffer Caching| CCA202
    CCA202 <==>|Data Models Realized in C&C & Logical Views| CKS221
    CKS221 <==>|Architecture Contracts Modeled in A-SPSRI Bucket 2| CKS222
```

---

# 📘 Part I: Year 2 Semester 1 (Y2S1 Core Curriculum)

---

## 1. ⚙️ [[Y2S1/CCA201 Operating Systems|CCA201: Operating Systems]]

Focuses on the operating system as the chief software component arbitrating physical hardware resources (CPU, RAM, storage, peripherals), managing memory allocation and fragmentation, coordinating concurrent subsystems, and virtualizing the computing environment.

```mermaid
flowchart LR
    UI["User Interface (CLI / GUI)"] --> Managers
    subgraph Managers["Operating System Subsystem Kernel"]
        direction TB
        MM["Memory Manager (RAM, Partitioning, Compaction)"]
        PM["Processor Manager (CPU Scheduling, State Machine)"]
        DM["Device Manager (Drivers, Buffers, Interrupts)"]
        FM["File Manager (Logical Schemas, Disk Sectors)"]
        NM["Network Manager (Distributed & Cloud Services)"]
    end
    Managers --> Hardware["Physical Hardware (CPU, DRAM, NVMe SSD, Peripherals)"]
```

### 1.1 [[Y2S1/CCA201 Operating Systems#1.1 Fundamentals of Operating Systems|Core Concepts & Subsystem Architecture]]
- **Definition & Mandate**: [[Y2S1/CCA201 Operating Systems#1.1.1 What is an Operating System?|Operating System (Chief software component)]] responsible for resource virtualization, hardware protection, and policy enforcement (determining *who* gets *what*, *when*, and *how much*).
- **Core Subsystems**:
  - **Memory Manager**: [[Y2S1/CCA201 Operating Systems#1.2.1 Main Memory Manager|RAM validation, allocation, protection, and reclaiming]].
  - **Processor Manager**: [[Y2S1/CCA201 Operating Systems#1.2.2 Processor Manager|CPU traffic controller, thread context switching, and time slicing]].
  - **Device Manager**: [[Y2S1/CCA201 Operating Systems#1.2.3 Device Manager|Peripheral allocation, device driver binding, buffering, and spooling]].
  - **File Manager**: [[Y2S1/CCA201 Operating Systems#1.2.4 File Manager|Access permission enforcement, directory indexing, and disk cluster mapping]].
  - **Network Manager**: [[Y2S1/CCA201 Operating Systems#1.2.5 Network Manager & User Interface|Coordinating shared distributed memory, remote CPUs, and storage]].

### 1.2 [[Y2S1/CCA201 Operating Systems#1.3 Subsystem Cooperation: A Complete Interaction Lifecycle|Subsystem Cooperation Lifecycle]]
- **Nine-Step Execution Flow**: [[Y2S1/CCA201 Operating Systems#1.3 Subsystem Cooperation: A Complete Interaction Lifecycle|Mouse interrupt in Device Manager]] $\to$ UI translation $\to$ Processor Manager acknowledgement $\to$ File Manager sector lookup on disk $\to$ Memory Manager loading executable into RAM $\to$ CPU instruction execution $\to$ secondary storage writeback $\to$ UI rendering.

### 1.3 [[Y2S1/CCA201 Operating Systems#1.5 Taxonomy and Classifications of Operating Systems|OS Taxonomy & Classifications]]
- **Classification Criteria**: Categorized based on **Response Time** and **Method of Data Entry**:
  - **Batch Systems**: [[Y2S1/CCA201 Operating Systems#1.5.1 Batch Systems|Sequential job bundling; throughput-driven; hours to days turnaround]].
  - **Interactive Systems**: [[Y2S1/CCA201 Operating Systems#1.5.2 Interactive Systems|Direct terminal conversational engagement; time-sliced CPU sharing; seconds to minutes turnaround]].
  - **Real-Time Systems (RTOS)**: [[Y2S1/CCA201 Operating Systems#1.5.3 Real-Time Operating Systems (RTOS)|Predictable time-bounded determinism]]. Differentiated into **Hard RTOS** (deadline failure causes catastrophic system destruction) vs **Soft RTOS** (deadline failure results in degraded service quality).
  - **Hybrid & Embedded Systems**: [[Y2S1/CCA201 Operating Systems#1.5.4 Hybrid and Embedded Systems|Foreground interactive with background batch]]; [[Y2S1/CCA201 Operating Systems#1.5.4 Hybrid and Embedded Systems|Embedded ROM microkernels with non-interchangeable software]].

### 1.4 [[Y2S1/CCA201 Operating Systems#2.2 Four Foundational Early Memory Allocation Schemes|Foundational Memory Allocation Schemes]]
- **Single-User Contiguous**: [[Y2S1/CCA201 Operating Systems#2.2.1 Scheme 1: Single-User Contiguous Allocation|Monolithic single-job execution; zero multiprogramming support]].
- **Fixed Partitions (Static)**: [[Y2S1/CCA201 Operating Systems#2.2.2 Scheme 2: Fixed Partitions|Static division supporting multiprogramming]]. Suffers from **Internal Fragmentation** (wasted memory *inside* an allocated block due to job size mismatch).
- **Dynamic Partitions (Variable)**: [[Y2S1/CCA201 Operating Systems#2.2.3 Scheme 3: Dynamic Partitions|Jobs allocated exact memory requested]]. Eliminates internal fragmentation but produces **External Fragmentation** (scattered non-contiguous holes *between* allocated blocks preventing new jobs from loading).

### 1.5 [[Y2S1/CCA201 Operating Systems#2.3 Partition Allocation Algorithms: First-Fit vs. Best-Fit|Allocation Algorithms: First-Fit vs. Best-Fit]]
- **First-Fit Allocation**: [[Y2S1/CCA201 Operating Systems#2.3.1 Comparative Analysis: First-Fit vs. Best-Fit|Free list ordered by memory address (low to high)]]; allocates the very first block with sufficient size; fast execution with minimal scan overhead.
- **Best-Fit Allocation**: [[Y2S1/CCA201 Operating Systems#2.3.1 Comparative Analysis: First-Fit vs. Best-Fit|Free list ordered by block size (smallest to largest)]]; searches the entire table to allocate the smallest fitting block; minimizes immediate wasted space but creates microscopic unusable slivers and incurs high search overhead.

### 1.6 [[Y2S1/CCA201 Operating Systems#2.4 Deallocation Mechanics in Dynamic Partition Systems|Dynamic Deallocation Mechanics]]
- **The Three Topological Cases**:
  1. *Case 1 (Adjacent to 1 Free Block)*: [[Y2S1/CCA201 Operating Systems#2.4.1 Case 1: Joining Two Free Blocks|Merge released space with neighboring free block; adjust start address and sum sizes]].
  2. *Case 2 (Between 2 Free Blocks)*: [[Y2S1/CCA201 Operating Systems#2.4.2 Case 2: Joining Three Free Blocks|Consolidate all three blocks into one unified entry; mark redundant table slot as null]].
  3. *Case 3 (Isolated Block)*: [[Y2S1/CCA201 Operating Systems#2.4.3 Case 3: Deallocating an Isolated Block|Surrounded by busy allocations; allocate a fresh slot in the Free List]].

### 1.7 [[Y2S1/CCA201 Operating Systems#2.5 Relocatable Dynamic Partitions: Compaction & Hardware Registers|Compaction & Hardware Address Translation]]
- **Compaction (Defragmentation)**: [[Y2S1/CCA201 Operating Systems#2.5.1 Memory Compaction (Defragmentation)|Reclaiming external fragmentation by shifting active programs toward one boundary to create a single large free partition]].
- **Hardware Register Pair**:
  - **Bounds Register**: [[Y2S1/CCA201 Operating Systems#2.5.2 Hardware Assistance: Bounds & Relocation Registers|Stores maximum legal logical address; traps out-of-bounds violations to prevent memory corruption]].
  - **Relocation Register**: [[Y2S1/CCA201 Operating Systems#2.5.2 Hardware Assistance: Bounds & Relocation Registers|Stores physical base address]]; hardware dynamically computes:
    $$\text{Physical Address} = \text{Logical Address} + \text{Relocation Register}$$

### 1.8 [[Y2S1/CCA201 Operating Systems#Chapter 3: Virtual Memory Management: Paging, Segmentation, and Caching|Virtual Memory: Paged & Demand Paging Allocation]]
- **Paged Memory Allocation**: [[Y2S1/CCA201 Operating Systems#3.1 Paged Memory Allocation|Divides jobs into fixed Pages and RAM into Page Frames; eliminates external fragmentation and compaction; internal fragmentation confined to final page]].
- **Mathematical Address Translation**:
  $$\text{Page Number} = \left\lfloor \frac{\text{Logical Address}}{\text{Page Size}} \right\rfloor, \quad \text{Displacement} = \text{Logical Address} \pmod{\text{Page Size}}$$
  $$\text{Physical Address} = (\text{Page Frame Number} \times \text{Page Frame Size}) + \text{Displacement}$$
- **Demand Paging Mechanics**: [[Y2S1/CCA201 Operating Systems#3.2 Demand Paging Memory Allocation|Loads pages on demand; Page Fault interrupt triggers Page Fault Handler; PMT tracks Status, Modified (Dirty), and Referenced bits across 4 operational states; Thrashing occurs when excessive swapping starves the CPU]].

### 1.9 [[Y2S1/CCA201 Operating Systems#3.3 Page Replacement Policies|Page Replacement Policies & Memory Sizing]]
- **FIFO & Belady's Anomaly**: [[Y2S1/CCA201 Operating Systems#3.3.1 First-In, First-Out (FIFO) & Belady's Anomaly|Evicts oldest page in memory; susceptible to Belady's Anomaly where allocating more page frames increases page faults]].
- **Least Recently Used (LRU)**: [[Y2S1/CCA201 Operating Systems#3.3.2 Least Recently Used (LRU) Replacement|Stack algorithm immune to Belady's Anomaly; hardware approximations: Clock Replacement (circular queue with second-chance reference bit) and Bit-Shifting (8-bit aging register)]].
- **Denning's Working Set**: [[Y2S1/CCA201 Operating Systems#3.3.3 The Working Set Concept (Peter Denning)|Set of pages referenced during time window $\Delta$; prevents thrashing in time-sharing systems]].

### 1.10 [[Y2S1/CCA201 Operating Systems#3.4 Segmented Memory Allocation|Segmented & Segmented/Demand Paged Allocation]]
- **Segmented Memory Allocation**: [[Y2S1/CCA201 Operating Systems#3.4 Segmented Memory Allocation|Divides jobs into variable-sized logical code modules (main program, subroutines); 2D addressing $(\text{Segment}, \text{Displacement})$; SMT tracking; eliminates internal fragmentation but creates external fragmentation]].
- **Segmented Paging**: [[Y2S1/CCA201 Operating Systems#3.5 Segmented/Demand Paged Memory Allocation|Subdivides logical segments into equal-sized pages; unites logical modularity with zero external fragmentation; 3D addressing $(\text{Segment}, \text{Page}, \text{Displacement})$; four tables (JT, SMT, PMT, MMT); hardware accelerated by Associative Memory (TLB)]].
- **Cache Memory Models**: [[Y2S1/CCA201 Operating Systems#3.7 Cache Memory Architecture and Mathematical Models|L1/L2 on-chip SRAM; Hit Ratio and Average Memory Access Time (AMAT)]]:
  $$\text{AMAT} = \text{Avg\_Cache\_AccessTime} + (1 - \text{Hit Ratio}) \times \text{Avg\_MainMem\_AccTime}$$

### 1.11 [[Y2S1/CCA201 Operating Systems#Chapter 4: Processor Management: Job Scheduling, Process Dispatching, and State Models|Processor Management & Multi-Level Scheduling]]
- **Core Entities**: [[Y2S1/CCA201 Operating Systems#4.1.2 Foundational Definitions and Taxonomies|Processor (hardware) vs. Program/Job (passive file) vs. Process/Task (active entity) vs. Thread (schedulable execution unit)]].
- **Interrupts & Context Switching**: [[Y2S1/CCA201 Operating Systems#4.1.3 Interrupts and Context Switching|Hardware traps saving/restoring CPU registers and PC into PCB; dual-task analogy]].
- **Hierarchical Schedulers**: [[Y2S1/CCA201 Operating Systems#4.2 The Two-Tier (and Three-Tier) Scheduling Hierarchy|Job Scheduler (high-level spooler-to-READY admission), Process Scheduler (low-level CPU dispatcher), and Mid-Level Scheduler (swapping overloaded processes to disk)]].
- **State Models**:
  - *Process State Model (5 States)*: [[Y2S1/CCA201 Operating Systems#4.3 Job and Process State Machine|HOLD $\to$ READY $\to$ RUNNING $\to$ WAITING $\to$ FINISHED]].
  - *Thread State Model (5 States)*: [[Y2S1/CCA201 Operating Systems#4.4 Thread States and OS Thread Lifecycle|READY, RUNNING, WAITING, DELAYED, BLOCKED]].
- **Control Blocks & Queues**: [[Y2S1/CCA201 Operating Systems#4.5 Process Control Blocks (PCB) and Queue Topologies|Process Control Block (PCB) and TCB; system queues operate as lightweight linked lists of PCB pointers]].
- **Scheduling Policies**: [[Y2S1/CCA201 Operating Systems#4.6 Process Scheduling Policies and Optimization Criteria|Six criteria: Throughput, Turnaround, Response, Waiting, CPU Utilization, Fairness; Preemptive (time-sliced quantum) vs. Non-Preemptive policies]].

---

## 2. 🗄️ [[Y2S1/CCA202 Database Fundamentals|CCA202: Database Fundamentals]]

Covers the evolution of enterprise data management from traditional file processing to modern relational and NoSQL architectures, business rules translation, relational schema design, and the ANSI/SPARC 4-tier data abstraction model.

```mermaid
flowchart TD
    subgraph DataAbstraction["ANSI/SPARC 4 Levels of Data Abstraction"]
        direction TB
        Ext["External Model (End-User Subschemas & Departmental ERDs)"]
        Conc["Conceptual Model (Global Integrated ERD — Hardware & Software Independent)"]
        Int["Internal Model (DBMS-Specific Relational Schema — SQL Tables & Keys)"]
        Phys["Physical Model (Storage Media Blocks, B+ Trees, Sector Clustered Files)"]
        Ext --> Conc --> Int --> Phys
    end
```

### 2.1 [[Y2S1/CCA202 Database Fundamentals#1.1 Data vs. Information: The Foundations of Knowledge|Data vs. Information Foundations]]
- **Raw Data**: [[Y2S1/CCA202 Database Fundamentals#1.1 Data vs. Information: The Foundations of Knowledge|Unprocessed facts and observations]] representing atomic building blocks.
- **Information**: [[Y2S1/CCA202 Database Fundamentals#1.1 Data vs. Information: The Foundations of Knowledge|Processed, structured, contextualized data revealing operational meaning]]; must be accurate, relevant, and timely to enable sound decision-making.
- **Database & Metadata**: [[Y2S1/CCA202 Database Fundamentals#1.2 Database and Database Management System (DBMS) Concepts|Shared integrated repository storing end-user data alongside metadata (self-describing data characteristics)]].

### 2.2 [[Y2S1/CCA202 Database Fundamentals#1.3 Taxonomy and Classifications of Databases|Taxonomy of Databases]]
- **Classification Criteria**:
  - *User Concurrency*: [[Y2S1/CCA202 Database Fundamentals#1.3 Taxonomy and Classifications of Databases|Single-User (Desktop) vs Multi-User (Workgroup, Enterprise)]].
  - *Location*: [[Y2S1/CCA202 Database Fundamentals#1.3 Taxonomy and Classifications of Databases|Centralized vs Distributed vs Cloud Databases]].
  - *Usage*: [[Y2S1/CCA202 Database Fundamentals#1.3 Taxonomy and Classifications of Databases|Operational (OLTP - day-to-day transactions) vs Analytical (OLAP - data warehouses, business intelligence)]].
  - *Structure*: [[Y2S1/CCA202 Database Fundamentals#1.3 Taxonomy and Classifications of Databases|Unstructured vs Structured vs Semi-Structured (XML, JSON)]].

### 2.3 [[Y2S1/CCA202 Database Fundamentals#1.5 Evolution of Data Processing: From File Systems to Databases|File Systems vs Database Systems & Data Anomalies]]
- **Structural Dependence**: [[Y2S1/CCA202 Database Fundamentals#1. Structural Dependence|Application programs tightly coupled to file layouts; changing file structure requires rewriting all reading programs]].
- **Data Dependence**: [[Y2S1/CCA202 Database Fundamentals#2. Data Dependence|Program code hardwired to physical storage formats]].
- **Data Redundancy & "Islands of Information"**: [[Y2S1/CCA202 Database Fundamentals#3. Data Redundancy and "Islands of Information"|Duplicated records across departments causing storage waste, security breaches, and inconsistency]].
- **The Three Critical Data Anomalies**:
  1. *Update Anomaly*: [[Y2S1/CCA202 Database Fundamentals#4. Data Anomalies|Modifying data in one file while leaving redundant copies unchanged creates contradictory records]].
  2. *Insertion Anomaly*: [[Y2S1/CCA202 Database Fundamentals#4. Data Anomalies|Inability to record an independent entity (e.g., a new agent) without creating an unrelated entity (a dummy customer)]].
  3. *Deletion Anomaly*: [[Y2S1/CCA202 Database Fundamentals#4. Data Anomalies|Deleting one record inadvertently purges essential related data (e.g., deleting a customer deletes the only record of an agent)]].

### 2.4 [[Y2S1/CCA202 Database Fundamentals#1.6 Core Functions of a Modern DBMS|Core Functions of a Modern DBMS]]
- **System Engines**: [[Y2S1/CCA202 Database Fundamentals#1.6 Core Functions of a Modern DBMS|Data Dictionary Management]], [[Y2S1/CCA202 Database Fundamentals#1.6 Core Functions of a Modern DBMS|Data Storage & Performance Tuning]], [[Y2S1/CCA202 Database Fundamentals#1.6 Core Functions of a Modern DBMS|Data Transformation & Presentation]], [[Y2S1/CCA202 Database Fundamentals#1.6 Core Functions of a Modern DBMS|Security & Privacy Management]], [[Y2S1/CCA202 Database Fundamentals#1.6 Core Functions of a Modern DBMS|Multi-User Concurrency & ACID Controls]], [[Y2S1/CCA202 Database Fundamentals#1.6 Core Functions of a Modern DBMS|Backup & Disaster Recovery]], [[Y2S1/CCA202 Database Fundamentals#1.6 Core Functions of a Modern DBMS|Integrity Enforcement]], and [[Y2S1/CCA202 Database Fundamentals#1.6 Core Functions of a Modern DBMS|Declarative SQL Query Engine (DDL + DML)]].

### 2.5 [[Y2S1/CCA202 Database Fundamentals#2.2 Business Rules: Bridging Business Logic to Schemas|Business Rules & Cardinality Decomposition]]
- **Business Rule Definition**: [[Y2S1/CCA202 Database Fundamentals#2.2.1 What is a Business Rule?|Brief, precise, unambiguous organizational policy statement serving as the bridge between users and database designers]].
- **Structural Mapping**:
  - Nouns $\to$ **Entities** (e.g., `Customer`, `Invoice`).
  - Verbs $\to$ **Relationships** (e.g., `generates`).
  - Descriptors/Adjectives $\to$ **Attributes** (e.g., `invoice_total`, `due_date`).
- **Two-Question Cardinality Diagnostic**: [[Y2S1/CCA202 Database Fundamentals#2.2.4 Determining Relationship Type: The Two-Question Diagnostic|Asking bidirectional 'how many' questions]] to determine connectivity ($1:1$, $1:M$, $M:N$).

### 2.6 [[Y2S1/CCA202 Database Fundamentals#2.3 Chronological Evolution of Data Models|Evolution of Data Models]]
- **Hierarchical Model (1960s)**: [[Y2S1/CCA202 Database Fundamentals#2.3.1 Hierarchical Model (1960s)|Inverted tree; parent-child segments; 1:M only; complex pointer navigation]].
- **Network Model (1970s)**: [[Y2S1/CCA202 Database Fundamentals#2.3.2 Network Model (Late 1960s – 1970s)|Graph structure; handles M:N; DBTG standard; introduced DDL, DML, Schema, Subschema]].
- **Relational Model (1970s - Codd)**: [[Y2S1/CCA202 Database Fundamentals#2.3.3 The Relational Model (1970s)|Mathematical relations; 2D tables, tuples, attributes; linked via shared keys; declarative SQL; full structural independence]].
- **Entity-Relationship Model (1980s - Chen)**: [[Y2S1/CCA202 Database Fundamentals#2.3.4 The Entity-Relationship (ER) Model (1980s)|Visual ERD conceptual standard; communication bridge]].
- **OODM & Object/Relational (1990s)**: [[Y2S1/CCA202 Database Fundamentals#2.3.5 Object-Oriented Data Model (OODM) & Object/Relational (ORDBMS)|Encapsulated objects, inheritance, UML notation, XML semi-structured exchange]].
- **Big Data & NoSQL (2000s-Present)**: [[Y2S1/CCA202 Database Fundamentals#2.3.6 The Big Data Era & NoSQL Databases (2000s – Present)|Addressing the 3 Vs (Volume, Velocity, Variety); non-relational, horizontal scale-out; eventual consistency; Key-Value, Document, Column, and Graph stores; Hadoop HDFS & MapReduce]].

### 2.7 [[Y2S1/CCA202 Database Fundamentals#2.4 The ANSI/SPARC Four Levels of Data Abstraction|The ANSI/SPARC 4 Levels of Abstraction]]
- **External Model**: [[Y2S1/CCA202 Database Fundamentals#2.4.1 1. The External Model (External Schema)|End-user departmental views and subschemas]].
- **Conceptual Model**: [[Y2S1/CCA202 Database Fundamentals#2.4.2 2. The Conceptual Model (Conceptual Schema)|Global organizational ERD; software and hardware independent; logical design]].
- **Internal Model**: [[Y2S1/CCA202 Database Fundamentals#2.4.3 3. The Internal Model (Internal Schema)|DBMS-specific schema; tables, keys, datatypes; software dependent but hardware independent; exhibits logical independence]].
- **Physical Model**: [[Y2S1/CCA202 Database Fundamentals#2.4.4 4. The Physical Model|Lowest level; persistent storage media blocks and indexes; exhibits physical independence]].

### 2.8 [[Y2S1/CCA202 Database Fundamentals#Chapter 3: The Relational Database Model: Structure, Operators, and Integrity|The Relational Database Model: Structure, Operators, and Integrity]]
- **Relational Tables & Relvars**: [[Y2S1/CCA202 Database Fundamentals#3.1 Logical View of Data and Relational Table Anatomy|Relations (tables), Tuples (rows), Attributes (columns), and Domains; Relation vs. Relvar (container vs. immutable mathematical value)]].
- **Determination & Key Classifications**:
  - *Determination ($A \to B$)*: [[Y2S1/CCA202 Database Fundamentals#3.2.1 Determination and Functional Dependency|Determinants and Dependents; Full Functional Dependence where dependent relies on the entirety of composite key]].
  - *Key Taxonomy*: [[Y2S1/CCA202 Database Fundamentals#3.2.2 Taxonomy of Relational Database Keys|Superkey (uniquely identifies row), Candidate Key (minimal superkey), Primary Key (chosen identifier), Foreign Key (common attribute enforcing referential integrity), Secondary Key (retrieval indexing)]].
- **Relational Integrity Rules**:
  - *Entity Integrity*: [[Y2S1/CCA202 Database Fundamentals#3.3 Relational Integrity Rules: Entity and Referential Integrity|PK must be unique and non-null]].
  - *Referential Integrity*: [[Y2S1/CCA202 Database Fundamentals#3.3 Relational Integrity Rules: Entity and Referential Integrity|FK must match parent PK or be null; controlled redundancy makes relational databases functional]].
- **Relational Algebra Operators (Closure Property)**:
  - *Unary Operators*: [[Y2S1/CCA202 Database Fundamentals#3.4.1 Detailed Breakdown of Operators|SELECT / RESTRICT ($\sigma$ - horizontal slice), PROJECT ($\pi$ - vertical column slice)]].
  - *Binary Set Operators*: [[Y2S1/CCA202 Database Fundamentals#3.4.1 Detailed Breakdown of Operators|UNION ($\cup$), INTERSECT ($\cap$), DIFFERENCE ($-$) requiring Union-Compatibility]].
  - *Product & Joins*: [[Y2S1/CCA202 Database Fundamentals#3.4.2 The Family of JOIN Operators (bowtie)|PRODUCT ($\times$); Natural Join (3 steps: Product $\to$ Select $\to$ Project), Equijoin ($=$), Theta Join ($\bowtie_\theta$), Outer Joins (Left, Right, Full preserving unmatched tuples with NULLs)]].
  - *Division Operator*: [[Y2S1/CCA202 Database Fundamentals#3.4.3 The DIVIDE Operator|DIVIDE ($\div$) answering "all" queries]].
- **Metadata, Controlled Redundancy & Indexing**:
  - *Data Dictionary & System Catalog*: [[Y2S1/CCA202 Database Fundamentals#3.5.1 The Data Dictionary and System Catalog|Metadata repository resolving Homonyms and Synonyms]].
  - *Historical Accuracy*: [[Y2S1/CCA202 Database Fundamentals#3.5.2 Controlled Redundancy: Historical Accuracy Preservation|Preserving point-in-time financial values (e.g., `LINE_PRICE` vs `PROD_PRICE`)]].
  - *Indexing*: [[Y2S1/CCA202 Database Fundamentals#3.5.3 Database Indexing Mechanics|B+ Tree ordered index keys and pointers reducing search from $O(N)$ to $O(\log N)$]].
  - *Codd's 12 Rules*: [[Y2S1/CCA202 Database Fundamentals#3.6 Dr. E.F. Codd's Twelve Relational Database Rules (1985)|Foundational benchmarks for relational compliance]].

### 2.9 [[Y2S1/CCA202 Database Fundamentals#Chapter 4: Entity-Relationship (ER) Modeling: Concepts, Cardinality, and Schema Design|Entity-Relationship (ER) Modeling: Concepts, Cardinality, and Schema Design]]
- **ER Model vs. Relational Model**: [[Y2S1/CCA202 Database Fundamentals#4.1 Foundations of the Entity-Relationship (ER) Model|Conceptual visual design vs. logical SQL implementation]].
- **Attribute Taxonomy**: [[Y2S1/CCA202 Database Fundamentals#4.2 Attributes Classification in ER Models|Required vs. Optional; Simple vs. Composite (subdividable); Single-Valued vs. Multi-Valued (resolved via dedicated 1:M child entities); Stored vs. Derived (computed)]].
- **Connectivity, Cardinality, and Existence**:
  - *Cardinality*: [[Y2S1/CCA202 Database Fundamentals#4.3.1 Connectivity vs. Cardinality|$(min, max)$ constraints in Crow's Foot notation]].
  - *Relationship Strength*: [[Y2S1/CCA202 Database Fundamentals#4.3.2 Relationship Strength: Weak vs. Strong Relationships|Weak/Non-Identifying (dashed line, child PK does not contain parent PK) vs. Strong/Identifying (solid line, child PK inherits parent PK)]].
  - *Weak Entities*: [[Y2S1/CCA202 Database Fundamentals#4.3.3 Weak Entities|Existence-dependent with derived composite PK (e.g., `ROOM` in `BUILDING`)]].
  - *Participation*: [[Y2S1/CCA202 Database Fundamentals#4.3.4 Relationship Participation: Optional vs. Mandatory|Optional (min = 0, circle) vs. Mandatory (min $\ge 1$, vertical hash)]].
- **Relationship Degrees & Recursive Topologies**: [[Y2S1/CCA202 Database Fundamentals#4.4 Relationship Degrees and Recursive Topologies|Unary/Recursive (Employee manages Employee, Course prerequisite Course), Binary, and Ternary associations]].
- **Resolving M:N Relationships**: [[Y2S1/CCA202 Database Fundamentals#4.5 Resolving M:N Relationships with Associative Entities|Decomposed into two 1:M relationships via an Associative (Bridge/Composite) Entity with composite PK]].
- **Enterprise ERD Design Process**: [[Y2S1/CCA202 Database Fundamentals#4.6 Developing an Enterprise ER Diagram: The Six-Step Methodology|Six-step methodology from business narrative to verified normalized schema]].

---

## 3. 🏛️ [[Y2S1/CKS221 Software Architecture and Design|CKS221: Software Architecture and Design]]

Covers the principles of software architecture, the distinction between structures and documented views, architectural quality attributes (performance, security, modifiability, scalability), and Philippe Kruchten's foundational "4+1" View Model.

```mermaid
flowchart TD
    subgraph KruchtenModel["Philippe Kruchten's 4+1 View Model (1995)"]
        direction TB
        subgraph TopTiers["Static & Conceptual"]
            direction LR
            LV["Logical View<br/>(Classes, Objects, Domain Vocab)"]
            DV["Development View<br/>(Packages, Modules, Subsystems)"]
        end
        UC["+1: Use Case / Scenario View<br/>(Binds, Validates & Verifies All 4 Views)"]
        subgraph BottomTiers["Runtime & Infrastructure"]
            direction LR
            PV["Process View<br/>(Concurrency, Threads, Tasks, IPC)"]
            PhV["Physical View<br/>(Hardware Nodes, Networks, VMs)"]
        end
        LV --- UC
        DV --- UC
        UC --- PV
        UC --- PhV
    end
```

### 3.1 [[Y2S1/CKS221 Software Architecture and Design#1.1 The Discipline and Foundations of Software Architecture|Foundations & The Four Tenets of Architecture]]
- **Building Analogy**: [[Y2S1/CKS221 Software Architecture and Design#1.1.1 The Building Architecture Analogy|Civil engineering blueprints govern physical construction just as software architecture blueprints govern code assembly and evolution]].
- **Formal Definition**: [[Y2S1/CKS221 Software Architecture and Design#1.1.2 Formal Definition of Software Architecture|Set of structures needed to reason about the system, comprising software elements, relations among them, and properties of both]].
- **The Four Inviolable Tenets**:
  1. *Architecture is a Set of Structures*: [[Y2S1/CKS221 Software Architecture and Design#1.1.3 The Four Foundational Tenets|Multiple orthogonal structures coexist simultaneously]].
  2. *Architecture is an Abstraction*: [[Y2S1/CKS221 Software Architecture and Design#1.1.3 The Four Foundational Tenets|Focuses on public interfaces; deliberately suppresses private implementation details]].
  3. *Every System Has an Architecture*: [[Y2S1/CKS221 Software Architecture and Design#1.1.3 The Four Foundational Tenets|Present in all software, whether intentionally planned or accidental]].
  4. *Not All Architectures Are Good*: [[Y2S1/CKS221 Software Architecture and Design#1.1.3 The Four Foundational Tenets|Descriptive definition; a system may possess a rigid, vulnerable architecture]].

### 3.2 [[Y2S1/CKS221 Software Architecture and Design#1.3 Architectural Structures vs. Architectural Views|Structures vs. Views: The Essential Distinction]]
- **Structure**: [[Y2S1/CKS221 Software Architecture and Design#1.3 Architectural Structures vs. Architectural Views|The actual set of elements as they exist in software or hardware in reality]].
- **View**: [[Y2S1/CKS221 Software Architecture and Design#1.3 Architectural Structures vs. Architectural Views|A representation of a coherent set of architectural elements written and read by system stakeholders]].
- **Core Axiom**: *"Architects design structures. They document views of those structures."*
- **Human Body Analogy**: [[Y2S1/CKS221 Software Architecture and Design#1.3.1 The Human Body Analogy|Skeletal, vascular, and X-ray views all describe different aspects of the same unified human anatomy]].

### 3.3 [[Y2S1/CKS221 Software Architecture and Design#1.4 The Three Primary Categories of Architectural Structures|The Three Primary Categories of Architectural Structures]]
- **Module Structures (Static Code Units)**: [[Y2S1/CKS221 Software Architecture and Design#1.4.1 1. Module Structures (Static Code Units)|Implementation units (packages, classes); relationships: `is-a`, `is-part-of`, `depends-on`; primary tool for reasoning about **modifiability**]].
- **Component-and-Connector (C&C) Structures (Runtime Dynamics)**: [[Y2S1/CKS221 Software Architecture and Design#1.4.2 2. Component-and-Connector (C&C) Structures (Runtime Dynamics)|Runtime computational elements (components) and interaction pathways (connectors); ports and roles; primary tool for reasoning about **performance**, **security**, and **concurrency**]].
- **Allocation Structures (Environment Mappings)**:
  - *Deployment Structure*: [[Y2S1/CKS221 Software Architecture and Design#1.4.3 3. Allocation Structures (Software-to-Environment Mappings)|Mapping software components to hardware nodes and networks]].
  - *Implementation Structure*: [[Y2S1/CKS221 Software Architecture and Design#1.4.3 3. Allocation Structures (Software-to-Environment Mappings)|Mapping modules to directory hierarchies and repositories]].
  - *Work Assignment Structure*: [[Y2S1/CKS221 Software Architecture and Design#1.4.3 3. Allocation Structures (Software-to-Environment Mappings)|Assigning development tasks to engineering teams and contractors]].

### 3.4 [[Y2S1/CKS221 Software Architecture and Design#2.2 Quality Attributes (Non-Functional Requirements)|Architectural Quality Attributes]]
- **Architecture as Primary Determinant**: Non-functional system qualities are fundamentally determined by structural architecture, not localized coding tricks.
- **Core Attributes**:
  - **Performance**: [[Y2S1/CKS221 Software Architecture and Design#2.2 Quality Attributes (Non-Functional Requirements)|Latency, throughput, resource sharing, communication overhead]].
  - **Security**: [[Y2S1/CKS221 Software Architecture and Design#2.2 Quality Attributes (Non-Functional Requirements)|Authentication, authorization, confidentiality, attack surface reduction]].
  - **Modifiability**: [[Y2S1/CKS221 Software Architecture and Design#2.2 Quality Attributes (Non-Functional Requirements)|Decoupling, information hiding, single-point change impact]].
  - **Scalability**: [[Y2S1/CKS221 Software Architecture and Design#2.2 Quality Attributes (Non-Functional Requirements)|Horizontal scale-out vs vertical scale-up; eliminating hardcoded limits]].

### 3.5 [[Y2S1/CKS221 Software Architecture and Design#2.3 The Rationale and Practice of Architecture Documentation|Rationale & Practice of Architecture Documentation]]
- **The Britt Principle**: [[Y2S1/CKS221 Software Architecture and Design#2.3 The Rationale and Practice of Architecture Documentation|Designing without documentation is like winking in the dark; nobody knows what you are doing]].
- **The Three Fundamental Uses**:
  1. *Means of Education*: [[Y2S1/CKS221 Software Architecture and Design#2.3.1 The Three Fundamental Uses of Architecture Documentation|Onboarding new developers, architects, and funding sponsors]].
  2. *Stakeholder Communication*: [[Y2S1/CKS221 Software Architecture and Design#2.3.1 The Three Fundamental Uses of Architecture Documentation|Reconciling divergent priorities and benchmarking progress]].
  3. *Basis for Construction & Analysis*: [[Y2S1/CKS221 Software Architecture and Design#2.3.1 The Three Fundamental Uses of Architecture Documentation|Binding technical contracts for implementers and evaluators]].

### 3.6 [[Y2S1/CKS221 Software Architecture and Design#2.4 Philippe Kruchten's "4+1" Architectural View Model|Kruchten's "4+1" Architectural View Model]]
- **Logical View**: [[Y2S1/CKS221 Software Architecture and Design#2.4.1 1. The Logical View|Captures domain vocabulary using classes and objects; class, object, sequence diagrams]].
- **Process View**: [[Y2S1/CKS221 Software Architecture and Design#2.4.2 2. The Process View|Addresses runtime concurrency, threads, tasks, and synchronization; control/data flowcharts]].
- **Development View**: [[Y2S1/CKS221 Software Architecture and Design#2.4.3 3. The Development View (Implementation View)|Organizes physical codebase modules, packages, and third-party libraries; package diagrams]].
- **Physical View**: [[Y2S1/CKS221 Software Architecture and Design#2.4.4 4. The Physical View (Deployment View)|Maps components to hardware processors, virtual machines, and network topology; deployment diagrams]].
- **+1 Use Case View**: [[Y2S1/CKS221 Software Architecture and Design#2.4.5 +1. The Use Case View (Scenario View)|Binds, exercises, and validates all four views using concrete user scenarios; use case diagrams]].

### 3.7 [[Y2S1/CKS221 Software Architecture and Design#Chapter 3: Architectural Styles and Design Patterns|Architectural Styles and Design Patterns]]
- **Definition & Anatomy**: [[Y2S1/CKS221 Software Architecture and Design#3.1.1 Formal Definition of an Architectural Style|Specialization of element and relation types with constraints; consists of Components, Connectors, Topological Constraints, and Semantic Models]].
- **Nine Core Architectural Styles**:
  1. *Client-Server*: [[Y2S1/CKS221 Software Architecture and Design#3.2.1 1. Client-Server Architecture|Partitions system into service requestors and providers across 2-tier, 3-tier, n-tier, or cloud topologies; centralized data management and client flexibility]].
  2. *Peer-to-Peer (P2P)*: [[Y2S1/CKS221 Software Architecture and Design#3.2.2 2. Peer-to-Peer (P2P) Architecture|Symmetrical nodes acting as both client and server; decentralized, fault-tolerant, distributed processing (BitTorrent, Blockchain)]].
  3. *Data-Centered (Repository)*: [[Y2S1/CKS221 Software Architecture and Design#3.2.3 3. Data-Centered Architecture (Repository / Blackboard)|Centralized persistent data store accessed by independent client components; promotes integrability and decoupled additions]].
  4. *Event-Driven Architecture (EDA)*: [[Y2S1/CKS221 Software Architecture and Design#3.2.4 4. Event-Driven Architecture (EDA)|Asynchronous decoupling around state-change events; 4 components: Event, Event Producer, Event Broker (Kafka, RabbitMQ), Event Consumer]].
  5. *Layered Pattern*: [[Y2S1/CKS221 Software Architecture and Design#3.2.5 5. Layered Pattern Architecture|Horizontal stacked layers with cohesive interfaces; ERP case study (UI, functionality, business rules, core, database)]].
  6. *Service-Oriented Architecture (SOA)*: [[Y2S1/CKS221 Software Architecture and Design#3.2.6 6. Service-Oriented Architecture (SOA)|Enterprise reusable services communicating over an Enterprise Service Bus (ESB)]].
  7. *Microservice Architecture*: [[Y2S1/CKS221 Software Architecture and Design#3.2.7 7. Microservice Architecture|Autonomous, independently deployable services organized around business capabilities with Database-per-Service isolation]].
  8. *Data Flow (Pipe-and-Filter)*: [[Y2S1/CKS221 Software Architecture and Design#3.2.8 8. Data Flow Architecture (Pipe-and-Filter)|Progressive data stream transformation through stateless Filters connected by data transmission Pipes]].
  9. *Main Program / Subprogram*: [[Y2S1/CKS221 Software Architecture and Design#3.2.9 9. Main Program and Subprogram Architecture|Hierarchical procedural call-and-return control structure]].

### 3.8 [[Y2S1/CKS221 Software Architecture and Design#Chapter 4: Module Views and Module Styles|Module Views and Module Styles]]
- **Anatomy & Properties**: [[Y2S1/CKS221 Software Architecture and Design#4.1.1 Overview and Elements of Module Views|Implementation units with coherent responsibilities; Modules vs. Subsystems (Mars Rover case study); properties include responsibilities, visibility, revision history]].
- **Three Foundational Relations**: [[Y2S1/CKS221 Software Architecture and Design#4.1.2 Relations in Module Views|`is-part-of` (part-whole aggregation), `depends-on` (operational reliance), `is-a` (generalization/specialization)]].
- **Core Module Styles**:
  - *Decomposition Style*: [[Y2S1/CKS221 Software Architecture and Design#4.2.1 1. The Decomposition Style|`is-part-of` hierarchy; strictly acyclic and single-parent rules; blueprints work breakdown structure]].
  - *Uses Style*: [[Y2S1/CKS221 Software Architecture and Design#4.2.2 2. The Uses Style|`uses` relation (A requires correct B); essential for planning incremental delivery subsets and test isolation (ATIA-M case study)]].
  - *Generalization Style*: [[Y2S1/CKS221 Software Architecture and Design#4.2.3 3. The Generalization Style|`is-a` inheritance hierarchy capturing commonalities and variations for reuse and polymorphism (PetStore case study)]].
  - *Layered Style*: [[Y2S1/CKS221 Software Architecture and Design#4.2.4 4. The Layered Style|Unidirectional `allowed-to-use` relation; strictly acyclic; modifiability and separation of concerns]].
- **Notational Innovations in Layered Architecture**: [[Y2S1/CKS221 Software Architecture and Design#4.2.5 Notational Variations and Geometry in Layered Architecture|Five visual representations: Stack of boxes, Segmented layers, Concentric Rings (innermost = lowest kernel, multi-way geometric adjacency), Layers with a Sidecar (cross-cutting platform utilities), Size and Color cues]].

---

## 4. 🔄 [[Y2S1/CKS222 Software Process and Life Cycle|CKS222: Software Process and Life Cycle]]

Focuses on the empirical discipline of software engineering, descriptive process modeling methodologies, lifecycle models, verification vs validation, and quantitative project governance using Earned Value Management (EVM) Triads and Monte Carlo risk simulations.

```mermaid
flowchart LR
    Inputs["Requirements & Business Scope"] --> BigFive["The Big 5 Engineering Activities<br/>(Requirements, Architecture, Implementation, Testing, Maintenance)"]
    BigFive --> Governance["Quantitative Governance & Auditing<br/>(EVM Triads, A-SPSRI 22 Scope Elements, Monte Carlo Simulations)"]
    Governance --> VerifiedDelivery["Verified, High-Assurance Software Deliverables"]
```

### 4.1 [[Y2S1/CKS222 Software Process and Life Cycle#1.1 Fundamentals of Software Engineering & Process|Software Process Foundations & Failure Dynamics]]
- **Formal Definition (ISO/IEC/IEEE 24765)**: [[Y2S1/CKS222 Software Process and Life Cycle#1.1.1 The Discipline of Software Engineering|Systematic application of scientific and technological knowledge, methods, and experience to software design, implementation, testing, and documentation]].
- **The CHAOS Failure Findings**: [[Y2S1/CKS222 Software Process and Life Cycle#1.1.2 The Software Crisis & Failure Rates: CHAOS Report Findings|Over 25,000 projects studied; general failure rates 17%-22%, with 40%-50% challenged]]. Large Waterfall projects suffer a **42% total cancellation rate** due to requirements volatility, contrasted with 23% in Agile.
- **Socio-Technical Dimension**: [[Y2S1/CKS222 Software Process and Life Cycle#1.1.3 The Human and Social Dimension of Software Development|Primacy of trust, psychological safety, and interpersonal soft skills over raw syntax proficiency]].

### 4.2 [[Y2S1/CKS222 Software Process and Life Cycle#1.5 Chronological Evolution of Software Process Models|Lifecycle Models: Waterfall to Agile]]
- **Royce Waterfall (1970)**: [[Y2S1/CKS222 Software Process and Life Cycle#1.5.1 Linear Sequential: Royce's Waterfall Model (1970)|Linear sequential execution; late defect discovery and catastrophic vulnerability to requirements volatility]].
- **Basili Iterative Enhancement (1975)**: [[Y2S1/CKS222 Software Process and Life Cycle#1.5.3 Basili & Turner's Iterative Enhancement (1975)|Pioneered multi-pass evolutionary increments]].
- **Boehm Spiral Model (1988)**: [[Y2S1/CKS222 Software Process and Life Cycle#1.5.4 Risk-Driven Synthesis: Barry Boehm's Spiral Model (1988)|Risk-driven cyclic model combining prototyping with milestone gates]].
- **Agile & Scrum**: [[Y2S1/CKS222 Software Process and Life Cycle#1.5.7 Agile Paradigms & The Scrum Framework (Schwaber & Sutherland, 1995)|Cross-functional self-organizing teams, 2-4 week sprints, sprint backlog, daily scrums, and inspect-and-adapt retrospectives]].

### 4.3 [[Y2S1/CKS222 Software Process and Life Cycle#2.2 The 8-Step Descriptive Process Modeling Methodology|Descriptive Process Modeling (The 8-Step Methodology)]]
- **Set-up Phase**:
  1. *Step 1*: [[Y2S1/CKS222 Software Process and Life Cycle#2.2.1 Step 1: Stating Explicit Objectives and Scope|Stating explicit objectives and scope]].
  2. *Step 2*: [[Y2S1/CKS222 Software Process and Life Cycle#2.2.2 Step 2: Defining the Process Schema (Metamodel)|Defining the process schema (activities, artifacts, roles, resources)]].
  3. *Step 3*: [[Y2S1/CKS222 Software Process and Life Cycle#2.2.3 Step 3: Selecting Process Modeling Formalisms|Selecting formalisms (Role-Activity Diagrams, Petri nets, BPMN)]].
  4. *Step 4*: [[Y2S1/CKS222 Software Process and Life Cycle#2.2.4 Step 4: Information Gathering & Elicitation Planning|Information gathering and elicitation planning]].
- **Execution & Consolidation Phase**:
  5. *Step 5*: [[Y2S1/CKS222 Software Process and Life Cycle#2.2.5 Step 5: Process Elicitation Execution|Process elicitation (interviews, observation, artifact inspection)]].
  6. *Step 6*: [[Y2S1/CKS222 Software Process and Life Cycle#2.2.6 Step 6: Multi-View Modeling & Consolidation|Multi-view modeling and reconciliation of discrepancies]].
  7. *Step 7*: [[Y2S1/CKS222 Software Process and Life Cycle#2.2.7 Step 7: Process Model Analysis|Process model analysis (consistency and defect checks)]].
  8. *Step 8*: [[Y2S1/CKS222 Software Process and Life Cycle#2.2.8 Step 8: Packaging, Release & Process Maintenance|Packaging, release, and continuous process maintenance]].

### 4.4 [[Y2S1/CKS222 Software Process and Life Cycle#3.1 Software Engineering Lifecycle Activities: The Big Five|The Big 5 Lifecycle Activities & V&V]]
- **Requirements Engineering**: [[Y2S1/CKS222 Software Process and Life Cycle#3.1.2 Requirements Engineering: The Three Cognitive Dilemmas|Managing the Three Cognitive Dilemmas: tacit knowledge, volatile desires, and linguistic translation ambiguities]].
- **Software Architecture & UML**: [[Y2S1/CKS222 Software Process and Life Cycle#3.1.3 Architectural Modeling with UML: Avoiding Detail Bloat|Balancing completeness against cognitive load; avoiding UML detail bloat]].
- **Component-Based Construction**: [[Y2S1/CKS222 Software Process and Life Cycle#3.1.4 Code Implementation Paradigms|Maximizing reuse of commercial components while supporting developer autonomy]].
- **Verification vs. Validation (V&V)**:
  - *Verification*: [[Y2S1/CKS222 Software Process and Life Cycle#3.1.5 Verification vs. Validation (V&V)|"Are we building the product right?" (Conformance to specifications)]].
  - *Validation*: [[Y2S1/CKS222 Software Process and Life Cycle#3.1.5 Verification vs. Validation (V&V)|"Are we building the right product?" (Fulfilling true user operational needs)]].
- **Software Evolution & Lehman's Laws**: [[Y2S1/CKS222 Software Process and Life Cycle#3.2 Maintenance Engineering & Software Evolution: Lehman's Laws|Continuous change (Law I) and increasing complexity (Law II) unless actively refactored]].

### 4.5 [[Y2S1/CKS222 Software Process and Life Cycle#3.4 Quantitative Project Governance: Earned Value Management (EVM)|Quantitative Project Governance: EVM Triads & A-SPSRI]]
- **Traditional EVM Blind Spot**: [[Y2S1/CKS222 Software Process and Life Cycle#3.4.4 The Critical Blind Spot of Traditional EVM|Traditional EVM ($PV, EV, AC, CPI, SPI$) measures financial expenditure and task progress, but is blind to unmanaged scope creep and unstable requirements]].
- **EVM Triads**: Joint evaluation across three parameters:
  $$\text{EVM Triad} = \left( x\%, S_{xj}, C_{xj} \right)$$
  - $x\%$: Physical completion milestone.
  - $S_{xj}$: Scope completeness score measured via the **Agile Software Project Scope Rating Index (A-SPSRI)** across 22 critical elements (Bucket 1: Requirements; Bucket 2: Architecture; Bucket 3: Verification Readiness).
  - $C_{xj}$: Accumulated financial expenditure.
- **Monte Carlo Simulations**: [[Y2S1/CKS222 Software Process and Life Cycle#3.4.5 EVM Triads: Integrating Scope Rating Index (A-SPSRI)|Generates joint probability distributions to forecast project cost overruns ($P_{c90}$) and delivery dates before construction begins]].

### 4.6 [[Y2S1/CKS222 Software Process and Life Cycle#Chapter 4: Agile and Lean Development Processes|Agile & Lean Methodologies, XP, and Continuous Security]]
- **Agile Philosophy & Industrial Adoption**: [[Y2S1/CKS222 Software Process and Life Cycle#4.1 The Agile Mindset & Industrial Adoption|Four core values of the Agile Manifesto; HP empirical survey of 601 organizations demonstrating 54% collaboration boost, 52% software quality rise, and 42% cost reduction]].
- **The Scrum Framework**:
  - *Empiricism & Cadence*: [[Y2S1/CKS222 Software Process and Life Cycle#4.2.1 Empirical Process Control and the Sprint Engine|Transparency, inspection, and adaptation; 2-to-4 week timeboxed Sprints defeating the planning fallacy]].
  - *Core Roles*: [[Y2S1/CKS222 Software Process and Life Cycle#4.2.2 The Three Core Scrum Roles|Product Owner (value & backlog owner), Scrum Master (process coach & obstacle remover), Developers (usable Increment creators)]].
  - *Events & Artifacts*: [[Y2S1/CKS222 Software Process and Life Cycle#4.2.3 The Five Structured Scrum Events|Sprint Planning, Daily Scrum (15-min), Sprint Review, Retrospective; Product Backlog, Sprint Backlog, Product Increment]].
- **Agile Requirements & Definition of Done**:
  - *User Stories & The 3 Cs*: [[Y2S1/CKS222 Software Process and Life Cycle#4.3.1 User Story Format and the "Three Cs"|Canonical user story template; Ron Jeffries' Card, Conversation, and Confirmation]].
  - *The INVEST Framework*: [[Y2S1/CKS222 Software Process and Life Cycle#4.3.2 The INVEST Quality Validation Framework|Independent, Negotiable, Valuable, Estimable, Small, Testable requirements standards]].
  - *Definition of Done (DoD)*: [[Y2S1/CKS222 Software Process and Life Cycle#4.3.3 The Definition of Done (DoD) & Given-When-Then Criteria|Given-When-Then criteria; three mandatory layers: Story acceptance, process/code review compliance, and absolute integration/regression verification]].
- **Extreme Programming (XP)**:
  - *Feedback Loops & Refactoring*: [[Y2S1/CKS222 Software Process and Life Cycle#4.4.1 Extreme Programming Philosophy and Twin-Track Feedback|Weekly user story cycles and quarterly strategic theme cycles; continuous architecture refactoring replacing upfront design phases]].
  - *Social Practices*: [[Y2S1/CKS222 Software Process and Life Cycle#4.4.2 Core Social Behaviors in Co-Located XP Teams|Sit Together (co-location), Whole Team (cross-functional), informative workspaces with project slack]].
  - *Defect Prevention Triad*: [[Y2S1/CKS222 Software Process and Life Cycle#4.4.3 Advanced Technical XP Practices for Defect Prevention|Test-Driven Development (TDD: Red-Green-Refactor), Pair Programming (Driver/Navigator), and Continuous Integration with the 10-Minute Build mandate]].
- **Lean Software Development & Waste Elimination**:
  - *Lean Philosophy*: [[Y2S1/CKS222 Software Process and Life Cycle#4.5.1 Lean Principles Adapted from Manufacturing|Adapted from Toyota Production System (TPS); 4 core organizational capabilities and proactive standardization]].
  - *The 3 Software Wastes (Muda)*: [[Y2S1/CKS222 Software Process and Life Cycle#4.5.2 The Three Major Wastes in Software Development|Defects & Rework (production bugs cost 80% more), Overproduction/Gold Plating (bloated unrequested features), and Waiting/Handoff friction]].
- **Integrating Security: SDL-Agile & OWASP SAMM**:
  - *Microsoft SDL-Agile*: [[Y2S1/CKS222 Software Process and Life Cycle#4.6.2 Microsoft SDL-Agile: The Three Structured Timelines|Reconciles security rigor with agile speed via One-Time kickoff tasks, Every-Sprint mandatory automated SAST/threat modeling, and rotating Bucket requirements (Planning, Design, Verification); embedded Security Champions]].
  - *OWASP SAMM*: [[Y2S1/CKS222 Software Process and Life Cycle#4.6.3 OWASP SAMM: Software Assurance Maturity Model|Assesses security posture across 5 business functions (Governance, Design, Implementation, Verification, Operations) across 3 maturity levels (Initial, Defined, Optimizing)]].

---

# 🔗 Part II: Cross-Disciplinary Synthesis & Master Concept Matrix

---

## 5. Direct Conceptual Mappings Across Year 2 Subjects

```mermaid
flowchart LR
    subgraph CrossLinkages["Inter-Subject Conceptual Bridges"]
        direction TB
        B1["CCA201 File & Memory Managers<br/>(Cluster I/O & RAM Allocations)"] <===>|Buffer Tuning & Disk Spooling| B2["CCA202 DBMS Storage Engine<br/>(Data Dictionary & File Organization)"]
        B3["CCA202 Conceptual ERDs & Relational Tables"] <===>|Data Models as Logical & C&C Views| B4["CKS221 Architectural Views<br/>(Logical & C&C Structures)"]
        B5["CKS221 Quality Attributes & Architecture Contracts"] <===>|Scope Elements in A-SPSRI Bucket 2| B6["CKS222 Quantitative Controls<br/>(EVM Triads & Defect Cost Curves)"]
    end
```

| Domain / Concept | Source Subject & Topic | Destination Subject & Topic | Direct Interdisciplinary Synthesis |
| :--- | :--- | :--- | :--- |
| **Physical Storage vs. Logical Model** | [[Y2S1/CCA201 Operating Systems#1.2.4 File Manager|CCA201: File Manager]] | [[Y2S1/CCA202 Database Fundamentals#2.4 The ANSI/SPARC Four Levels of Data Abstraction|CCA202: ANSI/SPARC Physical Model]] | The OS File Manager manages raw secondary storage sector allocations, while the DBMS Physical Model translates relational tables into OS file blocks without exposing disk mechanics to end users. |
| **Process Concurrency & Mutual Exclusion** | [[Y2S1/CCA201 Operating Systems#1.2.2 Processor Manager|CCA201: Processor Manager]] | [[Y2S1/CKS221 Software Architecture and Design#2.4 Philippe Kruchten's "4+1" Architectural View Model|CKS221: Process View]] | Operating system CPU scheduling and thread state transitions form the concrete runtime infrastructure modeled abstractly in Kruchten's architectural Process View. |
| **Data Integrity & Anomalies** | [[Y2S1/CCA202 Database Fundamentals#1.5 Evolution of Data Processing: From File Systems to Databases|CCA202: File System Data Anomalies]] | [[Y2S1/CKS222 Software Process and Life Cycle#3.3 The Core Defect Cycle: Fault, Error, Failure & The Cost of Delay|CKS222: Defect Taxonomies]] | Failure to enforce structural independence and normalization in database schemas introduces latent human **faults** that manifest as runtime **errors** (contradictory records) and commercial system **failures**. |
| **Architectural Specifications as Project Controls** | [[Y2S1/CKS221 Software Architecture and Design#1.4 The Three Primary Categories of Architectural Structures|CKS221: Module & Allocation Structures]] | [[Y2S1/CKS222 Software Process and Life Cycle#3.4 Quantitative Project Governance: Earned Value Management (EVM)|CKS222: A-SPSRI Scope Bucket 2]] | Documenting Module and C&C structures directly satisfies the 7 architectural completeness criteria of the A-SPSRI rating index, preventing downstream defect cascades. |
| **Quality Attributes vs. Non-Functional Constraints** | [[Y2S1/CKS221 Software Architecture and Design#2.2 Quality Attributes (Non-Functional Requirements)|CKS221: Quality Attributes]] | [[Y2S1/CKS222 Software Process and Life Cycle#3.1 Software Engineering Lifecycle Activities: The Big Five|CKS222: Requirements Dilemmas]] | Architectural quality attributes (performance, modifiability, security) provide the rigorous mathematical targets required to resolve volatile user desires during requirements engineering. |
| **Continuous Integration & Quality Gating** | [[Y2S1/CKS222 Software Process and Life Cycle#4.4.3 Advanced Technical XP Practices for Defect Prevention|CKS222: XP CI & 10-Minute Build]] | [[Y2S1/CKS221 Software Architecture and Design#2.4.3 3. The Development View (Implementation View)|CKS221: Development View]] | XP's automated 10-minute continuous integration builds enforce structural constraints documented in Kruchten's Development View at commit time. |
| **Security Architecture vs. SDL-Agile Pipelines** | [[Y2S1/CKS221 Software Architecture and Design#2.2 Quality Attributes (Non-Functional Requirements)|CKS221: Security Quality Attribute]] | [[Y2S1/CKS222 Software Process and Life Cycle#4.6.2 Microsoft SDL-Agile: The Three Structured Timelines|CKS222: SDL-Agile Requirements]] | Architectural security attack surfaces and cryptographic protocols are verified dynamically across SDL-Agile's Every-Sprint and Bucket verification pipelines. |

---

## 6. Master Glossary of Core Terminology (Year 2)

- **[[Y2S1/CKS222 Software Process and Life Cycle#3.4 Quantitative Project Governance: Earned Value Management (EVM)|A-SPSRI (Agile Software Project Scope Rating Index)]]**: A 22-element quantitative audit framework measuring requirements, architectural, and verification completeness on a 0–100 scale to govern project risk.
- **[[Y2S1/CCA202 Database Fundamentals#2.4 The ANSI/SPARC Four Levels of Data Abstraction|ANSI/SPARC Framework]]**: A four-tier architectural database modeling framework (External, Conceptual, Internal, Physical) guaranteeing structural and data independence.
- **[[Y2S1/CKS221 Software Architecture and Design#3.1.1 Formal Definition of an Architectural Style|Architectural Style]]**: A specialization of element and relation types, together with a set of constraints on how they can be used, encompassing components, connectors, topological constraints, and semantic models.
- **[[Y2S1/CCA202 Database Fundamentals#4.5 Resolving M:N Relationships with Associative Entities|Associative Entity (Bridge Entity)]]**: An entity used to transform a conceptual M:N relationship into two 1:M relationships, with a composite primary key formed from the parent entities' foreign keys.
- **[[Y2S1/CCA201 Operating Systems#3.3.1 First-In, First-Out (FIFO) & Belady's Anomaly|Belady's Anomaly (FIFO Anomaly)]]**: The counter-intuitive phenomenon under FIFO page replacement where increasing the number of physical memory frames allocated to a process results in an increase in page faults.
- **[[Y2S1/CCA201 Operating Systems#2.3 Partition Allocation Algorithms: First-Fit vs. Best-Fit|Best-Fit Allocation]]**: A memory management algorithm that searches the entire free list to assign the smallest memory block with sufficient size, minimizing immediate wasted space.
- **[[Y2S1/CCA201 Operating Systems#2.5 Relocatable Dynamic Partitions: Compaction & Hardware Registers|Bounds Register]]**: A hardware processor register storing the maximum legal address of a partition, halting out-of-bounds memory accesses via hardware protection faults.
- **[[Y2S1/CCA202 Database Fundamentals#2.2 Business Rules: Bridging Business Logic to Schemas|Business Rule]]**: A brief, precise, unambiguous policy statement that establishes entity definitions, attributes, and relationship constraints in a data model.
- **[[Y2S1/CCA201 Operating Systems#3.7.2 Mathematical Caching Models|Cache Hit Ratio]]**: The percentage of memory access requests satisfied directly by high-speed cache memory rather than querying slower main RAM.
- **[[Y2S1/CCA202 Database Fundamentals#3.2.2 Taxonomy of Relational Database Keys|Candidate Key]]**: A minimal superkey without unnecessary or redundant attributes, based on full functional dependency and eligible for selection as the primary key.
- **[[Y2S1/CCA202 Database Fundamentals#3.6 Dr. E.F. Codd's Twelve Relational Database Rules (1985)|Codd's 12 Rules]]**: A set of twelve foundational principles formulated by Dr. E.F. Codd in 1985 to benchmark and define true relational database management systems.
- **[[Y2S1/CCA201 Operating Systems#2.5 Relocatable Dynamic Partitions: Compaction & Hardware Registers|Compaction (Defragmentation)]]**: The operating system process of shifting active programs in memory to consolidate scattered free holes into a single contiguous partition.
- **[[Y2S1/CKS221 Software Architecture and Design#1.4 The Three Primary Categories of Architectural Structures|Component-and-Connector (C&C) Structure]]**: An architectural structure consisting of runtime execution entities (components) and interaction pathways (connectors), governing performance and concurrency.
- **[[Y2S1/CCA202 Database Fundamentals#4.2 Attributes Classification in ER Models|Composite Attribute]]**: An attribute that can be subdivided into smaller meaningful component attributes (e.g., Address into Street, City, State, Zip).
- **[[Y2S1/CCA201 Operating Systems#4.1.3 Interrupts and Context Switching|Context Switch]]**: The operating system mechanism of saving the CPU register state, program counter, and memory mappings of an active process into its PCB and restoring the state of another.
- **[[Y2S1/CCA202 Database Fundamentals#3.5.2 Controlled Redundancy: Historical Accuracy Preservation|Controlled Redundancy]]**: The intentional, managed replication of data attributes (such as Foreign Keys or historical price snapshots) to enforce relational links and preserve point-in-time accuracy without creating unmanaged anomalies.
- **[[Y2S1/CCA202 Database Fundamentals#1.5 Evolution of Data Processing: From File Systems to Databases|Data Anomaly]]**: A condition developing in unnormalized or redundant data systems where updates, insertions, or deletions generate contradictory records or unintended data loss.
- **[[Y2S1/CCA202 Database Fundamentals#1.2 Database and Database Management System (DBMS) Concepts|DBMS (Database Management System)]]**: A software suite that manages database structures, controls access, enforces ACID consistency, and abstracts physical storage complexity.
- **[[Y2S1/CKS221 Software Architecture and Design#4.2.1 1. The Decomposition Style|Decomposition Style]]**: A module architectural style showing how system responsibilities are partitioned hierarchically into submodules via the `is-part-of` relation, constrained to be strictly acyclic with single parents.
- **[[Y2S1/CKS222 Software Process and Life Cycle#4.3.3 The Definition of Done (DoD) & Given-When-Then Criteria|Definition of Done (DoD)]]**: A formal, agreed-upon checklist of quality and technical standards (story acceptance, code refactoring, peer review, test pass rate, integration) that every backlog item must satisfy before being considered complete.
- **[[Y2S1/CCA201 Operating Systems#3.2 Demand Paging Memory Allocation|Demand Paging]]**: A virtual memory scheme that loads pages into physical memory frames only when actively requested by the CPU during execution, backed by secondary storage swapping.
- **[[Y2S1/CCA202 Database Fundamentals#4.2 Attributes Classification in ER Models|Derived Attribute]]**: An attribute whose value is not stored physically in persistent media but is computed dynamically on demand using an algorithm or existing stored attributes (e.g., Age from DOB).
- **[[Y2S1/CKS222 Software Process and Life Cycle#2.2 The 8-Step Descriptive Process Modeling Methodology|Descriptive Process Modeling]]**: The empirical engineering science of capturing, formulating, and standardizing the actual "As-Is" workflows enacted by software teams.
- **[[Y2S1/CCA202 Database Fundamentals#3.2.1 Determination and Functional Dependency|Determination]]**: The state in which knowing the value of one attribute (the determinant) uniquely identifies the value of another attribute (the dependent), denoted $A \to B$.
- **[[Y2S1/CCA201 Operating Systems#2.2 Four Foundational Early Memory Allocation Schemes|Dynamic Partitions]]**: A memory allocation scheme where jobs are allocated the exact memory requested upon arrival, eliminating internal fragmentation but introducing external fragmentation.
- **[[Y2S1/CCA202 Database Fundamentals#3.4.2 The Family of JOIN Operators (bowtie)|Equijoin]]**: A relational join operation linking tables based on an equality comparison operator ($=$), preserving duplicate comparison columns in the output relation.
- **[[Y2S1/CKS221 Software Architecture and Design#3.2.4 4. Event-Driven Architecture (EDA)|Event-Driven Architecture (EDA)]]**: An architectural style decoupling producers and consumers asynchronously around discrete state changes (events) via intermediary message brokers.
- **[[Y2S1/CKS222 Software Process and Life Cycle#3.4 Quantitative Project Governance: Earned Value Management (EVM)|EVM Triad]]**: A multi-dimensional project governance metric $(x\%, S_{xj}, C_{xj})$ integrating physical completion, A-SPSRI scope score, and actual costs to detect project failure.
- **[[Y2S1/CCA201 Operating Systems#2.2 Four Foundational Early Memory Allocation Schemes|External Fragmentation]]**: Memory waste occurring between allocated partitions when total free memory is sufficient, but fragmented into scattered non-contiguous blocks.
- **[[Y2S1/CKS222 Software Process and Life Cycle#4.4 Extreme Programming (XP): Values, Twin-Track Cycles, and Practices|Extreme Programming (XP)]]**: A disciplined, code-centric agile development method pushing beneficial software engineering practices to extreme levels (continuous refactoring, TDD, pair programming, 10-minute builds).
- **[[Y2S1/CCA201 Operating Systems#2.3 Partition Allocation Algorithms: First-Fit vs. Best-Fit|First-Fit Allocation]]**: A memory management algorithm that scans memory sequentially by address and allocates the very first block of sufficient size.
- **[[Y2S1/CCA201 Operating Systems#2.2 Four Foundational Early Memory Allocation Schemes|Fixed Partitions]]**: A static memory allocation scheme dividing RAM into predetermined slots supporting multiprogramming, susceptible to internal fragmentation.
- **[[Y2S1/CCA202 Database Fundamentals#3.2.1 Determination and Functional Dependency|Full Functional Dependence]]**: A condition in which a dependent attribute is determined by the entirety of a composite determinant and is not functionally dependent on any proper subset of it.
- **[[Y2S1/CCA202 Database Fundamentals#3.2.1 Determination and Functional Dependency|Functional Dependence]]**: The relationship where the value of one or more attributes uniquely determines the value of one or more other attributes in a table.
- **[[Y2S1/CKS221 Software Architecture and Design#4.2.3 3. The Generalization Style|Generalization Style]]**: A module style capturing commonalities and variations across modules via the `is-a` generalization/specialization relation to support reuse and evolution.
- **[[Y2S1/CCA202 Database Fundamentals#3.5.3 Database Indexing Mechanics|Index (Database)]]**: An ordered auxiliary search structure comprising index keys and physical memory/disk pointers designed to accelerate row retrieval from $O(N)$ to $O(\log N)$ or $O(1)$.
- **[[Y2S1/CKS222 Software Process and Life Cycle#4.3.2 The INVEST Quality Validation Framework|INVEST Framework]]**: A quality validation standard created by Bill Wake for agile user stories: Independent, Negotiable, Valuable, Estimable, Small, and Testable.
- **[[Y2S1/CCA201 Operating Systems#2.2 Four Foundational Early Memory Allocation Schemes|Internal Fragmentation]]**: Unusable memory space left inside an allocated partition when the partition assigned to a job exceeds the job's actual memory requirement.
- **[[Y2S1/CCA201 Operating Systems#4.2 The Two-Tier (and Three-Tier) Scheduling Hierarchy|Job Scheduler]]**: The high-level long-term scheduler responsible for selecting spooled jobs from the HOLD queue and admitting them into the READY queue based on resource limits.
- **[[Y2S1/CKS221 Software Architecture and Design#2.4 Philippe Kruchten's "4+1" Architectural View Model|Kruchten's 4+1 View Model]]**: An architectural framework organizing representations into Logical, Process, Development, and Physical views, bound together by the +1 Use Case view.
- **[[Y2S1/CKS221 Software Architecture and Design#4.2.4 4. The Layered Style|Layered Style]]**: A module architectural style grouping modules into ordered horizontal layers governed by unidirectional `allowed-to-use` relations to maximize portability and modifiability.
- **[[Y2S1/CKS222 Software Process and Life Cycle#4.5 Lean Software Development: Capabilities, Wastes, and Continuous Flow|Lean Software Development]]**: An adaptation of the Toyota Production System optimizing software value delivery streams through waste elimination (*Muda*), root cause analysis, and proactive standardization.
- **[[Y2S1/CKS222 Software Process and Life Cycle#3.2 Maintenance Engineering & Software Evolution: Lehman's Laws|Lehman's Laws of Software Evolution]]**: Empirical laws dictating that software systems must continually adapt (Law I) and will experience increasing complexity (Law II) unless actively refactored.
- **[[Y2S1/CKS221 Software Architecture and Design#3.2.7 7. Microservice Architecture|Microservice Architecture]]**: An architectural style decomposing applications into small, autonomous, independently deployable services organized around business capabilities with isolated databases.
- **[[Y2S1/CKS222 Software Process and Life Cycle#4.6.2 Microsoft SDL-Agile: The Three Structured Timelines|Microsoft SDL-Agile]]**: A lean security methodology structuring security compliance across One-Time kickoff requirements, Every-Sprint mandatory automated tasks, and rotating Bucket tasks, supported by embedded Security Champions.
- **[[Y2S1/CKS221 Software Architecture and Design#1.4 The Three Primary Categories of Architectural Structures|Module Structure]]**: A static architectural structure of implementation units (packages, classes) governing system modifiability and information hiding.
- **[[Y2S1/CKS221 Software Architecture and Design#4.1.1 Overview and Elements of Module Views|Module View]]**: An architectural view representing the static organization of code units (packages, classes), their documented properties, internal relations, and topological constraints.
- **[[Y2S1/CCA202 Database Fundamentals#3.4.2 The Family of JOIN Operators (bowtie)|Natural Join]]**: A relational join that links tables by comparing all common attributes, selecting rows with matching values, and projecting out duplicate join columns through a three-stage algebraic process.
- **[[Y2S1/CCA202 Database Fundamentals#2.3 Chronological Evolution of Data Models|NoSQL Databases]]**: High-performance, non-relational database architectures designed for Big Data, providing horizontal scale-out, high availability, and eventual consistency.
- **[[Y2S1/CCA201 Operating Systems#1.1 Fundamentals of Operating Systems|Operating System]]**: The chief software program managing all hardware and software resources, virtualizing execution environments, and enforcing system protection.
- **[[Y2S1/CKS222 Software Process and Life Cycle#4.6.3 OWASP SAMM: Software Assurance Maturity Model|OWASP SAMM]]**: A comprehensive software assurance maturity model assessing organizational security posture across 5 business functions and 15 practices across 3 progressive maturity levels.
- **[[Y2S1/CCA201 Operating Systems#3.2.2 The Page Fault Handling Cycle|Page Fault]]**: A hardware trap generated by the MMU when a program attempts to access a virtual memory page whose PMT status bit indicates it is not currently resident in physical RAM.
- **[[Y2S1/CCA201 Operating Systems#3.1.2 Paging Tracking Tables: JT, PMT, and MMT|Page Map Table (PMT)]]**: A process-specific table tracking the logical page to physical page frame mappings, along with status, modified (dirty), and reference bits.
- **[[Y2S1/CCA201 Operating Systems#3.1 Paged Memory Allocation|Paged Memory Allocation]]**: A non-contiguous memory management scheme dividing programs into fixed-size Pages and physical RAM into Page Frames, eliminating external fragmentation.
- **[[Y2S1/CKS221 Software Architecture and Design#3.2.2 2. Peer-to-Peer (P2P) Architecture|Peer-to-Peer (P2P) Architecture]]**: A decentralized network architecture where every node possesses symmetrical capabilities and responsibilities as both client and server.
- **[[Y2S1/CKS221 Software Architecture and Design#3.2.8 8. Data Flow Architecture (Pipe-and-Filter)|Pipe-and-Filter Architecture]]**: A data flow style where data streams are progressively transformed through a chain of stateless processing filters connected by unidirectional pipes.
- **[[Y2S1/CCA201 Operating Systems#4.5 Process Control Blocks (PCB) and Queue Topologies|Process Control Block (PCB)]]**: An authoritative kernel data structure storing all state, execution, memory, and accounting metadata for an active process.
- **[[Y2S1/CKS222 Software Process and Life Cycle#4.2.4 The Three Core Scrum Artifacts|Product Increment]]**: A concrete, fully-functional stepping stone toward the Product Goal that meets the Definition of Done and integrates seamlessly with all previous increments.
- **[[Y2S1/CCA201 Operating Systems#4.2 The Two-Tier (and Three-Tier) Scheduling Hierarchy|Process Scheduler]]**: The low-level short-term scheduler (dispatcher) that allocates CPU cores to processes in the READY queue and enforces preemption.
- **[[Y2S1/CCA201 Operating Systems#1.5 Taxonomy and Classifications of Operating Systems|Real-Time Operating System (RTOS)]]**: An operating system engineered for time-critical environments where computation correctness requires satisfying strict deadline constraints.
- **[[Y2S1/CCA202 Database Fundamentals#3.4 Relational Algebra and Set Operators|Relational Algebra]]**: A formal theoretical system of unary and binary set operators (Select, Project, Union, Intersect, Difference, Product, Join, Divide) that manipulate relations while upholding the property of closure.
- **[[Y2S1/CCA202 Database Fundamentals#2.3 Chronological Evolution of Data Models|Relational Model]]**: A data model representing information as two-dimensional tables (relations) linked logically through common attributes, governed by declarative SQL.
- **[[Y2S1/CCA201 Operating Systems#2.5 Relocatable Dynamic Partitions: Compaction & Hardware Registers|Relocation Register]]**: A hardware register holding the physical base memory address of an allocated job, added dynamically to logical addresses during execution.
- **[[Y2S1/CCA202 Database Fundamentals#3.1.3 Relation vs. Relvar (C.J. Date Formulation)|Relvar (Relation Variable)]]**: A named database container or variable holding a relation value, comprising an invariant heading schema and a dynamically mutating body.
- **[[Y2S1/CKS222 Software Process and Life Cycle#4.2.2 The Three Core Scrum Roles|Scrum Master (SM)]]**: The Scrum team role accountable for establishing Scrum as defined in the Scrum Guide, coaching the team, and removing organizational impediments.
- **[[Y2S1/CCA201 Operating Systems#3.4 Segmented Memory Allocation|Segment Map Table (SMT)]]**: A per-process table storing the base physical memory addresses and boundary lengths for each logical code/data segment.
- **[[Y2S1/CCA201 Operating Systems#3.4 Segmented Memory Allocation|Segmented Memory Allocation]]**: A memory management scheme dividing programs into variable-sized logical segments reflecting structural source code modules (main routines, procedures, arrays).
- **[[Y2S1/CCA201 Operating Systems#3.5 Segmented/Demand Paged Memory Allocation|Segmented Paging]]**: A hybrid virtual memory architecture subdividing variable-length logical segments into fixed-size physical pages to combine logical modularity with zero external fragmentation.
- **[[Y2S1/CKS221 Software Architecture and Design#3.2.6 6. Service-Oriented Architecture (SOA)|Service-Oriented Architecture (SOA)]]**: An enterprise architecture integrating distributed, reusable software components (services) communicating over a common bus platform (ESB).
- **[[Y2S1/CKS221 Software Architecture and Design#1.1 The Discipline and Foundations of Software Architecture|Software Architecture]]**: The set of software structures needed to reason about the system, comprising software elements, relations among them, and properties of both.
- **[[Y2S1/CKS222 Software Process and Life Cycle#1.1 Fundamentals of Software Engineering & Process|Software Process]]**: A structured set of goal-oriented activities enacted by humans and toolchains to construct, verify, deploy, or maintain software systems.
- **[[Y2S1/CKS222 Software Process and Life Cycle#4.2.1 Empirical Process Control and the Sprint Engine|Sprint]]**: A timeboxed iteration of 2 to 4 weeks in Scrum during which a usable, tested Product Increment is created, initiating the next Sprint immediately upon completion.
- **[[Y2S1/CKS221 Software Architecture and Design#4.1.1 Overview and Elements of Module Views|Subsystem]]**: An aggregated software module that carries out a functionally cohesive subset of the system's mission, can be executed independently, and can be developed incrementally.
- **[[Y2S1/CCA202 Database Fundamentals#3.2.2 Taxonomy of Relational Database Keys|Superkey]]**: Any attribute or combination of attributes that uniquely identifies every tuple within a relation, functionally determining all attributes in the row.
- **[[Y2S1/CKS222 Software Process and Life Cycle#4.4.3 Advanced Technical XP Practices for Defect Prevention|Test-Driven Development (TDD)]]**: An XP engineering practice where developers author automated unit tests before writing functional code, following the Red-Green-Refactor cycle.
- **[[Y2S1/CCA202 Database Fundamentals#3.4.2 The Family of JOIN Operators (bowtie)|Theta Join]]**: A relational join operation that links tables based on an explicit comparison operator other than simple equality (e.g., $<, \le, >, \ge, \ne$).
- **[[Y2S1/CCA201 Operating Systems#4.1.2 Foundational Definitions and Taxonomies|Thread]]**: A lightweight, schedulable unit of execution within a process that shares address space and system resources with sibling threads while maintaining its own program counter and stack.
- **[[Y2S1/CCA201 Operating Systems#3.2.4 System Thrashing|Thrashing]]**: A pathological operating state where the system spends significantly more time swapping pages between RAM and disk than executing user instructions, causing performance collapse.
- **[[Y2S1/CCA201 Operating Systems#3.5 Segmented/Demand Paged Memory Allocation|Translation Lookaside Buffer (TLB)]]**: High-speed on-chip associative cache registers that accelerate virtual-to-physical address translation by storing recently accessed page frame mappings.
- **[[Y2S1/CCA202 Database Fundamentals#3.4.1 Detailed Breakdown of Operators|Union-Compatibility]]**: The structural prerequisite for relational set operations (Union, Intersect, Difference) requiring that participating tables possess the same number of columns with matching domains.
- **[[Y2S1/CKS221 Software Architecture and Design#4.2.2 2. The Uses Style|Uses Style]]**: A module style tracking operational dependencies where Module A requires the correct functioning of Module B, facilitating incremental subset planning and test isolation.
- **[[Y2S1/CKS222 Software Process and Life Cycle#4.3.1 User Story Format and the "Three Cs"|User Story]]**: A lightweight, conversational requirements artifact formatted from the user's perspective (*As a... I want... so that...*), operationalized via Card, Conversation, and Confirmation.
- **[[Y2S1/CKS222 Software Process and Life Cycle#3.1 Software Engineering Lifecycle Activities: The Big Five|Verification vs. Validation (V&V)]]**: Verification confirms conformance to engineering specifications ("building the product right"); Validation confirms fulfillment of operational user needs ("building the right product").
- **[[Y2S1/CCA202 Database Fundamentals#4.3.3 Weak Entities|Weak Entity]]**: An entity that is existence-dependent on a parent entity and possesses a primary key partially or totally derived from the parent entity's primary key.
- **[[Y2S1/CCA201 Operating Systems#3.3.3 The Working Set Concept (Peter Denning)|Working Set]]**: The collection of pages referenced by an executing process within a recent time window $\Delta$, used by the operating system to prevent thrashing.
