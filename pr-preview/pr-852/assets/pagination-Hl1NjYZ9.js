import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{T as t,_ as n,a as r,d as i,g as a,i as o,k as s,r as c,t as l,v as u,y as d}from"./decorate-r9jH0CjD.js";import{n as f,r as p,t as m}from"./i18n-CH8KbyPD.js";import{t as h}from"./icon-BLxYKJ3e.js";import{n as g,t as _}from"./styles-zocEQ6mS.js";var v;function y(){return(y=e((()=>{v=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})))()}var b;function x(){return(x=e((()=>{b=JSON.parse(`{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"],"pagination.label.current-page":["Page ",["currentPage"]]}`)})))()}var S;function C(){return(C=e((()=>{S=JSON.parse(`{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"],"pagination.label.current-page":["Sivu ",["currentPage"]]}`)})))()}var w;function T(){return(T=e((()=>{w=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"],"pagination.label.current-page":["Sida ",["currentPage"]]}`)})))()}var O;function k(){return(k=e((()=>{u(),O=s`
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
`})))()}var A,j;function M(){return(M=e((()=>{n(),u(),r(),o(),h(),p(),_(),y(),x(),C(),T(),D(),k(),A=()=>a._({id:`pagination.aria.icon-suffix`,message:`icon`,comment:`Suffix added at the end of icon titles when img semantics are lost on an html element`}),j=class extends d{static{this.styles=[g,O]}constructor(){super(),this.pages=0,this.currentPageNumber=1,this.visiblePages=7,new c(this),m(b,w,S,v,E)}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowLastPageButton(){return this.currentPageIndex<this.pages-2}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(e,t)=>t+1);let e=Math.floor(this.visiblePages/2),t=Math.max(1,this.currentPageNumber-e),n=Math.min(this.pages,t+this.visiblePages-1);return n-t+1<this.visiblePages&&(t=Math.max(1,n-this.visiblePages+1)),Array.from({length:n-t+1},(e,n)=>t+n)}#e(e){let t=e.target.getAttribute(`data-page-number`);t&&(this.dispatchEvent(new CustomEvent(`page-click`,{detail:{clickedPage:Number.parseInt(t)},bubbles:!0,composed:!0,cancelable:!0}))||e.preventDefault())}render(){let e=this.visiblePageNumbers;return t`<nav
			part="base"
			aria-labelledby="paginationLabel"
			@click="${this.#e}"
		>
			<h2 class="sr-only" id="paginationLabel">
				${a._({id:`pagination.aria.pagination`,message:`Pages`,comment:`Default screenreader message for pagination container in the pagination component`})}
			</h2>
			${this.shouldShowShowFirstPageButton?t`<a data-page-number="1" href="${this.baseUrl}1" part="control">
							<span class="sr-only">
								${a._({id:`pagination.aria.first-page`,message:`First page`,comment:`Default screenreader message for first page link in the pagination component`})},
							</span>
							<w-icon
								name="ChevronDoubleLeft"
								size="small"
								locale="${f()}"
								part="icon"
							></w-icon>
							<span class="sr-only">${A()}</span>
						</a>`:t`<span part="placeholder"></span>`}
			${this.shouldShowPreviousPageButton?t`<a
							data-page-number="${this.currentPageNumber-1}"
							href="${this.baseUrl}${this.currentPageNumber-1}"
							part="control"
						>
							<span class="sr-only"
								>${a._({id:`pagination.aria.prev-page`,message:`Previous page`,comment:`Default screenreader message for previous page link in the pagination component`})},</span
							>
							<w-icon
								name="ChevronLeft"
								size="small"
								locale="${f()}"
								part="icon"
							></w-icon>
							<span class="sr-only">${A()}</span>
						</a>`:t`<span part="placeholder"></span>`}
			${e.map(e=>{let n=e===this.currentPageNumber,r=`${this.baseUrl}${e}`,i=a._({id:`pagination.aria.page`,message:`Page {currentPage}`,values:{currentPage:e},comment:`Default screenreader message for page link in the pagination component`});return t`<a
					data-page-number="${e}"
					aria-label="${i}"
					href="${r}"
					part="page${n?` current`:``}"
					aria-current="${n?`page`:`false`}"
					>${e}</a
				>`})}
			<span part="mobile-label">
				${a._({id:`pagination.label.current-page`,message:`Page {currentPage}`,values:{currentPage:this.currentPageNumber},comment:`Default message for current page label in the pagination component`})}
			</span>
			${this.shouldShowNextPageButton?t`<a
							data-page-number="${this.currentPageNumber+1}"
							href="${this.baseUrl}${this.currentPageNumber+1}"
							part="control"
						>
							<span class="sr-only">
								${a._({id:`pagination.aria.next-page`,message:`Next page`,comment:`Default screenreader message for next page link in the pagination component`})},</span
							>
							<w-icon
								name="ChevronRight"
								size="small"
								locale="${f()}"
								part="icon"
							></w-icon>
							<span class="sr-only">${A()}</span>
						</a>`:t`<span part="placeholder"></span>`}
			${this.shouldShowLastPageButton?t`<a
							data-page-number="${this.pages}"
							href="${this.baseUrl}${this.pages}"
							part="control"
						>
							<span class="sr-only"
								>${a._({id:`pagination.aria.last-page`,message:`Last page`,comment:`Default screenreader message for last page link in the pagination component`})},</span
							>
							<w-icon
								name="ChevronDoubleRight"
								size="small"
								locale="${f()}"
								part="icon"
							></w-icon>
							<span class="sr-only">${A()}</span>
						</a>`:t`<span part="placeholder"></span>`}
		</nav>`}},l([i({type:String,reflect:!0,attribute:`base-url`})],j.prototype,`baseUrl`,void 0),l([i({type:Number,reflect:!0,useDefault:!0})],j.prototype,`pages`,void 0),l([i({type:Number,reflect:!0,attribute:`current-page`,useDefault:!0})],j.prototype,`currentPageNumber`,void 0),l([i({type:Number,reflect:!0,attribute:`visible-pages`,useDefault:!0})],j.prototype,`visiblePages`,void 0),customElements.get(`w-pagination`)||customElements.define(`w-pagination`,j)})))()}export{M as t};