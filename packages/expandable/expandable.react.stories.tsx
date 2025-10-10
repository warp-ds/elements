import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Expandable } from "./react";

export default {
  component: Expandable,
} satisfies Meta<typeof Expandable>;

export type Story = StoryObj<typeof Expandable>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};