import { html, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './style.js';

// Generic parser for fetch responses
type ResponseParser<T> = (response: Response) => Promise<T>;

interface CacheFetchOptions<T> {
  responseParser?: ResponseParser<T>;
}

const _fetchMap = new Map<string, Promise<any>>();
const ERROR_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>';

/**
 * A minimal in-memory map to de-duplicate Fetch API media requests.
 *
 * @param uri - Resource URL
 * @param options - Optional parser for the response
 * @returns Promise of parsed response
 */
function cacheFetch<T = string>(uri: string, options: CacheFetchOptions<T> = {}): Promise<T> {
  const parser = options.responseParser ?? ((res: Response) => res.text() as Promise<any>);
  if (!_fetchMap.has(uri)) {
    _fetchMap.set(uri, fetch(uri).then(parser));
  }
  return _fetchMap.get(uri) as Promise<T>;
}

export class WIcon extends LitElement {
  static styles = [styles];

  /** Icon filename (without .svg) */
  @property({ type: String, reflect: true })
  name = '';

  /** Size: small, medium, large or pixel value (e.g. "32px") */
  @property({ type: String, reflect: true })
  size: 'small' | 'medium' | 'large' | string = 'medium';

  /** Locale used in CDN URL */
  @property({ type: String, reflect: true })
  locale = 'en';

  /** Parsed SVG element (not reflected as attribute) */
  @state()
  private svg: SVGElement | null = null;

  /**
   * Fetch an icon SVG from the CDN, with caching
   * @param iconName - Name of the icon file
   * @returns SVGElement or null on failure
   */
  private async fetchIcon(iconName: string): Promise<SVGElement | null> {
    const uri = `https://assets.finn.no/pkg/eikons/v1/${this.locale}/${iconName}.svg`;
    try {
      const svgText = await cacheFetch<string>(uri);
      const doc = new DOMParser().parseFromString(svgText, 'text/html');
      return doc.body.querySelector('svg');
    } catch {
      return null;
    }
  }

  protected firstUpdated(): void {
    this.loadIcon();
  }

  protected updated(changedProps: Map<string, unknown>): void {
    if (changedProps.has('name') || changedProps.has('locale')) {
      this.loadIcon();
    }
  }

  private async loadIcon(): Promise<void> {
    if (!this.name) {
      this.svg = null;
      return;
    }

    let iconEl = await this.fetchIcon(this.name);
    if (!iconEl) {
      const doc = new DOMParser().parseFromString(ERROR_SVG, 'text/html');
      iconEl = doc.body.firstElementChild as SVGElement;
    }
    this.svg = iconEl;
  }

  render(): TemplateResult {
    const classes = {
      'w-icon': true,
      'w-icon--s': this.size === 'small',
      'w-icon--m': this.size === 'medium',
      'w-icon--l': this.size === 'large',
    };
    const customStyle = typeof this.size === 'string' && this.size.endsWith('px') ? `--w-icon-size: ${this.size};` : '';
    return html`<div class="${classMap(classes)}" style="${customStyle}" part="w-${this.name.toLowerCase()}">${this.svg}</div>`;
  }
}

if (!customElements.get('w-icon')) {
  customElements.define('w-icon', WIcon);
}
