import { LitElement } from 'lit';
import React from 'react';

import { createComponent, EventName } from '@lit/react';

import { WarpSlider } from './slider';
import { WarpSliderThumb } from './slider-thumb';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Slider = createComponent({
  tagName: 'w-slider',
  elementClass: Component as unknown as typeof WarpSlider,
  react: React,
});

export const SliderThumb = createComponent({
  tagName: 'w-slider-thumb',
  elementClass: Component as unknown as typeof WarpSliderThumb,
  react: React,
  events: {
    onSliderValidity: 'slidervalidity' as EventName<CustomEvent>,
    'onslider-validity': 'slidervalidity' as EventName<CustomEvent>, // should be slider-validity
  },
});
