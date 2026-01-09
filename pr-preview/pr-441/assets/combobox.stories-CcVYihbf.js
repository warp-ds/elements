import{a as T,i as k,p as I,r as R,b as S,j as w,x as u,v as A,n as i,k as y,g as E}from"./iframe-BrhA5lse.js";import{s as F,p as B}from"./utilities-DalWeKaI.js";import{F as D}from"./FormControlMixin-DJnJZbro.js";import"./index-oHLrSPXD.js";import"./preload-helper-Ct5FWWRu.js";import"./query-NYTjQBeo.js";import"./class-map-DqxoRpRR.js";import"./if-defined-DOo7gdZm.js";const L=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":["Ingen resultater"]}'),V=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," result"],"other":["#"," results"]}]],"combobox.aria.noResults":["No results"]}'),q=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," tulos"],"other":["#"," tulosta"]}]],"combobox.aria.noResults":["Ei tuloksia"]}'),N=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":["Ingen resultater"]}'),z=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultat"]}]],"combobox.aria.noResults":["Inga resultat"]}'),M=T`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.list-none{list-style-type:none}.left-0{left:0}.right-0{right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.shadow-m{box-shadow:var(--w-shadow-m)}.m-0{margin:0}.p-0{padding:0}.p-8{padding:.8rem}.pb-4{padding-bottom:.4rem}.cursor-pointer{cursor:pointer}.font-bold{font-weight:700}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none};
.z-0{z-index:0;}.z-20{z-index:20;}`;var P=Object.defineProperty,n=(c,e,t,s)=>{for(var o=void 0,r=c.length-1,h;r>=0;r--)(h=c[r])&&(o=h(e,t,o)||o);return o&&P(e,t,o),o};const p={wrapper:"relative z-0",base:"absolute z-20 left-0 right-0 s-bg pb-4 rounded-8 overflow-hidden shadow-m",listbox:"m-0 p-0 select-none list-none",option:"block cursor-pointer p-8",optionUnselected:"hover:s-bg-hover",optionSelected:"s-bg-selected hover:s-bg-selected-hover",textMatch:"font-bold",a11y:"sr-only"};class a extends D(k){constructor(){super(),this.options=[],this.value="",this.openOnFocus=!1,this.selectOnBlur=!0,this.matchTextSegments=!1,this.disableStaticFiltering=!1,this.invalid=!1,this.disabled=!1,this.required=!1,this.optional=!1,this._isOpen=!1,this._navigationOption=null,this._currentOptions=[],this._optionIdCounter=0,this.#e=null,I(V,N,q,L,z)}static{this.styles=[R,M]}#e;firstUpdated(e){this.#e=this.value}updated(e){e.has("value")&&this.setValue(this.value)}resetFormControl(){this.value=this.#e}get _listboxId(){return`${this._id}-listbox`}get _id(){return"combobox"}get _helpId(){return this.helpText?`${this._id}__hint`:void 0}get _navigationValueOrInputValue(){return this._navigationOption?.value||this.value}_createOptionsWithIdAndMatch(e,t){return e.map((s,o)=>({...s,id:`${this._id}-option-${this._optionIdCounter+o}`,key:s.key||s.value,currentInputValue:t}))}_getAriaText(e,t){if(!e||!t)return"";const s=e.filter(h=>h.value.toLowerCase().includes(t.toLowerCase())),o=S._({id:"combobox.aria.pluralResults",message:"{numResults, plural, one {# result} other {# results}}",comment:"Aria text for combobox when one or more results",values:{numResults:s.length}}),r=S._({id:"combobox.aria.noResults",message:"No results",comment:"Aria text for combobox when no results"});return s.length?o:r}_getOptionClasses(e){return w(p.option,this._navigationOption?.id===e?.id?p.optionSelected:p.optionUnselected)}_handleKeyDown(e){const t=["ArrowDown","ArrowUp","PageUp","PageDown","Home","End"].includes(e.key),s=["ArrowDown","ArrowLeft","ArrowUp","ArrowRight"];if(t&&!this._isOpen){this._isOpen=!0;return}if(t&&this._isOpen){this._findAndSetActiveOption(e);return}if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))switch(e.key){case"Enter":this._navigationOption&&(e.preventDefault(),this._handleSelect(this._navigationOption),requestAnimationFrame(()=>{const r=this.shadowRoot?.querySelector("w-textfield")?.shadowRoot?.querySelector("input");r&&(r.value=this.value)})),this._isOpen=!1;break;case"Tab":case"Delete":this._isOpen=!1;break;case"Escape":this._isOpen?this._isOpen=!1:this._handleChange(""),this._navigationOption=null;break;case"Backspace":this._handleChange(this._navigationValueOrInputValue),this._navigationOption=null,this._isOpen=!0;break;default:if(s.includes(e.key))break;this._isOpen=!0,this._navigationOption?(this._handleChange(this._navigationOption.value),this._navigationOption=null):this._handleChange(this.value);break}}_findAndSetActiveOption(e){e.preventDefault();const t=this._currentOptions.findIndex(r=>r.id===this._navigationOption?.id),s=t+1,o=t-1;switch(e.key){case"ArrowDown":this._navigationOption=s>this._currentOptions.length-1?null:this._currentOptions[s];break;case"ArrowUp":this._navigationOption=o===-2?this._currentOptions[this._currentOptions.length-1]:o<0?null:this._currentOptions[o];break;case"PageUp":this._navigationOption=t-10<0?this._currentOptions[0]:this._currentOptions[t-10];break;case"PageDown":this._navigationOption=t+10>this._currentOptions.length-1?this._currentOptions[this._currentOptions.length-1]:this._currentOptions[t+10];break;case"Home":this._navigationOption=this._currentOptions[0];break;case"End":this._navigationOption=this._currentOptions[this._currentOptions.length-1];break}}_handleSelect(e){this.value=e.value,this.setValue(this.value);const t=new CustomEvent("select",{detail:{value:e.value},bubbles:!0,composed:!0});this.dispatchEvent(t),this._isOpen=!1,this._navigationOption=null,this.disableStaticFiltering&&(this._currentOptions=[])}_handleChange(e){if(e===void 0)return;this.value=e;const t=new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleFocus(){if(!this.openOnFocus)return;const e=new CustomEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(e),this._isOpen=!0}_handleBlur(e){const t=e.relatedTarget;if(t&&this.shadowRoot?.contains(t))return;if(this._isOpen=!1,this.selectOnBlur&&(this._navigationOption||!this._navigationOption&&this._currentOptions.findIndex(o=>o.value===this.value)!==-1)){const o=this._navigationOption?.value||this.value;this.value=o;const r=new CustomEvent("select",{detail:{value:o},bubbles:!0,composed:!0});this.dispatchEvent(r)}this._navigationOption=null;const s=new CustomEvent("blur",{detail:{value:this._navigationValueOrInputValue},bubbles:!0,composed:!0});this.dispatchEvent(s)}_handleOptionClick(e,t){this._handleSelect(t),requestAnimationFrame(()=>{const o=this.shadowRoot?.querySelector("w-textfield")?.shadowRoot?.querySelector("input");o&&(o.value=t.value)})}_handleContainerBlur(e){(!e.currentTarget||!e.currentTarget.contains(e.relatedTarget))&&(this._isOpen=!1)}_renderTextMatch(e,t){if(!this.matchTextSegments)return e;const s=e.toLowerCase().indexOf(t.currentInputValue.toLowerCase());if(s!==-1){const o=s+t.currentInputValue.length;return u`${e.substring(0,s)}<span class="${p.textMatch}">${e.substring(s,o)}</span
        >${e.substring(o)}`}return e}willUpdate(e){(e.has("options")||e.has("value")||e.has("disableStaticFiltering"))&&(this._optionIdCounter+=this.options.length,this._currentOptions=this._createOptionsWithIdAndMatch(this.options,this.value).filter(t=>this.disableStaticFiltering?!0:t.value.toLowerCase().includes(this.value.toLowerCase()))),this.disableStaticFiltering&&this._currentOptions.length&&this._currentOptions.length===1&&!this._currentOptions.some(t=>t.value===this.value)&&!this._isOpen&&(this._isOpen=!0)}render(){return u`
      <div class=${w(p.wrapper,this.containerClassName)} @blur=${this._handleContainerBlur}>
        <w-textfield
          class="w-combobox-textfield"
          .value=${this._navigationValueOrInputValue}
          .label=${this.label}
          .placeholder=${this.placeholder}
          .invalid=${this.invalid}
          .helpText=${this.helpText}
          .disabled=${this.disabled}
          .required=${this.required}
          .optional=${this.optional}
          .name=${this.name}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded=${this._isOpen&&this._currentOptions.length!==0}
          aria-activedescendant=${this._isOpen?this._navigationOption?.id:void 0}
          aria-controls=${this._listboxId}
          @input=${e=>this._handleChange(e?.detail?.value)}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @keydown=${this._handleKeyDown}></w-textfield>

        <span class="${p.a11y}" role="status"> ${this._getAriaText(this._currentOptions,this.value)} </span>

        <div ?hidden=${!this._isOpen||!this._currentOptions.length} class=${w(p.base,this.listClassName)}>
          <ul id=${this._listboxId} role="listbox" class="${p.listbox}">
            ${A(this._currentOptions,e=>e.key,e=>{const t=e.label||e.value;return u`
                  <li
                    id=${e.id}
                    role="option"
                    aria-selected=${this._navigationOption?.id===e.id}
                    tabindex="-1"
                    class=${this._getOptionClasses(e)}
                    @mousedown=${s=>this._handleOptionClick(s,e)}>
                    ${this._renderTextMatch(t,e)}
                  </li>
                `})}
          </ul>
        </div>
      </div>
    `}}n([i({type:Array})],a.prototype,"options");n([i({type:String,reflect:!0})],a.prototype,"label");n([i({type:String,reflect:!0})],a.prototype,"placeholder");n([i({type:String,reflect:!0})],a.prototype,"value");n([i({type:Boolean,attribute:"open-on-focus"})],a.prototype,"openOnFocus");n([i({type:Boolean,attribute:"select-on-blur"})],a.prototype,"selectOnBlur");n([i({type:Boolean,attribute:"match-text-segments"})],a.prototype,"matchTextSegments");n([i({type:Boolean,attribute:"disable-static-filtering"})],a.prototype,"disableStaticFiltering");n([i({type:Boolean,reflect:!0})],a.prototype,"invalid");n([i({type:String,attribute:"help-text",reflect:!0})],a.prototype,"helpText");n([i({type:Boolean,reflect:!0})],a.prototype,"disabled");n([i({type:Boolean,reflect:!0})],a.prototype,"required");n([i({type:Boolean,reflect:!0})],a.prototype,"optional");n([i({type:String,reflect:!0,attribute:"class-name"})],a.prototype,"containerClassName");n([i({type:String,attribute:"list-class-name",reflect:!0})],a.prototype,"listClassName");n([i({type:String,reflect:!0})],a.prototype,"name");n([y()],a.prototype,"_isOpen");n([y()],a.prototype,"_navigationOption");n([y()],a.prototype,"_currentOptions");n([y()],a.prototype,"_optionIdCounter");customElements.get("w-combobox")||customElements.define("w-combobox",a);var $=Object.freeze,U=Object.defineProperty,J=(c,e)=>$(U(c,"raw",{value:$(c.slice())})),C;const{events:K,args:W,argTypes:j}=E("w-combobox"),oe={title:"Forms/Combobox",component:"w-combobox",render(c){return u` <w-combobox ${F(B(c))} .options="${l}"></w-combobox> `},parameters:{docs:{description:{component:"A combobox element for text input with selectable options."}},actions:{handles:K}},args:W,argTypes:j},l=[{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"},{value:"Orange",label:"Orange"},{value:"Grape",label:"Grape"},{value:"Strawberry",label:"Strawberry"},{value:"Pineapple",label:"Pineapple"},{value:"Mango",label:"Mango"}],d={args:{},render:()=>u` <w-combobox label="Select a fruit" placeholder="Type to search..." .options="${l}"></w-combobox> `},b={args:{options:l,label:"Select a fruit",placeholder:"Type to search...",value:"Apple"}},m={args:{options:l,label:"Select a fruit",placeholder:"Type to search...",openOnFocus:!0}},v={args:{options:l,label:"Select a fruit",placeholder:"Type to search...",matchTextSegments:!0}},g={args:{options:l,label:"Select a fruit",placeholder:"Type to search...",value:"Invalid fruit",helpText:"Please select a valid fruit from the list",invalid:!0}},f={args:{options:l,label:"Select a fruit",placeholder:"Type to search...",value:"Apple",disabled:!0}},O={args:{options:l,label:"Select a fruit",placeholder:"Type to search...",optional:!0}},_={render:()=>u(C||(C=J([`
    <w-combobox
      id="combobox-dynamic"
      label="Select a fruit (dynamic)"
      placeholder="Type to search..."
      disable-static-filtering></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-dynamic');
      const sampleOptions = `,`;
      combobox.options = sampleOptions;
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e?.detail?.value;
        // Simulate dynamic filtering
        const filteredOptions = sampleOptions.filter((option) => option.value.toLowerCase().includes(e?.detail?.value.toLowerCase()));
        combobox.options = filteredOptions;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e?.detail?.value;
      });
    <\/script>
  `])),JSON.stringify(l))},x={render:()=>u`
    <p>Resetting the form should return values to the initial values</p>
    <p>Submitting the form should result in the values being in the resulting pages query parameters</p>
    <form>
      <w-combobox
        id="form-submission"
        name="warp-combo-1"
        label="Select a fruit (dynamic)"
        placeholder="Type to search..."
        .options="${l}"
      ></w-combobox>
      <br>
      <w-combobox
        id="form-submission"
        name="warp-combo-2"
        label="Select a fruit (dynamic)"
        value="Banana"
        placeholder="Type to search..."
        .options="${l}"
      ></w-combobox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
    </form>
  `};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: () => html` <w-combobox label="Select a fruit" placeholder="Type to search..." .options="${sampleOptions}"></w-combobox> `\n}',...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'Apple'
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    openOnFocus: true
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    matchTextSegments: true
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'Invalid fruit',
    helpText: 'Please select a valid fruit from the list',
    invalid: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'Apple',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    optional: true
  }
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-combobox
      id="combobox-dynamic"
      label="Select a fruit (dynamic)"
      placeholder="Type to search..."
      disable-static-filtering></w-combobox>
    <script type="module">
      const combobox = document.querySelector('#combobox-dynamic');
      const sampleOptions = \${JSON.stringify(sampleOptions)};
      combobox.options = sampleOptions;
      combobox.value = '';

      combobox.addEventListener('change', (e) => {
        combobox.value = e?.detail?.value;
        // Simulate dynamic filtering
        const filteredOptions = sampleOptions.filter((option) => option.value.toLowerCase().includes(e?.detail?.value.toLowerCase()));
        combobox.options = filteredOptions;
      });

      combobox.addEventListener('select', (e) => {
        combobox.value = e?.detail?.value;
      });
    <\/script>
  \`
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <p>Resetting the form should return values to the initial values</p>
    <p>Submitting the form should result in the values being in the resulting pages query parameters</p>
    <form>
      <w-combobox
        id="form-submission"
        name="warp-combo-1"
        label="Select a fruit (dynamic)"
        placeholder="Type to search..."
        .options="\${sampleOptions}"
      ></w-combobox>
      <br>
      <w-combobox
        id="form-submission"
        name="warp-combo-2"
        label="Select a fruit (dynamic)"
        value="Banana"
        placeholder="Type to search..."
        .options="\${sampleOptions}"
      ></w-combobox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
    </form>
  \`
}`,...x.parameters?.docs?.source}}};const se=["Default","WithValue","OpenOnFocus","WithTextMatching","Invalid","Disabled","Optional","DisableStaticFiltering","FormSubmission"];export{d as Default,_ as DisableStaticFiltering,f as Disabled,x as FormSubmission,g as Invalid,m as OpenOnFocus,O as Optional,v as WithTextMatching,b as WithValue,se as __namedExportsOrder,oe as default};
