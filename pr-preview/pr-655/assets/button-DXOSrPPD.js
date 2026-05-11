import{n as e}from"./chunk-DnJy8xQt.js";import{At as t,B as n,Mt as r,Ot as i,Pt as a,_ as o,a as s,b as c,d as l,f as u,kt as d,l as f,o as p,s as m,z as h}from"./iframe-Cq318iF5.js";import{n as g,t as _}from"./form-control-BF64cDf7.js";import{n as v,t as y}from"./if-defined-CZ3wFhnt.js";import{t as b}from"./link-CbdF_X4C.js";var x,S=e((()=>{x=JSON.parse(`{"button.aria.loading":["Indlæser..."]}`)})),C,w=e((()=>{C=JSON.parse(`{"button.aria.loading":["Loading..."]}`)})),T,E=e((()=>{T=JSON.parse(`{"button.aria.loading":["Ladataan..."]}`)})),D,O=e((()=>{D=JSON.parse(`{"button.aria.loading":["Laster..."]}`)})),k,A=e((()=>{k=JSON.parse(`{"button.aria.loading":["Laddar ..."]}`)})),j,M=e((()=>{i(),j=a`
  :host {
    /* Local scoped variables, given the default button (the secondary variant) as a default */
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

  button {
    /* Base setup for all buttons */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition:
      color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      fill 150ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);

    /* Hook the local vars up to the button stuff  */
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

  button:hover {
    background-color: var(--_background-hover);
    border-color: var(--_border-hover);
    color: var(--_text-color-hover);
  }

  button:active {
    background-color: var(--_background-active);
    border-color: var(--_border-active);
    color: var(--_text-color-active);
  }

  button:focus-visible {
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

  :host([variant="pill"]) {
    --background: transparent;
    --background-hover: var(--w-color-button-pill-background-hover); /** TODO: this should use a semantic token */
    --background-active: var(--w-color-button-pill-background-active); /** TODO: this should use a semantic token */
    --border-radius: 50%;
    --border-width: 0px;
    --color: var(--w-s-color-icon);
    --color-hover: var(--w-s-color-icon-hover);
    --color-active: var(--w-s-color-icon-active);
    --padding-x: 14px; /* get a total height and width of 44px, matching atomic CSS variant */
    --padding-y: 14px;
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

  :host(:disabled) button,
  :host([disabled]) button {
    cursor: not-allowed;
    pointer-events: none;
  }

  :host([loading]) {
    --background: var(--w-s-color-background-subtle);
    --background-hover: var(--w-s-color-background-subtle);
    --background-active: var(--w-s-color-background-subtle);
    --color: var(--w-s-color-text);
    --color-hover: var(--w-s-color-text);
    --color-active: var(--w-s-color-text);
    --border-width: 0px;
  }

  :host([loading]) button {
    cursor: wait;
    pointer-events: none;
  }

  :host([variant="link"]):hover {
    text-decoration: underline;
  }

  /* Sizes config */
  :host([small]) {
    --padding-x: 12px;
    --padding-y: 8px;
    --font-size: var(--w-font-size-xs);
    --line-height: var(--w-line-height-xs);
  }

  :host([small][variant="pill"]) {
    --padding-x: 8px; /* get a total height and width of 32px, matching atomic CSS variant */
    --padding-y: 8px;
  }

  /* Width config */
  :host([full-width]) button {
    width: 100%;
    max-width: 100%;
  }

  :host([has-icon-only]) {
    --_padding-x: var(--_padding-y);
  }

  :host([has-icon-only]) button {
    width: auto;
    max-width: none;
    aspect-ratio: 1 / 1;
  }

  /* Copy of loading animation from warp  */
  :host([loading]) button {
    background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.05) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.05) 50%,
      rgba(0, 0, 0, 0.05) 75%,
      transparent 75%,
      transparent
    );
    background-size: 30px 30px;
    animation: animate-inprogress 3s linear infinite;
  }

  @keyframes animate-inprogress {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 60px 0;
    }
  }
`})),N,P,F=e((()=>{n(),_(),i(),o(),f(),b(),s(),S(),w(),E(),O(),A(),M(),y(),u(),N=[`primary`,`secondary`,`negative`,`negativeQuiet`,`utility`,`pill`,`link`,`quiet`,`utilityQuiet`,`overlay`,`overlayInverted`,`overlayQuiet`,`overlayInvertedQuiet`],P=class extends g(d){static{this.styles=[p,j]}static{this.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0}}#e;updated(e){e.has(`value`)&&this.setValue(this.value)}constructor(){super(),this.autofocus=!1,this.quiet=!1,this.iconOnly=!1,this.small=!1,this.loading=!1,this.disabled=!1,this.fullWidth=!1,this.#e=null,m(C,D,T,x,k),this.ariaValueTextLoading=h.t({id:`button.aria.loading`,message:`Loading...`,comment:`Screen reader message for buttons that are loading`})}connectedCallback(){super.connectedCallback();let e=this.variant||`secondary`;if(!N.includes(e))throw Error(`Invalid "variant" attribute. Set its value to one of the following:\n${N.join(`, `)}.`);this.#e=this.value}firstUpdated(){this.autofocus&&!this.href&&setTimeout(()=>this.focus(),0)}_handleButtonClick(){this.type===`submit`?this.internals.form.requestSubmit():this.type===`reset`&&this.internals.form.reset()}resetFormControl(){this.value=this.#e}render(){let e=this.variant||`secondary`;return r` ${this.href?r`
          <w-link
            href=${this.href}
            target=${this.target}
            variant=${this.quiet?`quiet`:e}
            ?small=${this.small}
            ?loading=${this.loading}
            ?autofocus=${this.autofocus}
            ?full-width=${this.fullWidth}
            class=${this.buttonClass}
            rel=${this.target===`_blank`?this.rel||`noopener`:void 0}
          >
            <slot></slot>
          </w-link>
        `:r`
          <button
            type=${this.type||`button`}
            class=${v(this.buttonClass)}
            @click="${this._handleButtonClick}"
          >
            <slot></slot>
          </button>
        `}
    ${this.loading?r`<span
          class="sr-only"
          role="progressbar"
          aria-valuenow="{0}"
          aria-valuetext=${this.ariaValueTextLoading}
        ></span>`:t}`}},l([c({reflect:!0})],P.prototype,`type`,void 0),l([c({type:Boolean,reflect:!0})],P.prototype,`autofocus`,void 0),l([c({reflect:!0})],P.prototype,`variant`,void 0),l([c({type:Boolean,reflect:!0})],P.prototype,`quiet`,void 0),l([c({type:Boolean,reflect:!0,attribute:`icon-only`})],P.prototype,`iconOnly`,void 0),l([c({type:Boolean,reflect:!0})],P.prototype,`small`,void 0),l([c({type:Boolean,reflect:!0})],P.prototype,`loading`,void 0),l([c({reflect:!0})],P.prototype,`href`,void 0),l([c({reflect:!0})],P.prototype,`target`,void 0),l([c({type:Boolean,reflect:!0})],P.prototype,`disabled`,void 0),l([c({reflect:!0})],P.prototype,`rel`,void 0),l([c({attribute:`full-width`,type:Boolean,reflect:!0})],P.prototype,`fullWidth`,void 0),l([c({attribute:`button-class`,reflect:!0})],P.prototype,`buttonClass`,void 0),l([c({reflect:!0})],P.prototype,`name`,void 0),l([c({reflect:!0})],P.prototype,`value`,void 0),customElements.get(`w-button`)||customElements.define(`w-button`,P)}));export{F as t};