import{g as t,x as l}from"./iframe-Be-bD8zp.js";import{s as c,p as d}from"./utilities-C-uX2Lmj.js";import"./preload-helper-CmsKOCeN.js";const{events:u,args:p,argTypes:i}=t("w-box"),b={title:"Layout/Box",render:n=>l`
      <w-box ${c(d(n))}>
        <h3>Box Content</h3>
        <p>This is content inside a box component.</p>
      </w-box>
    `,args:p,argTypes:i,parameters:{actions:{handles:u}}},e={args:{bleed:!1,bordered:!1,info:!1,neutral:!1,role:"region"}},r={args:{info:!0,role:"region"}},o={args:{neutral:!0,role:"region"}},a={args:{bordered:!0,role:"region"}},s={args:{bleed:!0,neutral:!0,role:"region"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const x=["Default","Info","Neutral","Bordered","Bleed"];export{s as Bleed,a as Bordered,e as Default,r as Info,o as Neutral,x as __namedExportsOrder,b as default};
