import { LitElement } from 'lit';
import React from 'react';

import { createComponent } from '@lit/react';

import { WarpTab } from './tab.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Tab = createComponent({
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
