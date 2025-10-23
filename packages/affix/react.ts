import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpAffix } from './index';

// We do this in order to prevent users from bundling in the CE implementation when
// they should be getting it from Eik.
class Component extends LitElement {}

export const Affix = createComponent({
  tagName: 'w-affix',
  // This tricks TS into thinking the stub we created above is still the actual implementation
  // This ensures devs can import the react wrapper and use it with the full intellisense experience
  // yet not bundling in the CE implementation into their app bundles.
  elementClass: Component as unknown as typeof WarpAffix,
  react: React,
});
