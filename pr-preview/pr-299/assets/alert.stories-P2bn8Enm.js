import{g as l,k as o}from"./iframe-D-rxdG1p.js";import{t as i}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:c,args:p,argTypes:g}=l("w-alert"),h={title:"Feedback/Alert",render(n){return o`
      <w-alert ${i(n)}>
        <p>This is an alert message</p>
      </w-alert>
    `},args:p,argTypes:g,parameters:{actions:{handles:c}}},r={args:{variant:"info",show:!0,role:"alert"}},e={args:{variant:"warning",show:!0,role:"alert"}},a={args:{variant:"negative",show:!0,role:"alert"}},t={args:{variant:"positive",show:!0,role:"alert"}},s={args:{variant:"info",show:!0,role:"alert"},render(n){return o`
      <w-alert ${i(n)}>
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
    return html\`
      <w-alert \${toAttributeString(args)}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const w=["Info","Warning","Negative","Positive","WithDescription"];export{r as Info,a as Negative,t as Positive,e as Warning,s as WithDescription,w as __namedExportsOrder,h as default};
