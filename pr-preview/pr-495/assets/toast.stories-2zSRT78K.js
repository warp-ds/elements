import{g as o,b as a}from"./iframe-CloY5AoF.js";import{s as n,p as c}from"./utilities-BBFuRoR4.js";import"./button-PPnt0O16.js";const{events:p,args:l,argTypes:m}=o("w-pill"),{events:i,args:u,argTypes:g}=o("w-toast-container"),d={title:"Overlays/Toast"},e={args:{},render(){return a`
      <w-button small onclick="window.toast('message goes here', { type: 'error', canclose: true })"> See Error Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'warning', canclose: true })"> See Warning Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'success', canclose: true })"> See Success Example </w-button>
    `}},t={args:u,render(s){return a` <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast-container ${n(c(s))}></w-toast-container>`},argTypes:g,parameters:{actions:{handles:i}}},r={args:l,render(s){return a`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast ${n(c(s))}></w-toast>
    `},argTypes:m,parameters:{actions:{handles:p}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
      <w-toast-container \${spread(prespread(args))}></w-toast-container>\`;
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
      <w-toast \${spread(prespread(args))}></w-toast>
    \`;
  },
  argTypes,
  parameters: {
    actions: {
      handles: events
    }
  }
}`,...r.parameters?.docs?.source}}};const w=["Default","ToastContainer","Toast"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Toast:r,ToastContainer:t,__namedExportsOrder:w,default:d},Symbol.toStringTag,{value:"Module"}));export{e as D,T};
