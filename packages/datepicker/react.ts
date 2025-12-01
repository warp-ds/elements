import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import React from 'react';

import { WarpDatepicker } from './datepicker.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const DatePicker = createComponent({
  tagName: 'w-datepicker',
  elementClass: Component as unknown as typeof WarpDatepicker,
  react: React,
  events: {
    onChange: 'change',
    onchange: 'change',
  },
});
