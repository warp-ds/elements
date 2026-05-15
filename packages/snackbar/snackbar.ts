import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';

import { SnackbarDuration, type WarpSnackbarItem, type SnackbarVariant } from '../snackbar-item/snackbar-item.js';
import { activateI18n } from '../i18n.js';
import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';

import { reset } from '../styles.js';
import { styles } from './styles.js';

export type CreateSnackbarOptions = {
    canClose: boolean;
    duration: SnackbarDuration;
    variant: SnackbarVariant;
    action?: {
        label: string;
        onclick: (this: GlobalEventHandlers, ev: PointerEvent) => any;
    };
};

const defaultCreateOptions: CreateSnackbarOptions = {
    canClose: true,
    duration: SnackbarDuration.Short,
    variant: 'neutral',
};

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

/**
 * A Snackbar shows brief user feedback messages that overlay content, with an optional action such as Undo.
 * 
 * @slot default - `w-snackbar-item` gets placed inside the default slot by the `create` function.
 */
export class WarpSnackbar extends LitElement {
    private internals: ElementInternals;

    @query('aside')
    private container: HTMLElement | null = null;

    static styles = [reset, styles];

    constructor() {
        super();
        /** Set on internals to avoid hydration mismatches in React */
        this.internals = this.attachInternals();
        this.internals.ariaLive = "polite";
        this.internals.ariaRelevant = "additions";
        this.internals.role = "log";
    }

    create(message: string, options: Partial<CreateSnackbarOptions> = {}): WarpSnackbarItem {
        const mergedOptions = { ...defaultCreateOptions, ...options };

        const snackbarItem = document.createElement('w-snackbar-item');
        snackbarItem.canClose = mergedOptions.canClose;
        snackbarItem.duration = mergedOptions.duration;

        snackbarItem.innerText = message;
        
        if (mergedOptions.variant !== 'neutral') {
            const icon = document.createElement('w-icon');
            icon.slot = 'icon';

            switch (mergedOptions.variant) {
                case 'positive':
                    icon.name = 'SuccessFilled';
                    break;
                case 'warning':
                    icon.name = 'WarningFilled';
                    break;
                case 'negative':
                    icon.name = 'ErrorFilled';
                    break;
                case 'info':
                    icon.name = 'InfoFilled';
                    break;
            }

            snackbarItem.prepend(icon);
        }

        if (mergedOptions.action) {
            const actionButton = document.createElement('w-button');
            actionButton.slot = 'action';
            
            actionButton.innerText = mergedOptions.action.label;
            actionButton.onclick = mergedOptions.action.onclick;
            
            snackbarItem.append(actionButton);
        }

        this.container?.prepend(snackbarItem);

        return snackbarItem;
    }

    render() {
        return html`
            <aside>
                <slot></slot>
            </aside>
        `;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'w-snackbar': WarpSnackbar;
  }
}

if (!customElements.get('w-snackbar')) {
  customElements.define('w-snackbar', WarpSnackbar);
}
