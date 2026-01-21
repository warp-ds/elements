import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpTabs } from './tabs.js';

// Re-export from split packages
export { Tab } from '../tab/react.js';
export { TabPanel } from '../tab-panel/react.js';

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
