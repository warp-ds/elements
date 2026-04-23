import{n as e,r as t}from"./chunk-BneVvdWh.js";import{s as n,t as r}from"./lit-C07f_Bua.js";import{n as i,t as a}from"./dist-WJrQKcXy.js";import{i as o,n as s,r as c,t as l}from"./utilities-pbJZRFp6.js";import{t as u}from"./affix-C6RSXCRS.js";import{n as d,t as f}from"./taggedTemplateLiteral-BSp0U_4f.js";import{t as p}from"./textfield-Dzbr6kmB.js";var m=t({Default:()=>b,Disabled:()=>w,FormParticipation:()=>A,Invalid:()=>C,Masking:()=>k,ReadOnly:()=>T,Required:()=>E,WithHelpText:()=>S,WithPlaceholder:()=>x,WithPrefix:()=>O,WithSuffix:()=>D,__namedExportsOrder:()=>j,default:()=>y}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{c(),i(),r(),l(),p(),u(),d(),{events:g,args:_,argTypes:v}=a(`w-textfield`),y={title:`Forms/Textfield`,render(e){return n`<w-textfield ${o(s(e))}></w-textfield>`},args:_,argTypes:v,parameters:{actions:{handles:g}}},b={args:{label:`Email`,type:`email`}},x={args:{label:`Email`,placeholder:`user@example.com`,type:`email`}},S={args:{label:`Password`,"help-text":`Must be at least 8 characters`,type:`password`}},C={args:{label:`Email`,invalid:!0,"help-text":`Please enter a valid email address`,value:`invalid-email`,type:`email`}},w={args:{label:`Email`,disabled:!0,value:`user@example.com`,type:`email`}},T={args:{label:`Email`,"read-only":!0,value:`user@example.com`,type:`email`}},E={args:{label:`Email`,required:!0,type:`email`}},D={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return n`
      <w-textfield ${o(s(e))}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    `}},O={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return n`
      <w-textfield ${o(s(e))}>
        <w-affix slot="prefix" label="kr"></w-affix>
      </w-textfield>
    `}},k={args:{label:`Price`,placeholder:`1 000 000`,type:`text`,locale:`nb`},render({locale:e,...t}){return n(h||=f([`
      <w-textfield `,` data-testid="masking">
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
      <script type="module">
        const maskingTextfield = document.querySelector('w-textfield[data-testid="masking"]');
        maskingTextfield.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `]),o(s(t)),e)}},A={args:{type:`text`},render({locale:e,...t}){return n`
      <p>Resetting the form should return values to the initial values</p>
      <p>Submitting the form should result in the values being in the resulting pages query parameters</p>
      <form>
        <w-textfield ${o(s(t))} name="warp-textfield-1" placeholder="type here" label="field 1"></w-textfield>
        <w-textfield ${o(s(t))} name="warp-textfield-2" value="prefilled" label="field 2"></w-textfield>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    `}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
    type: 'email'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Must be at least 8 characters',
    type: 'password'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    invalid: true,
    'help-text': 'Please enter a valid email address',
    value: 'invalid-email',
    type: 'email'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    disabled: true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    'read-only': true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    required: true,
    type: 'email'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithPlaceholder`,`WithHelpText`,`Invalid`,`Disabled`,`ReadOnly`,`Required`,`WithSuffix`,`WithPrefix`,`Masking`,`FormParticipation`]}));M();export{b as Default,w as Disabled,A as FormParticipation,C as Invalid,k as Masking,T as ReadOnly,E as Required,S as WithHelpText,x as WithPlaceholder,O as WithPrefix,D as WithSuffix,j as __namedExportsOrder,y as default,m as n,M as t};