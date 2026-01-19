import { LitElement } from 'lit';
import React from 'react';

import { createComponent } from '@lit/react';

import { WarpTabPanel } from './tab-panel.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const TabPanel = createComponent({
  tagName: 'w-tab-panel',
  elementClass: Component as unknown as typeof WarpTabPanel,
  react: React,
});
