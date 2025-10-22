import { LitElement } from 'lit';
import React from 'react';

import { createComponent } from '@lit/react';

import { WarpBox } from '.';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Box = createComponent({
  tagName: 'w-box',
  elementClass: Component as unknown as typeof WarpBox,
  react: React,
});
