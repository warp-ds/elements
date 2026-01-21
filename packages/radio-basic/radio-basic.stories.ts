import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import './radio-basic.js';

const meta: Meta = {
  title: 'Forms/RadioBasic',
  component: 'w-radio-basic',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <w-radio-basic name="example" value="option1">Option 1</w-radio-basic>
  `,
};

export const RadioGroup: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="group" value="apple">Apple</w-radio-basic>
      <w-radio-basic name="group" value="banana">Banana</w-radio-basic>
      <w-radio-basic name="group" value="cherry" checked>Cherry</w-radio-basic>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="disabled-demo" value="unchecked" disabled>Disabled unchecked</w-radio-basic>
      <w-radio-basic name="disabled-demo" value="checked" disabled checked>Disabled checked</w-radio-basic>
    </div>
  `,
};

export const DisabledComparison: Story = {
  render: () => html`
    <div style="display: flex; gap: 32px;">
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong>Enabled</strong>
        <w-radio-basic name="enabled-compare" value="unchecked">Unchecked</w-radio-basic>
        <w-radio-basic name="enabled-compare" value="checked" checked>Checked</w-radio-basic>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong>Disabled</strong>
        <w-radio-basic name="disabled-compare" value="unchecked" disabled>Unchecked</w-radio-basic>
        <w-radio-basic name="disabled-compare" value="checked" disabled checked>Checked</w-radio-basic>
      </div>
    </div>
  `,
};

export const Required: Story = {
  render: () => html`
    <form style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="required-demo" value="one" required>Option one</w-radio-basic>
      <w-radio-basic name="required-demo" value="two" required>Option two</w-radio-basic>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const InForm: Story = {
  render: () => html`
    <form @submit=${(e: Event) => { e.preventDefault(); console.log(new FormData(e.target as HTMLFormElement)); }}>
      <fieldset style="border: 1px solid #ccc; padding: 16px; border-radius: 8px;">
        <legend>Choose a fruit</legend>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <w-radio-basic name="fruit" value="apple">Apple</w-radio-basic>
          <w-radio-basic name="fruit" value="banana">Banana</w-radio-basic>
          <w-radio-basic name="fruit" value="cherry">Cherry</w-radio-basic>
        </div>
      </fieldset>
      <button type="submit" style="margin-top: 16px;">Submit</button>
    </form>
  `,
};
