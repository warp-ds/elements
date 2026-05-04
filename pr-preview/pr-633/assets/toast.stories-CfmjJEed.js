import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{D as n,E as r,Mt as i,Ot as a,i as o,t as s}from"./iframe-tsdqjpko.js";import{i as c,n as l,r as u,t as d}from"./utilities-BEzz_HlV.js";import{t as f}from"./button-DIHxzxxU.js";var p=t({Default:()=>x,Toast:()=>C,ToastContainer:()=>S,__namedExportsOrder:()=>w,default:()=>b}),m,h,g,_,v,y,b,x,S,C,w,T=e((()=>{u(),n(),a(),d(),f(),o(),s(),{events:m,args:h,argTypes:g}=r(`w-pill`),{events:_,args:v,argTypes:y}=r(`w-toast-container`),b={title:`Overlays/Toast`},x={args:{},render(){return i`
      <w-button small onclick="window.toast('message goes here', { type: 'error', canclose: true })"> See Error Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'warning', canclose: true })"> See Warning Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'success', canclose: true })"> See Success Example </w-button>
    `}},S={args:v,render(e){return i` <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast-container ${c(l(e))}></w-toast-container>`},argTypes:y,parameters:{actions:{handles:_}}},C={args:h,render(e){return i`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast ${c(l(e))}></w-toast>
    `},argTypes:g,parameters:{actions:{handles:m}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-button small onclick="window.toast('message goes here', { type: 'error', canclose: true })"> See Error Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'warning', canclose: true })"> See Warning Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'success', canclose: true })"> See Success Example </w-button>
    \`;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`ToastContainer`,`Toast`]}));T();export{x as Default,C as Toast,S as ToastContainer,w as __namedExportsOrder,b as default,p as n,T as t};