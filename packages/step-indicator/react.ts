import { LitElement } from 'lit';
import React from 'react';

import { createComponent } from '@lit/react';

import { WarpStepIndicator } from './step-indicator.js';

// Re-export from split packages
export { Step } from '../step/react.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const StepIndicator = createComponent({
  tagName: 'w-step-indicator',
  elementClass: Component as unknown as typeof WarpStepIndicator,
  react: React,
});
