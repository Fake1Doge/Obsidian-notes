# Project Rules

## Git Management
- **Do not perform manual Git sync or commit operations** unless explicitly requested. The user has an external application configured to handle vault backup and git synchronization.
- **Do not run git validation commands** (like `git diff` or `git status`) to verify file saves, as the auto-backup system tracks changes automatically.

## Knowledge Base Synchronization
- **Always update year-specific knowledge bases (`knowledge_Y1.md` or `knowledge_Y2.md`)**: Whenever a new note, lecture, chapter, or tutorial is created or updated in the vault, invoke the `update-knowledge` skill to summarize the new content into the corresponding year's knowledge base (`knowledge_Y1.md` for Year 1 notes or `knowledge_Y2.md` for Year 2 notes) and create direct Obsidian wikilinks (`[[path/to/note#Heading|Label]]`) back to the exact location.

