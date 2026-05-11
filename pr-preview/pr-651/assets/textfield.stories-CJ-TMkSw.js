import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{D as n,E as r,Mt as i,Ot as a}from"./iframe-BSfuFVrY.js";import{i as o,n as s,r as c,t as l}from"./utilities-avOIUrWM.js";import{t as u}from"./affix-BkHIMNr1.js";import{n as d,t as f}from"./taggedTemplateLiteral-Cmj7rbCg.js";import{t as p}from"./textfield-CKXXHd06.js";var m=t({Default:()=>b,Disabled:()=>w,FormParticipation:()=>N,Invalid:()=>C,Masking:()=>M,ReadOnly:()=>T,Required:()=>E,WithClearAffixResetTextfield:()=>k,WithHelpText:()=>S,WithIconAffix:()=>j,WithPlaceholder:()=>x,WithPrefix:()=>O,WithSearchAndClearAffixForm:()=>A,WithSuffix:()=>D,__namedExportsOrder:()=>P,default:()=>y}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=e((()=>{c(),n(),a(),l(),p(),u(),d(),{events:g,args:_,argTypes:v}=r(`w-textfield`),y={title:`Forms/Textfield`,render(e){return i`<w-textfield ${o(s(e))}></w-textfield>`},args:_,argTypes:v,parameters:{actions:{handles:g}}},b={args:{label:`Email`,type:`email`}},x={args:{label:`Email`,placeholder:`user@example.com`,type:`email`}},S={args:{label:`Password`,"help-text":`Must be at least 8 characters`,type:`password`}},C={args:{label:`Email`,invalid:!0,"help-text":`Please enter a valid email address`,value:`invalid-email`,type:`email`}},w={args:{label:`Email`,disabled:!0,value:`user@example.com`,type:`email`}},T={args:{label:`Email`,"read-only":!0,value:`user@example.com`,type:`email`}},E={args:{label:`Email`,required:!0,type:`email`}},D={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return i`
      <w-textfield ${o(s(e))}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    `}},O={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return i`
      <w-textfield ${o(s(e))}>
        <w-affix slot="prefix" label="kr"></w-affix>
      </w-textfield>
    `}},k={args:{placeholder:`1 000 000`,type:`text`},render(e){return i`
      <w-textfield ${o(s(e))}>
        <w-affix slot="suffix" clear></w-affix>
      </w-textfield>
    `}},A={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return i`
      <form action="javascript:alert('Form submitted!');" method="GET">
        <w-textfield ${o(s(e))}>
          <w-affix slot="prefix" search aria-label="Search"></w-affix>
          <w-affix slot="suffix" clear aria-label="Clear"></w-affix>
        </w-textfield>
      </form>
    `}},j={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return i`
      <w-textfield ${o(s(e))}>
        <w-affix slot="prefix" icon="AwardMedal" aria-label="Search"></w-affix>
        <w-affix slot="suffix" icon="Search" aria-label="Clear"></w-affix>
      </w-textfield>
    `}},M={args:{label:`Price`,placeholder:`1 000 000`,type:`text`,locale:`nb`},render({locale:e,...t}){return i(h||=f([`
      <w-textfield `,` data-testid="masking">
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
      <script type="module">
        const maskingTextfield = document.querySelector('w-textfield[data-testid="masking"]');
        maskingTextfield.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `]),o(s(t)),e)}},N={args:{type:`text`},render({locale:e,...t}){return i`
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
    placeholder: '1 000 000',
    type: 'text'
  },
  render(args) {
    return html\`
      <w-textfield \${spread(prespread(args))}>
        <w-affix slot="suffix" clear></w-affix>
      </w-textfield>
    \`;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text'
  },
  render(args) {
    return html\`
      <form action="javascript:alert('Form submitted!');" method="GET">
        <w-textfield \${spread(prespread(args))}>
          <w-affix slot="prefix" search aria-label="Search"></w-affix>
          <w-affix slot="suffix" clear aria-label="Clear"></w-affix>
        </w-textfield>
      </form>
    \`;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text'
  },
  render(args) {
    return html\`
      <w-textfield \${spread(prespread(args))}>
        <w-affix slot="prefix" icon="AwardMedal" aria-label="Search"></w-affix>
        <w-affix slot="suffix" icon="Search" aria-label="Clear"></w-affix>
      </w-textfield>
    \`;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`Default`,`WithPlaceholder`,`WithHelpText`,`Invalid`,`Disabled`,`ReadOnly`,`Required`,`WithSuffix`,`WithPrefix`,`WithClearAffixResetTextfield`,`WithSearchAndClearAffixForm`,`WithIconAffix`,`Masking`,`FormParticipation`]}));F();export{b as Default,w as Disabled,N as FormParticipation,C as Invalid,M as Masking,T as ReadOnly,E as Required,k as WithClearAffixResetTextfield,S as WithHelpText,j as WithIconAffix,x as WithPlaceholder,O as WithPrefix,A as WithSearchAndClearAffixForm,D as WithSuffix,P as __namedExportsOrder,y as default,m as n,F as t};