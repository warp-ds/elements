import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpSnackbar } from './snackbar.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Snackbar = createComponent({
  tagName: 'w-snackbar',
  elementClass: Component as unknown as typeof WarpSnackbar,
  react: React,
});
