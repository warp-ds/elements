import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Affix } from "./react";

export default {
  component: Affix,
} satisfies Meta<typeof Affix>;

export type Story = StoryObj<typeof Affix>;

export const Primary: Story = {
  args: {
    children: "kr"
  },
};