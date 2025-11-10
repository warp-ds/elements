import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpLink } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpLink>('w-link');

const meta: Meta<typeof args> = {
  title: 'Buttons/Link',
  render(args) {
    return html`<w-link ${spread(prespread(args))}>Link Button Text</w-link>`;
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
    variant: 'primary',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const Negative: Story = {
  args: {
    variant: 'negative',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const NegativeQuiet: Story = {
  args: {
    variant: 'negativeQuiet',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const Utility: Story = {
  args: {
    variant: 'utility',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const UtilityQuiet: Story = {
  args: {
    variant: 'utilityQuiet',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const Pill: Story = {
  args: {
    variant: 'pill',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
  render(args) {
    return html`<w-link ${spread(prespread(args))}>💙</w-link>`;
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    small: true,
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const Quiet: Story = {
  args: {
    variant: 'secondary',
    quiet: true,
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    'full-width': true,
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
  render(args) {
    return html`
      <div class="w-full flex flex-col gap-8">
        <w-link ${spread(prespread(args))}>Full width</w-link>
      </div>
    `;
  },
};
