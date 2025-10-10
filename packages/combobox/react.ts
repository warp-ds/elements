import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import { WarpCombobox } from '.';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Combobox = createComponent({
  tagName: 'w-combobox',
  elementClass: Component as unknown as typeof WarpCombobox,
  react: React,
});
