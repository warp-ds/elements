import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{Ht as n,Lt as r,M as i,N as a}from"./iframe-ihHcNuh3.js";import{a as o,n as s,r as c,t as l}from"./utilities-DpCirleT.js";import{t as u}from"./affix-C6_WRrub.js";import{n as d,t as f}from"./taggedTemplateLiteral-pWa2IaV6.js";import{t as p}from"./tooltip-DpLuTpYE.js";import{t as m}from"./textfield-BGbec9cj.js";var h=e({Default:()=>x,Disabled:()=>T,FormParticipation:()=>P,Invalid:()=>w,Masking:()=>N,ReadOnly:()=>E,Required:()=>D,WithClearAffixResetTextfield:()=>A,WithHelpText:()=>C,WithIconAffix:()=>M,WithPlaceholder:()=>S,WithPrefix:()=>k,WithSearchAndClearAffixForm:()=>j,WithSuffix:()=>O,WithTooltip:()=>F,__namedExportsOrder:()=>I,default:()=>b}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{c(),a(),r(),l(),m(),u(),p(),d(),{events:_,args:v,argTypes:y}=i(`w-textfield`),b={title:`Forms/Textfield`,render(e){return n`<w-textfield ${o(s(e))}></w-textfield>`},args:v,argTypes:y,parameters:{actions:{handles:_}}},x={args:{label:`Email`,type:`email`}},S={args:{label:`Email`,placeholder:`user@example.com`,type:`email`}},C={args:{label:`Password`,"help-text":`Must be at least 8 characters`,type:`password`}},w={args:{label:`Email`,invalid:!0,"help-text":`Please enter a valid email address`,value:`invalid-email`,type:`email`}},T={args:{label:`Email`,disabled:!0,value:`user@example.com`,type:`email`}},E={args:{label:`Email`,"read-only":!0,value:`user@example.com`,type:`email`}},D={args:{label:`Email`,required:!0,type:`email`}},O={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return n`
            <w-textfield ${o(s(e))}>
                <w-affix slot="suffix" label="kr"></w-affix>
            </w-textfield>
        `}},k={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return n`
            <w-textfield ${o(s(e))}>
                <w-affix slot="prefix" label="kr"></w-affix>
            </w-textfield>
        `}},A={args:{placeholder:`1 000 000`,type:`text`},render(e){return n`
            <w-textfield ${o(s(e))}>
                <w-affix slot="suffix" clear></w-affix>
            </w-textfield>
        `}},j={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return n`
            <form action="javascript:alert('Form submitted!');" method="GET">
                <w-textfield ${o(s(e))}>
                    <w-affix slot="prefix" search aria-label="Search"></w-affix>
                    <w-affix slot="suffix" clear aria-label="Clear"></w-affix>
                </w-textfield>
            </form>
        `}},M={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return n`
            <w-textfield ${o(s(e))}>
                <w-affix slot="prefix" icon="AwardMedal" aria-label="Search"></w-affix>
                <w-affix slot="suffix" icon="Search" aria-label="Clear"></w-affix>
            </w-textfield>
        `}},N={args:{label:`Price`,placeholder:`1 000 000`,type:`text`,locale:`nb`},render({locale:e,...t}){return n(g||=f([`
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
        `]),o(s(t)),e)}},P={args:{type:`text`},render({locale:e,...t}){return n`
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
        `}},F={args:{optional:!0,required:!1},render({optional:e,required:t}){return n`
            <w-textfield
                name="tooltip-demo"
                label="Needs an explanation"
                placeholder="Placeholder"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                ?optional=${e}
                ?required=${t}
            ></w-textfield>
        `}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    type: "email"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "user@example.com",
    type: "email"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    "help-text": "Must be at least 8 characters",
    type: "password"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    invalid: true,
    "help-text": "Please enter a valid email address",
    value: "invalid-email",
    type: "email"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    disabled: true,
    value: "user@example.com",
    type: "email"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    "read-only": true,
    value: "user@example.com",
    type: "email"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    required: true,
    type: "email"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true,
    required: false
  },
  render({
    optional,
    required
  }) {
    return html\`
            <w-textfield
                name="tooltip-demo"
                label="Needs an explanation"
                placeholder="Placeholder"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                ?optional=\${optional}
                ?required=\${required}
            ></w-textfield>
        \`;
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`WithPlaceholder`,`WithHelpText`,`Invalid`,`Disabled`,`ReadOnly`,`Required`,`WithSuffix`,`WithPrefix`,`WithClearAffixResetTextfield`,`WithSearchAndClearAffixForm`,`WithIconAffix`,`Masking`,`FormParticipation`,`WithTooltip`]}));L();export{x as Default,T as Disabled,P as FormParticipation,w as Invalid,N as Masking,E as ReadOnly,D as Required,A as WithClearAffixResetTextfield,C as WithHelpText,M as WithIconAffix,S as WithPlaceholder,k as WithPrefix,j as WithSearchAndClearAffixForm,O as WithSuffix,F as WithTooltip,I as __namedExportsOrder,b as default,h as n,L as t};