import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from "./react";

export default {
  title: 'Forms/Datepicker',
  render(args) {
    return (
      <div style={{ minHeight: "400px" }}>
        <DatePicker {...args}></DatePicker>
      </div>
    )
  },
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;

export type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: 'Dato',
    lang: 'nb',
  },
};

export const DisableCalendarDates: Story = {
  args: {
    label: 'Dato',
    lang: 'nb',
  },
  render(args) {
    return (
      <div style={{ minHeight: "400px" }}>
        <DatePicker
          {...args}
          isDayDisabled={(day) => day.getDay() === 0}
        ></DatePicker>
      </div>
    )
  },
};