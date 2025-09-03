import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

type Args = {
  variant: 'primary' | 'secondary' | 'negative' | 'utility' | 'link' | 'pill';
  quiet: boolean;
  small: boolean;
  loading: boolean;
  href?: string;
  target?: string;
  rel?: string;
  'full-width': boolean;
  type: 'button' | 'submit' | 'reset';
};

const meta: Meta<Args> = {
  component: 'w-button',
  render(args) {
    return `<w-button ${toAttributeString(args)}>Button Text</w-button>`;
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'negative', 'utility', 'link', 'pill'],
      description: 'Visual style variant of the button'
    },
    quiet: { 
      type: 'boolean',
      description: 'Removes background and border styling'
    },
    small: { 
      type: 'boolean',
      description: 'Smaller button size'
    },
    loading: { 
      type: 'boolean',
      description: 'Shows loading state with animation'
    },
    href: { 
      type: 'string',
      description: 'Makes button render as anchor link'
    },
    target: { 
      type: 'string',
      description: 'Link target (when href is set)'
    },
    rel: { 
      type: 'string',
      description: 'Link relationship (when href is set)'
    },
    'full-width': { 
      type: 'boolean',
      description: 'Makes button take full width of container'
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute'
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    type: 'button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    type: 'button',
  },
};

export const Negative: Story = {
  args: {
    variant: 'negative',
    type: 'button',
  },
};

export const Utility: Story = {
  args: {
    variant: 'utility',
    type: 'button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    type: 'button',
  },
};

export const Pill: Story = {
  args: {
    variant: 'pill',
    type: 'button',
  },
  render(args) {
    return `<w-button ${toAttributeString(args)}>💙</w-button>`;
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    small: true,
    type: 'button',
  },
};

export const Quiet: Story = {
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    type: 'button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    'full-width': true,
    type: 'button',
  },
};

export const AsLink: Story = {
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    type: 'button',
  },
  render(args) {
    return `<w-button ${toAttributeString(args)}>Visit Example</w-button>`;
  },
};
