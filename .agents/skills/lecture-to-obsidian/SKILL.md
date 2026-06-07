---
name: lecture-to-obsidian
description: Converts raw lecture notes, PDFs, or text into highly detailed Obsidian-flavored Markdown notes. Integrates with obsidian-markdown for advanced formatting.
---

# Lecture to Obsidian Processor

This skill guides you in transforming raw lecture materials (text files, PDFs, or raw transcripts) into rich, highly detailed Obsidian-flavored Markdown notes.

## Core Principles

1. **Automatic Activation**: Whenever you are asked to write or update a markdown note in this workspace, you MUST automatically use this skill to write the note in the Obsidian Markdown format without losing any detail of the source.
2. **No Loss of Detail**: Your primary mandate is to **preserve all details, examples, code snippets, and nuances** from the source material. The output must be comprehensive. Do not excessively summarize or omit information.
3. **One Topic at a Time (No Parallel/Batch Processing)**: You must read and write notes **one topic by one topic**. Do NOT read multiple topics and write the notes at once to prevent losing detail. You must read the source content for one topic, write the note for that topic, save/update, and then move to the next topic.
4. **Obsidian Markdown Format**: Use the `obsidian-markdown` skill to guide the markdown formatting (callouts, links, math, code blocks, etc.).
5. **PDF Extractor Constraint**: Use the `pdf-extractor` skill **if and only if** the source PDF is too big to be read directly (e.g., exceeds file read limits or context limits). For files that can be read directly, do not use `pdf-extractor`.
6. **Topic Rearrangement**: Rearrange the topics with the `rearrange-topics` skill **immediately after writing the note for each topic**.
7. **Title and Subtitle Consistency**: Make sure that all of the titles and subtitles in the master file are consistent in hierarchy, prefix naming, and capitalization.
8. **Clarity Enhancement (Extra Notes)**: If a part of the lecture notes is not clearly explained or lacks sufficient context, you MUST provide additional explanation or context. This must be clearly labeled as "Extra Notes" using an Obsidian callout.
9. **No Redundant Headers or Overviews**: Do NOT add a "Course Overview" block. Do NOT restate the title of the file or course unnecessarily at the top of the note. Start directly with the content or the first topic header.
10. **Consolidate by Subject**: Process each lecture file or chapter individually to maintain high detail, then write or append all notes for the same subject into a single Markdown file. Do NOT create separate files for each chapter; use the same master file for the subject.
11. **No Properties/Frontmatter**: NEVER add a properties block (YAML frontmatter) at the top of the file. Start the file directly with the content.

## Workflow

1. **Activate Dependencies**: Start by activating the `obsidian-markdown` skill using `activate_skill`. If extracting from a PDF or rearranging topics, also activate the `pdf-extractor` and `rearrange-topics` skills.
2. **Context Research**: Search the current workspace to find the master note for the subject. This ensures you append to the correct file and maintain consistent terminology.
3. **Topic-by-Topic Sequential Processing**:
   - **Identify Topics**: Before reading, identify the list of topics/sections from the source table of contents or headers.
   - **Strictly Process One-by-One**: For each topic:
     a. **Read Topic Content**: Read *only* the content corresponding to the current topic. If the file is too big to read directly, use `pdf-extractor` to extract or split it first.
     b. **Format & Write**: Convert the topic's source content into detailed Obsidian Markdown notes following the `obsidian-markdown` rules.
     c. **Update Master File**: Append the topic notes to the master file (or integrate them if the topic section already exists).
     d. **Rearrange & Renumber**: Run the `rearrange-topics` script on the master file *immediately* after writing the notes for this topic.
     e. **Verify & Repeat**: Move to the next topic only after the current topic is completely processed, saved, and renumbered.
4. **Ensure Consistency**: Make sure that all titles and subtitles follow a uniform format (e.g. `# Chapter X: [Title]` and `## X.Y [Subtitle]`).
5. **Automated Cleanup**: Once the entire process is complete, you MUST automatically delete any temporary text files, fallback extraction scripts, or split PDFs (e.g., `temp_pdf_text.txt`, custom `.js` scripts) created during the process.

## Obsidian Formatting Guidelines

When structuring the note, apply the following (as per the `obsidian-markdown` skill):

### 1. Hierarchical Headings
Organize content logically using Markdown headers (`#`, `##`, `###`). Ensure a clear outline that reflects the structure of the lecture.
- **Chapter/Topic Titles**: For top-level chapters/topics, explicitly write the chosen prefix before the number (e.g., `# Chapter 3: [Title]` or `# Topic 3: [Title]`). Make sure this prefix is consistent.
- **Subtopics**: For subtopics, just use the hierarchical numbers without the prefix word (e.g., `## 3.3 [Subtitle]`).

### 2. Callouts for Emphasis
Use Obsidian callouts (`> [!type]`) to highlight key information extensively. Do not use plain text for definitions or examples if a callout can be used.
- **Definitions**: `> [!info] Definition: [Term]`
- **Important Notes**: `> [!note] Important`
- **Examples**: `> [!example] Example: [Title]`
- **Warnings**: `> [!warning] Common Mistake`
- **Extra Notes**: `> [!tip] Extra Notes: [Title]\n> [Explanation from external knowledge to clarify unclear parts]`

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
