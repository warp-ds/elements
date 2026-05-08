import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpAffix } from './affix.js';

// We do this in order to prevent users from bundling in the CE implementation when
// they should be getting it from Eik.
class Component extends LitElement {}

const BaseAffix = createComponent({
  tagName: 'w-affix',
  // This tricks TS into thinking the stub we created above is still the actual implementation
  // This ensures devs can import the react wrapper and use it with the full intellisense experience
  // yet not bundling in the CE implementation into their app bundles.
  elementClass: Component as unknown as typeof WarpAffix,
  react: React,
});

type BaseAffixProps = React.ComponentPropsWithoutRef<typeof BaseAffix>;

type AffixProps = Omit<BaseAffixProps, 'aria-label'> & {
  ariaLabel?: string | null;
};

export const Affix = React.forwardRef<WarpAffix, AffixProps>(({ ariaLabel, ...props }, ref) =>
  React.createElement(BaseAffix, {
    ...props,
    ...(ariaLabel !== undefined ? { 'aria-label': ariaLabel } : {}),
    ref,
  } as React.ComponentProps<typeof BaseAffix> & {
    'aria-label'?: string | null;
  }),
);

Affix.displayName = 'Affix';
