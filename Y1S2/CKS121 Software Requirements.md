## Chapter 1: Introduction & Fundamental of Requirements Engineering (RE)

### 1. Importance of Requirements Engineering
Requirements engineering is a critical success factor for software-intensive systems.
- **No Silver Bullet:** Brooks (1987) stated that the hardest part of building a software system is deciding precisely what to build.
- **CHAOS Report Insights:**
    - **48.1%** of reasons for resource overspend and functional restrictions are related to insufficient and poor RE.
    - **44.1%** of reasons for project cancellations are related to insufficient and poor RE.
- **Defect Correction Effort:**
    - Defect found after delivery (small projects): Increase effort by **factor 5**.
    - Defect found after delivery (large/critical projects): Increase effort by **factor 100**.

### 2. Definitions

> [!info] Definition: Requirement
> 1. A **condition or capability** needed by a user to solve a problem or achieve an objective.
> 2. A **condition or capability** that must be met or possessed by a system or system component to satisfy a contract, standard, specification, or other formally imposed documents.
> 3. A **documented representation** of a condition or capability as in (1) or (2).
> See also: [[CCA103 System Analysis and Design#Types of Requirements (FURPS+)|FURPS+ Framework in CCA103]]

> [!info] Definition: Requirements Engineering (RE)
> A cooperative, iterative, and incremental process which aims at ensuring that:
> 1. All relevant requirements are **explicitly known and understood** at the required level of detail.
> 2. A **sufficient agreement** about the system requirements is achieved between the stakeholders involved.
> 3. All requirements are **documented and specified** in compliance with the relevant documentation/specification guidelines.

> [!info] Definition: Stakeholder
> A person, group of people, or an organisation who has directly or indirectly **influence** on the requirements of the regarded system. Stakeholders can influence the result and the project life cycle.
> See also: [[CCA103 System Analysis and Design#Stakeholders|Stakeholder Categories in CCA103]]

### 3. Three Dimensions of Requirements Engineering
The goal of RE is to move from the origin (vague, individual views, non-compliant) to the goal state (complete, consolidated views, compliant).

1. **Content Dimension:** Deals with the understanding of the system requirements. Goal: All requirements are explicitly known and understood.
2. **Documentation Dimension:** Deals with documenting and specifying requirements using appropriate formats. Goal: All requirements are documented in compliance with guidelines.
3. **Agreement Dimension:** Deals with the level of agreement achieved between stakeholders. Goal: Stakeholders have established a sufficient agreement.

#### Orthogonality of Dimensions
- A complete understanding does **not** imply sufficient agreement.
- Sufficient agreement does **not** imply complete understanding.
- Compliance with guidelines does **not** imply complete understanding.
- Progress in one dimension can lead to new challenges in another (e.g., resolving a conflict might lead to new requirements that are not yet understood).

---

### 4. Types of Requirements

#### A. Functional Requirements
Statements of services the system should provide, how the system should react to particular inputs, and how it should behave in particular situations.
- **Example:** "The system shall remove the door lock if a correct PIN is entered."

#### B. Quality Requirements
Defines a **quality property** for the entire system, a component, service, or function.
- **Quality in Use:** Effectiveness, Efficiency, Satisfaction, Freedom from risk, Context coverage.
- **Product Quality:** Functional suitability, Performance efficiency, Compatibility, Reliability, Security, Maintainability, Portability.
- **Example:** "The release of the locking mechanism shall take 0.8 seconds at most."

#### C. Constraints
An **organizational or technological** requirement which restricts the way the system shall be developed.
- **Types:** Culture, Organisational/Project, Physical, Legal.
- **Example:** "The effort for system development shall not exceed 480 person months."

> [!warning] Non-functional Requirements (NFR)
> The term "non-functional requirement" is widely used but often leads to insufficient understanding. 
> - An NFR is typically either an **underspecified functional requirement** or a **quality requirement**.
> - **Perspective:** There are only functional and quality requirements; "Non-functional requirements" as a distinct category do not exist.

#### Influence of Constraints
Constraints restrict the range of realization alternatives for requirements. For example, a constraint supporting only iOS and Android reduces the possible mobile platform solutions from many to just two.

---

### 5. RE in the Development Process

#### RE and Organizational Processes
RE interacts with:
- **Marketing:** Market needs, trends, price range, new features.
- **Product Management:** Product roadmap, strategy, key requirements.
- **Customer Relationship Management (CRM):** Customer wishes, reported problems, enhancements.

#### RE and Development Activities
RE interacts with:
- **Project Management:** Monitoring data, elicited goals, project plan.
- **Design:** Requirements and constraints, solutions, new technologies.
- **System Maintenance:** Change requests, status of change requests.
- **Quality Assurance:** Requirements artifacts, requests for clarification.

#### "What" vs. "How"
- **"What":** System requirements (The Problem).
- **"How":** System design (The Solution).
- Differentiation occurs at every level (System -> Architecture -> Component -> Implementation).
- See also: [[CCA103 System Analysis and Design#Systems Analysis vs. Systems Design|Systems Analysis vs. Systems Design in CCA103]]

---

### 6. RE Paradigms: Traditional vs. Continuous

#### Traditional System Analysis (80s - early 90s)
Regarded RE as the **early (first) phase** of system development.
- **Process:** Current-state model (existing system) -> Change definition -> Desired-state model (requirements spec) -> New system.
- See also: [[CCA103 System Analysis and Design#Chapter 1: An Overview of System Analysis and Design|System Analysis Overview in CCA103]]
- **Shortcomings:**
    - **No Continuity:** Requirements become out-of-date as changes occur later in development.
    - **Time Consuming:** Heavy analysis of current state at the start of every project.
    - **No Systematic Reuse:** Requirements are developed from scratch for each project.
    - **Narrow Focus:** Restricted to the system under development, losing innovation opportunities.

#### Continuous Requirements Engineering
RE is a **cross-lifecycle, cross-project, and cross-product activity**.
- **Process:** Continuously creates, changes, and deletes requirements in a **Requirements Base**.
- **Requirements Base:** Contains all requirements (under development, agreed, complete). Projects select a set of requirements to realize for the next release.
- **Advantages:**
    - **Systematic Learning:** Stakeholders continuously improve their understanding.
    - **Always Up-to-Date:** Requirements base is shared and kept current.
    - **Shorter Development Times:** No need for exhaustive current-state analysis at the start.
    - **Reuse:** Facilitates reuse across products.
    - **Clear Responsibilities:** Explicit ownership of requirements management.
