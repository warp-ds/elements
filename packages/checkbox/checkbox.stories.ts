import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import './checkbox.js';
import '../checkbox-group/checkbox-group.js';
import type { WCheckbox } from './checkbox.js';

const { events, args, argTypes } = getStorybookHelpers<WCheckbox>('w-checkbox');

const meta: Meta<typeof args> = {
  title: 'Forms/Checkbox',
  render(args) {
    return html`
      <w-checkbox ${spread(prespread(args))}>Check me</w-checkbox>
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

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    name: 'invalidfoo',
    value: 'bar',
    invalid: true,
  },
};

export const Indeterminate: Story = {
  args: {
    name: 'indeterminatefoo',
    value: 'bar',
    indeterminate: true,
  },
};

export const IndeterminateError: Story = {
  args: {
    name: 'indeterminateerrorfoo',
    value: 'bar',
    indeterminate: true,
    invalid: true,
  },
};

export const IndeterminateDisabled: Story = {
  args: {
    name: 'indeterminatedisabledfoo',
    value: 'bar',
    indeterminate: true,
    disabled: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabledfoo',
    value: 'bar',
    disabled: true,
  },
};

export const CheckboxGroup: StoryObj = {
  render: () => html`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `,
};

export const CheckboxGroupWithHelpText: StoryObj = {
  render: () => html`
    <w-checkbox-group help-text="Select all that apply">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `,
};

export const CheckboxGroupWithLabel: StoryObj = {
  render: () => html`
    <w-checkbox-group label="Label">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `,
};

export const CheckboxGroupWithHelpTextAndLabel: StoryObj = {
  render: () => html`
    <w-checkbox-group label="Label" help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `,
};

export const CheckboxGroupWithOptional: StoryObj = {
  render: () => html`
    <w-checkbox-group label="Label" optional help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `,
};

export const CheckboxGroupRequired: StoryObj = {
  render: () => html`
    <w-checkbox-group label="Preferences" required help-text="Select at least one option">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
      <w-checkbox name="group" value="baz">Baz</w-checkbox>
    </w-checkbox-group>
  `,
};
