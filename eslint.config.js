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
    },
  },
  {
    ignores: ['site', 'dist', 'eik', 'pages', 'storybook-static', '*/**/styles.ts', 'entrypoint.js'],
  },
];
