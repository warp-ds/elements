import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import React from 'react';

import { WarpPageIndicator } from './index.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const PageIndicator = createComponent({
  tagName: 'w-pageindicator',
  elementClass: Component as unknown as typeof WarpPageIndicator,
  react: React,
});
