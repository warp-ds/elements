import type { StoryObj } from '@storybook/web-components-vite';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

const { events, args, argTypes } = getWcStorybookHelpers('w-textfield');

const meta = {
  title: 'Forms/Textfield',
  render(args) {
    return `<w-textfield ${toAttributeString(args)}></w-textfield>`;
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
type Story = StoryObj;

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
