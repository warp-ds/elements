import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import { WarpAttention } from './index';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Attention = createComponent({
  tagName: 'w-attention',
  // @ts-expect-error Overriding native HTML popover global attribute
  elementClass: Component as unknown as typeof WarpAttention,
  react: React,
});
