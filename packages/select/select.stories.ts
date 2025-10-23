import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpSelect } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpSelect>('w-select');

const meta: Meta<typeof args> = {
  title: 'Forms/Select',
  render(args) {
    return html`
      <w-select ${spread(prespread(args))}>
        <w-option value="strawberries">Strawberries</w-option>
        <option value="raspberries" selected>Raspberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>
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
    label: 'Berries',
  },
};
