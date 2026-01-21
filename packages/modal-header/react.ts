import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { ModalHeader as WarpModalHeader } from './modal-header.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const ModalHeader = createComponent({
  tagName: 'w-modal-header',
  elementClass: Component as unknown as typeof WarpModalHeader,
  react: React,
  events: {
    onBackClicked: 'backClicked',
    onbackClicked: 'backClicked',
  },
});
