---
name: pdf-extractor
description: Extracts text notes and splits PDFs automatically. Intended for internal use by the lecture-to-obsidian skill or when determined suitable by the agent. Do not trigger directly based on simple user requests to extract notes.
---

# PDF Extractor

## Overview
This skill provides automated scripts to extract text and make notes from PDF files, as well as splitting PDF files. It bundles Node.js scripts and their dependencies to ensure the extraction process works reliably without manual setup.
**Note:** The native `read_file` tool handles PDF text extraction intrinsically. Always prefer `read_file` for reading PDFs over the Node.js scripts below, as it is faster and doesn't require temporary files. The scripts are provided here for backup extraction or splitting.

## Workflows

### 1. Extracting Notes from a PDF (Preferred Method)
When the user asks to extract notes from a PDF file:
1. Directly use the `read_file` tool on the target PDF file. It will automatically handle the text extraction without any external scripts.
2. Read the returned text to answer the user's questions or generate Obsidian notes.
3. If generating Obsidian notes from lectures, follow the formatting and processing guidelines of the `lecture-to-obsidian` skill to ensure high-quality output.

### 2. Extracting Notes from a PDF (Fallback Method)
If `read_file` fails or a different parsing method is needed:
1. Navigate to the skill's scripts directory: `<path-to-skill>/scripts`
2. Run `npm install` to ensure dependencies (`pdf-parse`, `pdf-lib`, etc.) are installed.
3. Use `run_shell_command` to execute the extractor script:
   `node extract_pdf.js <absolute-path-to-target-pdf>`
4. The script will generate a `temp_pdf_text.txt` file. Read this text file.
5. **Crucial Cleanup:** Always delete the generated temporary text/PDF files from the workspace immediately after finishing.

### 3. Splitting a PDF
When the user asks to split a PDF:
1. Navigate to the skill's scripts directory: `<path-to-skill>/scripts`
2. Run `npm install` if not already done.
3. Use `run_shell_command` to execute the split script.
   To split exactly in half:
   `node split_pdf.js <absolute-path-to-target-pdf>`
   To extract a specific page range:
   `node split_pdf.js <absolute-path-to-target-pdf> <start-page> <end-page>`
4. The script will save the output parts in the same directory as the target PDF.

## Included Scripts
- `extract_pdf.js`: Basic text extraction from a PDF.
- `extract_pdf2.js`: Alternative extraction method if the first fails.
- `split_pdf.js`: Splits a PDF into multiple parts or extracts specific pages.
- `package.json`: Contains the necessary Node.js dependencies (`pdf-parse`, `pdf-lib`, `pdf2json`).
