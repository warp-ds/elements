import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpExpandable } from './expandable.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseExpandable = createComponent({
  tagName: 'w-expandable',
  elementClass: Component as unknown as typeof WarpExpandable,
  react: React,
});

type BaseExpandableProps = React.ComponentPropsWithoutRef<typeof BaseExpandable>;

type ExpandableProps = Omit<BaseExpandableProps, 'button-class' | 'content-class' | 'no-chevron' | 'heading-level'> & {
  buttonClass?: string;
  contentClass?: string;
  noChevron?: boolean;
  headingLevel?: number;
};

export const Expandable = React.forwardRef<WarpExpandable, ExpandableProps>(
  ({ buttonClass, contentClass, noChevron, headingLevel, ...props }, ref) =>
    React.createElement(BaseExpandable, {
      ...props,
      ...(buttonClass !== undefined ? { 'button-class': buttonClass } : {}),
      ...(contentClass !== undefined ? { 'content-class': contentClass } : {}),
      ...(noChevron ? { 'no-chevron': true } : {}),
      ...(headingLevel !== undefined ? { 'heading-level': headingLevel } : {}),
      ref,
    } as React.ComponentProps<typeof BaseExpandable> & {
      'button-class'?: string;
      'content-class'?: string;
      'no-chevron'?: boolean;
      'heading-level'?: number;
    }),
);

Expandable.displayName = 'Expandable';
