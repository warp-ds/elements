import React from 'react';

import { createComponent } from '@lit/react';

import { WarpSteps, WarpStep } from './index.js';

export const Steps = createComponent({
  tagName: 'w-steps',
  elementClass: WarpSteps,
  react: React,
});

export const Step = createComponent({
  tagName: 'w-step',
  elementClass: WarpStep,
  react: React,
});
