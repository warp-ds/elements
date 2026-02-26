import{a as u,q as b,l as h,r as g,i as d,A as w,b as i,k as p,n as r}from"./iframe-DDEf8cFw.js";import"./link-DF7nLoXz.js";import{F as k}from"./FormControlMixin-DJnJZbro.js";const x=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),y=JSON.parse('{"button.aria.loading":["Loading..."]}'),f=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),m=JSON.parse('{"button.aria.loading":["Laster..."]}'),_=JSON.parse('{"button.aria.loading":["Laddar ..."]}'),q=u`
  .w-button,
  .w-button--secondary {
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
    --_border-radius: var(--border-radius, 8px);
    --_font-size: var(--font-size, var(--w-font-size-m));
    --_line-height: var(--line-height, var(--w-line-height-m));
    --_font-weight: var(--font-weight, bold);
    --_padding-x: var(--padding-x, 16px);
    --_padding-y: var(--padding-y, 13px);

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

  .w-button:hover {
    background-color: var(--_background-hover);
    border-color: var(--_border-hover);
    color: var(--_text-color-hover);
  }

  .w-button:active {
    background-color: var(--_background-active);
    border-color: var(--_border-active);
    color: var(--_text-color-active);
  }

  .w-button:focus-visible {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
  }

  /* Variants config */
  .w-button--primary {
    --background: var(--w-s-color-background-primary);
    --background-hover: var(--w-s-color-background-primary-hover);
    --background-active: var(--w-s-color-background-primary-active);
    --color: var(--w-s-color-text-inverted);
    --color-hover: var(--w-s-color-text-inverted);
    --color-active: var(--w-s-color-text-inverted);
    --border-width: 0px;
  }
  .w-button--negative {
    --background: var(--w-s-color-background-negative);
    --background-hover: var(--w-s-color-background-negative-hover);
    --background-active: var(--w-s-color-background-negative-active);
    --color: var(--w-s-color-text-inverted);
    --color-hover: var(--w-s-color-text-inverted);
    --color-active: var(--w-s-color-text-inverted);
    --border-width: 0px;
  }
  .w-button--negative-quiet {
    --background: transparent;
    --background-hover: var(--w-s-color-background-negative-subtle-hover);
    --background-active: var(--w-s-color-background-negative-subtle-active);
    --color: var(--w-s-color-text-negative);
    --color-hover: var(--w-s-color-text-negative);
    --color-active: var(--w-s-color-text-negative);
    --border-width: 0px;
  }
  .w-button--utility {
    --background: var(--w-s-color-background);
    --background-hover: var(--w-s-color-background-hover);
    --background-active: var(--w-s-color-background-active);
    --color: var(--w-s-color-text);
    --color-hover: var(--w-s-color-text);
    --color-active: var(--w-s-color-text);
    --border-radius: 4px;
    --border-width: 1px;
  }
  .w-button--utility-quiet {
    --background: transparent;
    --color: var(--w-s-color-text);
    --color-hover: var(--w-s-color-text);
    --color-active: var(--w-s-color-text);
    --border-width: 0px;
  }
  .w-button--overlay {
    --background: var(--w-color-background);
    --background-hover: var(--w-color-background-hover);
    --background-active: var(--w-color-background-active);
    --color: var(--w-s-color-text);
    --color-hover: var(--w-s-color-text);
    --color-active: var(--w-s-color-text);
    --border-radius: 9999px;
    --border-width: 0px;
  }
  .w-button--overlay-quiet {
    --background: transparent;
    --background-hover: var(--w-s-color-background-hover);
    --background-active: var(--w-s-color-background-active);
    --color: var(--w-s-color-text);
    --color-hover: var(--w-s-color-text);
    --color-active: var(--w-s-color-text);
    --border-radius: 9999px;
    --border-width: 0px;
  }
  .w-button--overlay-inverted {
    --background: var(--w-s-color-background-inverted);
    --background-hover: var(--w-s-color-background-inverted-hover);
    --background-active: var(--w-s-color-background-inverted-active);
    --color: var(--w-s-color-text-inverted);
    --color-hover: var(--w-s-color-text-inverted);
    --color-active: var(--w-s-color-text-inverted);
    --border-radius: 9999px;
    --border-width: 0px;
  }
  .w-button--overlay-inverted-quiet {
    --background: transparent;
    --background-hover: var(--w-s-color-background-inverted-hover);
    --background-active: var(--w-s-color-background-inverted-active);
    --color: var(--w-s-color-text-inverted);
    --color-hover: var(--w-s-color-text-inverted);
    --color-active: var(--w-s-color-text-inverted);
    --border-radius: 9999px;
    --border-width: 0px;
  }

  .w-button--link {
    --background: none;
    --background-hover: none;
    --background-active: none;
    --border-width: 0px;
    --font-weight: normal;
    display: inline;
  }

  /* States config,  selects --loading as well since loading is always supposed to be disabled */
  .w-button:disabled,
  .w-button--disabled,
  .w-button--loading {
    --background: var(--w-s-color-background-disabled);
    --background-hover: var(--w-s-color-background-disabled);
    --background-active: var(--w-s-color-background-disabled);
    --color: var(--w-s-color-text-inverted);
    --color-hover: var(--w-s-color-text-inverted);
    --color-active: var(--w-s-color-text-inverted);
    --border-width: 0px;
    pointer-events: none;
  }

  .w-button--link:hover {
    text-decoration: underline;
  }

  /* Sizes config */
  .w-button--small {
    --padding-x: 12px;
    --padding-y: 8px;
    --font-size: var(--w-font-size-xs);
    --line-height: var(--w-line-height-xs);
  }

  .w-button--pill {
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

  .w-button--pill.w-button--small {
    --padding-x: 8px; /* get a total height and width of 32px, matching atomic CSS variant */
    --padding-y: 8px;
  }

  /* Width config */
  .w-button--full-width {
    width: 100%;
    max-width: 100%;
  }

  .w-button--has-icon-only {
    width: auto;
    max-width: none;
    --_padding-x: var(--_padding-y);
    aspect-ratio: 1 / 1;
  }

  a.w-button {
    text-decoration: none !important;
  }

  /* Copy of loading animation from warp  */
  .w-button--loading {
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
`;var $=Object.defineProperty,o=(n,a,c,S)=>{for(var e=void 0,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=s(a,c,e)||e);return e&&$(a,c,e),e};const v=["primary","secondary","negative","negativeQuiet","utility","pill","link","quiet","utilityQuiet","overlay","overlayInverted","overlayQuiet","overlayInvertedQuiet"];class t extends k(d){constructor(){super(),this.type="button",this.variant="secondary",this.#t=null,b(y,m,f,x,_),this.ariaValueTextLoading=h.t({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.styles=[g,q]}static{this.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0}}#t;updated(a){a.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!v.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${v.join(", ")}.`);this.#t=this.value}firstUpdated(){this.autofocus&&!this.href&&setTimeout(()=>this.focus(),0)}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}resetFormControl(){this.value=this.#t}render(){return i` ${this.href?i`
          <w-link
            href=${this.href}
            target=${this.target}
            variant=${this.quiet?"quiet":this.variant}
            ?small=${this.small}
            ?loading=${this.loading}
            ?autofocus=${this.autofocus}
            ?full-width=${this.fullWidth}
            class=${this.buttonClass}
            rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          >
            <slot></slot>
          </w-link>
        `:i`
          <button
            type=${this.type||"button"}
            class=${p({"w-button":!0,"w-button--primary":this.variant==="primary","w-button--secondary":this.variant==="secondary","w-button--negative":!this.quiet&&this.variant==="negative","w-button--utility":!this.quiet&&this.variant==="utility","w-button--pill":this.variant==="pill","w-button--quiet":this.quiet&&!["negative","utility","overlay","overlayInverted"].includes(this.variant)||this.variant==="quiet","w-button--negative-quiet":this.quiet&&this.variant==="negative"||this.variant==="negativeQuiet","w-button--utility-quiet":this.quiet&&this.variant==="utility"||this.variant==="utilityQuiet","w-button--overlay":!this.quiet&&this.variant==="overlay","w-button--overlay-inverted":!this.quiet&&this.variant==="overlayInverted","w-button--overlay-quiet":this.quiet&&this.variant==="overlay"||this.variant==="overlayQuiet","w-button--overlay-inverted-quiet":this.quiet&&this.variant==="overlayInverted"||this.variant==="overlayInvertedQuiet","w-button--link":this.variant==="link","w-button--small":this.small,"w-button--full-width":this.fullWidth,"w-button--has-icon-only":this.iconOnly,"w-button--loading":this.loading,"w-button--disabled":this.disabled})}
            @click="${this._handleButtonClick}"
          >
            <slot></slot>
          </button>
        `}
    ${this.loading?i`<span
          class="sr-only"
          role="progressbar"
          aria-valuenow="{0}"
          aria-valuetext=${this.ariaValueTextLoading}
        ></span>`:w}`}}o([r({reflect:!0})],t.prototype,"type");o([r({type:Boolean,reflect:!0})],t.prototype,"autofocus");o([r({reflect:!0})],t.prototype,"variant");o([r({type:Boolean,reflect:!0})],t.prototype,"quiet");o([r({type:Boolean,reflect:!0,attribute:"icon-only"})],t.prototype,"iconOnly");o([r({type:Boolean,reflect:!0})],t.prototype,"small");o([r({type:Boolean,reflect:!0})],t.prototype,"loading");o([r({reflect:!0})],t.prototype,"href");o([r({reflect:!0})],t.prototype,"target");o([r({type:Boolean,reflect:!0})],t.prototype,"disabled");o([r({reflect:!0})],t.prototype,"rel");o([r({attribute:"full-width",type:Boolean,reflect:!0})],t.prototype,"fullWidth");o([r({attribute:"button-class",reflect:!0})],t.prototype,"buttonClass");o([r({reflect:!0})],t.prototype,"name");o([r({reflect:!0})],t.prototype,"value");customElements.get("w-button")||customElements.define("w-button",t);
