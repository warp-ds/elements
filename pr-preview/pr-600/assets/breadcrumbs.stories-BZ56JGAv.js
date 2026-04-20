import{a as m,i as b,r as g,q as h,l as w,b as s,g as f}from"./iframe-DaqmkAc4.js";import{s as i,p as l}from"./utilities-C_fn-Rdi.js";function y(e,p){return e.flatMap(c=>[c,p]).slice(0,-1)}const x=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),v=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),C=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),$=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),L=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),S=m`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`,a={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},k=s`<span class=${a.separator}>/</span>`;class _ extends b{static{this.styles=[g,S]}constructor(){super(),this._internals=this.attachInternals(),h(v,$,C,x,L),this._internals.ariaLabel=w._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback(),this._internals.role="navigation";const c=Array.from(this.children).flat(Number.POSITIVE_INFINITY).filter(r=>r).map((r,d)=>{if(typeof r=="string"){const u=d===this.children.length-1;return s`<span class=${a.text} aria-current=${u?"page":void 0}>${r}</span>`}return r.classList.add(r.tagName==="A"?a.link:a.text),r});this._children=y(c,k)}render(){return s`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${a.a11y}>${this.ariaLabel}</h2>
        <div class=${a.wrapper}>${this._children}</div>
      </nav>
    `}}customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",_);const{events:N,argTypes:O}=f("w-breadcrumbs"),H={title:"Navigation/Breadcrumbs",render(e){return s`
      <w-breadcrumbs ${i(l(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    `},args:{"aria-label":"You are here"},argTypes:O,parameters:{actions:{handles:N}}},t={},n={render(e){return s`
      <w-breadcrumbs ${i(l(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory" aria-current="page">Current page</a>
      </w-breadcrumbs>
    `}},o={render(e){return s`
      <w-breadcrumbs ${i(l(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    `}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <w-breadcrumbs \${spread(prespread(args))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory" aria-current="page">Current page</a>
      </w-breadcrumbs>
    \`;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <w-breadcrumbs \${spread(prespread(args))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    \`;
  }
}`,...o.parameters?.docs?.source}}};const I=["Default","WithLinks","WithSpanForCurrentPage"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithLinks:n,WithSpanForCurrentPage:o,__namedExportsOrder:I,default:H},Symbol.toStringTag,{value:"Module"}));export{B,t as D,n as W,o as a};
