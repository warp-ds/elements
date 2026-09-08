import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{C as n,T as r,f as i,p as a,r as o,s,t as c,y as l}from"./decorate-D-MUTuIl.js";import{n as u,r as d}from"./i18n-CkjYRTT1.js";import{n as f,t as p}from"./dist-CXTYkVAl.js";import{n as m,t as h}from"./index.m-DHqwZk2H.js";import{t as g}from"./icon-DmyEA4mQ.js";import{n as _,t as v}from"./styles-Dxzaq_l3.js";import{i as y,n as b,r as x}from"./utilities-C5YHrCuy.js";import{t as S}from"./expand-transition-SneieoSM.js";var C;function w(){return(w=e((()=>{i(),C=r(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.inline{display:inline}.flex{display:flex}.hidden{display:none}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`)})))()}var T,E,D;function O(){return(O=e((()=>{h(),i(),o(),g(),d(),v(),w(),T={wrapper:`flex p-16 border border-l-4 rounded-4 s-text`,willChangeHeight:`will-change-height`,textWrapper:`last-child:mb-0 text-s`,title:`text-s`,icon:`w-16 mr-8 min-w-16`,negative:`s-border-negative-subtle s-border-l-negative s-bg-negative-subtle`,negativeIcon:`s-icon-negative`,positive:`s-border-positive-subtle s-border-l-positive s-bg-positive-subtle`,positiveIcon:`s-icon-positive`,warning:`s-border-warning-subtle s-border-l-warning s-bg-warning-subtle`,warningIcon:`s-icon-warning`,info:`s-border-info-subtle s-border-l-info s-bg-info-subtle`,infoIcon:`s-icon-info`},E={negative:`negative`,positive:`positive`,warning:`warning`,info:`info`},D=class extends a{constructor(){super(),this.variant=`info`,this.show=!1,this.role=`alert`,this._internals=this.attachInternals(),this._internals.role=`alert`}connectedCallback(){if(super.connectedCallback(),this.variant&&!E[this.variant])throw Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){let e=this.variant;return m([T.wrapper,T[e]])}get _iconClasses(){let e=this.variant,t=T[`${e}Icon`];return m([T.icon,t])}static{this.styles=[_,C,n`
			:host {
				display: block;
			}

			::slotted(:first-child) {
				margin-top: 0px;
			}

			::slotted(:last-child) {
				margin-bottom: 0px !important;
			}
		`]}get _icon(){let e=u(),t=this.variant||`info`;return t===E.info?l`<w-icon
				name="Info"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:t===E.warning?l`<w-icon
				name="Warning"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:t===E.negative?l`<w-icon
				name="Error"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:t===E.positive?l`<w-icon
				name="Success"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:``}render(){return l`
			<w-expand-transition ?show=${this.show}>
				<div role=${this.role} class=${this._wrapperClasses}>
					<div class=${this._iconClasses}>${this._icon}</div>
					<div class=${T.textWrapper}>
						<slot></slot>
					</div>
				</div>
			</w-expand-transition>
		`}},c([s({reflect:!0,useDefault:!0})],D.prototype,`variant`,void 0),c([s({type:Boolean,reflect:!0,useDefault:!0})],D.prototype,`show`,void 0),c([s({reflect:!0,useDefault:!0})],D.prototype,`role`,void 0),customElements.get(`w-alert`)||customElements.define(`w-alert`,D)})))()}var k=t({Info:()=>P,Negative:()=>I,Positive:()=>L,Warning:()=>F,WithDescription:()=>R,__namedExportsOrder:()=>z,default:()=>N}),A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{x(),f(),i(),S(),O(),{events:A,args:j,argTypes:M}=p(`w-alert`),N={title:`Feedback/Alert`,render(e){return l`
            <w-alert ${y(b(e))}>
                <p>This is an alert message</p>
            </w-alert>
        `},args:j,argTypes:M,parameters:{actions:{handles:A}}},P={args:{variant:`info`,show:!0,role:`alert`}},F={args:{variant:`warning`,show:!0,role:`alert`}},I={args:{variant:`negative`,show:!0,role:`alert`}},L={args:{variant:`positive`,show:!0,role:`alert`}},R={args:{variant:`info`,show:!0,role:`alert`},render(e){return l`
            <w-alert ${y(b(e))}>
                <h3>Alert Title</h3>
                <p>
                    This is a more detailed alert message with additional description.
                </p>
            </w-alert>
        `}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    show: true,
    role: "alert"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    show: true,
    role: "alert"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "negative",
    show: true,
    role: "alert"
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    show: true,
    role: "alert"
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z=[`Info`,`Warning`,`Negative`,`Positive`,`WithDescription`]})))()}export{R as a,F as i,I as n,k as o,L as r,B as s,P as t};