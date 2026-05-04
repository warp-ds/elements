import{n as e}from"./chunk-DnJy8xQt.js";import{B as t,Mt as n,Ot as r,Pt as i,_ as a,b as o,d as s,f as c,kt as l,l as u,m as d,p as f,s as p,y as m,z as h}from"./iframe-BW7BmPji.js";function*g(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var _=e((()=>{})),v=e((()=>{_()}));function*y(e,t,n=1){let r=t===void 0?0:e;t??=e;for(let e=r;n>0?e<t:t<e;e+=n)yield e}var b=e((()=>{})),x=e((()=>{b()})),S,C=e((()=>{S=JSON.parse(`{"page-indicator.aria.label":["Prik ",["selectedPage"]," er fremhævet i en række med ",["pageCount"]," prikker"]}`)})),w,T=e((()=>{w=JSON.parse(`{"page-indicator.aria.label":["Dot ",["selectedPage"]," is highlighted in a row of ",["pageCount"]," dots"]}`)})),E,D=e((()=>{E=JSON.parse(`{"page-indicator.aria.label":["Piste ",["selectedPage"]," on korostettuna ",["pageCount"]," pisteen rivissä"]}`)})),O,k=e((()=>{O=JSON.parse(`{"page-indicator.aria.label":["Prikk ",["selectedPage"]," er uthevet i en rad med ",["pageCount"]," prikker"]}`)})),A,j=e((()=>{A=JSON.parse(`{"page-indicator.aria.label":["Prick ",["selectedPage"]," är markerad i en rad med ",["pageCount"]," prickar"]}`)})),M,N=e((()=>{r(),M=i`
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
`})),P,F=e((()=>{t(),r(),a(),f(),v(),x(),u(),C(),T(),D(),k(),j(),N(),c(),p(w,O,E,S,A),P=class extends l{static{this.styles=[M]}get _validPageCount(){return Math.max(1,Math.floor(this.pageCount??1))}get _validSelectedPage(){let e=Math.floor(this.selectedPage??1);return Math.max(1,Math.min(e,this._validPageCount))}render(){let e=this._validPageCount,t=this._validSelectedPage;return n`
      <div class="w-page-indicator" role="img" aria-label="${h._({id:`page-indicator.aria.label`,comment:`Default screenreader message for page indicator group`,message:`Dot {selectedPage} is highlighted in a row of {pageCount} dots`,values:{selectedPage:t,pageCount:e}})}">
        <div class="w-page-indicator--container">
          ${g(y(e),e=>n`<div class="${d({"w-page-indicator--dot":!0,"w-page-indicator--selecteddot":e+1===t})}"></div>`)}
        </div>
      </div>
    `}},s([o({type:Number,attribute:`selected-page`,reflect:!0})],P.prototype,`selectedPage`,void 0),s([o({type:Number,attribute:`page-count`,reflect:!0})],P.prototype,`pageCount`,void 0),customElements.get(`w-page-indicator`)||customElements.define(`w-page-indicator`,P)})),I,L,R,z,B,V,H,U;e((()=>{r(),a(),F(),c(),I={component:`w-page-indicator`,title:`Navigation/PageIndicator`,render:({pageCount:e,selectedPage:t})=>n`
    <w-page-indicator page-count=${e} selected-page=${t}></w-page-indicator>
  `,argTypes:{pageCount:{control:{type:`number`}},selectedPage:{control:{type:`number`}}}},L={args:{pageCount:5,selectedPage:1}},R=()=>n`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
`,z=class extends l{constructor(...e){super(...e),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&clearInterval(this.intervalId)}startPageChanger(){this.intervalId=setInterval(()=>{this.page>4?this.page=1:this.page+=1},1e3)}render(){return n`
      <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <div style="align-self: center; justify-self: center;">Page ${this.page}</div>
        <w-page-indicator page-count="5" selected-page=${this.page} style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
      </div>
    `}},s([m()],z.prototype,`page`,void 0),customElements.get(`page-indicator-change-page`)||customElements.define(`page-indicator-change-page`,z),B=()=>n` <page-indicator-change-page></page-indicator-change-page> `,V=()=>n`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
`,H=()=>n`
  <div style="height: 11vh; border: 1px solid lightgrey;">
    <div style="height: 5vh; border-bottom: 1px solid #e6e6e6; margin-bottom: 10px;"></div>
    <w-page-indicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-page-indicator>
  </div>
`,L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 5,
    selectedPage: 1
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
\``,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:"() => html` <page-indicator-change-page></page-indicator-change-page> `",...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
    <w-page-indicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-page-indicator>
  </div>
\``,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => html\`
  <div style="height: 11vh; border: 1px solid lightgrey;">
    <div style="height: 5vh; border-bottom: 1px solid #e6e6e6; margin-bottom: 10px;"></div>
    <w-page-indicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-page-indicator>
  </div>
\``,...H.parameters?.docs?.source}}},U=[`Default`,`InsideContainer`,`InsideContainerChangePage`,`InsideContainer10Pages`,`OutsideContainer`]}))();export{L as Default,R as InsideContainer,V as InsideContainer10Pages,B as InsideContainerChangePage,H as OutsideContainer,U as __namedExportsOrder,I as default};