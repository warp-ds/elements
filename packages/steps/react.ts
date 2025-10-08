import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Steps = createComponent({
  tagName: 'w-steps',
  elementClass: Component,
  react: React,
});

export const Step = createComponent({
  tagName: 'w-step',
  elementClass: Component,
  react: React,
});
