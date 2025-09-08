import React from 'react';

import { createComponent } from '@lit/react';

import { WarpAttention } from './index.js';

export const Attention = createComponent({
  tagName: 'w-attention',
  // @ts-expect-error WarpAttention has a popover attribute which conflicts with global HTML popover attribute, will be changed
  elementClass: WarpAttention,
  react: React,
});
