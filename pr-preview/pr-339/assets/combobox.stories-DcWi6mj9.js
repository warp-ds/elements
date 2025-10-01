import{x as e}from"./iframe-Bt1IL9hF.js";import"./preload-helper-DvrX7W50.js";var d=Object.freeze,g=Object.defineProperty,o=(m,w)=>d(g(m,"raw",{value:d(m.slice())})),p,u,x,v,h,y,f,S;const E={title:"Forms/Combobox",component:"w-combobox",parameters:{docs:{description:{component:"A combobox element for text input with selectable options."}}},argTypes:{options:{control:{type:"object"},description:"The available options to select from"},value:{control:{type:"text"},description:"The input value"},label:{control:{type:"text"},description:"Label above input"},placeholder:{control:{type:"text"},description:"Input placeholder"},openOnFocus:{control:{type:"boolean"},description:"Whether the popover opens when focus is on the text field"},selectOnBlur:{control:{type:"boolean"},description:"Select active option on blur"},matchTextSegments:{control:{type:"boolean"},description:"Whether the matching text segments in the options should be highlighted"},disableStaticFiltering:{control:{type:"boolean"},description:"Disable client-side static filtering"},invalid:{control:{type:"boolean"},description:"Renders the input field in an invalid state"},helpText:{control:{type:"text"},description:"The content to display as the help text"},disabled:{control:{type:"boolean"},description:"Whether the element is disabled"},required:{control:{type:"boolean"},description:"Whether the element is required"},optional:{control:{type:"boolean"},description:"Whether to show optional text"}}},t=[{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"},{value:"Orange",label:"Orange"},{value:"Grape",label:"Grape"},{value:"Strawberry",label:"Strawberry"},{value:"Pineapple",label:"Pineapple"},{value:"Mango",label:"Mango"}],c={render:()=>e(p||(p=o([`
    <w-combobox id="combobox-default" label="Select a fruit" placeholder="Type to search..."></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-default');
      combobox.options = `,`;
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  `])),JSON.stringify(t))},a={render:()=>e(u||(u=o([`
    <w-combobox id="combobox-with-value" label="Select a fruit" placeholder="Type to search..."></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-with-value');
      combobox.options = `,`;
      combobox.value = 'Apple';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  `])),JSON.stringify(t))},l={render:()=>e(x||(x=o([`
    <w-combobox id="combobox-open-focus" label="Select a fruit" placeholder="Type to search..." open-on-focus></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-open-focus');
      combobox.options = `,`;
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  `])),JSON.stringify(t))},n={render:()=>e(v||(v=o([`
    <w-combobox id="combobox-text-match" label="Select a fruit" placeholder="Type to search..." match-text-segments></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-text-match');
      combobox.options = `,`;
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  `])),JSON.stringify(t))},b={render:()=>e(h||(h=o([`
    <w-combobox
      id="combobox-invalid"
      label="Select a fruit"
      placeholder="Type to search..."
      invalid
      help-text="Please select a valid fruit from the list"></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-invalid');
      combobox.options = `,`;
      combobox.value = 'Invalid fruit';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  `])),JSON.stringify(t))},r={render:()=>e(y||(y=o([`
    <w-combobox id="combobox-disabled" label="Select a fruit" placeholder="Type to search..." disabled></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-disabled');
      combobox.options = `,`;
      combobox.value = 'Apple';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  `])),JSON.stringify(t))},i={render:()=>e(f||(f=o([`
    <w-combobox id="combobox-optional" label="Select a fruit" placeholder="Type to search..." optional></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-optional');
      combobox.options = `,`;
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  `])),JSON.stringify(t))},s={render:()=>e(S||(S=o([`
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
  `])),JSON.stringify(t))};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox id="combobox-default" label="Select a fruit" placeholder="Type to search..."></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-default');
      combobox.options = \${JSON.stringify(sampleOptions)};
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  \`
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox id="combobox-with-value" label="Select a fruit" placeholder="Type to search..."></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-with-value');
      combobox.options = \${JSON.stringify(sampleOptions)};
      combobox.value = 'Apple';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  \`
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox id="combobox-open-focus" label="Select a fruit" placeholder="Type to search..." open-on-focus></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-open-focus');
      combobox.options = \${JSON.stringify(sampleOptions)};
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  \`
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox id="combobox-text-match" label="Select a fruit" placeholder="Type to search..." match-text-segments></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-text-match');
      combobox.options = \${JSON.stringify(sampleOptions)};
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  \`
}`,...n.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox
      id="combobox-invalid"
      label="Select a fruit"
      placeholder="Type to search..."
      invalid
      help-text="Please select a valid fruit from the list"></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-invalid');
      combobox.options = \${JSON.stringify(sampleOptions)};
      combobox.value = 'Invalid fruit';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  \`
}`,...b.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox id="combobox-disabled" label="Select a fruit" placeholder="Type to search..." disabled></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-disabled');
      combobox.options = \${JSON.stringify(sampleOptions)};
      combobox.value = 'Apple';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
  \`
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox id="combobox-optional" label="Select a fruit" placeholder="Type to search..." optional></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-optional');
      combobox.options = \${JSON.stringify(sampleOptions)};
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e.detail.value;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e.detail.value;
      });
    <\/script>
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
}`,...s.parameters?.docs?.source}}};const T=["Default","WithValue","OpenOnFocus","WithTextMatching","Invalid","Disabled","Optional","DisableStaticFiltering"];export{c as Default,s as DisableStaticFiltering,r as Disabled,b as Invalid,l as OpenOnFocus,i as Optional,n as WithTextMatching,a as WithValue,T as __namedExportsOrder,E as default};
