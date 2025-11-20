import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import React from 'react';

import { WarpDeadToggle } from './index.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const DeadToggle = createComponent({
  tagName: 'w-dead-toggle',
  elementClass: Component as unknown as typeof WarpDeadToggle,
  react: React,
});
