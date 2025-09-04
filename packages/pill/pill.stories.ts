import { html } from 'lit';

import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpPill } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpPill>('w-pill');

const meta: Meta<typeof args> = {
  title: 'Buttons/Pill',
  render(args) {
    return html`<w-pill ${spread(prespread(args))}>Lorem</w-pill>`;
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
  args: {},
};

export const Suggestion: Story = {
  args: {
    suggestion: true,
  },
};

export const Closable: Story = {
  args: {
    'can-close': true,
  },
};
