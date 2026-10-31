import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{T as t,_ as n,a as r,d as i,g as a,i as o,j as s,k as c,l,r as u,t as d,v as f,y as p}from"./decorate-r9jH0CjD.js";import{n as m,r as h,t as g}from"./i18n-CH8KbyPD.js";import{n as _,t as v}from"./index.m-ChAdMYgE.js";import{t as y}from"./icon-BLxYKJ3e.js";import{n as b,t as x}from"./styles-zocEQ6mS.js";import{n as S,r as C,t as w}from"./element-collapse-CGV6V9Bp.js";import{n as T,t as E}from"./repeat-CfUyVtKq.js";function D(e,t,n){return e?t(e):n?.(e)}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}`)})))()}var P;function F(){return(F=e((()=>{P=JSON.parse(`{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}`)})))()}var I;function L(){return(L=e((()=>{I=JSON.parse(`{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}`)})))()}var R;function z(){return(z=e((()=>{f(),R=s(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.bg-transparent{background-color:#0000}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.block{display:block}.flex{display:flex}.shrink-0{flex-shrink:0}.overflow-hidden{overflow:hidden}.self-center{align-self:center}.relative{position:relative}.static{position:static}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.w-full{width:100%}.h-\\[16px\\]{height:16px}.w-\\[16px\\]{width:16px}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-auto{margin-left:auto}.mr-8{margin-right:.8rem}.mt-16{margin-top:1.6rem}.m-\\[8px\\]{margin:8px}.p-8{padding:.8rem}.py-4{padding-top:.4rem;padding-bottom:.4rem}.p-\\[8px\\]{padding:8px}.pointer-events-auto{pointer-events:auto}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`)})))()}var B,V;function H(){return(H=e((()=>{v(),n(),f(),r(),o(),y(),h(),x(),C(),k(),j(),N(),F(),L(),z(),B={wrapper:`relative overflow-hidden w-full`,base:`flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all`,positive:`s-bg-positive-subtle s-border-positive-subtle s-text`,warning:`s-bg-warning-subtle s-border-warning-subtle s-text`,negative:`s-bg-negative-subtle s-border-negative-subtle s-text`,iconBase:`shrink-0 rounded-full w-[16px] h-[16px] m-[8px]`,iconPositive:`s-icon-positive`,iconWarning:`s-icon-warning`,iconNegative:`s-icon-negative`,iconLoading:`animate-bounce`,content:`self-center mr-8 py-4 last-child:mb-0`,close:`bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active`},V=class extends p{static{this.styles=[b,R,c`
			:host {
				display: block;
			}
		`]}constructor(){super(),this.type=`success`,this.text=``,this.canclose=!1,this._expanded=!1,new u(this),g(A,P,M,O,I),this.id||=Date.now().toString(36)+Math.random().toString(36).slice(2,5)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&S(this._wrapper,()=>this._expanded=!0)}get#e(){let e=this.type;return _([B.base,e===`success`&&B.positive,e===`warning`&&B.warning,e===`error`&&B.negative])}get#t(){let e=this.type;return _([B.iconBase,e===`success`&&B.iconPositive,e===`warning`&&B.iconWarning,e===`error`&&B.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector(`section`)??null}get _warning(){return this.type===`warning`}get _error(){return(this.type||`success`)===`error`}get _role(){return this._error||this._warning?`alert`:`status`}get _typeLabel(){return this._warning?a._({id:`toast.aria.warning`,message:`Warning`,comment:`Default screenreader message for warning in toast component`}):this._error?a._({id:`toast.aria.error`,message:`Error`,comment:`Default screenreader message for error in toast component`}):a._({id:`toast.aria.successful`,message:`Successful`,comment:`Default screenreader message for successful in toast component`})}get _iconMarkup(){let e=m();return this._warning?t`<w-icon
				name="Warning"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:this._error?t`<w-icon
				name="Error"
				size="small"
				locale="${e}"
				class="flex"
			></w-icon>`:t`<w-icon
			name="Success"
			size="small"
			locale="${e}"
			class="flex"
		></w-icon>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?w(this._wrapper,e):e()})}close(){let e=new CustomEvent(`close`,{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?t` <section
			class="${B.wrapper}"
			aria-label="${this._typeLabel}"
		>
			<div class="${this.#e}">
				<div class="${this.#t}">${this._iconMarkup}</div>
				<div role="${this._role}" class="${B.content}">
					<p>${this.text}</p>
				</div>
				${D(this.canclose===!0,()=>t`
						<w-button variant="pill" small="" @click="${this.close}">
							<w-icon
								name="Close"
								size="small"
								locale="${m()}"
								style="display: flex"
								class="flex"
							></w-icon>
						</w-button>
					`)}
			</div>
		</section>`:t``}},d([i({type:String,attribute:!0,reflect:!0})],V.prototype,`id`,void 0),d([i({type:String,attribute:!0,reflect:!0,useDefault:!0})],V.prototype,`type`,void 0),d([i({type:String,attribute:!0,reflect:!0})],V.prototype,`text`,void 0),d([i({type:Boolean,attribute:!0,reflect:!0})],V.prototype,`canclose`,void 0),d([l()],V.prototype,`_expanded`,void 0),customElements.get(`w-toast`)||customElements.define(`w-toast`,V)})))()}var U;function W(){return(W=e((()=>{f(),U=s(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.block{display:block}.grid{display:grid}.auto-rows-auto{grid-auto-rows:auto}.bottom-16{bottom:1.6rem}.left-0{left:0}.right-0{right:0}.justify-center{justify-content:center}.justify-items-center{justify-items:center}.fixed{position:fixed}.static{position:static}.z-50{z-index:50}.w-full{width:100%}.mx-8{margin-left:.8rem;margin-right:.8rem}.mx-auto{margin-left:auto;margin-right:auto}.pointer-events-none{pointer-events:none}.translate-z-0{--w-translate-z:0rem;transform:translateX(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotateZ(var(--w-rotate-z)) skewX(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotateZ(var(--w-rotate-z)) skewX(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))}@media (min-width:480px){.sm\\:mx-16{margin-left:1.6rem;margin-right:1.6rem}}`)})))()}var G,K;function q(){return(q=e((()=>{f(),r(),E(),o(),x(),W(),G={wrapper:`fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none`,base:`grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none`,content:`w-full`},K=class extends p{constructor(){super(),this._toasts=new Map,new u(this)}static{this.styles=[b,U,c`
			:host {
				display: block;
			}
		`]}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{let e=[],t=[];for(let n of this._toasts)Date.now()<=n[1].duration?e.push(n):t.push(n);let n=[];for(let[e]of t){let t=this.renderRoot.querySelector(`#${e}`);t&&n.push(t.collapse())}Promise.all(n).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector(`w-toast-container`);return e||(e=document.createElement(`w-toast-container`),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts,([,e])=>e)}get(e){if(!e)throw Error(`undefined "id" given when attempting to retrieve toast`);if(typeof e!=`string`&&!Number.isInteger(e))throw Error(`"id" must be number or string when attempting to retrieve toast`);return this._toasts.get(e)}set(e){if(!e.id)throw Error(`invalid or undefined "id" on toast object`);let t=this._toasts.set(e.id,{id:e.id,type:e.type??`success`,text:e.text??``,canclose:e.canclose??!1,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map([...this._toasts]),t}async del(e){if(!e)throw Error(`undefined "id" given when attempting to retrieve toast`);if(typeof e!=`string`&&!Number.isInteger(e))throw Error(`"id" must be number or string when attempting to retrieve toast`);let t=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e)||!t)return!1;await t.collapse();let n=this._toasts.delete(e);return this._toasts=new Map([...this._toasts]),n}render(){return t`
			<aside class="${G.wrapper}">
				<div class="${G.base}" id="w-toast-container-list">
					${T(this._toastsArray,e=>e.id,e=>t` <w-toast
								class="${G.content}"
								id="${e.id}"
								type="${e.type}"
								text="${e.text}"
								?canclose=${e.canclose}
								@close=${()=>this.del(e.id)}
							>
							</w-toast>`)}
				</div>
			</aside>
		`}},d([l()],K.prototype,`_toasts`,void 0),customElements.get(`w-toast-container`)||customElements.define(`w-toast-container`,K)})))()}export{q as n,H as r,K as t};