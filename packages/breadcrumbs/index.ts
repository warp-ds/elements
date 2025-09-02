import { html, LitElement, TemplateResult } from 'lit';

import { i18n } from '@lingui/core';
import { interleave } from '@warp-ds/core/breadcrumbs';
import { breadcrumbs as ccBreadcrumbs } from '@warp-ds/css/component-classes';
import { property } from 'lit/decorators.js';

import { activateI18n } from '../i18n';
import { components, reset } from '../styles.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';

const separator = html`<span class=${ccBreadcrumbs.separator}>/</span>`;

class WarpBreadcrumbs extends LitElement {
  @property({ type: String })
  ariaLabel;

  static styles = [reset, components];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

    this.ariaLabel = i18n._({
      id: 'breadcrumbs.ariaLabel',
      message: 'You are here',
      comment: 'Default screen reader message for the breadcrumb component',
    });
  }

  _children: Array<Element | TemplateResult>;

  connectedCallback() {
    super.connectedCallback();
    // Grab existing children at the point that the component is added to the page
    const flattenedChildren = Array.from(this.children)
      .flat(Infinity)
      .filter((child) => child);
    const styledChildren = flattenedChildren.map((child, index) => {
      if (typeof child === 'string') {
        const isLastEl = index === this.children.length - 1;
        return html`<span class=${ccBreadcrumbs.text} aria-current=${isLastEl ? 'page' : undefined}>${child}</span>`;
      }
      child.classList.add(child.tagName === 'A' ? ccBreadcrumbs.link : ccBreadcrumbs.text);
      return child;
    });

    // Interleave '/' separator with breadcrumbs
    this._children = interleave(styledChildren, separator);
  }

  render() {
    return html`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${ccBreadcrumbs.a11y}>${this.ariaLabel}</h2>
        <div class=${ccBreadcrumbs.wrapper}>${this._children}</div>
      </nav>
    `;
  }
}

if (!customElements.get('w-breadcrumbs')) {
  customElements.define('w-breadcrumbs', WarpBreadcrumbs);
}

export { WarpBreadcrumbs };
