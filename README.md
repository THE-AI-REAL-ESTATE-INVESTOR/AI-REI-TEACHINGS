# AIRIE-TEACHING-DEV

## Directories
- **PENDING/Wisdom**: Documentation and reference materials for internal use.
- **docs/**: Website files for GitHub Pages.
  - **CNAME**: Custom domain configuration.
  - **index.html**: Main entry point for the website.
  - **learn/**: Additional markdown files for the site.
- **utils/**: Utility scripts and tools for automation.
graph TD
    subgraph Local[Local Repository]
        A1[web branch]
        A2[PENDING/Wisdom]
        A3[docs directory]
        A4[utils directory]
    end

    subgraph Remote
        B1[origin DEV]
        B2[public Teachings]
    end

    A1 -->|Production Updates| B2
    A4 -->|Automation Scripts| A3
    A2 -->|Reference Materials| A3
