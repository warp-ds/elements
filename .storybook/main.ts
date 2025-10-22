import type { StorybookConfig } from '@storybook/web-components-vite';
// @ts-expect-error No type defs for classes
import { classes } from '@warp-ds/css/component-classes/classes';
// @ts-expect-error No type defs for classes
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  framework: '@storybook/web-components-vite',
  stories: ['../docs/**/*.mdx', '../packages/**/*.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal(config, { configType }) {
    return mergeConfig(config, {
      base: process.env.STORYBOOK_BASE || '',
      build: {
        target: 'esnext',
      },
      plugins: [
        uno({
          presets: [presetWarp()],
        }),
        configType === 'DEVELOPMENT' &&
          uno({
            mode: 'shadow-dom',
            presets: [presetWarp()],
            safelist: classes,
          }),
      ],
      optimizeDeps: {
        esbuildOptions: {
          target: 'esnext',
        },
      },
    });
  },
};

export default config;
