import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpCard } from './card.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Card = createComponent({
  tagName: 'w-card',
  elementClass: Component as unknown as typeof WarpCard,
  react: React,
});
