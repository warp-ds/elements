import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WCheckbox } from './checkbox.js';
import { WCheckboxGroup } from './checkbox-group.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Checkbox = createComponent({
  tagName: 'w-checkbox',
  elementClass: Component as unknown as typeof WCheckbox,
  react: React,
  events: {
    onChange: 'change',
    onchange: 'change',
  },
});

export const CheckboxGroup = createComponent({
  tagName: 'w-checkbox-group',
  elementClass: Component as unknown as typeof WCheckboxGroup,
  react: React,
});
