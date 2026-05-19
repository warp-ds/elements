import type { StorybookConfig } from '@storybook/react-vite';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  stories: ['../packages/**/*.react.stories.tsx'],
  docs: {},

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
          }),
      ],
    });
  },
};

export default config;
