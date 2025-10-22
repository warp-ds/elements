import { createComponent } from '@lit/react';
import React from 'react';

import { WarpTab, WarpTabPanel, WarpTabs } from './index.js';

export const Tabs = createComponent({
  tagName: 'w-tabs',
  elementClass: WarpTabs,
  react: React,
});

export const Tab = createComponent({
  tagName: 'w-tab',
  elementClass: WarpTab,
  react: React,
});

export const TabPanel = createComponent({
  tagName: 'w-tab-panel',
  elementClass: WarpTabPanel,
  react: React,
});
