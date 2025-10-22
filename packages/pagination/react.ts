import { createComponent } from '@lit/react';
import React from 'react';

import { WarpPagination } from './index.js';

export const Pagination = createComponent({
  tagName: 'w-pagination',
  elementClass: WarpPagination,
  react: React,
});
