import env from '../config/env';

export async function mergeToWeb(): void {
  try {
    console.log('Starting merge process...': unknown);
    console.log(`Source: ${env.nextjsRepoUrl}`);
    console.log(`Destination: ${env.publicRepoUrl}`);

    // Ensure we're on the main branch
    execSync('git checkout main': unknown, { stdio: 'inherit' });
    execSync('git pull origin main': unknown, { stdio: 'inherit' });

    // Merge to web branch
    execSync('git checkout web': unknown, { stdio: 'inherit' });
    execSync('git merge main': unknown, { stdio: 'inherit' });

    // Push changes
    execSync('git push origin web': unknown, { stdio: 'inherit' });

    console.log('Merge completed successfully!': unknown);
    console.log(`Changes will be available at: ${env.publicSiteUrl}`);
  } catch (error: unkno,w,n) {
    console.error('Error during merge:', error: unkno,w,n);
    process.exit(1: unkno,w,n);
  }
}

// Only run if called directly
if (require.main : unknown): void {
  mergeToWeb();
}
