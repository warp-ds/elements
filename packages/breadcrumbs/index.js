import { html, LitElement, css } from 'lit';
import { interleave } from '@warp-ds/core/breadcrumbs';
import { breadcrumbs as ccBreadcrumbs } from '@warp-ds/component-classes'

const separator = html`<span class=${ccBreadcrumbs.separator} aria-hidden='true'>/</span>`;

class WarpBreadcrumbs extends LitElement {
  static styles = css`
    /* @unocss-placeholder */
  `;

  connectedCallback() {
    super.connectedCallback();
    // Grab existing children at the point that the component is added to the page
    const flattenedChildren = Array.from(this.children).flat(Infinity).filter(child => child)
    const styledChildren = flattenedChildren.map((child, index) => {
      if (typeof child === 'string') {
        const isLastEl = index === children.length - 1;
        return html`<span class=${ccBreadcrumbs.text} aria-current=${isLastEl ? 'page' : undefined}>${child}</span>`;
      }
      child.classList.add(child.tagName === 'A' ? ccBreadcrumbs.link : ccBreadcrumbs.text)
      return child
    })

    // Interleave '/' separator with breadcrumbs
    this._children = interleave(styledChildren, separator);
  }

  render() {
    return html`
      <nav aria-label='Her er du'>
        <h2 class='sr-only'>Her er du</h2>
        <div class=${ccBreadcrumbs.wrapper}>
          ${this._children}
        </div>
      </nav>
    `;
  }
}

if (!customElements.get('w-breadcrumbs')) {
  customElements.define('w-breadcrumbs', WarpBreadcrumbs);
}

export { WarpBreadcrumbs };
