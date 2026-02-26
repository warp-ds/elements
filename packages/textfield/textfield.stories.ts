import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpTextField } from './textfield.js';
import './textfield.js';
import '../affix/affix.js';

const { events, args, argTypes } = getStorybookHelpers<WarpTextField>('w-textfield');

const meta: Meta<typeof args> = {
  title: 'Forms/Textfield',
  render(args) {
    return html`<w-textfield ${spread(prespread(args))}></w-textfield>`;
  },
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};

export default meta;
type Story = StoryObj<typeof args>;

export const Default: Story = {
  args: {
    label: 'Email',
    type: 'email',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
    type: 'email',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Password',
    'help-text': 'Must be at least 8 characters',
    type: 'password',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Email',
    invalid: true,
    'help-text': 'Please enter a valid email address',
    value: 'invalid-email',
    type: 'email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    disabled: true,
    value: 'user@example.com',
    type: 'email',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Email',
    'read-only': true,
    value: 'user@example.com',
    type: 'email',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    required: true,
    type: 'email',
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text',
  },
  render(args) {
    return html`
      <w-textfield ${spread(prespread(args))}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    `;
  },
};

export const WithPrefix: Story = {
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text',
  },
  render(args) {
    return html`
      <w-textfield ${spread(prespread(args))}>
        <w-affix slot="prefix" label="kr"></w-affix>
      </w-textfield>
    `;
  },
};

export const Masking: Story = {
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text',
    locale: 'nb',
  },
  render({ locale, ...args }) {
    return html`
      <w-textfield ${spread(prespread(args))} data-testid="masking">
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
      <script type="module">
        const maskingTextfield = document.querySelector('w-textfield[data-testid="masking"]');
        maskingTextfield.formatter = window.getNumberFormatter('${locale}').format;
      </script>
    `;
  },
};

export const FormParticipation: Story = {
  args: {
    type: 'text',
  },
  render({ locale, ...args }) {
    return html`
      <p>Resetting the form should return values to the initial values</p>
      <p>Submitting the form should result in the values being in the resulting pages query parameters</p>
      <form>
        <w-textfield ${spread(prespread(args))} name="warp-textfield-1" placeholder="type here" label="field 1"></w-textfield>
        <w-textfield ${spread(prespread(args))} name="warp-textfield-2" value="prefilled" label="field 2"></w-textfield>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    `;
  },
};
