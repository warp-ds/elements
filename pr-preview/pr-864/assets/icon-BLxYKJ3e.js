import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{T as t,a as n,d as r,i,k as a,l as o,r as s,t as c,v as l,y as u}from"./decorate-r9jH0CjD.js";import{n as d,t as f}from"./class-map-tAQ7AVtN.js";var p;function m(){return(m=e((()=>{l(),p=a`
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
`})))()}function h(e,t){return`https://assets.finn.no/pkg/eikons/~1/${t}/${e}.svg`}function g(e){let t=new DOMParser().parseFromString(e,`image/svg+xml`);return t.querySelector(`parsererror`)?null:t.querySelector(`svg`)}function _(e){if(v.has(e))return Promise.resolve(v.get(e)??null);let t=y.get(e);if(t!==void 0)return t;let n=fetch(e).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.text()}).then(t=>{let n=g(t);return v.set(e,n),n}).catch(()=>(v.set(e,null),null)).finally(()=>{y.delete(e)});return y.set(e,n),n}var v,y,b;function x(){return(x=e((()=>{l(),n(),f(),i(),m(),v=new Map,y=new Map,b=class extends u{constructor(){super(),this.locale=document.documentElement.lang||`en`,this.svg=null,this._ready=!1,this._loadToken=null,new s(this)}static{this.styles=[p]}updated(e){(e.has(`name`)||e.has(`locale`))&&this.loadIcon()}async loadIcon(){if(!this.name){this.svg=null,this._ready=!1;return}let e=h(this.name,this.locale),t=Symbol();this._loadToken=t,this._ready=!1;let n=await _(e);this._loadToken===t&&(n?(this.svg=n.cloneNode(!0),this._ready=!0):this.svg=null)}render(){let e=this.size||`medium`,n=this.name||``,r={"w-icon":!0,"w-icon--ready":this._ready,"w-icon--s":e===`small`,"w-icon--m":e===`medium`,"w-icon--l":e===`large`},i=typeof e==`string`&&e.endsWith(`px`)?`--w-icon-size: ${e};`:``;return t`<div
			class="${d(r)}"
			style="${i}"
			part="w-${n.toLowerCase()}"
		>
			${this.svg}
		</div>`}},c([r({type:String,reflect:!0})],b.prototype,`name`,void 0),c([r({type:String,reflect:!0})],b.prototype,`size`,void 0),c([r({type:String,reflect:!0,useDefault:!0})],b.prototype,`locale`,void 0),c([o()],b.prototype,`svg`,void 0),c([o()],b.prototype,`_ready`,void 0),customElements.get(`w-icon`)||customElements.define(`w-icon`,b)})))()}export{x as t};