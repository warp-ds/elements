import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { toAttributeString } from '../../.storybook/utilities.js';
import '../utils/expand-transition.js';
import '../utils/unstyled-heading.js';
import './index.js';

type Args = {
  expanded: boolean;
  title: string;
  box: boolean;
  bleed: boolean;
  animated: boolean;
  'no-chevron': boolean;
  'heading-level': number;
  'button-class': string;
  'content-class': string;
};

const meta: Meta<Args> = {
  component: 'w-expandable',
  render(args) {
    return `
      <w-expandable ${toAttributeString(args)}>
        <p>This is the expandable content that can be shown or hidden.</p>
        <p>It can contain multiple paragraphs and other elements.</p>
      </w-expandable>
    `;
  },
  argTypes: {
    expanded: {
      type: 'boolean',
      description: 'Controls the expanded state',
    },
    title: {
      type: 'string',
      description: 'Title text for the expandable',
    },
    box: {
      type: 'boolean',
      description: 'Display as a padded box',
    },
    bleed: {
      type: 'boolean',
      description: 'Make full-width on mobile',
    },
    animated: {
      type: 'boolean',
      description: 'Animate open and close',
    },
    'no-chevron': {
      type: 'boolean',
      description: 'Hide the chevron icon',
    },
    'heading-level': {
      type: 'number',
      description: 'Wrap toggle button in heading element',
    },
    'button-class': {
      type: 'string',
      description: 'Additional CSS classes for button',
    },
    'content-class': {
      type: 'string',
      description: 'Additional CSS classes for content',
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

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
