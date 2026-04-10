import{p as z,n as r,m as F,i as v,k as O,b as l,a as C,r as S,j as x}from"./iframe-X-4LgTk-.js";import{e as E}from"./query-NYTjQBeo.js";import{u as D}from"./utils-CCcvPjT2.js";var L=Object.defineProperty,m=(i,t,a,n)=>{for(var e=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(e=s(t,a,e)||e);return e&&L(t,a,e),e},P=`:host {
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
`,y=new Map,R='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>';function q(i,t={}){const a=t.responseParser??(n=>n.text());return y.has(i)||y.set(i,fetch(i).then(a)),y.get(i)}var p=class extends v{constructor(){super(...arguments),this.name="",this.size="medium",this.locale="en",this.svg=null}async fetchIcon(i){const t=`https://assets.finn.no/pkg/eikons/v1/${this.locale}/${i}.svg`;try{const a=await q(t);return new DOMParser().parseFromString(a,"text/html").body.querySelector("svg")}catch{return null}}firstUpdated(){this.loadIcon()}updated(i){(i.has("name")||i.has("locale"))&&this.loadIcon()}async loadIcon(){if(!this.name){this.svg=null;return}let i=await this.fetchIcon(this.name);i||(i=new DOMParser().parseFromString(R,"text/html").body.firstElementChild),this.svg=i}render(){const i={"w-icon":!0,"w-icon--s":this.size==="small","w-icon--m":this.size==="medium","w-icon--l":this.size==="large"},t=typeof this.size=="string"&&this.size.endsWith("px")?`--w-icon-size: ${this.size};`:"";return l`<div class="${O(i)}" style="${t}" part="w-${this.name.toLowerCase()}">${this.svg}</div>`}};p.styles=[z(P)];m([r({type:String,reflect:!0})],p.prototype,"name");m([r({type:String,reflect:!0})],p.prototype,"size");m([r({type:String,reflect:!0})],p.prototype,"locale");m([F()],p.prototype,"svg");customElements.get("w-icon")||customElements.define("w-icon",p);const A=C`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-b{border-bottom-width:1px}.border-b-4{border-bottom-width:4px}.inline-block{display:inline-block}.inline-grid{display:inline-grid}.hidden{display:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.-bottom-0{bottom:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.-mb-1{margin-bottom:-.1rem}.mb-32{margin-bottom:3.2rem}.resize{resize:both}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-b-4{border-bottom-width:4px}.border-transparent{border-color:#0000}.inline-block{display:inline-block}.flex{display:flex}.grid{display:grid}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.gap-8{gap:.8rem}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-text-link{color:var(--w-s-color-text-link)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.hover\\:s-text-link:hover{color:var(--w-s-color-text-link)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.hover\\:s-border-primary:hover{border-color:var(--w-s-color-border-primary)}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.p-0{padding:0}.p-16{padding:1.6rem}.pb-8{padding-bottom:.8rem}.cursor-pointer{cursor:pointer}.font-bold{font-weight:700}.w-full{width: 100%;}`;var B=Object.defineProperty,j=Object.getOwnPropertyDescriptor,I=(i,t,a,n)=>{for(var e=n>1?void 0:n?j(t,a):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&B(t,a,e),e};class g extends v{static{this.styles=[S,A,C`
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
    `]}constructor(){super(),this._internals=this.attachInternals()}set active(t){this._ownActive=t}get active(){return this._parentActive??this._ownActive??!1}connectedCallback(){super.connectedCallback(),this._internals.role="tabpanel",this.syncA11yState()}updated(){this.syncA11yState()}syncA11yState(){const t=this._internals;t.ariaLabelledBy=this._parentAriaLabelledBy||null,t.ariaHidden=this.active?"false":"true"}render(){return l`<div class="panel-content" ?data-active=${this.active}><slot></slot></div>`}}I([r({type:Boolean})],g.prototype,"active",1);I([r({attribute:!1})],g.prototype,"_parentActive",2);I([r({attribute:!1})],g.prototype,"_parentAriaLabelledBy",2);customElements.get("w-tab-panel")||customElements.define("w-tab-panel",g);var M=Object.defineProperty,W=Object.getOwnPropertyDescriptor,b=(i,t,a,n)=>{for(var e=n>1?void 0:n?W(t,a):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&M(t,a,e),e};const d={base:"grid w-full items-center font-bold gap-8 antialias p-16 pb-8 border-b-4 bg-transparent border-transparent hover:s-text-link hover:s-border-primary",inactive:"s-text-subtle",active:"s-text-link s-border-selected",icon:"mx-auto",content:"flex items-center justify-center gap-8",contentUnderlined:"content-underlined"},U="focusable appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block";class c extends v{constructor(){super(),this._handleClick=t=>{t.tab||(t.tab=this)},this.active=!1,this.over=!1,this._internals=this.attachInternals()}static{this.styles=[S,A,C`
      ::slotted([slot='icon']) {
        display: flex;
      }

      button.focusable:focus-visible {
        outline: 2px solid var(--w-s-color-border-focus, #1a73e8);
        outline-offset: var(--w-outline-offset, 1px);
      }
    `]}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}get tabIndex(){return this._parentTabIndex??0}set tabIndex(t){this._parentTabIndex=t}get _computedAriaSelected(){return this._parentAriaSelected??this._ownAriaSelected}get _effectiveAriaControls(){return this._ariaControlsAttr||this.for||""}set ariaSelected(t){const a=this._ownAriaSelected;this._ownAriaSelected=t,this._internals.ariaSelected=this._computedAriaSelected??null,this.requestUpdate("ariaSelected",a)}get ariaSelected(){return this._computedAriaSelected??"false"}get _classes(){return x([U,d.base,this.active||this.ariaSelected==="true"?d.active:d.inactive])}get _hasIcon(){return this.querySelector('[slot="icon"]')!==null}connectedCallback(){super.connectedCallback(),this._internals.role="tab",this.syncAriaControls(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}updated(t){super.updated(t);const a=t;t.has("_parentAriaSelected")&&(this._internals.ariaSelected=this._computedAriaSelected??null),a.has("_ariaControlsAttr")&&this.syncAriaControls(),t.has("for")&&this.syncAriaControls(),t.has("active")&&this.hasAttribute("active")&&(this._internals.ariaSelected=this.active?"true":"false")}syncAriaControls(){const t=this._effectiveAriaControls,n=this.closest("w-tabs")?.querySelector(`w-tab-panel#${CSS.escape(t)}`)??this.ownerDocument?.getElementById(t)??null,e=this._internals;if("ariaControlsElements"in e){e.ariaControlsElements=n?[n]:[];return}"ariaControls"in e&&(e.ariaControls=t||null)}render(){const t=this._hasIcon;return l`
      <button
        type="button"
        role="none"
        id="warp-tab-${this.for}"
        class="${this._classes}"
        tabindex="${this._parentTabIndex??0}"
        aria-controls="${this._effectiveAriaControls}"
        @click="${a=>{a.tab=this}}"
        style="height: 100%">
        ${t?this.over?l`
                <span class="${d.icon}">
                  <slot name="icon"></slot>
                </span>
                <span class="${d.contentUnderlined}"><slot></slot></span>
              `:l`
                <div class="${d.content}">
                  <slot name="icon"></slot>
                  <slot></slot>
                </div>
              `:l`<span class="${d.contentUnderlined}"><slot></slot></span>`}
      </button>
    `}}b([r({attribute:"id",reflect:!0})],c.prototype,"id",2);b([r({attribute:"for",reflect:!0})],c.prototype,"for",2);b([r({attribute:"aria-controls"})],c.prototype,"_ariaControlsAttr",2);b([r({attribute:!1})],c.prototype,"_parentTabIndex",2);b([r({attribute:!1})],c.prototype,"_parentAriaSelected",2);b([r({attribute:"aria-selected"})],c.prototype,"ariaSelected",1);b([r({type:Boolean,reflect:!0})],c.prototype,"active",2);b([r({type:Boolean,reflect:!0})],c.prototype,"over",2);customElements.get("w-tab")||customElements.define("w-tab",c);var H=Object.defineProperty,$=(i,t,a,n)=>{for(var e=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(e=s(t,a,e)||e);return e&&H(t,a,e),e};const T={wrapper:"border-b s-border mb-32",base:"inline-grid relative -mb-1",selectionIndicator:"absolute s-border-selected -bottom-0 border-b-4 transition-all"},k={cols1:"grid-cols-1",cols2:"grid-cols-2",cols3:"grid-cols-3",cols4:"grid-cols-4",cols5:"grid-cols-5",cols6:"grid-cols-6",cols7:"grid-cols-7",cols8:"grid-cols-8",cols9:"grid-cols-9"};function K(i,t=200,a=!1){let n;return((...e)=>{const o=()=>{n=null,a||i(...e)},s=a&&!n;n&&clearTimeout(n),n=setTimeout(o,t),s&&i(...e)})}class _ extends v{constructor(){super(),this._uniqueId=D(),this._activeTabFor="",this._updateSelectionIndicatorDebounced=K(this.updateSelectionIndicator.bind(this),100),this._assignSlots=()=>{Array.from(this.children).forEach(t=>{t instanceof HTMLElement&&(t.tagName==="W-TAB"&&!t.getAttribute("slot")&&t.setAttribute("slot","tabs"),t.tagName==="W-TAB-PANEL"&&!t.getAttribute("slot")&&t.setAttribute("slot","panels"))}),this.requestUpdate()},this._handleTabClick=t=>{const a=t.tab?.for;a&&a!==this._activeTabFor&&(this.active=a,this._activeTabFor=a,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())},this._handleKeyDown=t=>{if(t.altKey||t.ctrlKey||t.shiftKey||!["ArrowLeft","ArrowRight","Home","End"].includes(t.key))return;const a=Array.from(this.querySelectorAll("w-tab")),n=a.findIndex(o=>o.for===this._activeTabFor);if(n===-1)return;let e=n;switch(t.key){case"Home":e=0;break;case"End":e=a.length-1;break;case"ArrowLeft":e=Math.max(0,n-1);break;case"ArrowRight":e=Math.min(a.length-1,n+1);break}if(e!==n){t.preventDefault();const o=a[e],s=o.for;s&&(this.active=s,this._activeTabFor=s,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange(),o.focus())}},this.addEventListener("click",this._handleTabClick)}static{this.styles=[S,A]}connectedCallback(){super.connectedCallback(),this.active&&(this._activeTabFor=this.active),this._assignSlots(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{this._updateSelectionIndicatorDebounced()}),this._resizeObserver.observe(this)),window.addEventListener("resize",this._updateSelectionIndicatorDebounced)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect(),window.removeEventListener("resize",this._updateSelectionIndicatorDebounced),this.removeEventListener("click",this._handleTabClick)}firstUpdated(){this._assignSlots(),this._initializeActiveTab(),this.updateSelectionIndicator(),this.updatePanels()}updated(t){t.has("active")&&this.active!==this._activeTabFor&&(this._activeTabFor=this.active,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())}get tabs(){const t=this.shadowRoot?.querySelector('slot[name="tabs"]');return t?t.assignedElements({flatten:!0}).filter(n=>n.tagName.toLowerCase()==="w-tab"):[]}get activeTab(){return this.tabs.filter(a=>a.for===this._activeTabFor)[0]}_initializeActiveTab(){this.activeTab?this._activeTabFor=this.activeTab.getAttribute("for")||"":this.tabs.length>0&&(this._activeTabFor=this.tabs[0].getAttribute("for")||""),this._activeTabFor&&this._activeTabFor!==this.active&&(this.active=this._activeTabFor)}_notifyTabChange(){this.dispatchEvent(new CustomEvent("change",{detail:{panelId:this._activeTabFor},bubbles:!0,composed:!0}))}updateSelectionIndicator(){requestAnimationFrame(()=>{if(!this.tabList||!this.selectionIndicator||!this.activeTab)return;const t=this.tabList.getBoundingClientRect(),a=this.activeTab.getBoundingClientRect(),n=a.left-t.left,e=a.width;this.selectionIndicator.style.left=`${n}px`,this.selectionIndicator.style.width=`${e}px`})}updatePanels(){const t=Array.from(this.querySelectorAll("w-tab"));t.forEach((n,e)=>{n.id||(n.id=`w-tab-${this._uniqueId}-${e}`);const o=n.for===this._activeTabFor;n._parentAriaSelected=o?"true":"false",n._parentTabIndex=o?0:-1}),Array.from(this.querySelectorAll("w-tab-panel")).forEach(n=>{const e=t.find(o=>o.for===n.id);e&&(n._parentAriaLabelledBy=e.id),n._parentActive=n.id===this._activeTabFor})}get _tabCount(){return this.querySelectorAll("w-tab").length}get _gridClass(){const t=Math.min(this._tabCount,9);return k[`cols${t}`]||k.cols1}render(){const t=x(T.wrapper),a=x([T.base,this._gridClass]);return l`
      <div class="${t}">
        <div role="tablist" class="${a}" @keydown="${this._handleKeyDown}">
          <slot name="tabs" @slotchange="${this._assignSlots}"></slot>
          <span class="selection-indicator ${T.selectionIndicator}" data-testid="selection-indicator"></span>
        </div>
      </div>
      <slot name="panels" @slotchange="${this._assignSlots}"></slot>
      <slot @slotchange="${this._assignSlots}"></slot>
    `}}$([r({reflect:!0})],_.prototype,"active");$([E('[role="tablist"]')],_.prototype,"tabList");$([E(".selection-indicator")],_.prototype,"selectionIndicator");customElements.get("w-tabs")||customElements.define("w-tabs",_);const N={title:"Components/Tabs"},h=()=>l`
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

`,w=()=>l`
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
`,f=()=>l`
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
`,u=()=>l`
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
`;h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => html\`
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

\``,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...u.parameters?.docs?.source}}};const V=["Default","WithIcons","WithIconsOver","ManyTabs"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:h,ManyTabs:u,WithIcons:w,WithIconsOver:f,__namedExportsOrder:V,default:N},Symbol.toStringTag,{value:"Module"}));export{h as D,u as M,X as T,w as W};
