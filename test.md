# Neural Processing Unit (NPU)

## What an NPU Does
A Neural Processing Unit (NPU) is a specialized microprocessor designed specifically to accelerate artificial intelligence (AI) and machine learning (ML) algorithms. Unlike a CPU (which handles general-purpose tasks) or a GPU (which excels at parallel processing for graphics), an NPU is optimized for the complex mathematical computations—particularly matrix operations—that neural networks require. This allows the NPU to process AI workloads much faster and with significantly greater energy efficiency than a CPU or GPU.

## What Uses the NPU on Your Computer
Various applications and system features utilize the NPU to enhance performance and save battery life:
*   **Operating System AI Features:** Tools like Windows Studio Effects (which provides real-time background blur, automatic framing, and eye contact correction during video calls).
*   **Creative Applications:** Software like Adobe Creative Cloud (Photoshop, Premiere Pro) uses the NPU for AI-driven features such as subject selection, noise reduction, and generative fill.
*   **Local AI Models:** Running Large Language Models (LLMs) or image generation models (like Stable Diffusion) locally on your machine.
*   **Productivity Tools:** AI assistants integrated into office suites that summarize text, draft emails, or generate presentations.
*   **Security and Authentication:** Features like Windows Hello facial recognition, which rely on AI for fast and secure biometric authentication.

---

# Gemini CLI Update Information

### Latest Stable Release: v0.32.1
*   **Plan Mode Enhancements:** Support for opening and modifying plans in external editors, plus an adapted workflow for complex tasks using multi-select options.
*   **Agent and Steering Improvements:** The generalist agent is now enabled for better task delegation, and model steering is supported directly within the workspace.
*   **Interactive Shell:** Introduced autocompletion for a more seamless terminal experience.
*   **Performance:** Extensions now load in parallel, and robust A2A (Agent-to-Agent) streaming reassembly has been implemented.
*   **Billing:** Implementation of the G1 AI credits overage flow with billing telemetry and quota error fallbacks.

### Current Runtime Context (v0.34.0)
As of March 2026, the Gemini CLI is running version **0.34.0**. This version includes features promoted from recent preview cycles, such as advanced Plan Mode with built-in research subagents, the new `github-issue-creator` skill, a redesigned UX/UI with an inverted context window display, and core enhancements like ACP (Agent Control Protocol) slash commands for `/memory`, `/init`, and more.
