# Project Rules

## Git Management
- **Strict Prohibition on `git push` & Auto-Pushing**: The assistant MUST NEVER execute `git push` or attempt automated remote synchronization. The user utilizes the **Obsidian Git** plugin inside Obsidian, which automatically handles periodic backups, commits, and pushes to GitHub.
- **Do Not Interfere with Obsidian Git**: Avoid manual staging (`git add`) or committing (`git commit`) during routine editing, as concurrent Git operations cause index lock errors (`.git/index.lock`) on Windows. Allow Obsidian Git to automatically commit and push on its configured schedule.
- **Local Read-Only Inspection Only**: The assistant is permitted to run passive, read-only Git commands (`git status`, `git diff`) solely when needed to verify working tree status.

## Knowledge Base Synchronization
- **Update year-specific knowledge bases (`knowledge_Y1.md` or `knowledge_Y2.md`) for Core Courses and Field-Electives**: Whenever a new core course or field-elective note, lecture, chapter, or tutorial is created or updated in the vault, invoke the `update-knowledge` skill to summarize the new content into the corresponding year's knowledge base (`knowledge_Y1.md` for Year 1 notes or `knowledge_Y2.md` for Year 2 notes) and create direct Obsidian wikilinks (`[[path/to/note#Heading|Label]]`) back to the exact location.
- **Strict Prohibition on Free Modules**: Free modules (e.g. AKW104 Accounting and Finance from other faculties) MUST NEVER be added to knowledge base markdown files (`knowledge_Y1.md`, `knowledge_Y2.md`). Free modules remain strictly self-contained, standalone course notes. In contrast, school-specific **Field-Electives** ARE included in the knowledge bases.

## Course Material Ingestion & "Extra" Folders Protocol
- **Strict Exclusion of "Extra" Folders**: When discovering, listing, queueing, or processing course materials (PDF, PPTX, DOCX, text) for any course, the assistant and subagents MUST ALWAYS IGNORE all files residing in subdirectories named `Extra`, `Extras`, `extra`, or `extras` (e.g., `.../Extra/`, `.../Extras/`).
- **Core Syllabus Focus**: Only primary source files located directly under the course directory representing official lecture slides, lab manuals, or assignment sheets may be processed into master notes.
- **Explicit User Opt-In Only**: Materials residing in `Extra` folders must NEVER be converted or integrated into master notes or year knowledge bases (`knowledge_Y1.md`, `knowledge_Y2.md`) unless the user explicitly instructs: *"Process the files in the extra folder"*.
- **Preserve Study Leanliness**: Ensure notes strictly mirror the examinable lecture slides so students do not waste time studying extraneous reference books or supplemental decks.

## Mermaid Diagram Syntax Guardrails
- **Double-Quote Link/Edge Labels with Parentheses**: In flowcharts and graphs, arrow labels containing parentheses or punctuation MUST be enclosed in double quotes (e.g., `-->|"Label (Details)"|` or `==>|"Protocol (TCP/IP)"|`). Unquoted parentheses inside `|...|` crash Mermaid's lexer.
- **Stereotypes Inside Class Braces**: In `classDiagram`, class stereotypes/annotations must ALWAYS be placed inside the class body (e.g., `class Name { <<stereotype>> ... }`). Declaring them on separate lines outside the class (`<<stereotype>> ClassName`) crashes Mermaid's parser.
- **Always Quote Subgraph Titles with Special Characters**: Subgraphs with spaces or parentheses must specify an alphanumeric identifier and quoted label (e.g., `subgraph ID ["Title (Details)"]`).
- **Avoid Sequence Diagram Keyword Collisions**: Never name participants or actors `Actor` (e.g., use `actor UserActor as "Actor"`).
- **Automated Validation**: Run `node .agents/skills/obsidian-markdown/scripts/lint_mermaid.js` on modified files to verify 100% parse compliance.
