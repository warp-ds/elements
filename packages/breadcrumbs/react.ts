import { createComponent } from '@lit/react';
import React from 'react';

import { WarpBreadcrumbs } from './index.js';

export const Breadcrumbs = createComponent({
  tagName: 'w-breadcrumbs',
  elementClass: WarpBreadcrumbs,
  react: React,
});
