import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{Bt as n,E as r,Ht as i,J as a,Kt as o,Lt as s,M as c,N as l,Rt as u,Wt as d,b as f,f as p,j as m,k as h,l as g,p as ee,q as _,u as v}from"./iframe-Bdnm4cTV.js";import{a as y,n as b,r as x,t as S}from"./utilities-CjhxfUxA.js";function C(e,t){return e.flatMap(e=>[e,t]).slice(0,-1)}var te=t((()=>{})),w,T=t((()=>{w=JSON.parse(`{"breadcrumbs.ariaLabel":["Du er her"]}`)})),E,D=t((()=>{E=JSON.parse(`{"breadcrumbs.ariaLabel":["You are here"]}`)})),O,k=t((()=>{O=JSON.parse(`{"breadcrumbs.ariaLabel":["Olet tässä"]}`)})),A,j=t((()=>{A=JSON.parse(`{"breadcrumbs.ariaLabel":["Her er du"]}`)})),M,N=t((()=>{M=JSON.parse(`{"breadcrumbs.ariaLabel":["Du är här"]}`)})),P,F=t((()=>{s(),P=o(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem * calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem * var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`)})),I,L,R,z=t((()=>{a(),te(),s(),m(),g(),T(),D(),k(),j(),N(),F(),I={wrapper:`flex space-x-8`,text:`s-text`,link:`s-text-link`,separator:`select-none s-icon`,a11y:`sr-only`},L=i`<span class=${I.separator}>/</span>`,R=class extends u{static{this.styles=[v,P]}constructor(){super(),this._children=[],this._internals=this.attachInternals(),h(E,A,O,w,M),this._defaultLabel=_._({id:`breadcrumbs.ariaLabel`,message:`You are here`,comment:`Default screen reader message for the breadcrumb component`}),this._internals.ariaLabel=this._defaultLabel}get _label(){return this.ariaLabel??this._defaultLabel}connectedCallback(){super.connectedCallback(),this._internals.role=`navigation`;let e=this.querySelectorAll(`:scope > a`),t=this.querySelectorAll(`:scope > span`),n=this.querySelectorAll(`w-breadcrumb-item`);n.length>0&&(e.length>0||t.length>0)&&console.warn(`Mixing Legacy API and w-breadcrumb-item API children is not supported.`);let r=0,a=!1;n.forEach((e,t)=>{e.hasAttribute(`current-page`)&&(t<n.length-1&&(a=!0),r++)}),r>1&&console.warn(`Please ensure only one w-breadcrumb-item has the current-page attribute.`),a&&console.warn(`The current-page attribute should only be used on the final breadcrumb item.`);let o=Array.from(this.children).filter(e=>e&&e.tagName!==`W-BREADCRUMB-ITEM`).flat(1/0).filter(e=>e).map((e,t)=>{if(typeof e==`string`){let n=t===this.children.length-1;return i`<span
					class=${I.text}
					aria-current=${n?`page`:void 0}
					>${e}</span
				>`}return e.classList.add(e.tagName===`A`?I.link:I.text),e});this._children=C(o,L)}render(){return i`
			<nav aria-labelledby="breadCrumbLabel">
				<h2 id="breadCrumbLabel" class=${I.a11y}>${this._label}</h2>
				<div class=${I.wrapper}>${this._children}<slot></slot></div>
			</nav>
		`}},customElements.get(`w-breadcrumbs`)||customElements.define(`w-breadcrumbs`,R)})),B,V=t((()=>{s(),B=d`
    :host {
      display: inline-block;

      /* Internal resolved vars (defaults) */
      --_link-color: var(--w-c-breadcrumb-item-link-color, var(--w-s-color-text-link));
      --_text-color: var(--w-c-breadcrumb-item-text-color, var(--w-s-color-text));
      --_separator-color: var(--w-c-breadcrumb-item-separator-color, var(--w-s-color-icon));
      --_separator-spacing: var(--w-c-breadcrumb-item-separator-spacing, 0.8rem);
      --_font-size: var(--w-c-breadcrumb-item-font-size);
      --_line-height: var(--w-c-breadcrumb-item-line-height, 1.5);
      --_font-weight: var(--w-c-breadcrumb-item-font-weight, 400);
      --_padding-x: var(--w-c-breadcrumb-item-padding-x, 0);
      --_padding-y: var(--w-c-breadcrumb-item-padding-y, 0);
      --_link-color-hover: var(--w-c-breadcrumb-item-link-color-hover);
      --_link-color-active: var(--w-c-breadcrumb-item-link-color-active);
      --_outline-color: var(--w-c-breadcrumb-item-outline-color);
      --_outline-width: var(--w-c-breadcrumb-item-outline-width);
      --_outline-offset: var(--w-c-breadcrumb-item-outline-offset);
    }

    .s-text{
      color: var(--_text-color);
      font-size: var(--_font-size);
      line-height: var(--_line-height);
      font-weight: var(--_font-weight);
    }
    .s-text-link{
      color: var(--_link-color);
      text-decoration: none;
      font-size: var(--_font-size);
      line-height: var(--_line-height);
      font-weight: var(--_font-weight);
      padding-left: var(--_padding-x);
      padding-right: var(--_padding-x);
      padding-top: var(--_padding-y);
      padding-bottom: var(--_padding-y);
    }
    .s-text-link:hover {
      text-decoration: underline;
      color: var(--_link-color-hover);
    }
    .s-text-link:active {
      color: var(--_link-color-active);
    }
    .s-text-link:focus {
      outline-color: var(--_outline-color);
      outline-width: var(--_outline-width);
      outline-offset: var(--_outline-offset);
    }
    .separator{
      color: var(--_separator-color);
      -webkit-user-select: none;
      user-select: none;
      font-size: var(--_font-size);
      line-height: var(--_line-height);
      font-weight: var(--_font-weight);
      margin-left: var(--_separator-spacing);
      margin-right: var(--_separator-spacing);
    }
`})),H,U=t((()=>{s(),f(),V(),g(),ee(),H=class extends u{constructor(...e){super(...e),this.currentPage=!1,this.href=null}static{this.styles=[v,B]}get link(){return this.href?i`<a part="link" class="s-text-link" href=${this.href} aria-current=${this.currentPage?`page`:n}><slot></slot></a>`:i`<span part="text" class="s-text" aria-current=${this.currentPage?`page`:n}><slot></slot></span>`}get separator(){return this.currentPage?n:i`<span part="separator" class="separator" aria-hidden="true">/</span>`}render(){return i`${this.link}${this.separator}`}},p([r({type:Boolean,attribute:`current-page`})],H.prototype,`currentPage`,void 0),p([r({type:String})],H.prototype,`href`,void 0),customElements.get(`w-breadcrumb-item`)||customElements.define(`w-breadcrumb-item`,H)})),W=e({Default:()=>Y,WithLinks:()=>X,WithSpanForCurrentPage:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),G,K,q,J,Y,X,Z,Q,$=t((()=>{x(),l(),s(),S(),z(),U(),{events:G,args:K,argTypes:q}=c(`w-breadcrumbs`),J={title:`Navigation/Breadcrumbs`,render(e){return i`
            <w-breadcrumbs ${y(b(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        `},args:{"aria-label":`You are here`},argTypes:q,parameters:{actions:{handles:G}}},Y={},X={render(e){return i`
            <w-breadcrumbs ${y(b(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item href="#" current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        `}},Z={render(e){return i`
            <w-breadcrumbs ${y(b(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        `}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <w-breadcrumbs \${spread(prespread(args))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item href="#" current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        \`;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <w-breadcrumbs \${spread(prespread(args))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        \`;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithLinks`,`WithSpanForCurrentPage`]}));$();export{Y as Default,X as WithLinks,Z as WithSpanForCurrentPage,Q as __namedExportsOrder,J as default,$ as n,W as t};