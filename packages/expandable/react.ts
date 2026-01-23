import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpExpandable } from './expandable.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Expandable = createComponent({
  tagName: 'w-expandable',
  elementClass: Component as unknown as typeof WarpExpandable,
  react: React,
});
