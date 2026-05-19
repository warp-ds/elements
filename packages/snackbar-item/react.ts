import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpSnackbarItem } from './snackbar-item.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseSnackbarItem = createComponent({
  tagName: 'w-snackbar-item',
  elementClass: Component as unknown as typeof WarpSnackbarItem,
  react: React,
});

type BaseSnackbarItemProps = React.ComponentPropsWithoutRef<typeof BaseSnackbarItem>;

type SnackbarItemProps = Omit<BaseSnackbarItemProps, 'action-as-block'> & {
  actionAsBlock?: boolean;
};

export const SnackbarItem = React.forwardRef<WarpSnackbarItem, SnackbarItemProps>(
  ({ actionAsBlock, ...props }, ref) => 
    React.createElement(BaseSnackbarItem, {
      ...props,
      ...(actionAsBlock ? { 'action-as-block': true } : {}),
    }),
); 
