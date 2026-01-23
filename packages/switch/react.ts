import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpSwitch } from './switch.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Switch = createComponent({
  tagName: 'w-switch',
  elementClass: Component as unknown as typeof WarpSwitch,
  react: React,
  events: {
    onChange: 'change',
    onchange: 'change',
  },
});
