import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r}from"./decorate-Bt2QF_uA.js";import{n as i,t as a}from"./dist-D5kJVy4t.js";import{i as o,n as s,r as c}from"./utilities-BHNt5DhH.js";import{n as l,t as u}from"./checkbox-group-ByUamKK4.js";import{t as d}from"./tooltip-D5IbvAIJ.js";var f=t({CheckboxFormAssociated:()=>C,CheckboxGroup:()=>T,CheckboxGroupFormAssociated:()=>M,CheckboxGroupRequired:()=>j,CheckboxGroupWithHelpText:()=>E,CheckboxGroupWithHelpTextAndLabel:()=>O,CheckboxGroupWithInvalid:()=>A,CheckboxGroupWithLabel:()=>D,CheckboxGroupWithOptional:()=>k,Default:()=>_,Disabled:()=>w,Indeterminate:()=>b,IndeterminateDisabled:()=>S,IndeterminateError:()=>x,Invalid:()=>y,WithTooltip:()=>v,__namedExportsOrder:()=>N,default:()=>g}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{c(),i(),n(),l(),u(),d(),{events:p,args:m,argTypes:h}=a(`w-checkbox`),g={title:`Forms/Checkbox`,render(e){return r` <w-checkbox ${o(s(e))}>Check me</w-checkbox> `},args:m,argTypes:h,parameters:{actions:{handles:p}}},_={},v={args:{optional:!0,required:!1,helpText:`Help text is available, but might not be enough, or the added context is not important enough that we use help-text`,tooltip:`This tooltip adds supplementary information`},render({optional:e,required:t}){return r`
            <w-checkbox-group
                name="tooltip-demo"
                label="Needs an explanation"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                ?optional=${e}
                ?required=${t}
            >
                <w-checkbox value="foo">Foo</w-checkbox>
                <w-checkbox value="bar">Bar</w-checkbox>
                <w-checkbox value="baz">Baz</w-checkbox>
            </w-checkbox-group>
        `}},y={args:{name:`invalidfoo`,value:`bar`,invalid:!0}},b={args:{name:`indeterminatefoo`,value:`bar`,indeterminate:!0}},x={args:{name:`indeterminateerrorfoo`,value:`bar`,indeterminate:!0,invalid:!0}},S={args:{name:`indeterminatedisabledfoo`,value:`bar`,indeterminate:!0,disabled:!0}},C={render:()=>r`
            <form @submit=${e=>{e.preventDefault();let t=e.currentTarget,n=t.querySelector(`[data-status]`);n&&(n.textContent=`Submitted value: ${new FormData(t).get(`newsletter`)??`none`}`)}} style="display: grid; gap: 12px;">
                <w-checkbox
                    name="newsletter"
                    value="yes"
                    required
                    @invalid=${e=>{e.preventDefault();let t=e.currentTarget.closest(`form`)?.querySelector(`[data-status]`);t&&(t.textContent=`Invalid: please check the box.`)}}
                >
                    Sign up for updates
                </w-checkbox>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        `},w={args:{name:`disabledfoo`,value:`bar`,disabled:!0}},T={render:()=>r`
        <w-checkbox-group name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    `},E={render:()=>r`
        <w-checkbox-group help-text="Select all that apply" name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    `},D={render:()=>r`
        <w-checkbox-group label="Label" name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    `},O={render:()=>r`
        <w-checkbox-group label="Label" help-text="help text" name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    `},k={render:()=>r`
        <w-checkbox-group label="Label" optional help-text="help text" name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    `},A={render:()=>r`
        <w-checkbox-group label="Label" invalid help-text="help text" name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    `},j={render:()=>r`
        <w-checkbox-group
            label="Preferences"
            required
            help-text="Help text"
            name="group"
        >
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
            <w-checkbox value="baz">Baz</w-checkbox>
        </w-checkbox-group>
    `},M={render:()=>r`
            <form @submit=${e=>{e.preventDefault();let t=e.currentTarget.querySelector(`[data-status]`);t&&(t.textContent=`Submitted.`)}} style="display: grid; gap: 12px;">
                <w-checkbox-group
                    label="Preferences"
                    required
                    name="group"
                    help-text="Choose an option"
                    @invalid=${e=>{let t=e.currentTarget.closest(`form`)?.querySelector(`[data-status]`);t&&(t.textContent=`Invalid: select at least one option.`)}}
                >
                    <w-checkbox value="foo">Foo</w-checkbox>
                    <w-checkbox value="bar">Bar</w-checkbox>
                    <w-checkbox value="baz">Baz</w-checkbox>
                </w-checkbox-group>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        `},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true,
    required: false,
    helpText: "Help text is available, but might not be enough, or the added context is not important enough that we use help-text",
    tooltip: "This tooltip adds supplementary information"
  },
  render({
    optional,
    required
  }) {
    return html\`
            <w-checkbox-group
                name="tooltip-demo"
                label="Needs an explanation"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                ?optional=\${optional}
                ?required=\${required}
            >
                <w-checkbox value="foo">Foo</w-checkbox>
                <w-checkbox value="bar">Bar</w-checkbox>
                <w-checkbox value="baz">Baz</w-checkbox>
            </w-checkbox-group>
        \`;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: "invalidfoo",
    value: "bar",
    invalid: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: "indeterminatefoo",
    value: "bar",
    indeterminate: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: "indeterminateerrorfoo",
    value: "bar",
    indeterminate: true,
    invalid: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: "indeterminatedisabledfoo",
    value: "bar",
    indeterminate: true,
    disabled: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector("[data-status]") as HTMLElement | null;
      if (!status) return;
      const data = new FormData(form);
      status.textContent = \`Submitted value: \${data.get("newsletter") ?? "none"}\`;
    };
    const handleInvalid = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLElement;
      const form = target.closest("form");
      const status = form?.querySelector("[data-status]") as HTMLElement | null;
      if (status) status.textContent = "Invalid: please check the box.";
    };
    return html\`
            <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
                <w-checkbox
                    name="newsletter"
                    value="yes"
                    required
                    @invalid=\${handleInvalid}
                >
                    Sign up for updates
                </w-checkbox>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        \`;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: "disabledfoo",
    value: "bar",
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-checkbox-group name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-checkbox-group help-text="Select all that apply" name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-checkbox-group label="Label" name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-checkbox-group label="Label" help-text="help text" name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-checkbox-group label="Label" optional help-text="help text" name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-checkbox-group label="Label" invalid help-text="help text" name="group">
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
        </w-checkbox-group>
    \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-checkbox-group
            label="Preferences"
            required
            help-text="Help text"
            name="group"
        >
            <w-checkbox value="foo">Foo</w-checkbox>
            <w-checkbox value="bar">Bar</w-checkbox>
            <w-checkbox value="baz">Baz</w-checkbox>
        </w-checkbox-group>
    \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector("[data-status]") as HTMLElement | null;
      if (status) status.textContent = "Submitted.";
    };
    const handleInvalid = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const form = target.closest("form");
      const status = form?.querySelector("[data-status]") as HTMLElement | null;
      if (status) status.textContent = "Invalid: select at least one option.";
    };
    return html\`
            <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
                <w-checkbox-group
                    label="Preferences"
                    required
                    name="group"
                    help-text="Choose an option"
                    @invalid=\${handleInvalid}
                >
                    <w-checkbox value="foo">Foo</w-checkbox>
                    <w-checkbox value="bar">Bar</w-checkbox>
                    <w-checkbox value="baz">Baz</w-checkbox>
                </w-checkbox-group>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        \`;
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithTooltip`,`Invalid`,`Indeterminate`,`IndeterminateError`,`IndeterminateDisabled`,`CheckboxFormAssociated`,`Disabled`,`CheckboxGroup`,`CheckboxGroupWithHelpText`,`CheckboxGroupWithLabel`,`CheckboxGroupWithHelpTextAndLabel`,`CheckboxGroupWithOptional`,`CheckboxGroupWithInvalid`,`CheckboxGroupRequired`,`CheckboxGroupFormAssociated`]})))()}export{E as a,_ as c,S as d,x as f,P as h,j as i,w as l,f as m,T as n,D as o,y as p,M as r,k as s,C as t,b as u};