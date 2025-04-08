import { log } from 'console';
import { ContentParser } from './content-parser.js';
import { BranchMerger } from './merge.js';

async function publishContent(): Promise<void> {
  try {
    // 1. Process content
    log('Processing content...');
    const parser = new ContentParser();
    await parser.processAnnouncements();

    // 2. Merge dev to main with auto-publish enabled
    log('Merging dev to main...');
    const merger = new BranchMerger({
      sourceBranch: 'dev',
      targetBranch: 'main',
      autoPublish: true, // This will automatically push to web
    });

    await merger.merge();
    
    log('Content published successfully!');
    log('Changes will be live at learn.aireinvestor.com shortly');
  } catch (error: unknown) {
    if (error instanceof Error) {
      log('Error during publishing:', error.message);
    } else {
      log('Unknown error during publishing');
    }
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  publishContent();
}

export { publishContent }; 