import fs from "fs"
import path from "path"

const targetPath = path.resolve("node_modules/@quartz-community/obsidian-flavored-markdown/dist/index.js")

if (!fs.existsSync(targetPath)) {
  console.log(`Could not find target at ${targetPath}, checking subdirectories...`)
}

// Robust, self-healing Mermaid renderer with individual diagram error handling,
// support for dark/light theme switching, and universal lifecycle listener hooks.
const bulletproofMermaidScript = `
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

let renderLock = false;

async function renderAllMermaid() {
  if (renderLock) return;
  renderLock = true;
  try {
    const isDark = document.documentElement.getAttribute('saved-theme') === 'dark';
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: isDark ? 'dark' : 'default',
      themeVariables: {
        fontFamily: 'var(--codeFont, monospace)',
        primaryColor: isDark ? '#2b2b2b' : '#faf8f8',
        lineColor: isDark ? '#d4d4d4' : '#4e4e4e'
      }
    });

    const elements = Array.from(document.querySelectorAll('code.mermaid'));
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      if (el.dataset.processed === 'true') continue;

      const rawCode = (el.textContent || el.innerText || '').trim();
      if (!rawCode) continue;

      const diagramId = 'mermaid-' + Math.random().toString(36).slice(2, 9);
      try {
        const { svg } = await mermaid.render(diagramId, rawCode);
        const wrapper = document.createElement('div');
        wrapper.className = 'mermaid-rendered-container';
        wrapper.style.display = 'flex';
        wrapper.style.justifyContent = 'center';
        wrapper.style.margin = '1.5rem 0';
        wrapper.style.overflowX = 'auto';
        wrapper.innerHTML = svg;

        el.dataset.processed = 'true';
        el.style.display = 'none';
        if (el.parentElement && el.parentElement.tagName === 'PRE') {
          el.parentElement.style.display = 'none';
          el.parentElement.parentNode.insertBefore(wrapper, el.parentElement.nextSibling);
        } else {
          el.parentNode.insertBefore(wrapper, el.nextSibling);
        }
      } catch (err) {
        console.warn('Mermaid diagram render warning for item ' + i + ':', err);
        el.dataset.processed = 'true';
      }
    }
  } catch (err) {
    console.error('Mermaid render error:', err);
  } finally {
    renderLock = false;
  }
}

// 1. Initial page load execution
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderAllMermaid);
} else {
  renderAllMermaid();
}

// 2. Quartz SPA navigation events
document.addEventListener('nav', renderAllMermaid);
document.addEventListener('render', renderAllMermaid);

// 3. Theme toggle listener
document.addEventListener('themechange', () => {
  document.querySelectorAll('code.mermaid').forEach((el) => {
    delete el.dataset.processed;
  });
  document.querySelectorAll('.mermaid-rendered-container').forEach((wrapper) => {
    wrapper.remove();
  });
  renderAllMermaid();
});

// 4. Fallback execution hooks
window.addEventListener('load', renderAllMermaid);
setTimeout(renderAllMermaid, 500);
setTimeout(renderAllMermaid, 1500);
`.trim()

const replacementString = "var mermaid_inline_default = " + JSON.stringify(bulletproofMermaidScript) + ";\n\n"

if (fs.existsSync(targetPath)) {
  let content = fs.readFileSync(targetPath, "utf-8")
  const regex = /var mermaid_inline_default\s*=\s*['"][^]*?(?=\/\/\s*src\/styles\/mermaid\.inline\.scss)/
  if (regex.test(content)) {
    content = content.replace(regex, replacementString)
    fs.writeFileSync(targetPath, content, "utf-8")
    console.log("✓ Successfully patched mermaid_inline_default in " + targetPath)
  } else {
    console.error("✗ Could not match regex in " + targetPath)
    process.exit(1)
  }
} else {
  console.error("✗ Target file not found: " + targetPath)
  process.exit(1)
}
