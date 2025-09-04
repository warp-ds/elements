import{g as o,k as s}from"./iframe-D-rxdG1p.js";import{t as n}from"./utilities-DLlq11Ww.js";const{events:c,args:l,argTypes:i}=o("w-pill"),{events:p,args:u,argTypes:m}=o("w-toast-container"),g={title:"Overlays/Toast"},e={args:{},render(){return s`
      <w-button small onclick="window.toast('message goes here', { type: 'error', canclose: true })"> See Error Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'warning', canclose: true })"> See Warning Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'success', canclose: true })"> See Success Example </w-button>
    `}},t={args:u,render(a){return s` <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast-container ${n(a)}></w-toast-container>`},argTypes:m,parameters:{actions:{handles:p}}},r={args:l,render(a){return s`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast ${n(a)}></w-toast>
    `},argTypes:i,parameters:{actions:{handles:c}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-button small onclick="window.toast('message goes here', { type: 'error', canclose: true })"> See Error Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'warning', canclose: true })"> See Warning Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'success', canclose: true })"> See Success Example </w-button>
    \`;
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: containerArgs,
  render(args) {
    return html\` <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast-container \${toAttributeString(args)}></w-toast-container>\`;
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
    return html\`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast \${toAttributeString(args)}></w-toast>
    \`;
  },
  argTypes,
  parameters: {
    actions: {
      handles: events
    }
  }
}`,...r.parameters?.docs?.source}}};const w=["Default","ToastContainer","Toast"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Toast:r,ToastContainer:t,__namedExportsOrder:w,default:g},Symbol.toStringTag,{value:"Module"}));export{e as D,b as T};
