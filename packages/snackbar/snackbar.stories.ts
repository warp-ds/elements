import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';
import 'virtual:uno.css';

import type { WarpSnackbar } from './snackbar.js';
import '../button/button.js';
import '../icon/icon.js';
import './snackbar.js';
import '../snackbar-item.js';

const {
  events: snackbarEvents,
  args: snackbarArgs,
  argTypes: snackbarArgTypes,
} = getStorybookHelpers<WarpSnackbar>('w-snackbar');

const meta: Meta = {
  title: 'Overlays/Snackbar',
  args: snackbarArgs,
  argTypes: snackbarArgTypes,
  parameters: {
    actions: {
      handles: snackbarEvents,
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render() {
    return html`
        <w-snackbar></w-snackbar>

        <w-button @click="${() => {
            const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
            snackbar.create('Snackbar message');
        }}">Create message</w-button>
    `;
  },
};
