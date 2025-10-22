import { createComponent } from '@lit/react';
import React from 'react';

import { WarpAlert } from './index.js';

export const Alert = createComponent({
  tagName: 'w-alert',
  elementClass: WarpAlert,
  react: React,
});
