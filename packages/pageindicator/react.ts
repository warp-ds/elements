import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const PageIndicator = createComponent({
  tagName: 'w-pageindicator',
  elementClass: Component,
  react: React,
});
