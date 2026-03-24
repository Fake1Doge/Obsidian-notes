---
title: "An Overview of System Analysis and Design"
date: 2026-03-18
tags:
  - lecture
  - cca103
  - system-analysis
  - system-design
  - sdlc
---

# Chapter 1: An Overview of System Analysis and Design

## Chapter Outline
- **Part I:** Software Development and System Analysis and Design
- **Part II:** [[System Development Life Cycle]] (SDLC)
- **Part III:** [[Iterative Development]]

> [!info] Learning Objectives
> By the end of this topic, you should be able to:
> 1. Explain the role played in Information Systems (IS) development by the [[Systems Analyst]].
> 2. Describe the purpose of systems analysis and design when developing information systems.
> 3. Describe the fundamental systems development life cycle and its four phases.

---

## Part I: Software Development and System Analysis and Design

> [!info] Definition: SDLC
> The **[[System Development Life Cycle]] (SDLC)** is the process of planning, designing, building, and delivering an information system to support business needs.

- Developing an **effective information system** is complex and much harder than creating small software applications.
- Many IT projects fail because successful system development requires many factors to be handled correctly. Causes of failure include:
  - Outdated legacy applications
  - Dispute with unionized users
  - Hard-to-use software
  - Poor planning
  - Organizational issues
  - Complicated technical infrastructure
  - Lack of collaboration between system developers and business users
- The main goal of system development is to **create organizational value**, not just to build a technically impressive system.

### The Systems Analyst

> [!info] Definition: Systems Analyst
> The **[[Systems Analyst]]** plays a key role by understanding business problems, identifying improvements, and designing solutions.

- Works closely with project team members to ensure the right system is developed effectively.
- Must understand how technology can be used to solve business problems.
- May also act as a **change agent** by identifying improvements, designing solutions, and encouraging users to adopt the system.

#### Systems Analyst Skills
- New information systems introduce change to the organization and its people. Leading organizational change requires analysts to understand what to change, how to change it, and how to gain support from others.
- Systems analysts need six key skill categories:
  1. Technical
  2. Business
  3. Analytical
  4. Interpersonal
  5. Management
  6. Ethical
- Analysts must communicate and work effectively with multiple **[[Stakeholders]]**: end users, managers, programmers, and external vendors.
- Analysts must act with fairness, honesty, and ethics, especially when handling confidential information.

#### Systems Analyst Roles
In large organizations, systems development projects involve several analysts with different but complementary roles. In smaller organizations, one person may perform multiple roles.

1. **[[Systems Analyst]]**: Focuses on information system issues, including system design and IT-supported business improvement.
2. **[[Business Analyst]]**: Focuses on business value, business process improvement, and policy design.
3. **[[Requirements Analyst]]**: Focuses on gathering complete and accurate requirements from stakeholders using strong business understanding, communication skills, and requirements elicitation techniques.
4. **[[Infrastructure Analyst]]**: Focuses on technical infrastructure issues, ensures the new system aligns with organizational standards, and identifies the hardware, software, network, and database support needed for the system.

**Career Paths for System Developers:**
- Entry-level business function specialist $\rightarrow$ Business analyst / Requirements analyst / Change management analyst $\rightarrow$ Project manager
- Entry-level programmer/analyst $\rightarrow$ Systems analyst / Infrastructure analyst $\rightarrow$ Software architect

### Software Development Concepts

> [!info] Systems Analysis vs. Systems Design
> - **[[Systems Analysis]]**: Those activities that enable a person to **understand** and **specify** what an information system should accomplish (What is required for the new system to solve the problem).
> - **[[Systems Design]]**: Those activities that enable a person to **define** and **describe** in detail the system that solves the need (How the system will operate to solve the problem).

> [!info] Computer Application vs. Information System
> - **[[Computer Application]] (App)**: A computer software program that executes on a computing device to carry out a specific set of functions.
> - **[[Information System]]**: A set of interrelated components that collect, process, store, and provide as output the information needed to complete business tasks.

**Software Development Stages:**
1. Discover (Understand the need)
2. Imagine (Capture the vision)
3. Design (Define the solution)
4. Align (Communicate the vision and solution)
5. Create (Build the solution)
6. Validate (Confirm the solution meets the need)
7. Launch (Launch the solution system)

---

## Part II: The Systems Development Life Cycle (SDLC)

Building an information system is like building a house, where ideas are gradually refined before the final product is created.

The SDLC consists of four main phases (**PADI**):
1. **[[Planning]]**
2. **[[Analysis]]**
3. **[[Design]]**
4. **[[Implementation]]**

Each phase includes a series of steps, techniques, and deliverables that guide system development. Although the SDLC may appear linear, projects may follow it consecutively, incrementally, or iteratively. The SDLC is a process of gradual refinement, where each phase builds on and adds detail to the previous one.

### 1. Planning Phase
The fundamental process of understanding *why* an IS should be built and determining *how* the project team will go about building it.

- **Step 1: Project Initiation**: The system's business value to the organization is identified (how will it contribute to the organization's future success?). Most ideas come from outside the IS area and are recorded on a **[[System Request]]**.
- **Step 2: Approval**: The IS approval committee reviews the system request and feasibility analysis to decide whether the project should proceed. Once approved, the project manager plans, staffs, and controls the project throughout the SDLC. The main deliverable is a **Project Plan**.

> [!note] Important: The System Request
> A system request presents a summary of a business need and explains how a system that addresses the need will create business value.
> The IS department works with the **Project Sponsor** to conduct a **Feasibility Analysis** examining key aspects:
> 1. **Technical Feasibility**: Can we build it?
> 2. **Economic Feasibility**: Will it provide business value?
> 3. **Organizational Feasibility**: If we build it, will it be used?

#### Elements of the System Request Form
| Element | Description | Examples |
| :--- | :--- | :--- |
| **Project Sponsor** | The person who initiates the project and acts as the primary contact. | VP of Marketing, CIO, CEO |
| **Business Need** | The business-related reasons for initiating the system. | Reach a new market segment, improve access to info, streamline supply acquisition. |
| **Business Requirements** | The new or enhanced capabilities that the system will provide. | Provide online access, capture demographic info, enhance online user support. |
| **Business Value** | The benefits the system will create for the organization. | 3% increase in sales, reduction in headcount, $200,000 cost savings. |
| **Special Issues/Constraints** | Issues that pertain to the approval committee's decision. | Government-mandated deadlines, top-level security clearance needed. |

### 2. Analysis Phase
The analysis phase answers the questions of **who** will use the system, **what** the system will do, and **where** and **when** it will be used. The team investigates the current system, identifies improvement opportunities, and develops a concept for the new system.

- **Step 1:** An **Analysis Strategy** is developed by examining the current system (*as-is system*) and its problems, identifying ideas for the new system (*to-be system*).
- **Step 2:** The project team **gathers and analyzes requirements** to develop a **system concept**, supported by requirement statements and business analysis models.
- **Step 3:** Analyses, system concept, requirements, and models are compiled into a **System Proposal**, presented to the project sponsor and decision-makers to determine if the project should proceed.

### 3. Design Phase
Determines **how** the system will operate, including hardware, software, network infrastructure, user interface, forms, reports, specific programs, databases, and files.

- **Design Strategy:** Determine the strategy for developing, outsourcing, or purchasing the system.
- **Architecture Design:** Develop the architecture design for required hardware, software, and network infrastructure.
- **Interface Design:** Design the UI, navigation methods, forms, and reports.
- **DB & File Specification:** Specify the database, file structure, and program design.

### 4. Implementation Phase
The final phase where the **system is actually built** (or purchased/installed). It usually gets the most attention, being the longest and most expensive single part of the process.

- **System Construction:** The system is built and tested. Testing is vital because fixing errors later can be costly.
- **System Installation:** The new system is installed, replacing the old one, and users are trained.
- **Support Plan:** Prepared to include review and future system improvements.

---

## Project Identification and Initiation

- **Project:** A planned undertaking that has a beginning and an end and produces some definite result. Used to develop an IS, requiring knowledge of systems analysis and design tools.
- Projects begin with **business needs** that require system support.
- May come from new strategies, expansion efforts, or organizational change.
- Triggered by **business problems** (poor service, defects) or **innovative uses of IT**.
- Adopting emerging technologies early can yield a competitive advantage.

---

## Part III: Iterative Development and Agile SDLC

System development process methodologies include:
1. Unified Process (UP)
2. Extreme Programming (XP)
3. Scrum
*Most processes/methodologies now use Agile and Iterative development.*

> [!info] Definition: Agile and Iterative Development
> - **[[Agile Development]]**: An IS development process emphasizing **flexibility** to anticipate new requirements during development. "Fast on feet; responsive to change."
> - **[[Iterative Development]]**: An approach where the system is **"grown" piece by piece** through multiple iterations. It completes a small part of the system (a *mini-project*), then repeats processes to refine and add more, until done.

Iterative core processes (done across multiple iterations):
1. Identify the problem and obtain approval.
2. Plan and monitor the project.
3. Discover and understand details.
4. Design system components.
5. Build, test, and integrate system components.
6. Complete system tests and deploy the solution.

---

## Case Study: Ridgeline Mountain Outfitters (RMO) Tradeshow System

> [!example] Example: RMO Tradeshow System
> **RMO** is a large retail company for outdoor/sporting clothing and accessories.
> **Problem:** Purchasing agents attend trade shows globally to order new products.
> **Need:** An app to collect and track information about suppliers and new products while at tradeshows.
> **Proposed Project:** RMO Tradeshow System with two subsystems:
> 1. Supplier information subsystem
> 2. Product information subsystem

This example demonstrates one iteration (planned for 6 days) covering all six core processes of the SDLC.

### D-0: Initial Activities (Pre-project)
- **Identify problem and objective (Core Process 1):** Preliminary investigation, create **[[System Vision Document]]**.
- **Obtain approval:** Meet with stakeholders, approve plan and budget.

> [!note] RMO System Vision Document
> - **Problem Description:** Need to capture supplier info and specific merchandise details during trade shows, including high-quality photos to facilitate online product pages. Must be deployed on portable equipment.
> - **System Capabilities:** Collect supplier info, contact info, product info, take pictures, function stand-alone offline, connect via Wi-Fi/telephone to transmit data.
> - **Business Benefits:** Increase timely communication, improve purchase order decisions, maintain rapid info flow, expedite placing orders.

### D-1 Activities: Plan the Project (Core Process 2)
- Determine major components (Supplier and Product subsystems).
- Define iterations and assign functions: Decide to build Supplier subsystem first in a single, straightforward iteration.
- Determine team members and responsibilities.
- Create a **Work Breakdown Structure (WBS)** and a Work Sequence Draft for the iteration.

### D-2 Activities: Discover and Understand Details (Core Process 3)
- Do preliminary fact-finding to understand requirements.
- Develop use cases and a use case diagram.
- Develop object classes and a preliminary class diagram.

**Identify Use Cases (Both Subsystems):**
- Look up supplier
- Enter/update supplier information
- Look up contact
- Enter/update contact information
- Look up product information
- Enter/update product information
- Upload product image

**Identify Object Classes:**
- `Supplier` (Supplier name, address, description, comments)
- `Contact` (Name, address, phones, emails, position, comments)
- `Product` (Category, name, description, gender, comments)
- `ProductPicture` (ID, image)

### D-3 Activities: Discover Details & Design System Components
- Do in-depth fact-finding.
- Document detailed workflow of each use case using **Activity Diagrams**.
- Define the user experience with screen and report sketches (Draft Screen Layout).

### D-4 Activities: Design System Components (Core Process 4)
- Design the database (schema).
- Design the system's high-level structure (Browser, Windows, or smartphone).
- Define architectural configuration (components).
- Design class diagram and subsystem architectural design.

*Note on Managing the Project:* Lots of design diagrams are used. Design is a complex activity with multiple levels where diagrams complement each other. Not everything is diagrammed for small projects. Programming is done concurrently with design (some design, some coding, etc.).

### D-5 Activities: Build, Test, and Integrate (Core Process 5)
- Continue with design details (use case by use case).
- Continue programming (build phase).
- Perform unit and integration tests.
- Example: Writing PHP code for `SupplierView` class.

### D-6 Activities: Complete System Testing and Deploy (Core Process 6)
- Perform system functional testing.
- Perform user acceptance testing.
- Possibly deploy part of the system.
- **Workflow of Testing:** Start $\rightarrow$ Create test data $\rightarrow$ Conduct tests $\rightarrow$ Document errors $\rightarrow$ Fix errors $\rightarrow$ Repeat until End.

### First Iteration Recap
- This 6-day iteration represents a small project (most iterations are 2 to 4 weeks).
- End users need to be heavily involved (especially days 1, 2, 3, and 6).
- Design and programming happen concurrently (days 4 and 5).

---
## Summary of Key Terms
- [[Computer application]]
- [[Information system]]
- [[Systems analysis]]
- [[System Design]]
- [[SDLC]]
- [[Iterative Development]]
- [[Agile Development]]
- [[Class Diagram]]
- [[Database Schema]]
- [[Architectural Design]]

# Chapter 2: Investigating System Requirements

## Chapter Outline
- **Part I:** System Analysis Activities
- **Part II:** What Are the Requirements?
- **Part III:** Information Gathering Techniques
- **Part IV:** Models and Activity Diagrams

> [!info] Learning Objectives
> By the end of this topic, you should be able to:
> 1. Describe the activities of systems analysis.
> 2. Classify requirements correctly as business, user, functional, or nonfunctional requirements.
> 3. Identify and understand different kinds of stakeholders and their contributions to requirements definition.
> 4. Employ the requirement elicitation techniques of interviews, JAD sessions, questionnaires, document analysis, and observation.
> 5. Develop UML activity diagrams to model workflows.

---

## Part I: System Analysis Activities

The analysis phase (Core Process 3: Discover and understand details) involves five key activities:

1. **Gather detailed information**: Meet with users, observe work, and review documents.
2. **Define requirements**: Categorize and document what the system must do and how it should perform.
3. **Prioritize requirements**: Determine which requirements are essential and which are desirable but not critical. This helps manage limited resources and prevent **[[Scope Creep]]**.
4. **Develop user-interface dialogs**: Create abstract models, storyboards, and prototypes to elicit and validate requirements with users.
5. **Evaluate requirements with users**: An iterative process of refining models and prototypes until they are accurate and validated.

---

## Part II: What Are the Requirements?

> [!info] Definition: System Requirements
> **[[System Requirements]]** are all the activities the new system must perform or support and the constraints that the new system must meet.

Requirements are broadly categorized into:
- **[[Functional Requirements]]**: The activities the system must perform (e.g., "Generate electronic fund transfers", "Calculate payroll taxes").
- **[[Nonfunctional Requirements]]**: Characteristics of the system other than the activities it performs (constraints or conditions it must meet).

### The FURPS+ Framework
A common acronym for classifying requirements:

| Category | Description | Examples (e.g., Instagram-like app) |
| :--- | :--- | :--- |
| **[[Functional]]** | Activities the system must perform. | Users can upload photos, like posts, comment. |
| **[[Usability]]** | User interface, related work procedures, online help, and documentation. | Simple and attractive interface; easily find home page. |
| **[[Reliability]]** | Dependability of a system—how often it exhibits outages or incorrect processing. | App should not crash when many users are uploading stories. |
| **[[Performance]]** | Operational characteristics related to workload, throughput, and response time. | Photos and videos should load within 2 seconds. |
| **[[Security]]** | How access to the app is controlled and how data will be protected. | Encrypted passwords; only owner can access private messages. |

**The "+" in FURPS+ adds additional categories:**
1. **Design constraints**: Restrictions on hardware and software (e.g., "Must run on iOS 15+").
2. **Implementation requirements**: Constraints on programming languages, tools, or protocols.
3. **Interface requirements**: Descriptions of interactions among different systems.
4. **Physical requirements**: Characteristics of hardware such as size, weight, and power consumption.
5. **Supportability requirements**: How the system is installed, configured, monitored, and updated.

---

## Part III: Stakeholders and Information Gathering

### Stakeholders
**[[Stakeholders]]** are persons who have an interest in the successful implementation of the system. They are the primary source of information for requirements.

- **Internal vs. External**: People inside vs. outside the organization.
- **Operational vs. Executive**: People who regularly interact with the system vs. those who don't directly interact but use the information or have a financial interest.
- **[[The Client]]**: The person or group that provides the funding for the project and usually approves stages of development.

### Information Gathering Techniques

| Technique | Description | Pros/Cons |
| :--- | :--- | :--- |
| **[[Interview]]** | Meeting with users/stakeholders to understand business functions and rules. | **+** Highly effective for detail. **-** Time-consuming and expensive. |
| **[[Questionnaire]]** | Written questions used to gather info from many people. | **+** Good for large groups in different locations. **-** Limited depth; lower response rates. |
| **[[JAD]] (Joint Application Development)** | A structured collaborative technique where users and management work together. | **+** Reduces scope creep; smoother progress. **-** Group challenges (dominant participants). |
| **[[Document Analysis]]** | Reviewing existing reports, forms, and manuals to understand the "as-is" system. | **+** Provides evidence for system change. **-** May not reflect informal "real" systems. |
| **[[Observation]]** | Directly watching how work is actually performed. | **+** Reveals clues users might forget to mention. **-** People may act differently when watched. |

---

## Part IV: Models and Activity Diagrams

### Models and Modeling
A **model** is a representation of some aspect of the system being built.
- **Types of Models**:
  1. **Textual**: Written descriptions.
  2. **Graphical**: Diagrams or schematics (using **[[UML]]** - Unified Modeling Language).
  3. **Mathematical**: Formulas, statistics, or algorithms.

### Documenting Workflows with Activity Diagrams
A **[[Workflow]]** is a sequence of work steps that complete a business transaction. 

> [!info] Definition: Activity Diagram
> A **[[UML]]** diagram that describes user (or system) activities, the person who does each activity, and the sequential flow of these activities.

**Activity Diagram Symbols:**
- **Swimlane heading**: Identifies the agent/actor performing the activities.
- **Starting activity (Pseudo)**: A solid circle indicating the beginning.
- **Transition arrow**: Shows the flow from one activity to the next.
- **Activity**: A rounded rectangle representing a step in the process.
- **Decision activity**: A diamond shape representing a branch in the flow.
- **Synchronization bar (Split/Join)**: Used for concurrent (parallel) paths.
- **Ending activity (Pseudo)**: A bullseye circle indicating the end.

---
## Summary of Key Terms
- [[System Requirements]]
- [[Functional Requirements]]
- [[Nonfunctional Requirements]]
- [[FURPS]] / [[FURPS+]]
- [[Stakeholders]]
- [[Joint Application Development]] (JAD)
- [[Scope Creep]]
- [[UML]]
- [[Activity Diagram]]
- [[Workflow]]
