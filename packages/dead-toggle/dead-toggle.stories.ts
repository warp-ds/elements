import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';

import type { WarpDeadToggle } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpDeadToggle>('w-dead-toggle');

const meta: Meta<typeof args> = {
  title: 'Forms/Dead toggle',
  render(args) {
    return `
      <w-dead-toggle ${toAttributeString(args)}></w-dead-toggle>
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
  args: {},
};
