import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import { WarpTab } from './tab';
import { WarpTabs } from './tabs';
import { WarpTabPanel } from './tab-panel';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Tabs = createComponent({
  tagName: 'w-tabs',
  elementClass: Component as unknown as typeof WarpTabs,
  react: React,
});

export const Tab = createComponent({
  tagName: 'w-tab',
  elementClass: Component as unknown as typeof WarpTab,
  react: React,
});

export const TabPanel = createComponent({
  tagName: 'w-tab-panel',
  elementClass: Component as unknown as typeof WarpTabPanel,
  react: React,
});
