import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpTab } from './tab.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseTab = createComponent({
  tagName: 'w-tab',
  elementClass: Component as unknown as typeof WarpTab,
  react: React,
  events: {
    onTabClick: 'tab-click',
    'ontab-click': 'tab-click',
    onClick: 'click',
    onclick: 'click',
  },
});

type BaseTabProps = React.ComponentPropsWithoutRef<typeof BaseTab>;

type TabProps = Omit<BaseTabProps, 'aria-selected'> & {
  ariaSelected?: 'true' | 'false';
};

export const Tab = React.forwardRef<WarpTab, TabProps>(({ ariaSelected, ...props }, ref) =>
  React.createElement(BaseTab, {
    ...props,
    ...(ariaSelected !== undefined ? { 'aria-selected': ariaSelected } : {}),
    ref,
  } as React.ComponentProps<typeof BaseTab> & {
    'aria-selected'?: 'true' | 'false';
  }),
);

Tab.displayName = 'Tab';
