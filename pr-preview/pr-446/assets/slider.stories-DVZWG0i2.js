import{a as O,i as T,r as M,E as m,x as i,n as l,f as F,k as u,g as U}from"./iframe-sWmNhPdQ.js";import"./index-CcblqtbB.js";import"./index-CR41CpOj.js";import"./index-DT9ggwRB.js";import{F as A}from"./FormControlMixin-DJnJZbro.js";import{_ as W}from"./preload-helper-Ct5FWWRu.js";import{e as B}from"./query-NYTjQBeo.js";import{o as R}from"./if-defined-DRStVcwD.js";const X=O`
  .w-slider {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
    display: grid;
    width: 100%;
    grid-template-areas:
      'label'
      'description'
      'slider'
      'error';
    grid-template-columns: 1fr;

    --w-slider-track-background: var(--w-s-color-background-disabled-subtle);
    --w-slider-track-active-background: var(--w-s-color-background-primary);
    --w-slider-track-height: 4px;
    --w-slider-track-active-height: 6px;
    --w-slider-thumb-background: var(--w-s-color-background-primary);
    --w-slider-thumb-background-hover: var(--w-s-color-background-primary-hover);
    --w-slider-thumb-size: 28px;
    --w-slider-thumb-offset: calc(var(--w-slider-thumb-size) / 2);
    --w-slider-marker-color: var(--w-s-color-border);

    /* Math corner to calculate the fill of the slider and placement of markers. */

    /* The --min value can be non-zero, f. ex. choosing a year from 1950 to 2025. Normalize the values so we start at 0 and run to max - min. */
    --_value-range: calc(var(--max) - var(--min));

    /** Round up to the nearest --step, which defaults to 1 (https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#step) */
    --_from-in-range: round(up, max(calc(var(--from) - var(--min)), 0), var(--step, 1));

    /* limit to maximum value in range so typing a value larger than max doesn't explode layouts */
    --_to-in-range: round(up, min(calc(var(--to) - var(--min)), var(--_value-range)), var(--step, 1));

    /* Position the starting point of the fill in the case of a non-zero --from value in a range slider.
     * In other words, given a width of 100% how many percent should be left unfilled/blank
     * at the beginning of the range slider (dashes in this ASCII-range-slider: |---O******O|) */
    --_from-as-percent-of-max: calc(var(--_from-in-range) / var(--_value-range) * 100);
    --_blank-values-before: var(--_from-as-percent-of-max);

    /* Set the width of the fill as a percentage.
     * In other words, given a width of 100% how many percent should be left unfilled/blank
     * at the end of the slider (dashes in this ASCII-slider: |******O---|) */
    --_to-as-percent-of-max: calc(var(--_to-in-range) / var(--_value-range) * 100);
    --_filled-values: calc(var(--_to-as-percent-of-max) - var(--_blank-values-before));

    /* Vertical position of range and markers */
    --_range-top: calc(
      var(--w-slider-thumb-size) / 2 + calc(var(--w-slider-track-active-height) - calc(var(--w-slider-track-height) / 2) + 1px)
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

    margin-left: calc(calc(var(--_blank-values-before) * 1%) - var(--active-range-inline-start-padding, 0px));
    width: calc(calc(var(--_filled-values) * 1%) + var(--active-range-inline-end-padding, 0px));
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
    ) repeat-x;
    --_step-width-as-percent: calc(var(--markers) / var(--_value-range) * 100);
    background-size: calc(var(--_step-width-as-percent) * 1%) var(--_marker-height);

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

  slot::slotted(w-slider-thumb) {
    position: static;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    grid-area: slider;
  }
`;var K=Object.defineProperty,h=(o,e,t,n)=>{for(var r=void 0,c=o.length-1,p;c>=0;c--)(p=o[c])&&(r=p(e,t,r)||r);return r&&K(e,t,r),r};class d extends A(T){constructor(){super(...arguments),this.disabled=!1,this.allowValuesOutsideRange=!1,this.help="",this.error="",this.invalid="",this.required=!1,this.suffix=""}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[M,X]}#e(){const e=this.querySelectorAll("w-slider-thumb");let t=!1;for(const r of e.values())r.min=this.min,r.max=this.max,r.step=this.step,r.suffix=this.suffix,r.required=this.required,r.formatter=this.formatter,r.allowValuesOutsideRange=this.allowValuesOutsideRange,r._invalid=this.errorText,r.ariaLabel||(r.slot||(r.ariaLabel=this.label),r.slot==="from"&&(r.ariaLabel=`${this.label} min`),r.slot==="to"&&(r.ariaLabel=`${this.label} max`)),(r.slot==="from"||r.slot==="to")&&(t=!0),r.forceDisabled=this.disabled,r.forceInvalid=!!this.invalid,this.#t(r);const n=this.shadowRoot.querySelector("fieldset");t?(n.style.setProperty("--active-range-inline-start-padding","var(--w-slider-thumb-size)"),n.style.setProperty("--active-range-inline-end-padding","var(--w-slider-thumb-size)")):n.style.setProperty("--active-range-border-radius","4px")}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.step&&this.style.setProperty("--step",String(this.step)),this.style.setProperty("--min",this.min),this.style.setProperty("--max",this.max),this.markers&&this.style.setProperty("--markers",String(this.markers)),this.#e()}updated(e){(e.has("disabled")||e.has("invalid")||e.has("required")||e.has("min")||e.has("step")||e.has("max")||e.has("suffix")||e.has("formatter"))&&this.#e()}#r(e){const t=e.target;this.#t(t)}#a(e){e.stopPropagation(),this.invalid=e.detail.invalid}#t(e){const t=e.slot,n=r=>((e.value===void 0||e.value===null)&&(e.value=this.allowValuesOutsideRange?"":r),e.value===""?r:e.value);t||this.style.setProperty("--from","0"),t==="from"&&this.style.setProperty("--from",n(this.min)),(!t||t==="to")&&this.style.setProperty("--to",n(this.max))}get errorText(){return this.error||this.invalid}render(){return i`
      <fieldset
        id="fieldset"
        class="w-slider"
        @input="${this.#r}"
        @slidervalidity="${this.#a}"
        aria-invalid="${this.errorText?"true":m}"
        aria-describedby="${this.errorText?"error-slot":m}"
      >
        ${this.label?i`<legend class="w-slider__label">
              <slot id="label" name="label">${this.label}</slot>
            </legend>`:m}
        <slot class="w-slider__description" name="description"></slot>
        ${this.markers?i`<div class="w-slider__markers"></div>`:m}
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
        ${this.errorText?i`<p
              class="w-slider__error"
              aria-describes="fieldset"
            >
              ${this.errorText}
            </p>`:m}
      </fieldset>
    `}}h([l({reflect:!0})],d.prototype,"label");h([l({type:Boolean,reflect:!0})],d.prototype,"disabled");h([l({type:Boolean,attribute:"allow-values-outside-range"})],d.prototype,"allowValuesOutsideRange");h([l({reflect:!0})],d.prototype,"help");h([l({reflect:!0})],d.prototype,"error");h([l({type:String,reflect:!0})],d.prototype,"invalid");h([l({type:Boolean,reflect:!0})],d.prototype,"required");h([l({reflect:!0})],d.prototype,"min");h([l({reflect:!0})],d.prototype,"max");h([l({type:Number,reflect:!0})],d.prototype,"markers");h([l({type:Number,reflect:!0})],d.prototype,"step");h([l({reflect:!0})],d.prototype,"suffix");h([l({attribute:!1})],d.prototype,"formatter");customElements.get("w-slider")||customElements.define("w-slider",d);const G=O`
  .w-slider-thumb {
    position: relative;
    display: grid;
    pointer-events: none; /* For range inputs we position two of these on top of each other. Let clicks go through the top one. */
    grid-template-areas:
      'slider slider slider'
      'frommarker . tomarker'
      'fromtextfield . totextfield';
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
    margin-top: calc(-1 * calc(var(--w-slider-thumb-offset) - calc(var(--w-slider-track-height) / 2)));
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
    margin-top: calc(-1 * calc(var(--w-slider-thumb-offset) - calc(var(--w-slider-track-height) / 2)));
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

  :host([name='from']) .w-slider-thumb__textfield {
    grid-column: 1 / 2; /* Range sliders should leave the gap empty. */
  }

  :host([name='from']) .w-slider-thumb__range {
    margin-left: var(--w-slider-thumb-size);
  }

  :host([name='to']) .w-slider-thumb__range {
    margin-right: var(--w-slider-thumb-size);
  }

  :host([name='from']) .w-slider-thumb__range::-webkit-slider-thumb,
  :host([name='from']) .w-slider-thumb__tooltip-target {
    transform: translateX(calc(-1 * var(--w-slider-thumb-size) - 1px));
  }

  :host([name='from']) .w-slider-thumb__range::-moz-range-thumb {
    transform: translateX(calc(-1 * var(--w-slider-thumb-size) - 1px));
  }

  :host([name='to']) .w-slider-thumb__textfield {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
  }

  :host([name='to']) .w-slider-thumb__tooltip-target,
  :host([name='to']) .w-slider-thumb__range::-webkit-slider-thumb {
    transform: translateX(calc(var(--w-slider-thumb-size) - 1px));
  }

  :host([name='to']) .w-slider-thumb__range::-moz-range-thumb {
    transform: translateX(calc(var(--w-slider-thumb-size) - 1px));
  }
`,J=O`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hidden{display:none}.absolute{position:absolute}.relative{position:relative}.static{position:static}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}`;var Q=Object.defineProperty,s=(o,e,t,n)=>{for(var r=void 0,c=o.length-1,p;c>=0;c--)(p=o[c])&&(r=p(e,t,r)||r);return r&&Q(e,t,r),r};class a extends A(T){constructor(){super(...arguments),this.suffix="",this.allowValuesOutsideRange=!1,this._invalid="",this._showTooltip=!1,this._inputHasFocus=!1,this.anchorPositioningStyleElement=null}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[M,J,G]}#e(){this._showTooltip=!0,this.shadowRoot.querySelector("w-attention").handleDone()}#r(){this._showTooltip=!1}#a(){this.range&&(this.value===""?this.range.value=this.boundaryValue:this.value&&(this.range.value=this.value))}#t(e){const t=e.currentTarget.tagName==="W-TEXTFIELD";if(e instanceof CustomEvent)return;const n=e.currentTarget.value,r=Number.parseInt(n);this._invalid="";const c=Number.parseInt(this.max),p=Number.parseInt(this.min);if(!this.allowValuesOutsideRange&&(r>c||r<p))return this._invalid=F.t({id:"slider.error.out_of_bounds",message:"Value must be between {min} and {max}",values:{min:`${this.min} ${this.suffix}`.trim(),max:`${this.max} ${this.suffix}`.trim()}}),!1;if(n==="")return this.required&&(this._invalid=F.t({id:"slider.error.required",message:"This field is required"})),!1;this._invalid&&(this._invalid=""),this.value=n;let E=!1;if(this.slot){const q=getComputedStyle(this),P=q.getPropertyValue("--to"),V=q.getPropertyValue("--from"),C=F.t({id:"slider.error.overlap",message:"The maximum value cannot be less than the minimum"});this.slot==="from"?r>Number.parseInt(P)&&(E=!0,this.value=P,t&&(this._invalid=C)):r<Number.parseInt(V)&&(E=!0,this.value=V,t&&(this._invalid=C))}if(E)return e.preventDefault(),!0;this.range.value=Math.min(Math.max(Number(n),Number(this.min)),Number(this.max)).toString();const H=(!this.range||this.range?.value===n)&&(n===this.max||n===this.min);return this.value=this.allowValuesOutsideRange&&!t&&H?"":n,this.shadowRoot.querySelector("w-attention").handleDone(),!0}async connectedCallback(){if(super.connectedCallback(),"anchorName"in document.documentElement.style)await this.updateComplete;else{const e=import.meta.url.substring(0,import.meta.url.lastIndexOf("/"));try{const[{default:t}]=await Promise.all([W(()=>import(`${e}/oddbird-css-anchor-positioning.js`),[],import.meta.url),this.updateComplete]);this.anchorPositioningStyleElement||(this.anchorPositioningStyleElement=document.createElement("style"),this.shadowRoot.prepend(this.anchorPositioningStyleElement)),this.anchorPositioningStyleElement.textContent=`
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
      `,await t({roots:[this.shadowRoot],elements:[this.anchorPositioningStyleElement]})}catch(t){console.error(new Error("Error registering the CSS anchor positioning polyfill. The UI will look broken.",{cause:t}))}}this.#a()}get boundaryValue(){return this.slot==="from"?this.min:this.max}get textFieldDisplayValue(){return this._inputHasFocus?this.value===""?this.range?.value??"":this.value:this.value}get tooltipDisplayValue(){return this.formatter?this.formatter(this.value,this.slot):this.value===""?this.range?.value??this.boundaryValue:this.value||0}updated(e){e.has("value")&&(this.setValue(this.value),this.#a()),e.has("_invalid")&&this.dispatchEvent(new CustomEvent("slidervalidity",{bubbles:!0,detail:{invalid:this._invalid}}))}render(){return i`
      <div class="w-slider-thumb">
        <label for="range">${this.label}</label>
        ${"anchorName"in document.documentElement.style?m:i`<div class="polyfill-range">
              <div class="polyfill-active-range"></div>
            </div>`}
        <input
          id="range"
          aria-label="${this.ariaLabel}"
          aria-describedby="${R(this.ariaDescription?"aria-description":void 0)}"
          class="w-slider-thumb__range"
          type="range"
          .value="${this.value}"
          min="${this.min}"
          max="${this.max}"
          step="${R(this.step?this.step:void 0)}"
          ?disabled="${this.disabled||this.forceDisabled}"
          @mousedown="${this.#e}"
          @mouseup="${this.#r}"
          @touchstart="${this.#e}"
          @touchend="${this.#r}"
          @focus="${this.#e}"
          @blur="${this.#r}"
          @input="${this.#t}"
        />

        ${this.slot==="from"?i`<span class="w-slider-thumb__from-marker"
              >${this.formatter?this.formatter(this.allowValuesOutsideRange?"":this.min,"from"):this.min}
              ${this.suffix}</span
            >`:m}
        ${this.slot==="to"?i`<span class="w-slider-thumb__to-marker"
              >${this.formatter?this.formatter(this.allowValuesOutsideRange?"":this.max,"to"):this.max}
              ${this.suffix}</span
            >`:m}

        <w-textfield
          aria-label="${this.ariaLabel}"
          aria-description="${R(this.ariaDescription)}"
          class="w-slider-thumb__textfield"
          type="number"
          .formatter=${this.formatter?e=>this.formatter(e,this.slot):m}
          .value="${this.textFieldDisplayValue}"
          min="${this.allowValuesOutsideRange?m:this.min}"
          max="${this.allowValuesOutsideRange?m:this.max}"
          ?invalid="${this.forceInvalid||this._invalid}"
          @input="${this.#t}"
          @focus="${()=>this._inputHasFocus=!0}"
          @blur="${()=>this._inputHasFocus=!1}"
        >
          ${this.suffix?i`<w-affix slot="suffix" label="${this.suffix}"></w-affix>`:m}
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
            ${this.tooltipDisplayValue}${this.suffix?i`&nbsp;${this.suffix}`:m}
          </span>
        </w-attention>

        <!-- aria-description is still not recommended for general use, so make a visually hidden element and refer to it with aria-describedby -->
        <span class="sr-only" id="aria-description"
          >${this.ariaDescription}</span
        >
      </div>
    `}}s([l({attribute:"aria-label",reflect:!0})],a.prototype,"ariaLabel");s([l({attribute:"aria-description",reflect:!0})],a.prototype,"ariaDescription");s([l({reflect:!0})],a.prototype,"label");s([l({reflect:!0})],a.prototype,"name");s([l({reflect:!0})],a.prototype,"value");s([l({type:Boolean,reflect:!0})],a.prototype,"disabled");s([u()],a.prototype,"markers");s([u()],a.prototype,"required");s([u()],a.prototype,"step");s([u()],a.prototype,"min");s([u()],a.prototype,"max");s([u()],a.prototype,"suffix");s([u()],a.prototype,"allowValuesOutsideRange");s([u()],a.prototype,"forceDisabled");s([u()],a.prototype,"forceInvalid");s([u()],a.prototype,"formatter");s([B('input[type="range"]')],a.prototype,"range");s([B("w-textfield")],a.prototype,"textfield");s([u()],a.prototype,"_invalid");s([u()],a.prototype,"_showTooltip");s([u()],a.prototype,"_inputHasFocus");customElements.get("w-slider-thumb")||customElements.define("w-slider-thumb",a);var D=Object.freeze,Y=Object.defineProperty,z=(o,e)=>D(Y(o,"raw",{value:D(o.slice())})),I,N,L,j;const{events:Z,args:ee,argTypes:re}=U("w-slider"),te={title:"Forms/Slider and Range Slider",args:ee,argTypes:re,parameters:{actions:{handles:Z}}},f={render(){return i`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},b={render(){return i`
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
    `}},g={args:{locale:"nb",suffix:"m²"},render({locale:o,suffix:e}){return i(I||(I=z([`
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
    `])),e,o)}},w={args:{locale:"nb",suffix:"kr"},render({locale:o,suffix:e}){return i(N||(N=z([`
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
          'w-slider[data-testid="currency"]',
        );
        currencySlider.formatter = window.getNumberFormatter(
          "`,`",
        ).format;
      <\/script>
    `])),e,o)}},v={args:{locale:"nb",suffix:"km"},render({locale:o,suffix:e}){return i(L||(L=z([`
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
    `])),e,o)}},x={args:{locale:"nb",step:"5",markers:"5"},render({markers:o,step:e}){return i`
      <w-slider
        label="Single"
        min="0"
        max="100"
        step="${e}"
        markers="${o}"
      >
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},y={args:{step:5},render({step:o}){return i`
      <w-slider label="Single" step="${o}" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},_={args:{},render(){return i(j||(j=z([`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Produksjonsår"
          min="1950"
          max="2025"
          data-testid="overunder"
          allow-values-outside-range="true"
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
          'w-slider[data-testid="overunder"]',
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
    `])))}},k={args:{locale:"nb"},render(){return i`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `}},S={args:{locale:"nb"},render(){return i`
      <w-slider label="Production year" min="1950" max="2025" over under>
        <p slot="description">Try typing a from value higher than a to value</p>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}},$={args:{locale:"nb"},render(){return i`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        error="I'm an external error telling you something is wrong"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
          'w-slider[data-testid="currency"]',
        );
        currencySlider.formatter = window.getNumberFormatter(
          "\${locale}",
        ).format;
      <\/script>
    \`;
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Produksjonsår"
          min="1950"
          max="2025"
          data-testid="overunder"
          allow-values-outside-range="true"
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
          'w-slider[data-testid="overunder"]',
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
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb'
  },
  render() {
    return html\`
      <w-slider label="Production year" min="1950" max="2025" over under>
        <p slot="description">Try typing a from value higher than a to value</p>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...S.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...$.parameters?.docs?.source}}};const ae=["Single","Range","SuffixSquareMeters","SuffixCurrency","SuffixKilometers","Marks","Step","OverUnder","SingleError","RangeError","CustomError"],he=Object.freeze(Object.defineProperty({__proto__:null,CustomError:$,Marks:x,OverUnder:_,Range:b,RangeError:S,Single:f,SingleError:k,Step:y,SuffixCurrency:w,SuffixKilometers:v,SuffixSquareMeters:g,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{$ as C,x as M,_ as O,b as R,he as S,f as a,g as b,w as c,v as d,y as e,k as f,S as g};
