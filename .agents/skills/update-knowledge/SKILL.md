---
name: update-knowledge
description: Automatically summarizes newly added or updated notes into knowledge.md, linking directly to the original note location and updating the roadmap, concept matrix, and master glossary.
---

# Update Knowledge Base Skill (`update-knowledge`)

This skill defines the standardized procedure for summarizing and integrating newly added or updated notes (lectures, tutorials, conceptual guides, or chapters) into the central master knowledge base (`knowledge.md`) in the Obsidian vault, ensuring every concept is cleanly summarized and deeply linked to its original note location.

---

## 1. Core Principles

1. **Automatic Activation**:
   - Whenever any note, chapter, or lecture material is added, compiled, or significantly modified in the vault (e.g., via `lecture-to-obsidian`, `all-notes`, or manual note creation), you MUST automatically execute this skill to sync the new knowledge into `knowledge.md`.
2. **Deep Obsidian Wikilinking**:
   - Every summarized section, key concept, definition, and glossary term in `knowledge.md` MUST link directly back to the original source note and exact heading anchor using standard Obsidian wikilinks:
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
   - Respect the established 4-part structure of `knowledge.md`:
     - **Part I**: Year 1 Semester 1 (Y1S1 Core)
     - **Part II**: Year 1 Semester 2 (Y1S2 Core)
     - **Part III**: Non-Core Elective Exceptions (e.g., AKW103)
     - **Part IV**: Cross-Disciplinary Synthesis, Concept Matrix, Comparative Tables & Master Glossary
5. **No Redundant or Broken Anchors**:
   - Verify that all heading anchors (`#Heading Name`) in wikilinks match the exact heading text present in the source markdown file.

---

## 2. Step-by-Step Processing Workflow

### Step 1: Analyze the Added / Modified Note
1. Read the newly added or updated note file (e.g., `Y1S1/CCA101 Principle of Programming.md`).
2. Identify:
   - The course code and subject title (e.g., `CCA101: Principle of Programming`).
   - The academic level and semester (e.g., `Y1S1 Core`, `Y1S2 Core`, or `Elective`).
   - The newly added or modified chapters/topics, including exact heading names.
   - Core terms, definitions, formulas, and cross-course relationships introduced.

### Step 2: Locate or Create the Course Section in `knowledge.md`
1. Open `knowledge.md` and find the relevant Part:
   - If the course already exists (e.g., `## 1. 💻 [[Y1S1/CCA101 Principle of Programming|CCA101: Principle of Programming]]`), locate the appropriate topic subsection or prepare to append new topic subsections under it.
   - If the course is new:
     - Create a new course header numbered sequentially:
       `## <N>. <Emoji> [[<RelativePath/CourseName>|<CourseCode>: <CourseName>]]`
     - Add a brief 1-line subject scope description.
     - Add a Mermaid high-level pipeline / architecture diagram representing the course flow.
     - Update the top navigation block (`> [!abstract] Overview & Navigation`) and bottom navigation callout (`> [!tip] Direct Vault Navigation`).

### Step 3: Summarize and Append Subtopics with Deep Wikilinks
For each new chapter or topic in the source note:
1. Number the subtopic hierarchically matching the course section (e.g., `### 1.11 [[Y1S1/CCA101 Principle of Programming#Exact Heading|Subtopic Title]]`).
2. Formulate bullet points summarizing the core concepts.
3. Every primary bullet or term must include a direct wikilink to the source note anchor:
   ```markdown
   ### 1.11 [[Y1S1/CCA101 Principle of Programming#File Streams & Binary I/O|File Streams & Binary I/O]]
   - **Stream Modes**: [[Y1S1/CCA101 Principle of Programming#File Open Modes|`ios::in`, `ios::out`, `ios::app`, `ios::binary` flags]].
   - **Binary Serialization**: [[Y1S1/CCA101 Principle of Programming#Binary File Processing|`read()` and `write()` methods]] operating on raw byte buffers via `reinterpret_cast<char*>(&data)`.
   - **Stream State Checking**: [[Y1S1/CCA101 Principle of Programming#Testing Stream State|Testing `eof()`, `fail()`, and `bad()` flags]] to prevent read errors.
   ```
4. Include compact LaTeX math blocks (`$$...$$` or `$..$`) or clean Mermaid diagrams if the topic introduces mathematical models, state machines, or architectural pipelines.

### Step 4: Update Academic Roadmap & Cross-Disciplinary Matrix (Part IV)
1. **Academic Roadmap (Mermaid flowchart)**:
   - If the new note establishes a prerequisite or concept handoff with another course (e.g., CCA101 Pointers $\to$ CKC112 Smart Pointers, or CKC111 Logic $\to$ CCA102 Digital Logic), update the Mermaid diagram in Section `Academic Roadmap & Interdisciplinary Architecture`.
2. **Direct Conceptual Mappings Table (Section 8.1)**:
   - If the new content bridges a theoretical concept to an applied engineering paradigm, add a row to the table:
   ```markdown
   | **Dimension Name** | [[Source Course Path#Anchor|Course (Topic)]] | [[Destination Course Path#Anchor|Course (Topic)]] | Direct mapping / synthesis summary |
   ```

### Step 5: Update the Master Glossary of Core Terminology (Section 10)
1. Extract any new formal terms, acronyms, or foundational definitions from the new note.
2. Insert each term into the alphabetical list in **Section 10**:
   ```markdown
   - **<Term Name> (<Acronym>)**: [[<Source Note Path>#<Exact Heading>|<Concise, high-yield one-sentence definition>]].
   ```
3. Maintain alphabetical sorting in the glossary.

### Step 6: Verify Consistency & Formatting
1. Verify that all markdown links are valid Obsidian wikilinks.
2. Check that all Mermaid diagrams follow syntax rules:
   - Node IDs have no spaces (e.g., `Node_A` or `NodeA["Label with spaces"]`).
   - Class diagrams use valid syntax (`<<abstract>>`, `--|>`, `*--`, `o--`).
3. Save `knowledge.md` and verify that the file remains well-structured and cleanly formatted.

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
