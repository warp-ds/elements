import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{Bt as n,E as r,Ht as i,J as a,Kt as o,Lt as s,M as c,N as l,Rt as u,Wt as d,b as f,f as p,j as m,k as h,l as g,p as _,q as v,u as y}from"./iframe-DVUX4F7f.js";import{a as b,n as x,r as S,t as C}from"./utilities-C4iNKA-1.js";function w(e,t){return e.flatMap(e=>[e,t]).slice(0,-1)}var T=t((()=>{})),E,D=t((()=>{E=JSON.parse(`{"breadcrumbs.ariaLabel":["Du er her"]}`)})),O,k=t((()=>{O=JSON.parse(`{"breadcrumbs.ariaLabel":["You are here"]}`)})),A,j=t((()=>{A=JSON.parse(`{"breadcrumbs.ariaLabel":["Olet tässä"]}`)})),M,N=t((()=>{M=JSON.parse(`{"breadcrumbs.ariaLabel":["Her er du"]}`)})),P,F=t((()=>{P=JSON.parse(`{"breadcrumbs.ariaLabel":["Du är här"]}`)})),I,L=t((()=>{s(),I=o(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem * calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem * var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`)})),R,z,B,V=t((()=>{a(),T(),s(),m(),g(),D(),k(),j(),N(),F(),L(),R={wrapper:`flex space-x-8`,text:`s-text`,link:`s-text-link`,separator:`select-none s-icon`,a11y:`sr-only`},z=i`<span class=${R.separator}>/</span>`,B=class extends u{static{this.styles=[y,I]}constructor(){super(),this._children=[],this._internals=this.attachInternals(),h(O,M,A,E,P),this._internals.ariaLabel=v._({id:`breadcrumbs.ariaLabel`,message:`You are here`,comment:`Default screen reader message for the breadcrumb component`})}connectedCallback(){super.connectedCallback(),this._internals.role=`navigation`;let e=this.querySelectorAll(`:scope > a`),t=this.querySelectorAll(`:scope > span`),n=this.querySelectorAll(`w-breadcrumb-item`);n.length>0&&(e.length>0||t.length>0)&&console.warn(`Mixing Legacy API and w-breadcrumb-item API children is not supported.`);let r=0,a=!1;n.forEach((e,t)=>{e.hasAttribute(`current-page`)&&(t<n.length-1&&(a=!0),r++)}),r>1&&console.warn(`Please ensure only one w-breadcrumb-item has the current-page attribute.`),a&&console.warn(`The current-page attribute should only be used on the final breadcrumb item.`);let o=Array.from(this.children).filter(e=>e&&e.tagName!==`W-BREADCRUMB-ITEM`).flat(1/0).filter(e=>e).map((e,t)=>{if(typeof e==`string`){let n=t===this.children.length-1;return i`<span class=${R.text} aria-current=${n?`page`:void 0}>${e}</span>`}return e.classList.add(e.tagName===`A`?R.link:R.text),e});this._children=w(o,z)}render(){return i`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${R.a11y}>${this.ariaLabel}</h2>
        <div class=${R.wrapper}>${this._children}<slot></slot></div>
      </nav>
    `}},customElements.get(`w-breadcrumbs`)||customElements.define(`w-breadcrumbs`,B)})),H,U=t((()=>{s(),f(),_(),H=class extends u{constructor(...e){super(...e),this.currentPage=!1,this.href=null}static{this.styles=d`
    :host {display: inline-block;}
    .s-text{
      color: var(--w-s-color-text)
    }
    .s-text-link{
      color: var(--w-s-color-text-link);
      text-decoration: none;
    }
    .s-text-link:hover {
      text-decoration: underline;
    }
    .separator{
      color: var(--w-s-color-icon);
      -webkit-user-select: none;
      user-select: none;
      margin-left: 0.8rem; margin-right: 0.8rem;
    }
  `}get link(){return this.href?i`<a class="s-text-link" href=${this.href} aria-current=${this.currentPage?`page`:n}><slot></slot></a>`:i`<span class="s-text" aria-current=${this.currentPage?`page`:n}><slot></slot></span>`}get separator(){return this.currentPage?n:i`<span class="separator" aria-hidden="true">/</span>`}render(){return i`${this.link}${this.separator}`}},p([r({type:Boolean,attribute:`current-page`})],H.prototype,`currentPage`,void 0),p([r({type:String})],H.prototype,`href`,void 0),customElements.get(`w-breadcrumb-item`)||customElements.define(`w-breadcrumb-item`,H)})),W=e({Default:()=>Y,WithLinks:()=>X,WithSpanForCurrentPage:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),G,K,q,J,Y,X,Z,Q,$=t((()=>{S(),l(),s(),C(),V(),U(),{events:G,args:K,argTypes:q}=c(`w-breadcrumbs`),J={title:`Navigation/Breadcrumbs`,render(e){return i`
      <w-breadcrumbs ${b(x(e))}>
        <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
        <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
        <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
      </w-breadcrumbs>
    `},args:{"aria-label":`You are here`},argTypes:q,parameters:{actions:{handles:G}}},Y={},X={render(e){return i`
      <w-breadcrumbs ${b(x(e))}>
        <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
        <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
        <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
      </w-breadcrumbs>
    `}},Z={render(e){return i`
      <w-breadcrumbs ${b(x(e))}>
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
        <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
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