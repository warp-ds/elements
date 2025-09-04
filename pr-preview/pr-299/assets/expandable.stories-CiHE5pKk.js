import{g as p,k as d}from"./iframe-D-rxdG1p.js";import{t as i}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:c,args:m,argTypes:f}=p("w-expandable"),h={title:"Layout/Expandable",render(l){return d`
      <w-expandable ${i(l)}>
        <p>This is the expandable content that can be shown or hidden.</p>
        <p>It can contain multiple paragraphs and other elements.</p>
      </w-expandable>
    `},args:m,argTypes:f,parameters:{actions:{handles:c}}},e={args:{title:"I'm expandable",expanded:!1,box:!1,bleed:!1,animated:!1,"no-chevron":!1}},a={args:{title:"I'm expanded by default",expanded:!0,box:!1,bleed:!1,animated:!1,"no-chevron":!1}},s={args:{title:"I'm a box expandable",expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1}},n={args:{title:"I'm animated",expanded:!1,box:!0,bleed:!1,animated:!0,"no-chevron":!1}},t={args:{title:"I'm wrapped in h2",expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1,"heading-level":2}},r={args:{title:"I have no chevron",expanded:!1,box:!1,bleed:!1,animated:!1,"no-chevron":!0}},o={args:{expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1},render(l){return d`
      <w-expandable ${i(l)}>
        <div slot="title" style="display: flex; align-items: center;">
          <span style="margin-right: 8px;">🎯</span>
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </w-expandable>
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expandable",
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expanded by default",
    expanded: true,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm a box expandable",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm animated",
    expanded: false,
    box: true,
    bleed: false,
    animated: true,
    'no-chevron': false
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm wrapped in h2",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false,
    'heading-level': 2
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'I have no chevron',
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false
  },
  render(args) {
    return html\`
      <w-expandable \${toAttributeString(args)}>
        <div slot="title" style="display: flex; align-items: center;">
          <span style="margin-right: 8px;">🎯</span>
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </w-expandable>
    \`;
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","Expanded","Box","Animated","WithHeading","NoChevron","CustomTitle"];export{n as Animated,s as Box,o as CustomTitle,e as Default,a as Expanded,r as NoChevron,t as WithHeading,g as __namedExportsOrder,h as default};
