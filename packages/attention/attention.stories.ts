import { html } from 'lit';

import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpAttention } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpAttention>('w-attention');

const meta: Meta<typeof args> = {
  title: 'Overlays/Attention',
  render(args) {
    return html`
      <w-attention ${spread(prespread(args))}>
        <button
          ${spread({ id: args.buttonId })}
          class="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target">
          ${args.buttonText}
        </button>
        <span slot="message">I'm a message</span>
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
  args: {
    placement: 'bottom',
    popover: true,
    flip: true,
  },
  render(args) {
    return html`
      <w-attention ${spread(prespread(args))}>
        <w-button id="popoverTarget" slot="target"> Click to toggle a popover </w-button>
        <span slot="message">I'm a popover</span>
      </w-attention>

      <script>
        const popoverTarget = document.querySelector('#popoverTarget');
        const popoverEl = document.querySelector('[popover]');

        popoverTarget.addEventListener('click', () => {
          if (popoverEl.show) {
            popoverEl.removeAttribute('show');
          } else {
            popoverEl.setAttribute('show', 'true');
          }
        });
      </script>
    `;
  },
};
