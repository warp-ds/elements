import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpSlider } from './slider.js';

// Re-export from split packages
export { SliderThumb } from '../slider-thumb/react.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Slider = createComponent({
  tagName: 'w-slider',
  elementClass: Component as unknown as typeof WarpSlider,
  react: React,
});
