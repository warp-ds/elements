import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpSelect } from './select.js';
import './select.js';

const { events, args, argTypes } = getStorybookHelpers<WarpSelect>('w-select');

const meta: Meta<typeof args> = {
  title: 'Forms/Select',
  render(args) {
    return html`
      <w-select ${spread(prespread(args))}>
        <option value="raspberries">Raspberries</option>
        <option value="strawberries" selected>Strawberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>
    `;
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
    label: 'Berries',
  },
};

export const HelpText: Story = {
  args: {
    label: 'Berries',
    'help-text': 'We assume this is your jam preference',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Berries',
    invalid: true,
    'help-text': 'Wrong choice',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Berries',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Berries',
    'read-only': true,
  },
};

export const NoLabel: Story = {
  render(args) {
    return html`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <w-select ${spread(prespread(args))} aria-label="Your selection is berry nice!">
          <option value="raspberries">Raspberries</option>
          <option value="strawberries" selected>Strawberries</option>
          <option value="cloudberries">Cloudberries</option>
        </w-select>

        <label id="select-label" htmlFor="warp-aria-labelledby-example">
          You're berry good at selecting!
        </label>
        <w-select ${spread(prespread(args))} id="warp-aria-labelledby-example">
          <option value="raspberries">Raspberries</option>
          <option value="strawberries" selected>Strawberries</option>
          <option value="cloudberries">Cloudberries</option>
        </w-select>
      </div>
    `;
  },
};

export const Optional: Story = {
  args: {
    label: 'Berries',
    optional: true,
  },
};

export const Placeholder: Story = {
  args: {
    label: 'Berries',
  },
  render(args) {
    return html`
      <w-select ${spread(prespread(args))}>
        <option value="">Select an option</option>
        <option value="raspberries">Raspberries</option>
        <option value="strawberries">Strawberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>
    `;
  },
};
