import{a as f,i as y,j as h,r as k,x as e,n as p,g as _}from"./iframe-gvjXtPfC.js";import{s as m,p as x}from"./utilities-CSQhMZPW.js";import"./expand-transition-DwbLVbnH.js";import"./info-16-DQsaDmlS.js";const $=f`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.inline{display:inline}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var I=Object.defineProperty,v=(r,d,b,z)=>{for(var t=void 0,g=r.length-1,u;g>=0;g--)(u=r[g])&&(t=u(d,b,t)||t);return t&&I(d,b,t),t};const o={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},s={negative:"negative",positive:"positive",warning:"warning",info:"info"};class w extends y{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!s[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return h([o.wrapper,o[this.variant]])}get _iconClasses(){const d=o[`${this.variant}Icon`];return h([o.icon,d])}static{this.styles=[k,$,f`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===s.info?e` <w-icon-info-16></w-icon-info-16>`:this.variant===s.warning?e` <w-icon-warning-16></w-icon-warning-16>`:this.variant===s.negative?e` <w-icon-error-16></w-icon-error-16>`:this.variant===s.positive?e` <w-icon-success-16></w-icon-success-16>`:""}render(){return e`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${o.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}v([p({reflect:!0})],w.prototype,"variant");v([p({type:Boolean,reflect:!0})],w.prototype,"show");v([p({reflect:!0})],w.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",w);const{events:S,args:C,argTypes:W}=_("w-alert"),A={title:"Feedback/Alert",render(r){return e`
      <w-alert ${m(x(r))}>
        <p>This is an alert message</p>
      </w-alert>
    `},args:C,argTypes:W,parameters:{actions:{handles:S}}},a={args:{variant:"info",show:!0,role:"alert"}},i={args:{variant:"warning",show:!0,role:"alert"}},n={args:{variant:"negative",show:!0,role:"alert"}},l={args:{variant:"positive",show:!0,role:"alert"}},c={args:{variant:"info",show:!0,role:"alert"},render(r){return e`
      <w-alert ${m(x(r))}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    `}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    show: true,
    role: 'alert'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    show: true,
    role: 'alert'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    show: true,
    role: 'alert'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    show: true,
    role: 'alert'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const T=["Info","Warning","Negative","Positive","WithDescription"],O=Object.freeze(Object.defineProperty({__proto__:null,Info:a,Negative:n,Positive:l,Warning:i,WithDescription:c,__namedExportsOrder:T,default:A},Symbol.toStringTag,{value:"Module"}));export{O as A,a as I,n as N,l as P,i as W,c as a};
