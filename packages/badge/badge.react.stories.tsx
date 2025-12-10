import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './react';

export default {
  title: 'Layout/Badge',
  component: Badge,
  render(args) {
    return <Badge {...args}>Badge Text</Badge>;
  },
} satisfies Meta<typeof Badge>;

export type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
};

export const Positive: Story = {
  args: {
    variant: 'positive',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Negative: Story = {
  args: {
    variant: 'negative',
  },
};

export const Price: Story = {
  args: {
    variant: 'price',
  },
};

export const Sponsored: Story = {
  args: {
    variant: 'sponsored',
  },
};

export const Positioned: Story = {
  args: {
    variant: 'price',
    position: 'top-right',
  },
  render(args) {
    return (
      <div
        style={{
          position: 'relative',
          width: '200px',
          height: '100px',
          background: '#f0f0f0',
          borderRadius: '8px',
        }}
      >
        <Badge {...args}>Badge</Badge>
      </div>
    );
  },
};
