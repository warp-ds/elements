import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ft as n,Mt as r,Ot as i,Pt as a,T as o,_ as s,a as c,b as l,d as u,f as d,kt as f,m as p,o as m,p as h,v as g,w as _,y as v}from"./iframe-CEP5nfbG.js";import{n as y,t as b}from"./utils-CpxeLzXD.js";function x(e,t={}){let n=t.responseParser??(e=>e.text());return E.has(e)||E.set(e,fetch(e).then(n)),E.get(e)}var S,C,w,T,E,D,O,k=e((()=>{i(),s(),h(),S=Object.defineProperty,C=Object.getOwnPropertyDescriptor,w=(e,t,n,r)=>{for(var i=r>1?void 0:r?C(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&S(t,n,i),i},T=`:host {
  display: inline-block;
}
.w-icon {
  --_w-icon-size: var(--w-icon-size, 24px);
  height: var(--_w-icon-size);
  width: var(--_w-icon-size);
  display: flex;
}
.w-icon svg {
  pointer-events: none;
  height: var(--_w-icon-size);
  width: var(--_w-icon-size);
}
.w-icon--s {
  --w-icon-size: 16px;
}
.w-icon--m {
  --w-icon-size: 24px;
}
.w-icon--l {
  --w-icon-size: 32px;
}
`,E=new Map,D=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>`,O=class extends f{constructor(){super(...arguments),this.name=``,this.size=`medium`,this.locale=`en`,this.svg=null}async fetchIcon(e){let t=`https://assets.finn.no/pkg/eikons/v1/${this.locale}/${e}.svg`;try{let e=await x(t);return new DOMParser().parseFromString(e,`text/html`).body.querySelector(`svg`)}catch{return null}}firstUpdated(){this.loadIcon()}updated(e){(e.has(`name`)||e.has(`locale`))&&this.loadIcon()}async loadIcon(){if(!this.name){this.svg=null;return}let e=await this.fetchIcon(this.name);e||=new DOMParser().parseFromString(D,`text/html`).body.firstElementChild,this.svg=e}render(){let e={"w-icon":!0,"w-icon--s":this.size===`small`,"w-icon--m":this.size===`medium`,"w-icon--l":this.size===`large`},t=typeof this.size==`string`&&this.size.endsWith(`px`)?`--w-icon-size: ${this.size};`:``;return r`<div class="${p(e)}" style="${t}" part="w-${this.name.toLowerCase()}">${this.svg}</div>`}},O.styles=[n(T)],w([l({type:String,reflect:!0})],O.prototype,`name`,2),w([l({type:String,reflect:!0})],O.prototype,`size`,2),w([l({type:String,reflect:!0})],O.prototype,`locale`,2),w([v()],O.prototype,`svg`,2),customElements.get(`w-icon`)||customElements.define(`w-icon`,O)})),A,j=e((()=>{i(),A=a`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-b{border-bottom-width:1px}.border-b-4{border-bottom-width:4px}.inline-block{display:inline-block}.inline-grid{display:inline-grid}.hidden{display:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.-bottom-0{bottom:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.-mb-1{margin-bottom:-.1rem}.mb-32{margin-bottom:3.2rem}.resize{resize:both}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-b-4{border-bottom-width:4px}.border-transparent{border-color:#0000}.inline-block{display:inline-block}.flex{display:flex}.grid{display:grid}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.gap-8{gap:.8rem}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-text-link{color:var(--w-s-color-text-link)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.hover\\:s-text-link:hover{color:var(--w-s-color-text-link)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.hover\\:s-border-primary:hover{border-color:var(--w-s-color-border-primary)}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.p-0{padding:0}.p-16{padding:1.6rem}.pb-8{padding-bottom:.8rem}.cursor-pointer{cursor:pointer}.font-bold{font-weight:700}.w-full{width: 100%;}`})),M,N=e((()=>{i(),s(),c(),j(),d(),M=class extends f{static{this.styles=[m,A,a`
      :host {
        display: block;
      }
      /* Stories and legacy markup may set [hidden] on inactive panels.
       * Visibility is now controlled internally via active state, so neutralize it. */
      :host([hidden]) {
        display: block !important;
      }
      .panel-content {
        display: none;
      }
      .panel-content[data-active] {
        display: block;
      }
    `]}constructor(){super(),this._internals=this.attachInternals()}set active(e){this._ownActive=e}get active(){return this._parentActive??this._ownActive??!1}connectedCallback(){super.connectedCallback(),this._internals.role=`tabpanel`,this.syncA11yState()}updated(){this.syncA11yState()}syncA11yState(){let e=this._internals;e.ariaLabelledBy=this._parentAriaLabelledBy||null,e.ariaHidden=this.active?`false`:`true`}render(){return r`<div class="panel-content" ?data-active=${this.active}><slot></slot></div>`}},u([l({attribute:`id`,reflect:!0})],M.prototype,`id`,void 0),u([l({type:Boolean})],M.prototype,`active`,null),u([l({attribute:!1})],M.prototype,`_parentActive`,void 0),u([l({attribute:!1})],M.prototype,`_parentAriaLabelledBy`,void 0),customElements.get(`w-tab-panel`)||customElements.define(`w-tab-panel`,M)})),P,F,I,L=e((()=>{_(),i(),s(),c(),j(),d(),P={base:`grid w-full items-center font-bold gap-8 antialias p-16 pb-8 border-b-4 bg-transparent border-transparent hover:s-text-link hover:s-border-primary`,inactive:`s-text-subtle`,active:`s-text-link s-border-selected`,icon:`mx-auto`,content:`flex items-center justify-center gap-8`,contentUnderlined:`content-underlined`},F=`focusable appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block`,I=class extends f{static{this.styles=[m,A,a`
      ::slotted([slot='icon']) {
        display: flex;
      }

      button.focusable:focus-visible {
        outline: 2px solid var(--w-s-color-border-focus, #1a73e8);
        outline-offset: var(--w-outline-offset, 1px);
      }
    `]}static{this.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0}}constructor(){super(),this._handleClick=e=>{e.tab||=this},this.active=!1,this.over=!1,this._internals=this.attachInternals()}get tabIndex(){return this._parentTabIndex??0}set tabIndex(e){this._parentTabIndex=e}get _computedAriaSelected(){return this._parentAriaSelected??this._ownAriaSelected}get _effectiveAriaControls(){return this._ariaControlsAttr||this.for||``}set ariaSelected(e){let t=this._ownAriaSelected;this._ownAriaSelected=e,this._internals.ariaSelected=this._computedAriaSelected??null,this.requestUpdate(`ariaSelected`,t)}get ariaSelected(){return this._computedAriaSelected??`false`}get _classes(){return o([F,P.base,this.active||this.ariaSelected===`true`?P.active:P.inactive])}get _hasIcon(){return this.querySelector(`[slot="icon"]`)!==null}connectedCallback(){super.connectedCallback(),this._internals.role=`tab`,this.syncAriaControls(),this.addEventListener(`click`,this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._handleClick)}updated(e){super.updated(e);let t=e;e.has(`_parentAriaSelected`)&&(this._internals.ariaSelected=this._computedAriaSelected??null),t.has(`_ariaControlsAttr`)&&this.syncAriaControls(),e.has(`for`)&&this.syncAriaControls(),e.has(`active`)&&this.hasAttribute(`active`)&&(this._internals.ariaSelected=this.active?`true`:`false`)}syncAriaControls(){let e=this._effectiveAriaControls,t=this.closest(`w-tabs`)?.querySelector(`w-tab-panel#${CSS.escape(e)}`)??this.ownerDocument?.getElementById(e)??null,n=this._internals;if(`ariaControlsElements`in n){n.ariaControlsElements=t?[t]:[];return}`ariaControls`in n&&(n.ariaControls=e||null)}render(){let e=this._hasIcon;return r`
      <button
        type="button"
        role="none"
        id="warp-tab-${this.for}"
        class="${this._classes}"
        tabindex="${this._parentTabIndex??0}"
        aria-controls="${this._effectiveAriaControls}"
        @click="${e=>{e.tab=this}}"
        style="height: 100%">
        ${e?this.over?r`
                <span class="${P.icon}">
                  <slot name="icon"></slot>
                </span>
                <span class="${P.contentUnderlined}"><slot></slot></span>
              `:r`
                <div class="${P.content}">
                  <slot name="icon"></slot>
                  <slot></slot>
                </div>
              `:r`<span class="${P.contentUnderlined}"><slot></slot></span>`}
      </button>
    `}},u([l({attribute:`for`,reflect:!0})],I.prototype,`for`,void 0),u([l({attribute:`aria-controls`})],I.prototype,`_ariaControlsAttr`,void 0),u([l({attribute:!1})],I.prototype,`_parentTabIndex`,void 0),u([l({attribute:!1})],I.prototype,`_parentAriaSelected`,void 0),u([l({attribute:`aria-selected`})],I.prototype,`ariaSelected`,null),u([l({type:Boolean,reflect:!0})],I.prototype,`active`,void 0),u([l({type:Boolean,reflect:!0})],I.prototype,`over`,void 0),customElements.get(`w-tab`)||customElements.define(`w-tab`,I)}));function R(e,t=200,n=!1){let r;return((...i)=>{let a=()=>{r=null,n||e(...i)},o=n&&!r;r&&clearTimeout(r),r=setTimeout(a,t),o&&e(...i)})}var z,B,V,H=e((()=>{_(),i(),s(),c(),b(),j(),d(),z={wrapper:`border-b s-border mb-32`,base:`inline-grid relative -mb-1`,selectionIndicator:`absolute s-border-selected -bottom-0 border-b-4 transition-all`},B={cols1:`grid-cols-1`,cols2:`grid-cols-2`,cols3:`grid-cols-3`,cols4:`grid-cols-4`,cols5:`grid-cols-5`,cols6:`grid-cols-6`,cols7:`grid-cols-7`,cols8:`grid-cols-8`,cols9:`grid-cols-9`},V=class extends f{static{this.styles=[m,A]}constructor(){super(),this._uniqueId=y(),this._activeTabFor=``,this._updateSelectionIndicatorDebounced=R(this.updateSelectionIndicator.bind(this),100),this._assignSlots=()=>{Array.from(this.children).forEach(e=>{e instanceof HTMLElement&&(e.tagName===`W-TAB`&&!e.getAttribute(`slot`)&&e.setAttribute(`slot`,`tabs`),e.tagName===`W-TAB-PANEL`&&!e.getAttribute(`slot`)&&e.setAttribute(`slot`,`panels`))}),this.requestUpdate()},this._handleTabClick=e=>{let t=e.tab?.for;t&&t!==this._activeTabFor&&(this.active=t,this._activeTabFor=t,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())},this._handleKeyDown=e=>{if(e.altKey||e.ctrlKey||e.shiftKey||![`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(e.key))return;let t=Array.from(this.querySelectorAll(`w-tab`)),n=t.findIndex(e=>e.for===this._activeTabFor);if(n===-1)return;let r=n;switch(e.key){case`Home`:r=0;break;case`End`:r=t.length-1;break;case`ArrowLeft`:r=Math.max(0,n-1);break;case`ArrowRight`:r=Math.min(t.length-1,n+1);break}if(r!==n){e.preventDefault();let n=t[r],i=n.for;i&&(this.active=i,this._activeTabFor=i,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange(),n.focus())}},this.addEventListener(`click`,this._handleTabClick)}connectedCallback(){super.connectedCallback(),this.active&&(this._activeTabFor=this.active),this._assignSlots(),typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(()=>{this._updateSelectionIndicatorDebounced()}),this._resizeObserver.observe(this)),window.addEventListener(`resize`,this._updateSelectionIndicatorDebounced)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect(),window.removeEventListener(`resize`,this._updateSelectionIndicatorDebounced),this.removeEventListener(`click`,this._handleTabClick)}firstUpdated(){this._assignSlots(),this._initializeActiveTab(),this.updateSelectionIndicator(),this.updatePanels()}updated(e){e.has(`active`)&&this.active!==this._activeTabFor&&(this._activeTabFor=this.active,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())}get tabs(){let e=this.shadowRoot?.querySelector(`slot[name="tabs"]`);return e?e.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`w-tab`):[]}get activeTab(){return this.tabs.filter(e=>e.for===this._activeTabFor)[0]}_initializeActiveTab(){this.activeTab?this._activeTabFor=this.activeTab.getAttribute(`for`)||``:this.tabs.length>0&&(this._activeTabFor=this.tabs[0].getAttribute(`for`)||``),this._activeTabFor&&this._activeTabFor!==this.active&&(this.active=this._activeTabFor)}_notifyTabChange(){this.dispatchEvent(new CustomEvent(`change`,{detail:{panelId:this._activeTabFor},bubbles:!0,composed:!0}))}updateSelectionIndicator(){requestAnimationFrame(()=>{if(!this.tabList||!this.selectionIndicator||!this.activeTab)return;let e=this.tabList.getBoundingClientRect(),t=this.activeTab.getBoundingClientRect(),n=t.left-e.left,r=t.width;this.selectionIndicator.style.left=`${n}px`,this.selectionIndicator.style.width=`${r}px`})}updatePanels(){let e=Array.from(this.querySelectorAll(`w-tab`));e.forEach((e,t)=>{e.id||=`w-tab-${this._uniqueId}-${t}`;let n=e.for===this._activeTabFor;e._parentAriaSelected=n?`true`:`false`,e._parentTabIndex=n?0:-1}),Array.from(this.querySelectorAll(`w-tab-panel`)).forEach(t=>{let n=e.find(e=>e.for===t.id);n&&(t._parentAriaLabelledBy=n.id),t._parentActive=t.id===this._activeTabFor})}get _tabCount(){return this.querySelectorAll(`w-tab`).length}get _gridClass(){return B[`cols${Math.min(this._tabCount,9)}`]||B.cols1}render(){return r`
      <div class="${o(z.wrapper)}">
        <div role="tablist" class="${o([z.base,this._gridClass])}" @keydown="${this._handleKeyDown}">
          <slot name="tabs" @slotchange="${this._assignSlots}"></slot>
          <span class="selection-indicator ${z.selectionIndicator}" data-testid="selection-indicator"></span>
        </div>
      </div>
      <slot name="panels" @slotchange="${this._assignSlots}"></slot>
      <slot @slotchange="${this._assignSlots}"></slot>
    `}},u([l({reflect:!0})],V.prototype,`active`,void 0),u([g(`[role="tablist"]`)],V.prototype,`tabList`,void 0),u([g(`.selection-indicator`)],V.prototype,`selectionIndicator`,void 0),customElements.get(`w-tabs`)||customElements.define(`w-tabs`,V)})),U=t({Default:()=>G,ManyTabs:()=>J,WithIcons:()=>K,WithIconsOver:()=>q,__namedExportsOrder:()=>Y,default:()=>W}),W,G,K,q,J,Y,X=e((()=>{k(),i(),N(),L(),H(),W={title:`Components/Tabs`},G=()=>r`
  <w-tabs active="tab2">

    <w-tab for="tab1">First Tab</w-tab>
    <w-tab-panel id="tab1">
      <p>Content for the first tab. This panel is visible when the first tab is active.</p>
    </w-tab-panel>

    <w-tab for="tab2">Second Tab</w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for the second tab. This panel is visible when the second tab is active.</p>
    </w-tab-panel>

    <w-tab for="tab3">Third Tab</w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for the third tab. This panel is visible when the third tab is active.</p>
    </w-tab-panel>

  </w-tabs>

`,K=()=>r`
  <w-tabs active="info">
    <w-tab for="info">
      <w-icon name="Info" slot="icon"></w-icon>
      Info
    </w-tab>
    <w-tab-panel id="info">
      <p>Info content.</p>
    </w-tab-panel>

    <w-tab for="done">
      <w-icon name="Success" slot="icon"></w-icon>
      Done
    </w-tab>
    <w-tab-panel id="done" hidden>
      <p>Done content.</p>
    </w-tab-panel>

    <w-tab for="error">
      <w-icon name="Error" slot="icon"></w-icon>
      Failures
    </w-tab>
    <w-tab-panel id="error" hidden>
      <p>Error content.</p>
    </w-tab-panel>
  </w-tabs>
`,q=()=>r`
  <w-tabs active="info">
    <w-tab for="info" over>
      <w-icon name="Info" slot="icon"></w-icon>
      Info
    </w-tab>
    <w-tab-panel id="info">
      <p>Info content.</p>
    </w-tab-panel>

    <w-tab for="done" over>
      <w-icon name="Success" slot="icon"></w-icon>
      Done
    </w-tab>
    <w-tab-panel id="done" hidden>
      <p>Done content.</p>
    </w-tab-panel>

    <w-tab for="error" over>
      <w-icon name="Error" slot="icon"></w-icon>
      Failures
    </w-tab>
    <w-tab-panel id="error" hidden>
      <p>Error content.</p>
    </w-tab-panel>
  </w-tabs>
`,J=()=>r`
  <w-tabs active="tab1">
    <w-tab for="tab1">Tab 1</w-tab>
    <w-tab-panel id="tab1">
      <p>Content for tab 1</p>
    </w-tab-panel>

    <w-tab for="tab2">Tab 2</w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for tab 2</p>
    </w-tab-panel>

    <w-tab for="tab3">Tab 3</w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for tab 3</p>
    </w-tab-panel>

    <w-tab for="tab4">Tab 4</w-tab>
    <w-tab-panel id="tab4" hidden>
      <p>Content for tab 4</p>
    </w-tab-panel>

    <w-tab for="tab5">Tab 5</w-tab>
    <w-tab-panel id="tab5" hidden>
      <p>Content for tab 5</p>
    </w-tab-panel>

    <w-tab for="tab6">Tab 6</w-tab>
    <w-tab-panel id="tab6" hidden>
      <p>Content for tab 6</p>
    </w-tab-panel>
  </w-tabs>
`,G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="tab2">

    <w-tab for="tab1">First Tab</w-tab>
    <w-tab-panel id="tab1">
      <p>Content for the first tab. This panel is visible when the first tab is active.</p>
    </w-tab-panel>

    <w-tab for="tab2">Second Tab</w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for the second tab. This panel is visible when the second tab is active.</p>
    </w-tab-panel>

    <w-tab for="tab3">Third Tab</w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for the third tab. This panel is visible when the third tab is active.</p>
    </w-tab-panel>

  </w-tabs>

\``,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="info">
    <w-tab for="info">
      <w-icon name="Info" slot="icon"></w-icon>
      Info
    </w-tab>
    <w-tab-panel id="info">
      <p>Info content.</p>
    </w-tab-panel>

    <w-tab for="done">
      <w-icon name="Success" slot="icon"></w-icon>
      Done
    </w-tab>
    <w-tab-panel id="done" hidden>
      <p>Done content.</p>
    </w-tab-panel>

    <w-tab for="error">
      <w-icon name="Error" slot="icon"></w-icon>
      Failures
    </w-tab>
    <w-tab-panel id="error" hidden>
      <p>Error content.</p>
    </w-tab-panel>
  </w-tabs>
\``,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="info">
    <w-tab for="info" over>
      <w-icon name="Info" slot="icon"></w-icon>
      Info
    </w-tab>
    <w-tab-panel id="info">
      <p>Info content.</p>
    </w-tab-panel>

    <w-tab for="done" over>
      <w-icon name="Success" slot="icon"></w-icon>
      Done
    </w-tab>
    <w-tab-panel id="done" hidden>
      <p>Done content.</p>
    </w-tab-panel>

    <w-tab for="error" over>
      <w-icon name="Error" slot="icon"></w-icon>
      Failures
    </w-tab>
    <w-tab-panel id="error" hidden>
      <p>Error content.</p>
    </w-tab-panel>
  </w-tabs>
\``,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="tab1">
    <w-tab for="tab1">Tab 1</w-tab>
    <w-tab-panel id="tab1">
      <p>Content for tab 1</p>
    </w-tab-panel>

    <w-tab for="tab2">Tab 2</w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for tab 2</p>
    </w-tab-panel>

    <w-tab for="tab3">Tab 3</w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for tab 3</p>
    </w-tab-panel>

    <w-tab for="tab4">Tab 4</w-tab>
    <w-tab-panel id="tab4" hidden>
      <p>Content for tab 4</p>
    </w-tab-panel>

    <w-tab for="tab5">Tab 5</w-tab>
    <w-tab-panel id="tab5" hidden>
      <p>Content for tab 5</p>
    </w-tab-panel>

    <w-tab for="tab6">Tab 6</w-tab>
    <w-tab-panel id="tab6" hidden>
      <p>Content for tab 6</p>
    </w-tab-panel>
  </w-tabs>
\``,...J.parameters?.docs?.source}}},Y=[`Default`,`WithIcons`,`WithIconsOver`,`ManyTabs`]}));X();export{G as Default,J as ManyTabs,K as WithIcons,q as WithIconsOver,Y as __namedExportsOrder,W as default,U as n,X as t};