import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{T as t,k as n,v as r,y as i}from"./decorate-r9jH0CjD.js";import{n as a,r as o,t as s}from"./element-collapse-CGV6V9Bp.js";import{r as c,t as l}from"./if-defined-BKFbRLV7.js";var u;function d(){return(d=e((()=>{r(),l(),o(),u=class extends i{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){this._wrapper&&(this._mounted?(this.show&&a(this._wrapper),!this.show&&!this._removeElement&&s(this._wrapper,()=>this._removeElement=!0)):this._mounted=!0)}get _wrapper(){return this??null}static styles=[n`
			:host {
				display: block;
			}
		`];render(){return t`<div aria-hidden=${c(this.show?void 0:`true`)}>
			${this._removeElement?t``:t`<slot></slot>`}
		</div>`}},customElements.get(`w-expand-transition`)||customElements.define(`w-expand-transition`,u)})))()}export{d as t};