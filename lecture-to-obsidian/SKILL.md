---
name: lecture-to-obsidian
description: Converts raw lecture notes, PDFs, or text into highly detailed Obsidian-flavored Markdown notes. Use when asked to process, format, or convert lecture material into Obsidian notes without losing any detail.
---

# Lecture to Obsidian Processor

This skill guides you in transforming raw lecture materials (text files, PDFs, or raw transcripts) into rich, highly detailed Obsidian-flavored Markdown notes.

## Core Principle: No Loss of Detail
Your primary mandate is to **preserve all details, examples, code snippets, and nuances** from the source material. Do not excessively summarize or omit information. The output must be comprehensive.

## Workflow

1. **Read the Source Material:** Read the provided lecture notes, transcripts, or PDF files entirely. If the file is large, read it in chunks to ensure no details are missed.
2. **Process and Format:** Transform the content using the Obsidian Formatting Guidelines below.
3. **Save the Note:** Write the final formatted text to a `.md` file in the user's workspace using the `write_file` tool. Name the file logically based on the lecture topic if a name is not provided.

## Obsidian Formatting Guidelines

When structuring the note, apply the following Obsidian-specific formatting:

### 1. Frontmatter
Always start the note with YAML frontmatter containing relevant metadata:
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
Organize the content logically using Markdown headers (`#`, `##`, `###`). Ensure a clear outline that reflects the structure of the lecture.

### 3. Callouts for Emphasis
Use Obsidian callouts to highlight specific types of information.
- **Definitions / Key Concepts:**
  ```markdown
  > [!info] Definition: [Term]
  > [Detailed explanation...]
  ```
- **Important Notes:**
  ```markdown
  > [!note] Important
  > [Crucial details to remember...]
  ```
- **Examples / Case Studies:**
  ```markdown
  > [!example] Example: [Title]
  > [Step-by-step example or case study...]
  ```
- **Warnings / Pitfalls:**
  ```markdown
  > [!warning] Common Mistake
  > [Details of what to avoid...]
  ```

### 4. Wikilinks
Identify key terms, concepts, and related topics, and enclose them in wikilinks `[[Like This]]` so they can be easily referenced across the user's Obsidian vault. 
- Example: "The CPU connects to the [[Main Memory]] via the [[System Bus]]."

### 5. Code Blocks and Math
- Use standard Markdown code blocks for any programming code, ensuring you specify the language (e.g., ` ```cpp `).
- Use LaTeX formatting for mathematical formulas:
  - Inline math: `$E = mc^2$`
  - Block math:
    $$
    \sum_{i=1}^{n} i = \frac{n(n+1)}{2}
    $$

### 6. Lists and Tables
Use bulleted lists, numbered lists, and Markdown tables to organize structured data, comparisons, or sequences of events effectively.

## Final Review
Before saving, ensure that:
- You have not summarized away important details.
- The formatting is valid Obsidian Markdown.
- Frontmatter, callouts, and wikilinks are present.