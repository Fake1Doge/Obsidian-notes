#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Target knowledge base files
const defaultFiles = ['knowledge_Y1.md', 'knowledge_Y2.md'];
const workspaceRoot = process.cwd();

// Parse CLI flags
const args = process.argv.slice(2);
const fixMode = args.includes('--fix');
const explicitFiles = args.filter(a => !a.startsWith('--'));

const targetFiles = explicitFiles.length > 0 
    ? explicitFiles.map(f => path.resolve(workspaceRoot, f))
    : defaultFiles.map(f => path.resolve(workspaceRoot, f)).filter(f => fs.existsSync(f));

if (targetFiles.length === 0) {
    console.error('No markdown files found to validate.');
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
    const headingList = [];
    const lines = content.split('\n');
    for (const line of lines) {
        const match = line.match(/^#+\s+(.+)$/);
        if (match) {
            const h = match[1].trim();
            headings.add(h);
            headingList.push(h);
        }
    }
    const result = { set: headings, list: headingList };
    fileHeadingsCache.set(filePath, result);
    return result;
}

// Normalize a heading string for fuzzy anchor matching
function normalizeHeading(str) {
    if (!str) return '';
    return str
        .toLowerCase()
        // Remove leading chapter/topic/number prefix e.g. "1.5.2 ", "Chapter 1: "
        .replace(/^(chapter|topic|week|lecture|module|unit|part|section|lab|tutorial)\s+\d+(?:\.\d+)*[\:\-\.\s]*/i, '')
        .replace(/^\d+(?:\.\d+)*[\:\-\.\s]*/, '')
        // Remove markdown formatting like backticks, asterisks, brackets, quotes
        .replace(/[`\*_"'~\[\]\(\)\{\}\\]/g, '')
        // Remove non-alphanumeric chars except space
        .replace(/[^\p{L}\p{N}\s]/gu, '')
        .replace(/\s+/g, ' ')
        .trim();
}

// Find closest heading candidate in target note
function findBestHeadingMatch(headingsList, targetAnchor) {
    if (!headingsList || headingsList.length === 0) return null;

    const normTarget = normalizeHeading(targetAnchor);
    if (!normTarget || normTarget.length < 3) return null;

    // 1. Check exact normalized match
    for (const h of headingsList) {
        if (normalizeHeading(h) === normTarget) {
            return h;
        }
    }

    // 2. Check substring inclusion (one contains the other)
    for (const h of headingsList) {
        const normH = normalizeHeading(h);
        if (normH.length >= 6 && normTarget.length >= 6) {
            if (normH.includes(normTarget) || normTarget.includes(normH)) {
                return h;
            }
        }
    }

    // 3. Word-token overlap score
    const targetWords = normTarget.split(/\s+/).filter(w => w.length > 2);
    if (targetWords.length >= 2) {
        let bestCandidate = null;
        let maxOverlap = 0;
        for (const h of headingsList) {
            const hWords = new Set(normalizeHeading(h).split(/\s+/).filter(w => w.length > 2));
            let overlap = 0;
            for (const tw of targetWords) {
                if (hWords.has(tw)) overlap++;
            }
            const ratio = overlap / targetWords.length;
            if (ratio >= 0.6 && overlap > maxOverlap) {
                maxOverlap = overlap;
                bestCandidate = h;
            }
        }
        if (bestCandidate) return bestCandidate;
    }

    return null;
}

let totalLinksChecked = 0;
let totalBrokenLinks = 0;
let totalFixedLinks = 0;
const brokenReport = [];

for (const kbFile of targetFiles) {
    const kbRelPath = path.relative(workspaceRoot, kbFile);
    console.log(`\nAuditing File: ${kbRelPath}`);
    let content = fs.readFileSync(kbFile, 'utf8');
    const hasCRLF = content.includes('\r\n');
    const lines = content.replace(/\r\n/g, '\n').split('\n');

    let fileLinks = 0;
    let fileBroken = 0;
    let fileFixed = 0;
    let modified = false;

    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
        let line = lines[lineIdx];

        // Match all [[...]] patterns safely
        const wikilinkPattern = /\[\[([^[\]]+)\]\]/g;
        let newLine = line;
        let lineMatches = [];
        let m;

        while ((m = wikilinkPattern.exec(line)) !== null) {
            lineMatches.push({ raw: m[0], inner: m[1], index: m.index });
        }

        for (const item of lineMatches) {
            // Split alias on unescaped or escaped pipe: | or \|
            const parts = item.inner.split(/\\?\|/);
            const linkPart = parts[0].trim();
            const aliasPart = parts.length > 1 ? parts.slice(1).join('|').trim() : null;

            // Check if there is an anchor (#)
            const hashIdx = linkPart.indexOf('#');
            if (hashIdx === -1) {
                // Link is to note file only, no anchor
                continue;
            }

            totalLinksChecked++;
            fileLinks++;

            let notePart = linkPart.substring(0, hashIdx).trim();
            let anchorTarget = linkPart.substring(hashIdx + 1).replace(/\\+$/, '').trim();

            let targetAbsPath = null;
            if (notePart.length === 0) {
                // Same-note link: [[#Anchor]]
                targetAbsPath = kbFile;
                notePart = path.basename(kbFile);
            } else {
                if (!notePart.endsWith('.md')) {
                    notePart += '.md';
                }
                targetAbsPath = path.resolve(workspaceRoot, notePart);
            }

            const headingData = getFileHeadings(targetAbsPath);

            if (!headingData) {
                totalBrokenLinks++;
                fileBroken++;
                brokenReport.push({
                    kbFile: kbRelPath,
                    line: lineIdx + 1,
                    note: notePart,
                    anchor: anchorTarget,
                    reason: 'Target note file does not exist',
                    candidate: null
                });
            } else if (!headingData.set.has(anchorTarget)) {
                // Heading anchor not found! Look for candidate match
                const candidate = findBestHeadingMatch(headingData.list, anchorTarget);

                if (fixMode && candidate) {
                    // Auto-fix the link
                    const escapedPipe = line.includes('\\|') ? '\\|' : '|';
                    const replacementInner = aliasPart !== null 
                        ? `${linkPart.substring(0, hashIdx)}#${candidate}${escapedPipe}${aliasPart}`
                        : `${linkPart.substring(0, hashIdx)}#${candidate}`;

                    newLine = newLine.replace(item.raw, `[[${replacementInner}]]`);
                    fileFixed++;
                    totalFixedLinks++;
                    modified = true;
                    console.log(`  [FIXED L${lineIdx + 1}] #${anchorTarget} -> #${candidate}`);
                } else {
                    totalBrokenLinks++;
                    fileBroken++;
                    brokenReport.push({
                        kbFile: kbRelPath,
                        line: lineIdx + 1,
                        note: notePart,
                        anchor: anchorTarget,
                        reason: 'Heading anchor not found in target note',
                        candidate: candidate
                    });
                }
            }
        }

        lines[lineIdx] = newLine;
    }

    if (fixMode && modified) {
        const outContent = lines.join(hasCRLF ? '\r\n' : '\n');
        fs.writeFileSync(kbFile, outContent, 'utf8');
        console.log(`  -> Auto-repaired and saved ${fileFixed} links in ${kbRelPath}.`);
    }

    console.log(`  -> Checked ${fileLinks} anchor links (${fileBroken} broken, ${fileFixed} fixed).`);
}

console.log('\n========================================');
console.log('       WIKILINK VALIDATION REPORT       ');
console.log('========================================');
console.log(`Total Wikilinks Audited: ${totalLinksChecked}`);
console.log(`Total Valid Anchors:    ${totalLinksChecked - totalBrokenLinks}`);
console.log(`Total Broken Anchors:   ${totalBrokenLinks}`);
if (fixMode) {
    console.log(`Total Auto-Repaired:    ${totalFixedLinks}`);
}

if (totalBrokenLinks > 0) {
    console.log('\n[FAIL] Broken Wikilinks Found:');
    brokenReport.forEach((b, i) => {
        let msg = `  ${i + 1}. [${b.kbFile}:${b.line}] -> [[${b.note}#${b.anchor}]] (${b.reason})`;
        if (b.candidate) {
            msg += `\n     💡 Candidate Match: "${b.candidate}"`;
        }
        console.log(msg);
    });
    if (!fixMode) {
        console.log('\n💡 Tip: Run `node validate_links.js --fix` to auto-repair candidate heading anchors.');
    }
    process.exit(1);
} else {
    console.log('\n[SUCCESS] All knowledge base wikilinks resolve to valid heading anchors.');
    process.exit(0);
}
