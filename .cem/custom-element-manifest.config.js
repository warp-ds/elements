import { cemValidatorPlugin } from '@wc-toolkit/cem-validator';
import { jsxTypesPlugin } from '@wc-toolkit/jsx-types';
import { getTsProgram, typeParserPlugin } from '@wc-toolkit/type-parser';

export default {
  overrideModuleCreation: ({ ts, globs }) => {
    const program = getTsProgram(ts, globs, 'tsconfig.json');
    return program.getSourceFiles().filter((sf) => globs.find((glob) => sf.fileName.includes(glob)));
  },

  // Globs to analyze
  globs: [
    // released
    'packages/affix/index.ts',
    'packages/alert/index.ts',
    'packages/attention/index.ts',
    'packages/badge/index.ts',
    'packages/box/index.ts',
    'packages/breadcrumbs/index.ts',
    'packages/button/index.ts',
    'packages/card/index.ts',
    'packages/expandable/index.ts',
    'packages/pill/index.ts',
    'packages/select/index.ts',
    'packages/textfield/index.ts',
    'packages/modal/index.ts',
    'packages/modal/modal-*.ts',
    'packages/toast/toast*.js',
    'packages/toast/toast.ts',
    'packages/toast/index.ts',
    'packages/toast/toast-container.ts',
    'packages/datepicker/index.ts',
    'packages/datepicker/datepicker.ts',
    'packages/link/index.ts',

    // unreleased
    // 'packages/combobox/index.ts',
    // 'packages/deadtoggle/index.ts',
    // 'packages/pageindicator/index.ts',
    // 'packages/pagination/index.ts',
    // 'packages/radio/radio*.ts',
    // 'packages/checkbox/checkbox.ts',
    // 'packages/checkbox/checkbox-group.ts',
    // 'packages/slider/slider.ts',
    // 'packages/slider/slider-thumb.ts',
    // 'packages/stepindicator/index.ts',
    // 'packages/switch/index.ts',
    // 'packages/tabs/tab.ts',
    // 'packages/tabs/tabs.ts',
    // 'packages/textarea/textarea.ts',
  ],

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

  plugins: [
    cemValidatorPlugin(),
    typeParserPlugin(),
    jsxTypesPlugin({
      outdir: 'dist/',
      fileName: 'index.d.ts',
      /* @wc-toolkit/jsx-types uses the paths recorded in your Custom Elements Manifest to build the imports for JSX type generation.
    Specifically:
      •	It reads modulePath or declaration.module values from the CEM.
      •	Then it passes those into a path join/normalize function.
      •	However, it does not prefix relative paths with ./, meaning packages/foo/index.ts is treated as a bare module specifier, not a relative path — which is invalid in most TypeScript/ESM contexts.
    So we use this hook to rewrite incorrect modulePath to correct ones */
      componentTypePath(name, tag, modulePath) {
        return modulePath.replace('packages', './packages');
      },
    }),
  ],
};
