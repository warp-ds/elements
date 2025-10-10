import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Link } from "./react";

export default {
  component: Link,
} satisfies Meta<typeof Link>;

export type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};