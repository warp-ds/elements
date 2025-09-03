import React from 'react';

import { createComponent } from '@lit/react';

import { WarpModal, WarpModalFooter, WarpModalHeader } from './index.js';

export const Modal = createComponent({
  tagName: 'w-modal-footer',
  elementClass: WarpModal,
  react: React,
});

export const ModalHeader = createComponent({
  tagName: 'w-modal-header',
  elementClass: WarpModalHeader,
  react: React,
});

export const ModalFooter = createComponent({
  tagName: 'w-modal-footer',
  elementClass: WarpModalFooter,
  react: React,
});
