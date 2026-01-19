import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';
import '../utils/expand-transition.js';
import '../utils/unstyled-heading.js';

import type { WarpExpandable } from './expandable.js';
import './expandable.js';

const { events, args, argTypes } = getStorybookHelpers<WarpExpandable>('w-expandable');

const meta: Meta<typeof args> = {
  title: 'Layout/Expandable',
  render(args) {
    return html`
      <w-expandable ${spread(prespread(args))}>
        <p>This is the expandable content that can be shown or hidden.</p>
        <p>It can contain multiple paragraphs and other elements.</p>
      </w-expandable>
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
    title: "I'm expandable",
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': false,
  },
};

export const Expanded: Story = {
  args: {
    title: "I'm expanded by default",
    expanded: true,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': false,
  },
};

export const Box: Story = {
  args: {
    title: "I'm a box expandable",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false,
  },
};

export const Animated: Story = {
  args: {
    title: "I'm animated",
    expanded: false,
    box: true,
    bleed: false,
    animated: true,
    'no-chevron': false,
  },
};

export const WithHeading: Story = {
  args: {
    title: "I'm wrapped in h2",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false,
    'heading-level': 2,
  },
};

export const NoChevron: Story = {
  args: {
    title: 'I have no chevron',
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': true,
  },
};

export const CustomTitle: Story = {
  args: {
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false,
  },
  render(args) {
    return html`
      <w-expandable ${spread(prespread(args))}>
        <div slot="title" style="display: flex; align-items: center;">
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </w-expandable>
    `;
  },
};

export const NoTitle: Story = {
  args: {
    expanded: true,
    box: true,
    animated: true,
  },
  render(args) {
    return html`
      <w-button aria-label="Toggle expandable content without title" aria-controls="expandableWithoutTitle">Toggle</w-button>
      <w-expandable ${spread(prespread(args))} id="expandableWithoutTitle">
        <p>with expanded content</p>
      </w-expandable>
      <script>
        document.querySelector('[aria-controls="expandableWithoutTitle"]').addEventListener('click', () => {
          const expand = document.getElementById('expandableWithoutTitle');
          if (expand.expanded) {
            expand.removeAttribute('expanded');
          } else {
            expand.setAttribute('expanded', 'true');
          }
        });
      </script>
    `;
  },
};
