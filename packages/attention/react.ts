import React from 'react';

import { LitElement } from 'lit';
import { createComponent, ReactWebComponent } from '@lit/react';
import { WarpAttention } from './index';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Attention = createComponent({
  tagName: 'w-attention',
  elementClass: Component,
  react: React,
}) as unknown as Omit<ReactWebComponent<Omit<WarpAttention, 'popover'> & Pick<HTMLElement, 'popover'>>, 'popover' & Pick<WarpAttention, 'popover'>>;
