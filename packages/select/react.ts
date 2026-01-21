import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpSelect } from './select.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Select = createComponent({
  tagName: 'w-select',
  elementClass: Component as unknown as typeof WarpSelect,
  react: React,
  events: {
    onChange: 'change',
    onchange: 'change',
  },
});

export const Option = createComponent({
  tagName: 'w-option',
  elementClass: Component as unknown as typeof HTMLOptionElement,
  react: React,
});
