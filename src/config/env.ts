import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config();

export interface EnvConfig {
  // Repository URLs
  nextjsRepoUrl: string;
  publicRepoUrl: string;
  
  // Repository Purposes
  nextjsRepoPurpose: string;
  publicRepoPurpose: string;
  
  // Website URLs
  nextjsAppUrl: string;
  publicSiteUrl: string;
  mainSiteUrl: string;
  
  // Content Flow
  contentFlow: string;
  alternativeFlow: string;
  
  // Local Paths
  learnPath: string;
  
  // External URLs
  newsletterUrl: string;
  podcastUrl: string;
}

export const env: EnvConfig = {
  // Repository URLs
  nextjsRepoUrl: process.env.NEXTJS_REPO_URL || '',
  publicRepoUrl: process.env.PUBLIC_REPO_URL || '',
  
  // Repository Purposes
  nextjsRepoPurpose: process.env.NEXTJS_REPO_PURPOSE || '',
  publicRepoPurpose: process.env.PUBLIC_REPO_PURPOSE || '',
  
  // Website URLs
  nextjsAppUrl: process.env.NEXTJS_APP_URL || '',
  publicSiteUrl: process.env.PUBLIC_SITE_URL || '',
  mainSiteUrl: process.env.MAIN_SITE_URL || '',
  
  // Content Flow
  contentFlow: process.env.CONTENT_FLOW || '',
  alternativeFlow: process.env.ALTERNATIVE_FLOW || '',
  
  // Local Paths
  learnPath: process.env.learn || '',
  
  // External URLs
  newsletterUrl: process.env.newsletter || '',
  podcastUrl: process.env.podcast || '',
};

// Validate required environment variables
const requiredEnvVars = [
  'nextjsRepoUrl',
  'publicRepoUrl',
  'learnPath',
];

for (const envVar of requiredEnvVars) {
  if (!env[envVar as keyof EnvConfig]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

export default env; 