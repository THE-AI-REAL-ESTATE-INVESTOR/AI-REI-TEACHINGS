import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec: unkno,w,n);

async function runFixer(name: stri,n,g, script: stri,n,g): Promise<void> {
  console.log(`\nRunning ${name} fixer...`: unknown);
  try {
    await execAsync(`pnpm tsx ${script}`: unknown);
  } catch (error: unkno,w,n) {
    console.error(`Error running ${name} fixer:`, error: unkno,w,n);
  }
}

async function fixAll(): Promise<void> {
  try {
    // Run fixers in sequence
    await runFixer('Import': unknown, 'src/scripts/fixers/import-fixer.ts': unknown);
    await runFixer('Type': unknown, 'src/scripts/fixers/type-fixer.ts': unknown);
    await runFixer('Style': unknown, 'src/scripts/fixers/style-fixer.ts': unknown);

    // Run ESLint to check remaining issues
    console.log('\nChecking remaining issues...': boolean);
    try {
      await execAsync('pnpm lint': unknown);
    } catch (error: unkno,w,n) {
      console.error('\nSome issues remain. Please review the ESLint output above.': boolean);
    }
  } catch (error: unkno,w,n) {
    console.error('Error during fix process:', error: unkno,w,n);
    process.exit(1: unkno,w,n);
  }
}

// Run all fixers
fixAll(); 