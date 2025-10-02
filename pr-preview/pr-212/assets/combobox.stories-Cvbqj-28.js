import{g as d,x as e}from"./iframe-B_SmVk_u.js";import"./preload-helper-Ct5FWWRu.js";var b=Object.freeze,u=Object.defineProperty,x=(p,w)=>b(u(p,"raw",{value:b(p.slice())})),m;const{events:h,args:f,argTypes:v}=d("w-combobox"),O={title:"Forms/Combobox",component:"w-combobox",parameters:{docs:{description:{component:"A combobox element for text input with selectable options."}},actions:{handles:h}},args:f,argTypes:v},o=[{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"},{value:"Orange",label:"Orange"},{value:"Grape",label:"Grape"},{value:"Strawberry",label:"Strawberry"},{value:"Pineapple",label:"Pineapple"},{value:"Mango",label:"Mango"}],a={render:()=>e` <w-combobox label="Select a fruit" placeholder="Type to search..." .options="${o}"></w-combobox> `},t={render:()=>e`
    <w-combobox label="Select a fruit" placeholder="Type to search..." .options="${o}" value="Apple"></w-combobox>
  `},r={render:()=>e`
    <w-combobox label="Select a fruit" placeholder="Type to search..." open-on-focus .options="${o}"></w-combobox>
  `},l={render:()=>e`
    <w-combobox label="Select a fruit" placeholder="Type to search..." match-text-segments .options="${o}"></w-combobox>
  `},s={render:()=>e`
    <w-combobox
      label="Select a fruit"
      placeholder="Type to search..."
      invalid
      .options="${o}"
      value="Invalid fruit"
      help-text="Please select a valid fruit from the list"></w-combobox>
  `},c={render:()=>e`
    <w-combobox label="Select a fruit" placeholder="Type to search..." disabled .options="${o}" value="Apple"></w-combobox>
  `},n={render:()=>e`
    <w-combobox label="Select a fruit" placeholder="Type to search..." optional .options="${o}"></w-combobox>
  `},i={render:()=>e(m||(m=x([`
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
  `])),JSON.stringify(o))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'{\n  render: () => html` <w-combobox label="Select a fruit" placeholder="Type to search..." .options="${sampleOptions}"></w-combobox> `\n}',...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox label="Select a fruit" placeholder="Type to search..." .options="\${sampleOptions}" value="Apple"></w-combobox>
  \`
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox label="Select a fruit" placeholder="Type to search..." open-on-focus .options="\${sampleOptions}"></w-combobox>
  \`
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox label="Select a fruit" placeholder="Type to search..." match-text-segments .options="\${sampleOptions}"></w-combobox>
  \`
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox
      label="Select a fruit"
      placeholder="Type to search..."
      invalid
      .options="\${sampleOptions}"
      value="Invalid fruit"
      help-text="Please select a valid fruit from the list"></w-combobox>
  \`
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox label="Select a fruit" placeholder="Type to search..." disabled .options="\${sampleOptions}" value="Apple"></w-combobox>
  \`
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox label="Select a fruit" placeholder="Type to search..." optional .options="\${sampleOptions}"></w-combobox>
  \`
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const g=["Default","WithValue","OpenOnFocus","WithTextMatching","Invalid","Disabled","Optional","DisableStaticFiltering"];export{a as Default,i as DisableStaticFiltering,c as Disabled,s as Invalid,r as OpenOnFocus,n as Optional,l as WithTextMatching,t as WithValue,g as __namedExportsOrder,O as default};
