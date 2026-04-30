import{n as e}from"./chunk-DnJy8xQt.js";import{At as t,Mt as n,Ot as r,Pt as i,_ as a,a as o,b as s,d as c,f as l,kt as u,o as d}from"./iframe-B7qTZjAE.js";var f,p=e((()=>{r(),f=i`
  /* If not a link variant this should look like a button */
  :host(:not([variant="link"])) {
    --_background: var(--background, var(--w-s-color-background));
    --_background-hover: var(
      --background-hover,
      var(--w-s-color-background-hover)
    );
    --_background-active: var(
      --background-active,
      var(--w-s-color-background-active)
    );
    --_text-color: var(--color, var(--w-s-color-text-link));
    --_text-color-hover: var(--color-hover, var(--w-s-color-text-link));
    --_text-color-active: var(--color-active, var(--w-s-color-text-link));
    --_border-width: var(--border-width, 2px);
    --_border: var(--border, var(--w-s-color-border));
    --_border-hover: var(--border-hover, var(--w-s-color-border-hover));
    --_border-active: var(--border-active, var(--w-s-color-border-active));
    --_border-radius: var(--border-radius, var(--w-button-radius-default, 8px));
    --_font-size: var(--font-size, var(--w-font-size-m));
    --_line-height: var(--line-height, var(--w-line-height-m));
    --_font-weight: var(--font-weight, bold);
    --_padding-x: var(--padding-x, 16px);
    --_padding-y: var(--padding-y, 13px);
  }

  :host(:not([variant="link"])) a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition:
      color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      fill 150ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);

    background-color: var(--_background);
    color: var(--_text-color);
    border: var(--_border-width) solid var(--_border);
    border-radius: var(--_border-radius);
    padding: calc(var(--_padding-y) - var(--_border-width))
      calc(var(--_padding-x) - var(--_border-width));
    font-size: var(--_font-size);
    line-height: var(--_line-height);
    font-weight: var(--_font-weight);
  }

  :host(:not([variant="link"])) a:hover {
    background-color: var(--_background-hover);
    border-color: var(--_border-hover);
    color: var(--_text-color-hover);
  }

  :host(:not([variant="link"])) a:active {
    background-color: var(--_background-active);
    border-color: var(--_border-active);
    color: var(--_text-color-active);
  }

  :host(:not([variant="link"])) a:focus-visible {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
  }

  /* Variants config */
  :host([variant="primary"]) {
    --background: var(--w-s-color-background-primary);
    --background-hover: var(--w-s-color-background-primary-hover);
    --background-active: var(--w-s-color-background-primary-active);
    --color: var(--w-s-color-text-inverted);
    --color-hover: var(--w-s-color-text-inverted);
    --color-active: var(--w-s-color-text-inverted);
    --border-width: 0px;
  }
  :host([variant="quiet"]),
  :host([quiet]) /* deprecated, backwards compatibility, use variant="quiet" */ {
    --background: transparent;
    --color: var(--w-s-color-text-link);
    --color-hover: var(--w-s-color-text-link-hover);
    --color-active: var(--w-s-color-text-link-active);
    --border-width: 0px;
  }
  :host([variant="negative"]) {
    --background: var(--w-s-color-background-negative);
    --background-hover: var(--w-s-color-background-negative-hover);
    --background-active: var(--w-s-color-background-negative-active);
    --color: var(--w-s-color-text-inverted);
    --color-hover: var(--w-s-color-text-inverted);
    --color-active: var(--w-s-color-text-inverted);
    --border-width: 0px;
  }
  :host([variant="negativeQuiet"]),
  :host([quiet][variant="negative"]) /* deprecated, backwards compatibility */ {
    --background: transparent;
    --background-hover: var(--w-s-color-background-negative-subtle-hover);
    --background-active: var(--w-s-color-background-negative-subtle-active);
    --color: var(--w-s-color-text-negative);
    --color-hover: var(--w-s-color-text-negative);
    --color-active: var(--w-s-color-text-negative);
    --border-width: 0px;
  }
  :host([variant="utility"]) {
    --background: var(--w-s-color-background);
    --background-hover: var(--w-s-color-background-hover);
    --background-active: var(--w-s-color-background-active);
    --color: var(--w-s-color-text);
    --color-hover: var(--w-s-color-text);
    --color-active: var(--w-s-color-text);
    --border-radius: var(--w-button-radius-utility, 4px);
    --border-width: 1px;
  }
  :host([variant="utilityQuiet"]),
  :host([quiet][variant="utility"]) /* deprecated, backwards compatibility */ {
    --background: transparent;
    --color: var(--w-s-color-text);
    --color-hover: var(--w-s-color-text);
    --color-active: var(--w-s-color-text);
    --border-width: 0px;
  }
  :host([variant="overlay"]) {
    --background: var(--w-color-background);
    --background-hover: var(--w-color-background-hover);
    --background-active: var(--w-color-background-active);
    --color: var(--w-s-color-text);
    --color-hover: var(--w-s-color-text);
    --color-active: var(--w-s-color-text);
    --border-radius: 9999px;
    --border-width: 0px;
  }
  :host([variant="overlayQuiet"]),
  :host([quiet][variant="overlay"]) /* deprecated, backwards compatibility */ {
    --background: transparent;
    --background-hover: var(--w-s-color-background-hover);
    --background-active: var(--w-s-color-background-active);
    --color: var(--w-s-color-text);
    --color-hover: var(--w-s-color-text);
    --color-active: var(--w-s-color-text);
    --border-radius: 9999px;
    --border-width: 0px;
  }
  :host([variant="overlayInverted"]) {
    --background: var(--w-s-color-background-inverted);
    --background-hover: var(--w-s-color-background-inverted-hover);
    --background-active: var(--w-s-color-background-inverted-active);
    --color: var(--w-s-color-text-inverted);
    --color-hover: var(--w-s-color-text-inverted);
    --color-active: var(--w-s-color-text-inverted);
    --border-radius: 9999px;
    --border-width: 0px;
  }
  :host([variant="overlayInvertedQuiet"]),
  :host([quiet][variant="overlayInverted"]) /* deprecated, backwards compatibility */ {
    --background: transparent;
    --background-hover: var(--w-s-color-background-inverted-hover);
    --background-active: var(--w-s-color-background-inverted-active);
    --color: var(--w-s-color-text-inverted);
    --color-hover: var(--w-s-color-text-inverted);
    --color-active: var(--w-s-color-text-inverted);
    --border-radius: 9999px;
    --border-width: 0px;
  }

  :host([variant="link"]) {
    --background: none;
    --background-hover: none;
    --background-active: none;
    --border-width: 0px;
    --font-weight: normal;
    display: inline;
  }

  /* States config,  selects --loading as well since loading is always supposed to be disabled */
  :host(:disabled),
  :host([disabled]) {
    --background: var(--w-s-color-background-disabled);
    --background-hover: var(--w-s-color-background-disabled);
    --background-active: var(--w-s-color-background-disabled);
    --color: var(--w-s-color-text-inverted);
    --color-hover: var(--w-s-color-text-inverted);
    --color-active: var(--w-s-color-text-inverted);
    --border-width: 0px;
  }

  :host(:disabled) a,
  :host([disabled]) a {
    cursor: not-allowed;
    pointer-events: none;
  }

  :host([variant="link"]):hover a {
    text-decoration: underline;
  }

  /* Sizes config */
  :host([small]) {
    --padding-x: 12px;
    --padding-y: 8px;
    --font-size: var(--w-font-size-xs);
    --line-height: var(--w-line-height-xs);
  }

  /* Width config */
  :host([full-width]) a {
    width: 100%;
    max-width: 100%;
  }
`})),m,h,g=e((()=>{r(),a(),o(),p(),l(),m=[`primary`,`secondary`,`negative`,`negativeQuiet`,`utility`,`utilityQuiet`,`quiet`,`link`,`overlay`,`overlayInverted`,`overlayQuiet`,`overlayInvertedQuiet`],h=class extends u{constructor(...e){super(...e),this.autofocus=!1,this.small=!1,this.disabled=!1,this.fullWidth=!1}static{this.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[d,f]}connectedCallback(){if(super.connectedCallback(),this.variant&&!m.includes(this.variant))throw Error(`Invalid "variant" attribute. Set its value to one of the following:\n${m.join(`, `)}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}render(){return n`
      <a
        href="${this.href}"
        target="${this.target}"
        rel="${this.target===`_blank`?this.rel||`noopener`:t}"
        tabindex="0"
      >
        <slot></slot>
      </a>
    `}},c([s({type:Boolean,reflect:!0})],h.prototype,`autofocus`,void 0),c([s({reflect:!0})],h.prototype,`variant`,void 0),c([s({type:Boolean,reflect:!0})],h.prototype,`small`,void 0),c([s({reflect:!0})],h.prototype,`href`,void 0),c([s({type:Boolean,reflect:!0})],h.prototype,`disabled`,void 0),c([s({reflect:!0})],h.prototype,`target`,void 0),c([s({reflect:!0})],h.prototype,`rel`,void 0),c([s({attribute:`full-width`,type:Boolean,reflect:!0})],h.prototype,`fullWidth`,void 0),customElements.get(`w-link`)||customElements.define(`w-link`,h)}));export{g as t};