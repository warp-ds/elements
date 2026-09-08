import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,c as r,h as i,l as a,r as o,s,t as c,y as l}from"./decorate-Bt2QF_uA.js";import{t as u}from"./query-BHY-nhsh.js";import{t as d}from"./icon-ND47zKHd.js";import{n as f,t as p}from"./styles-Cw_r5k83.js";var m;function h(){return(h=e((()=>{r(),m=l`
	:host {
		display: block;
	}

	/* Stories and legacy markup may set [hidden] on inactive panels.
    * Visibility is now controlled internally via active state, so neutralize it. */
	:host([hidden]) {
		display: block !important;
	}

	[part="base"] {
		display: none;
	}

	[part="base"][data-active] {
		display: block;
	}
`})))()}var g;function _(){return(_=e((()=>{r(),o(),p(),h(),g=class extends a{static{this.styles=[f,m]}constructor(){super(),this._internals=this.attachInternals()}set active(e){this._ownActive=e}get active(){return this._parentActive??this._ownActive??!1}connectedCallback(){super.connectedCallback(),this._internals.role=`tabpanel`,this.syncA11yState()}updated(){this.syncA11yState()}syncA11yState(){let e=this._internals;e.ariaLabelledBy=this._parentAriaLabelledBy||null,e.ariaHidden=this.active?`false`:`true`}render(){return i`<div ?data-active=${this.active} part="base">
			<slot></slot>
		</div>`}},c([s({attribute:`id`,reflect:!0})],g.prototype,`id`,void 0),c([s({type:Boolean})],g.prototype,`active`,null),c([s({attribute:!1})],g.prototype,`_parentActive`,void 0),c([s({attribute:!1})],g.prototype,`_parentAriaLabelledBy`,void 0),customElements.get(`w-tab-panel`)||customElements.define(`w-tab-panel`,g)})))()}var v;function y(){return(y=e((()=>{r(),v=l`
	:host {
		--_inactive-color: var(
			--w-c-tab-inactive-color,
			var(--w-s-color-text-subtle)
		);
		--_hover-color: var(--w-c-tab-hover-color, var(--w-s-color-text-link));
		--_hover-color-border: var(
			--w-c-tab-hover-color-border,
			var(--w-s-color-border-primary)
		);
		--_active-color: var(--w-c-tab-active-color, var(--w-s-color-text-link));
		--_active-color-border: var(
			--w-c-tab-active-color-border,
			var(--w-s-color-border-selected)
		);
	}

	::slotted([slot="icon"]) {
		display: flex;
	}

	:host(:focus-visible) {
		outline: 2px solid var(--w-s-color-border-focus, #1a73e8);
		outline-offset: var(--w-outline-offset, 1px);
	}

	[part="base"] {
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		border-bottom-width: 4px;
		border-color: rgba(0, 0, 0, 0);
		cursor: pointer;
		color: var(--_inactive-color);
		display: grid;
		gap: 8px;
		padding: 16px;
		padding-bottom: 8px;
		font-weight: 700;
		height: 100%;
		width: 100%;
		text-align: center;
	}

	[part="icon-inline"] {
		align-items: center;
		display: flex;
		gap: 8px;
		justify-content: center;
	}

	[part="icon-block"] {
		margin-inline: auto;
	}

	:host(:hover) [part="base"] {
		border-color: var(--_hover-color-border);
		color: var(--_hover-color);
	}

	/* Selected tab */
	:host([tabindex="0"]) [part="base"] {
		border-color: var(--_active-color-border);
		color: var(--_active-color);
	}
`})))()}var b;function x(){return(x=e((()=>{r(),o(),p(),y(),b=class extends a{static{this.styles=[f,v]}constructor(){super(),this._handleClick=e=>{e.tab=this},this.tabindex=0,this.active=!1,this.over=!1,this._internals=this.attachInternals()}get _computedAriaSelected(){return this._parentAriaSelected??this._ownAriaSelected}get _effectiveAriaControls(){return this._ariaControlsAttr||this.for||``}set ariaSelected(e){let t=this._ownAriaSelected;this._ownAriaSelected=e,this._internals.ariaSelected=this._computedAriaSelected??null,this.requestUpdate(`ariaSelected`,t)}get ariaSelected(){return this._computedAriaSelected??`false`}get _hasIcon(){return this.querySelector(`[slot="icon"]`)!==null}connectedCallback(){super.connectedCallback(),this._internals.role=`tab`,this.syncAriaControls(),this.addEventListener(`click`,this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._handleClick)}updated(e){super.updated(e);let t=e;e.has(`_parentAriaSelected`)&&(this._internals.ariaSelected=this._computedAriaSelected??null),t.has(`_ariaControlsAttr`)&&this.syncAriaControls(),e.has(`for`)&&this.syncAriaControls(),e.has(`active`)&&this.hasAttribute(`active`)&&(this._internals.ariaSelected=this.active?`true`:`false`)}syncAriaControls(){let e=this._effectiveAriaControls,t=this.closest(`w-tabs`)?.querySelector(`w-tab-panel#${CSS.escape(e)}`)??this.ownerDocument?.getElementById(e)??null,n=this._internals;if(`ariaControlsElements`in n){n.ariaControlsElements=t?[t]:[];return}`ariaControls`in n&&(n.ariaControls=e||null)}render(){let e=this._hasIcon;return i`
			<div part="base">
				${e?this.over?i`
									<span part="icon-block">
										<slot name="icon"></slot>
									</span>
									<span><slot></slot></span>
								`:i`
									<div part="icon-inline">
										<slot name="icon"></slot>
										<slot></slot>
									</div>
								`:i`
								<span>
									<slot></slot>
								</span>
							`}
			</div>
		`}},c([s({type:Number})],b.prototype,`tabindex`,void 0),c([s({reflect:!0})],b.prototype,`for`,void 0),c([s({attribute:`aria-controls`})],b.prototype,`_ariaControlsAttr`,void 0),c([s({attribute:!1})],b.prototype,`_parentAriaSelected`,void 0),c([s({attribute:`aria-selected`})],b.prototype,`ariaSelected`,null),c([s({type:Boolean,reflect:!0})],b.prototype,`active`,void 0),c([s({type:Boolean,reflect:!0})],b.prototype,`over`,void 0),customElements.get(`w-tab`)||customElements.define(`w-tab`,b)})))()}var S;function C(){return(C=e((()=>{S=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`})))()}var w;function T(){return(T=e((()=>{C(),w=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=S[n[e]&63];return t}})))()}function E(e=``){return`${e}${w()}`}function D(){return(D=e((()=>{T()})))()}var O;function k(){return(k=e((()=>{r(),O=l`
	:host {
		--_tabs-border-width: var(--w-c-tabs-border-width, 1px);
		--_tabs-border-color: var(--w-c-tabs-border-color, var(--w-s-color-border));
		--_tabs-selection-width: var(--w-c-tabs-selection-width, 4px);
		--_tabs-selection-color: var(
			--w-c-tabs-selection-color,
			var(--w-s-color-border-selected)
		);
	}

	[part="base"] {
		border-bottom-width: var(--_tabs-border-width);
		border-color: var(--_tabs-border-color);
		margin-bottom: 3.2rem;
	}

	[part="tablist"] {
		display: inline-grid;
		margin-bottom: -0.1rem;
		position: relative;
	}

	[part="selection"] {
		border-bottom-width: var(--_tabs-selection-width);
		border-color: var(--_tabs-selection-color);
		bottom: 0px;
		position: absolute;
		transition-duration: 0.15s;
		transition-property: left, width;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.grid-cols-1 {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}

	.grid-cols-2 {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.grid-cols-3 {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.grid-cols-4 {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	.grid-cols-5 {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}

	.grid-cols-6 {
		grid-template-columns: repeat(6, minmax(0, 1fr));
	}

	.grid-cols-7 {
		grid-template-columns: repeat(7, minmax(0, 1fr));
	}

	.grid-cols-8 {
		grid-template-columns: repeat(8, minmax(0, 1fr));
	}

	.grid-cols-9 {
		grid-template-columns: repeat(9, minmax(0, 1fr));
	}
`})))()}function A(e,t=200,n=!1){let r;return((...i)=>{let a=()=>{r=null,n||e(...i)},o=n&&!r;r&&clearTimeout(r),r=setTimeout(a,t),o&&e(...i)})}var j,M;function N(){return(N=e((()=>{r(),o(),p(),D(),k(),j={cols1:`grid-cols-1`,cols2:`grid-cols-2`,cols3:`grid-cols-3`,cols4:`grid-cols-4`,cols5:`grid-cols-5`,cols6:`grid-cols-6`,cols7:`grid-cols-7`,cols8:`grid-cols-8`,cols9:`grid-cols-9`},M=class extends a{static{this.styles=[f,O]}constructor(){super(),this._uniqueId=E(),this._activeTabFor=``,this._updateSelectionIndicatorDebounced=A(this.updateSelectionIndicator.bind(this),100),this._assignSlots=()=>{[...this.children].forEach(e=>{e instanceof HTMLElement&&(e.tagName===`W-TAB`&&!e.getAttribute(`slot`)&&e.setAttribute(`slot`,`tabs`),e.tagName===`W-TAB-PANEL`&&!e.getAttribute(`slot`)&&e.setAttribute(`slot`,`panels`))}),this.requestUpdate()},this._handleTabClick=e=>{let t=e.tab?.for;t&&t!==this._activeTabFor&&(this.active=t,this._activeTabFor=t,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())},this._handleKeyDown=e=>{if(e.altKey||e.ctrlKey||e.shiftKey||![`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(e.key))return;let t=[...this.querySelectorAll(`w-tab`)],n=t.findIndex(e=>e.for===this._activeTabFor);if(n===-1)return;let r=n;switch(e.key){case`Home`:r=0;break;case`End`:r=t.length-1;break;case`ArrowLeft`:r=Math.max(0,n-1);break;case`ArrowRight`:r=Math.min(t.length-1,n+1)}if(r!==n){e.preventDefault();let n=t[r],i=n.for;i&&(this.active=i,this._activeTabFor=i,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange(),n.focus())}},this.addEventListener(`click`,this._handleTabClick)}connectedCallback(){super.connectedCallback(),this.active&&(this._activeTabFor=this.active),this._assignSlots(),typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(()=>{this._updateSelectionIndicatorDebounced()}),this._resizeObserver.observe(this)),window.addEventListener(`resize`,this._updateSelectionIndicatorDebounced)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect(),window.removeEventListener(`resize`,this._updateSelectionIndicatorDebounced),this.removeEventListener(`click`,this._handleTabClick)}firstUpdated(){this._assignSlots(),this._initializeActiveTab(),this.updateSelectionIndicator(),this.updatePanels()}updated(e){e.has(`active`)&&this.active!==this._activeTabFor&&(this._activeTabFor=this.active,this.updateSelectionIndicator(),this.updatePanels(),this._notifyTabChange())}get tabs(){let e=this.shadowRoot?.querySelector(`slot[name="tabs"]`);return e?e.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`w-tab`):[]}get activeTab(){return this.tabs.filter(e=>e.for===this._activeTabFor)[0]}_initializeActiveTab(){this.activeTab?this._activeTabFor=this.activeTab.getAttribute(`for`)||``:this.tabs.length>0&&(this._activeTabFor=this.tabs[0].getAttribute(`for`)||``),this._activeTabFor&&this._activeTabFor!==this.active&&(this.active=this._activeTabFor)}_notifyTabChange(){this.dispatchEvent(new CustomEvent(`change`,{detail:{panelId:this._activeTabFor},bubbles:!0,composed:!0}))}updateSelectionIndicator(){requestAnimationFrame(()=>{if(!this.tabList||!this.selectionIndicator||!this.activeTab)return;let e=this.tabList.getBoundingClientRect(),t=this.activeTab.getBoundingClientRect(),n=t.left-e.left,r=t.width;this.selectionIndicator.style.left=`${n}px`,this.selectionIndicator.style.width=`${r}px`})}updatePanels(){let e=[...this.querySelectorAll(`w-tab`)];e.forEach((e,t)=>{e.id||=`w-tab-${this._uniqueId}-${t}`;let n=e.for===this._activeTabFor;e.tabIndex=n?0:-1,e._parentAriaSelected=n?`true`:`false`}),[...this.querySelectorAll(`w-tab-panel`)].forEach(t=>{let n=e.find(e=>e.for===t.id);n&&(t._parentAriaLabelledBy=n.id),t._parentActive=t.id===this._activeTabFor})}get _tabCount(){return this.querySelectorAll(`w-tab`).length}get _gridClass(){let e=Math.min(this._tabCount,9);return j[`cols${e}`]||j.cols1}render(){return i`
			<div part="base">
				<div
					role="tablist"
					part="tablist"
					class="${this._gridClass}"
					@keydown="${this._handleKeyDown}"
				>
					<slot name="tabs" @slotchange="${this._assignSlots}"></slot>
					<span part="selection" data-testid="selection-indicator"></span>
				</div>
			</div>
			<slot name="panels" @slotchange="${this._assignSlots}"></slot>
			<slot @slotchange="${this._assignSlots}"></slot>
		`}},c([s({reflect:!0})],M.prototype,`active`,void 0),c([u(`[role="tablist"]`)],M.prototype,`tabList`,void 0),c([u(`[part="selection"]`)],M.prototype,`selectionIndicator`,void 0),c([n()],M.prototype,`_activeTabFor`,void 0),customElements.get(`w-tabs`)||customElements.define(`w-tabs`,M)})))()}var P=t({Default:()=>I,ManyTabs:()=>z,StylingAPI:()=>B,WithIcons:()=>L,WithIconsOver:()=>R,__namedExportsOrder:()=>V,default:()=>F}),F,I,L,R,z,B,V;function H(){return(H=e((()=>{r(),d(),_(),x(),N(),F={title:`Components/Tabs`},I=()=>i`
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
`,L=()=>i`
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
`,R=()=>i`
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
`,z=()=>i`
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
`,B=()=>i`
    <style>
        w-tabs::part(tablist) {
            display: flex;
        }

        w-tabs {
            --w-c-tabs-selection-color: limegreen;
        }

        w-tab {
            --w-c-tab-hover-color: magenta;
            --w-c-tab-hover-color-border: magenta;
            --w-c-tab-active-color: magenta;
            --w-c-tab-active-color-border: magenta;
        }
    </style>
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
`,I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => html\`
    <style>
        w-tabs::part(tablist) {
            display: flex;
        }

        w-tabs {
            --w-c-tabs-selection-color: limegreen;
        }

        w-tab {
            --w-c-tab-hover-color: magenta;
            --w-c-tab-hover-color-border: magenta;
            --w-c-tab-active-color: magenta;
            --w-c-tab-active-color-border: magenta;
        }
    </style>
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
\``,...B.parameters?.docs?.source}}},V=[`Default`,`WithIcons`,`WithIconsOver`,`ManyTabs`,`StylingAPI`]})))()}export{P as a,H as i,z as n,L as r,I as t};