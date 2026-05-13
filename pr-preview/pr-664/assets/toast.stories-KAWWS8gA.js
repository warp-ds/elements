import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{s as n,t as r}from"./lit-JruGAyH3.js";import{i,t as a}from"./iframe-BjQmmmds.js";import{i as o,n as s,r as c,t as l}from"./utilities-3bRBgS0D.js";import{t as u}from"./button-8kYeEKey.js";var d=t({Default:()=>p,Toast:()=>h,ToastContainer:()=>m,__namedExportsOrder:()=>g,default:()=>f}),f,p,m,h,g,_=e((()=>{c(),r(),l(),u(),i(),a(),f={title:`Overlays/Toast`},p={args:{},render(){return n`
      <w-button small onclick="window.toast('message goes here', { type: 'error', canclose: true })"> See Error Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'warning', canclose: true })"> See Warning Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'success', canclose: true })"> See Success Example </w-button>
    `}},m={render(e){return n` <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast-container ${o(s(e))}></w-toast-container>`}},h={render(e){return n`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast ${o(s(e))}></w-toast>
    `}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-button small onclick="window.toast('message goes here', { type: 'error', canclose: true })"> See Error Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'warning', canclose: true })"> See Warning Example </w-button>
      <w-button small onclick="window.toast('message goes here', { type: 'success', canclose: true })"> See Success Example </w-button>
    \`;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\` <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast-container \${spread(prespread(args))}></w-toast-container>\`;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-toast \${spread(prespread(args))}></w-toast>
    \`;
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`ToastContainer`,`Toast`]}));_();export{p as Default,h as Toast,m as ToastContainer,g as __namedExportsOrder,f as default,d as n,_ as t};