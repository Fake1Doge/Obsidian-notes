const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Y1S2/AKW103/CHAPTER 8 Planning+in+Organisation.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('temp_pdf_text.txt', data.text);
}).catch(function(error){
    console.error("Error reading pdf:", error);
});
