---
name: lecture-to-obsidian
description: Converts raw lecture notes, PDFs, or text into highly detailed Obsidian-flavored Markdown notes. Integrates with obsidian-cli for vault management and obsidian-markdown for advanced formatting.
---

# Lecture to Obsidian Processor

This skill guides you in transforming raw lecture materials (text files, PDFs, or raw transcripts) into rich, highly detailed Obsidian-flavored Markdown notes.

## Core Principles

1. **No Loss of Detail:** Your primary mandate is to **preserve all details, examples, code snippets, and nuances** from the source material. Do not excessively summarize or omit information. The output must be comprehensive.
2. **Sequential Renumbering:** Regardless of the numbering in the source material (e.g., if it skips from Topic 1 to Topic 3), you MUST rearrange and renumber the chapters or topics sequentially starting from 1 (e.g., 1, 2, 3...).
3. **Clarity Enhancement (Extra Notes):** If a part of the lecture notes is not clearly explained or lacks sufficient context, you MUST provide additional explanation or context. This must be clearly labeled as "Extra Notes" using an Obsidian callout.

## Workflow

1. **Activate Dependencies:** Start by activating the `obsidian-markdown` and `obsidian-cli` skills using `activate_skill`. These provide the necessary formatting rules and vault interaction tools.
2. **Context Research:** Use the `obsidian-cli` (e.g., `obsidian search` or `obsidian read`) to find related notes in the user's vault. This helps maintain consistent terminology.
3. **Read the Source Material:** Read the provided lecture notes, transcripts, or PDF files entirely. For large files, read in chunks to ensure no details are missed.
4. **Identify and Renumber Topics:** Identify all chapters or topics in the material and assign them new sequential numbers starting from 1.
5. **Process and Format:** Apply Obsidian-specific syntax (Callouts, Math, etc.) as defined in the `obsidian-markdown` skill. If a concept is unclear, insert an "Extra Notes" callout.
6. **Save the Note:** Write the final formatted text to a `.md` file. You can use the `write_file` tool or the `obsidian create` command from `obsidian-cli` to save it directly into the vault.

## Obsidian Formatting Guidelines

When structuring the note, apply the following (as per the `obsidian-markdown` skill):

### 1. Hierarchical Headings
Organize content logically using Markdown headers (`#`, `##`, `###`). Ensure a clear outline that reflects the structure of the lecture, using the sequential numbering (e.g., `# 1. Introduction`, `## 1.1 First Topic`).

### 2. Callouts for Emphasis
Use Obsidian callouts (`> [!type]`) to highlight key information:
- **Definitions:** `[!info] Definition: [Term]`
- **Important Notes:** `[!note] Important`
- **Examples:** `[!example] Example: [Title]`
- **Warnings:** `[!warning] Common Mistake`
- **Extra Notes:** `[!tip] Extra Notes: [Title]\n[Explanation from external knowledge to clarify unclear parts]`

### 3. Code Blocks and Math
- Use fenced code blocks with language identifiers (e.g., ` ```cpp `).
- Use LaTeX for formulas: `$E = mc^2$` for inline and `$$ ... $$` for blocks.

## Final Review
Before saving, ensure that:
- You have not summarized away important details.
- The formatting is valid Obsidian Markdown (as per `obsidian-markdown`).
- Frontmatter, callouts, and wikilinks are present.
- The note is correctly placed and linked within the vault structure.
