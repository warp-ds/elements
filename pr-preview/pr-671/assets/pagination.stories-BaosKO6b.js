import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,d as r,h as i,l as a,r as o,s,t as c,x as l,y as u}from"./decorate-Bt2QF_uA.js";import{a as d,n as f,o as p,r as m,t as h}from"./i18n-Bcb14Fzc.js";import{n as g,t as _}from"./dist-D5kJVy4t.js";import{t as v}from"./icon-CD69d68Q.js";import{n as y,t as b}from"./styles-Cw_r5k83.js";import{i as x,n as S,r as C}from"./utilities-BHNt5DhH.js";var w;function T(){return(T=e((()=>{w=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"],"pagination.label.current-page":["Page ",["currentPage"]]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"],"pagination.label.current-page":["Sivu ",["currentPage"]]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"],"pagination.label.current-page":["Sida ",["currentPage"]]}`)})))()}var P;function F(){return(F=e((()=>{n(),P=l(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.border-0{border-width:0}.rounded-full{border-radius:9999px}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.hover\\:no-underline:hover,.focus\\:no-underline:focus{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-4{padding:.4rem}.p-8{padding:.8rem}.visible{visibility:visible}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:768px){.md\\:block{display:block}.md\\:hidden{display:none}}`)})))()}var I,L,R;function z(){return(z=e((()=>{p(),n(),o(),v(),m(),b(),T(),D(),k(),j(),N(),F(),I=()=>d._({id:`pagination.aria.icon-suffix`,message:`icon`,comment:`Suffix added at the end of icon titles when img semantics are lost on an html element`}),L=`hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding`,R=class extends a{static{this.styles=[y,P,u`
			w-icon {
				height: 16px;
			}
		`]}constructor(){super(),this.pages=0,this.currentPageNumber=1,this.visiblePages=7,h(E,A,O,w,M)}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(e,t)=>t+1);let e=Math.floor(this.visiblePages/2),t=Math.max(1,this.currentPageNumber-e),n=Math.min(this.pages,t+this.visiblePages-1);return n-t+1<this.visiblePages&&(t=Math.max(1,n-this.visiblePages+1)),Array.from({length:n-t+1},(e,n)=>t+n)}#e(e){let t=e.target.getAttribute(`data-page-number`);this.dispatchEvent(new CustomEvent(`page-click`,{detail:{clickedPage:t},bubbles:!0,composed:!0}))}render(){let e=this.visiblePageNumbers;return i`<nav
			class="flex items-center justify-center p-8"
			@click="${this.#e}"
		>
			<h1 class="sr-only">
				${d._({id:`pagination.aria.pagination`,message:`Pages`,comment:`Default screenreader message for pagination container in the pagination component`})}
			</h1>
			<div class="flex items-center s-text-link">
				${this.shouldShowShowFirstPageButton?i`<a
								data-page-number="1"
								href="${this.baseUrl}1"
								class="${`hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}"
							>
								<span class="sr-only"
									>${d._({id:`pagination.aria.first-page`,message:`First page`,comment:`Default screenreader message for first page link in the pagination component`})},</span
								>
								<w-icon
									name="ChevronDoubleLeft"
									size="small"
									locale="${f()}"
									class="pointer-events-none flex items-center"
									class="flex"
								></w-icon>
								<span class="sr-only">${I()}</span>
							</a>`:r}
				${this.shouldShowPreviousPageButton?i`<a
								data-page-number="${this.currentPageNumber-1}"
								href="${this.baseUrl}${this.currentPageNumber-1}"
								class="${`hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}"
							>
								<span class="sr-only"
									>${d._({id:`pagination.aria.prev-page`,message:`Previous page`,comment:`Default screenreader message for previous page link in the pagination component`})},</span
								>
								<w-icon
									name="ChevronLeft"
									size="small"
									locale="${f()}"
									class="pointer-events-none flex items-center"
									class="flex"
								></w-icon>
								<span class="sr-only">${I()}</span>
							</a>`:r}
				<div class="hidden md:block">
					${e.map(e=>{let t=e===this.currentPageNumber,n=`${this.baseUrl}${e}`,r=L;r+=t?` s-bg-primary s-text-inverted`:` hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`;let a=d._({id:`pagination.aria.page`,message:`Page {currentPage}`,values:{currentPage:e},comment:`Default screenreader message for page link in the pagination component`});return i`<a
							data-page-number="${e}"
							aria-label="${a}"
							href="${n}"
							class="${r}"
							aria-current="${t?`page`:``}"
							>${e}</a
						>`})}
				</div>
				<span class="block md:hidden p-8 font-bold"
					>${d._({id:`pagination.label.current-page`,message:`Page {currentPage}`,values:{currentPage:this.currentPageNumber},comment:`Default message for current page label in the pagination component`})}</span
				>
				${this.shouldShowNextPageButton?i`<a
								data-page-number="${this.currentPageNumber+1}"
								href="${this.baseUrl}${this.currentPageNumber+1}"
								class="${`hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}"
							>
								<span class="sr-only">
									${d._({id:`pagination.aria.next-page`,message:`Next page`,comment:`Default screenreader message for next page link in the pagination component`})},</span
								>
								<w-icon
									name="ChevronRight"
									size="small"
									locale="${f()}"
									class="pointer-events-none flex items-center"
									class="flex"
								></w-icon>
								<span class="sr-only">${I()}</span>
							</a>`:r}
			</div>
		</nav>`}},c([s({type:String,reflect:!0,attribute:`base-url`})],R.prototype,`baseUrl`,void 0),c([s({type:Number,reflect:!0,useDefault:!0})],R.prototype,`pages`,void 0),c([s({type:Number,reflect:!0,attribute:`current-page`,useDefault:!0})],R.prototype,`currentPageNumber`,void 0),c([s({type:Number,reflect:!0,attribute:`visible-pages`,useDefault:!0})],R.prototype,`visiblePages`,void 0),customElements.get(`w-pagination`)||customElements.define(`w-pagination`,R)})))()}var B=t({BasicPagination:()=>G,LastPageSelected:()=>q,ManyPagesWithLimitedVisible:()=>J,MiddlePageSelected:()=>K,SinglePage:()=>Y,__namedExportsOrder:()=>X,default:()=>W}),V,H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{C(),g(),n(),z(),{events:V,args:H,argTypes:U}=_(`w-pagination`),W={title:`Navigation/Pagination`,render(e){return i`<w-pagination ${x(S(e))}></w-pagination>`},args:H,argTypes:U,parameters:{actions:{handles:V}}},G={args:{"current-page":1,pages:5,"base-url":`/search?page=`}},K={args:{"current-page":3,pages:7,"base-url":`/search?page=`}},q={args:{"current-page":10,pages:10,"base-url":`/search?page=`}},J={args:{"current-page":15,pages:50,"visible-pages":5,"base-url":`/search?page=`}},Y={args:{"current-page":1,pages:1,"base-url":`/search?page=`}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 1,
    pages: 5,
    "base-url": "/search?page="
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 3,
    pages: 7,
    "base-url": "/search?page="
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 10,
    pages: 10,
    "base-url": "/search?page="
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 15,
    pages: 50,
    "visible-pages": 5,
    "base-url": "/search?page="
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 1,
    pages: 1,
    "base-url": "/search?page="
  }
}`,...Y.parameters?.docs?.source}}},X=[`BasicPagination`,`MiddlePageSelected`,`LastPageSelected`,`ManyPagesWithLimitedVisible`,`SinglePage`]})))()}export{Y as a,K as i,q as n,Z as o,J as r,B as s,G as t};