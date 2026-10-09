import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,n as i,t as a}from"./lit-BcpSydpl.js";import{a as o,n as s,o as c,r as l,t as u}from"./i18n-CkjYRTT1.js";import{r as d,s as f,t as p}from"./decorate-DkSsDgub.js";import{n as m,t as h}from"./dist-Ps3JgUEV.js";import{t as g}from"./icon-BiweboAb.js";import{n as _,t as v}from"./styles-C65P6sGa.js";import{i as y,n as b,r as x}from"./utilities-bFq4FP4z.js";import{t as S}from"./taggedTemplateLiteral-BZenJ0bZ.js";var C;function w(){return(w=e((()=>{C=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})))()}var T;function E(){return(E=e((()=>{T=JSON.parse(`{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"],"pagination.label.current-page":["Page ",["currentPage"]]}`)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"],"pagination.label.current-page":["Sivu ",["currentPage"]]}`)})))()}var k;function A(){return(A=e((()=>{k=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})))()}var j;function M(){return(M=e((()=>{j=JSON.parse(`{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"],"pagination.label.current-page":["Sida ",["currentPage"]]}`)})))()}var N;function P(){return(P=e((()=>{a(),N=r`
	:host {
		display: block;

		--_gap: var(--w-c-pagination-gap, 0);
		--_base-padding: var(--w-c-pagination-base-padding, 0.8rem);
		--_item-padding: var(--w-c-pagination-padding, 0.4rem);
		--_placeholder-padding: var(
			--w-c-pagination-placeholder-padding,
			var(--_item-padding)
		);
		--_control-padding: var(
			--w-c-pagination-control-padding,
			var(--_item-padding)
		);
		--_current-page-padding: var(
			--w-c-pagination-current-page-padding,
			var(--_item-padding)
		);
		--_mobile-label-padding: var(--w-c-pagination-mobile-label-padding, 0.8rem);
		--_item-border-width: var(--w-c-pagination-border-width, 0);
		--_item-border-radius: var(--w-c-pagination-border-radius, 9999px);
		--_item-focus-outline: var(
			--w-c-pagination-focus-outline,
			2px solid var(--w-s-color-border-focus)
		);
		--_item-focus-outline-offset: var(
			--w-c-pagination-focus-outline-offset,
			1px
		);
		--_font-size: var(--w-c-pagination-font-size, inherit);
		--_mobile-label-font-size: var(
			--w-c-pagination-mobile-label-font-size,
			var(--_font-size)
		);
		--_font-weight: var(--w-c-pagination-font-weight, 700);
		--_mobile-label-font-weight: var(
			--w-c-pagination-mobile-label-font-weight,
			var(--_font-weight)
		);
		--_line-height: var(--w-c-pagination-line-height, inherit);
		--_mobile-label-line-height: var(
			--w-c-pagination-mobile-label-line-height,
			var(--_line-height)
		);
		--_item-color-text: var(
			--w-c-pagination-color-text,
			var(--w-s-color-text-link)
		);
		--_item-color-text-hover: var(
			--w-c-pagination-color-text-hover,
			var(--_item-color-text)
		);
		--_item-color-text-active: var(
			--w-c-pagination-color-text-active,
			var(--_item-color-text)
		);
		--_item-color-text-selected: var(
			--w-c-pagination-color-text-selected,
			var(--_item-color-text)
		);
		--_current-page-text-color: var(
			--w-c-pagination-current-page-text-color,
			var(--w-s-color-text-inverted)
		);
		--_current-page-text-color-hover: var(
			--w-c-pagination-current-page-text-color-hover,
			var(--_current-page-text-color)
		);
		--_current-page-text-color-active: var(
			--w-c-pagination-current-page-text-color-active,
			var(--_current-page-text-color)
		);
		--_current-page-text-color-selected: var(
			--w-c-pagination-current-page-text-color-selected,
			var(--_current-page-text-color)
		);
		--_controls-text-color: var(
			--w-c-pagination-controls-text-color,
			var(--w-s-color-icon)
		);
		--_controls-text-color-hover: var(
			--w-c-pagination-controls-text-color-hover,
			var(--_controls-text-color)
		);
		--_controls-text-color-active: var(
			--w-c-pagination-controls-text-color-active,
			var(--_controls-text-color)
		);
		--_controls-text-color-selected: var(
			--w-c-pagination-controls-text-color-selected,
			var(--_controls-text-color)
		);
		--_item-color-background: var(
			--w-c-pagination-color-background,
			transparent
		);
		--_item-color-background-hover: var(
			--w-c-pagination-color-background-hover,
			var(--w-color-button-pill-background-hover)
		);
		--_item-color-background-active: var(
			--w-c-pagination-color-background-active,
			var(--w-color-button-pill-background-active)
		);
		--_item-color-background-selected: var(
			--w-c-pagination-color-background-selected,
			var(--_item-color-background)
		);
		--_current-page-color-background: var(
			--w-c-pagination-current-page-color-background,
			var(--w-s-color-background-primary)
		);
		--_current-page-color-background-hover: var(
			--w-c-pagination-current-page-color-background-hover,
			var(--_current-page-color-background)
		);
		--_current-page-color-background-active: var(
			--w-c-pagination-current-page-color-background-active,
			var(--_current-page-color-background)
		);
		--_current-page-color-background-selected: var(
			--w-c-pagination-current-page-color-background-selected,
			var(--_current-page-color-background)
		);
		--_controls-color-background: var(
			--w-c-pagination-controls-color-background,
			transparent
		);
		--_controls-color-background-hover: var(
			--w-c-pagination-controls-color-background-hover,
			var(--w-color-button-pill-background-hover)
		);
		--_controls-color-background-active: var(
			--w-c-pagination-controls-color-background-active,
			var(--w-color-button-pill-background-active)
		);
		--_controls-color-background-selected: var(
			--w-c-pagination-controls-color-background-selected,
			var(--_controls-color-background)
		);
		--_item-transition-duration: var(
			--w-c-pagination-transition-duration,
			0.15s
		);
		--_item-transition-property: var(
			--w-c-pagination-transition-property,
			color,
			background-color,
			border-color,
			text-decoration-color,
			fill,
			stroke
		);
		--_item-transition-timing-function: var(
			--w-c-pagination-transition-timing-function,
			cubic-bezier(0.4, 0, 0.2, 1)
		);
	}

	[part="base"] {
		align-items: center;
		display: flex;
		gap: var(--_gap);
		justify-content: center;
		padding: var(--_base-padding);
	}

	.sr-only {
		clip: rect(0, 0, 0, 0);
		border-width: 0;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	[part="control"],
	[part="page"],
	[part="page current"],
	[part="placeholder"] {
		display: inline-flex;
		min-height: 44px;
		min-width: 44px;
		padding: var(--_item-padding);
	}

	[part="placeholder"] {
		padding: var(--_placeholder-padding);
	}

	[part="control"],
	[part="page"],
	[part="page current"] {
		align-items: center;
		background-color: var(--_item-color-background);
		border-width: var(--_item-border-width);
		border-radius: var(--_item-border-radius);
		font-size: var(--_font-size);
		font-weight: var(--_font-weight);
		justify-content: center;
		line-height: var(--_line-height);
		transition-duration: var(--_item-transition-duration);
		transition-property: var(--_item-transition-property);
		transition-timing-function: var(--_item-transition-timing-function);
	}

	[part="control"] {
		background-color: var(--_controls-color-background);
		color: var(--_controls-text-color);
		padding: var(--_control-padding);
	}

	:is([part="control"], [part="page"], [part="page current"]):is(
		:hover,
		:focus
	) {
		text-decoration: none;
	}

	:is([part="control"], [part="page"], [part="page current"]):is(
		:focus,
		:focus-visible
	) {
		outline: var(--_item-focus-outline);
		outline-offset: var(--_item-focus-outline-offset);
	}

	:is([part="control"], [part="page"], [part="page current"]):not(
		:focus-visible
	) {
		outline: none;
	}

	[part="control"]:hover {
		background-clip: padding-box;
		background-color: var(--_controls-color-background-hover);
		color: var(--_controls-text-color-hover);
	}

	[part="control"]:active {
		background-color: var(--_controls-color-background-active);
		color: var(--_controls-text-color-active);
	}

	[part="control"][aria-current="page"] {
		background-color: var(--_controls-color-background-selected);
		color: var(--_controls-text-color-selected);
	}

	[part="page"],
	[part="page current"] {
		color: var(--_item-color-text);
		display: none;
	}

	[part="page"]:hover {
		background-clip: padding-box;
		background-color: var(--_item-color-background-hover);
		color: var(--_item-color-text-hover);
	}

	[part="page"]:active {
		background-color: var(--_item-color-background-active);
		color: var(--_item-color-text-active);
	}

	[part="page"][aria-current="page"] {
		background-color: var(--_item-color-background-selected);
		color: var(--_item-color-text-selected);
	}

	[part="page current"] {
		background-color: var(--_current-page-color-background-selected);
		color: var(--_current-page-text-color-selected);
		padding: var(--_current-page-padding);
	}

	[part="page current"]:hover {
		background-color: var(--_current-page-color-background-hover);
		color: var(--_current-page-text-color-hover);
	}

	[part="page current"]:active {
		background-color: var(--_current-page-color-background-active);
		color: var(--_current-page-text-color-active);
	}

	[part="mobile-label"] {
		display: block;
		font-size: var(--_mobile-label-font-size);
		font-weight: var(--_mobile-label-font-weight);
		line-height: var(--_mobile-label-line-height);
		padding: var(--_mobile-label-padding);
	}

	[part="icon"] {
		align-items: center;
		display: flex;
		height: 16px;
		pointer-events: none;
	}

	@media (min-width: 768px) {
		[part="page"],
		[part="page current"] {
			display: inline-flex;
		}

		[part="mobile-label"] {
			display: none;
		}
	}
`})))()}var F,I;function L(){return(L=e((()=>{c(),a(),d(),g(),l(),v(),w(),E(),O(),A(),M(),P(),F=()=>o._({id:`pagination.aria.icon-suffix`,message:`icon`,comment:`Suffix added at the end of icon titles when img semantics are lost on an html element`}),I=class extends i{static{this.styles=[_,N]}constructor(){super(),this.pages=0,this.currentPageNumber=1,this.visiblePages=7,u(T,k,D,C,j)}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowLastPageButton(){return this.currentPageIndex<this.pages-2}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(e,t)=>t+1);let e=Math.floor(this.visiblePages/2),t=Math.max(1,this.currentPageNumber-e),n=Math.min(this.pages,t+this.visiblePages-1);return n-t+1<this.visiblePages&&(t=Math.max(1,n-this.visiblePages+1)),Array.from({length:n-t+1},(e,n)=>t+n)}#e(e){let t=e.target.closest(`[data-page-number]`)?.getAttribute(`data-page-number`);t&&(this.dispatchEvent(new CustomEvent(`page-click`,{detail:{clickedPage:Number.parseInt(t)},bubbles:!0,composed:!0,cancelable:!0}))||e.preventDefault())}render(){let e=this.visiblePageNumbers;return n`<nav
			part="base"
			aria-labelledby="paginationLabel"
			@click="${this.#e}"
		>
			<h2 class="sr-only" id="paginationLabel">
				${o._({id:`pagination.aria.pagination`,message:`Pages`,comment:`Default screenreader message for pagination container in the pagination component`})}
			</h2>
			${this.shouldShowShowFirstPageButton?n`<a data-page-number="1" href="${this.baseUrl}1" part="control">
							<span class="sr-only">
								${o._({id:`pagination.aria.first-page`,message:`First page`,comment:`Default screenreader message for first page link in the pagination component`})},
							</span>
							<w-icon
								name="ChevronDoubleLeft"
								size="small"
								locale="${s()}"
								part="icon"
							></w-icon>
							<span class="sr-only">${F()}</span>
						</a>`:n`<span part="placeholder"></span>`}
			${this.shouldShowPreviousPageButton?n`<a
							data-page-number="${this.currentPageNumber-1}"
							href="${this.baseUrl}${this.currentPageNumber-1}"
							part="control"
						>
							<span class="sr-only"
								>${o._({id:`pagination.aria.prev-page`,message:`Previous page`,comment:`Default screenreader message for previous page link in the pagination component`})},</span
							>
							<w-icon
								name="ChevronLeft"
								size="small"
								locale="${s()}"
								part="icon"
							></w-icon>
							<span class="sr-only">${F()}</span>
						</a>`:n`<span part="placeholder"></span>`}
			${e.map(e=>{let t=e===this.currentPageNumber,r=`${this.baseUrl}${e}`,i=o._({id:`pagination.aria.page`,message:`Page {currentPage}`,values:{currentPage:e},comment:`Default screenreader message for page link in the pagination component`});return n`<a
					data-page-number="${e}"
					aria-label="${i}"
					href="${r}"
					part="page${t?` current`:``}"
					aria-current="${t?`page`:`false`}"
					>${e}</a
				>`})}
			<span part="mobile-label">
				${o._({id:`pagination.label.current-page`,message:`Page {currentPage}`,values:{currentPage:this.currentPageNumber},comment:`Default message for current page label in the pagination component`})}
			</span>
			${this.shouldShowNextPageButton?n`<a
							data-page-number="${this.currentPageNumber+1}"
							href="${this.baseUrl}${this.currentPageNumber+1}"
							part="control"
						>
							<span class="sr-only">
								${o._({id:`pagination.aria.next-page`,message:`Next page`,comment:`Default screenreader message for next page link in the pagination component`})},</span
							>
							<w-icon
								name="ChevronRight"
								size="small"
								locale="${s()}"
								part="icon"
							></w-icon>
							<span class="sr-only">${F()}</span>
						</a>`:n`<span part="placeholder"></span>`}
			${this.shouldShowLastPageButton?n`<a
							data-page-number="${this.pages}"
							href="${this.baseUrl}${this.pages}"
							part="control"
						>
							<span class="sr-only"
								>${o._({id:`pagination.aria.last-page`,message:`Last page`,comment:`Default screenreader message for last page link in the pagination component`})},</span
							>
							<w-icon
								name="ChevronDoubleRight"
								size="small"
								locale="${s()}"
								part="icon"
							></w-icon>
							<span class="sr-only">${F()}</span>
						</a>`:n`<span part="placeholder"></span>`}
		</nav>`}},p([f({type:String,reflect:!0,attribute:`base-url`})],I.prototype,`baseUrl`,void 0),p([f({type:Number,reflect:!0,useDefault:!0})],I.prototype,`pages`,void 0),p([f({type:Number,reflect:!0,attribute:`current-page`,useDefault:!0})],I.prototype,`currentPageNumber`,void 0),p([f({type:Number,reflect:!0,attribute:`visible-pages`,useDefault:!0})],I.prototype,`visiblePages`,void 0),customElements.get(`w-pagination`)||customElements.define(`w-pagination`,I)})))()}var R=t({BasicPagination:()=>W,LastPageSelected:()=>K,ManyPagesWithLimitedVisible:()=>q,MiddlePageSelected:()=>G,SinglePage:()=>J,__namedExportsOrder:()=>Y,default:()=>U}),z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{x(),m(),a(),L(),{events:B,args:V,argTypes:H}=h(`w-pagination`),U={title:`Navigation/Pagination`,render(e){return n(z||=S([`
			<w-pagination `,`></w-pagination>
			<script type="module">
				const pagination = document.querySelector("w-pagination");

				pagination.addEventListener("page-click", (event) => {
					event.preventDefault();
					pagination.currentPageNumber = event.detail.clickedPage;
				});
			<\/script>
		`]),y(b(e)))},args:V,argTypes:H,parameters:{actions:{handles:B}}},W={args:{"current-page":1,pages:5,"base-url":`/search?page=`}},G={args:{"current-page":4,pages:7,"base-url":`/search?page=`}},K={args:{"current-page":10,pages:10,"base-url":`/search?page=`}},q={args:{"current-page":15,pages:50,"visible-pages":5,"base-url":`/search?page=`}},J={args:{"current-page":1,pages:1,"base-url":`/search?page=`}},Y=[`BasicPagination`,`MiddlePageSelected`,`LastPageSelected`,`ManyPagesWithLimitedVisible`,`SinglePage`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 1,
    pages: 5,
    "base-url": "/search?page="
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 4,
    pages: 7,
    "base-url": "/search?page="
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 10,
    pages: 10,
    "base-url": "/search?page="
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 15,
    pages: 50,
    "visible-pages": 5,
    "base-url": "/search?page="
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 1,
    pages: 1,
    "base-url": "/search?page="
  }
}`,...J.parameters?.docs?.source}}}})))()}export{J as a,G as i,K as n,X as o,q as r,R as s,W as t};