import{g as t,k as l}from"./iframe-D-rxdG1p.js";import{t as c}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:d,args:u,argTypes:i}=t("w-box"),f={title:"Layout/Box",render:n=>l`
      <w-box ${c(n)}>
        <h3>Box Content</h3>
        <p>This is content inside a box component.</p>
      </w-box>
    `,args:u,argTypes:i,parameters:{actions:{handles:d}}},e={args:{bleed:!1,bordered:!1,info:!1,neutral:!1,role:"region"}},r={args:{info:!0,role:"region"}},o={args:{neutral:!0,role:"region"}},a={args:{bordered:!0,role:"region"}},s={args:{bleed:!0,neutral:!0,role:"region"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: false,
    bordered: false,
    info: false,
    neutral: false,
    role: 'region'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    info: true,
    role: 'region'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    neutral: true,
    role: 'region'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    role: 'region'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    bleed: true,
    neutral: true,
    role: 'region'
  }
}`,...s.parameters?.docs?.source}}};const b=["Default","Info","Neutral","Bordered","Bleed"];export{s as Bleed,a as Bordered,e as Default,r as Info,o as Neutral,b as __namedExportsOrder,f as default};
