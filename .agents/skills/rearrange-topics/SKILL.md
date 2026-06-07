---
name: rearrange-topics
description: Rearranges and renumbers headings like 'Chapter X' or 'Topic Y' sequentially in a markdown file, auto-detecting the most common prefix. Use to maintain clean, sequential, and consistent headers.
---

# Rearrange Topics Skill

This skill renumbers topic and chapter headings in a markdown file so they are sequential, without gaps. It automatically detects the most common prefix (e.g., Chapter, Topic, Module) and applies it consistently across all numbered headings, verifying that titles and subtitles are completely consistent.

## How to use

Run the bundled script on the target markdown file using the `rtk` command proxy to optimize tokens:

```bash
rtk node "C:\Users\User\Desktop\Obsidian-notes\.agents\skills\rearrange-topics\scripts\rearrange.js" <path-to-markdown-file>
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
1. **Trigger Frequency**: You must run this skill script **immediately after writing or updating each topic** in the master markdown note. Do not wait until the entire note is completed.
2. **Execution**: Run the command using `rtk` command proxy and passing the absolute path to the file.
3. **Consistency Check**: After running the script, read the updated file sections to ensure that all heading prefixes match (e.g., all main headings are `Chapter X: [Title]` or `Topic X: [Title]`) and all subheadings are hierarchically consistent (e.g., `## X.Y [Subtitle]`).
4. **Verification**: Confirm that the script logs indicate a successful run with the correct number of renumbered headings.
