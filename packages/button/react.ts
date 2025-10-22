import { LitElement } from 'lit';
import React from 'react';

import { createComponent } from '@lit/react';

import { WarpButton } from './index';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Button = createComponent({
  tagName: 'w-button',
  elementClass: Component as unknown as typeof WarpButton,
  react: React,
});
