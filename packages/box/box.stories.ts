import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

type Args = {
  bleed: boolean;
  bordered: boolean;
  info: boolean;
  neutral: boolean;
  role: string;
};

const meta: Meta<Args> = {
  title: 'Layout/Box',
  component: 'w-box',
  render(args) {
    return `
      <w-box ${toAttributeString(args)}>
        <h3>Box Content</h3>
        <p>This is content inside a box component.</p>
      </w-box>
    `;
  },
  argTypes: {
    bleed: {
      type: 'boolean',
      description: 'Makes the box full-width on mobile',
    },
    bordered: {
      type: 'boolean',
      description: 'Adds a border to the box',
    },
    info: {
      type: 'boolean',
      description: 'Styles the box with light blue colors',
    },
    neutral: {
      type: 'boolean',
      description: 'Styles the box with light gray colors',
    },
    role: {
      type: 'string',
      description: 'ARIA role attribute',
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false,
    role: 'region',
  },
};

export const Info: Story = {
  args: {
    info: true,
    role: 'region',
  },
};

export const Neutral: Story = {
  args: {
    neutral: true,
    role: 'region',
  },
};

export const Bordered: Story = {
  args: {
    bordered: true,
    role: 'region',
  },
};

export const Bleed: Story = {
  args: {
    bleed: true,
    neutral: true,
    role: 'region',
  },
};
