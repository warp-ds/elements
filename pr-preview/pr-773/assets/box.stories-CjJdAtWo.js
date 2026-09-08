import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,l as i,r as a,s as o,t as s,y as c}from"./decorate-Bt2QF_uA.js";import{n as l,t as u}from"./dist-D5kJVy4t.js";import{n as d,t as f}from"./styles-Cw_r5k83.js";import{i as p,n as m,r as h}from"./utilities-BHNt5DhH.js";import{n as g,t as _}from"./FormControlMixin-BCJbRrUC.js";var v;function y(){return(y=e((()=>{n(),v=c`
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
`})))()}var b;function x(){return(x=e((()=>{n(),a(),g(),f(),y(),b=class extends _(i){constructor(...e){super(...e),this.bleed=!1,this.bordered=!1,this.info=!1,this.neutral=!1,this.role=`region`}static{this.styles=[d,v]}connectedCallback(){super.connectedCallback(),this.internals.role=this.role}updated(e){super.updated(e),e.has(`role`)&&(this.internals.role=this.role)}render(){return r`
			<div part="base">
				<slot></slot>
			</div>
		`}},s([o({type:Boolean,reflect:!0})],b.prototype,`bleed`,void 0),s([o({type:Boolean,reflect:!0})],b.prototype,`bordered`,void 0),s([o({type:Boolean,reflect:!0})],b.prototype,`info`,void 0),s([o({type:Boolean,reflect:!0})],b.prototype,`neutral`,void 0),s([o({type:String,reflect:!0,useDefault:!0})],b.prototype,`role`,void 0),customElements.get(`w-box`)||customElements.define(`w-box`,b)})))()}var S=t({AccessibleRegion:()=>M,Bleed:()=>j,Bordered:()=>A,Default:()=>D,Info:()=>O,Neutral:()=>k,StylingApi:()=>N,__namedExportsOrder:()=>P,default:()=>E}),C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{h(),l(),n(),x(),{events:C,args:w,argTypes:T}=u(`w-box`),E={title:`Layout/Box`,render:e=>r`
            <w-box ${p(m(e))}>
                <h3>Box Content</h3>
                <p>This is content inside a box component.</p>
            </w-box>
        `,args:w,argTypes:T,parameters:{actions:{handles:C}}},D={args:{bleed:!1,bordered:!1,info:!1,neutral:!1}},O={args:{info:!0}},k={args:{neutral:!0}},A={args:{bordered:!0}},j={args:{bleed:!0,neutral:!0}},M={args:{},render:()=>r`
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
        `},N={args:{bordered:!0},render(e){return r`
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
            <w-box ${p(m(e))}>
                <h3>Styled box</h3>
                <p>This story demonstrates box tokens and the base part.</p>
            </w-box>
        `}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    info: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    neutral: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: true,
    neutral: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`Default`,`Info`,`Neutral`,`Bordered`,`Bleed`,`AccessibleRegion`,`StylingApi`]})))()}export{k as a,O as i,A as n,S as o,D as r,F as s,j as t};