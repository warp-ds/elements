import{g}from"./iframe-B1lh29w8.js";import{t as c}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:p,args:o,argTypes:i}=g("w-pagination"),m={title:"Navigation/Pagination",render(t){return`<w-pagination ${c(t)}></w-pagination>`},args:o,argTypes:i,parameters:{actions:{handles:p}}},e={args:{"current-page":1,pages:5,"base-url":"/search?page="}},a={args:{"current-page":3,pages:7,"base-url":"/search?page="}},r={args:{"current-page":10,pages:10,"base-url":"/search?page="}},s={args:{"current-page":15,pages:50,"visible-pages":5,"base-url":"/search?page="}},n={args:{"current-page":1,pages:1,"base-url":"/search?page="}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const b=["BasicPagination","MiddlePageSelected","LastPageSelected","ManyPagesWithLimitedVisible","SinglePage"];export{e as BasicPagination,r as LastPageSelected,s as ManyPagesWithLimitedVisible,a as MiddlePageSelected,n as SinglePage,b as __namedExportsOrder,m as default};
