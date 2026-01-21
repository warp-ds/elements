import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpStep } from './step.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Step = createComponent({
  tagName: 'w-step',
  elementClass: Component as unknown as typeof WarpStep,
  react: React,
});
