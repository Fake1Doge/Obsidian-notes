# CCA103 System Analysis and Design

> [!abstract] Course Overview
> This course provides an overview of the systems development process, focusing on systems analysis (understanding *what* a system should do) and systems design (defining *how* the system will solve the need). It covers the System Development Life Cycle (SDLC), the role of the systems analyst, and key modelling techniques including Use Cases and Activity Diagrams.

---

## 1. Overview of System Analysis and Design

### 1.1 Core Definitions
- **Systems Analysis**: Those activities that enable a person to **understand and specify** what an information system should accomplish. It answers "What is required?".
- **Systems Design**: Those activities that enable a person to **define and describe** in detail the system that solves the need. It answers "How the system will operate?".
- **Information System**: A set of interrelated components that collect, process, store, and provide as output the information needed to complete business tasks.
- **SDLC (System Development Life Cycle)**: The process of planning, designing, building, and delivering an information system.

### 1.2 The Role of the Systems Analyst
The systems analyst is a key role in IS development, acting as a bridge between business problems and technological solutions.
- **Key Responsibilities**: Understanding business problems, identifying improvements, and designing solutions.
- **Skill Categories**: Technical, Business, Analytical, Interpersonal, Management, and Ethical.
- **Related Roles**:
    - **Business Analyst**: Focuses on business value and process improvement.
    - **Requirements Analyst**: Focuses on gathering complete and accurate requirements from stakeholders.
    - **Infrastructure Analyst**: Focuses on technical infrastructure and organizational standards.

### 1.3 System Development Life Cycle (SDLC) - PADI
The SDLC consists of four main phases (often abbreviated as PADI):
1. **Planning**: Understanding why an IS should be built and determining how the project team will build it.
    - Includes **System Request** (summary of business need) and **Feasibility Analysis** (Technical, Economic, Organizational).
2. **Analysis**: Answering the questions of *who* will use the system, *what* it will do, and *where/when* it will be used.
3. **Design**: Determining how the system will operate (hardware, software, network, UI, databases, files).
4. **Implementation**: The final phase where the system is actually built, installed, and supported.

---

## 2. Investigating System Requirements

### 2.1 Analysis Phase Activities
The analysis phase is about **discovery and understanding**.
- Gather detailed information (interviews, observation).
- Define requirements (functional and non-functional).
- Prioritize requirements (essential vs. desirable).
- Develop user interface dialogs (storyboards, prototypes).
- Evaluate requirements with users.

### 2.2 Types of Requirements (FURPS+)
Requirements are classified using the FURPS+ framework:
- **F**unctional: The activities the system must perform (business uses).
- **U**sability: Operational characteristics (UI, help, documentation).
- **R**eliability: Dependability (uptime, service outages, recovery).
- **P**erformance: Operational characteristics (workload, throughput, response time).
- **S**ecurity: Data protection and access control.
- **+ (Extensions)**: 
    - **Design constraints**: Restrictions on hardware/software.
    - **Implementation requirements**: Programming languages, tools, protocols.
    - **Interface requirements**: Interactions among systems.
    - **Physical requirements**: Hardware size, weight, power.
    - **Supportability requirements**: Installation, configuration, updates.

### 2.3 Information Gathering Techniques
- **Interviews**: Most effective for understanding business rules but time-consuming.
- **Joint Application Development (JAD)**: Structured collaborative technique with stakeholders, users, and analysts in a special room with a neutral facilitator.
- **Questionnaires**: Useful for gathering info from many people in different locations.
- **Document Analysis**: Reviewing existing reports, memos, and forms to understand the "as-is" system.
- **Observation**: Watching how work is actually performed to see the real situation and verify gathered info.

---

## 3. Modelling with Use Cases and Activity Diagrams

### 3.1 Use Cases and User Stories
- **User Story**: A short sentence in everyday language: *"As a \&lt;role\&gt;, I want to \&lt;goal\&gt; so that \&lt;reason\&gt;."* Includes **Acceptance Criteria**.
- **Use Case**: An activity that the system performs, usually in response to a request by a user (**Actor**).
- **Identifying Use Cases**:
    1. **User Goal Technique**: Asking users to describe their goals for using the system.
    2. **Event Decomposition Technique**: Identifying business events (External, Temporal, State) the system must respond to.

### 3.2 Use Case Diagrams (UML)
A graphical model showing use cases and their relationships to actors.
- **Automation Boundary**: The boundary between the computerized portion and the users.
- **Relationships**:
    - **Communicates**: Line between actor and use case.
    - **Includes (\&lt;\&lt;include\&gt;\&gt;)**: A use case that contains behavior common to more than one other use case.
    - **Extends (\&lt;\&lt;extend\&gt;\&gt;)**: Handles variations or exceptions from the basic use case.
    - **Generalizes**: One actor/use case is a more typical/general version of another.

### 3.3 Activity Diagrams (Workflows)
Describes user (or system) activities, the person who does each activity, and the sequential flow.
- **Symbols**:
    - **Starting activity (Pseudo)**: Solid black circle.
    - **Ending activity (Pseudo)**: Bullseye circle.
    - **Transition arrow**: Flow path.
    - **Activity**: Rounded rectangle.
    - **Decision activity**: Diamond (with [yes]/[no] guards).
    - **Synchronization bar (Split/Join)**: Thick horizontal/vertical line for concurrent paths.
    - **Swimlane**: Vertical column representing a specific actor or subsystem.

---

> [!tip] Extra Notes: Iterative Development
> Modern SDLCs often use **Iterative and Agile** approaches. Instead of a single linear path, the system is "grown" piece by piece through multiple iterations (typically 2-4 weeks each). Each iteration goes through all six core processes (Identify, Plan, Discover, Design, Build, Test).
