import React from 'react';

import { createComponent } from '@lit/react';

import { WarpPageIndicator } from './index.js';

export const PageIndicator = createComponent({
  tagName: 'w-pageindicator',
  elementClass: WarpPageIndicator,
  react: React,
});
