import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import { WarpBreadcrumbs } from '.';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Breadcrumbs = createComponent({
  tagName: 'w-breadcrumbs',
  elementClass: Component as unknown as typeof WarpBreadcrumbs,
  react: React,
});
