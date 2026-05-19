import { css } from "lit";

export const styles = css`
    :host {
        display: block;

        --_snackbar-item-background-color: var(--w-c-snackbar-item-background-color, var(--w-color-tooltip-background-static));
        --_snackbar-item-background-color-hover: var(--w-c-snackbar-item-background-color-hover, var(--w-color-tooltip-background-static));
        --_snackbar-item-background-color-active: var(--w-c-snackbar-item-background-color-active, var(--w-color-tooltip-background-static));
        --_snackbar-item-border-radius: var(--w-c-snackbar-item-border-radius, 8px);
        --_snackbar-item-box-shadow: var(--w-c-snackbar-item-box-shadow, var(--w-shadow-l));
        --_snackbar-item-color: var(--w-c-snackbar-item-color, var(--w-s-color-text-inverted-static));
        --_snackbar-item-max-width: var(--w-c-snackbar-item-max-width, 420px);
        --_snackbar-item-min-width: var(--w-c-snackbar-item-min-width, 280px);
        --_snackbar-item-padding: var(--w-c-snackbar-item-padding, 8px);
    }

    [part='snackbar-item'] {
        background-color: var(--_snackbar-item-background-color);
        border-radius: var(--_snackbar-item-border-radius);
        box-shadow: var(--_snackbar-item-box-shadow);
        color: var(--_snackbar-item-color);
        max-width: var(--_snackbar-item-max-width);
        min-width: var(--_snackbar-item-min-width);
        padding: var(--_snackbar-item-padding);
        
        display: grid;
        column-gap: 4px;
        grid-template:
            "icon message inline-action"
            "block-action block-action block-action";
        grid-template-columns: 24px auto auto;
    }

    :host([action-as-block]) [part='snackbar-item'] {
        row-gap: 4px;
    }

    [part='snackbar-item'] w-button,
    [part='snackbar-item'] ::slotted(w-button) {
        --w-c-button-bg: var(--_snackbar-item-background-color);
        --w-c-button-bg-hover: var(--_snackbar-item-background-color);
        --w-c-button-bg-active: var(--_snackbar-item-background-color);
        --w-c-button-color: var(--_snackbar-item-color);
    }

    [part='icon'] {
        grid-area: icon;

        color: var(--_snackbar-item-color);
        padding-block: 4px;
        min-width: 4px; /* To give a total of 16px "padding" to message if no icon (8 padding + 4 width + 4 gap) */
        max-width: 24px;
    }

    [part='icon'] ::slotted(w-icon) {
        display: block; /* override default inline-block to avoid line-height */
    }

    [part='icon'] ::slotted(w-icon[name="SuccessFilled"]) {
        color: var(--w-s-color-icon-positive);
    }
    
    [part='icon'] ::slotted(w-icon[name="WarningFilled"]) {
        color: var(--w-s-color-icon-warning);
    }
    
    [part='icon'] ::slotted(w-icon[name="ErrorFilled"]) {
        color: var(--w-s-color-icon-negative);
    }
    
    [part='icon'] ::slotted(w-icon[name="InfoFilled"]) {
        color: var(--w-s-color-icon-info);
    }
    
    [part='message'] {
        grid-area: message;

        align-self: center;
        font-size: var(--w-font-size-s);
        line-height: var(--w-line-height-s);
        padding-block: 7px;
    }

    [part='action'] {
        grid-area: inline-action;

        display: flex;
        column-gap: 2px; /* to allow space for focus outline */
        justify-content: flex-end;
        padding-inline-start: 8px;
    }
    
    :host([action-as-block]) [part='action'] {
        grid-area: block-action;

    }
`;
