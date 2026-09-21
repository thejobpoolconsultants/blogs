import js from '@eslint/js';
import ts from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
export default defineConfig(
  { ignores: ['dist/**', '.astro/**', 'node_modules/**', 'artifacts/**'] },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        URL: 'readonly',
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        matchMedia: 'readonly',
        HTMLElement: 'readonly',
        HTMLButtonElement: 'readonly',
        CustomEvent: 'readonly',
        setTimeout: 'readonly',
      },
    },
  },
);
