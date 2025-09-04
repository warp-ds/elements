import{r as m,n as t,g,a as f}from"./styles-GSn3COC5.js";import{i as w,h,D as x,k as y}from"./iframe-DZvbzxz9.js";import{r as k}from"./index.m-CtIADANO.js";import"./preload-helper-Dch09mLN.js";const v=w`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.p-16{padding:1.6rem}.break-words{overflow-wrap:break-word}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var B=Object.defineProperty,s=(o,c,p,O)=>{for(var e=void 0,u=o.length-1,b;u>=0;u--)(b=o[u])&&(e=b(c,p,e)||e);return e&&B(c,p,e),e};class r extends h{static{this.styles=[m,v]}get _class(){return k(["group block relative break-words last-child:mb-0 p-16 rounded-8",this.bleed&&"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",this.info&&"s-bg-info-subtle",this.neutral&&"s-surface-sunken",this.bordered&&"border-2 s-border s-bg"])}get _optOutRoleWithDefault(){return this.role===""?x:this.role??"region"}render(){return y`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}s([t({type:Boolean,reflect:!0})],r.prototype,"bleed");s([t({type:Boolean,reflect:!0})],r.prototype,"bordered");s([t({type:Boolean,reflect:!0})],r.prototype,"info");s([t({type:Boolean,reflect:!0})],r.prototype,"neutral");s([t({type:String,reflect:!0})],r.prototype,"role");customElements.get("w-box")||customElements.define("w-box",r);const{events:_,args:S,argTypes:D}=g("w-box"),C={title:"Layout/Box",render:o=>`
      <w-box ${f(o)}>
        <h3>Box Content</h3>
        <p>This is content inside a box component.</p>
      </w-box>
    `,args:S,argTypes:D,parameters:{actions:{handles:_}}},a={args:{bleed:!1,bordered:!1,info:!1,neutral:!1,role:"region"}},n={args:{info:!0,role:"region"}},l={args:{neutral:!0,role:"region"}},d={args:{bordered:!0,role:"region"}},i={args:{bleed:!0,neutral:!0,role:"region"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false,
    role: 'region'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    info: true,
    role: 'region'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    neutral: true,
    role: 'region'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    role: 'region'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: true,
    neutral: true,
    role: 'region'
  }
}`,...i.parameters?.docs?.source}}};const I=["Default","Info","Neutral","Bordered","Bleed"];export{i as Bleed,d as Bordered,a as Default,n as Info,l as Neutral,I as __namedExportsOrder,C as default};
