import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import React from 'react';

import { WarpModalFooter, WarpModal, WarpModalHeader } from '.';

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

export const ModalHeader = createComponent({
  tagName: 'w-modal-header',
  elementClass: Component as unknown as typeof WarpModalHeader,
  react: React,
  events: {
    onBackClicked: 'backClicked',
    onbackClicked: 'backClicked',
  },
});

export const ModalFooter = createComponent({
  tagName: 'w-modal-footer',
  elementClass: Component as unknown as typeof WarpModalFooter,
  react: React,
});
