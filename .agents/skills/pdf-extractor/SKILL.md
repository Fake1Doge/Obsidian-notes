---
name: pdf-extractor
description: Extracts text notes and splits PDFs automatically. Use this skill when working with large PDFs that exceed read limits to process them sequentially.
---

# PDF Extractor

## Overview
This skill provides automated scripts to extract text and split PDF files. It is intended for use when dealing with files that are too large to read directly.
**Note:** The native `read_file` tool handles PDF text extraction intrinsically. Always prefer `read_file` for reading PDFs over the Node.js scripts below, as it is faster and doesn't require temporary files. Use the scripts here *if and only if* the file is too large to read directly (e.g., exceeds file size or token limits).

## Workflows

### 1. Direct Reading (Preferred Method)
1. Directly use the `read_file` tool on the target PDF file if it is small or medium-sized.
2. Read the returned text directly to generate Obsidian notes topic-by-topic.

### 2. Splitting a Large PDF for Topic-by-Topic Processing
If a PDF file is too large to read directly:
1. Identify the page ranges for each topic (e.g., from the table of contents or first page).
2. Use `split_pdf.js` to extract only the page range for the current topic to prevent exceeding limits.
3. Run the script using the `rtk` command proxy to save tokens:
   ```bash
   rtk node "<path-to-skill>/scripts/split_pdf.js" <absolute-path-to-target-pdf> <start-page> <end-page>
   ```
4. Read the split PDF using `read_file`.
5. Process the topic, write the note, run the `rearrange-topics` script on the master file, and then **immediately delete the temporary split PDF**.
6. Repeat for the next topic/page range.

### 3. Extracting Text from a PDF (Fallback Method)
If `read_file` fails or a raw text dump is needed for a large file:
1. Run the extractor script with `rtk`:
   ```bash
   rtk node "<path-to-skill>/scripts/extract_pdf.js" <absolute-path-to-target-pdf>
   ```
2. The script will generate `temp_pdf_text.txt`. Read this file sequentially (e.g., topic by topic using line ranges).
3. **Crucial Cleanup:** Delete `temp_pdf_text.txt` from the workspace immediately after finishing the topic.

## Included Scripts
- `extract_pdf.js`: Text extraction from a PDF.
- `split_pdf.js`: Splits a PDF into multiple parts or extracts specific page ranges.
- `package.json`: Contains dependencies (`pdf-lib`, `pdf2json`).
