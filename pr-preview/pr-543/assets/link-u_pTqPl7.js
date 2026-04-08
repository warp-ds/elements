import{a as l,i as u,r as b,A as s,k as g,b as w,n as t}from"./iframe-DMshKUkJ.js";const h=l`.w-button,
.w-button--secondary {
    /* Local scoped variables, given the default button (the secondary variant) as a default */
    --_background: var(--background, var(--w-s-color-background));
    --_background-hover: var(--background-hover, var(--w-s-color-background-hover));
    --_background-active: var(--background-active, var(--w-s-color-background-active));
    --_text-color: var(--color, var(--w-s-color-text-link));
    --_border-width: var(--border-width, 2px);
    --_border: var(--border, var(--w-s-color-border));
    --_border-hover: var(--border-hover, var(--w-s-color-border-hover));
    --_border-active: var(--border-active, var(--w-s-color-border-active));
    --_border-radius: var(--w-button-radius-default, 8px);
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
    padding: calc(var(--_padding-y) - var(--_border-width)) calc(var(--_padding-x) - var(--_border-width));
    font-size: var(--_font-size);
    line-height: var(--_line-height);
    font-weight: var(--_font-weight);
}

    .w-button:hover {
        background-color: var(--_background-hover);
        border-color: var(--_border-hover);
    }

    .w-button:active {
        background-color: var(--_background-active);
        border-color: var(--_border-active);
    }

    .w-button:focus-visible {
        outline: 2px solid var(--w-s-color-border-focus);
        outline-offset: var(--w-outline-offset, 1px);
    }

    /* Variants config */
    .w-button--primary {
        --background: var(--w-color-button-primary-background);
        --background-hover: var(--w-color-button-primary-background-hover);
        --background-active: var(--w-color-button-primary-background-active);
        --color: var(--w-s-color-text-inverted);
        --border-width: 0px;
    }
    .w-button--negative {
        --background: var(--w-s-color-background-negative);
        --background-hover: var(--w-s-color-background-negative-hover);
        --background-active: var(--w-s-color-background-negative-active);
        --color: var(--w-s-color-text-inverted);
        --border-width: 0px;
    }
    .w-button--negative-quiet {
        --background: transparent;
        --background-hover: var(--w-s-color-background-negative-subtle-hover);
        --background-active: var(--w-s-color-background-negative-subtle-active);
        --color: var(--w-s-color-text-negative);
        --border-width: 0px;
    }
    .w-button--utility {
        --background: var(--w-s-color-background);
        --background-hover: var(--w-s-color-background-hover);
        --background-active: var(--w-s-color-background-active);
        --color: var(--w-s-color-text);
        --border-radius: var(--w-button-radius-utility, 4px);
        --border-width: 1px;
    }
    .w-button--utility-quiet {
        --background: transparent;
        --color: var(--w-s-color-text);
        --border-width: 0px;
    }
    .w-button--quiet {
        --background: transparent;
        --border-width: 0px;
    }
    .w-button--overlay {
        --background: var(--w-color-background);
        --background-hover: var(--w-color-background-hover);
        --background-active: var(--w-color-background-active);
        --color: var(--w-s-color-text);
        --border-radius: 9999px;
        --border-width: 0px;
    }
    .w-button--overlay-quiet {
        --background: transparent;
        --background-hover: var(--w-s-color-background-hover);
        --background-active: var(--w-s-color-background-active);
        --color: var(--w-s-color-text);
        --border-radius: 9999px;
        --border-width: 0px;
    }
    .w-button--overlay-inverted {
        --background: var(--w-s-color-background-inverted);
        --background-hover: var(--w-s-color-background-inverted-hover);
        --background-active: var(--w-s-color-background-inverted-active);
        --color: var(--w-s-color-text-inverted);
        --border-radius: 9999px;
        --border-width: 0px;
    }
    .w-button--overlay-inverted-quiet {
        --background: transparent;
        --background-hover: var(--w-s-color-background-inverted-hover);
        --background-active: var(--w-s-color-background-inverted-active);
        --color: var(--w-s-color-text-inverted);
        --border-radius: 9999px;
        --border-width: 0px;
    }

    .w-button--link {
        --background: none;
        --background-hover: none;
        --background-active: none;
        --border-width: 0;
        --font-weight: normal;
        display: inline;
    }
    .w-button--overlay {
        --background: var(--w-color-background);
        --background-hover: var(--w-color-background-hover);
        --background-active: var(--w-color-background-active);
        --color: var(--w-s-color-text);
        --border-radius: 9999px;
        --border-width: 0px;
    }
    .w-button--overlay-quiet {
        --background: transparent;
        --background-hover: var(--w-s-color-background-hover);
        --background-active: var(--w-s-color-background-active);
        --color: var(--w-s-color-text);
        --border-radius: 9999px;
        --border-width: 0px;
    }
    .w-button--overlay-inverted {
        --background: var(--w-s-color-background-inverted);
        --background-hover: var(--w-s-color-background-inverted-hover);
        --background-active: var(--w-s-color-background-inverted-active);
        --color: var(--w-s-color-text-inverted);
        --border-radius: 9999px;
        --border-width: 0px;
    }
    .w-button--overlay-inverted-quiet {
        --background: transparent;
        --background-hover: var(--w-s-color-background-inverted-hover);
        --background-active: var(--w-s-color-background-inverted-active);
        --color: var(--w-s-color-text-inverted);
        --border-radius: 9999px;
        --border-width: 0px;
    }

    /* States config,  selects --loading as well since loading is always supposed to be disabled */
    .w-button:disabled,
    .w-button--disabled,
    .w-button--loading {
        --background: var(--w-s-color-background-disabled);
        --background-hover: var(--w-s-color-background-disabled);
        --background-active: var(--w-s-color-background-disabled);
        --color: var(--w-s-color-text-inverted);
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
    }`;var k=Object.defineProperty,e=(i,r,n,p)=>{for(var a=void 0,d=i.length-1,c;d>=0;d--)(c=i[d])&&(a=c(r,n,a)||a);return a&&k(r,n,a),a};const v=["primary","secondary","negative","negativeQuiet","utility","utilityQuiet","quiet","link","overlay","overlayInverted","overlayQuiet","overlayInvertedQuiet"];class o extends u{constructor(){super(...arguments),this.autofocus=!1,this.small=!1,this.disabled=!1,this.fullWidth=!1}static{this.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[b,h]}connectedCallback(){if(super.connectedCallback(),this.variant&&!v.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${v.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}render(){const r=this.variant||"secondary",n={"w-button":r!=="link","w-button--primary":r==="primary","w-button--secondary":r==="secondary"||!this.variant,"w-button--negative":r==="negative","w-button--utility":r==="utility","w-button--quiet":r==="quiet","w-button--negative-quiet":r==="negativeQuiet","w-button--utility-quiet":r==="utilityQuiet","w-button--overlay":r==="overlay","w-button--overlay-inverted":r==="overlayInverted","w-button--overlay-quiet":r==="overlayQuiet","w-button--overlay-inverted-quiet":r==="overlayInvertedQuiet","w-button--small":this.small,"w-button--full-width":this.fullWidth,"w-button--disabled":this.disabled};return w`
      <a
        href="${this.href}"
        target="${this.target}"
        rel="${this.target==="_blank"?this.rel||"noopener":s}"
        class="${g(n)}"
        tabindex="0"
      >
        <slot></slot>
      </a>
    `}}e([t({type:Boolean,reflect:!0})],o.prototype,"autofocus");e([t({reflect:!0})],o.prototype,"variant");e([t({type:Boolean,reflect:!0})],o.prototype,"small");e([t({reflect:!0})],o.prototype,"href");e([t({type:Boolean,reflect:!0})],o.prototype,"disabled");e([t({reflect:!0})],o.prototype,"target");e([t({reflect:!0})],o.prototype,"rel");e([t({attribute:"full-width",type:Boolean,reflect:!0})],o.prototype,"fullWidth");customElements.get("w-link")||customElements.define("w-link",o);
