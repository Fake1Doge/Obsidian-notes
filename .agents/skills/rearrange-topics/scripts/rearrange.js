const fs = require('fs');
const path = require('path');

function cleanTitleText(rest) {
    if (!rest) return '';
    // Strip leading colons, dashes, dots, and spaces
    return rest.replace(/^[\:\-\.\s]+/, '').trim();
}

function rearrangeHeadings(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const hasCRLF = content.includes('\r\n');
    // Normalize newlines before splitting
    content = content.replace(/\r\n/g, '\n');
    const lines = content.split('\n');

    // Regexes:
    // 1. Main Topic (e.g., "# Chapter 1: Intro")
    // Group 1: hashes, Group 2: Prefix (word), Group 3: number, Group 4: rest
    const mainTopicRegex = /^(#+)\s+([A-Za-z]+)\s+(\d+)([\:\-\.\s]+.*)?$/;

    // 2. Subtopic (e.g., "## 1.1 Intro" or "### 1.1.1 Importance")
    // Group 1: hashes, Group 2: digits/dots, Group 3: rest
    const subtopicRegex = /^(#+)\s+(\d+(?:\.\d+)*)([\:\-\.\s]+.*)?$/;

    const prefixCounts = {};
    const validPrefixes = new Set([
        'chapter', 'topic', 'week', 'lecture', 'part', 'section', 
        'module', 'unit', 'lab', 'tutorial', 'assignment', 
        'appendix', 'project', 'step'
    ]);

    let inCodeBlock = false;
    let inFrontMatter = false;
    const matches = [];

    // Check if the file starts with frontmatter
    if (lines.length > 0 && lines[0].trim() === '---') {
        inFrontMatter = true;
    }

    // First pass: count main topic prefixes to find the most common one
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Handle frontmatter toggle
        if (inFrontMatter && i > 0 && line.trim() === '---') {
            inFrontMatter = false;
            continue;
        }
        if (inFrontMatter) continue;

        if (line.trim().startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            continue;
        }
        if (inCodeBlock) continue;

        const match = line.match(mainTopicRegex);
        if (match) {
            const prefix = match[2].toLowerCase();
            if (validPrefixes.has(prefix)) {
                prefixCounts[prefix] = (prefixCounts[prefix] || 0) + 1;
                matches.push({ index: i, type: 'main', match: match });
            }
        } else {
            const subMatch = line.match(subtopicRegex);
            if (subMatch) {
                const level = subMatch[1].length;
                if (level === 1) {
                    // It is a level 1 heading without a prefix (e.g. "# 7 Functional Modelling")
                    // We treat level 1 headings always as main topics (Chapters/Topics)
                    let rest = subMatch[3] || '';
                    const cleanRest = cleanTitleText(rest);
                    const simulatedMatch = [subMatch[0], subMatch[1], 'Chapter', subMatch[2], cleanRest ? `: ${cleanRest}` : ''];
                    matches.push({ index: i, type: 'main', match: simulatedMatch });
                } else {
                    matches.push({ index: i, type: 'sub', match: subMatch });
                }
            }
        }
    }

    // Determine the most common prefix for main topics
    let mostCommonPrefix = '';
    let maxCount = 0;
    for (const [prefix, count] of Object.entries(prefixCounts)) {
        if (count > maxCount) {
            maxCount = count;
            mostCommonPrefix = prefix;
        }
    }

    if (mostCommonPrefix) {
        // Capitalize first letter of most common prefix
        mostCommonPrefix = mostCommonPrefix.charAt(0).toUpperCase() + mostCommonPrefix.slice(1);
    } else {
        mostCommonPrefix = 'Chapter'; // Fallback default
    }

    // Second pass: renumber headings sequentially and hierarchically
    const currentNums = Array(10).fill(0);
    let mainTopicRenumberedCount = 0;
    let subtopicRenumberedCount = 0;

    for (const item of matches) {
        const { index, type, match } = item;
        const hashes = match[1];
        const level = hashes.length;

        if (level >= currentNums.length) {
            continue; // Ignore excessively deep headings to prevent out of bounds
        }

        // Increment the current level count
        currentNums[level]++;

        // Reset all levels below the current level to 0
        for (let i = level + 1; i < currentNums.length; i++) {
            currentNums[i] = 0;
        }

        // Ensure parent levels are initialized to at least 1 if they are 0
        for (let i = 1; i < level; i++) {
            if (currentNums[i] === 0) {
                currentNums[i] = 1;
            }
        }

        if (type === 'main') {
            const cleanTitle = cleanTitleText(match[4]);
            lines[index] = `${hashes} ${mostCommonPrefix} ${currentNums[level]}${cleanTitle ? ': ' + cleanTitle : ''}`;
            mainTopicRenumberedCount++;
        } else if (type === 'sub') {
            const cleanTitle = cleanTitleText(match[3]);
            const hierarchicalNumber = currentNums.slice(1, level + 1).join('.');
            lines[index] = `${hashes} ${hierarchicalNumber}${cleanTitle ? ' ' + cleanTitle : ''}`;
            subtopicRenumberedCount++;
        }
    }

    // Write back with appropriate newline
    const joinChar = hasCRLF ? '\r\n' : '\n';
    fs.writeFileSync(filePath, lines.join(joinChar), 'utf8');
    console.log(`Success: Renumbered ${mainTopicRenumberedCount} main topics (using prefix '${mostCommonPrefix}') and ${subtopicRenumberedCount} subtopics sequentially.`);
}

const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error("Usage: node rearrange.js <file-path>");
    process.exit(1);
}

rearrangeHeadings(args[0]);
