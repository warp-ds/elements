import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{A as n,Bt as r,E as i,Ht as a,J as o,Kt as s,Lt as c,M as l,N as u,Rt as d,Wt as f,b as p,d as m,f as h,j as g,k as _,l as v,p as y,q as b,u as x}from"./iframe-u8vUQiJl.js";import{a as S,n as C,r as w,t as T}from"./utilities-vVqj8CEN.js";var E,D=t((()=>{E=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})),O,k=t((()=>{O=JSON.parse(`{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"],"pagination.label.current-page":["Page ",["currentPage"]]}`)})),A,j=t((()=>{A=JSON.parse(`{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"],"pagination.label.current-page":["Sivu ",["currentPage"]]}`)})),M,N=t((()=>{M=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})),P,F=t((()=>{P=JSON.parse(`{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"],"pagination.label.current-page":["Sida ",["currentPage"]]}`)})),I,L=t((()=>{c(),I=s(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.border-0{border-width:0}.rounded-full{border-radius:9999px}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.hover\\:no-underline:hover,.focus\\:no-underline:focus{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-4{padding:.4rem}.p-8{padding:.8rem}.visible{visibility:visible}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:768px){.md\\:block{display:block}.md\\:hidden{display:none}}`)})),R,z,B,V=t((()=>{o(),c(),p(),m(),g(),v(),D(),k(),j(),N(),F(),L(),y(),R=()=>b._({id:`pagination.aria.icon-suffix`,message:`icon`,comment:`Suffix added at the end of icon titles when img semantics are lost on an html element`}),z=`hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding`,B=class extends d{static{this.styles=[x,I,f`
      w-icon {
        height: 16px;
      }
    `]}constructor(){super(),this.pages=0,this.currentPageNumber=1,this.visiblePages=7,_(O,M,A,E,P)}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(e,t)=>t+1);let e=Math.floor(this.visiblePages/2),t=Math.max(1,this.currentPageNumber-e),n=Math.min(this.pages,t+this.visiblePages-1);return n-t+1<this.visiblePages&&(t=Math.max(1,n-this.visiblePages+1)),Array.from({length:n-t+1},(e,n)=>t+n)}#e(e){let t=e.target.getAttribute(`data-page-number`);this.dispatchEvent(new CustomEvent(`page-click`,{detail:{clickedPage:t},bubbles:!0,composed:!0}))}render(){let e=this.visiblePageNumbers;return a`<nav class="flex items-center justify-center p-8" @click="${this.#e}">
      <h1 class="sr-only">
        ${b._({id:`pagination.aria.pagination`,message:`Pages`,comment:`Default screenreader message for pagination container in the pagination component`})}
      </h1>
      <div class="flex items-center s-text-link">
        ${this.shouldShowShowFirstPageButton?a`<a
              data-page-number="1"
              href="${this.baseUrl}1"
              class="${`hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}">
              <span class="sr-only"
                >${b._({id:`pagination.aria.first-page`,message:`First page`,comment:`Default screenreader message for first page link in the pagination component`})},</span
              >
              <w-icon name="ChevronDoubleLeft" size="small" locale="${n()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
              <span class="sr-only">${R()}</span>
            </a>`:r}
        ${this.shouldShowPreviousPageButton?a`<a
              data-page-number="${this.currentPageNumber-1}"
              href="${this.baseUrl}${this.currentPageNumber-1}"
              class="${`hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}">
              <span class="sr-only"
                >${b._({id:`pagination.aria.prev-page`,message:`Previous page`,comment:`Default screenreader message for previous page link in the pagination component`})},</span
              >
              <w-icon name="ChevronLeft" size="small" locale="${n()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
              <span class="sr-only">${R()}</span>
            </a>`:r}
        <div class="hidden md:block">
          ${e.map(e=>{let t=e===this.currentPageNumber,n=`${this.baseUrl}${e}`,r=z;return t?r+=` s-bg-primary s-text-inverted`:r+=` hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`,a`<a
              data-page-number="${e}"
              aria-label="${b._({id:`pagination.aria.page`,message:`Page {currentPage}`,values:{currentPage:e},comment:`Default screenreader message for page link in the pagination component`})}"
              href="${n}"
              class="${r}"
              aria-current="${t?`page`:``}"
              >${e}</a
            >`})}
        </div>
        <span class="block md:hidden p-8 font-bold">${b._({id:`pagination.label.current-page`,message:`Page {currentPage}`,values:{currentPage:this.currentPageNumber},comment:`Default message for current page label in the pagination component`})}</span>
        ${this.shouldShowNextPageButton?a`<a
              data-page-number="${this.currentPageNumber+1}"
              href="${this.baseUrl}${this.currentPageNumber+1}"
              class="${`hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}">
              <span class="sr-only">
                ${b._({id:`pagination.aria.next-page`,message:`Next page`,comment:`Default screenreader message for next page link in the pagination component`})},</span
              >
              <w-icon name="ChevronRight" size="small" locale="${n()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
              <span class="sr-only">${R()}</span>
            </a>`:r}
      </div>
    </nav>`}},h([i({type:String,reflect:!0,attribute:`base-url`})],B.prototype,`baseUrl`,void 0),h([i({type:Number,reflect:!0,useDefault:!0})],B.prototype,`pages`,void 0),h([i({type:Number,reflect:!0,attribute:`current-page`,useDefault:!0})],B.prototype,`currentPageNumber`,void 0),h([i({type:Number,reflect:!0,attribute:`visible-pages`,useDefault:!0})],B.prototype,`visiblePages`,void 0),customElements.get(`w-pagination`)||customElements.define(`w-pagination`,B)})),H=e({BasicPagination:()=>q,LastPageSelected:()=>Y,ManyPagesWithLimitedVisible:()=>X,MiddlePageSelected:()=>J,SinglePage:()=>Z,__namedExportsOrder:()=>Q,default:()=>K}),U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{w(),u(),c(),T(),V(),{events:U,args:W,argTypes:G}=l(`w-pagination`),K={title:`Navigation/Pagination`,render(e){return a`<w-pagination ${S(C(e))}></w-pagination>`},args:W,argTypes:G,parameters:{actions:{handles:U}}},q={args:{"current-page":1,pages:5,"base-url":`/search?page=`}},J={args:{"current-page":3,pages:7,"base-url":`/search?page=`}},Y={args:{"current-page":10,pages:10,"base-url":`/search?page=`}},X={args:{"current-page":15,pages:50,"visible-pages":5,"base-url":`/search?page=`}},Z={args:{"current-page":1,pages:1,"base-url":`/search?page=`}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 1,
    pages: 5,
    'base-url': '/search?page='
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 3,
    pages: 7,
    'base-url': '/search?page='
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 10,
    pages: 10,
    'base-url': '/search?page='
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 15,
    pages: 50,
    'visible-pages': 5,
    'base-url': '/search?page='
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 1,
    pages: 1,
    'base-url': '/search?page='
  }
}`,...Z.parameters?.docs?.source}}},Q=[`BasicPagination`,`MiddlePageSelected`,`LastPageSelected`,`ManyPagesWithLimitedVisible`,`SinglePage`]}));$();export{q as BasicPagination,Y as LastPageSelected,X as ManyPagesWithLimitedVisible,J as MiddlePageSelected,Z as SinglePage,Q as __namedExportsOrder,K as default,H as n,$ as t};