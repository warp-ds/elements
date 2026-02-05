import{a as o}from"./iframe-7efHSNY5.js";const r=o`
  [part~='label'] {
    display: block;
    font-size: var(--w-font-size-m);
    line-height: var(--w-line-height-m);
    user-select: none;
    cursor: pointer;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 2rem max-content;
    gap: 8px;
  }
  .hide-toggle {
    position: absolute;
    padding: 0;
    margin: 0;
    opacity: 0;
    pointer-events: none;
    inset: 0;
  }
  .control {
    display: block;
    border-width: 1px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    cursor: pointer;
    appearance: none;
    user-select: none;
    flex-shrink: 0;
    height: 2rem;
    width: 2rem;
    background-color: var(--w-s-color-background);
    border-color: var(--w-s-color-border-strong);
    color: var(--w-s-color-icon-inverted);
    font-weight: 700;
    text-align: center;
    line-height: var(--w-line-height-xs);
    font-size: var(--w-font-size-m);
  }
  .checkbox {
    position: relative;
  }
  :host([type='checkbox']) .control {
    border-radius: 4px;
  }
  .checkbox:has(:checked, :indeterminate),
  :host([type='checkbox'][checked]) .control,
  :host([type='checkbox'][indeterminate]) .control {
    background-color: var(--w-s-color-background-primary);
    border-color: var(--w-s-color-border-primary);
  }
  .checkbox:has(:checked),
  :host([type='checkbox'][checked]) .control {
    background-image: var(--w-icon-toggle-checked);
    background-position: center;
  }
  :host([type='radio']) .control,
  :host([role='radio']) .control {
    border-radius: 50%;
  }
  :host([type='radio'][checked]) .control,
  /* :state is newly available, so we set an attribute in radio for compat */
  :host([role='radio'][checked-ui]) .control,
  :host([role='radio']:state(checked)) .control {
    border-color: var(--w-s-color-border-selected);
    border-width: 0.6rem;
  }
  .checkbox:has(:invalid),
  :host([invalid]) .control {
    border-color: var(--w-s-color-border-negative) !important;
  }
  /* handles invalid checkbox state inside w-checkbox */
  .checkbox:has(:checked, :indeterminate):has(:invalid),
  /* allows invalid to be set on the w-checkbox element */
  :host([invalid]) .checkbox:has(:checked, :indeterminate),
  :host([type='checkbox'][invalid][checked]) .control,
  :host([type='checkbox'][invalid][indeterminate]) .control {
    background-color: var(--w-s-color-background-negative);
  }

  :host(:focus-visible) {
    outline: none;
  }
  .checkbox:has(> input:focus-visible:not(:disabled)),
  :host(:focus-visible) .control {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
  }

  :host([type='radio'][disabled]) .control,
  /* :state is newly available, so we set an attribute in radio for compat */
  :host([role='radio'][disabled-ui]) .control,
  :host([role='radio']:state(disabled)) .control,
  :host([type='checkbox'][disabled]) .control,
  .checkbox:has(> input:disabled) {
    border-color: var(--w-s-color-border-disabled);
    background-color: var(--w-s-color-background-disabled-subtle);
  }

  :host([type='checkbox'][disabled][checked]) .control,
  :host([type='checkbox'][disabled][indeterminate]) .control,
  .checkbox:has(:checked, :indeterminate):has(> input:disabled) {
    background-color: var(--w-s-color-background-disabled);
  }
`;export{r as t};
