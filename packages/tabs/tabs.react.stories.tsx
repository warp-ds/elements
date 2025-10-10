import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from "./react";

export default {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};