import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';

import type { WarpButton } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpButton>('w-button');

const meta: Meta<typeof args> = {
  title: 'Buttons/Button',
  render(args) {
    return html`<w-button ${toAttributeString(args)}>Button Text</w-button>`;
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
    return html`<w-button ${toAttributeString(args)}>💙</w-button>`;
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
    return html`
      <div style="width: 50vw">
        <w-button ${toAttributeString(args)}>Visit Example</w-button>
      </div>
    `;
  },
};
