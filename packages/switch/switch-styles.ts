import { css } from 'lit';

/**
 * Switch component styles using component token pattern.
 *
 * Public API tokens (customizable):
 * - Dimensions: --w-c-switch-height, --w-c-switch-width, --w-c-switch-handle-size
 * - Colors: --w-c-switch-track-*, --w-c-switch-handle-*
 * - Motion: --w-c-switch-transition
 * - Focus: --w-c-switch-outline-*
 */

export const switchStyles = css`
  :host {
    /* Internal tokens - not part of public API */

    /* Dimensions */
    --_height: var(--w-c-switch-height, 2.4rem);
    --_width: var(--w-c-switch-width, 4.4rem);
    --_handle-size: var(--w-c-switch-handle-size, 1.6rem);
    --_handle-offset: var(--w-c-switch-handle-offset, 0.4rem);
    --_handle-translate: var(--w-c-switch-handle-translate, 2rem);

    /* Track colors - active (checked) */
    --_track-bg-active: var(--w-c-switch-track-bg-active, var(--w-s-color-background-primary));
    --_track-bg-active-hover: var(--w-c-switch-track-bg-active-hover, var(--w-s-color-background-primary-hover));

    /* Track colors - inactive (unchecked) */
    --_track-bg-inactive: var(--w-c-switch-track-bg-inactive, var(--w-s-color-background));
    --_track-bg-inactive-hover: var(--w-c-switch-track-bg-inactive-hover, var(--w-s-color-background-hover));
    --_track-border-inactive: var(--w-c-switch-track-border-inactive, var(--w-s-color-border-strong));
    --_track-border-inactive-hover: var(--w-c-switch-track-border-inactive-hover, var(--w-s-color-border-strong-hover));

    /* Track colors - disabled */
    --_track-bg-disabled-on: var(--w-c-switch-track-bg-disabled-on, var(--w-s-color-background-disabled));
    --_track-bg-disabled-off: var(--w-c-switch-track-bg-disabled-off, var(--w-s-color-background-disabled-subtle));
    --_track-border-disabled: var(--w-c-switch-track-border-disabled, var(--w-s-color-border-disabled));

    /* Handle colors - active (checked + enabled) */
    --_handle-bg-active: var(--w-c-switch-handle-bg-active, var(--w-s-color-background));

    /* Handle colors - inactive (unchecked + enabled) */
    --_handle-bg-inactive: var(--w-c-switch-handle-bg-inactive, var(--w-s-color-border-strong));
    --_handle-bg-inactive-hover: var(--w-c-switch-handle-bg-inactive-hover, var(--w-s-color-border-strong-hover));

    /* Handle colors - disabled */
    --_handle-bg-disabled-on: var(--w-c-switch-handle-bg-disabled-on, var(--w-s-color-background-disabled-subtle));
    --_handle-bg-disabled-off: var(--w-c-switch-handle-bg-disabled-off, var(--w-s-color-background-disabled));

    /* Motion */
    --_transition: var(--w-c-switch-transition, 150ms cubic-bezier(0.4, 0, 0.2, 1));

    /* Focus */
    --_outline-width: var(--w-c-switch-outline-width, 2px);
    --_outline-color: var(--w-c-switch-outline-color, var(--w-s-color-border-focus));
    --_outline-offset: var(--w-c-switch-outline-offset, var(--w-outline-offset, 1px));

    /* Cursor */
    --_cursor: var(--w-c-switch-cursor, pointer);
    --_cursor-disabled: var(--w-c-switch-cursor-disabled, not-allowed);
  }

  [part='base'] {
    display: block;
    position: relative;
    height: var(--_height);
    width: var(--_width);
    cursor: var(--_cursor);
    border: none;
    padding: 0;
    background: transparent;
    border-radius: 9999px;
  }

  [part='base']:disabled {
    cursor: var(--_cursor-disabled);
    pointer-events: none;
  }

  [part='base']:focus {
    outline: none;
  }

  [part='base']:focus-visible {
    outline: var(--_outline-width) solid var(--_outline-color);
    outline-offset: var(--_outline-offset);
  }

  /* Track */
  [part='track'] {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 9999px;
    transition: background-color var(--_transition), border-color var(--_transition);
  }

  /* Track - enabled + checked */
  [part='base']:not(:disabled)[aria-checked="true"] [part='track'] {
    background-color: var(--_track-bg-active);
    border: none;
  }

  [part='base']:not(:disabled)[aria-checked="true"]:hover [part='track'] {
    background-color: var(--_track-bg-active-hover);
  }

  /* Track - enabled + unchecked */
  [part='base']:not(:disabled)[aria-checked="false"] [part='track'] {
    background-color: var(--_track-bg-inactive);
    border: 1px solid var(--_track-border-inactive);
  }

  [part='base']:not(:disabled)[aria-checked="false"]:hover [part='track'] {
    background-color: var(--_track-bg-inactive-hover);
    border-color: var(--_track-border-inactive-hover);
  }

  /* Track - disabled + checked */
  [part='base']:disabled[aria-checked="true"] [part='track'] {
    background-color: var(--_track-bg-disabled-on);
    border: none;
  }

  /* Track - disabled + unchecked */
  [part='base']:disabled[aria-checked="false"] [part='track'] {
    background-color: var(--_track-bg-disabled-off);
    border: 1px solid var(--_track-border-disabled);
  }

  /* Handle */
  [part='handle'] {
    position: absolute;
    height: var(--_handle-size);
    width: var(--_handle-size);
    top: var(--_handle-offset);
    left: var(--_handle-offset);
    border-radius: 9999px;
    transition: transform var(--_transition), background-color var(--_transition);
    will-change: transform;
  }

  /* Handle position - checked */
  [part='base'][aria-checked="true"] [part='handle'] {
    transform: translateX(var(--_handle-translate));
  }

  /* Handle color - enabled + checked */
  [part='base']:not(:disabled)[aria-checked="true"] [part='handle'] {
    background-color: var(--_handle-bg-active);
  }

  /* Handle color - enabled + unchecked */
  [part='base']:not(:disabled)[aria-checked="false"] [part='handle'] {
    background-color: var(--_handle-bg-inactive);
  }

  [part='base']:not(:disabled)[aria-checked="false"]:hover [part='handle'] {
    background-color: var(--_handle-bg-inactive-hover);
  }

  /* Handle color - disabled + checked */
  [part='base']:disabled[aria-checked="true"] [part='handle'] {
    background-color: var(--_handle-bg-disabled-on);
  }

  /* Handle color - disabled + unchecked */
  [part='base']:disabled[aria-checked="false"] [part='handle'] {
    background-color: var(--_handle-bg-disabled-off);
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --w-c-switch-transition: none;
    }
  }
`;
