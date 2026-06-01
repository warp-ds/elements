import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{D as n,E as r,Ht as i,Kt as a,Lt as o,M as s,N as c,O as l,Rt as u,Wt as d,b as f,f as p,l as m,p as h,u as g}from"./iframe-DniOoqQk.js";import{a as _,n as v,r as y,t as b}from"./utilities-CePNGznO.js";import{n as x,t as S}from"./form-control-DtXadPi-.js";var C,w=t((()=>{o(),C=a(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.rounded{border-radius:4px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.p-16{padding:1.6rem}.break-words{overflow-wrap:break-word}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`)})),T,E=t((()=>{n(),o(),f(),S(),m(),w(),h(),T=class extends x(u){constructor(...e){super(...e),this.bleed=!1,this.bordered=!1,this.info=!1,this.neutral=!1,this.role=`region`}static{this.styles=[g,C,d`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}connectedCallback(){super.connectedCallback(),this.internals.role=this.role}updated(e){super.updated(e),e.has(`role`)&&(this.internals.role=this.role)}get _class(){return l([`group block relative break-words last-child:mb-0 p-16 rounded-8`,this.bleed&&`-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8`,this.info&&`s-bg-info-subtle`,this.neutral&&`s-surface-sunken`,this.bordered&&`border-2 s-border s-bg`])}render(){return i`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}},p([r({type:Boolean,reflect:!0})],T.prototype,`bleed`,void 0),p([r({type:Boolean,reflect:!0})],T.prototype,`bordered`,void 0),p([r({type:Boolean,reflect:!0})],T.prototype,`info`,void 0),p([r({type:Boolean,reflect:!0})],T.prototype,`neutral`,void 0),p([r({type:String,reflect:!0,useDefault:!0})],T.prototype,`role`,void 0),customElements.get(`w-box`)||customElements.define(`w-box`,T)})),D=e({AccessibleRegion:()=>L,Bleed:()=>I,Bordered:()=>F,Default:()=>M,Info:()=>N,Neutral:()=>P,__namedExportsOrder:()=>R,default:()=>j}),O,k,A,j,M,N,P,F,I,L,R,z=t((()=>{y(),c(),o(),b(),E(),{events:O,args:k,argTypes:A}=s(`w-box`),j={title:`Layout/Box`,render:e=>i`
      <w-box ${_(v(e))}>
        <h3>Box Content</h3>
        <p>This is content inside a box component.</p>
      </w-box>
    `,args:k,argTypes:A,parameters:{actions:{handles:O}}},M={args:{bleed:!1,bordered:!1,info:!1,neutral:!1}},N={args:{info:!0}},P={args:{neutral:!0}},F={args:{bordered:!0}},I={args:{bleed:!0,neutral:!0}},L={args:{},render:e=>i`
      <w-box aria-labelledby="box-content">
        <h3 id="box-content">Box Content</h3>
        <p>Inspect this box in the accessibility tree to see that it is treated as a region.</p>
        <p>If aria-labelled by is not used, the box will not be treated as a region.</p>
      </w-box>
    `},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    info: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    neutral: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: true,
    neutral: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return html\`
      <w-box aria-labelledby="box-content">
        <h3 id="box-content">Box Content</h3>
        <p>Inspect this box in the accessibility tree to see that it is treated as a region.</p>
        <p>If aria-labelled by is not used, the box will not be treated as a region.</p>
      </w-box>
    \`;
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`Info`,`Neutral`,`Bordered`,`Bleed`,`AccessibleRegion`]}));z();export{L as AccessibleRegion,I as Bleed,F as Bordered,M as Default,N as Info,P as Neutral,R as __namedExportsOrder,j as default,z as n,D as t};