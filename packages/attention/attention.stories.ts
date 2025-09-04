import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';

import type { WarpAttention } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpAttention>('w-attention');

const meta: Meta<typeof args> = {
  title: 'Overlays/Attention',
  render(args) {
    return `
      <w-attention ${toAttributeString(args)}>
        <button
          id="popoverTarget"
          class="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target"
        >
          Click to toggle a popover
        </button>
        <span slot="message">I'm a popover</span>
      </w-attention>
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
