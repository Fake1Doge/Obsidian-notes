## 1. Introduction to Requirements Engineering (RE)

### 1.1 The Importance of Requirements Engineering
Requirements Engineering is a critical success factor for software-intensive systems. 

> [!quote] Fred Brooks (1987)
> "The hardest single part of building a software system is deciding precisely what to build. No other part of the conceptual work is as difficult as establishing the detailed technical requirements, including all the interfaces to people, to machines, and to other software systems. No other part of the work so cripples the resulting system if done wrong. No other part is more difficult to rectify later."

#### CHAOS Report Statistics
Research by The Standish Group (CHAOS Report 2015) highlights the impact of RE on project outcomes:
- **Project Outcomes:** On average, **29%** of projects are successful, **19%** are failed (cancelled), and **52%** are challenged (completed with resource overspend and functional restrictions).
- **Reasons for Challenged Projects (Resource overspend & functional restrictions):** 
    - **48.1%** of reasons are related to poor RE:
        - Lack of user input (12.8%)
        - Incomplete requirements & specifications (12.3%)
        - Changing requirements & specifications (11.8%)
        - Unrealistic expectations (5.9%)
        - Unclear objectives (5.3%)
- **Reasons for Failed Projects (Cancellations):** 
    - **44.1%** of reasons are related to poor RE:
        - Incomplete requirements (13.1%)
        - Lack of user involvement (12.4%)
        - Unrealistic expectations (9.9%)
        - Changing requirements & specifications (8.7%)

#### Effort for Correcting Defects
The cost of fixing requirements defects increases significantly as the project progresses:
- **Small/Non-critical projects:** Defects found after delivery require **5x** more effort to correct. (Analysis 1x $\to$ Design 1.5-2.5x $\to$ Coding 2-5x $\to$ Testing 2.5-5x $\to$ Delivery 5x)
- **Large/Critical projects:** Defects found after delivery require **100x** more effort to correct. (Analysis 1x $\to$ Design 2.5-5x $\to$ Coding 5-10x $\to$ Testing 10-50x $\to$ Delivery 100x)

### 1.2 Core Definitions

> [!info] Definition: Requirement (IEEE 610.12-1990)
> A **requirement** is:
> 1. A **condition or capability** needed by a user to solve a problem or achieve an objective.
> 2. A **condition or capability** that must be met or possessed by a system, system component, product, or service to satisfy a contract, standard, specification, or other formally imposed documents.
> 3. A **documented representation** of a condition or capability as in (1) or (2).
> 
> *PMBOK Guide 5th Ed:* Requirements include the quantified and documented needs, wants, and expectations of the sponsor, customer, and other stakeholders.

> [!info] Definition: Requirement (IREB CPRE Glossary)
> 1. A **need** perceived by a stakeholder.
> 2. A **capability or property** that a system shall have.
> 3. A **documented representation** of a need, capability or property.

> [!info] Definition: Stakeholder
> A **stakeholder** of a system is a person, group of people, or an organisation who influences a system's requirements or who is impacted by that system. A stakeholder can influence not only the result but also the project life cycle (direct or indirect influence).

> [!example] Example: Stakeholders in a Public Transport Ticketing System
> For a web-based system for buying tickets for public transport, stakeholders might include:
> - **End customer:** The person who buys the ticket.
> - **Marketing manager:** The person who sells the ticket.
> - **IT administrator:** The person who runs the system.
> - **Legal expert:** Ensures data privacy and compliance.
> - **Financial manager:** Handles payment processing.

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

1. **Functional Requirements:** 
    - *IREB Definition:* A requirement concerning a result or behavior that shall be provided by a function of a system.
    - *Description:* Statements of services the system should provide, how it should react to particular inputs, and how it should behave in particular situations.
    - *Example (R-6):* If a sensor detects a damage of the window, the system shall inform the security company.
2. **Quality Requirements:** 
    - *IREB Definition:* A requirement that pertains to a quality concern that is not covered by functional requirements.
    - *Description:* Define a **quality property** for the entire system, a system component, a service, or a function (e.g., Performance, Security, Usability, Maintainability).
    - *Example (R-15):* The release of the locking mechanism shall take 0.8 seconds at most.
    - *Standards:* ISO/IEC 25010:2011 defines:
        - **Quality in Use:** Effectiveness, Efficiency, Satisfaction, Freedom from risk, Context coverage.
        - **System/Software Product Quality:** Functional suitability, Performance efficiency, Compatibility, Reliability, Security, Maintainability, Portability.
3. **Constraints:** 
    - *IREB Definition:* A requirement that limits the solution space beyond what is necessary for meeting the given functional requirements and quality requirements.
    - *Description:* An **organizational or technological requirement** which restricts the way the system shall be developed.
    - *Types of Constraints:* Organisational/project (Budget, Deadlines, Team), Technical, Physical, Legal (Legislation, Norms, Standards), Cultural.
    - *Example (C-9 - Culture):* The user interface shall not contain symbols or graphics abusive for any culture.
    - *Example (C-16 - Organisational):* The effort for system development shall not exceed 480 person months.
    - *Example (C-36 - Physical):* The electronic control unit in the vehicle interior shall work at temperatures from -10 to +50 degrees Celsius.
    - *Example (C-41 - Legal):* The system shall process personal data in compliance with the EU's Data Protection Directive.

---

## 2. Fundamentals of Requirements Engineering

### 2.1 Influence of Constraints
Constraints restrict the **range of realization alternatives** for requirements.
- *Scenario:* A functional requirement (R-3) states "The output shall be presented on a mobile phone." Without constraints, solutions could include iOS, Android, Windows 10, BlackBerry OS, or Palm.
- *Constraint (C-4):* "Only iOS and Android shall be supported."
- *Consequence:* The solution space is reduced from 5 to 2 (40% remaining).

### 2.2 Non-functional Requirements (NFRs)

> [!warning] "Non-functional Requirements"
> The term "non-functional requirement" is widely used but often indicates that a requirement is **insufficiently understood**.
> 
> **The RE Perspective:** There are only functional requirements, quality requirements, and constraints. **Non-functional requirements do not exist** as a separate category in rigorous RE; they are usually underspecified functional or quality requirements.

> [!example] Example: Refining an NFR
> "The system shall be secure" (NFR) is refined into:
> - Each user shall log in... (Functional Requirement)
> - Stored passwords shall be protected from unauthorized access... (Quality Requirement)

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

> [!info] Framework Overview
> The RE framework is driven by a **System Vision** and operates within an **RE Context**. It involves **Core Activities** (Elicitation, Negotiation, Documentation) that produce **Requirements Artefacts** (Goals, Scenarios, Solution-oriented requirements). These are supported continuously by **Cross-Sectional Activities** (Validation, Management).

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
    
    > [!example] Example: System Context Facets
    > For an automated braking system:
    > - **Subject facet:** Driver, Weather conditions, existing Brake system.
    > - **Usage facet:** Driver.
    > - **IT system facet:** Sensors, Actuators.

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

---

## Chapter 3: Context (Part 1)

### 3.1 Context of a System
A (software-intensive) system is always embedded in a particular context. The context heavily influences the requirements the system has to fulfill. 

> [!note] Important
> A requirement is always defined for a particular context.

> [!example] Example: Accounting System Contexts
> Developing an accounting system requires considering its specific context:
> - **Germany:** Must consider relevant German laws and the business needs of the German manufacturing industry.
> - **USA:** Must consider US American laws and the business needs of financial companies.
> - **China:** Must consider Chinese laws and the business needs of shipping companies.

> [!example] Example: Wind Turbine Contexts
> If the goal is to develop a power supply based on renewable energies, a wind turbine is a possible solution. However, its appropriateness depends entirely on the context:
> - **Family home in a countryside:** A good solution (windy place).
> - **Submarine underwater:** An inappropriate solution.
> - **Satellite in space:** An inappropriate solution.

### 3.2 System Context and Context Objects

> [!info] Definition: Context Objects
> Context objects are material or immaterial objects belonging to the context.

Typical examples of context object types:
- **Material Objects (Can be touched):** People, hardware, documents (manuals, standards, laws), buildings, cars.
- **Immaterial Objects (Cannot be touched):** Organizations, business processes, software components, data, communication services.

> [!info] Definition: System Context
> The **system context** is the part of the context in which the system to be developed is operating or embedded. Material or immaterial objects belonging to the system context are called **system context objects**.
> 
> System context objects are relevant for the system to be developed and thus **have to be considered during requirements engineering**.

> [!example] Example: System Context Objects of a University Library System
> - **Material Objects:** Books, bookshelves, a student (e.g., Marc Genaro), an employee (e.g., Jennifer Adrian), workstations, printers.
> - **Immaterial Objects:** Library database, meta-search engine accessing several library systems, user authorization service.

> [!info] Definition: System Context Boundary
> The **system context boundary** defines which material and immaterial objects belong to the system context. It thereby separates system context objects from other irrelevant context objects.
> 
> *Visualization:* The system boundary separates the system itself from the system context. The context boundary separates the system context from the irrelevant environment.

### 3.3 Change of System Context
The scope of the system context can change during the elicitation process as more information becomes available.

> [!example] Example: Change of System Context Scope
> 1. **Initial Goal:** "Establish a fast and safe transportation!" (Potential solutions: airplanes, helicopters, buses, cars, ships, submarines, trains).
> 2. **New Context Information:** "Transportation should be between the mainland and an island. The island has about 35 inhabitants and is located 5 km from the mainland." (This narrows solutions to ships or small boats).
> 3. **Conflict & Resolution:** One stakeholder suggests a marine diesel engine. Another suggests avoiding any kind of pollution due to natural reserves. The decision to use an electric engine resolves this conflict, further refining the context and solution.

### 3.4 Consideration of System Context Objects

> [!note] Important
> Each context object can potentially be involved in **any requirements engineering activities** (Elicitation, Documentation, Negotiation, Validation, and Management).

If a context object is not involved in a specific requirement engineering activity, it might still be relevant for that activity later, or it might be relevant for all other requirements engineering activities.

> [!example] Example: Stakeholder Consideration
> Assume there are 10 stakeholders in the system context (e.g., office workers) who potentially have relevant information. Due to time restrictions, only 6 out of 10 are interviewed. The remaining 4 stakeholders are still potentially relevant for later interviews or other RE activities.

### 3.5 The Three Facets of System Context

> [!tip] Extra Notes: Generic Principles of any Software-System
> Information systems and embedded systems typically:
> 1. **Represent information** about the real world.
> 2. **Process this information** and provide functionality (e.g., search for car types).
> 3. **Provide an output** to the context (e.g., display the retrieved cars).
> 
> A system is only successful if the user can map the information displayed to the corresponding material or immaterial objects in reality.

The system context can be structured into three facets:

#### 3.5.1 Subject Facet
> [!info] Definition: Subject Facet
> The subject facet comprises system context objects about which **information is represented in the system** or which influence or constrain the representation of information represented in the system.

This includes system context objects and events, their properties, and relationships about which information is represented, as well as the **quality of the representation** (e.g., accuracy and actuality).

> [!example] Example: Subject Facet for a University Library System
> - Students
> - Books
> - Magazines
> - E-books
> - Bookshelves
> - Data privacy laws (influences representation)

#### 3.5.2 Usage Facet
> [!info] Definition: Usage Facet
> The usage facet comprises all system context objects (people and/or systems) which directly or indirectly **interact with the system** or which **influence or benefit from the usage** of the system.

This includes objects contributing to the definition of the **desired usage** and the **usage quality attributes** (e.g., expected usage load or average response times).

> [!example] Example: Usage Facet for a University Library System
> - Student user group
> - Employee user group
> - Meta-search engine accessing several library systems
> - Check-out process and return process for library items
> - Usage laws and standards

#### 3.5.3 IT System Facet
> [!info] Definition: IT System Facet
> The IT system facet comprises all system context objects of the **technical and operational environment** in which the system is going to be deployed or which **influence or constrain** the deployment of the system and/or the use of technology by the system (e.g., sensors, actuators).

This includes objects which contribute to the definition of the **operational environment and/or the technology used**, or which influence/constrain relevant quality attributes (e.g., average availability time, security).

> [!example] Example: IT System Facet for a University Library System
> - Printers
> - Servers
> - Library workstations
> - University cloud-infrastructure
> - IT policies and strategies

### 3.6 Properties of System Context Objects
Not only the system context objects within each facet need to be considered, but also their **properties** and **relationships** with other objects (both in the same facet and in other facets).

> [!example] Example: Properties of System Context Objects (Library System)
> - **Subject Facet Properties:** 
>   - Student: ID, Matriculation status, Date of birth.
>   - Book: Title, Authors, ISBN, ISSN.
>   - Data privacy law: Visibility of data for librarian.
> - **Usage Facet Properties:**
>   - Students (user group): Maximum number of users, Average usage load.
>   - Employees (user group): Required access control and usage rights.
>   - Meta-search engine: Required information for a particular usage.
> - **IT System Facet Properties:**
>   - University cloud-infrastructure: Maximum throughput of communication network.
>   - Server: Maximum persistent storage available, Maximum downtime in 24h.

### 3.7 Documentation of Context Information
Because a requirement is always defined for a particular context, understanding requirements requires context information. A change in the context typically requires adaptation of requirements.

> [!note] Important
> Documenting context information (objects, properties, and relationships) is a **prerequisite for supporting the analysis of the impact of a context change** on requirements!

#### Common Problems
- Context information is **often not documented at all** and is only implicitly known. This leads to stakeholders having different assumptions about the context.
- If documented, it is **often intermingled** with requirements (spread across requirements). This leads to:
  - Redundancies of context information.
  - Lack of a concise definition.
  - Contradictions between context information.

#### Guideline for Documenting Context Information
Define **project-specific guidelines** for documenting context information. These should include:
- Types of context objects which should be considered and documented.
- Representation formats and the structure to be used.
- Relationship types to interrelate context information and requirements.
- Roles and responsibilities for documenting the context information.

#### Common Approaches
- **Scenarios:** Define system context interaction and interrelate requirements with context objects.
- **(Business) process models:** Define the business context in which system functions are used.
- **Domain models:** Define properties for a set of systems (e.g., systems in a particular application domain).
- **Standards:** Include context information such as personal data protection, federal ordinance on barrier-free information technology.
- **Dedicated section:** In textual requirements specification documents.

---

## Chapter 4: Elicitation (Part 1)

### 4.1 Introduction in Requirements Elicitation

> [!info] Definition: Goal of Requirements Elicitation
> Requirements elicitation is a core requirements engineering activity. The goal is threefold:
> 1. **Identify** relevant requirements sources.
> 2. **Elicit existing requirements** from the identified sources.
> 3. Develop **new and innovative requirements**.

### 4.2 Requirements Sources

> [!important] Importance of Identifying Sources
> - Some sources might be obvious, but **many are typically unknown** at the beginning.
> - Not identifying or considering relevant sources leads to:
>   - **Incomplete** requirements (overlooked requirements).
>   - **Insufficient agreement** or unrecognized conflicts.
>   - At the latest, overlooked requirements lead to **change requests** during system operation (and higher costs).
> - **Identifying all relevant requirements sources is thus essential!**

#### Three Types of Requirements Sources
1. **Stakeholders**
2. **Documents**
3. **Existing Systems**

#### 4.2.1 Stakeholders
> [!info] Definition: Stakeholder
> A stakeholder is either a person or an organization with **potential interest in the desired system**. Each typically has specific goals and requirements. A person can **represent the interest of different stakeholders**.

- A stakeholder is a **context object**.
- A stakeholder can belong to:
  - any facet of the system context (subject, usage, or IT system),
  - the development context,
  - the requirements engineering context.
- A stakeholder typically has **knowledge about several context objects** and their relationships, across different facets of the system context and development context.

#### 4.2.2 Documents
**Existing documents** contain relevant information to be considered when defining requirements.
Three types of potentially relevant documents:
1. **General binding documents:** Defined by standardization bodies, governments, etc. (e.g., laws and standards).
2. **Organization-specific documents:** Defined within an organization (e.g., development guidelines, product strategies, IT-strategies, business process documentation).
3. **Product-/System-specific documents:** Any kind of development artefact of a predecessor or similar system (e.g., change requests, error reports, user manuals, requirements specs).

#### 4.2.3 Existing Systems
Existing systems are an excellent source for detecting and uncovering existing requirements.
- **Requirements realized** by the existing system might still be relevant for the new system.
- They should be analyzed to:
  - Elicit properties of the existing system.
  - Identify **required enhancements**.
  - Identify **known deficiencies** to be avoided in the future.
  - Identify **previous errors** already fixed to avoid repeating them.
- **Stakeholders using or involved** in the development/operation of existing systems are additional potential valuable sources.

We differentiate between three types of systems:
1. **Predecessor systems:** Similar purpose, typically replaced by the new system.
2. **Systems of competitors:** Essential to not oversee important requirements and to ensure differentiating features.
3. **Systems from other domains:** Might offer properties, innovative technology, or unique features relevant for the desired system.

### 4.3 Identification of Requirements Sources
#### Two-Step Procedure
- **Step 1:** Identification of potential relevant requirements sources.
- **Step 2:** Selection of requirements sources to be considered.

#### Step 1: Potential Relevant Requirements Sources
**Goal:** Identify a large set of potential relevant sources.
**Activities:**
1.1 Use known sources/checklists to **identify additional**, potential sources.
1.2 **Record newly identified**, potential relevant sources.
1.3 For each newly identified source, **perform activity 1.1 again**. Iterate until the set becomes (more or less) stable.

> [!tip] Extra Notes: Hints for Step 1
> - Consider **all parts of the RE context**.
> - First, **identify relevant context objects**. Then identify sources potentially having **knowledge about those objects**.
> - Consider **all three types** of requirement sources.
> - Use **domain and system-specific checklists** to support the identification of requirement sources. (e.g., check list for Usage Facet, Subject Facet, IT System Facet, Development Context, Requirements Engineering Context).

#### Step 2: Selection Requirements Sources
**Goal:** Select the most relevant sources from the identified sources.
- Execute a **100 Dollar Test** in a group meeting:
  - In a 100-dollar test each stakeholder metaphorically **spends 100 dollars** on the items (sources).
  - Each distributes the money to the sources they think are **relevant**.
  - The **amount of money** defines the **relative weighting** of this source.
  - The group **selects the highest weighted** sources to consider first. Remaining sources might be considered later.

> [!tip] Extra Notes: Hints for Selecting Sources
> - The **cut-off point** depends on the **project setting** (time, budget, availability).
> - **Check if** selected sources **cover all relevant parts of the RE context**.
> - You might use the 100-dollar test separately for each **part of the RE context**.
> - When **selecting stakeholders** for assessment, ensure an **adequate representation of the RE context**.

### 4.4 Eliciting Existing Requirements vs. Creating Innovative Requirements
Besides identifying requirement sources, the goal of requirements elicitation is twofold:
1. **Elicit existing requirements** from relevant sources.
2. **Create** and develop **innovative (new) requirements**.
> [!note] Important
> Existing and innovative requirements are equally important for system success!

#### 4.4.1 Eliciting Existing Requirements
- **From Stakeholders:** e.g., Stakeholders express requirements guided by a **questionnaire** (e.g., "How can safety be improved? -> The car should display a warning...").
- **From Documents:** e.g., The **law** must be considered (e.g., defining goals based on regulations), or analyzing **error reports** to derive requirements.
- **From Existing Systems:** 
  1. The **incarnation of the existing system** is elicited (incarnation model of predecessor system).
  2. An **essential model** is created by **abstracting from the incarnation**. (e.g., separating physical implementations from the core logical need).

#### 4.4.2 Creation of Innovative Requirements
- Innovative requirements **cannot** be elicited in the same way as existing ones.
- They have to be created in **creative processes** using creativity techniques (e.g., brainstorming).

> [!info] Definition: Creativity
> Creativity is "the ability to produce work that is both **novel** (i.e., original unexpected) and **appropriate** (i.e., useful, adapted to a task constraints)" (Sternber and Lubart 1999).

Three Categories of Creativity:
1. **Exploratory creativity:** Search space of partial/complete possibilities.
2. **Combinational creativity:** Make unfamiliar connections between familiar possibilities in the search space.
3. **Transformational creativity:** Challenge constraints on the search space to enlarge the space of possible ideas to explore.

- **With Stakeholders:** Brainstorming ideas (e.g., slippery road warning, proactive traffic light monitoring).
- **Using Existing Documentation:** Analyzing specs from different domains (e.g., looking at an ERP system for a smart refrigerator to get the idea of "best before" tracking).
- **Using Existing Systems:** Participating in demonstrations of other technologies (e.g., looking at smart televisions to identify features useful for a smart refrigerator like recipe suggestions and shopping lists).

### 4.5 Common Elicitation Techniques

> [!info] Elicitation vs Assistance Techniques
> - **Elicitation techniques** support eliciting existing requirements, creating innovative requirements, and eliciting requirement sources.
> - **Assistance techniques** support elicitation techniques (e.g., by developing new ideas or experiencing features of the future system).

#### Six Common Requirements Elicitation Techniques
1. **Interview:** Elicitation of requirements and context information from a stakeholder or group.
2. **Workshop:** A group of stakeholders develops requirements for a system.
3. **Focus Groups:** A group of stakeholders focus on a specific item to identify the requirements regarding this item.
4. **Observation:** An observer elicits requirements by observing stakeholders or existing systems.
5. **Questionnaire:** A stakeholder writes down his requirements by answering predefined questions.
6. **Perspective-based Reading:** A stakeholder reads a document from a previously defined perspective (e.g., user, tester).

#### Technique Classification
- **Interview:** Medium to high effort. Suited for identifying sources, eliciting existing (and partially developing innovative).
- **Workshop:** High to very high effort. Suited for identifying sources, eliciting existing, and developing innovative.
- **Focus Groups:** Medium to high effort. Suited for eliciting existing and developing innovative.
- **Observation:** High to very high effort. Suited for eliciting existing.
- **Questionnaire:** Low to medium effort. Suited for identifying sources and eliciting existing.
- **Perspective-based reading:** Medium to high effort. Suited for eliciting existing.

#### Describing Elicitation Techniques
A template for describing them includes:
- **Application:** 
  1. Preparation
  2. Execution
  3. Follow-Up
  4. Critical success factors.
- **Key characteristics:** 
  5. Benefits
  6. Effort (estimation).
