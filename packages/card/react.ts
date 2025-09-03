import React from 'react';

import { createComponent } from '@lit/react';

import { WarpCard } from './index.js';

export const Card = createComponent({
  tagName: 'w-card',
  elementClass: WarpCard,
  react: React,
});
