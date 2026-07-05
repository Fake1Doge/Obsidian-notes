# CKS121 Software Requirements Study Summary

## Chapter 1: Introduction & Fundamentals of Requirements Engineering

### 1.1 Key Concepts
- **Brooks' Quote:** "The hardest single part of building a software system is deciding precisely what to build. No other part of the conceptual work is as difficult as establishing the detailed technical requirements..." (Fred Brooks, 1987)
- **CHAOS Report Statistics (1994-2012):** Poor Requirements Engineering (RE) accounts for **48.1%** of reasons for challenged projects (completed with resource overspend and/or functional restrictions) and **44.1%** of failed (cancelled) projects.
- **Error Correction Cost (Boehm & Basili 2001):** The effort to fix requirements defects scales exponentially as the project progresses:
  - *Small/Non-critical projects:* Post-delivery correction takes **5x** the effort compared to finding it in the analysis phase.
  - *Large/Critical projects:* Post-delivery correction takes **100x** the effort.

### 1.2 Core Definitions
- **Requirement (IEEE 610.12):**
  1. A condition or capability needed by a user to solve a problem or achieve an objective.
  2. A condition or capability that must be met or possessed by a system to satisfy a contract, standard, or specification.
  3. A documented representation of (1) or (2).
- **Requirement (IREB):** (1) A need perceived by a stakeholder, (2) a capability or property a system shall have, or (3) a documented representation thereof.
- **Stakeholder:** A person, group, or organization who influences system requirements or is impacted by the system.

### 1.3 The Goal of RE
Requirements Engineering is a **cooperative, iterative, and incremental process** aiming to ensure that:
1. All relevant requirements are explicitly known and understood at the required level of detail (**Content Dimension**: vague $\to$ complete).
2. A sufficient agreement is achieved between the stakeholders (**Agreement Dimension**: individual $\to$ consolidated).
3. All requirements are documented in compliance with guidelines (**Documentation Dimension**: non-compliant $\to$ compliant).
*Note: These three dimensions are orthogonal—progress in one does not automatically guarantee progress in the others.*

### 1.4 Three Types of Requirements
1. **Functional Requirements:** Concern results or behaviors provided by a system function (Functions, Behaviors, Data/Structures).
2. **Quality Requirements:** Concern quality properties of the system (ISO/IEC 25010 defines *Quality in Use* and *System/Product Quality*: Performance, Reliability, Security, Usability, etc.).
3. **Constraints:** Limit the solution space (Budget, Deadlines, Legal/Legislation, Technical/Physical limits).
> [!warning] The Myth of NFRs
> "Non-functional Requirements" is an informal term. Every "NFR" must be refined into precise functional requirements or quality requirements to be designable and testable.

### 1.5 Evolution of RE
- **Traditional Systems Analysis:** Regarded as the early phase of system development. Focuses on current-state model (CSM) analysis and desired-state model (DSM) specification. Shortcomings: lacks continuity, time-consuming, ad-hoc reuse, narrow focus.
- **Continuous RE:** Executed continuously across the entire product lifecycle. Uses a central **Requirements Base** to manage changes dynamically and select requirements for subsequent system releases.

---

## Chapter 2: The Requirements Engineering Framework

### 2.1 Framework Structure
The RE Framework structures the process across three components:
1. **RE Context:** System Context (Subject, Usage, IT System Facets) and Development Context.
2. **Core Activities:** Elicitation, Documentation, and Negotiation.
3. **Requirements Artefacts:** Goals, Scenarios, and Solution-Oriented Requirements.

### 2.2 System Vision
- **Vision:** An intended change to a current reality. It represents the start of the RE process.
- **Characteristics:** Brief and precise; filters the context (funnel effect); justifies project expenditures. Tiny changes to the vision significantly alter the requirements scope.

### 2.3 Complementary Artefacts
- **Goals:** High-level stakeholder intentions (represented as AND/OR trees).
- **Scenarios:** Concrete examples of satisfying or failing to satisfy a goal (sequence of interaction steps).
- **Solution-Oriented Requirements:** Detailed, agreed-upon, complete specifications representing three perspectives: **Data** (static structures), **Functional** (data transformations), and **Behavioral** (state reactions).

### 2.4 Cross-Sectional Activities
- **Validation:** Checks compliance of artefacts, activities, and context considerations.
- **Management:** Prioritization, persistent recording, traceability, and change control of artefacts, activities, and context.

---

## Chapter 3: Context

### 3.1 Facets of the System Context
A requirement is always defined for a specific context. The system context is divided into three facets:
1. **Subject Facet:** Objects represented within the system (e.g., domain data, entities, data privacy laws).
2. **Usage Facet:** Actors, user groups, and external systems directly interacting with or benefiting from the system.
3. **IT System Facet:** The technical/operational environment (hardware, communication networks, external interfaces, sensors, actuators).

### 3.2 Boundaries and the Grey Zone
- **System Boundary:** Separates the system (changeable scope) from the system context (unchangeable environment).
- **Context Boundary:** Separates the system context from the irrelevant environment.
- **Grey Zone:** The area containing objects for which it is not yet clear whether they are system or context objects. Requirements engineers must continuously evaluate and resolve grey zone items to keep the grey zone as small as possible.

---

## Chapter 4: Elicitation

### 4.1 Requirements Sources
1. **Stakeholders:** People or organizations with interest in the desired system.
2. **Documents:** General binding (laws, standards), organization-specific (strategies, policies), and product-specific (user manuals, predecessor system specs).
3. **Existing Systems:** Predecessor systems, systems of competitors, and systems from other domains (sources of delighters).

### 4.2 Elicitation Techniques vs. Assistance Techniques
- **Elicitation Techniques:** Used to gather existing requirements, identify sources, or create innovative requirements.
  - *Rough Classification Table:*
    - **Interview:** Effort: Medium-High. Suited for: Identifying sources (Yes), Eliciting existing (Yes), Innovative (Partially).
    - **Workshop:** Effort: High-Very High. Suited for: Identifying sources (Yes), Eliciting existing (Yes), Innovative (Yes).
    - **Focus Groups:** Effort: Medium-High. Suited for: Identifying sources (No), Eliciting existing (Yes), Innovative (Yes).
    - **Observation:** Effort: High-Very High. Suited for: Eliciting existing (Yes - uncovers implicit behaviors).
    - **Questionnaire:** Effort: Low-Medium. Suited for: Identifying sources (Yes), Eliciting existing (Yes).
    - **Perspective-based Reading:** Effort: Medium-High. Suited for: Eliciting existing (Yes).
- **Assistance Techniques:** Support elicitation by helping stakeholders generate ideas or experience features:
  - **Brainstorming:** Group creativity technique. Rules: Quantity over quality, free association, combine ideas, *criticism strictly forbidden*, and overcome at least two long-lasting deadlocks.
  - **KJ Method:** Card-based sorting technique. Process: Card writing (silent) $\to$ Presentation (numbered, unsorted) $\to$ Grouping (by subject) $\to$ Labeling & Relationship Analysis. Managers must limit group size to at most 8-10 stakeholders.
  - **Prototyping:** Demonstrates system look/feel (e.g., TOXLAND Hop & Help game interface).
  - **Mind Mapping** & **Checklists**.

### 4.3 Kano Classification Model
Classifies requirements based on their impact on **customer satisfaction**:
1. **Dissatisfiers (Must-Be):** Taken for granted, never communicated. If missing, cause extreme dissatisfaction. Best found via **Observation** or **Document-centric** analysis.
2. **Satisfiers (One-Dimensional):** Explicitly demanded. Satisfaction is proportional to fulfillment. Best found via **Interviews** and **Questionnaires**.
3. **Delighters (Attractive):** Unexpected features, never communicated. Fulfilling them increases satisfaction disproportionately. Best found via **Creativity techniques**.
*Evolution over Time:* Requirements mature over time: Delighters $\to$ Satisfiers $\to$ Dissatisfiers (e.g., ABS brakes).

---

## Chapter 5: Documentation of Requirements

### 5.1 Representation Formats
- **Textual:** Natural language text, structured text, or tabular templates.
- **Model-based:** Conceptual models (EER, Class diagrams, DFDs, Statecharts).
- **Combined:** Models with textual annotations (e.g., Customer-Holiday Package ERD annotations) or text files containing embedded diagrams.

### 5.2 Documentation Guidelines
Guidelines can be defined for a **whole document** (e.g., requirements specification) or a **single item** (individual attributes, e.g., using `TBD` for empty slots).
- **Management Review vs. Specification Guidelines:**
  - *Content:* Management review demands summarized/critical info (e.g., max 4 pages); specification demands comprehensive attribute listings (e.g., `ATTR-1255`).
  - *Format:* Management review uses narrative scenarios or natural language; specification uses formal models (e.g., Message Sequence Charts).
  - *Quality:* Management review highlights potential disagreements or syntax compliance; specification demands formal tool-based syntactic checking.

### 5.3 Additional Information Artefacts
- **Interviews:** Documented in English, approved by the interviewee, with unfilled slots marked as `TBD`.
- **Decision Meetings:** Must log Project, Date, Participants, Decisions (ID, Issue, Vote Count), Votes per Participant, and Pros/Cons for chosen/declined arguments.
- **Textual vs. Modeled Requirements:** Compare textual requirements (lists of statements) against visual process models (such as activity state diagrams):
  ```mermaid
  stateDiagram-v2
      [*] --> CustomerPlacesOrder
      CustomerPlacesOrder --> CustomerPaysForOrder : [Order not canceled]
      CustomerPlacesOrder --> OrderCanceled : [Order canceled (REQ006)]
      CustomerPaysForOrder --> ProduceOrder : [Payment succeeded (REQ003)]
      CustomerPaysForOrder --> OrderCanceled : [Payment failed (REQ004)]
      ProduceOrder --> DeliverOrder : (REQ005)
      DeliverOrder --> [*]
      OrderCanceled --> [*]
  ```

---

## Chapter 6: Model-based Documentation of Requirements

### 6.1 Conceptual Modelling Fundamentals
- **Conceptual Model:** A purposeful abstraction of the universe of discourse.
- **Stachowiak's Model Properties:**
  1. *Representation Property:* Maps/represents an existing or conceived reality.
  2. *Reduction Property:* Captures only a simplified subset of reality.
  3. *Pragmatic Property:* Developed for a specific user, purpose, and time frame.
- **Model Quality:** Syntax (language rules), Semantics (meaning), and Pragmatics (interpretability).

### 6.2 Goal Models
- Define system goals and vision as AND/OR trees:
  - **AND-Decomposition:** All sub-goals must be satisfied to satisfy the parent.
  - **OR-Decomposition:** At least one sub-goal must be satisfied to satisfy the parent.

### 6.3 Use Case Modelling
Defines system boundary, actors (context), and use cases (system scope). Use case templates complement the diagrams by specifying flows, pre-conditions, and post-conditions.

---

## Chapter 7: Functional Modelling

### 7.1 Data Flow Diagrams (DFDs)
DFDs represent the system from the functional perspective (data transformation).
- **Core Elements:**
  - *Process:* Circle/Bubble representing data manipulation.
  - *Data Flow:* Directed arrow representing data transit.
  - *Data Store:* Parallel lines representing persistent data.
  - *External Entity:* Rectangle representing usage/context interaction.
- **Hierarchization (Levelling):**
  - *Context Diagram (Level 0):* Represents the system as a single process surrounded by external entities.
  - *Level 1, 2, ... DFDs:* Decompose parent processes into finer processes.
- **Balancing:** Inputs and outputs of a decomposed parent process must match the inputs and outputs of the child DFD.
- **Data Dictionaries:** Define the structure of all data flows and stores systematically.
- **Mini Specs:** Define the internal processing logic of primitive (non-decomposed) processes.

---

## Chapter 8: Data Modelling

### 8.1 Entity-Relationship (ER) Modelling
Represents requirements from the static data perspective:
- **Entity:** An object of interest in the universe of discourse (represented as a rectangle).
- **Relationship:** A connection between entities (represented as a diamond).
- **Attribute:** Properties of entities/relationships (represented as ovals).
- **Cardinalities:** Constraints on relationship participation (1:1, 1:N, N:M).

### 8.2 UML Class Diagrams
Object-oriented notation representing data structure:
- **Class:** Captures attributes and operations.
- **Associations:** Relationships between classes.
- **Aggregation (Open Diamond):** "Part-of" relationship (weak association where parts can exist independently of the whole).
- **Composition (Filled Diamond):** Strong "part-of" relationship (parts cannot exist without the whole; lifetime is bound to the whole).
- **Generalization/Inheritance (Empty Arrow):** Represents "is-a" taxonomy.

---

## Chapter 9: Behavioral Modelling

### 9.1 Statecharts (State Machines)
Represent the system from the behavioral perspective, modeling system states and transitions.
- **Core Elements:**
  - *State:* Permitted condition of the system (represented as a rounded rectangle).
  - *Transition:* Transition from one state to another (directed arrow).
  - *Triggering Event:* Stimulus that initiates a transition.
  - *Guard:* A boolean condition that must be true for the transition to occur.
  - *Action:* Operation executed during a transition.
- **Advanced Constructs:**
  - *Composite States:* States nested within a superstate to represent hierarchy.
  - *Orthogonal States:* Parallel sub-states representing concurrent system behaviors.
  - *History States:* Remember the last active sub-state when leaving a composite state.

---

## Chapter 10: Requirements Management (RM)

### 10.1 Key RM Activities
- **Version and Configuration Management:** Defines baselines (agreed-upon versions of requirements) and manages evolution using configuration items.
- **Change Management:** Monitors change requests through a formal process: Classification $\to$ Impact Analysis $\to$ Evaluation (CCB approval) $\to$ Prioritisation $\to$ Monitoring.
- **Requirements Traceability:** Enables tracking a requirement backward to its origin (pre-RS traceability) and forward to design, code, and test cases (post-RS traceability).

### 10.2 Prioritisation Methods
- **100 Dollar Test:** Stakeholders metaphorically spend $100 on requirements to establish weightings.
- **Wiegers' Prioritisation Matrix:** Evaluates priority mathematically:
  $$\text{Priority} = \frac{\text{Value \%}}{(\text{Cost \%} \times \text{Weight}_{\text{Cost}}) + (\text{Risk \%} \times \text{Weight}_{\text{Risk}})}$$
  Where:
  - $\text{Value} = (\text{Relative Benefit} \times \text{Weight}_{\text{Benefit}}) + (\text{Relative Penalty} \times \text{Weight}_{\text{Penalty}})$
  - $\text{Value \%}$, $\text{Cost \%}$, and $\text{Risk \%}$ are normalized percentages.
