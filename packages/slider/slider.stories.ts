import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';
import 'virtual:uno.css';

import type { WarpSlider } from './slider.js';
import '../affix/affix.js';
import '../attention/attention.js';
import '../textfield/textfield.js';
import './slider.js';
import '../slider-thumb/slider-thumb.js';

const {
  events: sliderEvents,
  args: sliderArgs,
  argTypes: sliderArgTypes,
} = getStorybookHelpers<WarpSlider>('w-slider');

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
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const SingleDisabled: Story = {
  render() {
    return html`
      <w-slider label="Single disabled" min="0" max="100" disabled>
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const Range: Story = {
  render() {
    return html`
      <w-slider label="Range" min="0" max="100" step="25">
        <w-slider-thumb
          slot="from"
          aria-label="From value"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To value"
          name="to"
        ></w-slider-thumb>
      </w-slider>
    `;
  },
};

// Take a suffix attribute on `<w-slider>` I think, have `<w-slider-thumb>` get from that.
export const SuffixSquareMeters: Story = {
  args: {
    locale: 'nb',
    suffix: 'm²',
  },
  render({ locale, suffix }) {
    return html`
      <w-slider
        label="Apartment size"
        min="0"
        max="250"
        suffix="${suffix}"
        data-testid="sqm"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From size"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To size"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
        sqmSlider.formatter = window.getNumberFormatter("${locale}").format;
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
      <w-slider
        label="Price"
        min="0"
        max="250000"
        suffix="${suffix}"
        data-testid="currency"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From price"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To price"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const currencySlider = document.querySelector(
          'w-slider[data-testid="currency"]',
        );
        currencySlider.formatter = window.getNumberFormatter(
          "${locale}",
        ).format;
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
      <w-slider
        label="Distance"
        min="0"
        max="250000"
        suffix="${suffix}"
        data-testid="km"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From distance"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To distance"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.formatter = window.getNumberFormatter("${locale}").format;
      </script>
    `;
  },
};

export const Marks: Story = {
  args: {
    locale: 'nb',
    step: '5',
    markers: '5',
  },
  render({ markers, step }) {
    return html`
      <w-slider
        label="Single"
        min="0"
        max="100"
        step="${step}"
        markers="${markers}"
      >
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
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
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const OpenEnded: Story = {
  args: {},
  render() {
    return html`
      <form id="openended" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Produksjonsår"
          min="1950"
          max="2025"
          data-testid="openended"
          allow-values-outside-range
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"
          ></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="openended-from"></dd>
          <dt>To:</dt>
          <dd id="openended-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector(
          'w-slider[data-testid="openended"]',
        );
        overunderSlider.formatter = function (value, type) {
          if (value === "" && type.startsWith("from")) {
            if (type === "from-value") {
                return "Min"
            }

            return "Før 1950";
          }
          if (value === "" && type.startsWith("to")) {
            if (type === "to-value") {
                return "Max"
            }

            return "2025+";
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms["openended"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("openended-from").innerText = from;
          document.getElementById("openended-to").innerText = to;
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
  args: {},
  render() {
    return html`
      <form id="rangeerror" style="margin-bottom: 16px">
        <w-slider label="Production year" min="1950" max="2025" over under>
          <p slot="description">
            Try typing a from value higher than a to value
          </p>
          <w-slider-thumb slot="from" name="from"></w-slider-thumb>
          <w-slider-thumb slot="to" name="to"></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="rangeerror-from"></dd>
          <dt>To:</dt>
          <dd id="rangeerror-to"></dd>
        </dl>
      </output>
      <script>
        /** Code to show the form values in output */
        document.forms["rangeerror"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("rangeerror-from").innerText = from;
          document.getElementById("rangeerror-to").innerText = to;
        });
      </script>
    `;
  },
};

export const CustomError: Story = {
  args: {
    locale: 'nb',
    error: "I'm an external error telling you something is wrong",
    invalid: true,
  },
  render(args) {
    return html`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        error="${args.error}"
        ?invalid="${args.invalid}"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const Description: Story = {
  args: {
    locale: 'nb',
  },
  render() {
    return html`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        help-text="Production year of the car"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const VisuallyHiddenLabel: Story = {
  args: {
    locale: 'nb',
  },
  render() {
    return html`
      <w-slider
        min="1950"
        max="2025"
        over
        under
        help-text="Production year of the car"
      >
        <legend class="sr-only" slot="label">Production year</legend>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const HiddenMinimumMaximumLabels: Story = {
  args: {
    locale: 'nb',
  },
  render() {
    return html`
      <w-slider
        min="1950"
        max="2025"
        over
        under
        help-text="Production year of the car"
        data-testid="hidden-minmax-label"
      >
        <legend class="sr-only" slot="label">Production year</legend>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script>
        const hiddenMinMaxSlider = document.querySelector(
          'w-slider[data-testid="hidden-minmax-label"]',
        );
        hiddenMinMaxSlider.formatter = function (value, type) {
          if (type.endsWith("label")) return ""; // this is the magic passphrase

          if (value === "" && type === "from-value") {
            return "Under 200";
          }
          if (value === "" && type === "to-value") {
            return "Over 350";
          }
          return value;
        };
      </script>
    `;
  },
};

export const TheMapCase: Story = {
  args: {
    locale: 'nb',
  },
  render({ locale }) {
    return html`
      <output class="text-xs">
        <span class="font-bold">Distance:</span>
        <span id="distance-value"></span>
      </output>
      <form name="map">
        <w-slider min="0" max="20" hidden-textfield data-testid="map-radius">
          <legend class="sr-only" slot="label">Location filter radius</legend>
          <w-slider-thumb name="distance"></w-slider-thumb>
        </w-slider>
      </form>
      <script>
        const radiusSteps = [
          200, 300, 400, 500, 700, 1000, 1500, 2000, 3000, 5000, 7000, 10000,
          20000, 30000, 50000, 75000, 100000, 200000, 300000, 400000, 500000,
        ];
        const mapRadiusSlider = document.querySelector(
          'w-slider[data-testid="map-radius"]',
        );
        const formatter = window.getNumberFormatter("${locale}");
        mapRadiusSlider.formatter = function (value, type) {
          const index = Number.parseInt(value);
          const numValue = radiusSteps[index];

          let formattedValue = "";

          if (numValue < 1000) {
            // Use non-breaking space here
            formattedValue = formatter.format(numValue) + " m";
          } else {
            formattedValue = formatter.format(numValue / 1000) + " km";
          }

          document.getElementById("distance-value").innerText = formattedValue;

          return formattedValue;
        };

        document.forms["map"].addEventListener("input", function () {
          const formData = new FormData(this);
          const distance = formData.get("distance");
        });
      </script>
    `;
  },
};
