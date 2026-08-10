import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,l as i,r as a,s as o,t as s,x as c,y as l}from"./decorate-Bt2QF_uA.js";import{a as u,n as d,o as f,r as p,t as m}from"./i18n-CkjYRTT1.js";import{n as h,t as g}from"./dist-D5kJVy4t.js";import{t as _}from"./icon-CD69d68Q.js";import{n as v,t as y}from"./styles-Cw_r5k83.js";import{i as b,n as x,r as S}from"./utilities-BHNt5DhH.js";import{t as C}from"./taggedTemplateLiteral-BZenJ0bZ.js";var w;function T(){return(T=e((()=>{w=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"],"pagination.label.current-page":["Page ",["currentPage"]]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"],"pagination.label.current-page":["Sivu ",["currentPage"]]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"],"pagination.label.current-page":["Sida ",["currentPage"]]}`)})))()}var P;function F(){return(F=e((()=>{n(),P=c(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.border-0{border-width:0}.rounded-full{border-radius:9999px}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.hover\\:no-underline:hover,.focus\\:no-underline:focus{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-4{padding:.4rem}.p-8{padding:.8rem}.visible{visibility:visible}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:768px){.md\\:block{display:block}.md\\:hidden{display:none}}`)})))()}var I,L,R,z;function B(){return(B=e((()=>{f(),n(),a(),_(),p(),y(),T(),D(),k(),j(),N(),F(),I=()=>u._({id:`pagination.aria.icon-suffix`,message:`icon`,comment:`Suffix added at the end of icon titles when img semantics are lost on an html element`}),L=`min-h-[44px] min-w-[44px] p-4`,R=`hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out ${L} rounded-full border-0 hover:bg-clip-padding`,z=class extends i{static{this.styles=[v,P,l`
			:host {
				display: block;
			}
			w-icon {
				height: 16px;
			}
		`]}constructor(){super(),this.pages=0,this.currentPageNumber=1,this.visiblePages=7,m(E,A,O,w,M)}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowLastPageButton(){return this.currentPageIndex<this.pages-2}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(e,t)=>t+1);let e=Math.floor(this.visiblePages/2),t=Math.max(1,this.currentPageNumber-e),n=Math.min(this.pages,t+this.visiblePages-1);return n-t+1<this.visiblePages&&(t=Math.max(1,n-this.visiblePages+1)),Array.from({length:n-t+1},(e,n)=>t+n)}#e(e){let t=e.target.getAttribute(`data-page-number`);t&&(this.dispatchEvent(new CustomEvent(`page-click`,{detail:{clickedPage:Number.parseInt(t)},bubbles:!0,composed:!0,cancelable:!0}))||e.preventDefault())}render(){let e=this.visiblePageNumbers;return r`<nav
			class="flex items-center justify-center p-8"
			@click="${this.#e}"
		>
			<h2 class="sr-only">
				${u._({id:`pagination.aria.pagination`,message:`Pages`,comment:`Default screenreader message for pagination container in the pagination component`})}
			</h2>
			<div class="flex items-center">
				${this.shouldShowShowFirstPageButton?r`<a
								data-page-number="1"
								href="${this.baseUrl}1"
								class="${R+` s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}"
							>
								<span class="sr-only">
									${u._({id:`pagination.aria.first-page`,message:`First page`,comment:`Default screenreader message for first page link in the pagination component`})},
								</span>
								<w-icon
									name="ChevronDoubleLeft"
									size="small"
									locale="${d()}"
									class="pointer-events-none flex items-center"
								></w-icon>
								<span class="sr-only">${I()}</span>
							</a>`:r`<span class="${L}"></span>`}
				${this.shouldShowPreviousPageButton?r`<a
								data-page-number="${this.currentPageNumber-1}"
								href="${this.baseUrl}${this.currentPageNumber-1}"
								class="${R+` s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}"
							>
								<span class="sr-only"
									>${u._({id:`pagination.aria.prev-page`,message:`Previous page`,comment:`Default screenreader message for previous page link in the pagination component`})},</span
								>
								<w-icon
									name="ChevronLeft"
									size="small"
									locale="${d()}"
									class="pointer-events-none flex items-center"
								></w-icon>
								<span class="sr-only">${I()}</span>
							</a>`:r`<span class="${L}"></span>`}
				<div class="hidden md:block font-bold">
					${e.map(e=>{let t=e===this.currentPageNumber,n=`${this.baseUrl}${e}`,i=R;i+=t?` s-bg-primary s-text-inverted`:` s-text-link hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`;let a=u._({id:`pagination.aria.page`,message:`Page {currentPage}`,values:{currentPage:e},comment:`Default screenreader message for page link in the pagination component`});return r`<a
							data-page-number="${e}"
							aria-label="${a}"
							href="${n}"
							class="${i}"
							aria-current="${t?`page`:`false`}"
							>${e}</a
						>`})}
				</div>
				<span class="block md:hidden p-8 font-bold ">
					${u._({id:`pagination.label.current-page`,message:`Page {currentPage}`,values:{currentPage:this.currentPageNumber},comment:`Default message for current page label in the pagination component`})}
				</span>
				${this.shouldShowNextPageButton?r`<a
								data-page-number="${this.currentPageNumber+1}"
								href="${this.baseUrl}${this.currentPageNumber+1}"
								class="${R+` s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}"
							>
								<span class="sr-only">
									${u._({id:`pagination.aria.next-page`,message:`Next page`,comment:`Default screenreader message for next page link in the pagination component`})},</span
								>
								<w-icon
									name="ChevronRight"
									size="small"
									locale="${d()}"
									class="pointer-events-none flex items-center"
								></w-icon>
								<span class="sr-only">${I()}</span>
							</a>`:r`<span class="${L}"></span>`}
				${this.shouldShowLastPageButton?r`<a
								data-page-number="${this.pages}"
								href="${this.baseUrl}${this.pages}"
								class="${R+` s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}"
							>
								<span class="sr-only"
									>${u._({id:`pagination.aria.last-page`,message:`Last page`,comment:`Default screenreader message for last page link in the pagination component`})},</span
								>
								<w-icon
									name="ChevronDoubleRight"
									size="small"
									locale="${d()}"
									class="pointer-events-none flex items-center"
								></w-icon>
								<span class="sr-only">${I()}</span>
							</a>`:r`<span class="${L}"></span>`}
			</div>
		</nav>`}},s([o({type:String,reflect:!0,attribute:`base-url`})],z.prototype,`baseUrl`,void 0),s([o({type:Number,reflect:!0,useDefault:!0})],z.prototype,`pages`,void 0),s([o({type:Number,reflect:!0,attribute:`current-page`,useDefault:!0})],z.prototype,`currentPageNumber`,void 0),s([o({type:Number,reflect:!0,attribute:`visible-pages`,useDefault:!0})],z.prototype,`visiblePages`,void 0),customElements.get(`w-pagination`)||customElements.define(`w-pagination`,z)})))()}var V=t({BasicPagination:()=>q,LastPageSelected:()=>Y,ManyPagesWithLimitedVisible:()=>X,MiddlePageSelected:()=>J,SinglePage:()=>Z,__namedExportsOrder:()=>Q,default:()=>K}),H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{S(),h(),n(),B(),{events:U,args:W,argTypes:G}=g(`w-pagination`),K={title:`Navigation/Pagination`,render(e){return r(H||=C([`
            <w-pagination `,`></w-pagination>
            <script type="module">
                const pagination = document.querySelector("w-pagination");

                pagination.addEventListener("page-click", (event) => {
                    event.preventDefault();
                    pagination.currentPageNumber = event.detail.clickedPage;
                });
            <\/script>
        `]),b(x(e)))},args:W,argTypes:G,parameters:{actions:{handles:U}}},q={args:{"current-page":1,pages:5,"base-url":`/search?page=`}},J={args:{"current-page":4,pages:7,"base-url":`/search?page=`}},Y={args:{"current-page":10,pages:10,"base-url":`/search?page=`}},X={args:{"current-page":15,pages:50,"visible-pages":5,"base-url":`/search?page=`}},Z={args:{"current-page":1,pages:1,"base-url":`/search?page=`}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 1,
    pages: 5,
    "base-url": "/search?page="
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 4,
    pages: 7,
    "base-url": "/search?page="
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 10,
    pages: 10,
    "base-url": "/search?page="
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 15,
    pages: 50,
    "visible-pages": 5,
    "base-url": "/search?page="
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 1,
    pages: 1,
    "base-url": "/search?page="
  }
}`,...Z.parameters?.docs?.source}}},Q=[`BasicPagination`,`MiddlePageSelected`,`LastPageSelected`,`ManyPagesWithLimitedVisible`,`SinglePage`]})))()}export{Z as a,J as i,Y as n,$ as o,X as r,V as s,q as t};