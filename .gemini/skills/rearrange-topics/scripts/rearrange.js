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

    // regex: group 1 = '#'s, group 2 = Prefix (word), group 3 = number, group 4 = rest of title
    const regex = /^(#+)\s+([A-Za-z]+)\s+(\d+)([\:\-\s]+.*)?$/;
    
    const prefixCounts = {};
    const validPrefixes = new Set(['chapter', 'topic', 'week', 'lecture', 'part', 'section', 'module', 'unit']);
    
    const matches = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const match = line.match(regex);
        if (match) {
            const prefix = match[2].toLowerCase();
            if (validPrefixes.has(prefix)) {
                 prefixCounts[prefix] = (prefixCounts[prefix] || 0) + 1;
                 matches.push({ index: i, match: match });
            }
        }
    }

    if (matches.length === 0) {
        console.log("No numbered headings (Chapter, Topic, etc.) found.");
        return;
    }

    // Determine most common prefix
    let mostCommonPrefix = '';
    let maxCount = 0;
    for (const [prefix, count] of Object.entries(prefixCounts)) {
        if (count > maxCount) {
            maxCount = count;
            mostCommonPrefix = prefix;
        }
    }
    
    // Capitalize first letter of most common prefix
    mostCommonPrefix = mostCommonPrefix.charAt(0).toUpperCase() + mostCommonPrefix.slice(1);

    // Second pass: replace numbers
    let currentNumber = 1;
    for (const { index, match } of matches) {
        const hashes = match[1];
        const rest = match[4] || ''; // can be empty if no rest of title
        // Replace the line
        lines[index] = `${hashes} ${mostCommonPrefix} ${currentNumber}${rest}`;
        currentNumber++;
    }

    // Write back with appropriate newline
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`Success: Rearranged ${matches.length} headings to use prefix '${mostCommonPrefix}' and renumbered them sequentially.`);
}

const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error("Usage: node rearrange.js <file-path>");
    process.exit(1);
}

rearrangeHeadings(args[0]);
