import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,d as r,h as i,l as ee,r as a,s as o,t as s,y as c}from"./decorate-J4WBtiHw.js";import{a as l,o as u,r as d,t as f}from"./i18n-CkjYRTT1.js";import{n as p,t as m}from"./dist-Bnzru1sc.js";import{n as h,t as te}from"./styles-CYn3YYhE.js";import{i as g,n as _,r as ne}from"./utilities-DhdP2kMI.js";import{r as re,t as v}from"./if-defined-hoo3qVMT.js";var y;function b(){return(b=e((()=>{y=JSON.parse(`{"card.button.text":["Vælg"]}`)})))()}var x;function S(){return(S=e((()=>{x=JSON.parse(`{"card.button.text":["Select"]}`)})))()}var C;function w(){return(w=e((()=>{C=JSON.parse(`{"card.button.text":["Valitse"]}`)})))()}var T;function E(){return(E=e((()=>{T=JSON.parse(`{"card.button.text":["Velg"]}`)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"card.button.text":["Välj"]}`)})))()}var k;function A(){return(A=e((()=>{n(),k=c`
	:host {
		--_background-color: var(
			--w-c-card-bg,
			var(--w-s-color-surface-elevated-200)
		);
		--_background-color-active: var(
			--w-c-card-bg-active,
			var(--w-s-color-background-active)
		);
		--_background-color-hover: var(
			--w-c-card-bg-hover,
			var(--w-s-color-background-hover)
		);
		--_border-color: var(--w-c-card-border-color, transparent);
		--_border-color-active: var(
			--w-c-card-border-color-active,
			var(--w-s-color-border-active)
		);
		--_border-color-hover: var(
			--w-c-card-border-color-hover,
			var(--w-s-color-border-hover)
		);
		--_border-radius: var(--w-c-card-border-radius, 8px);
		--_border-width: var(--w-c-card-border-width, 2px);
		--_box-shadow: var(
			--w-c-card-box-shadow,
			var(--w-s-shadow-surface-elevated-200)
		);
		--_box-shadow-active: var(
			--w-c-card-box-shadow-active,
			var(--w-s-shadow-surface-elevated-200-active)
		);
		--_box-shadow-hover: var(
			--w-c-card-box-shadow-hover,
			var(--w-s-shadow-surface-elevated-200-hover)
		);
	}

	:host([flat]) {
		--_border-color: var(--w-c-card-border-color, var(--w-s-color-border));
		--_border-width: var(--w-c-card-border-width, 2px);
		--_border-radius: var(--w-c-card-border-radius, 4px);
		--_box-shadow: none;
		--_box-shadow-active: none;
		--_box-shadow-hover: none;
	}

	:host([selected]) {
		--_background-color: var(
			--w-c-card-bg,
			var(--w-s-color-background-selected)
		);
		--_background-color-active: var(
			--w-c-card-bg-active,
			var(--w-s-color-background-selected-active)
		);
		--_background-color-hover: var(
			--w-c-card-bg-hover,
			var(--w-s-color-background-selected-hover)
		);
		--_border-color: var(
			--w-c-card-border-color,
			var(--w-s-color-border-selected)
		);
		--_border-color-active: var(
			--w-c-card-border-color-active,
			var(--w-s-color-border-selected-active)
		);
		--_border-color-hover: var(
			--w-c-card-border-color-hover,
			var(--w-s-color-border-selected-hover)
		);
		--_border-width: var(--w-c-card-border-width, 2px);
	}

	[part="base"] {
		background-color: var(--_background-color);
		border-radius: var(--_border-radius);
		box-shadow: var(--_box-shadow);
		display: block;
		overflow: hidden;
		position: relative;
	}

	:host([clickable]) [part="base"] {
		cursor: pointer;
		transition-property: all;
		transition-duration: 0.15s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	:host([clickable]) [part="base"]:hover {
		background-color: var(--_background-color-hover);
		box-shadow: var(--_box-shadow-hover);
	}

	:host([clickable]) [part="base"]:active {
		background-color: var(--_background-color-active);
		box-shadow: var(--_box-shadow-active);
	}

	[part="border"] {
		border-radius: var(--_border-radius);
		border-color: var(--_border-color);
		border-width: var(--_border-width);
		pointer-events: none;
		position: absolute;
		inset: 0px;
		transition-property: all;
		transition-duration: 0.15s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	:host([clickable][flat]) [part="base"]:hover [part="border"],
	:host([clickable][selected]) [part="base"]:hover [part="border"] {
		border-color: var(--_border-color-hover);
	}

	:host([clickable]) [part="base"]:active [part="border"] {
		border-color: var(--_border-color-active);
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
`})))()}var j,M;function N(){return(N=e((()=>{u(),n(),a(),v(),d(),te(),b(),S(),w(),E(),O(),A(),j={ENTER:`Enter`,SPACE:` `},M=class extends ee{static{this.styles=[h,k,c`
			a::after {
				content: "";
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
			}
			:host {
				display: block;
			}
		`]}constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,f(x,T,C,y,D),this.buttonText=l._({id:`card.button.text`,message:`Select`,comment:`Screenreader message to indicate that the card is clickable`})}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===j.ENTER||e.key===j.SPACE)&&(e.preventDefault(),this.click())}render(){return i`
			<div
				part="base"
				tabindex=${re(this.clickable?`0`:void 0)}
				@keydown=${this.keypressed}
			>
				<div part="border"></div>
				${this.clickable?i`<button
								class="sr-only"
								aria-pressed="${this.selected}"
								tabindex="-1"
							>
								${this.buttonText}
							</button>`:this.selected?i`<span
									class="sr-only"
									role="checkbox"
									aria-checked="true"
									aria-disabled="true"
								></span>`:r}
				<slot></slot>
			</div>
		`}},s([o({type:Boolean,reflect:!0})],M.prototype,`selected`,void 0),s([o({type:Boolean})],M.prototype,`flat`,void 0),s([o({type:Boolean})],M.prototype,`clickable`,void 0),customElements.get(`w-card`)||customElements.define(`w-card`,M)})))()}var P=t({AdvancedExample:()=>X,AdvancederExamples:()=>Z,CardCardClickablePlusASecondInteractiveElement:()=>J,CardNoNavigation:()=>K,CardSeparateInteractiveElements:()=>Y,CardWholeCardClickable:()=>q,Clickable:()=>U,Default:()=>z,Flat:()=>V,FlatSelected:()=>H,PropertyExample:()=>W,Selected:()=>B,StylingApi:()=>G,__namedExportsOrder:()=>Q,default:()=>R}),F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ne(),p(),n(),N(),{events:F,args:I,argTypes:L}=m(`w-card`),R={title:`Navigation/Card`,render(e){return i`
            <w-card ${g(_(e))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        `},args:I,argTypes:L,parameters:{actions:{handles:F}}},z={args:{selected:!1,flat:!1,clickable:!1}},B={args:{selected:!0,flat:!1,clickable:!1}},V={args:{selected:!1,flat:!0,clickable:!1}},H={args:{selected:!0,flat:!0,clickable:!1}},U={args:{selected:!1,flat:!1,clickable:!0}},W={args:{selected:!1,flat:!1,clickable:!0},render(e){return i`
            <w-card ${g(_(e))}>
                <img
                    style="width: 100%; height: 200px; object-fit: cover;"
                    src="https://unsplash.it/300/200?random"
                    alt="Example image"
                />
                <div style="padding: 16px;">
                    <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">
                        DNB Eiendom
                    </p>
                    <p style="margin: 0 0 8px 0;">
                        Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.
                    </p>
                    <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">
                        Bøgata 25C, 0655 Oslo
                    </p>
                    <p style="font-weight: bold; margin: 0;">
                        52 m² Totalpris: 4 869 039 kr
                    </p>
                </div>
            </w-card>
        `}},G={args:{clickable:!1,selected:!1,flat:!1},render(e){return i`
            <pre>
<code>
&lt;style&gt;
w-card::part(base) {
    padding: 48px;
    background: rebeccapurple;
    color: cyan;
}
w-card::part(border) {
    border-color: magenta;
    border-width: 8px;
}
&lt;/style&gt;
</code>
        </pre>
            <style>
                w-card::part(base) {
                    padding: 48px;
                    background: rebeccapurple;
                    color: cyan;
                }
                w-card::part(border) {
                    border-color: magenta;
                    border-width: 8px;
                }
            </style>
            <w-card ${g(_(e))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        `}},K={args:{},render(){return i`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">This is the card title</h3>
                    <p>This is the card content</p>
                </div>
            </w-card>
        `}},q={args:{},render(){return i`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                </div>
            </w-card>
        `}},J={args:{},render(){return i`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                    <a href="http://google.com" data-card-secondary-action>Learn more</a>
                </div>
            </w-card>
        `}},Y={args:{},render(){return i`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#">This is the card title</a>
                    </h3>
                    <a href="http://google.com">Learn more</a>
                </div>
            </w-card>
        `}},X={args:{},render(e){return i`
            <w-card ${g(_(e))}>
                <img
                    style="width: 100%; height: 200px; object-fit: cover;"
                    src="https://unsplash.it/300/200?random"
                    alt="Example image"
                />
                <div style="padding: 16px;">
                    <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">
                        DNB Eiendom
                    </p>
                    <h3 class="t4">
                        <a href="#" data-card-action>
                            Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.
                        </a>
                    </h3>
                    <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">
                        Bøgata 25C, 0655 Oslo
                    </p>
                    <p style="font-weight: bold; margin: 0;">
                        52 m² Totalpris: 4 869 039 kr
                    </p>
                </div>
            </w-card>
        `}},Z={args:{},render(e){return i`<div class="flex" style="gap: 16px; margin-bottom: 40px;">
                <w-card class="max-w-[223] min-w-[223]" ${g(_(e))}>
                    <article
                        class="flex flex-col p-16 s-text-inverted-static"
                        style="background-color: #486579"
                    >
                        <h4 class="t4">
                            <a
                                href="#"
                                @click="${()=>console.log(`tracking event`)}"
                                data-card-action
                            >
                                BYD Atto 2</a
                            >
                        </h4>
                        <p class="text-details">Från 369 900 kr</p>
                        <img
                            src="https://unsplash.it/300/200?random"
                            class="w-full"
                            loading="lazy"
                            width="800"
                            height="500"
                        />
                    </article>
                </w-card>
                <w-card class="max-w-[223] min-w-[223]" ${g(_(e))}>
                    <article
                        class="flex flex-col p-16 s-text-inverted-static"
                        style="background-color: #486579"
                    >
                        <h4 class="t4">
                            <a
                                href="#"
                                @click="${()=>console.log(`tracking event`)}"
                                data-card-action
                            >
                                BYD Atto 2</a
                            >
                        </h4>
                        <p class="text-details">Från 369 900 kr</p>
                        <img
                            src="https://unsplash.it/300/200?random"
                            class="w-full"
                            loading="lazy"
                            width="800"
                            height="500"
                        />
                    </article>
                </w-card>
                <w-card class="max-w-[223] min-w-[223]" ${g(_(e))}>
                    <article
                        class="flex flex-col p-16 s-text-inverted-static"
                        style="background-color: #486579"
                    >
                        <h4 class="t4">
                            <a
                                href="#"
                                @click="${()=>console.log(`tracking event`)}"
                                data-card-action
                            >
                                BYD Atto 2</a
                            >
                        </h4>
                        <p class="text-details">Från 369 900 kr</p>
                        <img
                            src="https://unsplash.it/300/200?random"
                            class="w-full"
                            loading="lazy"
                            width="800"
                            height="500"
                        />
                    </article>
                </w-card>
            </div>
            <div
                class="grid gap-16 grid-cols-1 md:grid-cols-3"
                style="gap: 16px; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-bottom: 40px"
            >
                <w-card
                    class="relative grid grid-rows-1 h-full"
                    ${g(_(e))}
                >
                    <div class="flex items-center gap-24 pr-16 h-full">
                        <div class="relative w-[112] h-[112] shrink-0">
                            <img
                                class="w-full h-full object-cover"
                                src="https://unsplash.it/100/100?random"
                                alt=""
                            />
                            <div
                                class="absolute inset-0"
                                style="background-color: rgba(0, 0, 0, 0.3)"
                            ></div>
                            <img
                                class="absolute left-12 top-12 w-32 h-32 object-contain"
                                src="https://unsplash.it/300/200?random"
                                alt=""
                            />
                        </div>
                        <div class="flex flex-col gap-4 min-w-0">
                            <h4 class="font-bold s-text">
                                <a
                                    href="#"
                                    @click="${()=>console.log(`tracking event`)}"
                                    data-card-action
                                    >BYD</a
                                >
                            </h4>
                            <span class="text-s s-text-subtle">7 modeller</span>
                        </div>
                    </div>
                </w-card>
                <w-card
                    class="relative grid grid-rows-1 h-full"
                    ${g(_(e))}
                >
                    <div class="flex items-center gap-24 pr-16 h-full">
                        <div class="relative w-[112] h-[112] shrink-0">
                            <img
                                class="w-full h-full object-cover"
                                src="https://unsplash.it/100/100?random"
                                alt=""
                            />
                            <div
                                class="absolute inset-0"
                                style="background-color: rgba(0, 0, 0, 0.3)"
                            ></div>
                            <img
                                class="absolute left-12 top-12 w-32 h-32 object-contain"
                                src="https://unsplash.it/300/200?random"
                                alt=""
                            />
                        </div>
                        <div class="flex flex-col gap-4 min-w-0">
                            <h4 class="font-bold s-text">
                                <a
                                    href="#"
                                    @click="${()=>console.log(`tracking event`)}"
                                    data-card-action
                                    >BYD</a
                                >
                            </h4>
                            <span class="text-s s-text-subtle">7 modeller</span>
                        </div>
                    </div>
                </w-card>
                <w-card
                    class="relative grid grid-rows-1 h-full"
                    ${g(_(e))}
                >
                    <div class="flex items-center gap-24 pr-16 h-full">
                        <div class="relative w-[112] h-[112] shrink-0">
                            <img
                                class="w-full h-full object-cover"
                                src="https://unsplash.it/100/100?random"
                                alt=""
                            />
                            <div
                                class="absolute inset-0"
                                style="background-color: rgba(0, 0, 0, 0.3)"
                            ></div>
                            <img
                                class="absolute left-12 top-12 w-32 h-32 object-contain"
                                src="https://unsplash.it/300/200?random"
                                alt=""
                            />
                        </div>
                        <div class="flex flex-col gap-4 min-w-0">
                            <h4 class="font-bold s-text">
                                <a
                                    href="#"
                                    @click="${()=>console.log(`tracking event`)}"
                                    data-card-action
                                    >BYD</a
                                >
                            </h4>
                            <span class="text-s s-text-subtle">7 modeller</span>
                        </div>
                    </div>
                </w-card>
            </div>
            <div
                class="flex"
                style="gap: 16px; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-bottom: 40px"
            >
                <w-card class="relative grid grid-rows-1 h-full">
                    <article class="flex flex-col gap-8 p-16 h-full">
                        <div class="flex flex-col gap-4">
                            <h4 class="font-bold s-text">
                                <a
                                    href="#"
                                    @click="${()=>console.log(`tracking event`)}"
                                    data-card-action
                                    >BYD</a
                                >
                            </h4>
                            <span class="s-text-subtle">Från 369 900 kr</span>
                        </div>
                        <img
                            class="w-full object-cover"
                            width="800"
                            height="500"
                            loading="lazy"
                            src="https://unsplash.it/300/200?random"
                            alt=""
                        />
                        <div class="flex gap-16">
                            <div class="flex flex-col">
                                <span class="text-s s-text-subtle">Drivmedel</span>
                                <span class="font-bold s-text">Flera</span>
                            </div>

                            <div class="flex flex-col">
                                <span class="text-s s-text-subtle">Förbrukning (blandad)</span>
                                <span class="font-bold s-text">2.7 - 6.3 l/100km</span>
                            </div>
                        </div>
                    </article>
                </w-card>
                <w-card class="relative grid grid-rows-1 h-full">
                    <article class="flex flex-col gap-8 p-16 h-full">
                        <div class="flex flex-col gap-4">
                            <h4 class="font-bold s-text">
                                <a
                                    href="#"
                                    @click="${()=>console.log(`tracking event`)}"
                                    data-card-action
                                    >BYD</a
                                >
                            </h4>
                            <span class="s-text-subtle">Från 369 900 kr</span>
                        </div>
                        <img
                            class="w-full object-cover"
                            width="800"
                            height="500"
                            loading="lazy"
                            src="https://unsplash.it/300/200?random"
                            alt=""
                        />
                        <div class="flex gap-16">
                            <div class="flex flex-col">
                                <span class="text-s s-text-subtle">Drivmedel</span>
                                <span class="font-bold s-text">Flera</span>
                            </div>

                            <div class="flex flex-col">
                                <span class="text-s s-text-subtle">Förbrukning (blandad)</span>
                                <span class="font-bold s-text">2.7 - 6.3 l/100km</span>
                            </div>
                        </div>
                    </article>
                </w-card>
            </div>`}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: false
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: false,
    clickable: false
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: true,
    clickable: false
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: true,
    clickable: false
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  },
  render(args) {
    return html\`
            <w-card \${spread(prespread(args))}>
                <img
                    style="width: 100%; height: 200px; object-fit: cover;"
                    src="https://unsplash.it/300/200?random"
                    alt="Example image"
                />
                <div style="padding: 16px;">
                    <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">
                        DNB Eiendom
                    </p>
                    <p style="margin: 0 0 8px 0;">
                        Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.
                    </p>
                    <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">
                        Bøgata 25C, 0655 Oslo
                    </p>
                    <p style="font-weight: bold; margin: 0;">
                        52 m² Totalpris: 4 869 039 kr
                    </p>
                </div>
            </w-card>
        \`;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    clickable: false,
    selected: false,
    flat: false
  },
  render(args) {
    return html\`
            <pre>
<code>
&lt;style&gt;
w-card::part(base) {
    padding: 48px;
    background: rebeccapurple;
    color: cyan;
}
w-card::part(border) {
    border-color: magenta;
    border-width: 8px;
}
&lt;/style&gt;
</code>
        </pre>
            <style>
                w-card::part(base) {
                    padding: 48px;
                    background: rebeccapurple;
                    color: cyan;
                }
                w-card::part(border) {
                    border-color: magenta;
                    border-width: 8px;
                }
            </style>
            <w-card \${spread(prespread(args))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        \`;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">This is the card title</h3>
                    <p>This is the card content</p>
                </div>
            </w-card>
        \`;
  }
}`,...K.parameters?.docs?.source},description:{story:`Example of a card that is not focusable or clickable, and has no interactive elements inside it.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                </div>
            </w-card>
        \`;
  }
}`,...q.parameters?.docs?.source},description:{story:`Example of a card that has a single interactive element inside it that is both sematically correct and the clickable area expands to fill the card.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                    <a href="http://google.com" data-card-secondary-action>Learn more</a>
                </div>
            </w-card>
        \`;
  }
}`,...J.parameters?.docs?.source},description:{story:`Example of a card that has a sematically correct main clickable interactive element that expands to fill the card,
and also has a second interactive element inside it.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#">This is the card title</a>
                    </h3>
                    <a href="http://google.com">Learn more</a>
                </div>
            </w-card>
        \`;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Example of a card that has two interactive elements inside it, but the card itself is not clickable.
The interactive elements are independently clickable and focusable, and the card itself is not focusable or clickable.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {},
  render(args) {
    return html\`
            <w-card \${spread(prespread(args))}>
                <img
                    style="width: 100%; height: 200px; object-fit: cover;"
                    src="https://unsplash.it/300/200?random"
                    alt="Example image"
                />
                <div style="padding: 16px;">
                    <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">
                        DNB Eiendom
                    </p>
                    <h3 class="t4">
                        <a href="#" data-card-action>
                            Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.
                        </a>
                    </h3>
                    <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">
                        Bøgata 25C, 0655 Oslo
                    </p>
                    <p style="font-weight: bold; margin: 0;">
                        52 m² Totalpris: 4 869 039 kr
                    </p>
                </div>
            </w-card>
        \`;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {},
  render(args) {
    return html\`<div class="flex" style="gap: 16px; margin-bottom: 40px;">
                <w-card class="max-w-[223] min-w-[223]" \${spread(prespread(args))}>
                    <article
                        class="flex flex-col p-16 s-text-inverted-static"
                        style="background-color: #486579"
                    >
                        <h4 class="t4">
                            <a
                                href="#"
                                @click="\${() => console.log("tracking event")}"
                                data-card-action
                            >
                                BYD Atto 2</a
                            >
                        </h4>
                        <p class="text-details">Från 369 900 kr</p>
                        <img
                            src="https://unsplash.it/300/200?random"
                            class="w-full"
                            loading="lazy"
                            width="800"
                            height="500"
                        />
                    </article>
                </w-card>
                <w-card class="max-w-[223] min-w-[223]" \${spread(prespread(args))}>
                    <article
                        class="flex flex-col p-16 s-text-inverted-static"
                        style="background-color: #486579"
                    >
                        <h4 class="t4">
                            <a
                                href="#"
                                @click="\${() => console.log("tracking event")}"
                                data-card-action
                            >
                                BYD Atto 2</a
                            >
                        </h4>
                        <p class="text-details">Från 369 900 kr</p>
                        <img
                            src="https://unsplash.it/300/200?random"
                            class="w-full"
                            loading="lazy"
                            width="800"
                            height="500"
                        />
                    </article>
                </w-card>
                <w-card class="max-w-[223] min-w-[223]" \${spread(prespread(args))}>
                    <article
                        class="flex flex-col p-16 s-text-inverted-static"
                        style="background-color: #486579"
                    >
                        <h4 class="t4">
                            <a
                                href="#"
                                @click="\${() => console.log("tracking event")}"
                                data-card-action
                            >
                                BYD Atto 2</a
                            >
                        </h4>
                        <p class="text-details">Från 369 900 kr</p>
                        <img
                            src="https://unsplash.it/300/200?random"
                            class="w-full"
                            loading="lazy"
                            width="800"
                            height="500"
                        />
                    </article>
                </w-card>
            </div>
            <div
                class="grid gap-16 grid-cols-1 md:grid-cols-3"
                style="gap: 16px; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-bottom: 40px"
            >
                <w-card
                    class="relative grid grid-rows-1 h-full"
                    \${spread(prespread(args))}
                >
                    <div class="flex items-center gap-24 pr-16 h-full">
                        <div class="relative w-[112] h-[112] shrink-0">
                            <img
                                class="w-full h-full object-cover"
                                src="https://unsplash.it/100/100?random"
                                alt=""
                            />
                            <div
                                class="absolute inset-0"
                                style="background-color: rgba(0, 0, 0, 0.3)"
                            ></div>
                            <img
                                class="absolute left-12 top-12 w-32 h-32 object-contain"
                                src="https://unsplash.it/300/200?random"
                                alt=""
                            />
                        </div>
                        <div class="flex flex-col gap-4 min-w-0">
                            <h4 class="font-bold s-text">
                                <a
                                    href="#"
                                    @click="\${() => console.log("tracking event")}"
                                    data-card-action
                                    >BYD</a
                                >
                            </h4>
                            <span class="text-s s-text-subtle">7 modeller</span>
                        </div>
                    </div>
                </w-card>
                <w-card
                    class="relative grid grid-rows-1 h-full"
                    \${spread(prespread(args))}
                >
                    <div class="flex items-center gap-24 pr-16 h-full">
                        <div class="relative w-[112] h-[112] shrink-0">
                            <img
                                class="w-full h-full object-cover"
                                src="https://unsplash.it/100/100?random"
                                alt=""
                            />
                            <div
                                class="absolute inset-0"
                                style="background-color: rgba(0, 0, 0, 0.3)"
                            ></div>
                            <img
                                class="absolute left-12 top-12 w-32 h-32 object-contain"
                                src="https://unsplash.it/300/200?random"
                                alt=""
                            />
                        </div>
                        <div class="flex flex-col gap-4 min-w-0">
                            <h4 class="font-bold s-text">
                                <a
                                    href="#"
                                    @click="\${() => console.log("tracking event")}"
                                    data-card-action
                                    >BYD</a
                                >
                            </h4>
                            <span class="text-s s-text-subtle">7 modeller</span>
                        </div>
                    </div>
                </w-card>
                <w-card
                    class="relative grid grid-rows-1 h-full"
                    \${spread(prespread(args))}
                >
                    <div class="flex items-center gap-24 pr-16 h-full">
                        <div class="relative w-[112] h-[112] shrink-0">
                            <img
                                class="w-full h-full object-cover"
                                src="https://unsplash.it/100/100?random"
                                alt=""
                            />
                            <div
                                class="absolute inset-0"
                                style="background-color: rgba(0, 0, 0, 0.3)"
                            ></div>
                            <img
                                class="absolute left-12 top-12 w-32 h-32 object-contain"
                                src="https://unsplash.it/300/200?random"
                                alt=""
                            />
                        </div>
                        <div class="flex flex-col gap-4 min-w-0">
                            <h4 class="font-bold s-text">
                                <a
                                    href="#"
                                    @click="\${() => console.log("tracking event")}"
                                    data-card-action
                                    >BYD</a
                                >
                            </h4>
                            <span class="text-s s-text-subtle">7 modeller</span>
                        </div>
                    </div>
                </w-card>
            </div>
            <div
                class="flex"
                style="gap: 16px; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-bottom: 40px"
            >
                <w-card class="relative grid grid-rows-1 h-full">
                    <article class="flex flex-col gap-8 p-16 h-full">
                        <div class="flex flex-col gap-4">
                            <h4 class="font-bold s-text">
                                <a
                                    href="#"
                                    @click="\${() => console.log("tracking event")}"
                                    data-card-action
                                    >BYD</a
                                >
                            </h4>
                            <span class="s-text-subtle">Från 369 900 kr</span>
                        </div>
                        <img
                            class="w-full object-cover"
                            width="800"
                            height="500"
                            loading="lazy"
                            src="https://unsplash.it/300/200?random"
                            alt=""
                        />
                        <div class="flex gap-16">
                            <div class="flex flex-col">
                                <span class="text-s s-text-subtle">Drivmedel</span>
                                <span class="font-bold s-text">Flera</span>
                            </div>

                            <div class="flex flex-col">
                                <span class="text-s s-text-subtle">Förbrukning (blandad)</span>
                                <span class="font-bold s-text">2.7 - 6.3 l/100km</span>
                            </div>
                        </div>
                    </article>
                </w-card>
                <w-card class="relative grid grid-rows-1 h-full">
                    <article class="flex flex-col gap-8 p-16 h-full">
                        <div class="flex flex-col gap-4">
                            <h4 class="font-bold s-text">
                                <a
                                    href="#"
                                    @click="\${() => console.log("tracking event")}"
                                    data-card-action
                                    >BYD</a
                                >
                            </h4>
                            <span class="s-text-subtle">Från 369 900 kr</span>
                        </div>
                        <img
                            class="w-full object-cover"
                            width="800"
                            height="500"
                            loading="lazy"
                            src="https://unsplash.it/300/200?random"
                            alt=""
                        />
                        <div class="flex gap-16">
                            <div class="flex flex-col">
                                <span class="text-s s-text-subtle">Drivmedel</span>
                                <span class="font-bold s-text">Flera</span>
                            </div>

                            <div class="flex flex-col">
                                <span class="text-s s-text-subtle">Förbrukning (blandad)</span>
                                <span class="font-bold s-text">2.7 - 6.3 l/100km</span>
                            </div>
                        </div>
                    </article>
                </w-card>
            </div>\`;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Selected`,`Flat`,`FlatSelected`,`Clickable`,`PropertyExample`,`StylingApi`,`CardNoNavigation`,`CardWholeCardClickable`,`CardCardClickablePlusASecondInteractiveElement`,`CardSeparateInteractiveElements`,`AdvancedExample`,`AdvancederExamples`]})))()}export{W as a,$ as c,H as i,z as n,B as o,V as r,P as s,U as t};