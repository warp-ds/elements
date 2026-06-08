import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{Ht as n,J as r,Kt as i,Lt as a,M as o,N as s,Rt as c,j as l,k as u,l as d,q as f,u as p}from"./iframe-C6VW55fK.js";import{a as m,n as h,r as g,t as _}from"./utilities-Qj7-8FJm.js";function v(e,t){return e.flatMap(e=>[e,t]).slice(0,-1)}var y=t((()=>{})),b,x=t((()=>{b=JSON.parse(`{"breadcrumbs.ariaLabel":["Du er her"]}`)})),S,C=t((()=>{S=JSON.parse(`{"breadcrumbs.ariaLabel":["You are here"]}`)})),w,T=t((()=>{w=JSON.parse(`{"breadcrumbs.ariaLabel":["Olet tässä"]}`)})),E,D=t((()=>{E=JSON.parse(`{"breadcrumbs.ariaLabel":["Her er du"]}`)})),O,k=t((()=>{O=JSON.parse(`{"breadcrumbs.ariaLabel":["Du är här"]}`)})),A,j=t((()=>{a(),A=i(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem * calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem * var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`)})),M,N,P,F=t((()=>{r(),y(),a(),l(),d(),x(),C(),T(),D(),k(),j(),M={wrapper:`flex space-x-8`,text:`s-text`,link:`s-text-link`,separator:`select-none s-icon`,a11y:`sr-only`},N=n`<span class=${M.separator}>/</span>`,P=class extends c{static{this.styles=[p,A]}constructor(){super(),this._children=[],this._internals=this.attachInternals(),u(S,E,w,b,O),this._internals.ariaLabel=f._({id:`breadcrumbs.ariaLabel`,message:`You are here`,comment:`Default screen reader message for the breadcrumb component`})}connectedCallback(){super.connectedCallback(),this._internals.role=`navigation`;let e=Array.from(this.children).flat(1/0).filter(e=>e).map((e,t)=>{if(typeof e==`string`){let r=t===this.children.length-1;return n`<span class=${M.text} aria-current=${r?`page`:void 0}>${e}</span>`}return e.classList.add(e.tagName===`A`?M.link:M.text),e});this._children=v(e,N)}render(){return n`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${M.a11y}>${this.ariaLabel}</h2>
        <div class=${M.wrapper}>${this._children}</div>
      </nav>
    `}},customElements.get(`w-breadcrumbs`)||customElements.define(`w-breadcrumbs`,P)})),I=e({Default:()=>V,WithLinks:()=>H,WithSpanForCurrentPage:()=>U,__namedExportsOrder:()=>W,default:()=>B}),L,R,z,B,V,H,U,W,G=t((()=>{g(),s(),a(),_(),F(),{events:L,args:R,argTypes:z}=o(`w-breadcrumbs`),B={title:`Navigation/Breadcrumbs`,render(e){return n`
      <w-breadcrumbs ${m(h(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    `},args:{"aria-label":`You are here`},argTypes:z,parameters:{actions:{handles:L}}},V={},H={render(e){return n`
      <w-breadcrumbs ${m(h(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory" aria-current="page">Current page</a>
      </w-breadcrumbs>
    `}},U={render(e){return n`
      <w-breadcrumbs ${m(h(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    `}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <w-breadcrumbs \${spread(prespread(args))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory" aria-current="page">Current page</a>
      </w-breadcrumbs>
    \`;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <w-breadcrumbs \${spread(prespread(args))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    \`;
  }
}`,...U.parameters?.docs?.source}}},W=[`Default`,`WithLinks`,`WithSpanForCurrentPage`]}));G();export{V as Default,H as WithLinks,U as WithSpanForCurrentPage,W as __namedExportsOrder,B as default,G as n,I as t};