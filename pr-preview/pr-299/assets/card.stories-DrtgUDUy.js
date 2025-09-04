import{g as p,k as n}from"./iframe-D-rxdG1p.js";import{t as o}from"./utilities-DLlq11Ww.js";import"./preload-helper-Dch09mLN.js";const{events:i,args:d,argTypes:m}=p("w-card"),x={title:"Navigation/Card",render(c){return n`
      <w-card ${o(c)}>
        <div style="padding: 16px;">
          <h3>Card Title</h3>
          <p>This is card content with some example text.</p>
        </div>
      </w-card>
    `},args:d,argTypes:m,parameters:{actions:{handles:i}}},e={args:{selected:!1,flat:!1,clickable:!1}},a={args:{selected:!0,flat:!1,clickable:!1}},r={args:{selected:!1,flat:!0,clickable:!1}},s={args:{selected:!0,flat:!0,clickable:!1}},t={args:{selected:!1,flat:!1,clickable:!0}},l={args:{selected:!1,flat:!1,clickable:!0},render(c){return n`
      <w-card ${o(c)} style="max-width: 300px;">
        <img style="width: 100%; height: 200px; object-fit: cover;" src="https://source.unsplash.com/300x200" alt="Example image" />
        <div style="padding: 16px;">
          <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">DNB Eiendom</p>
          <p style="margin: 0 0 8px 0;">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.</p>
          <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">Bøgata 25C, 0655 Oslo</p>
          <p style="font-weight: bold; margin: 0;">52 m² Totalpris: 4 869 039 kr</p>
        </div>
      </w-card>
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: false,
    clickable: false
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: true,
    clickable: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: true,
    clickable: false
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  },
  render(args) {
    return html\`
      <w-card \${toAttributeString(args)} style="max-width: 300px;">
        <img style="width: 100%; height: 200px; object-fit: cover;" src="https://source.unsplash.com/300x200" alt="Example image" />
        <div style="padding: 16px;">
          <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">DNB Eiendom</p>
          <p style="margin: 0 0 8px 0;">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.</p>
          <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">Bøgata 25C, 0655 Oslo</p>
          <p style="font-weight: bold; margin: 0;">52 m² Totalpris: 4 869 039 kr</p>
        </div>
      </w-card>
    \`;
  }
}`,...l.parameters?.docs?.source}}};const b=["Default","Selected","Flat","FlatSelected","Clickable","PropertyExample"];export{t as Clickable,e as Default,r as Flat,s as FlatSelected,l as PropertyExample,a as Selected,b as __namedExportsOrder,x as default};
