import type { StoryObj } from '@storybook/web-components-vite';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

const { events, args, argTypes } = getWcStorybookHelpers('w-button');

const meta = {
  title: 'Buttons/Button',
  render(args) {
    return `<w-button ${toAttributeString(args)}>Button Text</w-button>`;
  },
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    type: 'button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    type: 'button',
  },
};

export const Negative: Story = {
  args: {
    variant: 'negative',
    type: 'button',
  },
};

export const Utility: Story = {
  args: {
    variant: 'utility',
    type: 'button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    type: 'button',
  },
};

export const Pill: Story = {
  args: {
    variant: 'pill',
    type: 'button',
  },
  render(args) {
    return `<w-button ${toAttributeString(args)}>💙</w-button>`;
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    small: true,
    type: 'button',
  },
};

export const Quiet: Story = {
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    type: 'button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    'full-width': true,
    type: 'button',
  },
};

export const AsLink: Story = {
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    type: 'button',
  },
  render(args) {
    return `<w-button ${toAttributeString(args)}>Visit Example</w-button>`;
  },
};
