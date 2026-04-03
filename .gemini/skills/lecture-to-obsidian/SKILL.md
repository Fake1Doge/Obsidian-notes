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
4. **No Redundant Headers or Overviews:** Do NOT add a "Course Overview" block. Do NOT restate the title of the file or course unnecessarily at the top of the note. Start directly with the content or the first topic header.
5. **One File/Chapter at a Time:** Process each chapter or lecture file individually. Read the file, and make detailed notes for that specific source before moving on to the next.

## Workflow

1. **Activate Dependencies:** Start by activating the `obsidian-markdown` and `obsidian-cli` skills using `activate_skill`. These provide the necessary formatting rules and vault interaction tools.
2. **Context Research:** Use the `obsidian-cli` (e.g., `obsidian search` or `obsidian read`) to find related notes in the user's vault. This helps maintain consistent terminology.
3. **Process Individually:** For each lecture file or chapter provided:
   - Read the single file completely (in chunks if large) to ensure no details are missed.
   - Make detailed notes for this specific file, following the sequential renumbering for its topics.
   - You may append to a master note or create a separate note section per file, but process the reading and note-taking one source at a time.
4. **Process and Format:** Apply Obsidian-specific syntax (Callouts, Math, etc.) as defined in the `obsidian-markdown` skill. If a concept is unclear, insert an "Extra Notes" callout. Ensure you escape characters like `<` and `>` properly with backslashes (`\<`, `\>`) to avoid HTML rendering issues.
5. **Save the Note:** Write or append the final formatted text to the `.md` file.

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
- Callouts and wikilinks are present.
- The note is correctly placed and linked within the vault structure.
