import { LitElement } from 'lit';
import React from 'react';

import { createComponent } from '@lit/react';

import { WRadio } from './radio.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Radio = createComponent({
  tagName: 'w-radio',
  elementClass: Component as unknown as typeof WRadio,
  react: React,
});
