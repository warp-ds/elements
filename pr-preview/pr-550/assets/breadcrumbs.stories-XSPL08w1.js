import{a as g,i as h,r as f,q as w,l as y,b as n,n as x,g as v}from"./iframe-TiOzyA0V.js";import{s as d,p as u}from"./utilities-BAuJjuEy.js";function C(e,o){return e.flatMap(s=>[s,o]).slice(0,-1)}const $=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),L=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),S=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),_=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),k=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),O=g`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`;var N=Object.defineProperty,H=(e,o,s,r)=>{for(var a=void 0,c=e.length-1,m;c>=0;c--)(m=e[c])&&(a=m(o,s,a)||a);return a&&N(o,s,a),a};const t={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},D=n`<span class=${t.separator}>/</span>`;class b extends h{static{this.styles=[f,O]}constructor(){super(),w(L,_,S,$,k),this.ariaLabel=y._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","navigation");const s=Array.from(this.children).flat(Number.POSITIVE_INFINITY).filter(r=>r).map((r,a)=>{if(typeof r=="string"){const c=a===this.children.length-1;return n`<span class=${t.text} aria-current=${c?"page":void 0}>${r}</span>`}return r.classList.add(r.tagName==="A"?t.link:t.text),r});this._children=C(s,D)}render(){return n`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${t.a11y}>${this.ariaLabel}</h2>
        <div class=${t.wrapper}>${this._children}</div>
      </nav>
    `}}H([x({attribute:"aria-label",type:String})],b.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",b);const{events:I,argTypes:P}=v("w-breadcrumbs"),W={title:"Navigation/Breadcrumbs",render(e){return n`
      <w-breadcrumbs ${d(u(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    `},args:{"aria-label":"You are here"},argTypes:P,parameters:{actions:{handles:I}}},i={},l={render(e){return n`
      <w-breadcrumbs ${d(u(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory" aria-current="page">Current page</a>
      </w-breadcrumbs>
    `}},p={render(e){return n`
      <w-breadcrumbs ${d(u(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    `}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <w-breadcrumbs \${spread(prespread(args))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory" aria-current="page">Current page</a>
      </w-breadcrumbs>
    \`;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <w-breadcrumbs \${spread(prespread(args))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    \`;
  }
}`,...p.parameters?.docs?.source}}};const B=["Default","WithLinks","WithSpanForCurrentPage"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithLinks:l,WithSpanForCurrentPage:p,__namedExportsOrder:B,default:W},Symbol.toStringTag,{value:"Module"}));export{z as B,i as D,l as W,p as a};
