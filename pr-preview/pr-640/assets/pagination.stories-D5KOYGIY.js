import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{At as n,B as r,D as i,E as a,Mt as o,Ot as s,Pt as c,_ as l,a as u,b as d,c as f,d as p,f as m,kt as h,l as g,o as _,s as v,u as y,z as b}from"./iframe-BbqLXBZw.js";import{i as x,n as S,r as C,t as w}from"./utilities-BaFvrV9l.js";var T,E=e((()=>{T=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})),D,O=e((()=>{D=JSON.parse(`{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"],"pagination.label.current-page":["Page ",["currentPage"]]}`)})),k,A=e((()=>{k=JSON.parse(`{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"],"pagination.label.current-page":["Sivu ",["currentPage"]]}`)})),j,M=e((()=>{j=JSON.parse(`{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"],"pagination.label.current-page":["Side ",["currentPage"]]}`)})),N,P=e((()=>{N=JSON.parse(`{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"],"pagination.label.current-page":["Sida ",["currentPage"]]}`)})),F,I=e((()=>{s(),F=c`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.border-0{border-width:0}.rounded-full{border-radius:9999px}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.hover\\:no-underline:hover,.focus\\:no-underline:focus{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-4{padding:.4rem}.p-8{padding:.8rem}.visible{visibility:visible}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:768px){.md\\:block{display:block}.md\\:hidden{display:none}}`})),L,R,z,B=e((()=>{r(),s(),l(),y(),g(),u(),E(),O(),A(),M(),P(),I(),m(),L=()=>b._({id:`pagination.aria.icon-suffix`,message:`icon`,comment:`Suffix added at the end of icon titles when img semantics are lost on an html element`}),R=`hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding`,z=class extends h{static{this.styles=[_,F,c`
      w-icon {
        height: 16px;
      }
    `]}constructor(){super(),v(D,j,k,T,N)}get _currentPage(){return this.currentPageNumber??1}get _visiblePages(){return this.visiblePages??7}get shouldShowShowFirstPageButton(){return this._currentPage-2>0}get shouldShowPreviousPageButton(){return this._currentPage-1>0}get shouldShowNextPageButton(){return this._currentPage<this.pages}get currentPageIndex(){return this._currentPage-1}get visiblePageNumbers(){if(this.pages<=this._visiblePages)return Array.from({length:this.pages},(e,t)=>t+1);let e=Math.floor(this._visiblePages/2),t=Math.max(1,this._currentPage-e),n=Math.min(this.pages,t+this._visiblePages-1);return n-t+1<this._visiblePages&&(t=Math.max(1,n-this._visiblePages+1)),Array.from({length:n-t+1},(e,n)=>t+n)}#e(e){let t=e.target.getAttribute(`data-page-number`);this.dispatchEvent(new CustomEvent(`page-click`,{detail:{clickedPage:t},bubbles:!0,composed:!0}))}render(){let e=this.visiblePageNumbers;return o`<nav class="flex items-center justify-center p-8" @click="${this.#e}">
      <h1 class="sr-only">
        ${b._({id:`pagination.aria.pagination`,message:`Pages`,comment:`Default screenreader message for pagination container in the pagination component`})}
      </h1>
      <div class="flex items-center s-text-link">
        ${this.shouldShowShowFirstPageButton?o`<a
              data-page-number="1"
              href="${this.baseUrl}1"
              class="${R+` s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}">
              <span class="sr-only"
                >${b._({id:`pagination.aria.first-page`,message:`First page`,comment:`Default screenreader message for first page link in the pagination component`})},</span
              >
              <w-icon name="ChevronDoubleLeft" size="small" locale="${f()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
              <span class="sr-only">${L()}</span>
            </a>`:n}
        ${this.shouldShowPreviousPageButton?o`<a
              data-page-number="${this._currentPage-1}"
              href="${this.baseUrl}${this._currentPage-1}"
              class="${R+` s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}">
              <span class="sr-only"
                >${b._({id:`pagination.aria.prev-page`,message:`Previous page`,comment:`Default screenreader message for previous page link in the pagination component`})},</span
              >
              <w-icon name="ChevronLeft" size="small" locale="${f()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
              <span class="sr-only">${L()}</span>
            </a>`:n}
        <div class="hidden md:block">
          ${e.map(e=>{let t=e===this._currentPage,n=`${this.baseUrl}${e}`,r=R;return t?r+=` s-bg-primary s-text-inverted`:r+=` hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`,o`<a
              data-page-number="${e}"
              aria-label="${b._({id:`pagination.aria.page`,message:`Page {currentPage}`,values:{currentPage:e},comment:`Default screenreader message for page link in the pagination component`})}"
              href="${n}"
              class="${r}"
              aria-current="${t?`page`:``}"
              >${e}</a
            >`})}
        </div>
        <span class="block md:hidden p-8 font-bold">${b._({id:`pagination.label.current-page`,message:`Page {currentPage}`,values:{currentPage:this._currentPage},comment:`Default message for current page label in the pagination component`})}</span>
        ${this.shouldShowNextPageButton?o`<a
              data-page-number="${this._currentPage+1}"
              href="${this.baseUrl}${this._currentPage+1}"
              class="${R+` s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`}">
              <span class="sr-only">
                ${b._({id:`pagination.aria.next-page`,message:`Next page`,comment:`Default screenreader message for next page link in the pagination component`})},</span
              >
              <w-icon name="ChevronRight" size="small" locale="${f()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
              <span class="sr-only">${L()}</span>
            </a>`:n}
      </div>
    </nav>`}},p([d({type:String,reflect:!0,attribute:`base-url`})],z.prototype,`baseUrl`,void 0),p([d({type:Number,reflect:!0})],z.prototype,`pages`,void 0),p([d({type:Number,reflect:!0,attribute:`current-page`})],z.prototype,`currentPageNumber`,void 0),p([d({type:Number,reflect:!0,attribute:`visible-pages`})],z.prototype,`visiblePages`,void 0),customElements.get(`w-pagination`)||customElements.define(`w-pagination`,z)})),V=t({BasicPagination:()=>K,LastPageSelected:()=>J,ManyPagesWithLimitedVisible:()=>Y,MiddlePageSelected:()=>q,SinglePage:()=>X,__namedExportsOrder:()=>Z,default:()=>G}),H,U,W,G,K,q,J,Y,X,Z,Q=e((()=>{C(),i(),s(),w(),B(),{events:H,args:U,argTypes:W}=a(`w-pagination`),G={title:`Navigation/Pagination`,render(e){return o`<w-pagination ${x(S(e))}></w-pagination>`},args:U,argTypes:W,parameters:{actions:{handles:H}}},K={args:{"current-page":1,pages:5,"base-url":`/search?page=`}},q={args:{"current-page":3,pages:7,"base-url":`/search?page=`}},J={args:{"current-page":10,pages:10,"base-url":`/search?page=`}},Y={args:{"current-page":15,pages:50,"visible-pages":5,"base-url":`/search?page=`}},X={args:{"current-page":1,pages:1,"base-url":`/search?page=`}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 1,
    pages: 5,
    'base-url': '/search?page='
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 3,
    pages: 7,
    'base-url': '/search?page='
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 10,
    pages: 10,
    'base-url': '/search?page='
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 15,
    pages: 50,
    'visible-pages': 5,
    'base-url': '/search?page='
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 1,
    pages: 1,
    'base-url': '/search?page='
  }
}`,...X.parameters?.docs?.source}}},Z=[`BasicPagination`,`MiddlePageSelected`,`LastPageSelected`,`ManyPagesWithLimitedVisible`,`SinglePage`]}));Q();export{K as BasicPagination,J as LastPageSelected,Y as ManyPagesWithLimitedVisible,q as MiddlePageSelected,X as SinglePage,Z as __namedExportsOrder,G as default,V as n,Q as t};