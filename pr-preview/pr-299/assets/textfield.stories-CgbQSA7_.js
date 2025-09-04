import{g as c}from"./iframe-B1lh29w8.js";import{t as m}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:d,args:p,argTypes:u}=c("w-textfield"),b={title:"Forms/Textfield",render(n){return`<w-textfield ${m(n)}></w-textfield>`},args:p,argTypes:u,parameters:{actions:{handles:d}}},e={args:{label:"Email",type:"email"}},a={args:{label:"Email",placeholder:"user@example.com",type:"email"}},r={args:{label:"Password","help-text":"Must be at least 8 characters",type:"password"}},s={args:{label:"Email",invalid:!0,"help-text":"Please enter a valid email address",value:"invalid-email",type:"email"}},t={args:{label:"Email",disabled:!0,value:"user@example.com",type:"email"}},l={args:{label:"Email","read-only":!0,value:"user@example.com",type:"email"}},o={args:{label:"Email",required:!0,type:"email"}},i={args:{label:"Price",placeholder:"1 000 000",type:"text"},render(n){return`
      <w-textfield ${m(n)}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
    type: 'email'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Must be at least 8 characters',
    type: 'password'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    invalid: true,
    'help-text': 'Please enter a valid email address',
    value: 'invalid-email',
    type: 'email'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    disabled: true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    'read-only': true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    required: true,
    type: 'email'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text'
  },
  render(args) {
    return \`
      <w-textfield \${toAttributeString(args)}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    \`;
  }
}`,...i.parameters?.docs?.source}}};const y=["Default","WithPlaceholder","WithHelpText","Invalid","Disabled","ReadOnly","Required","WithAffix"];export{e as Default,t as Disabled,s as Invalid,l as ReadOnly,o as Required,i as WithAffix,r as WithHelpText,a as WithPlaceholder,y as __namedExportsOrder,b as default};
