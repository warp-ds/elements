import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{c as n,h as r,l as i,s as a,t as o,x as s,y as c}from"./decorators-CPAv1fbk.js";import{C as l,S as u,_ as d,b as f,d as p,f as m,l as h,p as g,u as _,v,x as y}from"./iframe-Bsse8mc5.js";import{a as b,n as x,r as S,t as C}from"./utilities-Pi3Nxy55.js";import{t as w}from"./expand-transition-SzQU1_rV.js";var T,E=t((()=>{n(),T=s(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.inline{display:inline}.flex{display:flex}.hidden{display:none}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`)})),D,O,k,A=t((()=>{d(),n(),o(),p(),y(),h(),E(),g(),D={wrapper:`flex p-16 border border-l-4 rounded-4 s-text`,willChangeHeight:`will-change-height`,textWrapper:`last-child:mb-0 text-s`,title:`text-s`,icon:`w-16 mr-8 min-w-16`,negative:`s-border-negative-subtle s-border-l-negative s-bg-negative-subtle`,negativeIcon:`s-icon-negative`,positive:`s-border-positive-subtle s-border-l-positive s-bg-positive-subtle`,positiveIcon:`s-icon-positive`,warning:`s-border-warning-subtle s-border-l-warning s-bg-warning-subtle`,warningIcon:`s-icon-warning`,info:`s-border-info-subtle s-border-l-info s-bg-info-subtle`,infoIcon:`s-icon-info`},O={negative:`negative`,positive:`positive`,warning:`warning`,info:`info`},k=class extends i{constructor(){super(),this.variant=`info`,this.show=!1,this.role=`alert`,this._internals=this.attachInternals(),this._internals.role=`alert`}connectedCallback(){if(super.connectedCallback(),this.variant&&!O[this.variant])throw Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){let e=this.variant;return v([D.wrapper,D[e]])}get _iconClasses(){let e=D[`${this.variant}Icon`];return v([D.icon,e])}static{this.styles=[_,T,c`
			:host {
				display: block;
			}

			::slotted(:first-child) {
				margin-top: 0px;
			}

			::slotted(:last-child) {
				margin-bottom: 0px !important;
			}
		`]}get _icon(){let e=f(),t=this.variant||`info`;return t===O.info?r`<w-icon
				name="Info"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:t===O.warning?r`<w-icon
				name="Warning"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:t===O.negative?r`<w-icon
				name="Error"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:t===O.positive?r`<w-icon
				name="Success"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:``}render(){return r`
			<w-expand-transition ?show=${this.show}>
				<div role=${this.role} class=${this._wrapperClasses}>
					<div class=${this._iconClasses}>${this._icon}</div>
					<div class=${D.textWrapper}>
						<slot></slot>
					</div>
				</div>
			</w-expand-transition>
		`}},m([a({reflect:!0,useDefault:!0})],k.prototype,`variant`,void 0),m([a({type:Boolean,reflect:!0,useDefault:!0})],k.prototype,`show`,void 0),m([a({reflect:!0,useDefault:!0})],k.prototype,`role`,void 0),customElements.get(`w-alert`)||customElements.define(`w-alert`,k)})),j=e({Info:()=>I,Negative:()=>R,Positive:()=>z,Warning:()=>L,WithDescription:()=>B,__namedExportsOrder:()=>V,default:()=>F}),M,N,P,F,I,L,R,z,B,V,H=t((()=>{S(),l(),n(),C(),w(),A(),{events:M,args:N,argTypes:P}=u(`w-alert`),F={title:`Feedback/Alert`,render(e){return r`
            <w-alert ${b(x(e))}>
                <p>This is an alert message</p>
            </w-alert>
        `},args:N,argTypes:P,parameters:{actions:{handles:M}}},I={args:{variant:`info`,show:!0,role:`alert`}},L={args:{variant:`warning`,show:!0,role:`alert`}},R={args:{variant:`negative`,show:!0,role:`alert`}},z={args:{variant:`positive`,show:!0,role:`alert`}},B={args:{variant:`info`,show:!0,role:`alert`},render(e){return r`
            <w-alert ${b(x(e))}>
                <h3>Alert Title</h3>
                <p>
                    This is a more detailed alert message with additional description.
                </p>
            </w-alert>
        `}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    show: true,
    role: "alert"
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    show: true,
    role: "alert"
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "negative",
    show: true,
    role: "alert"
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    show: true,
    role: "alert"
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Info`,`Warning`,`Negative`,`Positive`,`WithDescription`]}));H();export{I as Info,R as Negative,z as Positive,L as Warning,B as WithDescription,V as __namedExportsOrder,F as default,H as n,j as t};