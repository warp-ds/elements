import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpBadge } from './badge.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Badge = createComponent({
  tagName: 'w-badge',
  elementClass: Component as unknown as typeof WarpBadge,
  react: React,
});
