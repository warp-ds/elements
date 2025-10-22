import { createComponent } from '@lit/react';
import React from 'react';

import { WarpSwitch } from './index.js';

export const Switch = createComponent({
  tagName: 'w-switch',
  elementClass: WarpSwitch,
  react: React,
});
