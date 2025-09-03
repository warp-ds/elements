import{r as f,n as v,t as m}from"./styles-Dxp8llA4.js";import{a as h,i as x,x as k}from"./iframe-CenlcFCF.js";import{r as y}from"./index.m-DF_LekKB.js";import"./preload-helper-CmsKOCeN.js";const S=h`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.backdrop-blur{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.bg-\\[--w-black\\/70\\]{background-color:rgba(var(--w-rgb-black),.7)}.bg-\\[--w-color-badge-info-background\\]{background-color:var(--w-color-badge-info-background)}.bg-\\[--w-color-badge-negative-background\\]{background-color:var(--w-color-badge-negative-background)}.bg-\\[--w-color-badge-neutral-background\\]{background-color:var(--w-color-badge-neutral-background)}.bg-\\[--w-color-badge-positive-background\\]{background-color:var(--w-color-badge-positive-background)}.bg-\\[--w-color-badge-sponsored-background\\]{background-color:var(--w-color-badge-sponsored-background)}.bg-\\[--w-color-badge-warning-background\\]{background-color:var(--w-color-badge-warning-background)}.border-0{border-width:0}.rounded-4{border-radius:4px}.rounded-bl-0{border-bottom-left-radius:0}.rounded-br-0{border-bottom-right-radius:0}.rounded-tl-0{border-top-left-radius:0}.rounded-tr-0{border-top-right-radius:0}.inline-flex{display:inline-flex}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.absolute{position:absolute}.static{position:static}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-text{color:var(--w-s-color-text)}.s-text-inverted-static{color:var(--w-s-color-text-inverted-static)}.px-8{padding-left:.8rem;padding-right:.8rem}.py-4{padding-top:.4rem;padding-bottom:.4rem}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var P=Object.defineProperty,w=(r,l,p,_)=>{for(var e=void 0,g=r.length-1,u;g>=0;g--)(u=r[g])&&(e=u(l,p,e)||e);return e&&P(l,p,e),e};class b extends x{constructor(){super(...arguments),this.variant="neutral"}static{this.styles=[f,S]}get _class(){return y(["py-4 px-8 border-0 rounded-4 text-xs inline-flex",this.variant==="neutral"&&"bg-[--w-color-badge-neutral-background] s-text",this.variant==="info"&&"bg-[--w-color-badge-info-background] s-text",this.variant==="positive"&&"bg-[--w-color-badge-positive-background] s-text",this.variant==="warning"&&"bg-[--w-color-badge-warning-background] s-text",this.variant==="negative"&&"bg-[--w-color-badge-negative-background] s-text",this.variant==="disabled"&&"s-bg-disabled s-text",this.variant==="price"&&"bg-[--w-black/70] s-text-inverted-static",this.variant==="sponsored"&&"bg-[--w-color-badge-sponsored-background] s-text",!!this.position&&"absolute backdrop-blur",this.position==="top-left"&&"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",this.position==="top-right"&&"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",this.position==="bottom-right"&&"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",this.position==="bottom-left"&&"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"])}render(){return k`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}w([v({type:String,reflect:!0})],b.prototype,"variant");w([v({type:String,reflect:!0})],b.prototype,"position");customElements.get("w-badge")||customElements.define("w-badge",b);const E={title:"Layout/Badge",component:"w-badge",render(r){return`<w-badge ${m(r)}>Badge text</w-badge>`},argTypes:{variant:{control:{type:"select"},options:["neutral","info","positive","warning","negative","disabled","price","sponsored"],description:"The visual style variant of the badge"},position:{control:{type:"select"},options:["top-left","top-right","bottom-left","bottom-right"],description:"Position for absolutely positioned badges"}}},t={args:{variant:"neutral"}},o={args:{variant:"info"}},a={args:{variant:"positive"}},n={args:{variant:"warning"}},s={args:{variant:"negative"}},i={args:{variant:"price"}},d={args:{variant:"sponsored"}},c={args:{variant:"price",position:"top-right"},render(r){return`
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge ${m(r)}>Badge</w-badge>
      </div>
    `}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'price'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'sponsored'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'price',
    position: 'top-right'
  },
  render(args) {
    return \`
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge \${toAttributeString(args)}>Badge</w-badge>
      </div>
    \`;
  }
}`,...c.parameters?.docs?.source}}};const W=["Neutral","Info","Positive","Warning","Negative","Price","Sponsored","Positioned"];export{o as Info,s as Negative,t as Neutral,c as Positioned,a as Positive,i as Price,d as Sponsored,n as Warning,W as __namedExportsOrder,E as default};
