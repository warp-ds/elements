import { LitElement } from 'lit';
import React from 'react';

import { createComponent } from '@lit/react';

import { WarpAffix } from './index';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Affix = createComponent({
  tagName: 'w-affix',
  elementClass: Component as unknown as typeof WarpAffix,
  react: React,
});
