# AI Learning Hub

Welcome to the AI Learning Hub, your gateway to mastering AI for business success. This repository contains the public-facing content for learn.aireinvestor.com.

## About This Repository

This is the public-facing branch of our AI learning platform. It contains:
- Learning resources and tutorials
- Public documentation
- Website content
- Marketing materials

## Learning Resources

Our learning content is organized into several key areas:

1. **Getting Started with AI**
   - Basic Options & Switches
   - Advanced Options Guide
   - AI Patterns & Best Practices

2. **Community Resources**
   - Newsletter subscription
   - Podcast episodes
   - Facebook community

3. **Tools & Resources**
   - Auto Blog Poster Tool (Coming Soon)
   - Learning templates
   - Best practices guides

## Website Structure

The website is built using GitHub Pages and organized as follows:
- `index.html`: Main landing page
- `learn/`: Learning resources and tutorials
- `CNAME`: Custom domain configuration

## Contributing

This is a public-facing repository. For development and contributions, please visit our private development repository.

## Contact

For questions or support, please visit:
- Website: https://learn.aireinvestor.com
- Newsletter: https://freeblog.aireinvestor.com/newsletter
- Podcast: https://freeblog.aireinvestor.com/podcast

# AI Learning Hub Content Management

This guide explains how to use the content management tools for the AI Learning Hub.

## Directory Structure
```
docs/learn/
├── AI/
│   ├── Fabric-AI/          # Fabric AI specific content
│   │   ├── _template.md    # Template for new content
│   │   ├── index.md        # Section index
│   │   └── *.md           # Content files
│   └── index.md           # AI section index
└── index.md               # Main learning hub index
```

## Content Formatting Tool

### Prerequisites
- Node.js installed
- pnpm package manager
- Git for version control

### Setup
1. Install dependencies:
```bash
pnpm install
```

2. Configure environment variables in `.env`:
```env
learn=/path/to/learn/directory
```

### Available Commands

#### Format Content
```bash
pnpm format
```
This command will:
- Format existing content according to the template
- Add proper attribution and navigation
- Move content to the appropriate Fabric-AI directory
- Maintain consistent styling

#### Development Mode
```bash
pnpm dev
```
Starts the development server with hot reloading.

#### Merge Changes
```bash
pnpm merge
```
Merges changes from main to web branch.

#### Check Status
```bash
pnpm status
```
Shows current system status and configuration.

### Creating New Content

1. Copy the template:
```bash
cp docs/learn/AI/Fabric-AI/_template.md docs/learn/AI/Fabric-AI/your-new-content.md
```

2. Fill in the template sections:
   - Title
   - Overview
   - Prerequisites
   - Learning Objectives
   - Content
   - Examples
   - Best Practices
   - Common Pitfalls
   - Additional Resources
   - Practice Exercises

3. Add proper attribution:
```markdown
## Attribution
This content is based on and inspired by:
- [Fabric AI Documentation](https://github.com/danielmiessler/fabric)
- [Daniel Miessler's Work](https://danielmiessler.com)
```

4. Update navigation links:
```markdown
## Navigation
- [Previous Lesson](./previous-lesson.md)
- [Next Lesson](./next-lesson.md)
- [Back to Fabric AI Learning Hub](./index.md)
```

### Best Practices

1. **File Naming**
   - Use lowercase with hyphens
   - Be descriptive but concise
   - Example: `understanding-fabric-patterns.md`

2. **Content Structure**
   - Follow the template structure
   - Include all required sections
   - Add code examples where relevant
   - Include real-world use cases

3. **Attribution**
   - Always credit original sources
   - Link to official documentation
   - Include license information

4. **Navigation**
   - Update previous/next links
   - Ensure all navigation links work
   - Keep the index.md updated

### Troubleshooting

1. **Format Command Fails**
   - Check .env file configuration
   - Verify file permissions
   - Ensure all dependencies are installed

2. **Merge Issues**
   - Check git status
   - Resolve any conflicts
   - Verify branch permissions

3. **Content Not Showing**
   - Check file paths
   - Verify markdown formatting
   - Update index files

## Support
For issues or questions:
- Check the [GitHub Issues](https://github.com/THE-AI-REAL-ESTATE-INVESTOR/AI-REI-TEACHINGS/issues)
- Contact the development team
- Visit the [AI REI Community](https://freeblog.aireinvestor.com)

---
*Last updated: March 2024* 