import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';

import type { WarpBox } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpBox>('w-box');

const meta: Meta<typeof args> = {
  title: 'Layout/Box',
  render: (args) => {
    return `
      <w-box ${toAttributeString(args)}>
        <h3>Box Content</h3>
        <p>This is content inside a box component.</p>
      </w-box>
    `;
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
type Story = StoryObj<typeof args>;

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
