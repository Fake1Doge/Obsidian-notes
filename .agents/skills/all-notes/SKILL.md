---
name: all-notes
description: Processes all lecture materials for a requested course by invoking the lecture-to-obsidian skill for each file, then runs rearrange-topics to ensure headings are sequential.
---

# All Notes Skill (Course Notes Compiler)

This skill provides a hierarchical, repeatable workflow to compile all lecture materials for a requested course into a single master note in the Obsidian vault. It delegates the processing of individual lectures to the `lecture-to-obsidian` skill and finalizes the document structure using the `rearrange-topics` skill.

## 1. Discovery and Planning Phase

When a course is requested (e.g. "CKS121"):

1. **Locate Course Directory**: Search the workspace (typically under `Y1S1/` or `Y1S2/`) for the target course directory.
2. **Identify Master Note**: Find the master note markdown file (e.g., `<CourseCode> <CourseName>.md`). If it doesn't exist, create it.
3. **Inventory Lecture Notes**: List all lecture files (PDFs, slides, text files) in the course folder, sorted sequentially.
4. **Present the Plan**: Create a mapping table of lectures to chapters and present it to the user.

---

## 2. Compile Course Notes (Hierarchical Process)

1. **Sequential Delegation (Looping)**:
   - For each lecture note identified in the inventory:
     - **Invoke the `lecture-to-obsidian` skill** to process the file and write or merge its contents into the master note.
     - Ensure that no details, examples, or formulas are lost during the transition.
2. **Post-Processing (Renumbering)**:
   - Once all lectures are successfully processed and written to the master note, **invoke the `rearrange-topics` skill** to clean up the heading structure and renumber all topics sequentially:
     ```bash
     rtk node "<workspace-root>/.agents/skills/rearrange-topics/scripts/rearrange.js" "<path-to-master-note>"
     ```
3. **Quality Verification**:
   - Check the final notes to ensure all Mermaid diagrams conform to syntax rules (no spaces in subgraph/node IDs, stereotypes on separate lines).
   - Ensure the document starts directly with the content (no YAML frontmatter/properties).

---

## 3. Cleanup

Automatically delete any temporary text files (such as `temp_pdf_text.txt`) or split PDFs created by the `pdf-extractor` skill during the process.
