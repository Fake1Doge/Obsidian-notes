---
tags: [template, cheatsheet]
aliases: [Markdown Guide]
---

# Obsidian Markdown Cheatsheet

## 1. Text Formatting
**Bold Text** or __Bold Text__
*Italic Text* or _Italic Text_
***Bold and Italic***
~~Strikethrough~~
==Highlight==
`Inline Code`

## 2. Headers
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

## 3. Links & Embeds
**Internal Links:**
[[Note Title]] - Link to a note
[[Note Title|Custom Text]] - Link with alias
[[Note Title#Header]] - Link to a specific header
[[Note Title#^blockid]] - Link to a specific block

**External Links:**
[Obsidian Website](https://obsidian.md)
[https://obsidian.md](https://obsidian.md) - Bare URL

**Embeds (Transclusions):**
![[Image.png]] - Embed an image
![[Note Title]] - Embed an entire note
![[Note Title#^blockid]] - Embed a specific block from a note
![[Note Title|100]] - Embed image resized to 100px width

## 4. Lists
**Unordered:**
- Item 1
- Item 2
  - Indented Item
* Item 3 (Asterisks work too)

**Ordered:**
1. First item
2. Second item
   3. Indented ordered item

**Task List:**
- [ ] To Do
- [x] Done
- [ ] In Progress (Theme dependent)
- [ ] Canceled (Theme dependent)

## 5. Callouts (Obsidian Special)
> [!NOTE] Title
> This is a standard note callout.
> It supports **markdown** inside.

> [!INFO] Information
> Useful for extra details.

> [!WARNING] Warning
> Be careful here.

> [!ERROR] Error
> Something went wrong.

> [!TIP] Tip
> Foldable callout below!

> [!FAQ]- Closed by default
> Click the arrow to open this.

## 6. Blockquotes
> This is a blockquote.
> It can span multiple lines.
>> Nested blockquote.

## 7. Code Blocks
```javascript
console.log("Hello World");
const x = 10;
```

```python
def hello():
    print("Hello World")
```

## 8. Tables
| Syntax      | Description | Align Right |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

## 9. Math (LaTeX/MathJax)
**Inline:** $E = mc^2$

**Block:**
$$
\int_0^\infty x^2 dx
$$

## 10. Diagrams (Mermaid)
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## 11. Footnotes
Here is a simple footnote[^1].
Here is a longer footnote[^bignote].

[^1]: This is the text of the first footnote.
[^bignote]: Footnotes can be named anything.

## 12. Comments
%% This is an Obsidian comment. It will not be visible in Reading View or Export. %%

## 13. Horizontal Rules
---
***
___

## 14. Block Identifiers
Text paragraph that I want to link to later. ^unique-id