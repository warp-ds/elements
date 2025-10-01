import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components';

import './index.js';
import type { WarpCombobox } from './index.js';

const meta: Meta<WarpCombobox> = {
  title: 'Forms/Combobox',
  component: 'w-combobox',
  parameters: {
    docs: {
      description: {
        component: 'A combobox element for text input with selectable options.',
      },
    },
  },
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'The available options to select from',
    },
    value: {
      control: { type: 'text' },
      description: 'The input value',
    },
    label: {
      control: { type: 'text' },
      description: 'Label above input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Input placeholder',
    },
    openOnFocus: {
      control: { type: 'boolean' },
      description: 'Whether the popover opens when focus is on the text field',
    },
    selectOnBlur: {
      control: { type: 'boolean' },
      description: 'Select active option on blur',
    },
    matchTextSegments: {
      control: { type: 'boolean' },
      description: 'Whether the matching text segments in the options should be highlighted',
    },
    disableStaticFiltering: {
      control: { type: 'boolean' },
      description: 'Disable client-side static filtering',
    },
    invalid: {
      control: { type: 'boolean' },
      description: 'Renders the input field in an invalid state',
    },
    helpText: {
      control: { type: 'text' },
      description: 'The content to display as the help text',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the element is disabled',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the element is required',
    },
    optional: {
      control: { type: 'boolean' },
      description: 'Whether to show optional text',
    },
  },
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
  render: () => html`
    <w-combobox id="combobox-default" label="Select a fruit" placeholder="Type to search..."></w-combobox>
    <script>
      const combobox = document.querySelector('#combobox-default');
      combobox.options = ${JSON.stringify(sampleOptions)};
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    </script>
  `,
};

export const WithValue: Story = {
  render: () => html`
    <w-combobox id="combobox-with-value" label="Select a fruit" placeholder="Type to search..."></w-combobox>
    <script>
      const combobox = document.querySelector('#combobox-with-value');
      combobox.options = ${JSON.stringify(sampleOptions)};
      combobox.value = 'Apple';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    </script>
  `,
};

export const OpenOnFocus: Story = {
  render: () => html`
    <w-combobox id="combobox-open-focus" label="Select a fruit" placeholder="Type to search..." open-on-focus></w-combobox>
    <script>
      const combobox = document.querySelector('#combobox-open-focus');
      combobox.options = ${JSON.stringify(sampleOptions)};
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    </script>
  `,
};

export const WithTextMatching: Story = {
  render: () => html`
    <w-combobox id="combobox-text-match" label="Select a fruit" placeholder="Type to search..." match-text-segments></w-combobox>
    <script>
      const combobox = document.querySelector('#combobox-text-match');
      combobox.options = ${JSON.stringify(sampleOptions)};
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    </script>
  `,
};

export const Invalid: Story = {
  render: () => html`
    <w-combobox
      id="combobox-invalid"
      label="Select a fruit"
      placeholder="Type to search..."
      invalid
      help-text="Please select a valid fruit from the list"></w-combobox>
    <script>
      const combobox = document.querySelector('#combobox-invalid');
      combobox.options = ${JSON.stringify(sampleOptions)};
      combobox.value = 'Invalid fruit';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    </script>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <w-combobox id="combobox-disabled" label="Select a fruit" placeholder="Type to search..." disabled></w-combobox>
    <script>
      const combobox = document.querySelector('#combobox-disabled');
      combobox.options = ${JSON.stringify(sampleOptions)};
      combobox.value = 'Apple';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    </script>
  `,
};

export const Optional: Story = {
  render: () => html`
    <w-combobox id="combobox-optional" label="Select a fruit" placeholder="Type to search..." optional></w-combobox>
    <script>
      const combobox = document.querySelector('#combobox-optional');
      combobox.options = ${JSON.stringify(sampleOptions)};
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    </script>
  `,
};

export const DisableStaticFiltering: Story = {
  render: () => html`
    <w-combobox
      id="combobox-dynamic"
      label="Select a fruit (dynamic)"
      placeholder="Type to search..."
      disable-static-filtering></w-combobox>
    <script>
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
