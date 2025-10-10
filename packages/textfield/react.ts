import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import { WarpTextField } from '.';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const TextField = createComponent({
  tagName: 'w-textfield',
  elementClass: Component as unknown as typeof WarpTextField,
  react: React,
});
