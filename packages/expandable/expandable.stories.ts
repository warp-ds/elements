import type { StoryObj } from '@storybook/web-components-vite';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';
import '../utils/expand-transition.js';
import '../utils/unstyled-heading.js';
import './index.js';

const { events, args, argTypes } = getWcStorybookHelpers('w-expandable');

const meta = {
  title: 'Layout/Expandable',
  render(args) {
    return `
      <w-expandable ${toAttributeString(args)}>
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
type Story = StoryObj;

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
    return `
      <w-expandable ${toAttributeString(args)}>
        <div slot="title" style="display: flex; align-items: center;">
          <span style="margin-right: 8px;">🎯</span>
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </w-expandable>
    `;
  },
};
