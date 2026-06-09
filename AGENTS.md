# Project Instructions & Rules

This project workspace contains lecture notes and assignments for computer science courses.

## Rules for Future Agents

* **Coding Assignments**:
  * When working on coding assignments (such as those in `Y1S2/CKC112/Assignment 1/` or `Y1S2/CKC112/Assignment 2/`), you must refer to and follow the C++ programming and object-oriented principles detailed in [[.agents/rules/coding-memory.md]].
  * **Strict Constraint**: The knowledge and rules defined in [[.agents/rules/coding-memory.md]] must be used **ONLY** for the coding assignments. Do not apply or inject this coding knowledge into non-coding notes or general system configurations.
* **Mermaid Diagram Syntax Constraints**:
  - When creating or editing Mermaid diagrams (flowcharts, class diagrams, etc.) in markdown files, you must strictly ensure no syntax errors are introduced:
    - **No Spaces in Node/Subgraph IDs**: Subgraph and node identifiers must not contain spaces (e.g., use `ViewLayer` instead of `View Layer`). If you need spaces in the display name, specify the ID as a single word and wrap the display label in double quotes (e.g., `subgraph ViewLayer ["View Layer - PHP, HTML/CSS"]`).
    - **No Special Characters in Class Member Types/Names**: Avoid using characters like `&`, `{`, `}`, or `*` directly inside class diagrams' attributes or methods (e.g., replace `shipping&Handling` with `shippingAndHandling`, and remove `{key}` properties from attributes as curly braces conflict with class delimiters).
    - **Stereotype Syntax**: Stereotypes for classes must be applied on a separate line (e.g. `<<abstract>> Sale` or `<<entity>> DesignStudent`) instead of inside the class braces where they can cause parsing failures.

