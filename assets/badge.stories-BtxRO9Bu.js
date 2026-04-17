import{a as x,i as h,r as y,j as S,b as l,n as w,g as _}from"./iframe-CCioruNT.js";import{s as m,p as f}from"./utilities-D-DbMF_c.js";const P=x`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.backdrop-blur{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.bg-\\[--w-black\\/70\\]{background-color:rgba(var(--w-rgb-black),.7)}.bg-\\[--w-color-badge-info-background\\]{background-color:var(--w-color-badge-info-background)}.bg-\\[--w-color-badge-negative-background\\]{background-color:var(--w-color-badge-negative-background)}.bg-\\[--w-color-badge-neutral-background\\]{background-color:var(--w-color-badge-neutral-background)}.bg-\\[--w-color-badge-positive-background\\]{background-color:var(--w-color-badge-positive-background)}.bg-\\[--w-color-badge-sponsored-background\\]{background-color:var(--w-color-badge-sponsored-background)}.bg-\\[--w-color-badge-warning-background\\]{background-color:var(--w-color-badge-warning-background)}.border-0{border-width:0}.rounded-4{border-radius:4px}.rounded-bl-0{border-bottom-left-radius:0}.rounded-br-0{border-bottom-right-radius:0}.rounded-tl-0{border-top-left-radius:0}.rounded-tr-0{border-top-right-radius:0}.inline-flex{display:inline-flex}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.absolute{position:absolute}.static{position:static}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-text{color:var(--w-s-color-text)}.s-text-inverted-static{color:var(--w-s-color-text-inverted-static)}.px-8{padding-left:.8rem;padding-right:.8rem}.py-4{padding-top:.4rem;padding-bottom:.4rem}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var B=Object.defineProperty,k=(e,r,u,W)=>{for(var o=void 0,b=e.length-1,v;b>=0;b--)(v=e[b])&&(o=v(r,u,o)||o);return o&&B(r,u,o),o};class p extends h{static{this.styles=[y,P]}get _class(){const r=this.variant||"neutral";return S(["py-4 px-8 border-0 rounded-4 text-xs inline-flex",r==="neutral"&&"bg-[--w-color-badge-neutral-background] s-text",r==="info"&&"bg-[--w-color-badge-info-background] s-text",r==="positive"&&"bg-[--w-color-badge-positive-background] s-text",r==="warning"&&"bg-[--w-color-badge-warning-background] s-text",r==="negative"&&"bg-[--w-color-badge-negative-background] s-text",r==="disabled"&&"s-bg-disabled s-text",r==="price"&&"bg-[--w-black/70] s-text-inverted-static",r==="sponsored"&&"bg-[--w-color-badge-sponsored-background] s-text",!!this.position&&"absolute backdrop-blur",this.position==="top-left"&&"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",this.position==="top-right"&&"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",this.position==="bottom-right"&&"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",this.position==="bottom-left"&&"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"])}render(){return l`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}k([w({type:String,reflect:!0})],p.prototype,"variant");k([w({type:String,reflect:!0})],p.prototype,"position");customElements.get("w-badge")||customElements.define("w-badge",p);const{events:z,args:N,argTypes:$}=_("w-badge"),j={title:"Layout/Badge",render(e){return l`<w-badge ${m(f(e))}>Badge text</w-badge>`},args:N,argTypes:$,parameters:{actions:{handles:z}}},a={args:{variant:"neutral"}},t={args:{variant:"info"}},s={args:{variant:"positive"}},n={args:{variant:"warning"}},d={args:{variant:"negative"}},i={args:{variant:"price"}},c={args:{variant:"sponsored"}},g={args:{variant:"price",position:"top-right"},render(e){return l`
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge ${m(f(e))}>Badge</w-badge>
      </div>
    `}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'price'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'sponsored'
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'price',
    position: 'top-right'
  },
  render(args) {
    return html\`
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge \${spread(prespread(args))}>Badge</w-badge>
      </div>
    \`;
  }
}`,...g.parameters?.docs?.source}}};const O=["Neutral","Info","Positive","Warning","Negative","Price","Sponsored","Positioned"],T=Object.freeze(Object.defineProperty({__proto__:null,Info:t,Negative:d,Neutral:a,Positioned:g,Positive:s,Price:i,Sponsored:c,Warning:n,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{T as B,t as I,a as N,s as P,c as S,n as W,d as a,i as b,g as c};
