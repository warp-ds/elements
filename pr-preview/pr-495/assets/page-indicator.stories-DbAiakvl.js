import{a as f,v as P,i as h,h as C,b as n,n as m,l as w}from"./iframe-9FEAK6vO.js";import{e as x}from"./class-map-BR4vhqDi.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*S(t,e){if(t!==void 0){let i=0;for(const o of t)yield e(o,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*N(t,e,i=1){const o=e===void 0?0:t;e??=t;for(let a=o;i>0?a<e:e<a;a+=i)yield a}const _=JSON.parse('{"page-indicator.aria.label":["Side ",["selectedPage"]," af ",["pageCount"]],"page-indicator.aria.current-page":["Side ",["pageNumber"],", aktuel"],"page-indicator.aria.page":["Side ",["pageNumber"]]}'),$=JSON.parse('{"page-indicator.aria.label":["Page ",["selectedPage"]," of ",["pageCount"]],"page-indicator.aria.current-page":["Page ",["pageNumber"],", current"],"page-indicator.aria.page":["Page ",["pageNumber"]]}'),I=JSON.parse('{"page-indicator.aria.label":["Sivu ",["selectedPage"]," / ",["pageCount"]],"page-indicator.aria.current-page":["Sivu ",["pageNumber"],", nykyinen"],"page-indicator.aria.page":["Sivu ",["pageNumber"]]}'),k=JSON.parse('{"page-indicator.aria.label":["Side ",["selectedPage"]," av ",["pageCount"]],"page-indicator.aria.current-page":["Side ",["pageNumber"],", nåværende"],"page-indicator.aria.page":["Side ",["pageNumber"]]}'),O=JSON.parse('{"page-indicator.aria.label":["Sida ",["selectedPage"]," av ",["pageCount"]],"page-indicator.aria.current-page":["Sida ",["pageNumber"],", aktuell"],"page-indicator.aria.page":["Sida ",["pageNumber"]]}'),E=f`
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
`;var J=Object.defineProperty,v=(t,e,i,o)=>{for(var a=void 0,r=t.length-1,s;r>=0;r--)(s=t[r])&&(a=s(e,i,a)||a);return a&&J(e,i,a),a};P($,k,I,_,O);class u extends h{constructor(){super(...arguments),this.selectedPage=1,this.pageCount=1}static{this.styles=[E]}get _validPageCount(){return Math.max(1,Math.floor(this.pageCount))}get _validSelectedPage(){const e=Math.floor(this.selectedPage);return Math.max(1,Math.min(e,this._validPageCount))}render(){const e=this._validPageCount,i=this._validSelectedPage,o=C._({id:"page-indicator.aria.label",comment:"Default screenreader message for page indicator group",message:`Dot ${i} is highlighted in a row of ${e} dots`,values:{selectedPage:i,pageCount:e}});return n`
      <div class="w-page-indicator" role="img" aria-label="${o}">
        <div class="w-page-indicator--container">
          ${S(N(e),a=>{const y={"w-page-indicator--dot":!0,"w-page-indicator--selecteddot":a+1===i};return n`<div class="${x(y)}"></div>`})}
        </div>
      </div>
    `}}v([m({type:Number,attribute:"selected-page",reflect:!0})],u.prototype,"selectedPage");v([m({type:Number,attribute:"page-count",reflect:!0})],u.prototype,"pageCount");customElements.get("w-page-indicator")||customElements.define("w-page-indicator",u);var M=Object.defineProperty,j=(t,e,i,o)=>{for(var a=void 0,r=t.length-1,s;r>=0;r--)(s=t[r])&&(a=s(e,i,a)||a);return a&&M(e,i,a),a};const W={component:"w-page-indicator",title:"Navigation/PageIndicator",render:({pageCount:t,selectedPage:e})=>n`
    <w-page-indicator page-count=${t} selected-page=${e}></w-page-indicator>
  `,argTypes:{pageCount:{control:{type:"number"}},selectedPage:{control:{type:"number"}}}},d={args:{pageCount:5,selectedPage:1}},g=()=>n`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
`;class b extends h{constructor(){super(...arguments),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&clearInterval(this.intervalId)}startPageChanger(){this.intervalId=setInterval(()=>{this.page>4?this.page=1:this.page=this.page+1},1e3)}render(){return n`
      <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <div style="align-self: center; justify-self: center;">Page ${this.page}</div>
        <w-page-indicator page-count="5" selected-page=${this.page} style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
      </div>
    `}}j([w()],b.prototype,"page");customElements.get("page-indicator-change-page")||customElements.define("page-indicator-change-page",b);const p=()=>n` <page-indicator-change-page></page-indicator-change-page> `,c=()=>n`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
`,l=()=>n`
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
\``,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => html` <page-indicator-change-page></page-indicator-change-page> `",...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
\``,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => html\`
  <div style="height: 11vh; border: 1px solid lightgrey;">
    <div style="height: 5vh; border-bottom: 1px solid #e6e6e6; margin-bottom: 10px;"></div>
    <w-page-indicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-page-indicator>
  </div>
\``,...l.parameters?.docs?.source}}};const q=["Default","InsideContainer","InsideContainerChangePage","InsideContainer10Pages","OutsideContainer"];export{d as Default,g as InsideContainer,c as InsideContainer10Pages,p as InsideContainerChangePage,l as OutsideContainer,q as __namedExportsOrder,W as default};
