import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import './combobox.js';
import '../textfield/textfield.js';
import type { WarpCombobox } from './combobox.js';

const { events, args, argTypes } = getStorybookHelpers<WarpCombobox>('w-combobox');

const meta: Meta<typeof args> = {
  title: 'Forms/Combobox',
  component: 'w-combobox',
  render(args) {
    return html`
      <w-combobox ${spread(prespread(args))}>
        ${sampleOptionElements}
      </w-combobox>
    `;
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
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'pineapple', label: 'Pineapple' },
  { value: 'mango', label: 'Mango' },
];

const sampleOptionElements = html`
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
  <option value="grape">Grape</option>
  <option value="strawberry">Strawberry</option>
  <option value="pineapple">Pineapple</option>
  <option value="mango">Mango</option>
`;

export const Default: Story = {
  args: {},
  render: () =>
    html`
      <w-combobox label="Select a fruit" placeholder="Type to search...">
        ${sampleOptionElements}
      </w-combobox>
    `,
};

export const WithValue: Story = {
  args: {
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'apple',
  },
};

export const OpenOnFocus: Story = {
  args: {
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    openOnFocus: true,
  },
};

export const WithTextMatching: Story = {
  args: {
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    matchTextSegments: true,
  },
};

export const Invalid: Story = {
  args: {
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'Invalid fruit',
    helpText: 'Please select a valid fruit from the list',
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'apple',
    disabled: true,
  },
};

export const Optional: Story = {
  args: {
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
        combobox.value = e?.detail?.value;
        // Simulate dynamic filtering
        const filteredOptions = sampleOptions.filter((option) => option.value.toLowerCase().includes(e?.detail?.value.toLowerCase()));
        combobox.options = filteredOptions;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e?.detail?.value;
      });
    </script>
  `,
};

export const FormSubmission: Story = {
  render: () => html`
    <p>Resetting the form should return values to the initial values</p>
    <p>Submitting the form should result in the values being in the resulting pages query parameters</p>
    <form>
      <w-combobox
        id="form-submission"
        name="warp-combo-1"
        label="Select a fruit (dynamic)"
        placeholder="Type to search..."
      >
        ${sampleOptionElements}
      </w-combobox>
      <br>
      <w-combobox
        id="form-submission"
        name="warp-combo-2"
        label="Select a fruit (dynamic)"
        value="banana"
        placeholder="Type to search..."
      >
        ${sampleOptionElements}
      </w-combobox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
    </form>
  `,
};
