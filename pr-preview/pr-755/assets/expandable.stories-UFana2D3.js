import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,l as i,r as a,s as o,t as s,y as c}from"./decorate-Bt2QF_uA.js";import{n as l,r as u}from"./i18n-CkjYRTT1.js";import{i as d,n as f,o as p,t as m}from"./dist-D5kJVy4t.js";import{t as h}from"./icon-CD69d68Q.js";import{n as g,t as _}from"./styles-Cw_r5k83.js";import{i as v,n as y,r as b}from"./utilities-BHNt5DhH.js";import{r as x,t as S}from"./if-defined-DBI32Ir5.js";import{t as C}from"./expand-transition-ljF2sTGn.js";import{t as w}from"./button-BUSt27aY.js";import{t as T}from"./taggedTemplateLiteral-BZenJ0bZ.js";var E;function D(){return(D=e((()=>{n(),d(),E=class extends i{static properties={level:{type:Number}};get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?p(this._markup):r`<slot></slot>`}},customElements.get(`w-unstyled-heading`)||customElements.define(`w-unstyled-heading`,E)})))()}var O;function k(){return(k=e((()=>{n(),O=c`
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

	:host([box]) {
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

	:host([box]) [part="base"]:hover {
		background-color: var(--_background-color-hover);
	}

	:host([box]) [part="base"]:active {
		background-color: var(--_background-color-active);
	}

	:host([bleed]) [part="base"] {
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

	:host([box]) .button {
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

	:host(:not([box])) [part="chevron"] {
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

	::slotted(:last-child) {
		margin-bottom: 0px !important;
	}

	@media (min-width: 480px) {
		:host([bleed]) [part="base"] {
			border-radius: var(--_border-radius);
			margin-left: 0;
			margin-right: 0;
		}
	}
`})))()}var A;function j(){return(j=e((()=>{n(),a(),S(),h(),C(),u(),D(),_(),k(),A=class extends i{constructor(...e){super(...e),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[g,O]}updated(e){e.has(`expanded`)&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){let e=!!this.title,t=this.renderRoot.querySelector(`slot[name='title']`)?.assignedNodes().length>0;this._hasTitle=e||t}get#e(){let e=l();return this._showChevronUp?r`<w-icon
					class="chevron-icon"
					data-direction="up"
					name="ChevronUp"
					size="small"
					locale="${e}"
				></w-icon>`:r`<w-icon
					class="chevron-icon"
					data-direction="down"
					name="ChevronDown"
					size="small"
					locale="${e}"
				></w-icon>`}get _expandableSlot(){let e=this.contentClass?`content ${this.contentClass}`:`content`;return r`<div
			class=${e}
			data-has-title=${x(this._hasTitle?``:void 0)}
		>
			<slot></slot>
		</div>`}render(){let e=this.buttonClass?`button ${this.buttonClass}`:`button`;return r` <div part="base">
			${this._hasTitle?r`<w-unstyled-heading level=${x(this.headingLevel)}>
							<button
								class=${e}
								type="button"
								aria-expanded="${this.expanded}"
								@click=${()=>this.expanded=!this.expanded}
							>
								<div class="title">
									${this.title?r`<span class="title-text">${this.title}</span>`:r`<slot class="title-text" name="title"></slot>`}
									${this.noChevron?``:r`<div part="chevron">${this.#e}</div>`}
								</div>
							</button>
						</w-unstyled-heading>`:``}
			${this.animated?r`<w-expand-transition class="expansion" ?show=${this.expanded}>
							${this._expandableSlot}
						</w-expand-transition>`:r`<div
							class="expansion"
							aria-hidden=${x(!this.expanded||void 0)}
						>
							${this._expandableSlot}
						</div>`}
		</div>`}},s([o({type:Boolean,reflect:!0})],A.prototype,`expanded`,void 0),s([o({type:String})],A.prototype,`title`,void 0),s([o({type:Boolean,reflect:!0})],A.prototype,`box`,void 0),s([o({type:Boolean,reflect:!0})],A.prototype,`bleed`,void 0),s([o({attribute:`button-class`,type:String})],A.prototype,`buttonClass`,void 0),s([o({attribute:`content-class`,type:String})],A.prototype,`contentClass`,void 0),s([o({attribute:`no-chevron`,type:Boolean})],A.prototype,`noChevron`,void 0),s([o({type:Boolean})],A.prototype,`animated`,void 0),s([o({attribute:`heading-level`,type:Number})],A.prototype,`headingLevel`,void 0),s([o({type:Boolean,state:!0})],A.prototype,`_hasTitle`,void 0),s([o({type:Boolean,state:!0})],A.prototype,`_showChevronUp`,void 0),customElements.get(`w-expandable`)||customElements.define(`w-expandable`,A)})))()}var M=t({Animated:()=>V,Box:()=>B,CustomTitle:()=>W,Default:()=>R,Expanded:()=>z,NoChevron:()=>U,NoTitle:()=>G,StylingApi:()=>K,WithHeading:()=>H,__namedExportsOrder:()=>q,default:()=>L}),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{b(),f(),n(),w(),C(),D(),j(),{events:P,args:F,argTypes:I}=m(`w-expandable`),L={title:`Layout/Expandable`,render(e){return r`
            <w-expandable ${v(y(e))}>
                <p>This is the expandable content that can be shown or hidden.</p>
                <p>It can contain multiple paragraphs and other elements.</p>
            </w-expandable>
        `},args:F,argTypes:I,parameters:{actions:{handles:P}}},R={args:{title:`I'm expandable`,expanded:!1,box:!1,bleed:!1,animated:!1,noChevron:!1}},z={args:{title:`I'm expanded by default`,expanded:!0,box:!1,bleed:!1,animated:!1,noChevron:!1}},B={args:{title:`I'm a box expandable`,expanded:!1,box:!0,bleed:!1,animated:!1,noChevron:!1}},V={args:{title:`I'm animated`,expanded:!1,box:!0,bleed:!1,animated:!0,noChevron:!1}},H={args:{title:`I'm wrapped in h2`,expanded:!1,box:!0,bleed:!1,animated:!1,noChevron:!1,"heading-level":2}},U={args:{title:`I have no chevron`,expanded:!1,box:!1,bleed:!1,animated:!1,noChevron:!0}},W={args:{expanded:!1,box:!0,bleed:!1,animated:!1,noChevron:!1},render(e){return r`
            <w-expandable ${v(y(e))}>
                <div slot="title" style="display: flex; align-items: center;">
                    <span>Custom title with icon</span>
                </div>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
        `}},G={args:{expanded:!0,box:!0,animated:!0},render(e){return r(N||=T([`
            <w-button
                aria-label="Toggle expandable content without title"
                aria-controls="expandableWithoutTitle"
                >Toggle</w-button
            >
            <w-expandable `,` id="expandableWithoutTitle">
                <p>with expanded content</p>
            </w-expandable>
            <script>
                document
                    .querySelector('[aria-controls="expandableWithoutTitle"]')
                    .addEventListener("click", () => {
                        const expand = document.getElementById("expandableWithoutTitle");
                        if (expand.expanded) {
                            expand.removeAttribute("expanded");
                        } else {
                            expand.setAttribute("expanded", "true");
                        }
                    });
            <\/script>
        `]),v(y(e)))}},K={args:{title:`Styled expandable`,box:!0,expanded:!1},render(e){return r`
            <pre>
<code>
&lt;style&gt;
w-expandable {
    --w-c-expandable-bg: rebeccapurple;
    --w-c-expandable-bg-hover: indigo;
    --w-c-expandable-border-color: cyan;
    --w-c-expandable-border-width: 2px;
    --w-c-expandable-border-radius: 24px;
    --w-c-expandable-padding-x: 2rem;
    --w-c-expandable-padding-y: 1rem;
    --w-c-expandable-gap: 1.5rem;
    color: white;
}

w-expandable::part(base) {
    text-transform: uppercase;
    box-shadow: inset 0 0 0 2px magenta;
}

w-expandable::part(chevron) {
    color: white;
}
&lt;/style&gt;
</code>
            </pre>
            <style>
                w-expandable {
                    --w-c-expandable-bg: rebeccapurple;
                    --w-c-expandable-bg-hover: indigo;
                    --w-c-expandable-border-color: cyan;
                    --w-c-expandable-border-width: 2px;
                    --w-c-expandable-border-radius: 24px;
                    --w-c-expandable-padding-x: 2rem;
                    --w-c-expandable-padding-y: 1rem;
                    --w-c-expandable-gap: 1.5rem;
                    color: white;
                }

                w-expandable::part(base) {
                    text-transform: uppercase;
                    box-shadow: inset 0 0 0 2px magenta;
                }

                w-expandable::part(chevron) {
                    color: white;
                }
            </style>
            <w-expandable ${v(y(e))}>
                <p>This story demonstrates expandable tokens and parts.</p>
            </w-expandable>
        `}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expandable",
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    noChevron: false
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expanded by default",
    expanded: true,
    box: false,
    bleed: false,
    animated: false,
    noChevron: false
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm a box expandable",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    noChevron: false
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm animated",
    expanded: false,
    box: true,
    bleed: false,
    animated: true,
    noChevron: false
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm wrapped in h2",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    noChevron: false,
    "heading-level": 2
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I have no chevron",
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    noChevron: true
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    noChevron: false
  },
  render(args) {
    return html\`
            <w-expandable \${spread(prespread(args))}>
                <div slot="title" style="display: flex; align-items: center;">
                    <span>Custom title with icon</span>
                </div>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
        \`;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true,
    box: true,
    animated: true
  },
  render(args) {
    return html\`
            <w-button
                aria-label="Toggle expandable content without title"
                aria-controls="expandableWithoutTitle"
                >Toggle</w-button
            >
            <w-expandable \${spread(prespread(args))} id="expandableWithoutTitle">
                <p>with expanded content</p>
            </w-expandable>
            <script>
                document
                    .querySelector('[aria-controls="expandableWithoutTitle"]')
                    .addEventListener("click", () => {
                        const expand = document.getElementById("expandableWithoutTitle");
                        if (expand.expanded) {
                            expand.removeAttribute("expanded");
                        } else {
                            expand.setAttribute("expanded", "true");
                        }
                    });
            <\/script>
        \`;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Styled expandable",
    box: true,
    expanded: false
  },
  render(args) {
    return html\`
            <pre>
<code>
&lt;style&gt;
w-expandable {
    --w-c-expandable-bg: rebeccapurple;
    --w-c-expandable-bg-hover: indigo;
    --w-c-expandable-border-color: cyan;
    --w-c-expandable-border-width: 2px;
    --w-c-expandable-border-radius: 24px;
    --w-c-expandable-padding-x: 2rem;
    --w-c-expandable-padding-y: 1rem;
    --w-c-expandable-gap: 1.5rem;
    color: white;
}

w-expandable::part(base) {
    text-transform: uppercase;
    box-shadow: inset 0 0 0 2px magenta;
}

w-expandable::part(chevron) {
    color: white;
}
&lt;/style&gt;
</code>
            </pre>
            <style>
                w-expandable {
                    --w-c-expandable-bg: rebeccapurple;
                    --w-c-expandable-bg-hover: indigo;
                    --w-c-expandable-border-color: cyan;
                    --w-c-expandable-border-width: 2px;
                    --w-c-expandable-border-radius: 24px;
                    --w-c-expandable-padding-x: 2rem;
                    --w-c-expandable-padding-y: 1rem;
                    --w-c-expandable-gap: 1.5rem;
                    color: white;
                }

                w-expandable::part(base) {
                    text-transform: uppercase;
                    box-shadow: inset 0 0 0 2px magenta;
                }

                w-expandable::part(chevron) {
                    color: white;
                }
            </style>
            <w-expandable \${spread(prespread(args))}>
                <p>This story demonstrates expandable tokens and parts.</p>
            </w-expandable>
        \`;
  }
}`,...K.parameters?.docs?.source}}},q=[`Default`,`Expanded`,`Box`,`Animated`,`WithHeading`,`NoChevron`,`CustomTitle`,`NoTitle`,`StylingApi`]})))()}export{z as a,H as c,R as i,M as l,B as n,U as o,W as r,G as s,V as t,J as u};