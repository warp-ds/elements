import{x as n}from"./iframe-bC05rXIF.js";import"./preload-helper-DvrX7W50.js";const l={title:"Components/Tabs"},a=()=>n`
  <w-tabs active="tab1">
    <w-tab name="tab1" label="First Tab"></w-tab>
    <w-tab name="tab2" label="Second Tab"></w-tab>
    <w-tab name="tab3" label="Third Tab"></w-tab>
  </w-tabs>

  <w-tab-panel name="tab1">
    <p>Content for the first tab. This panel is visible when the first tab is active.</p>
  </w-tab-panel>

  <w-tab-panel name="tab2" hidden>
    <p>Content for the second tab. This panel is visible when the second tab is active.</p>
  </w-tab-panel>

  <w-tab-panel name="tab3" hidden>
    <p>Content for the third tab. This panel is visible when the third tab is active.</p>
  </w-tab-panel>
`,t=()=>n`
  <w-tabs active="home">
    <w-tab name="home" label="Home">
      <span slot="icon">🏠</span>
    </w-tab>
    <w-tab name="search" label="Search">
      <span slot="icon">🔍</span>
    </w-tab>
    <w-tab name="profile" label="Profile">
      <span slot="icon">👤</span>
    </w-tab>
  </w-tabs>

  <w-tab-panel name="home">
    <p>Welcome to the home page!</p>
  </w-tab-panel>

  <w-tab-panel name="search" hidden>
    <p>Search functionality goes here.</p>
  </w-tab-panel>

  <w-tab-panel name="profile" hidden>
    <p>User profile information.</p>
  </w-tab-panel>
`,e=()=>n`
  <w-tabs active="tab1">
    <w-tab name="tab1" label="Tab 1"></w-tab>
    <w-tab name="tab2" label="Tab 2"></w-tab>
    <w-tab name="tab3" label="Tab 3"></w-tab>
    <w-tab name="tab4" label="Tab 4"></w-tab>
    <w-tab name="tab5" label="Tab 5"></w-tab>
    <w-tab name="tab6" label="Tab 6"></w-tab>
  </w-tabs>

  <w-tab-panel name="tab1">
    <p>Content for tab 1</p>
  </w-tab-panel>

  <w-tab-panel name="tab2" hidden>
    <p>Content for tab 2</p>
  </w-tab-panel>

  <w-tab-panel name="tab3" hidden>
    <p>Content for tab 3</p>
  </w-tab-panel>

  <w-tab-panel name="tab4" hidden>
    <p>Content for tab 4</p>
  </w-tab-panel>

  <w-tab-panel name="tab5" hidden>
    <p>Content for tab 5</p>
  </w-tab-panel>

  <w-tab-panel name="tab6" hidden>
    <p>Content for tab 6</p>
  </w-tab-panel>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="tab1">
    <w-tab name="tab1" label="First Tab"></w-tab>
    <w-tab name="tab2" label="Second Tab"></w-tab>
    <w-tab name="tab3" label="Third Tab"></w-tab>
  </w-tabs>

  <w-tab-panel name="tab1">
    <p>Content for the first tab. This panel is visible when the first tab is active.</p>
  </w-tab-panel>

  <w-tab-panel name="tab2" hidden>
    <p>Content for the second tab. This panel is visible when the second tab is active.</p>
  </w-tab-panel>

  <w-tab-panel name="tab3" hidden>
    <p>Content for the third tab. This panel is visible when the third tab is active.</p>
  </w-tab-panel>
\``,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="home">
    <w-tab name="home" label="Home">
      <span slot="icon">🏠</span>
    </w-tab>
    <w-tab name="search" label="Search">
      <span slot="icon">🔍</span>
    </w-tab>
    <w-tab name="profile" label="Profile">
      <span slot="icon">👤</span>
    </w-tab>
  </w-tabs>

  <w-tab-panel name="home">
    <p>Welcome to the home page!</p>
  </w-tab-panel>

  <w-tab-panel name="search" hidden>
    <p>Search functionality goes here.</p>
  </w-tab-panel>

  <w-tab-panel name="profile" hidden>
    <p>User profile information.</p>
  </w-tab-panel>
\``,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => html\`
  <w-tabs active="tab1">
    <w-tab name="tab1" label="Tab 1"></w-tab>
    <w-tab name="tab2" label="Tab 2"></w-tab>
    <w-tab name="tab3" label="Tab 3"></w-tab>
    <w-tab name="tab4" label="Tab 4"></w-tab>
    <w-tab name="tab5" label="Tab 5"></w-tab>
    <w-tab name="tab6" label="Tab 6"></w-tab>
  </w-tabs>

  <w-tab-panel name="tab1">
    <p>Content for tab 1</p>
  </w-tab-panel>

  <w-tab-panel name="tab2" hidden>
    <p>Content for tab 2</p>
  </w-tab-panel>

  <w-tab-panel name="tab3" hidden>
    <p>Content for tab 3</p>
  </w-tab-panel>

  <w-tab-panel name="tab4" hidden>
    <p>Content for tab 4</p>
  </w-tab-panel>

  <w-tab-panel name="tab5" hidden>
    <p>Content for tab 5</p>
  </w-tab-panel>

  <w-tab-panel name="tab6" hidden>
    <p>Content for tab 6</p>
  </w-tab-panel>
\``,...e.parameters?.docs?.source}}};const o=["Default","WithIcons","ManyTabs"];export{a as Default,e as ManyTabs,t as WithIcons,o as __namedExportsOrder,l as default};
