import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import '../button/index.js';
import type { WarpDatepicker } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpDatepicker>('w-datepicker');

const meta: Meta<typeof args> = {
  title: 'Forms/Datepicker',
  render(args) {
    return html`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker ${spread(prespread(args))}></w-datepicker>
      </div>
    `;
  },
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};

export default meta;
type Story = StoryObj<typeof args>;

export const Default: Story = {
  args: {
    label: 'Dato',
    lang: 'nb',
  },
};

export const DisableCalendarDates: Story = {
  args: {
    label: 'Dato',
    lang: 'nb',
  },
  render(args) {
    return html`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker ${spread(prespread(args))}></w-datepicker>
      </div>
      <script type="module">
        const datePicker = document.querySelector('w-datepicker');
        // No working on Sundays!
        datePicker.isDayDisabled = (day) => day.getDay() === 0;
      </script>
    `;
  },
};
