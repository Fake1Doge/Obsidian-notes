---
name: lecture-to-obsidian
description: Converts raw lecture notes, PDFs, or text into highly detailed Obsidian-flavored Markdown notes. Integrates with obsidian-markdown for advanced formatting.
---

# Lecture to Obsidian Processor

This skill guides you in transforming raw lecture materials (text files, PDFs, or raw transcripts) into rich, highly detailed Obsidian-flavored Markdown notes.

## Core Principles

1. **No Loss of Detail:** Your primary mandate is to **preserve all details, examples, code snippets, and nuances** from the source material. When working with a PDF, you must take the detail of the PDF lecture note and make a detailed note according to that PDF lecture note following the obsidian-markdown skill without losing any detail. Do not excessively summarize or omit information. The output must be comprehensive.
2. **Clarity Enhancement (Extra Notes):** If a part of the lecture notes is not clearly explained or lacks sufficient context, you MUST provide additional explanation or context. This must be clearly labeled as "Extra Notes" using an Obsidian callout.
3. **No Redundant Headers or Overviews:** Do NOT add a "Course Overview" block. Do NOT restate the title of the file or course unnecessarily at the top of the note. Start directly with the content or the first topic header.
4. **Consolidate by Subject:** Process each lecture file or chapter individually to maintain high detail, then write or append all notes for the same subject into a single Markdown file. Do NOT create separate files for each chapter; use the same master file for the subject.
5. **No Properties/Frontmatter:** NEVER add a properties block (YAML frontmatter) at the top of the file. Start the file directly with the content.

## Workflow

1. **Activate Dependencies:** Start by activating the `obsidian-markdown` skill using `activate_skill`. If extracting from a PDF or rearranging topics, also activate the `pdf-extractor` and `rearrange-topics` skills.
2. **Context Research:** Search the current workspace to find the master note for the subject. This ensures you append to the correct file and maintain consistent terminology.
3. **Sequential Chapter-by-Chapter Processing (CRITICAL - NO PARALLEL READING):** For each lecture file or chapter provided for a subject:
   - **Strictly One by One:** You MUST process files strictly one by one across multiple conversational turns. NEVER call `read_file` on multiple lecture files in a single turn, as the massive output will cause the system to crash or stop mid-task. Use the `wait_for_previous` parameter or separate turns.
   - **Extract Content:** Use the `read_file` tool directly on the source file. `read_file` natively handles PDFs, extracting the text automatically. If `read_file` fails (e.g., due to ignore patterns), use the `pdf-extractor` skill as a fallback.
   - **Process Individually:** Read ONE file completely (or its extracted text), generate its notes, and append them to the master file BEFORE moving to the next file.
   - **Delegate Batch Tasks:** If there are more than 2 files to process, you SHOULD delegate the task to the `generalist` sub-agent with instructions to process them sequentially.
   - **Generate Notes:** Format the detailed notes for this specific source.
   - **Update Master File:** If notes for the chapter do not exist, append the newly generated content to the subject's single Markdown file, ensuring clear separation with horizontal rules (`---`) or level 1 headers. If notes for the chapter *already exist*, **improve and integrate** the new details into the existing section rather than creating a duplicate section or file.
4. **Process and Format:** Apply Obsidian-specific syntax (Callouts, Math, etc.) as defined in the `obsidian-markdown` skill. If a concept is unclear, insert an "Extra Notes" callout. Ensure you escape characters like `<` and `>` properly with backslashes (`\<`, `\>`) to avoid HTML rendering issues.
5. **Save and Update:** Ensure the master Markdown file is updated with the new chapter.
6. **Ensure Sequential Headings:** Once the master Markdown file has been updated, use the `rearrange-topics` skill to sequentially renumber all topic/chapter headings in the master file, ensuring they are consistent.

## Obsidian Formatting Guidelines

When structuring the note, apply the following (as per the `obsidian-markdown` skill):

### 1. Hierarchical Headings
Organize content logically using Markdown headers (`#`, `##`, `###`). Ensure a clear outline that reflects the structure of the lecture.
- **Chapter Titles:** For top-level chapters, explicitly write "Chapter" before the number (e.g., `# Chapter 3: [Title]`).
- **Subtopics:** For subtopics, just use the hierarchical numbers without the word "Chapter" (e.g., `## 3.3 [Subtitle]`).

### 2. Callouts for Emphasis
Use Obsidian callouts (`> [!type]`) to highlight key information extensively. Do not use plain text for definitions or examples if a callout can be used.
- **Definitions:** `> [!info] Definition: [Term]`
- **Important Notes:** `> [!note] Important`
- **Examples:** `> [!example] Example: [Title]`
- **Warnings:** `> [!warning] Common Mistake`
- **Extra Notes:** `> [!tip] Extra Notes: [Title]\n> [Explanation from external knowledge to clarify unclear parts]`

### 3. Code Blocks and Math
- Use fenced code blocks with language identifiers (e.g., ` ```cpp `).
- Use LaTeX for formulas: `$E = mc^2$` for inline and `$$ ... $$` for blocks.

## Final Review
Before saving, ensure that:
- You have not summarized away important details.
- The formatting is valid Obsidian Markdown (as per `obsidian-markdown`).
- Callouts and wikilinks are present.
- The note is correctly placed and linked within the vault structure.
- NO frontmatter/properties block was added to the document.
