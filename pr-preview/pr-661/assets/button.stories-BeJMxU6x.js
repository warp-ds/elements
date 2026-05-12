import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{s as n,t as r}from"./lit-JruGAyH3.js";import{n as i,t as a}from"./dist-DqaB6mbc.js";import{t as o}from"./icon-C7QoHWvn.js";import{n as s,r as c}from"./i18n-CXvrc2gG.js";import{i as l,n as u,r as d,t as f}from"./utilities-DiPTmiiI.js";import{t as p}from"./button-8kYeEKey.js";var m=t({AsLink:()=>k,FormControl:()=>A,FullWidth:()=>O,Link:()=>C,Loading:()=>D,Negative:()=>x,Pill:()=>w,Primary:()=>y,Quiet:()=>E,Secondary:()=>b,Small:()=>T,Utility:()=>S,__namedExportsOrder:()=>j,default:()=>v}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{d(),i(),r(),f(),p(),o(),c(),{events:h,args:g,argTypes:_}=a(`w-button`),v={title:`Buttons/Button`,render(e){return n`<w-button ${l(u(e))}>Button Text</w-button>`},args:g,argTypes:_,parameters:{actions:{handles:h}}},y={args:{variant:`primary`,type:`button`}},b={args:{variant:`secondary`,type:`button`}},x={args:{variant:`negative`,type:`button`}},S={args:{variant:`utility`,type:`button`}},C={args:{variant:`link`,type:`button`,href:`https://developer.mozilla.org/en-US/docs/Web/API/Web_components`,target:`_new`}},w={args:{variant:`pill`,type:`button`},render(e){let t=s();return n`<w-button ${l(u(e))}>
        <w-icon name="ChevronLeft" size="small" locale="${t}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${l(u(e))}>
        <w-icon name="Close" size="small" locale="${t}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${l(u(e))}>
        <w-icon name="Heart" size="small" locale="${t}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${l(u(e))}>
        <w-icon name="ChevronRight" size="small" locale="${t}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <br />
      <w-button ${l(u(e))} small="">
        <w-icon name="ChevronLeft" size="small" locale="${t}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${l(u(e))} small="">
        <w-icon name="Close" size="small" locale="${t}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${l(u(e))} small="">
        <w-icon name="Heart" size="small" locale="${t}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${l(u(e))} small="">
        <w-icon name="ChevronRight" size="small" locale="${t}" style="height: 16px;" class="flex"></w-icon>
      </w-button>`}},T={args:{variant:`primary`,small:!0,type:`button`}},E={args:{variant:`secondary`,quiet:!0,type:`button`}},D={args:{variant:`primary`,loading:!0,type:`button`}},O={args:{variant:`primary`,"full-width":!0,type:`button`},render(e){return n`
      <div class="w-full flex flex-col gap-8">
        <w-button ${l(u(e))}>Full width</w-button>
      </div>
    `}},k={args:{variant:`primary`,href:`https://example.com`,target:`_blank`,type:`button`},render(e){return n`<w-button ${l(u(e))}>Visit Example</w-button>`}},A={args:{},render(){return n`
      <form name="form-control">
        <input type="text" value="I am an input field" name="demoValue" style="border: 1px solid lime" />
        <w-button type="reset" name="resetButton" value="fooyoo">Reset</w-button>
        <w-button type="submit" name="submuitButtton" value="fooyoo">Send thing</w-button>
      </form>
    `}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    type: 'button'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    type: 'button'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    type: 'button'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'utility',
    type: 'button'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    type: 'button',
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_components',
    target: '_new'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pill',
    type: 'button'
  },
  render(args) {
    const locale = detectLocale();
    return html\`<w-button \${spread(prespread(args))}>
        <w-icon name="ChevronLeft" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))}>
        <w-icon name="Close" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))}>
        <w-icon name="Heart" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))}>
        <w-icon name="ChevronRight" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <br />
      <w-button \${spread(prespread(args))} small="">
        <w-icon name="ChevronLeft" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))} small="">
        <w-icon name="Close" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))} small="">
        <w-icon name="Heart" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))} small="">
        <w-icon name="ChevronRight" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>\`;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    small: true,
    type: 'button'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    type: 'button'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    'full-width': true,
    type: 'button'
  },
  render(args) {
    return html\`
      <div class="w-full flex flex-col gap-8">
        <w-button \${spread(prespread(args))}>Full width</w-button>
      </div>
    \`;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    type: 'button'
  },
  render(args) {
    return html\`<w-button \${spread(prespread(args))}>Visit Example</w-button>\`;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form name="form-control">
        <input type="text" value="I am an input field" name="demoValue" style="border: 1px solid lime" />
        <w-button type="reset" name="resetButton" value="fooyoo">Reset</w-button>
        <w-button type="submit" name="submuitButtton" value="fooyoo">Send thing</w-button>
      </form>
    \`;
  }
}`,...A.parameters?.docs?.source}}},j=[`Primary`,`Secondary`,`Negative`,`Utility`,`Link`,`Pill`,`Small`,`Quiet`,`Loading`,`FullWidth`,`AsLink`,`FormControl`]}));M();export{k as AsLink,A as FormControl,O as FullWidth,C as Link,D as Loading,x as Negative,w as Pill,y as Primary,E as Quiet,b as Secondary,T as Small,S as Utility,j as __namedExportsOrder,v as default,M as n,m as t};