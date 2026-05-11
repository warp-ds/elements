import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,D as r,E as i,Mt as a,Ot as o,Pt as s,a as c,kt as l,l as u,o as d,s as f,z as p}from"./iframe-DVGjv2S6.js";import{i as m,n as h,r as g,t as _}from"./utilities-Bu8uwYxd.js";function v(e,t){return e.flatMap(e=>[e,t]).slice(0,-1)}var y=e((()=>{})),b,x=e((()=>{b=JSON.parse(`{"breadcrumbs.ariaLabel":["Du er her"]}`)})),S,C=e((()=>{S=JSON.parse(`{"breadcrumbs.ariaLabel":["You are here"]}`)})),w,T=e((()=>{w=JSON.parse(`{"breadcrumbs.ariaLabel":["Olet tässä"]}`)})),E,D=e((()=>{E=JSON.parse(`{"breadcrumbs.ariaLabel":["Her er du"]}`)})),O,k=e((()=>{O=JSON.parse(`{"breadcrumbs.ariaLabel":["Du är här"]}`)})),A,j=e((()=>{o(),A=s`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`})),M,N,P,F=e((()=>{n(),y(),o(),u(),c(),x(),C(),T(),D(),k(),j(),M={wrapper:`flex space-x-8`,text:`s-text`,link:`s-text-link`,separator:`select-none s-icon`,a11y:`sr-only`},N=a`<span class=${M.separator}>/</span>`,P=class extends l{static{this.styles=[d,A]}constructor(){super(),this._internals=this.attachInternals(),f(S,E,w,b,O),this._internals.ariaLabel=p._({id:`breadcrumbs.ariaLabel`,message:`You are here`,comment:`Default screen reader message for the breadcrumb component`})}connectedCallback(){super.connectedCallback(),this._internals.role=`navigation`;let e=Array.from(this.children).flat(1/0).filter(e=>e).map((e,t)=>{if(typeof e==`string`){let n=t===this.children.length-1;return a`<span class=${M.text} aria-current=${n?`page`:void 0}>${e}</span>`}return e.classList.add(e.tagName===`A`?M.link:M.text),e});this._children=v(e,N)}render(){return a`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${M.a11y}>${this.ariaLabel}</h2>
        <div class=${M.wrapper}>${this._children}</div>
      </nav>
    `}},customElements.get(`w-breadcrumbs`)||customElements.define(`w-breadcrumbs`,P)})),I=t({Default:()=>V,WithLinks:()=>H,WithSpanForCurrentPage:()=>U,__namedExportsOrder:()=>W,default:()=>B}),L,R,z,B,V,H,U,W,G=e((()=>{g(),r(),o(),_(),F(),{events:L,args:R,argTypes:z}=i(`w-breadcrumbs`),B={title:`Navigation/Breadcrumbs`,render(e){return a`
      <w-breadcrumbs ${m(h(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    `},args:{"aria-label":`You are here`},argTypes:z,parameters:{actions:{handles:L}}},V={},H={render(e){return a`
      <w-breadcrumbs ${m(h(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory" aria-current="page">Current page</a>
      </w-breadcrumbs>
    `}},U={render(e){return a`
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