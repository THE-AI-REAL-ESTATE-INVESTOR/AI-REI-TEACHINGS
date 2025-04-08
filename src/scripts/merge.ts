import { execSync } from 'child_process';
import { log } from 'console';

interface MergeConfig {
  sourceBranch: string;
  targetBranch: string;
  autoPublish?: boolean;
}

class BranchMerger {
  private config: MergeConfig;

  constructor(config: MergeConfig) {
    this.config = config;
  }

  async merge(): Promise<void> {
    try {
      // Store current branch
      const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
      
      // Fetch latest changes
      log('Fetching latest changes...');
      execSync('git fetch origin');

      // Checkout target branch
      log(`Checking out ${this.config.targetBranch}...`);
      execSync(`git checkout ${this.config.targetBranch}`);
      execSync(`git pull origin ${this.config.targetBranch}`);

      // Merge source branch
      log(`Merging ${this.config.sourceBranch}...`);
      execSync(`git merge ${this.config.sourceBranch}`);

      // If auto-publish is enabled and target is main, push to web
      if (this.config.autoPublish && this.config.targetBranch === 'main') {
        log('Auto-publishing to web branch...');
        execSync('git checkout web');
        execSync('git pull origin web');
        execSync('git merge main');
        execSync('git push origin web');
      }

      // Push changes
      log('Pushing changes...');
      execSync(`git push origin ${this.config.targetBranch}`);

      // Return to original branch
      log(`Returning to ${currentBranch}...`);
      execSync(`git checkout ${currentBranch}`);

      log('Merge completed successfully!');
    } catch (error: unknown) {
      if (error instanceof Error) {
        log('Error during merge:', error.message);
      } else {
        log('Unknown error during merge');
      }
      throw error;
    }
  }
}

// Example usage:
// For dev -> main
const devToMain = new BranchMerger({
  sourceBranch: 'dev',
  targetBranch: 'main',
  autoPublish: true // This will auto-push to web
});

// For manual main -> web
const mainToWeb = new BranchMerger({
  sourceBranch: 'main',
  targetBranch: 'web'
});

export { BranchMerger };
