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
  
  // Create formatted content
  const formattedContent = `# ${metadata.title}

## Overview
${content.split('\n')[0] || 'Overview of the content'}

## Content
${content}

## Attribution
This content is based on and inspired by:
${metadata.attribution.map(attr => `- ${attr}`).join('\n')}

## License
${metadata.license}

---
*Last updated: ${metadata.date}*

## Navigation
- [Back to Fabric AI Learning Hub](./index.md)
- [Back to AI Learning Hub](../index.md)
- [Back to Main Learning Hub](../../index.md)
`;

  // Create Fabric-AI directory if it doesn't exist
  const fabricAIDir = path.join(path.dirname(filePath), 'AI', 'Fabric-AI');
  if (!fs.existsSync(fabricAIDir)) {
    fs.mkdirSync(fabricAIDir, { recursive: true });
  }

  // Write formatted content
  const newPath = path.join(fabricAIDir, fileName + '.md');
  fs.writeFileSync(newPath, formattedContent);
  console.log(`Formatted content saved to: ${newPath}`);
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