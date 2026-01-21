import { createComponent, EventName } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpSliderThumb } from './slider-thumb.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const SliderThumb = createComponent({
  tagName: 'w-slider-thumb',
  elementClass: Component as unknown as typeof WarpSliderThumb,
  react: React,
  events: {
    onSliderValidity: 'slidervalidity' as EventName<CustomEvent>,
    'onslider-validity': 'slidervalidity' as EventName<CustomEvent>, // should be slider-validity
  },
});
