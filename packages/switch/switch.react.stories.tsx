import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Switch } from "./react";

export default {
  component: Switch,
} satisfies Meta<typeof Switch>;

export type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};