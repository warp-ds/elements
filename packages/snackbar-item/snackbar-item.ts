import { i18n } from '@lingui/core';
import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { reset } from '../styles.js';
import { styles } from './styles.js';

export type SnackbarVariant = 'positive' | 'warning' | 'negative' | 'info' | 'neutral';

export enum SnackbarDuration {
    Short = 5_000,
    Long = 20_000,
    // biome-ignore lint: false positive
    Infinite = Number.POSITIVE_INFINITY,
}

/**
 * An item to show in a `w-snackbar`.
 * 
 * @parent w-snackbar
 * 
 * @slot default - The snackbar message.
 * @slot icon - Icon preceeding the message.
 * @slot action - Action following the message.
 */
export class WarpSnackbarItem extends LitElement {
    static styles = [reset, styles];
    
    @property({ type: Boolean, attribute: 'can-close' })
    canClose = false;

    @property({ type: Number, reflect: true, useDefault: true })
    duration: number = SnackbarDuration.Short;

    private timer: number | null = null;

    // TODO when focused, save what element previously had focus so we can go back there in close
    
    connectedCallback(): void {
        super.connectedCallback();
        // TODO Countdown logic, with pause on focus, this.close() on end
    }

    close(): void {
        // TODO animate exit, then remove
        this.remove();
        // TODO move focus to last known focused element
    }

    render() {
        return html`
            <div part="snackbar-item">
                <div part="icon">
                    <slot name="icon"></slot>
                </div>
                <div part="message">
                    <slot></slot>
                </div>
                <div part="inline-action">
                    <slot name="inline-action"></slot>
                </div>
                <div part="block-action">
                    <slot name="block-action"></slot>
                </div>
                ${this.canClose ? html`
                    <div part="close">
                        <w-button variant="utilityQuiet" @click=${this.close}>
                            <w-icon name="Close" aria-label="${i18n.t({
                                id: 'snackbar.aria.close',
                                message: 'Dismiss message',
                                comment: 'Accessibility label for the button that closes the snackbar/toast popup',
                            })}"></w-icon>
                        </w-button>
                    </div>
                    ` : nothing}
            </div>
        `;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'w-snackbar-item': WarpSnackbarItem;
  }
}

if (!customElements.get('w-snackbar-item')) {
  customElements.define('w-snackbar-item', WarpSnackbarItem);
}
