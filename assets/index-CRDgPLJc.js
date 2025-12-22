import{a as s,i as u,r as b,x as v,n as o}from"./iframe-CdiVsGC5.js";import{e as g}from"./class-map-BOwLtAoF.js";import{F as w}from"./FormControlMixin-DJnJZbro.js";const p=s`.w-button,
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
        --border-radius: 4px;
        --border-width: 1px;
    }
    .w-button--utility-quiet {
        --background: transparent;
        --color: var(--w-s-color-text);
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
    }`;var h=Object.defineProperty,t=(n,a,d,k)=>{for(var e=void 0,i=n.length-1,c;i>=0;i--)(c=n[i])&&(e=c(a,d,e)||e);return e&&h(a,d,e),e};const l=["primary","secondary","negative","negativeQuiet","utility","utilityQuiet","pill","link"];class r extends w(u){static{this.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[b,p]}constructor(){super(),this.variant="secondary"}connectedCallback(){if(super.connectedCallback(),!l.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${l.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}render(){const a={"w-button":this.variant!=="link","w-button--primary":this.variant==="primary","w-button--secondary":this.variant==="secondary","w-button--negative":this.variant==="negative","w-button--utility":this.variant==="utility","w-button--quiet":this.variant==="quiet","w-button--negative-quiet":this.variant==="negativeQuiet","w-button--utility-quiet":this.variant==="utilityQuiet","w-button--small":this.small,"w-button--full-width":this.fullWidth,"w-button--disabled":this.disabled};return v`<a
      href=${this.href}
      target=${this.target}
      rel=${this.target==="_blank"?this.rel||"noopener":void 0}
      class=${g(a)}>
      <slot></slot>
    </a>`}}t([o({type:Boolean,reflect:!0})],r.prototype,"autofocus");t([o({reflect:!0})],r.prototype,"variant");t([o({type:Boolean,reflect:!0})],r.prototype,"quiet");t([o({type:Boolean,reflect:!0})],r.prototype,"small");t([o({reflect:!0})],r.prototype,"href");t([o({type:Boolean,reflect:!0})],r.prototype,"disabled");t([o({reflect:!0})],r.prototype,"target");t([o({reflect:!0})],r.prototype,"rel");t([o({attribute:"full-width",type:Boolean,reflect:!0})],r.prototype,"fullWidth");t([o({attribute:"button-class",reflect:!0})],r.prototype,"buttonClass");t([o({reflect:!0})],r.prototype,"name");customElements.get("w-link")||customElements.define("w-link",r);
