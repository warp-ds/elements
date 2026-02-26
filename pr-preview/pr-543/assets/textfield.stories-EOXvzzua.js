import{g as w,b as x}from"./iframe-DDEf8cFw.js";import{s as r,p as a}from"./utilities-CGkzrkN7.js";import"./textfield-BaKi_8p9.js";import"./affix-DPcR0uRg.js";var g=Object.freeze,h=Object.defineProperty,y=(e,t)=>g(h(e,"raw",{value:g(e.slice())})),b;const{events:v,args:S,argTypes:P}=w("w-textfield"),k={title:"Forms/Textfield",render(e){return x`<w-textfield ${r(a(e))}></w-textfield>`},args:S,argTypes:P,parameters:{actions:{handles:v}}},s={args:{label:"Email",type:"email"}},l={args:{label:"Email",placeholder:"user@example.com",type:"email"}},i={args:{label:"Password","help-text":"Must be at least 8 characters",type:"password"}},o={args:{label:"Email",invalid:!0,"help-text":"Please enter a valid email address",value:"invalid-email",type:"email"}},n={args:{label:"Email",disabled:!0,value:"user@example.com",type:"email"}},d={args:{label:"Email","read-only":!0,value:"user@example.com",type:"email"}},p={args:{label:"Email",required:!0,type:"email"}},m={args:{label:"Price",placeholder:"1 000 000",type:"text"},render(e){return x`
      <w-textfield ${r(a(e))}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    `}},c={args:{label:"Price",placeholder:"1 000 000",type:"text"},render(e){return x`
      <w-textfield ${r(a(e))}>
        <w-affix slot="prefix" label="kr"></w-affix>
      </w-textfield>
    `}},u={args:{label:"Price",placeholder:"1 000 000",type:"text",locale:"nb"},render({locale:e,...t}){return x(b||(b=y([`
      <w-textfield `,` data-testid="masking">
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
      <script type="module">
        const maskingTextfield = document.querySelector('w-textfield[data-testid="masking"]');
        maskingTextfield.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),r(a(t)),e)}},f={args:{type:"text"},render({locale:e,...t}){return x`
      <p>Resetting the form should return values to the initial values</p>
      <p>Submitting the form should result in the values being in the resulting pages query parameters</p>
      <form>
        <w-textfield ${r(a(t))} name="warp-textfield-1" placeholder="type here" label="field 1"></w-textfield>
        <w-textfield ${r(a(t))} name="warp-textfield-2" value="prefilled" label="field 2"></w-textfield>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    `}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
    type: 'email'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Must be at least 8 characters',
    type: 'password'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    invalid: true,
    'help-text': 'Please enter a valid email address',
    value: 'invalid-email',
    type: 'email'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    disabled: true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    'read-only': true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    required: true,
    type: 'email'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text'
  },
  render(args) {
    return html\`
      <w-textfield \${spread(prespread(args))}>
        <w-affix slot="prefix" label="kr"></w-affix>
      </w-textfield>
    \`;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text'
  },
  render({
    locale,
    ...args
  }) {
    return html\`
      <p>Resetting the form should return values to the initial values</p>
      <p>Submitting the form should result in the values being in the resulting pages query parameters</p>
      <form>
        <w-textfield \${spread(prespread(args))} name="warp-textfield-1" placeholder="type here" label="field 1"></w-textfield>
        <w-textfield \${spread(prespread(args))} name="warp-textfield-2" value="prefilled" label="field 2"></w-textfield>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    \`;
  }
}`,...f.parameters?.docs?.source}}};const E=["Default","WithPlaceholder","WithHelpText","Invalid","Disabled","ReadOnly","Required","WithSuffix","WithPrefix","Masking","FormParticipation"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:n,FormParticipation:f,Invalid:o,Masking:u,ReadOnly:d,Required:p,WithHelpText:i,WithPlaceholder:l,WithPrefix:c,WithSuffix:m,__namedExportsOrder:E,default:k},Symbol.toStringTag,{value:"Module"}));export{s as D,o as I,d as R,W as T,l as W,n as a};
