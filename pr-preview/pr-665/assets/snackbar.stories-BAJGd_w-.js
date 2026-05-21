import{n as e}from"./chunk-DnJy8xQt.js";import{m as t,n,s as r,t as i}from"./lit-3R6oe-ov.js";import{n as a,t as o}from"./dist-BZcjgT0h.js";import{r as s,t as c}from"./i18n-BwuiYdgr.js";import{i as l,n as u,o as d,r as f,t as p}from"./decorate-9CU4TY8X.js";import{t as m}from"./icon-JrYmj76q.js";import{n as h,t as g}from"./styles-BFPoBNJA.js";import{n as _,r as v,t as y}from"./element-collapse-B2JESuPG.js";import{a as b,l as x,o as S}from"./iframe-5pqCEg6b.js";import{t as C}from"./button-BUrag5BY.js";var w,T=e((()=>{i(),w=t`
    :host {
        display: block;

        --_snackbar-item-bg: var(--w-c-snackbar-item-bg, var(--w-color-tooltip-background-static));
        --_snackbar-item-action-bg-hover: var(--w-c-snackbar-item-action-bg-hover, var(--w-color-tooltip-background-static));
        --_snackbar-item-action-bg-active: var(--w-c-snackbar-item-action-bg-active, var(--w-color-tooltip-background-static));
        --_snackbar-item-border-radius: var(--w-c-snackbar-item-radius, 8px);
        --_snackbar-item-box-shadow: var(--w-c-snackbar-item-box-shadow, var(--w-shadow-l));
        --_snackbar-item-color: var(--w-c-snackbar-item-color, var(--w-s-color-text-inverted-static));
        --_snackbar-item-action-color-hover: var(--w-c-snackbar-item-action-color-hover, var(--w-s-color-text-inverted-static));
        --_snackbar-item-action-color-active: var(--w-c-snackbar-item-action-color-active, var(--w-s-color-text-inverted-static));
        --_snackbar-item-max-width: var(--w-c-snackbar-item-max-width, 420px);
        --_snackbar-item-min-width: var(--w-c-snackbar-item-min-width, 280px);
        --_snackbar-item-padding: var(--w-c-snackbar-item-padding, 8px);
    }

    /* Using a padding-less div as target so we get animation to and from zero height */
    .animation-wrapper {
        border-radius: var(--_snackbar-item-border-radius); /* Avoid sharp bottom corners during the transitino */
    }

    [part='item'] {
        background-color: var(--_snackbar-item-bg);
        border-radius: var(--_snackbar-item-border-radius);
        box-shadow: var(--_snackbar-item-box-shadow);
        color: var(--_snackbar-item-color);
        max-width: var(--_snackbar-item-max-width);
        min-width: var(--_snackbar-item-min-width);
        padding: var(--_snackbar-item-padding);
        
        display: grid;
        column-gap: 4px;
        grid-template:
            "icon message inline-action"
            "block-action block-action block-action";
        grid-template-columns: auto 1fr auto;
    }

    :host([action-placement='block']) [part='item'] {
        row-gap: 4px;
    }

    [part='item'] w-button,
    [part='item'] ::slotted(w-button) {
        --w-c-button-bg: var(--_snackbar-item-bg);
        --w-c-button-bg-active: var(--_snackbar-item-action-bg-active);
        --w-c-button-bg-hover: var(--_snackbar-item-action-bg-hover);
        --w-c-button-color: var(--_snackbar-item-color);
        --w-c-button-color-active: var(--_snackbar-item-action-color-active);
        --w-c-button-color-hover: var(--_snackbar-item-action-color-hover);
    }

    [part='icon'] {
        grid-area: icon;

        color: var(--_snackbar-item-color);
        padding-block: 4px;
        min-width: 4px; /* To give a total of 16px "padding" to message if no icon (8 padding + 4 width + 4 gap) */
    }

    [part='icon'] ::slotted(w-icon) {
        display: block; /* override default inline-block to avoid line-height */
    }

    [part='icon'] ::slotted(w-icon[name="SuccessFilled"]) {
        color: var(--w-s-color-icon-positive);
    }
    
    [part='icon'] ::slotted(w-icon[name="WarningFilled"]) {
        color: var(--w-s-color-icon-warning);
    }
    
    [part='icon'] ::slotted(w-icon[name="ErrorFilled"]) {
        color: var(--w-s-color-icon-negative);
    }
    
    [part='icon'] ::slotted(w-icon[name="InfoFilled"]) {
        color: var(--w-s-color-icon-info);
    }
    
    [part='message'] {
        grid-area: message;

        align-self: center;
        font-size: var(--w-font-size-s);
        line-height: var(--w-line-height-s);
        padding-block: 7px;
    }

    [part='action'] {
        grid-area: inline-action;

        display: flex;
        column-gap: 2px; /* to allow space for focus outline */
        justify-content: flex-end;
        padding-inline-start: 8px;
    }
    
    :host([action-placement='block']) [part='action'] {
        grid-area: block-action;

    }
`})),E,D,O=e((()=>{i(),f(),v(),g(),T(),u(),E=function(e){return e[e.Short=4e3]=`Short`,e[e.Long=1e4]=`Long`,e[e.Infinite=12e7]=`Infinite`,e}({}),D=class extends n{constructor(...e){super(...e),this.actionPlacement=`inline`,this.duration=E.Short,this.#e=!1,this.#t=E.Short,this.#n=null,this.#r=null,this.#i=!1}static{this.styles=[h,w]}#e;#t;#n;#r;#i;connectedCallback(){if(super.connectedCallback(),this.duration!==E.Infinite){let e=1e3;this.#t=this.duration-e,this.#r=setInterval(()=>{this.#i||(this.#t-=e,this.#t<=0&&this.close())},e)}}disconnectedCallback(){this.#r&&clearInterval(this.#r)}updated(){this.root&&(this.#e||_(this.root,()=>{this.#e=!0}))}close(){this.#n&&this.#n.focus(),this.#e&&this.root?y(this.root,()=>{this.remove()}):this.remove()}#a(e){this.#n||(this.#i=!0,e.relatedTarget&&e.relatedTarget.focus&&(this.#n=e.relatedTarget))}#o(e){(!e.relatedTarget||!this.shadowRoot?.host.contains(e.relatedTarget))&&(this.#i=!1,this.#n=null)}#s(){this.#i=!0}#c(){this.#n||(this.#i=!1)}render(){return r`
            <div class="animation-wrapper">
                <div part="item"
                    @mouseenter=${this.#s}
                    @mouseleave=${this.#c}
                    @focusin=${this.#a}
                    @focusout=${this.#o}
                >
                    <div part="icon">
                        <slot name="icon"></slot>
                    </div>
                    <div part="message">
                        <slot></slot>
                    </div>
                    <div part="action">
                        <slot name="action"></slot>
                        <slot name="close"></slot>
                    </div>
                </div>
            </div>
        `}},p([d({attribute:`action-placement`,reflect:!0,useDefault:!0})],D.prototype,`actionPlacement`,void 0),p([d({type:Number,reflect:!0,useDefault:!0})],D.prototype,`duration`,void 0),p([l(`.animation-wrapper`)],D.prototype,`root`,void 0),customElements.get(`w-snackbar-item`)||customElements.define(`w-snackbar-item`,D)})),k,A=e((()=>{k=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),j,M=e((()=>{j=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),N,P=e((()=>{N=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),F,I=e((()=>{F=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),L,R=e((()=>{L=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),z,B=e((()=>{i(),z=t`
    :host {
        position: fixed;
        pointer-events: none;
        
        --_snackbar-gap: var(--w-c-snackbar-container-gap, 8px);
        --_snackbar-position-top: var(--w-c-snackbar-position-top, initial);
        --_snackbar-position-right: var(--w-c-snackbar-position-right, 0);
        --_snackbar-position-bottom: var(--w-c-snackbar-position-bottom, 16px);
        --_snackbar-position-left: var(--w-c-snackbar-position-left, 0);
        --_snackbar-z-index: var(--w-c-snackbar-z-index, 50);

        bottom: var(--_snackbar-position-bottom);
        left: var(--_snackbar-position-left);
        right: var(--_snackbar-position-right);
        top: var(--_snackbar-position-top);
        
        z-index: var(--_snackbar-z-index);
    }

    [part='container'] {
        display: grid;
        gap: var(--_snackbar-gap);
        grid-template-rows: auto;
        justify-content: center;
        justify-items: center;
        margin-inline: auto;
        pointer-events: none;
    }

    ::slotted(*) {
        pointer-events: initial;
    }
`})),V,H,U,W=e((()=>{a(),i(),O(),s(),A(),M(),P(),I(),R(),g(),B(),V={canClose:!0,duration:E.Short,variant:`neutral`},c(j,F,N,k,L),H=/\s/,U=class extends n{static{this.styles=[h,z]}constructor(){super(),this.internals=this.attachInternals(),this.internals.ariaLive=`polite`,this.internals.role=`log`,this._onKeydown=this._onKeydown.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this._onKeydown)}_onKeydown(e){if(e.key===`Escape`){let e=this.shadowRoot?.host.querySelector(`w-snackbar-item:last-of-type`);e&&e.close()}}create(e,t={}){let n={...V,...t},r=document.createElement(`w-snackbar-item`);if(n.duration&&(r.duration=n.duration),r.innerText=e,n.variant!==`neutral`){let e=document.createElement(`w-icon`);switch(e.slot=`icon`,n.variant){case`positive`:e.name=`SuccessFilled`;break;case`warning`:e.name=`WarningFilled`;break;case`negative`:e.name=`ErrorFilled`;break;case`info`:e.name=`InfoFilled`;break}r.prepend(e)}if(n.action){r.duration<E.Long&&(r.duration=E.Long);let e=document.createElement(`w-button`);e.slot=`action`,e.variant=`utilityQuiet`,e.small=!0;let{label:t,onclick:i,placement:a}=n.action;e.innerText=t,e.onclick=t=>{let n=i.call(e,t);return t.defaultPrevented||r.close(),n},a?r.actionPlacement=a:H.test(t)&&(r.actionPlacement=`block`),r.append(e)}if(r.duration>=E.Long&&(n.canClose=!0),n.canClose){let e=document.createElement(`w-button`);e.slot=`action`,e.variant=`utilityQuiet`,e.small=!0,e.iconOnly=!0,typeof n.canClose==`function`?e.onclick=t=>{let i=n.canClose.call(e,t);return t.defaultPrevented||r.close(),i}:e.onclick=r.close.bind(r);let t=document.createElement(`w-icon`);t.name=`Close`,t.size=`small`,t.ariaLabel=o.t({id:`snackbar.aria.close`,message:`Dismiss message`,comment:`Accessibility label for the button that closes the snackbar/toast popup`}),e.append(t),r.append(e)}return this.shadowRoot?.host.prepend(r),r}render(){return r`
            <aside part="container">
                <slot></slot>
            </aside>
        `}},customElements.get(`w-snackbar`)||customElements.define(`w-snackbar`,U)})),G,K,q,J,Y,X,Z,Q;e((()=>{S(),i(),x(),C(),m(),W(),O(),{events:G,args:K,argTypes:q}=b(`w-snackbar`),J={title:`Overlays/Snackbar`,args:K,argTypes:q,parameters:{actions:{handles:G}}},Y={render(){return r`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`positive`})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`)}}">Neutral variant</w-button>
        </div>
    `}},X={render(){return r`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`positive`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    `}},Z={render(){return r`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`positive`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    `}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
        <div class="flex gap-8">
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'positive'
      });
    }}">Positive variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'warning'
      });
    }}">Warning variant</w-button>

          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'negative'
      });
    }}">Negative variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'info'
      });
    }}">Info variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short');
    }}">Neutral variant</w-button>
        </div>
    \`;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
        <div class="flex gap-8">
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'positive',
        action: {
          label: 'Action',
          onclick() {
            alert('Do action');
          }
        }
      });
    }}">Positive variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'warning',
        action: {
          label: 'Action',
          onclick() {
            alert('Do action');
          }
        }
      });
    }}">Warning variant</w-button>

          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'negative',
        action: {
          label: 'Action',
          onclick() {
            alert('Do action');
          }
        }
      });
    }}">Negative variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'info',
        action: {
          label: 'Action',
          onclick() {
            alert('Do action');
          }
        }
      });
    }}">Info variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        action: {
          label: 'Action',
          onclick() {
            alert('Do action');
          }
        }
      });
    }}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    \`;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
        <div class="flex gap-8">
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'positive',
        action: {
          label: 'Long action label',
          onclick() {
            alert('Do action');
          }
        }
      });
    }}">Positive variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'warning',
        action: {
          label: 'Long action label',
          onclick() {
            alert('Do action');
          }
        }
      });
    }}">Warning variant</w-button>

          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'negative',
        action: {
          label: 'Long action label',
          onclick() {
            alert('Do action');
          }
        }
      });
    }}">Negative variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'info',
        action: {
          label: 'Long action label',
          onclick() {
            alert('Do action');
          }
        }
      });
    }}">Info variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        action: {
          label: 'Long action label',
          onclick() {
            alert('Do action');
          }
        }
      });
    }}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    \`;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithAction`,`WithLongActionLabel`]}))();export{Y as Default,X as WithAction,Z as WithLongActionLabel,Q as __namedExportsOrder,J as default};