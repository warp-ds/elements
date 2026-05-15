import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';
import 'virtual:uno.css';

import type { WarpSnackbar } from './snackbar.js';
import '../button/button.js';
import '../icon/icon.js';
import './snackbar.js';
import '../snackbar-item/snackbar-item.js';

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
        <div class="flex gap-8">
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create('Snackbar message', { variant: 'positive' });
          }}">Positive variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create('Snackbar message', { variant: 'warning' });
          }}">Warning variant</w-button>

          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create('Snackbar message', { variant: 'negative' });
          }}">Negative variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create('Snackbar message', { variant: 'info' });
          }}">Info variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create('Snackbar message');
          }}">Neutral variant</w-button>
        </div>
    `;
  },
};

export const WithAction: Story = {
  render() {
    return html`
        <div class="flex gap-8">
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'Snackbar message',
                {
                  variant: 'positive',
                  action: {
                    label: 'Action',
                    onclick() {
                      alert('Do action');
                    },
                  }
                }
              );
          }}">Positive variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'Snackbar message',
                {
                  variant: 'warning',
                  action: {
                    label: 'Action',
                    onclick() {
                      alert('Do action');
                    },
                  }
                }
              );
          }}">Warning variant</w-button>

          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'Snackbar message',
                {
                  variant: 'negative',
                  action: {
                    label: 'Action',
                    onclick() {
                      alert('Do action');
                    },
                  }
                }
              );
          }}">Negative variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'Snackbar message',
                {
                  variant: 'info',
                  action: {
                    label: 'Action',
                    onclick() {
                      alert('Do action');
                    },
                  }
                }
              );
          }}">Info variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'Snackbar message',
                {
                  action: {
                    label: 'Action',
                    onclick() {
                      alert('Do action');
                    },
                  }
                }
              );
          }}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    `;
  },
};

export const WithLongActionLabel: Story = {
  render() {
    return html`
        <div class="flex gap-8">
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'Snackbar message',
                {
                  variant: 'positive',
                  action: {
                    label: 'Long action label',
                    onclick() {
                      alert('Do action');
                    },
                  }
                }
              );
          }}">Positive variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'Snackbar message',
                {
                  variant: 'warning',
                  action: {
                    label: 'Long action label',
                    onclick() {
                      alert('Do action');
                    },
                  }
                }
              );
          }}">Warning variant</w-button>

          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'Snackbar message',
                {
                  variant: 'negative',
                  action: {
                    label: 'Long action label',
                    onclick() {
                      alert('Do action');
                    },
                  }
                }
              );
          }}">Negative variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'Snackbar message',
                {
                  variant: 'info',
                  action: {
                    label: 'Long action label',
                    onclick() {
                      alert('Do action');
                    },
                  }
                }
              );
          }}">Info variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'Snackbar message',
                {
                  action: {
                    label: 'Long action label',
                    onclick() {
                      alert('Do action');
                    },
                  }
                }
              );
          }}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    `;
  },
};
