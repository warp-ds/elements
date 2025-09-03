import type { StoryObj } from '@storybook/web-components-vite';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

const { events, args, argTypes } = getWcStorybookHelpers('w-badge');

const meta = {
  title: 'Layout/Badge',
  render(args) {
    return `<w-badge ${toAttributeString(args)}>Badge text</w-badge>`;
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

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
};

export const Positive: Story = {
  args: {
    variant: 'positive',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Negative: Story = {
  args: {
    variant: 'negative',
  },
};

export const Price: Story = {
  args: {
    variant: 'price',
  },
};

export const Sponsored: Story = {
  args: {
    variant: 'sponsored',
  },
};

export const Positioned: Story = {
  args: {
    variant: 'price',
    position: 'top-right',
  },
  render(args) {
    return `
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge ${toAttributeString(args)}>Badge</w-badge>
      </div>
    `;
  },
};
