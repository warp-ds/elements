import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import { WarpSelect } from '.';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Select = createComponent({
  tagName: 'w-select',
  elementClass: Component as unknown as typeof WarpSelect,
  react: React,
});
