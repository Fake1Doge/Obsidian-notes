---
name: pdf-extractor
description: Extracts structured Markdown notes from documents (PDF, PPTX, DOCX) and splits large PDFs automatically. Use when processing course materials, converting lecture slides, or chunking oversized PDFs.
---

# Document & PDF Extractor

## Overview
This skill provides automated tools to extract structured content from course materials and handle large files:
1. **AnyDoc Engine (`extract_document.js`)**: Converts documents (Word `.docx`, PowerPoint `.pptx`, Excel `.xlsx`, and text PDFs) directly into clean GitHub-Flavored Markdown.
2. **PDF Chunking (`split_pdf.js`)**: Splits large PDFs into page-range chunks to avoid context or token limits.
3. **Smart Fallback**: If a PDF contains image-only or diagram slides that need visual inspection, it extracts the available text layer via `pdf2json` and flags pages for visual inspection via `view_file`.

---

## Workflows

### 1. Document Extraction & Conversion (AnyDoc)
Use this whenever you need to convert `.docx`, `.pptx`, `.xlsx`, or text-heavy `.pdf` files into structured Markdown:
```bash
node "<path-to-skill>/scripts/extract_document.js" "<path-to-document>" [-o "<output-markdown-path>"]
```
- Default output: `temp_extracted_content.md` (and `temp_pdf_text.txt` for PDFs) in the target file's directory.
- **Direct CLI shortcut**: You can also use the global `anydoc` CLI directly:
  ```bash
  anydoc "<path-to-file>" -o "<output-file.md>"
  ```
- **Crucial Cleanup**: If a temporary file was generated (e.g. `temp_extracted_content.md` or `temp_pdf_text.txt`), delete it immediately after integrating the content into the master note.

### 2. Splitting a Large PDF for Topic-by-Topic Processing
If a PDF file is too large to read directly (e.g. 50+ or 100+ pages), split it by page ranges or into sequential chunks:

- **Extracting a Specific Page Range**:
  ```bash
  node "<path-to-skill>/scripts/split_pdf.js" "<path-to-target-pdf>" <start-page> <end-page>
  ```
- **Splitting into Fixed-Size Chunks (Default 20 pages)**:
  ```bash
  node "<path-to-skill>/scripts/split_pdf.js" "<path-to-target-pdf>" --chunk 20
  ```

Once split:
1. Extract or read each chunk (`extract_document.js` or `view_file`).
2. Process the topic and write/merge into the master note.
3. Run the `rearrange-topics` script on the master file.
4. **Crucial Cleanup**: Immediately delete temporary split PDF files.

### 3. Handling Scanned / Visual Slides
If `extract_document.js` notes that a PDF has pages needing OCR, or if the lecture consists of scanned images:
- Use the native agent `view_file` tool on the specific page or file for multimodal visual understanding.
- Preserve formulas, diagrams, and figures in Obsidian Markdown using LaTeX (`$...$`) and Mermaid diagrams.

---

## Included Scripts
- `extract_document.js`: Primary extractor combining `@firecrawl/anydoc` (for structured Markdown from PDF/DOCX/PPTX) and `pdf2json` fallback.
- `extract_pdf.js`: Backwards-compatible alias delegating to `extract_document.js`.
- `split_pdf.js`: Uses `pdf-lib` to extract page ranges or split PDFs into chunks.
- `package.json`: Contains `@firecrawl/anydoc`, `pdf-lib`, `pdf-parse`, and `pdf2json`.
