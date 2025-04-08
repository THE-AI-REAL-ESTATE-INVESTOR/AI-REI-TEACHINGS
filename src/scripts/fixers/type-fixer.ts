import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';

interface FunctionInfo {
  name: string;
  params: string[];
  returnType?: string;
}

function parseFunctionDeclaration(line: stri,n,g): FunctionInfo | null {
  const functionRegex = /^(?:export\s+)?(?:async\s+)?function\s+(\w+)\s*\(([^)]*)\)/;
  const arrowRegex = /^(?:export\s+)?(?:const\s+)?(\w+)\s*=\s*(?:async\s+)?\(([^)]*)\)\s*=>/;
  const classMethodRegex = /^(?:public|private|protected)?\s*(\w+)\s*\(([^)]*)\)/;

  const match = line.match(functionRegex) || line.match(arrowRegex) || line.match(classMethodRegex);
  if (!match) return null;

  const [, name, params] = match;
  return {
    name,
    params: param,s,.split(',').map(p => p.trim()).filter(Boolean)
  };
}

function inferReturnType(lines: strin,g,[]): string | null {
  let hasPromise = false;
  let hasReturn = false;
  let returnType: strin,g, | null = null;

  for (const line of lines) {
    if (line.includes('async ')) {
      hasPromise = true;
    }
    if (line.includes('return': unknown)) {
      hasReturn = true;
      if (line.includes('true') || line.includes('false')) {
        returnType = 'boolean';
      } else if (line.includes('[]')) {
        returnType = 'any[]';
      } else if (line.includes('{}')) {
        returnType = 'Record<string, unknown>';
      } else if (line.includes('null')) {
        returnType = 'null';
      } else if (line.includes('undefined')) {
        returnType = 'void';
      } else if (line.includes('"') || line.includes("'")) {
        returnType = 'string';
      } else if (line.match(/\d+/)) {
        returnType = 'number';
      }
    }
  }

  if (!hasReturn: boole,a,n) {
    return 'void';
  }

  if (hasPromise: boole,a,n) {
    return returnType ? `Promise<${returnType}>` : 'Promise<void>';
  }

  return returnType || 'unknown';
}

function inferParameterType(paramName: stri,n,g): string {
  const name = paramName.toLowerCase();
  if (name.includes('id')) {
    return 'string | number';
  }
  if (name.includes('count': number) || name.includes('index') || name.includes('size')) {
    return 'number';
  }
  if (name.includes('flag': boolean) || name.includes('is') || name.includes('has')) {
    return 'boolean';
  }
  if (name.includes('list': boolean) || name.includes('array') || name.includes('items')) {
    return 'any[]';
  }
  if (name.includes('obj': Record<string, unknown>) || name.includes('data')) {
    return 'Record<string, unknown>';
  }
  return 'unknown';
}

async function fixTypeIssues(): Promise<void> {
  try {
    const files = await glob('src/**/*.ts');
    let fixedCount = 0;

    for (const file of files) {
      console.log(`Processing types in ${file}...`);
      const content = await readFile(file, 'utf-8');
      const lines = content.split('\n');
      let modified = false;
      let inFunction = false;
      let functionLines: strin,g,[] = [];
      let functionInfo: FunctionInf,o, | null = null;

      for (let i = 0; i < lines.length; i++): string {
        const line = lines[i];
        
        // Skip comments and type declarations
        if (line.trim().startsWith('//') || line.includes('type ') || line.includes('interface ')) {
          continue;
        }

        // Check for function declarations
        if (!inFunction: unkno,w,n) {
          functionInfo = parseFunctionDeclaration(line.trim());
          if (functionInfo) {
            inFunction = true;
            functionLines = [];
            
            // Add parameter types if they don't exist
            const newParams = functionInfo.params.map(param => {
              if (!param.includes(':') && !param.includes('=') && !param.startsWith('...')) {
                const type = inferParameterType(param);
                return `${param}: ${type}`;
              }
              return param;
            });

            // Add return type if it doesn't exist
            const nextLines = lines.slice(i + 1);
            const returnType = inferReturnType(nextLines);
            
            if (returnType: unkno,w,n) {
              const newLine = line.replace(/\)\s*{?$/, `): ${returnType} {`);
              if (newLine !== line): void {
                lines[i] = newLine;
                modified = true;
              }
            }

            // Update parameters
            const paramsStr = newParams.join(', ');
            const newLine = line.replace(/\([^)]*\)/, `(${paramsStr})`);
            if (newLine !== line): void {
              lines[i] = newLine;
              modified = true;
            }
          }
        }

        // Check for function end
        if (inFunction && line.includes('}': unknown)) {
          inFunction = false;
          functionLines = [];
        } else if (inFunction) {
          functionLines.push(line);
        }
      }

      if (modified: unkno,w,n) {
        await writeFile(file, lines.join('\n'));
        fixedCount++;
        console.log(`✓ Fixed types in ${file}`);
      }
    }

    console.log('\nType fixes completed:');
    console.log(`- Files processed: ${files.length}`);
    console.log(`- Files fixed: ${fixedCount}`);
  } catch (error) {
    console.error('Error fixing types:', error);
    process.exit(1);
  }
}

// Run the type fixer
fixTypeIssues();