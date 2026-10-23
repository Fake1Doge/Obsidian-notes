---
name: lecture-to-obsidian
description: Converts a single raw lecture note (PDF, text, slides) into a detailed, high-fidelity Obsidian-flavored Markdown note, integrating it into the master note.
---

# Lecture to Obsidian Processor (Maximum Detail Preservation)

This skill guides you in transforming a **single** raw lecture material (text file, PDF, or slides) into a rich, exhaustive Obsidian-flavored Markdown note, integrating it into the subject's master note with a strict **Zero Loss of Detail** guarantee.

---

## 1. Core Principles (Maximum Detail Preservation)

1. **Zero Loss of Detail Mandate**:
   - Your primary directive is to **preserve every concept, definition, example, code snippet, edge case, and architectural diagram** from the source material.
   - Do **NOT** summarize away nuances, skip slides, abbreviate code, or hand-wave steps. The resulting note must serve as a comprehensive, standalone study reference.
2. **Slide Coverage Audit Protocol**:
   - Every single slide or page must be accounted for.
   - Run a pre-flight inspection via `extract_document.js <file> --analyze` to identify the total slide count (e.g., 44 slides) and all visual slides.
   - When writing the note, verify that all topics spanning from Slide 1 through Slide N are represented.
3. **Verbatim Code & Math Fidelity**:
   - **Full Code Blocks**: Never truncate code with `// ... rest of code` or omit declarations. Provide complete, compilable, syntax-highlighted code blocks with language identifiers (e.g. ` ```cpp `, ` ```sql `).
   - **Rigorous LaTeX**: Every equation, formula, matrix, or complexity notation ($O(n \log n)$) must be transcribed using LaTeX (`$...$` for inline, `$$...$$` for blocks).
4. **Visual & Architecture Diagram Reconstruction**:
   - Every flowchart, class diagram, memory layout, or state machine in the slides must be visually inspected and translated into an interactive **Mermaid diagram** (or embedded image).
5. **Contextual Enrichment ("Extra Notes")**:
   - If a slide is brief, bullet-only, or assumes external context, you MUST expand upon it with an explanatory callout:
     ```markdown
     > [!tip] Extra Notes: [Topic]
     > [Detailed external context, operational mechanics, or common pitfalls]
     ```
6. **Properties / Frontmatter Rule**:
   - **NEVER** add frontmatter at the top of appended lecture sections in master notes, as multiple frontmatters break Obsidian rendering. Place frontmatter solely at the very top of standalone notes files.
7. **Clean Plain-Text Headings for Resilient Wikilinks**:
   - **NEVER** embed LaTeX math (`$...$`) or code backticks (`` `...` ``) directly in Markdown headings (`#`, `##`, `###`).
   - Keep headings in plain descriptive text (e.g., `### 3.4.2 The Family of JOIN Operators (Bowtie / Join)` instead of `### 3.4.2 The Family of JOIN Operators ($\bowtie$)`).
   - Place mathematical symbols and code keywords immediately in the body text or callouts under the heading. This ensures 100% resilient Obsidian wikilink anchors across the vault.

---

## 2. Processing Workflow

1. **Pre-Flight Analysis**:
   - Run `node "<workspace-root>/.agents/skills/pdf-extractor/scripts/extract_document.js" "<path-to-file>" --analyze` to learn the total slide count and identify visual slides.
2. **Structured & Verbatim Extraction**:
   - Extract content using `node "<workspace-root>/.agents/skills/pdf-extractor/scripts/extract_document.js" "<path-to-file>" --mode auto -o "<scratch-dir>/<file_stem>_extracted.md"`.
   - *Hardened Isolation*: If `-o` is omitted, the extractor safely outputs to the OS temp directory (`os.tmpdir()`), guaranteeing the vault workspace is never polluted.
   - Review both the AnyDoc structural outline and the slide-by-slide transcript (`### 📄 Slide X`).
3. **Multimodal Visual Inspection**:
   - For all slides flagged as visual or low-text (or slides featuring architectural figures), inspect them directly using `read_file` to capture diagram topology, cardinality, and visual details.
4. **Chunked Authoring Protocol for Large Decks (> 45 Slides)**:
   - To prevent context saturation and lost detail on large decks (50+ slides):
     1. Partition the slide content into 2–3 thematic chunks (e.g., 15–25 slides per chunk).
     2. Sequentially author and merge each chunk into the master note using `edit_file`.
     3. Verify completeness across each chunk boundary before proceeding to the next.
5. **Synthesize & Merge into Master Note**:
   - Append or integrate the comprehensive chapter into the course master note (`<CourseCode> <CourseName>.md`).
   - Use `# Chapter X: [Title]` or `# Topic X: [Title]` for theory lectures, and `# Lab X: [Title]` for practicals.
   - Format subheadings as `## X.Y [Subtitle]` and `### X.Y.Z [Topic]`.
6. **Immediate Renumbering**:
   - Run `node "<workspace-root>/.agents/skills/rearrange-topics/scripts/rearrange.js" "<path-to-master-note>"` to ensure sequential heading integrity.
7. **Knowledge Base Synchronization & Anchor Validation**:
   - For **Core Courses and Field-Electives** (School of Computer Sciences subjects and domain electives), invoke `update-knowledge` to sync deep wikilinks and conceptual summaries into `knowledge_Y1.md` (Year 1) or `knowledge_Y2.md` (Year 2).
   - Run `node "<workspace-root>/.agents/skills/update-knowledge/scripts/validate_links.js"` to automatically verify that all newly added wikilinks resolve to existing headings.
   - For **Free Modules** (such as AKW104 from other faculties), **SKIP** this step entirely. Free modules must never be inserted into knowledge bases.
8. **Proactive Cleanup Prompting**:
   - In adherence to Rule 4, proactively audit any intermediate extraction files in scratch or temp directories.
   - Present the Upfront Deletion Breakdown in chat and request user confirmation before executing standalone `Remove-Item` commands.

---

## 3. Multi-Lecture Sequential Queue Protocol

When the user requests processing multiple lectures, chapters, or an entire course directory:
1. **Inventory & Order**: Enumerate all source files in the course folder, sorting them chronologically or numerically (e.g., Chapter 1, Chapter 2, Chapter 3).
2. **Single-Lecture Isolation**: Process strictly **one lecture at a time**. Complete the entire cycle (Extract ➔ Inspect ➔ Author/Merge ➔ Renumber ➔ Knowledge Sync ➔ Cleanup Prompt) before advancing to the next file.
3. **Zero Bulk Generation**: Never attempt to load, translate, or compile multiple lectures concurrently in a single turn.

---

## 4. Obsidian Formatting Standards

- **Wikilinks**: Connect internal concepts with `[[Note Name#Section|Display Text]]`.
- **Callouts**:
  - `> [!info] Definition: [Term]` for formal definitions.
  - `> [!example] Example: [Title]` for walkthroughs.
  - `> [!warning] Common Pitfall` for traps, bugs, or constraints.
  - `> [!tip] Extra Notes: [Context]` for essential supplementary explanations.
- **Strict Mermaid Syntax**:
  - Subgraph and node IDs must NOT contain spaces (e.g. `ViewLayer["View Layer"]`).
  - No special characters (`&`, `{`, `}`) directly inside class members.
  - Stereotypes on separate lines (e.g., `<<abstract>> Sale`).
