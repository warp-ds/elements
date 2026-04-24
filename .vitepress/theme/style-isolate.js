class WarpDocsStyleIsolate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.style.display = "block";
    this.style.marginTop = "16px";

    // Use requestAnimationFrame to ensure light DOM content is parsed
    requestAnimationFrame(() => this.#render());
  }

  static get observedAttributes() {
    return ["stylesheet"];
  }

  attributeChangedCallback(_name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.#render();
    }
  }

  #render() {
    const stylesheet = this.getAttribute("stylesheet");
    const currentTheme = localStorage.getItem("warpTheme") || "finn-no";
    const tokensUrl = `https://assets.finn.no/pkg/@warp-ds/css/~2/tokens/${currentTheme}.css`;

    // Move light DOM content into shadow DOM for true isolation
    // (slots don't isolate - slotted content stays in light DOM and inherits page styles)
    const content = document.createDocumentFragment();
    while (this.firstChild) {
      content.appendChild(this.firstChild);
    }

    // Clear shadow root
    this.shadowRoot.innerHTML = "";

    // Add WARP theme tokens
    const tokensLink = document.createElement("link");
    tokensLink.rel = "stylesheet";
    tokensLink.href = tokensUrl;
    this.shadowRoot.appendChild(tokensLink);

    // Add base styles for wrapper
    const style = document.createElement("style");
    style.textContent = `
        @unocss-placeholder

        .component {
          padding: 16px;
          border: 2px solid var(--vp-c-gray-1);
          border-radius: 8px;
          background-color: var(--w-s-color-background);
        }
        .space-y-16 > * + * {
          margin-top: 16px;
        }
      `;
    this.shadowRoot.appendChild(style);

    // Add external stylesheet if specified
    if (stylesheet) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = stylesheet;
      this.shadowRoot.appendChild(link);
    }

    // Create wrapper div
    const wrapper = document.createElement("div");
    wrapper.className = "component space-y-16";
    wrapper.appendChild(content);

    // Append the wrapped content to shadow DOM
    this.shadowRoot.appendChild(wrapper);
  }
}

if (typeof customElements !== "undefined") {
  if (!customElements.get("style-isolate")) {
    customElements.define("style-isolate", WarpDocsStyleIsolate);
  }
}
