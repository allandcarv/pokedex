import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import vitestPlugin from 'eslint-plugin-vitest';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vanillaExtract from '@antebudimir/eslint-plugin-vanilla-extract';

export default defineConfig([
  globalIgnores(['dist', 'node_modules', '.vite']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['**/*.{test,spec}.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      vanillaExtract.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser, ...globals.node, ...globals.vitest },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            ['^node:'],
            ['^react', '^@?\\w'],
            ['^[^.]+'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['\\.css$', '\\.scss$', '\\.sass$', '\\.less$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  {
    files: ['**/*.{test,spec}.{ts,tsx}'],
    plugins: {
      vitest: vitestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.vitest,
      },
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
    },
  },
]);
