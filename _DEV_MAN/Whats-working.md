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

## Development Workflow

### Content Flow
1. Development happens in `main` branch
2. Content is merged to `web` branch
3. GitHub Pages deploys from `web` branch

### Automation Process
1. Environment variables are loaded from `.env`
2. Merge script handles branch transitions
3. Content is automatically deployed

## Next Steps
1. [ ] Implement content generation automation
2. [ ] Add testing framework
3. [ ] Create deployment pipeline
4. [ ] Add error handling and logging
5. [ ] Implement content validation

## Technical Stack
- TypeScript for type safety
- Node.js for automation
- dotenv for environment management
- GitHub Pages for deployment

## Commands
```bash
# Development
pnpm dev           # Start development server
pnpm build         # Build TypeScript files
pnpm merge         # Run merge script
pnpm start         # Run production build
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

---
*Last updated: March 2024*
