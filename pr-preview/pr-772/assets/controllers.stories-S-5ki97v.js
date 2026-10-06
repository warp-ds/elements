import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,n,t as r}from"./lit-BcpSydpl.js";function i(){if(a.includes(window.location.hostname)){let e=`light`;return window.matchMedia(`(prefers-color-scheme: dark)`).matches&&(e=`dark`),e}}var a;function o(){return(o=e((()=>{a=[`local.blocket.se`,`local.dba.dk`,`local.finn.no`,`local.tori.fi`,`local.vend.com`]})))()}var s;function c(){return(c=e((()=>{o(),s=class{constructor(e){this.value=i()||`light`,(this.host=e).addController(this)}hostConnected(){this._observer=new MutationObserver(()=>{this.value=document.documentElement.dataset.wTheme,this.host.requestUpdate()}),this._observer.observe(document.documentElement,{attributeFilter:[`data-w-theme`]})}hostDisconnected(){this._observer?.disconnect(),this._observer=void 0}}})))()}var l,u,d,f;function p(){return(p=e((()=>{r(),c(),l={title:`Utilities/Controllers`},u=class extends n{constructor(...e){super(...e),this.theme=new s(this)}render(){return t`
            <img
                alt="DBA"
                width="82"
                height="32"
                src="${this.theme.value===`dark`?`https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba-inverted.svg`:`https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba.svg`}"
            />
        `}},customElements.get(`dba-logo`)||customElements.define(`dba-logo`,u),d={render(){return t` <p>
                This storybook example looks awful, but is here to test that the
                reactive controller does its thing (change the URL of the img tag for
                the DBA logo).
            </p>
            <div style="margin-bottom: 16px">
                <button
                    @click=${()=>{document.documentElement.dataset.wTheme=`light`}}
                >
                    Set data-w-theme to light
                </button>
                <button
                    @click=${()=>{document.documentElement.dataset.wTheme=`dark`}}
                >
                    Set data-w-theme to dark
                </button>
            </div>
            <dba-logo></dba-logo>`}},f=[`WarpTheme`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render() {
    return html\` <p>
                This storybook example looks awful, but is here to test that the
                reactive controller does its thing (change the URL of the img tag for
                the DBA logo).
            </p>
            <div style="margin-bottom: 16px">
                <button
                    @click=\${() => {
      document.documentElement.dataset.wTheme = "light";
    }}
                >
                    Set data-w-theme to light
                </button>
                <button
                    @click=\${() => {
      document.documentElement.dataset.wTheme = "dark";
    }}
                >
                    Set data-w-theme to dark
                </button>
            </div>
            <dba-logo></dba-logo>\`;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as WarpTheme,f as __namedExportsOrder,l as default};