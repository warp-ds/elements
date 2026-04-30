import{n as e,r as t}from"./chunk-BneVvdWh.js";import{m as n,n as r,s as i,t as a}from"./lit-C07f_Bua.js";import{n as o,t as s}from"./dist-WJrQKcXy.js";import{n as c,t as l}from"./index.m-wj1BHO_P.js";import{n as u,o as d,r as f,t as p}from"./decorate-BZxMavXy.js";import{n as m,t as h}from"./styles-BM5RxtAH.js";import{i as g,n as _,r as v,t as y}from"./utilities-pbJZRFp6.js";import{n as b,t as x}from"./form-control-Dpu9R3Zk.js";var S,C=e((()=>{a(),S=n`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.p-16{padding:1.6rem}.break-words{overflow-wrap:break-word}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`})),w,T=e((()=>{l(),a(),f(),x(),h(),C(),u(),w=class extends b(r){constructor(...e){super(...e),this.bleed=!1,this.bordered=!1,this.info=!1,this.neutral=!1,this.role=`region`}static{this.styles=[m,S,n`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}connectedCallback(){super.connectedCallback(),this.internals.role=this.role}updated(e){super.updated(e),e.has(`role`)&&(this.internals.role=this.role)}get _class(){return c([`group block relative break-words last-child:mb-0 p-16 rounded-8`,this.bleed&&`-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8`,this.info&&`s-bg-info-subtle`,this.neutral&&`s-surface-sunken`,this.bordered&&`border-2 s-border s-bg`])}render(){return i`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}},p([d({type:Boolean,reflect:!0})],w.prototype,`bleed`,void 0),p([d({type:Boolean,reflect:!0})],w.prototype,`bordered`,void 0),p([d({type:Boolean,reflect:!0})],w.prototype,`info`,void 0),p([d({type:Boolean,reflect:!0})],w.prototype,`neutral`,void 0),p([d({type:String,reflect:!0,useDefault:!0})],w.prototype,`role`,void 0),customElements.get(`w-box`)||customElements.define(`w-box`,w)})),E=t({Bleed:()=>F,Bordered:()=>P,Default:()=>j,Info:()=>M,Neutral:()=>N,__namedExportsOrder:()=>I,default:()=>A}),D,O,k,A,j,M,N,P,F,I,L=e((()=>{v(),o(),a(),y(),T(),{events:D,args:O,argTypes:k}=s(`w-box`),A={title:`Layout/Box`,render:e=>i`
      <w-box ${g(_(e))}>
        <h3>Box Content</h3>
        <p>This is content inside a box component.</p>
      </w-box>
    `,args:O,argTypes:k,parameters:{actions:{handles:D}}},j={args:{bleed:!1,bordered:!1,info:!1,neutral:!1,role:`region`}},M={args:{info:!0,role:`region`}},N={args:{neutral:!0,role:`region`}},P={args:{bordered:!0,role:`region`}},F={args:{bleed:!0,neutral:!0,role:`region`}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false,
    role: 'region'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    info: true,
    role: 'region'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    neutral: true,
    role: 'region'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    role: 'region'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: true,
    neutral: true,
    role: 'region'
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`Info`,`Neutral`,`Bordered`,`Bleed`]}));L();export{F as Bleed,P as Bordered,j as Default,M as Info,N as Neutral,I as __namedExportsOrder,A as default,L as n,E as t};