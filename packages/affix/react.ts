import { createComponent } from '@lit/react';
import React from 'react';

import { WarpAffix } from './index.js';

export const Affix = createComponent({
  tagName: 'w-affix',
  elementClass: WarpAffix,
  react: React,
});
