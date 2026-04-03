# CKS121 Software Requirements

> [!abstract] Course Overview
> This course covers the fundamental principles, frameworks, and techniques of Requirements Engineering (RE). It explores the importance of RE in project success, the dimensions of RE, various types of requirements, and the comprehensive RE framework including core activities and artefacts.

---

## 1. Introduction to Requirements Engineering (RE)

### 1.1 The Importance of Requirements Engineering
Requirements Engineering is a critical success factor for software-intensive systems. The hardest single part of building a software system is **deciding precisely what to build**. No other part of the conceptual work is as difficult as establishing the detailed technical requirements, including all interfaces to people, machines, and other software systems.

#### CHAOS Report Statistics
Research by The Standish Group (CHAOS Report) highlights the impact of RE on project outcomes:
- **Project Success Rates:** On average, only 30% of projects are successful, 23% are cancelled, and 47% are challenged (completed with resource overspend and functional restrictions).
- **Reasons for Failure:** 
    - **48.1%** of reasons for resource overspend and functional restrictions are related to insufficient and poor RE (e.g., lack of user input, incomplete requirements, changing requirements).
    - **44.1%** of reasons for project cancellations are related to poor RE.

#### Effort for Correcting Defects
The cost of fixing requirements defects increases significantly as the project progresses:
- **Small/Non-critical projects:** Defects found after delivery require **5x** more effort to correct.
- **Large/Critical projects:** Defects found after delivery require **100x** more effort to correct.

### 1.2 Core Definitions

> [!info] Definition: Requirement
> A **requirement** is:
> 1. A **condition or capability** needed by a user to solve a problem or achieve an objective.
> 2. A **condition or capability** that shall be met or possessed by a system, system component, product, or service to satisfy a contract, standard, specification, or other formally imposed documents.
> 3. A **documented representation** of a condition or capability as in (1) or (2).
> 
> Requirements include the quantified and documented needs, wants, and expectations of stakeholders.

> [!info] Definition: Stakeholder
> A **stakeholder** of a system is a person, group of people, or an organisation who has **directly or indirectly influence** on the requirements of the regarded system. A stakeholder can influence not only the result but also the project life cycle.

### 1.3 The Goal of Requirements Engineering
Requirements Engineering (RE) is a **cooperative, iterative, and incremental process** which aims at ensuring that:
1. All **relevant requirements** are explicitly known and understood at the required level of detail.
2. A **sufficient agreement** about the system requirements is achieved between the stakeholders involved.
3. All requirements are **documented and specified** in compliance with the relevant documentation/specification guidelines.

### 1.4 The Three Dimensions of RE
The goals of RE can be characterized by three orthogonal dimensions:

1. **Content Dimension:** Deals with the understanding of requirements. At the start, requirements are few and vague; at the end, all requirements shall be explicitly known and understood at the required detail.
2. **Documentation Dimension:** Deals with specifying requirements using appropriate formats. At the start, documentation is often non-compliant with guidelines (notes, sketches); at the end, requirements are specified in compliance with guidelines and formats.
3. **Agreement Dimension:** Deals with the level of agreement between stakeholders. At the start, stakeholders have different, conflicting views; at the end, sufficient agreement must be established.

> [!tip] Extra Notes: Orthogonality of the Dimensions
> The dimensions are **orthogonal**, meaning progress in one does not guarantee progress in others:
> - **Content vs. Agreement:** Complete understanding does not imply agreement (stakeholders may understand but still disagree). Agreement does not imply complete understanding (they might agree on a vague concept).
> - **Documentation vs. Content:** Compliance with guidelines does not imply complete understanding.
> - **Documentation vs. Agreement:** Compliance with guidelines does not imply agreement.
> - **Progressive Side-effects:** Progress in the agreement dimension (resolving a conflict) can lead to **new requirements** which are not yet understood (content dimension). Similarly, eliciting new requirements can lead to **new conflicts**.

### 1.5 The Three Types of Requirements

1. **Functional Requirements:** Statements of services the system should provide, how it should react to particular inputs, and how it should behave in particular situations.
    - *Example (R-6):* If a sensor detects a damage of the window, the system shall inform the security company.
2. **Quality Requirements:** Define a **quality property** for the entire system, a system component, a service, or a function.
    - *Example (R-15):* The release of the locking mechanism shall take 0.8 seconds at most.
    - *Standards:* ISO/IEC 25010:2011 defines quality in use (Effectiveness, Efficiency, Satisfaction) and product quality (Reliability, Security, Maintainability, Portability).
3. **Constraints:** An **organizational or technological requirement** which restricts the way the system shall be developed.
    - *Example (C-16):* The effort for system development shall not exceed 480 person months.
    - *Example (C-41):* The system shall process personal data in compliance with the EU's Data Protection Directive.

---

## 2. Fundamentals of Requirements Engineering

### 2.1 Influence of Constraints
Constraints restrict the **range of realization alternatives** for requirements.
- *Scenario:* A functional requirement (R-3) states "The output shall be presented on a mobile phone." Without constraints, solutions could include iOS, Android, Windows 10, BlackBerry OS, or Palm.
- *Constraint (C-4):* "Only iOS and Android shall be supported."
- *Consequence:* The solution space is reduced from 5 to 2 (40% remaining).

### 2.2 Non-functional Requirements (NFRs)
The term "non-functional requirement" is widely used but often indicates that a requirement is **insufficiently understood**.
- **The RE Perspective:** There are only functional requirements, quality requirements, and constraints. **Non-functional requirements do not exist** as a separate category in rigorous RE; they are usually underspecified functional or quality requirements.
- *Example:* "The system shall be secure" (NFR) refined into:
    - Each user shall log in... (Functional)
    - Stored passwords shall be protected... (Quality)

### 2.3 RE and Organizational Processes
RE is embedded within various organizational processes:
- **Marketing:** Provides market needs, trends, and price range; RE provides new features.
- **Product Management:** Provides product roadmaps and strategy; RE provides new/revised requirements.
- **Customer Relationship Management (CRM):** Provides customer wishes and reported problems; RE provides realized changes and enhancements.

### 2.4 RE and Development Activities
RE provides the foundation for other development tasks:
- **Project Management:** RE provides elicited goals and requirements; PM provides project plans and approved goals.
- **Design:** RE provides requirements and constraints; Design provides solutions and uses new technologies.
- **Quality Assurance:** RE provides requirements artefacts; QA provides requests for clarification and improvement.
- **System Maintenance:** RE provides change requests; Maintenance provides status of change requests.

### 2.5 What vs. How (Problem vs. Solution)
- **What:** Refers to **Software Requirements** (the problem to be solved).
- **How:** Refers to **Software Design** (the solution to be developed).
- This differentiation occurs at multiple levels: System Vision $\to$ System Architecture $\to$ Component Requirements $\to$ Component Design $\to$ Component Implementation.

### 2.6 Evolution: Traditional vs. Continuous RE

#### Traditional System Analysis (80s - early 90s)
- RE was regarded as the **early (first) phase** of system development.
- Focused on analyzing existing systems to create a "current state model," then defining a "desired state model" (requirements spec).
- **Shortcomings:** 
    - **No continuity:** Requirements become out-of-date as changes occur during development.
    - **Analysis of current state:** Time-consuming analysis at the start of every project.
    - **No systematic reuse:** Requirements developed from scratch for each project.
    - **Narrow focus:** Restricted only to the system under development.

#### Continuous Requirements Engineering
- RE is implemented as a **continuous activity** across the entire lifecycle and across **project and product boundaries**.
- **Requirements Base:** A persistent repository containing requirements under development, agreed requirements, and correctly specified requirements.
- **Advantages:**
    - **Systematic learning process:** Stakeholders continuously extend understanding.
    - **Always up-to-date:** Changes are integrated into the requirements base immediately.
    - **Shorter development times:** Prevents time-consuming analysis of current state at the start of each project.
    - **Systematic reuse:** Facilitates reuse across projects and products.
    - **Clear responsibilities:** Explicit roles for management of requirements.

---

## 3. The Requirements Engineering Framework

### 3.1 System Vision
A **vision** defines an intended (small or large) change to a current reality.
- **Characteristics:** Brief and precise, guides definition of requirements, guides system development, states a goal (**What**), not how to achieve it (**How**), basis for decisions, justifies expenses.
- *Example:* "The system shall stop from a speed of 50 km/h within 10 meters." This vision differs largely in context (e.g., car vs. train).

### 3.2 The RE Context
Each system is embedded in a specific context. The context strongly influences requirements and is often not fully understood.

1. **System Context:** The part of the context in which the system to be developed is operating/embedded.
    - **Subject Facet:** Information represented in the system or constraining the representation.
    - **Usage Facet:** People and systems interacting with the system or benefiting from it.
    - **IT System Facet:** Technical environment (sensors, actuators, other systems).
2. **Development Context:** The part of the context in which the system is being developed (e.g., the dev team, tools).
3. **Additional RE Context Objects:** Objects considered during RE but not part of system or development context.

### 3.3 Core Activities of RE
1. **Elicitation:** Goal is to identify relevant requirements sources, elicit existing requirements, and develop new/innovative ones. Sources include stakeholders, existing documents, and systems.
2. **Negotiation:** Goal is to identify conflicts, analyze their causes, resolve them via appropriate strategies, and document the resolution/rationale.
3. **Documentation:** Goal is to document info according to guidelines, specify requirements in appropriate formats (fitting stakeholder needs), and ensure consistency.

### 3.4 Requirements Artefacts
1. **Goals:** High-level objectives about properties of the system or development project. They are **prescriptive**, express intentions, refine the vision, and should be **solution-free**.
2. **Scenarios:** Concrete examples of satisfying or failing to satisfy a goal. Typically a **sequence of interaction steps**. They put requirements into context and increase comprehensibility.
3. **Solution-Oriented Requirements:** Specify requirements at a level of detail sufficient for design and test.
    - **Data Perspective:** Static data structures (ER diagrams).
    - **Functional Perspective:** Manipulation of data (Data flow diagrams).
    - **Behavioural Perspective:** System behavior/reactions to stimuli (State transition diagrams).

### 3.5 Cross-Sectional Activities
1. **Validation:**
    - **Validation of artefacts:** Detecting defects.
    - **Validation of activities:** Checking compliance with process specifications.
    - **Validation of context consideration:** Ensuring all sources and stakeholders were involved.
2. **Management:**
    - **Artefact Management:** Prioritization, persistent recording, configuration management, change management, traceability.
    - **Activity Management:** Planning and controlling the execution of RE activities.
    - **Context Management:** Identifying changes in the context that require rescheduling RE activities.

---

> [!tip] Extra Notes: Framework Interrelations
> Developing goals and scenarios prior to or along with solution-oriented requirements leads to significant improvement in quality. Scenarios provide the context needed to derive detailed requirements, while goals and scenarios support refinement across different layers of abstraction.
