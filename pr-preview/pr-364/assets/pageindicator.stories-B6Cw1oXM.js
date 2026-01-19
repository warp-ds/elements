import{a as v,i as h,x as r,n as m}from"./iframe-D39kJY7a.js";import{e as f}from"./class-map-qtthgXFy.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*w(t,e){if(t!==void 0){let i=0;for(const o of t)yield e(o,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*b(t,e,i=1){const o=e===void 0?0:t;e??=t;for(let a=o;i>0?a<e:e<a;a+=i)yield a}const x=v`
  .w-pageindicator {
    display: grid;
    justify-content: center;
    height: max-content;
    pointer-events: none;
  }

  .w-pageindicator--container {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
  }

  .w-pageindicator--dot {
    background-color: var(--w-s-color-background-disabled);
    border-radius: 5px;
    width: 10px;
    height: 10px;
  }

  .w-pageindicator--selecteddot {
    background-color: var(--w-s-color-icon-selected);
  }
`;var C=Object.defineProperty,y=(t,e,i,o)=>{for(var a=void 0,p=t.length-1,u;p>=0;p--)(u=t[p])&&(a=u(e,i,a)||a);return a&&C(e,i,a),a};class l extends h{constructor(){super(...arguments),this.selectedPage=1,this.pageCount=1}static{this.styles=[x]}render(){return r`
      <div class="w-pageindicator">
        <div class="w-pageindicator--container">
          ${w(b(this.pageCount),e=>{const o={"w-pageindicator--dot":!0,"w-pageindicator--selecteddot":e===this.selectedPage-1};return r`<div class="${f(o)}"></div>`})}
        </div>
      </div>
    `}}y([m({type:Number,attribute:"selected-page"})],l.prototype,"selectedPage");y([m({type:Number,attribute:"page-count"})],l.prototype,"pageCount");customElements.get("w-pageindicator")||customElements.define("w-pageindicator",l);const _={component:"w-pageindicator",title:"Navigation/PageIndicator",render:({pageCount:t,selectedPage:e})=>r`
    <w-pageindicator page-count=${t} selected-page=${e}></w-pageindicator>
  `,argTypes:{pageCount:{control:{type:"number"}},selectedPage:{control:{type:"number"}}}},n={args:{pageCount:5,selectedPage:1}},s=()=>r`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
  </div>
`;class P extends h{constructor(){super(...arguments),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}startPageChanger(){setInterval(()=>{this.page>4?this.page=1:this.page=this.page+1},1e3)}render(){return r`
      <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
        <div style="align-self: center; justify-self: center;">Page ${this.page}</div>
        <w-pageindicator page-count="5" selected-page=${this.page} style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
      </div>
    `}}customElements.get("page-indicator-change-page")||customElements.define("page-indicator-change-page",P);const d=()=>r` <page-indicator-change-page></page-indicator-change-page> `,g=()=>r`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
  </div>
`,c=()=>r`
  <div style="height: 450px; border: 1px solid lightgrey;">
    <div style="height: 300px; border-bottom: 1px solid #e6e6e6;"></div>
    <w-pageindicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-pageindicator>
  </div>
`;n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 5,
    selectedPage: 1
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
  </div>
\``,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => html` <page-indicator-change-page></page-indicator-change-page> `",...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
  </div>
\``,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => html\`
  <div style="height: 450px; border: 1px solid lightgrey;">
    <div style="height: 300px; border-bottom: 1px solid #e6e6e6;"></div>
    <w-pageindicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-pageindicator>
  </div>
\``,...c.parameters?.docs?.source}}};const k=["Default","InsideContainer","InsideContainerChangePage","InsideContainer10Pages","OutsideContainer"];export{n as Default,s as InsideContainer,g as InsideContainer10Pages,d as InsideContainerChangePage,c as OutsideContainer,k as __namedExportsOrder,_ as default};
