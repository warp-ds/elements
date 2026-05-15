import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpSnackbarItem } from './snackbar-item.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const SnackbarItem = createComponent({
  tagName: 'w-snackbar-item',
  elementClass: Component as unknown as typeof WarpSnackbarItem,
  react: React,
});
