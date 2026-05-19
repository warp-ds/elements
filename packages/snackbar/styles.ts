import { css } from "lit";

export const styles = css`
    :host {
        position: fixed;
        pointer-events: none;
        
        --_snackbar-gap: var(--w-c-snackbar-container-gap, 8px);
        --_snackbar-position-top: var(--w-c-snackbar-position-top, initial);
        --_snackbar-position-right: var(--w-c-snackbar-position-right, 0);
        --_snackbar-position-bottom: var(--w-c-snackbar-position-bottom, 16px);
        --_snackbar-position-left: var(--w-c-snackbar-position-left, 0);
        --_snackbar-z-index: var(--w-c-snackbar-z-index, 50);

        bottom: var(--_snackbar-position-bottom);
        left: var(--_snackbar-position-left);
        right: var(--_snackbar-position-right);
        top: var(--_snackbar-position-top);
        
        z-index: var(--_snackbar-z-index);
    }

    [part='container'] {
        display: grid;
        gap: var(--_snackbar-gap);
        grid-template-rows: auto;
        justify-content: center;
        justify-items: center;
        margin-inline: auto;
        pointer-events: none;
    }

    ::slotted(*) {
        pointer-events: initial;
    }
`;
