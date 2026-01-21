import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Link } from './react';

export default {
  title: 'Buttons/Link',
  render(args) {
    return <Link {...args}>Link Button Text</Link>;
  },
  component: Link,
} satisfies Meta<typeof Link>;

export type Story = StoryObj<typeof Link>;

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

export const Quiet: Story = {
  args: {
    variant: 'quiet',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const Overlay: Story = {
  args: {
    variant: 'overlay',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const OverlayInverted: Story = {
  args: {
    variant: 'overlayInverted',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const OverlayQuiet: Story = {
  args: {
    variant: 'overlayQuiet',
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
};

export const OverlayInvertedQuiet: Story = {
  args: {
    variant: 'overlayInvertedQuiet',
    href: 'http://developer.mozilla.org',
    target: '_new',
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

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    href: 'http://developer.mozilla.org',
    target: '_new',
  },
  render(args) {
    return (
      <div className="w-full flex flex-col gap-8">
        <Link {...args}>Full width</Link>
      </div>
    );
  },
};
