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
2. **Process and Format:** Transform the content by applying Obsidian Flavored Markdown. You should activate the `obsidian-markdown` skill (`activate_skill`) to ensure you use correct Obsidian-specific syntax (Frontmatter, Wikilinks, Callouts, Embeds, etc.).
3. **Save the Note:** Generate a structured note and write it into the specified .md file.

## Final Review
Before saving, ensure that:
- You have not summarized away important details.
- The formatting is valid Obsidian Markdown (as per the `obsidian-markdown` skill).
- Frontmatter, callouts, and wikilinks are present.