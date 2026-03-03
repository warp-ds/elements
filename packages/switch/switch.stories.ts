import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './switch.js';

const meta: Meta = {
  title: 'Forms/Switch',
  component: 'w-switch',
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <span id="switch-label">Enable notifications</span>
      <w-switch aria-labelledby="switch-label"></w-switch>
    </div>
  `,
};

export const NativeLabel: Story = {
  render: () => html`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <label for="native-label-switch">Enable notifications</label>
      <w-switch
        id="native-label-switch"
        name="notifications"
        value="enabled"
      ></w-switch>
    </div>
  `,
};

export const SwitchFormAssociated: Story = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (!status) return;

      const data = new FormData(form);
      const name = 'notifications';
      const value = data.get(name);
      status.textContent =
        value === null ? 'Submitted: no switch value captured.' : `Submitted: ${name}=${String(value)}`;
    };

    return html`
      <form @submit=${handleSubmit} style="display: grid; gap: 12px; max-width: 320px;">
        <div style="display: inline-flex; align-items: center; gap: 8px;">
          <span id="switch-form-label">Enable notifications</span>
          <w-switch
            aria-labelledby="switch-form-label"
            name="notifications"
            value="enabled"
          ></w-switch>
        </div>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `;
  },
};
