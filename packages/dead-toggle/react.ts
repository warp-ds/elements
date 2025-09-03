import React from 'react';

import { createComponent } from '@lit/react';

import { WarpDeadToggle } from './index.js';

export const DeadToggle = createComponent({
  tagName: 'w-dead-toggle',
  elementClass: WarpDeadToggle,
  react: React,
});
