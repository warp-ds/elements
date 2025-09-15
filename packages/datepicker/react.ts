import React from 'react';

import { createComponent } from '@lit/react';

import { WarpDatepicker } from './index.js';

export const DatePicker = createComponent({
  tagName: 'w-datepicker',
  elementClass: WarpDatepicker,
  react: React,
});
