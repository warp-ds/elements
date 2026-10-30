import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{T as t,v as n,y as r}from"./decorate-r9jH0CjD.js";import{t as i}from"./pagination-Hl1NjYZ9.js";function a(){if(o.includes(window.location.hostname)){let e=`light`;return window.matchMedia(`(prefers-color-scheme: dark)`).matches&&(e=`dark`),e}}var o;function s(){return(s=e((()=>{o=[`local.blocket.se`,`local.dba.dk`,`local.finn.no`,`local.tori.fi`,`local.vend.com`,`dev.blocket.se`,`dev.dba.dk`,`dev.finn.no`,`dev.tori.fi`,`dev.vend.com`]})))()}var c;function l(){return(l=e((()=>{s(),c=class{constructor(e){this.value=a()||`light`,(this.host=e).addController(this)}hostConnected(){this._observer=new MutationObserver(()=>{this.value=document.documentElement.dataset.wTheme,this.host.requestUpdate()}),this._observer.observe(document.documentElement,{attributeFilter:[`data-w-theme`]})}hostDisconnected(){this._observer?.disconnect(),this._observer=void 0}}})))()}var u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),l(),u={title:`Utilities/Controllers`},d=class extends r{constructor(...e){super(...e),this.theme=new c(this)}render(){return t`
            <img
                alt="DBA"
                width="82"
                height="32"
                src="${this.theme.value===`dark`?`https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba-inverted.svg`:`https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba.svg`}"
            />
        `}},customElements.get(`dba-logo`)||customElements.define(`dba-logo`,d),f={render(){return t` <p>
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
            <dba-logo></dba-logo>`}},p={render(){return t`
            <p>Switch language to refresh the labels without remounting pagination. Use mobile view to see localised text "page 1"/"side 1" etc.</p>
            <button
                @click=${()=>{document.documentElement.lang=`en`}}
            >
                English
            </button>
            <button
                @click=${()=>{document.documentElement.lang=`nb`}}
            >
                Norwegian
            </button>
            <w-pagination
                current-page="5"
                pages="10"
                base-url="?page="
                @click=${e=>e.preventDefault()}
            ></w-pagination>
        `}},m=[`WarpTheme`,`ReactiveLocalization`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
            <p>Switch language to refresh the labels without remounting pagination. Use mobile view to see localised text "page 1"/"side 1" etc.</p>
            <button
                @click=\${() => {
      document.documentElement.lang = "en";
    }}
            >
                English
            </button>
            <button
                @click=\${() => {
      document.documentElement.lang = "nb";
    }}
            >
                Norwegian
            </button>
            <w-pagination
                current-page="5"
                pages="10"
                base-url="?page="
                @click=\${(event: Event) => event.preventDefault()}
            ></w-pagination>
        \`;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as ReactiveLocalization,f as WarpTheme,m as __namedExportsOrder,u as default};