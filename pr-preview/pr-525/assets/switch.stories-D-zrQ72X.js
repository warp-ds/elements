import{a as v,i as w,r as g,j as h,b as f,n as i}from"./iframe-BeuuFToc.js";import{F as k}from"./FormControlMixin-DJnJZbro.js";import"./preload-helper-Ct5FWWRu.js";const m=v`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.bg-\\[--w-s-color-border-strong\\]{background-color:var(--w-s-color-border-strong)}.group:hover .group-hover\\:bg-\\[--w-s-color-border-strong-hover\\]{background-color:var(--w-s-color-border-strong-hover)}.border{border-width:1px}.rounded-full{border-radius:9999px}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.left-0{left:0}.left-4{left:.4rem}.top-0{top:0}.top-4{top:.4rem}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.group:hover .group-hover\\:s-bg-hover{background-color:var(--w-s-color-background-hover)}.group:hover .group-hover\\:s-bg-primary-hover{background-color:var(--w-s-color-background-primary-hover)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.group:hover .group-hover\\:s-border-strong-hover{border-color:var(--w-s-color-border-strong-hover)}.h-16{height:1.6rem}.h-24{height:2.4rem}.h-full{height:100%}.w-16{width:1.6rem}.w-44{width:4.4rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.translate-x-20{--w-translate-x:2rem;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var y=Object.defineProperty,d=(n,s,u,x)=>{for(var r=void 0,b=n.length-1,p;b>=0;b--)(p=n[b])&&(r=p(s,u,r)||r);return r&&y(s,u,r),r};const e={base:"block relative h-24 w-44 cursor-pointer group focusable rounded-full",disabled:"pointer-events-none",track:"absolute top-0 left-0 h-full w-full rounded-full transition-colors",trackActive:"s-bg-primary group-hover:s-bg-primary-hover",trackInactive:"s-bg border s-border-strong group-hover:s-bg-hover group-hover:s-border-strong-hover",trackDisabledOn:"s-bg-disabled",trackDisabledOff:"s-bg-disabled-subtle border s-border-disabled",handle:"absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform",handleSelected:"translate-x-20",handleActive:"s-bg",handleNotDisabled:"bg-[--w-s-color-border-strong] group-hover:bg-[--w-s-color-border-strong-hover]",handleDisabledOn:"s-bg-disabled-subtle",handleDisabledOff:"s-bg-disabled"};class t extends k(w){constructor(){super(...arguments),this.name="",this.value="",this.checked=!1,this.disabled=!1,this.#e=null}#e;static{this.styles=[g,m]}get _baseClasses(){return h([e.base,this.disabled&&e.disabled])}get _trackClasses(){return h([e.track,this.disabled?this.checked?e.trackDisabledOn:e.trackDisabledOff:this.checked?e.trackActive:e.trackInactive])}get _handleClasses(){return h([e.handle,this.checked&&e.handleSelected,this.disabled?this.checked?e.handleDisabledOn:e.handleDisabledOff:this.checked?e.handleActive:e.handleNotDisabled])}_handleClick(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value||null},bubbles:!0,composed:!0})))}connectedCallback(){this.#e=this.checked,super.connectedCallback(),this.disabled||this.setValue(this.checked&&this.value?this.value:null)}willUpdate(s){s.has("checked")&&(this.disabled||this.setValue(this.checked&&this.value?this.value:null))}resetFormControl(){this.checked=this.#e}render(){return f`
      <div>
        <button
          type="button"
          role="switch"
          aria-checked=${this.checked}
          class=${this._baseClasses}
          aria-disabled=${this.disabled}
          ?disabled=${this.disabled}
          @click=${this._handleClick}
        >
          <span data-testid="track" class=${this._trackClasses}></span>
          <span data-testid="handle" class=${this._handleClasses}></span>
        </button>
      </div>
    `}}d([i({type:String,reflect:!0})],t.prototype,"name");d([i({type:String,reflect:!0})],t.prototype,"value");d([i({type:Boolean,reflect:!0})],t.prototype,"checked");d([i({type:Boolean,reflect:!0})],t.prototype,"disabled");customElements.get("w-switch")||customElements.define("w-switch",t);const S={title:"Forms/Switch",component:"w-switch",argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},value:{control:"text"}}},a={args:{checked:!1,disabled:!1}},o={args:{checked:!0,disabled:!1}},l={args:{checked:!1,disabled:!0}},c={args:{checked:!0,disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};const z=["Default","Checked","Disabled","DisabledChecked"];export{o as Checked,a as Default,l as Disabled,c as DisabledChecked,z as __namedExportsOrder,S as default};
