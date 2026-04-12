const fs = require('fs');
const pdf = require('pdf-parse');

const args = process.argv.slice(2);
const pdfPath = args[0];
const outPath = args[1];

let dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync(outPath, data.text);
}).catch(function(error) {
    console.error(error);
});