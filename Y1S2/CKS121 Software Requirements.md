---
title: CKS121 Software Requirements
course: CKS121/CSE 242 Software Requirements
date: 2026-04-03
tags:
  - university
  - software-engineering
  - requirements-engineering
---

# CKS121 Software Requirements

> [!abstract] Course Overview
> This course covers the fundamental principles, frameworks, and techniques of Requirements Engineering (RE). It explores the importance of RE in project success, the dimensions of RE, various types of requirements, and the core activities involved in eliciting, documenting, validating, and managing requirements.

---

## 1. Introduction to Requirements Engineering (RE)

### 1.1 The Importance of RE
Requirements Engineering is a critical success factor for software-intensive systems. According to the CHAOS Report, a significant portion of project failures (cancellations or resource overspend) are attributed to poor requirements engineering.

> [!info] Key Statistics
> - **48.1%** of reasons for resource overspend and functional restrictions are related to insufficient or poor RE (e.g., lack of user input, incomplete requirements).
> - **44.1%** of reasons for project cancellations are related to poor RE.
> - The effort to correct a requirement defect increases significantly over time:
>     - **Factor 5** if found after delivery in small/non-critical projects.
>     - **Factor 100** if found after delivery in large/critical projects.

### 1.2 Definitions
> [!info] Definition: Requirement
> 1. A **condition or capability** needed by a user to solve a problem or achieve an objective.
> 2. A **condition or capability** that must be met or possessed by a system or system component to satisfy a contract, standard, specification, or other formally imposed documents.
> 3. A **documented representation** of a condition or capability as in (1) or (2).
> *Source: ISO/IEC/IEEE 24765-2010*

> [!info] Definition: Stakeholder
> A person, group of people, or an organization who has directly or indirectly **influence** on the requirements of the regarded system.

> [!info] Definition: Requirements Engineering (RE)
> RE is a **cooperative, iterative, and incremental process** which aims at ensuring that:
> 1. All relevant requirements are explicitly known and understood at the required level of detail (**Content**).
> 2. A sufficient agreement about the system requirements is achieved between the stakeholders involved (**Agreement**).
> 3. All requirements are documented and specified in compliance with relevant guidelines (**Documentation**).

### 1.3 The Three Dimensions of RE
The goal of RE is to move from a state of vague understanding, individual views, and informal documentation to a state of complete understanding, consolidated views, and compliant documentation.

1. **Content Dimension**: Deals with the understanding of requirements.
2. **Documentation Dimension**: Deals with specifying requirements using appropriate formats.
3. **Agreement Dimension**: Deals with the level of agreement achieved between stakeholders.

> [!note] Orthogonality
> These dimensions are orthogonal. A complete understanding does not imply agreement, and compliance with documentation guidelines does not imply complete understanding.

---

## 2. Requirements Types and Constraints

### 2.1 The Three Types of Requirements
1. **Functional Requirements**: Statements of services the system should provide, how it should react to inputs, and behave in specific situations.
2. **Quality Requirements**: Define quality properties for the entire system, a component, service, or function (e.g., Performance, Security, Reliability).
3. **Constraints**: Organizational or technological requirements that **restrict the way** the system shall be developed (e.g., budget, platform support, physical environment).

> [!warning] Non-functional Requirements (NFR)
> The term "Non-functional Requirement" is widely used but often indicates an underspecified requirement.
> - **NFR = Underspecified Functional Requirement OR Quality Requirement.**
> - Example: "The system shall be secure" is an NFR. It should be refined into specific functional (e.g., login validation) and quality (e.g., password encryption) requirements.

### 2.2 System Vision and Context
RE starts with an idea or wish to change the current reality, formalized as a **Vision**.

- **Vision**: Defines intended change, guides requirement definition and system development, and serves as the basis for decisions.
- **Context**: Every system is embedded in a specific context which includes the sources for requirements.
    - **Subject Facet**: Objects about which information is represented in the system.
    - **Usage Facet**: People/systems interacting with the system.
    - **IT System Facet**: Technical and operational environment (sensors, other systems).

---

## 3. The Requirements Engineering Framework

The RE Framework structures the process into four building blocks:

### 3.1 Core Activities
1. **Elicitation**: Identifying sources, eliciting existing requirements, and developing innovative ones.
2. **Documentation**: Documenting information according to guidelines and choosing appropriate formats.
3. **Negotiation**: Identifying, analyzing, and resolving conflicts between stakeholders.

### 3.2 Requirements Artefacts
1. **Goals**: High-level objectives about system properties. Prescriptive and solution-free.
2. **Scenarios**: Concrete examples of satisfying or failing to satisfy a goal. Defines interaction steps.
3. **Solution-Oriented Requirements**: Specify requirements at a level sufficient for design and testing.
    - **Data Perspective**: Static data structures.
    - **Functional Perspective**: Manipulation of data (inputs to outputs).
    - **Behavioural Perspective**: Reactions to external stimuli (states and transitions).

### 3.3 Cross-Sectional Activities
1. **Validation**: Detecting defects in artefacts, core activities, and context consideration.
2. **Management**: Prioritization, traceability, versioning, and change management.

---

## 4. Requirements Elicitation

### 4.1 Requirements Sources
- **Stakeholders**: Primary source; identification is crucial.
- **Documents**: Standards, laws, legacy system documentation.
- **Systems in Operation**: Legacy or competitor systems.

### 4.2 The Kano Model
Used to categorize requirements based on stakeholder satisfaction:
- **Dissatisfiers (Basic Factors)**: Self-evident; if missing, causes extreme discontent.
- **Satisfiers (Performance Factors)**: Explicitly demanded; satisfaction increases with fulfillment.
- **Delighters (Excitement Factors)**: Unexpected; high satisfaction if present, but no discontent if missing.

### 4.3 Elicitation Techniques
- **Survey**: Interviews, Questionnaires.
- **Creativity**: Brainstorming, Change of Perspective (Six Thinking Hats), Analogy (Bionics).
- **Document-centric**: System Archaeology, Perspective-based Reading, Reuse.
- **Observation**: Field Observation, Apprenticing.
- **Support**: Mind Mapping, Workshops, CRC Cards, Use Cases, Prototypes.

---

## 5. Requirements Documentation

### 5.1 Documentation Types
- **Natural Language**: Universal but ambiguous.
- **Conceptual Models**: Graphical, precise, but requires training (e.g., UML diagrams).
- **Hybrid**: Combination of both.

### 5.2 Pitfalls of Natural Language
> [!warning] Linguistic Effects to Avoid
> 1. **Nominalization**: Turning processes into nouns (e.g., "The transmission shall...").
> 2. **Nouns without reference index**: "The user", "The system" (Which one?).
> 3. **Universal Quantifiers**: "all", "every", "never" (Are there exceptions?).
> 4. **Incompletely specified conditions/verbs**: Missing "if...then" logic or details on how a verb is performed.

### 5.3 Requirements Templates
A blueprint for the syntactic structure of individual requirements to ensure clarity and consistency.
- **Type 1**: Autonomous system activity.
- **Type 2**: User interaction.
- **Type 3**: Interface requirement.

---

## 6. Requirements Management

### 6.1 Requirements Traceability
The ability to trace a requirement throughout its lifecycle.
- **Pre-RS Traceability**: Trace back to origin (stakeholder, document).
- **Post-RS Traceability**: Trace forward to design, implementation, and test cases.
- **Traceability between requirements**: Mapping dependencies.

### 6.2 Prioritization
Techniques to determine the order of implementation:
- **Ranking / Top-Ten**.
- **Kano Classification**.
- **Wiegers Prioritization Matrix**: Calculates priority based on Benefit, Penalty, Cost, and Risk.

### 6.3 Change Management
Handled by a **Change Control Board (CCB)**.
- **Process**: Impact Analysis -> Change Evaluation -> Approval/Rejection -> Implementation.
- **Types of Changes**: Corrective, Adaptive, Exceptional (Hotfix).

---

> [!tip] Extra Notes: RE vs. Systems Analysis
> Traditional Systems Analysis (80s-90s) regarded RE as a finite early phase. Modern RE is seen as a **continuous activity** across the entire lifecycle and across project/product boundaries. This ensures requirements stay up-to-date and facilitates systematic reuse.
