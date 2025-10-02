import React from 'react';

import { createComponent } from '@lit/react';

import { WarpSlider } from './slider.js';

export const Slider = createComponent({
  tagName: 'w-slider',
  elementClass: WarpSlider,
  react: React,
});
