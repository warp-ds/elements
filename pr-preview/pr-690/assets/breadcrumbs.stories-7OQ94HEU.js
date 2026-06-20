import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{C as n,_ as r,d as i,l as a,n as o,p as s,r as c,t as l,u,x as d}from"./decorate-BxgRj7DM.js";import{M as f,_ as p,b as m,j as h,l as g,u as _,x as v,y}from"./iframe-1JfgPK4A.js";import{a as b,n as x,r as S,t as C}from"./utilities-DVzH92uJ.js";function w(e,t){return e.flatMap(e=>[e,t]).slice(0,-1)}var ee=t((()=>{})),T,E=t((()=>{T=JSON.parse(`{"breadcrumbs.ariaLabel":["Du er her"]}`)})),D,O=t((()=>{D=JSON.parse(`{"breadcrumbs.ariaLabel":["You are here"]}`)})),k,A=t((()=>{k=JSON.parse(`{"breadcrumbs.ariaLabel":["Olet tässä"]}`)})),j,M=t((()=>{j=JSON.parse(`{"breadcrumbs.ariaLabel":["Her er du"]}`)})),N,P=t((()=>{N=JSON.parse(`{"breadcrumbs.ariaLabel":["Du är här"]}`)})),F,I=t((()=>{u(),F=n(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem * calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem * var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`)})),L,R,z,B=t((()=>{f(),ee(),u(),y(),g(),E(),O(),A(),M(),P(),I(),L={wrapper:`flex space-x-8`,text:`s-text`,link:`s-text-link`,separator:`select-none s-icon`,a11y:`sr-only`},R=r`<span class=${L.separator}>/</span>`,z=class extends i{static{this.styles=[_,F]}constructor(){super(),this._children=[],this._internals=this.attachInternals(),p(D,j,k,T,N),this._defaultLabel=h._({id:`breadcrumbs.ariaLabel`,message:`You are here`,comment:`Default screen reader message for the breadcrumb component`}),this._internals.ariaLabel=this._defaultLabel}get _label(){return this.ariaLabel??this._defaultLabel}connectedCallback(){super.connectedCallback(),this._internals.role=`navigation`;let e=this.querySelectorAll(`:scope > a`),t=this.querySelectorAll(`:scope > span`),n=this.querySelectorAll(`w-breadcrumb-item`);n.length>0&&(e.length>0||t.length>0)&&console.warn(`Mixing Legacy API and w-breadcrumb-item API children is not supported.`);let i=0,a=!1;n.forEach((e,t)=>{e.hasAttribute(`current-page`)&&(t<n.length-1&&(a=!0),i++)}),i>1&&console.warn(`Please ensure only one w-breadcrumb-item has the current-page attribute.`),a&&console.warn(`The current-page attribute should only be used on the final breadcrumb item.`);let o=[...this.children].filter(e=>e&&e.tagName!==`W-BREADCRUMB-ITEM`).flat(1/0).filter(e=>e).map((e,t)=>{if(typeof e==`string`){let n=t===this.children.length-1;return r`<span
					class=${L.text}
					aria-current=${n?`page`:void 0}
					>${e}</span
				>`}return e.classList.add(e.tagName===`A`?L.link:L.text),e});this._children=w(o,R)}render(){return r`
			<nav aria-labelledby="breadCrumbLabel">
				<h2 id="breadCrumbLabel" class=${L.a11y}>${this._label}</h2>
				<div class=${L.wrapper}>${this._children}<slot></slot></div>
			</nav>
		`}},customElements.get(`w-breadcrumbs`)||customElements.define(`w-breadcrumbs`,z)})),V,H=t((()=>{u(),V=d`
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
`})),U,W=t((()=>{u(),c(),H(),g(),o(),U=class extends i{constructor(...e){super(...e),this.currentPage=!1,this.href=null}static{this.styles=[_,V]}get link(){return this.href?r`<a
					part="link"
					class="s-text-link"
					href=${this.href}
					aria-current=${this.currentPage?`page`:s}
					><slot></slot
				></a>`:r`<span
					part="text"
					class="s-text"
					aria-current=${this.currentPage?`page`:s}
					><slot></slot
				></span>`}get separator(){return this.currentPage?s:r`<span part="separator" class="separator" aria-hidden="true"
					>/</span
				>`}render(){return r`${this.link}${this.separator}`}},l([a({type:Boolean,attribute:`current-page`})],U.prototype,`currentPage`,void 0),l([a({type:String})],U.prototype,`href`,void 0),customElements.get(`w-breadcrumb-item`)||customElements.define(`w-breadcrumb-item`,U)})),G=e({Default:()=>Y,WithLinks:()=>X,WithSpanForCurrentPage:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),K,q,J,Y,X,Z,Q,$=t((()=>{S(),v(),u(),C(),B(),W(),{events:K,argTypes:q}=m(`w-breadcrumbs`),J={title:`Navigation/Breadcrumbs`,render(e){return r`
            <w-breadcrumbs ${b(x(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        `},args:{"aria-label":`You are here`},argTypes:q,parameters:{actions:{handles:K}}},Y={},X={render(e){return r`
            <w-breadcrumbs ${b(x(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item href="#" current-page
                    >Current page</w-breadcrumb-item
                >
            </w-breadcrumbs>
        `}},Z={render(e){return r`
            <w-breadcrumbs ${b(x(e))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        `}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <w-breadcrumbs \${spread(prespread(args))}>
                <w-breadcrumb-item href="#/home">Home</w-breadcrumb-item>
                <w-breadcrumb-item href="#/category">Category</w-breadcrumb-item>
                <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
            </w-breadcrumbs>
        \`;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithLinks`,`WithSpanForCurrentPage`]}));$();export{Y as Default,X as WithLinks,Z as WithSpanForCurrentPage,Q as __namedExportsOrder,J as default,$ as n,G as t};