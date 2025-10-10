import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Badge } from "./react";

export default {
  component: Badge,
} satisfies Meta<typeof Badge>;

export type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};