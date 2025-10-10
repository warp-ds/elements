import React from 'react';

import { LitElement } from 'lit';
import { createComponent } from '@lit/react';
import { WRadio } from './radio';
import { WRadioGroup } from './radio-group';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Radio = createComponent({
  tagName: 'w-radio',
  elementClass: Component as unknown as typeof WRadio,
  react: React,
});

export const RadioGroup = createComponent({
  tagName: 'w-radio-group',
  elementClass: Component as unknown as typeof WRadioGroup,
  react: React,
});
