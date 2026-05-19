import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpRadio } from './radio.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Radio = createComponent({
  tagName: 'w-radio',
  elementClass: Component as unknown as typeof WarpRadio,
  react: React,
});
