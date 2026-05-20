const fs = require('fs');
const PDFParser = require("pdf2json");

const inputFile = process.argv[2];
if (!inputFile) {
    console.error("Usage: node extract_pdf2.js <input_pdf_path>");
    process.exit(1);
}

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync("temp_pdf_text.txt", pdfParser.getRawTextContent());
    console.log("Done. Text saved to temp_pdf_text.txt");
});

pdfParser.loadPDF(inputFile);
