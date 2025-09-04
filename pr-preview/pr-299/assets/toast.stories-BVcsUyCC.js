import{g as a}from"./iframe-B1lh29w8.js";import{t as n}from"./utilities-DLlq11Ww.js";const{events:o,args:c,argTypes:i}=a("w-pill"),{events:l,args:g,argTypes:u}=a("w-toast-container"),p={title:"Overlays/Toast"},e={args:{},render(){return`
      <w-button
        small
        onclick="window.toast('message goes here', { type: 'error', canclose: true })"
      >
        See Error Example
      </w-button>
      <w-button
        small
        onclick="window.toast('message goes here', { type: 'warning', canclose: true })"
      >
        See Warning Example
      </w-button>
      <w-button
        small
        onclick="window.toast('message goes here', { type: 'success', canclose: true })"
      >
        See Success Example
      </w-button>
    `}},t={args:g,render(s){return`<w-toast-container ${n(s)}></w-toast-container>`},argTypes:u,parameters:{actions:{handles:l}}},r={args:c,render(s){return`<w-toast ${n(s)}></w-toast>`},argTypes:i,parameters:{actions:{handles:o}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return \`
      <w-button
        small
        onclick="window.toast('message goes here', { type: 'error', canclose: true })"
      >
        See Error Example
      </w-button>
      <w-button
        small
        onclick="window.toast('message goes here', { type: 'warning', canclose: true })"
      >
        See Warning Example
      </w-button>
      <w-button
        small
        onclick="window.toast('message goes here', { type: 'success', canclose: true })"
      >
        See Success Example
      </w-button>
    \`;
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: containerArgs,
  render(args) {
    return \`<w-toast-container \${toAttributeString(args)}></w-toast-container>\`;
  },
  argTypes: containerArgTypes,
  parameters: {
    actions: {
      handles: containerEvents
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args,
  render(args) {
    return \`<w-toast \${toAttributeString(args)}></w-toast>\`;
  },
  argTypes,
  parameters: {
    actions: {
      handles: events
    }
  }
}`,...r.parameters?.docs?.source}}};const m=["Default","ToastContainer","Toast"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Toast:r,ToastContainer:t,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{b as T};
