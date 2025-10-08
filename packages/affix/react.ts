import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';

// decouple from CDN by providing a dummy class
class WarpAffix extends LitElement {}

export const Affix = createComponent({
  tagName: 'w-affix',
  elementClass: WarpAffix,
  react: React,
});
