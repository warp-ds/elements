import{a as g,i as h,r as f,l as w,f as x,x as n,n as v,g as y}from"./iframe-C9pDqcwt.js";import{s as b,p}from"./utilities-DSUZpooa.js";function $(e,o){return e.flatMap(s=>[s,o]).slice(0,-1)}const L=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),S=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),O=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),k=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),_=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),C=g`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`;var B=Object.defineProperty,N=(e,o,s,r)=>{for(var a=void 0,l=e.length-1,u;l>=0;l--)(u=e[l])&&(a=u(o,s,a)||a);return a&&B(o,s,a),a};const t={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},E=n`<span class=${t.separator}>/</span>`;class m extends h{static{this.styles=[f,C]}constructor(){super(),w(S,k,O,L,_),this.ariaLabel=x._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const s=Array.from(this.children).flat(1/0).filter(r=>r).map((r,a)=>{if(typeof r=="string"){const l=a===this.children.length-1;return n`<span class=${t.text} aria-current=${l?"page":void 0}>${r}</span>`}return r.classList.add(r.tagName==="A"?t.link:t.text),r});this._children=$(s,E)}render(){return n`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${t.a11y}>${this.ariaLabel}</h2>
        <div class=${t.wrapper}>${this._children}</div>
      </nav>
    `}}N([v({attribute:"aria-label",type:String})],m.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",m);const{events:D,args:P,argTypes:W}=y("w-breadcrumbs"),Y={title:"Navigation/Breadcrumbs",render(e){return n`
      <w-breadcrumbs ${b(p(e))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory">Subcategory</a>
        <span aria-current="page">Current Page</span>
      </w-breadcrumbs>
    `},args:P,argTypes:W,parameters:{actions:{handles:D}}},i={args:{"aria-label":"You are here"}},c={args:{"aria-label":"Navigation breadcrumb"},render(e){return n`
      <w-breadcrumbs ${b(p(e))}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <a href="#/oslo" aria-current="page">Oslo</a>
      </w-breadcrumbs>
    `}},d={args:{"aria-label":"You are here"},render(e){return n`
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
}`,...d.parameters?.docs?.source}}};const J=["Default","WithLinks","WithSpanForCurrentPage"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithLinks:c,WithSpanForCurrentPage:d,__namedExportsOrder:J,default:Y},Symbol.toStringTag,{value:"Module"}));export{H as B,i as D,c as W,d as a};
