function pointerListener(e: PointerEvent) {
    if (document.documentElement.dataset['keyboardinteraction']) {
        delete document.documentElement.dataset['keyboardinteraction'];
    }
}

function keyboardListener(e: KeyboardEvent) {
    if (e.key === 'Tab' || e.key === 'Enter' || e.key === ' ') {
        document.documentElement.dataset['keyboardinteraction'] = 'true';
    }
}

/**
 * Here we try to detect whether a visitor uses their keyboard to interact with the page.
 * 
 * We consider it a keyboard interaction when:
 * 
 * - We detect a Tab keyboard event.
 * - We detect an Enter keyboard event.
 * - We detect a Space keyboard event.
 * 
 * We remove the "keyboard interaction flag" on click events.
 * 
 * @throws Throws if `window` is not defined.
 */

export function addListener() {
    document.addEventListener('keydown', keyboardListener);
    document.addEventListener('pointerdown', pointerListener);
}

/**
 * Removes the global keyboard even listener.
 * 
 * You most likely won't need this outside of testing.
 * 
 * @throws Throws if `window` is not defined.
 */
export function removeListener() {
    document.removeEventListener('keydown', keyboardListener);
    document.removeEventListener('pointerdown', pointerListener);
}
