import env from './config/env';

console.log('AI Learning Hub Automation System');
console.log('=================================');
console.log(`Development URL: ${env.nextjsAppUrl}`);
console.log(`Public Site: ${env.publicSiteUrl}`);
console.log(`Main Site: ${env.mainSiteUrl}`);
console.log('=================================');

// Export all modules
export * from './config/env';
export * from './scripts/merge';

// Add more exports as we create more modules 