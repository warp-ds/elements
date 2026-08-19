import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,h as r,l as i,r as a,s as o,t as s,x as c,y as l}from"./decorate-J4WBtiHw.js";import{a as u,n as d,o as f,r as p,t as m}from"./i18n-CkjYRTT1.js";import{n as h,t as g}from"./index.m-DHqwZk2H.js";import{t as _}from"./icon-He5RsYT_.js";import{n as v,t as y}from"./styles-CYn3YYhE.js";import{n as b,r as x,t as S}from"./element-collapse-BzYCfyLh.js";import{n as C,t as w}from"./repeat-Ce7G-pnG.js";function T(e,t,n){return e?t(e):n?.(e)}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}`)})))()}var P;function F(){return(F=e((()=>{P=JSON.parse(`{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}`)})))()}var I;function L(){return(L=e((()=>{n(),I=c(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.bg-transparent{background-color:#0000}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.block{display:block}.flex{display:flex}.shrink-0{flex-shrink:0}.overflow-hidden{overflow:hidden}.self-center{align-self:center}.relative{position:relative}.static{position:static}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.w-full{width:100%}.h-\\[16px\\]{height:16px}.w-\\[16px\\]{width:16px}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-auto{margin-left:auto}.mr-8{margin-right:.8rem}.mt-16{margin-top:1.6rem}.m-\\[8px\\]{margin:8px}.p-8{padding:.8rem}.py-4{padding-top:.4rem;padding-bottom:.4rem}.p-\\[8px\\]{padding:8px}.pointer-events-auto{pointer-events:auto}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`)})))()}var R,z;function B(){return(B=e((()=>{g(),f(),n(),a(),_(),p(),y(),x(),D(),k(),j(),N(),F(),L(),R={wrapper:`relative overflow-hidden w-full`,base:`flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all`,positive:`s-bg-positive-subtle s-border-positive-subtle s-text`,warning:`s-bg-warning-subtle s-border-warning-subtle s-text`,negative:`s-bg-negative-subtle s-border-negative-subtle s-text`,iconBase:`shrink-0 rounded-full w-[16px] h-[16px] m-[8px]`,iconPositive:`s-icon-positive`,iconWarning:`s-icon-warning`,iconNegative:`s-icon-negative`,iconLoading:`animate-bounce`,content:`self-center mr-8 py-4 last-child:mb-0`,close:`bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active`},z=class extends i{static{this.styles=[v,I,l`
			:host {
				display: block;
			}
		`]}constructor(){super(),this.type=`success`,this.text=``,this.canclose=!1,this._expanded=!1,m(O,M,A,E,P),this.id||=Date.now().toString(36)+Math.random().toString(36).slice(2,5)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&b(this._wrapper,()=>this._expanded=!0)}get#e(){let e=this.type;return h([R.base,e===`success`&&R.positive,e===`warning`&&R.warning,e===`error`&&R.negative])}get#t(){let e=this.type;return h([R.iconBase,e===`success`&&R.iconPositive,e===`warning`&&R.iconWarning,e===`error`&&R.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector(`section`)??null}get _warning(){return this.type===`warning`}get _error(){return(this.type||`success`)===`error`}get _role(){return this._error||this._warning?`alert`:`status`}get _typeLabel(){return this._warning?u._({id:`toast.aria.warning`,message:`Warning`,comment:`Default screenreader message for warning in toast component`}):this._error?u._({id:`toast.aria.error`,message:`Error`,comment:`Default screenreader message for error in toast component`}):u._({id:`toast.aria.successful`,message:`Successful`,comment:`Default screenreader message for successful in toast component`})}get _iconMarkup(){let e=d();return this._warning?r`<w-icon
				name="Warning"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:this._error?r`<w-icon
				name="Error"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:r`<w-icon
			name="Success"
			size="small"
			locale="${e}"
			class="flex"
		></w-icon>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?S(this._wrapper,e):e()})}close(){let e=new CustomEvent(`close`,{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?r` <section
			class="${R.wrapper}"
			aria-label="${this._typeLabel}"
		>
			<div class="${this.#e}">
				<div class="${this.#t}">${this._iconMarkup}</div>
				<div role="${this._role}" class="${R.content}">
					<p>${this.text}</p>
				</div>
				${T(this.canclose===!0,()=>r`
						<w-button variant="pill" small="" @click="${this.close}">
							<w-icon
								name="Close"
								size="small"
								locale="${d()}"
								style="display: flex"
								class="flex"
							></w-icon>
						</w-button>
					`)}
			</div>
		</section>`:r``}},s([o({type:String,attribute:!0,reflect:!0})],z.prototype,`id`,void 0),s([o({type:String,attribute:!0,reflect:!0,useDefault:!0})],z.prototype,`type`,void 0),s([o({type:String,attribute:!0,reflect:!0})],z.prototype,`text`,void 0),s([o({type:Boolean,attribute:!0,reflect:!0})],z.prototype,`canclose`,void 0),s([t()],z.prototype,`_expanded`,void 0),customElements.get(`w-toast`)||customElements.define(`w-toast`,z)})))()}var V;function H(){return(H=e((()=>{n(),V=c(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.block{display:block}.grid{display:grid}.auto-rows-auto{grid-auto-rows:auto}.bottom-16{bottom:1.6rem}.left-0{left:0}.right-0{right:0}.justify-center{justify-content:center}.justify-items-center{justify-items:center}.fixed{position:fixed}.static{position:static}.z-50{z-index:50}.w-full{width:100%}.mx-8{margin-left:.8rem;margin-right:.8rem}.mx-auto{margin-left:auto;margin-right:auto}.pointer-events-none{pointer-events:none}.translate-z-0{--w-translate-z:0rem;transform:translateX(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotateZ(var(--w-rotate-z)) skewX(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotateZ(var(--w-rotate-z)) skewX(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))}@media (min-width:480px){.sm\\:mx-16{margin-left:1.6rem;margin-right:1.6rem}}`)})))()}var U,W;function G(){return(G=e((()=>{n(),a(),w(),y(),H(),U={wrapper:`fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none`,base:`grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none`,content:`w-full`},W=class extends i{constructor(...e){super(...e),this._toasts=new Map}static{this.styles=[v,V,l`
			:host {
				display: block;
			}
		`]}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{let e=[],t=[];for(let n of this._toasts)Date.now()<=n[1].duration?e.push(n):t.push(n);let n=[];for(let[e]of t){let t=this.renderRoot.querySelector(`#${e}`);t&&n.push(t.collapse())}Promise.all(n).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector(`w-toast-container`);return e||(e=document.createElement(`w-toast-container`),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts,([,e])=>e)}get(e){if(!e)throw Error(`undefined "id" given when attempting to retrieve toast`);if(typeof e!=`string`&&!Number.isInteger(e))throw Error(`"id" must be number or string when attempting to retrieve toast`);return this._toasts.get(e)}set(e){if(!e.id)throw Error(`invalid or undefined "id" on toast object`);let t=this._toasts.set(e.id,{id:e.id,type:e.type??`success`,text:e.text??``,canclose:e.canclose??!1,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map([...this._toasts]),t}async del(e){if(!e)throw Error(`undefined "id" given when attempting to retrieve toast`);if(typeof e!=`string`&&!Number.isInteger(e))throw Error(`"id" must be number or string when attempting to retrieve toast`);let t=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e)||!t)return!1;await t.collapse();let n=this._toasts.delete(e);return this._toasts=new Map([...this._toasts]),n}render(){return r`
			<aside class="${U.wrapper}">
				<div class="${U.base}" id="w-toast-container-list">
					${C(this._toastsArray,e=>e.id,e=>r` <w-toast
								class="${U.content}"
								id="${e.id}"
								type="${e.type}"
								text="${e.text}"
								?canclose=${e.canclose}
								@close=${()=>this.del(e.id)}
							>
							</w-toast>`)}
				</div>
			</aside>
		`}},s([t()],W.prototype,`_toasts`,void 0),customElements.get(`w-toast-container`)||customElements.define(`w-toast-container`,W)})))()}export{G as n,B as r,W as t};