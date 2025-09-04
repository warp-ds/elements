import{g as o}from"./iframe-B1lh29w8.js";import{t}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:i,args:n,argTypes:g}=o("w-breadcrumbs"),m={title:"Navigation/Breadcrumbs",render(r){return`
      <w-breadcrumbs ${t(r)}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory">Subcategory</a>
        <span aria-current="page">Current Page</span>
      </w-breadcrumbs>
    `},args:n,argTypes:g,parameters:{actions:{handles:i}}},a={args:{"aria-label":"You are here"}},e={args:{"aria-label":"Navigation breadcrumb"},render(r){return`
      <w-breadcrumbs ${t(r)}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <a href="#/oslo" aria-current="page">Oslo</a>
      </w-breadcrumbs>
    `}},s={args:{"aria-label":"You are here"},render(r){return`
      <w-breadcrumbs ${t(r)}>
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
    return \`
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
    return \`
      <w-breadcrumbs \${toAttributeString(args)}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <span aria-current="page">Oslo</span>
      </w-breadcrumbs>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const b=["Default","WithLinks","WithSpanForCurrentPage"];export{a as Default,e as WithLinks,s as WithSpanForCurrentPage,b as __namedExportsOrder,m as default};
