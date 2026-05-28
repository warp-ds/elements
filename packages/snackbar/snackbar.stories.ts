import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';
// @ts-expect-error You'll find no types here, TypeScript the Grey
import 'virtual:uno.css';

import type { WarpSnackbar } from './snackbar.js';
import '../button/button.js';
import '../icon/icon.js';
import './snackbar.js';
import '../snackbar-item/snackbar-item.js';
import { SnackbarDuration } from '../snackbar-item/snackbar-item.js';

const {
  events: snackbarEvents,
  args: snackbarArgs,
  argTypes: snackbarArgTypes,
} = getStorybookHelpers<WarpSnackbar>('w-snackbar');

const meta: Meta = {
  title: 'Overlays/Snackbar',
  args: {
    ...snackbarArgs,
    canClose: true,
    duration: undefined,
  },
  argTypes: {
    ...snackbarArgTypes,
    duration: {
      control: { type: 'select' },
      options: [
        '4 seconds',
        '10 seconds',
        'Infinite',
      ],
    },
  },
  parameters: {
    actions: {
      handles: snackbarEvents,
    },
  },
};

export default meta;
type Story = StoryObj<typeof WarpSnackbar & { duration: string; canClose: boolean }>;

export const Default: Story = {
  render({ duration, canClose }) {
    const durationNum = duration === 'Infinite' ?
      SnackbarDuration.Infinite : 
      duration === '10 seconds' ?
        SnackbarDuration.Long :
        SnackbarDuration.Short; 

    return html`
        <div class="flex gap-8">
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create('The message should be short', { variant: 'positive', duration: durationNum, canClose });
          }}">Positive variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create('The message should be short', { variant: 'warning', duration: durationNum, canClose });
          }}">Warning variant</w-button>

          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create('The message should be short', { variant: 'negative', duration: durationNum, canClose });
          }}">Negative variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create('The message should be short', { variant: 'info', duration: durationNum, canClose });
          }}">Info variant</w-button>
          
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create('The message should be short');
          }}">Neutral variant</w-button>
        </div>
    `;
  },
};

export const WithAction: Story = {
  render({ duration, canClose }) {
    const durationNum = duration === 'Infinite' ?
      SnackbarDuration.Infinite : 
      duration === '10 seconds' ?
        SnackbarDuration.Long :
        SnackbarDuration.Short; 

    return html`
        <div class="flex gap-8">
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'The message should be short',
                {
                  variant: 'positive',
                  duration: durationNum,
                  canClose,
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
                'The message should be short',
                {
                  variant: 'warning',
                  duration: durationNum,
                  canClose,
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
                'The message should be short',
                {
                  variant: 'negative',
                  duration: durationNum,
                  canClose,
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
                'The message should be short',
                {
                  variant: 'info',
                  duration: durationNum,
                  canClose,
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
                'The message should be short',
                {
                  duration: durationNum,
                  canClose,
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
  render({ duration, canClose }) {
    const durationNum = duration === 'Infinite' ?
      SnackbarDuration.Infinite : 
      duration === '10 seconds' ?
        SnackbarDuration.Long :
        SnackbarDuration.Short; 

    return html`
        <div class="flex gap-8">
          <w-button @click="${() => {
              const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
              snackbar.create(
                'The message should be short',
                {
                  variant: 'positive',
                  duration: durationNum,
                  canClose,
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
                'The message should be short',
                {
                  variant: 'warning',
                  duration: durationNum,
                  canClose,
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
                'The message should be short',
                {
                  variant: 'negative',
                  duration: durationNum,
                  canClose,
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
                'The message should be short',
                {
                  variant: 'info',
                  duration: durationNum,
                  canClose,
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
                'The message should be short',
                {
                  duration: durationNum,
                  canClose,
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
