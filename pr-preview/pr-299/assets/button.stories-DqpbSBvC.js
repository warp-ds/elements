import{g}from"./iframe-B1lh29w8.js";import{t as d}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:l,args:y,argTypes:b}=g("w-button"),h={title:"Buttons/Button",render(r){return`<w-button ${d(r)}>Button Text</w-button>`},args:y,argTypes:b,parameters:{actions:{handles:l}}},t={args:{variant:"primary",type:"button"}},a={args:{variant:"secondary",type:"button"}},e={args:{variant:"negative",type:"button"}},n={args:{variant:"utility",type:"button"}},s={args:{variant:"link",type:"button"}},o={args:{variant:"pill",type:"button"},render(r){return`<w-button ${d(r)}>💙</w-button>`}},i={args:{variant:"primary",small:!0,type:"button"}},u={args:{variant:"secondary",quiet:!0,type:"button"}},p={args:{variant:"primary",loading:!0,type:"button"}},c={args:{variant:"primary","full-width":!0,type:"button"}},m={args:{variant:"primary",href:"https://example.com",target:"_blank",type:"button"},render(r){return`<w-button ${d(r)}>Visit Example</w-button>`}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    type: 'button'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    type: 'button'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    type: 'button'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'utility',
    type: 'button'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    type: 'button'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pill',
    type: 'button'
  },
  render(args) {
    return \`<w-button \${toAttributeString(args)}>💙</w-button>\`;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    small: true,
    type: 'button'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    type: 'button'
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    'full-width': true,
    type: 'button'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    type: 'button'
  },
  render(args) {
    return \`<w-button \${toAttributeString(args)}>Visit Example</w-button>\`;
  }
}`,...m.parameters?.docs?.source}}};const k=["Primary","Secondary","Negative","Utility","Link","Pill","Small","Quiet","Loading","FullWidth","AsLink"];export{m as AsLink,c as FullWidth,s as Link,p as Loading,e as Negative,o as Pill,t as Primary,u as Quiet,a as Secondary,i as Small,n as Utility,k as __namedExportsOrder,h as default};
