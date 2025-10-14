import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Combobox } from "./react";

export default {
  title: 'Forms/Combobox',
  component: Combobox,
  render(args) {
    return (<Combobox {...args} options={sampleOptions}></Combobox>)
  },
} satisfies Meta<typeof Combobox>;

export type Story = StoryObj<typeof Combobox>;

const sampleOptions = [
  { value: 'Apple', label: 'Apple' },
  { value: 'Banana', label: 'Banana' },
  { value: 'Orange', label: 'Orange' },
  { value: 'Grape', label: 'Grape' },
  { value: 'Strawberry', label: 'Strawberry' },
  { value: 'Pineapple', label: 'Pineapple' },
  { value: 'Mango', label: 'Mango' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    label: "Select a fruit",
    placeholder: "Type to search...",
  }
};

export const WithValue: Story = {
  args: {
    options: sampleOptions,
    label: "Select a fruit",
    placeholder: "Type to search...",
    value: "Apple",
  },
};

export const OpenOnFocus: Story = {
  args: {
    options: sampleOptions,
    label: "Select a fruit",
    placeholder: "Type to search...",
    openOnFocus: true,
  },
};

export const WithTextMatching: Story = {
  args: {
    options: sampleOptions,
    label: "Select a fruit",
    placeholder: "Type to search...",
    matchTextSegments: true,
  },
};

export const Invalid: Story = {
  args: {
    options: sampleOptions,
    label: "Select a fruit",
    placeholder: "Type to search...",
    value: "Invalid fruit",
    helpText: "Please select a valid fruit from the list",
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    label: "Select a fruit",
    placeholder: "Type to search...",
    value: "Apple",
    disabled: true,
  },
};

export const Optional: Story = {
  args: {
    options: sampleOptions,
    label: "Select a fruit",
    placeholder: "Type to search...",
    optional: true,
  },
};

export const DisableStaticFiltering: Story = {
  render: () => {
    const [options, setOptions] = React.useState(sampleOptions);
    const [val, setVal] = React.useState('');
    return (
      <Combobox
        id="combobox-dynamic"
        label="Select a fruit (dynamic)"
        placeholder="Type to search..."
        disableStaticFiltering
        value={val}
        options={options}
        onChange={(e: CustomEvent) => {
          setVal(e.detail.value);
          // Simulate dynamic filtering
          const filteredOptions = sampleOptions.filter((option) => option.value.toLowerCase().includes(e.detail.value.toLowerCase()));
          setOptions(filteredOptions);
        }}
        onSelect={(e: CustomEvent) => {
          setVal(e.detail.value);
        }}
      ></Combobox>
    )
  },
};