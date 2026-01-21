import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  input[type='radio'] {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--w-s-color-border-strong);
    border-radius: 50%;
    background-color: var(--w-s-color-background);
    cursor: pointer;
    flex-shrink: 0;
    transition-property: border-color, border-width, background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  input[type='radio']:checked {
    border-color: var(--w-s-color-border-selected);
    border-width: 0.6rem;
  }

  input[type='radio']:focus-visible {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
  }

  input[type='radio']:disabled {
    border-color: var(--w-s-color-border-disabled);
    background-color: var(--w-s-color-background-disabled-subtle);
    cursor: not-allowed;
  }

  input[type='radio']:disabled:checked {
    border-color: var(--w-s-color-border-disabled);
  }

  label {
    font-size: var(--w-font-size-m);
    line-height: var(--w-line-height-m);
    user-select: none;
    cursor: pointer;
  }

  :host([disabled]) label {
    cursor: not-allowed;
    color: var(--w-s-color-text-disabled);
  }

  @media (prefers-reduced-motion: reduce) {
    input[type='radio'] {
      transition: none;
    }
  }
`;
