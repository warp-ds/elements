import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';

import type { WarpAffix } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpAffix>('w-affix');

const meta: Meta<typeof args> = {
  title: 'Forms/Affix',
  render(args) {
    return html`<w-affix ${toAttributeString(args)}></w-affix>`;
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
    label: 'kr',
  },
};
