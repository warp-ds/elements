import{g,k as c}from"./iframe-D-rxdG1p.js";import{t as p}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:o,args:i,argTypes:u}=g("w-pagination"),b={title:"Navigation/Pagination",render(t){return c`<w-pagination ${p(t)}></w-pagination>`},args:i,argTypes:u,parameters:{actions:{handles:o}}},e={args:{"current-page":1,pages:5,"base-url":"/search?page="}},a={args:{"current-page":3,pages:7,"base-url":"/search?page="}},r={args:{"current-page":10,pages:10,"base-url":"/search?page="}},s={args:{"current-page":15,pages:50,"visible-pages":5,"base-url":"/search?page="}},n={args:{"current-page":1,pages:1,"base-url":"/search?page="}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const h=["BasicPagination","MiddlePageSelected","LastPageSelected","ManyPagesWithLimitedVisible","SinglePage"];export{e as BasicPagination,r as LastPageSelected,s as ManyPagesWithLimitedVisible,a as MiddlePageSelected,n as SinglePage,h as __namedExportsOrder,b as default};
