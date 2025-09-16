import{g as p,x as n}from"./iframe-BsuZeubA.js";import{s as i,p as l}from"./utilities-CTp9NyaH.js";const{events:c,args:d,argTypes:g}=p("w-alert"),m={title:"Feedback/Alert",render(o){return n`
      <w-alert ${i(l(o))}>
        <p>This is an alert message</p>
      </w-alert>
    `},args:d,argTypes:g,parameters:{actions:{handles:c}}},r={args:{variant:"info",show:!0,role:"alert"}},e={args:{variant:"warning",show:!0,role:"alert"}},a={args:{variant:"negative",show:!0,role:"alert"}},s={args:{variant:"positive",show:!0,role:"alert"}},t={args:{variant:"info",show:!0,role:"alert"},render(o){return n`
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    show: true,
    role: 'alert'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const u=["Info","Warning","Negative","Positive","WithDescription"],v=Object.freeze(Object.defineProperty({__proto__:null,Info:r,Negative:a,Positive:s,Warning:e,WithDescription:t,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{v as A,r as I,a as N,s as P,e as W,t as a};
