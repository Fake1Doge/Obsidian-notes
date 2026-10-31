---
name: pdf-extractor
description: Extracts structured Markdown notes from documents (PDF, PPTX, DOCX) and splits large PDFs automatically. Use when processing course materials, converting lecture slides, or chunking oversized PDFs.
---

# Document & PDF Extractor (High-Fidelity Detail Engine)

## Overview
This skill provides automated tools to extract structured content from course materials and handle large files with a strict **Maximum Detail Preservation** guarantee:
1. **Pre-Flight Analyzer (`--analyze`)**: Audits page counts, text searchability, and flags diagram/visual slides before extraction begins.
2. **Slide-by-Slide Delimited Extraction (`extract_document.js`)**: Converts documents into Markdown while strictly demarcating every individual slide (`### 📄 Slide X`) and grouping lines in exact reading order so zero code or bullets are lost.
3. **Smart AnyDoc & pdf2json Engine**: Combines `@firecrawl/anydoc` for structured document outlines with `pdf2json` for verbatim slide-by-slide fidelity.
4. **Scratch-Aware PDF Chunking (`split_pdf.js`)**: Splits large PDFs (>40–50 pages) into 20-page parts and supports routing directly to temporary scratch directories (`-o <scratch_dir>`).
5. **Dual Visual & Hybrid Slide Detection**: Automatically flags low-text slides (<40 chars) and hybrid slides containing text alongside architectural diagrams, vector drawings, or UML/ERD models, inserting targeted callouts for multimodal inspection.

---

## Workflows

### 1. Pre-Flight Inspection (Recommended First Step)
Before processing any new PDF material, run the pre-flight analyzer:
```bash
node .agents/skills/pdf-extractor/scripts/extract_document.js "<path-to-pdf>" --analyze
```
- Reports exact slide count, text-searchable percentage, and lists specific slide numbers containing visual diagrams or charts.
- Provides immediate recommendation on whether to split into chunks or extract directly.

### 2. Document Extraction & Conversion
Extract structured content with slide-level accountability:
```bash
node .agents/skills/pdf-extractor/scripts/extract_document.js "<path-to-document>" [options]
```
**Options**:
- `--mode auto` (Default): Extracts slide-by-slide verbatim text and combines it with AnyDoc's structural outline for complete fidelity.
- `--mode text`: Fast, slide-by-slide text layout dump via `pdf2json`.
- `--mode anydoc`: Standard AnyDoc conversion.
- `-o <output.md>`: Specify custom destination path (e.g. scratch directory). *Note: If `-o` is omitted, output safely defaults to the system temporary directory (`os.tmpdir()`), completely preventing intermediate clutter from polluting the vault workspace.*

### 3. Splitting a Large PDF for Topic-by-Topic Processing
If a PDF file exceeds 40–50 pages, chunk it to avoid LLM context saturation and lost details:
```bash
# Split into 20-page chunks directed to a scratch directory:
node .agents/skills/pdf-extractor/scripts/split_pdf.js "<path-to-pdf>" --chunk 20 -o "<scratch-or-cache-dir>"

# Or extract a specific page range (e.g. slides 21 to 40):
node .agents/skills/pdf-extractor/scripts/split_pdf.js "<path-to-pdf>" 21 40 -o "<scratch-or-cache-dir>"
```

Once split:
1. Extract and process each 20-page chunk sequentially.
2. Merge content into the course master note.
3. Run `rearrange.js` on the master note.

### 4. Handling Visual & Hybrid Slides
When `extract_document.js` flags slides with:
- `> [!warning] Visual / Low-Text Slide`: Inspect directly using `read_file` to capture architecture topology, cardinality, or illustrations.
- `> [!note] Hybrid Visual Slide`: Verify diagram layout and transcribe visual components into Mermaid.

---

## Included Scripts
- `extract_document.js`: Primary extractor supporting `--analyze`, `--mode <auto|text|anydoc>`, and slide-by-slide delimiters.
- `split_pdf.js`: Uses `pdf-lib` to chunk or extract page ranges, supporting custom destination output directories (`-o <dir>`).
- `package.json`: Contains `@firecrawl/anydoc`, `pdf-lib`, `pdf-parse`, and `pdf2json`.
