import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from "./react";

export default {
  component: Box,
} satisfies Meta<typeof Box>;

export type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};