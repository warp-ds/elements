import { html } from 'lit';

import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpBadge } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpBadge>('w-badge');

const meta: Meta<typeof args> = {
  title: 'Layout/Badge',
  render(args) {
    return html`<w-badge ${spread(prespread(args))}>Badge text</w-badge>`;
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
    return html`
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge ${spread(prespread(args))}>Badge</w-badge>
      </div>
    `;
  },
};
