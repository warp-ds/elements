import{g as y,x as r}from"./iframe-DAFhRBI_.js";var b=Object.freeze,k=Object.defineProperty,f=(e,t)=>b(k(e,"raw",{value:b(e.slice())})),w,p,h,g,S;const{events:F,args:T,argTypes:q}=y("w-slider"),_={title:"Forms/Slider and Range Slider",args:T,argTypes:q,parameters:{actions:{handles:F}}},a={render(){return r`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},s={render(){return r`
      <w-slider label="Range" min="0" max="100">
        <w-slider-thumb slot="from" aria-label="From value" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To value" name="to"></w-slider-thumb>
      </w-slider>
    `}},o={args:{locale:"nb",suffix:"m²"},render({locale:e,suffix:t}){return r(w||(w=f([`
      <w-slider label="Apartment size" min="0" max="250" suffix="`,`" data-testid="sqm">
        <w-slider-thumb slot="from" aria-label="From size" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To size" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
        sqmSlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),t,e)}},l={args:{locale:"nb",suffix:"kr"},render({locale:e,suffix:t}){return r(p||(p=f([`
      <w-slider label="Price" min="0" max="250000" suffix="`,`" data-testid="currency">
        <w-slider-thumb slot="from" aria-label="From price" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To price" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const currencySlider = document.querySelector('w-slider[data-testid="currency"]');
        currencySlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),t,e)}},i={args:{locale:"nb",suffix:"km"},render({locale:e,suffix:t}){return r(h||(h=f([`
      <w-slider label="Distance" min="0" max="250000" suffix="`,`" data-testid="km">
        <w-slider-thumb slot="from" aria-label="From distance" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To distance" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),t,e)}},n={args:{locale:"nb",suffix:"km",step:"25000",markers:"25000"},render({locale:e,suffix:t,markers:v,step:x}){return r(g||(g=f([`
      <w-slider label="Distance" markers="`,'" step="','" min="0" max="250000" suffix="',`" data-testid="markers">
        <w-slider-thumb slot="from" aria-label="From distance" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To distance" name="to"></w-slider-thumb>
      </w-slider>

      <script type="module">
        const markersSlider = document.querySelector('w-slider[data-testid="markers"]');
        markersSlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),v,x,t,e)}},d={args:{step:5},render({step:e}){return r`
      <w-slider label="Single" step="${e}" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},m={args:{},render(){return r(S||(S=f([`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider label="Produksjonsår" min="1950" max="2025" data-testid="overunder">
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"></w-slider-thumb>
        </w-slider>
      </form>
      <p>Drag the slider to show the value below. See the Code tab for how to format the labels.</p>
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
        const overunderSlider = document.querySelector('w-slider[data-testid="overunder"]');
        overunderSlider.formatter = function (value) {
          if (value === '1950') {
            return 'Før 1950';
          }
          if (value === '2025') {
            return 'Etter 2025';
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms['overunder'].addEventListener('input', function () {
          const formData = new FormData(this);
          const from = formData.get('from');
          const to = formData.get('to');
          document.getElementById('overunder-from').innerText = from;
          document.getElementById('overunder-to').innerText = to;
        });
      <\/script>
    `])))}},u={args:{locale:"nb"},render(){return r`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `}},c={args:{locale:"nb"},render(){return r`
      <w-slider label="Production year" min="1950" max="2025" over under>
        <p slot="description">Try typing a from value higher than a to value</p>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Range" min="0" max="100">
        <w-slider-thumb slot="from" aria-label="From value" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To value" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'm²'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider label="Apartment size" min="0" max="250" suffix="\${suffix}" data-testid="sqm">
        <w-slider-thumb slot="from" aria-label="From size" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To size" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
        sqmSlider.formatter = window.getNumberFormatter('\${locale}').format;
      <\/script>
    \`;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'kr'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider label="Price" min="0" max="250000" suffix="\${suffix}" data-testid="currency">
        <w-slider-thumb slot="from" aria-label="From price" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To price" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const currencySlider = document.querySelector('w-slider[data-testid="currency"]');
        currencySlider.formatter = window.getNumberFormatter('\${locale}').format;
      <\/script>
    \`;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'km'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider label="Distance" min="0" max="250000" suffix="\${suffix}" data-testid="km">
        <w-slider-thumb slot="from" aria-label="From distance" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To distance" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.formatter = window.getNumberFormatter('\${locale}').format;
      <\/script>
    \`;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'km',
    step: '25000',
    markers: '25000'
  },
  render({
    locale,
    suffix,
    markers,
    step
  }) {
    return html\`
      <w-slider label="Distance" markers="\${markers}" step="\${step}" min="0" max="250000" suffix="\${suffix}" data-testid="markers">
        <w-slider-thumb slot="from" aria-label="From distance" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To distance" name="to"></w-slider-thumb>
      </w-slider>

      <script type="module">
        const markersSlider = document.querySelector('w-slider[data-testid="markers"]');
        markersSlider.formatter = window.getNumberFormatter('\${locale}').format;
      <\/script>
    \`;
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider label="Produksjonsår" min="1950" max="2025" data-testid="overunder">
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"></w-slider-thumb>
        </w-slider>
      </form>
      <p>Drag the slider to show the value below. See the Code tab for how to format the labels.</p>
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
        const overunderSlider = document.querySelector('w-slider[data-testid="overunder"]');
        overunderSlider.formatter = function (value) {
          if (value === '1950') {
            return 'Før 1950';
          }
          if (value === '2025') {
            return 'Etter 2025';
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms['overunder'].addEventListener('input', function () {
          const formData = new FormData(this);
          const from = formData.get('from');
          const to = formData.get('to');
          document.getElementById('overunder-from').innerText = from;
          document.getElementById('overunder-to').innerText = to;
        });
      <\/script>
    \`;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const D=["Single","Range","SuffixSquareMeters","SuffixCurrency","SuffixKilometers","Marks","Step","OverUnder","SingleError","RangeError"],$=Object.freeze(Object.defineProperty({__proto__:null,Marks:n,OverUnder:m,Range:s,RangeError:c,Single:a,SingleError:u,Step:d,SuffixCurrency:l,SuffixKilometers:i,SuffixSquareMeters:o,__namedExportsOrder:D,default:_},Symbol.toStringTag,{value:"Module"}));export{n as M,m as O,s as R,$ as S,a,o as b,l as c,i as d,d as e,u as f,c as g};
