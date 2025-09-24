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
        const sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
        sqmSlider.formatter = window.getNumberFormatter('${locale}').format;
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
        const currencySlider = document.querySelector('w-slider[data-testid="currency"]');
        currencySlider.formatter = window.getNumberFormatter('${locale}').format;
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
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.formatter = window.getNumberFormatter('${locale}').format;
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
      <w-slider
        label="Distance"
        markers="0,50000,100000,150000,200000,250000"
        min="0"
        max="250000"
        suffix="${suffix}"
        data-testid="markers">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>

      <script type="module">
        const markersSlider = document.querySelector('w-slider[data-testid="markers"]');
        markersSlider.formatter = window.getNumberFormatter('${locale}').format;
      </script>
    `;
  },
};

export const Step: Story = {
  args: {
    step: 5,
  },
  render({ step }) {
    return html`
      <w-slider label="Single" step="${step}" min="0" max="100">
        <w-slider-thumb name="single"></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const OverUnder: Story = {
  args: {},
  render() {
    return html`
      <form id="overunder" style="margin-bottom: 16px">
        <w-slider label="Production year" min="1950" max="2025" data-testid="overunder">
          <w-slider-thumb slot="from" name="from"></w-slider-thumb>
          <w-slider-thumb slot="to" name="to"></w-slider-thumb>
        </w-slider>
      </form>
      <p>Drag the slider to show the value below. See the Code tab for how to format the labels.</p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="overunder-from"></dd>
          <dt>To:</dt>
          <dd id="overunder-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector('w-slider[data-testid="overunder"]');
        overunderSlider.formatter = function (value) {
          if (value === '1950') {
            return 'Før 1950';
          }
          if (value === '2025') {
            return 'Etter 2025';
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms['overunder'].addEventListener('input', function () {
          const formData = new FormData(this);
          const from = formData.get('from');
          const to = formData.get('to');
          document.getElementById('overunder-from').innerText = from;
          document.getElementById('overunder-to').innerText = to;
        });
      </script>
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
        <p slot="description">Try typing a value over 100</p>
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
        <p slot="description">Try typing a from value higher than a to value</p>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `;
  },
};
