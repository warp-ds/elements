import { html } from 'lit';

import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpSelect } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpSelect>('w-select');

const meta: Meta<typeof args> = {
  title: 'Forms/Select',
  render(args) {
    return html`
      <w-select ${spread(prespread(args))}>
        <option value="strawberries">Strawberries</option>
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

export const Primary: Story = {
  args: {
    label: 'Berries',
  },
};
