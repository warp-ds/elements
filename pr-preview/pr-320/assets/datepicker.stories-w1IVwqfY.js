import{e as Ye,a as ze,t as Le,b as qe,c as M,i as ke,s as Xe,u as Ve,j as X,F as Ke,k as Qe,l as Ie,W as Ae,r as Re,o as Q,x as D,m as Be,n as _,p as x,q as $,g as Je}from"./iframe-D3WLcaeG.js";import{s as ve,p as we}from"./utilities-BIbEpbpB.js";const ye=6048e5,Ge=864e5,U=Symbol.for("constructDateFrom");function w(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&U in e?e[U](t):e instanceof Date?new e.constructor(t):new Date(t)}function m(e,t){return w(t||e,e)}function L(e,t,a){const n=m(e,a?.in);return isNaN(t)?w(e,NaN):(t&&n.setDate(n.getDate()+t),n)}function A(e,t,a){const n=m(e,a?.in);if(isNaN(t))return w(e,NaN);if(!t)return n;const r=n.getDate(),i=w(e,n.getTime());i.setMonth(n.getMonth()+t+1,0);const o=i.getDate();return r>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),r),n)}let Ue={};function O(){return Ue}function y(e,t){const a=O(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=m(e,t?.in),i=r.getDay(),o=(i<n?7:0)+i-n;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function q(e,t){return y(e,{...t,weekStartsOn:1})}function be(e,t){const a=m(e,t?.in),n=a.getFullYear(),r=w(a,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=q(r),o=w(a,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const d=q(o);return a.getTime()>=i.getTime()?n+1:a.getTime()>=d.getTime()?n:n-1}function Z(e){const t=m(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return a.setUTCFullYear(t.getFullYear()),+e-+a}function V(e,...t){const a=w.bind(null,e||t.find(n=>typeof n=="object"));return t.map(a)}function C(e,t){const a=m(e,t?.in);return a.setHours(0,0,0,0),a}function Me(e,t,a){const[n,r]=V(a?.in,e,t),i=C(n),o=C(r),d=+i-Z(i),l=+o-Z(o);return Math.round((d-l)/Ge)}function Ze(e,t){const a=be(e,t),n=w(e,0);return n.setFullYear(a,0,4),n.setHours(0,0,0,0),q(n)}function et(e,t,a){return L(e,t*7,a)}function tt(e){return w(e,Date.now())}function Pe(e,t,a){const[n,r]=V(a?.in,e,t);return+C(n)==+C(r)}function at(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function nt(e){return!(!at(e)&&typeof e!="number"||isNaN(+m(e)))}function De(e,t){const[a,n]=V(e,t.start,t.end);return{start:a,end:n}}function rt(e,t){const{start:a,end:n}=De(t?.in,e);let r=+a>+n;const i=r?+a:+n,o=r?n:a;o.setHours(0,0,0,0);let d=1;const l=[];for(;+o<=i;)l.push(w(a,o)),o.setDate(o.getDate()+d),o.setHours(0,0,0,0);return r?l.reverse():l}function it(e,t){const{start:a,end:n}=De(t?.in,e);let r=+a>+n;const i=y(r?n:a,t),o=y(r?a:n,t);i.setHours(15),o.setHours(15);const d=+o.getTime();let l=i,v=t?.step??1;if(!v)return[];v<0&&(v=-v,r=!r);const p=[];for(;+l<=d;)l.setHours(0),p.push(w(a,l)),l=et(l,v),l.setHours(15);return r?p.reverse():p}function R(e,t){const a=m(e,t?.in);return a.setDate(1),a.setHours(0,0,0,0),a}function ot(e,t){const a=m(e,t?.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}function ee(e,t){const a=O(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=m(e,t?.in),i=r.getDay(),o=(i<n?-7:0)+6-(i-n);return r.setDate(r.getDate()+o),r.setHours(23,59,59,999),r}const st={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},_e=(e,t,a)=>{let n;const r=st[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",t.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};function k(e){return(t={})=>{const a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}const dt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ut={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ct={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},lt={date:k({formats:dt,defaultWidth:"full"}),time:k({formats:ut,defaultWidth:"full"}),dateTime:k({formats:ct,defaultWidth:"full"})},mt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},$e=(e,t,a,n)=>mt[e];function u(e){return(t,a)=>{const n=a?.context?String(a.context):"standalone";let r;if(n==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,d=a?.width?String(a.width):o;r=e.formattingValues[d]||e.formattingValues[o]}else{const o=e.defaultWidth,d=a?.width?String(a.width):e.defaultWidth;r=e.values[d]||e.values[o]}const i=e.argumentCallback?e.argumentCallback(t):t;return r[i]}}const ht={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ft={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},pt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},gt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},kt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},vt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},wt=(e,t)=>{const a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},We={ordinalNumber:wt,era:u({values:ht,defaultWidth:"wide"}),quarter:u({values:ft,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:pt,defaultWidth:"wide"}),day:u({values:gt,defaultWidth:"wide"}),dayPeriod:u({values:kt,defaultWidth:"wide",formattingValues:vt,defaultFormattingWidth:"wide"})};function c(e){return(t,a={})=>{const n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;const o=i[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?bt(d,g=>g.test(o)):yt(d,g=>g.test(o));let v;v=e.valueCallback?e.valueCallback(l):l,v=a.valueCallback?a.valueCallback(v):v;const p=t.slice(o.length);return{value:v,rest:p}}}function yt(e,t){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&t(e[a]))return a}function bt(e,t){for(let a=0;a<e.length;a++)if(t(e[a]))return a}function E(e){return(t,a={})=>{const n=t.match(e.matchPattern);if(!n)return null;const r=n[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;const d=t.slice(r.length);return{value:o,rest:d}}}const Mt=/^(\d+)(th|st|nd|rd)?/i,Pt=/\d+/i,Dt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},_t={any:[/^b/i,/^(a|c)/i]},$t={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Wt={any:[/1/i,/2/i,/3/i,/4/i]},xt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ot={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},St={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Tt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},jt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ct={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},xe={ordinalNumber:E({matchPattern:Mt,parsePattern:Pt,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:Dt,defaultMatchWidth:"wide",parsePatterns:_t,defaultParseWidth:"any"}),quarter:c({matchPatterns:$t,defaultMatchWidth:"wide",parsePatterns:Wt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:xt,defaultMatchWidth:"wide",parsePatterns:Ot,defaultParseWidth:"any"}),day:c({matchPatterns:St,defaultMatchWidth:"wide",parsePatterns:Tt,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:jt,defaultMatchWidth:"any",parsePatterns:Ct,defaultParseWidth:"any"})},Et={code:"en-US",formatDistance:_e,formatLong:lt,formatRelative:$e,localize:We,match:xe,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Nt(e,t){const a=m(e,t?.in);return Me(a,ot(a))+1}function Ft(e,t){const a=m(e,t?.in),n=+q(a)-+Ze(a);return Math.round(n/ye)+1}function Oe(e,t){const a=m(e,t?.in),n=a.getFullYear(),r=O(),i=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=w(t?.in||e,0);o.setFullYear(n+1,0,i),o.setHours(0,0,0,0);const d=y(o,t),l=w(t?.in||e,0);l.setFullYear(n,0,i),l.setHours(0,0,0,0);const v=y(l,t);return+a>=+d?n+1:+a>=+v?n:n-1}function Ht(e,t){const a=O(),n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,r=Oe(e,t),i=w(t?.in||e,0);return i.setFullYear(r,0,n),i.setHours(0,0,0,0),y(i,t)}function Yt(e,t){const a=m(e,t?.in),n=+y(a,t)-+Ht(a,t);return Math.round(n/ye)+1}function s(e,t){const a=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return a+n}const b={y(e,t){const a=e.getFullYear(),n=a>0?a:1-a;return s(t==="yy"?n%100:n,t.length)},M(e,t){const a=e.getMonth();return t==="M"?String(a+1):s(a+1,2)},d(e,t){return s(e.getDate(),t.length)},a(e,t){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h(e,t){return s(e.getHours()%12||12,t.length)},H(e,t){return s(e.getHours(),t.length)},m(e,t){return s(e.getMinutes(),t.length)},s(e,t){return s(e.getSeconds(),t.length)},S(e,t){const a=t.length,n=e.getMilliseconds(),r=Math.trunc(n*Math.pow(10,a-3));return s(r,t.length)}},W={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},te={G:function(e,t,a){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(e,t,a){if(t==="yo"){const n=e.getFullYear(),r=n>0?n:1-n;return a.ordinalNumber(r,{unit:"year"})}return b.y(e,t)},Y:function(e,t,a,n){const r=Oe(e,n),i=r>0?r:1-r;if(t==="YY"){const o=i%100;return s(o,2)}return t==="Yo"?a.ordinalNumber(i,{unit:"year"}):s(i,t.length)},R:function(e,t){const a=be(e);return s(a,t.length)},u:function(e,t){const a=e.getFullYear();return s(a,t.length)},Q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return s(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return s(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,a){const n=e.getMonth();switch(t){case"M":case"MM":return b.M(e,t);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,a){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return s(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,a,n){const r=Yt(e,n);return t==="wo"?a.ordinalNumber(r,{unit:"week"}):s(r,t.length)},I:function(e,t,a){const n=Ft(e);return t==="Io"?a.ordinalNumber(n,{unit:"week"}):s(n,t.length)},d:function(e,t,a){return t==="do"?a.ordinalNumber(e.getDate(),{unit:"date"}):b.d(e,t)},D:function(e,t,a){const n=Nt(e);return t==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):s(n,t.length)},E:function(e,t,a){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,a,n){const r=e.getDay(),i=(r-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return s(i,2);case"eo":return a.ordinalNumber(i,{unit:"day"});case"eee":return a.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,a,n){const r=e.getDay(),i=(r-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return s(i,t.length);case"co":return a.ordinalNumber(i,{unit:"day"});case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,a){const n=e.getDay(),r=n===0?7:n;switch(t){case"i":return String(r);case"ii":return s(r,t.length);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,a){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,a){const n=e.getHours();let r;switch(n===12?r=W.noon:n===0?r=W.midnight:r=n/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,a){const n=e.getHours();let r;switch(n>=17?r=W.evening:n>=12?r=W.afternoon:n>=4?r=W.morning:r=W.night,t){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,a){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return b.h(e,t)},H:function(e,t,a){return t==="Ho"?a.ordinalNumber(e.getHours(),{unit:"hour"}):b.H(e,t)},K:function(e,t,a){const n=e.getHours()%12;return t==="Ko"?a.ordinalNumber(n,{unit:"hour"}):s(n,t.length)},k:function(e,t,a){let n=e.getHours();return n===0&&(n=24),t==="ko"?a.ordinalNumber(n,{unit:"hour"}):s(n,t.length)},m:function(e,t,a){return t==="mo"?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):b.m(e,t)},s:function(e,t,a){return t==="so"?a.ordinalNumber(e.getSeconds(),{unit:"second"}):b.s(e,t)},S:function(e,t){return b.S(e,t)},X:function(e,t,a){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return ne(n);case"XXXX":case"XX":return P(n);case"XXXXX":case"XXX":default:return P(n,":")}},x:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"x":return ne(n);case"xxxx":case"xx":return P(n);case"xxxxx":case"xxx":default:return P(n,":")}},O:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ae(n,":");case"OOOO":default:return"GMT"+P(n,":")}},z:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ae(n,":");case"zzzz":default:return"GMT"+P(n,":")}},t:function(e,t,a){const n=Math.trunc(+e/1e3);return s(n,t.length)},T:function(e,t,a){return s(+e,t.length)}};function ae(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=Math.trunc(n/60),i=n%60;return i===0?a+String(r):a+String(r)+t+s(i,2)}function ne(e,t){return e%60===0?(e>0?"-":"+")+s(Math.abs(e)/60,2):P(e,t)}function P(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=s(Math.trunc(n/60),2),i=s(n%60,2);return a+r+t+i}const re=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Se=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},zt=(e,t)=>{const a=e.match(/(P+)(p+)?/)||[],n=a[1],r=a[2];if(!r)return re(e,t);let i;switch(n){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",re(n,t)).replace("{{time}}",Se(r,t))},Lt={p:Se,P:zt},qt=/^D+$/,Xt=/^Y+$/,Vt=["D","DD","YY","YYYY"];function Kt(e){return qt.test(e)}function Qt(e){return Xt.test(e)}function It(e,t,a){const n=At(e,t,a);if(console.warn(n),Vt.includes(e))throw new RangeError(n)}function At(e,t,a){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Bt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Jt=/^'([^]*?)'?$/,Gt=/''/g,Ut=/[a-zA-Z]/;function N(e,t,a){const n=O(),r=a?.locale??n.locale??Et,i=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,d=m(e,a?.in);if(!nt(d))throw new RangeError("Invalid time value");let l=t.match(Bt).map(p=>{const g=p[0];if(g==="p"||g==="P"){const K=Lt[g];return K(p,r.formatLong)}return p}).join("").match(Rt).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const g=p[0];if(g==="'")return{isToken:!1,value:Zt(p)};if(te[g])return{isToken:!0,value:p};if(g.match(Ut))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:p}});r.localize.preprocessor&&(l=r.localize.preprocessor(d,l));const v={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return l.map(p=>{if(!p.isToken)return p.value;const g=p.value;(!a?.useAdditionalWeekYearTokens&&Qt(g)||!a?.useAdditionalDayOfYearTokens&&Kt(g))&&It(g,t,String(e));const K=te[g[0]];return K(d,g,r.localize,v)}).join("")}function Zt(e){const t=e.match(Jt);return t?t[1].replace(Gt,"'"):e}function ea(e,t){const a=m(e,t?.in);if(isNaN(+a))throw new RangeError("Invalid time value");const n=t?.format??"extended";let r="";const i=n==="extended"?"-":"";{const o=s(a.getDate(),2),d=s(a.getMonth()+1,2);r=`${s(a.getFullYear(),4)}${i}${d}${i}${o}`}return r}function Te(e,t){return m(e,t?.in).getDate()}function ta(e,t){return m(e,t?.in).getDay()}function aa(e,t){const a=O(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,r=Te(m(e,t?.in));if(isNaN(r))return NaN;const i=ta(R(e,t));let o=n-i;o<=0&&(o+=7);const d=r-o;return Math.ceil(d/7)+1}function na(e,t){const a=m(e,t?.in),n=a.getMonth();return a.setFullYear(a.getFullYear(),n+1,0),a.setHours(0,0,0,0),m(a,t?.in)}function ie(e,t,a){const[n,r]=V(a?.in,e,t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function oe(e,t){return Pe(w(e,e),tt(e))}function se(e,t,a){return L(e,-t,a)}function ra(e){return C(Date.now(),e)}function de(e,t,a){return A(e,-1,a)}const ia={lessThanXSeconds:{one:"mindre end ét sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"ét halvt minut",lessThanXMinutes:{one:"mindre end ét minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXWeeks:{one:"cirka 1 uge",other:"cirka {{count}} uger"},xWeeks:{one:"1 uge",other:"{{count}} uger"},aboutXMonths:{one:"cirka 1 måned",other:"cirka {{count}} måneder"},xMonths:{one:"1 måned",other:"{{count}} måneder"},aboutXYears:{one:"cirka 1 år",other:"cirka {{count}} år"},xYears:{one:"1 år",other:"{{count}} år"},overXYears:{one:"over 1 år",other:"over {{count}} år"},almostXYears:{one:"næsten 1 år",other:"næsten {{count}} år"}},oa=(e,t,a)=>{let n;const r=ia[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" siden":n},sa={full:"EEEE 'den' d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd/MM/y"},da={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ua={full:"{{date}} 'kl'. {{time}}",long:"{{date}} 'kl'. {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ca={date:k({formats:sa,defaultWidth:"full"}),time:k({formats:da,defaultWidth:"full"}),dateTime:k({formats:ua,defaultWidth:"full"})},la={lastWeek:"'sidste' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"'på' eeee 'kl.' p",other:"P"},ma=(e,t,a,n)=>la[e],ha={narrow:["fvt","vt"],abbreviated:["f.v.t.","v.t."],wide:["før vesterlandsk tidsregning","vesterlandsk tidsregning"]},fa={narrow:["1","2","3","4"],abbreviated:["1. kvt.","2. kvt.","3. kvt.","4. kvt."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},pa={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},ga={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn.","man.","tir.","ons.","tor.","fre.","lør."],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ka={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"}},va={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"}},wa=(e,t)=>Number(e)+".",ya={ordinalNumber:wa,era:u({values:ha,defaultWidth:"wide"}),quarter:u({values:fa,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:pa,defaultWidth:"wide"}),day:u({values:ga,defaultWidth:"wide"}),dayPeriod:u({values:ka,defaultWidth:"wide",formattingValues:va,defaultFormattingWidth:"wide"})},ba=/^(\d+)(\.)?/i,Ma=/\d+/i,Pa={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},Da={any:[/^f/i,/^(v|e)/i]},_a={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},$a={any:[/1/i,/2/i,/3/i,/4/i]},Wa={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},xa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Oa={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Sa={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ta={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},ja={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Ca={ordinalNumber:E({matchPattern:ba,parsePattern:Ma,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:Pa,defaultMatchWidth:"wide",parsePatterns:Da,defaultParseWidth:"any"}),quarter:c({matchPatterns:_a,defaultMatchWidth:"wide",parsePatterns:$a,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:Wa,defaultMatchWidth:"wide",parsePatterns:xa,defaultParseWidth:"any"}),day:c({matchPatterns:Oa,defaultMatchWidth:"wide",parsePatterns:Sa,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:Ta,defaultMatchWidth:"any",parsePatterns:ja,defaultParseWidth:"any"})},Ea={code:"da",formatDistance:oa,formatLong:ca,formatRelative:ma,localize:ya,match:Ca,options:{weekStartsOn:1,firstWeekContainsDate:4}},Na={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},Fa={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Ha={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ya={date:k({formats:Na,defaultWidth:"full"}),time:k({formats:Fa,defaultWidth:"full"}),dateTime:k({formats:Ha,defaultWidth:"full"})},je={code:"en-GB",formatDistance:_e,formatLong:Ya,formatRelative:$e,localize:We,match:xe,options:{weekStartsOn:1,firstWeekContainsDate:4}};function ue(e){return e.replace(/sekuntia?/,"sekunnin")}function ce(e){return e.replace(/minuuttia?/,"minuutin")}function le(e){return e.replace(/tuntia?/,"tunnin")}function za(e){return e.replace(/päivää?/,"päivän")}function me(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function he(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function F(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}const La={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:ue},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:ue},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:e=>"puolen minuutin"},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:ce},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:ce},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:le},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:le},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:za},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:me},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:me},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:he},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:he},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:F},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:F},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:F},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:F}},qa=(e,t,a)=>{const n=La[e],r=t===1?n.one:n.other.replace("{{count}}",String(t));return a?.addSuffix?a.comparison&&a.comparison>0?n.futureTense(r)+" kuluttua":r+" sitten":r},Xa={full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},Va={full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},Ka={full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Qa={date:k({formats:Xa,defaultWidth:"full"}),time:k({formats:Va,defaultWidth:"full"}),dateTime:k({formats:Ka,defaultWidth:"full"})},Ia={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"},Aa=(e,t,a,n)=>Ia[e],Ra={narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},Ba={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},B={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},Ja={narrow:B.narrow,abbreviated:B.abbreviated,wide:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"]},Y={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},Ga={narrow:Y.narrow,short:Y.short,abbreviated:Y.abbreviated,wide:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"]},Ua={narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},Za=(e,t)=>Number(e)+".",en={ordinalNumber:Za,era:u({values:Ra,defaultWidth:"wide"}),quarter:u({values:Ba,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:B,defaultWidth:"wide",formattingValues:Ja,defaultFormattingWidth:"wide"}),day:u({values:Y,defaultWidth:"wide",formattingValues:Ga,defaultFormattingWidth:"wide"}),dayPeriod:u({values:Ua,defaultWidth:"wide"})},tn=/^(\d+)(\.)/i,an=/\d+/i,nn={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},rn={any:[/^e/i,/^j/i]},on={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},sn={any:[/1/i,/2/i,/3/i,/4/i]},dn={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},un={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},cn={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},ln={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},mn={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},hn={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},fn={ordinalNumber:E({matchPattern:tn,parsePattern:an,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:nn,defaultMatchWidth:"wide",parsePatterns:rn,defaultParseWidth:"any"}),quarter:c({matchPatterns:on,defaultMatchWidth:"wide",parsePatterns:sn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:dn,defaultMatchWidth:"wide",parsePatterns:un,defaultParseWidth:"any"}),day:c({matchPatterns:cn,defaultMatchWidth:"wide",parsePatterns:ln,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:mn,defaultMatchWidth:"any",parsePatterns:hn,defaultParseWidth:"any"})},pn={code:"fi",formatDistance:qa,formatLong:Qa,formatRelative:Aa,localize:en,match:fn,options:{weekStartsOn:1,firstWeekContainsDate:4}},gn={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},kn=(e,t,a)=>{let n;const r=gn[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" siden":n},vn={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},wn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},yn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},bn={date:k({formats:vn,defaultWidth:"full"}),time:k({formats:wn,defaultWidth:"full"}),dateTime:k({formats:yn,defaultWidth:"full"})},Mn={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Pn=(e,t,a,n)=>Mn[e],Dn={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},_n={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},$n={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Wn={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},xn={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},On=(e,t)=>Number(e)+".",Sn={ordinalNumber:On,era:u({values:Dn,defaultWidth:"wide"}),quarter:u({values:_n,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:$n,defaultWidth:"wide"}),day:u({values:Wn,defaultWidth:"wide"}),dayPeriod:u({values:xn,defaultWidth:"wide"})},Tn=/^(\d+)\.?/i,jn=/\d+/i,Cn={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},En={any:[/^f/i,/^e/i]},Nn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Fn={any:[/1/i,/2/i,/3/i,/4/i]},Hn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Yn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},zn={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Ln={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},qn={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Xn={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Vn={ordinalNumber:E({matchPattern:Tn,parsePattern:jn,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:Cn,defaultMatchWidth:"wide",parsePatterns:En,defaultParseWidth:"any"}),quarter:c({matchPatterns:Nn,defaultMatchWidth:"wide",parsePatterns:Fn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:Hn,defaultMatchWidth:"wide",parsePatterns:Yn,defaultParseWidth:"any"}),day:c({matchPatterns:zn,defaultMatchWidth:"wide",parsePatterns:Ln,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:qn,defaultMatchWidth:"any",parsePatterns:Xn,defaultParseWidth:"any"})},Kn={code:"nb",formatDistance:kn,formatLong:bn,formatRelative:Pn,localize:Sn,match:Vn,options:{weekStartsOn:1,firstWeekContainsDate:4}},Qn={lessThanXSeconds:{one:"mindre än en sekund",other:"mindre än {{count}} sekunder"},xSeconds:{one:"en sekund",other:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{one:"mindre än en minut",other:"mindre än {{count}} minuter"},xMinutes:{one:"en minut",other:"{{count}} minuter"},aboutXHours:{one:"ungefär en timme",other:"ungefär {{count}} timmar"},xHours:{one:"en timme",other:"{{count}} timmar"},xDays:{one:"en dag",other:"{{count}} dagar"},aboutXWeeks:{one:"ungefär en vecka",other:"ungefär {{count}} veckor"},xWeeks:{one:"en vecka",other:"{{count}} veckor"},aboutXMonths:{one:"ungefär en månad",other:"ungefär {{count}} månader"},xMonths:{one:"en månad",other:"{{count}} månader"},aboutXYears:{one:"ungefär ett år",other:"ungefär {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"över ett år",other:"över {{count}} år"},almostXYears:{one:"nästan ett år",other:"nästan {{count}} år"}},In=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"],An=(e,t,a)=>{let n;const r=Qn[e];return typeof r=="string"?n=r:t===1?n=r.one:n=r.other.replace("{{count}}",t<13?In[t]:String(t)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+n:n+" sedan":n},Rn={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},Bn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Jn={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Gn={date:k({formats:Rn,defaultWidth:"full"}),time:k({formats:Bn,defaultWidth:"full"}),dateTime:k({formats:Jn,defaultWidth:"full"})},Un={lastWeek:"'i' EEEE's kl.' p",yesterday:"'igår kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Zn=(e,t,a,n)=>Un[e],er={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["före Kristus","efter Kristus"]},tr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},ar={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},nr={narrow:["S","M","T","O","T","F","L"],short:["sö","må","ti","on","to","fr","lö"],abbreviated:["sön","mån","tis","ons","tors","fre","lör"],wide:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},rr={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kväll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kväll",night:"natt"},wide:{am:"förmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kväll",night:"natt"}},ir={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på eftermiddagen",evening:"på kvällen",night:"på natten"}},or=(e,t)=>{const a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:case 2:return a+":a"}return a+":e"},sr={ordinalNumber:or,era:u({values:er,defaultWidth:"wide"}),quarter:u({values:tr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:u({values:ar,defaultWidth:"wide"}),day:u({values:nr,defaultWidth:"wide"}),dayPeriod:u({values:rr,defaultWidth:"wide",formattingValues:ir,defaultFormattingWidth:"wide"})},dr=/^(\d+)(:a|:e)?/i,ur=/\d+/i,cr={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},lr={any:[/^f/i,/^[ev]/i]},mr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},hr={any:[/1/i,/2/i,/3/i,/4/i]},fr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},pr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},gr={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},kr={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},vr={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},wr={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},yr={ordinalNumber:E({matchPattern:dr,parsePattern:ur,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:cr,defaultMatchWidth:"wide",parsePatterns:lr,defaultParseWidth:"any"}),quarter:c({matchPatterns:mr,defaultMatchWidth:"wide",parsePatterns:hr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:fr,defaultMatchWidth:"wide",parsePatterns:pr,defaultParseWidth:"any"}),day:c({matchPatterns:gr,defaultMatchWidth:"wide",parsePatterns:kr,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:vr,defaultMatchWidth:"any",parsePatterns:wr,defaultParseWidth:"any"})},br={code:"sv",formatDistance:An,formatLong:Gn,formatRelative:Zn,localize:sr,match:yr,options:{weekStartsOn:1,firstWeekContainsDate:4}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce="important",Mr=" !"+Ce,Pr=Ye(class extends ze{constructor(e){if(super(e),e.type!==Le.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,a)=>{const n=e[a];return n==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(e,[t]){const{style:a}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?a.removeProperty(n):a[n]=null);for(const n in t){const r=t[n];if(r!=null){this.ft.add(n);const i=typeof r=="string"&&r.endsWith(Mr);n.includes("-")||i?a.setProperty(n,i?r.slice(0,-11):r,i?Ce:""):a[n]=r}}return qe}});var Dr={},_r=JSON.parse('{"icon.title.calendar":["Kalender"]}'),$r=JSON.parse('{"icon.title.calendar":["Calendar"]}'),Wr=JSON.parse('{"icon.title.calendar":["Kalenteri"]}'),xr=JSON.parse('{"icon.title.calendar":["Kalender"]}'),Or=JSON.parse('{"icon.title.calendar":["Kalender"]}'),Ee=["en","nb","fi","da","sv"],Ne="en",Sr=()=>{var e;let t;switch((e=process==null?void 0:Dr)==null?void 0:e.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},Fe=()=>{var e;const t=(e=document?.location)==null?void 0:e.hostname;return t?.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":Ne},I=e=>Ee.find(t=>e===t||e.toLowerCase().includes(t))||Fe();function Tr(){var e;if(typeof window>"u"){const t=Sr();return I(t)}try{const t=(e=document?.documentElement)==null?void 0:e.lang,a=Fe();return Ee.includes(t)?I(t??a):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),I(a))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Ne}}var jr=(e,t,a,n,r,i)=>e==="nb"?a:e==="fi"?n:e==="da"?r:e==="sv"?i:t,Cr=(e,t,a,n,r)=>{const i=Tr(),o=jr(i,e,t,a,n,r);M.load(i,o),M.activate(i)};Cr($r,_r,Wr,xr,Or);var Er=class extends ke{render(){const e=M.t({message:"Calendar",id:"icon.title.calendar",comment:"Title for calendar icon"});return Ve`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-calendar-16-part">${Xe(`<title>${e}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 2.5h-13a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-14 4h15M8 12.666V9.333m1 3.333H7m1-3.333-1 .333M4.5 3.333V.667m7 2.666V.667"></path></svg>`}};customElements.get("w-icon-calendar-16")||customElements.define("w-icon-calendar-16",Er);const Nr=JSON.parse('{"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"]}'),Fr=JSON.parse('{"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"]}'),Hr=JSON.parse('{"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"]}'),Yr=JSON.parse('{"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"]}'),zr=JSON.parse('{"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"]}'),Lr=X`
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
`,qr=X`
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
`,Xr=X`
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
`,Vr=X`
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
`,Kr=/^\d{4}-\d{2}-\d{2}$/;function fe(e){if(typeof e!="string")return null;let t=e;Kr.test(e)&&(t=`${e}T00:00:00Z`);const a=Date.parse(t);return Number.isNaN(a)?null:new Date(a)}var Qr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,f=(e,t,a,n)=>{for(var r=n>1?void 0:n?Ir(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(n?o(t,a,r):o(r))||r);return n&&r&&Qr(t,a,r),r};const Ar=typeof navigator<"u"?navigator.userAgent:"",Rr=/iP(hone|od|ad)/.test(Ar),Br=Rr?"text":"date",S="calendar",J="input",G="toggle",He="wrapper",z="previous",H={en:je,nb:Kn,sv:br,da:Ea,fi:pn};class h extends Ke(ke){constructor(){super(),this.headerFormat="MMMM yyyy",this.weekdayFormat="EEEEEE",this.dayFormat="PPPP",this.isCalendarOpen=!1,this.navigationDate=ra(),this.locale=je,Qe(Fr,Yr,Hr,Nr,zr);const t=Ie();t&&H[t]&&(this.locale=H[t]),this._onClickOutside=this._onClickOutside.bind(this)}static{this.shadowRootOptions={...Ae.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Re,Vr,Lr,qr,Xr]}get selectedDate(){return fe(this.value)??null}get month(){return R(this.navigationDate)}get weeks(){const t=this.month,a=this.navigationDate,r=it({start:R(t),end:na(t)},{locale:this.locale}).map(i=>({start:i,end:ee(i,{locale:this.locale})})).map(i=>rt(i));if(ie(a,t)){const i=aa(a,{locale:this.locale})-1,o=Me(a,y(a,{locale:this.locale}));r[i][o]=a}return r}async#e(t){t.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#n(){this.navigationDate=A(this.month,1)}#r(){this.navigationDate=de(this.month)}async#t(){await this.updateComplete,this.input.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}_onClickOutside(t){!this.isCalendarOpen||this.contains(t.target)||(this.isCalendarOpen=!1)}#i(t){this.value=t.target.value}#o(t){t.preventDefault(),this.isCalendarOpen=!0}#s(t){if(t.key===" ")return this.#e(t);(t.key===","||t.key==="Enter")&&t.preventDefault()}async#d(t){const a=this.navigationDate;let n;switch(t.key){case"ArrowUp":n=se(a,7);break;case"ArrowLeft":n=se(a,1);break;case"Home":n=y(a,{locale:this.locale});break;case"PageUp":n=de(a);break;case"ArrowDown":n=L(a,7);break;case"ArrowRight":n=L(a,1);break;case"End":n=ee(a,{locale:this.locale});break;case"PageDown":n=A(a,1);break;case"Escape":this.isCalendarOpen=!1;break;case"Tab":t.target.tagName==="TD"&&!t.shiftKey?(t.preventDefault(),this.previousMonthButton.focus()):t.target.id===z&&t.shiftKey&&(t.preventDefault(),(this.selectedCell||this.todayCell).focus());break}n&&(t.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#a(t){const a=t.currentTarget.dataset.date;"key"in t?(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.value=a,this.isCalendarOpen=!1,this.toggleButton.focus(),this.#t()):(this.value=a,this.isCalendarOpen=!1,this.#t())}connectedCallback(){super.connectedCallback();const t=this.lang;if(t&&H[t]&&(this.locale=H[t]),this.value){const a=fe(this.value);a&&(this.navigationDate=a)}document.addEventListener("mousedown",this._onClickOutside),document.addEventListener("touchend",this._onClickOutside),document.addEventListener("focusin",this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._onClickOutside),document.removeEventListener("touchend",this._onClickOutside),document.removeEventListener("focusin",this._onClickOutside)}updated(t){t.has("value")&&this.setValue(this.value)}render(){return D`
      <div class="w-datepicker-wrapper" id="${He}">
        <label class="w-datepicker-input-label" for="${J}">${this.label}</label>
        <div class="w-datepicker-input-wrapper">
          <input
            id="${J}"
            type="${Br}"
            name="${Q(this.name)}"
            value="${Q(this.value)}"
            class="w-datepicker-input"
            @click="${this.#o}"
            @input="${this.#i}"
            @keydown="${this.#s}" />
          <w-button
            aria-label="${this.value?M.t({id:"datepicker.toggle.changeDate",values:{currentDate:N(this.value,this.dayFormat)},message:"Change date, {currentDate}",comment:"Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date"}):M.t({id:"datepicker.toggle.chooseDate",message:"Choose date",comment:"Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date"})}"
            aria-controls="${S}"
            class="w-datepicker-button"
            data-testid="${G}"
            id="${G}"
            variant="utility"
            quiet
            type="button"
            @click="${this.#e}">
            <w-icon-calendar-16></w-icon-calendar-16>
          </w-button>
        </div>
      </div>
      <div class="w-dropdown__popover w-dropdown__popover--open" style="${Pr({display:this.isCalendarOpen?void 0:"none"})}">
        <div
          aria-label="${M.t({id:"datepicker.calendar.roleDescription",message:"Date picker",comment:"Used by screen readers to announce that the calendar element is a date picker."})}"
          aria-modal="true"
          role="dialog"
          class="w-datepicker__calendar"
          data-testid="${S}"
          id="${S}"
          @keydown="${this.#d}">
          <div class="w-datepicker__month-nav">
            <w-button
              aria-label="${M.t({id:"datepicker.calendar.previousMonth",message:"Previous month",comment:"Screen reader label for the previous month button."})}"
              class="w-datepicker__month__nav__button"
              id="${z}"
              data-testid="${z}"
              variant="utility"
              quiet
              small
              @click="${this.#r}">
              <w-icon-chevron-left-16></w-icon-chevron-left-16>
            </w-button>
            <div aria-live="polite" class="w-datepicker__month__nav__header">
              ${N(this.month,this.headerFormat,{locale:this.locale})}
            </div>
            <w-button
              aria-label="${M.t({id:"datepicker.calendar.nextMonth",message:"Next month",comment:"Screen reader label for the next month button."})}"
              class="w-datepicker__month__nav__button"
              data-testid="${S}-next"
              variant="utility"
              quiet
              small
              @click="${this.#n}">
              <w-icon-chevron-right-16></w-icon-chevron-right-16>
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
                      ${t.map(a=>{if(!ie(this.month,a))return D`<td></td>`;const n=this.isDayDisabled?this.isDayDisabled(a):!1,r=Pe(a,this.selectedDate),i=a===this.navigationDate;return D`<td
                          aria-current="${Q(oe(a)?"date":void 0)}"
                          aria-disabled="${n}"
                          aria-label="${N(a,this.dayFormat,{locale:this.locale})}"
                          aria-selected="${r}"
                          class="${Be({"w-datepicker__day":!0,"w-datepicker__day--today":oe(a),"w-datepicker__day--selected":r,"w-datepicker__day--disabled":n,"w-datepicker__day--navigation":i})}"
                          data-navigation="${i}"
                          data-date="${ea(a,{})}"
                          role="gridcell"
                          tabindex="${i?0:-1}"
                          @click="${n?void 0:this.#a}"
                          @keydown="${n?void 0:this.#a}">
                          <div>${Te(a)}</div>
                        </td>`})}
                    </tr>`)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}}f([_({reflect:!0})],h.prototype,"label",2);f([_({reflect:!0})],h.prototype,"lang",2);f([_({reflect:!0})],h.prototype,"name",2);f([_({reflect:!0})],h.prototype,"value",2);f([_({attribute:"header-format"})],h.prototype,"headerFormat",2);f([_({attribute:"weekday-format"})],h.prototype,"weekdayFormat",2);f([_({attribute:"day-format"})],h.prototype,"dayFormat",2);f([x()],h.prototype,"isCalendarOpen",2);f([x()],h.prototype,"navigationDate",2);f([x()],h.prototype,"locale",2);f([x()],h.prototype,"selectedDate",1);f([x()],h.prototype,"month",1);f([x()],h.prototype,"weeks",1);f([$(`#${S}`)],h.prototype,"calendar",2);f([$(`#${J}`,!0)],h.prototype,"input",2);f([$(`#${G}`,!0)],h.prototype,"toggleButton",2);f([$(`#${He}`,!0)],h.prototype,"wrapper",2);f([$(`#${z}`)],h.prototype,"previousMonthButton",2);f([$('[aria-current="date"]')],h.prototype,"todayCell",2);f([$('[data-navigation="true"]')],h.prototype,"selectedCell",2);customElements.get("w-datepicker")||customElements.define("w-datepicker",h);var pe=Object.freeze,Jr=Object.defineProperty,Gr=(e,t)=>pe(Jr(e,"raw",{value:pe(e.slice())})),ge;const{events:Ur,args:Zr,argTypes:ei}=Je("w-datepicker"),ti={title:"Forms/Datepicker",render(e){return D`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker ${ve(we(e))}></w-datepicker>
      </div>
    `},args:Zr,argTypes:ei,parameters:{actions:{handles:Ur}}},T={args:{label:"Dato",lang:"nb"}},j={args:{label:"Dato",lang:"nb"},render(e){return D(ge||(ge=Gr([`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker `,`></w-datepicker>
      </div>
      <script type="module">
        const datePicker = document.querySelector('w-datepicker');
        // No working on Sundays!
        datePicker.isDayDisabled = (day) => day.getDay() === 0;
      <\/script>
    `])),ve(we(e)))}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const ai=["Default","DisableCalendarDates"],ii=Object.freeze(Object.defineProperty({__proto__:null,Default:T,DisableCalendarDates:j,__namedExportsOrder:ai,default:ti},Symbol.toStringTag,{value:"Module"}));export{ii as D,T as a};
