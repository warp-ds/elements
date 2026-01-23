import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WRadioGroup } from './radio-group.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const RadioGroup = createComponent({
  tagName: 'w-radio-group',
  elementClass: Component as unknown as typeof WRadioGroup,
  react: React,
  events: {
    onInput: 'input',
    oninput: 'input',
    onChange: 'change',
    onchange: 'change',
  },
});
