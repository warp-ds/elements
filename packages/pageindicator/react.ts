import { createComponent } from '@lit/react';
import React from 'react';

import { WarpPageIndicator } from './index.js';

export const PageIndicator = createComponent({
  tagName: 'w-pageindicator',
  elementClass: WarpPageIndicator,
  react: React,
});
