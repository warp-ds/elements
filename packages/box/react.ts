import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import React from 'react';

import { WarpBox } from './index.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Box = createComponent({
  tagName: 'w-box',
  elementClass: Component as unknown as typeof WarpBox,
  react: React,
});
