import{r as p,n as g,t as d}from"./styles-HJ9_V4no.js";import{i as h,h as f,k as b}from"./iframe-CTNK_XL_.js";import{i as w}from"./index-D9sF0iN5.js";import{a as x}from"./i18n-Ry9r14hS.js";import"./preload-helper-Dch09mLN.js";import"./index-uqR65IT6.js";function v(e,o){return e.flatMap(s=>[s,o]).slice(0,-1)}const y=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),$=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),L=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),S=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),k=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),C=h`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`;var O=Object.defineProperty,N=(e,o,s,r)=>{for(var a=void 0,n=e.length-1,m;n>=0;n--)(m=e[n])&&(a=m(o,s,a)||a);return a&&O(o,s,a),a};const t={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},_=b`<span class=${t.separator}>/</span>`;class u extends f{static{this.styles=[p,C]}constructor(){super(),x($,S,L,y,k),this.ariaLabel=w._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const s=Array.from(this.children).flat(1/0).filter(r=>r).map((r,a)=>{if(typeof r=="string"){const n=a===this.children.length-1;return b`<span class=${t.text} aria-current=${n?"page":void 0}>${r}</span>`}return r.classList.add(r.tagName==="A"?t.link:t.text),r});this._children=v(s,_)}render(){return b`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${t.a11y}>${this.ariaLabel}</h2>
        <div class=${t.wrapper}>${this._children}</div>
      </nav>
    `}}N([g({attribute:"aria-label",type:String})],u.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",u);const P={title:"Navigation/Breadcrumbs",component:"w-breadcrumbs",render(e){return`
      <w-breadcrumbs ${d(e)}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory">Subcategory</a>
        <span aria-current="page">Current Page</span>
      </w-breadcrumbs>
    `},argTypes:{"aria-label":{type:"string",description:"Accessible label for the breadcrumb navigation"}}},i={args:{"aria-label":"You are here"}},l={args:{"aria-label":"Navigation breadcrumb"},render(e){return`
      <w-breadcrumbs ${d(e)}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <a href="#/oslo" aria-current="page">Oslo</a>
      </w-breadcrumbs>
    `}},c={args:{"aria-label":"You are here"},render(e){return`
      <w-breadcrumbs ${d(e)}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <span aria-current="page">Oslo</span>
      </w-breadcrumbs>
    `}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'You are here'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigation breadcrumb'
  },
  render(args) {
    return \`
      <w-breadcrumbs \${toAttributeString(args)}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <a href="#/oslo" aria-current="page">Oslo</a>
      </w-breadcrumbs>
    \`;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'You are here'
  },
  render(args) {
    return \`
      <w-breadcrumbs \${toAttributeString(args)}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <span aria-current="page">Oslo</span>
      </w-breadcrumbs>
    \`;
  }
}`,...c.parameters?.docs?.source}}};const W=["Default","WithLinks","WithSpanForCurrentPage"];export{i as Default,l as WithLinks,c as WithSpanForCurrentPage,W as __namedExportsOrder,P as default};
