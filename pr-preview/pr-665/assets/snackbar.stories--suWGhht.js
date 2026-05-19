import{n as e}from"./chunk-DnJy8xQt.js";import{m as t,n,r,s as i,t as a}from"./lit-3R6oe-ov.js";import{n as o,t as s}from"./dist-BZcjgT0h.js";import{r as c,t as l}from"./i18n-BwuiYdgr.js";import{n as u,o as d,r as f,t as p}from"./decorate-BhMxcGWK.js";import{t as m}from"./icon-D-PPUbC2.js";import{n as h,t as g}from"./styles-Dp7yDomj.js";import{a as _,l as v,o as y}from"./iframe-cgOleOyq.js";import{t as b}from"./button-CCDOCi0t.js";var x,S=e((()=>{a(),x=t`
    :host {
        display: block;

        --_snackbar-item-background-color: var(--w-c-snackbar-item-background-color, var(--w-color-tooltip-background-static));
        --_snackbar-item-background-color-hover: var(--w-c-snackbar-item-background-color-hover, var(--w-color-tooltip-background-static));
        --_snackbar-item-background-color-active: var(--w-c-snackbar-item-background-color-active, var(--w-color-tooltip-background-static));
        --_snackbar-item-border-radius: var(--w-c-snackbar-item-border-radius, 8px);
        --_snackbar-item-box-shadow: var(--w-c-snackbar-item-box-shadow, var(--w-shadow-l));
        --_snackbar-item-color: var(--w-c-snackbar-item-color, var(--w-s-color-text-inverted-static));
        --_snackbar-item-max-width: var(--w-c-snackbar-item-max-width, 420px);
        --_snackbar-item-padding: var(--w-c-snackbar-item-padding, 8px);
    }

    [part='snackbar-item'] {
        background-color: var(--_snackbar-item-background-color);
        border-radius: var(--_snackbar-item-border-radius);
        box-shadow: var(--_snackbar-item-box-shadow);
        color: var(--_snackbar-item-color);
        max-width: var(--_snackbar-item-max-width);
        padding: var(--_snackbar-item-padding);
        
        display: grid;
        gap: 4px;
        grid-template:
            "icon message inline-action"
            "block-action block-action block-action";
    }

    [part='snackbar-item'] w-button {
        --w-c-button-bg: var(--_snackbar-item-background-color);
        --w-c-button-bg-hover: var(--_snackbar-item-background-color);
        --w-c-button-bg-active: var(--_snackbar-item-background-color);
        --w-c-button-color: var(--_snackbar-item-color);
    }

    [part='icon'] {
        grid-area: icon;

        color: var(--_snackbar-item-color);
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
    }
    
    :not([action-as-block]) [part='action'] {
        grid-area: inline-action;
    }
    
    [action-as-block] [part='action'] {
        grid-area: block-action;
    }

    :not([action-as-block]) [part='close'] {
        grid-area: inline-action;
    }
    
    [action-as-block] [part='close'] {
        grid-area: block-action;
    }
`})),C,w,T=e((()=>{o(),a(),f(),g(),S(),u(),C=function(e){return e[e.Short=5e3]=`Short`,e[e.Long=2e4]=`Long`,e[e.Infinite=1/0]=`Infinite`,e}({}),w=class extends n{constructor(...e){super(...e),this.canClose=!1,this.actionAsBlock=!1,this.duration=C.Short,this.timer=null}static{this.styles=[h,x]}connectedCallback(){super.connectedCallback()}close(){this.remove()}render(){return i`
            <div part="snackbar-item">
                <div part="icon">
                    <slot name="icon"></slot>
                </div>
                <div part="message">
                    <slot></slot>
                </div>
                <div part="action">
                    <slot name="action"></slot>
                </div>
                ${this.canClose?i`
                    <div part="close">
                        <w-button variant="utilityQuiet" @click=${this.close} icon-only small>
                            <w-icon name="Close" size="small" aria-label="${s.t({id:`snackbar.aria.close`,message:`Dismiss message`,comment:`Accessibility label for the button that closes the snackbar/toast popup`})}"></w-icon>
                        </w-button>
                    </div>
                    `:r}
            </div>
        `}},p([d({type:Boolean,attribute:`can-close`})],w.prototype,`canClose`,void 0),p([d({type:Boolean,attribute:`action-as-block`})],w.prototype,`actionAsBlock`,void 0),p([d({type:Number,reflect:!0,useDefault:!0})],w.prototype,`duration`,void 0),customElements.get(`w-snackbar-item`)||customElements.define(`w-snackbar-item`,w)})),E,D=e((()=>{E=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),O,k=e((()=>{O=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),A,j=e((()=>{A=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),M,N=e((()=>{M=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),P,F=e((()=>{P=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),I,L=e((()=>{a(),I=t`
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
`})),R,z,B,V=e((()=>{a(),T(),c(),D(),k(),j(),N(),F(),g(),L(),R={canClose:!0,duration:C.Short,variant:`neutral`},l(O,M,A,E,P),z=/\s/,B=class extends n{static{this.styles=[h,I]}constructor(){super(),this.internals=this.attachInternals(),this.internals.ariaLive=`polite`,this.internals.ariaRelevant=`additions`,this.internals.role=`log`}create(e,t={}){let n={...R,...t},r=document.createElement(`w-snackbar-item`);if(r.canClose=n.canClose,r.duration=n.duration,r.innerText=e,n.variant!==`neutral`){let e=document.createElement(`w-icon`);switch(e.slot=`icon`,e.size=`large`,n.variant){case`positive`:e.name=`SuccessFilled`;break;case`warning`:e.name=`WarningFilled`;break;case`negative`:e.name=`ErrorFilled`;break;case`info`:e.name=`InfoFilled`;break}r.prepend(e)}if(n.action){let e=document.createElement(`w-button`);e.slot=`action`,e.variant=`utilityQuiet`;let{label:t,onclick:i}=n.action;e.innerText=t,e.onclick=i,z.test(t)&&(r.actionAsBlock=!0),r.append(e)}return this.prepend(r),r}render(){return i`
            <aside part="container">
                <slot></slot>
            </aside>
        `}},customElements.get(`w-snackbar`)||customElements.define(`w-snackbar`,B)})),H,U,W,G,K,q,J,Y;e((()=>{y(),a(),v(),b(),m(),V(),T(),{events:H,args:U,argTypes:W}=_(`w-snackbar`),G={title:`Overlays/Snackbar`,args:U,argTypes:W,parameters:{actions:{handles:H}}},K={render(){return i`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message can be as long as you want, but don	 go overboard. People need time to read and react to the contents before the message disappears.`,{variant:`positive`})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`warning`})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`negative`})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`info`})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`)}}">Neutral variant</w-button>
        </div>
    `}},q={render(){return i`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`positive`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`warning`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`negative`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`info`,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    `}},J={render(){return i`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`positive`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`warning`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`negative`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`info`,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    `}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
        <div class="flex gap-8">
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('Snackbar message can be as long as you want, but don\\t go overboard. People need time to read and react to the contents before the message disappears.', {
        variant: 'positive'
      });
    }}">Positive variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('Snackbar message', {
        variant: 'warning'
      });
    }}">Warning variant</w-button>

          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('Snackbar message', {
        variant: 'negative'
      });
    }}">Negative variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('Snackbar message', {
        variant: 'info'
      });
    }}">Info variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('Snackbar message');
    }}">Neutral variant</w-button>
        </div>
    \`;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
        <div class="flex gap-8">
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('Snackbar message', {
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
      snackbar.create('Snackbar message', {
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
      snackbar.create('Snackbar message', {
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
      snackbar.create('Snackbar message', {
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
      snackbar.create('Snackbar message', {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
        <div class="flex gap-8">
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('Snackbar message', {
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
      snackbar.create('Snackbar message', {
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
      snackbar.create('Snackbar message', {
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
      snackbar.create('Snackbar message', {
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
      snackbar.create('Snackbar message', {
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
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`WithAction`,`WithLongActionLabel`]}))();export{K as Default,q as WithAction,J as WithLongActionLabel,Y as __namedExportsOrder,G as default};