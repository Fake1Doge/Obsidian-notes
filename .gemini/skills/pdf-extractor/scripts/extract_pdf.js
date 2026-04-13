const fs = require('fs');
const pdf = require('pdf-parse');

const inputFile = process.argv[2];
if (!inputFile) {
    console.error("Usage: node extract_pdf.js <input_pdf_path>");
    process.exit(1);
}

let dataBuffer = fs.readFileSync(inputFile);

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('temp_pdf_text.txt', data.text);
    console.log("Extraction complete. Text saved to temp_pdf_text.txt");
}).catch(function(error){
    console.error("Error reading pdf:", error);
});
