import{n as e,r as t}from"./chunk-BneVvdWh.js";import{m as n,n as r,r as i,s as a,t as o}from"./lit-C07f_Bua.js";import{n as s,t as c}from"./dist-WJrQKcXy.js";import{n as l,t as u}from"./index.m-88jG9bhB.js";import{n as d,o as f,r as p,t as m}from"./decorate-IReCy4XP.js";import{n as h,t as g}from"./styles-BM5RxtAH.js";import{i as _,n as v,r as y,t as b}from"./utilities-pbJZRFp6.js";var x,S=e((()=>{o(),x=n`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.p-16{padding:1.6rem}.break-words{overflow-wrap:break-word}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`})),C,w=e((()=>{u(),o(),p(),g(),S(),d(),C=class extends r{constructor(...e){super(...e),this.bleed=!1,this.bordered=!1,this.info=!1,this.neutral=!1}static{this.styles=[h,x,n`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _class(){return l([`group block relative break-words last-child:mb-0 p-16 rounded-8`,this.bleed&&`-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8`,this.info&&`s-bg-info-subtle`,this.neutral&&`s-surface-sunken`,this.bordered&&`border-2 s-border s-bg`])}get _optOutRoleWithDefault(){return this.role===``?i:this.role??`region`}render(){return a`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}},m([f({type:Boolean,reflect:!0})],C.prototype,`bleed`,void 0),m([f({type:Boolean,reflect:!0})],C.prototype,`bordered`,void 0),m([f({type:Boolean,reflect:!0})],C.prototype,`info`,void 0),m([f({type:Boolean,reflect:!0})],C.prototype,`neutral`,void 0),m([f({type:String,reflect:!0})],C.prototype,`role`,void 0),customElements.get(`w-box`)||customElements.define(`w-box`,C)})),T=t({Bleed:()=>P,Bordered:()=>N,Default:()=>A,Info:()=>j,Neutral:()=>M,__namedExportsOrder:()=>F,default:()=>k}),E,D,O,k,A,j,M,N,P,F,I=e((()=>{y(),s(),o(),b(),w(),{events:E,args:D,argTypes:O}=c(`w-box`),k={title:`Layout/Box`,render:e=>a`
      <w-box ${_(v(e))}>
        <h3>Box Content</h3>
        <p>This is content inside a box component.</p>
      </w-box>
    `,args:D,argTypes:O,parameters:{actions:{handles:E}}},A={args:{bleed:!1,bordered:!1,info:!1,neutral:!1,role:`region`}},j={args:{info:!0,role:`region`}},M={args:{neutral:!0,role:`region`}},N={args:{bordered:!0,role:`region`}},P={args:{bleed:!0,neutral:!0,role:`region`}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false,
    role: 'region'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    info: true,
    role: 'region'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    neutral: true,
    role: 'region'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    role: 'region'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: true,
    neutral: true,
    role: 'region'
  }
}`,...P.parameters?.docs?.source}}},F=[`Default`,`Info`,`Neutral`,`Bordered`,`Bleed`]}));I();export{P as Bleed,N as Bordered,A as Default,j as Info,M as Neutral,F as __namedExportsOrder,k as default,I as n,T as t};