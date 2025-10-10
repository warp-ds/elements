import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DeadToggle } from "./react";

export default {
  component: DeadToggle,
} satisfies Meta<typeof DeadToggle>;

export type Story = StoryObj<typeof DeadToggle>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};