import{a as v,i as p,r as g,j as n,x as f,n as w}from"./iframe-DzEGzPem.js";import"./preload-helper-Ct5FWWRu.js";const k=v`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.bg-\\[--w-color-switch-track-background\\]{background-color:var(--w-color-switch-track-background)}.group:hover .group-hover\\:bg-\\[--w-color-switch-track-background-hover\\]{background-color:var(--w-color-switch-track-background-hover)}.rounded-full{border-radius:9999px}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.left-0{left:0}.left-4{left:.4rem}.top-0{top:0}.top-4{top:.4rem}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.group:hover .group-hover\\:s-bg-primary-hover{background-color:var(--w-s-color-background-primary-hover)}.shadow-s{box-shadow:var(--w-shadow-s)}.h-16{height:1.6rem}.h-24{height:2.4rem}.h-full{height:100%}.w-16{width:1.6rem}.w-44{width:4.4rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.translate-x-20{--w-translate-x:2rem;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var m=Object.defineProperty,h=(l,d,u,y)=>{for(var a=void 0,i=l.length-1,b;i>=0;i--)(b=l[i])&&(a=b(d,u,a)||a);return a&&m(d,u,a),a};const e={base:"block relative h-24 w-44 cursor-pointer group focusable rounded-full",disabled:"pointer-events-none",track:"absolute top-0 left-0 h-full w-full rounded-full transition-colors",trackActive:"s-bg-primary group-hover:s-bg-primary-hover",trackInactive:"bg-[--w-color-switch-track-background] group-hover:bg-[--w-color-switch-track-background-hover]",trackDisabled:"s-bg-disabled-subtle",handle:"absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform",handleSelected:"translate-x-20",handleNotDisabled:"s-bg shadow-s",handleDisabled:"s-bg-disabled"};class c extends p{constructor(){super(...arguments),this.value=!1,this.disabled=!1}static{this.styles=[g,k]}get _baseClasses(){return n([e.base,this.disabled&&e.disabled])}get _trackClasses(){return n([e.track,this.disabled&&e.trackDisabled,!this.disabled&&(this.value?e.trackActive:e.trackInactive)])}get _handleClasses(){return n([e.handle,this.value&&e.handleSelected,this.disabled?e.handleDisabled:e.handleNotDisabled])}_handleClick(){this.disabled||(this.value=!this.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))}render(){return f`
      <div>
        <button
          type="button"
          role="switch"
          aria-checked=${this.value}
          class=${this._baseClasses}
          aria-disabled=${this.disabled}
          ?disabled=${this.disabled}
          @click=${this._handleClick}>
          <span data-testid="track" class=${this._trackClasses}></span>
          <span data-testid="handle" class=${this._handleClasses}></span>
        </button>
      </div>
    `}}h([w({type:Boolean,reflect:!0})],c.prototype,"value");h([w({type:Boolean,reflect:!0})],c.prototype,"disabled");customElements.get("w-switch")||customElements.define("w-switch",c);const _={title:"Forms/Switch",component:"w-switch",argTypes:{value:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{value:!1,disabled:!1}},t={args:{value:!0,disabled:!1}},s={args:{value:!1,disabled:!0}},o={args:{value:!0,disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: false,
    disabled: false
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: true,
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: false,
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: true,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const D=["Default","Checked","Disabled","DisabledChecked"];export{t as Checked,r as Default,s as Disabled,o as DisabledChecked,D as __namedExportsOrder,_ as default};
