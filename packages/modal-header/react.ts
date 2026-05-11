import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpModalHeader } from './modal-header.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseModalHeader = createComponent({
  tagName: 'w-modal-header',
  elementClass: Component as unknown as typeof WarpModalHeader,
  react: React,
  events: {
    onBackClicked: 'backClicked',
    onbackClicked: 'backClicked',
  },
});

type BaseModalHeaderProps = React.ComponentPropsWithoutRef<typeof BaseModalHeader>;

type ModalHeaderProps = Omit<BaseModalHeaderProps, 'no-close'> & {
  noClose?: boolean;
};

export const ModalHeader = React.forwardRef<WarpModalHeader, ModalHeaderProps>(({ noClose, ...props }, ref) =>
  React.createElement(BaseModalHeader, {
    ...props,
    ...(noClose ? { 'no-close': true } : {}),
    ref,
  } as React.ComponentProps<typeof BaseModalHeader> & {
    'no-close'?: boolean;
  }),
);

ModalHeader.displayName = 'ModalHeader';
