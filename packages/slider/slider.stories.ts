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
};

export default meta;
type Story = StoryObj;

export const Single: Story = {
  render({}) {
    return html`
      <w-slider>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `;
  },
  args: {
    ...sliderArgs,
    ...sliderThumbArgs,
  },
  argTypes: {
    ...sliderArgTypes,
    ...sliderThumbArgTypes,
  },
  parameters: {
    actions: {
      handles: {
        ...sliderEvents,
        ...sliderThumbEvents,
      },
    },
  },
};

export const Range: Story = {
  render({}) {
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
  args: {
    ...sliderArgs,
    ...sliderThumbArgs,
  },
  argTypes: {
    ...sliderArgTypes,
    ...sliderThumbArgTypes,
  },
  parameters: {
    actions: {
      handles: {
        ...sliderEvents,
        ...sliderThumbEvents,
      },
    },
  },
};
