import{r as p,n as g,t as d}from"./styles-Dxp8llA4.js";import{a as h,i as f,x as b}from"./iframe-CenlcFCF.js";import{i as w}from"./index-DaqRszEa.js";import{a as x}from"./i18n-B0gjlOVs.js";import"./preload-helper-CmsKOCeN.js";function y(e,n){return e.flatMap(s=>[s,n]).slice(0,-1)}const v=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),$=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),L=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),S=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),k=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),C=h`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`;var O=Object.defineProperty,N=(e,n,s,r)=>{for(var a=void 0,i=e.length-1,u;i>=0;i--)(u=e[i])&&(a=u(n,s,a)||a);return a&&O(n,s,a),a};const t={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},_=b`<span class=${t.separator}>/</span>`;class m extends f{static{this.styles=[p,C]}constructor(){super(),x($,S,L,v,k),this.ariaLabel=w._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const s=Array.from(this.children).flat(1/0).filter(r=>r).map((r,a)=>{if(typeof r=="string"){const i=a===this.children.length-1;return b`<span class=${t.text} aria-current=${i?"page":void 0}>${r}</span>`}return r.classList.add(r.tagName==="A"?t.link:t.text),r});this._children=y(s,_)}render(){return b`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${t.a11y}>${this.ariaLabel}</h2>
        <div class=${t.wrapper}>${this._children}</div>
      </nav>
    `}}N([g({attribute:"aria-label",type:String})],m.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",m);const J={title:"Navigation/Breadcrumbs",component:"w-breadcrumbs",render(e){return`
      <w-breadcrumbs ${d(e)}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory">Subcategory</a>
        <span aria-current="page">Current Page</span>
      </w-breadcrumbs>
    `},argTypes:{"aria-label":{type:"string",description:"Accessible label for the breadcrumb navigation"}}},o={args:{"aria-label":"You are here"}},l={args:{"aria-label":"Navigation breadcrumb"},render(e){return`
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
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'You are here'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const P=["Default","WithLinks","WithSpanForCurrentPage"];export{o as Default,l as WithLinks,c as WithSpanForCurrentPage,P as __namedExportsOrder,J as default};
