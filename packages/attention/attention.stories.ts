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
  decorators: [
    (story) => html`
      ${story()}
      <script>
        // use IIFE to create local scope
        (() => {
          const popoverIconEl = document.getElementById('attention-element');
          const popoverIconTarget = document.getElementById('icon-button-target');
          popoverIconTarget.addEventListener('click', () => {
            popoverIconEl.show = !popoverIconEl.show;
          });
        })();
      </script>
    `,
  ],
};

export const ToolTip: Story = {
  args: { placement: 'right', buttonText: 'hover me', id: 'tooltip-element', tooltip: true, flip: true, buttonId: 'tooltip-target' },
  decorators: [
    (story) => html`
      ${story()}
      <script>
        (() => {
          const button = document.getElementById('tooltip-target');
          const tooltip = document.getElementById('tooltip-element');
          button.addEventListener('mouseenter', () => {
            tooltip.show = true;
          });
          button.addEventListener('mouseleave', () => {
            tooltip.show = false;
          });
          button.addEventListener('focus', () => {
            tooltip.show = true;
          });
          button.addEventListener('blur', () => {
            tooltip.show = false;
          });
        })();
      </script>
    `,
  ],
};

export const Callout: Story = {
  args: { buttonText: 'i need a callout', class: 'flex items-center gap-8', placement: 'right', callout: true, show: true },
};

export const Highlight: Story = {
  args: {
    buttonId: 'highlight-target1',
    id: 'highlight-message',
    buttonText: `I'm highlighted`,
    placement: 'right',
    highlight: true,
    flip: true,
  },
  decorators: [
    (story) => html`
      ${story()}
      <script>
        (() => {
          const button = document.getElementById('highlight-target1');
          const highlight = document.getElementById('highlight-message');
          button.addEventListener('click', () => {
            highlight.show = !highlight.show;
          });
        })();
      </script>
    `,
  ],
};

export const DismissibleHighlight: Story = {
  args: {
    class: 'flex items-center gap-8',
    placement: 'right',
    buttonId: 'highlight-target2',
    buttonText: 'click me',
    id: 'dismissible-highlight-message',
    ['can-close']: true,
    ['cross-axis']: true,
    highlight: true,
    flip: true,
  },
  decorators: [
    (story) => html`
      ${story()}
      <script>
        (() => {
          const button = document.getElementById('highlight-target2');
          const highlight = document.getElementById('dismissible-highlight-message');
          button.addEventListener('click', () => {
            highlight.show = true;
          });
          highlight.addEventListener('close', () => {
            highlight.show = false;
          });
        })();
      </script>
    `,
  ],
};

export const AccessibleTooltip: Story = {
  args: {},
  render(args) {
    return html`
      <w-attention id="accessible-attention" placement="right" popover>
        <div slot="message">
          <p id="aria-content" role="tooltip">I'm a popover with ARIA "tooltip" role</p>
          <p>(this text is less relevant)</p>
        </div>
        <button
          aria-details="aria-content"
          id="accessible-target"
          class="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target">
          Click to toggle a popover
        </button>
      </w-attention>
    `;
  },
  decorators: [
    (story) =>
      html` ${story()}
        <script>
          (() => {
            const button = document.getElementById('accessible-target');
            const accessibleAttention = document.getElementById('accessible-attention');
            button.addEventListener('click', () => {
              accessibleAttention.show = !accessibleAttention.show;
            });
          })();
        </script>`,
  ],
};
