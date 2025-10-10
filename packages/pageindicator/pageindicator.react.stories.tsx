import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PageIndicator } from "./react";

export default {
  component: PageIndicator,
} satisfies Meta<typeof PageIndicator>;

export type Story = StoryObj<typeof PageIndicator>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};