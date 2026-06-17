import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,c as n,n as r,t as i}from"./lit-BuckkhbU.js";import{n as a,t as o}from"./dist-BTTyunOH.js";import{l as s,n as c,r as l,t as u}from"./decorate-CINhncxq.js";import{d,g as f,h as p,l as m,u as h,v as g,y as _}from"./iframe-CbKUZITT.js";import{n as v,t as y}from"./form-control-DtXadPi-.js";var b,x=e((()=>{i(),b=t(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.justify-center{justify-content:center}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-text{color:var(--w-s-color-text)}.w-40{width:4rem}.w-max{width:max-content}.pb-0{padding-bottom:0}.pl-12{padding-left:1.2rem}.pr-12{padding-right:1.2rem}.cursor-default{cursor:default}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`)})),S,C,w,T=e((()=>{p(),a(),i(),l(),y(),m(),x(),d(),_(),c(),S={wrapper:`absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent right-0`,wrapperWithLabel:`w-max pr-12`,wrapperWithIcon:`w-40`,label:`antialiased block relative cursor-default pb-0 font-bold text-xs s-text`},C={wrapper:`absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent left-0`,wrapperWithLabel:`w-max pl-12`,wrapperWithIcon:`w-40`,label:`antialiased block relative cursor-default pb-0 font-bold text-xs s-text`},w=class extends v(r){constructor(...e){super(...e),this.ariaLabel=null,this.clear=!1,this.search=!1,this.label=``,this.icon=null}static{this.styles=[h,b]}get _classBase(){return this.slot===`suffix`?S:C}get _classes(){return f([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}resetContainingTextField(e){let t=this.closest(`w-textfield`);t&&t.resetFormControl(),e.stopPropagation()}submitContainingForm(e){let t=this.internals.form;t&&t.submit(),e.stopPropagation()}get _searchButton(){return n`
			<button
				aria-label="${this.ariaLabel||o._({id:`affix.aria.search`,message:`Search`,comment:`Aria label for the search button in affix`})}"
				class="${this._classes}"
				type="submit"
				@click="${this.submitContainingForm.bind(this)}"
			>
				<w-icon
					name="Search"
					size="small"
					locale="${g()}"
					class="flex"
				></w-icon>
			</button>
		`}get _clearButton(){return n`
			<button
				aria-label="${this.ariaLabel||o._({id:`affix.aria.clearInput`,message:`Clear input`,comment:`Aria label for the clear input button in affix`})}"
				class="${this._classes}"
				type="reset"
				@click="${this.resetContainingTextField.bind(this)}"
			>
				<w-icon
					name="Close"
					size="small"
					locale="${g()}"
					class="flex"
				></w-icon>
			</button>
		`}get _icon(){return this.icon?n`
				<div class="${this._classes}">
					<w-icon
						name="${this.icon}"
						size="small"
						locale="${g()}"
						class="flex"
					></w-icon>
				</div>
			`:``}get _text(){return n`
			<div class="${this._classes}">
				<span class="${this._classBase.label}">${this.label}</span>
			</div>
		`}get _markup(){if(this.label)return this._text;if(this.icon)return this._icon;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return n`${this._markup}`}},u([s({attribute:`aria-label`,reflect:!0,useDefault:!0})],w.prototype,`ariaLabel`,void 0),u([s({type:Boolean})],w.prototype,`clear`,void 0),u([s({type:Boolean})],w.prototype,`search`,void 0),u([s({reflect:!0,useDefault:!0})],w.prototype,`label`,void 0),u([s({reflect:!0,useDefault:!0})],w.prototype,`icon`,void 0),customElements.get(`w-affix`)||customElements.define(`w-affix`,w)}));export{T as t};