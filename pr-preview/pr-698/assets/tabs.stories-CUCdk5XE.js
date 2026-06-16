import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{D as n,E as r,Ht as i,Kt as a,Lt as o,O as s,Rt as c,Wt as l,b as u,d,f,l as p,p as m,u as h,x as g}from"./iframe-D6iGWWZm.js";import{n as _,t as v}from"./utils-D431BAPN.js";var y,b=t((()=>{o(),y=a(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-b{border-bottom-width:1px}.border-b-4{border-bottom-width:4px}.inline-grid{display:inline-grid}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.-bottom-0{bottom:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.-mb-1{margin-bottom:-.1rem}.mb-32{margin-bottom:3.2rem}.resize{resize:both}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`)})),x,S=t((()=>{o(),u(),p(),b(),m(),x=class extends c{static{this.styles=[h,y,l`
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
    `]}constructor(){super(),this._internals=this.attachInternals()}set active(e){this._ownActive=e}get active(){return this._parentActive??this._ownActive??!1}connectedCallback(){super.connectedCallback(),this._internals.role=`tabpanel`,this.syncA11yState()}updated(){this.syncA11yState()}syncA11yState(){let e=this._internals;e.ariaLabelledBy=this._parentAriaLabelledBy||null,e.ariaHidden=this.active?`false`:`true`}render(){return i`<div class="panel-content" ?data-active=${this.active}><slot></slot></div>`}},f([r({attribute:`id`,reflect:!0})],x.prototype,`id`,void 0),f([r({type:Boolean})],x.prototype,`active`,null),f([r({attribute:!1})],x.prototype,`_parentActive`,void 0),f([r({attribute:!1})],x.prototype,`_parentAriaLabelledBy`,void 0),customElements.get(`w-tab-panel`)||customElements.define(`w-tab-panel`,x)})),C,w,T,E=t((()=>{n(),o(),u(),p(),b(),m(),C={base:`grid w-full items-center font-bold gap-8 antialias p-16 pb-8 border-b-4 bg-transparent border-transparent hover:s-text-link hover:s-border-primary`,inactive:`s-text-subtle`,active:`s-text-link s-border-selected`,icon:`mx-auto`,content:`flex items-center justify-center gap-8`,contentUnderlined:`content-underlined`},w=`focusable appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block`,T=class extends c{static{this.styles=[h,y,l`
      ::slotted([slot='icon']) {
        display: flex;
      }

      button.focusable:focus-visible {
        outline: 2px solid var(--w-s-color-border-focus, #1a73e8);
        outline-offset: var(--w-outline-offset, 1px);
      }
    `]}static{this.shadowRootOptions={...c.shadowRootOptions,delegatesFocus:!0}}constructor(){super(),this._handleClick=e=>{e.tab||=this},this.active=!1,this.over=!1,this._internals=this.attachInternals()}get tabIndex(){return this._parentTabIndex??0}set tabIndex(e){this._parentTabIndex=e}get _computedAriaSelected(){return this._parentAriaSelected??this._ownAriaSelected}get _effectiveAriaControls(){return this._ariaControlsAttr||this.for||``}set ariaSelected(e){let t=this._ownAriaSelected;this._ownAriaSelected=e,this._internals.ariaSelected=this._computedAriaSelected??null,this.requestUpdate(`ariaSelected`,t)}get ariaSelected(){return this._computedAriaSelected??`false`}get _classes(){return s([w,C.base,this.active||this.ariaSelected===`true`?C.active:C.inactive])}get _hasIcon(){return this.querySelector(`[slot="icon"]`)!==null}connectedCallback(){super.connectedCallback(),this._internals.role=`tab`,this.syncAriaControls(),this.addEventListener(`click`,this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._handleClick)}updated(e){super.updated(e);let t=e;e.has(`_parentAriaSelected`)&&(this._internals.ariaSelected=this._computedAriaSelected??null),t.has(`_ariaControlsAttr`)&&this.syncAriaControls(),e.has(`for`)&&this.syncAriaControls(),e.has(`active`)&&this.hasAttribute(`active`)&&(this._internals.ariaSelected=this.active?`true`:`false`)}syncAriaControls(){let e=this._effectiveAriaControls,t=this.closest(`w-tabs`)?.querySelector(`w-tab-panel#${CSS.escape(e)}`)??this.ownerDocument?.getElementById(e)??null,n=this._internals;if(`ariaControlsElements`in n){n.ariaControlsElements=t?[t]:[];return}`ariaControls`in n&&(n.ariaControls=e||null)}render(){let e=this._hasIcon;return i`
      <button
        type="button"
        role="none"
        id="warp-tab-${this.for}"
        class="${this._classes}"
        tabindex="${this._parentTabIndex??0}"
        aria-controls="${this._effectiveAriaControls}"
        @click="${e=>{e.tab=this}}"
        style="height: 100%">
        ${e?this.over?i`
                <span class="${C.icon}">
                  <slot name="icon"></slot>
                </span>
                <span class="${C.contentUnderlined}"><slot></slot></span>
              `:i`
                <div class="${C.content}">
                  <slot name="icon"></slot>
                  <slot></slot>
                </div>
              `:i`<span class="${C.contentUnderlined}"><slot></slot></span>`}
      </button>
    `}},f([r({attribute:`for`,reflect:!0})],T.prototype,`for`,void 0),f([r({attribute:`aria-controls`})],T.prototype,`_ariaControlsAttr`,void 0),f([r({attribute:!1})],T.prototype,`_parentTabIndex`,void 0),f([r({attribute:!1})],T.prototype,`_parentAriaSelected`,void 0),f([r({attribute:`aria-selected`})],T.prototype,`ariaSelected`,null),f([r({type:Boolean,reflect:!0})],T.prototype,`active`,void 0),f([r({type:Boolean,reflect:!0})],T.prototype,`over`,void 0),customElements.get(`w-tab`)||customElements.define(`w-tab`,T)}));function D(e,t=200,n=!1){let r;return((...i)=>{let a=()=>{r=null,n||e(...i)},o=n&&!r;r&&clearTimeout(r),r=setTimeout(a,t),o&&e(...i)})}var O,k,A,j=t((()=>{n(),o(),u(),p(),v(),b(),m(),O={wrapper:`border-b s-border mb-32`,base:`inline-grid relative -mb-1`,selectionIndicator:`absolute s-border-selected -bottom-0 border-b-4 transition-all`},k={cols1:`grid-cols-1`,cols2:`grid-cols-2`,cols3:`grid-cols-3`,cols4:`grid-cols-4`,cols5:`grid-cols-5`,cols6:`grid-cols-6`,cols7:`grid-cols-7`,cols8:`grid-cols-8`,cols9:`grid-cols-9`},A=class extends c{static{this.styles=[h,y]}constructor(){super(),this._uniqueId=_(),this._activeTabFor=``,this._updateSelectionIndicatorDebounced=D(this.updateSelectionIndicator.bind(this),100),this._assignSlots=()=>{Array.from(this.children).forEach(e=>{e instanceof HTMLElement&&(e.tagName===`W-TAB`&&!e.getAttribute(`slot`)&&e.setAttribute(`slot`,`tabs`),e.tagName===`W-TAB-PANEL`&&!e.getAttribute(`slot`)&&e.setAttribute(`slot`,`panels`))}),this.requestUpdate()},this._handleTabClick=e=>{let t=e.tab?.for;t&&t!==this._activeTabFor&&(this.active=t,this._activeTabFor=t,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())},this._handleKeyDown=e=>{if(e.altKey||e.ctrlKey||e.shiftKey||![`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(e.key))return;let t=Array.from(this.querySelectorAll(`w-tab`)),n=t.findIndex(e=>e.for===this._activeTabFor);if(n===-1)return;let r=n;switch(e.key){case`Home`:r=0;break;case`End`:r=t.length-1;break;case`ArrowLeft`:r=Math.max(0,n-1);break;case`ArrowRight`:r=Math.min(t.length-1,n+1);break}if(r!==n){e.preventDefault();let n=t[r],i=n.for;i&&(this.active=i,this._activeTabFor=i,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange(),n.focus())}},this.addEventListener(`click`,this._handleTabClick)}connectedCallback(){super.connectedCallback(),this.active&&(this._activeTabFor=this.active),this._assignSlots(),typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(()=>{this._updateSelectionIndicatorDebounced()}),this._resizeObserver.observe(this)),window.addEventListener(`resize`,this._updateSelectionIndicatorDebounced)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect(),window.removeEventListener(`resize`,this._updateSelectionIndicatorDebounced),this.removeEventListener(`click`,this._handleTabClick)}firstUpdated(){this._assignSlots(),this._initializeActiveTab(),this.updateSelectionIndicator(),this.updatePanels()}updated(e){e.has(`active`)&&this.active!==this._activeTabFor&&(this._activeTabFor=this.active,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())}get tabs(){let e=this.shadowRoot?.querySelector(`slot[name="tabs"]`);return e?e.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`w-tab`):[]}get activeTab(){return this.tabs.filter(e=>e.for===this._activeTabFor)[0]}_initializeActiveTab(){this.activeTab?this._activeTabFor=this.activeTab.getAttribute(`for`)||``:this.tabs.length>0&&(this._activeTabFor=this.tabs[0].getAttribute(`for`)||``),this._activeTabFor&&this._activeTabFor!==this.active&&(this.active=this._activeTabFor)}_notifyTabChange(){this.dispatchEvent(new CustomEvent(`change`,{detail:{panelId:this._activeTabFor},bubbles:!0,composed:!0}))}updateSelectionIndicator(){requestAnimationFrame(()=>{if(!this.tabList||!this.selectionIndicator||!this.activeTab)return;let e=this.tabList.getBoundingClientRect(),t=this.activeTab.getBoundingClientRect(),n=t.left-e.left,r=t.width;this.selectionIndicator.style.left=`${n}px`,this.selectionIndicator.style.width=`${r}px`})}updatePanels(){let e=Array.from(this.querySelectorAll(`w-tab`));e.forEach((e,t)=>{e.id||=`w-tab-${this._uniqueId}-${t}`;let n=e.for===this._activeTabFor;e._parentAriaSelected=n?`true`:`false`,e._parentTabIndex=n?0:-1}),Array.from(this.querySelectorAll(`w-tab-panel`)).forEach(t=>{let n=e.find(e=>e.for===t.id);n&&(t._parentAriaLabelledBy=n.id),t._parentActive=t.id===this._activeTabFor})}get _tabCount(){return this.querySelectorAll(`w-tab`).length}get _gridClass(){return k[`cols${Math.min(this._tabCount,9)}`]||k.cols1}render(){return i`
      <div class="${s(O.wrapper)}">
        <div role="tablist" class="${s([O.base,this._gridClass])}" @keydown="${this._handleKeyDown}">
          <slot name="tabs" @slotchange="${this._assignSlots}"></slot>
          <span class="selection-indicator ${O.selectionIndicator}" data-testid="selection-indicator"></span>
        </div>
      </div>
      <slot name="panels" @slotchange="${this._assignSlots}"></slot>
      <slot @slotchange="${this._assignSlots}"></slot>
    `}},f([r({reflect:!0})],A.prototype,`active`,void 0),f([g(`[role="tablist"]`)],A.prototype,`tabList`,void 0),f([g(`.selection-indicator`)],A.prototype,`selectionIndicator`,void 0),customElements.get(`w-tabs`)||customElements.define(`w-tabs`,A)})),M=e({Default:()=>P,ManyTabs:()=>L,WithIcons:()=>F,WithIconsOver:()=>I,__namedExportsOrder:()=>R,default:()=>N}),N,P,F,I,L,R,z=t((()=>{o(),d(),S(),E(),j(),N={title:`Components/Tabs`},P=()=>i`
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

`,F=()=>i`
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
`,I=()=>i`
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
`,L=()=>i`
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
`,P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => html\`
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

\``,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...L.parameters?.docs?.source}}},R=[`Default`,`WithIcons`,`WithIconsOver`,`ManyTabs`]}));z();export{P as Default,L as ManyTabs,F as WithIcons,I as WithIconsOver,R as __namedExportsOrder,N as default,M as n,z as t};