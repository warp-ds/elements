import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpTextarea } from './textarea.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Textarea = createComponent({
  tagName: 'w-textarea',
  elementClass: Component as unknown as typeof WarpTextarea,
  react: React,
  events: {
    onBlur: 'blur',
    onblur: 'blur',
    onChange: 'change',
    onchange: 'change',
    onInput: 'input',
    oninput: 'input',
    onFocus: 'focus',
    onfocus: 'focus',
  },
});
