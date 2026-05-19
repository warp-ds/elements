import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpModal } from './modal.js';

export { ModalFooter } from '../modal-footer/react.js';
// Re-export from split packages
export { ModalHeader } from '../modal-header/react.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseModal = createComponent({
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

type BaseModalProps = React.ComponentPropsWithoutRef<typeof BaseModal>;

type ModalProps = Omit<BaseModalProps, 'content-id' | 'ignore-backdrop-clicks'> & {
  contentId?: string;
  ignoreBackdropClicks?: boolean;
};

export const Modal = React.forwardRef<WarpModal, ModalProps>(({ contentId, ignoreBackdropClicks, ...props }, ref) =>
  React.createElement(BaseModal, {
    ...props,
    ...(contentId !== undefined ? { 'content-id': contentId } : {}),
    ...(ignoreBackdropClicks ? { 'ignore-backdrop-clicks': true } : {}),
    ref,
  } as React.ComponentProps<typeof BaseModal> & {
    'content-id'?: string;
    'ignore-backdrop-clicks'?: boolean;
  }),
);

Modal.displayName = 'Modal';
