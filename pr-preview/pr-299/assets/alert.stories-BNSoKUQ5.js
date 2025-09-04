import{g as i}from"./iframe-B1lh29w8.js";import{t as o}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:l,args:c,argTypes:p}=i("w-alert"),u={title:"Feedback/Alert",render(n){return`
      <w-alert ${o(n)}>
        <p>This is an alert message</p>
      </w-alert>
    `},args:c,argTypes:p,parameters:{actions:{handles:l}}},r={args:{variant:"info",show:!0,role:"alert"}},e={args:{variant:"warning",show:!0,role:"alert"}},a={args:{variant:"negative",show:!0,role:"alert"}},t={args:{variant:"positive",show:!0,role:"alert"}},s={args:{variant:"info",show:!0,role:"alert"},render(n){return`
      <w-alert ${o(n)}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    `}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    show: true,
    role: 'alert'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    show: true,
    role: 'alert'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    show: true,
    role: 'alert'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    show: true,
    role: 'alert'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    show: true,
    role: 'alert'
  },
  render(args) {
    return \`
      <w-alert \${toAttributeString(args)}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const h=["Info","Warning","Negative","Positive","WithDescription"];export{r as Info,a as Negative,t as Positive,e as Warning,s as WithDescription,h as __namedExportsOrder,u as default};
