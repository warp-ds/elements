import{g as r}from"./iframe-B1lh29w8.js";import{t as o}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:a,args:s,argTypes:n}=r("w-attention"),c={title:"Overlays/Attention",render(e){return`
      <w-attention ${o(e)}>
        <button
          id="popoverTarget"
          class="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target"
        >
          Click to toggle a popover
        </button>
        <span slot="message">I'm a popover</span>
      </w-attention>
    `},args:s,argTypes:n,parameters:{actions:{handles:a}}},t={args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,c as default};
