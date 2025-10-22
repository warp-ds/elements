import { createComponent } from '@lit/react';
import React from 'react';

import { WarpBadge } from './index.js';

export const Badge = createComponent({
  tagName: 'w-badge',
  elementClass: WarpBadge,
  react: React,
});
