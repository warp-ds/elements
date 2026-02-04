import{a as P,l as t,i as y,v as k,r as S,A as v,d as w,b as s,n as h,g as $}from"./iframe-27MbPrni.js";import{s as N,p as _}from"./utilities-DIliPv0V.js";const F=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),M=JSON.parse('{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"]}'),z=JSON.parse('{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"]}'),B=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),L=JSON.parse('{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"]}'),O=P`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.border-0{border-width:0}.rounded-full{border-radius:9999px}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.hover\\:no-underline:hover,.focus\\:no-underline:focus{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-4{padding:.4rem}.p-8{padding:.8rem}.visible{visibility:visible}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:768px){.md\\:block{display:block}.md\\:hidden{display:none}}`;var j=Object.defineProperty,f=(o,i,e,n)=>{for(var r=void 0,a=o.length-1,b;a>=0;a--)(b=o[a])&&(r=b(i,e,r)||r);return r&&j(i,e,r),r};const x=t._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"}),m="hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding";class d extends y{constructor(){super(),this.currentPageNumber=1,this.visiblePages=7,k(M,B,z,F,L)}static{this.styles=[S,O,P`
      w-icon {
        height: 16px;
      }
    `]}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(r,a)=>a+1);const i=Math.floor(this.visiblePages/2);let e=Math.max(1,this.currentPageNumber-i);const n=Math.min(this.pages,e+this.visiblePages-1);return n-e+1<this.visiblePages&&(e=Math.max(1,n-this.visiblePages+1)),Array.from({length:n-e+1},(r,a)=>e+a)}#e(i){const e=i.target.getAttribute("data-page-number");this.dispatchEvent(new CustomEvent("page-click",{detail:{clickedPage:e},bubbles:!0,composed:!0}))}render(){const i=this.visiblePageNumbers;return s`<nav class="flex items-center justify-center p-8" @click="${this.#e}">
      <h1 class="sr-only">
        ${t._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"})}
      </h1>
      <div class="flex items-center s-text-link">
        ${this.shouldShowShowFirstPageButton?s`<a
              data-page-number="1"
              href="${this.baseUrl}1"
              class="${m+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${t._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page link in the pagination component"})},</span
              >
              <w-icon name="ChevronDoubleLeft" size="small" locale="${w()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
              <span class="sr-only">${x}</span>
            </a>`:v}
        ${this.shouldShowPreviousPageButton?s`<a
              data-page-number="${this.currentPageNumber-1}"
              href="${this.baseUrl}${this.currentPageNumber-1}"
              class="${m+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${t._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page link in the pagination component"})},</span
              >
              <w-icon name="ChevronLeft" size="small" locale="${w()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
              <span class="sr-only">${x}</span>
            </a>`:v}
        <div class="hidden md:block">
          ${i.map(e=>{const n=e===this.currentPageNumber,r=`${this.baseUrl}${e}`;let a=m;n?a+=" s-bg-primary s-text-inverted":a+=" hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]";const b=t._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:e},comment:"Default screenreader message for page link in the pagination component"});return s`<a
              data-page-number="${e}"
              aria-label="${b}"
              href="${r}"
              class="${a}"
              aria-current="${n?"page":""}"
              >${e}</a
            >`})}
        </div>
        <span class="block md:hidden p-8 font-bold">${t._({id:"pagination.label.current-page",message:"Page {currentPage}",values:{currentPage:this.currentPageNumber},comment:"Default message for current page label in the pagination component"})}</span>
        ${this.shouldShowNextPageButton?s`<a
              data-page-number="${this.currentPageNumber+1}"
              href="${this.baseUrl}${this.currentPageNumber+1}"
              class="${m+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only">
                ${t._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page link in the pagination component"})},</span
              >
              <w-icon name="ChevronRight" size="small" locale="${w()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
              <span class="sr-only">${x}</span>
            </a>`:v}
      </div>
    </nav>`}}f([h({type:String,reflect:!0,attribute:"base-url"})],d.prototype,"baseUrl");f([h({type:Number,reflect:!0})],d.prototype,"pages");f([h({type:Number,reflect:!0,attribute:"current-page"})],d.prototype,"currentPageNumber");f([h({type:Number,reflect:!0,attribute:"visible-pages"})],d.prototype,"visiblePages");customElements.get("w-pagination")||customElements.define("w-pagination",d);const{events:C,args:D,argTypes:E}=$("w-pagination"),J={title:"Navigation/Pagination",render(o){return s`<w-pagination ${N(_(o))}></w-pagination>`},args:D,argTypes:E,parameters:{actions:{handles:C}}},c={args:{"current-page":1,pages:5,"base-url":"/search?page="}},g={args:{"current-page":3,pages:7,"base-url":"/search?page="}},l={args:{"current-page":10,pages:10,"base-url":"/search?page="}},p={args:{"current-page":15,pages:50,"visible-pages":5,"base-url":"/search?page="}},u={args:{"current-page":1,pages:1,"base-url":"/search?page="}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 1,
    pages: 5,
    'base-url': '/search?page='
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 3,
    pages: 7,
    'base-url': '/search?page='
  }
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 10,
    pages: 10,
    'base-url': '/search?page='
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 15,
    pages: 50,
    'visible-pages': 5,
    'base-url': '/search?page='
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 1,
    pages: 1,
    'base-url': '/search?page='
  }
}`,...u.parameters?.docs?.source}}};const U=["BasicPagination","MiddlePageSelected","LastPageSelected","ManyPagesWithLimitedVisible","SinglePage"],W=Object.freeze(Object.defineProperty({__proto__:null,BasicPagination:c,LastPageSelected:l,ManyPagesWithLimitedVisible:p,MiddlePageSelected:g,SinglePage:u,__namedExportsOrder:U,default:J},Symbol.toStringTag,{value:"Module"}));export{c as B,l as L,g as M,W as P,u as S,p as a};
