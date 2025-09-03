import type { CSSResult, CSSResultGroup } from 'lit';
import { LitElement, unsafeCSS } from 'lit';

import { property } from 'lit/decorators.js';

import hostStyles from './host.css?inline';

// Augment Lit's module
declare module 'lit' {
  interface PropertyDeclaration {
    /**
     * Specifies the property’s default value
     */
    default?: any;
    initial?: any;
  }
}

export default class BaseElement extends LitElement {
  /**
   * One or more CSS files to include in the component's shadow root. Host styles are automatically prepended. We use
   * this instead of Lit's styles property because we're importing CSS files as strings and need to convert them using
   * unsafeCSS.
   */
  static css?: CSSResultGroup | CSSResult | string | (CSSResult | string)[];

  /**
   * Override the default styles property to fetch and convert string CSS files. Components can override this behavior
   * by setting their own `static styles = []` property.
   */
  static get styles(): CSSResultGroup {
    const styles = Array.isArray(this.css) ? this.css : this.css ? [this.css] : [];
    return [hostStyles, ...styles].map((style) => (typeof style === 'string' ? unsafeCSS(style) : style));
  }

  #hasRecordedInitialProperties = false;
  initialReflectedProperties: Map<string, unknown> = new Map();
  internals: ElementInternals;

  // Make localization attributes reactive
  @property() dir: string;
  @property() lang: string;

  constructor() {
    super();

    try {
      this.internals = this.attachInternals();
    } catch {
      /* Need to tell people if they need a polyfill. */

      console.error('Element internals are not supported in your browser. Consider using a polyfill');
    }

    this.customStates.set('wa-defined', true);

    const Self = this.constructor as typeof BaseElement;
    for (const [property, spec] of Self.elementProperties) {
      if (spec.default === 'inherit' && spec.initial !== undefined && typeof property === 'string') {
        this.customStates.set(`initial-${property}-${spec.initial}`, true);
      }
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (!this.#hasRecordedInitialProperties) {
      (this.constructor as typeof BaseElement).elementProperties.forEach((obj, prop: keyof typeof this & string) => {
        // eslint-disable-next-line
          if (obj.reflect && this[prop] != null) {
          this.initialReflectedProperties.set(prop, this[prop]);
        }
      });

      this.#hasRecordedInitialProperties = true;
    }

    super.attributeChangedCallback(name, oldValue, newValue);
  }

  protected willUpdate(changedProperties: Parameters<LitElement['willUpdate']>[0]): void {
    super.willUpdate(changedProperties);

    // Run the morph fixing *after* willUpdate.
    this.initialReflectedProperties.forEach((value, prop: string & keyof typeof this) => {
      // If a prop changes to `null`, we assume this happens via an attribute changing to `null`.

      if (changedProperties.has(prop) && this[prop] == null) {
        // Silly type gymnastics to appease the compiler.
        (this as Record<string, unknown>)[prop] = value;
      }
    });
  }

  /**
   * Methods for setting and checking custom states.
   */
  public customStates = {
    /** Adds or removes the specified custom state. */
    set: (customState: string, active: boolean) => {
      if (!this.internals?.states) return;
      if (active) {
        this.internals.states.add(customState);
      } else {
        this.internals.states.delete(customState);
      }
    },

    /** Determines whether or not the element currently has the specified state. */
    has: (customState: string) => {
      if (!this.internals?.states) return false;
      return this.internals.states.has(customState);
    },
  };

  /**
   * Given a native event, this function cancels it and dispatches it again from the host element using the desired
   * event options.
   */
  relayNativeEvent(event: Event, eventOptions?: EventInit) {
    event.stopImmediatePropagation();

    this.dispatchEvent(
      new (event.constructor as typeof Event)(event.type, {
        ...event,
        ...eventOptions,
      }),
    );
  }
}
