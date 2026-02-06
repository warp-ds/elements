import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpTextarea } from './textarea.js';
import './textarea.js';

const { events, args, argTypes } = getStorybookHelpers<WarpTextarea>('w-textarea');

const meta: Meta<typeof args> = {
  title: 'Forms/Textarea',
  render(args) {
    return html`<w-textarea ${spread(prespread(args))}></w-textarea>`;
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
    label: 'Description',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Description',
    placeholder: 'A Link to the Past is a distant prequel to the original The Legend of Zelda',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Description',
    'help-text': 'You can provide a help text if necessary',
  },
};

export const NoVisualLabel: Story = {
  args: {
    'aria-label': 'Description',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Description',
    invalid: true,
    'help-text': 'A description is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Description',
    disabled: true,
    value:
      'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Description',
    'read-only': true,
    value:
      'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.',
  },
};

export const Optional: Story = {
  args: {
    label: 'Description',
    optional: true,
  },
};

export const ControlledSize: Story = {
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3,
  },
};

export const Autofocus: Story = {
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3,
    placeholder: 'Refresh to see the autofocus take effect',
    autofocus: true,
  },
};

export const FormParticipation: Story = {
  render: () => html`
    <form
      @submit=${(e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        alert('Form submitted with message: ' + formData.get('message'));
      }}>
      <w-textarea
        label="Message"
        name="message"
        required
        help-text="This field is required. Try submitting without a value."></w-textarea>
      <div style="margin-top: 16px; display: flex; gap: 8px;">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates form validation using ElementInternals. The textarea participates in native form validation - submission is blocked when the required field is empty, and the browser shows a validation message.',
      },
    },
  },
};
