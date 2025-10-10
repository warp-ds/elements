import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import { WarpCard } from '.';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Card = createComponent({
  tagName: 'w-card',
  elementClass: Component as unknown as typeof WarpCard,
  react: React,
});
