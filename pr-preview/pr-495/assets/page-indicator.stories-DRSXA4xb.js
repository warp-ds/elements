import{a as C,v as w,i as h,h as u,b as o,n as v,l as x}from"./iframe-CloY5AoF.js";import{e as S}from"./class-map-BEpG4VJb.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*$(t,e){if(t!==void 0){let r=0;for(const s of t)yield e(s,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*N(t,e,r=1){const s=e===void 0?0:t;e??=t;for(let a=s;r>0?a<e:e<a;a+=r)yield a}const _=JSON.parse('{"page-indicator.aria.label":["Side ",["selectedPage"]," af ",["pageCount"]],"page-indicator.aria.current-page":["Side ",["pageNumber"],", aktuel"],"page-indicator.aria.page":["Side ",["pageNumber"]]}'),I=JSON.parse('{"page-indicator.aria.label":["Page ",["selectedPage"]," of ",["pageCount"]],"page-indicator.aria.current-page":["Page ",["pageNumber"],", current"],"page-indicator.aria.page":["Page ",["pageNumber"]]}'),k=JSON.parse('{"page-indicator.aria.label":["Sivu ",["selectedPage"]," / ",["pageCount"]],"page-indicator.aria.current-page":["Sivu ",["pageNumber"],", nykyinen"],"page-indicator.aria.page":["Sivu ",["pageNumber"]]}'),O=JSON.parse('{"page-indicator.aria.label":["Side ",["selectedPage"]," av ",["pageCount"]],"page-indicator.aria.current-page":["Side ",["pageNumber"],", nåværende"],"page-indicator.aria.page":["Side ",["pageNumber"]]}'),D=JSON.parse('{"page-indicator.aria.label":["Sida ",["selectedPage"]," av ",["pageCount"]],"page-indicator.aria.current-page":["Sida ",["pageNumber"],", aktuell"],"page-indicator.aria.page":["Sida ",["pageNumber"]]}'),E=C`
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
`;var J=Object.defineProperty,b=(t,e,r,s)=>{for(var a=void 0,i=t.length-1,n;i>=0;i--)(n=t[i])&&(a=n(e,r,a)||a);return a&&J(e,r,a),a};w(I,O,k,_,D);class m extends h{constructor(){super(...arguments),this.selectedPage=1,this.pageCount=1}static{this.styles=[E]}get _validPageCount(){return Math.max(1,Math.floor(this.pageCount))}get _validSelectedPage(){const e=Math.floor(this.selectedPage);return Math.max(1,Math.min(e,this._validPageCount))}render(){const e=this._validPageCount,r=this._validSelectedPage,s=u._({id:"page-indicator.aria.label",comment:"Default screenreader message for page indicator group",message:`Page ${r} of ${e}`,values:{selectedPage:r,pageCount:e}});return o`
      <div class="w-page-indicator" role="group" aria-label="${s}">
        <div class="w-page-indicator--container">
          ${$(N(e),a=>{const i=a+1,n=i===r,y={"w-page-indicator--dot":!0,"w-page-indicator--selecteddot":n},P=n?u._({id:"page-indicator.aria.current-page",comment:"Default screenreader message for the current page dot",message:`Page ${i}, current`,values:{pageNumber:i}}):u._({id:"page-indicator.aria.page",comment:"Default screenreader message for a page dot",message:`Page ${i}`,values:{pageNumber:i}});return o`<div
              class="${S(y)}"
              role="img"
              aria-label="${P}"
            ></div>`})}
        </div>
      </div>
    `}}b([v({type:Number,attribute:"selected-page",reflect:!0})],m.prototype,"selectedPage");b([v({type:Number,attribute:"page-count",reflect:!0})],m.prototype,"pageCount");customElements.get("w-page-indicator")||customElements.define("w-page-indicator",m);var M=Object.defineProperty,j=(t,e,r,s)=>{for(var a=void 0,i=t.length-1,n;i>=0;i--)(n=t[i])&&(a=n(e,r,a)||a);return a&&M(e,r,a),a};const q={component:"w-page-indicator",title:"Navigation/PageIndicator",render:({pageCount:t,selectedPage:e})=>o`
    <w-page-indicator page-count=${t} selected-page=${e}></w-page-indicator>
  `,argTypes:{pageCount:{control:{type:"number"}},selectedPage:{control:{type:"number"}}}},g={args:{pageCount:5,selectedPage:1}},d=()=>o`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
`;class f extends h{constructor(){super(...arguments),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&clearInterval(this.intervalId)}startPageChanger(){this.intervalId=setInterval(()=>{this.page>4?this.page=1:this.page=this.page+1},1e3)}render(){return o`
      <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <div style="align-self: center; justify-self: center;">Page ${this.page}</div>
        <w-page-indicator page-count="5" selected-page=${this.page} style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
      </div>
    `}}j([x()],f.prototype,"page");customElements.get("page-indicator-change-page")||customElements.define("page-indicator-change-page",f);const c=()=>o` <page-indicator-change-page></page-indicator-change-page> `,p=()=>o`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
`,l=()=>o`
  <div style="height: 11vh; border: 1px solid lightgrey;">
    <div style="height: 5vh; border-bottom: 1px solid #e6e6e6; margin-bottom: 10px;"></div>
    <w-page-indicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-page-indicator>
  </div>
`;g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 5,
    selectedPage: 1
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
\``,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => html` <page-indicator-change-page></page-indicator-change-page> `",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
\``,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => html\`
  <div style="height: 11vh; border: 1px solid lightgrey;">
    <div style="height: 5vh; border-bottom: 1px solid #e6e6e6; margin-bottom: 10px;"></div>
    <w-page-indicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-page-indicator>
  </div>
\``,...l.parameters?.docs?.source}}};const z=["Default","InsideContainer","InsideContainerChangePage","InsideContainer10Pages","OutsideContainer"];export{g as Default,d as InsideContainer,p as InsideContainer10Pages,c as InsideContainerChangePage,l as OutsideContainer,z as __namedExportsOrder,q as default};
