import{g as p,k as o}from"./iframe-Db-sxe0R.js";import{s as i,p as l}from"./utilities-PJ6nCT1H.js";import"./preload-helper-Dch09mLN.js";const{events:c,args:d,argTypes:m}=p("w-alert"),w={title:"Feedback/Alert",render(n){return o`
      <w-alert ${i(l(n))}>
        <p>This is an alert message</p>
      </w-alert>
    `},args:d,argTypes:m,parameters:{actions:{handles:c}}},r={args:{variant:"info",show:!0,role:"alert"}},e={args:{variant:"warning",show:!0,role:"alert"}},a={args:{variant:"negative",show:!0,role:"alert"}},s={args:{variant:"positive",show:!0,role:"alert"}},t={args:{variant:"info",show:!0,role:"alert"},render(n){return o`
      <w-alert ${i(l(n))}>
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    show: true,
    role: 'alert'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    show: true,
    role: 'alert'
  },
  render(args) {
    return html\`
      <w-alert \${spread(prespread(args))}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    \`;
  }
}`,...t.parameters?.docs?.source}}};const v=["Info","Warning","Negative","Positive","WithDescription"];export{r as Info,a as Negative,s as Positive,e as Warning,t as WithDescription,v as __namedExportsOrder,w as default};
