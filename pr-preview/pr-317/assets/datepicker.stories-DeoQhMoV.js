import{i as I,a as ee,b as he,t as fe,c as C,F as me,W as pe,r as we,k as b,f as N,R as ge,D as ye,n as _,j as D,l as W,g as be}from"./iframe-C9_53N2h.js";import{s as ve,p as ke}from"./utilities-DkC-EgO8.js";const te=6048e5,_e=864e5,B=Symbol.for("constructDateFrom");function w(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&B in t?t[B](e):t instanceof Date?new t.constructor(e):new Date(e)}function u(t,e){return w(e||t,t)}function T(t,e,n){const a=u(t,n?.in);return isNaN(e)?w(t,NaN):(e&&a.setDate(a.getDate()+e),a)}function L(t,e,n){const a=u(t,n?.in);if(isNaN(e))return w(t,NaN);if(!e)return a;const r=a.getDate(),o=w(t,a.getTime());o.setMonth(a.getMonth()+e+1,0);const i=o.getDate();return r>=i?o:(a.setFullYear(o.getFullYear(),o.getMonth(),r),a)}let De={};function O(){return De}function g(t,e){const n=O(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=u(t,e?.in),o=r.getDay(),i=(o<a?7:0)+o-a;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function E(t,e){return g(t,{...e,weekStartsOn:1})}function ne(t,e){const n=u(t,e?.in),a=n.getFullYear(),r=w(n,0);r.setFullYear(a+1,0,4),r.setHours(0,0,0,0);const o=E(r),i=w(n,0);i.setFullYear(a,0,4),i.setHours(0,0,0,0);const c=E(i);return n.getTime()>=o.getTime()?a+1:n.getTime()>=c.getTime()?a:a-1}function j(t){const e=u(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Y(t,...e){const n=w.bind(null,t||e.find(a=>typeof a=="object"));return e.map(n)}function S(t,e){const n=u(t,e?.in);return n.setHours(0,0,0,0),n}function ae(t,e,n){const[a,r]=Y(n?.in,t,e),o=S(a),i=S(r),c=+o-j(o),d=+i-j(i);return Math.round((c-d)/_e)}function Oe(t,e){const n=ne(t,e),a=w(t,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),E(a)}function xe(t,e,n){return T(t,e*7,n)}function Me(t){return w(t,Date.now())}function re(t,e,n){const[a,r]=Y(n?.in,t,e);return+S(a)==+S(r)}function Pe(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Se(t){return!(!Pe(t)&&typeof t!="number"||isNaN(+u(t)))}function oe(t,e){const[n,a]=Y(t,e.start,e.end);return{start:n,end:a}}function We(t,e){const{start:n,end:a}=oe(e?.in,t);let r=+n>+a;const o=r?+n:+a,i=r?a:n;i.setHours(0,0,0,0);let c=1;const d=[];for(;+i<=o;)d.push(w(n,i)),i.setDate(i.getDate()+c),i.setHours(0,0,0,0);return r?d.reverse():d}function Te(t,e){const{start:n,end:a}=oe(e?.in,t);let r=+n>+a;const o=g(r?a:n,e),i=g(r?n:a,e);o.setHours(15),i.setHours(15);const c=+i.getTime();let d=o,p=e?.step??1;if(!p)return[];p<0&&(p=-p,r=!r);const l=[];for(;+d<=c;)d.setHours(0),l.push(w(n,d)),d=xe(d,p),d.setHours(15);return r?l.reverse():l}function z(t,e){const n=u(t,e?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function Ee(t,e){const n=u(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function R(t,e){const n=O(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=u(t,e?.in),o=r.getDay(),i=(o<a?-7:0)+6-(o-a);return r.setDate(r.getDate()+i),r.setHours(23,59,59,999),r}const Ce={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ye=(t,e,n)=>{let a;const r=Ce[t];return typeof r=="string"?a=r:e===1?a=r.one:a=r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function $(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Fe={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ne={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},$e={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},qe={date:$({formats:Fe,defaultWidth:"full"}),time:$({formats:Ne,defaultWidth:"full"}),dateTime:$({formats:$e,defaultWidth:"full"})},He={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ie=(t,e,n,a)=>He[t];function x(t){return(e,n)=>{const a=n?.context?String(n.context):"standalone";let r;if(a==="formatting"&&t.formattingValues){const i=t.defaultFormattingWidth||t.defaultWidth,c=n?.width?String(n.width):i;r=t.formattingValues[c]||t.formattingValues[i]}else{const i=t.defaultWidth,c=n?.width?String(n.width):t.defaultWidth;r=t.values[c]||t.values[i]}const o=t.argumentCallback?t.argumentCallback(e):e;return r[o]}}const Le={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ze={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Be={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},je={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Re={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ae={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Qe=(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Ve={ordinalNumber:Qe,era:x({values:Le,defaultWidth:"wide"}),quarter:x({values:ze,defaultWidth:"wide",argumentCallback:t=>t-1}),month:x({values:Be,defaultWidth:"wide"}),day:x({values:je,defaultWidth:"wide"}),dayPeriod:x({values:Re,defaultWidth:"wide",formattingValues:Ae,defaultFormattingWidth:"wide"})};function M(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],c=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(c)?Ge(c,h=>h.test(i)):Xe(c,h=>h.test(i));let p;p=t.valueCallback?t.valueCallback(d):d,p=n.valueCallback?n.valueCallback(p):p;const l=e.slice(i.length);return{value:p,rest:l}}}function Xe(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Ge(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Je(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const r=a[0],o=e.match(t.parsePattern);if(!o)return null;let i=t.valueCallback?t.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;const c=e.slice(r.length);return{value:i,rest:c}}}const Ke=/^(\d+)(th|st|nd|rd)?/i,Ue=/\d+/i,Ze={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},et={any:[/^b/i,/^(a|c)/i]},tt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},nt={any:[/1/i,/2/i,/3/i,/4/i]},at={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},rt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ot={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},it={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},st={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ct={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},dt={ordinalNumber:Je({matchPattern:Ke,parsePattern:Ue,valueCallback:t=>parseInt(t,10)}),era:M({matchPatterns:Ze,defaultMatchWidth:"wide",parsePatterns:et,defaultParseWidth:"any"}),quarter:M({matchPatterns:tt,defaultMatchWidth:"wide",parsePatterns:nt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:M({matchPatterns:at,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any"}),day:M({matchPatterns:ot,defaultMatchWidth:"wide",parsePatterns:it,defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:st,defaultMatchWidth:"any",parsePatterns:ct,defaultParseWidth:"any"})},ut={code:"en-US",formatDistance:Ye,formatLong:qe,formatRelative:Ie,localize:Ve,match:dt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function lt(t,e){const n=u(t,e?.in);return ae(n,Ee(n))+1}function ht(t,e){const n=u(t,e?.in),a=+E(n)-+Oe(n);return Math.round(a/te)+1}function ie(t,e){const n=u(t,e?.in),a=n.getFullYear(),r=O(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=w(e?.in||t,0);i.setFullYear(a+1,0,o),i.setHours(0,0,0,0);const c=g(i,e),d=w(e?.in||t,0);d.setFullYear(a,0,o),d.setHours(0,0,0,0);const p=g(d,e);return+n>=+c?a+1:+n>=+p?a:a-1}function ft(t,e){const n=O(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=ie(t,e),o=w(e?.in||t,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),g(o,e)}function mt(t,e){const n=u(t,e?.in),a=+g(n,e)-+ft(n,e);return Math.round(a/te)+1}function s(t,e){const n=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return n+a}const y={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return s(e==="yy"?a%100:a,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):s(n+1,2)},d(t,e){return s(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return s(t.getHours()%12||12,e.length)},H(t,e){return s(t.getHours(),e.length)},m(t,e){return s(t.getMinutes(),e.length)},s(t,e){return s(t.getSeconds(),e.length)},S(t,e){const n=e.length,a=t.getMilliseconds(),r=Math.trunc(a*Math.pow(10,n-3));return s(r,e.length)}},k={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},A={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const a=t.getFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return y.y(t,e)},Y:function(t,e,n,a){const r=ie(t,a),o=r>0?r:1-r;if(e==="YY"){const i=o%100;return s(i,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):s(o,e.length)},R:function(t,e){const n=ne(t);return s(n,e.length)},u:function(t,e){const n=t.getFullYear();return s(n,e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return s(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return s(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return y.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return s(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=mt(t,a);return e==="wo"?n.ordinalNumber(r,{unit:"week"}):s(r,e.length)},I:function(t,e,n){const a=ht(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):s(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):y.d(t,e)},D:function(t,e,n){const a=lt(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):s(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return s(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return s(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=a===0?7:a;switch(e){case"i":return String(r);case"ii":return s(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(a===12?r=k.noon:a===0?r=k.midnight:r=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(a>=17?r=k.evening:a>=12?r=k.afternoon:a>=4?r=k.morning:r=k.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let a=t.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return y.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):y.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):s(a,e.length)},k:function(t,e,n){let a=t.getHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):s(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):y.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):y.s(t,e)},S:function(t,e){return y.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return V(a);case"XXXX":case"XX":return v(a);case"XXXXX":case"XXX":default:return v(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return V(a);case"xxxx":case"xx":return v(a);case"xxxxx":case"xxx":default:return v(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(a,":");case"OOOO":default:return"GMT"+v(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(a,":");case"zzzz":default:return"GMT"+v(a,":")}},t:function(t,e,n){const a=Math.trunc(+t/1e3);return s(a,e.length)},T:function(t,e,n){return s(+t,e.length)}};function Q(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),o=a%60;return o===0?n+String(r):n+String(r)+e+s(o,2)}function V(t,e){return t%60===0?(t>0?"-":"+")+s(Math.abs(t)/60,2):v(t,e)}function v(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=s(Math.trunc(a/60),2),o=s(a%60,2);return n+r+e+o}const X=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},se=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},pt=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return X(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",X(a,e)).replace("{{time}}",se(r,e))},wt={p:se,P:pt},gt=/^D+$/,yt=/^Y+$/,bt=["D","DD","YY","YYYY"];function vt(t){return gt.test(t)}function kt(t){return yt.test(t)}function _t(t,e,n){const a=Dt(t,e,n);if(console.warn(a),bt.includes(t))throw new RangeError(a)}function Dt(t,e,n){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,xt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Mt=/^'([^]*?)'?$/,Pt=/''/g,St=/[a-zA-Z]/;function q(t,e,n){const a=O(),r=n?.locale??a.locale??ut,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,c=u(t,n?.in);if(!Se(c))throw new RangeError("Invalid time value");let d=e.match(xt).map(l=>{const h=l[0];if(h==="p"||h==="P"){const F=wt[h];return F(l,r.formatLong)}return l}).join("").match(Ot).map(l=>{if(l==="''")return{isToken:!1,value:"'"};const h=l[0];if(h==="'")return{isToken:!1,value:Wt(l)};if(A[h])return{isToken:!0,value:l};if(h.match(St))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:l}});r.localize.preprocessor&&(d=r.localize.preprocessor(c,d));const p={firstWeekContainsDate:o,weekStartsOn:i,locale:r};return d.map(l=>{if(!l.isToken)return l.value;const h=l.value;(!n?.useAdditionalWeekYearTokens&&kt(h)||!n?.useAdditionalDayOfYearTokens&&vt(h))&&_t(h,e,String(t));const F=A[h[0]];return F(c,h,r.localize,p)}).join("")}function Wt(t){const e=t.match(Mt);return e?e[1].replace(Pt,"'"):t}function Tt(t,e){const n=u(t,e?.in);if(isNaN(+n))throw new RangeError("Invalid time value");const a=e?.format??"extended";let r="";const o=a==="extended"?"-":"";{const i=s(n.getDate(),2),c=s(n.getMonth()+1,2);r=`${s(n.getFullYear(),4)}${o}${c}${o}${i}`}return r}function ce(t,e){return u(t,e?.in).getDate()}function Et(t,e){return u(t,e?.in).getDay()}function Ct(t,e){const n=O(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=ce(u(t,e?.in));if(isNaN(r))return NaN;const o=Et(z(t,e));let i=a-o;i<=0&&(i+=7);const c=r-i;return Math.ceil(c/7)+1}function Yt(t,e){const n=u(t,e?.in),a=n.getMonth();return n.setFullYear(n.getFullYear(),a+1,0),n.setHours(0,0,0,0),u(n,e?.in)}function G(t,e,n){const[a,r]=Y(n?.in,t,e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function J(t,e){return re(w(t,t),Me(t))}function K(t,e,n){return T(t,-e,n)}function Ft(t){return S(Date.now(),t)}function U(t,e,n){return L(t,-e,n)}var Nt={},$t=JSON.parse('{"icon.title.calendar":["Kalender"]}'),qt=JSON.parse('{"icon.title.calendar":["Calendar"]}'),Ht=JSON.parse('{"icon.title.calendar":["Kalenteri"]}'),It=JSON.parse('{"icon.title.calendar":["Kalender"]}'),Lt=JSON.parse('{"icon.title.calendar":["Kalender"]}'),de=["en","nb","fi","da","sv"],ue="en",zt=()=>{var t;let e;switch((t=process==null?void 0:Nt)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},le=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ue},H=t=>de.find(e=>t===e||t.toLowerCase().includes(e))||le();function Bt(){var t;if(typeof window>"u"){const e=zt();return H(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,n=le();return de.includes(e)?H(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),H(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ue}}var jt=(t,e,n,a,r,o)=>t==="nb"?n:t==="fi"?a:t==="da"?r:t==="sv"?o:e,Rt=(t,e,n,a,r)=>{const o=Bt(),i=jt(o,t,e,n,a,r);I.load(o,i),I.activate(o)};Rt(qt,$t,Ht,It,Lt);var At=class extends ee{render(){const t=I.t({message:"Calendar",id:"icon.title.calendar",comment:"Title for calendar icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-calendar-16-part">${fe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 2.5h-13a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-14 4h15M8 12.666V9.333m1 3.333H7m1-3.333-1 .333M4.5 3.333V.667m7 2.666V.667"></path></svg>`}};customElements.get("w-icon-calendar-16")||customElements.define("w-icon-calendar-16",At);const Qt=C`
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
`,Vt=C`
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
`,Xt=C`
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
`,Gt=C`
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
`,Jt=/^\d{4}-\d{2}-\d{2}$/;function Z(t){if(typeof t!="string")return null;let e=t;Jt.test(t)&&(e=`${t}T00:00:00Z`);const n=Date.parse(e);return Number.isNaN(n)?null:new Date(n)}var Kt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,m=(t,e,n,a)=>{for(var r=a>1?void 0:a?Ut(e,n):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(r=(a?i(e,n,r):i(r))||r);return a&&r&&Kt(e,n,r),r};const Zt=typeof navigator<"u"?navigator.userAgent:"",en=/iP(hone|od|ad)/.test(Zt),tn=en?"text":"date";class f extends me(ee){constructor(){super(...arguments),this.headerFormat="MMMM yyyy",this.weekdayFormat="EEEEEE",this.dayFormat="PPPP",this.isCalendarOpen=!1,this.internalValue="",this.navigationDate=Ft(),this.#r="calendar",this.#n="input",this.#o="toggle",this.#i="wrapper"}static{this.shadowRootOptions={...pe.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[we,Gt,Qt,Vt,Xt]}get selectedDate(){return Z(this.value)??null}get month(){return z(this.navigationDate)}get weeks(){const e=this.month,n=this.navigationDate,r=Te({start:z(e),end:Yt(e)},{locale:this.#e}).map(o=>({start:o,end:R(o,{locale:this.#e})})).map(o=>We(o));if(G(n,e)){const o=Ct(n,{locale:this.#e})-1,i=ae(n,g(n,{locale:this.#e}));r[o][i]=n}return r}#r;#n;#o;#i;#e;#s(e){e.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen}#d(){this.navigationDate=L(this.month,1)}#u(){this.navigationDate=U(this.month,1)}async#a(){await this.updateComplete,this.input.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}#t(e){!this.isCalendarOpen||this.wrapper.contains(e.target)||this.calendar.contains(e.target)||this.input.contains(e.target)||this.toggle.contains(e.target)||(this.isCalendarOpen=!1)}#l(e){this.internalValue=e.target.value}#h(e){this.value=e.target.value,this.#a()}#f(e){if(e.key===" ")return this.#s(e);(e.key===","||e.key==="Enter")&&e.preventDefault()}async#m(e){const n=this.navigationDate;let a;switch(e.key){case"ArrowUp":a=K(n,7);break;case"ArrowLeft":a=K(n,1);break;case"Home":a=g(n,{locale:this.#e});break;case"PageUp":a=U(n,1);break;case"ArrowDown":a=T(n,7);break;case"ArrowRight":a=T(n,1);break;case"End":a=R(n,{locale:this.#e});break;case"PageDown":a=L(n,1);break;case"Escape":this.isCalendarOpen=!1;break}a&&(e.preventDefault(),this.navigationDate=a,await this.updateComplete,this.selectedCell.focus())}#c(e){const n=e.target.parentElement.dataset.date||e.target.dataset.date;"key"in e?(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.internalValue=this.value=n,this.isCalendarOpen=!1,this.#a()):(this.internalValue=this.value=n,this.isCalendarOpen=!1,this.#a())}connectedCallback(){if(super.connectedCallback(),this.internalValue=this.value,this.value){const e=Z(this.value);e&&(this.navigationDate=e)}document.addEventListener("mousedown",this.#t),document.addEventListener("touchend",this.#t),document.addEventListener("focusin",this.#t)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.#t),document.removeEventListener("touchend",this.#t),document.removeEventListener("focusin",this.#t)}render(){return b`
      <div class="w-datepicker-wrapper" id="${this.#i}">
        <label class="w-datepicker-input-label" for="${this.#n}">${this.label}</label>
        <div class="w-datepicker-input-wrapper">
          <input
            id="${this.#n}"
            type="${tn}"
            name="${N(this.name)}"
            value="${N(this.value)}"
            class="w-datepicker-input"
            @input="${this.#l}"
            @blur="${this.#h}"
            @keydown="${this.#f}" />
          <w-button
            id="${this.#o}"
            class="w-datepicker-button"
            aria-label="Open calendar"
            variant="utility"
            quiet
            type="button"
            @click="${this.#s}">
            <w-icon-calendar-16></w-icon-calendar-16>
          </w-button>
        </div>
      </div>
      ${this.isCalendarOpen?b`
            <div class="w-dropdown__popover w-dropdown__popover--open">
              <div
                aria-roledescription="TODO"
                class="w-datepicker__calendar"
                id="${this.#r}"
                @keydown="${this.#m}">
                <div class="w-datepicker__month-nav">
                  <w-button
                    aria-label="TODO"
                    class="w-datepicker__month__nav__button"
                    variant="utility"
                    quiet
                    small
                    @click="${this.#u}">
                    <w-icon-chevron-left-16></w-icon-chevron-left-16>
                  </w-button>
                  <div class="w-datepicker__month__nav__header">${q(this.month,this.headerFormat,{locale:this.#e})}</div>
                  <w-button
                    aria-label="TODO"
                    class="w-datepicker__month__nav__button"
                    variant="utility"
                    quiet
                    small
                    @click="${this.#d}">
                    <w-icon-chevron-right-16></w-icon-chevron-right-16>
                  </w-button>
                </div>
                <div class="w-datepicker__month">
                  <table class="w-datepicker__table" role="grid">
                    <thead class="w-datepicker__weekdays">
                      <tr>
                        ${this.weeks[0].map(e=>b`<th class="w-datepicker__weekday">${q(e,this.weekdayFormat,{locale:this.#e})}</th> `)}
                      </tr>
                    </thead>
                    <tbody>
                      ${this.weeks.map(e=>b`<tr>
                            ${e.map(n=>{if(!G(this.month,n))return b`<td />`;const a=!1,r=re(n,this.selectedDate),o=n===this.navigationDate;return b`<td
                                aria-current="${N(J(n)?"date":void 0)}"
                                aria-disabled="${a}"
                                aria-label="${q(n,this.dayFormat,{locale:this.#e})}"
                                aria-selected="${r}"
                                class="${ge({"w-datepicker__day":!0,"w-datepicker__day--today":J(n),"w-datepicker__day--selected":r,"w-datepicker__day--disabled":a,"w-datepicker__day--navigation":o})}"
                                data-navigation="${o}"
                                data-date="${Tt(n,{representation:"date"})}"
                                role="gridcell"
                                tabindex="${o?0:-1}"
                                @click="${this.#c}"
                                @keydown="${this.#c}">
                                <div>${ce(n)}</div>
                              </td>`})}
                          </tr>`)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          `:ye}
    `}}m([_({reflect:!0})],f.prototype,"label",2);m([_({reflect:!0})],f.prototype,"name",2);m([_({reflect:!0})],f.prototype,"value",2);m([_({attribute:"header-format"})],f.prototype,"headerFormat",2);m([_({attribute:"weekday-format"})],f.prototype,"weekdayFormat",2);m([_({attribute:"day-format"})],f.prototype,"dayFormat",2);m([D()],f.prototype,"isCalendarOpen",2);m([D()],f.prototype,"internalValue",2);m([D()],f.prototype,"navigationDate",2);m([D()],f.prototype,"selectedDate",1);m([D()],f.prototype,"month",1);m([D()],f.prototype,"weeks",1);m([W("#calendar")],f.prototype,"calendar",2);m([W("#input",!0)],f.prototype,"input",2);m([W("#toggle",!0)],f.prototype,"toggle",2);m([W("#wrapper",!0)],f.prototype,"wrapper",2);m([W('[data-navigation="true"]')],f.prototype,"selectedCell",2);customElements.get("w-datepicker")||customElements.define("w-datepicker",f);const{events:nn,args:an,argTypes:rn}=be("w-datepicker"),on={title:"Forms/Datepicker",render(t){return b`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker ${ve(ke(t))}></w-datepicker>
      </div>
    `},args:an,argTypes:rn,parameters:{actions:{handles:nn}}},P={args:{label:"Dato"}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dato'
  }
}`,...P.parameters?.docs?.source}}};const sn=["Default"],un=Object.freeze(Object.defineProperty({__proto__:null,Default:P,__namedExportsOrder:sn,default:on},Symbol.toStringTag,{value:"Module"}));export{un as D,P as a};
