import{g as v,x as c}from"./iframe-UZ3nd3z1.js";import{s as d,p as m}from"./utilities-CGdC7qjr.js";const{events:h,args:y,argTypes:w}=v("w-link"),f={title:"Buttons/Link",render(e){return c`<w-link ${d(m(e))}>Link Button Text</w-link>`},args:y,argTypes:w,parameters:{actions:{handles:h}}},r={args:{variant:"primary",type:"button",href:"http://developer.mozilla.org",target:"_new"}},t={args:{variant:"secondary",type:"button",href:"http://developer.mozilla.org",target:"_new"}},a={args:{variant:"negative",type:"button",href:"http://developer.mozilla.org",target:"_new"}},n={args:{variant:"negativeQuiet",type:"button",href:"http://developer.mozilla.org",target:"_new"}},o={args:{variant:"utility",type:"button",href:"http://developer.mozilla.org",target:"_new"}},s={args:{variant:"utilityQuiet",type:"button",href:"http://developer.mozilla.org",target:"_new"}},i={args:{variant:"link",type:"button",href:"http://developer.mozilla.org",target:"_new"}},l={args:{variant:"pill",type:"button",href:"http://developer.mozilla.org",target:"_new"},render(e){return c`<w-link ${d(m(e))}>💙</w-link>`}},p={args:{variant:"primary",small:!0,type:"button",href:"http://developer.mozilla.org",target:"_new"}},g={args:{variant:"secondary",quiet:!0,type:"button",href:"http://developer.mozilla.org",target:"_new"}},u={args:{variant:"primary","full-width":!0,type:"button",href:"http://developer.mozilla.org",target:"_new"},render(e){return c`
      <div class="w-full flex flex-col gap-8">
        <w-link ${d(m(e))}>Full width</w-link>
      </div>
    `}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    type: 'button',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    type: 'button',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    type: 'button',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negativeQuiet',
    type: 'button',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'utility',
    type: 'button',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'utilityQuiet',
    type: 'button',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    type: 'button',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pill',
    type: 'button',
    href: 'http://developer.mozilla.org',
    target: '_new'
  },
  render(args) {
    return html\`<w-link \${spread(prespread(args))}>💙</w-link>\`;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    small: true,
    type: 'button',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    'full-width': true,
    type: 'button',
    href: 'http://developer.mozilla.org',
    target: '_new'
  },
  render(args) {
    return html\`
      <div class="w-full flex flex-col gap-8">
        <w-link \${spread(prespread(args))}>Full width</w-link>
      </div>
    \`;
  }
}`,...u.parameters?.docs?.source}}};const _=["Primary","Secondary","Negative","NegativeQuiet","Utility","UtilityQuiet","Link","Pill","Small","Quiet","FullWidth"],S=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:u,Link:i,Negative:a,NegativeQuiet:n,Pill:l,Primary:r,Quiet:g,Secondary:t,Small:p,Utility:o,UtilityQuiet:s,__namedExportsOrder:_,default:f},Symbol.toStringTag,{value:"Module"}));export{u as F,S as L,a as N,r as P,g as Q,t as S,o as U,i as a,l as b,p as c,s as d,n as e};
