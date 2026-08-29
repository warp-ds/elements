import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,l as r,r as i,s as a,t as o,y as s}from"./decorate-J4WBtiHw.js";import{n as c,r as l}from"./i18n-CkjYRTT1.js";import{i as u,o as d}from"./dist-Bnzru1sc.js";import{t as f}from"./icon-He5RsYT_.js";import{n as p,t as m}from"./styles-CYn3YYhE.js";import{r as h,t as g}from"./if-defined-hoo3qVMT.js";import{t as _}from"./expand-transition-DiGLoKMv.js";var v;function y(){return(y=e((()=>{t(),u(),v=class extends r{static properties={level:{type:Number}};get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?d(this._markup):n`<slot></slot>`}},customElements.get(`w-unstyled-heading`)||customElements.define(`w-unstyled-heading`,v)})))()}var b;function x(){return(x=e((()=>{t(),b=s`
	:host {
		display: block;
		--_padding-x: var(--w-c-expandable-padding-x, 0px);
		--_padding-y: var(--w-c-expandable-padding-y, 1.6rem);
		--_gap: var(--w-c-expandable-gap, 0.8rem);
		--_bleed-margin-inline: 1.6rem;
		--_background-color: var(--w-c-expandable-bg, transparent);
		--_background-color-hover: var(
			--w-c-expandable-bg-hover,
			var(--_background-color)
		);
		--_background-color-active: var(
			--w-c-expandable-bg-active,
			var(--_background-color)
		);
		--_border-color: var(--w-c-expandable-border-color, transparent);
		--_border-width: var(--w-c-expandable-border-width, 0px);
		--_border-radius: var(--w-c-expandable-border-radius, 8px);
		--_color: var(--w-c-expandable-color, var(--w-s-color-text));
		--_icon-color: var(--w-c-expandable-icon-color, var(--w-s-color-icon));
		--_title-font-size: var(
			--w-c-expandable-title-font-size,
			var(--w-font-size-m)
		);
		--_title-line-height: var(
			--w-c-expandable-title-line-height,
			var(--w-line-height-m)
		);
		--_title-font-weight: var(--w-c-expandable-title-font-weight, 700);
		--_transition-duration: var(--w-c-expandable-transition-duration, 150ms);
		--_transition-timing-function: var(
			--w-c-expandable-transition-timing-function,
			ease-in-out
		);
		--_expansion-transition-duration: var(
			--w-c-expandable-expansion-duration,
			0.3s
		);
		--_expansion-transition-timing-function: var(
			--w-c-expandable-expansion-timing-function
		);

		/* Forwarded to w-expand-transition / element-collapse.js */
		--w-expansion-duration: var(--_expansion-transition-duration);
		--w-expansion-timing-function: var(--_expansion-transition-timing-function);
	}

	:host([box]:not([variant])),
	:host([variant="box"]),
	:host([variant="box-bleed"]) {
		--_background-color: var(
			--w-c-expandable-bg,
			var(--w-s-color-background-subtle)
		);
		--_background-color-hover: var(
			--w-c-expandable-bg-hover,
			var(--w-s-color-background-subtle-hover)
		);
		--_background-color-active: var(
			--w-c-expandable-bg-active,
			var(--w-s-color-background-subtle-active)
		);
		--_padding-x: var(--w-c-expandable-padding-x, 1.6rem);
		--_padding-y: var(--w-c-expandable-padding-y, 1.6rem);
		--_gap: var(--w-c-expandable-gap, 1.6rem);
	}

	:host([variant="default-with-divider"]) {
		--_background-color: transparent;
		--_background-color-hover: var(
			--w-c-expandable-bg-hover,
			var(--_background-color)
		);
		--_background-color-active: var(
			--w-c-expandable-bg-active,
			var(--_background-color)
		);
		--_border-color: var(
			--w-c-expandable-divider-border-color,
			var(--Semantic-Color-Border-Default, #dedee3)
		);
		--_border-radius: 0px;
		--_gap: var(--w-c-expandable-gap, 8px);
		--_padding-x: 0px;
		--_padding-y: 0px;
	}

	[part="base"] {
		background-color: var(--_background-color);
		border: var(--_border-width) solid var(--_border-color);
		border-radius: var(--_border-radius);
		color: var(--_color);
		display: block;
		padding: var(--_padding-y) var(--_padding-x);
		position: relative;
		transition:
			background-color var(--_transition-duration)
				var(--_transition-timing-function),
			border-color var(--_transition-duration)
				var(--_transition-timing-function),
			color var(--_transition-duration) var(--_transition-timing-function);
		will-change: height;
	}

	:host([box]:not([variant])) [part="base"]:hover,
	:host([variant="box"]) [part="base"]:hover,
	:host([variant="box-bleed"]) [part="base"]:hover {
		background-color: var(--_background-color-hover);
	}

	:host([box]:not([variant])) [part="base"]:active,
	:host([variant="box"]) [part="base"]:active,
	:host([variant="box-bleed"]) [part="base"]:active {
		background-color: var(--_background-color-active);
	}

	:host([bleed]:not([variant])) [part="base"],
	:host([variant="box-bleed"]) [part="base"] {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		margin-left: calc(var(--_bleed-margin-inline) * -1);
		margin-right: calc(var(--_bleed-margin-inline) * -1);
	}

	.button {
		appearance: none;
		background-color: transparent;
		border: 0;
		cursor: pointer;
		margin: 0;
		padding: 0;
		text-align: left;
		width: auto;
	}

	.button:focus {
		outline: none;
	}

	.button:hover,
	.button:focus-visible {
		text-decoration: underline;
	}

	:host([box]:not([variant])) .button,
	:host([variant="box"]) .button,
	:host([variant="box-bleed"]) .button,
	:host([variant="default-with-divider"]) .button {
		align-items: center;
		display: inline-flex;
		justify-content: space-between;
		position: relative;
		width: 100%;
	}

	.title {
		align-items: center;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	:host([variant="default-with-divider"]) .title {
		border-top: 1px solid var(--_border-color);
		gap: var(--_gap);
		padding: 16px 16px 16px 0;
	}

	:host([variant="default-with-divider"][expanded]) [part="base"] {
		padding-bottom: 16px;
	}

	.title-text,
	slot[name="title"] {
		font-size: var(--_title-font-size);
		font-weight: var(--_title-font-weight);
		line-height: var(--_title-line-height);
	}

	[part="chevron"] {
		color: var(--_icon-color);
		display: inline-block;
		margin-left: 0;
		vertical-align: middle;
	}

	:host(:not([box]):not([variant])) [part="chevron"],
	:host([variant="default"]) [part="chevron"],
	:host([variant="default-with-divider"]) [part="chevron"] {
		margin-left: var(--_gap);
	}

	.chevron-icon {
		display: flex;
		transition: transform var(--_transition-duration)
			var(--_transition-timing-function);
	}

	:host([expanded]) .chevron-icon[data-direction="down"] {
		transform: rotate(-180deg);
	}

	:host(:not([expanded])) .chevron-icon[data-direction="up"] {
		transform: rotate(180deg);
	}

	.expansion {
		overflow: hidden;
	}

	.expansion[aria-hidden="true"] {
		height: 0;
		visibility: hidden;
	}

	.content[data-has-title] {
		margin-top: var(--_gap);
	}

	.content {
		overflow-wrap: break-word;
		position: relative;
	}

	:host([variant="default-with-divider"]:not(:first-of-type):last-of-type)
		[part="base"] {
		border-bottom: 1px solid var(--_border-color);
	}

	::slotted(:last-child) {
		margin-bottom: 0px !important;
	}

	@media (min-width: 480px) {
		:host([bleed]:not([variant])) [part="base"],
		:host([variant="box-bleed"]) [part="base"] {
			border-radius: var(--_border-radius);
			margin-left: 0;
			margin-right: 0;
		}
	}
`})))()}var S;function C(){return(C=e((()=>{t(),i(),g(),f(),_(),l(),y(),m(),x(),S=class extends r{constructor(...e){super(...e),this.expanded=!1,this.variant=`default`,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[p,b]}updated(e){e.has(`expanded`)&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){let e=!!this.title,t=this.renderRoot.querySelector(`slot[name='title']`)?.assignedNodes().length>0;this._hasTitle=e||t}get#e(){let e=c();return this._showChevronUp?n`<w-icon
					class="chevron-icon"
					data-direction="up"
					name="ChevronUp"
					size="small"
					locale="${e}"
				></w-icon>`:n`<w-icon
					class="chevron-icon"
					data-direction="down"
					name="ChevronDown"
					size="small"
					locale="${e}"
				></w-icon>`}get _expandableSlot(){let e=this.contentClass?`content ${this.contentClass}`:`content`;return n`<div
			class=${e}
			data-has-title=${h(this._hasTitle?``:void 0)}
		>
			<slot></slot>
		</div>`}render(){let e=this.buttonClass?`button ${this.buttonClass}`:`button`;return n` <div part="base">
			${this._hasTitle?n`<w-unstyled-heading level=${h(this.headingLevel)}>
							<button
								class=${e}
								type="button"
								aria-expanded="${this.expanded}"
								@click=${()=>this.expanded=!this.expanded}
							>
								<div class="title">
									${this.title?n`<span class="title-text">${this.title}</span>`:n`<slot class="title-text" name="title"></slot>`}
									${this.noChevron?``:n`<div part="chevron">${this.#e}</div>`}
								</div>
							</button>
						</w-unstyled-heading>`:``}
			${this.animated?n`<w-expand-transition class="expansion" ?show=${this.expanded}>
							${this._expandableSlot}
						</w-expand-transition>`:n`<div
							class="expansion"
							aria-hidden=${h(!this.expanded||void 0)}
						>
							${this._expandableSlot}
						</div>`}
		</div>`}},o([a({type:Boolean,reflect:!0})],S.prototype,`expanded`,void 0),o([a({type:String})],S.prototype,`title`,void 0),o([a({type:String,reflect:!0,useDefault:!0})],S.prototype,`variant`,void 0),o([a({type:Boolean,reflect:!0})],S.prototype,`box`,void 0),o([a({type:Boolean,reflect:!0})],S.prototype,`bleed`,void 0),o([a({attribute:`button-class`,type:String})],S.prototype,`buttonClass`,void 0),o([a({attribute:`content-class`,type:String})],S.prototype,`contentClass`,void 0),o([a({attribute:`no-chevron`,type:Boolean})],S.prototype,`noChevron`,void 0),o([a({type:Boolean})],S.prototype,`animated`,void 0),o([a({attribute:`heading-level`,type:Number})],S.prototype,`headingLevel`,void 0),o([a({type:Boolean,state:!0})],S.prototype,`_hasTitle`,void 0),o([a({type:Boolean,state:!0})],S.prototype,`_showChevronUp`,void 0),customElements.get(`w-expandable`)||customElements.define(`w-expandable`,S)})))()}export{y as n,C as t};