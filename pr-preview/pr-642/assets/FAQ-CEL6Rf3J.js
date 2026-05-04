import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-DGxk81KK.js";import{t as r}from"./mdx-react-shim-fao0Lwfg.js";function i(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`frequently-asked-questions`,children:`Frequently Asked Questions`}),`
`,(0,o.jsx)(t.h2,{id:`how-do-i-get-intellisense-for-warp-elements`,children:`How do I get IntelliSense for Warp Elements?`}),`
`,(0,o.jsxs)(t.p,{children:[`Install the `,(0,o.jsx)(t.a,{href:`https://wc-toolkit.com/integrations/web-components-language-server/`,rel:`nofollow`,children:`Web Components Language Server`}),` extension (available in several editors).`]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:`https://marketplace.visualstudio.com/items?itemName=wc-toolkit.web-components-language-server`,rel:`nofollow`,children:`VS Code`})}),`
`,(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:`https://plugins.jetbrains.com/plugin/29094-web-components-language-server`,rel:`nofollow`,children:`JetBrains products`})}),`
`,(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:`https://open-vsx.org/extension/wc-toolkit/web-components-language-server`,rel:`nofollow`,children:`VSCodium and other VSCode forks`})}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[`The extension automatically picks up the `,(0,o.jsx)(t.a,{href:`https://wc-toolkit.com/getting-started/`,rel:`nofollow`,children:`Custom Element Manifest`}),` that we ship with `,(0,o.jsx)(t.code,{children:`@warp-ds/elements`}),`.`]}),`
`,(0,o.jsx)(t.h2,{id:`why-are-inputs-and-buttons-not-clickable-in-my-modal-or-drawer-component`,children:`Why are inputs and buttons not clickable in my modal or drawer component?`}),`
`,(0,o.jsxs)(t.p,{children:[`If you use a `,(0,o.jsx)(t.a,{href:`https://css-tricks.com/a-primer-on-focus-trapping/`,rel:`nofollow`,children:`focus trap`}),`, or you use a dependency that does, that focus trap might need extra configuration to work with custom elements.`]}),`
`,(0,o.jsxs)(t.p,{children:[`For example, the `,(0,o.jsx)(t.a,{href:`https://github.com/focus-trap/focus-trap#shadow-dom`,rel:`nofollow`,children:`focus-trap module`}),` used by `,(0,o.jsx)(t.a,{href:`https://github.com/stipsan/react-spring-bottom-sheet`,rel:`nofollow`,children:`react-spring-bottom-sheet`}),` will not work with custom elements by default. It thinks clicks inside a custom element is outside of the focus trap, and so cancels the click.`]}),`
`,(0,o.jsxs)(t.p,{children:[`Another quirk with `,(0,o.jsx)(t.code,{children:`react-spring-bottom-sheet`}),` is that its focus trap doesn't support re-renders in its current version (`,(0,o.jsx)(t.code,{children:`3.4.1`}),`) due to an out-of-date `,(0,o.jsx)(t.code,{children:`focus-trap`}),` version. If you use that dependency, override the version of `,(0,o.jsx)(t.code,{children:`focus-trap`}),` to a minimum of `,(0,o.jsx)(t.a,{href:`https://github.com/focus-trap/focus-trap/blob/master/CHANGELOG.md#742`,rel:`nofollow`,children:`7.4.2`}),`.`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-json`,children:`{
  "overrides": {
    "focus-trap": "^7.4.2"
  }
}
`})}),`
`,(0,o.jsxs)(t.p,{children:[`If you run into this problem in a dependency, either work with the maintainer to fix the problem, replace the dependency, patch it locally to add `,(0,o.jsx)(t.code,{children:`tabbableOptions:{getShadowRoot: true}`}),` after `,(0,o.jsx)(t.code,{children:`clickOutsideDeactivates:!1`}),`, or fork it to add support.`]}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-js`,children:`const fallback = fallbackRef.current
const trap = createFocusTrap(targetRef.current, {
  // tabbableOptions.getShadowRoot is required in \`focus-trap\` when using custom elements
  tabbableOptions: {
    getShadowRoot: true,
  },
  initialFocus: initialFocusRef
    ? () => initialFocusRef?.current || fallback
    : undefined,
  fallbackFocus: fallback,
  escapeDeactivates: false,
  clickOutsideDeactivates: false,
})
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=t(),r()}))();export{a as default};