import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import { WCheckbox } from './checkbox';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Checkbox = createComponent({
  tagName: 'w-checkbox',
  elementClass: Component as unknown as typeof WCheckbox,
  react: React,
});
