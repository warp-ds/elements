import { LitElement } from 'lit';
import React from 'react';

import { createComponent } from '@lit/react';

import { WarpAlert } from '.';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Alert = createComponent({
  tagName: 'w-alert',
  elementClass: Component as unknown as typeof WarpAlert,
  react: React,
});
