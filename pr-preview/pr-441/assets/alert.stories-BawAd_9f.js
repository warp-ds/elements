import{h as f,i as x,s as $,u as O,a as y,k,r as T,b as s,n as h,g as A}from"./iframe-C6kMXU4g.js";import{s as _,p as I}from"./utilities-CaakSQkk.js";import"./expand-transition-C5MOICHs.js";var B={},E=JSON.parse('{"icon.title.info":["Informasjonssirkel"]}'),L=JSON.parse('{"icon.title.info":["Information circle"]}'),W=JSON.parse('{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]}'),j=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),P=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),S=["en","nb","fi","da","sv"],C="en",z=()=>{var r;let e;switch((r=process==null?void 0:B)==null?void 0:r.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},N=()=>{var r;const e=(r=document?.location)==null?void 0:r.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":C},b=r=>S.find(e=>r===e||r.toLowerCase().includes(e))||N();function M(){var r;if(typeof window>"u"){const e=z();return b(e)}try{const e=(r=document?.documentElement)==null?void 0:r.lang,o=N();return S.includes(e)?b(e??o):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),b(o))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),C}}var J=(r,e,o,p,t,n)=>r==="nb"?o:r==="fi"?p:r==="da"?t:r==="sv"?n:e,D=(r,e,o,p,t)=>{const n=M(),g=J(n,r,e,o,p,t);f.load(n,g),f.activate(n)};D(L,E,W,j,P);var H=class extends x{render(){const r=f.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return O`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${$(`<title>${r}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",H);const F=y`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.inline{display:inline}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var R=Object.defineProperty,m=(r,e,o,p)=>{for(var t=void 0,n=r.length-1,g;n>=0;n--)(g=r[n])&&(t=g(e,o,t)||t);return t&&R(e,o,t),t};const a={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},i={negative:"negative",positive:"positive",warning:"warning",info:"info"};class w extends x{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!i[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return k([a.wrapper,a[this.variant]])}get _iconClasses(){const e=a[`${this.variant}Icon`];return k([a.icon,e])}static{this.styles=[T,F,y`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===i.info?s` <w-icon-info-16></w-icon-info-16>`:this.variant===i.warning?s` <w-icon-warning-16></w-icon-warning-16>`:this.variant===i.negative?s` <w-icon-error-16></w-icon-error-16>`:this.variant===i.positive?s` <w-icon-success-16></w-icon-success-16>`:""}render(){return s`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${a.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}m([h({reflect:!0})],w.prototype,"variant");m([h({type:Boolean,reflect:!0})],w.prototype,"show");m([h({reflect:!0})],w.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",w);const{events:K,args:U,argTypes:V}=A("w-alert"),Y={title:"Feedback/Alert",render(r){return s`
      <w-alert ${_(I(r))}>
        <p>This is an alert message</p>
      </w-alert>
    `},args:U,argTypes:V,parameters:{actions:{handles:K}}},l={args:{variant:"info",show:!0,role:"alert"}},c={args:{variant:"warning",show:!0,role:"alert"}},d={args:{variant:"negative",show:!0,role:"alert"}},u={args:{variant:"positive",show:!0,role:"alert"}},v={args:{variant:"info",show:!0,role:"alert"},render(r){return s`
      <w-alert ${_(I(r))}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    `}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    show: true,
    role: 'alert'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    show: true,
    role: 'alert'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    show: true,
    role: 'alert'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    show: true,
    role: 'alert'
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const Z=["Info","Warning","Negative","Positive","WithDescription"],X=Object.freeze(Object.defineProperty({__proto__:null,Info:l,Negative:d,Positive:u,Warning:c,WithDescription:v,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{X as A,l as I,d as N,u as P,c as W,v as a};
