import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  framework: '@storybook/web-components-vite',
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  core: {
    builder: '@storybook/builder-vite',
  },
};

export default config;
