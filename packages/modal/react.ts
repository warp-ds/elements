import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Modal = createComponent({
  tagName: 'w-modal-footer',
  elementClass: Component,
  react: React,
});

export const ModalHeader = createComponent({
  tagName: 'w-modal-header',
  elementClass: Component,
  react: React,
});

export const ModalFooter = createComponent({
  tagName: 'w-modal-footer',
  elementClass: Component,
  react: React,
});
