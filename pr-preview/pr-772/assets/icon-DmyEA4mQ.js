import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,a as n,f as r,p as i,r as a,s as o,t as s,y as c}from"./decorate-D-MUTuIl.js";import{n as l,t as u}from"./class-map-BbjNB0b1.js";var d;function f(){return(f=e((()=>{r(),d=t`
	:host {
		display: inline-block;
	}
	.w-icon {
		--_w-icon-size: var(--w-icon-size, 24px);
		height: var(--_w-icon-size);
		width: var(--_w-icon-size);
		display: flex;
		visibility: hidden;
	}
	.w-icon--ready {
		visibility: visible;
	}
	.w-icon svg {
		pointer-events: none;
		height: var(--_w-icon-size);
		width: var(--_w-icon-size);
	}
	.w-icon--s {
		--w-icon-size: 16px;
	}
	.w-icon--m {
		--w-icon-size: 24px;
	}
	.w-icon--l {
		--w-icon-size: 32px;
	}
`})))()}function p(e,t){return`https://assets.finn.no/pkg/eikons/~1/${t}/${e}.svg`}function m(e){let t=new DOMParser().parseFromString(e,`image/svg+xml`);return t.querySelector(`parsererror`)?null:t.querySelector(`svg`)}function h(e){if(g.has(e))return Promise.resolve(g.get(e)??null);let t=_.get(e);if(t!==void 0)return t;let n=fetch(e).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.text()}).then(t=>{let n=m(t);return g.set(e,n),n}).catch(()=>(g.set(e,null),null)).finally(()=>{_.delete(e)});return _.set(e,n),n}var g,_,v;function y(){return(y=e((()=>{r(),a(),u(),f(),g=new Map,_=new Map,v=class extends i{constructor(...e){super(...e),this.locale=document.documentElement.lang||`en`,this.svg=null,this._ready=!1,this._loadToken=null}static{this.styles=[d]}updated(e){(e.has(`name`)||e.has(`locale`))&&this.loadIcon()}async loadIcon(){if(!this.name){this.svg=null,this._ready=!1;return}let e=p(this.name,this.locale),t=Symbol();this._loadToken=t,this._ready=!1;let n=await h(e);this._loadToken===t&&(n?(this.svg=n.cloneNode(!0),this._ready=!0):this.svg=null)}render(){let e=this.size||`medium`,t=this.name||``,n={"w-icon":!0,"w-icon--ready":this._ready,"w-icon--s":e===`small`,"w-icon--m":e===`medium`,"w-icon--l":e===`large`},r=typeof e==`string`&&e.endsWith(`px`)?`--w-icon-size: ${e};`:``;return c`<div
			class="${l(n)}"
			style="${r}"
			part="w-${t.toLowerCase()}"
		>
			${this.svg}
		</div>`}},s([o({type:String,reflect:!0})],v.prototype,`name`,void 0),s([o({type:String,reflect:!0})],v.prototype,`size`,void 0),s([o({type:String,reflect:!0,useDefault:!0})],v.prototype,`locale`,void 0),s([n()],v.prototype,`svg`,void 0),s([n()],v.prototype,`_ready`,void 0),customElements.get(`w-icon`)||customElements.define(`w-icon`,v)})))()}export{y as t};