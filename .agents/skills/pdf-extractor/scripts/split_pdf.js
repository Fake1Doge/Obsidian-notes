const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function splitPdf() {
    const inputFile = process.argv[2];
    const startPageStr = process.argv[3];
    const endPageStr = process.argv[4];

    if (!inputFile) {
        console.error("Usage: node split_pdf.js <input_pdf_path> [<start_page> <end_page>]");
        console.error("Note: If no start and end pages are provided, it splits the PDF in half.");
        process.exit(1);
    }

    const originalPdfBytes = fs.readFileSync(inputFile);
    const pdfDoc = await PDFDocument.load(originalPdfBytes);
    const numberOfPages = pdfDoc.getPages().length;

    let start = 0;
    let end = numberOfPages - 1;

    // Output directory (same as input)
    const outputDir = path.dirname(inputFile);
    const baseName = path.basename(inputFile, '.pdf');

    if (startPageStr && endPageStr) {
        // 1-based indexing for user input
        start = parseInt(startPageStr, 10) - 1;
        end = parseInt(endPageStr, 10) - 1;
        if (start < 0) start = 0;
        if (end >= numberOfPages) end = numberOfPages - 1;

        if (start > end) {
            console.error(`Error: start page (${start + 1}) cannot be greater than end page (${end + 1}) or total pages (${numberOfPages}).`);
            process.exit(1);
        }

        const doc = await PDFDocument.create();
        const pagesToCopy = Array.from({ length: end - start + 1 }, (_, i) => i + start);
        const copiedPages = await doc.copyPages(pdfDoc, pagesToCopy);
        copiedPages.forEach((page) => doc.addPage(page));
        
        const pdfBytes = await doc.save();
        const outputFile = path.join(outputDir, `${baseName}_pages_${start + 1}_to_${end + 1}.pdf`);
        fs.writeFileSync(outputFile, pdfBytes);
        console.log(`Splitting complete. Saved to ${outputFile}`);
    } else {
        // Split roughly in half if no page numbers provided
        const middle = Math.ceil(numberOfPages / 2);

        const doc1 = await PDFDocument.create();
        const copiedPages1 = await doc1.copyPages(pdfDoc, Array.from({ length: middle }, (_, i) => i));
        copiedPages1.forEach((page) => doc1.addPage(page));
        const pdfBytes1 = await doc1.save();
        const outputFile1 = path.join(outputDir, `${baseName}_part1.pdf`);
        fs.writeFileSync(outputFile1, pdfBytes1);

        const doc2 = await PDFDocument.create();
        const copiedPages2 = await doc2.copyPages(pdfDoc, Array.from({ length: numberOfPages - middle }, (_, i) => i + middle));
        copiedPages2.forEach((page) => doc2.addPage(page));
        const pdfBytes2 = await doc2.save();
        const outputFile2 = path.join(outputDir, `${baseName}_part2.pdf`);
        fs.writeFileSync(outputFile2, pdfBytes2);

        console.log(`Splitting complete. Saved to ${outputFile1} and ${outputFile2}`);
    }
}

splitPdf().catch(console.error);
