import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpButton } from './button.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {
  get fullWidth(): boolean {
    return false;
  }

  set fullWidth(_value: boolean) {}

  get iconOnly(): boolean {
    return false;
  }

  set iconOnly(_value: boolean) {}
}

const BaseButton = createComponent({
  tagName: 'w-button',
  elementClass: Component as unknown as typeof WarpButton,
  react: React,
});

type BaseButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton>;

type ButtonProps = Omit<BaseButtonProps, 'full-width' | 'icon-only'> & {
  fullWidth?: boolean;
  iconOnly?: boolean;
};

export const Button = React.forwardRef<WarpButton, ButtonProps>(({ fullWidth, iconOnly, ...props }, ref) =>
  React.createElement(BaseButton, {
    ...props,
    ...(fullWidth !== undefined ? { fullWidth } : {}),
    ...(iconOnly !== undefined ? { iconOnly } : {}),
    ...(fullWidth ? { 'full-width': true } : {}),
    ...(iconOnly ? { 'icon-only': true } : {}),
    ref,
  } as React.ComponentProps<typeof BaseButton> & {
    'full-width'?: boolean;
    'icon-only'?: boolean;
  }),
);

Button.displayName = 'Button';
