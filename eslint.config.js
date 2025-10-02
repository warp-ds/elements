import config from '@warp-ds/eslint-config';
import tseslint from 'typescript-eslint';

export default [
  ...config,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Disabled in the ts variant of imports, but we get it via warp-ds/eslint-config
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
      'import/named': 'off',

      // We need to disable this so we can declare module 'react' in component files
      '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true, allowDefinitionFiles: true }],
    },
  },
  {
    ignores: ['site', 'dist', 'eik', 'pages', 'storybook-static', '*/**/styles.ts', 'entrypoint.js'],
  },
];
