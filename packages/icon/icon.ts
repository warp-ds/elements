import { html, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './style.js';

// Deduplicate in-flight fetches by URI.
const _fetchMap = new Map<string, Promise<string>>();
// Keep raw SVG text and parsed template nodes in memory for fast warm reads.
const _svgTextMap = new Map<string, string>();
const _svgTemplateMap = new Map<string, SVGElement>();
const LOCAL_STORAGE_PREFIX = 'w-icon:v1:';
const LOCAL_STORAGE_MAX_ENTRIES = 200;
const ERROR_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>';

interface ResolvedIconDescriptor {
  locale: string;
  name: string;
  uri: string;
}

function buildIconUri(name: string, locale: string): string {
  return `https://assets.finn.no/pkg/eikons/v1/${locale}/${name}.svg`;
}

function getStorageKey(uri: string): string {
  return `${LOCAL_STORAGE_PREFIX}${uri}`;
}

function getStorage(): Storage | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function parseSvg(svgText: string): SVGElement | null {
  const doc = new DOMParser().parseFromString(svgText, 'text/html');
  return doc.body.querySelector('svg');
}

function getErrorSvg(): SVGElement {
  const doc = new DOMParser().parseFromString(ERROR_SVG, 'text/html');
  return doc.body.firstElementChild as SVGElement;
}

function persistSvgText(uri: string, svgText: string): void {
  const storage = getStorage();
  if (!storage) return;

  try {
    storage.setItem(getStorageKey(uri), svgText);
  } catch {
    return;
  }

  // Clean up old entries if we exceed the max limit
  try {
    const keys: string[] = [];
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      if (key?.startsWith(LOCAL_STORAGE_PREFIX)) keys.push(key);
    }

    if (keys.length <= LOCAL_STORAGE_MAX_ENTRIES) return;
    const entriesToRemove = keys.length - LOCAL_STORAGE_MAX_ENTRIES;
    for (let index = 0; index < entriesToRemove; index += 1) {
      const keyToRemove = keys[index];
      if (keyToRemove) storage.removeItem(keyToRemove);
    }
  } catch {
    // Ignore storage cleanup errors
  }
}

function getStoredSvgText(uri: string): string | null {
  const storage = getStorage();
  if (!storage) return null;

  try {
    return storage.getItem(getStorageKey(uri));
  } catch {
    return null;
  }
}

/**
 * A minimal in-memory map to de-duplicate icon text fetches.
 */
function cacheFetch(uri: string): Promise<string> {
  if (!_fetchMap.has(uri)) {
    _fetchMap.set(
      uri,
      fetch(uri)
        .then((response) => response.text())
        .catch((error) => {
          _fetchMap.delete(uri);
          throw error;
        }),
    );
  }

  return _fetchMap.get(uri)!;
}

function cloneTemplateSvg(uri: string): SVGElement | null {
  const template = _svgTemplateMap.get(uri);
  return template ? (template.cloneNode(true) as SVGElement) : null;
}

function getCachedSvgSync(uri: string): SVGElement | null {
  // Fast path: pre-parsed template in memory.
  const templateClone = cloneTemplateSvg(uri);
  if (templateClone) return templateClone;

  // Slow sync path: hydrate memory cache from localStorage once.
  const cachedText = _svgTextMap.get(uri) ?? getStoredSvgText(uri);
  if (!cachedText) return null;

  _svgTextMap.set(uri, cachedText);
  const parsedSvg = parseSvg(cachedText);
  if (!parsedSvg) return null;

  _svgTemplateMap.set(uri, parsedSvg);
  return parsedSvg.cloneNode(true) as SVGElement;
}

async function fetchAndCacheSvg(uri: string): Promise<SVGElement | null> {
  try {
    // Always refresh memory + persisted text when fetch succeeds.
    const svgText = await cacheFetch(uri);
    _svgTextMap.set(uri, svgText);
    persistSvgText(uri, svgText);

    const parsedSvg = parseSvg(svgText);
    if (!parsedSvg) return null;

    _svgTemplateMap.set(uri, parsedSvg);
    return parsedSvg.cloneNode(true) as SVGElement;
  } catch {
    return null;
  }
}

export class WIcon extends LitElement {
  static styles = [styles];

  /** Icon filename (without .svg) */
  @property({ type: String, reflect: true })
  name!: string;

  /** Size: small, medium, large or pixel value (e.g. "32px") */
  @property({ type: String, reflect: true })
  size: 'small' | 'medium' | 'large' | string;

  /** Locale used in CDN URL */
  @property({ type: String, reflect: true })
  locale: string;

  /** Parsed SVG element (not reflected as attribute) */
  @state()
  private svg: SVGElement | null = null;

  // Monotonic guard to prevent stale async responses from winning.
  private loadSequence = 0;

  private resolveIconDescriptor(): ResolvedIconDescriptor | null {
    if (!this.name) return null;

    const locale = this.locale || 'en';
    return {
      locale,
      name: this.name,
      uri: buildIconUri(this.name, locale),
    };
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.primeAndLoadIcon();
  }

  protected willUpdate(changedProps: Map<string, unknown>): void {
    if (changedProps.has('name') || changedProps.has('locale')) {
      this.primeAndLoadIcon();
    }
  }

  private primeAndLoadIcon(): void {
    const descriptor = this.resolveIconDescriptor();
    if (!descriptor) {
      this.svg = null;
      return;
    }

    const cachedIcon = getCachedSvgSync(descriptor.uri);
    // Paint immediately when data is already warm.
    if (cachedIcon) this.svg = cachedIcon;

    // Then revalidate/fetch asynchronously.
    void this.loadIcon(descriptor.uri);
  }

  private async loadIcon(uri: string): Promise<void> {
    const loadSequence = ++this.loadSequence;

    let iconEl = await fetchAndCacheSvg(uri);
    if (!iconEl) iconEl = getErrorSvg();

    // Ignore out-of-order completions from earlier requests.
    if (loadSequence === this.loadSequence) {
      this.svg = iconEl;
    }
  }

  render(): TemplateResult {
    const size = this.size || 'medium';
    const name = this.name || '';
    const classes = {
      'w-icon': true,
      'w-icon--s': size === 'small',
      'w-icon--m': size === 'medium',
      'w-icon--l': size === 'large',
    };
    const customStyle = typeof size === 'string' && size.endsWith('px') ? `--w-icon-size: ${size};` : '';
    return html`<div class="${classMap(classes)}" style="${customStyle}" part="w-${name.toLowerCase()}">${this.svg}</div>`;
  }
}

if (!customElements.get('w-icon')) {
  customElements.define('w-icon', WIcon);
}
