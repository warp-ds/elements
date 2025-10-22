import { createComponent } from '@lit/react';
import React from 'react';

import { WarpBox } from './index.js';

export const Box = createComponent({
  tagName: 'w-box',
  elementClass: WarpBox,
  react: React,
});
