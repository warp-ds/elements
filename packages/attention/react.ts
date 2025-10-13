import React from 'react';

import { LitElement } from 'lit';
import { createComponent, ReactWebComponent } from '@lit/react';
import { WarpAttention } from './index';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseAttention = createComponent({
  tagName: 'w-attention',
  elementClass: Component,
  react: React,
  events: {
    onClose: 'close',
    // additionally support React v19 syntax for CE events
    onclose: 'close'
  }
});

// Derive props from BaseAttention, then merge in real element's props
type BaseProps = React.ComponentProps<typeof BaseAttention>;

// Drop conflicting DOM prop `popover` and add all props back in
export type AttentionProps = Omit<BaseProps, "popover"> & { popover?: boolean } & Partial<Omit<WarpAttention, keyof HTMLElement>>;

export const Attention = BaseAttention as unknown as React.FC<AttentionProps>;
