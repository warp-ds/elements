import{g as i,k as t}from"./iframe-D-rxdG1p.js";import{t as o}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:n,args:l,argTypes:g}=i("w-breadcrumbs"),b={title:"Navigation/Breadcrumbs",render(r){return t`
      <w-breadcrumbs ${o(r)}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory">Subcategory</a>
        <span aria-current="page">Current Page</span>
      </w-breadcrumbs>
    `},args:l,argTypes:g,parameters:{actions:{handles:n}}},a={args:{"aria-label":"You are here"}},e={args:{"aria-label":"Navigation breadcrumb"},render(r){return t`
      <w-breadcrumbs ${o(r)}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <a href="#/oslo" aria-current="page">Oslo</a>
      </w-breadcrumbs>
    `}},s={args:{"aria-label":"You are here"},render(r){return t`
      <w-breadcrumbs ${o(r)}>
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
      <w-breadcrumbs \${toAttributeString(args)}>
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
      <w-breadcrumbs \${toAttributeString(args)}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <span aria-current="page">Oslo</span>
      </w-breadcrumbs>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const d=["Default","WithLinks","WithSpanForCurrentPage"];export{a as Default,e as WithLinks,s as WithSpanForCurrentPage,d as __namedExportsOrder,b as default};
