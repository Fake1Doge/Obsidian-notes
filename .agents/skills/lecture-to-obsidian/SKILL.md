---
name: lecture-to-obsidian
description: Converts a single raw lecture note (PDF, text, slides) into a detailed, high-fidelity Obsidian-flavored Markdown note, integrating it into the master note.
---

# Lecture to Obsidian Processor (Maximum Detail Preservation)

This skill orchestrates the end-to-end transformation of raw course materials (PDF, PPTX, DOCX, text) into comprehensive, high-fidelity Obsidian Markdown notes, merging them into course master notes with an absolute **Zero Loss of Detail** guarantee.

---

## Quick Reference: 4-Phase Pipeline

| Phase | Objective | Primary Tool / Script |
|---|---|---|
| **Phase 1: Ingest & Audit** | Audit page count, flag visual/hybrid slides, extract verbatim text | `node .agents/skills/pdf-extractor/scripts/extract_document.js` |
| **Phase 2: Author & Enrich** | Full code blocks, LaTeX math, Mermaid diagrams, extra callouts | Native multimodal inspection via `read_file` |
| **Phase 3: Merge & Align** | Integrate into course master note, renumber headings, sync links | `node .agents/skills/rearrange-topics/scripts/rearrange.js` |
| **Phase 4: Sync & Validate** | Update `knowledge_Y1.md` / `knowledge_Y2.md`, validate link anchors | `node .agents/skills/update-knowledge/scripts/validate_links.js` |

---

## 1. Core Mandates

1. **Zero Loss of Detail Guarantee**:
   - Preserve every single concept, definition, example, code block, architectural diagram, and edge case from the source material.
   - Do **NOT** summarize away nuances, skip slides, abbreviate code with `// ...`, or hand-wave steps. The resulting note must serve as a comprehensive, standalone study reference.
2. **Slide Coverage Audit Protocol**:
   - Every slide or page from 1 through $N$ must be accounted for.
   - Review extracted slide boundaries (`### 📄 Slide X`) to ensure 100% topic coverage without omissions.
3. **Clean Plain-Text Headings for Resilient Wikilinks**:
   - **NEVER** embed LaTeX math (`$...$`) or code backticks (`` `...` ``) directly inside Markdown headings (`#`, `##`, `###`).
   - Use plain descriptive text for headings (e.g. `### 3.4.2 The Family of JOIN Operators (Bowtie / Join)`).
   - Place mathematical symbols and code keywords immediately in the body text or callouts under the heading. This ensures heading anchors (`#Exact Heading`) resolve 100% reliably in cross-vault wikilinks.
4. **Properties & Frontmatter Rule**:
   - **NEVER** add YAML frontmatter at the top of appended lecture sections in master notes. Frontmatter belongs solely at the very top of standalone notes files.
5. **Curriculum Scope Gate**:
   - **Core Courses & Field-Electives**: Must be synchronized into the year's master knowledge base (`knowledge_Y1.md` or `knowledge_Y2.md`).
   - **Free Modules** (external non-CS electives like AKW104): Strictly self-contained course notes; **NEVER** insert into knowledge bases.

---

## 2. Step-by-Step Processing Pipeline

### Phase 1: Ingestion & Document Audit
1. **Pre-Flight Analysis**:
   ```bash
   node .agents/skills/pdf-extractor/scripts/extract_document.js "<path-to-file>" --analyze
   ```
   - Audits slide count, text-searchability, and flags visual/hybrid slides.
2. **Deck Size Management**:
   - If total slides exceed 45, split into 20-page parts to avoid context saturation:
     ```bash
     node .agents/skills/pdf-extractor/scripts/split_pdf.js "<path-to-file>" --chunk 20 -o "<scratch-dir>"
     ```
3. **Structured & Verbatim Extraction**:
   ```bash
   node .agents/skills/pdf-extractor/scripts/extract_document.js "<path-to-file>" --mode auto -o "<scratch-dir>/<file_stem>_extracted.md"
   ```
   *(If `-o` is omitted, the extractor safely outputs to `os.tmpdir()` to keep the workspace clean).*

### Phase 2: Multimodal High-Fidelity Authoring
1. **Multimodal Visual Inspection**:
   - Inspect all slides flagged with `> [!warning] Visual Slide` or `> [!note] Hybrid Visual Slide` directly using `read_file`.
   - Transcribe architectural diagrams, memory layouts, ERDs, and state machines into interactive **Mermaid diagrams** (see `obsidian-markdown` for syntax rules).
2. **Fidelity Standards**:
   - **Verbatim Code**: Compilable, complete code blocks with language tags (`cpp`, `sql`, `python`). Never truncate.
   - **Rigorous LaTeX**: All mathematical formulas, set operations, matrices, and complexities formatted in `$..$` or `$$..$$`.
   - **Contextual Enrichment**: Expand brief bullet-only slides with `> [!tip] Extra Notes: [Topic]` callouts explaining underlying mechanics.

### Phase 3: Integration & Heading Alignment
1. **Merge into Master Note**:
   - Append the comprehensive chapter into the course master note (e.g. `Y2S1/<CourseCode> <CourseName>.md`).
   - Main chapters: `# Chapter X: [Title]` or `# Topic X: [Title]`. Practicals: `# Lab X: [Title]`. Subtopics: `## X.Y [Subtitle]` and `### X.Y.Z [Topic]`.
2. **Heading Renumbering & Two-Way Link Sync**:
   ```bash
   node .agents/skills/rearrange-topics/scripts/rearrange.js "<path-to-master-note>"
   ```
   - Sequentially renumbers chapters and subtopics.
   - Automatically propagates updated heading anchors to all incoming wikilinks across the vault.

### Phase 4: Knowledge Synchronization & Validation
1. **Curriculum Classification Audit**:
   - If **Free Module**: **STOP HERE**. Free modules remain standalone.
   - If **Core Course or Field-Elective**: Proceed to update knowledge base.
2. **Sync to Master Knowledge Base**:
   - Invoke `update-knowledge` to summarize new subtopics into `knowledge_Y1.md` (Year 1) or `knowledge_Y2.md` (Year 2) with deep wikilinks (`[[Note#Exact Anchor|Label]]`).
   - Update Academic Roadmap (Mermaid), Direct Conceptual Mappings table, and Master Glossary.
3. **Automated Anchor Validation**:
   ```bash
   node .agents/skills/update-knowledge/scripts/validate_links.js
   ```
   - Verifies 100% of newly added wikilinks resolve to valid headings. Use `--fix` to auto-repair drifted anchors.
4. **Intermediate Cleanup Audit**:
   - Audit scratch or temp files generated during extraction and present deletion breakdown to user before removing.

---

## 3. Multi-Lecture Sequential Queue Protocol

When processing multiple lectures, chapters, or an entire course directory:
1. **Inventory & Order**: Enumerate all source files in the course folder chronologically or numerically.
2. **Strict Single-Lecture Isolation**: Process **one lecture at a time**. Complete all 4 phases (Ingest ➔ Author ➔ Merge/Renumber ➔ Sync/Validate) before advancing to the next file.
3. **Zero Bulk Generation**: Never compile multiple lectures concurrently in a single turn to avoid context loss.
