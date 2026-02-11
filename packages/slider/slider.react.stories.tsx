import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Slider, SliderThumb } from './react';

const locale = 'nb';

const getNumberFormatter = (locale: string, opts = {}) => {
  return (value: string) =>
    new Intl.NumberFormat(locale, { maximumFractionDigits: 0, ...opts }).format(value as unknown as number);
};

export default {
  title: 'Forms/Slider and Range Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

export type Story = StoryObj<typeof Slider>;

export const Single: Story = {
  render() {
    return (
      <Slider label="Single" min="0" max="100">
        <SliderThumb name="value" />
      </Slider>
    );
  },
};

export const Range: Story = {
  render() {
    return (
      <Slider label="Range" min="0" max="100">
        <SliderThumb name="from" slot="from" aria-label="From value" />
        <SliderThumb name="to" slot="to" aria-label="To value" />
      </Slider>
    );
  },
};

// Take a suffix attribute on `<Slider>` I think, have `<SliderThumb>` get from that.
export const SuffixSquareMeters: Story = {
  args: {
    suffix: 'm²',
  },
  render({ suffix }) {
    return (
      <Slider label="Apartment size" min="0" max="250" suffix={suffix}>
        <SliderThumb slot="from" aria-label="From size" name="from" />
        <SliderThumb slot="to" aria-label="To size" name="to" />
      </Slider>
    );
  },
};

export const SuffixCurrency: Story = {
  args: {
    suffix: 'kr',
  },
  render({ suffix }) {
    const numberFormatter = getNumberFormatter(locale);
    const min = '0';
    const max = '250000';
    return (
      <Slider
        label="Price"
        min={min}
        max={max}
        suffix={suffix}
        labelFormatter={(slot) => {
          if (slot === 'from') {
            return min;
          }
          return numberFormatter(max);
        }}
        valueFormatter={numberFormatter}
      >
        <SliderThumb slot="from" aria-label="From price" name="from" />
        <SliderThumb slot="to" aria-label="To price" name="to" />
      </Slider>
    );
  },
};

export const SuffixKilometers: Story = {
  args: {
    suffix: 'km',
  },
  render({ suffix }) {
    const numberFormatter = getNumberFormatter(locale);
    const min = '0';
    const max = '250000';
    return (
      <Slider
        label="Distance"
        min="0"
        max="250000"
        suffix={suffix}
        labelFormatter={(slot) => {
          if (slot === 'from') {
            return min;
          }
          return numberFormatter(max);
        }}
        valueFormatter={numberFormatter}
      >
        <SliderThumb slot="from" aria-label="From distance" name="from" />
        <SliderThumb slot="to" aria-label="To distance" name="to" />
      </Slider>
    );
  },
};

export const Marks: Story = {
  args: {
    suffix: 'km',
  },
  render({ suffix }) {
    return (
      <>
        <Slider label="Single" min="0" max="100" markers={5} step={5}>
          <SliderThumb name="value" />
        </Slider>
      </>
    );
  },
};

export const Step: Story = {
  args: {
    step: 5,
  },
  render({ step }) {
    return (
      <Slider label="Single" step={step} min="0" max="100">
        <SliderThumb name="value" />
      </Slider>
    );
  },
};

export const OpenEnded: Story = {
  render() {
    const [openEndedFrom, setOpenEndedFrom] = useState('');
    const [openEndedTo, setOpenEndedTo] = useState('');
    return (
      <>
        <form
          id="openEnded"
          style={{ marginBottom: 16 }}
          lang="nb"
          onInput={(val) => {
            const formData = new FormData(val.currentTarget);
            setOpenEndedFrom(formData.get('from') as unknown as string);
            setOpenEndedTo(formData.get('to') as unknown as string);
          }}
        >
          <Slider
            label="Produksjonsår"
            min="1950"
            max="2025"
            data-testid="overunder"
            labelFormatter={(slot) => {
              if (slot === 'from') {
                return 'Før 1950';
              }
              return '2025 +';
            }}
            valueFormatter={(value, slot) => {
              if (slot === 'from' && value === '') {
                return 'Min';
              }
              if (slot === 'to' && value === '') {
                return 'Max';
              }
              return value;
            }}
          >
            <SliderThumb slot="from" aria-label="Fra år" name="from" />
            <SliderThumb slot="to" aria-label="Til år" name="to" />
          </Slider>
        </form>
        <p>Drag the slider to show the value below. See the Code tab for how to format the labels.</p>
        <output>
          <dl>
            <dt>From:</dt>
            <dd id="openended-from">{openEndedFrom}</dd>
            <dt>To:</dt>
            <dd id="openended-to">{openEndedTo}</dd>
          </dl>
        </output>
      </>
    );
  },
};

export const SingleError: Story = {
  render() {
    return (
      <Slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <SliderThumb />
      </Slider>
    );
  },
};

export const RangeError: Story = {
  render() {
    return (
      <Slider label="Production year" min="1950" max="2025">
        <p slot="description">Try typing a from value higher than a to value</p>
        <SliderThumb slot="from" name="from" />
        <SliderThumb slot="to" name="to" />
      </Slider>
    );
  },
};

export const TestCase: Story = {
  render() {
    const [fromValue, setFromValue] = useState('0');
    const [toValue, setToValue] = useState('150000');
    return (
      <>
        <form
          id="overunder"
          style={{ marginBottom: 16 }}
          lang="nb"
          onInput={(val) => {
            const formData = new FormData(val.currentTarget);
            setFromValue(formData.get('from') as unknown as string);
            setToValue(formData.get('to') as unknown as string);
          }}
        >
          <Slider label="Pris" min="0" max="700000">
            <SliderThumb slot="from" aria-label="Fra pris" name="from" value={fromValue} />
            <SliderThumb
              slot="to"
              aria-label="Til pris"
              aria-description="700000 inkluderer prisen derfra og opp"
              name="to"
              value={toValue}
            />
          </Slider>
        </form>
        <p>Drag the slider to show the value below. See the Code tab for how to format the labels.</p>
        <output>
          <dl>
            <dt>From:</dt>
            <dd>{fromValue}</dd>
            <dt>To:</dt>
            <dd>{toValue}</dd>
          </dl>
        </output>
      </>
    );
  },
};
