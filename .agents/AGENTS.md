# Project Rules

## Git Management
- **Git commands are allowed**: The assistant is permitted to execute Git commands directly (such as `git add`, `git commit`, `git push`, `git pull`, `git status`, and `git diff`) to manage version control, check repository status, and sync changes with GitHub.

## Knowledge Base Synchronization
- **Update year-specific knowledge bases (`knowledge_Y1.md` or `knowledge_Y2.md`) for Core Courses and Field-Electives**: Whenever a new core course or field-elective note, lecture, chapter, or tutorial is created or updated in the vault, invoke the `update-knowledge` skill to summarize the new content into the corresponding year's knowledge base (`knowledge_Y1.md` for Year 1 notes or `knowledge_Y2.md` for Year 2 notes) and create direct Obsidian wikilinks (`[[path/to/note#Heading|Label]]`) back to the exact location.
- **Strict Prohibition on Free Modules**: Free modules (e.g. AKW104 Accounting and Finance from other faculties) MUST NEVER be added to knowledge base markdown files (`knowledge_Y1.md`, `knowledge_Y2.md`). Free modules remain strictly self-contained, standalone course notes. In contrast, school-specific **Field-Electives** ARE included in the knowledge bases.
