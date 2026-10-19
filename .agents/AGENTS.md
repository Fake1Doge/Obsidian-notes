# Project Rules

## Git Management
- **Git commands are allowed**: The assistant is permitted to execute Git commands directly (such as `git add`, `git commit`, `git push`, `git pull`, `git status`, and `git diff`) to manage version control, check repository status, and sync changes with GitHub.

## Knowledge Base Synchronization
- **Always update year-specific knowledge bases (`knowledge_Y1.md` or `knowledge_Y2.md`)**: Whenever a new note, lecture, chapter, or tutorial is created or updated in the vault, invoke the `update-knowledge` skill to summarize the new content into the corresponding year's knowledge base (`knowledge_Y1.md` for Year 1 notes or `knowledge_Y2.md` for Year 2 notes) and create direct Obsidian wikilinks (`[[path/to/note#Heading|Label]]`) back to the exact location.
