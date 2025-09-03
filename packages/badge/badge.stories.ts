import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

type Args = {
  variant: 'neutral' | 'info' | 'positive' | 'warning' | 'negative' | 'disabled' | 'price' | 'sponsored';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

const meta: Meta<Args> = {
  component: 'w-badge',
  render(args) {
    return `<w-badge ${toAttributeString(args)}>Badge text</w-badge>`;
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price', 'sponsored'],
      description: 'The visual style variant of the badge'
    },
    position: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Position for absolutely positioned badges'
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

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
