import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Affix } from "./react";

export default {
  title: 'Forms/Affix',
  component: Affix,
} satisfies Meta<typeof Affix>;

export type Story = StoryObj<typeof Affix>;

export const Default: Story = {
  args: {
    label: 'kr',
  },
};
