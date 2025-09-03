import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

type Args = {
  disabled: boolean;
  invalid: boolean;
  label: string;
  'help-text': string;
  placeholder: string;
  'read-only': boolean;
  required: boolean;
  type: string;
  value: string;
  name: string;
};

const meta: Meta<Args> = {
  component: 'w-textfield',
  render(args) {
    return `<w-textfield ${toAttributeString(args)}></w-textfield>`;
  },
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'Whether the input is disabled',
    },
    invalid: {
      type: 'boolean',
      description: 'Renders the field in an invalid state',
    },
    label: {
      type: 'string',
      description: 'The content to display as the label',
    },
    'help-text': {
      type: 'string',
      description: 'The content to display as the help text',
    },
    placeholder: {
      type: 'string',
      description: 'Placeholder text for the input',
    },
    'read-only': {
      type: 'boolean',
      description: 'Whether the input can be selected but not changed',
    },
    required: {
      type: 'boolean',
      description: 'Whether user input is required',
    },
    type: {
      type: 'string',
      description: 'The type of input to render',
    },
    value: {
      type: 'string',
      description: 'The current value',
    },
    name: {
      type: 'string',
      description: 'The name of the input element',
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

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

export const WithAffix: Story = {
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text',
  },
  render(args) {
    return `
      <w-textfield ${toAttributeString(args)}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    `;
  },
};
