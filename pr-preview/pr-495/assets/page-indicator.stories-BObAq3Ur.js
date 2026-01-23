import{a as f,v as w,i as h,h as x,b as o,n as m,l as C}from"./iframe-FV7Mz7UE.js";import{e as P}from"./class-map-BUP6ir3A.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*_(t,e){if(t!==void 0){let i=0;for(const s of t)yield e(s,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*$(t,e,i=1){const s=e===void 0?0:t;e??=t;for(let a=s;i>0?a<e:e<a;a+=i)yield a}const I=JSON.parse('{"page-indicator.aria.label":["page-indicator.aria.label"]}'),S=JSON.parse('{"page-indicator.aria.label":["page-indicator.aria.label"]}'),N=JSON.parse('{"page-indicator.aria.label":["page-indicator.aria.label"]}'),O=JSON.parse('{"page-indicator.aria.label":["page-indicator.aria.label"]}'),k=JSON.parse('{"page-indicator.aria.label":["page-indicator.aria.label"]}'),E=f`
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
`;var J=Object.defineProperty,v=(t,e,i,s)=>{for(var a=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(a=n(e,i,a)||a);return a&&J(e,i,a),a};w(S,O,N,I,k);class u extends h{constructor(){super(...arguments),this.selectedPage=1,this.pageCount=1}static{this.styles=[E]}get _validPageCount(){return Math.max(1,Math.floor(this.pageCount))}get _validSelectedPage(){const e=Math.floor(this.selectedPage);return Math.max(1,Math.min(e,this._validPageCount))}render(){const e=this._validPageCount,i=this._validSelectedPage,s=x._({id:"page-indicator.aria.label",comment:"Default screenreader message for page indicator group",message:`Dot ${i} is highlighted in a row of ${e} dots`,values:{selectedPage:i,pageCount:e}});return o`
      <div class="w-page-indicator" role="img" aria-label="${s}">
        <div class="w-page-indicator--container">
          ${_($(e),a=>{const y={"w-page-indicator--dot":!0,"w-page-indicator--selecteddot":a+1===i};return o`<div class="${P(y)}"></div>`})}
        </div>
      </div>
    `}}v([m({type:Number,attribute:"selected-page",reflect:!0})],u.prototype,"selectedPage");v([m({type:Number,attribute:"page-count",reflect:!0})],u.prototype,"pageCount");customElements.get("w-page-indicator")||customElements.define("w-page-indicator",u);var M=Object.defineProperty,j=(t,e,i,s)=>{for(var a=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(a=n(e,i,a)||a);return a&&M(e,i,a),a};const W={component:"w-page-indicator",title:"Navigation/PageIndicator",render:({pageCount:t,selectedPage:e})=>o`
    <w-page-indicator page-count=${t} selected-page=${e}></w-page-indicator>
  `,argTypes:{pageCount:{control:{type:"number"}},selectedPage:{control:{type:"number"}}}},d={args:{pageCount:5,selectedPage:1}},g=()=>o`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
`;class b extends h{constructor(){super(...arguments),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&clearInterval(this.intervalId)}startPageChanger(){this.intervalId=setInterval(()=>{this.page>4?this.page=1:this.page=this.page+1},1e3)}render(){return o`
      <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <div style="align-self: center; justify-self: center;">Page ${this.page}</div>
        <w-page-indicator page-count="5" selected-page=${this.page} style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
      </div>
    `}}j([C()],b.prototype,"page");customElements.get("page-indicator-change-page")||customElements.define("page-indicator-change-page",b);const c=()=>o` <page-indicator-change-page></page-indicator-change-page> `,p=()=>o`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
`,l=()=>o`
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
\``,...l.parameters?.docs?.source}}};const q=["Default","InsideContainer","InsideContainerChangePage","InsideContainer10Pages","OutsideContainer"];export{d as Default,g as InsideContainer,p as InsideContainer10Pages,c as InsideContainerChangePage,l as OutsideContainer,q as __namedExportsOrder,W as default};
