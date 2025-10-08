import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Box = createComponent({
  tagName: 'w-box',
  elementClass: Component,
  react: React,
});
