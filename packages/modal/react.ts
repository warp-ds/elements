import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { ModalMain as WarpModal } from './modal.js';

export { ModalFooter } from '../modal-footer/react.js';
// Re-export from split packages
export { ModalHeader } from '../modal-header/react.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Modal = createComponent({
  tagName: 'w-modal',
  elementClass: Component as unknown as typeof WarpModal,
  react: React,
  events: {
    onShown: 'shown',
    onshown: 'shown',
    onHidden: 'hidden',
    onhidden: 'hidden',
  },
});
