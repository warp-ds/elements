import { createComponent } from '@lit/react';
import React from 'react';

import { WarpTextField } from './index.js';

export const TextField = createComponent({
  tagName: 'w-textfield',
  elementClass: WarpTextField,
  react: React,
});
