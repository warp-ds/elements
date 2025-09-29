import{g as p,x as n}from"./iframe-Bs2SGwOX.js";import{s as i,p as l}from"./utilities-B4Ed2qkx.js";import"./expand-transition-CrVVr7zm.js";const{events:c,args:d,argTypes:m}=p("w-alert"),g={title:"Feedback/Alert",render(o){return n`
      <w-alert ${i(l(o))}>
        <p>This is an alert message</p>
      </w-alert>
    `},args:d,argTypes:m,parameters:{actions:{handles:c}}},r={args:{variant:"info",show:!0,role:"alert"}},e={args:{variant:"warning",show:!0,role:"alert"}},a={args:{variant:"negative",show:!0,role:"alert"}},t={args:{variant:"positive",show:!0,role:"alert"}},s={args:{variant:"info",show:!0,role:"alert"},render(o){return n`
      <w-alert ${i(l(o))}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    `}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    show: true,
    role: 'alert'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    show: true,
    role: 'alert'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    show: true,
    role: 'alert'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    show: true,
    role: 'alert'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    show: true,
    role: 'alert'
  },
  render(args) {
    return html\`
      <w-alert \${spread(prespread(args))}>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </w-alert>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const u=["Info","Warning","Negative","Positive","WithDescription"],f=Object.freeze(Object.defineProperty({__proto__:null,Info:r,Negative:a,Positive:t,Warning:e,WithDescription:s,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{f as A,r as I,a as N,t as P,e as W,s as a};
