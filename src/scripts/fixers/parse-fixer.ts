import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';

interface ParseIssue {
  file: string;
  line: number;
  column: number;
  message: string;
}

// Helper to clean type declarations
function cleanTypeDeclaration(line: string): string {
  // Remove multiple semicolons and commas
  return line
    .replace(/([:\s])\s*[,;]+\s*([a-zA-Z])/g, '$1$2')  // Clean between type parts
    .replace(/([a-zA-Z])[,;]+([}\)])/g, '$1$2')        // Clean before closing
    .replace(/,(\s*[}\)])/g, '$1')                      // Remove trailing commas
    .replace(/;+\s*$/g, ';')                            // Clean multiple semicolons
    .replace(/,+\s*$/g, ',');                           // Clean multiple commas
}

// Helper to fix interface and type declarations
function fixTypeStructure(content: string): string {
  const lines = content.split('\n');
  let inTypeDeclaration = false;
  let openBraces = 0;

  return lines.map((line) => {
    // Check if we're entering a type/interface declaration
    if (line.match(/(interface|type)\s+\w+/)) {
      inTypeDeclaration = true;
    }

    // Count braces
    openBraces += (line.match(/{/g) || []).length;
    openBraces -= (line.match(/}/g) || []).length;

    // Clean the line if we're in a type declaration
    if (inTypeDeclaration) {
      line = cleanTypeDeclaration(line);
    }

    // Check if we're exiting the declaration
    if (openBraces === 0) {
      inTypeDeclaration = false;
    }

    return line;
  }).join('\n');
}

// Helper to fix function parameters
function fixFunctionParams(content: string): string {
  return content
    // Fix trailing commas in parameter lists
    .replace(/,(\s*\))/g, '$1')
    // Add missing closing parentheses (only if there's an opening one)
    .replace(/(\([^)]*$)/g, (match) => {
      const params = match.slice(1);
      return `(${params})`;
    });
}

// Helper to fix import statements
function fixImports(content: string): string {
  return content
    // Remove trailing commas in import lists
    .replace(/,(\s*}?\s*from\s*['"][^'"]+['"])/g, '$1')
    // Remove trailing commas after import statements
    .replace(/(from\s*['"][^'"]+['"])\s*,/g, '$1');
}

async function fixParsingIssues(): Promise<void> {
  try {
    console.log('🔍 Finding TypeScript files...');
    const files = await glob('src/**/*.ts');
    console.log(`Found ${files.length} TypeScript files`);

    let fixedCount = 0;
    const issues: ParseIssue[] = [];

    for (const file of files) {
      console.log(`\n📝 Processing ${file}...`);
      const content = await readFile(file, 'utf-8');
      
      // Apply fixes in specific order
      let newContent = content;
      newContent = fixTypeStructure(newContent);
      newContent = fixFunctionParams(newContent);
      newContent = fixImports(newContent);

      // Only write if changes were made
      if (newContent !== content) {
        await writeFile(file, newContent, 'utf-8');
        fixedCount++;
        console.log(`✅ Fixed parsing issues in ${file}`);
      } else {
        console.log(`ℹ️ No parsing issues found in ${file}`);
      }
    }

    console.log(`\n✨ Fixed parsing issues in ${fixedCount} files`);
    if (issues.length > 0) {
      console.log('\n⚠️ Remaining issues:');
      issues.forEach(issue => {
        console.log(`  ${issue.file}:${issue.line}:${issue.column} - ${issue.message}`);
      });
    }
  } catch (error) {
    console.error('❌ Error fixing parsing issues:', error);
    process.exit(1);
  }
}

// Run the fixer
fixParsingIssues(); 