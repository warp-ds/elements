const themes = {
  "DBA light": "dba-dk",
  "Finn light": "finn-no",
  "Tori light": "tori-fi",
  "Blocket light": "blocket-se",
  "Neutral light": "neutral-com",
  "Vend light": "vend-com",
  "DBA dark": "dba-dk-dark",
  "Finn dark": "finn-no-dark",
  "Tori dark": "tori-fi-dark",
  "Blocket dark": "blocket-se-dark",
  "Neutral dark": "neutral-com-dark",
  "Vend dark": "vend-com-dark",
};

class WarpDocsThemeSwitcher extends HTMLElement {
  static rewriteStylesheets(theme) {
    const roots = [
      document,
      ...Array.from(document.querySelectorAll("*"))
        .filter((el) => !!el.shadowRoot)
        .map((el) => el.shadowRoot),
    ];
    roots.forEach((root) => {
      const stylesheets = root.querySelectorAll(
        'link[rel="stylesheet"][href*="/@warp-ds/css/"]',
      );
      stylesheets.forEach((s) => {
        s.setAttribute(
          "href",
          `https://assets.finn.no/pkg/@warp-ds/css/~2/tokens/${theme}.css`,
        );
      });
    });
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const currentTheme = localStorage.getItem("warpTheme") || "finn-no";
    const label = document.createElement("label");
    label.innerText = "Example theme:";
    const select = document.createElement("select");

    for (const [name, value] of Object.entries(themes)) {
      const option = document.createElement("option");
      option.innerText = name;
      option.value = value;
      if (value === currentTheme) option.selected = true;
      select.appendChild(option);
    }

    label.appendChild(select);

    this.shadowRoot.appendChild(label);
  }

  connectedCallback() {
    this.shadowRoot.querySelector("select").addEventListener(
      "input",
      /** @param {InputEvent} event */
      (event) => {
        localStorage.setItem("warpTheme", event.target.value);
        WarpDocsThemeSwitcher.rewriteStylesheets(event.target.value);
      },
    );
  }
}

if (typeof customElements !== "undefined") {
  if (!customElements.get("theme-switcher")) {
    customElements.define("theme-switcher", WarpDocsThemeSwitcher);
  }
}
