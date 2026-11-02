import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{T as n,a as r,d as i,i as a,k as o,r as s,t as c,v as l,y as u}from"./decorate-r9jH0CjD.js";import{n as d,t as f}from"./dist-gZ_m6TlA.js";import{n as p,t as m}from"./styles-zocEQ6mS.js";import{i as h,n as g,r as _}from"./utilities-DPMir1kO.js";import{n as v,t as y}from"./FormControlMixin-wSdHiYtY.js";var b;function x(){return(x=e((()=>{l(),b=o`
	:host {
		display: block;
		--_background-color: var(--w-c-box-bg, transparent);
		--_border-color: var(--w-c-box-border-color, transparent);
		--_border-radius: var(--w-c-box-border-radius, 8px);
		--_border-width: var(--w-c-box-border-width, 0px);
		--_padding: var(--w-c-box-padding, 1.6rem);
		--_bleed-margin-inline: var(--w-c-box-bleed-margin-inline, 1.6rem);
	}

	:host([info]) {
		--_background-color: var(
			--w-c-box-bg,
			var(--w-s-color-background-info-subtle)
		);
	}

	:host([neutral]) {
		--_background-color: var(--w-c-box-bg, var(--w-s-color-surface-sunken));
	}

	:host([bordered]) {
		--_background-color: var(--w-c-box-bg, var(--w-s-color-background));
		--_border-color: var(--w-c-box-border-color, var(--w-s-color-border));
		--_border-width: var(--w-c-box-border-width, 2px);
	}

	[part="base"] {
		background-color: var(--_background-color);
		border: var(--_border-width) solid var(--_border-color);
		border-radius: var(--_border-radius);
		display: block;
		overflow-wrap: break-word;
		padding: var(--_padding);
		position: relative;
	}

	:host([bleed]) [part="base"] {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		margin-left: calc(var(--_bleed-margin-inline) * -1);
		margin-right: calc(var(--_bleed-margin-inline) * -1);
	}

	// Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
	// ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
	// so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
	// https://stackoverflow.com/a/61631668
	::slotted(:last-child) {
		margin-bottom: 0px !important;
	}

	@media (min-width: 480px) {
		:host([bleed]) [part="base"] {
			border-radius: var(--_border-radius);
			margin-left: 0;
			margin-right: 0;
		}
	}
`})))()}var S;function C(){return(C=e((()=>{l(),r(),v(),a(),m(),x(),S=class extends y(u){constructor(){super(),this.bleed=!1,this.bordered=!1,this.info=!1,this.neutral=!1,this.role=`region`,new s(this)}static{this.styles=[p,b]}connectedCallback(){super.connectedCallback(),this.internals.role=this.role}updated(e){super.updated(e),e.has(`role`)&&(this.internals.role=this.role)}render(){return n`
			<div part="base">
				<slot></slot>
			</div>
		`}},c([i({type:Boolean,reflect:!0})],S.prototype,`bleed`,void 0),c([i({type:Boolean,reflect:!0})],S.prototype,`bordered`,void 0),c([i({type:Boolean,reflect:!0})],S.prototype,`info`,void 0),c([i({type:Boolean,reflect:!0})],S.prototype,`neutral`,void 0),c([i({type:String,reflect:!0,useDefault:!0})],S.prototype,`role`,void 0),customElements.get(`w-box`)||customElements.define(`w-box`,S)})))()}var w=t({AccessibleRegion:()=>P,Bleed:()=>N,Bordered:()=>M,Default:()=>k,Info:()=>A,Neutral:()=>j,StylingApi:()=>F,__namedExportsOrder:()=>I,default:()=>O}),T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{_(),d(),l(),C(),{events:T,args:E,argTypes:D}=f(`w-box`),O={title:`Layout/Box`,render:e=>n`
            <w-box ${h(g(e))}>
                <h3>Box Content</h3>
                <p>This is content inside a box component.</p>
            </w-box>
        `,args:E,argTypes:D,parameters:{actions:{handles:T}}},k={args:{bleed:!1,bordered:!1,info:!1,neutral:!1}},A={args:{info:!0}},j={args:{neutral:!0}},M={args:{bordered:!0}},N={args:{bleed:!0,neutral:!0}},P={args:{},render:()=>n`
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
        `},F={args:{bordered:!0},render(e){return n`
            <pre>
<code>
&lt;style&gt;
w-box {
    --w-c-box-bg: rebeccapurple;
    --w-c-box-border-color: cyan;
    --w-c-box-border-radius: 24px;
    --w-c-box-border-width: 4px;
    --w-c-box-padding: 2rem;
}

w-box::part(base) {
    color: white;
    box-shadow: inset 0 0 0 2px magenta;
}
&lt;/style&gt;
</code>
            </pre>
            <style>
                w-box {
                    --w-c-box-bg: rebeccapurple;
                    --w-c-box-border-color: cyan;
                    --w-c-box-border-radius: 24px;
                    --w-c-box-border-width: 4px;
                    --w-c-box-padding: 2rem;
                }

                w-box::part(base) {
                    color: white;
                    box-shadow: inset 0 0 0 2px magenta;
                }
            </style>
            <w-box ${h(g(e))}>
                <h3>Styled box</h3>
                <p>This story demonstrates box tokens and the base part.</p>
            </w-box>
        `}},I=[`Default`,`Info`,`Neutral`,`Bordered`,`Bleed`,`AccessibleRegion`,`StylingApi`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    info: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    neutral: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: true,
    neutral: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true
  },
  render(args) {
    return html\`
            <pre>
<code>
&lt;style&gt;
w-box {
    --w-c-box-bg: rebeccapurple;
    --w-c-box-border-color: cyan;
    --w-c-box-border-radius: 24px;
    --w-c-box-border-width: 4px;
    --w-c-box-padding: 2rem;
}

w-box::part(base) {
    color: white;
    box-shadow: inset 0 0 0 2px magenta;
}
&lt;/style&gt;
</code>
            </pre>
            <style>
                w-box {
                    --w-c-box-bg: rebeccapurple;
                    --w-c-box-border-color: cyan;
                    --w-c-box-border-radius: 24px;
                    --w-c-box-border-width: 4px;
                    --w-c-box-padding: 2rem;
                }

                w-box::part(base) {
                    color: white;
                    box-shadow: inset 0 0 0 2px magenta;
                }
            </style>
            <w-box \${spread(prespread(args))}>
                <h3>Styled box</h3>
                <p>This story demonstrates box tokens and the base part.</p>
            </w-box>
        \`;
  }
}`,...F.parameters?.docs?.source}}}})))()}export{j as a,A as i,M as n,w as o,k as r,L as s,N as t};