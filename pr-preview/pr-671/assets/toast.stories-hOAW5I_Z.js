import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r}from"./decorate-Bt2QF_uA.js";import{n as i,r as a}from"./toast-container-BOYUxlUU.js";import{i as o,n as s,r as c}from"./utilities-BHNt5DhH.js";import{t as l}from"./button-Ct-lbunQ.js";var u=t({Default:()=>f,Toast:()=>m,ToastContainer:()=>p,__namedExportsOrder:()=>h,default:()=>d}),d,f,p,m,h;function g(){return(g=e((()=>{c(),n(),l(),a(),i(),d={title:`Overlays/Toast`},f={args:{},render(){return r`
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
        `}},p={render(e){return r` <p>
                This is here to document attributes. See the Default example for a
                complete usage example.
            </p>
            <w-toast-container ${o(s(e))}></w-toast-container>`}},m={render(e){return r`
            <p>
                This is here to document attributes. See the Default example for a
                complete usage example.
            </p>
            <w-toast ${o(s(e))}></w-toast>
        `}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\` <p>
                This is here to document attributes. See the Default example for a
                complete usage example.
            </p>
            <w-toast-container \${spread(prespread(args))}></w-toast-container>\`;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <p>
                This is here to document attributes. See the Default example for a
                complete usage example.
            </p>
            <w-toast \${spread(prespread(args))}></w-toast>
        \`;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`ToastContainer`,`Toast`]})))()}export{g as n,u as r,f as t};