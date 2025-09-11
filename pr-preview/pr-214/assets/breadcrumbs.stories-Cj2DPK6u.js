import{g as i,x as o}from"./iframe-DTp7PCR_.js";import{s as t,p as n}from"./utilities-CIqV5vx1.js";const{events:l,args:c,argTypes:g}=i("w-breadcrumbs"),d={title:"Navigation/Breadcrumbs",render(r){return o`
      <w-breadcrumbs ${t(n(r))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory">Subcategory</a>
        <span aria-current="page">Current Page</span>
      </w-breadcrumbs>
    `},args:c,argTypes:g,parameters:{actions:{handles:l}}},a={args:{"aria-label":"You are here"}},e={args:{"aria-label":"Navigation breadcrumb"},render(r){return o`
      <w-breadcrumbs ${t(n(r))}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <a href="#/oslo" aria-current="page">Oslo</a>
      </w-breadcrumbs>
    `}},s={args:{"aria-label":"You are here"},render(r){return o`
      <w-breadcrumbs ${t(n(r))}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <span aria-current="page">Oslo</span>
      </w-breadcrumbs>
    `}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'You are here'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const u=["Default","WithLinks","WithSpanForCurrentPage"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithLinks:e,WithSpanForCurrentPage:s,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{p as B,a as D,e as W,s as a};
