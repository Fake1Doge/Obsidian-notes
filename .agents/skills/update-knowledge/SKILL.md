---
name: update-knowledge
description: Automatically summarizes newly added or updated notes into year-specific knowledge bases (knowledge_Y1.md or knowledge_Y2.md), linking directly to the original note location and updating the roadmap, concept matrix, and master glossary.
---

# Update Knowledge Base Skill (`update-knowledge`)

This skill defines the standardized procedure for summarizing and integrating newly added or updated notes (lectures, tutorials, conceptual guides, or chapters) into the appropriate year-specific master knowledge base (**`knowledge_Y1.md`** or **`knowledge_Y2.md`**) in the Obsidian vault, ensuring every concept is cleanly summarized and deeply linked to its original note location.

---

## 1. Core Principles

1. **Curriculum Scope: Core Courses & Field-Electives ONLY (Skip Free Modules)**:
   - The master knowledge bases (**`knowledge_Y1.md`** and **`knowledge_Y2.md`**) are dedicated to the school's **Computer Science and Software Engineering curriculum**, which includes:
     - **Core Courses** (mandatory computer science & software engineering courses).
     - **Field-Electives** (domain/specialization electives offered by the School of Computer Sciences, e.g. AI, Cyber Security, Data Engineering, Software Architecture tracks). Field-electives ARE included in the knowledge bases.
   - **STRICT PROHIBITION ON FREE MODULES ONLY**:
     - **Free Modules** (external non-CS courses taken from other faculties/schools, such as `AKW104 Accounting and Finance` from the School of Management, language courses, or general university electives) MUST NEVER be added to `knowledge_Y1.md` or `knowledge_Y2.md`.
     - Free modules remain strictly self-contained, standalone course notes within their respective semester directory (e.g. `Y2S1/AKW104 Accounting and Finance.md`).
     - For any free module note:
       - **DO NOT** create a section or summary in `knowledge_Y1.md` or `knowledge_Y2.md`.
       - **DO NOT** add the course to the Academic Roadmap Mermaid diagrams.
       - **DO NOT** add the course to the top navigation blocks.
       - **DO NOT** add its concepts to the Direct Conceptual Mappings table.
       - **DO NOT** add its terminology to the Master Glossary.

2. **Automatic Activation & Year-Specific Routing (Core & Field-Electives)**:
   - Whenever any **Core Course** or **Field-Elective** note, chapter, or lecture material is added, compiled, or significantly modified in the vault (e.g., via `lecture-to-obsidian` or manual note creation), you MUST automatically execute this skill to sync the new knowledge into the appropriate year knowledge base:
     - **`knowledge_Y1.md`**: For Year 1 core and field-elective courses located under `Y1S1/` or `Y1S2/`.
     - **`knowledge_Y2.md`**: For Year 2 core and field-elective courses located under `Y2S1/` or `Y2S2/`.
   - Never create a standalone `knowledge.md` at the vault root; always maintain the split `knowledge_Y1.md` and `knowledge_Y2.md` architecture.
3. **Deep Obsidian Wikilinking**:
   - Every summarized section, key concept, definition, and glossary term in the knowledge base MUST link directly back to the original source note and exact heading anchor using standard Obsidian wikilinks:
     - Topic Heading link: `### X.Y [[Path/To/Note#Exact Section Heading|Topic Title]]`
     - Inline Concept link: `[[Path/To/Note#Exact Anchor|Concept / Term]]`
     - Glossary link: `- **Term**: [[Path/To/Note#Exact Anchor|One-line definition]]`
3. **High-Yield Synthesis (No Fluff / No Pure Copy-Paste)**:
   - Do not copy the full lecture text. Extract and synthesize:
     - Core definitions and principles.
     - Architecture/framework components.
     - Algorithmic steps, time/space complexities, and formulas (LaTeX).
     - Essential syntax or code design patterns.
     - Key trade-offs, comparisons, and common pitfalls.
4. **Preserve Master Architecture & Styling**:
   - Respect the established structures of each knowledge base:
     - **`knowledge_Y1.md`**:
       - Part I: Year 1 Semester 1 (Y1S1 Core: CCA101, CCA102, CKC111)
       - Part II: Year 1 Semester 2 (Y1S2 Core: CCA103, CKC112, CKS121)
       - Part III: Non-Core Elective Exception (AKW103)
       - Part IV: Cross-Disciplinary Synthesis, Concept Matrix, Comparative Tables & Master Glossary
     - **`knowledge_Y2.md`**:
       - Infrastructure Layer (Systems & Data: CCA201 Operating Systems, CCA202 Database Fundamentals)
       - Design & Governance Layer (Architecture & Lifecycle: CKS221 Software Architecture, CKS222 Process & Lifecycle)
       - Part III: Cross-Disciplinary Synthesis & Quantitative Controls Matrix
       - Part IV: Master Glossary of Core Terminology
5. **No Redundant or Broken Anchors**:
   - Verify that all heading anchors (`#Heading Name`) in wikilinks match the exact heading text present in the source markdown file.

---

## 2. Step-by-Step Processing Workflow

### Step 1: Analyze the Added / Modified Note & Audit Course Classification
1. Read the newly added or updated note file (e.g., `Y2S1/CCA201 Operating Systems.md`).
2. **Audit Course Classification**:
   - **Free Module** (e.g. `course_type: free module`, non-CS external faculty modules like AKW104): **HALT IMMEDIATELY**. Do NOT modify or update `knowledge_Y1.md` or `knowledge_Y2.md`. The note remains self-contained in its course directory.
   - **Core Course or Field-Elective** (School of Computer Sciences curriculum, mandatory subjects, and CS field-electives/specializations): **PROCEED** to Step 2.
3. Identify:
   - The course code and subject title (e.g., `CCA201: Operating Systems`).
   - The academic level and semester (`Y1S1`, `Y1S2`, `Y2S1`, `Y2S2`).
   - Select the target knowledge base:
     - `knowledge_Y1.md` for `Y1S1` / `Y1S2`
     - `knowledge_Y2.md` for `Y2S1` / `Y2S2`
   - The newly added or modified chapters/topics, including exact heading names.
   - Core terms, definitions, formulas, and cross-course relationships introduced.

### Step 2: Locate or Create the Course Section in the Target Knowledge Base
1. Open the target knowledge base (`knowledge_Y1.md` or `knowledge_Y2.md`) and find the relevant section:
   - If the course already exists (e.g., `## 1. 💻 [[Y2S1/CCA201 Operating Systems|CCA201: Operating Systems]]`), locate the appropriate topic subsection or prepare to append new topic subsections under it.
   - If the course is new:
     - Create a new course header numbered sequentially:
       `## <N>. <Emoji> [[<RelativePath/CourseName>|<CourseCode>: <CourseName>]]`
     - Add a brief 1-line subject scope description.
     - Add a Mermaid high-level pipeline / architecture diagram representing the course flow.
     - Update the top navigation block (`> [!abstract] Overview & Navigation`).

### Step 3: Summarize and Append Subtopics with Deep Wikilinks
For each new chapter or topic in the source note:
1. Number the subtopic hierarchically matching the course section (e.g., `### 1.5 [[Y2S1/CCA201 Operating Systems#Memory Management|Memory Management]]`).
2. Formulate bullet points summarizing the core concepts.
3. Every primary bullet or term must include a direct wikilink to the source note anchor:
   ```markdown
   ### 1.5 [[Y2S1/CCA201 Operating Systems#Memory Management|Memory Management]]
   - **Contiguous Allocation**: [[Y2S1/CCA201 Operating Systems#Fixed and Variable Partitions|Fixed vs. dynamic partitioning schemes]] and external fragmentation mitigation.
   - **Hardware Protection**: [[Y2S1/CCA201 Operating Systems#Base and Limit Registers|Base and limit register validation]] on memory address references.
   ```
4. Include compact LaTeX math blocks (`$$...$$` or `$..$`) or clean Mermaid diagrams if the topic introduces mathematical models, state machines, or architectural pipelines.

### Step 4: Update Academic Roadmap & Cross-Disciplinary Matrix
1. **Academic Roadmap (Mermaid flowchart)**:
   - If the new note establishes a prerequisite or concept handoff (e.g., CCA101 Pointers $\to$ CKC112 Smart Pointers $\to$ CCA201 Memory Allocation, or CKC111 Logic $\to$ CCA202 Relational Algebra), update the Mermaid diagram in Section `Academic Roadmap & Interdisciplinary Architecture`.
2. **Direct Conceptual Mappings Table**:
   - If the new content bridges a theoretical concept to an applied engineering paradigm, add a row to the table:
   ```markdown
   | **Dimension Name** | [[Source Course Path#Anchor|Course (Topic)]] | [[Destination Course Path#Anchor|Course (Topic)]] | Direct mapping / synthesis summary |
   ```

### Step 5: Update the Master Glossary of Core Terminology
1. Extract any new formal terms, acronyms, or foundational definitions from the new note.
2. Insert each term into the alphabetical list in the Master Glossary section:
   ```markdown
   - **<Term Name> (<Acronym>)**: [[<Source Note Path>#<Exact Heading>|<Concise, high-yield one-sentence definition>]].
   ```
3. Maintain alphabetical sorting in the glossary.

### Step 6: Verify Consistency, Formatting & Automated Anchor Validation
1. Verify that all markdown links are valid Obsidian wikilinks.
2. Run the automated anchor validator script to verify that every wikilink points to an existing heading in the source notes:
   ```bash
   node "<workspace-root>/.agents/skills/update-knowledge/scripts/validate_links.js"
   ```
   Ensure zero broken anchors are reported before concluding.
3. Check that all Mermaid diagrams follow syntax rules:
   - Node IDs have no spaces (e.g., `Node_A` or `NodeA["Label with spaces"]`).
   - Class diagrams use valid syntax (`<<abstract>>`, `--|>`, `*--`, `o--`).
4. Save the modified knowledge base (`knowledge_Y1.md` or `knowledge_Y2.md`) and verify clean formatting.

---

## 3. Formatting Reference & Templates

### Subtopic Summary Template
```markdown
### <CourseNum>.<TopicNum> [[<CourseFilePath>#<ExactHeading>|<Topic Title>]]
- **<Core Concept 1>**: [[<CourseFilePath>#<ExactHeading>|<Summary of concept, components, or rule>]].
- **<Core Concept 2>**: [[<CourseFilePath>#<ExactHeading>|<Key characteristics, equations, or syntax>]].
- **<Trade-off / Comparison>**: [[<CourseFilePath>#<ExactHeading>|<Comparison between option A and option B>]].
```

### Glossary Entry Template
```markdown
- **<Term>**: [[<CourseFilePath>#<ExactHeading>|<Rigorous single-sentence definition and operational significance>]].
```

### Concept Matrix Row Template
```markdown
| **<Domain>** | [[<SourcePath>#<Heading>|<Course (Concept)>]] | [[<DestPath>#<Heading>|<Course (Concept)>]] | <How foundational theory maps to applied implementation> |
```
