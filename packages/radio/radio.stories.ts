import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';
import { prespread } from '../../.storybook/utilities.js';
import type { WRadioGroup } from '../radio-group/radio-group.js';
import type { WRadio } from './radio.js';

import './radio.js';
import '../radio-group/radio-group.js';

const { events: radioEvents, args: radioArgs, argTypes: radioArgTypes } = getStorybookHelpers<WRadio>('w-radio');
const { events, args, argTypes } = getStorybookHelpers<WRadioGroup>('w-radio-group');

const meta: Meta<typeof args> = {
  title: 'Forms/Radio',
  render: (args) => {
    return html`
      <w-radio-group ${spread(prespread(args))}>
        <w-radio value="foo" checked>foo</w-radio>
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
  },
};

export const SingleRadioDefault: Story = {
  args: {},
  render() {
    return html` <w-radio value="single">Single radio</w-radio> `;
  },
};

export const SingleRadioInvalid: Story = {
  args: {},
  render() {
    return html` <w-radio value="single" invalid>Single invalid radio</w-radio> `;
  },
};

export const SingleRadioDisabled: Story = {
  args: {},
  render() {
    return html` <w-radio value="single" disabled>Single disabled radio</w-radio> `;
  },
};

export const SingleRadioFormAssociated: Story = {
  args: {},
  render() {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (!status) return;
      const data = new FormData(form);
      status.textContent = `Submitted value: ${data.get('newsletter') ?? 'none'}`;
    };

    const handleInvalid = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLElement;
      const form = target.closest('form');
      const status = form?.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Invalid: please select the radio.';
    };

    return html`
      <form @submit=${handleSubmit} style="display: grid; gap: 12px;">
        <w-radio name="newsletter" value="yes" required @invalid=${handleInvalid}>
          Sign up for updates
        </w-radio>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `;
  },
};

export const StandaloneRadioGroupByName: Story = {
  args: {},
  render() {
    return html`
      <div style="display: grid; gap: 12px;">
        <w-radio name="standalone" value="one">Standalone one</w-radio>
        <w-radio name="standalone" value="two">Standalone two</w-radio>
      </div>
    `;
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
};

export const Required: Story = {
  args: {},
  render() {
    return html`
      <form>
        <w-radio-group required name="required">
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button style="margin-top: 16px;">click me</button>
      </form>
    `;
  },
};

export const DisabledGroup: Story = {
  args: {
    name: 'disabled group',
    disabled: true,
    helpText: 'This group is disabled',
  },
};

export const DisabledRadio: Story = {
  args: {},
  render() {
    return html`
      <w-radio-group name="disabled radio">
        <w-radio value="foo" disabled>disabled</w-radio>
        <w-radio value="bar">not disabled</w-radio>
      </w-radio-group>
    `;
  },
};

export const HelpText: Story = {
  args: {
    label: 'Help text',
    helpText: 'Pick one option',
    name: 'help-text',
  },
};

export const Optional: Story = {
  args: {
    label: 'Optional',
    optional: true,
    helpText: 'This is optional',
    name: 'optional',
  },
};

export const RadioGroup: StoryObj = {
  render: () => html`
    <w-radio-group name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `,
};

export const RadioGroupWithHelpText: StoryObj = {
  render: () => html`
    <w-radio-group help-text="Select one" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `,
};

export const RadioGroupWithLabel: StoryObj = {
  render: () => html`
    <w-radio-group label="Label" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `,
};

export const RadioGroupWithHelpTextAndLabel: StoryObj = {
  render: () => html`
    <w-radio-group label="Label" help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `,
};

export const RadioGroupWithOptional: StoryObj = {
  render: () => html`
    <w-radio-group label="Label" optional help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `,
};

export const RadioGroupWithInvalid: StoryObj = {
  render: () => html`
    <w-radio-group label="Label" invalid help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `,
};

export const RadioGroupRequired: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Submitted.';
    };

    const handleInvalid = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const form = target.closest('form');
      const status = form?.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Invalid: select an option.';
    };

    return html`
      <form @submit=${handleSubmit} style="display: grid; gap: 12px;">
        <w-radio-group
          label="Preferences"
          required
          name="group"
          help-text="Choose an option"
          @invalid=${handleInvalid}
        >
          <w-radio value="foo">Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `;
  },
};

export const RadioGroupFormAssociated: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Submitted.';
    };

    const handleInvalid = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const form = target.closest('form');
      const status = form?.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Invalid: select an option.';
    };

    return html`
      <form @submit=${handleSubmit} style="display: grid; gap: 12px;">
        <w-radio-group name="radio group form associated" label="Preferences" name="group" help-text="Choose an option" @invalid=${handleInvalid}>
          <w-radio value="foo" checked>Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `;
  },
};

export const InvalidWithMessage: Story = {
  args: {},
  render() {
    return html`
      <w-radio-group name="invalid group" label="Invalid group" invalid>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `;
  },
};

export const SlottedLabelAndHint: Story = {
  args: {},
  render() {
    return html`
      <w-radio-group name="slotted label and hint">
        <span slot="label">Slotted label</span>
        <span slot="help-text">Slotted hint text</span>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `;
  },
};
