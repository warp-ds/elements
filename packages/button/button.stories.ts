import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpButton } from './button.js';
import './button.js';

const { events, args, argTypes } = getStorybookHelpers<WarpButton>('w-button');
import '../icon/icon.js';
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

/* -------------------------------------------------------------------------------------------------
 * Added stories: overlay variants + regressions (href mode + quiet mapping + loading across variants)
 * ------------------------------------------------------------------------------------------------- */

export const Overlay: Story = {
  args: {
    variant: 'overlay',
    type: 'button',
  },
};

export const OverlayInverted: Story = {
  args: {
    variant: 'overlayInverted',
    type: 'button',
  },
};

export const OverlayQuiet: Story = {
  args: {
    variant: 'overlayQuiet',
    type: 'button',
  },
};

export const OverlayInvertedQuiet: Story = {
  args: {
    variant: 'overlayInvertedQuiet',
    type: 'button',
  },
};

/**
 * Helpful grid to spot:
 * - hover backgrounds (especially link + quiet variants)
 * - pill icon color regressions
 * - any padding/outline oddities
 */
export const AllVariantsGrid: Story = {
  args: {},
  render() {
    const locale = detectLocale();

    const variants: Array<WarpButton['variant']> = [
      'primary',
      'secondary',
      'negative',
      'negativeQuiet',
      'utility',
      'utilityQuiet',
      'quiet',
      'link',
      'pill',
      'overlay',
      'overlayInverted',
      'overlayQuiet',
      'overlayInvertedQuiet',
    ];

    return html`
      <div style="display:grid; gap: 16px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          Grid for visual regression checking (hover states / padding / icon colors).
        </div>

        <div style="display:grid; gap: 12px;">
          ${variants.map(
            (v) => html`
              <div style="display:flex; align-items:center; gap: 12px; flex-wrap: wrap;">
                <div style="width: 210px; font: 12px/1.4 system-ui; opacity: 0.8;">variant="${v}"</div>

                <w-button variant=${v} type="button">Label</w-button>

                ${
                  v === 'pill'
                    ? html`
                      <w-button variant="pill" type="button" icon-only aria-label="Pill icon">
                        <w-icon
                          name="Heart"
                          size="small"
                          locale="${locale}"
                          style="height: 16px;"
                          class="flex"
                        ></w-icon>
                      </w-button>
                    `
                    : null
                }
              </div>
            `,
          )}
        </div>
      </div>
    `;
  },
};

/**
 * Confirms backwards compat mapping for the deprecated `quiet` flag.
 * Especially relevant for overlay/overlayInverted and negative/utility.
 */
export const QuietBackCompatMapping: Story = {
  args: {},
  render() {
    return html`
      <div style="display:grid; gap: 12px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          These should look like their corresponding <code>*Quiet</code> variants.
        </div>

        <div style="display:flex; gap: 12px; flex-wrap: wrap;">
          <w-button variant="negative" quiet type="button">negative + quiet</w-button>
          <w-button variant="utility" quiet type="button">utility + quiet</w-button>
          <w-button variant="overlay" quiet type="button">overlay + quiet</w-button>
          <w-button variant="overlayInverted" quiet type="button">overlayInverted + quiet</w-button>
          <w-button variant="secondary" quiet type="button">secondary + quiet</w-button>
        </div>
      </div>
    `;
  },
};

/**
 * Loading should be consistent across variants (disabled-like + stripes).
 * This story makes it obvious if a variant leaks hover/background/color into loading.
 */
export const LoadingAcrossVariants: Story = {
  args: {},
  render() {
    const variants: Array<WarpButton['variant']> = [
      'primary',
      'secondary',
      'negative',
      'negativeQuiet',
      'utility',
      'utilityQuiet',
      'quiet',
      'link',
      'overlay',
      'overlayInverted',
      'overlayQuiet',
      'overlayInvertedQuiet',
      'pill',
    ];

    return html`
      <div style="display:grid; gap: 16px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          Loading should look the same no matter the variant.
        </div>

        <div style="display:flex; flex-wrap: wrap; gap: 12px;">
          ${variants.map((v) => html`<w-button variant=${v} loading type="button">${v}</w-button>`)}
        </div>
      </div>
    `;
  },
};

/**
 * This targets the known tricky path:
 * w-button with href renders w-link (back-compat).
 * Great for spotting:
 * - hover gray bg (should not happen for "link" look)
 * - double padding when link is rendered inside button styling assumptions
 */
export const HrefModeRegression: Story = {
  args: {},
  render() {
    return html`
      <div style="display:grid; gap: 12px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          <code>w-button[href]</code> renders <code>w-link</code> (backwards compatibility path).
          Hover these and check for unwanted gray backgrounds / padding.
        </div>

        <div style="display:flex; gap: 12px; flex-wrap: wrap;">
          <w-button variant="primary" href="https://example.com" target="_blank" type="button">primary href</w-button>
          <w-button variant="overlay" href="https://example.com" target="_blank" type="button">overlay href</w-button>
          <w-button variant="overlayQuiet" href="https://example.com" target="_blank" type="button"
            >overlayQuiet href</w-button
          >
          <w-button variant="overlayInvertedQuiet" href="https://example.com" target="_blank" type="button"
            >overlayInvertedQuiet href</w-button
          >
          <w-button variant="link" href="https://example.com" target="_blank" type="button">link href</w-button>
        </div>
      </div>
    `;
  },
};
