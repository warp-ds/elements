import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpIcon } from './icon.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Icon = createComponent({
  tagName: 'w-icon',
  elementClass: Component as unknown as typeof WarpIcon,
  react: React,
});
