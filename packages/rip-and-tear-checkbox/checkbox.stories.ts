import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './index';

export default {
  title: 'Forms/Checkbox',
  render: () => {
    return html`
      <w-checkbox name="foobar" value="foo">Check me</w-checkbox>
    `;
  },
} satisfies Meta;

export const Default: StoryObj = {};

export const Invalid: StoryObj = {
  render: () => html`<w-checkbox name="invalidfoo" value="bar" invalid>Invalid checkbox</w-checkbox>`,
};

export const Disabled: StoryObj = {
  render: () => html`<w-checkbox name="disabledfoo" value="bar" disabled>Disabled checkbox</w-checkbox>`,
};

export const BunchOfCheckboxes: StoryObj = {
  render: () => html`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `,
}
