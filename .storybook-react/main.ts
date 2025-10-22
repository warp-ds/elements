import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../packages/**/*.react.stories.tsx'],
  docs: {},
};

export default config;
