import{g as d}from"./iframe-B1lh29w8.js";import{t as p}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:g,args:m,argTypes:u}=d("w-badge"),f={title:"Layout/Badge",render(c){return`<w-badge ${p(c)}>Badge text</w-badge>`},args:m,argTypes:u,parameters:{actions:{handles:g}}},r={args:{variant:"neutral"}},a={args:{variant:"info"}},e={args:{variant:"positive"}},s={args:{variant:"warning"}},t={args:{variant:"negative"}},n={args:{variant:"price"}},o={args:{variant:"sponsored"}},i={args:{variant:"price",position:"top-right"},render(c){return`
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge ${p(c)}>Badge</w-badge>
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'price'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'sponsored'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'price',
    position: 'top-right'
  },
  render(args) {
    return \`
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge \${toAttributeString(args)}>Badge</w-badge>
      </div>
    \`;
  }
}`,...i.parameters?.docs?.source}}};const S=["Neutral","Info","Positive","Warning","Negative","Price","Sponsored","Positioned"];export{a as Info,t as Negative,r as Neutral,i as Positioned,e as Positive,n as Price,o as Sponsored,s as Warning,S as __namedExportsOrder,f as default};
