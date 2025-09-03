import React from 'react';

import { createComponent } from '@lit/react';

import { WarpBadge } from './index.js';

export const Badge = createComponent({
  tagName: 'w-badge',
  elementClass: WarpBadge,
  react: React,
});
