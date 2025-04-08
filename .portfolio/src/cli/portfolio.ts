import { Command } from 'commander';

export function registerPortfolioCommands(program: Command): void {
  const portfolio = program
    .command('portfolio')
    .description('Portfolio management commands (coming soon)');

  portfolio
    .command('status')
    .description('Show portfolio status')
    .action(() => {
      console.log('Portfolio functionality coming soon...');
    });
} 