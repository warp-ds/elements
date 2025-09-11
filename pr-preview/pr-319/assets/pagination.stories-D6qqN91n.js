import{g,x as o}from"./iframe-Br3Vl5fd.js";import{s as c,p}from"./utilities-DNTwfhtg.js";const{events:i,args:u,argTypes:l}=g("w-pagination"),d={title:"Navigation/Pagination",render(t){return o`<w-pagination ${c(p(t))}></w-pagination>`},args:u,argTypes:l,parameters:{actions:{handles:i}}},e={args:{"current-page":1,pages:5,"base-url":"/search?page="}},a={args:{"current-page":3,pages:7,"base-url":"/search?page="}},r={args:{"current-page":10,pages:10,"base-url":"/search?page="}},s={args:{"current-page":15,pages:50,"visible-pages":5,"base-url":"/search?page="}},n={args:{"current-page":1,pages:1,"base-url":"/search?page="}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const m=["BasicPagination","MiddlePageSelected","LastPageSelected","ManyPagesWithLimitedVisible","SinglePage"],P=Object.freeze(Object.defineProperty({__proto__:null,BasicPagination:e,LastPageSelected:r,ManyPagesWithLimitedVisible:s,MiddlePageSelected:a,SinglePage:n,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{e as B,r as L,a as M,P,n as S,s as a};
