import{g as n,x as o}from"./iframe-Be-bD8zp.js";import{s as t,p as i}from"./utilities-C-uX2Lmj.js";import"./preload-helper-CmsKOCeN.js";const{events:l,args:g,argTypes:c}=n("w-breadcrumbs"),p={title:"Navigation/Breadcrumbs",render(r){return o`
      <w-breadcrumbs ${t(i(r))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory">Subcategory</a>
        <span aria-current="page">Current Page</span>
      </w-breadcrumbs>
    `},args:g,argTypes:c,parameters:{actions:{handles:l}}},a={args:{"aria-label":"You are here"}},e={args:{"aria-label":"Navigation breadcrumb"},render(r){return o`
      <w-breadcrumbs ${t(i(r))}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <a href="#/oslo" aria-current="page">Oslo</a>
      </w-breadcrumbs>
    `}},s={args:{"aria-label":"You are here"},render(r){return o`
      <w-breadcrumbs ${t(i(r))}>
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
}`,...s.parameters?.docs?.source}}};const b=["Default","WithLinks","WithSpanForCurrentPage"];export{a as Default,e as WithLinks,s as WithSpanForCurrentPage,b as __namedExportsOrder,p as default};
