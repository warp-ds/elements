import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{A as n,D as r,E as i,Ht as a,Lt as o,M as s,N as c,O as l,Rt as u,Wt as d,b as f,d as p,f as m,j as h,l as g,p as _,u as v}from"./iframe-BBaEObFm.js";import{a as y,n as b,r as x,t as S}from"./utilities-BOB5Xe-V.js";import{t as C}from"./expand-transition-BB_9Sgqg.js";var w,T=t((()=>{o(),w=d`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.inline{display:inline}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`})),E,D,O,k=t((()=>{r(),o(),f(),p(),h(),g(),T(),_(),E={wrapper:`flex p-16 border border-l-4 rounded-4 s-text`,willChangeHeight:`will-change-height`,textWrapper:`last-child:mb-0 text-s`,title:`text-s`,icon:`w-16 mr-8 min-w-16`,negative:`s-border-negative-subtle s-border-l-negative s-bg-negative-subtle`,negativeIcon:`s-icon-negative`,positive:`s-border-positive-subtle s-border-l-positive s-bg-positive-subtle`,positiveIcon:`s-icon-positive`,warning:`s-border-warning-subtle s-border-l-warning s-bg-warning-subtle`,warningIcon:`s-icon-warning`,info:`s-border-info-subtle s-border-l-info s-bg-info-subtle`,infoIcon:`s-icon-info`},D={negative:`negative`,positive:`positive`,warning:`warning`,info:`info`},O=class extends u{constructor(){super(),this.variant=`info`,this.show=!1,this.role=`alert`,this._internals=this.attachInternals(),this._internals.role=`alert`}connectedCallback(){if(super.connectedCallback(),this.variant&&!D[this.variant])throw Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){let e=this.variant;return l([E.wrapper,E[e]])}get _iconClasses(){let e=E[`${this.variant}Icon`];return l([E.icon,e])}static{this.styles=[v,w,d`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){let e=n(),t=this.variant||`info`;return t===D.info?a`<w-icon name="Info" size="small" locale="${e}" class="flex"></w-icon>`:t===D.warning?a`<w-icon name="Warning" size="small" locale="${e}" class="flex"></w-icon>`:t===D.negative?a`<w-icon name="Error" size="small" locale="${e}" class="flex"></w-icon>`:t===D.positive?a`<w-icon name="Success" size="small" locale="${e}" class="flex"></w-icon>`:``}render(){return a`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${E.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}},m([i({reflect:!0,useDefault:!0})],O.prototype,`variant`,void 0),m([i({type:Boolean,reflect:!0,useDefault:!0})],O.prototype,`show`,void 0),m([i({reflect:!0,useDefault:!0})],O.prototype,`role`,void 0),customElements.get(`w-alert`)||customElements.define(`w-alert`,O)})),A=e({Info:()=>F,Negative:()=>L,Positive:()=>R,Warning:()=>I,WithDescription:()=>z,__namedExportsOrder:()=>B,default:()=>P}),j,M,N,P,F,I,L,R,z,B,V=t((()=>{x(),c(),o(),S(),C(),k(),{events:j,args:M,argTypes:N}=s(`w-alert`),P={title:`Feedback/Alert`,render(e){return a`
      <w-alert ${y(b(e))}>
        <p>This is an alert message</p>
      </w-alert>
    `},args:M,argTypes:N,parameters:{actions:{handles:j}}},F={args:{variant:`info`,show:!0,role:`alert`}},I={args:{variant:`warning`,show:!0,role:`alert`}},L={args:{variant:`negative`,show:!0,role:`alert`}},R={args:{variant:`positive`,show:!0,role:`alert`}},z={args:{variant:`info`,show:!0,role:`alert`},render(e){return a`
      <w-alert ${y(b(e))}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    `}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    show: true,
    role: 'alert'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    show: true,
    role: 'alert'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    show: true,
    role: 'alert'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    show: true,
    role: 'alert'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    show: true,
    role: 'alert'
  },
  render(args) {
    return html\`
      <w-alert \${spread(prespread(args))}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    \`;
  }
}`,...z.parameters?.docs?.source}}},B=[`Info`,`Warning`,`Negative`,`Positive`,`WithDescription`]}));V();export{F as Info,L as Negative,R as Positive,I as Warning,z as WithDescription,B as __namedExportsOrder,P as default,V as n,A as t};