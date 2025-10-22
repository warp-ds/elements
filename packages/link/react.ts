import { createComponent } from '@lit/react';
import React from 'react';

import { WarpLink } from './index.js';

export const Link = createComponent({
  tagName: 'w-link',
  elementClass: WarpLink,
  react: React,
});
