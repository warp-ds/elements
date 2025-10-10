import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Attention } from "./react";

export default {
  component: Attention,
} satisfies Meta<typeof Attention>;

export type Story = StoryObj<typeof Attention>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};