import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Link = createComponent({
  tagName: 'w-link',
  elementClass: Component,
  react: React,
});
