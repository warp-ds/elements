import type { StoryObj } from '@storybook/web-components-vite';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

const { events, args, argTypes } = getWcStorybookHelpers('w-select');

const meta = {
  title: 'Forms/Select',
  render(args) {
    return `
      <w-select ${toAttributeString(args)}>
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
type Story = StoryObj;

export const Primary: Story = {
  args: {
    label: 'Berries',
  },
};
