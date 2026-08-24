import{n as e,r as ee}from"./rolldown-runtime-DkW27tQK.js";import{c as t,d as n,h as r,l as te,r as i,s as a,t as o,y as s}from"./decorate-Bt2QF_uA.js";import{a as ne,o as re,r as ie,t as ae}from"./i18n-CkjYRTT1.js";import{n as c,t as oe}from"./dist-D5kJVy4t.js";import{n as se,t as ce}from"./styles-Cw_r5k83.js";import{i as l,n as u,r as d}from"./utilities-BHNt5DhH.js";import{r as f,t as le}from"./if-defined-DBI32Ir5.js";import{n as ue,t as de}from"./checkbox-group-CGXa3atg.js";import{n as fe,t as p}from"./radio-group-F_P73Un7.js";var m;function h(){return(h=e((()=>{m=JSON.parse(`{"card.button.text":["Vælg"]}`)})))()}var g;function _(){return(_=e((()=>{g=JSON.parse(`{"card.button.text":["Select"]}`)})))()}var v;function y(){return(y=e((()=>{v=JSON.parse(`{"card.button.text":["Valitse"]}`)})))()}var b;function x(){return(x=e((()=>{b=JSON.parse(`{"card.button.text":["Velg"]}`)})))()}var S;function C(){return(C=e((()=>{S=JSON.parse(`{"card.button.text":["Välj"]}`)})))()}var w;function T(){return(T=e((()=>{t(),w=s`
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
`})))()}var E,D;function O(){return(O=e((()=>{re(),t(),i(),le(),ie(),ce(),h(),_(),y(),x(),C(),T(),E={ENTER:`Enter`,SPACE:` `},D=class extends te{static{this.styles=[se,w,s`
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
		`]}constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,ae(g,b,v,m,S),this.buttonText=ne._({id:`card.button.text`,message:`Select`,comment:`Screenreader message to indicate that the card is clickable`})}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===E.ENTER||e.key===E.SPACE)&&(e.preventDefault(),this.click())}render(){return r`
			<div
				part="base"
				tabindex=${f(this.clickable?`0`:void 0)}
				@keydown=${this.keypressed}
			>
				<div part="border"></div>
				${this.clickable?r`<button
								class="sr-only"
								aria-pressed="${this.selected}"
								tabindex="-1"
							>
								${this.buttonText}
							</button>`:this.selected?r`<span
									class="sr-only"
									role="checkbox"
									aria-checked="true"
									aria-disabled="true"
								></span>`:n}
				<slot></slot>
			</div>
		`}},o([a({type:Boolean,reflect:!0})],D.prototype,`selected`,void 0),o([a({type:Boolean})],D.prototype,`flat`,void 0),o([a({type:Boolean})],D.prototype,`clickable`,void 0),customElements.get(`w-card`)||customElements.define(`w-card`,D)})))()}var k=ee({AdvancedExample:()=>X,AdvancederExamples:()=>Z,CardCardClickablePlusASecondInteractiveElement:()=>U,CardNoNavigation:()=>V,CardSeparateInteractiveElements:()=>W,CardWholeCardClickable:()=>H,CheckboxCard:()=>J,Default:()=>F,Flat:()=>I,FlatCheckboxCard:()=>Y,FlatRadioCard:()=>K,GroupedCheckboxCards:()=>B,GroupedRadioCards:()=>z,PropertyExample:()=>L,RadioCard:()=>G,RadioCardGroup:()=>q,StylingApi:()=>R,__namedExportsOrder:()=>Q,default:()=>P}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{d(),c(),t(),ue(),de(),fe(),p(),O(),{events:A,args:j,argTypes:M}=oe(`w-card`),N=new Set([`clickable`,`selected`]),P={title:`Navigation/Card`,render(e){return r`
            <w-card ${l(u(e))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        `},args:Object.fromEntries(Object.entries(j).filter(([e])=>!N.has(e))),argTypes:Object.fromEntries(Object.entries(M).filter(([e])=>!N.has(e))),parameters:{actions:{handles:A}}},F={args:{flat:!1}},I={args:{flat:!0}},L={args:{flat:!1},render(e){return r`
            <w-card ${l(u(e))}>
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
        `}},R={args:{flat:!1},render(e){return r`
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
            <w-card ${l(u(e))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        `}},z={args:{},render(e){return r`
            <w-radio-group label="Package size" name="package-size">
                <div data-card-group>
                    <w-card ${l(u(e))}>
                        <div style="padding: 16px; display: flex; gap: 8px;">
                            <w-radio
                                id="grouped-radio-small"
                                value="small"
                                data-card-action
                            ></w-radio>
                            <label for="grouped-radio-small">Small</label>
                        </div>
                    </w-card>
                    <w-card ${l(u(e))}>
                        <div style="padding: 16px; display: flex; gap: 8px;">
                            <w-radio
                                id="grouped-radio-medium"
                                value="medium"
                                data-card-action
                            ></w-radio>
                            <label for="grouped-radio-medium">Medium</label>
                        </div>
                    </w-card>
                </div>
                <w-card ${l(u(e))}>
                    <div style="padding: 16px; display: flex; gap: 8px;">
                        <w-radio
                            id="separate-radio-large"
                            value="large"
                            data-card-action
                        ></w-radio>
                        <label for="separate-radio-large">Large</label>
                    </div>
                </w-card>
            </w-radio-group>
        `}},B={args:{},render(e){return r`
            <w-checkbox-group label="Optional services" name="services">
                <div data-card-group>
                    <w-card ${l(u(e))}>
                        <div style="padding: 16px; display: flex; gap: 8px;">
                            <w-checkbox
                                id="grouped-checkbox-gift-wrap"
                                value="gift-wrap"
                                data-card-action
                            ></w-checkbox>
                            <label for="grouped-checkbox-gift-wrap">Gift wrapping</label>
                        </div>
                    </w-card>
                    <w-card ${l(u(e))}>
                        <div style="padding: 16px; display: flex; gap: 8px;">
                            <w-checkbox
                                id="grouped-checkbox-insurance"
                                value="insurance"
                                data-card-action
                            ></w-checkbox>
                            <label for="grouped-checkbox-insurance">Extra insurance</label>
                        </div>
                    </w-card>
                </div>
                <w-card ${l(u(e))}>
                    <div style="padding: 16px; display: flex; gap: 8px;">
                        <w-checkbox
                            id="separate-checkbox-priority"
                            value="priority"
                            data-card-action
                        ></w-checkbox>
                        <label for="separate-checkbox-priority">Priority handling</label>
                    </div>
                </w-card>
            </w-checkbox-group>
        `}},V={args:{},render(e){return r`
            <w-card ${l(u(e))}>
                <div style="padding: 16px;">
                    <h3 class="t3">This is the card title</h3>
                    <p>This is the card content</p>
                </div>
            </w-card>
        `}},H={args:{},render(e){return r`
            <w-card ${l(u(e))}>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                </div>
            </w-card>
        `}},U={args:{},render(e){return r`
            <w-card ${l(u(e))}>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                    <a href="http://google.com" data-card-secondary-action>Learn more</a>
                </div>
            </w-card>
        `}},W={args:{},render(e){return r`
            <w-card ${l(u(e))}>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#">This is the card title</a>
                    </h3>
                    <a href="http://google.com">Learn more</a>
                </div>
            </w-card>
        `}},G={args:{},render(e){return r`
            <w-card ${l(u(e))}>
                <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                    <w-radio
                        id="radio-card-story-option"
                        name="radio-card-story"
                        value="option"
                        data-card-action
                    ></w-radio>
                    <label for="radio-card-story-option">Select this option</label>
                </div>
            </w-card>
        `}},K={args:{flat:!0},render(e){return r`
            <w-card ${l(u(e))}>
                <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                    <w-radio
                        id="radio-card-story-option"
                        name="radio-card-story"
                        value="option"
                        data-card-action
                    ></w-radio>
                    <label for="radio-card-story-option">Select this option</label>
                </div>
            </w-card>
        `}},q={args:{},render(e){return r`
            <div style="display: grid; gap: 8px;">
                <w-card ${l(u(e))}>
                    <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                        <w-radio
                            id="radio-card-story-standard"
                            name="radio-card-story-group"
                            value="standard"
                            data-card-action
                        ></w-radio>
                        <label for="radio-card-story-standard">Standard delivery</label>
                    </div>
                </w-card>
                <w-card ${l(u(e))}>
                    <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                        <w-radio
                            id="radio-card-story-express"
                            name="radio-card-story-group"
                            value="express"
                            data-card-action
                        ></w-radio>
                        <label for="radio-card-story-express">Express delivery</label>
                    </div>
                </w-card>
            </div>
        `}},J={args:{},render(e){return r`
            <w-card ${l(u(e))}>
                <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                    <w-checkbox
                        id="checkbox-card-story-option"
                        name="checkbox-card-story"
                        value="option"
                        data-card-action
                    ></w-checkbox>
                    <label for="checkbox-card-story-option">Select this option</label>
                </div>
            </w-card>
        `}},Y={args:{flat:!0},render(e){return r`
            <w-card ${l(u(e))}>
                <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                    <w-checkbox
                        id="checkbox-card-story-option"
                        name="checkbox-card-story"
                        value="option"
                        data-card-action
                    ></w-checkbox>
                    <label for="checkbox-card-story-option">Select this option</label>
                </div>
            </w-card>
        `}},X={args:{},render(e){return r`
            <w-card ${l(u(e))}>
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
        `}},Z={args:{},render(e){return r`<div class="flex" style="gap: 16px; margin-bottom: 40px;">
                <w-card class="max-w-[223] min-w-[223]" ${l(u(e))}>
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
                <w-card class="max-w-[223] min-w-[223]" ${l(u(e))}>
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
                <w-card class="max-w-[223] min-w-[223]" ${l(u(e))}>
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
                    ${l(u(e))}
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
                    ${l(u(e))}
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
                    ${l(u(e))}
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
            </div>`}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    flat: false
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    flat: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    flat: false
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {},
  render(args) {
    return html\`
            <w-radio-group label="Package size" name="package-size">
                <div data-card-group>
                    <w-card \${spread(prespread(args))}>
                        <div style="padding: 16px; display: flex; gap: 8px;">
                            <w-radio
                                id="grouped-radio-small"
                                value="small"
                                data-card-action
                            ></w-radio>
                            <label for="grouped-radio-small">Small</label>
                        </div>
                    </w-card>
                    <w-card \${spread(prespread(args))}>
                        <div style="padding: 16px; display: flex; gap: 8px;">
                            <w-radio
                                id="grouped-radio-medium"
                                value="medium"
                                data-card-action
                            ></w-radio>
                            <label for="grouped-radio-medium">Medium</label>
                        </div>
                    </w-card>
                </div>
                <w-card \${spread(prespread(args))}>
                    <div style="padding: 16px; display: flex; gap: 8px;">
                        <w-radio
                            id="separate-radio-large"
                            value="large"
                            data-card-action
                        ></w-radio>
                        <label for="separate-radio-large">Large</label>
                    </div>
                </w-card>
            </w-radio-group>
        \`;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {},
  render(args) {
    return html\`
            <w-checkbox-group label="Optional services" name="services">
                <div data-card-group>
                    <w-card \${spread(prespread(args))}>
                        <div style="padding: 16px; display: flex; gap: 8px;">
                            <w-checkbox
                                id="grouped-checkbox-gift-wrap"
                                value="gift-wrap"
                                data-card-action
                            ></w-checkbox>
                            <label for="grouped-checkbox-gift-wrap">Gift wrapping</label>
                        </div>
                    </w-card>
                    <w-card \${spread(prespread(args))}>
                        <div style="padding: 16px; display: flex; gap: 8px;">
                            <w-checkbox
                                id="grouped-checkbox-insurance"
                                value="insurance"
                                data-card-action
                            ></w-checkbox>
                            <label for="grouped-checkbox-insurance">Extra insurance</label>
                        </div>
                    </w-card>
                </div>
                <w-card \${spread(prespread(args))}>
                    <div style="padding: 16px; display: flex; gap: 8px;">
                        <w-checkbox
                            id="separate-checkbox-priority"
                            value="priority"
                            data-card-action
                        ></w-checkbox>
                        <label for="separate-checkbox-priority">Priority handling</label>
                    </div>
                </w-card>
            </w-checkbox-group>
        \`;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {},
  render(args) {
    return html\`
            <w-card \${spread(prespread(args))}>
                <div style="padding: 16px;">
                    <h3 class="t3">This is the card title</h3>
                    <p>This is the card content</p>
                </div>
            </w-card>
        \`;
  }
}`,...V.parameters?.docs?.source},description:{story:`Example of a card that is not focusable or clickable, and has no interactive elements inside it.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {},
  render(args) {
    return html\`
            <w-card \${spread(prespread(args))}>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                </div>
            </w-card>
        \`;
  }
}`,...H.parameters?.docs?.source},description:{story:`Example of a card that has a single interactive element inside it that is both sematically correct and the clickable area expands to fill the card.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {},
  render(args) {
    return html\`
            <w-card \${spread(prespread(args))}>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                    <a href="http://google.com" data-card-secondary-action>Learn more</a>
                </div>
            </w-card>
        \`;
  }
}`,...U.parameters?.docs?.source},description:{story:`Example of a card that has a sematically correct main clickable interactive element that expands to fill the card,
and also has a second interactive element inside it.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {},
  render(args) {
    return html\`
            <w-card \${spread(prespread(args))}>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#">This is the card title</a>
                    </h3>
                    <a href="http://google.com">Learn more</a>
                </div>
            </w-card>
        \`;
  }
}`,...W.parameters?.docs?.source},description:{story:`Example of a card that has two interactive elements inside it, but the card itself is not clickable.
The interactive elements are independently clickable and focusable, and the card itself is not focusable or clickable.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {},
  render(args) {
    return html\`
            <w-card \${spread(prespread(args))}>
                <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                    <w-radio
                        id="radio-card-story-option"
                        name="radio-card-story"
                        value="option"
                        data-card-action
                    ></w-radio>
                    <label for="radio-card-story-option">Select this option</label>
                </div>
            </w-card>
        \`;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    flat: true
  },
  render(args) {
    return html\`
            <w-card \${spread(prespread(args))}>
                <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                    <w-radio
                        id="radio-card-story-option"
                        name="radio-card-story"
                        value="option"
                        data-card-action
                    ></w-radio>
                    <label for="radio-card-story-option">Select this option</label>
                </div>
            </w-card>
        \`;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {},
  render(args) {
    return html\`
            <div style="display: grid; gap: 8px;">
                <w-card \${spread(prespread(args))}>
                    <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                        <w-radio
                            id="radio-card-story-standard"
                            name="radio-card-story-group"
                            value="standard"
                            data-card-action
                        ></w-radio>
                        <label for="radio-card-story-standard">Standard delivery</label>
                    </div>
                </w-card>
                <w-card \${spread(prespread(args))}>
                    <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                        <w-radio
                            id="radio-card-story-express"
                            name="radio-card-story-group"
                            value="express"
                            data-card-action
                        ></w-radio>
                        <label for="radio-card-story-express">Express delivery</label>
                    </div>
                </w-card>
            </div>
        \`;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {},
  render(args) {
    return html\`
            <w-card \${spread(prespread(args))}>
                <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                    <w-checkbox
                        id="checkbox-card-story-option"
                        name="checkbox-card-story"
                        value="option"
                        data-card-action
                    ></w-checkbox>
                    <label for="checkbox-card-story-option">Select this option</label>
                </div>
            </w-card>
        \`;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    flat: true
  },
  render(args) {
    return html\`
            <w-card \${spread(prespread(args))}>
                <div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
                    <w-checkbox
                        id="checkbox-card-story-option"
                        name="checkbox-card-story"
                        value="option"
                        data-card-action
                    ></w-checkbox>
                    <label for="checkbox-card-story-option">Select this option</label>
                </div>
            </w-card>
        \`;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Flat`,`PropertyExample`,`StylingApi`,`GroupedRadioCards`,`GroupedCheckboxCards`,`CardNoNavigation`,`CardWholeCardClickable`,`CardCardClickablePlusASecondInteractiveElement`,`CardSeparateInteractiveElements`,`RadioCard`,`FlatRadioCard`,`RadioCardGroup`,`CheckboxCard`,`FlatCheckboxCard`,`AdvancedExample`,`AdvancederExamples`]})))()}export{K as a,G as c,Y as i,k as l,F as n,z as o,I as r,L as s,J as t,$ as u};