export class WInvalidEvent extends Event {
  constructor() {
    super('w-invalid', { bubbles: true, cancelable: false, composed: true });
  }
}

declare global {
  interface GlobalEventHandlersEventMap {
    'wa-invalid': WInvalidEvent;
  }
}

