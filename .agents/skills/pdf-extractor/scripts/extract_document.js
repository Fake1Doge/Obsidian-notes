const fs = require('fs');
const path = require('path');

async function extractDocument() {
    const args = process.argv.slice(2);
    if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
        console.log("Usage: node extract_document.js <input_file> [-o <output_path>]");
        console.log("Supported formats: PDF, DOCX, PPTX, XLSX, EPUB, RTF, CSV, ODT, ODP, ODS");
        process.exit(args.length === 0 ? 1 : 0);
    }

    const inputFile = path.resolve(args[0]);
    if (!fs.existsSync(inputFile)) {
        console.error(`Error: File not found: ${inputFile}`);
        process.exit(1);
    }

    let outputFile = null;
    const oIndex = args.indexOf('-o');
    if (oIndex !== -1 && args[oIndex + 1]) {
        outputFile = path.resolve(args[oIndex + 1]);
    } else {
        const outputDir = path.dirname(inputFile);
        outputFile = path.join(outputDir, "temp_extracted_content.md");
    }

    const ext = path.extname(inputFile).toLowerCase();
    let anydoc = null;
    try {
        anydoc = await import('@firecrawl/anydoc');
    } catch (err) {
        // Fallback handled below
    }

    let markdownContent = null;

    // 1. Try AnyDoc extraction
    if (anydoc && typeof anydoc.toMarkdown === 'function') {
        try {
            console.log(`[AnyDoc] Parsing ${path.basename(inputFile)}...`);
            markdownContent = await anydoc.toMarkdown(inputFile);
            console.log(`[AnyDoc] Successfully extracted structured Markdown (${markdownContent.length} characters).`);
        } catch (err) {
            console.warn(`[AnyDoc] Note: ${err.message}`);
            if (ext === '.pdf') {
                console.log(`[Fallback] Attempting text-layer extraction via pdf2json...`);
                try {
                    markdownContent = await extractWithPdf2Json(inputFile, err.message);
                } catch (pdfErr) {
                    console.error(`[Fallback] Failed to parse PDF: ${pdfErr.message || pdfErr}`);
                    process.exit(1);
                }
            } else {
                console.error(`Error parsing document: ${err.message}`);
                process.exit(1);
            }
        }
    } else if (ext === '.pdf') {
        // AnyDoc not available, use pdf2json
        try {
            markdownContent = await extractWithPdf2Json(inputFile);
        } catch (pdfErr) {
            console.error(`Error parsing PDF: ${pdfErr.message || pdfErr}`);
            process.exit(1);
        }
    } else {
        console.error("Error: @firecrawl/anydoc could not be loaded and file is not a PDF.");
        process.exit(1);
    }

    // Save to output file
    fs.writeFileSync(outputFile, markdownContent, 'utf8');
    console.log(`Saved output to: ${outputFile}`);

    // If PDF, also maintain temp_pdf_text.txt for backwards compatibility
    if (ext === '.pdf') {
        const legacyTxtFile = path.join(path.dirname(inputFile), "temp_pdf_text.txt");
        try {
            fs.writeFileSync(legacyTxtFile, markdownContent, 'utf8');
        } catch (_) {}
    }
}

function extractWithPdf2Json(inputFile, ocrWarning = null) {
    return new Promise((resolve, reject) => {
        const PDFParser = require("pdf2json");
        const pdfParser = new PDFParser(null, 1);
        pdfParser.on("pdfParser_dataError", errData => {
            reject(errData.parserError || errData);
        });
        pdfParser.on("pdfParser_dataReady", () => {
            const rawText = pdfParser.getRawTextContent();
            let header = "";
            if (ocrWarning) {
                header = `> [!warning] OCR Notice\n> This PDF contains pages requiring visual OCR (${ocrWarning}).\n> Text extracted below represents the native text layer. For visual diagrams or scanned slides, view them directly with \`view_file\`.\n\n---\n\n`;
            }
            resolve(header + rawText);
        });
        pdfParser.loadPDF(inputFile);
    });
}

extractDocument().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
});
