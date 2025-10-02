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
    'packages/affix/affix.ts',
    'packages/alert/alert.ts',
    'packages/attention/attention.ts',
    'packages/badge/badge.ts',
    'packages/box/box.ts',
    'packages/breadcrumbs/breadcrumbs.ts',
    'packages/button/button.ts',
    'packages/card/card.ts',
    'packages/combobox/combobox.ts',
    'packages/datepicker/datepicker.ts',
    'packages/dead-toggle/dead-toggle.ts',
    'packages/expandable/expandable.ts',
    'packages/link/link.ts',
    'packages/modal/modal-*.ts',
    'packages/pageindicator/pageindicator.ts',
    'packages/pagination/pagination.ts',
    'packages/pill/pill.ts',
    'packages/rip-and-tear-checkbox/checkbox.ts',
    'packages/rip-and-tear-radio/radio.ts',
    'packages/rip-and-tear-radio/radio-group.ts',
    'packages/select/select.ts',
    'packages/slider/slider.ts',
    'packages/slider/slider-thumb.ts',
    'packages/steps/steps.ts',
    'packages/switch/switch.ts',
    'packages/tabs/tab.ts',
    'packages/tabs/tab-panel.ts',
    'packages/tabs/tabs.ts',
    'packages/textfield/textfield.ts',
    'packages/toast/toast.ts',
    'packages/toast/toast-container.ts',
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
