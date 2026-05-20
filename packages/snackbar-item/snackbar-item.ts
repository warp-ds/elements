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
    
    @property({ type: Boolean, attribute: 'action-as-block', reflect: true })
    actionAsBlock = false;

    @property({ type: Number, reflect: true, useDefault: true })
    duration: number = SnackbarDuration.Short;

    #durationLeft: number = SnackbarDuration.Short;

    #lastFocused: HTMLElement | null = null;

    // TODO How to expose the timer in an accessible maner, both visually and to assistive technologies? https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role + a progress bar style thing?
    #timer: ReturnType<typeof setTimeout> | null = null;

    connectedCallback(): void {
        super.connectedCallback();

        if (this.duration !== Number.POSITIVE_INFINITY) {
            const updateFrequencyMs = 1000;
            
            // Subtract one updateFrequencyMs, otherwise the full
            // duration would be duration + updateFrequencyMs.
            this.#durationLeft = this.duration - updateFrequencyMs;

            this.#timer = setInterval(() => {
                const itemHasFocus = this.#lastFocused !== null;
                if (itemHasFocus) return;
        
                this.#durationLeft -= updateFrequencyMs;

                if (this.#durationLeft <= 0) {
                    this.close();
                }
            }, updateFrequencyMs);
        }
    }

    disconnectedCallback(): void {
        if (this.#timer) {
            clearInterval(this.#timer);
        }
    }

    close(): void {
        this.remove();

        if (this.#lastFocused) {
            this.#lastFocused.focus();
        }
    }

    /** 
     * Listen to focusin, not focus, as focus does not bubble.
     * 
     * We're interested in running code when an action button gets focus,
     * such as pausing the countdown and storing the last focused element
     * outside of the snackbar so we can return there when it closes.
     * 
     * Only save the first instance of `relatedTarget` so we don't overwrite
     * it when focus moves from an action button to the close button.
     */
    #onFocusIn(e: FocusEvent) {
        if (!this.#lastFocused) {
            if (e.relatedTarget && (e.relatedTarget as HTMLElement).focus) {
                this.#lastFocused = e.relatedTarget as HTMLElement;
            }
        }
    }

    /**
     * Listen to focusout, not blur, as blur does not bubble.
     * 
     * Unpause the countdown by clearing this.#lastFocused
     * if the focus is moving outside of the snackbar item.
     */
    #onFocusOut(e: FocusEvent) {
        const snackbarItemLostFocus =
            !e.relatedTarget || 
            !this.shadowRoot?.host.contains(e.relatedTarget as HTMLElement);
        if (snackbarItemLostFocus) {
            this.#lastFocused = null;
        }
    }

    render() {
        return html`
            <div part="item" @focusin=${this.#onFocusIn} @focusout=${this.#onFocusOut}>
                <div part="icon">
                    <slot name="icon"></slot>
                </div>
                <div part="message">
                    <slot></slot>
                </div>
                <div part="action">
                    <slot name="action"></slot>
                    <slot name="close"></slot>
                </div>
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
