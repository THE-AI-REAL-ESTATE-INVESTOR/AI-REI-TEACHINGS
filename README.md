# AIRIE-TEACHING-DEV

## Repository Structure
- **web branch**: Public branch containing the live website content
  - Hosted at [learn.aireinvestor.com](https://learn.aireinvestor.com)
  - Contains only public-facing content
  - Will be auto-populated from private repo
  - Managed through GitHub Pages
- **main branch**: Private development branch
  - Contains development tools and internal content
  - Used for development and automation
  - Will be linked to private repo ([AIrie-teachings-dev](https://github.com/THE-AI-REAL-ESTATE-INVESTOR/AIrie-teachings-dev)) - [freeblog.aireinvestor.com](https://freeblog.aireinvestor.com)
- **PENDING/Wisdom**: Documentation and reference materials for internal use
- **docs/**: Website files for GitHub Pages
  - **CNAME**: Custom domain configuration
  - **index.html**: Main entry point for the website
  - **learn/**: Learning resources and tutorials
    - Markdown files for easy content management
    - Automatically rendered by GitHub Pages
    - Organized by topic and difficulty level
- **utils/**: Development tools and automation scripts
  - Contains development-only tools
  - Includes merge automation scripts
  - Development utilities

## Development Workflow

### Branch Structure
```mermaid
graph TD
    subgraph Private[Private Development - AIrie-teachings-dev]
        A1[Development Tools]
        A2[Internal Docs]
        A3[Automation Scripts]
    end

    subgraph Public[Public Website - AI-REI-TEACHINGS]  
        B1[Public Content] -->|learn.aireinvestor.com| B4[Lead Magnet]
        B2[Learning Resources] -->|/learn| B4
        B3[Website Files] -->|GitHub Pages| B4
    end

    subgraph External[External Integration]
        C1[freeblog.aireinvestor.com]
        C2[AI & Automation]
    end

    A1 -->|Development| C1
    A2 -->|Reference| C1
    A3 -->|Automation| C1
    C1 -->|Auto-Populate| B1
    C1 -->|Auto-Populate| B2
    C1 -->|Auto-Populate| B3
```

### Content Flow

1. **Development**:
   - All development happens in the `main` branch
   - Development tools stay in `main` branch
   - Content is organized in `docs/` directory

2. **Deployment**:
   - Content is merged from `main` to `web`
   - Development tools are excluded via `.gitignore`
   - Web branch contains only public content

3. **Automation**:
   - Private repo ([AIrie-teachings-dev](https://github.com/THE-AI-REAL-ESTATE-INVESTOR/AIrie-teachings-dev)) handles content generation
   - AI & Automation tools manage content updates
   - Auto-populates the public web branch

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
   - Content is managed through private repo
   - AI tools handle content generation
   - Automated deployment to public branch

4. **Best Practices**:
   - Keep filenames lowercase with hyphens
   - Use clear, descriptive names
   - Include proper Markdown headers
   - Add links in `index.html` for new content

## Development Tools
- **Merge Script**: Located in `utils/merge-to-main.sh`
  - Automates merging from `main` to `web`
  - Includes safety checks and validations
  - Stays in `main` branch only
  - Not merged to public content

## Environment Configuration
- `.env` file contains configuration for:
  - URLs and endpoints
  - Development paths
  - Not merged to public content

## Getting Started
1. Clone the repository
2. Switch to `main` branch for development
3. Make changes in `docs/` directory
4. Use merge script to deploy to `web`
5. GitHub Pages automatically deploys from `web`

---
*Last updated: March 2024*
