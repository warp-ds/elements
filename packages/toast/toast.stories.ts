import { html } from 'lit';

import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpToast, WarpToastContainer } from './index.js';
import '../button/index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpToast>('w-pill');
const {
  events: containerEvents,
  args: containerArgs,
  argTypes: containerArgTypes,
} = getStorybookHelpers<WarpToastContainer>('w-toast-container');

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

export const ToastContainer: StoryObj<typeof containerArgs> = {
  args: containerArgs,
  render(args) {
    return html` <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast-container ${spread(prespread(args))}></w-toast-container>`;
  },
  argTypes: containerArgTypes,
  parameters: {
    actions: {
      handles: containerEvents,
    },
  },
};

export const Toast: StoryObj = {
  args,
  render(args) {
    return html`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast ${spread(prespread(args))}></w-toast>
    `;
  },
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};
