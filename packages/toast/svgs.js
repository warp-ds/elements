import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export const successSVG = (options) => html`<svg
  role="img"
  aria-label="${options.typeLabel}"
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="none"
  viewBox="0 0 16 16"
>
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    d="M5.5 9l2 1.5L11 6"
  />
</svg>`;

export const failureSVG = (options) => html`
  <svg
    role="img"
    aria-label="${options.typeLabel}"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    class="${classMap({
      'transition-transform duration-200': true,
      'transform-rotate-180': options.isInfo,
    })}"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M8 9V4"
    />
    <circle cx="8" cy="11.8" r=".8" fill="currentColor" />
  </svg>
`;

export const closeSVG = () => html`
  <svg
    role="img"
    aria-label="Lukk"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z"
      clipRule="evenodd"
    />
  </svg>
`;
