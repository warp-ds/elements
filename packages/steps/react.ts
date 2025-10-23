import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import React from 'react';
import { WarpStep, WarpSteps } from './index.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Steps = createComponent({
  tagName: 'w-steps',
  elementClass: Component as unknown as typeof WarpSteps,
  react: React,
});

export const Step = createComponent({
  tagName: 'w-step',
  elementClass: Component as unknown as typeof WarpStep,
  react: React,
});
