import{f as Fe,u as Ne,v as He,E as Ye,a as V,i as U,q as ze,d as F,r as qe,l as O,b as D,k as Le,n as M,m as W,g as Xe}from"./iframe-DjmxtFYk.js";import{s as we,p as ve}from"./utilities-dJKNFooz.js";import"./button-bM_GG0Wp.js";import{e as _}from"./query-NYTjQBeo.js";import{o as I}from"./if-defined-Dls4i6nw.js";import{F as Ve}from"./FormControlMixin-DJnJZbro.js";const ye=6048e5,Qe=864e5,Z=Symbol.for("constructDateFrom");function v(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Z in e?e[Z](t):e instanceof Date?new e.constructor(t):new Date(t)}function h(e,t){return v(t||e,e)}function L(e,t,a){const n=h(e,a?.in);return isNaN(t)?v(e,NaN):(t&&n.setDate(n.getDate()+t),n)}function R(e,t,a){const n=h(e,a?.in);if(isNaN(t))return v(e,NaN);if(!t)return n;const r=n.getDate(),i=v(e,n.getTime());i.setMonth(n.getMonth()+t+1,0);const o=i.getDate();return r>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),r),n)}let Ke={};function x(){return Ke}function y(e,t){const a=x(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=h(e,t?.in),i=r.getDay(),o=(i<n?7:0)+i-n;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function X(e,t){return y(e,{...t,weekStartsOn:1})}function be(e,t){const a=h(e,t?.in),n=a.getFullYear(),r=v(a,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=X(r),o=v(a,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const d=X(o);return a.getTime()>=i.getTime()?n+1:a.getTime()>=d.getTime()?n:n-1}function ee(e){const t=h(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return a.setUTCFullYear(t.getFullYear()),+e-+a}function Q(e,...t){const a=v.bind(null,e||t.find(n=>typeof n=="object"));return t.map(a)}function C(e,t){const a=h(e,t?.in);return a.setHours(0,0,0,0),a}function Me(e,t,a){const[n,r]=Q(a?.in,e,t),i=C(n),o=C(r),d=+i-ee(i),l=+o-ee(o);return Math.round((d-l)/Qe)}function Ie(e,t){const a=be(e,t),n=v(e,0);return n.setFullYear(a,0,4),n.setHours(0,0,0,0),X(n)}function Re(e,t,a){return L(e,t*7,a)}function Ae(e){return v(e,Date.now())}function Pe(e,t,a){const[n,r]=Q(a?.in,e,t);return+C(n)==+C(r)}function Be(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Je(e){return!(!Be(e)&&typeof e!="number"||isNaN(+h(e)))}function De(e,t){const[a,n]=Q(e,t.start,t.end);return{start:a,end:n}}function Ge(e,t){const{start:a,end:n}=De(t?.in,e);let r=+a>+n;const i=r?+a:+n,o=r?n:a;o.setHours(0,0,0,0);let d=1;const l=[];for(;+o<=i;)l.push(v(a,o)),o.setDate(o.getDate()+d),o.setHours(0,0,0,0);return r?l.reverse():l}function Ue(e,t){const{start:a,end:n}=De(t?.in,e);let r=+a>+n;const i=y(r?n:a,t),o=y(r?a:n,t);i.setHours(15),o.setHours(15);const d=+o.getTime();let l=i,w=t?.step??1;if(!w)return[];w<0&&(w=-w,r=!r);const p=[];for(;+l<=d;)l.setHours(0),p.push(v(a,l)),l=Re(l,w),l.setHours(15);return r?p.reverse():p}function A(e,t){const a=h(e,t?.in);return a.setDate(1),a.setHours(0,0,0,0),a}function Ze(e,t){const a=h(e,t?.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}function te(e,t){const a=x(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=h(e,t?.in),i=r.getDay(),o=(i<n?-7:0)+6-(i-n);return r.setDate(r.getDate()+o),r.setHours(23,59,59,999),r}const et={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},_e=(e,t,a)=>{let n;const r=et[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",t.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};function k(e){return(t={})=>{const a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}const tt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},at={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},nt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},rt={date:k({formats:tt,defaultWidth:"full"}),time:k({formats:at,defaultWidth:"full"}),dateTime:k({formats:nt,defaultWidth:"full"})},it={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},$e=(e,t,a,n)=>it[e];function u(e){return(t,a)=>{const n=a?.context?String(a.context):"standalone";let r;if(n==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,d=a?.width?String(a.width):o;r=e.formattingValues[d]||e.formattingValues[o]}else{const o=e.defaultWidth,d=a?.width?String(a.width):e.defaultWidth;r=e.values[d]||e.values[o]}const i=e.argumentCallback?e.argumentCallback(t):t;return r[i]}}const ot={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},st={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ut={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ct={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},lt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},mt=(e,t)=>{const a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},We={ordinalNumber:mt,era:u({values:ot,defaultWidth:"wide"}),quarter:u({values:st,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:dt,defaultWidth:"wide"}),day:u({values:ut,defaultWidth:"wide"}),dayPeriod:u({values:ct,defaultWidth:"wide",formattingValues:lt,defaultFormattingWidth:"wide"})};function c(e){return(t,a={})=>{const n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;const o=i[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?ft(d,g=>g.test(o)):ht(d,g=>g.test(o));let w;w=e.valueCallback?e.valueCallback(l):l,w=a.valueCallback?a.valueCallback(w):w;const p=t.slice(o.length);return{value:w,rest:p}}}function ht(e,t){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&t(e[a]))return a}function ft(e,t){for(let a=0;a<e.length;a++)if(t(e[a]))return a}function E(e){return(t,a={})=>{const n=t.match(e.matchPattern);if(!n)return null;const r=n[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;const d=t.slice(r.length);return{value:o,rest:d}}}const pt=/^(\d+)(th|st|nd|rd)?/i,gt=/\d+/i,kt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},wt={any:[/^b/i,/^(a|c)/i]},vt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},yt={any:[/1/i,/2/i,/3/i,/4/i]},bt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Mt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Pt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Dt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},_t={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},$t={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},xe={ordinalNumber:E({matchPattern:pt,parsePattern:gt,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:kt,defaultMatchWidth:"wide",parsePatterns:wt,defaultParseWidth:"any"}),quarter:c({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:yt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any"}),day:c({matchPatterns:Pt,defaultMatchWidth:"wide",parsePatterns:Dt,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:_t,defaultMatchWidth:"any",parsePatterns:$t,defaultParseWidth:"any"})},Wt={code:"en-US",formatDistance:_e,formatLong:rt,formatRelative:$e,localize:We,match:xe,options:{weekStartsOn:0,firstWeekContainsDate:1}};function xt(e,t){const a=h(e,t?.in);return Me(a,Ze(a))+1}function Ot(e,t){const a=h(e,t?.in),n=+X(a)-+Ie(a);return Math.round(n/ye)+1}function Oe(e,t){const a=h(e,t?.in),n=a.getFullYear(),r=x(),i=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=v(t?.in||e,0);o.setFullYear(n+1,0,i),o.setHours(0,0,0,0);const d=y(o,t),l=v(t?.in||e,0);l.setFullYear(n,0,i),l.setHours(0,0,0,0);const w=y(l,t);return+a>=+d?n+1:+a>=+w?n:n-1}function St(e,t){const a=x(),n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,r=Oe(e,t),i=v(t?.in||e,0);return i.setFullYear(r,0,n),i.setHours(0,0,0,0),y(i,t)}function Tt(e,t){const a=h(e,t?.in),n=+y(a,t)-+St(a,t);return Math.round(n/ye)+1}function s(e,t){const a=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return a+n}const b={y(e,t){const a=e.getFullYear(),n=a>0?a:1-a;return s(t==="yy"?n%100:n,t.length)},M(e,t){const a=e.getMonth();return t==="M"?String(a+1):s(a+1,2)},d(e,t){return s(e.getDate(),t.length)},a(e,t){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h(e,t){return s(e.getHours()%12||12,t.length)},H(e,t){return s(e.getHours(),t.length)},m(e,t){return s(e.getMinutes(),t.length)},s(e,t){return s(e.getSeconds(),t.length)},S(e,t){const a=t.length,n=e.getMilliseconds(),r=Math.trunc(n*Math.pow(10,a-3));return s(r,t.length)}},$={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ae={G:function(e,t,a){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(e,t,a){if(t==="yo"){const n=e.getFullYear(),r=n>0?n:1-n;return a.ordinalNumber(r,{unit:"year"})}return b.y(e,t)},Y:function(e,t,a,n){const r=Oe(e,n),i=r>0?r:1-r;if(t==="YY"){const o=i%100;return s(o,2)}return t==="Yo"?a.ordinalNumber(i,{unit:"year"}):s(i,t.length)},R:function(e,t){const a=be(e);return s(a,t.length)},u:function(e,t){const a=e.getFullYear();return s(a,t.length)},Q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return s(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return s(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,a){const n=e.getMonth();switch(t){case"M":case"MM":return b.M(e,t);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,a){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return s(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,a,n){const r=Tt(e,n);return t==="wo"?a.ordinalNumber(r,{unit:"week"}):s(r,t.length)},I:function(e,t,a){const n=Ot(e);return t==="Io"?a.ordinalNumber(n,{unit:"week"}):s(n,t.length)},d:function(e,t,a){return t==="do"?a.ordinalNumber(e.getDate(),{unit:"date"}):b.d(e,t)},D:function(e,t,a){const n=xt(e);return t==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):s(n,t.length)},E:function(e,t,a){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,a,n){const r=e.getDay(),i=(r-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return s(i,2);case"eo":return a.ordinalNumber(i,{unit:"day"});case"eee":return a.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,a,n){const r=e.getDay(),i=(r-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return s(i,t.length);case"co":return a.ordinalNumber(i,{unit:"day"});case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,a){const n=e.getDay(),r=n===0?7:n;switch(t){case"i":return String(r);case"ii":return s(r,t.length);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,a){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,a){const n=e.getHours();let r;switch(n===12?r=$.noon:n===0?r=$.midnight:r=n/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,a){const n=e.getHours();let r;switch(n>=17?r=$.evening:n>=12?r=$.afternoon:n>=4?r=$.morning:r=$.night,t){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,a){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return b.h(e,t)},H:function(e,t,a){return t==="Ho"?a.ordinalNumber(e.getHours(),{unit:"hour"}):b.H(e,t)},K:function(e,t,a){const n=e.getHours()%12;return t==="Ko"?a.ordinalNumber(n,{unit:"hour"}):s(n,t.length)},k:function(e,t,a){let n=e.getHours();return n===0&&(n=24),t==="ko"?a.ordinalNumber(n,{unit:"hour"}):s(n,t.length)},m:function(e,t,a){return t==="mo"?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):b.m(e,t)},s:function(e,t,a){return t==="so"?a.ordinalNumber(e.getSeconds(),{unit:"second"}):b.s(e,t)},S:function(e,t){return b.S(e,t)},X:function(e,t,a){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return re(n);case"XXXX":case"XX":return P(n);case"XXXXX":case"XXX":default:return P(n,":")}},x:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"x":return re(n);case"xxxx":case"xx":return P(n);case"xxxxx":case"xxx":default:return P(n,":")}},O:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ne(n,":");case"OOOO":default:return"GMT"+P(n,":")}},z:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ne(n,":");case"zzzz":default:return"GMT"+P(n,":")}},t:function(e,t,a){const n=Math.trunc(+e/1e3);return s(n,t.length)},T:function(e,t,a){return s(+e,t.length)}};function ne(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=Math.trunc(n/60),i=n%60;return i===0?a+String(r):a+String(r)+t+s(i,2)}function re(e,t){return e%60===0?(e>0?"-":"+")+s(Math.abs(e)/60,2):P(e,t)}function P(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=s(Math.trunc(n/60),2),i=s(n%60,2);return a+r+t+i}const ie=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Se=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},jt=(e,t)=>{const a=e.match(/(P+)(p+)?/)||[],n=a[1],r=a[2];if(!r)return ie(e,t);let i;switch(n){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",ie(n,t)).replace("{{time}}",Se(r,t))},Ct={p:Se,P:jt},Et=/^D+$/,Ft=/^Y+$/,Nt=["D","DD","YY","YYYY"];function Ht(e){return Et.test(e)}function Yt(e){return Ft.test(e)}function zt(e,t,a){const n=qt(e,t,a);if(console.warn(n),Nt.includes(e))throw new RangeError(n)}function qt(e,t,a){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Lt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Xt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Vt=/^'([^]*?)'?$/,Qt=/''/g,Kt=/[a-zA-Z]/;function N(e,t,a){const n=x(),r=a?.locale??n.locale??Wt,i=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,d=h(e,a?.in);if(!Je(d))throw new RangeError("Invalid time value");let l=t.match(Xt).map(p=>{const g=p[0];if(g==="p"||g==="P"){const K=Ct[g];return K(p,r.formatLong)}return p}).join("").match(Lt).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const g=p[0];if(g==="'")return{isToken:!1,value:It(p)};if(ae[g])return{isToken:!0,value:p};if(g.match(Kt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:p}});r.localize.preprocessor&&(l=r.localize.preprocessor(d,l));const w={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return l.map(p=>{if(!p.isToken)return p.value;const g=p.value;(!a?.useAdditionalWeekYearTokens&&Yt(g)||!a?.useAdditionalDayOfYearTokens&&Ht(g))&&zt(g,t,String(e));const K=ae[g[0]];return K(d,g,r.localize,w)}).join("")}function It(e){const t=e.match(Vt);return t?t[1].replace(Qt,"'"):e}function Rt(e,t){const a=h(e,t?.in);if(isNaN(+a))throw new RangeError("Invalid time value");const n=t?.format??"extended";let r="";const i=n==="extended"?"-":"";{const o=s(a.getDate(),2),d=s(a.getMonth()+1,2);r=`${s(a.getFullYear(),4)}${i}${d}${i}${o}`}return r}function Te(e,t){return h(e,t?.in).getDate()}function At(e,t){return h(e,t?.in).getDay()}function Bt(e,t){const a=x(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=Te(h(e,t?.in));if(isNaN(r))return NaN;const i=At(A(e,t));let o=n-i;o<=0&&(o+=7);const d=r-o;return Math.ceil(d/7)+1}function Jt(e,t){const a=h(e,t?.in),n=a.getMonth();return a.setFullYear(a.getFullYear(),n+1,0),a.setHours(0,0,0,0),h(a,t?.in)}function oe(e,t,a){const[n,r]=Q(a?.in,e,t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function se(e,t){return Pe(v(e,e),Ae(e))}function de(e,t,a){return L(e,-t,a)}function Gt(e){return C(Date.now(),e)}function ue(e,t,a){return R(e,-1,a)}const Ut={lessThanXSeconds:{one:"mindre end ét sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"ét halvt minut",lessThanXMinutes:{one:"mindre end ét minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXWeeks:{one:"cirka 1 uge",other:"cirka {{count}} uger"},xWeeks:{one:"1 uge",other:"{{count}} uger"},aboutXMonths:{one:"cirka 1 måned",other:"cirka {{count}} måneder"},xMonths:{one:"1 måned",other:"{{count}} måneder"},aboutXYears:{one:"cirka 1 år",other:"cirka {{count}} år"},xYears:{one:"1 år",other:"{{count}} år"},overXYears:{one:"over 1 år",other:"over {{count}} år"},almostXYears:{one:"næsten 1 år",other:"næsten {{count}} år"}},Zt=(e,t,a)=>{let n;const r=Ut[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" siden":n},ea={full:"EEEE 'den' d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd/MM/y"},ta={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},aa={full:"{{date}} 'kl'. {{time}}",long:"{{date}} 'kl'. {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},na={date:k({formats:ea,defaultWidth:"full"}),time:k({formats:ta,defaultWidth:"full"}),dateTime:k({formats:aa,defaultWidth:"full"})},ra={lastWeek:"'sidste' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"'på' eeee 'kl.' p",other:"P"},ia=(e,t,a,n)=>ra[e],oa={narrow:["fvt","vt"],abbreviated:["f.v.t.","v.t."],wide:["før vesterlandsk tidsregning","vesterlandsk tidsregning"]},sa={narrow:["1","2","3","4"],abbreviated:["1. kvt.","2. kvt.","3. kvt.","4. kvt."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},da={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},ua={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn.","man.","tir.","ons.","tor.","fre.","lør."],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ca={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"}},la={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"}},ma=(e,t)=>Number(e)+".",ha={ordinalNumber:ma,era:u({values:oa,defaultWidth:"wide"}),quarter:u({values:sa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:da,defaultWidth:"wide"}),day:u({values:ua,defaultWidth:"wide"}),dayPeriod:u({values:ca,defaultWidth:"wide",formattingValues:la,defaultFormattingWidth:"wide"})},fa=/^(\d+)(\.)?/i,pa=/\d+/i,ga={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},ka={any:[/^f/i,/^(v|e)/i]},wa={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},va={any:[/1/i,/2/i,/3/i,/4/i]},ya={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},ba={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ma={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Pa={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Da={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},_a={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},$a={ordinalNumber:E({matchPattern:fa,parsePattern:pa,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:ga,defaultMatchWidth:"wide",parsePatterns:ka,defaultParseWidth:"any"}),quarter:c({matchPatterns:wa,defaultMatchWidth:"wide",parsePatterns:va,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:ya,defaultMatchWidth:"wide",parsePatterns:ba,defaultParseWidth:"any"}),day:c({matchPatterns:Ma,defaultMatchWidth:"wide",parsePatterns:Pa,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:Da,defaultMatchWidth:"any",parsePatterns:_a,defaultParseWidth:"any"})},Wa={code:"da",formatDistance:Zt,formatLong:na,formatRelative:ia,localize:ha,match:$a,options:{weekStartsOn:1,firstWeekContainsDate:4}},xa={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},Oa={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Sa={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ta={date:k({formats:xa,defaultWidth:"full"}),time:k({formats:Oa,defaultWidth:"full"}),dateTime:k({formats:Sa,defaultWidth:"full"})},je={code:"en-GB",formatDistance:_e,formatLong:Ta,formatRelative:$e,localize:We,match:xe,options:{weekStartsOn:1,firstWeekContainsDate:4}};function ce(e){return e.replace(/sekuntia?/,"sekunnin")}function le(e){return e.replace(/minuuttia?/,"minuutin")}function me(e){return e.replace(/tuntia?/,"tunnin")}function ja(e){return e.replace(/päivää?/,"päivän")}function he(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function fe(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function H(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}const Ca={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:ce},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:ce},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:e=>"puolen minuutin"},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:le},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:le},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:me},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:me},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:ja},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:he},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:he},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:fe},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:fe},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:H},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:H},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:H},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:H}},Ea=(e,t,a)=>{const n=Ca[e],r=t===1?n.one:n.other.replace("{{count}}",String(t));return a?.addSuffix?a.comparison&&a.comparison>0?n.futureTense(r)+" kuluttua":r+" sitten":r},Fa={full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},Na={full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},Ha={full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Ya={date:k({formats:Fa,defaultWidth:"full"}),time:k({formats:Na,defaultWidth:"full"}),dateTime:k({formats:Ha,defaultWidth:"full"})},za={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"},qa=(e,t,a,n)=>za[e],La={narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},Xa={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},B={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},Va={narrow:B.narrow,abbreviated:B.abbreviated,wide:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"]},z={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},Qa={narrow:z.narrow,short:z.short,abbreviated:z.abbreviated,wide:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"]},Ka={narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},Ia=(e,t)=>Number(e)+".",Ra={ordinalNumber:Ia,era:u({values:La,defaultWidth:"wide"}),quarter:u({values:Xa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:B,defaultWidth:"wide",formattingValues:Va,defaultFormattingWidth:"wide"}),day:u({values:z,defaultWidth:"wide",formattingValues:Qa,defaultFormattingWidth:"wide"}),dayPeriod:u({values:Ka,defaultWidth:"wide"})},Aa=/^(\d+)(\.)/i,Ba=/\d+/i,Ja={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},Ga={any:[/^e/i,/^j/i]},Ua={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},Za={any:[/1/i,/2/i,/3/i,/4/i]},en={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},tn={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},an={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},nn={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},rn={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},on={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},sn={ordinalNumber:E({matchPattern:Aa,parsePattern:Ba,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:Ja,defaultMatchWidth:"wide",parsePatterns:Ga,defaultParseWidth:"any"}),quarter:c({matchPatterns:Ua,defaultMatchWidth:"wide",parsePatterns:Za,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:en,defaultMatchWidth:"wide",parsePatterns:tn,defaultParseWidth:"any"}),day:c({matchPatterns:an,defaultMatchWidth:"wide",parsePatterns:nn,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:rn,defaultMatchWidth:"any",parsePatterns:on,defaultParseWidth:"any"})},dn={code:"fi",formatDistance:Ea,formatLong:Ya,formatRelative:qa,localize:Ra,match:sn,options:{weekStartsOn:1,firstWeekContainsDate:4}},un={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},cn=(e,t,a)=>{let n;const r=un[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" siden":n},ln={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},mn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},hn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},fn={date:k({formats:ln,defaultWidth:"full"}),time:k({formats:mn,defaultWidth:"full"}),dateTime:k({formats:hn,defaultWidth:"full"})},pn={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},gn=(e,t,a,n)=>pn[e],kn={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},wn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},vn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},yn={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},bn={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Mn=(e,t)=>Number(e)+".",Pn={ordinalNumber:Mn,era:u({values:kn,defaultWidth:"wide"}),quarter:u({values:wn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:vn,defaultWidth:"wide"}),day:u({values:yn,defaultWidth:"wide"}),dayPeriod:u({values:bn,defaultWidth:"wide"})},Dn=/^(\d+)\.?/i,_n=/\d+/i,$n={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Wn={any:[/^f/i,/^e/i]},xn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},On={any:[/1/i,/2/i,/3/i,/4/i]},Sn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Tn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},jn={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Cn={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},En={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Fn={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Nn={ordinalNumber:E({matchPattern:Dn,parsePattern:_n,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:$n,defaultMatchWidth:"wide",parsePatterns:Wn,defaultParseWidth:"any"}),quarter:c({matchPatterns:xn,defaultMatchWidth:"wide",parsePatterns:On,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:Sn,defaultMatchWidth:"wide",parsePatterns:Tn,defaultParseWidth:"any"}),day:c({matchPatterns:jn,defaultMatchWidth:"wide",parsePatterns:Cn,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:En,defaultMatchWidth:"any",parsePatterns:Fn,defaultParseWidth:"any"})},Hn={code:"nb",formatDistance:cn,formatLong:fn,formatRelative:gn,localize:Pn,match:Nn,options:{weekStartsOn:1,firstWeekContainsDate:4}},Yn={lessThanXSeconds:{one:"mindre än en sekund",other:"mindre än {{count}} sekunder"},xSeconds:{one:"en sekund",other:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{one:"mindre än en minut",other:"mindre än {{count}} minuter"},xMinutes:{one:"en minut",other:"{{count}} minuter"},aboutXHours:{one:"ungefär en timme",other:"ungefär {{count}} timmar"},xHours:{one:"en timme",other:"{{count}} timmar"},xDays:{one:"en dag",other:"{{count}} dagar"},aboutXWeeks:{one:"ungefär en vecka",other:"ungefär {{count}} veckor"},xWeeks:{one:"en vecka",other:"{{count}} veckor"},aboutXMonths:{one:"ungefär en månad",other:"ungefär {{count}} månader"},xMonths:{one:"en månad",other:"{{count}} månader"},aboutXYears:{one:"ungefär ett år",other:"ungefär {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"över ett år",other:"över {{count}} år"},almostXYears:{one:"nästan ett år",other:"nästan {{count}} år"}},zn=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"],qn=(e,t,a)=>{let n;const r=Yn[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",t<13?zn[t]:String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" sedan":n},Ln={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},Xn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Vn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Qn={date:k({formats:Ln,defaultWidth:"full"}),time:k({formats:Xn,defaultWidth:"full"}),dateTime:k({formats:Vn,defaultWidth:"full"})},Kn={lastWeek:"'i' EEEE's kl.' p",yesterday:"'igår kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},In=(e,t,a,n)=>Kn[e],Rn={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["före Kristus","efter Kristus"]},An={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},Bn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},Jn={narrow:["S","M","T","O","T","F","L"],short:["sö","må","ti","on","to","fr","lö"],abbreviated:["sön","mån","tis","ons","tors","fre","lör"],wide:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},Gn={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kväll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kväll",night:"natt"},wide:{am:"förmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kväll",night:"natt"}},Un={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på eftermiddagen",evening:"på kvällen",night:"på natten"}},Zn=(e,t)=>{const a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:case 2:return a+":a"}return a+":e"},er={ordinalNumber:Zn,era:u({values:Rn,defaultWidth:"wide"}),quarter:u({values:An,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:Bn,defaultWidth:"wide"}),day:u({values:Jn,defaultWidth:"wide"}),dayPeriod:u({values:Gn,defaultWidth:"wide",formattingValues:Un,defaultFormattingWidth:"wide"})},tr=/^(\d+)(:a|:e)?/i,ar=/\d+/i,nr={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},rr={any:[/^f/i,/^[ev]/i]},ir={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},or={any:[/1/i,/2/i,/3/i,/4/i]},sr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},dr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ur={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},cr={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},lr={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},mr={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},hr={ordinalNumber:E({matchPattern:tr,parsePattern:ar,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:nr,defaultMatchWidth:"wide",parsePatterns:rr,defaultParseWidth:"any"}),quarter:c({matchPatterns:ir,defaultMatchWidth:"wide",parsePatterns:or,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:sr,defaultMatchWidth:"wide",parsePatterns:dr,defaultParseWidth:"any"}),day:c({matchPatterns:ur,defaultMatchWidth:"wide",parsePatterns:cr,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:lr,defaultMatchWidth:"any",parsePatterns:mr,defaultParseWidth:"any"})},fr={code:"sv",formatDistance:qn,formatLong:Qn,formatRelative:In,localize:er,match:hr,options:{weekStartsOn:1,firstWeekContainsDate:4}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce="important",pr=" !"+Ce,gr=Fe(class extends Ne{constructor(e){if(super(e),e.type!==He.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const n=e[a];return n==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?a.removeProperty(n):a[n]=null);for(const n in t){const r=t[n];if(r!=null){this.ft.add(n);const i=typeof r=="string"&&r.endsWith(pr);n.includes("-")||i?a.setProperty(n,i?r.slice(0,-11):r,i?Ce:""):a[n]=r}}return Ye}}),kr=JSON.parse('{"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"]}'),wr=JSON.parse('{"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"]}'),vr=JSON.parse('{"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"]}'),yr=JSON.parse('{"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"]}'),br=JSON.parse('{"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"]}'),Mr=V`
  /* CustomDatePicker.css */

  /* container */
  .w-datepicker-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    font-size: var(--w-font-size-m);
    line-height: var(--w-line-height-m);
  }
  .w-datepicker-input-wrapper {
    position: relative;
  }
  /* hide the browser’s calendar icon, and prevent the native popup */
  .w-datepicker-input {
    /* remove default arrows/appearance */
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;

    /* basic styling */
    display: block;
    padding: 1.2rem 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    height: 48px;
    cursor: pointer;
    font-size: var(--w-font-size-m);
    line-height: var(--w-line-height-m);
    background-color: var(--w-s-color-background);
  }
  .w-datepicker-input:hover {
    border-color: var(--w-s-color-border-hover);
  }
  .w-datepicker-input:active {
    border-color: var(--w-s-color-border-selected);
  }

  .w-datepicker-input:focus,
  .w-datepicker-input:focus-visible {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: -2px;
  }

  .w-datepicker-input-label {
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: 700;
    cursor: pointer;
    padding-bottom: 0.4rem;
    color: var(--w-s-color-text);
    display: block;
  }

  /* custom calendar button */
  .w-datepicker-button {
    position: absolute;
    right: 2px;
    top: 2px;
    height: 44px;
    width: 44px !important;
    border-radius: 2px !important;
    border: none;
    cursor: pointer;
    pointer-events: auto; /* override parent’s none */
  }

  .w-datepicker-button:not(:hover) {
    background-color: var(--w-s-color-background) !important;
  }

  input[type='date']::-webkit-inner-spin-button,
  input[type='date']::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  /* Temporary dropdown, should probably use the appropriate component when it is done */
  .w-dropdown__popover {
    position: absolute;
    width: max-content;
    background-color: var(--w-s-color-background);
    box-shadow: var(--w-shadow-s);
    z-index: 100;
    border-radius: 8px;
    visibility: hidden;
  }
  .w-dropdown__popover--open {
    visibility: visible;
  }
`,Pr=V`
  .w-datepicker__calendar {
    --_calendar-border-color: var(--calendar-border-color, initial);
    --_calendar-border-style: var(--calendar-border-style, none);
    --_calendar-border-width: var(--calendar-border-width, 0);
    --_calendar-border-radius: var(--calendar-border-radius, 0);
    position: relative;
    z-index: 30;

    border: var(--_calendar-border-width) var(--_calendar-border-style) var(--_calendar-border-color);
    border-radius: var(--_calendar-border-radius);
    padding: 16px;
  }
`,Dr=V`
  /* === Day Cell === */
  .w-datepicker__day {
    /* No longer in use? */
    --_day-in-range-background: var(--day-in-range-background, var(--w-s-color-background-primary-subtle-active));

    text-align: center;
    cursor: pointer;
    outline: none;
    position: relative;

    color: var(--day-color, var(--w-s-color-text));
    background-color: var(--day-background, transparent);
    width: var(--day-width, 40px);
    height: var(--day-height, 40px);
    padding: var(--day-padding, 0);
    font-weight: var(--day-font-weight, normal);
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    border-radius: var(--day-border-radius, 50%);
  }

  .w-datepicker__day:hover {
    --day-color: var(--w-s-color-text);
    --day-background: var(--w-s-color-background-hover);
    --day-border-radius: 50%;
  }
  .w-datepicker__day:active {
    --day-color: var(--w-s-color-text);
    --day-background: var(--w-s-color-background-active);
    --day-border-radius: 50%;
  }

  .w-datepicker__day:focus-visible {
    text-decoration: none;
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, -2px);
  }

  /* === Day variants === */
  .w-datepicker__day--today {
    --day-font-weight: bold;
  }

  .w-datepicker__day--selected {
    --day-background: var(--w-s-color-background-primary);
    --day-color: var(--w-s-color-text-inverted);
    --day-font-weight: bold;
  }
  .w-datepicker__day--selected:hover,
  .w-datepicker__day--selected:focus-visible {
    --day-background: var(--w-s-color-background-primary-hover);
    --day-color: var(--w-s-color-text-inverted);
    --day-font-weight: bold;
  }

  .w-datepicker__day--disabled,
  .w-datepicker__day--disabled:hover {
    --day-color: var(--w-s-color-text-disabled);
    cursor: not-allowed;
    pointer-events: none;
  }
`,_r=V`
  .w-datepicker__month {
    /* Sets default used in the day fragment */
    --day-width: 40px;

    --_month-color: var(--month-color, var(--w-s-color-text));
    --_month-font-size: var(--month-font-size, var(--w-font-size-m));
    --_month-line-height: var(--month-line-height, var(--w-line-height-m));

    --_month-table-min-width: var(--month-table-min-width, calc(var(--day-width) * 7));

    --_weekdays-font-size: var(--weekdays-font-size, var(--w-font-size-xs));
    --_weekdays-line-height: var(--weekdays-font-size, var(--w-line-height-xs));
    --_weekdays-font-weight: var(--weekdays-font-weight, bold);

    --_weekdays-padding: var(--weekdays-padding, 8px 0 4px 0);

    text-align: center;
    user-select: none;
    display: inline-block;

    color: var(--_month-color);
    font-size: var(--_month-font-size);
    line-height: var(--_month-line-height);
  }

  .w-datepicker__month__nav {
    margin: 0 0 8px 0;
  }

  .w-datepicker__month__nav__header {
    text-align: center;
    font-weight: Bold;
  }

  .w-datepicker__table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    min-width: var(--_month-table-min-width);
    padding-top: 8px;
  }

  .w-datepicker__weekday {
    text-align: center;
    font-size: var(--_weekdays-font-size);
    line-height: var(--_weekdays-line-height);
    font-weight: var(--_weekdays-font-weight);
    padding: var(--_weekdays-padding);
  }

  .w-datepicker__month-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .w-datepicker__month__nav__button {
    flex-shrink: 0;
  }

  .w-datepicker__month__nav__header {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`,$r=/^\d{4}-\d{2}-\d{2}$/;function pe(e){if(typeof e!="string")return null;let t=e;$r.test(e)&&(t=`${e}T00:00:00Z`);const a=Date.parse(t);return Number.isNaN(a)?null:new Date(a)}var Wr=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,f=(e,t,a,n)=>{for(var r=n>1?void 0:n?xr(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(n?o(t,a,r):o(r))||r);return n&&r&&Wr(t,a,r),r};const Or=typeof navigator<"u"?navigator.userAgent:"",Sr=/iP(hone|od|ad)/.test(Or),Tr=Sr?"text":"date",S="calendar",J="input",G="toggle",Ee="wrapper",q="previous",Y={en:je,nb:Hn,sv:fr,da:Wa,fi:dn};class m extends Ve(U){constructor(){super(),this.headerFormat="MMMM yyyy",this.weekdayFormat="EEEEEE",this.dayFormat="PPPP",this.isCalendarOpen=!1,this.navigationDate=Gt(),this.locale=je,this.#e=null,ze(wr,yr,vr,kr,br);const t=F();t&&Y[t]&&(this.locale=Y[t]),this._onClickOutside=this._onClickOutside.bind(this)}static{this.shadowRootOptions={...U.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[qe,Mr,Pr,Dr,_r]}get selectedDate(){return pe(this.value)??null}get month(){return A(this.navigationDate)}#e;get weeks(){const t=this.month,a=this.navigationDate,r=Ue({start:A(t),end:Jt(t)},{locale:this.locale}).map(i=>({start:i,end:te(i,{locale:this.locale})})).map(i=>Ge(i));if(oe(a,t)){const i=Bt(a,{locale:this.locale})-1,o=Me(a,y(a,{locale:this.locale}));r[i][o]=a}return r}resetFormControl(){this.value=this.#e}async#t(t){t.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#r(){this.navigationDate=R(this.month,1)}#i(){this.navigationDate=ue(this.month)}async#a(){await this.updateComplete,this.input.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}_onClickOutside(t){!this.isCalendarOpen||this.contains(t.target)||(this.isCalendarOpen=!1)}#o(t){this.value=t.target.value}#s(t){t.preventDefault(),this.isCalendarOpen=!0}#d(t){if(t.key===" ")return this.#t(t);(t.key===","||t.key==="Enter")&&t.preventDefault()}async#u(t){const a=this.navigationDate;let n;switch(t.key){case"ArrowUp":n=de(a,7);break;case"ArrowLeft":n=de(a,1);break;case"Home":n=y(a,{locale:this.locale});break;case"PageUp":n=ue(a);break;case"ArrowDown":n=L(a,7);break;case"ArrowRight":n=L(a,1);break;case"End":n=te(a,{locale:this.locale});break;case"PageDown":n=R(a,1);break;case"Escape":this.isCalendarOpen=!1;break;case"Tab":t.target.tagName==="TD"&&!t.shiftKey?(t.preventDefault(),this.previousMonthButton.focus()):t.target.id===q&&t.shiftKey&&(t.preventDefault(),(this.selectedCell||this.todayCell).focus());break}n&&(t.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#n(t){const a=t.currentTarget.dataset.date;"key"in t?(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.value=a,this.isCalendarOpen=!1,this.toggleButton.focus(),this.#a()):(this.value=a,this.isCalendarOpen=!1,this.#a())}connectedCallback(){super.connectedCallback(),this.#e=this.value;const t=this.lang;if(t&&Y[t]&&(this.locale=Y[t]),this.value){const a=pe(this.value);a&&(this.navigationDate=a)}document.addEventListener("mousedown",this._onClickOutside),document.addEventListener("touchend",this._onClickOutside),document.addEventListener("focusin",this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._onClickOutside),document.removeEventListener("touchend",this._onClickOutside),document.removeEventListener("focusin",this._onClickOutside)}updated(t){t.has("value")&&this.setValue(this.value)}render(){return D`
      <div class="w-datepicker-wrapper" id="${Ee}">
        <label class="w-datepicker-input-label" for="${J}">${this.label}</label>
        <div class="w-datepicker-input-wrapper">
          <input
            id="${J}"
            type="${Tr}"
            name="${I(this.name)}"
            value="${I(this.value)}"
            class="w-datepicker-input"
            @click="${this.#s}"
            @input="${this.#o}"
            @keydown="${this.#d}" />
          <w-button
            aria-label="${this.value?O.t({id:"datepicker.toggle.changeDate",values:{currentDate:N(this.value,this.dayFormat)},message:"Change date, {currentDate}",comment:"Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date"}):O.t({id:"datepicker.toggle.chooseDate",message:"Choose date",comment:"Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date"})}"
            aria-controls="${S}"
            class="w-datepicker-button"
            data-testid="${G}"
            id="${G}"
            variant="utility"
            quiet
            type="button"
            @click="${this.#t}">
            <w-icon name="Calendar" size="small" locale="${F()}" class="flex"></w-icon>
          </w-button>
        </div>
      </div>
      <div class="w-dropdown__popover w-dropdown__popover--open" style="${gr({display:this.isCalendarOpen?void 0:"none"})}">
        <div
          aria-label="${O.t({id:"datepicker.calendar.roleDescription",message:"Date picker",comment:"Used by screen readers to announce that the calendar element is a date picker."})}"
          aria-modal="true"
          role="dialog"
          class="w-datepicker__calendar"
          data-testid="${S}"
          id="${S}"
          @keydown="${this.#u}">
          <div class="w-datepicker__month-nav">
            <w-button
              aria-label="${O.t({id:"datepicker.calendar.previousMonth",message:"Previous month",comment:"Screen reader label for the previous month button."})}"
              class="w-datepicker__month__nav__button"
              id="${q}"
              data-testid="${q}"
              variant="utility"
              quiet
              small
              @click="${this.#i}">
              <w-icon name="ChevronLeft" size="small" locale="${F()}" class="flex"></w-icon>
            </w-button>
            <div aria-live="polite" class="w-datepicker__month__nav__header">
              ${N(this.month,this.headerFormat,{locale:this.locale})}
            </div>
            <w-button
              aria-label="${O.t({id:"datepicker.calendar.nextMonth",message:"Next month",comment:"Screen reader label for the next month button."})}"
              class="w-datepicker__month__nav__button"
              data-testid="${S}-next"
              variant="utility"
              quiet
              small
              @click="${this.#r}">
              <w-icon name="ChevronRight" size="small" locale="${F()}" class="flex"></w-icon>
            </w-button>
          </div>
          <div class="w-datepicker__month">
            <table class="w-datepicker__table" role="grid">
              <thead class="w-datepicker__weekdays">
                <tr>
                  ${this.weeks[0].map(t=>D`<th class="w-datepicker__weekday">${N(t,this.weekdayFormat,{locale:this.locale})}</th> `)}
                </tr>
              </thead>
              <tbody>
                ${this.weeks.map(t=>D`<tr>
                      ${t.map(a=>{if(!oe(this.month,a))return D`<td></td>`;const n=this.isDayDisabled?this.isDayDisabled(a):!1,r=Pe(a,this.selectedDate),i=a===this.navigationDate;return D`<td
                          aria-current="${I(se(a)?"date":void 0)}"
                          aria-disabled="${n}"
                          aria-label="${N(a,this.dayFormat,{locale:this.locale})}"
                          aria-selected="${r}"
                          class="${Le({"w-datepicker__day":!0,"w-datepicker__day--today":se(a),"w-datepicker__day--selected":r,"w-datepicker__day--disabled":n,"w-datepicker__day--navigation":i})}"
                          data-navigation="${i}"
                          data-date="${Rt(a,{})}"
                          role="gridcell"
                          tabindex="${i?0:-1}"
                          @click="${n?void 0:this.#n}"
                          @keydown="${n?void 0:this.#n}">
                          <div>${Te(a)}</div>
                        </td>`})}
                    </tr>`)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}}f([M({reflect:!0})],m.prototype,"label",2);f([M({reflect:!0})],m.prototype,"lang",2);f([M({reflect:!0})],m.prototype,"name",2);f([M({reflect:!0})],m.prototype,"value",2);f([M({attribute:"header-format"})],m.prototype,"headerFormat",2);f([M({attribute:"weekday-format"})],m.prototype,"weekdayFormat",2);f([M({attribute:!1})],m.prototype,"isDayDisabled",2);f([M({attribute:"day-format"})],m.prototype,"dayFormat",2);f([W()],m.prototype,"isCalendarOpen",2);f([W()],m.prototype,"navigationDate",2);f([W()],m.prototype,"locale",2);f([W()],m.prototype,"selectedDate",1);f([W()],m.prototype,"month",1);f([W()],m.prototype,"weeks",1);f([_(`#${S}`)],m.prototype,"calendar",2);f([_(`#${J}`,!0)],m.prototype,"input",2);f([_(`#${G}`,!0)],m.prototype,"toggleButton",2);f([_(`#${Ee}`,!0)],m.prototype,"wrapper",2);f([_(`#${q}`)],m.prototype,"previousMonthButton",2);f([_('[aria-current="date"]')],m.prototype,"todayCell",2);f([_('[data-navigation="true"]')],m.prototype,"selectedCell",2);customElements.get("w-datepicker")||customElements.define("w-datepicker",m);var ge=Object.freeze,jr=Object.defineProperty,Cr=(e,t)=>ge(jr(e,"raw",{value:ge(e.slice())})),ke;const{events:Er,args:Fr,argTypes:Nr}=Xe("w-datepicker"),Hr={title:"Forms/Datepicker",render(e){return D`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker ${we(ve(e))}></w-datepicker>
      </div>
    `},args:Fr,argTypes:Nr,parameters:{actions:{handles:Er}}},T={args:{label:"Dato",lang:"nb"}},j={args:{label:"Dato",lang:"nb"},render(e){return D(ke||(ke=Cr([`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker `,`></w-datepicker>
      </div>
      <script type="module">
        const datePicker = document.querySelector('w-datepicker');
        // No working on Sundays!
        datePicker.isDayDisabled = (day) => day.getDay() === 0;
      <\/script>
    `])),we(ve(e)))}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    lang: 'nb'
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    lang: 'nb'
  },
  render(args) {
    return html\`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker \${spread(prespread(args))}></w-datepicker>
      </div>
      <script type="module">
        const datePicker = document.querySelector('w-datepicker');
        // No working on Sundays!
        datePicker.isDayDisabled = (day) => day.getDay() === 0;
      <\/script>
    \`;
  }
}`,...j.parameters?.docs?.source}}};const Yr=["Default","DisableCalendarDates"],Kr=Object.freeze(Object.defineProperty({__proto__:null,Default:T,DisableCalendarDates:j,__namedExportsOrder:Yr,default:Hr},Symbol.toStringTag,{value:"Module"}));export{Kr as D,T as a};
