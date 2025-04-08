import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { marked } from 'marked';
import { format, parse } from 'date-fns';
import announcementConfig from '../config/announcements.config';
import yaml from 'yaml';
import { writeFileSync } from 'fs';

interface ContentSection {
  type: 'table' | 'header' | 'text' | 'announcement';
  content: string;
  metadata?: Record<string, string>;
}

interface Announcement {
  date: Date;
  title: string;
  author: string;
  content: string;
  slug: string;
  category?: string;
}

export class ContentParser {
  async fetchContent(url: string): Promise<ContentSection[]> {
    const response = await fetch(url);
    const markdown = await response.text();
    return this.parseContent(markdown);
  }

  parseContent(markdown: string): ContentSection[] {
    const sections: ContentSection[] = [];
    const content = marked.parse(markdown) as string;
    const tokens = content.toString().split('\n\n');

    tokens.forEach((token: string) => {
      if (token.startsWith('|')) {
        sections.push({
          type: 'table',
          content: token,
        });
      } else if (token.startsWith('#')) {
        sections.push({
          type: 'header',
          content: token,
        });
      } else {
        sections.push({
          type: 'text',
          content: token,
        });
      }
    });

    return sections;
  }

  generateTemplate(sections: ContentSection[]): string {
    let template = '';
    sections.forEach(section => {
      template += section.content + '\n\n';
    });
    return template;
  }

  // New announcement handling methods
  async processAnnouncements(): Promise<void> {
    const announcements = this.loadAnnouncements();
    await this.generateTimeline(announcements);
    await this.updateNavigation(announcements);
  }

  private loadAnnouncements(): Announcement[] {
    const announcementsDir = join(process.cwd(), announcementConfig.directory);
    const files = readdirSync(announcementsDir).filter(file => file.endsWith('.md'));
    
    const announcements = files.map(file => {
      const content = readFileSync(join(announcementsDir, file), 'utf8');
      const { metadata, body } = this.parseAnnouncementFrontMatter(content);
      
      return {
        date: parse(metadata.date, announcementConfig.dateFormat, new Date()),
        title: metadata.title,
        author: metadata.author || announcementConfig.defaultAuthor,
        content: body,
        slug: file.replace('.md', ''),
        category: metadata.category,
      };
    });

    return announcements.sort((a, b) => 
      announcementConfig.sortOrder === 'desc' 
        ? b.date.getTime() - a.date.getTime()
        : a.date.getTime() - b.date.getTime()
    );
  }

  private parseAnnouncementFrontMatter(content: string): { metadata: Record<string, string>; body: string } {
    const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = content.match(frontMatterRegex);

    if (!match) {
      throw new Error('Invalid announcement format: Missing front matter');
    }

    const metadata = {};
    const frontMatter = match[1];
    const body = match[2];

    frontMatter.split('\n').forEach(line => {
      const [key, value] = line.split(':').map(s => s.trim());
      if (key && value) {
        metadata[key] = value;
      }
    });

    // Validate required fields
    announcementConfig.requiredFields.forEach(field => {
      if (!metadata[field]) {
        throw new Error(`Missing required field in announcement: ${field}`);
      }
    });

    return { metadata, body };
  }

  private async generateTimeline(announcements: Announcement[]): Promise<void> {
    const timelineHtml = `
      <div class="announcements-timeline">
        <h2>${announcementConfig.timelineTitle}</h2>
        <div class="timeline">
          ${announcements.map(announcement => `
            <div class="timeline-item">
              <div class="timeline-date">${format(announcement.date, 'MMM d, yyyy')}</div>
              <div class="timeline-content">
                <h3><a href="${announcementConfig.navUrl}/${announcement.slug}">${announcement.title}</a></h3>
                <p class="author">By ${announcement.author}</p>
                ${marked.parse(announcement.content.split('\n')[0])}
              </div>
            </div>
          `).join('\n')}
        </div>
      </div>
    `;

    // Save timeline HTML
    const outputPath = join(process.cwd(), 'docs', '_includes', 'announcements-timeline.html');
    await writeFileSync(outputPath, timelineHtml);
  }

  private async updateNavigation(announcements: Announcement[]): Promise<void> {
    const configPath = join(process.cwd(), 'docs', '_config.yml');
    const config = yaml.load(readFileSync(configPath, 'utf8'));

    // Add announcements to navigation if not present
    if (!config.navigation.some(item => item.url === announcementConfig.navUrl)) {
      config.navigation.splice(1, 0, {
        title: announcementConfig.navTitle,
        url: announcementConfig.navUrl
      });
    }

    await writeFileSync(configPath, yaml.dump(config));
  }
}

// Usage example:
// const parser = new ContentParser();
// const content = await parser.fetchContent('https://raw.githubusercontent.com/...');
// const template = parser.generateTemplate(content: unkno,w,n);
