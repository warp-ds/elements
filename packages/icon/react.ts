import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WIcon } from './icon.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Icon = createComponent({
  tagName: 'w-icon',
  elementClass: Component as unknown as typeof WIcon,
  react: React,
});
