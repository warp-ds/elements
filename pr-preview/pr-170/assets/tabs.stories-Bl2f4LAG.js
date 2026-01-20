import{a as I,i as T,r as y,k as g,b as r,n as l}from"./iframe-Cc7cmZX8.js";import"./info-16-7z_YlX2-.js";import{e as k}from"./query-NYTjQBeo.js";const _=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-b{border-bottom-width:1px}.border-b-4{border-bottom-width:4px}.inline-block{display:inline-block}.inline-grid{display:inline-grid}.hidden{display:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.-bottom-0{bottom:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.-mb-1{margin-bottom:-.1rem}.mb-32{margin-bottom:3.2rem}.resize{resize:both}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-b-4{border-bottom-width:4px}.border-transparent{border-color:#0000}.inline-block{display:inline-block}.flex{display:flex}.grid{display:grid}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.gap-8{gap:.8rem}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-text-link{color:var(--w-s-color-text-link)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.hover\\:s-text-link:hover{color:var(--w-s-color-text-link)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.hover\\:s-border-primary:hover{border-color:var(--w-s-color-border-primary)}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.p-0{padding:0}.p-16{padding:1.6rem}.pb-8{padding-bottom:.8rem}.cursor-pointer{cursor:pointer}.font-bold{font-weight:700}.w-full{width: 100%;}`;var S=Object.defineProperty,w=(i,t,e,n)=>{for(var a=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(a=o(t,e,a)||a);return a&&S(t,e,a),a};const v={wrapper:"inline-block border-b s-border mb-32",base:"inline-grid relative -mb-1",selectionIndicator:"absolute s-border-selected -bottom-0 border-b-4 transition-all"},C={cols1:"grid-cols-1",cols2:"grid-cols-2",cols3:"grid-cols-3",cols4:"grid-cols-4",cols5:"grid-cols-5",cols6:"grid-cols-6",cols7:"grid-cols-7",cols8:"grid-cols-8",cols9:"grid-cols-9"};function $(i,t=200,e=!1){let n;return((...a)=>{const s=()=>{n=null,e||i(...a)},o=e&&!n;n&&clearTimeout(n),n=setTimeout(s,t),o&&i(...a)})}class f extends T{constructor(){super(),this.active="",this.tabClass="",this._activeTabFor="",this._updateSelectionIndicatorDebounced=$(this.updateSelectionIndicator.bind(this),100),this._assignSlots=()=>{Array.from(this.children).forEach(t=>{t instanceof HTMLElement&&(t.tagName==="W-TAB"&&!t.getAttribute("slot")&&t.setAttribute("slot","tabs"),t.tagName==="W-TAB-PANEL"&&!t.getAttribute("slot")&&t.setAttribute("slot","panels"))}),this.requestUpdate()},this._handleTabClick=t=>{const e=t.tab.for;e!==this._activeTabFor&&(this.active=e,this._activeTabFor=e,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())},this._handleKeyDown=t=>{if(t.altKey||t.ctrlKey||t.shiftKey||!["ArrowLeft","ArrowRight","Home","End"].includes(t.key))return;const e=Array.from(this.querySelectorAll("w-tab")),n=e.findIndex(s=>s.for===this._activeTabFor);if(n===-1)return;let a=n;switch(t.key){case"Home":a=0;break;case"End":a=e.length-1;break;case"ArrowLeft":a=Math.max(0,n-1);break;case"ArrowRight":a=Math.min(e.length-1,n+1);break}if(a!==n){t.preventDefault();const s=e[a],o=s.for;if(o){this.active=o,this._activeTabFor=o,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange();const m=s;m.tabIndex=0,m.focus(),e.forEach(x=>{x.tabIndex=x===m?0:-1})}}},this.addEventListener("click",this._handleTabClick)}static{this.styles=[y,_]}connectedCallback(){super.connectedCallback(),this._assignSlots(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{this._updateSelectionIndicatorDebounced()}),this._resizeObserver.observe(this)),window.addEventListener("resize",this._updateSelectionIndicatorDebounced)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect(),window.removeEventListener("resize",this._updateSelectionIndicatorDebounced),this.removeEventListener("click",this._handleTabClick)}firstUpdated(){this._assignSlots(),this._initializeActiveTab(),this.updateSelectionIndicator(),this.updatePanels()}updated(t){t.has("active")&&this.active!==this._activeTabFor&&(this._activeTabFor=this.active,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())}get tabs(){const t=this.shadowRoot?.querySelector('slot[name="tabs"]');return t?t.assignedElements({flatten:!0}).filter(n=>n.tagName.toLowerCase()==="w-tab"):[]}get activeTab(){return this.tabs.filter(e=>e.for===this._activeTabFor)[0]}_initializeActiveTab(){this.activeTab?this._activeTabFor=this.activeTab.getAttribute("for")||"":this.tabs.length>0&&(this._activeTabFor=this.tabs[0].getAttribute("for")||""),this._activeTabFor&&(this.active=this._activeTabFor)}_notifyTabChange(){this.dispatchEvent(new CustomEvent("change",{detail:{panelId:this._activeTabFor},bubbles:!0,composed:!0}))}updateSelectionIndicator(){requestAnimationFrame(()=>{if(!this.tabList||!this.selectionIndicator||!this.activeTab)return;const t=this.tabList.getBoundingClientRect(),e=this.activeTab.getBoundingClientRect(),n=e.left-t.left,a=e.width;this.selectionIndicator.style.left=`${n}px`,this.selectionIndicator.style.width=`${a}px`})}updatePanels(){Array.from(this.querySelectorAll("w-tab-panel")).forEach(n=>{n.id===this._activeTabFor?n.hidden=!1:n.hidden=!0}),Array.from(this.querySelectorAll("w-tab")).forEach(n=>{n.for===this._activeTabFor?(n.active=!0,n.tabIndex=0):(n.active=!1,n.tabIndex=-1)})}get _tabCount(){return this.querySelectorAll("w-tab").length}get _gridClass(){const t=Math.min(this._tabCount,9);return C[`cols${t}`]||C.cols1}render(){const t=g(this.tabClass,v.wrapper),e=g([v.base,this._gridClass]);return r`
      <div class="${t}">
        <div role="tablist" class="${e}" @keydown="${this._handleKeyDown}">
          <slot name="tabs" @slotchange="${this._assignSlots}"></slot>
          <span class="selection-indicator ${v.selectionIndicator}" data-testid="selection-indicator"></span>
        </div>
      </div>
      <slot name="panels" @slotchange="${this._assignSlots}"></slot>
      <slot @slotchange="${this._assignSlots}"></slot>
    `}}w([l({reflect:!0})],f.prototype,"active");w([l({attribute:"tab-class",reflect:!0})],f.prototype,"tabClass");w([k('[role="tablist"]')],f.prototype,"tabList");w([k(".selection-indicator")],f.prototype,"selectionIndicator");customElements.get("w-tabs")||customElements.define("w-tabs",f);var E=Object.defineProperty,u=(i,t,e,n)=>{for(var a=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(a=o(t,e,a)||a);return a&&E(t,e,a),a};const b={base:"grid w-full items-center font-bold gap-8 antialias p-16 pb-8 border-b-4 bg-transparent border-transparent hover:s-text-link hover:s-border-primary",inactive:"s-text-subtle",active:"s-text-link s-border-selected",icon:"mx-auto",content:"flex items-center justify-center gap-8",contentUnderlined:"content-underlined"},F="focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block";class c extends T{constructor(){super(...arguments),this.for="",this.label="",this.active=!1,this.over=!1,this.tabClass=""}static{this.styles=[y,_]}get _classes(){return g(this.tabClass,[F,b.base,this.active?b.active:b.inactive])}get _hasChildren(){return this.querySelector('[slot="icon"]')!==null||this.innerHTML.trim()!==this.label}render(){const t=this._hasChildren;return r`
      <button
        type="button"
        role="tab"
        aria-selected="${this.active?"true":"false"}"
        aria-controls="${this.for}"
        id="warp-tab-${this.for}"
        class="${this._classes}"
        tabindex="${-1}"
        @click="${e=>{e.tab=this}}"
        style="height: 100%">
        ${t?this.over?r`
                <span class="${b.icon}">
                  <slot name="icon"></slot>
                </span>
                <span class="${b.contentUnderlined}">${this.label}</span>
              `:r`
                <div class="${b.content}">
                  <slot name="icon"></slot>
                  ${this.label}
                </div>
              `:r`<span class="${b.contentUnderlined}">${this.label}</span>`}
      </button>
    `}}u([l({attribute:"for",reflect:!0})],c.prototype,"for");u([l({reflect:!0})],c.prototype,"label");u([l({type:Boolean,reflect:!0})],c.prototype,"active");u([l({type:Boolean,reflect:!0})],c.prototype,"over");u([l({attribute:"tab-class",reflect:!0})],c.prototype,"tabClass");customElements.get("w-tab")||customElements.define("w-tab",c);var z=Object.defineProperty,L=(i,t,e,n)=>{for(var a=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(a=o(t,e,a)||a);return a&&z(t,e,a),a};class A extends T{constructor(){super(...arguments),this.hidden=!0}static{this.styles=[y,_]}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","-1"),this.setAttribute("role","tabpanel"),this._syncA11yAttributes()}updated(){this._syncA11yAttributes()}_syncA11yAttributes(){this.id&&this.setAttribute("aria-labelledby",`warp-tab-${this.id}`)}render(){return r`<slot></slot>`}}L([l({type:Boolean,reflect:!0})],A.prototype,"hidden");customElements.get("w-tab-panel")||customElements.define("w-tab-panel",A);const D={title:"Components/Tabs"},d=()=>r`
  <w-tabs active="tab1">
  
    <w-tab for="tab1" label="First Tab"></w-tab>
    <w-tab-panel id="tab1">
      <p>Content for the first tab. This panel is visible when the first tab is active.</p>
    </w-tab-panel>
  
    <w-tab for="tab2" label="Second Tab"></w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for the second tab. This panel is visible when the second tab is active.</p>
    </w-tab-panel>

    <w-tab for="tab3" label="Third Tab"></w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for the third tab. This panel is visible when the third tab is active.</p>
    </w-tab-panel>

  </w-tabs>
  
`,p=()=>r`
  <w-tabs active="info">
    <w-tab for="info" label="Info">
      <span slot="icon">
        <w-icon-info-16></w-icon-info-16>
      </span>
    </w-tab>
    <w-tab-panel id="info">
      <p>Info content.</p>
    </w-tab-panel>

    <w-tab for="done" label="Done">
      <span slot="icon">
        <w-icon-success-16></w-icon-success-16>
      </span>
    </w-tab>
    <w-tab-panel id="done" hidden>
      <p>Done content.</p>
    </w-tab-panel>

    <w-tab for="error" label="Failures">
      <span slot="icon">
        <w-icon-error-16></w-icon-error-16>
      </span>
    </w-tab>
    <w-tab-panel id="error" hidden>
      <p>Error content.</p>
    </w-tab-panel>
  </w-tabs>
`,h=()=>r`
  <w-tabs active="tab1">
    <w-tab for="tab1" label="Tab 1"></w-tab>
    <w-tab-panel id="tab1">
      <p>Content for tab 1</p>
    </w-tab-panel>

    <w-tab for="tab2" label="Tab 2"></w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for tab 2</p>
    </w-tab-panel>

    <w-tab for="tab3" label="Tab 3"></w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for tab 3</p>
    </w-tab-panel>

    <w-tab for="tab4" label="Tab 4"></w-tab>
    <w-tab-panel id="tab4" hidden>
      <p>Content for tab 4</p>
    </w-tab-panel>

    <w-tab for="tab5" label="Tab 5"></w-tab>
    <w-tab-panel id="tab5" hidden>
      <p>Content for tab 5</p>
    </w-tab-panel>

    <w-tab for="tab6" label="Tab 6"></w-tab>
    <w-tab-panel id="tab6" hidden>
      <p>Content for tab 6</p>
    </w-tab-panel>
  </w-tabs>
`;d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="tab1">
  
    <w-tab for="tab1" label="First Tab"></w-tab>
    <w-tab-panel id="tab1">
      <p>Content for the first tab. This panel is visible when the first tab is active.</p>
    </w-tab-panel>
  
    <w-tab for="tab2" label="Second Tab"></w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for the second tab. This panel is visible when the second tab is active.</p>
    </w-tab-panel>

    <w-tab for="tab3" label="Third Tab"></w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for the third tab. This panel is visible when the third tab is active.</p>
    </w-tab-panel>

  </w-tabs>
  
\``,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="info">
    <w-tab for="info" label="Info">
      <span slot="icon">
        <w-icon-info-16></w-icon-info-16>
      </span>
    </w-tab>
    <w-tab-panel id="info">
      <p>Info content.</p>
    </w-tab-panel>

    <w-tab for="done" label="Done">
      <span slot="icon">
        <w-icon-success-16></w-icon-success-16>
      </span>
    </w-tab>
    <w-tab-panel id="done" hidden>
      <p>Done content.</p>
    </w-tab-panel>

    <w-tab for="error" label="Failures">
      <span slot="icon">
        <w-icon-error-16></w-icon-error-16>
      </span>
    </w-tab>
    <w-tab-panel id="error" hidden>
      <p>Error content.</p>
    </w-tab-panel>
  </w-tabs>
\``,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="tab1">
    <w-tab for="tab1" label="Tab 1"></w-tab>
    <w-tab-panel id="tab1">
      <p>Content for tab 1</p>
    </w-tab-panel>

    <w-tab for="tab2" label="Tab 2"></w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for tab 2</p>
    </w-tab-panel>

    <w-tab for="tab3" label="Tab 3"></w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for tab 3</p>
    </w-tab-panel>

    <w-tab for="tab4" label="Tab 4"></w-tab>
    <w-tab-panel id="tab4" hidden>
      <p>Content for tab 4</p>
    </w-tab-panel>

    <w-tab for="tab5" label="Tab 5"></w-tab>
    <w-tab-panel id="tab5" hidden>
      <p>Content for tab 5</p>
    </w-tab-panel>

    <w-tab for="tab6" label="Tab 6"></w-tab>
    <w-tab-panel id="tab6" hidden>
      <p>Content for tab 6</p>
    </w-tab-panel>
  </w-tabs>
\``,...h.parameters?.docs?.source}}};const P=["Default","WithIcons","ManyTabs"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:d,ManyTabs:h,WithIcons:p,__namedExportsOrder:P,default:D},Symbol.toStringTag,{value:"Module"}));export{d as D,h as M,j as T,p as W};
