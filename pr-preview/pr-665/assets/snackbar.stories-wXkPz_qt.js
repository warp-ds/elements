import{n as e}from"./chunk-DnJy8xQt.js";import{m as t,n,r,s as i,t as a}from"./lit-3R6oe-ov.js";import{n as o,t as s}from"./dist-BZcjgT0h.js";import{n as c,o as l,r as u,t as d}from"./decorate-9CU4TY8X.js";import{t as f}from"./icon-D-_tf08h.js";import{r as p,t as m}from"./i18n-CXvrc2gG.js";import{n as h,t as g}from"./styles-Dp7yDomj.js";import{a as _,l as v,o as y}from"./iframe-Db0oW63J.js";import{t as b}from"./button-BDEHJBRZ.js";var x,S=e((()=>{a(),x=t``})),C,w,T=e((()=>{o(),a(),u(),g(),S(),c(),C=function(e){return e[e.Short=5e3]=`Short`,e[e.Long=2e4]=`Long`,e[e.Infinite=1/0]=`Infinite`,e}({}),w=class extends n{constructor(...e){super(...e),this.canClose=!1,this.duration=C.Short,this.timer=null}static{this.styles=[h,x]}connectedCallback(){super.connectedCallback()}close(){this.remove()}render(){return i`
            <div part="snackbar-item">
                <div part="icon">
                    <slot name="icon"></slot>
                </div>
                <div part="message">
                    <slot></slot>
                </div>
                <div part="inline-action">
                    <slot name="inline-action"></slot>
                </div>
                <div part="block-action">
                    <slot name="block-action"></slot>
                </div>
                ${this.canClose?i`
                    <div part="close">
                        <w-button variant="utilityQuiet" @click=${this.close}>
                            <w-icon name="Close" aria-label="${s.t({id:`snackbar.aria.close`,message:`Dismiss message`,comment:`Accessibility label for the button that closes the snackbar/toast popup`})}"></w-icon>
                        </w-button>
                    </div>
                    `:r}
            </div>
        `}},d([l({type:Boolean,attribute:`can-close`})],w.prototype,`canClose`,void 0),d([l({type:Number,reflect:!0,useDefault:!0})],w.prototype,`duration`,void 0),customElements.get(`w-snackbar-item`)||customElements.define(`w-snackbar-item`,w)})),E,D=e((()=>{E=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),O,k=e((()=>{O=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),A,j=e((()=>{A=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),M,N=e((()=>{M=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),P,F=e((()=>{P=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),I,L=e((()=>{a(),I=t`
    :host {
        position: fixed;
        pointer-events: none;
        
        --_position-top: var(--w-c-snackbar-position-top, initial);
        --_position-right: var(--w-c-snackbar-position-right, 0);
        --_position-bottom: var(--w-c-snackbar-position-bottom, 16px);
        --_position-left: var(--w-c-snackbar-position-left, 0);
        --_z-index: var(--w-c-snackbar-z-index, 50);

        bottom: var(--_position-bottom);
        left: var(--_position-left);
        right: var(--_position-right);
        top: var(--_position-top);
        
        z-index: var(--_z-index);
    }

    [part='container'] {
        display: grid;
        grid-template-rows: auto;
        justify-content: center;
        justify-items: center;
        margin-inline: auto;
        pointer-events: none;
    }

    ::slotted(*) {
        pointer-events: initial;
    }
`})),R,z,B,V=e((()=>{a(),T(),p(),D(),k(),j(),N(),F(),g(),L(),R={canClose:!0,duration:C.Short,variant:`neutral`},m(O,M,A,E,P),z=/\s/,B=class extends n{static{this.styles=[h,I]}constructor(){super(),this.internals=this.attachInternals(),this.internals.ariaLive=`polite`,this.internals.ariaRelevant=`additions`,this.internals.role=`log`}create(e,t={}){let n={...R,...t},r=document.createElement(`w-snackbar-item`);if(r.canClose=n.canClose,r.duration=n.duration,r.innerText=e,n.variant!==`neutral`){let e=document.createElement(`w-icon`);switch(e.slot=`icon`,n.variant){case`positive`:e.name=`SuccessFilled`;break;case`warning`:e.name=`WarningFilled`;break;case`negative`:e.name=`ErrorFilled`;break;case`info`:e.name=`InfoFilled`;break}r.prepend(e)}if(n.action){let e=document.createElement(`w-button`);e.variant=`utilityQuiet`;let{label:t,onclick:i}=n.action;z.test(t)?e.slot=`block-action`:e.slot=`inline-action`,e.innerText=t,e.onclick=i,r.append(e)}return this.prepend(r),r}render(){return i`
            <aside part="container">
                <slot></slot>
            </aside>
        `}},customElements.get(`w-snackbar`)||customElements.define(`w-snackbar`,B)})),H,U,W,G,K,q,J,Y;e((()=>{y(),a(),v(),b(),f(),V(),T(),{events:H,args:U,argTypes:W}=_(`w-snackbar`),G={title:`Overlays/Snackbar`,args:U,argTypes:W,parameters:{actions:{handles:H}}},K={render(){return i`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`Snackbar message`,{variant:`positive`})}}">Positive variant</w-button>
          
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
      snackbar.create('Snackbar message', {
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