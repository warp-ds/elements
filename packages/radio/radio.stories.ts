import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';
import { prespread } from '../../.storybook/utilities.js';
import type { WRadio } from './radio.js';
import type { WRadioGroup } from './radio-group.js';

import './radio';
import './radio-group';

const { events: radioEvents, args: radioArgs, argTypes: radioArgTypes } = getStorybookHelpers<WRadio>('w-radio');
const { events, args, argTypes } = getStorybookHelpers<WRadioGroup>('w-radio-group');

const meta: Meta<typeof args> = {
  title: 'Forms/Radio',
  render: (args) => {
    return html`
      <w-radio-group ${spread(prespread(args))}>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `;
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof args>;

export const Default: Story = {
  args: {
    label: 'Group',
    name: 'foobar',
    value: 'foo',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const Required: Story = {
  args: {},
  render() {
    return html`
      <form>
        <w-radio-group required>
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button>click me</button>
      </form>
    `;
  },
};

export const Appearance: Story = {
  args: {},
  render() {
    return html`
      <form>
        <w-radio-group>
          <w-radio value="foo" appearance="button">button</w-radio>
          <w-radio value="bar" appearance="clickable">clickable</w-radio>
        </w-radio-group>
        <button>click me</button>
      </form>
    `;
  },
};

export const DisabledGroup: Story = {
  args: { disabled: true },
};

export const DisabledRadio: Story = {
  args: {},
  render() {
    return html`
      <w-radio-group>
        <w-radio value="foo" disabled appearance="button">disabled</w-radio>
        <w-radio value="bar" appearance="clickable">not disabled</w-radio>
      </w-radio-group>
    `;
  },
};