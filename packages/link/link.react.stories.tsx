import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

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

export const AsALink: Story = {
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
    return <Link {...args}>💙</Link>;
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
