---
name: lecture-to-obsidian
description: Converts raw lecture notes, PDFs, or text into highly detailed Obsidian-flavored Markdown notes. Integrates with obsidian-cli for vault management and obsidian-markdown for advanced formatting.
---

# Lecture to Obsidian Processor

This skill guides you in transforming raw lecture materials (text files, PDFs, or raw transcripts) into rich, highly detailed Obsidian-flavored Markdown notes.

## Core Principle: No Loss of Detail
Your primary mandate is to **preserve all details, examples, code snippets, and nuances** from the source material. Do not excessively summarize or omit information. The output must be comprehensive.

## Workflow

1. **Activate Dependencies:** Start by activating the `obsidian-markdown` and `obsidian-cli` skills using `activate_skill`. These provide the necessary formatting rules and vault interaction tools.
2. **Context Research:** Use the `obsidian-cli` (e.g., `obsidian search` or `obsidian read`) to find related notes in the user's vault. This helps maintain consistent terminology and creates relevant `[[wikilinks]]` to existing knowledge.
3. **Read the Source Material:** Read the provided lecture notes, transcripts, or PDF files entirely. For large files, read in chunks to ensure no details are missed.
4. **Process and Format:** Apply Obsidian-specific syntax (Frontmatter, Callouts, Wikilinks, Math, etc.) as defined in the `obsidian-markdown` skill.
5. **Save the Note:** Write the final formatted text to a `.md` file. You can use the `write_file` tool or the `obsidian create` command from `obsidian-cli` to save it directly into the vault.

## Obsidian Formatting Guidelines

When structuring the note, apply the following (as per the `obsidian-markdown` skill):

### 1. Frontmatter (Properties)
Always start with YAML frontmatter. Use `obsidian property:set` if you need to update them later.
```yaml
---
title: "[Topic Name]"
date: YYYY-MM-DD
tags:
  - lecture
  - subject
---
```

### 2. Hierarchical Headings
Organize content logically using Markdown headers (`#`, `##`, `###`). Ensure a clear outline that reflects the structure of the lecture.

### 3. Callouts for Emphasis
Use Obsidian callouts (`> [!type]`) to highlight key information:
- **Definitions:** `[!info] Definition: [Term]`
- **Important Notes:** `[!note] Important`
- **Examples:** `[!example] Example: [Title]`
- **Warnings:** `[!warning] Common Mistake`

### 4. Wikilinks
Identify key terms and related topics, and enclose them in wikilinks `[[Like This]]` for cross-referencing within the vault.

### 5. Code Blocks and Math
- Use fenced code blocks with language identifiers (e.g., ` ```cpp `).
- Use LaTeX for formulas: `$E = mc^2$` for inline and `$$ ... $$` for blocks.

## Final Review
Before saving, ensure that:
- You have not summarized away important details.
- The formatting is valid Obsidian Markdown (as per `obsidian-markdown`).
- Frontmatter, callouts, and wikilinks are present.
- The note is correctly placed and linked within the vault structure.
