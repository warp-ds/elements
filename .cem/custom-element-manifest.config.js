import { cemValidatorPlugin } from '@wc-toolkit/cem-validator';
import { getTsProgram, expandTypesPlugin } from 'cem-plugin-expanded-types';

export default {
  overrideModuleCreation: ({ ts, globs }) => {
    const program = getTsProgram(ts, globs, 'tsconfig.json');
    return program.getSourceFiles().filter((sf) => globs.find((glob) => sf.fileName.includes(glob)));
  },

  // Globs to analyze
  globs: ['packages/**/index.ts', 'packages/**/index.js', 'packages/modal/modal-*.ts', 'packages/toast/toast*.js'],

  // Globs to exclude
  exclude: [],

  // Directory to output CEM to
  outdir: 'dist/',

  // Run in dev mode, provides extra logging
  dev: false,

  // Run in watch mode, runs on file changes
  watch: false,

  // Include third party custom elements manifests
  dependencies: true,

  // Enable special handling for litelement
  litelement: true,

  // The `analyze` command and the validator plugin
  // disagree on what's a valid path, so disable the
  // automatic package.json update.
  packagejson: false,

  plugins: [cemValidatorPlugin(), expandTypesPlugin()],
};
