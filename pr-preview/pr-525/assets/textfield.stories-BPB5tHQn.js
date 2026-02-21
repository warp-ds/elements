import{g as b,b as f}from"./iframe-DLWcvx0E.js";import{s as c,p as u}from"./utilities-CMj1_M7I.js";import"./textfield-CKl1Mo1R.js";var x=Object.freeze,w=Object.defineProperty,h=(e,a)=>x(w(e,"raw",{value:x(e.slice())})),g;const{events:y,args:v,argTypes:S}=b("w-textfield"),P={title:"Forms/Textfield",render(e){return f`<w-textfield ${c(u(e))}></w-textfield>`},args:v,argTypes:S,parameters:{actions:{handles:y}}},r={args:{label:"Email",type:"email"}},t={args:{label:"Email",placeholder:"user@example.com",type:"email"}},s={args:{label:"Password","help-text":"Must be at least 8 characters",type:"password"}},l={args:{label:"Email",invalid:!0,"help-text":"Please enter a valid email address",value:"invalid-email",type:"email"}},i={args:{label:"Email",disabled:!0,value:"user@example.com",type:"email"}},o={args:{label:"Email","read-only":!0,value:"user@example.com",type:"email"}},n={args:{label:"Email",required:!0,type:"email"}},d={args:{label:"Price",placeholder:"1 000 000",type:"text"},render(e){return f`
      <w-textfield ${c(u(e))}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    `}},p={args:{label:"Price",placeholder:"1 000 000",type:"text",locale:"nb"},render({locale:e,...a}){return f(g||(g=h([`
      <w-textfield `,` data-testid="masking">
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
      <script type="module">
        const maskingTextfield = document.querySelector('w-textfield[data-testid="masking"]');
        maskingTextfield.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),c(u(a)),e)}},m={args:{type:"text"},render({locale:e,...a}){return f`
      <p>Resetting the form should return values to the initial values</p>
      <p>Submitting the form should result in the values being in the resulting pages query parameters</p>
      <form>
        <w-textfield ${c(u(a))} name="warp-textfield-1" placeholder="type here" label="field 1"></w-textfield>
        <w-textfield ${c(u(a))} name="warp-textfield-2" value="prefilled" label="field 2"></w-textfield>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    `}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
    type: 'email'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Must be at least 8 characters',
    type: 'password'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    invalid: true,
    'help-text': 'Please enter a valid email address',
    value: 'invalid-email',
    type: 'email'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    disabled: true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    'read-only': true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    required: true,
    type: 'email'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const k=["Default","WithPlaceholder","WithHelpText","Invalid","Disabled","ReadOnly","Required","WithAffix","Masking","FormParticipation"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:i,FormParticipation:m,Invalid:l,Masking:p,ReadOnly:o,Required:n,WithAffix:d,WithHelpText:s,WithPlaceholder:t,__namedExportsOrder:k,default:P},Symbol.toStringTag,{value:"Module"}));export{r as D,l as I,o as R,R as T,t as W,i as a,d as b};
