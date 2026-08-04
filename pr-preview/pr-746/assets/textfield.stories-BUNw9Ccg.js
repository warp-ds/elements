import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r}from"./decorate-Bt2QF_uA.js";import{n as i,t as a}from"./dist-D5kJVy4t.js";import{i as o,n as s,r as c}from"./utilities-BHNt5DhH.js";import{t as l}from"./affix-Chez9f4_.js";import{t as u}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as d}from"./textfield-CpZ__-lw.js";var f=t({Default:()=>v,Disabled:()=>S,FormParticipation:()=>j,Invalid:()=>x,Masking:()=>A,ReadOnly:()=>C,Required:()=>w,WithClearAffixResetTextfield:()=>D,WithHelpText:()=>b,WithIconAffix:()=>k,WithPlaceholder:()=>y,WithPrefix:()=>E,WithSearchAndClearAffixForm:()=>O,WithSuffix:()=>T,__namedExportsOrder:()=>M,default:()=>_}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{c(),i(),n(),d(),l(),{events:m,args:h,argTypes:g}=a(`w-textfield`),_={title:`Forms/Textfield`,render(e){return r`<w-textfield ${o(s(e))}></w-textfield>`},args:h,argTypes:g,parameters:{actions:{handles:m}}},v={args:{label:`Email`,type:`email`}},y={args:{label:`Email`,placeholder:`user@example.com`,type:`email`}},b={args:{label:`Password`,"help-text":`Must be at least 8 characters`,type:`password`}},x={args:{label:`Email`,invalid:!0,"help-text":`Please enter a valid email address`,value:`invalid-email`,type:`email`}},S={args:{label:`Email`,disabled:!0,value:`user@example.com`,type:`email`}},C={args:{label:`Email`,"read-only":!0,value:`user@example.com`,type:`email`}},w={args:{label:`Email`,required:!0,type:`email`}},T={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return r`
            <w-textfield ${o(s(e))}>
                <w-affix slot="suffix" label="kr"></w-affix>
            </w-textfield>
        `}},E={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return r`
            <w-textfield ${o(s(e))}>
                <w-affix slot="prefix" label="kr"></w-affix>
            </w-textfield>
        `}},D={args:{placeholder:`1 000 000`,type:`text`},render(e){return r`
            <w-textfield ${o(s(e))}>
                <w-affix slot="suffix" clear></w-affix>
            </w-textfield>
        `}},O={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return r`
            <form action="javascript:alert('Form submitted!');" method="GET">
                <w-textfield ${o(s(e))}>
                    <w-affix slot="prefix" search aria-label="Search"></w-affix>
                    <w-affix slot="suffix" clear aria-label="Clear"></w-affix>
                </w-textfield>
            </form>
        `}},k={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return r`
            <w-textfield ${o(s(e))}>
                <w-affix slot="prefix" icon="AwardMedal" aria-label="Search"></w-affix>
                <w-affix slot="suffix" icon="Search" aria-label="Clear"></w-affix>
            </w-textfield>
        `}},A={args:{label:`Price`,placeholder:`1 000 000`,type:`text`,locale:`nb`},render({locale:e,...t}){return r(p||=u([`
            <w-textfield `,` data-testid="masking">
                <w-affix slot="suffix" label="kr"></w-affix>
            </w-textfield>
            <script type="module">
                const maskingTextfield = document.querySelector(
                    'w-textfield[data-testid="masking"]',
                );
                maskingTextfield.formatter = window.getNumberFormatter(
                    "`,`",
                ).format;
            <\/script>
        `]),o(s(t)),e)}},j={args:{type:`text`},render({locale:e,...t}){return r`
            <p>Resetting the form should return values to the initial values</p>
            <p>
                Submitting the form should result in the values being in the resulting
                pages query parameters
            </p>
            <form>
                <w-textfield
                    ${o(s(t))}
                    name="warp-textfield-1"
                    placeholder="type here"
                    label="field 1"
                ></w-textfield>
                <w-textfield
                    ${o(s(t))}
                    name="warp-textfield-2"
                    value="prefilled"
                    label="field 2"
                ></w-textfield>
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </form>
        `}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    type: "email"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "user@example.com",
    type: "email"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    "help-text": "Must be at least 8 characters",
    type: "password"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    invalid: true,
    "help-text": "Please enter a valid email address",
    value: "invalid-email",
    type: "email"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    disabled: true,
    value: "user@example.com",
    type: "email"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    "read-only": true,
    value: "user@example.com",
    type: "email"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    required: true,
    type: "email"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Price",
    placeholder: "1 000 000",
    type: "text"
  },
  render(args) {
    return html\`
            <w-textfield \${spread(prespread(args))}>
                <w-affix slot="suffix" label="kr"></w-affix>
            </w-textfield>
        \`;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Price",
    placeholder: "1 000 000",
    type: "text"
  },
  render(args) {
    return html\`
            <w-textfield \${spread(prespread(args))}>
                <w-affix slot="prefix" label="kr"></w-affix>
            </w-textfield>
        \`;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "1 000 000",
    type: "text"
  },
  render(args) {
    return html\`
            <w-textfield \${spread(prespread(args))}>
                <w-affix slot="suffix" clear></w-affix>
            </w-textfield>
        \`;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Price",
    placeholder: "1 000 000",
    type: "text"
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Price",
    placeholder: "1 000 000",
    type: "text"
  },
  render(args) {
    return html\`
            <w-textfield \${spread(prespread(args))}>
                <w-affix slot="prefix" icon="AwardMedal" aria-label="Search"></w-affix>
                <w-affix slot="suffix" icon="Search" aria-label="Clear"></w-affix>
            </w-textfield>
        \`;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Price",
    placeholder: "1 000 000",
    type: "text",
    locale: "nb"
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
                const maskingTextfield = document.querySelector(
                    'w-textfield[data-testid="masking"]',
                );
                maskingTextfield.formatter = window.getNumberFormatter(
                    "\${locale}",
                ).format;
            <\/script>
        \`;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text"
  },
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  render({
    locale,
    ...args
  }) {
    return html\`
            <p>Resetting the form should return values to the initial values</p>
            <p>
                Submitting the form should result in the values being in the resulting
                pages query parameters
            </p>
            <form>
                <w-textfield
                    \${spread(prespread(args))}
                    name="warp-textfield-1"
                    placeholder="type here"
                    label="field 1"
                ></w-textfield>
                <w-textfield
                    \${spread(prespread(args))}
                    name="warp-textfield-2"
                    value="prefilled"
                    label="field 2"
                ></w-textfield>
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </form>
        \`;
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithPlaceholder`,`WithHelpText`,`Invalid`,`Disabled`,`ReadOnly`,`Required`,`WithSuffix`,`WithPrefix`,`WithClearAffixResetTextfield`,`WithSearchAndClearAffixForm`,`WithIconAffix`,`Masking`,`FormParticipation`]})))()}export{y as a,f as c,C as i,S as n,T as o,x as r,N as s,v as t};