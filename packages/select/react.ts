import { createComponent } from '@lit/react';
import React from 'react';

import { WarpSelect } from './index.js';

export const Select = createComponent({
  tagName: 'w-select',
  elementClass: WarpSelect,
  react: React,
});
