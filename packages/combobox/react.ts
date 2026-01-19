import { LitElement } from 'lit';
import React from 'react';

import { createComponent } from '@lit/react';

import { WarpCombobox } from './combobox.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Combobox = createComponent({
  tagName: 'w-combobox',
  elementClass: Component as unknown as typeof WarpCombobox,
  react: React,
  events: {
    onSelect: 'select',
    onselect: 'select',
    onChange: 'change',
    onchange: 'change',
  },
});
