import{g as y,x as r}from"./iframe-DDE0oc7L.js";var f=Object.freeze,S=Object.defineProperty,w=(e,t)=>f(S(e,"raw",{value:f(e.slice())})),b,p,h,g,x;const{events:v,args:k,argTypes:_}=y("w-slider"),q={title:"Forms/Slider and Range Slider",args:k,argTypes:_,parameters:{actions:{handles:v}}},s={render(){return r`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `}},a={render(){return r`
      <w-slider label="Range" min="0" max="100">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}},o={args:{locale:"nb",suffix:"m2"},render({locale:e,suffix:t}){return r(b||(b=w([`
      <w-slider label="Apartment size" min="0" max="250" suffix="`,`" data-testid="sqm">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="sqm"]');
        const formatter = window.getNumberFormatter('`,`');
        slider.formatter = formatter.format;
      <\/script>
    `])),t,e)}},l={args:{locale:"nb",suffix:"kr"},render({locale:e,suffix:t}){return r(p||(p=w([`
      <w-slider label="Price" min="0" max="250000" suffix="`,`" data-testid="currency">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="currency"]');
        const formatter = window.getNumberFormatter('`,`');
        slider.formatter = formatter.format;
      <\/script>
    `])),t,e)}},m={args:{locale:"nb",suffix:"km"},render({locale:e,suffix:t}){return r(h||(h=w([`
      <w-slider label="Distance" min="0" max="250000" suffix="`,`" data-testid="km">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="km"]');
        const formatter = window.getNumberFormatter('`,`');
        slider.formatter = formatter.format;
      <\/script>
    `])),t,e)}},i={args:{locale:"nb",suffix:"km"},render({locale:e,suffix:t}){return r(g||(g=w([`
      <w-slider label="Distance" markers="0,50000,100000,150000,200000,250000" min="0" max="250000" suffix="`,`" data-testid="km">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>

      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="km"]');
        const formatter = window.getNumberFormatter('`,`');
        slider.formatter = formatter.format;
      <\/script>
    `])),t,e)}},d={render(){return r(x||(x=w([`
      <w-slider label="Time of day" min="0" max="2400" data-testid="time">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="time"]');
        slider.formatter = (value) => {
          const padded = value.padStart(4, '0');
          return padded.substring(0, 2) + ':' + padded.substring(2);
        };
      <\/script>
    `])))}},n={args:{locale:"nb"},render(){return r`
      <w-slider label="Production year" min="1950" max="2025" over under>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}},u={args:{locale:"nb"},render(){return r`
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
    `}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Range" min="0" max="100">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'm2'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider label="Apartment size" min="0" max="250" suffix="\${suffix}" data-testid="sqm">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="sqm"]');
        const formatter = window.getNumberFormatter('\${locale}');
        slider.formatter = formatter.format;
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
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="currency"]');
        const formatter = window.getNumberFormatter('\${locale}');
        slider.formatter = formatter.format;
      <\/script>
    \`;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="km"]');
        const formatter = window.getNumberFormatter('\${locale}');
        slider.formatter = formatter.format;
      <\/script>
    \`;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'km'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider label="Distance" markers="0,50000,100000,150000,200000,250000" min="0" max="250000" suffix="\${suffix}" data-testid="km">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>

      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="km"]');
        const formatter = window.getNumberFormatter('\${locale}');
        slider.formatter = formatter.format;
      <\/script>
    \`;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Time of day" min="0" max="2400" data-testid="time">
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const slider = document.querySelector('w-slider[data-testid="time"]');
        slider.formatter = (value) => {
          const padded = value.padStart(4, '0');
          return padded.substring(0, 2) + ':' + padded.substring(2);
        };
      <\/script>
    \`;
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb'
  },
  render() {
    return html\`
      <w-slider label="Production year" min="1950" max="2025" over under>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const T=["Single","Range","SuffixSquareMeters","SuffixCurrency","SuffixKilometers","Marks","Time","OverUnder","SingleError","RangeError"],P=Object.freeze(Object.defineProperty({__proto__:null,Marks:i,OverUnder:n,Range:a,RangeError:c,Single:s,SingleError:u,SuffixCurrency:l,SuffixKilometers:m,SuffixSquareMeters:o,Time:d,__namedExportsOrder:T,default:q},Symbol.toStringTag,{value:"Module"}));export{i as M,n as O,a as R,P as S,s as a,o as b,l as c,m as d,u as e,c as f};
