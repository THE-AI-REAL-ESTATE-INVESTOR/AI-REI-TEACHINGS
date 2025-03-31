# What's Working - AI Learning Hub Automation

## Project Overview
We're creating an automation system for managing content between our private development repository and public learning hub.

## Repository Structure
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

    A1 -->|Development| C1[freeblog.aireinvestor.com]
    A2 -->|Reference| C1
    A3 -->|Automation| C1
    C1 -->|Auto-Populate| B1
    C1 -->|Auto-Populate| B2
    C1 -->|Auto-Populate| B3
```

## Current Implementation Status

### 1. Environment Configuration
- ✅ Created `.env` file structure
- ✅ Implemented TypeScript environment loader
- ✅ Added validation for required variables
- ✅ Configured repository URLs and purposes

### 2. Automation Tools
- ✅ Set up TypeScript project structure
- ✅ Created merge script for branch management
- ✅ Implemented environment variable integration
- ✅ Added development scripts in package.json

### 3. Branch Structure
- ✅ Created dev branch for development
- ✅ Set up main branch for private content
- ✅ Configured web branch for public content
- ✅ Implemented merge automation

### 4. Git Configuration
- ✅ Added comprehensive `.gitignore` file
- ✅ Configured proper handling of `node_modules`
- ✅ Set up exclusion patterns for build outputs
- ✅ Added IDE and editor file exclusions
- ✅ Configured environment file exclusions

## Development Workflow

### Content Flow
1. Development happens in `main` branch
2. Content is merged to `web` branch
3. GitHub Pages deploys from `web` branch

### Automation Process
1. Environment variables are loaded from `.env`
2. Merge script handles branch transitions
3. Content is automatically deployed

### Git Management
1. Dependencies are managed locally with pnpm
2. Build artifacts are excluded from version control
3. Environment files are kept secure
4. IDE configurations remain local

## Next Steps
1. [ ] Implement content generation automation
2. [ ] Add testing framework
3. [ ] Create deployment pipeline
4. [ ] Add error handling and logging
5. [ ] Implement content validation
6. [ ] Set up automated dependency updates
7. [ ] Implement build process optimization

## Technical Stack
- TypeScript for type safety
- Node.js for automation
- dotenv for environment management
- GitHub Pages for deployment
- pnpm for package management

## Commands
```bash
# Development
pnpm dev           # Start development server
pnpm build         # Build TypeScript files
pnpm merge         # Run merge script
pnpm start         # Run production build

# Git Operations
git rm -r --cached node_modules  # Remove node_modules from Git tracking
git push origin main            # Push changes to remote
```

## Environment Variables
Required variables:
- NEXTJS_REPO_URL
- PUBLIC_REPO_URL
- learn (local path)

Optional variables:
- NEXTJS_APP_URL
- PUBLIC_SITE_URL
- MAIN_SITE_URL
- newsletter
- podcast

## Git Ignore Patterns
```gitignore
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
build/
out/

# TypeScript
*.tsbuildinfo

# Environment variables
.env
.env.local
.env.*.local

# IDE and editor files
.vscode/
.idea/
*.swp
*.swo
.DS_Store

# Logs and cache
logs/
*.log
.npm/
.eslintcache
.cache/
```

---
*Last updated: March 2024*
