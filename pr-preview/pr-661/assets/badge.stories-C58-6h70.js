import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{m as n,n as r,s as i,t as a}from"./lit-JruGAyH3.js";import{n as o,t as s}from"./dist-DqaB6mbc.js";import{n as c,t as l}from"./index.m-B95STiSX.js";import{n as u,o as d,r as f,t as p}from"./decorate-Dk3JVGAn.js";import{n as m,t as h}from"./styles-DphVJT09.js";import{i as g,n as _,r as v,t as y}from"./utilities-DiPTmiiI.js";var b,x=e((()=>{a(),b=n`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.backdrop-blur{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.bg-\\[--w-black\\/70\\]{background-color:rgba(var(--w-rgb-black),.7)}.bg-\\[--w-color-badge-info-background\\]{background-color:var(--w-color-badge-info-background)}.bg-\\[--w-color-badge-negative-background\\]{background-color:var(--w-color-badge-negative-background)}.bg-\\[--w-color-badge-neutral-background\\]{background-color:var(--w-color-badge-neutral-background)}.bg-\\[--w-color-badge-positive-background\\]{background-color:var(--w-color-badge-positive-background)}.bg-\\[--w-color-badge-sponsored-background\\]{background-color:var(--w-color-badge-sponsored-background)}.bg-\\[--w-color-badge-warning-background\\]{background-color:var(--w-color-badge-warning-background)}.border-0{border-width:0}.rounded-4{border-radius:4px}.rounded-bl-0{border-bottom-left-radius:0}.rounded-br-0{border-bottom-right-radius:0}.rounded-tl-0{border-top-left-radius:0}.rounded-tr-0{border-top-right-radius:0}.inline-flex{display:inline-flex}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.absolute{position:absolute}.static{position:static}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-text{color:var(--w-s-color-text)}.s-text-inverted-static{color:var(--w-s-color-text-inverted-static)}.px-8{padding-left:.8rem;padding-right:.8rem}.py-4{padding-top:.4rem;padding-bottom:.4rem}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`})),S,C=e((()=>{l(),a(),f(),h(),x(),u(),S=class extends r{static{this.styles=[m,b]}get _class(){let e=this.variant||`neutral`;return c([`py-4 px-8 border-0 rounded-4 text-xs inline-flex`,e===`neutral`&&`bg-[--w-color-badge-neutral-background] s-text`,e===`info`&&`bg-[--w-color-badge-info-background] s-text`,e===`positive`&&`bg-[--w-color-badge-positive-background] s-text`,e===`warning`&&`bg-[--w-color-badge-warning-background] s-text`,e===`negative`&&`bg-[--w-color-badge-negative-background] s-text`,e===`disabled`&&`s-bg-disabled s-text`,e===`price`&&`bg-[--w-black/70] s-text-inverted-static`,e===`sponsored`&&`bg-[--w-color-badge-sponsored-background] s-text`,!!this.position&&`absolute backdrop-blur`,this.position===`top-left`&&`rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0`,this.position===`top-right`&&`rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0`,this.position===`bottom-right`&&`rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0`,this.position===`bottom-left`&&`rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0`])}render(){return i`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}},p([d({type:String,reflect:!0})],S.prototype,`variant`,void 0),p([d({type:String,reflect:!0})],S.prototype,`position`,void 0),customElements.get(`w-badge`)||customElements.define(`w-badge`,S)})),w=t({Info:()=>A,Negative:()=>N,Neutral:()=>k,Positioned:()=>I,Positive:()=>j,Price:()=>P,Sponsored:()=>F,Warning:()=>M,__namedExportsOrder:()=>L,default:()=>O}),T,E,D,O,k,A,j,M,N,P,F,I,L,R=e((()=>{v(),o(),a(),y(),C(),{events:T,args:E,argTypes:D}=s(`w-badge`),O={title:`Layout/Badge`,render(e){return i`<w-badge ${g(_(e))}>Badge text</w-badge>`},args:E,argTypes:D,parameters:{actions:{handles:T}}},k={args:{variant:`neutral`}},A={args:{variant:`info`}},j={args:{variant:`positive`}},M={args:{variant:`warning`}},N={args:{variant:`negative`}},P={args:{variant:`price`}},F={args:{variant:`sponsored`}},I={args:{variant:`price`,position:`top-right`},render(e){return i`
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge ${g(_(e))}>Badge</w-badge>
      </div>
    `}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'price'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'sponsored'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`Neutral`,`Info`,`Positive`,`Warning`,`Negative`,`Price`,`Sponsored`,`Positioned`]}));R();export{A as Info,N as Negative,k as Neutral,I as Positioned,j as Positive,P as Price,F as Sponsored,M as Warning,L as __namedExportsOrder,O as default,R as n,w as t};