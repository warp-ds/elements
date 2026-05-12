import{n as e}from"./chunk-DnJy8xQt.js";import{m as t,n,s as r,t as i}from"./lit-JruGAyH3.js";import{n as a,t as o}from"./dist-DqaB6mbc.js";import{n as s,t as c}from"./dist-BZcjgT0h.js";import{n as l,t as u}from"./index.m-B95STiSX.js";import{a as d,n as f,o as p,r as m,t as h}from"./decorate-Dk3JVGAn.js";import{r as ee,t as te}from"./i18n-CXvrc2gG.js";import{n as ne,t as re}from"./styles-DphVJT09.js";import{n as ie,r as ae}from"./iframe-C9IYKcCg.js";import{i as g,n as _,r as v,t as y}from"./utilities-DiPTmiiI.js";import{n as oe,t as b}from"./form-control-CGD42XQP.js";import{n as x,t as S}from"./taggedTemplateLiteral-Hk2qA96D.js";import{t as C}from"./textfield-DRksxWVg.js";var w,T=e((()=>{w=JSON.parse(`{"combobox.aria.noResults":["Ingen resultater"],"combobox.aria.noSuggestions":["Ingen forslag"],"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.pluralSuggestions":[["numSuggestions","plural",{"one":["#"," forslag"],"other":["#"," forslag"]}]]}`)})),E,se=e((()=>{E=JSON.parse(`{"combobox.aria.noResults":["No results"],"combobox.aria.noSuggestions":["No suggestions"],"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," result"],"other":["#"," results"]}]],"combobox.aria.pluralSuggestions":[["numSuggestions","plural",{"one":["#"," suggestion"],"other":["#"," suggestions"]}]]}`)})),D,O=e((()=>{D=JSON.parse(`{"combobox.aria.noResults":["Ei tuloksia"],"combobox.aria.noSuggestions":["Ei ehdotuksia"],"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," tulos"],"other":["#"," tulosta"]}]],"combobox.aria.pluralSuggestions":[["numSuggestions","plural",{"one":["#"," ehdotus"],"other":["#"," ehdotusta"]}]]}`)})),k,A=e((()=>{k=JSON.parse(`{"combobox.aria.noResults":["Ingen resultater"],"combobox.aria.noSuggestions":["Ingen forslag"],"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.pluralSuggestions":[["numSuggestions","plural",{"one":["#"," forslag"],"other":["#"," forslag"]}]]}`)})),j,M=e((()=>{j=JSON.parse(`{"combobox.aria.noResults":["Inga resultat"],"combobox.aria.noSuggestions":["Inga förslag"],"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultat"]}]],"combobox.aria.pluralSuggestions":[["numSuggestions","plural",{"one":["#"," förslag"],"other":["#"," förslag"]}]]}`)})),N,P=e((()=>{i(),N=t`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.list-none{list-style-type:none}.left-0{left:0}.right-0{right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.shadow-m{box-shadow:var(--w-shadow-m)}.m-0{margin:0}.p-0{padding:0}.p-8{padding:.8rem}.pb-4{padding-bottom:.4rem}.cursor-pointer{cursor:pointer}.font-bold{font-weight:700}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none};
.z-0{z-index:0;}.z-20{z-index:20;}`})),F,I,L=e((()=>{u(),s(),b(),i(),m(),ie(),ee(),re(),T(),se(),O(),A(),M(),P(),f(),F={wrapper:`relative z-0`,base:`absolute z-20 left-0 right-0 s-bg pb-4 rounded-8 overflow-hidden shadow-m`,listbox:`m-0 p-0 select-none list-none`,option:`block cursor-pointer p-8`,optionUnselected:`hover:s-bg-hover`,optionSelected:`s-bg-selected hover:s-bg-selected-hover`,textMatch:`font-bold`,a11y:`sr-only`},I=class extends oe(n){static{this.styles=[ne,N]}constructor(){super(),this.options=[],this.label=``,this.placeholder=``,this.value=``,this.openOnFocus=!1,this.selectOnBlur=!0,this.matchTextSegments=!1,this.disableStaticFiltering=!1,this.invalid=!1,this.helpText=``,this.disabled=!1,this.required=!1,this.optional=!1,this.name=``,this.autocomplete=`off`,this._isOpen=!1,this._navigationOption=null,this._currentOptions=[],this._optionIdCounter=0,this._displayValue=``,this.#e=null,te(E,k,D,w,j)}#e;firstUpdated(e){this.#e=this.value}updated(e){e.has(`value`)&&this.setValue(this.value)}resetFormControl(){this.value=this.#e}get _listboxId(){return`${this._id}-listbox`}get _id(){return`combobox`}get _helpId(){return this.helpText?`${this._id}__hint`:void 0}get _navigationLabelOrDisplayValue(){return this._navigationOption?this._navigationOption.label||this._navigationOption.value:this._displayValue}get _navigationValueOrInputValue(){return this._navigationOption?.value||this.value}_createOptionsWithIdAndMatch(e,t){return e.map((e,n)=>({...e,id:`${this._id}-option-${this._optionIdCounter+n}`,key:e.key||e.value,currentInputValue:t}))}_getAriaText(e,t,n){if(!e||!n)return``;let r=e.filter(e=>(e.label||e.value).toLowerCase().includes(t.toLowerCase())),i=c._({id:`combobox.aria.pluralSuggestions`,message:`{numSuggestions, plural, one {# suggestion} other {# suggestions}}`,comment:`Aria text for combobox when there are one or more suggestions`,values:{numSuggestions:r.length}}),a=c._({id:`combobox.aria.noSuggestions`,message:`No suggestions`,comment:`Aria text for combobox when no suggestions`});return r.length?i:a}_getOptionClasses(e){return l(F.option,this._navigationOption?.id===e?.id?F.optionSelected:F.optionUnselected)}_handleKeyDown(e){let t=[`ArrowDown`,`ArrowUp`,`PageUp`,`PageDown`,`Home`,`End`].includes(e.key),n=[`ArrowDown`,`ArrowLeft`,`ArrowUp`,`ArrowRight`];if(t&&!this._isOpen){this._isOpen=!0;return}if(t&&this._isOpen){this._findAndSetActiveOption(e);return}if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))switch(e.key){case`Enter`:this._navigationOption&&(e.preventDefault(),this._handleSelect(this._navigationOption),requestAnimationFrame(()=>{let e=(this.shadowRoot?.querySelector(`w-textfield`))?.shadowRoot?.querySelector(`input`);e&&(e.value=this._displayValue)})),this._isOpen=!1;break;case`Tab`:case`Delete`:this._isOpen=!1;break;case`Escape`:this._isOpen?this._isOpen=!1:this._handleChange(``),this._navigationOption=null;break;case`Backspace`:this._handleChange(this._navigationLabelOrDisplayValue),this._navigationOption=null,this._isOpen=!0;break;default:if(n.includes(e.key))break;this._isOpen=!0,this._navigationOption?(this._handleChange(this._navigationOption.value),this._navigationOption=null):this._handleChange(this.value);break}}_findAndSetActiveOption(e){e.preventDefault();let t=this._currentOptions.findIndex(e=>e.id===this._navigationOption?.id),n=t+1,r=t-1;switch(e.key){case`ArrowDown`:this._navigationOption=n>this._currentOptions.length-1?null:this._currentOptions[n];break;case`ArrowUp`:this._navigationOption=r===-2?this._currentOptions[this._currentOptions.length-1]:r<0?null:this._currentOptions[r];break;case`PageUp`:this._navigationOption=t-10<0?this._currentOptions[0]:this._currentOptions[t-10];break;case`PageDown`:this._navigationOption=t+10>this._currentOptions.length-1?this._currentOptions[this._currentOptions.length-1]:this._currentOptions[t+10];break;case`Home`:this._navigationOption=this._currentOptions[0];break;case`End`:this._navigationOption=this._currentOptions[this._currentOptions.length-1];break}}_handleSelect(e){this.value=e.value,this._displayValue=e.label||e.value,this.setValue(this.value);let t=new CustomEvent(`select`,{detail:{value:e.value},bubbles:!0,composed:!0});this.dispatchEvent(t),this._isOpen=!1,this._navigationOption=null,this.disableStaticFiltering&&(this._currentOptions=[])}_handleChange(e){if(e===void 0)return;this.value=e,this._displayValue=e;let t=new CustomEvent(`change`,{detail:{value:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleFocus(){if(!this.openOnFocus)return;let e=new CustomEvent(`focus`,{bubbles:!0,composed:!0});this.dispatchEvent(e),this._isOpen=!0}_handleBlur(e){let t=e.relatedTarget;if(t&&this.shadowRoot?.contains(t))return;if(this._isOpen=!1,this.selectOnBlur&&(this._navigationOption||!this._navigationOption&&this._currentOptions.findIndex(e=>e.value===this.value)!==-1)){let e=this._navigationOption?.value||this.value;this.value=e;let t=new CustomEvent(`select`,{detail:{value:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}this._navigationOption=null;let n=new CustomEvent(`blur`,{detail:{value:this._navigationValueOrInputValue},bubbles:!0,composed:!0});this.dispatchEvent(n)}_handleOptionClick(e,t){this._handleSelect(t),requestAnimationFrame(()=>{let e=(this.shadowRoot?.querySelector(`w-textfield`))?.shadowRoot?.querySelector(`input`);e&&(e.value=t.label||t.value)})}_handleContainerBlur(e){(!e.currentTarget||!e.currentTarget.contains(e.relatedTarget))&&(this._isOpen=!1)}_renderTextMatch(e,t){if(!this.matchTextSegments)return e;let n=e.toLowerCase().indexOf(t.currentInputValue.toLowerCase());if(n!==-1){let i=n+t.currentInputValue.length;return r`${e.substring(0,n)}<span
          class="${F.textMatch}"
          >${e.substring(n,i)}</span
        >${e.substring(i)}`}return e}willUpdate(e){let t=Array.isArray(this.options)?this.options:[];if(e.has(`value`)||e.has(`options`)){let e=t.find(e=>e.value===this.value),n=e?e.label||e.value:this.value;this._displayValue!==n&&this._displayValue!==this.value&&(this._displayValue=n),!this._displayValue&&this.value&&(this._displayValue=n)}(e.has(`options`)||e.has(`value`)||e.has(`disableStaticFiltering`)||e.has(`_displayValue`))&&(this._optionIdCounter+=t.length,this._currentOptions=this._createOptionsWithIdAndMatch(t,this._displayValue).filter(e=>this.disableStaticFiltering?!0:(e.label||e.value).toLowerCase().includes(this._displayValue.toLowerCase()))),this.disableStaticFiltering&&this._currentOptions.length&&this._currentOptions.length===1&&!this._currentOptions.some(e=>e.value===this.value)&&!this._isOpen&&(this._isOpen=!0)}render(){return r`
      <div
        class=${l(F.wrapper)}
        @blur=${this._handleContainerBlur}
      >
        <w-textfield
          class="w-combobox-textfield"
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
          role="combobox"
          aria-autocomplete="list"
          aria-expanded=${this._isOpen&&this._currentOptions.length!==0}
          aria-activedescendant=${this._isOpen?this._navigationOption?.id:void 0}
          aria-controls=${this._listboxId}
          @input=${e=>this._handleChange(e?.detail?.value)}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @keydown=${this._handleKeyDown}
        ></w-textfield>

        <span class="${F.a11y}" role="status">
          ${this._getAriaText(this._currentOptions,this._displayValue,this._isOpen)}
        </span>

        <div
          ?hidden=${!this._isOpen||!this._currentOptions.length}
          class=${l(F.base)}
        >
          <ul
            id=${this._listboxId}
            role="listbox"
            class="${F.listbox}"
          >
            ${ae(this._currentOptions,e=>e.key,e=>{let t=e.label||e.value;return r`
                  <li
                    id=${e.id}
                    role="option"
                    aria-selected=${this._navigationOption?.id===e.id}
                    tabindex="-1"
                    class=${this._getOptionClasses(e)}
                    @mousedown=${t=>this._handleOptionClick(t,e)}
                  >
                    ${this._renderTextMatch(t,e)}
                  </li>
                `})}
          </ul>
        </div>
      </div>
    `}},h([p({type:Array})],I.prototype,`options`,void 0),h([p({type:String,reflect:!0,useDefault:!0})],I.prototype,`label`,void 0),h([p({type:String,reflect:!0,useDefault:!0})],I.prototype,`placeholder`,void 0),h([p({type:String,reflect:!0,useDefault:!0})],I.prototype,`value`,void 0),h([p({type:Boolean,attribute:`open-on-focus`,reflect:!0})],I.prototype,`openOnFocus`,void 0),h([p({type:Boolean,attribute:`select-on-blur`,reflect:!0,useDefault:!0})],I.prototype,`selectOnBlur`,void 0),h([p({type:Boolean,attribute:`match-text-segments`,reflect:!0})],I.prototype,`matchTextSegments`,void 0),h([p({type:Boolean,attribute:`disable-static-filtering`,reflect:!0})],I.prototype,`disableStaticFiltering`,void 0),h([p({type:Boolean,reflect:!0})],I.prototype,`invalid`,void 0),h([p({type:String,attribute:`help-text`,reflect:!0,useDefault:!0})],I.prototype,`helpText`,void 0),h([p({type:Boolean,reflect:!0})],I.prototype,`disabled`,void 0),h([p({type:Boolean,reflect:!0})],I.prototype,`required`,void 0),h([p({type:Boolean,reflect:!0})],I.prototype,`optional`,void 0),h([p({type:String,reflect:!0,useDefault:!0})],I.prototype,`name`,void 0),h([p({type:String,reflect:!0,useDefault:!0})],I.prototype,`autocomplete`,void 0),h([d()],I.prototype,`_isOpen`,void 0),h([d()],I.prototype,`_navigationOption`,void 0),h([d()],I.prototype,`_currentOptions`,void 0),h([d()],I.prototype,`_optionIdCounter`,void 0),h([d()],I.prototype,`_displayValue`,void 0),customElements.get(`w-combobox`)||customElements.define(`w-combobox`,I)})),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),a(),i(),y(),L(),C(),x(),{events:z,args:B,argTypes:V}=o(`w-combobox`),H={title:`Forms/Combobox`,component:`w-combobox`,render(e){return r` <w-combobox ${g(_(e))} .options="${U}"></w-combobox> `},parameters:{docs:{description:{component:`A combobox element for text input with selectable options.`}},actions:{handles:z}},args:B,argTypes:V},U=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`orange`,label:`Orange`},{value:`grape`,label:`Grape`},{value:`strawberry`,label:`Strawberry`},{value:`pineapple`,label:`Pineapple`},{value:`mango`,label:`Mango`}],W={args:{},render:()=>r` <w-combobox label="Select a fruit" placeholder="Type to search..." .options="${U}"></w-combobox> `},G={args:{options:U,label:`Select a fruit`,placeholder:`Type to search...`,value:`Apple`}},K={args:{options:U,label:`Select a fruit`,placeholder:`Type to search...`,openOnFocus:!0}},q={args:{options:U,label:`Select a fruit`,placeholder:`Type to search...`,matchTextSegments:!0}},J={args:{options:U,label:`Select a fruit`,placeholder:`Type to search...`,value:`Invalid fruit`,helpText:`Please select a valid fruit from the list`,invalid:!0}},Y={args:{options:U,label:`Select a fruit`,placeholder:`Type to search...`,value:`Apple`,disabled:!0}},X={args:{options:U,label:`Select a fruit`,placeholder:`Type to search...`,optional:!0}},Z={render:()=>r(R||=S([`
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
  `]),JSON.stringify(U))},Q={render:()=>r`
    <p>Resetting the form should return values to the initial values</p>
    <p>Submitting the form should result in the values being in the resulting pages query parameters</p>
    <form>
      <w-combobox
        id="form-submission"
        name="warp-combo-1"
        label="Select a fruit (dynamic)"
        placeholder="Type to search..."
        .options="${U}"
      ></w-combobox>
      <br>
      <w-combobox
        id="form-submission"
        name="warp-combo-2"
        label="Select a fruit (dynamic)"
        value="Banana"
        placeholder="Type to search..."
        .options="${U}"
      ></w-combobox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
    </form>
  `},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => html\` <w-combobox label="Select a fruit" placeholder="Type to search..." .options="\${sampleOptions}"></w-combobox> \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'Apple'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    openOnFocus: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    matchTextSegments: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'Invalid fruit',
    helpText: 'Please select a valid fruit from the list',
    invalid: true
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    value: 'Apple',
    disabled: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    optional: true
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithValue`,`OpenOnFocus`,`WithTextMatching`,`Invalid`,`Disabled`,`Optional`,`DisableStaticFiltering`,`FormSubmission`]}))();export{W as Default,Z as DisableStaticFiltering,Y as Disabled,Q as FormSubmission,J as Invalid,K as OpenOnFocus,X as Optional,q as WithTextMatching,G as WithValue,$ as __namedExportsOrder,H as default};