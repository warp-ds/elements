import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { SnackbarActionPlacement, WarpSnackbarItem } from './snackbar-item.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseSnackbarItem = createComponent({
  tagName: 'w-snackbar-item',
  elementClass: Component as unknown as typeof WarpSnackbarItem,
  react: React,
});

type BaseSnackbarItemProps = React.ComponentPropsWithoutRef<typeof BaseSnackbarItem>;

type SnackbarItemProps = Omit<BaseSnackbarItemProps, 'action-placement'> & {
  actionPlacement?: SnackbarActionPlacement;
};

export const SnackbarItem = React.forwardRef<WarpSnackbarItem, SnackbarItemProps>(
  ({ actionPlacement, ...props }, ref) => 
    React.createElement(BaseSnackbarItem, {
      ...props,
      ...(actionPlacement ? { 'action-placement': actionPlacement } : {}),
    }),
); 
