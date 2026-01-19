import { LitElement } from 'lit';
import React from 'react';

import { createComponent } from '@lit/react';

import { ModalFooter as WarpModalFooter } from './modal-footer.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const ModalFooter = createComponent({
  tagName: 'w-modal-footer',
  elementClass: Component as unknown as typeof WarpModalFooter,
  react: React,
});
