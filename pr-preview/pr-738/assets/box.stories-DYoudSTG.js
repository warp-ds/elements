import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,l as i,r as a,s as o,t as s,x as c,y as l}from"./decorate-Bt2QF_uA.js";import{n as u,t as d}from"./dist-BMSQcmCw.js";import{n as f,t as p}from"./index.m-DHqwZk2H.js";import{n as m,t as h}from"./styles-Cw_r5k83.js";import{i as g,n as _,r as v}from"./utilities-BHNt5DhH.js";import{n as y,t as b}from"./FormControlMixin-BCJbRrUC.js";var x;function S(){return(S=e((()=>{n(),x=c(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.rounded{border-radius:4px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.p-16{padding:1.6rem}.break-words{overflow-wrap:break-word}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`)})))()}var C;function w(){return(w=e((()=>{p(),n(),a(),y(),h(),S(),C=class extends b(i){constructor(...e){super(...e),this.bleed=!1,this.bordered=!1,this.info=!1,this.neutral=!1,this.role=`region`}static{this.styles=[m,x,l`
			:host {
				display: block;
			}
			::slotted(:last-child) {
				margin-bottom: 0px !important;
			}
		`]}connectedCallback(){super.connectedCallback(),this.internals.role=this.role}updated(e){super.updated(e),e.has(`role`)&&(this.internals.role=this.role)}get _class(){return f([`group block relative break-words last-child:mb-0 p-16 rounded-8`,this.bleed&&`-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8`,this.info&&`s-bg-info-subtle`,this.neutral&&`s-surface-sunken`,this.bordered&&`border-2 s-border s-bg`])}render(){return r`
			<div class="${this._class}">
				<slot></slot>
			</div>
		`}},s([o({type:Boolean,reflect:!0})],C.prototype,`bleed`,void 0),s([o({type:Boolean,reflect:!0})],C.prototype,`bordered`,void 0),s([o({type:Boolean,reflect:!0})],C.prototype,`info`,void 0),s([o({type:Boolean,reflect:!0})],C.prototype,`neutral`,void 0),s([o({type:String,reflect:!0,useDefault:!0})],C.prototype,`role`,void 0),customElements.get(`w-box`)||customElements.define(`w-box`,C)})))()}var T=t({AccessibleRegion:()=>F,Bleed:()=>P,Bordered:()=>N,Default:()=>A,Info:()=>j,Neutral:()=>M,__namedExportsOrder:()=>I,default:()=>k}),E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{v(),u(),n(),w(),{events:E,args:D,argTypes:O}=d(`w-box`),k={title:`Layout/Box`,render:e=>r`
            <w-box ${g(_(e))}>
                <h3>Box Content</h3>
                <p>This is content inside a box component.</p>
            </w-box>
        `,args:D,argTypes:O,parameters:{actions:{handles:E}}},A={args:{bleed:!1,bordered:!1,info:!1,neutral:!1}},j={args:{info:!0}},M={args:{neutral:!0}},N={args:{bordered:!0}},P={args:{bleed:!0,neutral:!0}},F={args:{},render:()=>r`
            <w-box aria-labelledby="box-content">
                <h3 id="box-content">Box Content</h3>
                <p>
                    Inspect this box in the accessibility tree to see that it is treated
                    as a region.
                </p>
                <p>
                    If aria-labelled by is not used, the box will not be treated as a
                    region.
                </p>
            </w-box>
        `},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    info: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    neutral: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: true,
    neutral: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return html\`
            <w-box aria-labelledby="box-content">
                <h3 id="box-content">Box Content</h3>
                <p>
                    Inspect this box in the accessibility tree to see that it is treated
                    as a region.
                </p>
                <p>
                    If aria-labelled by is not used, the box will not be treated as a
                    region.
                </p>
            </w-box>
        \`;
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`Info`,`Neutral`,`Bordered`,`Bleed`,`AccessibleRegion`]})))()}export{M as a,j as i,N as n,T as o,A as r,L as s,P as t};