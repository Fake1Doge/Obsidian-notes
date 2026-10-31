const fs = require('fs');
const path = require('path');
const os = require('os');

// Helper to decode URI component safely
function safeDecode(str) {
    if (!str) return '';
    try {
        return decodeURIComponent(str);
    } catch (_) {
        return str;
    }
}

// Format a single page's text items into clean, reading-order lines
function formatPageTexts(page) {
    if (!page || !page.Texts || page.Texts.length === 0) {
        return '';
    }

    const lines = {};
    page.Texts.forEach(t => {
        // Quantize Y coordinate to group words on roughly the same line
        const y = Math.round(t.y * 2) / 2;
        lines[y] = lines[y] || [];
        lines[y].push(t);
    });

    const sortedY = Object.keys(lines).sort((a, b) => parseFloat(a) - parseFloat(b));
    return sortedY.map(y => {
        // Sort items on the same line from left to right (X coordinate)
        lines[y].sort((a, b) => a.x - b.x);
        return lines[y].map(t => {
            const runText = (t.R || []).map(r => safeDecode(r.T)).join('');
            return runText;
        }).join(' ').trim();
    }).filter(line => line.length > 0).join('\n');
}

// Regex to detect diagrams, architectural models, or flowcharts in slide content
const DIAGRAM_KEYWORDS = /\b(architecture|diagram|overview|pipeline|model|workflow|hierarchy|schema|matrix|uml|flowchart|lifecycle|memory\s+layout|entity|class\s+diagram|erd|use\s+case|state\s+machine|data\s+flow|sequence\s+diagram)\b/i;

// Extract PDF page-by-page using pdf2json, preserving slide numbers and reading order
function extractPdfSlideBySlide(inputFile, ocrWarning = null) {
    return new Promise((resolve, reject) => {
        const PDFParser = require("pdf2json");
        const pdfParser = new PDFParser(null, 1);

        pdfParser.on("pdfParser_dataError", errData => {
            reject(errData.parserError || errData);
        });

        pdfParser.on("pdfParser_dataReady", pdfData => {
            const pages = pdfData.Pages || [];
            const totalPages = pages.length;
            const visualPages = [];
            const hybridPages = [];
            const sections = [];

            pages.forEach((page, idx) => {
                const slideNum = idx + 1;
                const pageText = formatPageTexts(page);
                const charCount = pageText.length;
                const fillsCount = page.Fills ? page.Fills.length : 0;
                const linesCount = (page.Lines ? page.Lines.length : 0) + (page.HLines ? page.HLines.length : 0) + (page.VLines ? page.VLines.length : 0);
                const hasVectorDrawings = (fillsCount + linesCount) >= 4;
                const hasDiagramKeywords = DIAGRAM_KEYWORDS.test(pageText);

                let slideBlock = `\n---\n### 📄 Slide ${slideNum}\n\n`;

                if (charCount < 40) {
                    visualPages.push(slideNum);
                    slideBlock += `> [!warning] Visual / Low-Text Slide (Density: ${charCount} chars)\n> Contains visual diagram, table, or scanned illustration. Inspect directly with \`read_file\` on page ${slideNum} to convert diagrams to Mermaid or math to LaTeX.\n\n`;
                } else if (hasVectorDrawings || hasDiagramKeywords) {
                    hybridPages.push(slideNum);
                    const reason = hasDiagramKeywords ? 'Diagram/Model keywords' : 'Vector drawings';
                    slideBlock += `> [!note] Hybrid Visual Slide (${reason} detected)\n> Contains architectural diagram, flowchart, or structured schema alongside text. Verify visual layout via \`read_file\` on page ${slideNum} and transcribe diagram components into Mermaid.\n\n`;
                }

                if (pageText.length > 0) {
                    slideBlock += pageText + '\n';
                }

                sections.push(slideBlock);
            });

            const baseName = path.basename(inputFile);
            let header = `# Course Material: ${baseName}\n\n`;
            header += `> [!info] Document Metadata & Slide Audit\n`;
            header += `> - **Source File**: \`${baseName}\`\n`;
            header += `> - **Total Slides / Pages**: ${totalPages}\n`;
            header += `> - **Visual / Low-Text Slides Flagged**: ${visualPages.length > 0 ? visualPages.join(', ') : 'None'}\n`;
            header += `> - **Hybrid (Text + Diagram) Slides Flagged**: ${hybridPages.length > 0 ? hybridPages.join(', ') : 'None'}\n`;
            header += `> - **Detail Preservation Mandate**: All ${totalPages} slides must be fully transcribed with no omitted code, formulas, or examples.\n\n`;

            if (ocrWarning) {
                header += `> [!warning] OCR Notice\n> AnyDoc notice: ${ocrWarning}. Verbatim slide-by-slide text layer preserved below.\n\n`;
            }

            if (totalPages > 45) {
                header += `> [!tip] Large Document Recommended Action\n> This document contains ${totalPages} pages (> 45). To ensure maximum detail retention and avoid context truncation, consider chunking:\n> \`node .agents/skills/pdf-extractor/scripts/split_pdf.js "${inputFile}" --chunk 20\`\n\n`;
            }

            header += `---\n\n`;
            resolve({
                totalPages,
                visualPages,
                hybridPages,
                markdown: header + sections.join('')
            });
        });

        pdfParser.loadPDF(inputFile);
    });
}

// Quick pre-flight inspection of a PDF
async function analyzePdf(inputFile) {
    console.log(`\n========================================`);
    console.log(`📋 Pre-Flight Document Analysis: ${path.basename(inputFile)}`);
    console.log(`========================================`);

    const stats = fs.statSync(inputFile);
    console.log(`File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size.toLocaleString()} bytes)`);

    const ext = path.extname(inputFile).toLowerCase();
    if (ext !== '.pdf') {
        console.log(`Document Type: ${ext.toUpperCase()}`);
        console.log(`Recommended Mode: AnyDoc Engine (--mode anydoc)`);
        console.log(`========================================\n`);
        return;
    }

    const { PDFDocument } = require('pdf-lib');
    const bytes = fs.readFileSync(inputFile);
    const pdfDoc = await PDFDocument.load(bytes);
    const pageCount = pdfDoc.getPageCount();

    console.log(`Total Pages / Slides: ${pageCount}`);

    // Quick text audit
    const result = await extractPdfSlideBySlide(inputFile);
    const visualCount = result.visualPages.length;
    const hybridCount = result.hybridPages.length;
    const textPercent = (((pageCount - visualCount) / pageCount) * 100).toFixed(1);

    console.log(`Text-Searchable Slides: ${pageCount - visualCount} / ${pageCount} (${textPercent}%)`);
    console.log(`Visual/Diagram-Only Slides: ${visualCount} ${visualCount > 0 ? `(Slides: ${result.visualPages.slice(0, 10).join(', ')}${visualCount > 10 ? '...' : ''})` : ''}`);
    console.log(`Hybrid (Text + Diagram) Slides: ${hybridCount} ${hybridCount > 0 ? `(Slides: ${result.hybridPages.slice(0, 10).join(', ')}${hybridCount > 10 ? '...' : ''})` : ''}`);

    console.log(`\n--- Recommendations for Maximum Detail Preservation ---`);
    if (pageCount > 45) {
        console.log(`⚠️  Large PDF (${pageCount} pages > 45):`);
        console.log(`   Run chunk splitting to prevent detail loss:`);
        console.log(`   node .agents/skills/pdf-extractor/scripts/split_pdf.js "${inputFile}" --chunk 20`);
    } else {
        console.log(`✅ Page count within optimal bounds (${pageCount} <= 45).`);
    }

    if (visualCount > 0 || hybridCount > 0) {
        console.log(`🔍 Visual Slides Detected: ${visualCount + hybridCount} slides require multimodal inspection via \`read_file\` for diagrams.`);
    }

    console.log(`💡 Extraction Command:`);
    console.log(`   node .agents/skills/pdf-extractor/scripts/extract_document.js "${inputFile}" --mode auto`);
    console.log(`========================================\n`);
}

async function extractDocument() {
    const args = process.argv.slice(2);
    if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
        console.log("Usage: node extract_document.js <input_file> [options]");
        console.log("Options:");
        console.log("  -a, --analyze               Quick pre-flight analysis (pages, diagrams, recommendations)");
        console.log("  -o, --out <path>            Specify output Markdown file path");
        console.log("  --mode <auto|text|anydoc>   Extraction mode (default: auto)");
        console.log("Supported formats: PDF, DOCX, PPTX, XLSX, EPUB, RTF, CSV, ODT, ODP, ODS");
        process.exit(args.length === 0 ? 1 : 0);
    }

    const inputFile = path.resolve(args[0]);
    if (!fs.existsSync(inputFile)) {
        console.error(`Error: File not found: ${inputFile}`);
        process.exit(1);
    }

    // Check if analyze mode requested
    if (args.includes('-a') || args.includes('--analyze')) {
        await analyzePdf(inputFile);
        process.exit(0);
    }

    // Determine output path (Hardened Scratch Isolation: defaults to OS temp directory to protect vault from clutter)
    let outputFile = null;
    const oIndex = args.indexOf('-o') !== -1 ? args.indexOf('-o') : args.indexOf('--out');
    if (oIndex !== -1 && args[oIndex + 1]) {
        outputFile = path.resolve(args[oIndex + 1]);
    } else {
        const fileStem = path.basename(inputFile, path.extname(inputFile));
        outputFile = path.join(os.tmpdir(), `${fileStem}_extracted_${Date.now()}.md`);
    }

    // Determine mode
    let mode = 'auto';
    const mIndex = args.indexOf('--mode');
    if (mIndex !== -1 && args[mIndex + 1]) {
        mode = args[mIndex + 1].toLowerCase();
    }

    const ext = path.extname(inputFile).toLowerCase();
    let finalMarkdown = '';

    console.log(`[Extractor] Processing: ${path.basename(inputFile)} (Mode: ${mode})`);

    if (ext === '.pdf') {
        if (mode === 'text') {
            // Force verbatim slide-by-slide text extraction
            console.log(`[pdf2json] Extracting slide-by-slide text layout...`);
            const res = await extractPdfSlideBySlide(inputFile);
            finalMarkdown = res.markdown;
            console.log(`[pdf2json] Extracted ${res.totalPages} slides (${finalMarkdown.length} chars). Visual slides flagged: ${res.visualPages.length}, Hybrid: ${res.hybridPages.length}`);
        } else if (mode === 'anydoc') {
            // Force AnyDoc
            const anydoc = await import('@firecrawl/anydoc');
            console.log(`[AnyDoc] Converting to structured Markdown...`);
            finalMarkdown = await anydoc.toMarkdown(inputFile);
            console.log(`[AnyDoc] Extracted ${finalMarkdown.length} characters.`);
        } else {
            // Mode: auto (Best of both worlds for Maximum Detail Preservation)
            // Extract slide-by-slide verbatim text first to ensure zero code or details are lost
            console.log(`[Auto] Parsing slide-by-slide text layout to ensure 100% detail preservation...`);
            const slideResult = await extractPdfSlideBySlide(inputFile);

            // Also attempt AnyDoc for high-level structure if possible
            let anydocMd = null;
            try {
                const anydoc = await import('@firecrawl/anydoc');
                console.log(`[AnyDoc] Extracting structural outline...`);
                anydocMd = await anydoc.toMarkdown(inputFile);
            } catch (anyErr) {
                console.log(`[AnyDoc] Note: ${anyErr.message}`);
            }

            if (anydocMd && anydocMd.length > 500) {
                // Combine: Structural overview + Verbatim slide transcript
                finalMarkdown = slideResult.markdown + `\n\n---\n\n## 📑 AnyDoc Structured Outline Reference\n\n` + anydocMd;
            } else {
                finalMarkdown = slideResult.markdown;
            }
            console.log(`[Auto] Combined extraction complete: ${slideResult.totalPages} slides (${slideResult.visualPages.length} visual, ${slideResult.hybridPages.length} hybrid flagged), ${finalMarkdown.length} characters.`);
        }
    } else {
        // Office documents (.docx, .pptx, .xlsx)
        console.log(`[AnyDoc] Parsing document ${ext}...`);
        const anydoc = await import('@firecrawl/anydoc');
        let rawExtracted = await anydoc.toMarkdown(inputFile);
        
        // If PPTX, normalize slide delimiters if separated by horizontal rules
        if (ext === '.pptx' && rawExtracted.includes('---')) {
            const rawSections = rawExtracted.split(/\n---\n/);
            if (rawSections.length > 1) {
                let slideIndex = 1;
                rawExtracted = rawSections.map(sec => {
                    return `\n---\n### 📄 Slide ${slideIndex++}\n\n` + sec.trim();
                }).join('\n\n');
            }
        }
        
        const baseName = path.basename(inputFile);
        let header = `# Course Material: ${baseName}\n\n`;
        header += `> [!info] Document Metadata\n`;
        header += `> - **Source File**: \`${baseName}\`\n`;
        header += `> - **Format**: \`${ext.toUpperCase()}\`\n`;
        header += `> - **Detail Preservation Mandate**: All content must be fully transcribed with no omitted code, formulas, or examples.\n\n---\n\n`;
        finalMarkdown = header + rawExtracted;
        console.log(`[AnyDoc] Successfully extracted ${finalMarkdown.length} characters.`);
    }

    // Save to output file
    fs.writeFileSync(outputFile, finalMarkdown, 'utf8');
    console.log(`[Success] Saved extracted content to: ${outputFile}`);
}

extractDocument().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
});
