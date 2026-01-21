import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpPagination } from './pagination.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Pagination = createComponent({
  tagName: 'w-pagination',
  elementClass: Component as unknown as typeof WarpPagination,
  react: React,
  events: {
    onPageClick: 'page-click',
    'onpage-click': 'page-click',
  },
});
