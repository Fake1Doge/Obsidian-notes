#!/usr/bin/env node
/**
 * Fast Vault-Wide Mermaid Syntax Linter
 * Catches actual syntax errors that cause Mermaid parser crashes:
 * 1. Missing diagram type header (flowchart, graph, classDiagram, etc.)
 * 2. Unquoted parentheses in link/edge labels: -->|Label (with parens)|
 * 3. Class stereotypes placed outside class braces: <<stereotype>> ClassName
 * 4. Subgraphs with unquoted parentheses in title: subgraph Name (Details)
 * 5. Sequence diagram keyword collision: actor Actor as ...
 * 6. Unquoted parentheses in square bracket node labels: ID[Label (Details)]
 */

const fs = require('fs');
const path = require('path');

function findMarkdownFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (['node_modules', '.venv', '.git', '.obsidian', 'scratch', '.system_generated'].includes(entry.name)) continue;
      findMarkdownFiles(path.join(dir, entry.name), files);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

const targetPath = process.argv[2] || '.';
const files = fs.statSync(targetPath).isDirectory() ? findMarkdownFiles(targetPath) : [targetPath];

let totalBlocks = 0;
const errors = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  let inMermaid = false;
  let startLine = 0;
  let blockLines = [];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (trimmed.startsWith('```mermaid')) {
      inMermaid = true;
      startLine = i + 1;
      blockLines = [];
    } else if (inMermaid && trimmed.startsWith('```')) {
      inMermaid = false;
      totalBlocks++;
      validateBlock(file, startLine, blockLines);
      blockLines = [];
    } else if (inMermaid) {
      blockLines.push({ text: rawLine, lineNum: i + 1 });
    }
  }
});

function validateBlock(file, startLine, lines) {
  const meaningful = lines.filter(l => l.text.trim() && !l.text.trim().startsWith('%%'));
  if (meaningful.length === 0) {
    errors.push({ file, line: startLine, issue: 'Empty Mermaid diagram block' });
    return;
  }

  const header = meaningful[0].text.trim();
  const headerMatch = header.match(/^(flowchart|graph|sequenceDiagram|classDiagram|stateDiagram|stateDiagram-v2|erDiagram|gantt|pie|journey|gitGraph|quadrantChart|xychart-beta|timeline|zenuml|mindmap|sankey-beta)/);
  if (!headerMatch) {
    errors.push({
      file,
      line: meaningful[0].lineNum,
      issue: `Missing or invalid diagram type header: '${header}'. Diagram must start with flowchart, graph, classDiagram, etc.`
    });
    return;
  }

  const type = headerMatch[1];
  let inClassBlock = false;

  meaningful.forEach(item => {
    const line = item.text.trim();
    const lNum = item.lineNum;

    // 1. Flowchart & Graph Link Labels with Parentheses
    if (type.startsWith('flowchart') || type.startsWith('graph')) {
      // Check for unquoted parens inside edge labels: e.g. -->|...(...) ...| or ==>|...(...) ...|
      const edgeLabelMatch = line.match(/[-.=><~]+[|]([^|]+)[|]/);
      if (edgeLabelMatch) {
        const label = edgeLabelMatch[1].trim();
        if (label.includes('(') && !label.startsWith('"')) {
          errors.push({
            file,
            line: lNum,
            issue: `Unquoted parentheses in link label: '|${label}|'. Wrap in quotes: '|\"${label}\"|'`
          });
        }
      }

      // Check for unquoted parentheses in square bracket node labels: ID[Text (with parens)]
      // Ignore cylinder [("...")], subroutine [["..."]], parallelogram [/"..."/], or standard quoted ["..."]
      const nodeBracketMatch = line.match(/\b([A-Za-z0-9_\-]+)\[([^"'(/\\[][^\]]*\([^\]]*\)[^\]]*)\]/);
      if (nodeBracketMatch) {
        errors.push({
          file,
          line: lNum,
          issue: `Unquoted parentheses in node label: '${nodeBracketMatch[0]}'. Use: ${nodeBracketMatch[1]}["${nodeBracketMatch[2]}"]`
        });
      }

      // Check for invalid subgraph definitions with unquoted parens: subgraph Name (Details)
      if (line.startsWith('subgraph')) {
        if (line.includes('(') && !line.includes('"')) {
          errors.push({
            file,
            line: lNum,
            issue: `Subgraph title with parentheses must be quoted: '${line}'. Use: subgraph ID ["Title (Details)"]`
          });
        }
      }
    }

    // 2. ClassDiagram Stereotype Placement
    if (type === 'classDiagram') {
      if (line.includes('{')) inClassBlock = true;
      if (line.includes('}')) inClassBlock = false;

      // Stereotype outside class block: <<stereotype>> ClassName
      const extStereo = line.match(/^<<\s*[A-Za-z0-9_\-]+\s*>>\s+[A-Za-z0-9_]+/);
      if (extStereo && !inClassBlock) {
        errors.push({
          file,
          line: lNum,
          issue: `Class stereotype placed outside class body: '${line}'. Stereotypes must reside inside the class braces: class Name { <<stereotype>> }`
        });
      }
    }

    // 3. SequenceDiagram Keyword Collisions
    if (type === 'sequenceDiagram') {
      if (line.match(/^actor\s+Actor\b/)) {
        errors.push({
          file,
          line: lNum,
          issue: `Naming an actor 'Actor' causes a collision with the keyword 'actor': '${line}'. Use 'actor UserActor as "Actor"' instead.`
        });
      }
    }
  });
}

console.log('========================================');
console.log('       MERMAID SYNTAX LINTER            ');
console.log('========================================');
console.log(`Audited ${files.length} file(s), ${totalBlocks} Mermaid diagrams.`);
console.log(`Errors found: ${errors.length}\n`);

if (errors.length > 0) {
  errors.forEach((err, idx) => {
    console.log(`[${idx + 1}] ${err.file}:${err.line} -> ${err.issue}`);
  });
  process.exit(1);
} else {
  console.log('[SUCCESS] All Mermaid diagrams conform to strict syntax standards (0 syntax errors).');
}
