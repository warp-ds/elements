import{i as e}from"./preload-helper-xPQekRTU.js";import{E as t,Ht as n,J as r,K as i,Lt as a,M as o,N as s,Rt as c,Wt as l,b as u,c as d,d as f,f as p,j as m,k as h,l as g,o as _,p as v,q as y,s as b,u as x,x as S}from"./iframe-DjETBbpl.js";import{t as C}from"./button-DfXW08Ni.js";var w,T=e((()=>{a(),w=l`
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
        --_snackbar-item-min-width: var(--w-c-snackbar-item-min-width, 328px);
        --_snackbar-item-padding: var(--w-c-snackbar-item-padding, 8px 8px 8px 12px);
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
        column-gap: 8px;
        grid-template:
            "icon message inline-action"
            "block-action block-action block-action";
        grid-template-columns: auto 1fr auto;
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
`})),E,D,O=e((()=>{a(),u(),d(),g(),T(),v(),E=function(e){return e[e.Short=4e3]=`Short`,e[e.Long=1e4]=`Long`,e[e.Infinite=12e7]=`Infinite`,e}({}),D=class extends c{constructor(...e){super(...e),this.actionPlacement=`inline`,this.duration=4e3,this.#e=!1,this.#t=4e3,this.#n=null,this.#r=null,this.#i=!1}static{this.styles=[x,w]}#e;#t;#n;#r;#i;connectedCallback(){if(super.connectedCallback(),this.duration!==12e7){let e=1e3;this.#t=this.duration-e,this.#r=setInterval(()=>{this.#i||(this.#t-=e,this.#t<=0&&this.close())},e)}}disconnectedCallback(){this.#r&&clearInterval(this.#r)}async updated(){this.root&&(this.#e||(await this.updateComplete,b(this.root,()=>{this.#e=!0})))}close(){this.#n&&this.#n.focus(),this.#e&&this.root?_(this.root,()=>{this.remove()}):this.remove()}#a(e){this.#n||(this.#i=!0,e.relatedTarget&&e.relatedTarget.focus&&(this.#n=e.relatedTarget))}#o(e){(!e.relatedTarget||!this.shadowRoot?.host.contains(e.relatedTarget))&&(this.#i=!1,this.#n=null)}#s(){this.#i=!0}#c(){this.#n||(this.#i=!1)}render(){return n`
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
        `}},p([t({attribute:`action-placement`,reflect:!0,useDefault:!0})],D.prototype,`actionPlacement`,void 0),p([t({type:Number,reflect:!0,useDefault:!0})],D.prototype,`duration`,void 0),p([S(`.animation-wrapper`)],D.prototype,`root`,void 0),customElements.get(`w-snackbar-item`)||customElements.define(`w-snackbar-item`,D)})),k,A=e((()=>{k=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),j,M=e((()=>{j=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),N,P=e((()=>{N=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),F,I=e((()=>{F=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),L,R=e((()=>{L=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),z,B=e((()=>{a(),z=l`
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
`})),V,H,U,W=e((()=>{r(),a(),O(),m(),A(),M(),P(),I(),R(),g(),B(),V={canClose:!0,duration:E.Short,variant:`neutral`},h(j,F,N,k,L),H=/\s/,U=class extends c{static{this.styles=[x,z]}constructor(){super(),this.internals=this.attachInternals(),this.internals.ariaLive=`polite`,this.internals.role=`log`,this._onKeydown=this._onKeydown.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this._onKeydown)}_onKeydown(e){if(e.key===`Escape`){let e=this.shadowRoot?.host.querySelector(`w-snackbar-item:last-of-type`);e&&e.close()}}create(e,t={}){let n={...V,...t},r=document.createElement(`w-snackbar-item`);if(n.duration&&(r.duration=n.duration),r.innerText=e,n.variant!==`neutral`){let e=document.createElement(`w-icon`);switch(e.slot=`icon`,n.variant){case`positive`:e.name=`SuccessFilled`;break;case`warning`:e.name=`WarningFilled`;break;case`negative`:e.name=`ErrorFilled`;break;case`info`:e.name=`InfoFilled`;break}r.prepend(e)}if(n.action){r.duration<E.Long&&(r.duration=E.Long);let e=document.createElement(`w-button`);e.slot=`action`,e.variant=`utilityQuiet`,e.small=!0;let{label:t,onclick:i,placement:a}=n.action;e.innerText=t,e.onclick=t=>{let n=i.call(e,t);return t.defaultPrevented||r.close(),n},a?r.actionPlacement=a:H.test(t)&&(r.actionPlacement=`block`),r.append(e)}if(r.duration>=E.Long&&(n.canClose=!0),n.canClose){let e=document.createElement(`w-button`);e.slot=`action`,e.variant=`utilityQuiet`,e.small=!0,e.iconOnly=!0,typeof n.canClose==`function`?e.onclick=t=>{let i=n.canClose.call(e,t);return t.defaultPrevented||r.close(),i}:e.onclick=r.close.bind(r);let t=document.createElement(`w-icon`);t.name=`Close`,t.size=`small`,t.ariaLabel=y.t({id:`snackbar.aria.close`,message:`Dismiss message`,comment:`Accessibility label for the button that closes the snackbar/toast popup`}),e.append(t),r.append(e)}return this.shadowRoot?.host.prepend(r),r}render(){return n`
            <aside part="container">
                <slot></slot>
            </aside>
        `}},customElements.get(`w-snackbar`)||customElements.define(`w-snackbar`,U)})),G,K,q,J,Y,X,Z,Q;e((()=>{s(),a(),i(),C(),f(),W(),O(),{events:G,args:K,argTypes:q}=o(`w-snackbar`),J={title:`Overlays/Snackbar`,args:{...K,canClose:!0,duration:void 0},argTypes:{...q,duration:{control:{type:`select`},options:[`4 seconds`,`10 seconds`,`Infinite`]}},parameters:{actions:{handles:G}}},Y={render({duration:e,canClose:t}){let r=e===`Infinite`?E.Infinite:e===`10 seconds`?E.Long:E.Short;return n`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`positive`,duration:r,canClose:t})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`,duration:r,canClose:t})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`,duration:r,canClose:t})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`,duration:r,canClose:t})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`)}}">Neutral variant</w-button>
        </div>
    `}},X={render({duration:e,canClose:t}){let r=e===`Infinite`?E.Infinite:e===`10 seconds`?E.Long:E.Short;return n`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`positive`,duration:r,canClose:t,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`,duration:r,canClose:t,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`,duration:r,canClose:t,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`,duration:r,canClose:t,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{duration:r,canClose:t,action:{label:`Action`,onclick(){alert(`Do action`)}}})}}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    `}},Z={render({duration:e,canClose:t}){let r=e===`Infinite`?E.Infinite:e===`10 seconds`?E.Long:E.Short;return n`
        <div class="flex gap-8">
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`positive`,duration:r,canClose:t,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Positive variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`,duration:r,canClose:t,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Warning variant</w-button>

          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`,duration:r,canClose:t,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Negative variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`,duration:r,canClose:t,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Info variant</w-button>
          
          <w-button @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{duration:r,canClose:t,action:{label:`Long action label`,onclick(){alert(`Do action`)}}})}}">Neutral variant</w-button>
        </div>

        <w-snackbar></w-snackbar>
    `}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render({
    duration,
    canClose
  }) {
    const durationNum = duration === 'Infinite' ? SnackbarDuration.Infinite : duration === '10 seconds' ? SnackbarDuration.Long : SnackbarDuration.Short;
    return html\`
        <div class="flex gap-8">
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'positive',
        duration: durationNum,
        canClose
      });
    }}">Positive variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'warning',
        duration: durationNum,
        canClose
      });
    }}">Warning variant</w-button>

          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'negative',
        duration: durationNum,
        canClose
      });
    }}">Negative variant</w-button>
          
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'info',
        duration: durationNum,
        canClose
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
  render({
    duration,
    canClose
  }) {
    const durationNum = duration === 'Infinite' ? SnackbarDuration.Infinite : duration === '10 seconds' ? SnackbarDuration.Long : SnackbarDuration.Short;
    return html\`
        <div class="flex gap-8">
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'positive',
        duration: durationNum,
        canClose,
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
        duration: durationNum,
        canClose,
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
        duration: durationNum,
        canClose,
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
        duration: durationNum,
        canClose,
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
        duration: durationNum,
        canClose,
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
  render({
    duration,
    canClose
  }) {
    const durationNum = duration === 'Infinite' ? SnackbarDuration.Infinite : duration === '10 seconds' ? SnackbarDuration.Long : SnackbarDuration.Short;
    return html\`
        <div class="flex gap-8">
          <w-button @click="\${() => {
      const snackbar: WarpSnackbar = document.querySelector('w-snackbar') as WarpSnackbar;
      snackbar.create('The message should be short', {
        variant: 'positive',
        duration: durationNum,
        canClose,
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
        duration: durationNum,
        canClose,
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
        duration: durationNum,
        canClose,
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
        duration: durationNum,
        canClose,
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
        duration: durationNum,
        canClose,
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