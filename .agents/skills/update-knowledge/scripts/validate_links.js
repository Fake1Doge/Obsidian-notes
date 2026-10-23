#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Target knowledge base files
const defaultFiles = ['knowledge_Y1.md', 'knowledge_Y2.md'];
const workspaceRoot = process.cwd();

const targetFiles = process.argv.slice(2).length > 0 
    ? process.argv.slice(2) 
    : defaultFiles.map(f => path.join(workspaceRoot, f)).filter(f => fs.existsSync(f));

if (targetFiles.length === 0) {
    console.error('No knowledge base files found to validate.');
    process.exit(1);
}

const fileHeadingsCache = new Map();

function getFileHeadings(filePath) {
    if (fileHeadingsCache.has(filePath)) {
        return fileHeadingsCache.get(filePath);
    }
    if (!fs.existsSync(filePath)) {
        fileHeadingsCache.set(filePath, null);
        return null;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    const headings = new Set();
    const lines = content.split('\n');
    for (const line of lines) {
        const match = line.match(/^#+\s+(.+)$/);
        if (match) {
            headings.add(match[1].trim());
        }
    }
    fileHeadingsCache.set(filePath, headings);
    return headings;
}

let totalLinksChecked = 0;
let totalBrokenLinks = 0;
const brokenReport = [];

const wikilinkRegex = /\[\[([^#\|\]]+)#([^\|\]]+)(?:\|[^\]]+)?\]\]/g;

for (const kbFile of targetFiles) {
    const kbRelPath = path.relative(workspaceRoot, kbFile);
    console.log(`\nAuditing Knowledge Base: ${kbRelPath}`);
    const content = fs.readFileSync(kbFile, 'utf8');
    const lines = content.split('\n');

    let fileLinks = 0;
    let fileBroken = 0;

    lines.forEach((line, lineIdx) => {
        let match;
        while ((match = wikilinkRegex.exec(line)) !== null) {
            totalLinksChecked++;
            fileLinks++;
            let noteTarget = match[1].trim();
            const anchorTarget = match[2].trim();

            if (!noteTarget.endsWith('.md')) {
                noteTarget += '.md';
            }

            const noteAbsPath = path.resolve(workspaceRoot, noteTarget);
            const headings = getFileHeadings(noteAbsPath);

            if (!headings) {
                totalBrokenLinks++;
                fileBroken++;
                brokenReport.push({
                    kbFile: kbRelPath,
                    line: lineIdx + 1,
                    note: noteTarget,
                    anchor: anchorTarget,
                    reason: 'Note file does not exist'
                });
            } else if (!headings.has(anchorTarget)) {
                totalBrokenLinks++;
                fileBroken++;
                brokenReport.push({
                    kbFile: kbRelPath,
                    line: lineIdx + 1,
                    note: noteTarget,
                    anchor: anchorTarget,
                    reason: 'Heading anchor not found in target note'
                });
            }
        }
    });

    console.log(`  -> Checked ${fileLinks} links (${fileBroken} broken).`);
}

console.log('\n========================================');
console.log('       WIKILINK VALIDATION REPORT       ');
console.log('========================================');
console.log(`Total Wikilinks Audited: ${totalLinksChecked}`);
console.log(`Total Valid Anchors:    ${totalLinksChecked - totalBrokenLinks}`);
console.log(`Total Broken Anchors:   ${totalBrokenLinks}`);

if (totalBrokenLinks > 0) {
    console.log('\n[FAIL] Broken Wikilinks Found:');
    brokenReport.forEach((b, i) => {
        console.log(`  ${i + 1}. [${b.kbFile}:${b.line}] -> [[${b.note}#${b.anchor}]] (${b.reason})`);
    });
    process.exit(1);
} else {
    console.log('\n[SUCCESS] All knowledge base wikilinks resolve to valid heading anchors.');
    process.exit(0);
}
