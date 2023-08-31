import { html, svg } from 'lit';

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
  ${closeIcon}
  </svg>
`;

export const failureSVG = (options) => html`<svg
  aria-label="${options.typeLabel}"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="none"
>
  ${redSignWithExclamationIcon}
</svg>`;

export const successSVG = (options) => html`<svg
  aria-label="${options.typeLabel}"
  role="img"
  width="16"
  height="16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  ${greenCirleWithCheckIcon}
</svg> `;

export const warningSVG = (options) => html`<svg
  aria-label="${options.typeLabel}"
  role="img"
  width="16"
  height="16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  ${yellowSignWithExclamationIcon}
</svg> `;

const closeIcon = svg`
<path
  fill="currentColor"
  fill-rule="evenodd"
  d="M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z"
  clipRule="evenodd"
/>`;

const redSignWithExclamationIcon = svg`
<path
  d="M4.1.586A2 2 0 0 1 5.516 0h4.97A2 2 0 0 1 11.9.586L15.413 4.1A2 2 0 0 1 16 5.514v4.97a2 2 0 0 1-.586 1.415L11.9 15.413a2 2 0 0 1-1.415.586h-4.97a2 2 0 0 1-1.414-.586L.586 11.9A2 2 0 0 1 0 10.485v-4.97A2 2 0 0 1 .586 4.1L4.1.586Z"
  fill="currentColor"
/>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M8 3.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 8 3.25Z"
  fill="#fff"
/>
<path d="M8.8 11.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Z" fill="#fff" />`;

const greenCirleWithCheckIcon = svg`<circle cx="8" cy="8" r="8" transform="rotate(180 8 8)" fill="currentColor" />
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M11.5 4.94c.3.27.34.75.06 1.06l-4 4.5a.75.75 0 0 1-1.09.03l-2-2a.75.75 0 0 1 1.06-1.06l1.44 1.44L10.44 5a.75.75 0 0 1 1.06-.07Z"
  fill="#fff"
/>`;

const yellowSignWithExclamationIcon = svg`
<path
  d="M.24 12 6.16 1.09a2.1 2.1 0 0 1 3.68 0l5.92 10.93c.73 1.36-.28 2.99-1.85 2.99H2.1a2.04 2.04 0 0 1-1.85-3Z"
  fill="currentColor"
/>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M8 3.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75Z"
  fill="#fff"
/>
<path d="M8.8 11.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Z" fill="#fff" />`;
