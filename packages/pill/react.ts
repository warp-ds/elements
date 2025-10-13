import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import { WarpPill } from '.';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Pill = createComponent({
  tagName: 'w-pill',
  elementClass: Component as unknown as typeof WarpPill,
  react: React,
  events: {
    onClick: 'w-pill-click', // should be click
    onclick: 'w-pill-click',
    onClose: 'w-pill-close', // should be close
    onclose: 'w-pill-close',
  }
});
