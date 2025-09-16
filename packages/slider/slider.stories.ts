import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import type { WarpSlider, WarpSliderThumb } from './index.js';
import '../affix/index.js';
import '../textfield/index.js';
import './index.js';

const { events: sliderEvents, args: sliderArgs, argTypes: sliderArgTypes } = getStorybookHelpers<WarpSlider>('w-slider');
const {
  events: sliderThumbEvents,
  args: sliderThumbArgs,
  argTypes: sliderThumbArgTypes,
} = getStorybookHelpers<WarpSliderThumb>('w-slider-thumb');

const meta: Meta = {
  title: 'Forms/Slider and Range Slider',
  args: sliderArgs,
  argTypes: sliderArgTypes,
  parameters: {
    actions: {
      handles: sliderEvents,
    },
  },
};

export default meta;
type Story = StoryObj;

export const Single: Story = {
  render() {
    return html`
      <w-slider min="0" max="100">
        <slot name="label">Single</slot>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const Range: Story = {
  render() {
    return html`
      <w-slider min="0" max="100">
        <slot name="label">Range</slot>
        <slot name="from">
          <w-slider-thumb></w-slider-thumb>
        </slot>
        <slot name="to">
          <w-slider-thumb></w-slider-thumb>
        </slot>
      </w-slider>
    `;
  },
};

// Take a suffix attribute on `<w-slider>` I think, have `<w-slider-thumb>` get from that.
export const SuffixSquareMeters: Story = {
  args: {
    locale: 'nb',
    suffix: 'm2',
  },
  render({ locale, suffix }) {
    return html`
      <w-slider min="0" max="250" suffix="${suffix}" data-testid="sqm">
        <slot name="label">Apartment size</slot>
        <slot name="from">
          <w-slider-thumb></w-slider-thumb>
        </slot>
        <slot name="to">
          <w-slider-thumb></w-slider-thumb>
        </slot>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="sqm"]');
        const formatter = window.getNumberFormatter('${locale}');
        slider.formatter = formatter.format;
      </script>
    `;
  },
};

export const SuffixCurrency: Story = {
  args: {
    locale: 'nb',
    suffix: 'kr',
  },
  render({ locale, suffix }) {
    return html`
      <w-slider min="0" max="250000" suffix="${suffix}" data-testid="currency">
        <slot name="label">Price</slot>
        <slot name="from">
          <w-slider-thumb></w-slider-thumb>
        </slot>
        <slot name="to">
          <w-slider-thumb></w-slider-thumb>
        </slot>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="currency"]');
        const formatter = window.getNumberFormatter('${locale}');
        slider.formatter = formatter.format;
      </script>
    `;
  },
};

export const SuffixKilometers: Story = {
  args: {
    locale: 'nb',
    suffix: 'km',
  },
  render({ locale, suffix }) {
    return html`
      <w-slider min="0" max="250000" suffix="${suffix}" data-testid="km">
        <slot name="label">Distance</slot>
        <slot name="from">
          <w-slider-thumb></w-slider-thumb>
        </slot>
        <slot name="to">
          <w-slider-thumb></w-slider-thumb>
        </slot>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="km"]');
        const formatter = window.getNumberFormatter('${locale}');
        slider.formatter = formatter.format;
      </script>
    `;
  },
};

// For this and the Suffix ones
export const Time: Story = {
  render() {
    return html`
      <w-slider min="0" max="2400" data-testid="time">
        <slot name="label">Time of day</slot>
        <slot name="from">
          <w-slider-thumb></w-slider-thumb>
        </slot>
        <slot name="to">
          <w-slider-thumb></w-slider-thumb>
        </slot>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="time"]');
        slider.formatter = (value) => {
          const padded = value.padStart(4, '0');
          return padded.substring(0, 2) + ':' + padded.substring(2);
        };
      </script>
    `;
  },
};

export const OverUnder: Story = {
  args: {
    locale: 'nb',
  },
  render() {
    return html`
      <w-slider min="1950" max="2025" over under>
        <slot name="label">Production year</slot>
        <slot name="from">
          <w-slider-thumb></w-slider-thumb>
        </slot>
        <slot name="to">
          <w-slider-thumb></w-slider-thumb>
        </slot>
      </w-slider>
    `;
  },
};

export const SingleError: Story = {
  args: {
    locale: 'nb',
  },
  render() {
    return html`
      <w-slider min="0" max="100">
        <slot name="label">Single</slot>
        <slot name="body">Try typing a value over 100</slot>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const RangeError: Story = {
  args: {
    locale: 'nb',
  },
  render() {
    return html`
      <w-slider min="1950" max="2025" over under>
        <slot name="label">Production year</slot>
        <slot name="body">Try typing a from value higher than a to value</slot>
        <slot name="from">
          <w-slider-thumb></w-slider-thumb>
        </slot>
        <slot name="to">
          <w-slider-thumb></w-slider-thumb>
        </slot>
      </w-slider>
    `;
  },
};
