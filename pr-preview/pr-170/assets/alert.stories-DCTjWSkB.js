import{f as h,i as y,s as A,u as j,a as _,j as x,r as B,x as s,n as m,g as E}from"./iframe-jb_0V0qP.js";import{s as I,p as C}from"./utilities-DgRPLB9r.js";import"./expand-transition-CFd7M7JS.js";var L={},$=["en","nb","fi","da","sv"],S="en",N=()=>{var r;let e;switch((r=process==null?void 0:L)==null?void 0:r.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},T=()=>{var r;const e=(r=document?.location)==null?void 0:r.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":S},f=r=>$.find(e=>r===e||r.toLowerCase().includes(e))||T();function W(){var r;if(typeof window>"u"){const e=N();return f(e)}try{const e=(r=document?.documentElement)==null?void 0:r.lang,o=T();return $.includes(e)?f(e??o):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),f(o))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),S}}var P=(r,e,o,g,t,n)=>r==="nb"?o:r==="fi"?g:r==="da"?t:r==="sv"?n:e,z=(r,e,o,g,t)=>{const n=W(),w=P(n,r,e,o,g,t);h.load(n,w),h.activate(n)},i={nb:{"icon.title.info":["Informasjonssirkel"]},en:{"icon.title.info":["Information circle"]},fi:{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]},da:{"icon.title.info":["Informationscirkel"]},sv:{"icon.title.info":["Informationscirkel"]}};z(i.en,i.nb,i.fi,i.da,i.sv);var M=class extends y{render(){const r=h.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return j`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${A(`<title>${r}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",M);const O=_`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.inline{display:inline}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var D=Object.defineProperty,k=(r,e,o,g)=>{for(var t=void 0,n=r.length-1,w;n>=0;n--)(w=r[n])&&(t=w(e,o,t)||t);return t&&D(e,o,t),t};const a={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},l={negative:"negative",positive:"positive",warning:"warning",info:"info"};class b extends y{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!l[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return x([a.wrapper,a[this.variant]])}get _iconClasses(){const e=a[`${this.variant}Icon`];return x([a.icon,e])}static{this.styles=[B,O,_`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===l.info?s` <w-icon-info-16></w-icon-info-16>`:this.variant===l.warning?s` <w-icon-warning-16></w-icon-warning-16>`:this.variant===l.negative?s` <w-icon-error-16></w-icon-error-16>`:this.variant===l.positive?s` <w-icon-success-16></w-icon-success-16>`:""}render(){return s`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${a.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}k([m({reflect:!0})],b.prototype,"variant");k([m({type:Boolean,reflect:!0})],b.prototype,"show");k([m({reflect:!0})],b.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",b);const{events:H,args:F,argTypes:R}=E("w-alert"),K={title:"Feedback/Alert",render(r){return s`
      <w-alert ${I(C(r))}>
        <p>This is an alert message</p>
      </w-alert>
    `},args:F,argTypes:R,parameters:{actions:{handles:H}}},c={args:{variant:"info",show:!0,role:"alert"}},d={args:{variant:"warning",show:!0,role:"alert"}},u={args:{variant:"negative",show:!0,role:"alert"}},v={args:{variant:"positive",show:!0,role:"alert"}},p={args:{variant:"info",show:!0,role:"alert"},render(r){return s`
      <w-alert ${I(C(r))}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    `}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    show: true,
    role: 'alert'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    show: true,
    role: 'alert'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    show: true,
    role: 'alert'
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    show: true,
    role: 'alert'
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const U=["Info","Warning","Negative","Positive","WithDescription"],q=Object.freeze(Object.defineProperty({__proto__:null,Info:c,Negative:u,Positive:v,Warning:d,WithDescription:p,__namedExportsOrder:U,default:K},Symbol.toStringTag,{value:"Module"}));export{q as A,c as I,u as N,v as P,d as W,p as a};
