import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,c as r,h as i,l as a,r as o,s,t as c,x as l,y as u}from"./decorate-Bt2QF_uA.js";import{n as d,t as f}from"./index.m-DHqwZk2H.js";import{t as p}from"./query-BHY-nhsh.js";import{t as m}from"./icon-CD69d68Q.js";import{n as h,t as g}from"./styles-Cw_r5k83.js";var _;function v(){return(v=e((()=>{r(),_=l(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-b{border-bottom-width:1px}.border-b-4{border-bottom-width:4px}.inline-grid{display:inline-grid}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.-bottom-0{bottom:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.-mb-1{margin-bottom:-.1rem}.mb-32{margin-bottom:3.2rem}.resize{resize:both}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`)})))()}var y;function b(){return(b=e((()=>{r(),o(),g(),v(),y=class extends a{static{this.styles=[h,_,u`
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
		`]}constructor(){super(),this._internals=this.attachInternals()}set active(e){this._ownActive=e}get active(){return this._parentActive??this._ownActive??!1}connectedCallback(){super.connectedCallback(),this._internals.role=`tabpanel`,this.syncA11yState()}updated(){this.syncA11yState()}syncA11yState(){let e=this._internals;e.ariaLabelledBy=this._parentAriaLabelledBy||null,e.ariaHidden=this.active?`false`:`true`}render(){return i`<div class="panel-content" ?data-active=${this.active}>
			<slot></slot>
		</div>`}},c([s({attribute:`id`,reflect:!0})],y.prototype,`id`,void 0),c([s({type:Boolean})],y.prototype,`active`,null),c([s({attribute:!1})],y.prototype,`_parentActive`,void 0),c([s({attribute:!1})],y.prototype,`_parentAriaLabelledBy`,void 0),customElements.get(`w-tab-panel`)||customElements.define(`w-tab-panel`,y)})))()}var x;function S(){return(S=e((()=>{r(),x=l(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.text-center{text-align:center}.bg-transparent{background-color:#0000}.border-0{border-width:0}.border-b-4{border-bottom-width:4px}.border-transparent{border-color:#0000}.flex{display:flex}.grid{display:grid}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.gap-8{gap:.8rem}.outline{outline-style:solid}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-text-link{color:var(--w-s-color-text-link)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.hover\\:s-text-link:hover{color:var(--w-s-color-text-link)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.hover\\:s-border-primary:hover{border-color:var(--w-s-color-border-primary)}.w-full{width:100%}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.p-16{padding:1.6rem}.pb-8{padding-bottom:.8rem}.cursor-pointer{cursor:pointer}.font-bold{font-weight:700}`)})))()}var C,w;function T(){return(T=e((()=>{f(),r(),o(),g(),S(),C={base:`focusable cursor-pointer text-center bg-transparent border-0 m-0 grid w-full items-center font-bold gap-8 antialias p-16 pb-8 border-b-4 bg-transparent border-transparent hover:s-text-link hover:s-border-primary`,inactive:`s-text-subtle`,active:`s-text-link s-border-selected`,icon:`mx-auto`,content:`flex items-center justify-center gap-8`,contentUnderlined:`content-underlined`},w=class extends a{static{this.styles=[h,x,u`
			::slotted([slot="icon"]) {
				display: flex;
			}

			:host(:focus-visible) {
				outline: 2px solid var(--w-s-color-border-focus, #1a73e8);
				outline-offset: var(--w-outline-offset, 1px);
			}
		`]}constructor(){super(),this._handleClick=e=>{e.tab=this},this.tabindex=0,this.active=!1,this.over=!1,this._internals=this.attachInternals()}get _computedAriaSelected(){return this._parentAriaSelected??this._ownAriaSelected}get _effectiveAriaControls(){return this._ariaControlsAttr||this.for||``}set ariaSelected(e){let t=this._ownAriaSelected;this._ownAriaSelected=e,this._internals.ariaSelected=this._computedAriaSelected??null,this.requestUpdate(`ariaSelected`,t)}get ariaSelected(){return this._computedAriaSelected??`false`}get _classes(){return d([C.base,this.active||this.ariaSelected===`true`?C.active:C.inactive])}get _hasIcon(){return this.querySelector(`[slot="icon"]`)!==null}connectedCallback(){super.connectedCallback(),this._internals.role=`tab`,this.syncAriaControls(),this.addEventListener(`click`,this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._handleClick)}updated(e){super.updated(e);let t=e;e.has(`_parentAriaSelected`)&&(this._internals.ariaSelected=this._computedAriaSelected??null),t.has(`_ariaControlsAttr`)&&this.syncAriaControls(),e.has(`for`)&&this.syncAriaControls(),e.has(`active`)&&this.hasAttribute(`active`)&&(this._internals.ariaSelected=this.active?`true`:`false`)}syncAriaControls(){let e=this._effectiveAriaControls,t=this.closest(`w-tabs`)?.querySelector(`w-tab-panel#${CSS.escape(e)}`)??this.ownerDocument?.getElementById(e)??null,n=this._internals;if(`ariaControlsElements`in n){n.ariaControlsElements=t?[t]:[];return}`ariaControls`in n&&(n.ariaControls=e||null)}render(){let e=this._hasIcon;return i`
			<div class="${this._classes}" style="height: 100%">
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
								`:i`<span class="${C.contentUnderlined}"
								><slot></slot
							></span>`}
			</div>
		`}},c([s({type:Number})],w.prototype,`tabindex`,void 0),c([s({reflect:!0})],w.prototype,`for`,void 0),c([s({attribute:`aria-controls`})],w.prototype,`_ariaControlsAttr`,void 0),c([s({attribute:!1})],w.prototype,`_parentAriaSelected`,void 0),c([s({attribute:`aria-selected`})],w.prototype,`ariaSelected`,null),c([s({type:Boolean,reflect:!0})],w.prototype,`active`,void 0),c([s({type:Boolean,reflect:!0})],w.prototype,`over`,void 0),customElements.get(`w-tab`)||customElements.define(`w-tab`,w)})))()}var E;function D(){return(D=e((()=>{E=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`})))()}var O;function k(){return(k=e((()=>{D(),O=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=E[n[e]&63];return t}})))()}function A(e=``){return`${e}${O()}`}function j(){return(j=e((()=>{k()})))()}function M(e,t=200,n=!1){let r;return((...i)=>{let a=()=>{r=null,n||e(...i)},o=n&&!r;r&&clearTimeout(r),r=setTimeout(a,t),o&&e(...i)})}var N,P,F;function I(){return(I=e((()=>{f(),r(),o(),g(),j(),v(),N={wrapper:`border-b s-border mb-32`,base:`inline-grid relative -mb-1`,selectionIndicator:`absolute s-border-selected -bottom-0 border-b-4 transition-all`},P={cols1:`grid-cols-1`,cols2:`grid-cols-2`,cols3:`grid-cols-3`,cols4:`grid-cols-4`,cols5:`grid-cols-5`,cols6:`grid-cols-6`,cols7:`grid-cols-7`,cols8:`grid-cols-8`,cols9:`grid-cols-9`},F=class extends a{static{this.styles=[h,_]}constructor(){super(),this._uniqueId=A(),this._activeTabFor=``,this._updateSelectionIndicatorDebounced=M(this.updateSelectionIndicator.bind(this),100),this._assignSlots=()=>{[...this.children].forEach(e=>{e instanceof HTMLElement&&(e.tagName===`W-TAB`&&!e.getAttribute(`slot`)&&e.setAttribute(`slot`,`tabs`),e.tagName===`W-TAB-PANEL`&&!e.getAttribute(`slot`)&&e.setAttribute(`slot`,`panels`))}),this.requestUpdate()},this._handleTabClick=e=>{let t=e.tab?.for;t&&t!==this._activeTabFor&&(this.active=t,this._activeTabFor=t,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())},this._handleKeyDown=e=>{if(e.altKey||e.ctrlKey||e.shiftKey||![`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(e.key))return;let t=[...this.querySelectorAll(`w-tab`)],n=t.findIndex(e=>e.for===this._activeTabFor);if(n===-1)return;let r=n;switch(e.key){case`Home`:r=0;break;case`End`:r=t.length-1;break;case`ArrowLeft`:r=Math.max(0,n-1);break;case`ArrowRight`:r=Math.min(t.length-1,n+1)}if(r!==n){e.preventDefault();let n=t[r],i=n.for;i&&(this.active=i,this._activeTabFor=i,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange(),n.focus())}},this.addEventListener(`click`,this._handleTabClick)}connectedCallback(){super.connectedCallback(),this.active&&(this._activeTabFor=this.active),this._assignSlots(),typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(()=>{this._updateSelectionIndicatorDebounced()}),this._resizeObserver.observe(this)),window.addEventListener(`resize`,this._updateSelectionIndicatorDebounced)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect(),window.removeEventListener(`resize`,this._updateSelectionIndicatorDebounced),this.removeEventListener(`click`,this._handleTabClick)}firstUpdated(){this._assignSlots(),this._initializeActiveTab(),this.updateSelectionIndicator(),this.updatePanels()}updated(e){e.has(`active`)&&this.active!==this._activeTabFor&&(this._activeTabFor=this.active,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())}get tabs(){let e=this.shadowRoot?.querySelector(`slot[name="tabs"]`);return e?e.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`w-tab`):[]}get activeTab(){return this.tabs.filter(e=>e.for===this._activeTabFor)[0]}_initializeActiveTab(){this.activeTab?this._activeTabFor=this.activeTab.getAttribute(`for`)||``:this.tabs.length>0&&(this._activeTabFor=this.tabs[0].getAttribute(`for`)||``),this._activeTabFor&&this._activeTabFor!==this.active&&(this.active=this._activeTabFor)}_notifyTabChange(){this.dispatchEvent(new CustomEvent(`change`,{detail:{panelId:this._activeTabFor},bubbles:!0,composed:!0}))}updateSelectionIndicator(){requestAnimationFrame(()=>{if(!this.tabList||!this.selectionIndicator||!this.activeTab)return;let e=this.tabList.getBoundingClientRect(),t=this.activeTab.getBoundingClientRect(),n=t.left-e.left,r=t.width;this.selectionIndicator.style.left=`${n}px`,this.selectionIndicator.style.width=`${r}px`})}updatePanels(){let e=[...this.querySelectorAll(`w-tab`)];e.forEach((e,t)=>{e.id||=`w-tab-${this._uniqueId}-${t}`;let n=e.for===this._activeTabFor;e.tabIndex=n?0:-1,e._parentAriaSelected=n?`true`:`false`}),[...this.querySelectorAll(`w-tab-panel`)].forEach(t=>{let n=e.find(e=>e.for===t.id);n&&(t._parentAriaLabelledBy=n.id),t._parentActive=t.id===this._activeTabFor})}get _tabCount(){return this.querySelectorAll(`w-tab`).length}get _gridClass(){let e=Math.min(this._tabCount,9);return P[`cols${e}`]||P.cols1}render(){let e=d(N.wrapper),t=d([N.base,this._gridClass]);return i`
			<div class="${e}">
				<div
					role="tablist"
					class="${t}"
					@keydown="${this._handleKeyDown}"
				>
					<slot name="tabs" @slotchange="${this._assignSlots}"></slot>
					<span
						class="selection-indicator ${N.selectionIndicator}"
						data-testid="selection-indicator"
					></span>
				</div>
			</div>
			<slot name="panels" @slotchange="${this._assignSlots}"></slot>
			<slot @slotchange="${this._assignSlots}"></slot>
		`}},c([s({reflect:!0})],F.prototype,`active`,void 0),c([p(`[role="tablist"]`)],F.prototype,`tabList`,void 0),c([p(`.selection-indicator`)],F.prototype,`selectionIndicator`,void 0),c([n()],F.prototype,`_activeTabFor`,void 0),customElements.get(`w-tabs`)||customElements.define(`w-tabs`,F)})))()}var L=t({Default:()=>z,ManyTabs:()=>H,WithIcons:()=>B,WithIconsOver:()=>V,__namedExportsOrder:()=>U,default:()=>R}),R,z,B,V,H,U;function W(){return(W=e((()=>{r(),m(),b(),T(),I(),R={title:`Components/Tabs`},z=()=>i`
    <w-tabs active="tab2">
        <w-tab for="tab1">First Tab</w-tab>
        <w-tab-panel id="tab1">
            <p>
                Content for the first tab. This panel is visible when the first tab is
                active.
            </p>
        </w-tab-panel>

        <w-tab for="tab2">Second Tab</w-tab>
        <w-tab-panel id="tab2" hidden>
            <p>
                Content for the second tab. This panel is visible when the second tab is
                active.
            </p>
        </w-tab-panel>

        <w-tab for="tab3">Third Tab</w-tab>
        <w-tab-panel id="tab3" hidden>
            <p>
                Content for the third tab. This panel is visible when the third tab is
                active.
            </p>
        </w-tab-panel>
    </w-tabs>
`,B=()=>i`
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
`,V=()=>i`
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
`,H=()=>i`
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
`,z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => html\`
    <w-tabs active="tab2">
        <w-tab for="tab1">First Tab</w-tab>
        <w-tab-panel id="tab1">
            <p>
                Content for the first tab. This panel is visible when the first tab is
                active.
            </p>
        </w-tab-panel>

        <w-tab for="tab2">Second Tab</w-tab>
        <w-tab-panel id="tab2" hidden>
            <p>
                Content for the second tab. This panel is visible when the second tab is
                active.
            </p>
        </w-tab-panel>

        <w-tab for="tab3">Third Tab</w-tab>
        <w-tab-panel id="tab3" hidden>
            <p>
                Content for the third tab. This panel is visible when the third tab is
                active.
            </p>
        </w-tab-panel>
    </w-tabs>
\``,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...H.parameters?.docs?.source}}},U=[`Default`,`WithIcons`,`WithIconsOver`,`ManyTabs`]})))()}export{L as a,W as i,H as n,B as r,z as t};