import{a as m,i as f,r as w,j as x,E as h,x as g,n as d,g as y}from"./iframe-4cUrWyZF.js";import{s as k,p as v}from"./utilities-ieU7NW__.js";const _=m`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.p-16{padding:1.6rem}.break-words{overflow-wrap:break-word}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var B=Object.defineProperty,i=(o,c,p,E)=>{for(var e=void 0,u=o.length-1,b;u>=0;u--)(b=o[u])&&(e=b(c,p,e)||e);return e&&B(c,p,e),e};class r extends f{static{this.styles=[w,_]}get _class(){return x(["group block relative break-words last-child:mb-0 p-16 rounded-8",this.bleed&&"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",this.info&&"s-bg-info-subtle",this.neutral&&"s-surface-sunken",this.bordered&&"border-2 s-border s-bg"])}get _optOutRoleWithDefault(){return this.role===""?h:this.role??"region"}render(){return g`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}i([d({type:Boolean,reflect:!0})],r.prototype,"bleed");i([d({type:Boolean,reflect:!0})],r.prototype,"bordered");i([d({type:Boolean,reflect:!0})],r.prototype,"info");i([d({type:Boolean,reflect:!0})],r.prototype,"neutral");i([d({type:String,reflect:!0})],r.prototype,"role");customElements.get("w-box")||customElements.define("w-box",r);const{events:S,args:O,argTypes:D}=y("w-box"),j={title:"Layout/Box",render:o=>g`
      <w-box ${k(v(o))}>
        <h3>Box Content</h3>
        <p>This is content inside a box component.</p>
      </w-box>
    `,args:O,argTypes:D,parameters:{actions:{handles:S}}},t={args:{bleed:!1,bordered:!1,info:!1,neutral:!1,role:"region"}},s={args:{info:!0,role:"region"}},a={args:{neutral:!0,role:"region"}},n={args:{bordered:!0,role:"region"}},l={args:{bleed:!0,neutral:!0,role:"region"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false,
    role: 'region'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    info: true,
    role: 'region'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    neutral: true,
    role: 'region'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    role: 'region'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: true,
    neutral: true,
    role: 'region'
  }
}`,...l.parameters?.docs?.source}}};const z=["Default","Info","Neutral","Bordered","Bleed"],N=Object.freeze(Object.defineProperty({__proto__:null,Bleed:l,Bordered:n,Default:t,Info:s,Neutral:a,__namedExportsOrder:z,default:j},Symbol.toStringTag,{value:"Module"}));export{N as B,t as D,s as I,a as N,n as a,l as b};
