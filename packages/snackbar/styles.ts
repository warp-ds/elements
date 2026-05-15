import { css } from "lit";

export const styles = css`
    :host {
        position: fixed;
        pointer-events: none;
        
        --_position-top: var(--w-c-snackbar-position-top, initial);
        --_position-right: var(--w-c-snackbar-position-right, 0);
        --_position-bottom: var(--w-c-snackbar-position-bottom, 16px);
        --_position-left: var(--w-c-snackbar-position-left, 0);
        --_z-index: var(--w-c-snackbar-z-index, 50);

        bottom: var(--_position-bottom);
        left: var(--_position-left);
        right: var(--_position-right);
        top: var(--_position-top);
        
        z-index: var(--_z-index);
    }

    [part='container'] {
        display: grid;
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
