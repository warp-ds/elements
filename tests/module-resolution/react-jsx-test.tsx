import '@warp-ds/elements';
import * as React from 'react';

const buttonWithReactEvents = (
  <w-button
    onBlur={() => {}}
    onClick={(event) => {
      event.currentTarget.resetFormControl();
    }}
    onFocus={() => {}}
    onMouseEnter={() => {}}
    onMouseLeave={() => {}}
    variant="primary"
  >
    Ok
  </w-button>
);

const buttonWithReactAttributes = (
  <w-button aria-label="Close" className="primary-action" class="legacy-class" style={{ color: 'red' }}>
    Ok
  </w-button>
);

const buttonWithTypedRef = (
  <w-button
    ref={(button) => {
      button?.resetFormControl();
    }}
    variant="primary"
  >
    Ok
  </w-button>
);

const breadcrumbsWithHydrationProps = (
  // biome-ignore lint/security/noDangerouslySetInnerHtml: verifies React hydration props on raw custom elements.
  <w-breadcrumbs dangerouslySetInnerHTML={{ __html: '<a href="/">Home</a>' }} suppressHydrationWarning />
);

const attentionWithComponentBooleanProps = (
  <w-attention popover show tooltip>
    Notice
  </w-attention>
);

// @ts-expect-error Invalid button variant values should still be rejected.
const invalidButtonVariant = <w-button variant="not-a-variant">No</w-button>;

// @ts-expect-error Component-specific boolean popover should override the native popover attribute.
const invalidAttentionPopover = <w-attention popover="auto">No</w-attention>;

export const reactJsxTypeCases = [
  buttonWithReactEvents,
  buttonWithReactAttributes,
  buttonWithTypedRef,
  breadcrumbsWithHydrationProps,
  attentionWithComponentBooleanProps,
  invalidButtonVariant,
  invalidAttentionPopover,
];
