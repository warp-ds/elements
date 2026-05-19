import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpPageIndicator } from './page-indicator.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BasePageIndicator = createComponent({
  tagName: 'w-page-indicator',
  elementClass: Component as unknown as typeof WarpPageIndicator,
  react: React,
});

type BasePageIndicatorProps = React.ComponentPropsWithoutRef<typeof BasePageIndicator>;

type PageIndicatorProps = Omit<BasePageIndicatorProps, 'selected-page' | 'page-count'> & {
  selectedPage?: number;
  pageCount?: number;
};

export const PageIndicator = React.forwardRef<WarpPageIndicator, PageIndicatorProps>(
  ({ selectedPage, pageCount, ...props }, ref) =>
    React.createElement(BasePageIndicator, {
      ...props,
      ...(selectedPage !== undefined ? { 'selected-page': selectedPage } : {}),
      ...(pageCount !== undefined ? { 'page-count': pageCount } : {}),
      ref,
    } as React.ComponentProps<typeof BasePageIndicator> & {
      'selected-page'?: number;
      'page-count'?: number;
    }),
);

PageIndicator.displayName = 'PageIndicator';
