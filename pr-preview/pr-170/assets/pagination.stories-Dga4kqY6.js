import{g,x as p}from"./iframe-Be-bD8zp.js";import{s as c,p as o}from"./utilities-C-uX2Lmj.js";import"./preload-helper-CmsKOCeN.js";const{events:i,args:u,argTypes:d}=g("w-pagination"),h={title:"Navigation/Pagination",render(t){return p`<w-pagination ${c(o(t))}></w-pagination>`},args:u,argTypes:d,parameters:{actions:{handles:i}}},e={args:{"current-page":1,pages:5,"base-url":"/search?page="}},a={args:{"current-page":3,pages:7,"base-url":"/search?page="}},r={args:{"current-page":10,pages:10,"base-url":"/search?page="}},s={args:{"current-page":15,pages:50,"visible-pages":5,"base-url":"/search?page="}},n={args:{"current-page":1,pages:1,"base-url":"/search?page="}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 1,
    pages: 5,
    'base-url': '/search?page='
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 3,
    pages: 7,
    'base-url': '/search?page='
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 10,
    pages: 10,
    'base-url': '/search?page='
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 15,
    pages: 50,
    'visible-pages': 5,
    'base-url': '/search?page='
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    'current-page': 1,
    pages: 1,
    'base-url': '/search?page='
  }
}`,...n.parameters?.docs?.source}}};const S=["BasicPagination","MiddlePageSelected","LastPageSelected","ManyPagesWithLimitedVisible","SinglePage"];export{e as BasicPagination,r as LastPageSelected,s as ManyPagesWithLimitedVisible,a as MiddlePageSelected,n as SinglePage,S as __namedExportsOrder,h as default};
