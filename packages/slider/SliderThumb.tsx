import { createComponent } from '@lit/react';
import React from 'react';

import { WarpSliderThumb } from './slider-thumb.js';

export const SliderThumb = createComponent({
  tagName: 'w-slider-thumb',
  elementClass: WarpSliderThumb,
  react: React,
});
