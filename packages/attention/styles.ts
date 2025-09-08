import { css } from 'lit';
export const styles = css`
  *,
  :before,
  :after {
    --w-rotate: 0;
    --w-rotate-x: 0;
    --w-rotate-y: 0;
    --w-rotate-z: 0;
    --w-scale-x: 1;
    --w-scale-y: 1;
    --w-scale-z: 1;
    --w-skew-x: 0;
    --w-skew-y: 0;
    --w-translate-x: 0;
    --w-translate-y: 0;
    --w-translate-z: 0;
  }
  .bg-transparent {
    background-color: #0000;
  }
  .bg-\\[--w-color-callout-background\\] {
    background-color: var(--w-color-callout-background);
  }
  .bg-\\[--w-s-color-surface-elevated-300\\] {
    background-color: var(--w-s-color-surface-elevated-300);
  }
  .hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover {
    background-color: var(--w-color-button-pill-background-hover);
  }
  .active\\:bg-\\[--w-color-button-pill-background-active\\]:active {
    background-color: var(--w-color-button-pill-background-active);
  }
  .border-2 {
    border-width: 2px;
  }
  .border-b-0 {
    border-bottom-width: 0;
  }
  .border-r-0 {
    border-right-width: 0;
  }
  .border-\\[--w-color-callout-border\\] {
    border-color: var(--w-color-callout-border);
  }
  .border-\\[--w-s-color-background-inverted\\] {
    border-color: var(--w-s-color-background-inverted);
  }
  .border-\\[--w-s-color-surface-elevated-300\\] {
    border-color: var(--w-s-color-surface-elevated-300);
  }
  .rounded-4 {
    border-radius: 4px;
  }
  .rounded-8 {
    border-radius: 8px;
  }
  .rounded-tl-4 {
    border-top-left-radius: 4px;
  }
  .inline {
    display: inline;
  }
  .flex {
    display: flex;
  }
  .contents {
    display: contents;
  }
  .hidden {
    display: none;
  }
  .hover\\:underline:hover,
  .focus\\:underline:focus,
  .active\\:underline:active {
    text-decoration-line: underline;
  }
  .focusable:focus {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
  }
  .focusable:focus-visible {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
  }
  .focusable:not(:focus-visible) {
    outline: none;
  }
  .items-start {
    align-items: flex-start;
  }
  .-bottom-\\[8px\\] {
    bottom: -8px;
  }
  .-left-\\[8px\\] {
    left: -8px;
  }
  .-right-\\[8px\\] {
    right: -8px;
  }
  .-top-\\[8px\\] {
    top: -8px;
  }
  .justify-self-end {
    justify-self: end;
  }
  .absolute {
    position: absolute;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .z-50 {
    z-index: 50;
  }
  .s-bg-inverted {
    background-color: var(--w-s-color-background-inverted);
  }
  .s-text {
    color: var(--w-s-color-text);
  }
  .s-text-inverted-static {
    color: var(--w-s-color-text-inverted-static);
  }
  .s-text-link {
    color: var(--w-s-color-text-link);
  }
  .s-icon {
    color: var(--w-s-color-icon);
  }
  .hover\\:s-icon-hover:hover {
    color: var(--w-s-color-icon-hover);
  }
  .active\\:s-icon-active:active {
    color: var(--w-s-color-icon-active);
  }
  .drop-shadow-m {
    filter: drop-shadow(0 3px 8px #4040403d) drop-shadow(0 3px 6px #40404029);
  }
  .shadow-m {
    box-shadow: var(--w-shadow-m);
  }
  .h-\\[14px\\] {
    height: 14px;
  }
  .w-\\[14px\\] {
    width: 14px;
  }
  .-mr-8 {
    margin-right: -0.8rem;
  }
  .last-child\\:mb-0 > :last-child {
    margin-bottom: 0;
  }
  .ml-8 {
    margin-left: 0.8rem;
  }
  .p-16 {
    padding: 1.6rem;
  }
  .px-16 {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
  .px-8 {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }
  .py-6 {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
  .py-8 {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }
  .resize {
    resize: both;
  }
  .translate-z-0 {
    --w-translate-z: 0rem;
    transform: translateX(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate))
      rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotateZ(var(--w-rotate-z)) skewX(var(--w-skew-x)) skewY(var(--w-skew-y))
      scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z));
  }
  .transform {
    transform: translateX(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate))
      rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotateZ(var(--w-rotate-z)) skewX(var(--w-skew-x)) skewY(var(--w-skew-y))
      scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z));
  }
  .ease-in-out {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  .text-m {
    font-size: var(--w-font-size-m);
    line-height: var(--w-line-height-m);
  }
  .leading-\\[24\\] {
    line-height: 2.4rem;
  }
`;
