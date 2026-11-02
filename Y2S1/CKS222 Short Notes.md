---
title: CKS222 Short Notes (Test 1 Objective Examination Cram Sheet)
course_code: CKS222
course_title: Software Process and Life Cycle
academic_term: Semester 1, 2026/2027
exam_target: Test 1 (Objective Examination / MCQs / True-False / Concept Matching)
scope: Weeks 1 to 5 (Chapters 1 to 5)
tags:
  - cks222
  - test1
  - exam-prep
  - software-process
  - short-notes
  - cheat-sheet
---

# CKS222 Short Notes: Test 1 Objective Exam Cram Sheet

> [!abstract] Fast Navigation & Document Architecture
> This document is engineered specifically for **objective-style assessments** (Multiple Choice Questions, True/False, Terminology Matching, Quick Calculations, and Concept Discrimination). It distills all examinable content across **Weeks 1 to 5** from [[Y2S1/CKS222 Software Process and Life Cycle|CKS222: Software Process and Life Cycle]].
> 
> - **[[#Module 1: The Ultimate Objective Test Cheat Sheet (At-a-Glance Matrices)|Module 1: The Ultimate Objective Test Cheat Sheet (At-a-Glance Matrices)]]**
>   - 1.1 Master Timeline, Pioneers & Seminal Frameworks
>   - 1.2 Standards, Statutory Regulations & Industrial Disasters
>   - 1.3 Critical Numbers, Percentages, Timeboxes & Cadences
>   - 1.4 Mathematical Formulas & Calculation Cheat Sheet
> - **[[#Module 2: Chapter-by-Chapter High-Yield Core Summaries|Module 2: Chapter-by-Chapter High-Yield Core Summaries]]**
>   - 2.1 Week 1: Introduction to Software Process & Lifecycle Foundations
>   - 2.2 Week 2: Descriptive Process Definition & Modeling (8 Steps, MVP-L, SPEM 2.0)
>   - 2.3 Week 3: Lifecycle Controls, EVM, RACI & Scope Governance
>   - 2.4 Week 4: Agile, Scrum, XP, Lean & Security Integration (SDL-Agile, SAMM)
>   - 2.5 Week 5: Prescriptive Lifecycles, V-Model, Prototyping, Tailoring & Defect Economics
> - **[[#Module 3: High-Probability MCQ "Versus" Discrimination Matrices|Module 3: High-Probability MCQ "Versus" Discrimination Matrices]]**
> - **[[#Module 4: Top 20 Objective Test "Trap & Trick" Alerts|Module 4: Top 20 Objective Test "Trap & Trick" Alerts]]**
> - **[[#Module 5: 25 High-Yield Rapid-Fire Objective Practice Questions with Explanations|Module 5: 25 High-Yield Rapid-Fire Objective Practice Questions with Explanations]]**

---

# Module 1: The Ultimate Objective Test Cheat Sheet (At-a-Glance Matrices)

## 1.1 Master Timeline, Pioneers & Seminal Frameworks

| Year | Pioneer / Organization | Methodology / Contribution | Core Objective / Defining Concept | Primary Exam Anchor |
| :---: | :--- | :--- | :--- | :--- |
| **1965** | **Bruce Tuckman** | Group Development Model | 5 Stages: Forming $\to$ Storming $\to$ Norming $\to$ Performing $\to$ Adjourning. | [[Y2S1/CKS222 Software Process and Life Cycle#3.3.2 Tuckman's Model of Group Development|Tuckman Model]] |
| **1970** | **Dr. Winston W. Royce** | Waterfall Lifecycle (with Feedback Loops) | Linear sequential progression; warned single-pass is flawed; mandated **preliminary design prototype**. | [[Y2S1/CKS222 Software Process and Life Cycle#1.5.2 Winston Royce's Waterfall Model (1970)|Royce Waterfall]] |
| **1972** | **David Parnas** | Information Hiding Principle | Encapsulating internal implementation; adapted by MVP-L (Process Interface vs. Process Body). | [[Y2S1/CKS222 Software Process and Life Cycle#2.3.2 Multi-View Process Language (MVP-L)|Information Hiding in Processes]] |
| **1975** | **Victor Basili & Albert Turner** | Iterative Enhancement Model | Identify **architectural kernel** first; cyclic local waterfalls; mandatory **architectural consolidation**. | [[Y2S1/CKS222 Software Process and Life Cycle#5.5.1 Basili and Turner's 1975 Iterative Enhancement Model|Iterative Enhancement]] |
| **1981** | **Barry Boehm** | Defect Cost Multiplier Curve | Cost to fix defects grows exponentially across SDLC ($1\times \to 1000\times$). | [[Y2S1/CKS222 Software Process and Life Cycle#5.7.3 The Exponential Defect Cost Multiplier Curve across the SDLC|Defect Cost Multipliers]] |
| **1986** | **Barry Boehm** | Spiral Model | **Risk-driven** meta-model; 4 quadrants; radial expansion dictates engineering intensity. | [[Y2S1/CKS222 Software Process and Life Cycle#1.5.4 Barry Boehm's Spiral Model (1986)|Boehm Spiral Model]] |
| **1987** | **Harlan Mills et al. (IBM)** | Cleanroom Software Engineering | Zero defect prevention; Box Structures; **strictly no compiler debugging**; independent statistical certification (MTTF). | [[Y2S1/CKS222 Software Process and Life Cycle#1.5.6 IBM's Cleanroom Software Engineering (1987)|Cleanroom Engineering]] |
| **1991** | **James Martin** | Rapid Application Development (RAD) | 4-Phase compressed lifecycle (60–90 days); Joint Application Design (JAD); CASE tools & visual code generation. | [[Y2S1/CKS222 Software Process and Life Cycle#5.4.4 Rapid Application Development: The 4-Phase Timeboxed Lifecycle|RAD Lifecycle]] |
| **1992** | **Bill Curtis, Marc Kellner & Jerry Over** | 5 Core Objectives of Process Modeling | Understand/Communicate, Improve/Optimize, Manage/Plan/Control, Guide/Instruct (EPG), Automate/Execute. | [[Y2S1/CKS222 Software Process and Life Cycle#2.1.2 The Five Core Objectives of Process Modeling (Curtis et al., 1992)|Curtis 5 Objectives]] |
| **1999** | **Jacobson, Booch & Rumbaugh** | Unified Process (UP) | Architecture-centric, use-case driven, iterative/incremental. 4 phases: Inception, Elaboration, Construction, Transition. | [[Y2S1/CKS222 Software Process and Life Cycle#1.5.5 The Unified Process (UP)|Unified Process]] |
| **2001** | **Agile Manifesto (17 Authors)** | Manifesto for Agile Software Development | 4 Core Values; individuals, working software, customer collaboration, responding to change. | [[Y2S1/CKS222 Software Process and Life Cycle#4.1.1 The Agile Philosophy and Core Values|Agile Manifesto]] |
| **2003** | **Walt Lipke** | Earned Schedule (ES) | Time-based extension fixing traditional EVM late-stage metric collapse ($SV_t = ES - AT$). | [[Y2S1/CKS222 Software Process and Life Cycle#3.4.3 The Late-Stage Metric Collapse & The Earned Schedule (ES) Remedy|Earned Schedule]] |
| **2003** | **Mary & Tom Poppendieck** | Lean Software Development | Adapted Toyota Production System (TPS); eliminate 3 Wastes (*Muda*); root cause analysis (5 Whys). | [[Y2S1/CKS222 Software Process and Life Cycle#4.5 Lean Software Development: Capabilities, Wastes, and Continuous Flow|Lean Software Development]] |
| **2004** | **Kent Beck** | Extreme Programming (XP) | Twin-track feedback (Quarterly/Weekly); TDD; Pair Programming; Continuous Integration ($\le 10$-min build). | [[Y2S1/CKS222 Software Process and Life Cycle#4.4 Extreme Programming (XP): Values, Twin-Track Cycles, and Practices|Extreme Programming]] |
| **2008** | **Object Management Group (OMG)**| SPEM 2.0 Standard | UML Profile; separates reusable Method Content from dynamic Process Workflows; EPF Composer. | [[Y2S1/CKS222 Software Process and Life Cycle#2.4 OMG SPEM 2.0 & Tooling (EPF Composer)|SPEM 2.0]] |
| **2012** | **Jürgen Münch & Oliver Armbrust** | 4 Ps Process Tailoring Framework | Systematic process adaptation across **Problem, Project, People, Product**. | [[Y2S1/CKS222 Software Process and Life Cycle#5.7.2 Münch's 4 Ps Tailoring Framework: Problem, Project, People, Product|Münch 4 Ps]] |
| **2015** | **The Standish Group** | CHAOS Report (25,000+ Projects) | Empirical failure stats: General 17–22% fail, 40–50% challenged. Large Waterfall fails 42% vs. Agile 23%. | [[Y2S1/CKS222 Software Process and Life Cycle#1.1.2 The Software Crisis & Failure Rates: CHAOS Report Findings|CHAOS Report]] |
| **2020** | **Schwaber & Sutherland** | The Scrum Guide | 3 Roles (PO, SM, Devs), 5 Events (Sprint, Planning, Daily, Review, Retro), 3 Artifacts (PB, SB, Increment). | [[Y2S1/CKS222 Software Process and Life Cycle#4.2 The Scrum Framework: Roles, Events, and Artifacts|Scrum Guide]] |
| **2020** | **OWASP Foundation** | SAMM 2.0 | 5 Business Functions, 15 Practices, 30 Streams, 3 Maturity Levels for software security assurance. | [[Y2S1/CKS222 Software Process and Life Cycle#4.6.3 OWASP SAMM: Software Assurance Maturity Model|OWASP SAMM 2.0]] |

---

## 1.2 Standards, Statutory Regulations & Industrial Disasters

| Standard / Incident | Full Scope / Context | Mandatory Regulatory Domain / Key Lesson | Core Exam Keyword |
| :--- | :--- | :--- | :--- |
| **ISO/IEC/IEEE 24765** | Systems and Software Engineering Vocabulary | Defines Software Engineering: systematic application of scientific knowledge to design, implementation, testing, docs. | Formal SE Definition |
| **IEC 61508** | Functional Safety Umbrella Standard | Governs electrical, electronic, and programmable electronic safety-related systems across all industries. | Umbrella Safety |
| **ISO 26262** | Road Vehicles — Functional Safety | Automotive adaptation of IEC 61508; defines Automotive Safety Integrity Levels (**ASIL A to D**). | Automotive Safety |
| **IEC 62304** | Medical Device Software | Mandates software lifecycle processes and post-market safety surveillance for medical software. | Medical Devices |
| **CMMI / SPICE** | Capability Maturity Model Integration & ISO/IEC 15504 | Standardized process assessment frameworks; strategic necessity for bidding on high-maturity contracts. | Process Maturity |
| **Texas DIR (2008)** | Texas Department of Information Resources Standard | Mandates 8 essential quality standards for requirements (Correct, Unambiguous, Complete, Consistent, etc.). | Requirements Standards |
| **ECSS** | European Cooperation for Space Standardization | Mandated by the European Space Agency (ESA) for spacecraft and satellite software engineering. | Space Systems |
| **SPEM 2.0** | Systems Process Engineering Metamodel (OMG) | International standard metamodel decoupling static Method Content from dynamic Execution Processes. | Process Metamodel |
| **NASA Mars Climate Orbiter ($125M Loss, 1999)** | Destroyed at 57 km instead of safe 226 km | **Interface Mismatch:** Lockheed Martin ground file used **English Imperial ($\text{lbf}\cdot\text{s}$)**; NASA JPL software expected **Metric SI ($\text{N}\cdot\text{s}$)** ($1\text{ lbf}\cdot\text{s} \approx 4.45\text{ N}\cdot\text{s}$). Failure of constructive interface review. | Units Mismatch Disaster |

---

## 1.3 Critical Numbers, Percentages, Timeboxes & Cadences

```mermaid
flowchart LR
    subgraph Timeboxes["Rigid Timeboxes to Memorize"]
        direction TB
        T1["Sprint: 2 to 4 Weeks (<= 1 Month)"]
        T2["Daily Scrum: Exactly 15 Minutes"]
        T3["Sprint Planning: Max 8 Hours (for 1-mo sprint)"]
        T4["Sprint Review: Max 4 Hours (for 1-mo sprint)"]
        T5["Sprint Retrospective: Max 3 Hours (for 1-mo sprint)"]
        T6["RAD Project: 60 to 90 Days Total"]
        T7["XP Build & Regression: <= 10 Minutes"]
        T8["SQA Conformance Audit: Every 3 Months"]
    end
```

- **Standish Group CHAOS Report Findings:**
  - Overall Projects: **17% to 22%** total failure (canceled), **40% to 50%** challenged (over-budget, late, feature-impaired).
  - Small Projects: Agile fails **4%** vs. Waterfall fails **11%**.
  - Large Projects: Agile fails **23%** vs. Waterfall fails **42%** (requirements volatility).
- **HP Industrial Adoption Survey (N = 601):**
  - **51%** Leaning Agile, **24%** Hybrid, **16%** Pure Agile, **7%** Leaning Waterfall, **2%** Pure Waterfall.
  - Top benefits: **54%** cross-team collaboration, **52%** software quality, **43%** time-to-market, **42%** development cost reduction.
- **Rework Economics:** Rework discovered in live customer production costs up to **80% more** (Lean) and **100$\times$ to 1000$\times$ more** (Boehm Defect Multiplier) than early defect prevention during requirements.
- **Fist of Five Voting Cutoff:** Any score **below 3 (Fist [0], 1, or 2)** acts as an immediate **process halt trigger** requiring debate and compromise until universal consensus ($\ge 3$) is achieved.
- **Code Smell Thresholds:** Bloated functions $>10$ lines; excessive parameter lists $>4$ arguments.
- **A-SPSRI Scope Rating:** Evaluates **22 elements** across **3 buckets** (Bucket 1: 8 User Story/Req, Bucket 2: 7 Architecture, Bucket 3: 7 Verification).
- **OWASP SAMM Architecture:** **5 Business Functions**, **15 Security Practices** (3 per function), **30 Practice Streams** (Streams A & B), **3 Progressive Maturity Levels** (1: Ad-hoc, 2: Structured, 3: Automated/Optimizing).

---

## 1.4 Mathematical Formulas & Calculation Cheat Sheet

| Metric / Indicator | Formula | Interpretation / Exam Decision Rules |
| :--- | :--- | :--- |
| **Process-Product Causality** | $\text{Goal} \approx f(\text{Process}, \text{Context})$ | Product quality is non-deterministic; driven by process rigor conditioned on context. |
| **Cost Variance (CV)** | $CV = EV - AC$ | $CV > 0 \implies$ Under budget (Good)<br>$CV < 0 \implies$ **Over budget** (Bad)<br>$CV = 0 \implies$ Exactly on budget |
| **Schedule Variance (SV)** | $SV = EV - PV$ | $SV > 0 \implies$ Ahead of schedule (Good)<br>$SV < 0 \implies$ **Behind schedule** (Bad)<br>$SV = 0 \implies$ Exactly on planned physical volume |
| **Cost Performance Index (CPI)** | $CPI = \frac{EV}{AC}$ | $CPI > 1.0 \implies$ Cost efficient ($>\text{RM } 1$ value per RM 1 spent)<br>$CPI < 1.0 \implies$ **Cost inefficient** ($<\text{RM } 1$ value per RM 1 spent) |
| **Schedule Performance Index (SPI)**| $SPI = \frac{EV}{PV}$ | $SPI > 1.0 \implies$ Progressing faster than planned<br>$SPI < 1.0 \implies$ **Progressing slower than planned**<br>*(Warning: Collapses to $1.00$ at project end!)* |
| **Earned Schedule Variance ($SV_t$)**| $SV_t = ES - AT$ | In time units (months/weeks). $SV_t < 0 \implies$ **Calendar delay** ($AT > ES$). |
| **Earned Schedule Index ($SPI_t$)** | $SPI_t = \frac{ES}{AT}$ | In time units. Does NOT collapse at project end. True velocity indicator. |
| **EVM Milestone Triad** | $\left( x\%, S_{xj}, C_{xj} \right)$ | $x\%$: Milestone progress, $S_{xj}$: Scope score ($0-100$), $C_{xj}$: Accumulated cost. |
| **Boehm Defect Multiplier** | $C(t) \propto k^t$ | Requirements ($1\times$) $\to$ Coding ($10-15\times$) $\to$ Integration ($30-50\times$) $\to$ Production ($100-1000\times$). |
| **Impulse Unit Conversion** | $1\text{ lbf}\cdot\text{s} \approx 4.44822\text{ N}\cdot\text{s}$ | Mars Climate Orbiter mismatch: Lockheed Imperial vs. NASA Metric. |

---

# Module 2: Chapter-by-Chapter High-Yield Core Summaries

## 2.1 Week 1: Introduction to Software Process & Lifecycle Foundations

### Four Pillars of Professional Software Engineering
1. **Systematic & Disciplined Execution:** Predictable, repeatable workflows replacing ad-hoc hacking.
2. **Quantitative Foundations:** Architectural and management choices backed by formal metrics and empirical baselines.
3. **Documented Traceability:** Every code artifact traces backwards to requirements and forward to test cases.
4. **Team Coordination:** Manages distributed human hierarchies, cross-functional dependencies, and handoffs.

### Process vs. Process Model
- **Software Process:** The real-world set of activities, tasks, human enactments, and automated executions that transform input artifacts into deliverables.
- **Software Process Model:** An abstract, simplified conceptual representation of a process (the **"Recipe" analogy**).

### Prescriptive vs. Descriptive Models & Continuous Improvement Loop
- **Prescriptive Models:** Dictate how a process **SHOULD** be executed (idealized standards: Scrum, Waterfall, CMMI).
- **Descriptive Models:** Document how a process **IS ACTUALLY** executed in reality (empirical observation, telemetry, "As-Is" workarounds).
- **Improvement Cycle:** Descriptive Modeling ("As-Is") $\to$ Improvement Analysis (Gaps) $\to$ Prescriptive Formulation ("To-Be") $\to$ Enactment (Institutionalization into new descriptive reality).

### Four Non-Negotiable Prerequisites for Process Tailoring
1. **Scope of Validity:** Explicitly defines the organizational/technical boundaries where the process applies.
2. **Process Impact:** Quantifiable benefits known in advance (e.g., $-30\%$ defect leakage).
3. **Degree of Confidence:** Empirical grounding supporting the model across multiple real-world settings.
4. **Tailorability:** Built-in modular adjustment levers allowing tasks to be adapted or omitted.

### Lifecycle Models vs. Engineering Process Models
- **Lifecycle Models:** High abstraction; end-to-end scope (concept to retirement); focuses on **WHAT** activities to perform and sequence (e.g., Waterfall, Spiral, Unified Process).
- **Engineering Process Models:** Low abstraction; granular operational focus on a specific phase/technique; focuses on **HOW** to perform work with specific tools/rules (e.g., Cleanroom code proving, CoBRA cost estimation).

### Early Milestone Models
- **Royce Waterfall (1970):** Staged linear progression. Royce explicitly advocated for feedback loops between adjacent phases and warned against pure single-pass execution.
- **Basili & Turner Iterative Enhancement (1975):** Early executable **architectural kernel**; successive local waterfalls; mandatory refactoring via **architectural consolidation**.
- **Boehm Spiral Model (1986):** **Risk-driven** meta-model; 4 quadrants (Objectives, Risk Resolution, Development & Verification, Next Phase Planning); heavily dependent on expert risk analysts.
- **Unified Process (1999):** Architecture-centric, use-case driven, iterative/incremental; 4 phases: **Inception**, **Elaboration** (architectural baseline & risk mitigation), **Construction**, **Transition**.
- **Cleanroom Software Engineering (1987):** Harlan Mills (IBM). Box structures (black box, state box, clear box); mathematical correctness proofs; **strictly no compiler debugging by developers**; independent certification team executes statistical testing based on Markov **Usage Specifications** to certify **Mean Time To Failure (MTTF)**.

---

## 2.2 Week 2: Descriptive Process Definition & Modeling

### The 5 Core Objectives of Process Modeling (Curtis, Kellner & Over, 1992)
1. **Facilitate Human Understanding and Communication:** Create accessible visual representations and shared vocabulary.
2. **Support Process Improvement & Optimization:** Pinpoint bottlenecks, deadlocks, and unnecessary rework.
3. **Support Process Management, Planning & Control:** Connect tasks, allocate roles, track milestone progress.
4. **Provide Automated Guidance & Human Instruction:** Generate Electronic Process Guides (EPGs) and work instructions.
5. **Enable Automated Execution Support:** Drive automated CI/CD pipelines and machine-interpretable process engines.

### The 8-Step Descriptive Process Modeling Methodology
```mermaid
flowchart LR
    subgraph Setup["Set-up Phase"]
        S1["Step 1: Objectives & Scope"] --> S2["Step 2: Process Schema (Metamodel)"]
        S2 --> S3["Step 3: Formalisms Selection"] --> S4["Step 4: Elicitation Planning"]
    end
    subgraph Exec["Execution & Consolidation Phase"]
        S5["Step 5: Process Elicitation"] --> S6["Step 6: Multi-View Modeling"]
        S6 --> S7["Step 7: Model Analysis & QA"] --> S8["Step 8: Packaging & Release (EPG)"]
    end
    Setup ==> Exec
```
- **Step 1 Scoping Profiles:**
  - *DocVault:* Single workflow (defect management), extremely narrow, subcontractor audience.
  - *Selene:* Entire lifecycle, exceptionally wide, training/onboarding handbook.
  - *Soster:* Customization process only, mid-range, metric hooks for SPI.
- **Step 2 Metamodel Entities:** `Activity`, `Work Product`, `Role`, `Resource`.
- **Step 5 Elicitation Methods:** Interviews (detailed but idealized), Group Workshops (reconciles boundaries), Direct Observation (reveals workarounds, risk of Hawthorne effect), Artifact/Repository Analysis (hard ground truth, lacks 'why').
- **Step 7 Structural Defects:** Dangling Reference (consumes unproduced artifact), Inconsistent Precondition (contradictory entry gate), Orphan Entity (declared but unused), Dependency Deadlock (circular blocking).

### Notation Dimensions & The 8 Formal Requirements (R1–R8)
- **4 Dimensions (Münch & Armbrust):** Programming vs. Improvement; Hidden vs. Guiding; Prescriptive vs. Proscriptive; Single-Person vs. Multi-Person.
- **R1 to R8:** **R1** Natural Representation, **R2** Support of Measurement (GQM), **R3** Tailorability, **R4** Formality, **R5** Understandability, **R6** Executability, **R7** Flexibility, **R8** Traceability.

### Multi-View Process Language (MVP-L)
- Designed for SPI, QIP, and GQM at Maryland/Kaiserslautern.
- **David Parnas Information Hiding:** Process interface (visible product parameters, attributes, entry/exit criteria) decouples from process body (hidden internal execution steps). Localizes process evolution.
- **4 Typed Models:** `product_model`, `resource_model`, `process_model`, `attribute_model`.
- **Implicit Control Flow:** Governed strictly by Boolean entry criteria state transitions (`Enabled` $\to$ `Active` $\to$ `Disabled`). Local invariants monitor execution bounds.

### OMG SPEM 2.0 & EPF Composer
- **SPEM 2.0 Triad:** `RoleDefinition` ("WHO"), `TaskDefinition` ("WHAT"), `WorkProductDefinition` ("OUTCOME"), plus `Guidance`.
- **Core Decoupling:** Separates static **Method Content** (abstract libraries) from dynamic **Context-Specific Processes** (lifecycle phases, `RoleUse`, `TaskUse`).
- **EPF Composer Variability Patterns:**
  1. **Contribute:** Appends checklists/guidelines without touching base library.
  2. **Replace:** Substitutes a base element entirely.
  3. **Extend:** Inherits properties and allows specialization (like OOP class inheritance).
  4. **Extend and Replace:** Inherits, specializes, and suppresses the original element from publication.

---

## 2.3 Week 3: Lifecycle Controls, EVM, RACI & Scope Governance

### Verification vs. Validation (V&V)
- **Verification:** *"Did we build the system right?"* Conformance to engineering specifications (static analysis, inspections, unit tests).
- **Validation:** *"Did we build the right system?"* Fulfillment of end-user needs and business utility (UAT, beta testing, customer focus groups).

### Technical Debt & Code Smells
- **Refactoring:** Improving internal code structure **without altering external observable behavior**.
- **Seven Core Lecture Smells (Week 3 Slide 8):** (1) Obsolete comments, (2) Commented-out dead code, (3) Duplicate code (copy-paste), (4) Vague identifiers/naming, (5) Functions with too many jobs (SRP violation), (6) Bloated routines ($>10$ lines), (7) Excessive parameter lists ($>4$ arguments).

### 8 Engineering Qualities of Requirements (Texas DIR, 2008)
1. **Correct**, 2. **Unambiguous**, 3. **Complete**, 4. **Consistent**, 5. **Ranked for Priority**, 6. **Verifiable / Testable** (quantitative criteria required), 7. **Modifiable**, 8. **Traceable**.

### RACI Governance Rules & Authoritative Allocation
- **R (Responsible):** The doer. At least one R required.
- **A (Accountable):** Sole decision-maker with veto authority. **STRICTLY ONE 'A' PER DELIVERABLE.**
- **C (Consulted):** Two-way advisory communication.
- **I (Informed):** One-way update communication.
- **Lecture Deliverables (Week 3 Slide 14):**
  - *Requirements Specification:* Frontend Lead (**A/I**), Frontend Dev (**R**), Backend Dev (**R**), Team Lead (**C/I**).
  - *Interface / API Design:* Backend Dev (**A**), Frontend Dev (**R**), Frontend Lead (**I**), Team Lead (**I**).
  - *Backend Coding:* Backend Dev (**R/A**), Frontend Lead (**C**), Frontend Dev (**I**), Team Lead (**I**).
  - *UAT:* Frontend Lead (**R/A**), Frontend Dev (**R**), Backend Dev (**R**), Team Lead (**C/I**).

### Structured Decision-Making: Eisenhower & Fist of Five
- **Eisenhower Matrix:**
  - *Do (Urgent & Important):* Production hotfixes, onboarding documentation for blocked devs.
  - *Delegate (Urgent & Not Important):* Admin ticket logging, license updates.
  - *Decide (Not Urgent & Important):* Strategic refactoring, paying technical debt, architectural reviews.
  - *Delete (Not Urgent & Not Important):* Unused vanity prototypes.
- **Fist of Five:** Fist ($0$) = Strong reject / block; $1-2$ = Reject requiring discussion; $3$ = Weak acceptance; $4$ = Solid agreement; $5$ = Total endorsement. **Rule: Any vote $<3$ halts the process.**

### Quantitative Auditing: EVM, Earned Schedule & EVM Triads
- **The EVM Flaw:** When a project completes late ($AT > \text{Planned}$), $EV \to BAC$ and $PV \to BAC$. Thus $SV = EV - PV = 0$ and $SPI = EV / PV = 1.00$! This creates a false illusion of on-schedule performance.
- **Earned Schedule (ES):** Converts performance to time units ($SV_t = ES - AT$, $SPI_t = ES / AT$).
- **EVM Triads:** Milestone assessment via $(x\%, S_{xj}, C_{xj})$. Evaluates whether scope completeness ($S_{xj}$) matches budget burn ($C_{xj}$), preventing scope creep blindspots.

---

## 2.4 Week 4: Agile, Scrum, XP, Lean & Security Integration

### The 4 Agile Manifesto Values (2001)
1. **Individuals and interactions** over processes and tools.
2. **Working software** over comprehensive documentation.
3. **Customer collaboration** over contract negotiation.
4. **Responding to change** over following a plan.

### Scrum Framework Architecture
- **Three Pillars of Empiricism:** **Transparency**, **Inspection**, **Adaptation**.
- **Three Roles:**
  - *Product Owner (PO):* Maximizes product value; sole owner of Product Backlog; decides **WHAT** and **PRIORITY**.
  - *Scrum Master (SM):* Process coach; servant-leader; removes developer impediments; ensures Scrum adherence.
  - *Developers:* Self-managing; cross-functional; build usable Increment; decide **HOW** and **HOW MUCH**.
- **Five Events:**
  - *Sprint:* Container event (2 to 4 weeks / $\le 1$ month); continuous cadence.
  - *Sprint Planning:* Max 8h (for 1-mo sprint). Topic 1: Why (Sprint Goal), Topic 2: What (PBIs), Topic 3: How (Tasks $\le 1$ day).
  - *Daily Scrum:* Exactly 15 minutes; developers inspect progress toward Sprint Goal; 3 questions.
  - *Sprint Review:* Max 4h (for 1-mo sprint); live working software demonstration to stakeholders; backlog adaptation.
  - *Sprint Retrospective:* Max 3h (for 1-mo sprint); inspect people, relationships, processes, tools, DoD.
- **Three Artifacts & Commitments:**
  - *Product Backlog* $\to$ Committed to **Product Goal**.
  - *Sprint Backlog* $\to$ Committed to **Sprint Goal**.
  - *Product Increment* $\to$ Committed to **Definition of Done (DoD)**.

### Agile Requirements: INVEST, Three Cs, GWT & DoD
- **User Story:** $\text{As a } \langle \text{role} \rangle, \text{ I want } \langle \text{feature} \rangle \text{ so that } \langle \text{benefit} \rangle$.
- **Ron Jeffries' Three Cs:** **Card** (token representation), **Conversation** (dialogue), **Confirmation** (acceptance tests).
- **INVEST Mnemonic (Bill Wake):** **I**ndependent, **N**egotiable, **V**aluable, **E**stimable, **S**mall, **T**estable.
- **Given-When-Then (GWT):** Given $\langle \text{Context/Precondition} \rangle$, When $\langle \text{Trigger/Action} \rangle$, Then $\langle \text{Observable Outcome} \rangle$.
- **Definition of Done (DoD):** Applied globally across all PBIs. 3 mandatory layers: (1) Core story acceptance criteria pass, (2) Process compliance (refactored, code review approved, zero SAST warnings), (3) Absolute integration (merged to trunk, automated regression tests pass, deployable artifact).

### Extreme Programming (XP - Kent Beck)
- **Twin-Track Feedback:** Quarterly Theme Cycle (strategic themes, project slack) and Weekly User Story Cycle (tactical execution).
- **Core Social Practices:** *Sit Together* (co-location, osmotic communication), *Whole Team* (on-site customer representative), *Project Slack* (optional tasks dropped during crunches).
- **Core Technical Practices:**
  - *Test-Driven Development (TDD):* **Red** (write failing test) $\to$ **Green** (minimal code to pass) $\to$ **Refactor** (clean design without altering behavior).
  - *Pair Programming:* **Driver** (writes code/syntax) and **Navigator** (continuous review/edge cases/architecture); collective code ownership.
  - *Continuous Integration & The 10-Minute Build:* Integrate code every few hours; build and test suite execution must finish in $\le 10$ minutes.

### Lean Software Development (Poppendieck)
- **Three Wastes (*Muda*):** (1) **Defects & Rework** (production fixes cost up to $80\%$ more), (2) **Overproduction / Gold Plating** (features nobody asked for; violates YAGNI), (3) **Waiting & Handoffs** (approval delays, context switching).
- **Standard Work:** Establishing baseline SOPs to enable systematic *Kaizen* (continuous improvement).

### Security Integration: SDL-Agile & OWASP SAMM
- **Microsoft SDL-Agile Timelines:**
  1. *One-Time Kickoff:* Security contacts, attack surface definition, baseline threat model.
  2. *Every-Sprint Mandatory:* Daily SAST in CI, threat modeling for new stories, input filtering, approved crypto (no MD5/SHA1).
  3. *Bucket Tasks (Rotating):* Planning, Design Review, Verification (at least one completed per sprint).
  - *Security Champions:* Developers trained in security embedded directly in squads.
- **OWASP SAMM 2.0:**
  - 5 Functions: Governance, Design, Implementation, Verification, Operations.
  - 15 Practices (3 per function), 30 Streams (Streams A & B).
  - 3 Maturity Levels: 1 (Ad-hoc), 2 (Structured), 3 (Automated/Optimizing).

---

## 2.5 Week 5: Prescriptive Lifecycles, V-Model, Prototyping, Tailoring & Defect Economics

### Winston Royce's Waterfall Model (1970)
- **Debunking the Single-Pass Myth:** Royce proposed adjacent feedback loops and explicitly warned that a pure single-pass sequence invites failure.
- **Catastrophic Backtracking:** Testing failures often trace back to design or requirement flaws, forcing expensive multi-stage backtracking.
- **The Upfront Prototyping Mandate:** Royce mandated that for novel/complex systems, teams must author a disposable pilot model (run the cycle twice: once as prototype, once as production system).
- **Big Bang Integration Fallacy:** Postponing integration to late stages hides latent interface bugs until budgets are exhausted.

### Symmetrical V-Model & Parallel Test Engineering
- Symmetrically pairs descending constructive design with ascending analytical verification:
  - **User Requirements $\longleftrightarrow$ Acceptance Testing (UAT):** *"Building the right product?"*
  - **System Architecture $\longleftrightarrow$ System / Integration Testing:** Interface & API contracts.
  - **Detailed Design $\longleftrightarrow$ Unit Testing:** White-box algorithmic logic.
- **Parallel Test Engineering:** Test planning begins **concurrently** with design, preventing late-stage testing disasters.

### Rapid Prototyping & RAD
- **Fidelity Continuum:** Low (paper/sketches), Medium (clickable mock-ups/Figma), High (working code with service stubs).
- **3-Step Loop:** Rapid Construction $\to$ User Evaluation (**Think-Aloud Protocols**) $\to$ Refine or Rebuild.
- **Throwaway vs. Evolutionary:** Throwaway is discarded after requirements confirmation; Evolutionary is incrementally hardened into production.
- **The Prototyping Illusion ("Ship It!" Pathology):** Polished UI tricks stakeholders into thinking the app is 90% complete, tempting managers to deploy fragile throwaway mock-ups and ingesting massive technical debt while neglecting nonfunctional qualities (exceptions, security, database scalability).
- **Rapid Application Development (RAD, James Martin 1991):** Strict 60–90 day timebox; 4 phases: Requirements Planning (JAD), User Design (CASE tools), Construction (code generation), Cutover.

### Evolutionary & Modular Models
- **Basili & Turner Iterative Enhancement (1975):** Architectural kernel $\to$ Progressive functional expansion $\to$ Local waterfall cycles $\to$ **Architectural Consolidation** (mandatory refactoring). Risk: The Costly Redesign Trap if late requirements invalidate the kernel.
- **Incremental Delivery:** Full system specified upfront; partitioned into modules built sequentially via mini-waterfalls and released in staged increments.
- **Component-Based Development (CBD):** Reusable COTS components with standardized interface contracts.

### Process Tailoring & Defect Economics
- **Münch's 4 Ps Framework:** Tailor processes based on **Problem** (novelty/volatility), **Project** (budget/team size/distribution), **People** (skills/experience/culture), and **Product** (safety/reliability/lifespan).
- **Boehm's Exponential Defect Cost Multiplier:** Requirements ($1\times$) $\to$ Coding ($10-15\times$) $\to$ Integration ($30-50\times$) $\to$ Production ($100-1000\times$).
- **Constructive vs. Analytical QA:** Constructive prevents defects upfront (reviews, architecture, standards); Analytical detects defects post-creation (dynamic testing).
- **Mars Climate Orbiter ($125M, 1999):** Trajectory destroyed due to unvalidated unit mismatch: Lockheed Martin **Imperial ($\text{lbf}\cdot\text{s}$)** vs. NASA JPL **Metric ($\text{N}\cdot\text{s}$)**. A failure of constructive interface reviews.
- **DocVault Case Study:** Transitioned from ad-hoc chaos to Hybrid V-Model with parallel test engineering and quarterly SQA audits, cutting production defect slippage by **20%**.

---

# Module 3: High-Probability MCQ "Versus" Discrimination Matrices

| Dimension / Topic | Entity A | Entity B | Crucial MCQ Distinguishing Feature |
| :--- | :--- | :--- | :--- |
| **Process Models** | **Prescriptive** | **Descriptive** | Prescriptive = **"SHOULD"** be done (idealized standard). Descriptive = **"IS ACTUALLY"** done (empirical reality). |
| **Model Scope** | **Lifecycle Process Model** | **Engineering Process Model** | Lifecycle = High abstraction, macro **WHAT** across full lifecycle. Engineering = Low abstraction, micro **HOW** for a specific phase. |
| **Quality Assurance** | **Verification** | **Validation** | Verification = *"Building the system right?"* (Conformance to specs). Validation = *"Building the right system?"* (Customer utility/fit). |
| **Evolutionary Models** | **Iterative Enhancement** | **Incremental Delivery** | Iterative = Cyclic organic refinement and refactoring of a kernel. Incremental = Staged functional slicing from fixed upfront specs. |
| **Prototyping** | **Throwaway Prototyping** | **Evolutionary Prototyping** | Throwaway = Mock-up discarded after requirements validated. Evolutionary = Initial prototype hardened into production system. |
| **Agile Estimation** | **Story Points** | **Ideal Days** | Story Points = Relative effort/complexity (Fibonacci). Ideal Days = Absolute calendar days assuming 100% uninterrupted focus. |
| **Scope Governance** | **Traditional SOW** | **Agile Backlog** | SOW = Contractually frozen upfront specification. Backlog = Emergent, adaptable, prioritized list of customer value. |
| **EVM Indices** | **Traditional EVM ($SV, SPI$)** | **Earned Schedule ($SV_t, SPI_t$)** | Traditional EVM collapses to $SV=0, SPI=1.0$ when late. Earned Schedule reports true calendar delays in time units. |
| **QA Strategy** | **Constructive QA** | **Analytical QA** | Constructive = Defect **prevention** upfront (reviews, standards). Analytical = Defect **detection** post-creation (testing, execution). |
| **SPEM 2.0 Architecture**| **Method Content** | **Context-Specific Process** | Method Content = Static library of roles/tasks/products (independent of time). Process = Dynamic workflow mapped to calendar phases. |
| **RACI Matrix** | **Responsible (R)** | **Accountable (A)** | R = The "doer" (can be shared). A = Sole decision-maker with veto authority (**strictly one 'A' per deliverable**). |
| **Scrum Accountabilities**| **Product Owner (PO)** | **Scrum Master (SM)** | PO owns Product Backlog (**WHAT/Priority**). SM coaches framework and removes blockers (**PROCESS**). |
| **XP Pairing Roles** | **Driver** | **Navigator** | Driver operates keyboard/syntax. Navigator conducts continuous review, architectural alignment, and edge-case checks. |
| **Lean Waste** | **Overproduction** | **Defects & Rework** | Overproduction = Building unused features (gold plating). Defects = Rework of escaped bugs ($80\%$ more costly). |

---

# Module 4: Top 20 Objective Test "Trap & Trick" Alerts

> [!danger] Exam Trap 1: Winston Royce & Waterfall
> **TRAP:** *"Winston Royce invented the rigid, single-pass linear Waterfall model."*
> **TRUTH:** **FALSE.** Royce introduced the linear model to illustrate its severe flaws, explicitly advocating for adjacent feedback loops and mandating an upfront preliminary prototype!

> [!danger] Exam Trap 2: Traditional SPI at Project Completion
> **TRAP:** *"If a project finishes with an $SPI = 1.00$, it was completed on schedule."*
> **TRUTH:** **FALSE.** In traditional EVM, when all work is finished, $EV = BAC$ and $PV = BAC$, so $SPI = \frac{EV}{PV} = 1.00$ mathematically, even if the project finished 2 years late! Earned Schedule ($SPI_t$) must be used to detect the delay.

> [!danger] Exam Trap 3: Task Assignment in Scrum
> **TRAP:** *"The Scrum Master assigns daily backlog tasks to developers."*
> **TRUTH:** **FALSE.** Developers are self-managing. Developers select PBIs during Sprint Planning and decompose their own Sprint Backlog tasks. The Scrum Master owns the process, not task allocation.

> [!danger] Exam Trap 4: Refactoring and Functionality
> **TRAP:** *"Refactoring improves performance and adds new user capabilities."*
> **TRUTH:** **FALSE.** By definition, refactoring modifies internal code structure **WITHOUT changing external observable behavior**. Adding features is functional enhancement, not refactoring.

> [!danger] Exam Trap 5: IBM Cleanroom Developer Debugging
> **TRAP:** *"In Cleanroom Software Engineering, developers use automated unit tests and compiler debuggers to find bugs."*
> **TRUTH:** **FALSE.** Developers are **strictly forbidden** from compiling or executing code to debug. Correctness is proven mathematically (box structures). Dynamic testing is performed exclusively by an independent certification team using statistical operational profiles.

> [!danger] Exam Trap 6: V&V Verification vs. Validation Definitions
> **TRAP:** *"Verification asks: 'Did we build the right system?'"*
> **TRUTH:** **FALSE.** That is **Validation**. Verification asks: *"Did we build the system right?"* (conformance to engineering specifications).

> [!danger] Exam Trap 7: Shared Accountability in RACI
> **TRAP:** *"A RACI matrix can assign accountability (A) to multiple leads to ensure shared responsibility."*
> **TRUTH:** **FALSE.** A fundamental rule of RACI governance is that **strictly ONE role is marked Accountable (A)** per deliverable. Shared accountability creates diffusion of responsibility.

> [!danger] Exam Trap 8: MVP-L Control Flow
> **TRAP:** *"MVP-L defines control flow using explicit sequential sequence arrows."*
> **TRUTH:** **FALSE.** Control flow in MVP-L is **implicit**, governed strictly by Boolean entry and exit criteria on product states.

> [!danger] Exam Trap 9: EPF Composer 'Contribute' Pattern
> **TRAP:** *"The 'Contribute' variability pattern overwrites the base corporate method library."*
> **TRUTH:** **FALSE.** 'Contribute' virtually attaches new elements, guidelines, or checklists **without altering the original source library**.

> [!danger] Exam Trap 10: Fist of Five Voting Gate
> **TRAP:** *"In Fist of Five consensus voting, a vote of 2 represents acceptable minor dissent."*
> **TRUTH:** **FALSE.** Any vote **below 3 (Fist, 1, or 2)** acts as a process halt trigger, blocking consensus and requiring immediate discussion and revoting.

> [!danger] Exam Trap 11: User Story Investment Criterion "Small"
> **TRAP:** *"A small user story under INVEST is one that can be completed within a 6-month release."*
> **TRUTH:** **FALSE.** A story must be small enough to be designed, coded, and tested within a single Sprint, typically requiring **1 to 3 days** of engineering effort.

> [!danger] Exam Trap 12: Agile Documentation Stance
> **TRAP:** *"The Agile Manifesto declares that documentation should never be produced."*
> **TRUTH:** **FALSE.** The value states: *"Working software over comprehensive documentation"*. Documentation is valued, but working software is the primary measure of progress.

> [!danger] Exam Trap 13: XP Architecture Phase
> **TRAP:** *"Extreme Programming begins with a 3-month upfront architectural design phase."*
> **TRUTH:** **FALSE.** XP rejects separate upfront design phases. Architecture **emerges** organically through continuous refactoring, guided by simplicity and YAGNI (*You Aren't Gonna Need It*).

> [!danger] Exam Trap 14: Daily Scrum Audience
> **TRAP:** *"The Daily Scrum is a status report meeting conducted for the Product Owner and project sponsors."*
> **TRUTH:** **FALSE.** The Daily Scrum is strictly **for the Developers**, by the Developers, to inspect progress toward the Sprint Goal and adapt the Sprint Backlog.

> [!danger] Exam Trap 15: Sprint Backlog Ownership
> **TRAP:** *"The Product Owner owns and modifies the Sprint Backlog."*
> **TRUTH:** **FALSE.** The PO owns the **Product Backlog**. The **Developers** own the Sprint Backlog.

> [!danger] Exam Trap 16: Mars Climate Orbiter Cause
> **TRAP:** *"The Mars Climate Orbiter crashed due to a hardware thruster mechanical blowout."*
> **TRUTH:** **FALSE.** It was destroyed by an unhandled **software unit interface mismatch**: Lockheed Martin ground software output $\text{lbf}\cdot\text{s}$ (Imperial), while NASA JPL expected $\text{N}\cdot\text{s}$ (Metric).

> [!danger] Exam Trap 17: V-Model Test Execution Timing
> **TRAP:** *"In the V-Model, acceptance testing is executed during the requirements phase."*
> **TRUTH:** **FALSE.** Acceptance test **PLANNING** occurs during the requirements phase; acceptance test **EXECUTION** occurs at the end of the lifecycle on the ascending right branch.

> [!danger] Exam Trap 18: Lean Waste Definition
> **TRAP:** *"Writing unit tests is considered waste (Muda) in Lean Software Development."*
> **TRUTH:** **FALSE.** Unit tests prevent defects. Waste is non-value-adding activity: Defects & Rework, Overproduction (Gold Plating), and Waiting/Handoffs.

> [!danger] Exam Trap 19: Definition of Done vs. Acceptance Criteria
> **TRAP:** *"The Definition of Done is unique to each individual user story."*
> **TRUTH:** **FALSE.** **Acceptance criteria** are unique to each story. The **Definition of Done (DoD)** is a global, invariant quality standard applied across **ALL** backlog items.

> [!danger] Exam Trap 20: SQA Conformance Audit Frequency
> **TRAP:** *"SQA process conformance audits are conducted only after system deployment."*
> **TRUTH:** **FALSE.** Formal SQA conformance audits are conducted periodically during active development, typically **once every 3 months**, to detect process drift early.

---

# Module 5: 25 High-Yield Rapid-Fire Objective Practice Questions with Explanations

### Q1 [Single Choice]
**Which standard provides the foundational functional safety umbrella requirements from which industry-specific standards like ISO 26262 and IEC 62304 are derived?**
- A) ISO/IEC/IEEE 24765
- B) IEC 61508
- C) ECSS Standards
- D) CMMI Level 3
> **Answer: B** | *Explanation:* IEC 61508 is the generic umbrella functional safety standard for electronic safety-related systems. ISO 26262 adapts it for automotive road vehicles, and IEC 62304 adapts it for medical devices.

---

### Q2 [True / False]
**In Winston Royce’s original 1970 paper, the author presented the pure single-pass sequential Waterfall model as an optimal and recommended development practice.**
- A) True
- B) False
> **Answer: B (False)** | *Explanation:* Royce introduced the single-pass linear progression to illustrate that it is "flawed, inviting failure" on large systems, explicitly arguing for adjacent feedback loops and an upfront preliminary prototype.

---

### Q3 [Single Choice]
**According to the Standish Group CHAOS Report, what was the recorded project cancellation/failure rate for large-scale software projects utilizing the linear Waterfall lifecycle?**
- A) 4%
- B) 11%
- C) 23%
- D) 42%
> **Answer: D** | *Explanation:* Large Waterfall projects suffered a 42% cancellation rate due to requirements volatility, contrasted with 23% for large Agile projects.

---

### Q4 [Calculation / Single Choice]
**An EVM audit at Month 6 reveals: Planned Value (PV) = RM 300,000, Earned Value (EV) = RM 200,000, and Actual Cost (AC) = RM 250,000. What are the Cost Variance (CV) and Schedule Performance Index (SPI)?**
- A) $CV = +\text{RM } 50{,}000; SPI = 1.25$
- B) $CV = -\text{RM } 50{,}000; SPI = 0.67$
- C) $CV = -\text{RM } 100{,}000; SPI = 0.80$
- D) $CV = -\text{RM } 50{,}000; SPI = 1.50$
> **Answer: B** | *Explanation:* $CV = EV - AC = 200{,}000 - 250{,}000 = -\text{RM } 50{,}000$ (over budget). $SPI = \frac{EV}{PV} = \frac{200{,}000}{300{,}000} = 0.67$ (progressing slower than planned).

---

### Q5 [Single Choice]
**Why does traditional EVM produce misleading Schedule Performance Index ($SPI$) values during the late stages of a severely delayed project?**
- A) Actual Cost grows to infinity.
- B) Earned Value eventually reaches BAC, and Planned Value is capped at BAC, forcing $SPI \to 1.00$.
- C) Cost Variance cancels out Schedule Variance.
- D) Earned Schedule drops to zero.
> **Answer: B** | *Explanation:* When all physical scope is completed late, $EV = BAC$ and $PV = BAC$, resulting in $SV = 0$ and $SPI = 1.00$, masking the calendar delay.

---

### Q6 [Single Choice]
**Which software development methodology strictly prohibits developers from compiling or executing their code to find defects, relying instead on mathematical box structures and independent statistical testing?**
- A) Extreme Programming
- B) Rapid Application Development
- C) IBM Cleanroom Software Engineering
- D) Symmetrical V-Model
> **Answer: C** | *Explanation:* IBM's Cleanroom Software Engineering (Mills et al.) forbids compiler debugging, replacing it with formal proofs and independent certification based on Mean Time To Failure (MTTF).

---

### Q7 [True / False]
**In a RACI responsibility matrix, it is permissible and recommended to mark both the Lead Architect and the Technical Director as Accountable (A) for the System Architecture Document to promote shared ownership.**
- A) True
- B) False
> **Answer: B (False)** | *Explanation:* A fundamental rule of RACI governance is that **strictly ONE** person can be Accountable (A) per deliverable to prevent diffusion of responsibility.

---

### Q8 [Single Choice]
**In the Symmetrical V-Model, which analytical verification activity directly corresponds to and validates the high-level System Architecture design?**
- A) Unit Testing
- B) User Acceptance Testing (UAT)
- C) System and Integration Testing
- D) Static SAST Code Analysis
> **Answer: C** | *Explanation:* System & Integration Testing validates high-level system architecture and component interfaces. User Acceptance Testing validates User Requirements, and Unit Testing validates Detailed Module Design.

---

### Q9 [Single Choice]
**In SPEM 2.0 and EPF Composer, which process variability mechanism should be used to append a specialized security review checklist to a base corporate task without modifying the underlying corporate method library?**
- A) Replace
- B) Contribute
- C) Extend and Replace
- D) Delete
> **Answer: B** | *Explanation:* The **Contribute** pattern virtually adds content, checklists, or guidelines to an element without modifying the base library.

---

### Q10 [Single Choice]
**What is the defining structural difference between Basili & Turner’s Iterative Enhancement Model and the Classical Incremental Delivery Model?**
- A) Iterative enhancement builds the entire system in a single pass; incremental delivery does not.
- B) Iterative enhancement refactors an evolving architectural kernel cyclically; incremental delivery builds sequentially partitioned modules from fixed upfront specifications.
- C) Incremental delivery uses throwaway prototypes; iterative enhancement does not.
- D) Iterative enhancement eliminates testing until the final release.
> **Answer: B** | *Explanation:* Iterative enhancement organically grows and refactors a central kernel through local waterfalls and architectural consolidation. Incremental delivery decomposes a fixed upfront specification into distinct modules delivered in staged releases.

---

### Q11 [Single Choice]
**During a Fist of Five consensus vote on an architectural refactoring proposal, the votes are: 4, 5, 4, 2, 5. According to standard agile governance, what must happen next?**
- A) The proposal passes by majority vote ($>80\%$).
- B) The vote of 2 is ignored as a minor reservation.
- C) The process halts immediately; the team discusses the concerns of the voter who gave a 2 and revotes.
- D) The Scrum Master casts a tie-breaker vote.
> **Answer: C** | *Explanation:* Any vote **below 3 (Fist, 1, or 2)** acts as an automatic process halt trigger, blocking consensus until the issue is addressed.

---

### Q12 [True / False]
**In the Scrum framework, if an item in the Sprint Backlog does not meet 100% of the Definition of Done (DoD) by the end of the Sprint, but is 95% complete, it may be demonstrated and claimed as completed at the Sprint Review.**
- A) True
- B) False
> **Answer: B (False)** | *Explanation:* Scrum work is binary. If an increment does not satisfy the Definition of Done, it cannot be released, nor presented as complete at the Sprint Review. It returns to the Product Backlog.

---

### Q13 [Single Choice]
**Which core technical practice of Extreme Programming (XP) mandates that the automated build, packaging, and entire regression test suite must execute within a strict time threshold?**
- A) Whole Team
- B) The Ten-Minute Build
- C) Project Slack
- D) Pair Programming
> **Answer: B** | *Explanation:* XP's Continuous Integration practice mandates the "Ten-Minute Build" rule ($\le 10$ minutes) to provide immediate developer feedback.

---

### Q14 [Single Choice]
**Under Mary and Tom Poppendieck's Lean Software Development framework, building elaborate, speculative features that the customer never requested is categorized as which type of waste (*Muda*)?**
- A) Defects & Rework
- B) Overproduction (Gold Plating)
- C) Waiting & Handoffs
- D) Task Switching
> **Answer: B** | *Explanation:* Overproduction (Gold Plating) involves writing code or building capabilities that provide no immediate customer value, violating YAGNI and consuming maintenance effort.

---

### Q15 [Single Choice]
**Which of the following represents an externally mandated Constraint rather than an internally chosen Quality Attribute?**
- A) Maintainability (low cyclomatic complexity)
- B) Portability (containerized execution)
- C) Regulatory compliance with GDPR data residency laws
- D) Performance efficiency (sub-second query latency)
> **Answer: C** | *Explanation:* GDPR statutory compliance is an externally imposed legal boundary (Constraint). Maintainability, portability, and performance are internally selected Quality Attributes.

---

### Q16 [Calculation / Single Choice]
**According to Barry Boehm’s Defect Cost Multiplier Curve, if fixing a requirements defect during the early requirements elicitation phase costs \$500, approximately how much would it cost to repair that same defect if it slips into live customer production?**
- A) \$1,000 to \$2,500
- B) \$5,000 to \$7,500
- C) \$15,000 to \$25,000
- D) \$50,000 to \$500,000
> **Answer: D** | *Explanation:* Boehm's multiplier indicates production fixes cost $100\times$ to $1000\times$ the initial requirements repair cost ($500 \times 100 = \$50{,}000$; $500 \times 1000 = \$500{,}000$).

---

### Q17 [Single Choice]
**What was the fundamental technical root cause of the NASA Mars Climate Orbiter disaster in 1999?**
- A) Memory corruption in the flight navigation computer.
- B) Ground software by Lockheed Martin output thruster impulse in English Imperial units ($\text{lbf}\cdot\text{s}$) while NASA expected Metric SI units ($\text{N}\cdot\text{s}$).
- C) Parachute deployment hardware timing failure.
- D) A denial-of-service attack on ground telemetry links.
> **Answer: B** | *Explanation:* Lockheed Martin ground software output data in pound-force seconds, whereas NASA JPL navigation algorithms expected Newton-seconds. The lack of constructive interface reviews caused the \$125M loss.

---

### Q18 [Single Choice]
**In Microsoft SDL-Agile, into which category does the daily execution of automated Static Application Security Testing (SAST) in the CI pipeline fall?**
- A) One-Time Kickoff Requirements
- B) Every-Sprint Mandatory Requirements
- C) Bucket Requirements (Planning)
- D) Post-Deployment Regulatory Audits
> **Answer: B** | *Explanation:* Daily automated SAST, lightweight threat modeling for new stories, and input filtering are executed during **Every Sprint**.

---

### Q19 [True / False]
**In Lean process modeling, David Parnas' principle of Information Hiding is applied by exposing the internal step-by-step human instructions of an activity while hiding its input and output product parameters.**
- A) True
- B) False
> **Answer: B (False)** | *Explanation:* It is the exact opposite! The Process Interface exposes product parameters and entry/exit criteria, while hiding the internal step-by-step task execution instructions within the Process Body.

---

### Q20 [Single Choice]
**Which Agile user story validation mnemonic ensures that a requirement is not an immutable legal contract, but rather an open invitation for collaborative technical discussion?**
- A) Independent
- B) Negotiable
- C) Estimable
- D) Testable
> **Answer: B** | *Explanation:* **N - Negotiable** indicates the user story card captures *what* and *why*, leaving *how* open to developer-PO collaboration.

---

### Q21 [Single Choice]
**In the Eisenhower Matrix used for software project coordination, how should a senior team handle strategic code refactoring and paying down technical debt?**
- A) Do (Urgent & Important)
- B) Delegate (Urgent & Not Important)
- C) Decide (Not Urgent & Important)
- D) Delete (Not Urgent & Not Important)
> **Answer: C** | *Explanation:* Strategic refactoring and debt reduction are **Important but Not Urgent**. They must be deliberately scheduled (Decide) before they degenerate into emergency crises.

---

### Q22 [Single Choice]
**What is the maximum timebox permitted for a Sprint Planning meeting in a standard one-month Sprint?**
- A) 2 Hours
- B) 4 Hours
- C) 8 Hours
- D) 16 Hours
> **Answer: C** | *Explanation:* Sprint Planning is timeboxed to a maximum of 8 hours for a one-month Sprint (shorter for shorter Sprints).

---

### Q23 [True / False]
**The "Hawthorne Effect" is an elicitation risk where developers describe an embellished, idealized process during interviews instead of their actual daily habits.**
- A) True
- B) False
> **Answer: B (False)** | *Explanation:* That is **Process Embellishment**. The **Hawthorne Effect** occurs during *direct observation*, where subjects temporarily alter their normal behavior because they are aware of being actively watched.

---

### Q24 [Single Choice]
**Which dimension of Jürgen Münch’s 4 Ps Tailoring Framework addresses statutory safety regulations, expected operational lifespan, and system reliability thresholds?**
- A) Problem Context
- B) Project Parameters
- C) People & Culture
- D) Product Attributes
> **Answer: D** | *Explanation:* Product Attributes encompass safety-criticality, target reliability, regulatory oversight, and decadal maintenance lifespans.

---

### Q25 [Single Choice]
**In OWASP SAMM 2.0, what characterizes Maturity Level 1 across any security practice stream?**
- A) Automated verification embedded in CI/CD pipelines with real-time telemetry.
- B) Ad-hoc, unstructured execution of basic security tasks dependent on individual heroic effort.
- C) Documented, centralized guidelines and consistent cross-team checklists.
- D) Formal mathematical proof of correctness.
> **Answer: B** | *Explanation:* Level 1 is Initial / Ad-hoc (heroic developer effort, high variance). Level 2 is Defined / Structured. Level 3 is Optimizing / Automated.

---

> [!tip] Final Test Day Recommendation
> Prior to entering the objective examination, review **[[#Module 1: The Ultimate Objective Test Cheat Sheet (At-a-Glance Matrices)|Module 1]]** for numbers and formulas, verify you can identify every trap in **[[#Module 4: Top 20 Objective Test "Trap & Trick" Alerts|Module 4]]**, and re-verify the **[[#RACI Governance Rules & Authoritative Allocation|Week 3 Slide 14 RACI Allocation]]**!
