import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpAttention } from './attention.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseAttention = createComponent({
  tagName: 'w-attention',
  elementClass: Component,
  react: React,
  events: {
    onClose: 'close',
    // additionally support React v19 syntax for CE events
    onclose: 'close',
  },
});

// Derive props from BaseAttention, then merge in real element's props
type BaseProps = React.ComponentPropsWithoutRef<typeof BaseAttention>;

// Drop conflicting DOM prop `popover` and add all props back in
export type AttentionProps = Omit<
  BaseProps,
  'popover' | 'can-close' | 'no-arrow' | 'cross-axis' | 'fallback-placements'
> & { popover?: boolean } & Partial<Omit<WarpAttention, keyof HTMLElement>>;

const ForwardedAttention = React.forwardRef<WarpAttention, AttentionProps>(
  ({ canClose, noArrow, crossAxis, fallbackPlacements, ...props }, ref) =>
    React.createElement(BaseAttention, {
      ...props,
      ...(canClose ? { 'can-close': true } : {}),
      ...(noArrow ? { 'no-arrow': true } : {}),
      ...(crossAxis ? { 'cross-axis': true } : {}),
      ...(fallbackPlacements !== undefined ? { 'fallback-placements': JSON.stringify(fallbackPlacements) } : {}),
      ref,
    } as unknown as React.ComponentProps<typeof BaseAttention> & {
      'can-close'?: boolean;
      'no-arrow'?: boolean;
      'cross-axis'?: boolean;
      'fallback-placements'?: string;
    }),
);

export const Attention = ForwardedAttention as unknown as React.FC<AttentionProps>;

Attention.displayName = 'Attention';
