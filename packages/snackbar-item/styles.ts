import { css } from "lit";

export const styles = css`
    :host {
        display: block;

        --_snackbar-item-background-color: var(--w-c-snackbar-item-background-color, var(--w-color-tooltip-background-static));
        --_snackbar-item-border-radius: var(--w-c-snackbar-item-border-radius, 8px);
        --_snackbar-item-box-shadow: var(--w-c-snackbar-item-box-shadow, var(--w-shadow-l));
        --_snackbar-item-color: var(--w-c-snackbar-item-color, var(--w-s-color-text-inverted-static));
        --_snackbar-item-padding: var(--w-c-snackbar-item-padding, 8px);
    }

    [part='snackbar-item'] {
        background-color: var(--_snackbar-item-background-color);
        border-radius: var(--_snackbar-item-border-radius);
        box-shadow: var(--_snackbar-item-box-shadow);
        color: var(--_snackbar-item-color);
        padding: var(--_snackbar-item-padding);
    }
    
    [part='snackbar-item'] {
        background-color: var(--_snackbar-item-background-color);
        border-radius: var(--_snackbar-item-border-radius);
        box-shadow: var(--_snackbar-item-box-shadow);
        color: var(--_snackbar-item-color);
        padding: var(--_snackbar-item-padding);

        display: grid;
        grid-template:
            "icon message inline-action"
            "block-action block-action block-action";
    }

    [part='icon'] {
        grid-area: icon;
    }
    
    [part='message'] {
        grid-area: message;
    }
    
    :not([action-as-block]) [part='action'] {
        grid-area: inline-action;
    }
    
    [action-as-block] [part='action'] {
        grid-area: block-action;
    }

    :not([action-as-block]) [part='close'] {
        grid-area: inline-action;
    }
    
    [action-as-block] [part='close'] {
        grid-area: block-action;
    }
`;
