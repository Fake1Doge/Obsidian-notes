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

1. **Content Dimension**: Deals with the understanding of requirements (Vague $\to$ Complete).
2. **Documentation Dimension**: Deals with specifying requirements using appropriate formats (Non-compliant $\to$ Compliant).
3. **Agreement Dimension**: Deals with the level of agreement achieved between stakeholders (Individual views $\to$ Consolidated views).

> [!note] Orthogonality
> These dimensions are orthogonal. A complete understanding does not imply agreement, and compliance with documentation guidelines does not imply complete understanding.

---

## 2. Requirements Types and Constraints

### 2.1 The Three Types of Requirements
1. **Functional Requirements**: Statements of services the system should provide, how it should react to inputs, and behave in specific situations.
    - Example: "The system shall generate monthly statements of allowed and denied accesses."
2. **Quality Requirements**: Define quality properties for the entire system, a component, service, or function (e.g., Performance, Security, Reliability).
    - Example: "The release of the locking mechanism shall take 0.8 seconds at most."
3. **Constraints**: Organizational or technological requirements that **restrict the way** the system shall be developed (e.g., budget, platform support, physical environment).
    - Example: "The effort for system development shall not exceed 480 person months."

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
1. **Goals**: High-level objectives about system properties. Prescriptive and solution-free. Refines the system vision.
2. **Scenarios**: Concrete examples of satisfying or failing to satisfy a goal. Defines a sequence of interaction steps. Increases comprehensibility.
3. **Solution-Oriented Requirements**: Specify requirements at a level sufficient for design and testing.

### 3.3 Cross-Sectional Activities
1. **Validation**: Detecting defects in artefacts, core activities, and context consideration.
2. **Management**: Prioritization, traceability, versioning, and change management.

---

## 4. Requirements Elicitation

### 4.1 Requirements Sources
- **Stakeholders**: Primary source; identification is crucial. Not considering a stakeholder often results in fragmentally elicited requirements.
- **Documents**: Standards, laws, legacy system documentation, error reports.
- **Systems in Operation**: Legacy or competitor systems.

### 4.2 The Kano Model
Used to categorize requirements based on stakeholder satisfaction:
- **Dissatisfiers (Basic Factors)**: Self-evident; if missing, causes extreme discontent. (Subconscious knowledge).
- **Satisfiers (Performance Factors)**: Explicitly demanded; satisfaction increases with fulfillment. (Conscious knowledge).
- **Delighters (Excitement Factors)**: Unexpected; high satisfaction if present, but no discontent if missing. (Unconscious knowledge).

### 4.3 Elicitation Techniques
- **Survey**: Interviews (predetermined questions), Questionnaires (large number of participants).
- **Creativity**: Brainstorming (6-3-5 method), Change of Perspective (Six Thinking Hats), Analogy (Bionics).
- **Document-centric**: System Archaeology (extracting info from code/docs), Perspective-based Reading, Reuse.
- **Observation**: Field Observation (on location), Apprenticing (active learning).
- **Support**: Mind Mapping, Workshops, CRC Cards, Use Cases, Prototypes.

---

## 5. Requirements Modelling (Perspectives)

Requirements can be modelled from three complementary perspectives to ensure completeness and provide support for later development activities.

### 5.1 Data Perspective
Focuses on the **static structure** of information.
- **Goal**: Define data types, attributes, and relationships.
- **Diagrams**: 
    - **Entity-Relationship Diagrams (ERD)**: Modeling entity types, relation types, and attributes.
    - **UML Class Diagrams**: Modeling classes, associations (aggregation, composition), and multiplicities.

### 5.2 Functional Perspective
Focuses on the **transformation of data** by system functions (manipulation of data).
- **Goal**: Define inputs, outputs, and the manipulation of data by functions.
- **Diagrams**: 
    - **Data Flow Diagrams (DFD)**: Modeling processes, data stores, sources/sinks, and data flows.
    - **UML Activity Diagrams**: Modeling action sequences, control flows, and object flows (using synchronization bars for concurrency).

### 5.3 Behavioural Perspective
Focuses on the **system reaction** to external stimuli.
- **Goal**: Define permitted states, transitions, and outputs in response to events.
- **Diagrams**: 
    - **State Charts**: Modeling states and transitions (triggered by events, potentially with conditions). Supports hierarchization (super-states).
    - **UML State Machine Diagrams**: Modern extension of state charts.

---

## 6. Requirements Documentation

### 6.1 Documentation Types
- **Natural Language**: Universal but ambiguous. Use **Requirements Templates** to mitigate ambiguity.
- **Conceptual Models**: Graphical, precise representations (UML). Faster to perceive and better understood when depicted graphically.
- **Hybrid**: Combining natural language with models for maximum clarity.

### 6.2 Pitfalls of Natural Language (Linguistic Effects)
> [!warning] Linguistic Effects to Avoid
> 1. **Nominalization**: Turning processes into nouns (e.g., "The transmission shall..."). Info about the process is lost.
> 2. **Nouns without reference index**: "The user", "The system" (Which one? Need to specify exactly).
> 3. **Universal Quantifiers**: "all", "every", "never", "no" (Risk that property doesn't apply to all objects).
> 4. **Incompletely specified conditions/verbs**: Missing "if...then" logic or details on how a verb is performed (e.g., "transmit" requires what, from where, to where).

### 6.3 Requirements Templates
A blueprint for the syntactic structure of individual requirements.
- **Step 1**: Determine Legal Obligation (shall, should, will, may).
- **Step 2**: Determine the Requirement Core (process verb).
- **Step 3**: Characterize Activity (Autonomous, User Interaction, Interface).

---

## 7. Requirements Validation and Negotiation

Validation ensures the documented requirements meet the stakeholders' needs and quality standards.

### 7.1 Validation Goals
1. **Artefact Validation**: Detect defects in the requirements (Completeness, Correctness, Consistency).
2. **Activity Validation**: Ensure the required steps were performed and stakeholders involved.
3. **Context Validation**: Ensure all relevant requirement sources were considered.

### 7.2 Validation Techniques
- **Commenting**: Author hands requirements to a co-worker for expert opinion.
- **Inspections**: A formal, step-by-step review by a group of experts (Roles: Organizer, Moderator, Author, Reader, Inspectors, Minute-taker).
- **Walk-throughs**: A less formal, group-based review where the author "walks" participants through the document.
- **Perspective-Based Reading**: Checking requirements from different viewpoints (User, Architect, Tester).
- **Prototypes**: Using low-fidelity (Wireframes) or high-fidelity models to validate requirements.

### 7.3 Negotiation (Conflict Resolution)
Conflicts (Data, Interest, Value, Relationship, Structural) must be resolved through:
- **Agreement**: Finding a common solution all parties accept.
- **Compromise**: Parties give up parts of their demands.
- **Voting**: Decision based on majority.
- **Overruling**: Decision made by a person with higher authority.
- **Decision Matrix (Wiegers)**: Analytical approach to choosing alternatives.

---

## 8. Requirements Management

### 8.1 Traceability
The ability to establish explicit relationships between requirements and other artifacts.
- **Pre-RS Traceability**: Relationship between requirements and their origins (stakeholders, documents).
- **Post-RS Traceability**: Relationship between requirements and subsequent artifacts (design, code, tests).
- **Traceability between requirements**: Modeling dependencies (refines, generalizes, replaces).

### 8.2 Prioritization
Determines which requirements should be implemented in which order.
- **Criteria**: Cost, Risk, Damage, Volatility, Importance, Duration.
- **Techniques**: Ranking, Top-Ten, Kano Classification, Wiegers Prioritization Matrix.

### 8.3 Versioning and Baselines
- **Versioning**: Each requirement artifact has a unique version number. Allows tracking history.
- **Requirements Configuration**: A defined set of requirements where each requirement is present with exactly one version.
- **Baseline**: A stable, change-controlled configuration of requirements, often used for release planning.

---

> [!tip] Extra Notes: RE vs. Systems Analysis
> Traditional Systems Analysis (80s-90s) regarded RE as a finite early phase. Modern RE is seen as a **continuous activity** across the entire lifecycle and across project/product boundaries. This ensures requirements stay up-to-date and facilitates systematic reuse.
