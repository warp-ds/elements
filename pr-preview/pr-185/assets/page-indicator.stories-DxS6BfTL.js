import{a as y,q as P,i as h,l as C,b as s,n as m,k as w,m as x}from"./iframe-D-NhsoFj.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*k(t,a){if(t!==void 0){let i=0;for(const o of t)yield a(o,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*_(t,a,i=1){const o=a===void 0?0:t;a??=t;for(let e=o;i>0?e<a:a<e;e+=i)yield e}const I=JSON.parse('{"page-indicator.aria.label":["Prik ",["selectedPage"]," er fremhævet i en række med ",["pageCount"]," prikker"]}'),$=JSON.parse('{"page-indicator.aria.label":["Dot ",["selectedPage"]," is highlighted in a row of ",["pageCount"]," dots"]}'),S=JSON.parse('{"page-indicator.aria.label":["Piste ",["selectedPage"]," on korostettuna ",["pageCount"]," pisteen rivissä"]}'),N=JSON.parse('{"page-indicator.aria.label":["Prikk ",["selectedPage"]," er uthevet i en rad med ",["pageCount"]," prikker"]}'),O=JSON.parse('{"page-indicator.aria.label":["Prick ",["selectedPage"]," är markerad i en rad med ",["pageCount"]," prickar"]}'),D=y`
  .w-page-indicator {
    display: grid;
    justify-content: center;
    height: max-content;
    pointer-events: none;
  }

  .w-page-indicator--container {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
  }

  .w-page-indicator--dot {
    background-color: var(--w-s-color-background-disabled);
    border-radius: 5px;
    width: 10px;
    height: 10px;
  }

  .w-page-indicator--selecteddot {
    background-color: var(--w-s-color-icon-selected);
  }
`;var E=Object.defineProperty,v=(t,a,i,o)=>{for(var e=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(e=n(a,i,e)||e);return e&&E(a,i,e),e};P($,N,S,I,O);class u extends h{constructor(){super(...arguments),this.selectedPage=1,this.pageCount=1}static{this.styles=[D]}get _validPageCount(){return Math.max(1,Math.floor(this.pageCount))}get _validSelectedPage(){const a=Math.floor(this.selectedPage);return Math.max(1,Math.min(a,this._validPageCount))}render(){const a=this._validPageCount,i=this._validSelectedPage,o=C._({id:"page-indicator.aria.label",comment:"Default screenreader message for page indicator group",message:"Dot {selectedPage} is highlighted in a row of {pageCount} dots",values:{selectedPage:i,pageCount:a}});return s`
      <div class="w-page-indicator" role="img" aria-label="${o}">
        <div class="w-page-indicator--container">
          ${k(_(a),e=>{const f={"w-page-indicator--dot":!0,"w-page-indicator--selecteddot":e+1===i};return s`<div class="${w(f)}"></div>`})}
        </div>
      </div>
    `}}v([m({type:Number,attribute:"selected-page",reflect:!0})],u.prototype,"selectedPage");v([m({type:Number,attribute:"page-count",reflect:!0})],u.prototype,"pageCount");customElements.get("w-page-indicator")||customElements.define("w-page-indicator",u);var J=Object.defineProperty,M=(t,a,i,o)=>{for(var e=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(e=n(a,i,e)||e);return e&&J(a,i,e),e};const L={component:"w-page-indicator",title:"Navigation/PageIndicator",render:({pageCount:t,selectedPage:a})=>s`
    <w-page-indicator page-count=${t} selected-page=${a}></w-page-indicator>
  `,argTypes:{pageCount:{control:{type:"number"}},selectedPage:{control:{type:"number"}}}},d={args:{pageCount:5,selectedPage:1}},g=()=>s`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
`;class b extends h{constructor(){super(...arguments),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&clearInterval(this.intervalId)}startPageChanger(){this.intervalId=setInterval(()=>{this.page>4?this.page=1:this.page=this.page+1},1e3)}render(){return s`
      <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <div style="align-self: center; justify-self: center;">Page ${this.page}</div>
        <w-page-indicator page-count="5" selected-page=${this.page} style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
      </div>
    `}}M([x()],b.prototype,"page");customElements.get("page-indicator-change-page")||customElements.define("page-indicator-change-page",b);const c=()=>s` <page-indicator-change-page></page-indicator-change-page> `,p=()=>s`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
`,l=()=>s`
  <div style="height: 11vh; border: 1px solid lightgrey;">
    <div style="height: 5vh; border-bottom: 1px solid #e6e6e6; margin-bottom: 10px;"></div>
    <w-page-indicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-page-indicator>
  </div>
`;d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 5,
    selectedPage: 1
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
\``,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => html` <page-indicator-change-page></page-indicator-change-page> `",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
\``,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => html\`
  <div style="height: 11vh; border: 1px solid lightgrey;">
    <div style="height: 5vh; border-bottom: 1px solid #e6e6e6; margin-bottom: 10px;"></div>
    <w-page-indicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-page-indicator>
  </div>
\``,...l.parameters?.docs?.source}}};const T=["Default","InsideContainer","InsideContainerChangePage","InsideContainer10Pages","OutsideContainer"];export{d as Default,g as InsideContainer,p as InsideContainer10Pages,c as InsideContainerChangePage,l as OutsideContainer,T as __namedExportsOrder,L as default};
