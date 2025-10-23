import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import './index.js';
import type { WarpCombobox } from './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpCombobox>('w-combobox');

const meta: Meta<typeof args> = {
  title: 'Forms/Combobox',
  component: 'w-combobox',
  render(args) {
    return html` <w-combobox ${spread(prespread(args))} .options="${sampleOptions}"></w-combobox> `;
  },
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
  args: {},
  render: () =>
    html` <w-combobox label="Select a fruit" placeholder="Type to search..." .options="${sampleOptions}"></w-combobox> `,
};

export const WithValue: Story = {
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'Apple',
  },
};

export const OpenOnFocus: Story = {
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    openOnFocus: true,
  },
};

export const WithTextMatching: Story = {
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    matchTextSegments: true,
  },
};

export const Invalid: Story = {
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'Invalid fruit',
    helpText: 'Please select a valid fruit from the list',
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'Apple',
    disabled: true,
  },
};

export const Optional: Story = {
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    optional: true,
  },
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
