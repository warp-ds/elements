import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,l as i,r as a,s as o,t as s,x as c}from"./decorate-J4WBtiHw.js";import{n as l,t as u}from"./dist-DYA0KhTf.js";import{n as d,t as f}from"./index.m-DHqwZk2H.js";import{n as p,t as m}from"./styles-CYn3YYhE.js";import{i as h,n as g,r as _}from"./utilities-DhdP2kMI.js";var v;function y(){return(y=e((()=>{n(),v=c(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.backdrop-blur{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.bg-\\[--w-black\\/70\\]{background-color:rgba(var(--w-rgb-black),.7)}.bg-\\[--w-color-badge-info-background\\]{background-color:var(--w-color-badge-info-background)}.bg-\\[--w-color-badge-negative-background\\]{background-color:var(--w-color-badge-negative-background)}.bg-\\[--w-color-badge-neutral-background\\]{background-color:var(--w-color-badge-neutral-background)}.bg-\\[--w-color-badge-positive-background\\]{background-color:var(--w-color-badge-positive-background)}.bg-\\[--w-color-badge-sponsored-background\\]{background-color:var(--w-color-badge-sponsored-background)}.bg-\\[--w-color-badge-warning-background\\]{background-color:var(--w-color-badge-warning-background)}.border-0{border-width:0}.rounded-4{border-radius:4px}.rounded-bl-0{border-bottom-left-radius:0}.rounded-br-0{border-bottom-right-radius:0}.rounded-tl-0{border-top-left-radius:0}.rounded-tr-0{border-top-right-radius:0}.inline-flex{display:inline-flex}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-text{color:var(--w-s-color-text)}.s-text-inverted-static{color:var(--w-s-color-text-inverted-static)}.px-8{padding-left:.8rem;padding-right:.8rem}.py-4{padding-top:.4rem;padding-bottom:.4rem}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`)})))()}var b;function x(){return(x=e((()=>{f(),n(),a(),m(),y(),b=class extends i{static{this.styles=[p,v]}get _class(){let e=this.variant||`neutral`;return d([`py-4 px-8 border-0 rounded-4 text-xs inline-flex`,e===`neutral`&&`bg-[--w-color-badge-neutral-background] s-text`,e===`info`&&`bg-[--w-color-badge-info-background] s-text`,e===`positive`&&`bg-[--w-color-badge-positive-background] s-text`,e===`warning`&&`bg-[--w-color-badge-warning-background] s-text`,e===`negative`&&`bg-[--w-color-badge-negative-background] s-text`,e===`disabled`&&`s-bg-disabled s-text`,e===`price`&&`bg-[--w-black/70] s-text-inverted-static`,e===`sponsored`&&`bg-[--w-color-badge-sponsored-background] s-text`,!!this.position&&`absolute backdrop-blur`,this.position===`top-left`&&`rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0`,this.position===`top-right`&&`rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0`,this.position===`bottom-right`&&`rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0`,this.position===`bottom-left`&&`rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0`])}render(){return r`
			<div class="${this._class}">
				<slot></slot>
			</div>
		`}},s([o({type:String,reflect:!0})],b.prototype,`variant`,void 0),s([o({type:String,reflect:!0})],b.prototype,`position`,void 0),customElements.get(`w-badge`)||customElements.define(`w-badge`,b)})))()}var S=t({Info:()=>O,Negative:()=>j,Neutral:()=>D,Positioned:()=>P,Positive:()=>k,Price:()=>M,Sponsored:()=>N,Warning:()=>A,__namedExportsOrder:()=>F,default:()=>E}),C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{_(),l(),n(),x(),{events:C,args:w,argTypes:T}=u(`w-badge`),E={title:`Layout/Badge`,render(e){return r`<w-badge ${h(g(e))}>Badge text</w-badge>`},args:w,argTypes:T,parameters:{actions:{handles:C}}},D={args:{variant:`neutral`}},O={args:{variant:`info`}},k={args:{variant:`positive`}},A={args:{variant:`warning`}},j={args:{variant:`negative`}},M={args:{variant:`price`}},N={args:{variant:`sponsored`}},P={args:{variant:`price`,position:`top-right`},render(e){return r`
            <div
                style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;"
            >
                <w-badge ${h(g(e))}>Badge</w-badge>
            </div>
        `}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "neutral"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "positive"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "negative"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "price"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "sponsored"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "price",
    position: "top-right"
  },
  render(args) {
    return html\`
            <div
                style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;"
            >
                <w-badge \${spread(prespread(args))}>Badge</w-badge>
            </div>
        \`;
  }
}`,...P.parameters?.docs?.source}}},F=[`Neutral`,`Info`,`Positive`,`Warning`,`Negative`,`Price`,`Sponsored`,`Positioned`]})))()}export{k as a,A as c,P as i,S as l,j as n,M as o,D as r,N as s,O as t,I as u};