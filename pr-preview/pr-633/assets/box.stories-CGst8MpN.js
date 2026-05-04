import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{D as n,E as r,Mt as i,Ot as a,Pt as o,T as s,_ as c,a as l,b as u,d,f,kt as p,o as m,w as h}from"./iframe-4kYknrKe.js";import{i as g,n as _,r as v,t as y}from"./utilities-DRcLOwLp.js";import{n as b,t as x}from"./form-control-BF64cDf7.js";var S,C=e((()=>{a(),S=o`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.p-16{padding:1.6rem}.break-words{overflow-wrap:break-word}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`})),w,T=e((()=>{h(),a(),c(),x(),l(),C(),f(),w=class extends b(p){constructor(...e){super(...e),this.bleed=!1,this.bordered=!1,this.info=!1,this.neutral=!1,this.role=`region`}static{this.styles=[m,S,o`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}connectedCallback(){super.connectedCallback(),this.internals.role=this.role}updated(e){super.updated(e),e.has(`role`)&&(this.internals.role=this.role)}get _class(){return s([`group block relative break-words last-child:mb-0 p-16 rounded-8`,this.bleed&&`-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8`,this.info&&`s-bg-info-subtle`,this.neutral&&`s-surface-sunken`,this.bordered&&`border-2 s-border s-bg`])}render(){return i`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}},d([u({type:Boolean,reflect:!0})],w.prototype,`bleed`,void 0),d([u({type:Boolean,reflect:!0})],w.prototype,`bordered`,void 0),d([u({type:Boolean,reflect:!0})],w.prototype,`info`,void 0),d([u({type:Boolean,reflect:!0})],w.prototype,`neutral`,void 0),d([u({type:String,reflect:!0,useDefault:!0})],w.prototype,`role`,void 0),customElements.get(`w-box`)||customElements.define(`w-box`,w)})),E=t({AccessibleRegion:()=>I,Bleed:()=>F,Bordered:()=>P,Default:()=>j,Info:()=>M,Neutral:()=>N,__namedExportsOrder:()=>L,default:()=>A}),D,O,k,A,j,M,N,P,F,I,L,R=e((()=>{v(),n(),a(),y(),T(),{events:D,args:O,argTypes:k}=r(`w-box`),A={title:`Layout/Box`,render:e=>i`
      <w-box ${g(_(e))}>
        <h3>Box Content</h3>
        <p>This is content inside a box component.</p>
      </w-box>
    `,args:O,argTypes:k,parameters:{actions:{handles:D}}},j={args:{bleed:!1,bordered:!1,info:!1,neutral:!1}},M={args:{info:!0}},N={args:{neutral:!0}},P={args:{bordered:!0}},F={args:{bleed:!0,neutral:!0}},I={args:{},render:e=>i`
      <w-box aria-labelledby="box-content">
        <h3 id="box-content">Box Content</h3>
        <p>Inspect this box in the accessibility tree to see that it is treated as a region.</p>
        <p>If aria-labelled by is not used, the box will not be treated as a region.</p>
      </w-box>
    `},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    info: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    neutral: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: true,
    neutral: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`Default`,`Info`,`Neutral`,`Bordered`,`Bleed`,`AccessibleRegion`]}));R();export{I as AccessibleRegion,F as Bleed,P as Bordered,j as Default,M as Info,N as Neutral,L as __namedExportsOrder,A as default,R as n,E as t};