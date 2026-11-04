import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{T as n,a as r,d as i,i as a,k as o,r as s,t as c,v as l,y as u}from"./decorate-r9jH0CjD.js";import{n as d,t as f}from"./dist-gZ_m6TlA.js";import{n as p,t as m}from"./styles-zocEQ6mS.js";import{i as h,n as g,r as _}from"./utilities-DPMir1kO.js";var v;function y(){return(y=e((()=>{l(),v=o`
	:host {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-neutral-background)
		);
		--_color: var(--w-c-badge-color, var(--w-s-color-text));
		--_border-radius: var(--w-c-badge-border-radius, 4px);
		--_border-width: var(--w-c-badge-border-width, 0);
		--_border-color: var(--w-c-badge-border-color, transparent);
		--_font-size: var(--w-c-badge-font-size, var(--w-font-size-xs));
		--_line-height: var(--w-c-badge-line-height, var(--w-line-height-xs));
		--_padding-x: var(--w-c-badge-padding-x, 0.8rem);
		--_padding-y: var(--w-c-badge-padding-y, 0.4rem);
		--_backdrop-filter: var(--w-c-badge-backdrop-filter, none);
	}

	:host([variant="neutral"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-neutral-background)
		);
	}

	:host([variant="info"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-info-background)
		);
	}

	:host([variant="positive"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-positive-background)
		);
	}

	:host([variant="warning"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-warning-background)
		);
	}

	:host([variant="negative"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-negative-background)
		);
	}

	:host([variant="disabled"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-s-color-background-disabled)
		);
	}

	:host([variant="price"]) {
		--_background-color: var(--w-c-badge-bg, rgba(var(--w-rgb-black), 0.7));
		--_color: var(--w-c-badge-color, var(--w-s-color-text-inverted-static));
	}

	:host([variant="sponsored"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-sponsored-background)
		);
	}

	:host([position]) {
		--_backdrop-filter: var(--w-c-badge-backdrop-filter, blur(4px));
	}

	:host([position="top-left"]) {
		inset: 0 auto auto 0;
	}

	:host([position="top-right"]) {
		inset: 0 0 auto auto;
	}

	:host([position="bottom-right"]) {
		inset: auto 0 0 auto;
	}

	:host([position="bottom-left"]) {
		inset: auto auto 0 0;
	}

	[part="base"] {
		background-color: var(--_background-color);
		border: var(--_border-width) solid var(--_border-color);
		border-radius: var(--_border-radius);
		color: var(--_color);
		display: inline-flex;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		padding: var(--_padding-y) var(--_padding-x);
	}

	:host([position]) [part="base"] {
		-webkit-backdrop-filter: var(--_backdrop-filter);
		backdrop-filter: var(--_backdrop-filter);
	}

	:host([position]) {
		position: absolute;
	}

	:host([position="top-left"]) [part="base"] {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	:host([position="top-right"]) [part="base"] {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	:host([position="bottom-right"]) [part="base"] {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	:host([position="bottom-left"]) [part="base"] {
		border-top-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}
`})))()}var b;function x(){return(x=e((()=>{l(),r(),a(),m(),y(),b=class extends u{constructor(){super(),this.variant=`neutral`,new s(this)}static{this.styles=[p,v]}render(){return n`<div part="base"><slot></slot></div>`}},c([i({type:String,reflect:!0,useDefault:!0})],b.prototype,`variant`,void 0),c([i({type:String,reflect:!0})],b.prototype,`position`,void 0),customElements.get(`w-badge`)||customElements.define(`w-badge`,b)})))()}var S=t({Info:()=>O,Negative:()=>j,Neutral:()=>D,Positioned:()=>P,Positive:()=>k,Price:()=>M,Sponsored:()=>N,StylingApi:()=>F,Warning:()=>A,__namedExportsOrder:()=>I,default:()=>E}),C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{_(),d(),l(),x(),{events:C,args:w,argTypes:T}=f(`w-badge`),E={title:`Layout/Badge`,render(e){return n`<w-badge ${h(g(e))}>Badge text</w-badge>`},args:w,argTypes:T,parameters:{actions:{handles:C}}},D={args:{variant:`neutral`}},O={args:{variant:`info`}},k={args:{variant:`positive`}},A={args:{variant:`warning`}},j={args:{variant:`negative`}},M={args:{variant:`price`}},N={args:{variant:`sponsored`}},P={args:{variant:`price`,position:`top-right`},render(e){return n`
            <div
                style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;"
            >
                <w-badge ${h(g(e))}>Badge</w-badge>
            </div>
        `}},F={args:{variant:`info`},render(e){return n`
            <pre>
<code>
&lt;style&gt;
w-badge {
    --w-c-badge-bg: rebeccapurple;
    --w-c-badge-color: white;
    --w-c-badge-border-radius: 9999px;
    --w-c-badge-padding-x: 1.2rem;
    --w-c-badge-padding-y: 0.6rem;
}

w-badge::part(base) {
    border: 2px solid cyan;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
&lt;/style&gt;
</code>
            </pre>
            <style>
                w-badge {
                    --w-c-badge-bg: rebeccapurple;
                    --w-c-badge-color: white;
                    --w-c-badge-border-radius: 9999px;
                    --w-c-badge-padding-x: 1.2rem;
                    --w-c-badge-padding-y: 0.6rem;
                }

                w-badge::part(base) {
                    border: 2px solid cyan;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }
            </style>
            <w-badge ${h(g(e))}>Styled badge</w-badge>
        `}},I=[`Neutral`,`Info`,`Positive`,`Warning`,`Negative`,`Price`,`Sponsored`,`Positioned`,`StylingApi`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info"
  },
  render(args) {
    return html\`
            <pre>
<code>
&lt;style&gt;
w-badge {
    --w-c-badge-bg: rebeccapurple;
    --w-c-badge-color: white;
    --w-c-badge-border-radius: 9999px;
    --w-c-badge-padding-x: 1.2rem;
    --w-c-badge-padding-y: 0.6rem;
}

w-badge::part(base) {
    border: 2px solid cyan;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
&lt;/style&gt;
</code>
            </pre>
            <style>
                w-badge {
                    --w-c-badge-bg: rebeccapurple;
                    --w-c-badge-color: white;
                    --w-c-badge-border-radius: 9999px;
                    --w-c-badge-padding-x: 1.2rem;
                    --w-c-badge-padding-y: 0.6rem;
                }

                w-badge::part(base) {
                    border: 2px solid cyan;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }
            </style>
            <w-badge \${spread(prespread(args))}>Styled badge</w-badge>
        \`;
  }
}`,...F.parameters?.docs?.source}}}})))()}export{k as a,A as c,P as i,S as l,j as n,M as o,D as r,N as s,O as t,L as u};