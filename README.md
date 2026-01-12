# Canvases

Canvases is an infinite canvas workspace for organizing, prototyping, and storing HTML/CSS snippets. It acts as a visual scratchpad where developers can arrange code snippets, add sticky notes, and experiment with designs in a spatial interface.

## Features

- **Infinite Workspace:** Pan and zoom freely around a boundless canvas to organize your thoughts and code.
- **HTML/CSS Snippets:**
    - Create live-rendering HTML snippets.
    - **Dynamic CSS Variables:** Automatically detects CSS variables in your snippets and provides UI controls (color pickers, scrubbable numbers) to tweak them in real-time.
    - **Code Editing:** View and copy the full source code using the embedded Monaco Editor.
    - **Fullscreen Preview:** Double-click any snippet to view it in isolation.
- **Organization:**
    - **Labels:** Add resizeable, colored sticky labels to group and annotate your work.
    - **Multi-Canvas Support:** Create and manage multiple separate canvases (saved locally).
- **Productivity Tools:**
    - **JSON Export/Import:** Copy your entire canvas state to the clipboard for backup or sharing.
    - **History:** robust Undo/Redo (Ctrl+Z / Ctrl+Shift+Z) support.
    - **Dark Mode:** Toggle between light and dark themes.

## How it Works

The application is built primarily as a single-file client-side web app (`index.html`).

- **Frontend:** Vanilla JavaScript, HTML, and Tailwind CSS (loaded via CDN).
- **Editor:** Integrates the [Monaco Editor](https://microsoft.github.io/monaco-editor/) for high-quality code viewing.
- **Persistence:** Data is currently saved to your browser's `localStorage`, allowing you to return to your work later.
- **Cloudflare Worker (Optional):** The repository includes `pantry-worker.js`, a Cloudflare Worker script designed to proxy requests to [Pantry Cloud](https://getpantry.cloud/). This suggests an architecture for potential remote data persistence or sharing capabilities.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Run the app:**
    Simply open `index.html` in your modern web browser. No build step or server is required for the core local functionality.

    *Note: For the best experience, use a local development server (like Live Server in VS Code or `python3 -m http.server`) to avoid any potential CORS issues with local file access, although the app is designed to work standalone.*

## Controls

-   **Pan:** Hold `Space` + Drag or Click & Drag on the background.
-   **Zoom:** Mouse Wheel or use the on-screen zoom controls.
-   **Select:** Click a node to select it.
-   **Move:** Drag the header of any node.
-   **Resize:** Drag the bottom-right corner of any node.
-   **Undo:** `Ctrl + Z`
-   **Redo:** `Ctrl + Shift + Z` / `Ctrl + Y`
-   **Reset Zoom:** `Ctrl + 0`