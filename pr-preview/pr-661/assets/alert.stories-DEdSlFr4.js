import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{m as n,n as r,s as i,t as a}from"./lit-JruGAyH3.js";import{n as o,t as s}from"./index.m-B95STiSX.js";import{n as c,o as l,r as u,t as d}from"./decorate-Dk3JVGAn.js";import{t as f}from"./icon-C7QoHWvn.js";import{n as p,r as m}from"./i18n-CXvrc2gG.js";import{n as h,t as g}from"./styles-DphVJT09.js";import{a as _,o as v}from"./iframe-BP6Jvu1C.js";import{i as y,n as b,r as x,t as S}from"./utilities-3bRBgS0D.js";import{t as C}from"./expand-transition-BrCAH8_6.js";var w,T=e((()=>{a(),w=n`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.inline{display:inline}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`})),E,D,O,k=e((()=>{s(),a(),u(),f(),m(),g(),T(),c(),E={wrapper:`flex p-16 border border-l-4 rounded-4 s-text`,willChangeHeight:`will-change-height`,textWrapper:`last-child:mb-0 text-s`,title:`text-s`,icon:`w-16 mr-8 min-w-16`,negative:`s-border-negative-subtle s-border-l-negative s-bg-negative-subtle`,negativeIcon:`s-icon-negative`,positive:`s-border-positive-subtle s-border-l-positive s-bg-positive-subtle`,positiveIcon:`s-icon-positive`,warning:`s-border-warning-subtle s-border-l-warning s-bg-warning-subtle`,warningIcon:`s-icon-warning`,info:`s-border-info-subtle s-border-l-info s-bg-info-subtle`,infoIcon:`s-icon-info`},D={negative:`negative`,positive:`positive`,warning:`warning`,info:`info`},O=class extends r{constructor(){super(),this.variant=`info`,this.show=!1,this.role=`alert`,this._internals=this.attachInternals(),this._internals.role=`alert`}connectedCallback(){if(super.connectedCallback(),this.variant&&!D[this.variant])throw Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){let e=this.variant;return o([E.wrapper,E[e]])}get _iconClasses(){let e=E[`${this.variant}Icon`];return o([E.icon,e])}static{this.styles=[h,w,n`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){let e=p(),t=this.variant||`info`;return t===D.info?i`<w-icon name="Info" size="small" locale="${e}" class="flex"></w-icon>`:t===D.warning?i`<w-icon name="Warning" size="small" locale="${e}" class="flex"></w-icon>`:t===D.negative?i`<w-icon name="Error" size="small" locale="${e}" class="flex"></w-icon>`:t===D.positive?i`<w-icon name="Success" size="small" locale="${e}" class="flex"></w-icon>`:``}render(){return i`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${E.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}},d([l({reflect:!0,useDefault:!0})],O.prototype,`variant`,void 0),d([l({type:Boolean,reflect:!0,useDefault:!0})],O.prototype,`show`,void 0),d([l({reflect:!0,useDefault:!0})],O.prototype,`role`,void 0),customElements.get(`w-alert`)||customElements.define(`w-alert`,O)})),A=t({Info:()=>F,Negative:()=>L,Positive:()=>R,Warning:()=>I,WithDescription:()=>z,__namedExportsOrder:()=>B,default:()=>P}),j,M,N,P,F,I,L,R,z,B,V=e((()=>{x(),v(),a(),S(),C(),k(),{events:j,args:M,argTypes:N}=_(`w-alert`),P={title:`Feedback/Alert`,render(e){return i`
      <w-alert ${y(b(e))}>
        <p>This is an alert message</p>
      </w-alert>
    `},args:M,argTypes:N,parameters:{actions:{handles:j}}},F={args:{variant:`info`,show:!0,role:`alert`}},I={args:{variant:`warning`,show:!0,role:`alert`}},L={args:{variant:`negative`,show:!0,role:`alert`}},R={args:{variant:`positive`,show:!0,role:`alert`}},z={args:{variant:`info`,show:!0,role:`alert`},render(e){return i`
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