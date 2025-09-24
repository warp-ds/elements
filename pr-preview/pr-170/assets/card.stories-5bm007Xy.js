import{g as i,x as o}from"./iframe-CHuwHlC2.js";import{s as n,p}from"./utilities-Bg9GOKEV.js";const{events:d,args:m,argTypes:g}=i("w-card"),f={title:"Navigation/Card",render(c){return o`
      <w-card ${n(p(c))}>
        <div style="padding: 16px;">
          <h3>Card Title</h3>
          <p>This is card content with some example text.</p>
        </div>
      </w-card>
    `},args:m,argTypes:g,parameters:{actions:{handles:d}}},e={args:{selected:!1,flat:!1,clickable:!1}},a={args:{selected:!0,flat:!1,clickable:!1}},s={args:{selected:!1,flat:!0,clickable:!1}},r={args:{selected:!0,flat:!0,clickable:!1}},t={args:{selected:!1,flat:!1,clickable:!0}},l={args:{selected:!1,flat:!1,clickable:!0},render(c){return o`
      <w-card ${n(p(c))} style="max-width: 300px;">
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: true,
    clickable: false
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: true,
    clickable: false
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
      <w-card \${spread(prespread(args))} style="max-width: 300px;">
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
}`,...l.parameters?.docs?.source}}};const u=["Default","Selected","Flat","FlatSelected","Clickable","PropertyExample"],y=Object.freeze(Object.defineProperty({__proto__:null,Clickable:t,Default:e,Flat:s,FlatSelected:r,PropertyExample:l,Selected:a,__namedExportsOrder:u,default:f},Symbol.toStringTag,{value:"Module"}));export{y as C,e as D,s as F,l as P,a as S,r as a,t as b};
