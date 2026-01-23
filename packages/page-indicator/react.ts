import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpPageIndicator } from './page-indicator.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const PageIndicator = createComponent({
  tagName: 'w-page-indicator',
  elementClass: Component as unknown as typeof WarpPageIndicator,
  react: React,
});
