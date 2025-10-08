import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Tabs = createComponent({
  tagName: 'w-tabs',
  elementClass: Component,
  react: React,
});

export const Tab = createComponent({
  tagName: 'w-tab',
  elementClass: Component,
  react: React,
});

export const TabPanel = createComponent({
  tagName: 'w-tab-panel',
  elementClass: Component,
  react: React,
});
