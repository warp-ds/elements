import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import './index.js';
import type { WarpCombobox } from './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpCombobox>('w-combobox');

const meta: Meta<WarpCombobox> = {
  title: 'Forms/Combobox',
  component: 'w-combobox',
  parameters: {
    docs: {
      description: {
        component: 'A combobox element for text input with selectable options.',
      },
    },
    actions: {
      handles: events,
    },
  },
  args,
  argTypes,
};

export default meta;
type Story = StoryObj<WarpCombobox>;

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
  render: () => html` <w-combobox label="Select a fruit" placeholder="Type to search..." .options="${sampleOptions}"></w-combobox> `,
};

export const WithValue: Story = {
  render: () => html`
    <w-combobox label="Select a fruit" placeholder="Type to search..." .options="${sampleOptions}" value="Apple"></w-combobox>
  `,
};

export const OpenOnFocus: Story = {
  render: () => html`
    <w-combobox label="Select a fruit" placeholder="Type to search..." open-on-focus .options="${sampleOptions}"></w-combobox>
  `,
};

export const WithTextMatching: Story = {
  render: () => html`
    <w-combobox label="Select a fruit" placeholder="Type to search..." match-text-segments .options="${sampleOptions}"></w-combobox>
  `,
};

export const Invalid: Story = {
  render: () => html`
    <w-combobox
      label="Select a fruit"
      placeholder="Type to search..."
      invalid
      .options="${sampleOptions}"
      value="Invalid fruit"
      help-text="Please select a valid fruit from the list"></w-combobox>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <w-combobox label="Select a fruit" placeholder="Type to search..." disabled .options="${sampleOptions}" value="Apple"></w-combobox>
  `,
};

export const Optional: Story = {
  render: () => html`
    <w-combobox label="Select a fruit" placeholder="Type to search..." optional .options="${sampleOptions}"></w-combobox>
  `,
};

export const DisableStaticFiltering: Story = {
  render: () => html`
    <w-combobox
      id="combobox-dynamic"
      label="Select a fruit (dynamic)"
      placeholder="Type to search..."
      disable-static-filtering></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-dynamic');
      const sampleOptions = ${JSON.stringify(sampleOptions)};
      combobox.options = sampleOptions;
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
        // Simulate dynamic filtering
        const filteredOptions = sampleOptions.filter((option) => option.value.toLowerCase().includes(e.detail.value.toLowerCase()));
        combobox.options = filteredOptions;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    </script>
  `,
};
