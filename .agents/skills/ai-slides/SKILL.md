---
name: ai-slides
description: Generates high-fidelity, professional 16:9 widescreen PowerPoint presentations (.pptx) with modern dark tech themes, multi-column card grids, formatted tables, and precise typography using python-pptx.
---

# AI Slide Generator Skill

This skill provides an automated, programmatic toolchain to generate high-fidelity, professional PowerPoint presentations (`.pptx`) adhering to modern tech conference and executive workshop standards.

---

## 1. Environment & Prerequisites

- **Python Environment**: Uses the workspace virtual environment located at `.venv/` (contains `python-pptx`, `Pillow`, `lxml`, `XlsxWriter`).
  - Windows execution: `.venv\bin\python.exe <script.py>`
- **Dimensions**: Always use **16:9 Widescreen** (`13.333" x 7.500"`):
  ```python
  prs.slide_width = Inches(13.333333)
  prs.slide_height = Inches(7.5)
  ```

---

## 2. Design System & Palette

### Dark Modern Tech Palette
| Element | Hex Code | RGB | Usage |
|---|---|---|---|
| **Background** | `#0F172A` | `(15, 23, 42)` | Deep Slate 900 full-bleed slide background |
| **Card / Container** | `#1E293B` | `(30, 41, 59)` | Slate 800 containers, cards, and modal panels |
| **Card Border** | `#334155` | `(51, 65, 85)` | Subtle 1pt container outlines |
| **Elevated Surface** | `#273549` | `(39, 53, 73)` | Alternate table rows, sub-cards, callouts |
| **Primary Hero** | `#38BDF8` | `(56, 189, 248)` | Sky blue titles, main badges, key metrics |
| **Accent Emerald** | `#34D399` | `(52, 211, 153)` | Success, Quality Attributes, positive indicators |
| **Accent Rose** | `#F43F5E` | `(244, 63, 94)` | Constraints, warnings, non-negotiables, timers |
| **Accent Amber** | `#FBBF24` | `(251, 191, 36)` | Audit rules, challenge prompts, highlight boxes |
| **Text Primary** | `#F8FAFC` | `(248, 250, 252)` | High-contrast headings and prominent text |
| **Text Body** | `#E2E8F0` | `(226, 232, 240)` | High-readability description text |
| **Text Muted** | `#94A3B8` | `(148, 163, 184)` | Subtitles, metadata, and footnote descriptions |

### Typography
- Primary font: **Segoe UI** (clean sans-serif). Fallback: Arial.
- Scale:
  - Slide Badges: 9.5 pt Bold Uppercase
  - Slide Titles: 21–24 pt Bold
  - Slide Subtitles: 11–12 pt Regular
  - Card Headings: 12–14 pt Bold
  - Body Content: 9–10 pt Regular
  - Notes / Footers: 8.5–9 pt Regular

---

## 3. Core Engine Architecture (`slide_engine.py`)

The reusable helper engine is located in `scripts/slide_engine.py`:

```python
from slide_engine import SlideDeck, PALETTE

# 1. Initialize presentation
deck = SlideDeck(title="Presentation Title")

# 2. Add slide with structured header
slide = deck.add_slide(
    badge="THEME / CATEGORY",
    title="Main Slide Title",
    subtitle="Contextual subtitle explaining the core objective."
)

# 3. Add modular cards / containers
card = deck.add_card(slide, left=0.8, top=1.85, width=5.72, height=4.5)

# 4. Add styled tables
table = deck.add_table(slide, rows=5, cols=4, left=0.8, top=2.0, width=11.733, height=4.5)

# 5. Save output
deck.save("Output_Presentation.pptx")
```

---

## 4. Workflows

### Creating a New Presentation
1. Define the outline, audience, timing, and slide count.
2. Write a generator script importing `slide_engine` or using `python-pptx`.
3. Execute generation:
   ```bash
   .venv\bin\python.exe scripts/build_deck.py
   ```
4. Verify slide count, dimensions, and text rendering.
5. Move the finalized presentation to its target course folder (e.g. `Y2S1/.../Others/`).
6. Clean up temporary generation scripts from the vault root.
