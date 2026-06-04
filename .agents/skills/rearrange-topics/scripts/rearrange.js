const fs = require('fs');

function rearrangeHeadings(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }

    let content = fs.readFileSync(filePath, 'utf8');
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
    const validPrefixes = new Set(['chapter', 'topic', 'week', 'lecture', 'part', 'section', 'module', 'unit']);

    let inCodeBlock = false;
    const matches = [];

    // First pass: count main topic prefixes to find the most common one
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
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
                matches.push({ index: i, type: 'sub', match: subMatch });
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
            const rest = match[4] || '';
            lines[index] = `${hashes} ${mostCommonPrefix} ${currentNums[level]}${rest}`;
            mainTopicRenumberedCount++;
        } else if (type === 'sub') {
            const rest = match[3] || '';
            const hierarchicalNumber = currentNums.slice(1, level + 1).join('.');
            lines[index] = `${hashes} ${hierarchicalNumber}${rest}`;
            subtopicRenumberedCount++;
        }
    }

    // Write back with appropriate newline
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`Success: Renumbered ${mainTopicRenumberedCount} main topics (using prefix '${mostCommonPrefix}') and ${subtopicRenumberedCount} subtopics sequentially.`);
}

const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error("Usage: node rearrange.js <file-path>");
    process.exit(1);
}

rearrangeHeadings(args[0]);
