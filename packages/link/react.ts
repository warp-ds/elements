import { LitElement } from 'lit';
import React from 'react';

import { createComponent } from '@lit/react';

import { WarpLink } from '.';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Link = createComponent({
  tagName: 'w-link',
  elementClass: Component as unknown as typeof WarpLink,
  react: React,
});
