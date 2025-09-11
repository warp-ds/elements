import{a as P,i as ge,s as He,u as Ye,b as q,F as ze,c as Le,j as qe,W as Ve,r as Xe,o as Q,E as Qe,x as M,k as Ke,n as _,l as W,m as E,g as Ie}from"./iframe-BHGwj7VX.js";import{s as pe,p as ke}from"./utilities-3SCB00Np.js";const we=6048e5,Re=864e5,J=Symbol.for("constructDateFrom");function v(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&J in e?e[J](t):e instanceof Date?new e.constructor(t):new Date(t)}function m(e,t){return v(t||e,e)}function z(e,t,a){const n=m(e,a?.in);return isNaN(t)?v(e,NaN):(t&&n.setDate(n.getDate()+t),n)}function I(e,t,a){const n=m(e,a?.in);if(isNaN(t))return v(e,NaN);if(!t)return n;const r=n.getDate(),i=v(e,n.getTime());i.setMonth(n.getMonth()+t+1,0);const o=i.getDate();return r>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),r),n)}let Ae={};function $(){return Ae}function y(e,t){const a=$(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=m(e,t?.in),i=r.getDay(),o=(i<n?7:0)+i-n;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function L(e,t){return y(e,{...t,weekStartsOn:1})}function ve(e,t){const a=m(e,t?.in),n=a.getFullYear(),r=v(a,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=L(r),o=v(a,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const d=L(o);return a.getTime()>=i.getTime()?n+1:a.getTime()>=d.getTime()?n:n-1}function G(e){const t=m(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return a.setUTCFullYear(t.getFullYear()),+e-+a}function V(e,...t){const a=v.bind(null,e||t.find(n=>typeof n=="object"));return t.map(a)}function T(e,t){const a=m(e,t?.in);return a.setHours(0,0,0,0),a}function ye(e,t,a){const[n,r]=V(a?.in,e,t),i=T(n),o=T(r),d=+i-G(i),l=+o-G(o);return Math.round((d-l)/Re)}function Be(e,t){const a=ve(e,t),n=v(e,0);return n.setFullYear(a,0,4),n.setHours(0,0,0,0),L(n)}function Je(e,t,a){return z(e,t*7,a)}function Ge(e){return v(e,Date.now())}function be(e,t,a){const[n,r]=V(a?.in,e,t);return+T(n)==+T(r)}function Ue(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Ze(e){return!(!Ue(e)&&typeof e!="number"||isNaN(+m(e)))}function Me(e,t){const[a,n]=V(e,t.start,t.end);return{start:a,end:n}}function et(e,t){const{start:a,end:n}=Me(t?.in,e);let r=+a>+n;const i=r?+a:+n,o=r?n:a;o.setHours(0,0,0,0);let d=1;const l=[];for(;+o<=i;)l.push(v(a,o)),o.setDate(o.getDate()+d),o.setHours(0,0,0,0);return r?l.reverse():l}function tt(e,t){const{start:a,end:n}=Me(t?.in,e);let r=+a>+n;const i=y(r?n:a,t),o=y(r?a:n,t);i.setHours(15),o.setHours(15);const d=+o.getTime();let l=i,w=t?.step??1;if(!w)return[];w<0&&(w=-w,r=!r);const f=[];for(;+l<=d;)l.setHours(0),f.push(v(a,l)),l=Je(l,w),l.setHours(15);return r?f.reverse():f}function R(e,t){const a=m(e,t?.in);return a.setDate(1),a.setHours(0,0,0,0),a}function at(e,t){const a=m(e,t?.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}function U(e,t){const a=$(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=m(e,t?.in),i=r.getDay(),o=(i<n?-7:0)+6-(i-n);return r.setDate(r.getDate()+o),r.setHours(23,59,59,999),r}const nt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pe=(e,t,a)=>{let n;const r=nt[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",t.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};function k(e){return(t={})=>{const a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}const rt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},it={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ot={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},st={date:k({formats:rt,defaultWidth:"full"}),time:k({formats:it,defaultWidth:"full"}),dateTime:k({formats:ot,defaultWidth:"full"})},dt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},De=(e,t,a,n)=>dt[e];function u(e){return(t,a)=>{const n=a?.context?String(a.context):"standalone";let r;if(n==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,d=a?.width?String(a.width):o;r=e.formattingValues[d]||e.formattingValues[o]}else{const o=e.defaultWidth,d=a?.width?String(a.width):e.defaultWidth;r=e.values[d]||e.values[o]}const i=e.argumentCallback?e.argumentCallback(t):t;return r[i]}}const ut={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ct={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},lt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},mt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ht={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ft={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gt=(e,t)=>{const a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},_e={ordinalNumber:gt,era:u({values:ut,defaultWidth:"wide"}),quarter:u({values:ct,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:lt,defaultWidth:"wide"}),day:u({values:mt,defaultWidth:"wide"}),dayPeriod:u({values:ht,defaultWidth:"wide",formattingValues:ft,defaultFormattingWidth:"wide"})};function c(e){return(t,a={})=>{const n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;const o=i[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?kt(d,p=>p.test(o)):pt(d,p=>p.test(o));let w;w=e.valueCallback?e.valueCallback(l):l,w=a.valueCallback?a.valueCallback(w):w;const f=t.slice(o.length);return{value:w,rest:f}}}function pt(e,t){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&t(e[a]))return a}function kt(e,t){for(let a=0;a<e.length;a++)if(t(e[a]))return a}function C(e){return(t,a={})=>{const n=t.match(e.matchPattern);if(!n)return null;const r=n[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;const d=t.slice(r.length);return{value:o,rest:d}}}const wt=/^(\d+)(th|st|nd|rd)?/i,vt=/\d+/i,yt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bt={any:[/^b/i,/^(a|c)/i]},Mt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pt={any:[/1/i,/2/i,/3/i,/4/i]},Dt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},_t={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},xt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$t={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ot={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},We={ordinalNumber:C({matchPattern:wt,parsePattern:vt,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),quarter:c({matchPatterns:Mt,defaultMatchWidth:"wide",parsePatterns:Pt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:Dt,defaultMatchWidth:"wide",parsePatterns:_t,defaultParseWidth:"any"}),day:c({matchPatterns:Wt,defaultMatchWidth:"wide",parsePatterns:xt,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:$t,defaultMatchWidth:"any",parsePatterns:Ot,defaultParseWidth:"any"})},St={code:"en-US",formatDistance:Pe,formatLong:st,formatRelative:De,localize:_e,match:We,options:{weekStartsOn:0,firstWeekContainsDate:1}};function jt(e,t){const a=m(e,t?.in);return ye(a,at(a))+1}function Tt(e,t){const a=m(e,t?.in),n=+L(a)-+Be(a);return Math.round(n/we)+1}function xe(e,t){const a=m(e,t?.in),n=a.getFullYear(),r=$(),i=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=v(t?.in||e,0);o.setFullYear(n+1,0,i),o.setHours(0,0,0,0);const d=y(o,t),l=v(t?.in||e,0);l.setFullYear(n,0,i),l.setHours(0,0,0,0);const w=y(l,t);return+a>=+d?n+1:+a>=+w?n:n-1}function Et(e,t){const a=$(),n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,r=xe(e,t),i=v(t?.in||e,0);return i.setFullYear(r,0,n),i.setHours(0,0,0,0),y(i,t)}function Ct(e,t){const a=m(e,t?.in),n=+y(a,t)-+Et(a,t);return Math.round(n/we)+1}function s(e,t){const a=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return a+n}const b={y(e,t){const a=e.getFullYear(),n=a>0?a:1-a;return s(t==="yy"?n%100:n,t.length)},M(e,t){const a=e.getMonth();return t==="M"?String(a+1):s(a+1,2)},d(e,t){return s(e.getDate(),t.length)},a(e,t){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h(e,t){return s(e.getHours()%12||12,t.length)},H(e,t){return s(e.getHours(),t.length)},m(e,t){return s(e.getMinutes(),t.length)},s(e,t){return s(e.getSeconds(),t.length)},S(e,t){const a=t.length,n=e.getMilliseconds(),r=Math.trunc(n*Math.pow(10,a-3));return s(r,t.length)}},x={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Z={G:function(e,t,a){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(e,t,a){if(t==="yo"){const n=e.getFullYear(),r=n>0?n:1-n;return a.ordinalNumber(r,{unit:"year"})}return b.y(e,t)},Y:function(e,t,a,n){const r=xe(e,n),i=r>0?r:1-r;if(t==="YY"){const o=i%100;return s(o,2)}return t==="Yo"?a.ordinalNumber(i,{unit:"year"}):s(i,t.length)},R:function(e,t){const a=ve(e);return s(a,t.length)},u:function(e,t){const a=e.getFullYear();return s(a,t.length)},Q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return s(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return s(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,a){const n=e.getMonth();switch(t){case"M":case"MM":return b.M(e,t);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,a){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return s(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,a,n){const r=Ct(e,n);return t==="wo"?a.ordinalNumber(r,{unit:"week"}):s(r,t.length)},I:function(e,t,a){const n=Tt(e);return t==="Io"?a.ordinalNumber(n,{unit:"week"}):s(n,t.length)},d:function(e,t,a){return t==="do"?a.ordinalNumber(e.getDate(),{unit:"date"}):b.d(e,t)},D:function(e,t,a){const n=jt(e);return t==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):s(n,t.length)},E:function(e,t,a){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,a,n){const r=e.getDay(),i=(r-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return s(i,2);case"eo":return a.ordinalNumber(i,{unit:"day"});case"eee":return a.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,a,n){const r=e.getDay(),i=(r-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return s(i,t.length);case"co":return a.ordinalNumber(i,{unit:"day"});case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,a){const n=e.getDay(),r=n===0?7:n;switch(t){case"i":return String(r);case"ii":return s(r,t.length);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,a){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,a){const n=e.getHours();let r;switch(n===12?r=x.noon:n===0?r=x.midnight:r=n/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,a){const n=e.getHours();let r;switch(n>=17?r=x.evening:n>=12?r=x.afternoon:n>=4?r=x.morning:r=x.night,t){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,a){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return b.h(e,t)},H:function(e,t,a){return t==="Ho"?a.ordinalNumber(e.getHours(),{unit:"hour"}):b.H(e,t)},K:function(e,t,a){const n=e.getHours()%12;return t==="Ko"?a.ordinalNumber(n,{unit:"hour"}):s(n,t.length)},k:function(e,t,a){let n=e.getHours();return n===0&&(n=24),t==="ko"?a.ordinalNumber(n,{unit:"hour"}):s(n,t.length)},m:function(e,t,a){return t==="mo"?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):b.m(e,t)},s:function(e,t,a){return t==="so"?a.ordinalNumber(e.getSeconds(),{unit:"second"}):b.s(e,t)},S:function(e,t){return b.S(e,t)},X:function(e,t,a){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return te(n);case"XXXX":case"XX":return D(n);case"XXXXX":case"XXX":default:return D(n,":")}},x:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"x":return te(n);case"xxxx":case"xx":return D(n);case"xxxxx":case"xxx":default:return D(n,":")}},O:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ee(n,":");case"OOOO":default:return"GMT"+D(n,":")}},z:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ee(n,":");case"zzzz":default:return"GMT"+D(n,":")}},t:function(e,t,a){const n=Math.trunc(+e/1e3);return s(n,t.length)},T:function(e,t,a){return s(+e,t.length)}};function ee(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=Math.trunc(n/60),i=n%60;return i===0?a+String(r):a+String(r)+t+s(i,2)}function te(e,t){return e%60===0?(e>0?"-":"+")+s(Math.abs(e)/60,2):D(e,t)}function D(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=s(Math.trunc(n/60),2),i=s(n%60,2);return a+r+t+i}const ae=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},$e=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Nt=(e,t)=>{const a=e.match(/(P+)(p+)?/)||[],n=a[1],r=a[2];if(!r)return ae(e,t);let i;switch(n){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",ae(n,t)).replace("{{time}}",$e(r,t))},Ft={p:$e,P:Nt},Ht=/^D+$/,Yt=/^Y+$/,zt=["D","DD","YY","YYYY"];function Lt(e){return Ht.test(e)}function qt(e){return Yt.test(e)}function Vt(e,t,a){const n=Xt(e,t,a);if(console.warn(n),zt.includes(e))throw new RangeError(n)}function Xt(e,t,a){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Qt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Kt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,It=/^'([^]*?)'?$/,Rt=/''/g,At=/[a-zA-Z]/;function N(e,t,a){const n=$(),r=a?.locale??n.locale??St,i=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,d=m(e,a?.in);if(!Ze(d))throw new RangeError("Invalid time value");let l=t.match(Kt).map(f=>{const p=f[0];if(p==="p"||p==="P"){const X=Ft[p];return X(f,r.formatLong)}return f}).join("").match(Qt).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const p=f[0];if(p==="'")return{isToken:!1,value:Bt(f)};if(Z[p])return{isToken:!0,value:f};if(p.match(At))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return{isToken:!1,value:f}});r.localize.preprocessor&&(l=r.localize.preprocessor(d,l));const w={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return l.map(f=>{if(!f.isToken)return f.value;const p=f.value;(!a?.useAdditionalWeekYearTokens&&qt(p)||!a?.useAdditionalDayOfYearTokens&&Lt(p))&&Vt(p,t,String(e));const X=Z[p[0]];return X(d,p,r.localize,w)}).join("")}function Bt(e){const t=e.match(It);return t?t[1].replace(Rt,"'"):e}function Jt(e,t){const a=m(e,t?.in);if(isNaN(+a))throw new RangeError("Invalid time value");const n=t?.format??"extended";let r="";const i=n==="extended"?"-":"";{const o=s(a.getDate(),2),d=s(a.getMonth()+1,2);r=`${s(a.getFullYear(),4)}${i}${d}${i}${o}`}return r}function Oe(e,t){return m(e,t?.in).getDate()}function Gt(e,t){return m(e,t?.in).getDay()}function Ut(e,t){const a=$(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=Oe(m(e,t?.in));if(isNaN(r))return NaN;const i=Gt(R(e,t));let o=n-i;o<=0&&(o+=7);const d=r-o;return Math.ceil(d/7)+1}function Zt(e,t){const a=m(e,t?.in),n=a.getMonth();return a.setFullYear(a.getFullYear(),n+1,0),a.setHours(0,0,0,0),m(a,t?.in)}function ne(e,t,a){const[n,r]=V(a?.in,e,t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function re(e,t){return be(v(e,e),Ge(e))}function ie(e,t,a){return z(e,-t,a)}function ea(e){return T(Date.now(),e)}function oe(e,t,a){return I(e,-1,a)}const ta={lessThanXSeconds:{one:"mindre end ét sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"ét halvt minut",lessThanXMinutes:{one:"mindre end ét minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXWeeks:{one:"cirka 1 uge",other:"cirka {{count}} uger"},xWeeks:{one:"1 uge",other:"{{count}} uger"},aboutXMonths:{one:"cirka 1 måned",other:"cirka {{count}} måneder"},xMonths:{one:"1 måned",other:"{{count}} måneder"},aboutXYears:{one:"cirka 1 år",other:"cirka {{count}} år"},xYears:{one:"1 år",other:"{{count}} år"},overXYears:{one:"over 1 år",other:"over {{count}} år"},almostXYears:{one:"næsten 1 år",other:"næsten {{count}} år"}},aa=(e,t,a)=>{let n;const r=ta[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" siden":n},na={full:"EEEE 'den' d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd/MM/y"},ra={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ia={full:"{{date}} 'kl'. {{time}}",long:"{{date}} 'kl'. {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},oa={date:k({formats:na,defaultWidth:"full"}),time:k({formats:ra,defaultWidth:"full"}),dateTime:k({formats:ia,defaultWidth:"full"})},sa={lastWeek:"'sidste' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"'på' eeee 'kl.' p",other:"P"},da=(e,t,a,n)=>sa[e],ua={narrow:["fvt","vt"],abbreviated:["f.v.t.","v.t."],wide:["før vesterlandsk tidsregning","vesterlandsk tidsregning"]},ca={narrow:["1","2","3","4"],abbreviated:["1. kvt.","2. kvt.","3. kvt.","4. kvt."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},la={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},ma={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn.","man.","tir.","ons.","tor.","fre.","lør."],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ha={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"}},fa={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"}},ga=(e,t)=>Number(e)+".",pa={ordinalNumber:ga,era:u({values:ua,defaultWidth:"wide"}),quarter:u({values:ca,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:la,defaultWidth:"wide"}),day:u({values:ma,defaultWidth:"wide"}),dayPeriod:u({values:ha,defaultWidth:"wide",formattingValues:fa,defaultFormattingWidth:"wide"})},ka=/^(\d+)(\.)?/i,wa=/\d+/i,va={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},ya={any:[/^f/i,/^(v|e)/i]},ba={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},Ma={any:[/1/i,/2/i,/3/i,/4/i]},Pa={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},Da={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_a={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Wa={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},xa={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},$a={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Oa={ordinalNumber:C({matchPattern:ka,parsePattern:wa,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:va,defaultMatchWidth:"wide",parsePatterns:ya,defaultParseWidth:"any"}),quarter:c({matchPatterns:ba,defaultMatchWidth:"wide",parsePatterns:Ma,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:Pa,defaultMatchWidth:"wide",parsePatterns:Da,defaultParseWidth:"any"}),day:c({matchPatterns:_a,defaultMatchWidth:"wide",parsePatterns:Wa,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:xa,defaultMatchWidth:"any",parsePatterns:$a,defaultParseWidth:"any"})},Sa={code:"da",formatDistance:aa,formatLong:oa,formatRelative:da,localize:pa,match:Oa,options:{weekStartsOn:1,firstWeekContainsDate:4}},ja={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},Ta={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Ea={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ca={date:k({formats:ja,defaultWidth:"full"}),time:k({formats:Ta,defaultWidth:"full"}),dateTime:k({formats:Ea,defaultWidth:"full"})},Se={code:"en-GB",formatDistance:Pe,formatLong:Ca,formatRelative:De,localize:_e,match:We,options:{weekStartsOn:1,firstWeekContainsDate:4}};function se(e){return e.replace(/sekuntia?/,"sekunnin")}function de(e){return e.replace(/minuuttia?/,"minuutin")}function ue(e){return e.replace(/tuntia?/,"tunnin")}function Na(e){return e.replace(/päivää?/,"päivän")}function ce(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function le(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function F(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}const Fa={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:se},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:se},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:e=>"puolen minuutin"},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:de},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:de},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:ue},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:ue},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:Na},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:ce},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:ce},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:le},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:le},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:F},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:F},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:F},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:F}},Ha=(e,t,a)=>{const n=Fa[e],r=t===1?n.one:n.other.replace("{{count}}",String(t));return a?.addSuffix?a.comparison&&a.comparison>0?n.futureTense(r)+" kuluttua":r+" sitten":r},Ya={full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},za={full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},La={full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},qa={date:k({formats:Ya,defaultWidth:"full"}),time:k({formats:za,defaultWidth:"full"}),dateTime:k({formats:La,defaultWidth:"full"})},Va={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"},Xa=(e,t,a,n)=>Va[e],Qa={narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},Ka={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},A={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},Ia={narrow:A.narrow,abbreviated:A.abbreviated,wide:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"]},Y={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},Ra={narrow:Y.narrow,short:Y.short,abbreviated:Y.abbreviated,wide:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"]},Aa={narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},Ba=(e,t)=>Number(e)+".",Ja={ordinalNumber:Ba,era:u({values:Qa,defaultWidth:"wide"}),quarter:u({values:Ka,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:A,defaultWidth:"wide",formattingValues:Ia,defaultFormattingWidth:"wide"}),day:u({values:Y,defaultWidth:"wide",formattingValues:Ra,defaultFormattingWidth:"wide"}),dayPeriod:u({values:Aa,defaultWidth:"wide"})},Ga=/^(\d+)(\.)/i,Ua=/\d+/i,Za={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},en={any:[/^e/i,/^j/i]},tn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},an={any:[/1/i,/2/i,/3/i,/4/i]},nn={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},rn={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},on={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},sn={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},dn={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},un={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},cn={ordinalNumber:C({matchPattern:Ga,parsePattern:Ua,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:Za,defaultMatchWidth:"wide",parsePatterns:en,defaultParseWidth:"any"}),quarter:c({matchPatterns:tn,defaultMatchWidth:"wide",parsePatterns:an,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:nn,defaultMatchWidth:"wide",parsePatterns:rn,defaultParseWidth:"any"}),day:c({matchPatterns:on,defaultMatchWidth:"wide",parsePatterns:sn,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:dn,defaultMatchWidth:"any",parsePatterns:un,defaultParseWidth:"any"})},ln={code:"fi",formatDistance:Ha,formatLong:qa,formatRelative:Xa,localize:Ja,match:cn,options:{weekStartsOn:1,firstWeekContainsDate:4}},mn={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},hn=(e,t,a)=>{let n;const r=mn[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" siden":n},fn={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},gn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},pn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},kn={date:k({formats:fn,defaultWidth:"full"}),time:k({formats:gn,defaultWidth:"full"}),dateTime:k({formats:pn,defaultWidth:"full"})},wn={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},vn=(e,t,a,n)=>wn[e],yn={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},bn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Mn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Pn={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Dn={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},_n=(e,t)=>Number(e)+".",Wn={ordinalNumber:_n,era:u({values:yn,defaultWidth:"wide"}),quarter:u({values:bn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:Mn,defaultWidth:"wide"}),day:u({values:Pn,defaultWidth:"wide"}),dayPeriod:u({values:Dn,defaultWidth:"wide"})},xn=/^(\d+)\.?/i,$n=/\d+/i,On={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Sn={any:[/^f/i,/^e/i]},jn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Tn={any:[/1/i,/2/i,/3/i,/4/i]},En={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Cn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Nn={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Fn={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Hn={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Yn={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},zn={ordinalNumber:C({matchPattern:xn,parsePattern:$n,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:On,defaultMatchWidth:"wide",parsePatterns:Sn,defaultParseWidth:"any"}),quarter:c({matchPatterns:jn,defaultMatchWidth:"wide",parsePatterns:Tn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:En,defaultMatchWidth:"wide",parsePatterns:Cn,defaultParseWidth:"any"}),day:c({matchPatterns:Nn,defaultMatchWidth:"wide",parsePatterns:Fn,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:Hn,defaultMatchWidth:"any",parsePatterns:Yn,defaultParseWidth:"any"})},Ln={code:"nb",formatDistance:hn,formatLong:kn,formatRelative:vn,localize:Wn,match:zn,options:{weekStartsOn:1,firstWeekContainsDate:4}},qn={lessThanXSeconds:{one:"mindre än en sekund",other:"mindre än {{count}} sekunder"},xSeconds:{one:"en sekund",other:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{one:"mindre än en minut",other:"mindre än {{count}} minuter"},xMinutes:{one:"en minut",other:"{{count}} minuter"},aboutXHours:{one:"ungefär en timme",other:"ungefär {{count}} timmar"},xHours:{one:"en timme",other:"{{count}} timmar"},xDays:{one:"en dag",other:"{{count}} dagar"},aboutXWeeks:{one:"ungefär en vecka",other:"ungefär {{count}} veckor"},xWeeks:{one:"en vecka",other:"{{count}} veckor"},aboutXMonths:{one:"ungefär en månad",other:"ungefär {{count}} månader"},xMonths:{one:"en månad",other:"{{count}} månader"},aboutXYears:{one:"ungefär ett år",other:"ungefär {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"över ett år",other:"över {{count}} år"},almostXYears:{one:"nästan ett år",other:"nästan {{count}} år"}},Vn=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"],Xn=(e,t,a)=>{let n;const r=qn[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",t<13?Vn[t]:String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" sedan":n},Qn={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},Kn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},In={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Rn={date:k({formats:Qn,defaultWidth:"full"}),time:k({formats:Kn,defaultWidth:"full"}),dateTime:k({formats:In,defaultWidth:"full"})},An={lastWeek:"'i' EEEE's kl.' p",yesterday:"'igår kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Bn=(e,t,a,n)=>An[e],Jn={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["före Kristus","efter Kristus"]},Gn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},Un={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},Zn={narrow:["S","M","T","O","T","F","L"],short:["sö","må","ti","on","to","fr","lö"],abbreviated:["sön","mån","tis","ons","tors","fre","lör"],wide:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},er={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kväll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kväll",night:"natt"},wide:{am:"förmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kväll",night:"natt"}},tr={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på eftermiddagen",evening:"på kvällen",night:"på natten"}},ar=(e,t)=>{const a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:case 2:return a+":a"}return a+":e"},nr={ordinalNumber:ar,era:u({values:Jn,defaultWidth:"wide"}),quarter:u({values:Gn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:Un,defaultWidth:"wide"}),day:u({values:Zn,defaultWidth:"wide"}),dayPeriod:u({values:er,defaultWidth:"wide",formattingValues:tr,defaultFormattingWidth:"wide"})},rr=/^(\d+)(:a|:e)?/i,ir=/\d+/i,or={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},sr={any:[/^f/i,/^[ev]/i]},dr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},ur={any:[/1/i,/2/i,/3/i,/4/i]},cr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},lr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},mr={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},hr={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},fr={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},gr={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},pr={ordinalNumber:C({matchPattern:rr,parsePattern:ir,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:or,defaultMatchWidth:"wide",parsePatterns:sr,defaultParseWidth:"any"}),quarter:c({matchPatterns:dr,defaultMatchWidth:"wide",parsePatterns:ur,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:cr,defaultMatchWidth:"wide",parsePatterns:lr,defaultParseWidth:"any"}),day:c({matchPatterns:mr,defaultMatchWidth:"wide",parsePatterns:hr,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:fr,defaultMatchWidth:"any",parsePatterns:gr,defaultParseWidth:"any"})},kr={code:"sv",formatDistance:Xn,formatLong:Rn,formatRelative:Bn,localize:nr,match:pr,options:{weekStartsOn:1,firstWeekContainsDate:4}};var wr={},je=["en","nb","fi","da","sv"],Te="en",vr=()=>{var e;let t;switch((e=process==null?void 0:wr)==null?void 0:e.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},Ee=()=>{var e;const t=(e=document?.location)==null?void 0:e.hostname;return t?.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":Te},K=e=>je.find(t=>e===t||e.toLowerCase().includes(t))||Ee();function yr(){var e;if(typeof window>"u"){const t=vr();return K(t)}try{const t=(e=document?.documentElement)==null?void 0:e.lang,a=Ee();return je.includes(t)?K(t??a):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),K(a))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Te}}var br=(e,t,a,n,r,i)=>e==="nb"?a:e==="fi"?n:e==="da"?r:e==="sv"?i:t,Mr=(e,t,a,n,r)=>{const i=yr(),o=br(i,e,t,a,n,r);P.load(i,o),P.activate(i)},O={nb:{"icon.title.calendar":["Kalender"]},en:{"icon.title.calendar":["Calendar"]},fi:{"icon.title.calendar":["Kalenteri"]},da:{"icon.title.calendar":["Kalender"]},sv:{"icon.title.calendar":["Kalender"]}};Mr(O.en,O.nb,O.fi,O.da,O.sv);var Pr=class extends ge{render(){const e=P.t({message:"Calendar",id:"icon.title.calendar",comment:"Title for calendar icon"});return Ye`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-calendar-16-part">${He(`<title>${e}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 2.5h-13a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-14 4h15M8 12.666V9.333m1 3.333H7m1-3.333-1 .333M4.5 3.333V.667m7 2.666V.667"></path></svg>`}};customElements.get("w-icon-calendar-16")||customElements.define("w-icon-calendar-16",Pr);const Dr=JSON.parse('{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}'),_r=JSON.parse('{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}'),Wr=JSON.parse('{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}'),xr=JSON.parse('{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}'),$r=JSON.parse('{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}'),Or=q`
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
`,Sr=q`
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
`,jr=q`
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
`,Tr=q`
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
`,Er=/^\d{4}-\d{2}-\d{2}$/;function me(e){if(typeof e!="string")return null;let t=e;Er.test(e)&&(t=`${e}T00:00:00Z`);const a=Date.parse(t);return Number.isNaN(a)?null:new Date(a)}var Cr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,g=(e,t,a,n)=>{for(var r=n>1?void 0:n?Nr(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(n?o(t,a,r):o(r))||r);return n&&r&&Cr(t,a,r),r};const Fr=typeof navigator<"u"?navigator.userAgent:"",Hr=/iP(hone|od|ad)/.test(Fr),Yr=Hr?"text":"date",Ce="calendar",B="input",Ne="toggle",Fe="wrapper",H={en:Se,nb:Ln,sv:kr,da:Sa,fi:ln};class h extends ze(ge){constructor(){super(),this.headerFormat="MMMM yyyy",this.weekdayFormat="EEEEEE",this.dayFormat="PPPP",this.isCalendarOpen=!1,this.internalValue="",this.navigationDate=ea(),this.locale=Se,Le(_r,xr,Wr,Dr,$r);const t=qe();t&&H[t]&&(this.locale=H[t])}static{this.shadowRootOptions={...Ve.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Xe,Tr,Or,Sr,jr]}get selectedDate(){return me(this.value)??null}get month(){return R(this.navigationDate)}get weeks(){const t=this.month,a=this.navigationDate,r=tt({start:R(t),end:Zt(t)},{locale:this.locale}).map(i=>({start:i,end:U(i,{locale:this.locale})})).map(i=>et(i));if(ne(a,t)){const i=Ut(a,{locale:this.locale})-1,o=ye(a,y(a,{locale:this.locale}));r[i][o]=a}return r}#a(t){t.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen}#r(){this.navigationDate=I(this.month,1)}#i(){this.navigationDate=oe(this.month)}async#t(){await this.updateComplete,this.input.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}#e(t){!this.isCalendarOpen||this.wrapper.contains(t.target)||this.calendar.contains(t.target)||this.input.contains(t.target)||this.toggleButton.contains(t.target)||(this.isCalendarOpen=!1)}#o(t){this.internalValue=t.target.value}#s(t){this.value=t.target.value,this.#t()}#d(t){if(t.key===" ")return this.#a(t);(t.key===","||t.key==="Enter")&&t.preventDefault()}async#u(t){const a=this.navigationDate;let n;switch(t.key){case"ArrowUp":n=ie(a,7);break;case"ArrowLeft":n=ie(a,1);break;case"Home":n=y(a,{locale:this.locale});break;case"PageUp":n=oe(a);break;case"ArrowDown":n=z(a,7);break;case"ArrowRight":n=z(a,1);break;case"End":n=U(a,{locale:this.locale});break;case"PageDown":n=I(a,1);break;case"Escape":this.isCalendarOpen=!1;break}n&&(t.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#n(t){const a=t.currentTarget.dataset.date;"key"in t?(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.internalValue=this.value=a,this.isCalendarOpen=!1,this.toggleButton.focus(),this.#t()):(this.internalValue=this.value=a,this.isCalendarOpen=!1,this.#t())}connectedCallback(){super.connectedCallback();const t=this.lang;if(t&&H[t]&&(this.locale=H[t]),this.internalValue=this.value,this.value){const a=me(this.value);a&&(this.navigationDate=a)}document.addEventListener("mousedown",this.#e),document.addEventListener("touchend",this.#e),document.addEventListener("focusin",this.#e)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.#e),document.removeEventListener("touchend",this.#e),document.removeEventListener("focusin",this.#e)}render(){return M`
      <div class="w-datepicker-wrapper" id="${Fe}">
        <label class="w-datepicker-input-label" for="${B}">${this.label}</label>
        <div class="w-datepicker-input-wrapper">
          <input
            id="${B}"
            type="${Yr}"
            name="${Q(this.name)}"
            value="${Q(this.value)}"
            class="w-datepicker-input"
            @input="${this.#o}"
            @blur="${this.#s}"
            @keydown="${this.#d}" />
          <w-button
            id="${Ne}"
            class="w-datepicker-button"
            aria-label="${this.value?P.t({id:"datepicker.toggle.changeDate",values:{currentDate:N(this.value,this.dayFormat)},message:"Change date, {currentDate}",comment:"Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date"}):P.t({id:"datepicker.toggle.chooseDate",message:"Choose date",comment:"Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date"})}"
            variant="utility"
            quiet
            type="button"
            @click="${this.#a}">
            <w-icon-calendar-16></w-icon-calendar-16>
          </w-button>
        </div>
      </div>
      ${this.isCalendarOpen?M`
            <div class="w-dropdown__popover w-dropdown__popover--open">
              <div
                aria-roledescription="${P.t({id:"datepicker.calendar.roleDescription",message:"Date picker",comment:"Used by screen readers to announce that the calendar element is a date picker."})}"
                class="w-datepicker__calendar"
                id="${Ce}"
                @keydown="${this.#u}">
                <div class="w-datepicker__month-nav">
                  <w-button
                    aria-label="${P.t({id:"datepicker.calendar.previousMonth",message:"Previous month",comment:"Screen reader label for the previous month button."})}"
                    class="w-datepicker__month__nav__button"
                    variant="utility"
                    quiet
                    small
                    @click="${this.#i}">
                    <w-icon-chevron-left-16></w-icon-chevron-left-16>
                  </w-button>
                  <div class="w-datepicker__month__nav__header">${N(this.month,this.headerFormat,{locale:this.locale})}</div>
                  <w-button
                    aria-label="${P.t({id:"datepicker.calendar.nextMonth",message:"Next month",comment:"Screen reader label for the next month button."})}"
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
                        ${this.weeks[0].map(t=>M`<th class="w-datepicker__weekday">${N(t,this.weekdayFormat,{locale:this.locale})}</th> `)}
                      </tr>
                    </thead>
                    <tbody>
                      ${this.weeks.map(t=>M`<tr>
                            ${t.map(a=>{if(!ne(this.month,a))return M`<td></td>`;const n=this.isDayDisabled?this.isDayDisabled(a):!1,r=be(a,this.selectedDate),i=a===this.navigationDate;return M`<td
                                aria-current="${Q(re(a)?"date":void 0)}"
                                aria-disabled="${n}"
                                aria-label="${N(a,this.dayFormat,{locale:this.locale})}"
                                aria-selected="${r}"
                                class="${Ke({"w-datepicker__day":!0,"w-datepicker__day--today":re(a),"w-datepicker__day--selected":r,"w-datepicker__day--disabled":n,"w-datepicker__day--navigation":i})}"
                                data-navigation="${i}"
                                data-date="${Jt(a,{})}"
                                role="gridcell"
                                tabindex="${i?0:-1}"
                                @click="${n?void 0:this.#n}"
                                @keydown="${n?void 0:this.#n}">
                                <div>${Oe(a)}</div>
                              </td>`})}
                          </tr>`)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          `:Qe}
    `}}g([_({reflect:!0})],h.prototype,"label",2);g([_({reflect:!0})],h.prototype,"lang",2);g([_({reflect:!0})],h.prototype,"name",2);g([_({reflect:!0})],h.prototype,"value",2);g([_({attribute:"header-format"})],h.prototype,"headerFormat",2);g([_({attribute:"weekday-format"})],h.prototype,"weekdayFormat",2);g([_({attribute:"day-format"})],h.prototype,"dayFormat",2);g([W()],h.prototype,"isCalendarOpen",2);g([W()],h.prototype,"internalValue",2);g([W()],h.prototype,"navigationDate",2);g([W()],h.prototype,"locale",2);g([W()],h.prototype,"selectedDate",1);g([W()],h.prototype,"month",1);g([W()],h.prototype,"weeks",1);g([E(`#${Ce}`)],h.prototype,"calendar",2);g([E(`#${B}`,!0)],h.prototype,"input",2);g([E(`#${Ne}`,!0)],h.prototype,"toggleButton",2);g([E(`#${Fe}`,!0)],h.prototype,"wrapper",2);g([E('[data-navigation="true"]')],h.prototype,"selectedCell",2);customElements.get("w-datepicker")||customElements.define("w-datepicker",h);var he=Object.freeze,zr=Object.defineProperty,Lr=(e,t)=>he(zr(e,"raw",{value:he(e.slice())})),fe;const{events:qr,args:Vr,argTypes:Xr}=Ie("w-datepicker"),Qr={title:"Forms/Datepicker",render(e){return M`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker ${pe(ke(e))}></w-datepicker>
      </div>
    `},args:Vr,argTypes:Xr,parameters:{actions:{handles:qr}}},S={args:{label:"Dato",lang:"nb"}},j={args:{label:"Dato",lang:"nb"},render(e){return M(fe||(fe=Lr([`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker `,`></w-datepicker>
      </div>
      <script type="module">
        const datePicker = document.querySelector('w-datepicker');
        // No working on Sundays!
        datePicker.isDayDisabled = (day) => day.getDay() === 0;
      <\/script>
    `])),pe(ke(e)))}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    lang: 'nb'
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const Kr=["Default","DisableCalendarDates"],Ar=Object.freeze(Object.defineProperty({__proto__:null,Default:S,DisableCalendarDates:j,__namedExportsOrder:Kr,default:Qr},Symbol.toStringTag,{value:"Module"}));export{Ar as D,S as a};
