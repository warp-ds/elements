import { html } from 'lit';

import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpSlider, WarpSliderThumb } from './index.js';
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
      <w-slider>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const Range: Story = {
  render() {
    return html`
      <w-slider>
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

export const SuffixSquareMeters: Story = {
  render() {
    return html`
      <w-slider>
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

export const SuffixCurrency: Story = {
  render() {
    return html`
      <w-slider>
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

export const SuffixKilometers: Story = {
  render() {
    return html`
      <w-slider>
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

export const Time: Story = {
  render() {
    return html`
      <w-slider>
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

export const OverUnder: Story = {
  render() {
    return html`
      <w-slider>
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
  render() {
    return html`
      <w-slider>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `;
  },
};

export const RangeError: Story = {
  render() {
    return html`
      <w-slider>
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
