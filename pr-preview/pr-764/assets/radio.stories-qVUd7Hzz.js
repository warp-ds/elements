import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n}from"./decorate-Bt2QF_uA.js";import{n as r,t as i}from"./dist-D5kJVy4t.js";import{i as a,n as o,r as s}from"./utilities-BHNt5DhH.js";import{t as c}from"./tooltip-D5IbvAIJ.js";import{n as l,t as u}from"./radio-group-DtlYlB9v.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{s(),r(),t(),l(),u(),c(),{args:d}=i(`w-radio-group`),f={title:`Forms/Radio`,render:e=>n`
            <w-radio-group ${a(o(e))}>
                <w-radio value="foo" checked>foo</w-radio>
                <w-radio value="bar">bar</w-radio>
            </w-radio-group>
        `,args:d},p={args:{label:`Group`,name:`foobar`}},m={args:{},render(){return n` <w-radio value="single">Single radio</w-radio> `}},h={args:{},render(){return n`
            <w-radio value="single" invalid>Single invalid radio</w-radio>
        `}},g={args:{},render(){return n`
            <w-radio value="single" disabled>Single disabled radio</w-radio>
        `}},_={args:{},render(){return n`
            <form @submit=${e=>{e.preventDefault();let t=e.currentTarget,n=t.querySelector(`[data-status]`);n&&(n.textContent=`Submitted value: ${new FormData(t).get(`newsletter`)??`none`}`)}} style="display: grid; gap: 12px;">
                <w-radio
                    name="newsletter"
                    value="yes"
                    required
                    @invalid=${e=>{e.preventDefault();let t=e.currentTarget.closest(`form`)?.querySelector(`[data-status]`);t&&(t.textContent=`Invalid: please select the radio.`)}}
                >
                    Sign up for updates
                </w-radio>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        `}},v={args:{},render(){return n`
            <div style="display: grid; gap: 12px;">
                <w-radio name="standalone" value="one">Standalone one</w-radio>
                <w-radio name="standalone" value="two">Standalone two</w-radio>
            </div>
        `}},y={args:{name:`disabled`,label:`Disabled`,disabled:!0}},b={args:{},render(){return n`
            <form>
                <w-radio-group required name="required">
                    <w-radio value="foo">foo</w-radio>
                    <w-radio value="bar">bar</w-radio>
                </w-radio-group>
                <button style="margin-top: 16px;">click me</button>
            </form>
        `}},x={args:{name:`disabled group`,disabled:!0,helpText:`This group is disabled`}},S={args:{},render(){return n`
            <w-radio-group name="disabled radio">
                <w-radio value="foo" disabled>disabled</w-radio>
                <w-radio value="bar">not disabled</w-radio>
            </w-radio-group>
        `}},C={args:{label:`Help text`,helpText:`Pick one option`,name:`help-text`}},w={args:{label:`With tooltip`,optional:!0,required:!1,helpText:`Help text is available, but might not be enough, or the added context is not important enough that we use help-text`,tooltip:`This tooltip adds supplementary information`}},T={args:{label:`Optional`,optional:!0,helpText:`This is optional`,name:`optional`}},E={render:()=>n`
        <w-radio-group name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
    `},D={render:()=>n`
        <w-radio-group help-text="Select one" name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
    `},O={render:()=>n`
        <w-radio-group label="Label" name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
    `},k={render:()=>n`
        <w-radio-group label="Label" help-text="help text" name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
    `},A={render:()=>n`
        <w-radio-group label="Label" optional help-text="help text" name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
    `},j={render:()=>n`
        <w-radio-group label="Label" invalid help-text="help text" name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
    `},M={render:()=>n`
            <form @submit=${e=>{e.preventDefault();let t=e.currentTarget.querySelector(`[data-status]`);t&&(t.textContent=`Submitted.`)}} style="display: grid; gap: 12px;">
                <w-radio-group
                    label="Preferences"
                    required
                    name="group"
                    help-text="Choose an option"
                    @invalid=${e=>{let t=e.currentTarget.closest(`form`)?.querySelector(`[data-status]`);t&&(t.textContent=`Invalid: select an option.`)}}
                >
                    <w-radio value="foo">Foo</w-radio>
                    <w-radio value="bar">Bar</w-radio>
                    <w-radio value="baz">Baz</w-radio>
                </w-radio-group>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        `},N={render:()=>n`
            <form @submit=${e=>{e.preventDefault();let t=e.currentTarget.querySelector(`[data-status]`);t&&(t.textContent=`Submitted.`)}} style="display: grid; gap: 12px;">
                <w-radio-group
                    name="radio group form associated"
                    label="Preferences"
                    name="group"
                    help-text="Choose an option"
                    @invalid=${e=>{let t=e.currentTarget.closest(`form`)?.querySelector(`[data-status]`);t&&(t.textContent=`Invalid: select an option.`)}}
                >
                    <w-radio value="foo" checked>Foo</w-radio>
                    <w-radio value="bar">Bar</w-radio>
                    <w-radio value="baz">Baz</w-radio>
                </w-radio-group>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        `},P={args:{},render(){return n`
            <w-radio-group name="invalid group" label="Invalid group" invalid>
                <w-radio value="foo">foo</w-radio>
                <w-radio value="bar">bar</w-radio>
            </w-radio-group>
        `}},F={args:{},render(){return n`
            <w-radio-group name="slotted label and hint">
                <span slot="label">Slotted label</span>
                <span slot="help-text">Slotted hint text</span>
                <w-radio value="foo">foo</w-radio>
                <w-radio value="bar">bar</w-radio>
            </w-radio-group>
        `}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Group",
    name: "foobar"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single">Single radio</w-radio> \`;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-radio value="single" invalid>Single invalid radio</w-radio>
        \`;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-radio value="single" disabled>Single disabled radio</w-radio>
        \`;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
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
      if (status) status.textContent = "Invalid: please select the radio.";
    };
    return html\`
            <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
                <w-radio
                    name="newsletter"
                    value="yes"
                    required
                    @invalid=\${handleInvalid}
                >
                    Sign up for updates
                </w-radio>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        \`;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <div style="display: grid; gap: 12px;">
                <w-radio name="standalone" value="one">Standalone one</w-radio>
                <w-radio name="standalone" value="two">Standalone two</w-radio>
            </div>
        \`;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: "disabled",
    label: "Disabled",
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <form>
                <w-radio-group required name="required">
                    <w-radio value="foo">foo</w-radio>
                    <w-radio value="bar">bar</w-radio>
                </w-radio-group>
                <button style="margin-top: 16px;">click me</button>
            </form>
        \`;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: "disabled group",
    disabled: true,
    helpText: "This group is disabled"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-radio-group name="disabled radio">
                <w-radio value="foo" disabled>disabled</w-radio>
                <w-radio value="bar">not disabled</w-radio>
            </w-radio-group>
        \`;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Help text",
    helpText: "Pick one option",
    name: "help-text"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: "With tooltip",
    optional: true,
    required: false,
    helpText: "Help text is available, but might not be enough, or the added context is not important enough that we use help-text",
    tooltip: "This tooltip adds supplementary information"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Optional",
    optional: true,
    helpText: "This is optional",
    name: "optional"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-radio-group name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
    \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-radio-group help-text="Select one" name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
    \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-radio-group label="Label" name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
    \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-radio-group label="Label" help-text="help text" name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
    \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-radio-group label="Label" optional help-text="help text" name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
    \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-radio-group label="Label" invalid help-text="help text" name="group">
            <w-radio value="foo">Foo</w-radio>
            <w-radio value="bar">Bar</w-radio>
        </w-radio-group>
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
      if (status) status.textContent = "Invalid: select an option.";
    };
    return html\`
            <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
                <w-radio-group
                    label="Preferences"
                    required
                    name="group"
                    help-text="Choose an option"
                    @invalid=\${handleInvalid}
                >
                    <w-radio value="foo">Foo</w-radio>
                    <w-radio value="bar">Bar</w-radio>
                    <w-radio value="baz">Baz</w-radio>
                </w-radio-group>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        \`;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
      if (status) status.textContent = "Invalid: select an option.";
    };
    return html\`
            <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
                <w-radio-group
                    name="radio group form associated"
                    label="Preferences"
                    name="group"
                    help-text="Choose an option"
                    @invalid=\${handleInvalid}
                >
                    <w-radio value="foo" checked>Foo</w-radio>
                    <w-radio value="bar">Bar</w-radio>
                    <w-radio value="baz">Baz</w-radio>
                </w-radio-group>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        \`;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-radio-group name="invalid group" label="Invalid group" invalid>
                <w-radio value="foo">foo</w-radio>
                <w-radio value="bar">bar</w-radio>
            </w-radio-group>
        \`;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-radio-group name="slotted label and hint">
                <span slot="label">Slotted label</span>
                <span slot="help-text">Slotted hint text</span>
                <w-radio value="foo">foo</w-radio>
                <w-radio value="bar">bar</w-radio>
            </w-radio-group>
        \`;
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`SingleRadioDefault`,`SingleRadioInvalid`,`SingleRadioDisabled`,`SingleRadioFormAssociated`,`StandaloneRadioGroupByName`,`Disabled`,`Required`,`DisabledGroup`,`DisabledRadio`,`HelpText`,`WithTooltip`,`Optional`,`RadioGroup`,`RadioGroupWithHelpText`,`RadioGroupWithLabel`,`RadioGroupWithHelpTextAndLabel`,`RadioGroupWithOptional`,`RadioGroupWithInvalid`,`RadioGroupRequired`,`RadioGroupFormAssociated`,`InvalidWithMessage`,`SlottedLabelAndHint`]})))()}L();export{p as Default,y as Disabled,x as DisabledGroup,S as DisabledRadio,C as HelpText,P as InvalidWithMessage,T as Optional,E as RadioGroup,N as RadioGroupFormAssociated,M as RadioGroupRequired,D as RadioGroupWithHelpText,k as RadioGroupWithHelpTextAndLabel,j as RadioGroupWithInvalid,O as RadioGroupWithLabel,A as RadioGroupWithOptional,b as Required,m as SingleRadioDefault,g as SingleRadioDisabled,_ as SingleRadioFormAssociated,h as SingleRadioInvalid,F as SlottedLabelAndHint,v as StandaloneRadioGroupByName,w as WithTooltip,I as __namedExportsOrder,f as default};