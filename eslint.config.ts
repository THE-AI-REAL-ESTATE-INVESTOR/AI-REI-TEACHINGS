import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import { rules as prettierRules } from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import prettier from 'prettier';
import importPlugin from 'eslint-plugin-import';

const config = [
  js.configs.recommended,
  {
    ignores: ['dist/**/*', 'node_modules/**/*'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        fetch: 'readonly',
        Response: 'readonly',
        Request: 'readonly',
        Headers: 'readonly',
        fs: 'readonly',
        path: 'readonly',
        marked: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
    },
    rules: {
      ...(tseslint.configs?.recommended?.rules ?? {}),
      ...(prettierRules ?? {}),
      ...(importPlugin.configs?.recommended?.rules ?? {}),
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'no-console': 'off',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/eslint.config.ts',
              message: 'ESLint configuration should only exist at the root level.',
            },
          ],
        },
      ],
      'prettier/prettier': 'error',
    },
  },
];

export default config;
