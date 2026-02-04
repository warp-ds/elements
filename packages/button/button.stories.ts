import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpButton } from './button.js';
import './button.js';

const { events, args, argTypes } = getStorybookHelpers<WarpButton>('w-button');
import '#icon';
import { detectLocale } from '../i18n.js';

const meta: Meta<typeof args> = {
  title: 'Buttons/Button',
  render(args) {
    return html`<w-button ${spread(prespread(args))}>Button Text</w-button>`;
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

export const Primary: Story = {
  args: {
    variant: 'primary',
    type: 'button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    type: 'button',
  },
};

export const Negative: Story = {
  args: {
    variant: 'negative',
    type: 'button',
  },
};

export const Utility: Story = {
  args: {
    variant: 'utility',
    type: 'button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    type: 'button',
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_components',
    target: '_new',
  },
};

export const Pill: Story = {
  args: {
    variant: 'pill',
    type: 'button',
  },
  render(args) {
    const locale = detectLocale();
    return html`<w-button ${spread(prespread(args))}>
        <w-icon name="ChevronLeft" size="small" locale="${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${spread(prespread(args))}>
        <w-icon name="Close" size="small" locale="${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${spread(prespread(args))}>
        <w-icon name="Heart" size="small" locale="${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${spread(prespread(args))}>
        <w-icon name="ChevronRight" size="small" locale="${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <br />
      <w-button ${spread(prespread(args))} small="">
        <w-icon name="ChevronLeft" size="small" locale="${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${spread(prespread(args))} small="">
        <w-icon name="Close" size="small" locale="${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${spread(prespread(args))} small="">
        <w-icon name="Heart" size="small" locale="${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${spread(prespread(args))} small="">
        <w-icon name="ChevronRight" size="small" locale="${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>`;
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    small: true,
    type: 'button',
  },
};

export const Quiet: Story = {
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    type: 'button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    'full-width': true,
    type: 'button',
  },
  render(args) {
    return html`
      <div class="w-full flex flex-col gap-8">
        <w-button ${spread(prespread(args))}>Full width</w-button>
      </div>
    `;
  },
};

export const AsLink: Story = {
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    type: 'button',
  },
  render(args) {
    return html`<w-button ${spread(prespread(args))}>Visit Example</w-button>`;
  },
};

export const FormControl: Story = {
  args: {},
  render() {
    return html`
      <form name="form-control">
        <input type="text" value="I am an input field" name="demoValue" style="border: 1px solid lime" />
        <w-button type="reset" name="resetButton" value="fooyoo">Reset</w-button>
        <w-button type="submit" name="submuitButtton" value="fooyoo">Send thing</w-button>
      </form>
    `;
  },
};
