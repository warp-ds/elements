import{n as e,r as t}from"./chunk-BneVvdWh.js";import{s as n,t as r}from"./lit-C07f_Bua.js";import{n as i,t as a}from"./dist-WJrQKcXy.js";import{t as o}from"./icon-3mo7c0p-.js";import{n as s,r as c}from"./i18n-CXAEKYxp.js";import{i as l,n as u,r as d,t as f}from"./utilities-pbJZRFp6.js";import{t as p}from"./button-PMms3vpZ.js";var m=t({AllVariantsGrid:()=>F,AsLink:()=>k,FormControl:()=>A,FullWidth:()=>O,HrefModeRegression:()=>R,Link:()=>C,Loading:()=>D,LoadingAcrossVariants:()=>L,Negative:()=>x,Overlay:()=>j,OverlayInverted:()=>M,OverlayInvertedQuiet:()=>P,OverlayQuiet:()=>N,Pill:()=>w,Primary:()=>y,Quiet:()=>E,QuietBackCompatMapping:()=>I,Secondary:()=>b,Small:()=>T,Utility:()=>S,__namedExportsOrder:()=>z,default:()=>v}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B=e((()=>{d(),i(),r(),f(),p(),o(),c(),{events:h,args:g,argTypes:_}=a(`w-button`),v={title:`Buttons/Button`,render(e){return n`<w-button ${l(u(e))}>Button Text</w-button>`},args:g,argTypes:_,parameters:{actions:{handles:h}}},y={args:{variant:`primary`,type:`button`}},b={args:{variant:`secondary`,type:`button`}},x={args:{variant:`negative`,type:`button`}},S={args:{variant:`utility`,type:`button`}},C={args:{variant:`link`,type:`button`}},w={args:{variant:`pill`,type:`button`},render(e){let t=s();return n`<w-button ${l(u(e))}>
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
    `}},j={args:{variant:`overlay`,type:`button`}},M={args:{variant:`overlayInverted`,type:`button`}},N={args:{variant:`overlayQuiet`,type:`button`}},P={args:{variant:`overlayInvertedQuiet`,type:`button`}},F={args:{},render(){let e=s();return n`
      <div style="display:grid; gap: 16px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          Grid for visual regression checking (hover states / padding / icon colors).
        </div>

        <div style="display:grid; gap: 12px;">
          ${[`primary`,`secondary`,`negative`,`negativeQuiet`,`utility`,`utilityQuiet`,`quiet`,`link`,`pill`,`overlay`,`overlayInverted`,`overlayQuiet`,`overlayInvertedQuiet`].map(t=>n`
              <div style="display:flex; align-items:center; gap: 12px; flex-wrap: wrap;">
                <div style="width: 210px; font: 12px/1.4 system-ui; opacity: 0.8;">variant="${t}"</div>

                <w-button variant=${t} type="button">Label</w-button>

                ${t===`pill`?n`
                      <w-button variant="pill" type="button" icon-only aria-label="Pill icon">
                        <w-icon
                          name="Heart"
                          size="small"
                          locale="${e}"
                          style="height: 16px;"
                          class="flex"
                        ></w-icon>
                      </w-button>
                    `:null}
              </div>
            `)}
        </div>
      </div>
    `}},I={args:{},render(){return n`
      <div style="display:grid; gap: 12px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          These should look like their corresponding <code>*Quiet</code> variants.
        </div>

        <div style="display:flex; gap: 12px; flex-wrap: wrap;">
          <w-button variant="negative" quiet type="button">negative + quiet</w-button>
          <w-button variant="utility" quiet type="button">utility + quiet</w-button>
          <w-button variant="overlay" quiet type="button">overlay + quiet</w-button>
          <w-button variant="overlayInverted" quiet type="button">overlayInverted + quiet</w-button>
          <w-button variant="secondary" quiet type="button">secondary + quiet</w-button>
        </div>
      </div>
    `}},L={args:{},render(){return n`
      <div style="display:grid; gap: 16px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          Loading should look the same no matter the variant.
        </div>

        <div style="display:flex; flex-wrap: wrap; gap: 12px;">
          ${[`primary`,`secondary`,`negative`,`negativeQuiet`,`utility`,`utilityQuiet`,`quiet`,`link`,`overlay`,`overlayInverted`,`overlayQuiet`,`overlayInvertedQuiet`,`pill`].map(e=>n`<w-button variant=${e} loading type="button">${e}</w-button>`)}
        </div>
      </div>
    `}},R={args:{},render(){return n`
      <div style="display:grid; gap: 12px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          <code>w-button[href]</code> renders <code>w-link</code> (backwards compatibility path).
          Hover these and check for unwanted gray backgrounds / padding.
        </div>

        <div style="display:flex; gap: 12px; flex-wrap: wrap;">
          <w-button variant="primary" href="https://example.com" target="_blank" type="button">primary href</w-button>
          <w-button variant="overlay" href="https://example.com" target="_blank" type="button">overlay href</w-button>
          <w-button variant="overlayQuiet" href="https://example.com" target="_blank" type="button"
            >overlayQuiet href</w-button
          >
          <w-button variant="overlayInvertedQuiet" href="https://example.com" target="_blank" type="button"
            >overlayInvertedQuiet href</w-button
          >
          <w-button variant="link" href="https://example.com" target="_blank" type="button">link href</w-button>
        </div>
      </div>
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
    type: 'button'
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'overlay',
    type: 'button'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'overlayInverted',
    type: 'button'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'overlayQuiet',
    type: 'button'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'overlayInvertedQuiet',
    type: 'button'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    const locale = detectLocale();
    const variants: Array<WarpButton['variant']> = ['primary', 'secondary', 'negative', 'negativeQuiet', 'utility', 'utilityQuiet', 'quiet', 'link', 'pill', 'overlay', 'overlayInverted', 'overlayQuiet', 'overlayInvertedQuiet'];
    return html\`
      <div style="display:grid; gap: 16px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          Grid for visual regression checking (hover states / padding / icon colors).
        </div>

        <div style="display:grid; gap: 12px;">
          \${variants.map(v => html\`
              <div style="display:flex; align-items:center; gap: 12px; flex-wrap: wrap;">
                <div style="width: 210px; font: 12px/1.4 system-ui; opacity: 0.8;">variant="\${v}"</div>

                <w-button variant=\${v} type="button">Label</w-button>

                \${v === 'pill' ? html\`
                      <w-button variant="pill" type="button" icon-only aria-label="Pill icon">
                        <w-icon
                          name="Heart"
                          size="small"
                          locale="\${locale}"
                          style="height: 16px;"
                          class="flex"
                        ></w-icon>
                      </w-button>
                    \` : null}
              </div>
            \`)}
        </div>
      </div>
    \`;
  }
}`,...F.parameters?.docs?.source},description:{story:`Helpful grid to spot:
- hover backgrounds (especially link + quiet variants)
- pill icon color regressions
- any padding/outline oddities`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <div style="display:grid; gap: 12px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          These should look like their corresponding <code>*Quiet</code> variants.
        </div>

        <div style="display:flex; gap: 12px; flex-wrap: wrap;">
          <w-button variant="negative" quiet type="button">negative + quiet</w-button>
          <w-button variant="utility" quiet type="button">utility + quiet</w-button>
          <w-button variant="overlay" quiet type="button">overlay + quiet</w-button>
          <w-button variant="overlayInverted" quiet type="button">overlayInverted + quiet</w-button>
          <w-button variant="secondary" quiet type="button">secondary + quiet</w-button>
        </div>
      </div>
    \`;
  }
}`,...I.parameters?.docs?.source},description:{story:"Confirms backwards compat mapping for the deprecated `quiet` flag.\nEspecially relevant for overlay/overlayInverted and negative/utility.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    const variants: Array<WarpButton['variant']> = ['primary', 'secondary', 'negative', 'negativeQuiet', 'utility', 'utilityQuiet', 'quiet', 'link', 'overlay', 'overlayInverted', 'overlayQuiet', 'overlayInvertedQuiet', 'pill'];
    return html\`
      <div style="display:grid; gap: 16px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          Loading should look the same no matter the variant.
        </div>

        <div style="display:flex; flex-wrap: wrap; gap: 12px;">
          \${variants.map(v => html\`<w-button variant=\${v} loading type="button">\${v}</w-button>\`)}
        </div>
      </div>
    \`;
  }
}`,...L.parameters?.docs?.source},description:{story:`Loading should be consistent across variants (disabled-like + stripes).
This story makes it obvious if a variant leaks hover/background/color into loading.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <div style="display:grid; gap: 12px;">
        <div style="font: 12px/1.4 system-ui; opacity: 0.8;">
          <code>w-button[href]</code> renders <code>w-link</code> (backwards compatibility path).
          Hover these and check for unwanted gray backgrounds / padding.
        </div>

        <div style="display:flex; gap: 12px; flex-wrap: wrap;">
          <w-button variant="primary" href="https://example.com" target="_blank" type="button">primary href</w-button>
          <w-button variant="overlay" href="https://example.com" target="_blank" type="button">overlay href</w-button>
          <w-button variant="overlayQuiet" href="https://example.com" target="_blank" type="button"
            >overlayQuiet href</w-button
          >
          <w-button variant="overlayInvertedQuiet" href="https://example.com" target="_blank" type="button"
            >overlayInvertedQuiet href</w-button
          >
          <w-button variant="link" href="https://example.com" target="_blank" type="button">link href</w-button>
        </div>
      </div>
    \`;
  }
}`,...R.parameters?.docs?.source},description:{story:`This targets the known tricky path:
w-button with href renders w-link (back-compat).
Great for spotting:
- hover gray bg (should not happen for "link" look)
- double padding when link is rendered inside button styling assumptions`,...R.parameters?.docs?.description}}},z=[`Primary`,`Secondary`,`Negative`,`Utility`,`Link`,`Pill`,`Small`,`Quiet`,`Loading`,`FullWidth`,`AsLink`,`FormControl`,`Overlay`,`OverlayInverted`,`OverlayQuiet`,`OverlayInvertedQuiet`,`AllVariantsGrid`,`QuietBackCompatMapping`,`LoadingAcrossVariants`,`HrefModeRegression`]}));B();export{F as AllVariantsGrid,k as AsLink,A as FormControl,O as FullWidth,R as HrefModeRegression,C as Link,D as Loading,L as LoadingAcrossVariants,x as Negative,j as Overlay,M as OverlayInverted,P as OverlayInvertedQuiet,N as OverlayQuiet,w as Pill,y as Primary,E as Quiet,I as QuietBackCompatMapping,b as Secondary,T as Small,S as Utility,z as __namedExportsOrder,v as default,B as n,m as t};