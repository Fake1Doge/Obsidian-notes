const fs = require('fs');
const path = require('path');

// Helper to clean leading delimiters and trim whitespace from title
function cleanTitleText(rest) {
    if (!rest) return '';
    // Strip leading colons, dashes, dots, and spaces
    return rest.replace(/^[\:\-\.\s]+/, '').trim();
}

// Vault-wide wikilink synchronizer
function syncVaultWikilinks(workspaceRoot, targetFilePath, headingRenames) {
    if (headingRenames.size === 0) return;

    const targetAbs = path.resolve(targetFilePath);
    const relWithExt = path.relative(workspaceRoot, targetAbs).replace(/\\/g, '/');
    const relNoExt = relWithExt.replace(/\.md$/, '');
    const baseWithExt = path.basename(targetAbs);
    const baseNoExt = path.basename(targetAbs, '.md');

    // Possible note target names in wikilinks
    const targetNames = new Set([
        relWithExt,
        relNoExt,
        baseWithExt,
        baseNoExt
    ]);

    // Scan target directory and knowledge bases
    function getMdFiles(dir) {
        let results = [];
        if (!fs.existsSync(dir)) return results;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                results = results.concat(getMdFiles(fullPath));
            } else if (entry.isFile() && entry.name.endsWith('.md')) {
                results.push(fullPath);
            }
        }
        return results;
    }

    const mdFiles = getMdFiles(workspaceRoot);
    let totalUpdatedLinks = 0;
    let filesModified = 0;

    for (const file of mdFiles) {
        let fileContent = fs.readFileSync(file, 'utf8');
        const isSelf = path.resolve(file) === targetAbs;
        let modified = false;

        // Process wikilinks
        const wikilinkPattern = /\[\[([^[\]]+)\]\]/g;
        let newContent = fileContent.replace(wikilinkPattern, (match, inner) => {
            const parts = inner.split(/\\?\|/);
            const linkPart = parts[0].trim();
            const aliasPart = parts.length > 1 ? parts.slice(1).join('|').trim() : null;

            const hashIdx = linkPart.indexOf('#');
            if (hashIdx === -1) return match; // No anchor

            const notePart = linkPart.substring(0, hashIdx).trim();
            const anchorPart = linkPart.substring(hashIdx + 1).replace(/\\+$/, '').trim();

            const isMatchingTarget = isSelf 
                ? (notePart === '' || targetNames.has(notePart))
                : targetNames.has(notePart);

            if (isMatchingTarget && headingRenames.has(anchorPart)) {
                const newAnchor = headingRenames.get(anchorPart);
                totalUpdatedLinks++;
                modified = true;
                const escapedPipe = match.includes('\\|') ? '\\|' : '|';
                const newInner = aliasPart !== null
                    ? `${linkPart.substring(0, hashIdx)}#${newAnchor}${escapedPipe}${aliasPart}`
                    : `${linkPart.substring(0, hashIdx)}#${newAnchor}`;
                return `[[${newInner}]]`;
            }

            return match;
        });

        if (modified) {
            fs.writeFileSync(file, newContent, 'utf8');
            filesModified++;
            console.log(`  🔗 Synced updated heading links in: ${path.relative(workspaceRoot, file)}`);
        }
    }

    if (totalUpdatedLinks > 0) {
        console.log(`[Link Sync] Automatically updated ${totalUpdatedLinks} wikilink anchor(s) across ${filesModified} vault file(s).`);
    }
}

function rearrangeHeadings(filePath, options = {}) {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const hasCRLF = content.includes('\r\n');
    // Normalize newlines before splitting
    content = content.replace(/\r\n/g, '\n');
    const lines = content.split('\n');

    // Categories of valid prefixes
    const LECTURE_PREFIXES = new Set([
        'chapter', 'topic', 'week', 'lecture', 'module', 'unit', 'part', 'section'
    ]);
    const SPECIAL_PREFIXES = new Set([
        'lab', 'tutorial', 'assignment', 'appendix', 'project', 'step'
    ]);
    const VALID_PREFIXES = new Set([...LECTURE_PREFIXES, ...SPECIAL_PREFIXES]);

    // Regexes for parsing
    // 1. Heading with a prefix word and number: e.g. "Chapter 1: Title" or "Lab 2 - Title"
    const prefixNumberRegex = /^\s*([A-Za-z]+)\s+(\d+(?:\.\d+)*)([\:\-\.\s]+.*)?$/;
    // 2. Heading with just a number: e.g. "1.1 Title" or "2 Title"
    const justNumberRegex = /^\s*(\d+(?:\.\d+)*)([\:\-\.\s]+.*)?$/;

    let inCodeBlock = false;
    let inFrontMatter = false;
    const matches = [];
    const lecturePrefixCounts = {};

    // Check if the file starts with frontmatter
    if (lines.length > 0 && lines[0].trim() === '---') {
        inFrontMatter = true;
    }

    // First pass: scan all lines to find numbered headings and count lecture prefixes
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

        // Check if line starts with hashes
        const headingMatch = line.match(/^(#+)\s+(.*)$/);
        if (headingMatch) {
            const hashes = headingMatch[1];
            const level = hashes.length;
            const titlePart = headingMatch[2].trim();

            let parsed = null;

            // Attempt to match with prefix and number
            const matchA = titlePart.match(prefixNumberRegex);
            if (matchA) {
                const prefix = matchA[1];
                const prefixLower = prefix.toLowerCase();
                if (VALID_PREFIXES.has(prefixLower)) {
                    parsed = {
                        hasPrefix: true,
                        prefix: prefix,
                        prefixLower: prefixLower,
                        numStr: matchA[2],
                        rest: matchA[3] || ""
                    };
                }
            }

            // If prefix not valid/matched, check if it starts with just a number
            if (!parsed) {
                const matchB = titlePart.match(justNumberRegex);
                if (matchB) {
                    parsed = {
                        hasPrefix: false,
                        prefix: "",
                        prefixLower: "",
                        numStr: matchB[1],
                        rest: matchB[2] || ""
                    };
                }
            }

            if (parsed) {
                // If it is a level 1 heading and falls under LECTURE_PREFIXES or has no prefix
                if (level === 1) {
                    if (!parsed.hasPrefix || LECTURE_PREFIXES.has(parsed.prefixLower)) {
                        const p = parsed.hasPrefix ? parsed.prefixLower : 'chapter';
                        lecturePrefixCounts[p] = (lecturePrefixCounts[p] || 0) + 1;
                    }
                }
                matches.push({
                    index: i,
                    level: level,
                    parsed: parsed,
                    hashes: hashes,
                    originalHeading: titlePart
                });
            }
        }
    }

    // Determine the most common lecture prefix
    let mostCommonLecturePrefix = '';
    let maxCount = 0;
    for (const [prefix, count] of Object.entries(lecturePrefixCounts)) {
        if (count > maxCount) {
            maxCount = count;
            mostCommonLecturePrefix = prefix;
        }
    }

    if (mostCommonLecturePrefix) {
        mostCommonLecturePrefix = mostCommonLecturePrefix.charAt(0).toUpperCase() + mostCommonLecturePrefix.slice(1);
    } else {
        mostCommonLecturePrefix = 'Chapter'; // Default fallback
    }

    // Second pass: renumber headings sequentially and hierarchically
    const currentNums = Array(10).fill(0);
    let lectureCounter = 0;
    const specialCounters = {};
    let mainTopicRenumberedCount = 0;
    let subtopicRenumberedCount = 0;
    const specialStats = {};
    const headingRenames = new Map();

    for (const item of matches) {
        const { index, level, parsed, hashes, originalHeading } = item;

        if (level >= currentNums.length) {
            continue; // Ignore excessively deep headings
        }

        let newHeadingTitle = '';

        if (level === 1) {
            // Main topic heading (Level 1)
            let chosenPrefix = '';
            let assignedNumber = 0;

            if (!parsed.hasPrefix || LECTURE_PREFIXES.has(parsed.prefixLower)) {
                // Lecture topic
                lectureCounter++;
                assignedNumber = lectureCounter;
                chosenPrefix = mostCommonLecturePrefix;
            } else if (SPECIAL_PREFIXES.has(parsed.prefixLower)) {
                // Special section (Lab, Assignment, etc.)
                const pLower = parsed.prefixLower;
                specialCounters[pLower] = (specialCounters[pLower] || 0) + 1;
                assignedNumber = specialCounters[pLower];
                // Keep original prefix name properly capitalized
                chosenPrefix = parsed.prefix.charAt(0).toUpperCase() + parsed.prefix.slice(1).toLowerCase();
                
                specialStats[chosenPrefix] = (specialStats[chosenPrefix] || 0) + 1;
            }

            // Set current level 1 number and reset child levels
            currentNums[1] = assignedNumber;
            for (let i = 2; i < currentNums.length; i++) {
                currentNums[i] = 0;
            }

            const cleanTitle = cleanTitleText(parsed.rest);
            newHeadingTitle = `${chosenPrefix} ${assignedNumber}${cleanTitle ? ': ' + cleanTitle : ''}`;
            lines[index] = `${hashes} ${newHeadingTitle}`;
            mainTopicRenumberedCount++;
        } else {
            // Subtopic heading (Level > 1)
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

            const cleanTitle = cleanTitleText(parsed.rest);
            const hierarchicalNumber = currentNums.slice(1, level + 1).join('.');
            newHeadingTitle = `${hierarchicalNumber}${cleanTitle ? ' ' + cleanTitle : ''}`;
            lines[index] = `${hashes} ${newHeadingTitle}`;
            subtopicRenumberedCount++;
        }

        if (originalHeading !== newHeadingTitle) {
            headingRenames.set(originalHeading, newHeadingTitle);
        }
    }

    if (options.dryRun) {
        console.log(`[Dry Run] Would renumber ${headingRenames.size} headings in ${filePath}.`);
        for (const [oldH, newH] of headingRenames) {
            console.log(`   "${oldH}" -> "${newH}"`);
        }
        return;
    }

    // Write back with appropriate newline
    const joinChar = hasCRLF ? '\r\n' : '\n';
    fs.writeFileSync(filePath, lines.join(joinChar), 'utf8');

    // Build detailed stats output
    let statsStr = `${lectureCounter} lecture topics (using prefix '${mostCommonLecturePrefix}')`;
    const specialParts = Object.entries(specialStats).map(([pref, cnt]) => `${cnt} ${pref}s`);
    if (specialParts.length > 0) {
        statsStr += ` and special sections: ${specialParts.join(', ')}`;
    }

    console.log(`Success: Renumbered ${mainTopicRenumberedCount} main topics (${statsStr}) and ${subtopicRenumberedCount} subtopics sequentially.`);

    // Perform two-way link synchronization across vault if enabled
    if (!options.noSync && headingRenames.size > 0) {
        const workspaceRoot = process.cwd();
        syncVaultWikilinks(workspaceRoot, filePath, headingRenames);
    }
}

const rawArgs = process.argv.slice(2);
const options = {
    noSync: rawArgs.includes('--no-sync'),
    dryRun: rawArgs.includes('--dry-run')
};
const fileArgs = rawArgs.filter(a => !a.startsWith('--'));

if (fileArgs.length !== 1) {
    console.error("Usage: node rearrange.js <file-path> [--no-sync] [--dry-run]");
    process.exit(1);
}

rearrangeHeadings(path.resolve(fileArgs[0]), options);
