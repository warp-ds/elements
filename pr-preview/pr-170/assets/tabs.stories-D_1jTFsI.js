import{a as $,i as g,r as T,j as v,x as o,n as l}from"./iframe-BrAyf7-R.js";import{e as x}from"./query-NYTjQBeo.js";import"./preload-helper-Ct5FWWRu.js";const y=$`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-b{border-bottom-width:1px}.border-b-4{border-bottom-width:4px}.inline-block{display:inline-block}.inline-grid{display:inline-grid}.hidden{display:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.-bottom-0{bottom:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.-mb-1{margin-bottom:-.1rem}.mb-32{margin-bottom:3.2rem}.resize{resize:both}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-b-4{border-bottom-width:4px}.border-transparent{border-color:#0000}.inline-block{display:inline-block}.flex{display:flex}.grid{display:grid}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.gap-8{gap:.8rem}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-text-link{color:var(--w-s-color-text-link)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.hover\\:s-text-link:hover{color:var(--w-s-color-text-link)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.hover\\:s-border-primary:hover{border-color:var(--w-s-color-border-primary)}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.p-0{padding:0}.p-16{padding:1.6rem}.pb-8{padding-bottom:.8rem}.cursor-pointer{cursor:pointer}.font-bold{font-weight:700}.w-full{width: 100%;}`;var A=Object.defineProperty,d=(s,t,a,n)=>{for(var e=void 0,i=s.length-1,r;i>=0;i--)(r=s[i])&&(e=r(t,a,e)||e);return e&&A(t,a,e),e};const b={base:"grid w-full items-center font-bold gap-8 focusable antialias p-16 pb-8 border-b-4 bg-transparent border-transparent hover:s-text-link hover:s-border-primary",inactive:"s-text-subtle",active:"s-text-link s-border-selected",icon:"mx-auto",content:"flex items-center justify-center gap-8",contentUnderlined:"content-underlined"},E="focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block";class c extends g{constructor(){super(...arguments),this.label="",this.active=!1,this.over=!1,this.tabClass="",this._handleClick=t=>{this.dispatchEvent(new CustomEvent("tab-click",{detail:{name:this.name},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("click",{detail:{name:this.name,originalEvent:t},bubbles:!0,composed:!0}))}}static{this.styles=[T,y]}get _classes(){return v(this.tabClass,[E,b.base,this.active?b.active:b.inactive])}get _hasChildren(){return this.querySelector('[slot="icon"]')!==null||this.innerHTML.trim()!==this.label}render(){const t=this._hasChildren;return o`
      <button
        type="button"
        role="tab"
        aria-selected="${this.active?"true":"false"}"
        aria-controls="${this.active?`warp-tabpanel-${this.name}`:""}"
        id="warp-tab-${this.name}"
        tabindex="${this.active?"0":"-1"}"
        class="${this._classes}"
        @click="${this._handleClick}">
        ${t?this.over?o`
                <span class="${b.icon}">
                  <slot name="icon"></slot>
                </span>
                <span class="${b.contentUnderlined}">${this.label}</span>
              `:o`
                <div class="${b.content}">
                  <slot name="icon"></slot>
                  ${this.label}
                </div>
              `:o`<span class="${b.contentUnderlined}">${this.label}</span>`}
      </button>
    `}}d([l({reflect:!0})],c.prototype,"name");d([l({reflect:!0})],c.prototype,"label");d([l({type:Boolean,reflect:!0})],c.prototype,"active");d([l({type:Boolean,reflect:!0})],c.prototype,"over");d([l({attribute:"tab-class",reflect:!0})],c.prototype,"tabClass");customElements.get("w-tab")||customElements.define("w-tab",c);var S=Object.defineProperty,k=(s,t,a,n)=>{for(var e=void 0,i=s.length-1,r;i>=0;i--)(r=s[i])&&(e=r(t,a,e)||e);return e&&S(t,a,e),e};class C extends g{constructor(){super(...arguments),this.hidden=!0}static{this.styles=[T,y]}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","-1"),this.setAttribute("role","tabpanel"),this.name&&(this.setAttribute("aria-labelledby",`warp-tab-${this.name}`),this.setAttribute("id",`warp-tabpanel-${this.name}`))}updated(t){t.has("name")&&this.name&&(this.setAttribute("aria-labelledby",`warp-tab-${this.name}`),this.setAttribute("id",`warp-tabpanel-${this.name}`))}render(){return o`<slot></slot>`}}k([l({reflect:!0})],C.prototype,"name");k([l({type:Boolean,reflect:!0})],C.prototype,"hidden");customElements.get("w-tab-panel")||customElements.define("w-tab-panel",C);var I=Object.defineProperty,w=(s,t,a,n)=>{for(var e=void 0,i=s.length-1,r;i>=0;i--)(r=s[i])&&(e=r(t,a,e)||e);return e&&I(t,a,e),e};const f={wrapper:"inline-block border-b s-border mb-32",base:"inline-grid relative -mb-1",selectionIndicator:"absolute s-border-selected -bottom-0 border-b-4 transition-all"},_={cols1:"grid-cols-1",cols2:"grid-cols-2",cols3:"grid-cols-3",cols4:"grid-cols-4",cols5:"grid-cols-5",cols6:"grid-cols-6",cols7:"grid-cols-7",cols8:"grid-cols-8",cols9:"grid-cols-9"};function z(s,t=200,a=!1){let n;return((...e)=>{const i=()=>{n=null,a||s(...e)},r=a&&!n;n&&clearTimeout(n),n=setTimeout(i,t),r&&s(...e)})}class p extends g{constructor(){super(),this.active="",this.tabClass="",this._activeTab="",this._updateSelectionIndicatorDebounced=z(this.updateSelectionIndicator.bind(this),100),this._handleTabClick=t=>{const a=t.detail.name;a!==this._activeTab&&(this.active=a,this._activeTab=a,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())},this._handleKeyDown=t=>{if(t.altKey||t.ctrlKey||t.shiftKey||!["ArrowLeft","ArrowRight","Home","End"].includes(t.key))return;const a=Array.from(this.querySelectorAll("w-tab")),n=a.findIndex(i=>i.getAttribute("name")===this._activeTab);if(n===-1)return;let e=n;switch(t.key){case"Home":e=0;break;case"End":e=a.length-1;break;case"ArrowLeft":e=Math.max(0,n-1);break;case"ArrowRight":e=Math.min(a.length-1,n+1);break}if(e!==n){t.preventDefault();const i=a[e],r=i.getAttribute("name");r&&(this.active=r,this._activeTab=r,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange(),i.focus())}},this.addEventListener("tab-click",this._handleTabClick)}static{this.styles=[T,y]}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{this._updateSelectionIndicatorDebounced()}),this._resizeObserver.observe(this)),window.addEventListener("resize",this._updateSelectionIndicatorDebounced)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect(),window.removeEventListener("resize",this._updateSelectionIndicatorDebounced),this.removeEventListener("tab-click",this._handleTabClick)}firstUpdated(){this._initializeActiveTab(),this.updateSelectionIndicator(),this.updatePanels()}updated(t){t.has("active")&&this.active!==this._activeTab&&(this._activeTab=this.active,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())}get tabs(){return(this.shadowRoot?.querySelector("slot")).assignedElements({flatten:!0}).filter(n=>n.tagName.toLowerCase()==="w-tab")}get activeTab(){return this.tabs.filter(a=>a.name===this._activeTab)[0]}_initializeActiveTab(){this.activeTab?this._activeTab=this.activeTab.getAttribute("name")||"":this.tabs.length>0&&(this._activeTab=this.tabs[0].getAttribute("name")||""),this._activeTab&&(this.active=this._activeTab)}_notifyTabChange(){this.dispatchEvent(new CustomEvent("change",{detail:{name:this._activeTab},bubbles:!0,composed:!0}))}updateSelectionIndicator(){requestAnimationFrame(()=>{if(!this.tabList||!this.selectionIndicator||!this.activeTab)return;const t=this.tabList.getBoundingClientRect(),a=this.activeTab.getBoundingClientRect(),n=a.left-t.left,e=a.width;this.selectionIndicator.style.left=`${n}px`,this.selectionIndicator.style.width=`${e}px`})}updatePanels(){document.querySelectorAll("w-tab-panel").forEach(n=>{n.name===this._activeTab?(n.removeAttribute("hidden"),n.hidden=!1):(n.setAttribute("hidden",""),n.hidden=!0)}),this.querySelectorAll("w-tab").forEach(n=>{n.getAttribute("name")===this._activeTab?n.setAttribute("active",""):n.removeAttribute("active")})}get _tabCount(){return this.querySelectorAll("w-tab").length}get _gridClass(){const t=Math.min(this._tabCount,9);return _[`cols${t}`]||_.cols1}render(){const t=v(this.tabClass,f.wrapper),a=v([f.base,this._gridClass]);return o`
      <div class="${t}">
        <div role="tablist" class="${a}" @keydown="${this._handleKeyDown}">
          <slot></slot>
          <span class="selection-indicator ${f.selectionIndicator}" data-testid="selection-indicator"></span>
        </div>
      </div>
    `}}w([l({reflect:!0})],p.prototype,"active");w([l({attribute:"tab-class",reflect:!0})],p.prototype,"tabClass");w([x('[role="tablist"]')],p.prototype,"tabList");w([x(".selection-indicator")],p.prototype,"selectionIndicator");customElements.get("w-tabs")||customElements.define("w-tabs",p);const R={title:"Components/Tabs"},h=()=>o`
  <w-tabs active="tab1">
    <w-tab name="tab1" label="First Tab"></w-tab>
    <w-tab name="tab2" label="Second Tab"></w-tab>
    <w-tab name="tab3" label="Third Tab"></w-tab>
  </w-tabs>

  <w-tab-panel name="tab1">
    <p>Content for the first tab. This panel is visible when the first tab is active.</p>
  </w-tab-panel>

  <w-tab-panel name="tab2" hidden>
    <p>Content for the second tab. This panel is visible when the second tab is active.</p>
  </w-tab-panel>

  <w-tab-panel name="tab3" hidden>
    <p>Content for the third tab. This panel is visible when the third tab is active.</p>
  </w-tab-panel>
`,m=()=>o`
  <w-tabs active="home">
    <w-tab name="home" label="Home">
      <span slot="icon">🏠</span>
    </w-tab>
    <w-tab name="search" label="Search">
      <span slot="icon">🔍</span>
    </w-tab>
    <w-tab name="profile" label="Profile">
      <span slot="icon">👤</span>
    </w-tab>
  </w-tabs>

  <w-tab-panel name="home">
    <p>Welcome to the home page!</p>
  </w-tab-panel>

  <w-tab-panel name="search" hidden>
    <p>Search functionality goes here.</p>
  </w-tab-panel>

  <w-tab-panel name="profile" hidden>
    <p>User profile information.</p>
  </w-tab-panel>
`,u=()=>o`
  <w-tabs active="tab1">
    <w-tab name="tab1" label="Tab 1"></w-tab>
    <w-tab name="tab2" label="Tab 2"></w-tab>
    <w-tab name="tab3" label="Tab 3"></w-tab>
    <w-tab name="tab4" label="Tab 4"></w-tab>
    <w-tab name="tab5" label="Tab 5"></w-tab>
    <w-tab name="tab6" label="Tab 6"></w-tab>
  </w-tabs>

  <w-tab-panel name="tab1">
    <p>Content for tab 1</p>
  </w-tab-panel>

  <w-tab-panel name="tab2" hidden>
    <p>Content for tab 2</p>
  </w-tab-panel>

  <w-tab-panel name="tab3" hidden>
    <p>Content for tab 3</p>
  </w-tab-panel>

  <w-tab-panel name="tab4" hidden>
    <p>Content for tab 4</p>
  </w-tab-panel>

  <w-tab-panel name="tab5" hidden>
    <p>Content for tab 5</p>
  </w-tab-panel>

  <w-tab-panel name="tab6" hidden>
    <p>Content for tab 6</p>
  </w-tab-panel>
`;h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="tab1">
    <w-tab name="tab1" label="First Tab"></w-tab>
    <w-tab name="tab2" label="Second Tab"></w-tab>
    <w-tab name="tab3" label="Third Tab"></w-tab>
  </w-tabs>

  <w-tab-panel name="tab1">
    <p>Content for the first tab. This panel is visible when the first tab is active.</p>
  </w-tab-panel>

  <w-tab-panel name="tab2" hidden>
    <p>Content for the second tab. This panel is visible when the second tab is active.</p>
  </w-tab-panel>

  <w-tab-panel name="tab3" hidden>
    <p>Content for the third tab. This panel is visible when the third tab is active.</p>
  </w-tab-panel>
\``,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="home">
    <w-tab name="home" label="Home">
      <span slot="icon">🏠</span>
    </w-tab>
    <w-tab name="search" label="Search">
      <span slot="icon">🔍</span>
    </w-tab>
    <w-tab name="profile" label="Profile">
      <span slot="icon">👤</span>
    </w-tab>
  </w-tabs>

  <w-tab-panel name="home">
    <p>Welcome to the home page!</p>
  </w-tab-panel>

  <w-tab-panel name="search" hidden>
    <p>Search functionality goes here.</p>
  </w-tab-panel>

  <w-tab-panel name="profile" hidden>
    <p>User profile information.</p>
  </w-tab-panel>
\``,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="tab1">
    <w-tab name="tab1" label="Tab 1"></w-tab>
    <w-tab name="tab2" label="Tab 2"></w-tab>
    <w-tab name="tab3" label="Tab 3"></w-tab>
    <w-tab name="tab4" label="Tab 4"></w-tab>
    <w-tab name="tab5" label="Tab 5"></w-tab>
    <w-tab name="tab6" label="Tab 6"></w-tab>
  </w-tabs>

  <w-tab-panel name="tab1">
    <p>Content for tab 1</p>
  </w-tab-panel>

  <w-tab-panel name="tab2" hidden>
    <p>Content for tab 2</p>
  </w-tab-panel>

  <w-tab-panel name="tab3" hidden>
    <p>Content for tab 3</p>
  </w-tab-panel>

  <w-tab-panel name="tab4" hidden>
    <p>Content for tab 4</p>
  </w-tab-panel>

  <w-tab-panel name="tab5" hidden>
    <p>Content for tab 5</p>
  </w-tab-panel>

  <w-tab-panel name="tab6" hidden>
    <p>Content for tab 6</p>
  </w-tab-panel>
\``,...u.parameters?.docs?.source}}};const D=["Default","WithIcons","ManyTabs"];export{h as Default,u as ManyTabs,m as WithIcons,D as __namedExportsOrder,R as default};
