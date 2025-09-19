import{x as e,i as d}from"./iframe-s0_EsVb-.js";import"./preload-helper-DvrX7W50.js";const l={component:"w-pageindicator",title:"Navigation/PageIndicator",render:({pageCount:s,selectedPage:o})=>e`
    <w-pageindicator page-count=${s} selected-page=${o}></w-pageindicator>
  `,argTypes:{pageCount:{control:{type:"number"}},selectedPage:{control:{type:"number"}}}},a={args:{pageCount:5,selectedPage:1}},t=()=>e`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
  </div>
`;class g extends d{constructor(){super(...arguments),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}startPageChanger(){setInterval(()=>{this.page>4?this.page=1:this.page=this.page+1},1e3)}render(){return e`
      <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
        <div style="align-self: center; justify-self: center;">Page ${this.page}</div>
        <w-pageindicator page-count="5" selected-page=${this.page} style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
      </div>
    `}}customElements.get("page-indicator-change-page")||customElements.define("page-indicator-change-page",g);const i=()=>e` <page-indicator-change-page></page-indicator-change-page> `,r=()=>e`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
  </div>
`,n=()=>e`
  <div style="height: 450px; border: 1px solid lightgrey;">
    <div style="height: 300px; border-bottom: 1px solid #e6e6e6;"></div>
    <w-pageindicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-pageindicator>
  </div>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 5,
    selectedPage: 1
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
  </div>
\``,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => html` <page-indicator-change-page></page-indicator-change-page> `",...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
  </div>
\``,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => html\`
  <div style="height: 450px; border: 1px solid lightgrey;">
    <div style="height: 300px; border-bottom: 1px solid #e6e6e6;"></div>
    <w-pageindicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-pageindicator>
  </div>
\``,...n.parameters?.docs?.source}}};const h=["Default","InsideContainer","InsideContainerChangePage","InsideContainer10Pages","OutsideContainer"];export{a as Default,t as InsideContainer,r as InsideContainer10Pages,i as InsideContainerChangePage,n as OutsideContainer,h as __namedExportsOrder,l as default};
