import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{C as n,f as r,p as i,r as a,s as o,t as s,y as c}from"./decorate-kJVNAdyH.js";import{n as l,r as u}from"./i18n-DxEA2sVo.js";import{n as d,t as f}from"./dist-Bn_0n649.js";import{t as p}from"./icon-DgzLkPq-.js";import{n as m,t as h}from"./styles-BxpTFSox.js";import{i as g,n as _,r as v}from"./utilities-DyUKeeub.js";import{t as y}from"./expand-transition-C7QLNZ2R.js";var b;function x(){return(x=e((()=>{r(),b=n`
	:host {
		--_icon-size: var(--w-c-alert-icon-size, 16px);
		--_icon-color: var(--w-c-alert-color-icon, var(--w-s-color-icon-info));
		--_background-color: var(
			--w-c-alert-color-background,
			var(--w-s-color-background-info-subtle)
		);
		--_border-color: var(
			--w-c-alert-color-border,
			var(--w-s-color-border-info-subtle)
		);
		--_border-left-color: var(
			--w-c-alert-color-border-left,
			var(--w-s-color-border-info)
		);
		--_border-radius: var(--w-c-alert-border-radius, 4px);
		--_border-width: var(--w-c-alert-border-width, 1px);
		--_border-left-width: var(--w-c-alert-border-left-width, 4px);
		--_text-color: var(--w-c-alert-color-text, var(--w-s-color-text));
		--_font-size: var(--w-c-alert-font-size, var(--w-font-size-s));
		--_line-height: var(--w-c-alert-line-height, var(--w-line-height-s));
		--_padding: var(--w-c-alert-padding, 1.6rem);
	}
	:host([variant="positive"]) {
		--_background-color: var(
			--w-c-alert-color-background,
			var(--w-s-color-background-positive-subtle)
		);
		--_border-color: var(
			--w-c-alert-border-color,
			var(--w-s-color-border-positive-subtle)
		);
		--_border-left-color: var(
			--w-c-alert-border-left-color,
			var(--w-s-color-border-positive)
		);
		--_icon-color: var(--w-c-alert-icon-color, var(--w-s-color-icon-positive));
	}
	:host([variant="warning"]) {
		--_background-color: var(
			--w-c-alert-color-background,
			var(--w-s-color-background-warning-subtle)
		);
		--_border-color: var(
			--w-c-alert-color-border,
			var(--w-s-color-border-warning-subtle)
		);
		--_border-left-color: var(
			--w-c-alert-color-border-left,
			var(--w-s-color-border-warning)
		);
		--_icon-color: var(--w-c-alert-color-icon, var(--w-s-color-icon-warning));
	}
	:host([variant="negative"]) {
		--_background-color: var(
			--w-c-alert-color-background,
			var(--w-s-color-background-negative-subtle)
		);
		--_border-color: var(
			--w-c-alert-color-border,
			var(--w-s-color-border-negative-subtle)
		);
		--_border-left-color: var(
			--w-c-alert-color-border-left,
			var(--w-s-color-border-negative)
		);
		--_icon-color: var(--w-c-alert-color-icon, var(--w-s-color-icon-negative));
	}
	[part="base"] {
		padding: var(--_padding);
		border-color: var(--_border-color);
		border-left-color: var(--_border-left-color);
		color: var(--_text-color);
		background-color: var(--_background-color);
		display: flex;
		border-radius: var(--_border-radius);
		border-width: var(--_border-width);
		border-left-width: var(--_border-left-width);
	}
	[part="icon"] {
		margin-right: 0.8rem;
		width: 1.6rem;
		min-width: 1.6rem;
		color: var(--_icon-color);
	}
	w-icon {
		height: var(--_icon-size);
		width: var(--_icon-size);
		display: flex;
	}
	[part="content"] {
		font-size: var(--_font-size);
		line-height: var(--_line-height);
	}
`})))()}var S,C;function w(){return(w=e((()=>{r(),a(),p(),u(),h(),x(),S={negative:`negative`,positive:`positive`,warning:`warning`,info:`info`},C=class extends i{constructor(){super(),this.variant=`info`,this.show=!1,this.role=`alert`,this._internals=this.attachInternals(),this._internals.role=`alert`}connectedCallback(){if(super.connectedCallback(),this.variant&&!S[this.variant])throw Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}static{this.styles=[m,b,n`
			:host {
				display: block;
			}

			::slotted(:first-child) {
				margin-top: 0px;
			}

			::slotted(:last-child) {
				margin-bottom: 0px !important;
			}
		`]}get _icon(){let e=l(),t=this.variant||`info`;return t===S.info?c`<w-icon
				name="Info"
				size="small"
				locale="${e}"
			></w-icon>`:t===S.warning?c`<w-icon
				name="Warning"
				size="small"
				locale="${e}"
			></w-icon>`:t===S.negative?c`<w-icon
				name="Error"
				size="small"
				locale="${e}"
			></w-icon>`:t===S.positive?c`<w-icon
				name="Success"
				size="small"
				locale="${e}"
			></w-icon>`:``}render(){return c`
			<w-expand-transition ?show=${this.show}>
				<div role=${this.role} part="base">
					<div part="icon">${this._icon}</div>
					<div part="content">
						<slot></slot>
					</div>
				</div>
			</w-expand-transition>
		`}},s([o({reflect:!0,useDefault:!0})],C.prototype,`variant`,void 0),s([o({type:Boolean,reflect:!0,useDefault:!0})],C.prototype,`show`,void 0),s([o({reflect:!0,useDefault:!0})],C.prototype,`role`,void 0),customElements.get(`w-alert`)||customElements.define(`w-alert`,C)})))()}var T=t({Info:()=>A,Negative:()=>M,Positive:()=>N,Warning:()=>j,WithDescription:()=>P,__namedExportsOrder:()=>F,default:()=>k}),E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{v(),d(),r(),y(),w(),{events:E,args:D,argTypes:O}=f(`w-alert`),k={title:`Feedback/Alert`,render(e){return c`
            <w-alert ${g(_(e))}>
                <p>This is an alert message</p>
            </w-alert>
        `},args:D,argTypes:O,parameters:{actions:{handles:E}}},A={args:{variant:`info`,show:!0,role:`alert`}},j={args:{variant:`warning`,show:!0,role:`alert`}},M={args:{variant:`negative`,show:!0,role:`alert`}},N={args:{variant:`positive`,show:!0,role:`alert`}},P={args:{variant:`info`,show:!0,role:`alert`},render(e){return c`
            <w-alert ${g(_(e))}>
                <h3>Alert Title</h3>
                <p>
                    This is a more detailed alert message with additional description.
                </p>
            </w-alert>
        `}},F=[`Info`,`Warning`,`Negative`,`Positive`,`WithDescription`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    show: true,
    role: "alert"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    show: true,
    role: "alert"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "negative",
    show: true,
    role: "alert"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    show: true,
    role: "alert"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    show: true,
    role: "alert"
  },
  render(args) {
    return html\`
            <w-alert \${spread(prespread(args))}>
                <h3>Alert Title</h3>
                <p>
                    This is a more detailed alert message with additional description.
                </p>
            </w-alert>
        \`;
  }
}`,...P.parameters?.docs?.source}}}})))()}export{P as a,j as i,M as n,T as o,N as r,I as s,A as t};