import{a as f,i as y,j as h,r as k,d as _,b as o,n as w,g as $}from"./iframe-DV362CzG.js";import{s as m,p as x}from"./utilities-C-b6lVPg.js";import"./expand-transition-vReMNB_P.js";const I=f`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.inline{display:inline}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var S=Object.defineProperty,v=(r,e,b,P)=>{for(var t=void 0,p=r.length-1,u;p>=0;p--)(u=r[p])&&(t=u(e,b,t)||t);return t&&S(e,b,t),t};const s={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},a={negative:"negative",positive:"positive",warning:"warning",info:"info"};class g extends y{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!a[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return h([s.wrapper,s[this.variant]])}get _iconClasses(){const e=s[`${this.variant}Icon`];return h([s.icon,e])}static{this.styles=[k,I,f`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){const e=_();return this.variant===a.info?o`<w-icon name="Info" size="small" locale="${e}" class="flex"></w-icon>`:this.variant===a.warning?o`<w-icon name="Warning" size="small" locale="${e}" class="flex"></w-icon>`:this.variant===a.negative?o`<w-icon name="Error" size="small" locale="${e}" class="flex"></w-icon>`:this.variant===a.positive?o`<w-icon name="Success" size="small" locale="${e}" class="flex"></w-icon>`:""}render(){return o`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${s.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}v([w({reflect:!0})],g.prototype,"variant");v([w({type:Boolean,reflect:!0})],g.prototype,"show");v([w({reflect:!0})],g.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",g);const{events:z,args:C,argTypes:W}=$("w-alert"),A={title:"Feedback/Alert",render(r){return o`
      <w-alert ${m(x(r))}>
        <p>This is an alert message</p>
      </w-alert>
    `},args:C,argTypes:W,parameters:{actions:{handles:z}}},i={args:{variant:"info",show:!0,role:"alert"}},n={args:{variant:"warning",show:!0,role:"alert"}},l={args:{variant:"negative",show:!0,role:"alert"}},c={args:{variant:"positive",show:!0,role:"alert"}},d={args:{variant:"info",show:!0,role:"alert"},render(r){return o`
      <w-alert ${m(x(r))}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    `}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    show: true,
    role: 'alert'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    show: true,
    role: 'alert'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    show: true,
    role: 'alert'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    show: true,
    role: 'alert'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const T=["Info","Warning","Negative","Positive","WithDescription"],O=Object.freeze(Object.defineProperty({__proto__:null,Info:i,Negative:l,Positive:c,Warning:n,WithDescription:d,__namedExportsOrder:T,default:A},Symbol.toStringTag,{value:"Module"}));export{O as A,i as I,l as N,c as P,n as W,d as a};
