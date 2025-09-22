import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import type { WarpSlider } from './index.js';
import '../affix/index.js';
import '../textfield/index.js';
import './index.js';

const { events: sliderEvents, args: sliderArgs, argTypes: sliderArgTypes } = getStorybookHelpers<WarpSlider>('w-slider');
// const {
//   events: sliderThumbEvents,
//   args: sliderThumbArgs,
//   argTypes: sliderThumbArgTypes,
// } = getStorybookHelpers<WarpSliderThumb>('w-slider-thumb');

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
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const Range: Story = {
  render() {
    return html`
      <w-slider label="Range" min="0" max="100">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
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
      <w-slider label="Apartment size" min="0" max="250" suffix="${suffix}" data-testid="sqm">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
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
      <w-slider label="Price" min="0" max="250000" suffix="${suffix}" data-testid="currency">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
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
      <w-slider label="Distance" min="0" max="250000" suffix="${suffix}" data-testid="km">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="km"]');
        const formatter = window.getNumberFormatter('${locale}');
        slider.formatter = formatter.format;
      </script>
    `;
  },
};

export const Marks: Story = {
  args: {
    locale: 'nb',
    suffix: 'km',
  },
  render({ locale, suffix }) {
    return html`
      <w-slider label="Distance" markers="0,50000,100000,150000,200000,250000" min="0" max="250000" suffix="${suffix}" data-testid="km">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>

      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="km"]');
        const formatter = window.getNumberFormatter('${locale}');
        slider.formatter = formatter.format;
      </script>
    `;
  },
};

export const Time: Story = {
  render() {
    return html`
      <w-slider label="Time of day" min="0" max="2400" data-testid="time">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
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
      <w-slider label="Production year" min="1950" max="2025" over under>
        <slot name="label">Production year</slot>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
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
      <w-slider label="Single" min="0" max="100">
        <slot name="body">
          <p>Try typing a value over 100</p>
        </slot>
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
      <w-slider label="Production year" min="1950" max="2025" over under>
        <slot name="body">
          <p>Try typing a from value higher than a to value</p>
        </slot>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `;
  },
};
