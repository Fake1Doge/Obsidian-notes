# Project Rules

## Git Management
- **Do not perform manual Git sync or commit operations** unless explicitly requested. The user has an external application configured to handle vault backup and git synchronization.
- **Do not run git validation commands** (like `git diff` or `git status`) to verify file saves, as the auto-backup system tracks changes automatically.

## Knowledge Base Synchronization
- **Always update `knowledge.md`**: Whenever a new note, lecture, chapter, or tutorial is created or updated in the vault, invoke the `update-knowledge` skill to summarize the new content into `knowledge.md` and create direct Obsidian wikilinks (`[[path/to/note#Heading|Label]]`) back to the exact location.

