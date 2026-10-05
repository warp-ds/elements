import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{C as n,f as r,h as i,p as a,r as o,s,t as c,y as l}from"./decorate-kJVNAdyH.js";import{a as u,o as d,r as f,t as p}from"./i18n-DxEA2sVo.js";import{n as m,t as h}from"./dist-Bn_0n649.js";import{n as g,t as _}from"./styles-BxpTFSox.js";import{i as v,n as y,r as b}from"./utilities-DyUKeeub.js";function x(e,t){return e.flatMap(e=>[e,t]).slice(0,-1)}var S;function C(){return(C=e((()=>{S=JSON.parse(`{"breadcrumbs.ariaLabel":["Du er her"]}`)})))()}var w;function T(){return(T=e((()=>{w=JSON.parse(`{"breadcrumbs.ariaLabel":["You are here"]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"breadcrumbs.ariaLabel":["Olet tässä"]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"breadcrumbs.ariaLabel":["Her er du"]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"breadcrumbs.ariaLabel":["Du är här"]}`)})))()}var M;function N(){return(N=e((()=>{r(),M=n`
	.sr-only {
		clip: rect(0px, 0px, 0px, 0px);
		white-space: nowrap;
		border-width: 0px;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0px;
		position: absolute;
		overflow: hidden;
	}
	[part="trail"] {
		display: flex;
	}
	[part="trail"] > :not([hidden]) ~ :not([hidden]) {
		--w-space-x-reverse: 0;
		margin-left: calc(0.8rem * calc(1 - var(--w-space-x-reverse)));
		margin-right: calc(0.8rem * var(--w-space-x-reverse));
	}
	.legacy-separator {
		-webkit-user-select: none;
		user-select: none;
		color: var(--w-s-color-icon);
	}
	.legacy-trail-segment-link {
		color: var(--w-s-color-text-link);
		cursor: pointer;
		text-decoration: none;
	}
	.legacy-trail-segment-text {
		color: var(--w-s-color-text);
	}
`})))()}var P,F;function I(){return(I=e((()=>{d(),r(),f(),_(),C(),T(),D(),k(),j(),N(),P=l`<span class="legacy-separator">/</span>`,F=class extends a{static{this.styles=[g,M]}constructor(){super(),this._children=[],this._internals=this.attachInternals(),p(w,O,E,S,A),this._defaultLabel=u._({id:`breadcrumbs.ariaLabel`,message:`You are here`,comment:`Default screen reader message for the breadcrumb component`}),this._internals.ariaLabel=this._defaultLabel}get _label(){return this.ariaLabel??this._defaultLabel}connectedCallback(){super.connectedCallback(),this._internals.role=`navigation`;let e=this.querySelectorAll(`:scope > a`),t=this.querySelectorAll(`:scope > span`),n=this.querySelectorAll(`w-breadcrumb-item`);n.length>0&&(e.length>0||t.length>0)&&console.warn(`Mixing Legacy API and w-breadcrumb-item API children is not supported.`);let r=0,i=!1;n.forEach((e,t)=>{e.hasAttribute(`current-page`)&&(t<n.length-1&&(i=!0),r++)}),r>1&&console.warn(`Please ensure only one w-breadcrumb-item has the current-page attribute.`),i&&console.warn(`The current-page attribute should only be used on the final breadcrumb item.`);let a=[...this.children].filter(e=>e&&e.tagName!==`W-BREADCRUMB-ITEM`).flat(1/0).filter(e=>e).map((e,t)=>{if(typeof e==`string`){let n=t===this.children.length-1;return l`<span
					class="legacy-trail-segment-text"
					aria-current=${n?`page`:void 0}
					>${e}</span
				>`}return e.classList.add(e.tagName===`A`?`legacy-trail-segment-link`:`legacy-trail-segment-text`),e});this._children=x(a,P)}render(){return l`
			<nav part="base" aria-labelledby="breadCrumbLabel">
				<h2 id="breadCrumbLabel" class="sr-only">${this._label}</h2>
				<div part="trail">${this._children}<slot></slot></div>
			</nav>
		`}},customElements.get(`w-breadcrumbs`)||customElements.define(`w-breadcrumbs`,F)})))()}var L;function R(){return(R=e((()=>{r(),L=n`
	:host {
		display: inline-block;

		/* Internal resolved vars (defaults) */
		--_link-color: var(
			--w-c-breadcrumb-item-link-color,
			var(--w-s-color-text-link)
		);
		--_text-color: var(--w-c-breadcrumb-item-text-color, var(--w-s-color-text));
		--_separator-color: var(
			--w-c-breadcrumb-item-separator-color,
			var(--w-s-color-icon)
		);
		--_separator-spacing: var(--w-c-breadcrumb-item-separator-spacing, 0.8rem);
		--_font-size: var(--w-c-breadcrumb-item-font-size);
		--_line-height: var(--w-c-breadcrumb-item-line-height, 1.5);
		--_font-weight: var(--w-c-breadcrumb-item-font-weight, 400);
		--_padding-x: var(--w-c-breadcrumb-item-padding-x, 0);
		--_padding-y: var(--w-c-breadcrumb-item-padding-y, 0);
		--_link-color-hover: var(
			--w-c-breadcrumb-item-link-color-hover,
			var(--w-s-color-text-link)
		);
		--_link-color-active: var(
			--w-c-breadcrumb-item-link-color-active,
			var(--w-s-color-text-link)
		);
		--_outline-color: var(
			--w-c-breadcrumb-item-outline-color,
			var(--w-s-color-border-focus)
		);
		--_outline-width: var(--w-c-breadcrumb-item-outline-width, 2px);
		--_outline-offset: var(--w-c-breadcrumb-item-outline-offset, 1px);
	}

	:host(:not(:last-of-type))::after {
		display: inline-block;
		content: "/" / "";
		color: var(--_separator-color);
		-webkit-user-select: none;
		user-select: none;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		font-weight: var(--_font-weight);
		margin-left: var(--_separator-spacing);
		margin-right: var(--_separator-spacing);
	}

	.s-text {
		color: var(--_text-color);
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		font-weight: var(--_font-weight);
	}
	.s-text-link {
		color: var(--_link-color);
		text-decoration: none;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		font-weight: var(--_font-weight);
		padding-left: var(--_padding-x);
		padding-right: var(--_padding-x);
		padding-top: var(--_padding-y);
		padding-bottom: var(--_padding-y);
	}
	.s-text-link:hover {
		text-decoration: underline;
		color: var(--_link-color-hover);
	}
	.s-text-link:active {
		color: var(--_link-color-active);
	}
	.s-text-link:focus {
		outline-color: var(--_outline-color);
		outline-width: var(--_outline-width);
		outline-offset: var(--_outline-offset);
	}
`})))()}var z;function B(){return(B=e((()=>{r(),o(),R(),_(),z=class extends a{constructor(...e){super(...e),this.currentPage=!1,this.href=null}static{this.styles=[g,L]}get link(){return this.href?l`<a
					part="link"
					class="s-text-link"
					href=${this.href}
					aria-current=${this.currentPage?`page`:i}
					><slot></slot
				></a>`:l`<span
					part="text"
					class="s-text"
					aria-current=${this.currentPage?`page`:i}
					><slot></slot
				></span>`}render(){return l`${this.link}`}},c([s({type:Boolean,attribute:`current-page`})],z.prototype,`currentPage`,void 0),c([s({type:String})],z.prototype,`href`,void 0),customElements.get(`w-breadcrumb-item`)||customElements.define(`w-breadcrumb-item`,z)})))()}var V=t({Default:()=>G,LegacyChildren:()=>Y,WithLinks:()=>K,WithSpanForCurrentPage:()=>q,WithoutCurrentPageInTrail:()=>J,__namedExportsOrder:()=>X,default:()=>W}),H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{b(),m(),r(),I(),B(),{events:H,argTypes:U}=h(`w-breadcrumbs`),W={title:`Navigation/Breadcrumbs`,render(e){return l`
            <w-breadcrumbs ${v(y(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        `},args:{"aria-label":`You are here`},argTypes:U,parameters:{actions:{handles:H}}},G={},K={render(e){return l`
            <w-breadcrumbs ${v(y(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item href="#" current-page
                    >Current page</w-breadcrumb-item
                >
            </w-breadcrumbs>
        `}},q={render(e){return l`
            <w-breadcrumbs ${v(y(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        `}},J={render(e){return l`
            <w-breadcrumbs ${v(y(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
            </w-breadcrumbs>
            <h2>Current page</h2>
        `}},Y={render(e){return l`
            <w-breadcrumbs ${v(y(e))}>
                <a href="#/home">Home</a>
                <a href="#/category">Category</a>
                <span aria-current="page">Item</span>
            </w-breadcrumbs>
        `}},X=[`Default`,`WithLinks`,`WithSpanForCurrentPage`,`WithoutCurrentPageInTrail`,`LegacyChildren`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <w-breadcrumbs \${spread(prespread(args))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item href="#" current-page
                    >Current page</w-breadcrumb-item
                >
            </w-breadcrumbs>
        \`;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <w-breadcrumbs \${spread(prespread(args))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        \`;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <w-breadcrumbs \${spread(prespread(args))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
            </w-breadcrumbs>
            <h2>Current page</h2>
        \`;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <w-breadcrumbs \${spread(prespread(args))}>
                <a href="#/home">Home</a>
                <a href="#/category">Category</a>
                <span aria-current="page">Item</span>
            </w-breadcrumbs>
        \`;
  }
}`,...Y.parameters?.docs?.source}}}})))()}export{V as a,J as i,K as n,Z as o,q as r,G as t};