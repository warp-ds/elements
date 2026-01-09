import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import React from 'react';

import { WarpCard } from './index.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Card = createComponent({
  tagName: 'w-card',
  elementClass: Component as unknown as typeof WarpCard,
  react: React,
});
