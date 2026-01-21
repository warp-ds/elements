import { createComponent } from '@lit/react';
import React from 'react';

import { WarpRadioBasic } from './radio-basic.js';

export const RadioBasic = createComponent({
  tagName: 'w-radio-basic',
  elementClass: WarpRadioBasic,
  react: React,
  events: {
    onChange: 'change',
  },
});
