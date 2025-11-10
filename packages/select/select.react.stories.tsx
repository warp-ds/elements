import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Select, Option } from './react';

export default {
  title: 'Forms/Select',
  render(args) {
    return (
      <Select {...args}>
        <Option value="strawberries">Strawberries</Option>
        <Option value="raspberries" selected>
          Raspberries
        </Option>
        <Option value="cloudberries">Cloudberries</Option>
      </Select>
    );
  },
  component: Select,
} satisfies Meta<typeof Select>;

export type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Berries',
  },
};

export const ChangeEvent = (args) => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <>
      <div>Selected Value: {selectedValue}</div>
      <Select {...args} onChange={(e: CustomEvent) => setSelectedValue(e.detail)}>
        <Option value="strawberries">Strawberries</Option>
        <Option value="raspberries" selected>
          Raspberries
        </Option>
        <Option value="cloudberries">Cloudberries</Option>
      </Select>
    </>
  );
};
