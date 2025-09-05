import{g as c,x as d}from"./iframe-ir4X9r1m.js";import{s as m,p}from"./utilities-C0Jg_KWc.js";const{events:u,args:x,argTypes:g}=c("w-textfield"),f={title:"Forms/Textfield",render(n){return d`<w-textfield ${m(p(n))}></w-textfield>`},args:x,argTypes:g,parameters:{actions:{handles:u}}},e={args:{label:"Email",type:"email"}},a={args:{label:"Email",placeholder:"user@example.com",type:"email"}},r={args:{label:"Password","help-text":"Must be at least 8 characters",type:"password"}},s={args:{label:"Email",invalid:!0,"help-text":"Please enter a valid email address",value:"invalid-email",type:"email"}},l={args:{label:"Email",disabled:!0,value:"user@example.com",type:"email"}},t={args:{label:"Email","read-only":!0,value:"user@example.com",type:"email"}},o={args:{label:"Email",required:!0,type:"email"}},i={args:{label:"Price",placeholder:"1 000 000",type:"text"},render(n){return d`
      <w-textfield ${m(p(n))}>
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    disabled: true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    'read-only': true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    return html\`
      <w-textfield \${spread(prespread(args))}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    \`;
  }
}`,...i.parameters?.docs?.source}}};const b=["Default","WithPlaceholder","WithHelpText","Invalid","Disabled","ReadOnly","Required","WithAffix"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:l,Invalid:s,ReadOnly:t,Required:o,WithAffix:i,WithHelpText:r,WithPlaceholder:a,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{e as D,s as I,t as R,v as T,a as W,l as a,i as b};
