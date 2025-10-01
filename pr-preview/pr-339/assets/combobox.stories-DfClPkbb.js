import{x as e}from"./iframe-Cy-UY58g.js";import"./preload-helper-Ct5FWWRu.js";var b=Object.freeze,m=Object.defineProperty,u=(p,h)=>b(m(p,"raw",{value:b(p.slice())})),d;const f={title:"Forms/Combobox",component:"w-combobox",parameters:{docs:{description:{component:"A combobox element for text input with selectable options."}}},argTypes:{options:{control:{type:"object"},description:"The available options to select from"},value:{control:{type:"text"},description:"The input value"},label:{control:{type:"text"},description:"Label above input"},placeholder:{control:{type:"text"},description:"Input placeholder"},openOnFocus:{control:{type:"boolean"},description:"Whether the popover opens when focus is on the text field"},selectOnBlur:{control:{type:"boolean"},description:"Select active option on blur"},matchTextSegments:{control:{type:"boolean"},description:"Whether the matching text segments in the options should be highlighted"},disableStaticFiltering:{control:{type:"boolean"},description:"Disable client-side static filtering"},invalid:{control:{type:"boolean"},description:"Renders the input field in an invalid state"},helpText:{control:{type:"text"},description:"The content to display as the help text"},disabled:{control:{type:"boolean"},description:"Whether the element is disabled"},required:{control:{type:"boolean"},description:"Whether the element is required"},optional:{control:{type:"boolean"},description:"Whether to show optional text"}}},o=[{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"},{value:"Orange",label:"Orange"},{value:"Grape",label:"Grape"},{value:"Strawberry",label:"Strawberry"},{value:"Pineapple",label:"Pineapple"},{value:"Mango",label:"Mango"}],t={render:()=>e`
    <w-combobox id="combobox-default" label="Select a fruit" placeholder="Type to search..." .options="${o}"></w-combobox>
  `},a={render:()=>e`
    <w-combobox
      id="combobox-with-value"
      label="Select a fruit"
      placeholder="Type to search..."
      .options="${o}"
      value="Apple"></w-combobox>
  `},n={render:()=>e`
    <w-combobox
      id="combobox-open-focus"
      label="Select a fruit"
      placeholder="Type to search..."
      open-on-focus
      .options="${o}"></w-combobox>
  `},l={render:()=>e`
    <w-combobox
      id="combobox-text-match"
      label="Select a fruit"
      placeholder="Type to search..."
      match-text-segments
      .options="${o}"></w-combobox>
  `},r={render:()=>e`
    <w-combobox
      id="combobox-invalid"
      label="Select a fruit"
      placeholder="Type to search..."
      invalid
      .options="${o}"
      value="Invalid fruit"
      help-text="Please select a valid fruit from the list"></w-combobox>
  `},c={render:()=>e`
    <w-combobox
      id="combobox-disabled"
      label="Select a fruit"
      placeholder="Type to search..."
      disabled
      .options="${o}"
      value="Apple"></w-combobox>
  `},i={render:()=>e`
    <w-combobox
      id="combobox-optional"
      label="Select a fruit"
      placeholder="Type to search..."
      optional
      .options="${o}"></w-combobox>
  `},s={render:()=>e(d||(d=u([`
    <w-combobox
      id="combobox-dynamic"
      label="Select a fruit (dynamic)"
      placeholder="Type to search..."
      disable-static-filtering></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-dynamic');
      const sampleOptions = `,`;
      combobox.options = sampleOptions;
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
        // Simulate dynamic filtering
        const filteredOptions = sampleOptions.filter((option) => option.value.toLowerCase().includes(e.detail.value.toLowerCase()));
        combobox.options = filteredOptions;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  `])),JSON.stringify(o))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox id="combobox-default" label="Select a fruit" placeholder="Type to search..." .options="\${sampleOptions}"></w-combobox>
  \`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox
      id="combobox-with-value"
      label="Select a fruit"
      placeholder="Type to search..."
      .options="\${sampleOptions}"
      value="Apple"></w-combobox>
  \`
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox
      id="combobox-open-focus"
      label="Select a fruit"
      placeholder="Type to search..."
      open-on-focus
      .options="\${sampleOptions}"></w-combobox>
  \`
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox
      id="combobox-text-match"
      label="Select a fruit"
      placeholder="Type to search..."
      match-text-segments
      .options="\${sampleOptions}"></w-combobox>
  \`
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox
      id="combobox-invalid"
      label="Select a fruit"
      placeholder="Type to search..."
      invalid
      .options="\${sampleOptions}"
      value="Invalid fruit"
      help-text="Please select a valid fruit from the list"></w-combobox>
  \`
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox
      id="combobox-disabled"
      label="Select a fruit"
      placeholder="Type to search..."
      disabled
      .options="\${sampleOptions}"
      value="Apple"></w-combobox>
  \`
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox
      id="combobox-optional"
      label="Select a fruit"
      placeholder="Type to search..."
      optional
      .options="\${sampleOptions}"></w-combobox>
  \`
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox
      id="combobox-dynamic"
      label="Select a fruit (dynamic)"
      placeholder="Type to search..."
      disable-static-filtering></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-dynamic');
      const sampleOptions = \${JSON.stringify(sampleOptions)};
      combobox.options = sampleOptions;
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
        // Simulate dynamic filtering
        const filteredOptions = sampleOptions.filter((option) => option.value.toLowerCase().includes(e.detail.value.toLowerCase()));
        combobox.options = filteredOptions;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  \`
}`,...s.parameters?.docs?.source}}};const y=["Default","WithValue","OpenOnFocus","WithTextMatching","Invalid","Disabled","Optional","DisableStaticFiltering"];export{t as Default,s as DisableStaticFiltering,c as Disabled,r as Invalid,n as OpenOnFocus,i as Optional,l as WithTextMatching,a as WithValue,y as __namedExportsOrder,f as default};
