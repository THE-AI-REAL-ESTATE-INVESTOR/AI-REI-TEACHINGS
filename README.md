# AIRIE-TEACHING-DEV

## Directories
- **PENDING/Wisdom**: Documentation and reference materials for internal use.
- **docs/**: Website files for GitHub Pages.
  - **CNAME**: Custom domain configuration.
  - **index.html**: Main entry point for the website.
  - **learn/**: Learning resources and tutorials.
    - Markdown files for easy content management
    - Automatically rendered by GitHub Pages
    - Organized by topic and difficulty level
- **utils/**: Utility scripts and tools for automation.

## Learning Section Structure
The learning section is built using GitHub Pages' built-in Markdown rendering capabilities:

1. **Content Organization**:
   - All learning content lives in `docs/learn/`
   - Files are written in Markdown for easy editing
   - GitHub Pages automatically renders Markdown to HTML

2. **Navigation**:
   - Main page (`index.html`) links to learning resources
   - Direct links to individual learning pages
   - Easy to add new content by adding Markdown files

3. **Adding Content**:
   - Simply add new `.md` files to `docs/learn/`
   - Use standard Markdown formatting
   - Include proper headers and structure
   - GitHub Pages handles the rendering

4. **Best Practices**:
   - Keep filenames lowercase with hyphens
   - Use clear, descriptive names
   - Include proper Markdown headers
   - Add links in `index.html` for new content

graph TD
    subgraph Local[Local Repository]
        A1[web branch]
        A2[PENDING/Wisdom]
        A3[docs directory]
        A4[utils directory]
        A5[learn directory]
    end

    subgraph Remote
        B1[origin DEV]
        B2[public Teachings]
    end

    A1 -->|Production Updates| B2
    A4 -->|Automation Scripts| A3
    A2 -->|Reference Materials| A3
    A5 -->|Learning Content| A3
