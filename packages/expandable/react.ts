import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import { WarpExpandable } from '.';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Expandable = createComponent({
  tagName: 'w-expandable',
  elementClass: Component as unknown as typeof WarpExpandable,
  react: React,
});
