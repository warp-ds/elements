import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from "./react";

export default {
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export type Story = StoryObj<typeof Breadcrumbs>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};