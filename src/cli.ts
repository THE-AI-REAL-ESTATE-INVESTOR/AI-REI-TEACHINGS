import { Command } from 'commander';
import { registerLearningCommands } from './cli/learning.js';

const program = new Command();

program
  .name('aire-cli')
  .description('CLI tool for managing AIrie content')
  .version('1.0.0');

// Register learning commands
registerLearningCommands(program);

program.parse(process.argv);
