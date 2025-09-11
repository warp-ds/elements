import{i as M,a as fe,s as Fe,u as He,b as L,F as Ye,c as ze,j as Le,W as qe,r as Ve,o as X,E as Xe,x as P,k as Qe,n as _,l as W,m as T,g as Ke}from"./iframe-B1eEyMDL.js";import{s as ge,p as pe}from"./utilities-CpdWJ46Z.js";const we=6048e5,Ie=864e5,B=Symbol.for("constructDateFrom");function v(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&B in e?e[B](t):e instanceof Date?new e.constructor(t):new Date(t)}function m(e,t){return v(t||e,e)}function Y(e,t,a){const n=m(e,a?.in);return isNaN(t)?v(e,NaN):(t&&n.setDate(n.getDate()+t),n)}function K(e,t,a){const n=m(e,a?.in);if(isNaN(t))return v(e,NaN);if(!t)return n;const r=n.getDate(),i=v(e,n.getTime());i.setMonth(n.getMonth()+t+1,0);const o=i.getDate();return r>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),r),n)}let Re={};function x(){return Re}function y(e,t){const a=x(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=m(e,t?.in),i=r.getDay(),o=(i<n?7:0)+i-n;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function z(e,t){return y(e,{...t,weekStartsOn:1})}function ke(e,t){const a=m(e,t?.in),n=a.getFullYear(),r=v(a,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=z(r),o=v(a,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const d=z(o);return a.getTime()>=i.getTime()?n+1:a.getTime()>=d.getTime()?n:n-1}function J(e){const t=m(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return a.setUTCFullYear(t.getFullYear()),+e-+a}function q(e,...t){const a=v.bind(null,e||t.find(n=>typeof n=="object"));return t.map(a)}function j(e,t){const a=m(e,t?.in);return a.setHours(0,0,0,0),a}function ve(e,t,a){const[n,r]=q(a?.in,e,t),i=j(n),o=j(r),d=+i-J(i),l=+o-J(o);return Math.round((d-l)/Ie)}function Ae(e,t){const a=ke(e,t),n=v(e,0);return n.setFullYear(a,0,4),n.setHours(0,0,0,0),z(n)}function Be(e,t,a){return Y(e,t*7,a)}function Je(e){return v(e,Date.now())}function ye(e,t,a){const[n,r]=q(a?.in,e,t);return+j(n)==+j(r)}function Ge(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Ue(e){return!(!Ge(e)&&typeof e!="number"||isNaN(+m(e)))}function be(e,t){const[a,n]=q(e,t.start,t.end);return{start:a,end:n}}function Ze(e,t){const{start:a,end:n}=be(t?.in,e);let r=+a>+n;const i=r?+a:+n,o=r?n:a;o.setHours(0,0,0,0);let d=1;const l=[];for(;+o<=i;)l.push(v(a,o)),o.setDate(o.getDate()+d),o.setHours(0,0,0,0);return r?l.reverse():l}function et(e,t){const{start:a,end:n}=be(t?.in,e);let r=+a>+n;const i=y(r?n:a,t),o=y(r?a:n,t);i.setHours(15),o.setHours(15);const d=+o.getTime();let l=i,k=t?.step??1;if(!k)return[];k<0&&(k=-k,r=!r);const f=[];for(;+l<=d;)l.setHours(0),f.push(v(a,l)),l=Be(l,k),l.setHours(15);return r?f.reverse():f}function I(e,t){const a=m(e,t?.in);return a.setDate(1),a.setHours(0,0,0,0),a}function tt(e,t){const a=m(e,t?.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}function G(e,t){const a=x(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=m(e,t?.in),i=r.getDay(),o=(i<n?-7:0)+6-(i-n);return r.setDate(r.getDate()+o),r.setHours(23,59,59,999),r}const at={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pe=(e,t,a)=>{let n;const r=at[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",t.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};function w(e){return(t={})=>{const a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}const nt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},rt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},it={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ot={date:w({formats:nt,defaultWidth:"full"}),time:w({formats:rt,defaultWidth:"full"}),dateTime:w({formats:it,defaultWidth:"full"})},st={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Me=(e,t,a,n)=>st[e];function u(e){return(t,a)=>{const n=a?.context?String(a.context):"standalone";let r;if(n==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,d=a?.width?String(a.width):o;r=e.formattingValues[d]||e.formattingValues[o]}else{const o=e.defaultWidth,d=a?.width?String(a.width):e.defaultWidth;r=e.values[d]||e.values[o]}const i=e.argumentCallback?e.argumentCallback(t):t;return r[i]}}const dt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ut={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ct={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},lt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},mt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ht={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ft=(e,t)=>{const a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},De={ordinalNumber:ft,era:u({values:dt,defaultWidth:"wide"}),quarter:u({values:ut,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:ct,defaultWidth:"wide"}),day:u({values:lt,defaultWidth:"wide"}),dayPeriod:u({values:mt,defaultWidth:"wide",formattingValues:ht,defaultFormattingWidth:"wide"})};function c(e){return(t,a={})=>{const n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;const o=i[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?pt(d,p=>p.test(o)):gt(d,p=>p.test(o));let k;k=e.valueCallback?e.valueCallback(l):l,k=a.valueCallback?a.valueCallback(k):k;const f=t.slice(o.length);return{value:k,rest:f}}}function gt(e,t){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&t(e[a]))return a}function pt(e,t){for(let a=0;a<e.length;a++)if(t(e[a]))return a}function E(e){return(t,a={})=>{const n=t.match(e.matchPattern);if(!n)return null;const r=n[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;const d=t.slice(r.length);return{value:o,rest:d}}}const wt=/^(\d+)(th|st|nd|rd)?/i,kt=/\d+/i,vt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},yt={any:[/^b/i,/^(a|c)/i]},bt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pt={any:[/1/i,/2/i,/3/i,/4/i]},Mt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Dt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_t={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Wt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$t={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},_e={ordinalNumber:E({matchPattern:wt,parsePattern:kt,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:yt,defaultParseWidth:"any"}),quarter:c({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:Pt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:Mt,defaultMatchWidth:"wide",parsePatterns:Dt,defaultParseWidth:"any"}),day:c({matchPatterns:_t,defaultMatchWidth:"wide",parsePatterns:Wt,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:$t,defaultMatchWidth:"any",parsePatterns:xt,defaultParseWidth:"any"})},Ot={code:"en-US",formatDistance:Pe,formatLong:ot,formatRelative:Me,localize:De,match:_e,options:{weekStartsOn:0,firstWeekContainsDate:1}};function St(e,t){const a=m(e,t?.in);return ve(a,tt(a))+1}function jt(e,t){const a=m(e,t?.in),n=+z(a)-+Ae(a);return Math.round(n/we)+1}function We(e,t){const a=m(e,t?.in),n=a.getFullYear(),r=x(),i=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=v(t?.in||e,0);o.setFullYear(n+1,0,i),o.setHours(0,0,0,0);const d=y(o,t),l=v(t?.in||e,0);l.setFullYear(n,0,i),l.setHours(0,0,0,0);const k=y(l,t);return+a>=+d?n+1:+a>=+k?n:n-1}function Tt(e,t){const a=x(),n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,r=We(e,t),i=v(t?.in||e,0);return i.setFullYear(r,0,n),i.setHours(0,0,0,0),y(i,t)}function Et(e,t){const a=m(e,t?.in),n=+y(a,t)-+Tt(a,t);return Math.round(n/we)+1}function s(e,t){const a=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return a+n}const b={y(e,t){const a=e.getFullYear(),n=a>0?a:1-a;return s(t==="yy"?n%100:n,t.length)},M(e,t){const a=e.getMonth();return t==="M"?String(a+1):s(a+1,2)},d(e,t){return s(e.getDate(),t.length)},a(e,t){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h(e,t){return s(e.getHours()%12||12,t.length)},H(e,t){return s(e.getHours(),t.length)},m(e,t){return s(e.getMinutes(),t.length)},s(e,t){return s(e.getSeconds(),t.length)},S(e,t){const a=t.length,n=e.getMilliseconds(),r=Math.trunc(n*Math.pow(10,a-3));return s(r,t.length)}},$={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},U={G:function(e,t,a){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(e,t,a){if(t==="yo"){const n=e.getFullYear(),r=n>0?n:1-n;return a.ordinalNumber(r,{unit:"year"})}return b.y(e,t)},Y:function(e,t,a,n){const r=We(e,n),i=r>0?r:1-r;if(t==="YY"){const o=i%100;return s(o,2)}return t==="Yo"?a.ordinalNumber(i,{unit:"year"}):s(i,t.length)},R:function(e,t){const a=ke(e);return s(a,t.length)},u:function(e,t){const a=e.getFullYear();return s(a,t.length)},Q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return s(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return s(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,a){const n=e.getMonth();switch(t){case"M":case"MM":return b.M(e,t);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,a){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return s(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,a,n){const r=Et(e,n);return t==="wo"?a.ordinalNumber(r,{unit:"week"}):s(r,t.length)},I:function(e,t,a){const n=jt(e);return t==="Io"?a.ordinalNumber(n,{unit:"week"}):s(n,t.length)},d:function(e,t,a){return t==="do"?a.ordinalNumber(e.getDate(),{unit:"date"}):b.d(e,t)},D:function(e,t,a){const n=St(e);return t==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):s(n,t.length)},E:function(e,t,a){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,a,n){const r=e.getDay(),i=(r-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return s(i,2);case"eo":return a.ordinalNumber(i,{unit:"day"});case"eee":return a.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,a,n){const r=e.getDay(),i=(r-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return s(i,t.length);case"co":return a.ordinalNumber(i,{unit:"day"});case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,a){const n=e.getDay(),r=n===0?7:n;switch(t){case"i":return String(r);case"ii":return s(r,t.length);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,a){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,a){const n=e.getHours();let r;switch(n===12?r=$.noon:n===0?r=$.midnight:r=n/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,a){const n=e.getHours();let r;switch(n>=17?r=$.evening:n>=12?r=$.afternoon:n>=4?r=$.morning:r=$.night,t){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,a){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return b.h(e,t)},H:function(e,t,a){return t==="Ho"?a.ordinalNumber(e.getHours(),{unit:"hour"}):b.H(e,t)},K:function(e,t,a){const n=e.getHours()%12;return t==="Ko"?a.ordinalNumber(n,{unit:"hour"}):s(n,t.length)},k:function(e,t,a){let n=e.getHours();return n===0&&(n=24),t==="ko"?a.ordinalNumber(n,{unit:"hour"}):s(n,t.length)},m:function(e,t,a){return t==="mo"?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):b.m(e,t)},s:function(e,t,a){return t==="so"?a.ordinalNumber(e.getSeconds(),{unit:"second"}):b.s(e,t)},S:function(e,t){return b.S(e,t)},X:function(e,t,a){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return ee(n);case"XXXX":case"XX":return D(n);case"XXXXX":case"XXX":default:return D(n,":")}},x:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"x":return ee(n);case"xxxx":case"xx":return D(n);case"xxxxx":case"xxx":default:return D(n,":")}},O:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Z(n,":");case"OOOO":default:return"GMT"+D(n,":")}},z:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Z(n,":");case"zzzz":default:return"GMT"+D(n,":")}},t:function(e,t,a){const n=Math.trunc(+e/1e3);return s(n,t.length)},T:function(e,t,a){return s(+e,t.length)}};function Z(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=Math.trunc(n/60),i=n%60;return i===0?a+String(r):a+String(r)+t+s(i,2)}function ee(e,t){return e%60===0?(e>0?"-":"+")+s(Math.abs(e)/60,2):D(e,t)}function D(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=s(Math.trunc(n/60),2),i=s(n%60,2);return a+r+t+i}const te=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},$e=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Nt=(e,t)=>{const a=e.match(/(P+)(p+)?/)||[],n=a[1],r=a[2];if(!r)return te(e,t);let i;switch(n){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",te(n,t)).replace("{{time}}",$e(r,t))},Ct={p:$e,P:Nt},Ft=/^D+$/,Ht=/^Y+$/,Yt=["D","DD","YY","YYYY"];function zt(e){return Ft.test(e)}function Lt(e){return Ht.test(e)}function qt(e,t,a){const n=Vt(e,t,a);if(console.warn(n),Yt.includes(e))throw new RangeError(n)}function Vt(e,t,a){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Xt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Qt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Kt=/^'([^]*?)'?$/,It=/''/g,Rt=/[a-zA-Z]/;function N(e,t,a){const n=x(),r=a?.locale??n.locale??Ot,i=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,d=m(e,a?.in);if(!Ue(d))throw new RangeError("Invalid time value");let l=t.match(Qt).map(f=>{const p=f[0];if(p==="p"||p==="P"){const V=Ct[p];return V(f,r.formatLong)}return f}).join("").match(Xt).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const p=f[0];if(p==="'")return{isToken:!1,value:At(f)};if(U[p])return{isToken:!0,value:f};if(p.match(Rt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return{isToken:!1,value:f}});r.localize.preprocessor&&(l=r.localize.preprocessor(d,l));const k={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return l.map(f=>{if(!f.isToken)return f.value;const p=f.value;(!a?.useAdditionalWeekYearTokens&&Lt(p)||!a?.useAdditionalDayOfYearTokens&&zt(p))&&qt(p,t,String(e));const V=U[p[0]];return V(d,p,r.localize,k)}).join("")}function At(e){const t=e.match(Kt);return t?t[1].replace(It,"'"):e}function Bt(e,t){const a=m(e,t?.in);if(isNaN(+a))throw new RangeError("Invalid time value");const n=t?.format??"extended";let r="";const i=n==="extended"?"-":"";{const o=s(a.getDate(),2),d=s(a.getMonth()+1,2);r=`${s(a.getFullYear(),4)}${i}${d}${i}${o}`}return r}function xe(e,t){return m(e,t?.in).getDate()}function Jt(e,t){return m(e,t?.in).getDay()}function Gt(e,t){const a=x(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=xe(m(e,t?.in));if(isNaN(r))return NaN;const i=Jt(I(e,t));let o=n-i;o<=0&&(o+=7);const d=r-o;return Math.ceil(d/7)+1}function Ut(e,t){const a=m(e,t?.in),n=a.getMonth();return a.setFullYear(a.getFullYear(),n+1,0),a.setHours(0,0,0,0),m(a,t?.in)}function ae(e,t,a){const[n,r]=q(a?.in,e,t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function ne(e,t){return ye(v(e,e),Je(e))}function re(e,t,a){return Y(e,-t,a)}function Zt(e){return j(Date.now(),e)}function ie(e,t,a){return K(e,-1,a)}const ea={lessThanXSeconds:{one:"mindre end ét sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"ét halvt minut",lessThanXMinutes:{one:"mindre end ét minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXWeeks:{one:"cirka 1 uge",other:"cirka {{count}} uger"},xWeeks:{one:"1 uge",other:"{{count}} uger"},aboutXMonths:{one:"cirka 1 måned",other:"cirka {{count}} måneder"},xMonths:{one:"1 måned",other:"{{count}} måneder"},aboutXYears:{one:"cirka 1 år",other:"cirka {{count}} år"},xYears:{one:"1 år",other:"{{count}} år"},overXYears:{one:"over 1 år",other:"over {{count}} år"},almostXYears:{one:"næsten 1 år",other:"næsten {{count}} år"}},ta=(e,t,a)=>{let n;const r=ea[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" siden":n},aa={full:"EEEE 'den' d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd/MM/y"},na={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ra={full:"{{date}} 'kl'. {{time}}",long:"{{date}} 'kl'. {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ia={date:w({formats:aa,defaultWidth:"full"}),time:w({formats:na,defaultWidth:"full"}),dateTime:w({formats:ra,defaultWidth:"full"})},oa={lastWeek:"'sidste' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"'på' eeee 'kl.' p",other:"P"},sa=(e,t,a,n)=>oa[e],da={narrow:["fvt","vt"],abbreviated:["f.v.t.","v.t."],wide:["før vesterlandsk tidsregning","vesterlandsk tidsregning"]},ua={narrow:["1","2","3","4"],abbreviated:["1. kvt.","2. kvt.","3. kvt.","4. kvt."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},ca={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},la={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn.","man.","tir.","ons.","tor.","fre.","lør."],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ma={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"}},ha={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"}},fa=(e,t)=>Number(e)+".",ga={ordinalNumber:fa,era:u({values:da,defaultWidth:"wide"}),quarter:u({values:ua,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:ca,defaultWidth:"wide"}),day:u({values:la,defaultWidth:"wide"}),dayPeriod:u({values:ma,defaultWidth:"wide",formattingValues:ha,defaultFormattingWidth:"wide"})},pa=/^(\d+)(\.)?/i,wa=/\d+/i,ka={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},va={any:[/^f/i,/^(v|e)/i]},ya={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},ba={any:[/1/i,/2/i,/3/i,/4/i]},Pa={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},Ma={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Da={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},_a={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Wa={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},$a={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},xa={ordinalNumber:E({matchPattern:pa,parsePattern:wa,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:ka,defaultMatchWidth:"wide",parsePatterns:va,defaultParseWidth:"any"}),quarter:c({matchPatterns:ya,defaultMatchWidth:"wide",parsePatterns:ba,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:Pa,defaultMatchWidth:"wide",parsePatterns:Ma,defaultParseWidth:"any"}),day:c({matchPatterns:Da,defaultMatchWidth:"wide",parsePatterns:_a,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:Wa,defaultMatchWidth:"any",parsePatterns:$a,defaultParseWidth:"any"})},Oa={code:"da",formatDistance:ta,formatLong:ia,formatRelative:sa,localize:ga,match:xa,options:{weekStartsOn:1,firstWeekContainsDate:4}},Sa={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},ja={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Ta={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ea={date:w({formats:Sa,defaultWidth:"full"}),time:w({formats:ja,defaultWidth:"full"}),dateTime:w({formats:Ta,defaultWidth:"full"})},Oe={code:"en-GB",formatDistance:Pe,formatLong:Ea,formatRelative:Me,localize:De,match:_e,options:{weekStartsOn:1,firstWeekContainsDate:4}};function oe(e){return e.replace(/sekuntia?/,"sekunnin")}function se(e){return e.replace(/minuuttia?/,"minuutin")}function de(e){return e.replace(/tuntia?/,"tunnin")}function Na(e){return e.replace(/päivää?/,"päivän")}function ue(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function ce(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function C(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}const Ca={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:oe},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:oe},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:e=>"puolen minuutin"},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:se},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:se},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:de},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:de},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:Na},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:ue},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:ue},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:ce},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:ce},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:C},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:C},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:C},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:C}},Fa=(e,t,a)=>{const n=Ca[e],r=t===1?n.one:n.other.replace("{{count}}",String(t));return a?.addSuffix?a.comparison&&a.comparison>0?n.futureTense(r)+" kuluttua":r+" sitten":r},Ha={full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},Ya={full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},za={full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},La={date:w({formats:Ha,defaultWidth:"full"}),time:w({formats:Ya,defaultWidth:"full"}),dateTime:w({formats:za,defaultWidth:"full"})},qa={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"},Va=(e,t,a,n)=>qa[e],Xa={narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},Qa={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},R={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},Ka={narrow:R.narrow,abbreviated:R.abbreviated,wide:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"]},H={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},Ia={narrow:H.narrow,short:H.short,abbreviated:H.abbreviated,wide:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"]},Ra={narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},Aa=(e,t)=>Number(e)+".",Ba={ordinalNumber:Aa,era:u({values:Xa,defaultWidth:"wide"}),quarter:u({values:Qa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:R,defaultWidth:"wide",formattingValues:Ka,defaultFormattingWidth:"wide"}),day:u({values:H,defaultWidth:"wide",formattingValues:Ia,defaultFormattingWidth:"wide"}),dayPeriod:u({values:Ra,defaultWidth:"wide"})},Ja=/^(\d+)(\.)/i,Ga=/\d+/i,Ua={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},Za={any:[/^e/i,/^j/i]},en={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},tn={any:[/1/i,/2/i,/3/i,/4/i]},an={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},nn={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},rn={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},on={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},sn={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},dn={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},un={ordinalNumber:E({matchPattern:Ja,parsePattern:Ga,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:Ua,defaultMatchWidth:"wide",parsePatterns:Za,defaultParseWidth:"any"}),quarter:c({matchPatterns:en,defaultMatchWidth:"wide",parsePatterns:tn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:an,defaultMatchWidth:"wide",parsePatterns:nn,defaultParseWidth:"any"}),day:c({matchPatterns:rn,defaultMatchWidth:"wide",parsePatterns:on,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:sn,defaultMatchWidth:"any",parsePatterns:dn,defaultParseWidth:"any"})},cn={code:"fi",formatDistance:Fa,formatLong:La,formatRelative:Va,localize:Ba,match:un,options:{weekStartsOn:1,firstWeekContainsDate:4}},ln={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},mn=(e,t,a)=>{let n;const r=ln[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" siden":n},hn={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},fn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},gn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},pn={date:w({formats:hn,defaultWidth:"full"}),time:w({formats:fn,defaultWidth:"full"}),dateTime:w({formats:gn,defaultWidth:"full"})},wn={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},kn=(e,t,a,n)=>wn[e],vn={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},yn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},bn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Pn={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Mn={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Dn=(e,t)=>Number(e)+".",_n={ordinalNumber:Dn,era:u({values:vn,defaultWidth:"wide"}),quarter:u({values:yn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:bn,defaultWidth:"wide"}),day:u({values:Pn,defaultWidth:"wide"}),dayPeriod:u({values:Mn,defaultWidth:"wide"})},Wn=/^(\d+)\.?/i,$n=/\d+/i,xn={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},On={any:[/^f/i,/^e/i]},Sn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},jn={any:[/1/i,/2/i,/3/i,/4/i]},Tn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},En={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Nn={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Cn={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Fn={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Hn={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Yn={ordinalNumber:E({matchPattern:Wn,parsePattern:$n,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:xn,defaultMatchWidth:"wide",parsePatterns:On,defaultParseWidth:"any"}),quarter:c({matchPatterns:Sn,defaultMatchWidth:"wide",parsePatterns:jn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:Tn,defaultMatchWidth:"wide",parsePatterns:En,defaultParseWidth:"any"}),day:c({matchPatterns:Nn,defaultMatchWidth:"wide",parsePatterns:Cn,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:Fn,defaultMatchWidth:"any",parsePatterns:Hn,defaultParseWidth:"any"})},zn={code:"nb",formatDistance:mn,formatLong:pn,formatRelative:kn,localize:_n,match:Yn,options:{weekStartsOn:1,firstWeekContainsDate:4}},Ln={lessThanXSeconds:{one:"mindre än en sekund",other:"mindre än {{count}} sekunder"},xSeconds:{one:"en sekund",other:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{one:"mindre än en minut",other:"mindre än {{count}} minuter"},xMinutes:{one:"en minut",other:"{{count}} minuter"},aboutXHours:{one:"ungefär en timme",other:"ungefär {{count}} timmar"},xHours:{one:"en timme",other:"{{count}} timmar"},xDays:{one:"en dag",other:"{{count}} dagar"},aboutXWeeks:{one:"ungefär en vecka",other:"ungefär {{count}} veckor"},xWeeks:{one:"en vecka",other:"{{count}} veckor"},aboutXMonths:{one:"ungefär en månad",other:"ungefär {{count}} månader"},xMonths:{one:"en månad",other:"{{count}} månader"},aboutXYears:{one:"ungefär ett år",other:"ungefär {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"över ett år",other:"över {{count}} år"},almostXYears:{one:"nästan ett år",other:"nästan {{count}} år"}},qn=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"],Vn=(e,t,a)=>{let n;const r=Ln[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",t<13?qn[t]:String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" sedan":n},Xn={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},Qn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Kn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},In={date:w({formats:Xn,defaultWidth:"full"}),time:w({formats:Qn,defaultWidth:"full"}),dateTime:w({formats:Kn,defaultWidth:"full"})},Rn={lastWeek:"'i' EEEE's kl.' p",yesterday:"'igår kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},An=(e,t,a,n)=>Rn[e],Bn={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["före Kristus","efter Kristus"]},Jn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},Gn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},Un={narrow:["S","M","T","O","T","F","L"],short:["sö","må","ti","on","to","fr","lö"],abbreviated:["sön","mån","tis","ons","tors","fre","lör"],wide:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},Zn={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kväll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kväll",night:"natt"},wide:{am:"förmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kväll",night:"natt"}},er={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på eftermiddagen",evening:"på kvällen",night:"på natten"}},tr=(e,t)=>{const a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:case 2:return a+":a"}return a+":e"},ar={ordinalNumber:tr,era:u({values:Bn,defaultWidth:"wide"}),quarter:u({values:Jn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:Gn,defaultWidth:"wide"}),day:u({values:Un,defaultWidth:"wide"}),dayPeriod:u({values:Zn,defaultWidth:"wide",formattingValues:er,defaultFormattingWidth:"wide"})},nr=/^(\d+)(:a|:e)?/i,rr=/\d+/i,ir={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},or={any:[/^f/i,/^[ev]/i]},sr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},dr={any:[/1/i,/2/i,/3/i,/4/i]},ur={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},cr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},lr={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},mr={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},hr={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},fr={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},gr={ordinalNumber:E({matchPattern:nr,parsePattern:rr,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:ir,defaultMatchWidth:"wide",parsePatterns:or,defaultParseWidth:"any"}),quarter:c({matchPatterns:sr,defaultMatchWidth:"wide",parsePatterns:dr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:ur,defaultMatchWidth:"wide",parsePatterns:cr,defaultParseWidth:"any"}),day:c({matchPatterns:lr,defaultMatchWidth:"wide",parsePatterns:mr,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:hr,defaultMatchWidth:"any",parsePatterns:fr,defaultParseWidth:"any"})},pr={code:"sv",formatDistance:Vn,formatLong:In,formatRelative:An,localize:ar,match:gr,options:{weekStartsOn:1,firstWeekContainsDate:4}};var wr={},kr=JSON.parse('{"icon.title.calendar":["Kalender"]}'),vr=JSON.parse('{"icon.title.calendar":["Calendar"]}'),yr=JSON.parse('{"icon.title.calendar":["Kalenteri"]}'),br=JSON.parse('{"icon.title.calendar":["Kalender"]}'),Pr=JSON.parse('{"icon.title.calendar":["Kalender"]}'),Se=["en","nb","fi","da","sv"],je="en",Mr=()=>{var e;let t;switch((e=process==null?void 0:wr)==null?void 0:e.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},Te=()=>{var e;const t=(e=document?.location)==null?void 0:e.hostname;return t?.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":je},Q=e=>Se.find(t=>e===t||e.toLowerCase().includes(t))||Te();function Dr(){var e;if(typeof window>"u"){const t=Mr();return Q(t)}try{const t=(e=document?.documentElement)==null?void 0:e.lang,a=Te();return Se.includes(t)?Q(t??a):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Q(a))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),je}}var _r=(e,t,a,n,r,i)=>e==="nb"?a:e==="fi"?n:e==="da"?r:e==="sv"?i:t,Wr=(e,t,a,n,r)=>{const i=Dr(),o=_r(i,e,t,a,n,r);M.load(i,o),M.activate(i)};Wr(vr,kr,yr,br,Pr);var $r=class extends fe{render(){const e=M.t({message:"Calendar",id:"icon.title.calendar",comment:"Title for calendar icon"});return He`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-calendar-16-part">${Fe(`<title>${e}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 2.5h-13a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-14 4h15M8 12.666V9.333m1 3.333H7m1-3.333-1 .333M4.5 3.333V.667m7 2.666V.667"></path></svg>`}};customElements.get("w-icon-calendar-16")||customElements.define("w-icon-calendar-16",$r);const xr=JSON.parse("{}"),Or=JSON.parse("{}"),Sr=JSON.parse("{}"),jr=JSON.parse("{}"),Tr=JSON.parse("{}"),Er=L`
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
`,Nr=L`
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
`,Cr=L`
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
`,Fr=L`
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

  /* extra rules for IE/Edge */
  .w-datepicker-input::-ms-clear,
  .w-datepicker-input::-ms-expand {
    display: none;
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
`,Hr=/^\d{4}-\d{2}-\d{2}$/;function le(e){if(typeof e!="string")return null;let t=e;Hr.test(e)&&(t=`${e}T00:00:00Z`);const a=Date.parse(t);return Number.isNaN(a)?null:new Date(a)}var Yr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,g=(e,t,a,n)=>{for(var r=n>1?void 0:n?zr(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(n?o(t,a,r):o(r))||r);return n&&r&&Yr(t,a,r),r};const Lr=typeof navigator<"u"?navigator.userAgent:"",qr=/iP(hone|od|ad)/.test(Lr),Vr=qr?"text":"date",Ee="calendar",A="input",Ne="toggle",Ce="wrapper",F={en:Oe,nb:zn,sv:pr,da:Oa,fi:cn};class h extends Ye(fe){constructor(){super(),this.headerFormat="MMMM yyyy",this.weekdayFormat="EEEEEE",this.dayFormat="PPPP",this.isCalendarOpen=!1,this.internalValue="",this.navigationDate=Zt(),this.locale=Oe,ze(Or,jr,Sr,xr,Tr);const t=Le();t&&F[t]&&(this.locale=F[t])}static{this.shadowRootOptions={...qe.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Ve,Fr,Er,Nr,Cr]}get selectedDate(){return le(this.value)??null}get month(){return I(this.navigationDate)}get weeks(){const t=this.month,a=this.navigationDate,r=et({start:I(t),end:Ut(t)},{locale:this.locale}).map(i=>({start:i,end:G(i,{locale:this.locale})})).map(i=>Ze(i));if(ae(a,t)){const i=Gt(a,{locale:this.locale})-1,o=ve(a,y(a,{locale:this.locale}));r[i][o]=a}return r}#a(t){t.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen}#r(){this.navigationDate=K(this.month,1)}#i(){this.navigationDate=ie(this.month)}async#t(){await this.updateComplete,this.input.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}#e(t){!this.isCalendarOpen||this.wrapper.contains(t.target)||this.calendar.contains(t.target)||this.input.contains(t.target)||this.toggleButton.contains(t.target)||(this.isCalendarOpen=!1)}#o(t){this.internalValue=t.target.value}#s(t){this.value=t.target.value,this.#t()}#d(t){if(t.key===" ")return this.#a(t);(t.key===","||t.key==="Enter")&&t.preventDefault()}async#u(t){const a=this.navigationDate;let n;switch(t.key){case"ArrowUp":n=re(a,7);break;case"ArrowLeft":n=re(a,1);break;case"Home":n=y(a,{locale:this.locale});break;case"PageUp":n=ie(a);break;case"ArrowDown":n=Y(a,7);break;case"ArrowRight":n=Y(a,1);break;case"End":n=G(a,{locale:this.locale});break;case"PageDown":n=K(a,1);break;case"Escape":this.isCalendarOpen=!1;break}n&&(t.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#n(t){const a=t.currentTarget.dataset.date;"key"in t?(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.internalValue=this.value=a,this.isCalendarOpen=!1,this.toggleButton.focus(),this.#t()):(this.internalValue=this.value=a,this.isCalendarOpen=!1,this.#t())}connectedCallback(){super.connectedCallback();const t=this.lang;if(t&&F[t]&&(this.locale=F[t]),this.internalValue=this.value,this.value){const a=le(this.value);a&&(this.navigationDate=a)}document.addEventListener("mousedown",this.#e),document.addEventListener("touchend",this.#e),document.addEventListener("focusin",this.#e)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.#e),document.removeEventListener("touchend",this.#e),document.removeEventListener("focusin",this.#e)}render(){return P`
      <div class="w-datepicker-wrapper" id="${Ce}">
        <label class="w-datepicker-input-label" for="${A}">${this.label}</label>
        <div class="w-datepicker-input-wrapper">
          <input
            id="${A}"
            type="${Vr}"
            name="${X(this.name)}"
            value="${X(this.value)}"
            class="w-datepicker-input"
            @input="${this.#o}"
            @blur="${this.#s}"
            @keydown="${this.#d}" />
          <w-button
            id="${Ne}"
            class="w-datepicker-button"
            aria-label="${this.value?M.t({id:"datepicker.toggle.changeDate",values:{currentDate:N(this.value,this.dayFormat)},message:"Change date, {currentDate}",comment:"Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date"}):M.t({id:"datepicker.toggle.chooseDate",message:"Choose date",comment:"Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date"})}"
            variant="utility"
            quiet
            type="button"
            @click="${this.#a}">
            <w-icon-calendar-16></w-icon-calendar-16>
          </w-button>
        </div>
      </div>
      ${this.isCalendarOpen?P`
            <div class="w-dropdown__popover w-dropdown__popover--open">
              <div
                aria-roledescription="${M.t({id:"datepicker.calendar.roleDescription",message:"Date picker",comment:"Used by screen readers to announce that the calendar element is a date picker."})}"
                class="w-datepicker__calendar"
                id="${Ee}"
                @keydown="${this.#u}">
                <div class="w-datepicker__month-nav">
                  <w-button
                    aria-label="${M.t({id:"datepicker.calendar.previousMonth",message:"Previous month",comment:"Screen reader label for the previous month button."})}"
                    class="w-datepicker__month__nav__button"
                    variant="utility"
                    quiet
                    small
                    @click="${this.#i}">
                    <w-icon-chevron-left-16></w-icon-chevron-left-16>
                  </w-button>
                  <div class="w-datepicker__month__nav__header">${N(this.month,this.headerFormat,{locale:this.locale})}</div>
                  <w-button
                    aria-label="${M.t({id:"datepicker.calendar.nextMonth",message:"Next month",comment:"Screen reader label for the next month button."})}"
                    class="w-datepicker__month__nav__button"
                    variant="utility"
                    quiet
                    small
                    @click="${this.#r}">
                    <w-icon-chevron-right-16></w-icon-chevron-right-16>
                  </w-button>
                </div>
                <div class="w-datepicker__month">
                  <table class="w-datepicker__table" role="grid">
                    <thead class="w-datepicker__weekdays">
                      <tr>
                        ${this.weeks[0].map(t=>P`<th class="w-datepicker__weekday">${N(t,this.weekdayFormat,{locale:this.locale})}</th> `)}
                      </tr>
                    </thead>
                    <tbody>
                      ${this.weeks.map(t=>P`<tr>
                            ${t.map(a=>{if(!ae(this.month,a))return P`<td></td>`;const n=this.isDayDisabled?this.isDayDisabled(a):!1,r=ye(a,this.selectedDate),i=a===this.navigationDate;return P`<td
                                aria-current="${X(ne(a)?"date":void 0)}"
                                aria-disabled="${n}"
                                aria-label="${N(a,this.dayFormat,{locale:this.locale})}"
                                aria-selected="${r}"
                                class="${Qe({"w-datepicker__day":!0,"w-datepicker__day--today":ne(a),"w-datepicker__day--selected":r,"w-datepicker__day--disabled":n,"w-datepicker__day--navigation":i})}"
                                data-navigation="${i}"
                                data-date="${Bt(a,{})}"
                                role="gridcell"
                                tabindex="${i?0:-1}"
                                @click="${n?void 0:this.#n}"
                                @keydown="${n?void 0:this.#n}">
                                <div>${xe(a)}</div>
                              </td>`})}
                          </tr>`)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          `:Xe}
    `}}g([_({reflect:!0})],h.prototype,"label",2);g([_({reflect:!0})],h.prototype,"lang",2);g([_({reflect:!0})],h.prototype,"name",2);g([_({reflect:!0})],h.prototype,"value",2);g([_({attribute:"header-format"})],h.prototype,"headerFormat",2);g([_({attribute:"weekday-format"})],h.prototype,"weekdayFormat",2);g([_({attribute:"day-format"})],h.prototype,"dayFormat",2);g([W()],h.prototype,"isCalendarOpen",2);g([W()],h.prototype,"internalValue",2);g([W()],h.prototype,"navigationDate",2);g([W()],h.prototype,"locale",2);g([W()],h.prototype,"selectedDate",1);g([W()],h.prototype,"month",1);g([W()],h.prototype,"weeks",1);g([T(`#${Ee}`)],h.prototype,"calendar",2);g([T(`#${A}`,!0)],h.prototype,"input",2);g([T(`#${Ne}`,!0)],h.prototype,"toggleButton",2);g([T(`#${Ce}`,!0)],h.prototype,"wrapper",2);g([T('[data-navigation="true"]')],h.prototype,"selectedCell",2);customElements.get("w-datepicker")||customElements.define("w-datepicker",h);var me=Object.freeze,Xr=Object.defineProperty,Qr=(e,t)=>me(Xr(e,"raw",{value:me(e.slice())})),he;const{events:Kr,args:Ir,argTypes:Rr}=Ke("w-datepicker"),Ar={title:"Forms/Datepicker",render(e){return P`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker ${ge(pe(e))}></w-datepicker>
      </div>
    `},args:Ir,argTypes:Rr,parameters:{actions:{handles:Kr}}},O={args:{label:"Dato",lang:"nb"}},S={args:{label:"Dato",lang:"nb"},render(e){return P(he||(he=Qr([`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker `,`></w-datepicker>
      </div>
      <script type="module">
        const datePicker = document.querySelector('w-datepicker');
        // No working on Sundays!
        datePicker.isDayDisabled = (day) => day.getDay() === 0;
      <\/script>
    `])),ge(pe(e)))}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    lang: 'nb'
  }
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const Br=["Default","DisableCalendarDates"],Ur=Object.freeze(Object.defineProperty({__proto__:null,Default:O,DisableCalendarDates:S,__namedExportsOrder:Br,default:Ar},Symbol.toStringTag,{value:"Module"}));export{Ur as D,O as a};
