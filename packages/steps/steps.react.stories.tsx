import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Steps } from "./react";

export default {
  component: Steps,
} satisfies Meta<typeof Steps>;

export type Story = StoryObj<typeof Steps>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};