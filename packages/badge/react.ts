import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import React from 'react';

import { WarpBadge } from './index.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Badge = createComponent({
  tagName: 'w-badge',
  elementClass: Component as unknown as typeof WarpBadge,
  react: React,
});
