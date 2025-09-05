import{g as t,k as l}from"./iframe-7FmQs7QA.js";import{s as c,p as d}from"./utilities-i7JHUjbG.js";const{events:u,args:p,argTypes:i}=t("w-box"),g={title:"Layout/Box",render:n=>l`
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
}`,...s.parameters?.docs?.source}}};const m=["Default","Info","Neutral","Bordered","Bleed"],x=Object.freeze(Object.defineProperty({__proto__:null,Bleed:s,Bordered:a,Default:e,Info:r,Neutral:o,__namedExportsOrder:m,default:g},Symbol.toStringTag,{value:"Module"}));export{x as B,e as D,r as I,o as N,a,s as b};
