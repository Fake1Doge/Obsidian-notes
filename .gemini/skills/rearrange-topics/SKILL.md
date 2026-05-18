---
name: rearrange-topics
description: Rearranges and renumbers headings like 'Chapter X' or 'Topic Y' sequentially in a markdown file, auto-detecting the most common prefix. Use when the user asks to renumber, organize, or make topics/chapters consistent in a file.
---

# Rearrange Topics Skill

This skill renumbers topic and chapter headings in a markdown file so they are sequential, without gaps. It automatically detects the most common prefix (e.g., Chapter, Topic, Module) and applies it consistently across all numbered headings.

## How to use

Run the bundled script on the target markdown file:

```bash
node <path-to-skill>/scripts/rearrange.js <path-to-markdown-file>
```

### Supported Prefixes
The script auto-detects and renumbers headings starting with:
- Chapter
- Topic
- Week
- Lecture
- Part
- Section
- Module
- Unit

### Example

Before:
```markdown
# Topic 1: Intro
# Chapter 3: Body
# Topic 5: Conclusion
```

After (assuming 'Topic' is most common):
```markdown
# Topic 1: Intro
# Topic 2: Body
# Topic 3: Conclusion
```

## Agent Instructions
1. Run the script on the file specified by the user using `run_shell_command`. Use the absolute path to the script provided in the `<available_resources>` section when the skill is activated (e.g., `node "C:\Users\User\Desktop\Obsidian-notes\.gemini\skills\rearrange-topics\scripts\rearrange.js" <path-to-markdown-file>`).
2. Read the script output. If successful, confirm to the user that the headings have been rearranged.
