# CCA103: System Analysis and Design

## Chapter 1: An Overview of System Analysis and Design

### Introduction to SDLC
The **Systems Development Life Cycle (SDLC)** is the process of planning, designing, building, and delivering an information system to support business needs. Developing an effective information system is complex and requires careful management of many factors.

> [!info] Core Goal
> The main goal of system development is to **create organizational value**, not just to build a technically impressive system.

### The Systems Analyst
The systems analyst plays a key role in understanding business problems, identifying improvements, and designing solutions.

#### Key Roles
*   **Systems Analyst:** Focuses on information system issues, including system design and IT-supported business improvement.
*   **Business Analyst:** Focuses on business value, business process improvement, and policy design.
*   **Requirements Analyst:** Focuses on gathering complete and accurate requirements from stakeholders.
*   **Infrastructure Analyst:** Focuses on technical infrastructure issues, ensuring the system aligns with organizational standards.

#### Key Skills
Analysts need skills in six categories:
1.  **Technical:** Knowledge of hardware, software, and networks.
2.  **Business:** Understanding of how businesses operate.
3.  **Analytical:** Ability to solve problems and think logically.
4.  **Interpersonal:** Communication and collaboration with stakeholders.
5.  **Management:** Managing projects, people, and resources.
6.  **Ethical:** Handling confidential information with fairness and honesty.

### Systems Analysis vs. Systems Design
*   **Systems Analysis:** Activities that enable a person to **understand and specify** what an information system should accomplish (**WHAT**).
*   **Systems Design:** Activities that enable a person to **define and describe in detail** the system that solves the need (**HOW**).

### Project Identification and Initiation
Projects begin with **business needs** (e.g., new strategies, expansion, or business problems like poor service).
*   **System Request:** A summary of a business need and an explanation of how a system will create value.
*   **Feasibility Analysis:**
    *   **Technical:** Can we build it?
    *   **Economic:** Will it provide business value?
    *   **Organizational:** If we build it, will it be used?

### Iterative and Agile Development
Modern methodologies emphasize flexibility and "growing" the system piece by piece.
*   **Agile Development:** Emphasizes flexibility to anticipate new requirements.
*   **Iterative Development:** An approach where the system is grown through multiple iterations (mini-projects).
*   **Methodologies:** Unified Process (UP), Extreme Programming (XP), Scrum.

---

## Chapter 2: Investigating System Requirements

### System Analysis Activities
1.  **Gather detailed information:** From users and existing materials.
2.  **Define requirements:** Functional and non-functional.
3.  **Prioritize requirements:** Distinguish essential functions from desirable ones.
4.  **Develop user interface dialogs:** To elicit and document requirements more clearly.
5.  **Evaluate requirements with users:** Iterative process of validation and refinement.

### Types of Requirements (FURPS+)
Requirements describe what the system must do and the constraints it must meet.

> [!note] FURPS Framework
> *   **F**unctional: The activities the system must perform (e.g., generate transfers, calculate taxes).
> *   **U**sability: Operational characteristics related to users (e.g., simple interface).
> *   **R**eliability: Dependability (e.g., how often it fails, recovery).
> *   **P**erformance: Operational characteristics (e.g., response time, throughput).
> *   **S**ecurity: How access is controlled and data protected.

**FURPS+ Extension:**
*   **Design constraints:** Restrictions on hardware and software.
*   **Implementation:** Required programming languages or tools.
*   **Interface:** Interactions among systems.
*   **Physical:** Size, weight, power consumption.
*   **Supportability:** How the system is installed, configured, and updated.

### Stakeholders
Stakeholders are the primary source of information for system requirements.
*   **Internal:** Persons within the organization (e.g., bookkeepers, accountants).
*   **External:** Persons outside the organization (e.g., customers, partner organizations).
*   **Operational:** Persons who regularly interact with the system.
*   **Executive:** Persons who use the information or have a financial interest.
*   **Client:** The person or group providing the funding for the project.

### Information Gathering Techniques
| Technique | Description | Pros/Cons |
| :--- | :--- | :--- |
| **Interviews** | Meeting with individuals or groups to understand functions and rules. | Most effective but time-consuming and expensive. |
| **Questionnaires** | Distributing written questions to many people. | Good for breadth and large groups; low response rates. |
| **JAD (Joint Application Development)** | Structured collaborative sessions with 10-20 users and a facilitator. | Reduces scope creep; can be dominated by strong voices. |
| **Document Analysis** | Reviewing existing manuals, forms, and reports. | Helps understand the "as-is" system; may be outdated. |
| **Observation** | Watching how work is actually performed. | Reveals the "real situation"; people may behave differently when watched. |

### Modeling and Activity Diagrams
Models (Textual, Graphical, Mathematical) are representations of the system. **Unified Modeling Language (UML)** provides standard symbols.

#### Activity Diagrams
Used to document workflows by showing user/system activities and their sequential flow.
*   **Starting Activity (Pseudo):** Solid circle.
*   **Ending Activity (Pseudo):** Concentric circles.
*   **Transition Arrow:** Direction of flow.
*   **Activity:** Rounded rectangle.
*   **Decision Activity:** Diamond (with [yes/no] guards).
*   **Synchronization Bar:** Split (one path to many) or Join (many paths to one).
*   **Swimlane:** To show which stakeholder or subsystem performs an activity.
