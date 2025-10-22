import { createComponent } from '@lit/react';
import React from 'react';

import { WarpButton } from './index.js';

export const Button = createComponent({
  tagName: 'w-button',
  elementClass: WarpButton,
  react: React,
});
