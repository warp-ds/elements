import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpAlert } from './alert.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Alert = createComponent({
  tagName: 'w-alert',
  elementClass: Component as unknown as typeof WarpAlert,
  react: React,
});
