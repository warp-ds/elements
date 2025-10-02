import{g as m,x as p}from"./iframe-B_SmVk_u.js";import{s as d,p as g}from"./utilities-CTfIkh5x.js";const{events:u,args:v,argTypes:l}=m("w-badge"),b={title:"Layout/Badge",render(c){return p`<w-badge ${d(g(c))}>Badge text</w-badge>`},args:v,argTypes:l,parameters:{actions:{handles:u}}},r={args:{variant:"neutral"}},a={args:{variant:"info"}},e={args:{variant:"positive"}},s={args:{variant:"warning"}},o={args:{variant:"negative"}},n={args:{variant:"price"}},t={args:{variant:"sponsored"}},i={args:{variant:"price",position:"top-right"},render(c){return p`
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge ${d(g(c))}>Badge</w-badge>
      </div>
    `}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'price'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'sponsored'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'price',
    position: 'top-right'
  },
  render(args) {
    return html\`
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge \${spread(prespread(args))}>Badge</w-badge>
      </div>
    \`;
  }
}`,...i.parameters?.docs?.source}}};const f=["Neutral","Info","Positive","Warning","Negative","Price","Sponsored","Positioned"],h=Object.freeze(Object.defineProperty({__proto__:null,Info:a,Negative:o,Neutral:r,Positioned:i,Positive:e,Price:n,Sponsored:t,Warning:s,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{h as B,a as I,r as N,e as P,t as S,s as W,o as a,n as b,i as c};
