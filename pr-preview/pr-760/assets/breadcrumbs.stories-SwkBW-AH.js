import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{C as n,T as r,f as i,h as a,p as o,r as s,s as c,t as l,y as u}from"./decorate-D-MUTuIl.js";import{a as d,o as f,r as p,t as m}from"./i18n-CkjYRTT1.js";import{n as h,t as g}from"./dist-CXTYkVAl.js";import{n as _,t as v}from"./styles-Dxzaq_l3.js";import{i as y,n as b,r as x}from"./utilities-C5YHrCuy.js";function S(e,t){return e.flatMap(e=>[e,t]).slice(0,-1)}var C;function w(){return(w=e((()=>{C=JSON.parse(`{"breadcrumbs.ariaLabel":["Du er her"]}`)})))()}var T;function E(){return(E=e((()=>{T=JSON.parse(`{"breadcrumbs.ariaLabel":["You are here"]}`)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"breadcrumbs.ariaLabel":["Olet tässä"]}`)})))()}var k;function A(){return(A=e((()=>{k=JSON.parse(`{"breadcrumbs.ariaLabel":["Her er du"]}`)})))()}var j;function M(){return(M=e((()=>{j=JSON.parse(`{"breadcrumbs.ariaLabel":["Du är här"]}`)})))()}var N;function P(){return(P=e((()=>{i(),N=r(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem * calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem * var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`)})))()}var F,I,L;function R(){return(R=e((()=>{f(),i(),p(),v(),w(),E(),O(),A(),M(),P(),F={wrapper:`flex space-x-8`,text:`s-text`,link:`s-text-link`,separator:`select-none s-icon`,a11y:`sr-only`},I=u`<span class=${F.separator}>/</span>`,L=class extends o{static{this.styles=[_,N]}constructor(){super(),this._children=[],this._internals=this.attachInternals(),m(T,k,D,C,j),this._defaultLabel=d._({id:`breadcrumbs.ariaLabel`,message:`You are here`,comment:`Default screen reader message for the breadcrumb component`}),this._internals.ariaLabel=this._defaultLabel}get _label(){return this.ariaLabel??this._defaultLabel}connectedCallback(){super.connectedCallback(),this._internals.role=`navigation`;let e=this.querySelectorAll(`:scope > a`),t=this.querySelectorAll(`:scope > span`),n=this.querySelectorAll(`w-breadcrumb-item`);n.length>0&&(e.length>0||t.length>0)&&console.warn(`Mixing Legacy API and w-breadcrumb-item API children is not supported.`);let r=0,i=!1;n.forEach((e,t)=>{e.hasAttribute(`current-page`)&&(t<n.length-1&&(i=!0),r++)}),r>1&&console.warn(`Please ensure only one w-breadcrumb-item has the current-page attribute.`),i&&console.warn(`The current-page attribute should only be used on the final breadcrumb item.`);let a=[...this.children].filter(e=>e&&e.tagName!==`W-BREADCRUMB-ITEM`).flat(1/0).filter(e=>e).map((e,t)=>{if(typeof e==`string`){let n=t===this.children.length-1;return u`<span
					class=${F.text}
					aria-current=${n?`page`:void 0}
					>${e}</span
				>`}return e.classList.add(e.tagName===`A`?F.link:F.text),e});this._children=S(a,I)}render(){return u`
			<nav aria-labelledby="breadCrumbLabel">
				<h2 id="breadCrumbLabel" class=${F.a11y}>${this._label}</h2>
				<div class=${F.wrapper}>${this._children}<slot></slot></div>
			</nav>
		`}},customElements.get(`w-breadcrumbs`)||customElements.define(`w-breadcrumbs`,L)})))()}var z;function B(){return(B=e((()=>{i(),z=n`
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
	.separator {
		color: var(--_separator-color);
		-webkit-user-select: none;
		user-select: none;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		font-weight: var(--_font-weight);
		margin-left: var(--_separator-spacing);
		margin-right: var(--_separator-spacing);
	}
`})))()}var V;function H(){return(H=e((()=>{i(),s(),B(),v(),V=class extends o{constructor(...e){super(...e),this.currentPage=!1,this.href=null}static{this.styles=[_,z]}get link(){return this.href?u`<a
					part="link"
					class="s-text-link"
					href=${this.href}
					aria-current=${this.currentPage?`page`:a}
					><slot></slot
				></a>`:u`<span
					part="text"
					class="s-text"
					aria-current=${this.currentPage?`page`:a}
					><slot></slot
				></span>`}get separator(){return this.currentPage?a:u`<span part="separator" class="separator" aria-hidden="true"
					>/</span
				>`}render(){return u`${this.link}${this.separator}`}},l([c({type:Boolean,attribute:`current-page`})],V.prototype,`currentPage`,void 0),l([c({type:String})],V.prototype,`href`,void 0),customElements.get(`w-breadcrumb-item`)||customElements.define(`w-breadcrumb-item`,V)})))()}var U=t({Default:()=>q,WithLinks:()=>J,WithSpanForCurrentPage:()=>Y,__namedExportsOrder:()=>X,default:()=>K}),W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{x(),h(),i(),R(),H(),{events:W,argTypes:G}=g(`w-breadcrumbs`),K={title:`Navigation/Breadcrumbs`,render(e){return u`
            <w-breadcrumbs ${y(b(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        `},args:{"aria-label":`You are here`},argTypes:G,parameters:{actions:{handles:W}}},q={},J={render(e){return u`
            <w-breadcrumbs ${y(b(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item href="#" current-page
                    >Current page</w-breadcrumb-item
                >
            </w-breadcrumbs>
        `}},Y={render(e){return u`
            <w-breadcrumbs ${y(b(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        `}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`WithLinks`,`WithSpanForCurrentPage`]})))()}export{Z as a,U as i,J as n,Y as r,q as t};