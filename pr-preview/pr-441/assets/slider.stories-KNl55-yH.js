import{a as N,i as C,p as Q,r as K,E as h,x as i,n as s,k as c,b as I,g as Y}from"./iframe-BrhA5lse.js";import"./index-f9aBdsmt.js";import"./index-D-ziI_Wk.js";import"./index-oHLrSPXD.js";import{_ as Z}from"./preload-helper-Ct5FWWRu.js";import{e as G}from"./query-NYTjQBeo.js";import{o as z}from"./if-defined-DOo7gdZm.js";import{F as ee}from"./FormControlMixin-DJnJZbro.js";const re=JSON.parse('{"slider.error.overlap":["Maksimumværdien må ikke være mindre end minimumværdien"],"slider.error.required":["Dette felt er påkrævet"],"slider.error.out_of_bounds":["Værdien skal være mellem ",["min"]," og ",["max"]]}'),te=JSON.parse('{"slider.error.overlap":["The maximum value cannot be less than the minimum"],"slider.error.required":["This field is required"],"slider.error.out_of_bounds":["Value must be between ",["min"]," and ",["max"]]}'),ae=JSON.parse('{"slider.error.overlap":["Maksimiarvo ei voi olla pienempi kuin minimiarvo"],"slider.error.required":["Tämä kenttä on pakollinen"],"slider.error.out_of_bounds":["Arvon on oltava välillä ",["min"]," - ",["max"]]}'),ie=JSON.parse('{"slider.error.overlap":["Maksimumsverdien kan ikke være mindre enn minimumsverdien"],"slider.error.required":["Dette feltet er påkrevd"],"slider.error.out_of_bounds":["Verdien må være mellom ",["min"]," og ",["max"]]}'),se=JSON.parse('{"slider.error.overlap":["Maxvärdet kan inte vara mindre än minimivärdet"],"slider.error.required":["Detta fält är obligatoriskt"],"slider.error.out_of_bounds":["Värdet måste vara mellan ",["min"]," och ",["max"]]}'),oe=N`
  .w-slider {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
    display: grid;
    width: 100%;
    grid-template-areas:
      "label"
      "description"
      "slider"
      "error";
    grid-template-columns: 1fr;

    --w-slider-track-background: var(--w-s-color-background-disabled-subtle);
    --w-slider-track-active-background: var(--w-s-color-background-primary);
    --w-slider-track-height: 4px;
    --w-slider-track-active-height: 6px;
    --w-slider-thumb-background: var(--w-s-color-background-primary);
    --w-slider-thumb-background-hover: var(
      --w-s-color-background-primary-hover
    );
    --w-slider-thumb-size: 28px;
    --w-slider-thumb-offset: calc(var(--w-slider-thumb-size) / 2);
    --w-slider-marker-color: var(--w-s-color-border);

    /* Math corner to calculate the fill of the slider and placement of markers. */

    /* The --min value can be non-zero, f. ex. choosing a year from 1950 to 2025. Normalize the values so we start at 0 and run to max - min. */
    --_value-range: calc(var(--max) - var(--min));

    /** Round up to the nearest --step, which defaults to 1 (https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#step) */
    --_from-in-range: round(
      up,
      max(calc(var(--from) - var(--min)), 0),
      var(--step, 1)
    );

    /* limit to maximum value in range so typing a value larger than max doesn't explode layouts */
    --_to-in-range: round(
      up,
      min(calc(var(--to) - var(--min)), var(--_value-range)),
      var(--step, 1)
    );

    /* Position the starting point of the fill in the case of a non-zero --from value in a range slider.
     * In other words, given a width of 100% how many percent should be left unfilled/blank
     * at the beginning of the range slider (dashes in this ASCII-range-slider: |---O******O|) */
    --_from-as-percent-of-max: calc(
      var(--_from-in-range) / var(--_value-range) * 100
    );
    --_blank-values-before: var(--_from-as-percent-of-max);

    /* Set the width of the fill as a percentage.
     * In other words, given a width of 100% how many percent should be left unfilled/blank
     * at the end of the slider (dashes in this ASCII-slider: |******O---|) */
    --_to-as-percent-of-max: calc(
      var(--_to-in-range) / var(--_value-range) * 100
    );
    --_filled-values: calc(
      var(--_to-as-percent-of-max) - var(--_blank-values-before)
    );

    /* Vertical position of range and markers */
    --_range-top: calc(
      var(--w-slider-thumb-size) / 2 +
        calc(
          var(--w-slider-track-active-height) - calc(
              var(--w-slider-track-height) / 2
            ) + 1px
        )
    );
  }

  .w-slider__label {
    grid-area: label;
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: bold;
    padding-bottom: 8px;
    color: var(--w-s-color-text);
  }

  .w-slider__description {
    grid-area: description;
  }

  .w-slider__range {
    align-self: center;
    background: var(--w-slider-track-background);
    border-radius: 4px;
    height: var(--w-slider-track-active-height);
    position: absolute;
    /* For range sliders to avoid overlapping the slider thumbs we transform them to
    be visually to the left and right of their respective input[type="range"]. This
    padding is here so the active-range element is the same width as the input fields. */
    padding-inline-start: var(--active-range-inline-start-padding, 0);
    padding-inline-end: var(--active-range-inline-end-padding, 0);
    top: var(--_range-top);
    left: 0;
    right: 0;
    grid-area: slider;
  }

  .w-slider__active-range {
    box-sizing: content-box;
    background: var(--w-slider-track-active-background);
    height: var(--w-slider-track-active-height);

    border-start-start-radius: var(--active-range-border-radius, 0);
    border-end-start-radius: var(--active-range-border-radius, 0);

    margin-left: calc(
      calc(var(--_blank-values-before) * 1%) - var(
          --active-range-inline-start-padding,
          0px
        )
    );
    width: calc(
      calc(var(--_filled-values) * 1%) +
        var(--active-range-inline-end-padding, 0px)
    );
    z-index: 1;
  }

  .w-slider__markers {
    --_marker-height: 7px;
    --_marker-width: 1px;

    align-self: center;

    /* Creates a linear gradient with --_marker-width wide markers
       followed by enough transparent that we can repeat the gradient
       along the X axis and have markers visible where we want them. */
    background: linear-gradient(
        to right,
        var(--w-slider-marker-color) var(--_marker-width),
        rgba(0, 0, 0, 0) 1px calc(100% - 1px),
        var(--w-slider-marker-color) 100%
      )
      repeat-x;
    --_step-width-as-percent: calc(var(--markers) / var(--_value-range) * 100);
    background-size: calc(var(--_step-width-as-percent) * 1%)
      var(--_marker-height);

    background-position: bottom 0 left 8px right 8px;
    position: absolute;
    top: calc(var(--_range-top) + 2px);
    left: 1px;
    right: 1px;
    grid-area: slider;
    height: var(--_marker-height);
    margin-inline: var(--w-slider-thumb-offset);
  }

  .w-slider__error {
    grid-area: error;
    padding-top: 8px;
    font-size: var(--w-font-size-xs);
    line-height: var(--w-line-height-xs);
    color: var(--w-s-color-text-negative);
  }

  .w-slider__help-text {
    grid-area: error;
    padding-top: 8px;
    font-size: var(--w-font-size-xs);
    line-height: var(--w-line-height-xs);
  }

  slot::slotted(w-slider-thumb) {
    position: static;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    grid-area: slider;
  }
`;var ne=Object.defineProperty,m=(o,e,t,a)=>{for(var r=void 0,d=o.length-1,p;d>=0;d--)(p=o[d])&&(r=p(e,t,r)||r);return r&&ne(e,t,r),r};class u extends C{constructor(){super(),this.disabled=!1,this.allowValuesOutsideRange=!1,this.error="",this.helpText="",this.invalid=!1,this.required=!1,this.suffix="",this._invalidMessage="",this._hasInternalError=!1,Q(te,ie,ae,re,se)}static{this.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[K,oe]}#e(){const e=this.querySelectorAll("w-slider-thumb");let t=!1;for(const r of e.values())r.min=this.edgeMin,r.max=this.edgeMax,r.step=this.step,r.suffix=this.suffix,r.required=this.required,r.formatter=this.formatter,r.allowValuesOutsideRange=this.allowValuesOutsideRange,r.ariaLabel||(r.slot||(r.ariaLabel=this.label),r.slot==="from"&&(r.ariaLabel=`${this.label} min`),r.slot==="to"&&(r.ariaLabel=`${this.label} max`)),(r.slot==="from"||r.slot==="to")&&(t=!0),r.disabled=this.disabled,r.invalid=this.invalid||this._hasInternalError,this.#t(r);const a=this.shadowRoot.querySelector("fieldset");t?(a.style.setProperty("--active-range-inline-start-padding","var(--w-slider-thumb-size)"),a.style.setProperty("--active-range-inline-end-padding","var(--w-slider-thumb-size)")):a.style.setProperty("--active-range-border-radius","4px")}get edgeMin(){return this.allowValuesOutsideRange?(Number(this.min)-1).toString():this.min}get edgeMax(){return this.allowValuesOutsideRange?(Number(this.max)+1).toString():this.max}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.step&&this.style.setProperty("--step",String(this.step)),this.style.setProperty("--min",this.edgeMin),this.style.setProperty("--max",this.max),this.markers&&this.style.setProperty("--markers",String(this.markers)),this.#e()}updated(e){(e.has("disabled")||e.has("invalid")||e.has("required")||e.has("min")||e.has("step")||e.has("max")||e.has("suffix")||e.has("formatter")||e.has("_invalidMessage")||e.has("_hasInternalError"))&&this.#e()}#a(e){const t=e.target;this.#t(t),t.slot&&this.#i()}#i(){let e,t;const a=this.querySelectorAll("w-slider-thumb");for(const r of a.values())r.slot==="from"&&(e=r),r.slot==="to"&&(t=r);!e||!t||!e.invalid&&t.invalid}#s(e){e.stopPropagation();const t=this._hasInternalError||this.invalid,a=e.target;if(this._hasInternalError=!!e.detail.invalid||this.invalid,this._invalidMessage=e.detail.invalid,t===!0&&this._hasInternalError===!1){const r=this.querySelectorAll("w-slider-thumb");for(const d of r.values())d!==a&&d.updateFieldAfterValidation()}}#r(e,t){return(t.value===void 0||t.value===null)&&(t.value=this.allowValuesOutsideRange?"":e),t.value===""?e:t.value}#t(e){const t=e.slot;t||this.style.setProperty("--from","0"),t==="from"&&this.style.setProperty("--from",this.#r(this.edgeMin,e)),(!t||t==="to")&&this.style.setProperty("--to",this.#r(this.edgeMax,e))}get componentHasError(){return this.invalid||this._hasInternalError}get errorText(){return this.componentHasError?this.error||this._invalidMessage:""}render(){return i`
      <fieldset
        id="fieldset"
        class="w-slider"
        @input="${this.#a}"
        @slidervalidity="${this.#s}"
        aria-invalid="${this.errorText?"true":h}"
      >
        ${this.label?i`<legend class="w-slider__label">
              <slot id="label" name="label">${this.label}</slot>
            </legend>`:h}
        <slot class="w-slider__description" name="description"></slot>
        ${this.markers?i`<div class="w-slider__markers"></div>`:h}
        <div class="w-slider__range">
          <div class="w-slider__active-range"></div>
        </div>
        <slot
          class="w-slider__slider"
          @slotchange=${this.#e}
        ></slot>
        <slot
          class="w-slider__slider"
          name="from"
          @slotchange=${this.#e}
        ></slot>
        <slot
          class="w-slider__slider"
          name="to"
          @slotchange=${this.#e}
        ></slot>
        ${this.errorText?i`<p class="w-slider__error" aria-describes="fieldset">
              ${this.errorText}
            </p>`:this.helpText?i`<p class="w-slider__help-text" aria-describes="fieldset">
                ${this.helpText}
              </p>`:h}
      </fieldset>
    `}}m([s({reflect:!0})],u.prototype,"label");m([s({type:Boolean,reflect:!0})],u.prototype,"disabled");m([s({type:Boolean,attribute:"allow-values-outside-range"})],u.prototype,"allowValuesOutsideRange");m([s({type:String,reflect:!0})],u.prototype,"error");m([s({type:String,reflect:!0,attribute:"help-text"})],u.prototype,"helpText");m([s({type:Boolean,reflect:!0})],u.prototype,"invalid");m([s({type:Boolean,reflect:!0})],u.prototype,"required");m([s({reflect:!0})],u.prototype,"min");m([s({reflect:!0})],u.prototype,"max");m([s({type:Number,reflect:!0})],u.prototype,"markers");m([s({type:Number,reflect:!0})],u.prototype,"step");m([s({reflect:!0})],u.prototype,"suffix");m([s({attribute:!1})],u.prototype,"formatter");m([c()],u.prototype,"_invalidMessage");m([c()],u.prototype,"_hasInternalError");customElements.get("w-slider")||customElements.define("w-slider",u);const le=N`
  .w-slider-thumb {
    position: relative;
    display: grid;
    pointer-events: none; /* For range inputs we position two of these on top of each other. Let clicks go through the top one. */
    grid-template-areas:
      "slider slider slider"
      "frommarker . tomarker"
      "fromtextfield . totextfield";
    grid-template-columns: 1fr 24px 1fr;
  }

  .w-slider-thumb__range {
    appearance: none;
    background-color: transparent;
    grid-area: slider;
    height: 44px; /* touch target */
    margin-left: 0;
    pointer-events: none; /* let clicks pass through for range slider where we place two inputs over each other */
  }

  .w-slider-thumb__range::-webkit-slider-runnable-track {
    box-shadow: none;
    color: var(--w-s-color-text);
    height: var(--w-slider-track-height);
  }

  /*
    Use anchor positioning to place the tooltip target in relation to the slider thumb.
    We use a polyfill to bring support to older Safari, Firefox at time of writing.
   */
  .w-slider-thumb__range::-webkit-slider-thumb {
    anchor-name: --thumb;

    appearance: none;
    cursor: pointer;
    background: var(--w-s-color-background-primary);
    border-radius: 50%;
    height: var(--w-slider-thumb-size);
    margin-top: calc(
      -1 * calc(var(--w-slider-thumb-offset) - calc(
              var(--w-slider-track-height) / 2
            ))
    );
    pointer-events: initial;
    width: var(--w-slider-thumb-size);
    z-index: 1;
  }

  .w-slider-thumb__range::-moz-range-thumb {
    anchor-name: --thumb;

    appearance: none;
    cursor: pointer;
    background: var(--w-s-color-background-primary);
    border-radius: 50%;
    border-color: transparent;
    height: var(--w-slider-thumb-size);
    margin-top: calc(
      -1 * calc(var(--w-slider-thumb-offset) - calc(
              var(--w-slider-track-height) / 2
            ))
    );
    pointer-events: initial;
    width: var(--w-slider-thumb-size);
    z-index: 1;

    box-shadow: none;
  }

  .w-slider-thumb__range:active::-webkit-slider-thumb,
  .w-slider-thumb__range:hover::-webkit-slider-thumb {
    background: var(--w-s-color-background-primary-hover);
    box-shadow: var(--w-shadow-slider-handle-hover);
  }

  .w-slider-thumb__range:focus,
  .w-slider-thumb__range:focus-visible {
    outline: none;
  }

  .w-slider-thumb__range:focus-visible::-webkit-slider-thumb {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
    box-shadow: none;
  }

  .w-slider-thumb__range:active::-moz-range-thumb,
  .w-slider-thumb__range:hover::-moz-range-thumb {
    background: var(--w-s-color-background-primary-hover);
    box-shadow: var(--w-shadow-slider-handle-hover);
  }

  .w-slider-thumb__range:focus-visible::-moz-range-thumb {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
    box-shadow: none;
  }

  .w-slider-thumb__tooltip-target {
    display: block;
    pointer-events: none;
    position: absolute;
    border: 2px solid transparent;
    border-radius: 20px;
    width: 8px;
    height: 8px;
    position-anchor: --thumb;
    position-area: center; /* Position the tooltip target right on the range thumb */
  }

  /* Uncomment this to debug the invisible anchor target */
  /* .w-slider-thumb__tooltip-target { border-color: lime; } */

  .w-slider-thumb__from-marker,
  .w-slider-thumb__to-marker {
    margin-inline: 2px; /* visual alignment with input border, slider thumb */
    color: var(--w-s-color-text-subtle);
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
  }

  .w-slider-thumb__from-marker {
    grid-area: frommarker;
  }

  .w-slider-thumb__to-marker {
    grid-area: tomarker;
    text-align: right;
  }

  .w-slider-thumb__textfield {
    margin-top: 12px;
    pointer-events: auto;
    grid-row: 3 / 4;
    grid-column: 1 / 3; /* Single sliders should have the text field use the fromtextfield _and_ gap portion of the CSS grid. */
  }

  :host([name="from"]) .w-slider-thumb__textfield {
    grid-column: 1 / 2; /* Range sliders should leave the gap empty. */
  }

  :host([name="from"]) .w-slider-thumb__range {
    margin-left: var(--w-slider-thumb-size);
  }

  :host([name="to"]) .w-slider-thumb__range {
    margin-right: var(--w-slider-thumb-size);
  }

  :host([name="from"]) .w-slider-thumb__range::-webkit-slider-thumb,
  :host([name="from"]) .w-slider-thumb__tooltip-target {
    transform: translateX(calc(-1 * var(--w-slider-thumb-size) - 1px));
  }

  :host([name="from"]) .w-slider-thumb__range::-moz-range-thumb {
    transform: translateX(calc(-1 * var(--w-slider-thumb-size) - 1px));
  }

  :host([name="to"]) .w-slider-thumb__textfield {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
  }

  :host([name="to"]) .w-slider-thumb__tooltip-target,
  :host([name="to"]) .w-slider-thumb__range::-webkit-slider-thumb {
    transform: translateX(calc(var(--w-slider-thumb-size) - 1px));
  }

  :host([name="to"]) .w-slider-thumb__range::-moz-range-thumb {
    transform: translateX(calc(var(--w-slider-thumb-size) - 1px));
  }
`,de=N`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hidden{display:none}.absolute{position:absolute}.relative{position:relative}.static{position:static}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}`;var ue=Object.defineProperty,l=(o,e,t,a)=>{for(var r=void 0,d=o.length-1,p;d>=0;d--)(p=o[d])&&(r=p(e,t,r)||r);return r&&ue(e,t,r),r};class n extends ee(C){constructor(){super(...arguments),this.invalid=!1,this.allowValuesOutsideRange=!1,this.suffix="",this._showTooltip=!1,this._inputHasFocus=!1,this.#e=null,this.anchorPositioningStyleElement=null}static{this.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[K,de,le]}#e;resetFormControl(){this.value=this.#e}#a(){this._showTooltip=!0,this.shadowRoot.querySelector("w-attention").handleDone()}#i(){this._showTooltip=!1}#s(){this.range&&(this.value===""?this.range.value=this.boundaryValue:this.value&&(this.range.value=this.value))}#r(e){this.dispatchEvent(new CustomEvent("slidervalidity",{bubbles:!0,detail:{invalid:e,slot:this.slot}}))}async updateFieldAfterValidation(){const e=this.shadowRoot.querySelector("w-textfield");await this.#t(e.value,!0)}async#t(e,t){let a=Number.parseInt(e);if(this.allowValuesOutsideRange&&!t&&this.step&&!(this.slot==="to"&&a>=Number(this.max)-1||this.slot==="from"&&a<=Number(this.min)+1)){const F=1/this.step;a=Math.round(a*F)/F,e=a.toString()}const r=Number.parseInt(this.max),d=Number.parseInt(this.min);if(!this.allowValuesOutsideRange&&(a>r||a<d))return this.#r(I.t({id:"slider.error.out_of_bounds",message:"Value must be between {min} and {max}",values:{min:`${this.min} ${this.suffix}`.trim(),max:`${this.max} ${this.suffix}`.trim()}})),{shouldCancel:!0};if(e==="")return this.required&&this.#r(I.t({id:"slider.error.required",message:"This field is required"})),{shouldCancel:!0};this.value=e;const p=e===this.max||e===this.min;let O=!1;if(this.slot){const M=this.parentElement.querySelector('w-slider-thumb[slot="to"]'),F=this.parentElement.querySelector('w-slider-thumb[slot="from"]'),P=M.textfield.value||this.max,R=F.textfield.value||this.min,q=Number.parseInt(P),B=Number.parseInt(R),L=I.t({id:"slider.error.overlap",message:"The maximum value cannot be less than the minimum"});if(this.slot==="from"){const b=this.allowValuesOutsideRange&&q>r?q:Math.min(q,this.allowValuesOutsideRange?r-1:r);a>b&&(O=!0,this.allowValuesOutsideRange&&p?this.value=String(b):this.value=P,t&&(this.#r(L),await this.updateComplete,this.textfield.value=e))}else{const b=this.allowValuesOutsideRange&&B<d?B:Math.max(Number.parseInt(R),this.allowValuesOutsideRange?d+1:d);a<b&&(O=!0,this.allowValuesOutsideRange&&p?this.value=String(b):this.value=R,t&&(this.#r(L),await this.updateComplete,this.textfield.value=e))}}return O?{shouldCancel:!0}:(this.#r(""),this.range.value=Math.min(Math.max(Number(e),Number(this.min)),Number(this.max)).toString(),this.value=this.allowValuesOutsideRange&&!t&&p?"":e,this.shadowRoot.querySelector("w-attention").handleDone(),{shouldCancel:!1})}async#o(e){const t=e.currentTarget.tagName==="W-TEXTFIELD";if(e instanceof CustomEvent)return;const a=e.currentTarget.value;return(await this.#t(a,t)).shouldCancel?(e.preventDefault(),!1):!0}async#n(e){if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;const t=Number(this.range.value),a=this.step||1;let r;e.key==="ArrowLeft"?r=t-a:r=t+a,r=Math.min(Math.max(r,Number(this.min)),Number(this.max)),(await this.#t(r.toString(),!1)).shouldCancel&&e.preventDefault()}async connectedCallback(){if(super.connectedCallback(),this.#e=this.value,this.setValue(this.value),"anchorName"in document.documentElement.style)await this.updateComplete;else{const e=import.meta.url.substring(0,import.meta.url.lastIndexOf("/"));try{const[{default:t}]=await Promise.all([Z(()=>import(`${e}/oddbird-css-anchor-positioning.js`),[],import.meta.url),this.updateComplete]);this.anchorPositioningStyleElement||(this.anchorPositioningStyleElement=document.createElement("style"),this.shadowRoot.prepend(this.anchorPositioningStyleElement)),this.anchorPositioningStyleElement.textContent=`
        /*
         * The polyfill can only anchor to ::before and ::after pseudo elements, not the pseudo element slider thumb.
         * We work around that by recreating a transparent version of the active range
         * so that we can position relative to that, without crossing the shadow root boundary.
         */
        .polyfill-range {
          align-self: center;
          background: transparent;
          height: var(--w-slider-track-active-height);
          position: absolute;
          padding-inline-start: var(--active-range-inline-start-padding, 0);
          padding-inline-end: var(--active-range-inline-end-padding, 0);
          top: var(--_range-top);
          left: 0;
          right: 0;
          grid-area: slider;
        }

        .polyfill-active-range {
          anchor-name: --polyfilled-thumb;

          box-sizing: content-box;
          background: transparent;
          height: var(--w-slider-track-active-height);

          border-start-start-radius: var(--active-range-border-radius, 0);
          border-end-start-radius: var(--active-range-border-radius, 0);

          margin-left: calc(calc(var(--_blank-values-before) * 1%) - var(--active-range-inline-start-padding, 0px));
          width: calc(calc(var(--_filled-values) * 1%) + var(--active-range-inline-end-padding, 0px));
        }

        #target {
          position: absolute;
          top: anchor(--polyfilled-thumb top);
          right: anchor(--polyfilled-thumb right);
          margin-right: 12px;
        }

        :host([name='from']) .polyfill-active-range {
          margin-left: calc(calc(var(--_blank-values-before) * 1%) - var(--active-range-inline-start-padding, 0px));
          width: calc(calc(var(--_filled-values) * 1%) + var(--active-range-inline-end-padding, 0px));
        }

        :host([name='from']) #target {
          left: anchor(--polyfilled-thumb left);
          margin-left: 38px;
        }
      `,await t({roots:[this.shadowRoot],elements:[this.anchorPositioningStyleElement]})}catch(t){console.error(new Error("Error registering the CSS anchor positioning polyfill. The UI will look broken.",{cause:t}))}}this.#s()}#l(e){e instanceof CustomEvent&&e.type==="focus"&&(this._inputHasFocus=!0)}#d(e){e instanceof CustomEvent&&e.type==="blur"&&(this._inputHasFocus=!1)}get boundaryValue(){return this.slot==="from"?this.min:this.max}get textFieldDisplayValue(){return this._inputHasFocus?this.value!==""?this.value:this.range?.value?Math.min(Math.max(Number(this.range.value),Number(this.min)+1),Number(this.max)-1).toString():"":this.value}get tooltipDisplayValue(){return this.formatter?this.formatter(this.value,this.slot):this.value===""?this.range?.value??this.boundaryValue:this.value||0}updated(e){e.has("value")&&(this.setValue(this.value),this.#s())}render(){return i`
      <div class="w-slider-thumb">
        <label for="range">${this.label}</label>
        ${"anchorName"in document.documentElement.style?h:i`<div class="polyfill-range">
              <div class="polyfill-active-range"></div>
            </div>`}
        <input
          id="range"
          aria-label="${this.ariaLabel}"
          aria-describedby="${z(this.ariaDescription?"aria-description":void 0)}"
          class="w-slider-thumb__range"
          type="range"
          .value="${this.value}"
          aria-valuetext="${this.tooltipDisplayValue}"
          min="${this.min}"
          max="${this.max}"
          step="${z(!this.allowValuesOutsideRange&&this.step?this.step:void 0)}"
          ?disabled="${this.disabled}"
          @mousedown="${this.#a}"
          @mouseup="${this.#i}"
          @touchstart="${this.#a}"
          @touchend="${this.#i}"
          @focus="${this.#a}"
          @blur="${this.#i}"
          @input="${this.#o}"
          @keydown="${this.allowValuesOutsideRange?this.#n:h}"
        />

        ${this.slot==="from"?i`<span class="w-slider-thumb__from-marker"
              >${this.formatter?this.formatter(this.allowValuesOutsideRange?"":this.min,"from"):this.min}
              ${this.suffix}</span
            >`:h}
        ${this.slot==="to"?i`<span class="w-slider-thumb__to-marker"
              >${this.formatter?this.formatter(this.allowValuesOutsideRange?"":this.max,"to"):this.max}
              ${this.suffix}</span
            >`:h}

        <w-textfield
          aria-label="${this.ariaLabel}"
          aria-description="${z(this.ariaDescription)}"
          class="w-slider-thumb__textfield"
          type="number"
          .formatter=${this.formatter?e=>this.formatter(e,this.slot):h}
          .value="${this.textFieldDisplayValue}"
          min="${this.allowValuesOutsideRange?h:this.min}"
          max="${this.allowValuesOutsideRange?h:this.max}"
          step="${z(this.step)}"
          ?invalid="${!!this.invalid}"
          @input="${this.#o}"
          @focus="${this.#l}"
          @blur="${this.#d}"
        >
          ${this.suffix?i`<w-affix slot="suffix" label="${this.suffix}"></w-affix>`:h}
        </w-textfield>

        <w-attention
          tooltip
          placement="top"
          flip
          distance="24"
          .show="${this._showTooltip}"
        >
          <output
            id="target"
            class="w-slider-thumb__tooltip-target"
            slot="target"
          ></output>
          <span slot="message">
            ${this.tooltipDisplayValue}${this.suffix?i`&nbsp;${this.suffix}`:h}
          </span>
        </w-attention>

        <!-- aria-description is still not recommended for general use, so make a visually hidden element and refer to it with aria-describedby -->
        <span class="sr-only" id="aria-description"
          >${this.ariaDescription}</span
        >
      </div>
    `}}l([s({attribute:"aria-label",reflect:!0})],n.prototype,"ariaLabel");l([s({attribute:"aria-description",reflect:!0})],n.prototype,"ariaDescription");l([s({reflect:!0})],n.prototype,"label");l([s({reflect:!0})],n.prototype,"name");l([s({reflect:!0})],n.prototype,"value");l([s({type:Boolean,reflect:!0})],n.prototype,"disabled");l([s({type:Boolean,reflect:!0})],n.prototype,"invalid");l([s({attribute:!1,reflect:!1})],n.prototype,"allowValuesOutsideRange");l([c()],n.prototype,"markers");l([c()],n.prototype,"required");l([c()],n.prototype,"step");l([c()],n.prototype,"min");l([c()],n.prototype,"max");l([c()],n.prototype,"suffix");l([c()],n.prototype,"formatter");l([G('input[type="range"]')],n.prototype,"range");l([G("w-textfield")],n.prototype,"textfield");l([c()],n.prototype,"_showTooltip");l([c()],n.prototype,"_inputHasFocus");customElements.get("w-slider-thumb")||customElements.define("w-slider-thumb",n);var A=Object.freeze,me=Object.defineProperty,f=(o,e)=>A(me(o,"raw",{value:A(o.slice())})),j,H,U,W,X,J;const{events:he,args:ce,argTypes:pe}=Y("w-slider"),fe={title:"Forms/Slider and Range Slider",args:ce,argTypes:pe,parameters:{actions:{handles:he}}},g={render(){return i`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},w={render(){return i`
      <w-slider label="Range" min="0" max="100">
        <w-slider-thumb
          slot="from"
          aria-label="From value"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To value"
          name="to"
        ></w-slider-thumb>
      </w-slider>
    `}},v={args:{locale:"nb",suffix:"m²"},render({locale:o,suffix:e}){return i(j||(j=f([`
      <w-slider
        label="Apartment size"
        min="0"
        max="250"
        suffix="`,`"
        data-testid="sqm"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From size"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To size"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
        sqmSlider.formatter = window.getNumberFormatter("`,`").format;
      <\/script>
    `])),e,o)}},x={args:{locale:"nb",suffix:"kr"},render({locale:o,suffix:e}){return i(H||(H=f([`
      <w-slider
        label="Price"
        min="0"
        max="250000"
        suffix="`,`"
        data-testid="currency"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From price"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To price"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const currencySlider = document.querySelector(
          'w-slider[data-testid="currency"]'
        );
        currencySlider.formatter = window.getNumberFormatter(
          "`,`"
        ).format;
      <\/script>
    `])),e,o)}},y={args:{locale:"nb",suffix:"km"},render({locale:o,suffix:e}){return i(U||(U=f([`
      <w-slider
        label="Distance"
        min="0"
        max="250000"
        suffix="`,`"
        data-testid="km"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From distance"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To distance"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.formatter = window.getNumberFormatter("`,`").format;
      <\/script>
    `])),e,o)}},_={args:{locale:"nb",step:"5",markers:"5"},render({markers:o,step:e}){return i`
      <w-slider
        label="Single"
        min="0"
        max="100"
        step="${e}"
        markers="${o}"
      >
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},k={args:{step:5},render({step:o}){return i`
      <w-slider label="Single" step="${o}" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},S={args:{},render(){return i(W||(W=f([`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Produksjonsår"
          min="1950"
          max="2025"
          data-testid="overunder"
          allow-values-outside-range
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"
          ></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="overunder-from"></dd>
          <dt>To:</dt>
          <dd id="overunder-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector(
          'w-slider[data-testid="overunder"]'
        );
        overunderSlider.formatter = function (value, type) {
          if (value === "" && type === "from") {
            return "Før 1950";
          }
          if (value === "" && type === "to") {
            return "Etter 2025";
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms["overunder"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("overunder-from").innerText = from;
          document.getElementById("overunder-to").innerText = to;
        });
      <\/script>
    `])))}},T={args:{locale:"nb"},render(){return i`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `}},$={args:{},render(){return i(X||(X=f([`
      <form id="rangeerror" style="margin-bottom: 16px">
        <w-slider label="Production year" min="1950" max="2025" over under>
          <p slot="description">
            Try typing a from value higher than a to value
          </p>
          <w-slider-thumb slot="from" name="from"></w-slider-thumb>
          <w-slider-thumb slot="to" name="to"></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="rangeerror-from"></dd>
          <dt>To:</dt>
          <dd id="rangeerror-to"></dd>
        </dl>
      </output>
      <script>
        /** Code to show the form values in output */
        document.forms["rangeerror"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("rangeerror-from").innerText = from;
          document.getElementById("rangeerror-to").innerText = to;
        });
      <\/script>
    `])))}},E={args:{},render(){return i(J||(J=f([`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Hestekrefter"
          suffix="hk"
          min="50"
          max="500"
          data-testid="overunder"
          allow-values-outside-range
          step="10"
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"
            value=""
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"
            value=""
          ></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="overunder-from"></dd>
          <dt>To:</dt>
          <dd id="overunder-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector(
          'w-slider[data-testid="overunder"]'
        );
        overunderSlider.formatter = function (value, type) {
          if (value === "" && type === "from") {
            return "Under 50";
          }
          if (value === "" && type === "to") {
            return "Over 500";
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms["overunder"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("overunder-from").innerText = from;
          document.getElementById("overunder-to").innerText = to;
        });
      <\/script>
    `])))}},V={args:{locale:"nb"},render(){return i`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        error="I'm an external error telling you something is wrong"
        invalid
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}},D={args:{locale:"nb"},render(){return i`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        help-text="Production year of the car"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Range" min="0" max="100">
        <w-slider-thumb
          slot="from"
          aria-label="From value"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To value"
          name="to"
        ></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'm²'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider
        label="Apartment size"
        min="0"
        max="250"
        suffix="\${suffix}"
        data-testid="sqm"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From size"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To size"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
        sqmSlider.formatter = window.getNumberFormatter("\${locale}").format;
      <\/script>
    \`;
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'kr'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider
        label="Price"
        min="0"
        max="250000"
        suffix="\${suffix}"
        data-testid="currency"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From price"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To price"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const currencySlider = document.querySelector(
          'w-slider[data-testid="currency"]'
        );
        currencySlider.formatter = window.getNumberFormatter(
          "\${locale}"
        ).format;
      <\/script>
    \`;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'km'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider
        label="Distance"
        min="0"
        max="250000"
        suffix="\${suffix}"
        data-testid="km"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From distance"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To distance"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.formatter = window.getNumberFormatter("\${locale}").format;
      <\/script>
    \`;
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    step: '5',
    markers: '5'
  },
  render({
    markers,
    step
  }) {
    return html\`
      <w-slider
        label="Single"
        min="0"
        max="100"
        step="\${step}"
        markers="\${markers}"
      >
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    step: 5
  },
  render({
    step
  }) {
    return html\`
      <w-slider label="Single" step="\${step}" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Produksjonsår"
          min="1950"
          max="2025"
          data-testid="overunder"
          allow-values-outside-range
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"
          ></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="overunder-from"></dd>
          <dt>To:</dt>
          <dd id="overunder-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector(
          'w-slider[data-testid="overunder"]'
        );
        overunderSlider.formatter = function (value, type) {
          if (value === "" && type === "from") {
            return "Før 1950";
          }
          if (value === "" && type === "to") {
            return "Etter 2025";
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms["overunder"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("overunder-from").innerText = from;
          document.getElementById("overunder-to").innerText = to;
        });
      <\/script>
    \`;
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb'
  },
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...T.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="rangeerror" style="margin-bottom: 16px">
        <w-slider label="Production year" min="1950" max="2025" over under>
          <p slot="description">
            Try typing a from value higher than a to value
          </p>
          <w-slider-thumb slot="from" name="from"></w-slider-thumb>
          <w-slider-thumb slot="to" name="to"></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="rangeerror-from"></dd>
          <dt>To:</dt>
          <dd id="rangeerror-to"></dd>
        </dl>
      </output>
      <script>
        /** Code to show the form values in output */
        document.forms["rangeerror"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("rangeerror-from").innerText = from;
          document.getElementById("rangeerror-to").innerText = to;
        });
      <\/script>
    \`;
  }
}`,...$.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Hestekrefter"
          suffix="hk"
          min="50"
          max="500"
          data-testid="overunder"
          allow-values-outside-range
          step="10"
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"
            value=""
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"
            value=""
          ></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="overunder-from"></dd>
          <dt>To:</dt>
          <dd id="overunder-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector(
          'w-slider[data-testid="overunder"]'
        );
        overunderSlider.formatter = function (value, type) {
          if (value === "" && type === "from") {
            return "Under 50";
          }
          if (value === "" && type === "to") {
            return "Over 500";
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms["overunder"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("overunder-from").innerText = from;
          document.getElementById("overunder-to").innerText = to;
        });
      <\/script>
    \`;
  }
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb'
  },
  render() {
    return html\`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        error="I'm an external error telling you something is wrong"
        invalid
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...V.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb'
  },
  render() {
    return html\`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        help-text="Production year of the car"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...D.parameters?.docs?.source}}};const be=["Single","Range","SuffixSquareMeters","SuffixCurrency","SuffixKilometers","Marks","Step","OverUnder","SingleError","RangeError","TestCase","CustomError","Description"],Te=Object.freeze(Object.defineProperty({__proto__:null,CustomError:V,Description:D,Marks:_,OverUnder:S,Range:w,RangeError:$,Single:g,SingleError:T,Step:k,SuffixCurrency:x,SuffixKilometers:y,SuffixSquareMeters:v,TestCase:E,__namedExportsOrder:be,default:fe},Symbol.toStringTag,{value:"Module"}));export{_ as M,S as O,w as R,Te as S,g as a,v as b,x as c,y as d,k as e,T as f,$ as g};
