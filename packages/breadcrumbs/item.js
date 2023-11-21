import { html } from "lit";
import WarpElement from "@warp-ds/elements-core";
import { breadcrumbs as ccBreadcrumbs } from "@warp-ds/css/component-classes";

class WarpBreadcrumbItem extends WarpElement {
  static styles = [WarpElement.styles];

  static properties = {
    href: { type: String },
  };

  render() {
    const isLink = this.href ? true : false;
    return html`
      <div part="base" class="inline-flex items-center">
        ${isLink
          ? html`<a part="label" href="${this.href}" class=${ccBreadcrumbs.link}
              ><slot></slot>
            </a>`
          : html`<span part="label" class=${ccBreadcrumbs.text}
              ><slot></slot
            ></span>`}
        <span part="separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `;
  }
}

if (!customElements.get("w-breadcrumb-item")) {
  customElements.define("w-breadcrumb-item", WarpBreadcrumbItem);
}

export { WarpBreadcrumbItem };
