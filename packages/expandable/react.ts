import React from 'react';

import { createComponent } from '@lit/react';

import { WarpExpandable } from './index.js';

export const Expandable = createComponent({
  tagName: 'w-expandable',
  elementClass: WarpExpandable,
  react: React,
});
