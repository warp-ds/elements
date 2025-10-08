import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Alert = createComponent({
  tagName: 'w-alert',
  elementClass: Component,
  react: React,
});
