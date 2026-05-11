import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpLink } from './link.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseLink = createComponent({
  tagName: 'w-link',
  elementClass: Component as unknown as typeof WarpLink,
  react: React,
});

type BaseLinkProps = React.ComponentPropsWithoutRef<typeof BaseLink>;

type LinkProps = Omit<BaseLinkProps, 'full-width'> & {
  fullWidth?: boolean;
};

export const Link = React.forwardRef<WarpLink, LinkProps>(({ fullWidth, ...props }, ref) =>
  React.createElement(BaseLink, {
    ...props,
    ...(fullWidth ? { 'full-width': true } : {}),
    ref,
  } as React.ComponentProps<typeof BaseLink> & {
    'full-width'?: boolean;
  }),
);

Link.displayName = 'Link';
