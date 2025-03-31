import { execSync } from 'child_process';
import env from '../config/env';

export async function mergeToWeb() {
  try {
    console.log('Starting merge process...');
    console.log(`Source: ${env.nextjsRepoUrl}`);
    console.log(`Destination: ${env.publicRepoUrl}`);

    // Ensure we're on the main branch
    execSync('git checkout main', { stdio: 'inherit' });
    execSync('git pull origin main', { stdio: 'inherit' });

    // Merge to web branch
    execSync('git checkout web', { stdio: 'inherit' });
    execSync('git merge main', { stdio: 'inherit' });

    // Push changes
    execSync('git push origin web', { stdio: 'inherit' });

    console.log('Merge completed successfully!');
    console.log(`Changes will be available at: ${env.publicSiteUrl}`);
  } catch (error) {
    console.error('Error during merge:', error);
    process.exit(1);
  }
}

// Only run if called directly
if (require.main === module) {
  mergeToWeb();
} 