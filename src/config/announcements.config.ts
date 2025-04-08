import { readFileSync } from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';

export interface AnnouncementConfig {
  // Directory settings
  directory: string;
  outputPath: string;
  
  // Display settings
  timelineTitle: string;
  defaultAuthor: string;
  sortOrder: 'desc' | 'asc';
  
  // Navigation settings
  navTitle: string;
  navUrl: string;
  timelinePosition: 'above' | 'below';
  timelineTarget: string;
  
  // Metadata requirements
  requiredFields: string[];
  dateFormat: string;
}

// Load _config.yml to get navigation settings
const configPath = join(process.cwd(), 'docs', '_config.yml');
const configFile = readFileSync(configPath, 'utf8');
const siteConfig = yaml.load(configFile) as any;

export const announcementConfig: AnnouncementConfig = {
  // Directory settings
  directory: 'announcements',
  outputPath: 'docs/announcements',
  
  // Display settings
  timelineTitle: 'Latest Announcements',
  defaultAuthor: 'airienvestor - Mark Carpenter',
  sortOrder: 'desc',
  
  // Navigation settings - integrate with _config.yml
  navTitle: 'Announcements',
  navUrl: '/announcements',
  timelinePosition: 'above',
  timelineTarget: 'Learning Resources',
  
  // Metadata requirements
  requiredFields: ['date', 'title', 'author'],
  dateFormat: 'YYYY-MM-DD'
};

export default announcementConfig; 