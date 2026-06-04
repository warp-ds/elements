import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';
import '../button/button.js';
import './toast.js';
import '../toast-container/toast-container.js';

const meta: Meta = {
  title: 'Overlays/Toast',
};

export default meta;

export const Default: StoryObj = {
  args: {},
  render() {
    return html`
      <w-button small onclick="window.toast('message goes here', { type: 'error', canclose: true })"> See Error Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'warning', canclose: true })"> See Warning Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'success', canclose: true })"> See Success Example </w-button>
    `;
  },
};

export const ToastContainer: StoryObj = {
  render(args) {
    return html` <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast-container ${spread(prespread(args))}></w-toast-container>`;
  },
};

export const Toast: StoryObj = {
  render(args) {
    return html`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast ${spread(prespread(args))}></w-toast>
    `;
  },
};
