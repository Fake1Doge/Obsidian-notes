const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function splitPdf() {
    const rawArgs = process.argv.slice(2);
    if (rawArgs.length === 0 || rawArgs.includes('-h') || rawArgs.includes('--help')) {
        console.log("Usage:");
        console.log("  node split_pdf.js <input_pdf> <start_page> <end_page> [-o <output_dir>]  (Extract page range)");
        console.log("  node split_pdf.js <input_pdf> --chunk <size> [-o <output_dir>]           (Split into chunks of size)");
        console.log("  node split_pdf.js <input_pdf> [-o <output_dir>]                          (Default: 20-page chunks)");
        process.exit(rawArgs.length === 0 ? 1 : 0);
    }

    const inputFile = rawArgs[0];
    if (!fs.existsSync(inputFile)) {
        console.error(`Error: File not found: ${inputFile}`);
        process.exit(1);
    }

    // Check for custom output directory
    let outputDir = path.dirname(inputFile);
    const oIdx = rawArgs.indexOf('-o') !== -1 ? rawArgs.indexOf('-o') : rawArgs.indexOf('--out');
    if (oIdx !== -1 && rawArgs[oIdx + 1]) {
        outputDir = path.resolve(rawArgs[oIdx + 1]);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
    }

    // Filter out output args for positional/chunk parsing
    const args = [];
    for (let i = 0; i < rawArgs.length; i++) {
        if (i === oIdx || i === oIdx + 1) continue;
        args.push(rawArgs[i]);
    }

    const originalPdfBytes = fs.readFileSync(inputFile);
    const pdfDoc = await PDFDocument.load(originalPdfBytes);
    const numberOfPages = pdfDoc.getPages().length;
    const baseName = path.basename(inputFile, '.pdf');

    // Parse options
    let chunkMode = false;
    let chunkSize = 20;
    let startPage = null;
    let endPage = null;

    if (args[1] === '--chunk' || args[1] === '-c') {
        chunkMode = true;
        chunkSize = parseInt(args[2], 10);
        if (isNaN(chunkSize) || chunkSize <= 0) {
            console.error("Error: Chunk size must be a positive integer.");
            process.exit(1);
        }
    } else if (args[1] && args[2]) {
        startPage = parseInt(args[1], 10);
        endPage = parseInt(args[2], 10);
        if (isNaN(startPage) || isNaN(endPage)) {
            console.error("Error: Start page and end page must be numbers.");
            process.exit(1);
        }
    } else if (args.length === 1) {
        chunkMode = true;
        chunkSize = 20; // Default chunk size
    } else {
        console.error("Error: Invalid arguments.");
        process.exit(1);
    }

    console.log(`[split_pdf] Target PDF: ${baseName}.pdf (${numberOfPages} pages total)`);
    console.log(`[split_pdf] Destination: ${outputDir}`);

    if (chunkMode) {
        console.log(`[split_pdf] Splitting into chunks of ${chunkSize} pages...`);
        let partNum = 1;
        for (let i = 0; i < numberOfPages; i += chunkSize) {
            const doc = await PDFDocument.create();
            const start = i;
            const end = Math.min(i + chunkSize - 1, numberOfPages - 1);
            
            const pagesToCopy = Array.from({ length: end - start + 1 }, (_, index) => index + start);
            const copiedPages = await doc.copyPages(pdfDoc, pagesToCopy);
            copiedPages.forEach((page) => doc.addPage(page));

            const pdfBytes = await doc.save();
            const outputFile = path.join(outputDir, `${baseName}_part_${partNum}_pages_${start + 1}_to_${end + 1}.pdf`);
            fs.writeFileSync(outputFile, pdfBytes);
            console.log(`Saved part ${partNum} (Pages ${start + 1}-${end + 1}): ${outputFile}`);
            partNum++;
        }
        console.log(`[split_pdf] Chunk splitting complete (${partNum - 1} parts generated).`);
    } else {
        // Extract specific range
        let start = startPage - 1;
        let end = endPage - 1;

        if (start < 0) start = 0;
        if (end >= numberOfPages) end = numberOfPages - 1;

        if (start > end) {
            console.error(`Error: start page (${startPage}) cannot be greater than end page (${endPage}) or total pages (${numberOfPages}).`);
            process.exit(1);
        }

        const doc = await PDFDocument.create();
        const pagesToCopy = Array.from({ length: end - start + 1 }, (_, i) => i + start);
        const copiedPages = await doc.copyPages(pdfDoc, pagesToCopy);
        copiedPages.forEach((page) => doc.addPage(page));
        
        const pdfBytes = await doc.save();
        const outputFile = path.join(outputDir, `${baseName}_pages_${start + 1}_to_${end + 1}.pdf`);
        fs.writeFileSync(outputFile, pdfBytes);
        console.log(`[split_pdf] Extracted range saved to: ${outputFile}`);
    }
}

splitPdf().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
});
