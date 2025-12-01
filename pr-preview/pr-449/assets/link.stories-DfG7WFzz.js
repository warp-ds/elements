import{g as v,x as d}from"./iframe-CzmDAF0j.js";import{s as m,p as u}from"./utilities-DQiYQ5Dx.js";import"./index-Auiq5bkk.js";const{events:h,args:w,argTypes:f}=v("w-link"),_={title:"Buttons/Link",render(e){return d`<w-link ${m(u(e))}>Link Button Text</w-link>`},args:w,argTypes:f,parameters:{actions:{handles:h}}},r={args:{variant:"primary",href:"http://developer.mozilla.org",target:"_new"}},a={args:{variant:"secondary",href:"http://developer.mozilla.org",target:"_new"}},t={args:{variant:"negative",href:"http://developer.mozilla.org",target:"_new"}},n={args:{variant:"negativeQuiet",href:"http://developer.mozilla.org",target:"_new"}},o={args:{variant:"utility",href:"http://developer.mozilla.org",target:"_new"}},s={args:{variant:"utilityQuiet",href:"http://developer.mozilla.org",target:"_new"}},i={args:{variant:"link",href:"http://developer.mozilla.org",target:"_new"}},l={args:{variant:"pill",href:"http://developer.mozilla.org",target:"_new"},render(e){return d`<w-link ${m(u(e))}>💙</w-link>`}},p={args:{variant:"primary",small:!0,href:"http://developer.mozilla.org",target:"_new"}},g={args:{variant:"secondary",quiet:!0,href:"http://developer.mozilla.org",target:"_new"}},c={args:{variant:"primary","full-width":!0,href:"http://developer.mozilla.org",target:"_new"},render(e){return d`
      <div class="w-full flex flex-col gap-8">
        <w-link ${m(u(e))}>Full width</w-link>
      </div>
    `}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negativeQuiet',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'utility',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'utilityQuiet',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pill',
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
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    quiet: true,
    href: 'http://developer.mozilla.org',
    target: '_new'
  }
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    'full-width': true,
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
}`,...c.parameters?.docs?.source}}};const y=["Primary","Secondary","Negative","NegativeQuiet","Utility","UtilityQuiet","Link","Pill","Small","Quiet","FullWidth"],Q=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:c,Link:i,Negative:t,NegativeQuiet:n,Pill:l,Primary:r,Quiet:g,Secondary:a,Small:p,Utility:o,UtilityQuiet:s,__namedExportsOrder:y,default:_},Symbol.toStringTag,{value:"Module"}));export{c as F,Q as L,t as N,r as P,g as Q,a as S,o as U,i as a,l as b,p as c,s as d,n as e};
