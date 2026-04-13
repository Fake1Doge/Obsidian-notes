const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

async function splitPdf() {
    const originalPdfBytes = fs.readFileSync('Y1S2/AKW103/CHAPTER 8 Planning+in+Organisation.pdf');
    const pdfDoc = await PDFDocument.load(originalPdfBytes);
    const numberOfPages = pdfDoc.getPages().length;

    // Split roughly in half
    const middle = Math.ceil(numberOfPages / 2);

    const doc1 = await PDFDocument.create();
    const copiedPages1 = await doc1.copyPages(pdfDoc, Array.from({ length: middle }, (_, i) => i));
    copiedPages1.forEach((page) => doc1.addPage(page));
    const pdfBytes1 = await doc1.save();
    fs.writeFileSync('temp_part1.pdf', pdfBytes1);

    const doc2 = await PDFDocument.create();
    const copiedPages2 = await doc2.copyPages(pdfDoc, Array.from({ length: numberOfPages - middle }, (_, i) => i + middle));
    copiedPages2.forEach((page) => doc2.addPage(page));
    const pdfBytes2 = await doc2.save();
    fs.writeFileSync('temp_part2.pdf', pdfBytes2);

    console.log("Splitting complete.");
}

splitPdf().catch(console.error);
