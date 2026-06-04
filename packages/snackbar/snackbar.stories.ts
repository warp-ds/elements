import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';
// @ts-expect-error You'll find no types here, TypeScript the Grey
import 'virtual:uno.css';

import type { WarpModal } from '../modal/modal.js';
import type { WarpSnackbar } from './snackbar.js';
import '../attention/attention.js';
import '../button/button.js';
import '../icon/icon.js';
import '../modal/modal.js';
import '../modal-header/modal-header.js';
import '../modal-footer/modal-footer.js';
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
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create('The message should be short, but if it is not and spans multiple lines then the icon and actions should be centered vertically', { variant: 'positive', duration: durationNum, canClose });
          }}">Positive variant</w-button>
          
          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create('The message should be short', { variant: 'warning', duration: durationNum, canClose });
          }}">Warning variant</w-button>

          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create('The message should be short', { variant: 'negative', duration: durationNum, canClose });
          }}">Negative variant</w-button>
          
          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create('The message should be short', { variant: 'info', duration: durationNum, canClose });
          }}">Info variant</w-button>
          
          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create('The message should be short', { duration: durationNum, canClose });
          }}">Neutral variant</w-button>
          
          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              const item = snackbar!.create('The message should be short', { duration: durationNum, canClose });
              
              const customIcon = document.createElement('w-icon');
              customIcon.name = 'Rocket';
              customIcon.size = 'small';
              customIcon.slot = 'icon';
              item.prepend(customIcon);

          }}">Neutral w/ icon</w-button>
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
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create(
                'The message should be short, but if it is not and spans multiple lines then the icon and actions should be centered vertically',
                {
                  variant: 'positive',
                  duration: durationNum,
                  canClose,
                  action: {
                    label: 'Action',
                    onclick() {
                      const modal = document.getElementById('with-action-modal') as WarpModal;
                      modal.show = true;
                    },
                  }
                }
              );
          }}">Positive variant</w-button>
          
          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create(
                'The message should be short',
                {
                  variant: 'warning',
                  duration: durationNum,
                  canClose,
                  action: {
                    label: 'Action',
                    onclick() {
                      const modal = document.getElementById('with-action-modal') as WarpModal;
                      modal.show = true;
                    },
                  }
                }
              );
          }}">Warning variant</w-button>

          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create(
                'The message should be short',
                {
                  variant: 'negative',
                  duration: durationNum,
                  canClose,
                  action: {
                    label: 'Action',
                    onclick() {
                      const modal = document.getElementById('with-action-modal') as WarpModal;
                      modal.show = true;
                    },
                  }
                }
              );
          }}">Negative variant</w-button>
          
          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create(
                'The message should be short',
                {
                  variant: 'info',
                  duration: durationNum,
                  canClose,
                  action: {
                    label: 'Action',
                    onclick() {
                      const modal = document.getElementById('with-action-modal') as WarpModal;
                      modal.show = true;
                    },
                  }
                }
              );
          }}">Info variant</w-button>
          
          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create(
                'The message should be short',
                {
                  duration: durationNum,
                  canClose,
                  action: {
                    label: 'Action',
                    onclick() {
                      const modal = document.getElementById('with-action-modal') as WarpModal;
                      modal.show = true;
                    },
                  }
                }
              );
          }}">Neutral variant</w-button>
        </div>

        <w-modal id="with-action-modal">
          <w-modal-header slot="header" no-close></w-modal-header>
          <div slot="content">
            <p>Action was triggered</p>
          </div>
          <w-modal-footer slot="footer">
            <div class="flex gap-16">
              <w-button variant="primary" commandfor="with-action-modal" command="--close">Close</w-button>
            </div>
          </w-modal-footer>
        </w-modal>
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
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create(
                'The message should be short, but if it is not and spans multiple lines then the icon and actions should be centered vertically',
                {
                  variant: 'positive',
                  duration: durationNum,
                  canClose,
                  action: {
                    label: 'Long action label',
                    onclick() {
                      const modal = document.getElementById('with-long-action-modal') as WarpModal;
                      modal.show = true;
                    },
                  }
                }
              );
          }}">Positive variant</w-button>
          
          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create(
                'The message should be short',
                {
                  variant: 'warning',
                  duration: durationNum,
                  canClose,
                  action: {
                    label: 'Long action label',
                    onclick() {
                      const modal = document.getElementById('with-long-action-modal') as WarpModal;
                      modal.show = true;
                    },
                  }
                }
              );
          }}">Warning variant</w-button>

          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create(
                'The message should be short',
                {
                  variant: 'negative',
                  duration: durationNum,
                  canClose,
                  action: {
                    label: 'Long action label',
                    onclick() {
                      const modal = document.getElementById('with-long-action-modal') as WarpModal;
                      modal.show = true;
                    },
                  }
                }
              );
          }}">Negative variant</w-button>
          
          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create(
                'The message should be short',
                {
                  variant: 'info',
                  duration: durationNum,
                  canClose,
                  action: {
                    label: 'Long action label',
                    onclick() {
                      const modal = document.getElementById('with-long-action-modal') as WarpModal;
                      modal.show = true;
                    },
                  }
                }
              );
          }}">Info variant</w-button>
          
          <w-button @click="${() => {
              const snackbar = document.querySelector<WarpSnackbar>('w-snackbar');
              snackbar!.create(
                'The message should be short',
                {
                  duration: durationNum,
                  canClose,
                  action: {
                    label: 'Long action label',
                    onclick() {
                      const modal = document.getElementById('with-long-action-modal') as WarpModal;
                      modal.show = true;
                    },
                  }
                }
              );
          }}">Neutral variant</w-button>
        </div>

        <w-modal id="with-long-action-modal">
          <w-modal-header slot="header" no-close></w-modal-header>
          <div slot="content">
            <p>Action was triggered</p>
          </div>
          <w-modal-footer slot="footer">
            <div class="flex gap-16">
              <w-button variant="primary" commandfor="with-long-action-modal" command="--close">Close</w-button>
            </div>
          </w-modal-footer>
        </w-modal>
    `;
  },
};
