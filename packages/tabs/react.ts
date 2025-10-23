import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import React from 'react';
import { WarpTab, WarpTabPanel, WarpTabs } from './index.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Tabs = createComponent({
  tagName: 'w-tabs',
  elementClass: Component as unknown as typeof WarpTabs,
  react: React,
  events: {
    onChange: 'change',
    onchange: 'change',
  },
});

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

export const TabPanel = createComponent({
  tagName: 'w-tab-panel',
  elementClass: Component as unknown as typeof WarpTabPanel,
  react: React,
});
