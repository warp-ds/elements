import React from 'react';

import { createComponent } from '@lit/react';

import { WarpPagination } from './index.js';

export const Pagination = createComponent({
  tagName: 'w-pagination',
  elementClass: WarpPagination,
  react: React,
});
