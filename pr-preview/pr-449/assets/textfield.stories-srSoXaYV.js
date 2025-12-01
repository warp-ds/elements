import{g,x as m}from"./iframe-DhkFO5NH.js";import{s as c,p}from"./utilities-CJvvS3Mx.js";import"./index-D8NjHSB3.js";var f=Object.freeze,b=Object.defineProperty,w=(e,u)=>f(b(e,"raw",{value:f(e.slice())})),x;const{events:y,args:h,argTypes:v}=g("w-textfield"),S={title:"Forms/Textfield",render(e){return m`<w-textfield ${c(p(e))}></w-textfield>`},args:h,argTypes:v,parameters:{actions:{handles:y}}},a={args:{label:"Email",type:"email"}},r={args:{label:"Email",placeholder:"user@example.com",type:"email"}},t={args:{label:"Password","help-text":"Must be at least 8 characters",type:"password"}},s={args:{label:"Email",invalid:!0,"help-text":"Please enter a valid email address",value:"invalid-email",type:"email"}},l={args:{label:"Email",disabled:!0,value:"user@example.com",type:"email"}},i={args:{label:"Email","read-only":!0,value:"user@example.com",type:"email"}},o={args:{label:"Email",required:!0,type:"email"}},n={args:{label:"Price",placeholder:"1 000 000",type:"text"},render(e){return m`
      <w-textfield ${c(p(e))}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    `}},d={args:{label:"Price",placeholder:"1 000 000",type:"text",locale:"nb"},render({locale:e,...u}){return m(x||(x=w([`
      <w-textfield `,` data-testid="masking">
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
      <script type="module">
        const maskingTextfield = document.querySelector('w-textfield[data-testid="masking"]');
        maskingTextfield.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),c(p(u)),e)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
    type: 'email'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Must be at least 8 characters',
    type: 'password'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    'read-only': true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    required: true,
    type: 'email'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text',
    locale: 'nb'
  },
  render({
    locale,
    ...args
  }) {
    return html\`
      <w-textfield \${spread(prespread(args))} data-testid="masking">
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
      <script type="module">
        const maskingTextfield = document.querySelector('w-textfield[data-testid="masking"]');
        maskingTextfield.formatter = window.getNumberFormatter('\${locale}').format;
      <\/script>
    \`;
  }
}`,...d.parameters?.docs?.source}}};const k=["Default","WithPlaceholder","WithHelpText","Invalid","Disabled","ReadOnly","Required","WithAffix","Masking"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Disabled:l,Invalid:s,Masking:d,ReadOnly:i,Required:o,WithAffix:n,WithHelpText:t,WithPlaceholder:r,__namedExportsOrder:k,default:S},Symbol.toStringTag,{value:"Module"}));export{a as D,s as I,i as R,T,r as W,l as a,n as b};
