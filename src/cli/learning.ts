import { Command } from 'commander';
import { ContentParser } from '../scripts/content-parser.js';
import { BranchMerger } from '../scripts/merge.js';

export function registerLearningCommands(program: Command): void {
  const learning = program
    .command('learning')
    .description('Learning site management commands');

  learning
    .command('publish')
    .description('Process content and publish to web branch')
    .action(async () => {
      try {
        // 1. Process content
        console.log('Processing content...');
        const parser = new ContentParser();
        await parser.processAnnouncements();

        // 2. Merge dev to main with auto-publish enabled
        console.log('Merging dev to main...');
        const merger = new BranchMerger({
          sourceBranch: 'dev',
          targetBranch: 'main',
          autoPublish: true // This will automatically push to web
        });

        await merger.merge();
        
        console.log('Content published successfully!');
        console.log('Changes will be live at learn.aireinvestor.com shortly');
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error during publishing:', error.message);
        } else {
          console.error('Unknown error during publishing');
        }
        process.exit(1);
      }
    });

  learning
    .command('process')
    .description('Process content without publishing')
    .action(async () => {
      try {
        console.log('Processing content...');
        const parser = new ContentParser();
        await parser.processAnnouncements();
        console.log('Content processed successfully!');
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error processing content:', error.message);
        } else {
          console.error('Unknown error processing content');
        }
        process.exit(1);
      }
    });
} 