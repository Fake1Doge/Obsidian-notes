---
name: pdf-extractor
description: Extracts text notes and splits PDFs automatically. Triggered when the user asks to "extract notes from this pdf", "split this pdf", or similar requests involving extracting text from PDF files.
---

# PDF Extractor

## Overview
This skill provides automated scripts to extract text and make notes from PDF files, as well as splitting PDF files. It bundles Node.js scripts and their dependencies to ensure the extraction process works reliably without manual setup.

## Workflows

### 1. Extracting Notes from a PDF
When the user asks to extract notes from a PDF file:
1. Navigate to the skill's scripts directory: `<path-to-skill>/scripts`
2. Run `npm install` to ensure dependencies (`pdf-parse`, `pdf-lib`, etc.) are installed.
3. Use `run_shell_command` to execute the extractor script:
   `node extract_pdf.js <absolute-path-to-target-pdf>`
4. The script will generate a temporary text file. Read this text file to answer the user's questions or generate Obsidian notes.
   - If generating Obsidian notes from lectures, follow the formatting and processing guidelines of the `lecture-to-obsidian` skill to ensure high-quality output.
5. **Crucial Cleanup:** Always delete the generated temporary text/PDF files from the workspace immediately after finishing making notes from them, as per global memory preferences.

### 2. Splitting a PDF
When the user asks to split a PDF:
1. Navigate to the skill's scripts directory: `<path-to-skill>/scripts`
2. Run `npm install` if not already done.
3. Use `run_shell_command` to execute the split script:
   `node split_pdf.js <absolute-path-to-target-pdf> <start-page> <end-page>`
4. The output will be saved as instructed by the script. Ensure you move the output to the user's desired location.

## Included Scripts
- `extract_pdf.js`: Basic text extraction from a PDF.
- `extract_pdf2.js`: Alternative extraction method if the first fails.
- `split_pdf.js`: Splits a PDF into multiple parts or extracts specific pages.
- `package.json`: Contains the necessary Node.js dependencies (`pdf-parse`, `pdf-lib`, `pdf2json`).
