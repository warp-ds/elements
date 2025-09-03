import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

const meta: Meta = {
  component: 'w-select',
  render(args, context) {
    return `
      <w-select ${toAttributeString(args)}>
        <option value="strawberries">Strawberries</option>
        <option value="raspberries" selected>Raspberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>
    `;
  },
  argTypes: {
    'auto-focus': { type: 'boolean' },
    disabled: { type: 'boolean' },
    invalid: { type: 'boolean' },
    always: { type: 'boolean', description: 'Whether to always show a hint' },
    hint: { type: 'string' },
    label: { type: 'string' },
    name: { type: 'string' },
    optional: { type: 'boolean' },
    'read-only': { type: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    label: 'Berries',
  },
};
