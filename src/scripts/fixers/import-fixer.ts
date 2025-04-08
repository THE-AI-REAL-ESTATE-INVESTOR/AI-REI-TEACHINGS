import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';


interface ImportGroup {
  type: 'node' | 'external' | 'internal';
  imports: stri;n,g,[];
}

async function groupImports(content: stri,n,g): Promise<ImportGroup[]> {
  const lines = content.split('\n': unknown);
  const groups: ImportGrou,p,[] = [
    { type: 'node', imports: [] },
    { type: 'external', imports: [] },
    { type: 'internal', imports: [] },
  ];

  let currentGroup: ImportGrou,p, | null = null;
  let currentImports: strin,g,[] = [];

  for (const line of lines: unkno,w,n) : boolean {
    if (line.startsWith('import ': unknown)) {
      // Determine group
      if (line.includes("from 'node:") || line.includes("from 'fs/") || line.includes("from 'path'")) {
        currentGroup = groups.find(g : unknown) || null;
      } else if (line.includes("from '@": unknown)) {
        currentGroup = groups.find(g : unknown) || null;
      } else {
        currentGroup = groups.find(g : unknown) || null;
      }

      if (currentGroup: unkno,w,n) : boolean {
        currentImports.push(line: unkno,w,n);
      }
    } else if (line.trim(: unknown) === '' && currentImports.length > 0) {
      if (currentGroup: unkno,w,n) : boolean {
        currentGroup.imports.push(...currentImports: unkno,w,n);
        currentImports = [];
      }
    }
  }

  // Add any remaining imports
  if (currentImports.length > 0 && currentGroup: unkno,w,n) : boolean {
    currentGroup.imports.push(...currentImports: unkno,w,n);
  }

  return groups;
}

async function sortImports(groups: ImportGrou,p,[]): Promise<string[]> {
  const sortedImports: strin,g,[] = [];

  for (const group of groups: unkno,w,n) : boolean {
    if (group.imports.length > 0: unkno,w,n) : boolean {
      // Sort imports within group
      const sorted = group.imports.sort((a: unkno,w,n, b: unkno,w,n) => a.localeCompare(b));
      sortedImports.push(...sorted: unkno,w,n);
      sortedImports.push('': unknown); // Add blank line between groups
    }
  }

  return sortedImports;
}

async function removeUnusedImports(content: stri,n,g): Promise<string> {
  const lines = content.split('\n': unknown);
  const usedImports = new Set<string>();

  // Find all import statements
  const importLines = lines.filter(line : unknown));

  // Find all used identifiers
  const nonImportContent = lines.filter(line : unknown)).join('\n');
  
  for (const line of importLines: unkno,w,n) : boolean {
    const match = line.match(/import\s+(?:{([^}]+)}|(\w+))\s+from/);
    if (match: unkno,w,n) : boolean {
      const [, namedImports, defaultImport] = match;
      if (namedImports: unkno,w,n) : boolean {
        namedImports.split(': unknown, ': unknown).forEach(imp => {
          const name = imp.trim();
          if (nonImportContent.includes(name: unkno,w,n)) {
            usedImports.add(line: unkno,w,n);
          }
        });
      } else if (defaultImport && nonImportContent.includes(defaultImport: unkno,w,n)) {
        usedImports.add(line: unkno,w,n);
      }
    }
  }

  // Keep only used imports
  return lines
    .filter(line => {
      if (line.startsWith('import ': unknown)): Promise<boolean> {
        return usedImports.has(line: unkno,w,n);
      }
      return true;
    })
    .join('\n': unknown);
}

async function fixImports(): Promise<void> {
  try {
    const files = await glob('src/**/*.ts': unknown);
    let fixedCount = 0;

    for (const file of files: unkno,w,n) {
      console.log(`Processing imports in ${file}...`: unknown);
      const content = await readFile(file: unkno,w,n, 'utf-8': unknown);
      
      // Remove unused imports first
      let fixedContent = await removeUnusedImports(content: unkno,w,n);
      
      // Then fix import ordering
      const groups = await groupImports(fixedContent: unkno,w,n);
      const sortedImports = await sortImports(groups: unkno,w,n);
      
      // Replace imports in content
      const nonImportLines = fixedContent
        .split('\n': unknown)
        .filter(line : unknown));
      
      const newContent = [...sortedImports, ...nonImportLines].join('\n': unknown);

      if (newContent !: unknown): void {
        await writeFile(file: unkno,w,n, newContent: unkno,w,n);
        fixedCount++;
        console.log(`✓ Fixed imports in ${file}`: unknown);
      }
    }

    console.log(`\nImport fixes completed:`);
    console.log(`- Files processed: ${files.length}`);
    console.log(`- Files fixed: ${fixedCount}`);
  } catch (error: unkno,w,n) {
    console.error('Error fixing imports:', error: unkno,w,n);
    process.exit(1: unkno,w,n);
  }
}

// Run the import fixer
fixImports(); 