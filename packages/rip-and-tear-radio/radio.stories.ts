import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import './index';

export default {
  title: 'Forms/Radio',
  render: () => {
    return html`
      <w-radio-group label="Group" name="foobar" value="foo">
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `;
  },
} satisfies Meta;

export const Default: StoryObj = {};
