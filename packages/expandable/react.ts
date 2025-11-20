import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import React from 'react';

import { WarpExpandable } from './index.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Expandable = createComponent({
  tagName: 'w-expandable',
  elementClass: Component as unknown as typeof WarpExpandable,
  react: React,
});
