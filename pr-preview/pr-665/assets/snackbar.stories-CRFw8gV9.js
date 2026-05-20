import{n as e}from"./chunk-DnJy8xQt.js";import{m as t,n,s as r,t as i}from"./lit-3R6oe-ov.js";import{n as a,t as o}from"./dist-BZcjgT0h.js";import{r as s,t as c}from"./i18n-BwuiYdgr.js";import{n as l,o as u,r as d,t as f}from"./decorate-BhMxcGWK.js";import{t as p}from"./icon-D-PPUbC2.js";import{n as m,t as h}from"./styles-Dp7yDomj.js";import{a as g,l as _,o as v}from"./iframe-B-6vTfCG.js";import{t as y}from"./button-CCDOCi0t.js";var b,x=e((()=>{i(),b=t`
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

    :host([action-as-block]) [part='item'] {
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
    
    :host([action-as-block]) [part='action'] {
        grid-area: block-action;

    }
`})),S,C,w=e((()=>{i(),d(),h(),x(),l(),S=function(e){return e[e.Short=5e3]=`Short`,e[e.Long=2e4]=`Long`,e[e.Infinite=1/0]=`Infinite`,e}({}),C=class extends n{constructor(...e){super(...e),this.actionAsBlock=!1,this.duration=S.Short,this.timer=null}static{this.styles=[m,b]}connectedCallback(){super.connectedCallback()}close(){this.remove()}render(){return r`
            <div part="item">
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
        `}},f([u({type:Boolean,attribute:`action-as-block`,reflect:!0})],C.prototype,`actionAsBlock`,void 0),f([u({type:Number,reflect:!0,useDefault:!0})],C.prototype,`duration`,void 0),customElements.get(`w-snackbar-item`)||customElements.define(`w-snackbar-item`,C)})),T,E=e((()=>{T=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),D,O=e((()=>{D=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),k,A=e((()=>{k=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),j,M=e((()=>{j=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),N,P=e((()=>{N=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),F,I=e((()=>{i(),F=t`
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
`})),L,R,z,B=e((()=>{a(),i(),w(),s(),E(),O(),A(),M(),P(),h(),I(),L={canClose:!0,duration:S.Short,variant:`neutral`},c(D,j,k,T,N),R=/\s/,z=class extends n{static{this.styles=[m,F]}constructor(){super(),this.internals=this.attachInternals(),this.internals.ariaLive=`polite`,this.internals.role=`log`}create(e,t={}){let n={...L,...t},r=document.createElement(`w-snackbar-item`);if(r.duration=n.duration,r.innerText=e,n.variant!==`neutral`){let e=document.createElement(`w-icon`);switch(e.slot=`icon`,n.variant){case`positive`:e.name=`SuccessFilled`;break;case`warning`:e.name=`WarningFilled`;break;case`negative`:e.name=`ErrorFilled`;break;case`info`:e.name=`InfoFilled`;break}r.prepend(e)}if(n.action){let e=document.createElement(`w-button`);e.slot=`action`,e.variant=`utilityQuiet`,e.small=!0;let{label:t,onclick:i}=n.action;e.innerText=t,e.onclick=i,R.test(t)&&(r.actionAsBlock=!0),r.append(e)}if(n.canClose){let e=document.createElement(`w-button`);e.slot=`action`,e.variant=`utilityQuiet`,e.small=!0,e.iconOnly=!0,e.onclick=r.close.bind(r);let t=document.createElement(`w-icon`);t.name=`Close`,t.size=`small`,t.ariaLabel=o.t({id:`snackbar.aria.close`,message:`Dismiss message`,comment:`Accessibility label for the button that closes the snackbar/toast popup`}),e.append(t),r.append(e)}return this.shadowRoot?.host.prepend(r),r}render(){return r`
            <aside part="container">
                <slot></slot>
            </aside>
        `}},customElements.get(`w-snackbar`)||customElements.define(`w-snackbar`,z)})),V,H,U,W,G,K,q,J;e((()=>{v(),i(),_(),y(),p(),B(),w(),{events:V,args:H,argTypes:U}=g(`w-snackbar`),W={title:`Overlays/Snackbar`,args:H,argTypes:U,parameters:{actions:{handles:V}}},G={render(){return r`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`positive`})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`)}}">Neutral variant</w-button>
        </div>
    `}},K={render(){return r`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`positive`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    `}},q={render(){return r`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`positive`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    `}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J=[`Default`,`WithAction`,`WithLongActionLabel`]}))();export{G as Default,K as WithAction,q as WithLongActionLabel,J as __namedExportsOrder,W as default};