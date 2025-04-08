 ```markdown
# AIrie Portfolio Tools

This package contains the portfolio management tools for AIrie projects. It's separated from the main learning site tools to maintain clean separation of concerns.

## Setup

```bash
# Install dependencies
pnpm install

# Start development mode
pnpm run dev
```

## Available Commands

- `pnpm run dev` - Start development mode with auto-reload
- `pnpm run analyze` - Analyze portfolio repositories
- `pnpm run push` - Push portfolio content to target platforms
- `pnpm run status` - Check portfolio status

## Project Structure

```
.portfolio/
├── src/
│   ├── cli/              # CLI commands
│   │   └── portfolio.ts  # Portfolio-specific commands
│   └── cli.ts           # Main CLI entry point
├── package.json         # Portfolio-specific dependencies
└── tsconfig.json       # TypeScript configuration
```

## Dependencies

### Core Dependencies
- `@octokit/rest` - GitHub API client
- `commander` - CLI framework
- `dotenv` - Environment variable management

### Development Dependencies
- `typescript` - TypeScript compiler
- `tsx` - TypeScript execution
- `ts-node-dev` - Development with auto-reload

## Environment Variables

Create a `.env` file in the `.portfolio` directory:

```env
GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=your_username
```

## Usage Examples

```bash
# Analyze a specific repository
pnpm run analyze my-repo

# Push portfolio content to GitHub
pnpm run push github

# Check portfolio status
pnpm run status
```

## Separation from Main Project

This package is intentionally separated from the main learning site tools to:
1. Keep dependencies clean and minimal
2. Allow independent versioning
3. Maintain clear separation of concerns
4. Enable independent deployment

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests (when implemented)
4. Submit a pull request

## Future Improvements

- [ ] Add testing framework
- [ ] Implement CI/CD
- [ ] Add portfolio templates
- [ ] Enhance GitHub integration
```