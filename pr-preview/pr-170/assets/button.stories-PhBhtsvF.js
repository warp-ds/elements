import{g as y,x as d}from"./iframe-Be-bD8zp.js";import{s as l,p as g}from"./utilities-C-uX2Lmj.js";const{events:b,args:v,argTypes:S}=y("w-button"),w={title:"Buttons/Button",render(r){return d`<w-button ${l(g(r))}>Button Text</w-button>`},args:v,argTypes:S,parameters:{actions:{handles:b}}},t={args:{variant:"primary",type:"button"}},a={args:{variant:"secondary",type:"button"}},e={args:{variant:"negative",type:"button"}},n={args:{variant:"utility",type:"button"}},s={args:{variant:"link",type:"button"}},o={args:{variant:"pill",type:"button"},render(r){return d`<w-button ${l(g(r))}>💙</w-button>`}},i={args:{variant:"primary",small:!0,type:"button"}},p={args:{variant:"secondary",quiet:!0,type:"button"}},u={args:{variant:"primary",loading:!0,type:"button"}},c={args:{variant:"primary","full-width":!0,type:"button"}},m={args:{variant:"primary",href:"https://example.com",target:"_blank",type:"button"},render(r){return d`
      <div style="width: 50vw">
        <w-button ${l(g(r))}>Visit Example</w-button>
      </div>
    `}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    type: 'button'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    type: 'button'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    type: 'button'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'utility',
    type: 'button'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    type: 'button'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pill',
    type: 'button'
  },
  render(args) {
    return html\`<w-button \${spread(prespread(args))}>💙</w-button>\`;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    small: true,
    type: 'button'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    type: 'button'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    'full-width': true,
    type: 'button'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    type: 'button'
  },
  render(args) {
    return html\`
      <div style="width: 50vw">
        <w-button \${spread(prespread(args))}>Visit Example</w-button>
      </div>
    \`;
  }
}`,...m.parameters?.docs?.source}}};const h=["Primary","Secondary","Negative","Utility","Link","Pill","Small","Quiet","Loading","FullWidth","AsLink"],x=Object.freeze(Object.defineProperty({__proto__:null,AsLink:m,FullWidth:c,Link:s,Loading:u,Negative:e,Pill:o,Primary:t,Quiet:p,Secondary:a,Small:i,Utility:n,__namedExportsOrder:h,default:w},Symbol.toStringTag,{value:"Module"}));export{m as A,x as B,c as F,s as L,e as N,t as P,p as Q,a as S,n as U,o as a,i as b,u as c};
