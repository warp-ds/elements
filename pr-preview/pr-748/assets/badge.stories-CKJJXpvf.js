import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,l as i,r as a,s as o,t as s,y as c}from"./decorate-J4WBtiHw.js";import{n as l,t as u}from"./dist-Bnzru1sc.js";import{n as d,t as f}from"./styles-CYn3YYhE.js";import{i as p,n as m,r as h}from"./utilities-DhdP2kMI.js";var g;function _(){return(_=e((()=>{n(),g=c`
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
`})))()}var v;function y(){return(y=e((()=>{n(),a(),f(),_(),v=class extends i{constructor(...e){super(...e),this.variant=`neutral`}static{this.styles=[d,g]}render(){return r`<div part="base"><slot></slot></div>`}},s([o({type:String,reflect:!0,useDefault:!0})],v.prototype,`variant`,void 0),s([o({type:String,reflect:!0})],v.prototype,`position`,void 0),customElements.get(`w-badge`)||customElements.define(`w-badge`,v)})))()}var b=t({Info:()=>E,Negative:()=>k,Neutral:()=>T,Positioned:()=>M,Positive:()=>D,Price:()=>A,Sponsored:()=>j,StylingApi:()=>N,Warning:()=>O,__namedExportsOrder:()=>P,default:()=>w}),x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{h(),l(),n(),y(),{events:x,args:S,argTypes:C}=u(`w-badge`),w={title:`Layout/Badge`,render(e){return r`<w-badge ${p(m(e))}>Badge text</w-badge>`},args:S,argTypes:C,parameters:{actions:{handles:x}}},T={args:{variant:`neutral`}},E={args:{variant:`info`}},D={args:{variant:`positive`}},O={args:{variant:`warning`}},k={args:{variant:`negative`}},A={args:{variant:`price`}},j={args:{variant:`sponsored`}},M={args:{variant:`price`,position:`top-right`},render(e){return r`
            <div
                style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;"
            >
                <w-badge ${p(m(e))}>Badge</w-badge>
            </div>
        `}},N={args:{variant:`info`},render(e){return r`
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
            <w-badge ${p(m(e))}>Styled badge</w-badge>
        `}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "neutral"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "positive"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "negative"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "price"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "sponsored"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`Neutral`,`Info`,`Positive`,`Warning`,`Negative`,`Price`,`Sponsored`,`Positioned`,`StylingApi`]})))()}export{D as a,O as c,M as i,b as l,k as n,A as o,T as r,j as s,E as t,F as u};