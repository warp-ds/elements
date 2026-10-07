import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,n as r,t as i}from"./lit-BcpSydpl.js";import{a,o,r as s,t as c}from"./i18n-CkjYRTT1.js";import{a as l,r as u,s as d,t as f}from"./decorate-DkSsDgub.js";import{n as p,t as ee}from"./dist-Ps3JgUEV.js";import{t as te}from"./icon-BiweboAb.js";import{n as ne,t as re}from"./styles-C65P6sGa.js";import{n as m,t as ie}from"./repeat-4V9rMscG.js";import{i as ae,n as oe,r as se}from"./utilities-bFq4FP4z.js";import{n as ce,t as h}from"./FormControlMixin-BCJbRrUC.js";import{r as g,t as _}from"./if-defined-xzAzOBzc.js";import{t as v}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as y}from"./tooltip-D4FseuBT.js";import{t as b}from"./textfield-M9Biwegm.js";var x;function S(){return(S=e((()=>{x=JSON.parse(`{"combobox.aria.noSuggestions":["Ingen forslag"],"combobox.aria.pluralSuggestions":[["numSuggestions","plural",{"one":["#"," forslag"],"other":["#"," forslag"]}]]}`)})))()}var C;function w(){return(w=e((()=>{C=JSON.parse(`{"combobox.aria.noSuggestions":["No suggestions"],"combobox.aria.pluralSuggestions":[["numSuggestions","plural",{"one":["#"," suggestion"],"other":["#"," suggestions"]}]]}`)})))()}var T;function E(){return(E=e((()=>{T=JSON.parse(`{"combobox.aria.noSuggestions":["Ei ehdotuksia"],"combobox.aria.pluralSuggestions":[["numSuggestions","plural",{"one":["#"," ehdotus"],"other":["#"," ehdotusta"]}]]}`)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"combobox.aria.noSuggestions":["Ingen forslag"],"combobox.aria.pluralSuggestions":[["numSuggestions","plural",{"one":["#"," forslag"],"other":["#"," forslag"]}]]}`)})))()}var k;function A(){return(A=e((()=>{k=JSON.parse(`{"combobox.aria.noSuggestions":["Inga förslag"],"combobox.aria.pluralSuggestions":[["numSuggestions","plural",{"one":["#"," förslag"],"other":["#"," förslag"]}]]}`)})))()}var j;function M(){return(M=e((()=>{i(),j=n`
	:host {
		--_option-list-padding-bottom: var(--w-c-combobox-padding-bottom, 0.4rem);
		--_option-list-shadow: var(--w-c-combobox-shadow, var(--w-shadow-m));
		--_option-list-color-background: var(
			--w-c-combobox-color-background,
			var(--w-s-color-background)
		);
		--_option-list-border-radius: var(--w-c-combobox-border-radius, 8px);
		--_option-padding: var(--w-c-combobox-option-padding, 0.8rem);
		--_option-color-background-hover: var(
			--w-c-combobox-option-color-background-hover,
			var(--w-s-color-background-hover)
		);
		--_option-color-background-selected: var(
			--w-c-combobox-option-color-background-selected,
			var(--w-s-color-background-selected)
		);
		--_z-index: var(--w-c-combobox-z-index, 20);
	}
	.sr-only {
		clip: rect(0px, 0px, 0px, 0px);
		white-space: nowrap;
		border-width: 0px;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0px;
		position: absolute;
		overflow: hidden;
	}
	[part="base"] {
		position: relative;
	}
	[part="options-list"][hidden] {
		display: none !important;
	}
	[part="options-list"] {
		box-shadow: var(--_option-list-shadow);
		background-color: var(--_option-list-color-background);
		z-index: var(--_z-index);
		position: absolute;
		right: 0px;
		left: 0px;
		overflow: hidden;
		border-radius: var(--_option-list-border-radius);
		user-select: none;
		padding: 0px;
		margin: 0px;
		list-style-type: none;
		padding-bottom: var(--_option-list-padding-bottom);
	}
	[part="option"] {
		cursor: pointer;
		padding: var(--_option-padding);
		display: block;
	}
	[part="option"]:hover {
		background-color: var(--_option-color-background-hover);
	}
	[part="option"][tabindex="-1"]:focus:not(:focus-visible) {
		outline: none;
	}
	[part="option"][aria-selected="true"] {
		background-color: var(--_option-color-background-selected);
	}
	.font-bold {
		font-weight: 700;
	}
`})))()}var N;function P(){return(P=e((()=>{o(),ce(),i(),u(),ie(),_(),s(),re(),S(),w(),E(),O(),A(),M(),te(),y(),N=class extends h(r){static{this.styles=[ne,j]}constructor(){super(),this.options=[],this.label=``,this.placeholder=``,this.value=``,this.openOnFocus=!1,this.selectOnBlur=!0,this.matchTextSegments=!1,this.disableStaticFiltering=!1,this.invalid=!1,this.helpText=``,this.disabled=!1,this.required=!1,this.optional=!1,this.name=``,this.autocomplete=`off`,this._isOpen=!1,this._navigationOption=null,this._currentOptions=[],this._lightDomOptions=[],this._optionIdCounter=0,this._displayValue=``,this.#e=``,c(C,D,T,x,k)}#e;#t;firstUpdated(){this.#e=this.value}updated(e){e.has(`value`)&&this.setValue(this.value)}resetFormControl(){this.value=this.#e}connectedCallback(){super.connectedCallback(),this.#r(),this.#t=new MutationObserver(()=>{this.#r()}),this.#t.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:[`label`,`value`]})}disconnectedCallback(){super.disconnectedCallback(),this.#t?.disconnect()}get _listboxId(){return`${this._id}-listbox`}get _id(){return`combobox`}get _helpId(){return this.helpText?`${this._id}__hint`:void 0}get _sourceOptions(){return Array.isArray(this.options)&&this.options.length?this.options:this._lightDomOptions}get _navigationLabelOrDisplayValue(){return this._navigationOption?this._navigationOption.label||this._navigationOption.value:this._displayValue}get _navigationValueOrInputValue(){return this._navigationOption?.value||this.value}_createOptionsWithIdAndMatch(e,t){return e.map((e,n)=>({...e,id:`${this._id}-option-${this._optionIdCounter+n}`,key:e.key||e.value,currentInputValue:t}))}#n(){return[...this.children].filter(e=>e.tagName.toLowerCase()===`option`)}#r(){this._lightDomOptions=this.#n().map(e=>{let t=e.getAttribute(`value`)??``;return{value:t,label:e.hasAttribute(`label`)?e.getAttribute(`label`)??``:e.textContent??``,key:t}})}_getAriaText(e,t,n){if(!e||!n)return``;let r=e.filter(e=>(e.label||e.value).toLowerCase().includes(t.toLowerCase())),i=a._({id:`combobox.aria.pluralSuggestions`,message:`{numSuggestions, plural, one {# suggestion} other {# suggestions}}`,comment:`Aria text for combobox when there are one or more suggestions`,values:{numSuggestions:r.length}}),o=a._({id:`combobox.aria.noSuggestions`,message:`No suggestions`,comment:`Aria text for combobox when no suggestions`});return r.length?i:o}_handleKeyDown(e){let t=[`ArrowDown`,`ArrowUp`,`PageUp`,`PageDown`,`Home`,`End`].includes(e.key),n=[`ArrowDown`,`ArrowLeft`,`ArrowUp`,`ArrowRight`];if(t&&!this._isOpen){this._isOpen=!0;return}if(t&&this._isOpen){this._findAndSetActiveOption(e);return}if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))switch(e.key){case`Enter`:this._navigationOption&&(e.preventDefault(),this._handleSelect(this._navigationOption),requestAnimationFrame(()=>{let e=(this.shadowRoot?.querySelector(`w-textfield`))?.shadowRoot?.querySelector(`input`);e&&(e.value=this._displayValue)})),this._isOpen=!1;break;case`Tab`:case`Delete`:this._isOpen=!1;break;case`Escape`:this._isOpen?this._isOpen=!1:this._handleChange(``),this._navigationOption=null;break;case`Backspace`:this._handleChange(this._navigationLabelOrDisplayValue),this._navigationOption=null,this._isOpen=!0;break;default:if(n.includes(e.key))break;this._isOpen=!0,this._navigationOption?(this._handleChange(this._navigationOption.value),this._navigationOption=null):this._handleChange(this.value)}}_findAndSetActiveOption(e){e.preventDefault();let t=this._currentOptions.findIndex(e=>e.id===this._navigationOption?.id),n=t+1,r=t-1;switch(e.key){case`ArrowDown`:this._navigationOption=n>this._currentOptions.length-1?null:this._currentOptions[n];break;case`ArrowUp`:this._navigationOption=r===-2?this._currentOptions.at(-1)??null:r<0?null:this._currentOptions[r];break;case`PageUp`:this._navigationOption=t-10<0?this._currentOptions[0]:this._currentOptions[t-10];break;case`PageDown`:this._navigationOption=t+10>this._currentOptions.length-1?this._currentOptions.at(-1)??null:this._currentOptions[t+10]??null;break;case`Home`:this._navigationOption=this._currentOptions[0];break;case`End`:this._navigationOption=this._currentOptions.at(-1)??null}}_handleSelect(e){this.value=e.value,this._displayValue=e.label||e.value,this.setValue(this.value);let t=new CustomEvent(`select`,{detail:{value:e.value},bubbles:!0,composed:!0});this.dispatchEvent(t),this._isOpen=!1,this._navigationOption=null,this.disableStaticFiltering&&(this._currentOptions=[])}_handleChange(e){if(e===void 0)return;this.value=e,this._displayValue=e;let t=new CustomEvent(`change`,{detail:{value:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleFocus(){if(!this.openOnFocus)return;let e=new CustomEvent(`focus`,{bubbles:!0,composed:!0});this.dispatchEvent(e),this._isOpen=!0}_handleBlur(e){let t=e.relatedTarget;if(t&&this.shadowRoot?.contains(t))return;if(this._isOpen=!1,this.selectOnBlur&&(this._navigationOption||!this._navigationOption&&this._currentOptions.findIndex(e=>e.value===this.value)!==-1)){let e=this._navigationOption?.value||this.value;this.value=e;let t=new CustomEvent(`select`,{detail:{value:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}this._navigationOption=null;let n=new CustomEvent(`blur`,{detail:{value:this._navigationValueOrInputValue},bubbles:!0,composed:!0});this.dispatchEvent(n)}_handleOptionClick(e,t){this._handleSelect(t),requestAnimationFrame(()=>{let e=(this.shadowRoot?.querySelector(`w-textfield`))?.shadowRoot?.querySelector(`input`);e&&(e.value=t.label||t.value)})}_handleContainerBlur(e){(!e.currentTarget||!e.currentTarget.contains(e.relatedTarget))&&(this._isOpen=!1)}_renderTextMatch(e,n){if(!this.matchTextSegments)return e;let r=e.toLowerCase().indexOf(n.currentInputValue.toLowerCase());if(r!==-1){let i=r+n.currentInputValue.length;return t`${e.substring(0,r)}<span class="font-bold"
					>${e.substring(r,i)}</span
				>${e.substring(i)}`}return e}willUpdate(e){let t=this._sourceOptions,n=e.has(`_lightDomOptions`);if(e.has(`value`)||e.has(`options`)||n){let e=t.find(e=>e.value===this.value),n=e?e.label||e.value:this.value;this._displayValue!==n&&this._displayValue!==this.value&&(this._displayValue=n),!this._displayValue&&this.value&&(this._displayValue=n)}(e.has(`options`)||n||e.has(`value`)||e.has(`disableStaticFiltering`)||e.has(`_displayValue`))&&(this._optionIdCounter+=t.length,this._currentOptions=this._createOptionsWithIdAndMatch(t,this._displayValue).filter(e=>this.disableStaticFiltering?!0:(e.label||e.value).toLowerCase().includes(this._displayValue.toLowerCase()))),this.disableStaticFiltering&&this._currentOptions.length&&this._currentOptions.length===1&&!this._currentOptions.some(e=>e.value===this.value)&&!this._isOpen&&(this._isOpen=!0)}render(){return t`
			<div part="base" @blur=${this._handleContainerBlur}>
				<w-textfield
					.value=${this._navigationLabelOrDisplayValue}
					.label=${this.label}
					.placeholder=${this.placeholder}
					.invalid=${this.invalid}
					.helpText=${this.helpText}
					.disabled=${this.disabled}
					.required=${this.required}
					.optional=${this.optional}
					.name=${this.name}
					.autocomplete="${this.autocomplete||`off`}"
					.tooltip="${this.tooltip}"
					exportparts="base:textfield-wrapper, input, mask-wrapper, mask, help-text, label, tooltip-target, tooltip, arrow, beak, hover-bridge"
					role="combobox"
					aria-autocomplete="list"
					aria-expanded=${this._isOpen&&this._currentOptions.length!==0}
					aria-activedescendant=${g(this._isOpen?this._navigationOption?.id:void 0)}
					aria-controls=${this._listboxId}
					@input=${e=>this._handleChange(e.target.value)}
					@focus=${this._handleFocus}
					@blur=${this._handleBlur}
					@keydown=${this._handleKeyDown}
				></w-textfield>

				<span class="sr-only" role="status">
					${this._getAriaText(this._currentOptions,this._displayValue,this._isOpen)}
				</span>
				<ul
					part="options-list"
					id=${this._listboxId}
					role="listbox"
					?hidden=${!this._isOpen||!this._currentOptions.length}
				>
					${m(this._currentOptions,e=>e.key,e=>{let n=e.label||e.value;return t`
								<li
									id=${e.id}
									role="option"
									aria-selected=${this._navigationOption?.id===e.id}
									tabindex="-1"
									part="option"
									@mousedown=${t=>this._handleOptionClick(t,e)}
								>
									${this._renderTextMatch(n,e)}
								</li>
							`})}
				</ul>
			</div>
		`}},f([d({type:Array})],N.prototype,`options`,void 0),f([d({type:String,reflect:!0,useDefault:!0})],N.prototype,`label`,void 0),f([d({type:String,reflect:!0})],N.prototype,`tooltip`,void 0),f([d({type:String,reflect:!0,useDefault:!0})],N.prototype,`placeholder`,void 0),f([d({type:String,reflect:!0,useDefault:!0})],N.prototype,`value`,void 0),f([d({type:Boolean,attribute:`open-on-focus`,reflect:!0})],N.prototype,`openOnFocus`,void 0),f([d({type:Boolean,attribute:`select-on-blur`,reflect:!0,useDefault:!0})],N.prototype,`selectOnBlur`,void 0),f([d({type:Boolean,attribute:`match-text-segments`,reflect:!0})],N.prototype,`matchTextSegments`,void 0),f([d({type:Boolean,attribute:`disable-static-filtering`,reflect:!0})],N.prototype,`disableStaticFiltering`,void 0),f([d({type:Boolean,reflect:!0})],N.prototype,`invalid`,void 0),f([d({type:String,attribute:`help-text`,reflect:!0,useDefault:!0})],N.prototype,`helpText`,void 0),f([d({type:Boolean,reflect:!0})],N.prototype,`disabled`,void 0),f([d({type:Boolean,reflect:!0})],N.prototype,`required`,void 0),f([d({type:Boolean,reflect:!0})],N.prototype,`optional`,void 0),f([d({type:String,reflect:!0,useDefault:!0})],N.prototype,`name`,void 0),f([d({type:String,reflect:!0,useDefault:!0})],N.prototype,`autocomplete`,void 0),f([l()],N.prototype,`_isOpen`,void 0),f([l()],N.prototype,`_navigationOption`,void 0),f([l()],N.prototype,`_currentOptions`,void 0),f([l()],N.prototype,`_lightDomOptions`,void 0),f([l()],N.prototype,`_optionIdCounter`,void 0),f([l()],N.prototype,`_displayValue`,void 0),customElements.get(`w-combobox`)||customElements.define(`w-combobox`,N)})))()}var le,ue,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{se(),p(),i(),P(),b(),{events:F,args:I,argTypes:L}=ee(`w-combobox`),R={title:`Forms/Combobox`,component:`w-combobox`,render(e){return t`
            <w-combobox ${ae(oe(e))}>
                ${B}
            </w-combobox>
        `},parameters:{docs:{description:{component:`A combobox element for text input with selectable options.`}},actions:{handles:F}},args:I,argTypes:L},z=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`orange`,label:`Orange`},{value:`grape`,label:`Grape`},{value:`strawberry`,label:`Strawberry`},{value:`pineapple`,label:`Pineapple`},{value:`mango`,label:`Mango`}],B=t`
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="orange">Orange</option>
    <option value="grape">Grape</option>
    <option value="strawberry">Strawberry</option>
    <option value="pineapple">Pineapple</option>
    <option value="mango">Mango</option>
`,V={args:{},render:()=>t`
        <w-combobox label="Select a fruit" placeholder="Type to search...">
            ${B}
        </w-combobox>
    `},H={args:{label:`Select a fruit`,placeholder:`Type to search...`,value:`apple`}},U={args:{label:`Select a fruit`,placeholder:`Type to search...`,openOnFocus:!0}},W={args:{label:`Select a fruit`,placeholder:`Type to search...`,matchTextSegments:!0}},G={args:{label:`Select a fruit`,placeholder:`Type to search...`,value:`Invalid fruit`,helpText:`Please select a valid fruit from the list`,invalid:!0}},K={args:{label:`Select a fruit`,placeholder:`Type to search...`,value:`apple`,disabled:!0}},q={args:{label:`Select a fruit`,placeholder:`Type to search...`,optional:!0}},J={args:{label:`Select a fruit`,placeholder:`Type to search...`,optional:!0,required:!1,helpText:`Help text is available, but might not be enough, or the added context is not important enough that we use help-text`,tooltip:`This tooltip adds supplementary information`}},Y={render:()=>t(le||=v([`
		<w-combobox
			id="combobox-dynamic"
			label="Select a fruit (dynamic)"
			placeholder="Type to search..."
			disable-static-filtering
		></w-combobox>
		<script type="module">
			const combobox = document.querySelector("#combobox-dynamic");
			const sampleOptions = `,`;
			combobox.options = sampleOptions;
			combobox.value = "";

			combobox.addEventListener("change", (e) => {
				combobox.value = e?.detail?.value;
				// Simulate dynamic filtering
				const filteredOptions = sampleOptions.filter((option) =>
					option.value.toLowerCase().includes(e?.detail?.value.toLowerCase()),
				);
				combobox.options = filteredOptions;
			});

			combobox.addEventListener("select", (e) => {
				combobox.value = e?.detail?.value;
			});
		<\/script>
	`]),JSON.stringify(z))},X={render:()=>t`
        <p>Resetting the form should return values to the initial values</p>
        <p>
            Submitting the form should result in the values being in the resulting
            pages query parameters
        </p>
        <form>
            <w-combobox
                id="form-submission"
                name="warp-combo-1"
                label="Select a fruit (dynamic)"
                placeholder="Type to search..."
            >
                ${B}
            </w-combobox>
            <br />
            <w-combobox
                id="form-submission"
                name="warp-combo-2"
                label="Select a fruit (dynamic)"
                value="banana"
                placeholder="Type to search..."
            >
                ${B}
            </w-combobox>
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </form>
    `},Z={render:()=>t(ue||=v([`
		<style>
			w-combobox {
				--w-c-combobox-color-background: green;
				--w-c-combobox-shadow: 10px 10px 10px black;
				--w-c-combobox-border-radius: 20px;
				--w-c-combobox-option-padding: 20px;
				--w-c-combobox-option-color-background-hover: blue;
				--w-c-combobox-option-color-background-selected: red;
				--w-c-textfield-background: yellow;
			}
			w-combobox::part(textfield-wrapper) {
				border: 2px solid purple;
				border-radius: 8px;
			}
		</style>
		<w-combobox
			id="combobox-styled"
			label="Select a fruit (dynamic)"
			placeholder="Type to search..."
			disable-static-filtering
			open-on-focus
		></w-combobox>
		<script type="module">
			const combobox = document.querySelector("#combobox-styled");
			const sampleOptions = `,`;
			combobox.options = sampleOptions;
			combobox.value = "";

			combobox.addEventListener("change", (e) => {
				combobox.value = e?.detail?.value;
				// Simulate dynamic filtering
				const filteredOptions = sampleOptions.filter((option) =>
					option.value.toLowerCase().includes(e?.detail?.value.toLowerCase()),
				);
				combobox.options = filteredOptions;
			});

			combobox.addEventListener("select", (e) => {
				combobox.value = e?.detail?.value;
			});
		<\/script>
	`]),JSON.stringify(z))},Q=[`Default`,`WithValue`,`OpenOnFocus`,`WithTextMatching`,`Invalid`,`Disabled`,`Optional`,`WithTooltip`,`DisableStaticFiltering`,`FormSubmission`,`CustomStyling`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => html\`
        <w-combobox label="Select a fruit" placeholder="Type to search...">
            \${sampleOptionElements}
        </w-combobox>
    \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select a fruit",
    placeholder: "Type to search...",
    value: "apple"
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select a fruit",
    placeholder: "Type to search...",
    openOnFocus: true
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select a fruit",
    placeholder: "Type to search...",
    matchTextSegments: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select a fruit",
    placeholder: "Type to search...",
    value: "Invalid fruit",
    helpText: "Please select a valid fruit from the list",
    invalid: true
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select a fruit",
    placeholder: "Type to search...",
    value: "apple",
    disabled: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select a fruit",
    placeholder: "Type to search...",
    optional: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select a fruit",
    placeholder: "Type to search...",
    optional: true,
    required: false,
    helpText: "Help text is available, but might not be enough, or the added context is not important enough that we use help-text",
    tooltip: "This tooltip adds supplementary information"
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-combobox
            id="combobox-dynamic"
            label="Select a fruit (dynamic)"
            placeholder="Type to search..."
            disable-static-filtering
        ></w-combobox>
        <script type="module">
            const combobox = document.querySelector("#combobox-dynamic");
            const sampleOptions = \${JSON.stringify(sampleOptions)};
            combobox.options = sampleOptions;
            combobox.value = "";

            combobox.addEventListener("change", (e) => {
                combobox.value = e?.detail?.value;
                // Simulate dynamic filtering
                const filteredOptions = sampleOptions.filter((option) =>
                    option.value.toLowerCase().includes(e?.detail?.value.toLowerCase()),
                );
                combobox.options = filteredOptions;
            });

            combobox.addEventListener("select", (e) => {
                combobox.value = e?.detail?.value;
            });
        <\/script>
    \`
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <p>Resetting the form should return values to the initial values</p>
        <p>
            Submitting the form should result in the values being in the resulting
            pages query parameters
        </p>
        <form>
            <w-combobox
                id="form-submission"
                name="warp-combo-1"
                label="Select a fruit (dynamic)"
                placeholder="Type to search..."
            >
                \${sampleOptionElements}
            </w-combobox>
            <br />
            <w-combobox
                id="form-submission"
                name="warp-combo-2"
                label="Select a fruit (dynamic)"
                value="banana"
                placeholder="Type to search..."
            >
                \${sampleOptionElements}
            </w-combobox>
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </form>
    \`
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            w-combobox {
                --w-c-combobox-color-background: green;
                --w-c-combobox-shadow: 10px 10px 10px black;
                --w-c-combobox-border-radius: 20px;
                --w-c-combobox-option-padding: 20px;
                --w-c-combobox-option-color-background-hover: blue;
                --w-c-combobox-option-color-background-selected: red;
                --w-c-textfield-background: yellow;
            }
            w-combobox::part(textfield-wrapper) {
                border: 2px solid purple;
                border-radius: 8px;
            }
        </style>
        <w-combobox
            id="combobox-styled"
            label="Select a fruit (dynamic)"
            placeholder="Type to search..."
            disable-static-filtering
            open-on-focus
        ></w-combobox>
        <script type="module">
            const combobox = document.querySelector("#combobox-styled");
            const sampleOptions = \${JSON.stringify(sampleOptions)};
            combobox.options = sampleOptions;
            combobox.value = "";

            combobox.addEventListener("change", (e) => {
                combobox.value = e?.detail?.value;
                // Simulate dynamic filtering
                const filteredOptions = sampleOptions.filter((option) =>
                    option.value.toLowerCase().includes(e?.detail?.value.toLowerCase()),
                );
                combobox.options = filteredOptions;
            });

            combobox.addEventListener("select", (e) => {
                combobox.value = e?.detail?.value;
            });
        <\/script>
    \`
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as CustomStyling,V as Default,Y as DisableStaticFiltering,K as Disabled,X as FormSubmission,G as Invalid,U as OpenOnFocus,q as Optional,W as WithTextMatching,J as WithTooltip,H as WithValue,Q as __namedExportsOrder,R as default};