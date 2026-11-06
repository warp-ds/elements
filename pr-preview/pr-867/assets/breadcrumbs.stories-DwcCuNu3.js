import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{T as n,_ as r,a as i,d as a,g as o,i as s,k as c,r as l,t as u,v as d,x as f,y as p}from"./decorate-r9jH0CjD.js";import{n as m,t as h}from"./dist-gZ_m6TlA.js";import{r as g,t as _}from"./i18n-CH8KbyPD.js";import{n as v,t as y}from"./styles-zocEQ6mS.js";import{i as b,n as x,r as S}from"./utilities-DPMir1kO.js";function C(e,t){return e.flatMap(e=>[e,t]).slice(0,-1)}var w;function T(){return(T=e((()=>{w=JSON.parse(`{"breadcrumbs.ariaLabel":["Du er her"]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"breadcrumbs.ariaLabel":["You are here"]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"breadcrumbs.ariaLabel":["Olet tässä"]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"breadcrumbs.ariaLabel":["Her er du"]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"breadcrumbs.ariaLabel":["Du är här"]}`)})))()}var P;function F(){return(F=e((()=>{d(),P=c`
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
		flex-wrap: wrap;
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
`})))()}var I,L;function R(){return(R=e((()=>{r(),d(),s(),g(),y(),T(),D(),k(),j(),N(),F(),I=n`<span class="legacy-separator">/</span>`,L=class extends p{static{this.styles=[v,P]}get _defaultLabel(){return o._({id:`breadcrumbs.ariaLabel`,message:`You are here`,comment:`Default screen reader message for the breadcrumb component`})}constructor(){super(),this._children=[],new l(this),this._internals=this.attachInternals(),_(E,A,O,w,M)}get _label(){return this.ariaLabel??this._defaultLabel}connectedCallback(){super.connectedCallback(),this._internals.role=`navigation`;let e=this.querySelectorAll(`:scope > a`),t=this.querySelectorAll(`:scope > span`),r=this.querySelectorAll(`w-breadcrumb-item`);r.length>0&&(e.length>0||t.length>0)&&console.warn(`Mixing Legacy API and w-breadcrumb-item API children is not supported.`);let i=0,a=!1;r.forEach((e,t)=>{e.hasAttribute(`current-page`)&&(t<r.length-1&&(a=!0),i++)}),i>1&&console.warn(`Please ensure only one w-breadcrumb-item has the current-page attribute.`),a&&console.warn(`The current-page attribute should only be used on the final breadcrumb item.`);let o=[...this.children].filter(e=>e&&e.tagName!==`W-BREADCRUMB-ITEM`).flat(1/0).filter(e=>e).map((e,t)=>{if(typeof e==`string`){let r=t===this.children.length-1;return n`<span
					class="legacy-trail-segment-text"
					aria-current=${r?`page`:void 0}
					>${e}</span
				>`}return e.classList.add(e.tagName===`A`?`legacy-trail-segment-link`:`legacy-trail-segment-text`),e});this._children=C(o,I)}render(){return this._internals.ariaLabel=this._label,n`
			<nav part="base" aria-labelledby="breadCrumbLabel">
				<h2 id="breadCrumbLabel" class="sr-only">${this._label}</h2>
				<div part="trail">${this._children}<slot></slot></div>
			</nav>
		`}},customElements.get(`w-breadcrumbs`)||customElements.define(`w-breadcrumbs`,L)})))()}var z;function B(){return(B=e((()=>{d(),z=c`
	:host {
		display: inline-block;
		white-space: nowrap;
		flex-shrink: 0;

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
`})))()}var V;function H(){return(H=e((()=>{d(),i(),B(),s(),y(),V=class extends p{constructor(){super(),this.currentPage=!1,this.href=null,new l(this)}static{this.styles=[v,z]}get link(){return this.href?n`<a
					part="link"
					class="s-text-link"
					href=${this.href}
					aria-current=${this.currentPage?`page`:f}
					><slot></slot
				></a>`:n`<span
					part="text"
					class="s-text"
					aria-current=${this.currentPage?`page`:f}
					><slot></slot
				></span>`}render(){return n`${this.link}`}},u([a({type:Boolean,attribute:`current-page`,reflect:!0})],V.prototype,`currentPage`,void 0),u([a({type:String})],V.prototype,`href`,void 0),customElements.get(`w-breadcrumb-item`)||customElements.define(`w-breadcrumb-item`,V)})))()}var U=t({Default:()=>q,LegacyChildren:()=>Z,WithLinks:()=>J,WithSpanForCurrentPage:()=>Y,WithoutCurrentPageInTrail:()=>X,__namedExportsOrder:()=>Q,default:()=>K}),W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{S(),m(),d(),R(),H(),{events:W,argTypes:G}=h(`w-breadcrumbs`),K={title:`Navigation/Breadcrumbs`,render(e){return n`
            <w-breadcrumbs ${b(x(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        `},args:{"aria-label":`You are here`},argTypes:G,parameters:{actions:{handles:W}}},q={},J={render(e){return n`
            <w-breadcrumbs ${b(x(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item href="#" current-page
                    >Current page</w-breadcrumb-item
                >
            </w-breadcrumbs>
        `}},Y={render(e){return n`
            <w-breadcrumbs ${b(x(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        `}},X={render(e){return n`
            <w-breadcrumbs ${b(x(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
            </w-breadcrumbs>
            <h2>Current page</h2>
        `}},Z={render(e){return n`
            <w-breadcrumbs ${b(x(e))}>
                <a href="#/home">Home</a>
                <a href="#/category">Category</a>
                <span aria-current="page">Item</span>
            </w-breadcrumbs>
        `}},Q=[`Default`,`WithLinks`,`WithSpanForCurrentPage`,`WithoutCurrentPageInTrail`,`LegacyChildren`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <w-breadcrumbs \${spread(prespread(args))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        \`;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <w-breadcrumbs \${spread(prespread(args))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
            </w-breadcrumbs>
            <h2>Current page</h2>
        \`;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <w-breadcrumbs \${spread(prespread(args))}>
                <a href="#/home">Home</a>
                <a href="#/category">Category</a>
                <span aria-current="page">Item</span>
            </w-breadcrumbs>
        \`;
  }
}`,...Z.parameters?.docs?.source}}}})))()}export{U as a,X as i,J as n,$ as o,Y as r,q as t};