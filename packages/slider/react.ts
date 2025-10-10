import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
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
});
