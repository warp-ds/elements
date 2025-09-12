import React from 'react';

import { createComponent } from '@lit/react';

import { WarpDatepicker } from './index.js';

export const Box = createComponent({
  tagName: 'w-datepicker',
  elementClass: WarpDatepicker,
  react: React,
});
