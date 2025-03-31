import { mergeToWeb } from './scripts/merge';
import { execSync } from 'child_process';
import env from './config/env';

const commands = {
  merge: async () => {
    console.log('Starting merge process...');
    await mergeToWeb();
  },
  status: () => {
    console.log('System Status:');
    console.log('=============');
    console.log(`Development URL: ${env.nextjsAppUrl}`);
    console.log(`Public Site: ${env.publicSiteUrl}`);
    console.log(`Main Site: ${env.mainSiteUrl}`);
    console.log('=============');
  },
  commit: (message?: string) => {
    const commitMessage = message || 'Update content and structure';
    try {
      console.log('Adding files...');
      execSync('git add .', { stdio: 'inherit' });
      console.log('Committing changes...');
      execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
      console.log('Changes committed successfully!');
    } catch (error) {
      console.error('Error during commit:', error);
      process.exit(1);
    }
  },
  help: () => {
    console.log('Available Commands:');
    console.log('==================');
    console.log('merge   - Merge content from main to web branch');
    console.log('status  - Show system status and configuration');
    console.log('commit  - Add and commit all changes');
    console.log('help    - Show this help message');
    console.log('==================');
    console.log('Usage:');
    console.log('pnpm commit "Your commit message"');
  }
};

// Get command and arguments from command line
const [command, ...args] = process.argv.slice(2);
const defaultCommand = 'help';

// Execute command
if (command in commands) {
  commands[command as keyof typeof commands](args[0]);
} else {
  console.log(`Unknown command: ${command}`);
  commands[defaultCommand]();
} 