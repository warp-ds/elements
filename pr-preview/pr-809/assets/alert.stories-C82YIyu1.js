import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{T as n,a as r,d as i,i as a,k as o,r as s,t as c,v as l,y as u}from"./decorate-r9jH0CjD.js";import{n as d,t as f}from"./dist-gZ_m6TlA.js";import{n as p,r as m}from"./i18n-CH8KbyPD.js";import{t as h}from"./icon-BLxYKJ3e.js";import{n as g,t as _}from"./styles-zocEQ6mS.js";import{i as v,n as y,r as b}from"./utilities-DPMir1kO.js";import{t as x}from"./expand-transition-CZCcP5sx.js";var S;function C(){return(C=e((()=>{l(),S=o`
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
`})))()}var w,T;function E(){return(E=e((()=>{l(),r(),a(),h(),m(),_(),C(),w={negative:`negative`,positive:`positive`,warning:`warning`,info:`info`},T=class extends u{constructor(){super(),this.variant=`info`,this.show=!1,this.role=`alert`,new s(this),this._internals=this.attachInternals(),this._internals.role=`alert`}connectedCallback(){if(super.connectedCallback(),this.variant&&!w[this.variant])throw Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}static{this.styles=[g,S,o`
			:host {
				display: block;
			}

			::slotted(:first-child) {
				margin-top: 0px;
			}

			::slotted(:last-child) {
				margin-bottom: 0px !important;
			}
		`]}get _icon(){let e=p(),t=this.variant||`info`;return t===w.info?n`<w-icon
				name="Info"
				size="small"
				locale="${e}"
			></w-icon>`:t===w.warning?n`<w-icon
				name="Warning"
				size="small"
				locale="${e}"
			></w-icon>`:t===w.negative?n`<w-icon
				name="Error"
				size="small"
				locale="${e}"
			></w-icon>`:t===w.positive?n`<w-icon
				name="Success"
				size="small"
				locale="${e}"
			></w-icon>`:``}render(){return n`
			<w-expand-transition ?show=${this.show}>
				<div role=${this.role} part="base">
					<div part="icon">${this._icon}</div>
					<div part="content">
						<slot></slot>
					</div>
				</div>
			</w-expand-transition>
		`}},c([i({reflect:!0,useDefault:!0})],T.prototype,`variant`,void 0),c([i({type:Boolean,reflect:!0,useDefault:!0})],T.prototype,`show`,void 0),c([i({reflect:!0,useDefault:!0})],T.prototype,`role`,void 0),customElements.get(`w-alert`)||customElements.define(`w-alert`,T)})))()}var D=t({Info:()=>M,Negative:()=>P,Positive:()=>F,Warning:()=>N,WithDescription:()=>I,__namedExportsOrder:()=>L,default:()=>j}),O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{b(),d(),l(),x(),E(),{events:O,args:k,argTypes:A}=f(`w-alert`),j={title:`Feedback/Alert`,render(e){return n`
            <w-alert ${v(y(e))}>
                <p>This is an alert message</p>
            </w-alert>
        `},args:k,argTypes:A,parameters:{actions:{handles:O}}},M={args:{variant:`info`,show:!0,role:`alert`}},N={args:{variant:`warning`,show:!0,role:`alert`}},P={args:{variant:`negative`,show:!0,role:`alert`}},F={args:{variant:`positive`,show:!0,role:`alert`}},I={args:{variant:`info`,show:!0,role:`alert`},render(e){return n`
            <w-alert ${v(y(e))}>
                <h3>Alert Title</h3>
                <p>
                    This is a more detailed alert message with additional description.
                </p>
            </w-alert>
        `}},L=[`Info`,`Warning`,`Negative`,`Positive`,`WithDescription`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    show: true,
    role: "alert"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    show: true,
    role: "alert"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "negative",
    show: true,
    role: "alert"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    show: true,
    role: "alert"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}}})))()}export{I as a,N as i,P as n,D as o,F as r,R as s,M as t};