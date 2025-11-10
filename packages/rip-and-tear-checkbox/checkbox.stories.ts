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
