import { Command } from 'commander';
import { registerPortfolioCommands } from './cli/portfolio.js';

const program = new Command();

program
  .name('aire-portfolio')
  .description('Portfolio management tools')
  .version('1.0.0');

// Register commands
registerPortfolioCommands(program);

program.parse(process.argv); 