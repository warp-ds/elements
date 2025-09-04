import{g as m,k as c}from"./iframe-JIkZ_xUY.js";import{s as d,p as g}from"./utilities-DIiVBuYh.js";import"./preload-helper-Dch09mLN.js";const{events:u,args:v,argTypes:l}=m("w-badge"),S={title:"Layout/Badge",render(p){return c`<w-badge ${d(g(p))}>Badge text</w-badge>`},args:v,argTypes:l,parameters:{actions:{handles:u}}},r={args:{variant:"neutral"}},a={args:{variant:"info"}},e={args:{variant:"positive"}},s={args:{variant:"warning"}},n={args:{variant:"negative"}},o={args:{variant:"price"}},t={args:{variant:"sponsored"}},i={args:{variant:"price",position:"top-right"},render(p){return c`
      <div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;">
        <w-badge ${d(g(p))}>Badge</w-badge>
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'price'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const h=["Neutral","Info","Positive","Warning","Negative","Price","Sponsored","Positioned"];export{a as Info,n as Negative,r as Neutral,i as Positioned,e as Positive,o as Price,t as Sponsored,s as Warning,h as __namedExportsOrder,S as default};
