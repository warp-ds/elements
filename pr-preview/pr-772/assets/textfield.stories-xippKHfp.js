import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n,y as r}from"./decorate-D-MUTuIl.js";import{n as i,t as a}from"./dist-CXTYkVAl.js";import{i as o,n as s,r as c}from"./utilities-C5YHrCuy.js";import{t as l}from"./affix-Mqo6jCr8.js";import{t as u}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as d}from"./tooltip-GVgJeJHe.js";import{t as f}from"./textfield-EdvlzJ5c.js";var p=t({Default:()=>y,Disabled:()=>C,FormParticipation:()=>M,Invalid:()=>S,Masking:()=>j,ReadOnly:()=>w,Required:()=>T,WithClearAffixResetTextfield:()=>O,WithHelpText:()=>x,WithIconAffix:()=>A,WithPlaceholder:()=>b,WithPrefix:()=>D,WithSearchAndClearAffixForm:()=>k,WithSuffix:()=>E,WithTooltip:()=>N,__namedExportsOrder:()=>P,default:()=>v}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{c(),i(),n(),f(),l(),d(),{events:h,args:g,argTypes:_}=a(`w-textfield`),v={title:`Forms/Textfield`,render(e){return r`<w-textfield ${o(s(e))}></w-textfield>`},args:g,argTypes:_,parameters:{actions:{handles:h}}},y={args:{label:`Email`,type:`email`}},b={args:{label:`Email`,placeholder:`user@example.com`,type:`email`}},x={args:{label:`Password`,"help-text":`Must be at least 8 characters`,type:`password`}},S={args:{label:`Email`,invalid:!0,"help-text":`Please enter a valid email address`,value:`invalid-email`,type:`email`}},C={args:{label:`Email`,disabled:!0,value:`user@example.com`,type:`email`}},w={args:{label:`Email`,"read-only":!0,value:`user@example.com`,type:`email`}},T={args:{label:`Email`,required:!0,type:`email`}},E={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return r`
            <w-textfield ${o(s(e))}>
                <w-affix slot="suffix" label="kr"></w-affix>
            </w-textfield>
        `}},D={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return r`
            <w-textfield ${o(s(e))}>
                <w-affix slot="prefix" label="kr"></w-affix>
            </w-textfield>
        `}},O={args:{placeholder:`1 000 000`,type:`text`},render(e){return r`
            <w-textfield ${o(s(e))}>
                <w-affix slot="suffix" clear></w-affix>
            </w-textfield>
        `}},k={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return r`
            <form action="javascript:alert('Form submitted!');" method="GET">
                <w-textfield ${o(s(e))}>
                    <w-affix slot="prefix" search aria-label="Search"></w-affix>
                    <w-affix slot="suffix" clear aria-label="Clear"></w-affix>
                </w-textfield>
            </form>
        `}},A={args:{label:`Price`,placeholder:`1 000 000`,type:`text`},render(e){return r`
            <w-textfield ${o(s(e))}>
                <w-affix slot="prefix" icon="AwardMedal" aria-label="Search"></w-affix>
                <w-affix slot="suffix" icon="Search" aria-label="Clear"></w-affix>
            </w-textfield>
        `}},j={args:{label:`Price`,placeholder:`1 000 000`,type:`text`,locale:`nb`},render({locale:e,...t}){return r(m||=u([`
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
        `]),o(s(t)),e)}},M={args:{type:`text`},render({locale:e,...t}){return r`
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
        `}},N={args:{optional:!0,required:!1},render({optional:e,required:t}){return r`
            <w-textfield
                name="tooltip-demo"
                label="Needs an explanation"
                placeholder="Placeholder"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                ?optional=${e}
                ?required=${t}
            ></w-textfield>
        `}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    type: "email"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "user@example.com",
    type: "email"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    "help-text": "Must be at least 8 characters",
    type: "password"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    invalid: true,
    "help-text": "Please enter a valid email address",
    value: "invalid-email",
    type: "email"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    disabled: true,
    value: "user@example.com",
    type: "email"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    "read-only": true,
    value: "user@example.com",
    type: "email"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    required: true,
    type: "email"
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
                <w-affix slot="suffix" label="kr"></w-affix>
            </w-textfield>
        \`;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`Default`,`WithPlaceholder`,`WithHelpText`,`Invalid`,`Disabled`,`ReadOnly`,`Required`,`WithSuffix`,`WithPrefix`,`WithClearAffixResetTextfield`,`WithSearchAndClearAffixForm`,`WithIconAffix`,`Masking`,`FormParticipation`,`WithTooltip`]})))()}export{x as a,N as c,w as i,F as l,C as n,b as o,S as r,E as s,y as t,p as u};