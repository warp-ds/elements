import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpBox } from './box.js';
import './box.js';

const { events, args, argTypes } = getStorybookHelpers<WarpBox>('w-box');

const meta: Meta<typeof args> = {
  title: 'Layout/Box',
  render: (args) => {
    return html`
      <w-box ${spread(prespread(args))}>
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

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    role: 'region',
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    role: 'region',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    role: 'region',
  },
};
