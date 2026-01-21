import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from './react';

export default {
  title: 'Layout/Box',
  component: Box,
  render(args) {
    return (
      <Box {...args}>
        <h3>Box Content</h3>
        <p>This is content inside a box component.</p>
      </Box>
    );
  },
} satisfies Meta<typeof Box>;

export type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false,
    role: 'region',
  },
};

export const Info: Story = {
  args: {
    info: true,
    role: 'region',
  },
};

export const Neutral: Story = {
  args: {
    neutral: true,
    role: 'region',
  },
};

export const Bordered: Story = {
  args: {
    bordered: true,
    role: 'region',
  },
};

export const Bleed: Story = {
  args: {
    bleed: true,
    neutral: true,
    role: 'region',
  },
};
