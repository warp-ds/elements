import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';

import '../utils/expand-transition.js';
import type { WarpAlert } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpAlert>('w-alert');

const meta: Meta<typeof args> = {
  title: 'Feedback/Alert',
  render(args) {
    return html`
      <w-alert ${toAttributeString(args)}>
        <p>This is an alert message</p>
      </w-alert>
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
    return html`
      <w-alert ${toAttributeString(args)}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    `;
  },
};
