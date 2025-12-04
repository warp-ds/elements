import{a as O,i as D,r as j,E as u,x as n,n as s,k as p,g as U}from"./iframe-Cr_rdONH.js";import"./index-Cf-DkG_o.js";import"./index-icsH_vhB.js";import"./index-CwmwSlRH.js";import{F as A}from"./FormControlMixin-DJnJZbro.js";import{_ as W}from"./preload-helper-DvrX7W50.js";import{e as H}from"./query-NYTjQBeo.js";import{o as z}from"./if-defined-yuqNu5z7.js";const X=O`
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
      'slider';
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

  slot::slotted(w-slider-thumb) {
    position: static;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    grid-area: slider;
  }
`;var K=Object.defineProperty,h=(i,e,r,a)=>{for(var t=void 0,d=i.length-1,c;d>=0;d--)(c=i[d])&&(t=c(e,r,t)||t);return t&&K(e,r,t),t};class m extends A(D){constructor(){super(...arguments),this.disabled=!1,this.allowValuesOutsideRange=!1,this.helpText="",this.invalid=!1,this.required=!1}static{this.shadowRootOptions={...D.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[j,X]}#e(){const e=this.querySelectorAll("w-slider-thumb");let r=!1;for(const t of e.values())t.min=this.edgeMin,t.max=this.edgeMax,t.step=this.step,t.suffix=this.suffix,t.required=this.required,t.formatter=this.formatter,t.allowValuesOutsideRange=this.allowValuesOutsideRange,t.ariaLabel||(t.slot||(t.ariaLabel=this.label),t.slot==="from"&&(t.ariaLabel=`${this.label} min`),t.slot==="to"&&(t.ariaLabel=`${this.label} max`)),(t.slot==="from"||t.slot==="to")&&(r=!0),t.disabled=this.disabled,t.invalid=this.invalid,this.#n(t);const a=this.shadowRoot.querySelector("fieldset");r?(a.style.setProperty("--active-range-inline-start-padding","var(--w-slider-thumb-size)"),a.style.setProperty("--active-range-inline-end-padding","var(--w-slider-thumb-size)")):a.style.setProperty("--active-range-border-radius","4px")}get edgeMin(){return this.allowValuesOutsideRange?(Number(this.min)-1).toString():this.min}get edgeMax(){return this.allowValuesOutsideRange?(Number(this.max)+1).toString():this.max}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.step&&this.style.setProperty("--step",String(this.step)),this.style.setProperty("--min",this.edgeMin),this.style.setProperty("--max",this.max),this.markers&&this.style.setProperty("--markers",String(this.markers)),this.#e()}updated(e){(e.has("disabled")||e.has("invalid")||e.has("required")||e.has("min")||e.has("step")||e.has("max")||e.has("suffix")||e.has("formatter"))&&this.#e()}#t(e){const r=e.target;this.#n(r),r.slot&&this.#a()}#a(){let e,r;const a=this.querySelectorAll("w-slider-thumb");for(const f of a.values())f.slot==="from"&&(e=f),f.slot==="to"&&(r=f);if(!e||!r||!e.invalid&&!r.invalid)return;const t=e.shadowRoot.querySelector("w-textfield"),d=r.shadowRoot.querySelector("w-textfield"),c=Number(t.value)<=Number(d.value),b=Number(d.value)>=Number(t.value);c&&b&&(e.invalid=!1,r.invalid=!1,e.value!==t.value&&(e.value=t.value),r.value!==d.value&&(r.value=d.value))}#i(e){if(e.stopPropagation(),e.detail.invalid)this.invalid=!0;else{let r=!1;const a=this.querySelectorAll("w-slider-thumb");for(const t of a.values())t.invalid&&(r=!0);this.invalid=r}}#r(e,r){return(r.value===void 0||r.value===null)&&(r.value=this.allowValuesOutsideRange?"":e),r.value===""?e:r.value}#n(e){const r=e.slot;r||this.style.setProperty("--from","0"),r==="from"&&this.style.setProperty("--from",this.#r(this.edgeMin,e)),(!r||r==="to")&&this.style.setProperty("--to",this.#r(this.edgeMax,e))}render(){return n`
      <fieldset
        id="fieldset"
        class="w-slider"
        @input="${this.#t}"
        @slidervalidity="${this.#i}"
        aria-invalid="${this.invalid?"true":u}"
        aria-describedby="${this.invalid?"error-slot":u}"
      >
        ${this.label?n`<legend class="w-slider__label">
              <slot id="label" name="label">${this.label}</slot>
            </legend>`:u}
        <slot class="w-slider__description" name="description"></slot>
        ${this.markers?n`<div class="w-slider__markers"></div>`:u}
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
        <slot
          class="w-slider__error"
          id="error-slot"
          name="error"
          aria-describes="fieldset"
        ></slot>
      </fieldset>
    `}}h([s({reflect:!0})],m.prototype,"label");h([s({type:Boolean,reflect:!0})],m.prototype,"disabled");h([s({type:Boolean,attribute:"allow-values-outside-range"})],m.prototype,"allowValuesOutsideRange");h([s({reflect:!0})],m.prototype,"helpText");h([s({type:Boolean,reflect:!0})],m.prototype,"invalid");h([s({type:Boolean,reflect:!0})],m.prototype,"required");h([s({reflect:!0})],m.prototype,"min");h([s({reflect:!0})],m.prototype,"max");h([s({type:Number,reflect:!0})],m.prototype,"markers");h([s({type:Number,reflect:!0})],m.prototype,"step");h([s({reflect:!0})],m.prototype,"suffix");h([s({attribute:!1})],m.prototype,"formatter");customElements.get("w-slider")||customElements.define("w-slider",m);const G=O`
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
    margin-top: 10px;
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
`,J=O`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hidden{display:none}.absolute{position:absolute}.relative{position:relative}.static{position:static}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}`;var Q=Object.defineProperty,l=(i,e,r,a)=>{for(var t=void 0,d=i.length-1,c;d>=0;d--)(c=i[d])&&(t=c(e,r,t)||t);return t&&Q(e,r,t),t};class o extends A(D){constructor(){super(...arguments),this.allowValuesOutsideRange=!1,this._showTooltip=!1,this._inputHasFocus=!1,this.anchorPositioningStyleElement=null}static{this.shadowRootOptions={...D.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[j,J,G]}#e(){this._showTooltip=!0,this.shadowRoot.querySelector("w-attention").handleDone()}#t(){this._showTooltip=!1}#a(){this.range&&(this.value===""?this.range.value=this.boundaryValue:this.value&&(this.range.value=this.value))}async#i(e,r){let a=Number.parseInt(e);if(this.allowValuesOutsideRange&&!r&&this.step&&!(this.slot==="to"&&a>=Number(this.max)-1||this.slot==="from"&&a<=Number(this.min)+1)){const w=1/this.step;a=Math.round(a*w)/w,e=a.toString()}const t=Number.parseInt(this.max),d=Number.parseInt(this.min);if(!this.allowValuesOutsideRange&&(a>t||a<d))return this.invalid=!0,{shouldCancel:!0};if(e==="")return this.required&&(this.invalid=!0),{shouldCancel:!0};this.invalid&&(this.invalid=!1),this.value=e;const c=e===this.max||e===this.min;let b=!1;if(this.slot){const f=getComputedStyle(this),w=f.getPropertyValue("--to"),V=f.getPropertyValue("--from");if(this.slot==="from"){const v=Math.min(Number.parseInt(w),this.allowValuesOutsideRange?t-1:t);a>v&&(b=!0,this.allowValuesOutsideRange&&c?this.value=String(v):this.value=w,r&&(this.invalid=!0,await this.updateComplete,this.textfield.value=e))}else{const v=Math.max(Number.parseInt(V),this.allowValuesOutsideRange?d+1:d);a<v&&(b=!0,this.allowValuesOutsideRange&&c?this.value=String(v):this.value=V,r&&(this.invalid=!0,await this.updateComplete,this.textfield.value=e))}}return b?{shouldCancel:!0}:(this.range.value=Math.min(Math.max(Number(e),Number(this.min)),Number(this.max)).toString(),this.value=this.allowValuesOutsideRange&&!r&&c?"":e,this.shadowRoot.querySelector("w-attention").handleDone(),{shouldCancel:!1})}async#r(e){const r=e.currentTarget.tagName==="W-TEXTFIELD";if(e instanceof CustomEvent)return;const a=e.currentTarget.value;return(await this.#i(a,r)).shouldCancel?(e.preventDefault(),!1):!0}async#n(e){if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;const r=Number(this.range.value),a=this.step||1;let t;e.key==="ArrowLeft"?t=r-a:t=r+a,t=Math.min(Math.max(t,Number(this.min)),Number(this.max)),(await this.#i(t.toString(),!1)).shouldCancel&&e.preventDefault()}async connectedCallback(){if(super.connectedCallback(),"anchorName"in document.documentElement.style)await this.updateComplete;else{const e=import.meta.url.substring(0,import.meta.url.lastIndexOf("/"));try{const[{default:r}]=await Promise.all([W(()=>import(`${e}/oddbird-css-anchor-positioning.js`),[]),this.updateComplete]);this.anchorPositioningStyleElement||(this.anchorPositioningStyleElement=document.createElement("style"),this.shadowRoot.prepend(this.anchorPositioningStyleElement)),this.anchorPositioningStyleElement.textContent=`
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
      `,await r({roots:[this.shadowRoot],elements:[this.anchorPositioningStyleElement]})}catch(r){console.error(new Error("Error registering the CSS anchor positioning polyfill. The UI will look broken.",{cause:r}))}}this.#a()}#s(e){e instanceof CustomEvent&&e.type==="focus"&&(this._inputHasFocus=!0)}#o(e){e instanceof CustomEvent&&e.type==="blur"&&(console.log(e),this._inputHasFocus=!1)}get boundaryValue(){return this.slot==="from"?this.min:this.max}get textFieldDisplayValue(){return this._inputHasFocus?this.value===""?this.range?.value??"":this.value:this.value}get tooltipDisplayValue(){return this.formatter?this.formatter(this.value,this.slot):this.value===""?this.range?.value??this.boundaryValue:this.value||0}updated(e){e.has("value")&&(this.setValue(this.value),this.#a()),e.has("invalid")&&this.dispatchEvent(new CustomEvent("slidervalidity",{bubbles:!0,detail:{invalid:this.invalid}}))}render(){return n`
      <div class="w-slider-thumb">
        <label for="range">${this.label}</label>
        ${"anchorName"in document.documentElement.style?u:n`<div class="polyfill-range">
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
          @mousedown="${this.#e}"
          @mouseup="${this.#t}"
          @touchstart="${this.#e}"
          @touchend="${this.#t}"
          @focus="${this.#e}"
          @blur="${this.#t}"
          @input="${this.#r}"
          @keydown="${this.allowValuesOutsideRange?this.#n:u}"
        />

        ${this.slot==="from"?n`<span class="w-slider-thumb__from-marker"
              >${this.formatter?this.formatter(this.allowValuesOutsideRange?"":this.min,"from"):this.min}
              ${this.suffix}</span
            >`:u}
        ${this.slot==="to"?n`<span class="w-slider-thumb__to-marker"
              >${this.formatter?this.formatter(this.allowValuesOutsideRange?"":this.max,"to"):this.max}
              ${this.suffix}</span
            >`:u}

        <w-textfield
          aria-label="${this.ariaLabel}"
          aria-description="${z(this.ariaDescription)}"
          class="w-slider-thumb__textfield"
          type="number"
          .formatter=${this.formatter?e=>this.formatter(e,this.slot):u}
          .value="${this.textFieldDisplayValue}"
          min="${this.allowValuesOutsideRange?u:this.min}"
          max="${this.allowValuesOutsideRange?u:this.max}"
          ?invalid="${this.invalid}"
          @input="${this.#r}"
          @focus="${this.#s}"
          @blur="${this.#o}"
        >
          ${this.suffix?n`<w-affix slot="suffix" label="${this.suffix}"></w-affix>`:u}
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
            ${this.tooltipDisplayValue}${this.suffix?n`&nbsp;${this.suffix}`:u}
          </span>
        </w-attention>

        <!-- aria-description is still not recommended for general use, so make a visually hidden element and refer to it with aria-describedby -->
        <span class="sr-only" id="aria-description"
          >${this.ariaDescription}</span
        >
      </div>
    `}}l([s({attribute:"aria-label",reflect:!0})],o.prototype,"ariaLabel");l([s({attribute:"aria-description",reflect:!0})],o.prototype,"ariaDescription");l([s({reflect:!0})],o.prototype,"label");l([s({reflect:!0})],o.prototype,"name");l([s({reflect:!0})],o.prototype,"value");l([s({type:Boolean,reflect:!0})],o.prototype,"disabled");l([s({type:Boolean,reflect:!0})],o.prototype,"invalid");l([s({attribute:!1,reflect:!1})],o.prototype,"allowValuesOutsideRange");l([p()],o.prototype,"markers");l([p()],o.prototype,"required");l([p()],o.prototype,"step");l([p()],o.prototype,"min");l([p()],o.prototype,"max");l([p()],o.prototype,"suffix");l([p()],o.prototype,"formatter");l([H('input[type="range"]')],o.prototype,"range");l([H("w-textfield")],o.prototype,"textfield");l([p()],o.prototype,"_showTooltip");l([p()],o.prototype,"_inputHasFocus");customElements.get("w-slider-thumb")||customElements.define("w-slider-thumb",o);var q=Object.freeze,Y=Object.defineProperty,g=(i,e)=>q(Y(i,"raw",{value:q(i.slice())})),N,I,P,M,B,L;const{events:Z,args:ee,argTypes:te}=U("w-slider"),re={title:"Forms/Slider and Range Slider",args:ee,argTypes:te,parameters:{actions:{handles:Z}}},y={render(){return n`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},x={render(){return n`
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
    `}},_={args:{locale:"nb",suffix:"m²"},render({locale:i,suffix:e}){return n(N||(N=g([`
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
    `])),e,i)}},k={args:{locale:"nb",suffix:"kr"},render({locale:i,suffix:e}){return n(I||(I=g([`
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
    `])),e,i)}},S={args:{locale:"nb",suffix:"km"},render({locale:i,suffix:e}){return n(P||(P=g([`
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
    `])),e,i)}},T={args:{locale:"nb",step:"5",markers:"5"},render({markers:i,step:e}){return n`
      <w-slider
        label="Single"
        min="0"
        max="100"
        step="${e}"
        markers="${i}"
      >
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},$={args:{step:5},render({step:i}){return n`
      <w-slider label="Single" step="${i}" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},E={args:{},render(){return n(M||(M=g([`
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
    `])))}},F={args:{locale:"nb"},render(){return n`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `}},R={args:{},render(){return n(B||(B=g([`
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
    `])))}},C={args:{},render(){return n(L||(L=g([`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Pris"
          suffix="kr"
          min="0"
          max="700000"
          data-testid="overunder"
          allow-values-outside-range="true"
          step="10000"
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"
            value="0"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"
            value="150000"
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
            return "0";
          }
          if (value === "" && type === "to") {
            return "Over 700 000";
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
    `])))}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    locale: "nb",
    suffix: "m²"
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
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    locale: "nb",
    suffix: "kr"
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
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    locale: "nb",
    suffix: "km"
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
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    locale: "nb",
    step: "5",
    markers: "5"
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
}`,...T.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    locale: "nb"
  },
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Pris"
          suffix="kr"
          min="0"
          max="700000"
          data-testid="overunder"
          allow-values-outside-range="true"
          step="10000"
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"
            value="0"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"
            value="150000"
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
            return "0";
          }
          if (value === "" && type === "to") {
            return "Over 700 000";
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
}`,...C.parameters?.docs?.source}}};const ae=["Single","Range","SuffixSquareMeters","SuffixCurrency","SuffixKilometers","Marks","Step","OverUnder","SingleError","RangeError","TestCase"],he=Object.freeze(Object.defineProperty({__proto__:null,Marks:T,OverUnder:E,Range:x,RangeError:R,Single:y,SingleError:F,Step:$,SuffixCurrency:k,SuffixKilometers:S,SuffixSquareMeters:_,TestCase:C,__namedExportsOrder:ae,default:re},Symbol.toStringTag,{value:"Module"}));export{T as M,E as O,x as R,he as S,y as a,_ as b,k as c,S as d,$ as e,F as f,R as g};
