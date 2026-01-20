import{a as g,i as h,r as f,q as w,d as x,b as o,n as v,g as y}from"./iframe-D0LN9kje.js";import{s as b,p}from"./utilities-DK8UuDnf.js";function $(e,n){return e.flatMap(s=>[s,n]).slice(0,-1)}const S=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),L=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),O=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),_=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),k=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),C=g`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`;var N=Object.defineProperty,B=(e,n,s,r)=>{for(var a=void 0,l=e.length-1,u;l>=0;l--)(u=e[l])&&(a=u(n,s,a)||a);return a&&N(n,s,a),a};const t={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},E=o`<span class=${t.separator}>/</span>`;class m extends h{static{this.styles=[f,C]}constructor(){super(),w(L,_,O,S,k),this.ariaLabel=x._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const s=Array.from(this.children).flat(Number.POSITIVE_INFINITY).filter(r=>r).map((r,a)=>{if(typeof r=="string"){const l=a===this.children.length-1;return o`<span class=${t.text} aria-current=${l?"page":void 0}>${r}</span>`}return r.classList.add(r.tagName==="A"?t.link:t.text),r});this._children=$(s,E)}render(){return o`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${t.a11y}>${this.ariaLabel}</h2>
        <div class=${t.wrapper}>${this._children}</div>
      </nav>
    `}}B([v({attribute:"aria-label",type:String})],m.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",m);const{events:P,args:Y,argTypes:D}=y("w-breadcrumbs"),I={title:"Navigation/Breadcrumbs",render(e){return o`
      <w-breadcrumbs ${b(p(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory">Subcategory</a>
        <span aria-current="page">Current Page</span>
      </w-breadcrumbs>
    `},args:Y,argTypes:D,parameters:{actions:{handles:P}}},i={args:{"aria-label":"You are here"}},c={args:{"aria-label":"Navigation breadcrumb"},render(e){return o`
      <w-breadcrumbs ${b(p(e))}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <a href="#/oslo" aria-current="page">Oslo</a>
      </w-breadcrumbs>
    `}},d={args:{"aria-label":"You are here"},render(e){return o`
      <w-breadcrumbs ${b(p(e))}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <span aria-current="page">Oslo</span>
      </w-breadcrumbs>
    `}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'You are here'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigation breadcrumb'
  },
  render(args) {
    return html\`
      <w-breadcrumbs \${spread(prespread(args))}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <a href="#/oslo" aria-current="page">Oslo</a>
      </w-breadcrumbs>
    \`;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'You are here'
  },
  render(args) {
    return html\`
      <w-breadcrumbs \${spread(prespread(args))}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <span aria-current="page">Oslo</span>
      </w-breadcrumbs>
    \`;
  }
}`,...d.parameters?.docs?.source}}};const W=["Default","WithLinks","WithSpanForCurrentPage"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithLinks:c,WithSpanForCurrentPage:d,__namedExportsOrder:W,default:I},Symbol.toStringTag,{value:"Module"}));export{T as B,i as D,c as W,d as a};
