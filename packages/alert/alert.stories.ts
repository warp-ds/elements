import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { toAttributeString } from '../../.storybook/utilities.js';
import '../utils/expand-transition.js';
import './index.js';

type Args = {
  variant: 'negative' | 'positive' | 'warning' | 'info';
  show: boolean;
  role: string;
};

const meta: Meta<Args> = {
  component: 'w-alert',
  render(args) {
    return `
      <w-alert ${toAttributeString(args)}>
        <p>This is an alert message</p>
      </w-alert>
    `;
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['negative', 'positive', 'warning', 'info'],
      description: 'The visual style variant of the alert',
    },
    show: {
      type: 'boolean',
      description: 'Whether the alert is visible',
    },
    role: {
      type: 'string',
      description: 'ARIA role for the alert',
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Info: Story = {
  args: {
    variant: 'info',
    show: true,
    role: 'alert',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    show: true,
    role: 'alert',
  },
};

export const Negative: Story = {
  args: {
    variant: 'negative',
    show: true,
    role: 'alert',
  },
};

export const Positive: Story = {
  args: {
    variant: 'positive',
    show: true,
    role: 'alert',
  },
};

export const WithDescription: Story = {
  args: {
    variant: 'info',
    show: true,
    role: 'alert',
  },
  render(args) {
    return `
      <w-alert ${toAttributeString(args)}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    `;
  },
};
