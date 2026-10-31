---
name: rearrange-topics
description: Rearranges and renumbers headings like 'Chapter X' or 'Topic Y' sequentially in a markdown file, auto-detecting the most common prefix. Use to maintain clean, sequential, and consistent headers.
---

# Rearrange Topics Skill

This skill renumbers topic and chapter headings in a markdown file so they are sequential, without gaps. It automatically handles multiple content types (e.g., lectures, labs, tutorials, assignments, appendices) by grouping them into independent numbering sequences and formatting subheadings hierarchically.

## How to Use

Run the bundled script on the target markdown file:

```bash
node .agents/skills/rearrange-topics/scripts/rearrange.js "<path-to-markdown-file>"
```

### Automatic Two-Way Vault Link Synchronization
When headings in a master note are renumbered (e.g., `Chapter 1: ...` or `## 1.5 ...`), `rearrange.js` **automatically scans and updates all incoming wikilinks** across `knowledge_Y1.md`, `knowledge_Y2.md`, and other vault notes pointing to those headings. This eliminates broken anchors caused by renumbering.
- **Preview mode (`--dry-run`)**: Preview renumbering changes without modifying files:
  ```bash
  node .agents/skills/rearrange-topics/scripts/rearrange.js "<path-to-markdown-file>" --dry-run
  ```
- **Skip link sync (`--no-sync`)**: Renumber headings without propagating link updates across other notes:
  ```bash
  node .agents/skills/rearrange-topics/scripts/rearrange.js "<path-to-markdown-file>" --no-sync
  ```

---

## Prefix System & Hierarchy Alignment

### 1. Advanced Multi-Sequence Prefix System
The script categorizes prefixes into two groups:
1. **Lecture Topic Synonyms** (standardized automatically to the most common prefix in the file, e.g., `Chapter` or `Topic`):
   - `Chapter`, `Topic`, `Week`, `Lecture`, `Part`, `Section`, `Module`, `Unit`
2. **Special Section Prefixes** (retain their original prefix name and are numbered in their own independent, separate sequence):
   - `Lab`, `Tutorial`, `Assignment`, `Appendix`, `Project`, `Step`

### 2. Hierarchy Alignment for Subtopics
When any level 1 heading is processed (lecture topic or special section), it sets the baseline for all level > 1 subtopics beneath it.
- **Example**:
  - `# Chapter 1: Structured Data` (Lecture 1)
    - `## 1.1 Abstract Data Types`
  - `# Lab 1: Pointer Practice` (Lab 1 - starts a new independent sequence)
    - `## 1.1 Syntax` (Subtopics under Lab 1 align automatically to Lab 1's number)
  - `# Chapter 2: Object Basics` (Lecture 2)
    - `## 2.1 Constructors` (Subtopics align to Chapter 2's number)

---

## Agent Instructions
1. **Trigger Frequency**: Run this script **immediately after writing or updating each topic** in the master markdown note.
2. **Execution**: Run using `node .agents/skills/rearrange-topics/scripts/rearrange.js "<path-to-file>"`.
3. **Consistency Check**: Verify that all main headings share the consistent prefix (e.g. `Chapter X: [Title]`) and all subheadings follow hierarchical numbering (`## X.Y [Subtitle]`).
4. **Verification**: Confirm that the script logs indicate a successful run with the correct number of renumbered headings and synced wikilinks.
