import fs from 'fs';
import path from 'path';
import env from '../config/env';

interface ContentMetadata {
  title: string;
  author: string;
  date: string;
  attribution: string[];
  license: string;
}

function formatContent(filePath: string, metadata: ContentMetadata) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath, '.md');
  
  // Create formatted content with Jekyll front matter
  const formattedContent = `---
layout: default
title: ${metadata.title}
author: ${metadata.author}
date: ${metadata.date}
---

${content}

## Attribution
This content is based on and inspired by:
${metadata.attribution.map(attr => `- ${attr}`).join('\n')}

## License
${metadata.license}

---
*Last updated: ${metadata.date}*

## Navigation
- [Back to Learning Hub](../index.md)
- [Back to Main Site](/)
`;

  // Write formatted content back to the same file
  fs.writeFileSync(filePath, formattedContent);
  console.log(`Formatted content saved to: ${filePath}`);
}

// Example usage
const metadata: ContentMetadata = {
  title: 'Fabric AI Patterns',
  author: 'AI REI Teachings',
  date: 'March 2024',
  attribution: [
    'Fabric AI Documentation (https://github.com/danielmiessler/fabric)',
    'Daniel Miessler\'s Work (https://danielmiessler.com)'
  ],
  license: 'This content is licensed under MIT and includes modifications and additions by AI REI Teachings.'
};

// Format existing content
const learnDir = path.join(env.learnPath);
const files = fs.readdirSync(learnDir).filter(file => file.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(learnDir, file);
  formatContent(filePath, metadata);
} 