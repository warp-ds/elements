import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{C as n,E as r,T as i,_ as a,a as o,d as s,f as c,g as l,h as u,i as ee,k as d,l as f,m as te,o as p,p as ne,r as re,t as m,v as h,x as ie,y as ae}from"./decorate-r9jH0CjD.js";import{n as oe,t as se}from"./dist-gZ_m6TlA.js";import{n as g,r as ce,t as le}from"./i18n-CH8KbyPD.js";import{n as ue,t as de}from"./class-map-tAQ7AVtN.js";import{t as fe}from"./icon-BLxYKJ3e.js";import{n as pe,t as me}from"./styles-zocEQ6mS.js";import{i as he,n as ge,r as _e}from"./utilities-DPMir1kO.js";import{n as ve,t as ye}from"./FormControlMixin-wSdHiYtY.js";import{r as _,t as be}from"./if-defined-BKFbRLV7.js";import{t as xe}from"./button-37LYFGzs.js";import{t as Se}from"./taggedTemplateLiteral-CWT6dLlS.js";import{t as Ce}from"./tooltip-CmQYPg3p.js";var we,Te,Ee,De;function v(){return(v=e((()=>{we=10**8*24*60*60*1e3,-we,Te=6048e5,Ee=864e5,De=Symbol.for(`constructDateFrom`)})))()}function y(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&De in e?e[De](t):e instanceof Date?new e.constructor(t):new Date(t)}function b(){return(b=e((()=>{v()})))()}function x(e,t){return y(t||e,e)}function S(){return(S=e((()=>{b()})))()}function C(e,t,n){let r=x(e,n?.in);return isNaN(t)?y(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function w(){return(w=e((()=>{b(),S()})))()}function Oe(e,t,n){let r=x(e,n?.in);if(isNaN(t))return y(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=y(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}function ke(){return(ke=e((()=>{b(),S()})))()}function T(){return Ae}var Ae;function E(){return(E=e((()=>{Ae={}})))()}function D(e,t){let n=T(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=x(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function O(){return(O=e((()=>{E(),S()})))()}function je(e,t){return D(e,{...t,weekStartsOn:1})}function Me(){return(Me=e((()=>{O()})))()}function Ne(e,t){let n=x(e,t?.in),r=n.getFullYear(),i=y(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=je(i),o=y(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=je(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function Pe(){return(Pe=e((()=>{b(),Me(),S()})))()}function Fe(e){let t=x(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-n}function Ie(){return(Ie=e((()=>{S()})))()}function k(e,...t){let n=y.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function A(){return(A=e((()=>{b()})))()}function j(e,t){let n=x(e,t?.in);return n.setHours(0,0,0,0),n}function M(){return(M=e((()=>{S()})))()}function Le(e,t,n){let[r,i]=k(n?.in,e,t),a=j(r),o=j(i),s=+a-Fe(a),c=+o-Fe(o);return Math.round((s-c)/Ee)}function Re(){return(Re=e((()=>{Ie(),A(),v(),M()})))()}function ze(e,t){let n=Ne(e,t),r=y(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),je(r)}function Be(){return(Be=e((()=>{b(),Pe(),Me()})))()}function Ve(e,t,n){return C(e,t*7,n)}function He(){return(He=e((()=>{w()})))()}function Ue(e){return y(e,Date.now())}function We(){return(We=e((()=>{b()})))()}function Ge(e,t,n){let[r,i]=k(n?.in,e,t);return+j(r)==+j(i)}function Ke(){return(Ke=e((()=>{A(),M()})))()}function qe(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function Je(){return(Je=e((()=>{})))()}function Ye(e){return!(!qe(e)&&typeof e!=`number`||isNaN(+x(e)))}function Xe(){return(Xe=e((()=>{Je(),S()})))()}function Ze(e,t){let[n,r]=k(e,t.start,t.end);return{start:n,end:r}}function Qe(){return(Qe=e((()=>{A()})))()}function $e(e,t){let{start:n,end:r}=Ze(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(y(n,o)),o.setDate(o.getDate()+s),o.setHours(0,0,0,0);return i?c.reverse():c}function et(){return(et=e((()=>{Qe(),b()})))()}function tt(e,t){let{start:n,end:r}=Ze(t?.in,e),i=+n>+r,a=D(i?r:n,t),o=D(i?n:r,t);a.setHours(15),o.setHours(15);let s=+o.getTime(),c=a,l=t?.step??1;if(!l)return[];l<0&&(l=-l,i=!i);let u=[];for(;+c<=s;)c.setHours(0),u.push(y(n,c)),c=Ve(c,l),c.setHours(15);return i?u.reverse():u}function nt(){return(nt=e((()=>{Qe(),He(),b(),O()})))()}function rt(e,t){let n=x(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function it(){return(it=e((()=>{S()})))()}function at(e,t){let n=x(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function ot(){return(ot=e((()=>{S()})))()}function st(e,t){let n=T(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=x(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function ct(){return(ct=e((()=>{E(),S()})))()}var lt,ut;function dt(){return(dt=e((()=>{lt={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},ut=(e,t,n)=>{let r,i=lt[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r}})))()}function N(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var ft,pt,mt,ht;function gt(){return(gt=e((()=>{ft={full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},pt={full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},mt={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},ht={date:N({formats:ft,defaultWidth:`full`}),time:N({formats:pt,defaultWidth:`full`}),dateTime:N({formats:mt,defaultWidth:`full`})}})))()}var _t,vt;function yt(){return(yt=e((()=>{_t={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},vt=(e,t,n,r)=>_t[e]})))()}function P(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var bt,xt,St,Ct,wt,Tt,Et,Dt;function Ot(){return(Ot=e((()=>{bt={narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},xt={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},St={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},Ct={narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},wt={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},Tt={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},Et=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},Dt={ordinalNumber:Et,era:P({values:bt,defaultWidth:`wide`}),quarter:P({values:xt,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:St,defaultWidth:`wide`}),day:P({values:Ct,defaultWidth:`wide`}),dayPeriod:P({values:wt,defaultWidth:`wide`,formattingValues:Tt,defaultFormattingWidth:`wide`})}})))()}function F(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?At(s,e=>e.test(o)):kt(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function kt(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function At(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function I(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut;function Wt(){return(Wt=e((()=>{jt=/^(\d+)(th|st|nd|rd)?/i,Mt=/\d+/i,Nt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Pt={any:[/^b/i,/^(a|c)/i]},Ft={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},It={any:[/1/i,/2/i,/3/i,/4/i]},Lt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Rt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},zt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Bt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Vt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ht={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ut={ordinalNumber:I({matchPattern:jt,parsePattern:Mt,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:Nt,defaultMatchWidth:`wide`,parsePatterns:Pt,defaultParseWidth:`any`}),quarter:F({matchPatterns:Ft,defaultMatchWidth:`wide`,parsePatterns:It,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:Lt,defaultMatchWidth:`wide`,parsePatterns:Rt,defaultParseWidth:`any`}),day:F({matchPatterns:zt,defaultMatchWidth:`wide`,parsePatterns:Bt,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:Vt,defaultMatchWidth:`any`,parsePatterns:Ht,defaultParseWidth:`any`})}})))()}var Gt;function Kt(){return(Kt=e((()=>{dt(),gt(),yt(),Ot(),Wt(),Gt={code:`en-US`,formatDistance:ut,formatLong:ht,formatRelative:vt,localize:Dt,match:Ut,options:{weekStartsOn:0,firstWeekContainsDate:1}}})))()}function qt(e,t){let n=x(e,t?.in);return Le(n,at(n))+1}function Jt(){return(Jt=e((()=>{Re(),ot(),S()})))()}function Yt(e,t){let n=x(e,t?.in),r=+je(n)-ze(n);return Math.round(r/Te)+1}function Xt(){return(Xt=e((()=>{v(),Me(),Be(),S()})))()}function Zt(e,t){let n=x(e,t?.in),r=n.getFullYear(),i=T(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=y(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=D(o,t),c=y(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=D(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function Qt(){return(Qt=e((()=>{E(),b(),O(),S()})))()}function $t(e,t){let n=T(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=Zt(e,t),a=y(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),D(a,t)}function en(){return(en=e((()=>{E(),b(),Qt(),O()})))()}function tn(e,t){let n=x(e,t?.in),r=+D(n,t)-$t(n,t);return Math.round(r/Te)+1}function nn(){return(nn=e((()=>{v(),O(),en(),S()})))()}function L(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var R;function rn(){return(rn=e((()=>{R={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return L(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):L(n+1,2)},d(e,t){return L(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return L(e.getHours()%12||12,t.length)},H(e,t){return L(e.getHours(),t.length)},m(e,t){return L(e.getMinutes(),t.length)},s(e,t){return L(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return L(Math.trunc(r*10**(n-3)),t.length)}}})))()}function an(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+L(a,2)}function on(e,t){return e%60==0?(e>0?`-`:`+`)+L(Math.abs(e)/60,2):z(e,t)}function z(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=L(Math.trunc(r/60),2),a=L(r%60,2);return n+i+t+a}var B,sn;function cn(){return(cn=e((()=>{Jt(),Xt(),Pe(),nn(),Qt(),rn(),B={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},sn={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return R.y(e,t)},Y:function(e,t,n,r){let i=Zt(e,r),a=i>0?i:1-i;return t===`YY`?L(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):L(a,t.length)},R:function(e,t){return L(Ne(e),t.length)},u:function(e,t){return L(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return L(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return L(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return R.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return L(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=tn(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):L(i,t.length)},I:function(e,t,n){let r=Yt(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):L(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):R.d(e,t)},D:function(e,t,n){let r=qt(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):L(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return L(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return L(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return L(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?B.noon:r===0?B.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?B.evening:r>=12?B.afternoon:r>=4?B.morning:B.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return R.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):R.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):L(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):L(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):R.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):R.s(e,t)},S:function(e,t){return R.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return on(r);case`XXXX`:case`XX`:return z(r);default:return z(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return on(r);case`xxxx`:case`xx`:return z(r);default:return z(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+an(r,`:`);default:return`GMT`+z(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+an(r,`:`);default:return`GMT`+z(r,`:`)}},t:function(e,t,n){return L(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return L(+e,t.length)}}})))()}var ln,un,dn,fn;function pn(){return(pn=e((()=>{ln=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},un=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},dn=(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return ln(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`})}return a.replace(`{{date}}`,ln(r,t)).replace(`{{time}}`,un(i,t))},fn={p:un,P:dn}})))()}function mn(e){return vn.test(e)}function hn(e){return yn.test(e)}function gn(e,t,n){let r=_n(e,t,n);if(console.warn(r),bn.includes(e))throw RangeError(r)}function _n(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var vn,yn,bn;function xn(){return(xn=e((()=>{vn=/^D+$/,yn=/^Y+$/,bn=[`D`,`DD`,`YY`,`YYYY`]})))()}function V(e,t,n){let r=T(),i=n?.locale??r.locale??Gt,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=x(e,n?.in);if(!Ye(s))throw RangeError(`Invalid time value`);let c=t.match(wn).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=fn[t];return n(e,i.formatLong)}return e}).join(``).match(Cn).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:Sn(e)};if(sn[t])return{isToken:!0,value:e};if(t.match(Dn))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&hn(a)||!n?.useAdditionalDayOfYearTokens&&mn(a))&&gn(a,t,String(e));let o=sn[a[0]];return o(s,a,i.localize,l)}).join(``)}function Sn(e){let t=e.match(Tn);return t?t[1].replace(En,`'`):e}var Cn,wn,Tn,En,Dn;function On(){return(On=e((()=>{Kt(),E(),cn(),pn(),xn(),Xe(),S(),Cn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,wn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Tn=/^'([^]*?)'?$/,En=/''/g,Dn=/[a-zA-Z]/})))()}function kn(e,t){let n=x(e,t?.in);if(isNaN(+n))throw RangeError(`Invalid time value`);let r=t?.format??`extended`,i=t?.representation??`complete`,a=``,o=``,s=r===`extended`?`-`:``,c=r===`extended`?`:`:``;if(i!==`time`){let e=L(n.getDate(),2),t=L(n.getMonth()+1,2);a=`${L(n.getFullYear(),4)}${s}${t}${s}${e}`}if(i!==`date`){let e=n.getTimezoneOffset();if(e!==0){let t=Math.abs(e),n=L(Math.trunc(t/60),2),r=L(t%60,2);o=`${e<0?`+`:`-`}${n}:${r}`}else o=`Z`;let t=L(n.getHours(),2),r=L(n.getMinutes(),2),i=L(n.getSeconds(),2),s=a===``?``:`T`,l=[t,r,i].join(c);a=`${a}${s}${l}${o}`}return a}function An(){return(An=e((()=>{S()})))()}function jn(e,t){return x(e,t?.in).getDate()}function Mn(){return(Mn=e((()=>{S()})))()}function Nn(e,t){return x(e,t?.in).getDay()}function Pn(){return(Pn=e((()=>{S()})))()}function Fn(e,t){let n=T(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=jn(x(e,t?.in));if(isNaN(i))return NaN;let a=r-Nn(rt(e,t));a<=0&&(a+=7);let o=i-a;return Math.ceil(o/7)+1}function In(){return(In=e((()=>{E(),Mn(),Pn(),it(),S()})))()}function Ln(e,t){let n=x(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),x(n,t?.in)}function Rn(){return(Rn=e((()=>{S()})))()}function zn(e,t,n){let[r,i]=k(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}function Bn(){return(Bn=e((()=>{A()})))()}function Vn(e,t){return Ge(y(t?.in||e,e),Ue(t?.in||e))}function Hn(){return(Hn=e((()=>{b(),We(),Ke()})))()}function Un(e,t,n){return C(e,-t,n)}function Wn(){return(Wn=e((()=>{w()})))()}function Gn(e){return j(Date.now(),e)}function Kn(){return(Kn=e((()=>{M()})))()}function qn(e,t,n){return Oe(e,-t,n)}function Jn(){return(Jn=e((()=>{ke()})))()}var Yn,Xn;function Zn(){return(Zn=e((()=>{Yn={lessThanXSeconds:{one:`mindre end ét sekund`,other:`mindre end {{count}} sekunder`},xSeconds:{one:`1 sekund`,other:`{{count}} sekunder`},halfAMinute:`ét halvt minut`,lessThanXMinutes:{one:`mindre end ét minut`,other:`mindre end {{count}} minutter`},xMinutes:{one:`1 minut`,other:`{{count}} minutter`},aboutXHours:{one:`cirka 1 time`,other:`cirka {{count}} timer`},xHours:{one:`1 time`,other:`{{count}} timer`},xDays:{one:`1 dag`,other:`{{count}} dage`},aboutXWeeks:{one:`cirka 1 uge`,other:`cirka {{count}} uger`},xWeeks:{one:`1 uge`,other:`{{count}} uger`},aboutXMonths:{one:`cirka 1 måned`,other:`cirka {{count}} måneder`},xMonths:{one:`1 måned`,other:`{{count}} måneder`},aboutXYears:{one:`cirka 1 år`,other:`cirka {{count}} år`},xYears:{one:`1 år`,other:`{{count}} år`},overXYears:{one:`over 1 år`,other:`over {{count}} år`},almostXYears:{one:`næsten 1 år`,other:`næsten {{count}} år`}},Xn=(e,t,n)=>{let r,i=Yn[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var Qn,$n,er,tr;function nr(){return(nr=e((()=>{Qn={full:`EEEE 'den' d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd/MM/y`},$n={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},er={full:`{{date}} 'kl'. {{time}}`,long:`{{date}} 'kl'. {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},tr={date:N({formats:Qn,defaultWidth:`full`}),time:N({formats:$n,defaultWidth:`full`}),dateTime:N({formats:er,defaultWidth:`full`})}})))()}var rr,ir;function ar(){return(ar=e((()=>{rr={lastWeek:`'sidste' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`'på' eeee 'kl.' p`,other:`P`},ir=(e,t,n,r)=>rr[e]})))()}var or,sr,cr,lr,ur,dr,fr,pr;function mr(){return(mr=e((()=>{or={narrow:[`fvt`,`vt`],abbreviated:[`f.v.t.`,`v.t.`],wide:[`før vesterlandsk tidsregning`,`vesterlandsk tidsregning`]},sr={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`1. kvt.`,`2. kvt.`,`3. kvt.`,`4. kvt.`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},cr={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mar.`,`apr.`,`maj`,`jun.`,`jul.`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januar`,`februar`,`marts`,`april`,`maj`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`december`]},lr={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn.`,`man.`,`tir.`,`ons.`,`tor.`,`fre.`,`lør.`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},ur={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`}},dr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`}},fr=(e,t)=>Number(e)+`.`,pr={ordinalNumber:fr,era:P({values:or,defaultWidth:`wide`}),quarter:P({values:sr,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:cr,defaultWidth:`wide`}),day:P({values:lr,defaultWidth:`wide`}),dayPeriod:P({values:ur,defaultWidth:`wide`,formattingValues:dr,defaultFormattingWidth:`wide`})}})))()}var hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr;function Or(){return(Or=e((()=>{hr=/^(\d+)(\.)?/i,gr=/\d+/i,_r={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},vr={any:[/^f/i,/^(v|e)/i]},yr={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},br={any:[/1/i,/2/i,/3/i,/4/i]},xr={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},Sr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Cr={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},wr={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Tr={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},Er={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Dr={ordinalNumber:I({matchPattern:hr,parsePattern:gr,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:_r,defaultMatchWidth:`wide`,parsePatterns:vr,defaultParseWidth:`any`}),quarter:F({matchPatterns:yr,defaultMatchWidth:`wide`,parsePatterns:br,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:xr,defaultMatchWidth:`wide`,parsePatterns:Sr,defaultParseWidth:`any`}),day:F({matchPatterns:Cr,defaultMatchWidth:`wide`,parsePatterns:wr,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:Tr,defaultMatchWidth:`any`,parsePatterns:Er,defaultParseWidth:`any`})}})))()}var kr;function Ar(){return(Ar=e((()=>{Zn(),nr(),ar(),mr(),Or(),kr={code:`da`,formatDistance:Xn,formatLong:tr,formatRelative:ir,localize:pr,match:Dr,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var jr,Mr,Nr,Pr;function Fr(){return(Fr=e((()=>{jr={full:`EEEE, d MMMM yyyy`,long:`d MMMM yyyy`,medium:`d MMM yyyy`,short:`dd/MM/yyyy`},Mr={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Nr={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},Pr={date:N({formats:jr,defaultWidth:`full`}),time:N({formats:Mr,defaultWidth:`full`}),dateTime:N({formats:Nr,defaultWidth:`full`})}})))()}var Ir;function Lr(){return(Lr=e((()=>{dt(),yt(),Ot(),Wt(),Fr(),Ir={code:`en-GB`,formatDistance:ut,formatLong:Pr,formatRelative:vt,localize:Dt,match:Ut,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}function Rr(e){return e.replace(/sekuntia?/,`sekunnin`)}function zr(e){return e.replace(/minuuttia?/,`minuutin`)}function Br(e){return e.replace(/tuntia?/,`tunnin`)}function Vr(e){return e.replace(/päivää?/,`päivän`)}function Hr(e){return e.replace(/(viikko|viikkoa)/,`viikon`)}function Ur(e){return e.replace(/(kuukausi|kuukautta)/,`kuukauden`)}function H(e){return e.replace(/(vuosi|vuotta)/,`vuoden`)}var Wr,Gr;function Kr(){return(Kr=e((()=>{Wr={lessThanXSeconds:{one:`alle sekunti`,other:`alle {{count}} sekuntia`,futureTense:Rr},xSeconds:{one:`sekunti`,other:`{{count}} sekuntia`,futureTense:Rr},halfAMinute:{one:`puoli minuuttia`,other:`puoli minuuttia`,futureTense:e=>`puolen minuutin`},lessThanXMinutes:{one:`alle minuutti`,other:`alle {{count}} minuuttia`,futureTense:zr},xMinutes:{one:`minuutti`,other:`{{count}} minuuttia`,futureTense:zr},aboutXHours:{one:`noin tunti`,other:`noin {{count}} tuntia`,futureTense:Br},xHours:{one:`tunti`,other:`{{count}} tuntia`,futureTense:Br},xDays:{one:`päivä`,other:`{{count}} päivää`,futureTense:Vr},aboutXWeeks:{one:`noin viikko`,other:`noin {{count}} viikkoa`,futureTense:Hr},xWeeks:{one:`viikko`,other:`{{count}} viikkoa`,futureTense:Hr},aboutXMonths:{one:`noin kuukausi`,other:`noin {{count}} kuukautta`,futureTense:Ur},xMonths:{one:`kuukausi`,other:`{{count}} kuukautta`,futureTense:Ur},aboutXYears:{one:`noin vuosi`,other:`noin {{count}} vuotta`,futureTense:H},xYears:{one:`vuosi`,other:`{{count}} vuotta`,futureTense:H},overXYears:{one:`yli vuosi`,other:`yli {{count}} vuotta`,futureTense:H},almostXYears:{one:`lähes vuosi`,other:`lähes {{count}} vuotta`,futureTense:H}},Gr=(e,t,n)=>{let r=Wr[e],i=t===1?r.one:r.other.replace(`{{count}}`,String(t));return n?.addSuffix?n.comparison&&n.comparison>0?r.futureTense(i)+` kuluttua`:i+` sitten`:i}})))()}var qr,Jr,Yr,Xr;function Zr(){return(Zr=e((()=>{qr={full:`eeee d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`d.M.y`},Jr={full:`HH.mm.ss zzzz`,long:`HH.mm.ss z`,medium:`HH.mm.ss`,short:`HH.mm`},Yr={full:`{{date}} 'klo' {{time}}`,long:`{{date}} 'klo' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Xr={date:N({formats:qr,defaultWidth:`full`}),time:N({formats:Jr,defaultWidth:`full`}),dateTime:N({formats:Yr,defaultWidth:`full`})}})))()}var Qr,$r;function ei(){return(ei=e((()=>{Qr={lastWeek:`'viime' eeee 'klo' p`,yesterday:`'eilen klo' p`,today:`'tänään klo' p`,tomorrow:`'huomenna klo' p`,nextWeek:`'ensi' eeee 'klo' p`,other:`P`},$r=(e,t,n,r)=>Qr[e]})))()}var ti,ni,U,ri,W,ii,ai,oi,si;function ci(){return(ci=e((()=>{ti={narrow:[`eaa.`,`jaa.`],abbreviated:[`eaa.`,`jaa.`],wide:[`ennen ajanlaskun alkua`,`jälkeen ajanlaskun alun`]},ni={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartaali`,`2. kvartaali`,`3. kvartaali`,`4. kvartaali`]},U={narrow:[`T`,`H`,`M`,`H`,`T`,`K`,`H`,`E`,`S`,`L`,`M`,`J`],abbreviated:[`tammi`,`helmi`,`maalis`,`huhti`,`touko`,`kesä`,`heinä`,`elo`,`syys`,`loka`,`marras`,`joulu`],wide:[`tammikuu`,`helmikuu`,`maaliskuu`,`huhtikuu`,`toukokuu`,`kesäkuu`,`heinäkuu`,`elokuu`,`syyskuu`,`lokakuu`,`marraskuu`,`joulukuu`]},ri={narrow:U.narrow,abbreviated:U.abbreviated,wide:[`tammikuuta`,`helmikuuta`,`maaliskuuta`,`huhtikuuta`,`toukokuuta`,`kesäkuuta`,`heinäkuuta`,`elokuuta`,`syyskuuta`,`lokakuuta`,`marraskuuta`,`joulukuuta`]},W={narrow:[`S`,`M`,`T`,`K`,`T`,`P`,`L`],short:[`su`,`ma`,`ti`,`ke`,`to`,`pe`,`la`],abbreviated:[`sunn.`,`maan.`,`tiis.`,`kesk.`,`torst.`,`perj.`,`la`],wide:[`sunnuntai`,`maanantai`,`tiistai`,`keskiviikko`,`torstai`,`perjantai`,`lauantai`]},ii={narrow:W.narrow,short:W.short,abbreviated:W.abbreviated,wide:[`sunnuntaina`,`maanantaina`,`tiistaina`,`keskiviikkona`,`torstaina`,`perjantaina`,`lauantaina`]},ai={narrow:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},abbreviated:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},wide:{am:`ap`,pm:`ip`,midnight:`keskiyöllä`,noon:`keskipäivällä`,morning:`aamupäivällä`,afternoon:`iltapäivällä`,evening:`illalla`,night:`yöllä`}},oi=(e,t)=>Number(e)+`.`,si={ordinalNumber:oi,era:P({values:ti,defaultWidth:`wide`}),quarter:P({values:ni,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:U,defaultWidth:`wide`,formattingValues:ri,defaultFormattingWidth:`wide`}),day:P({values:W,defaultWidth:`wide`,formattingValues:ii,defaultFormattingWidth:`wide`}),dayPeriod:P({values:ai,defaultWidth:`wide`})}})))()}var li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi;function Si(){return(Si=e((()=>{li=/^(\d+)(\.)/i,ui=/\d+/i,di={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},fi={any:[/^e/i,/^j/i]},pi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},mi={any:[/1/i,/2/i,/3/i,/4/i]},hi={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},gi={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},_i={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},vi={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},yi={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},bi={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},xi={ordinalNumber:I({matchPattern:li,parsePattern:ui,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:di,defaultMatchWidth:`wide`,parsePatterns:fi,defaultParseWidth:`any`}),quarter:F({matchPatterns:pi,defaultMatchWidth:`wide`,parsePatterns:mi,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:hi,defaultMatchWidth:`wide`,parsePatterns:gi,defaultParseWidth:`any`}),day:F({matchPatterns:_i,defaultMatchWidth:`wide`,parsePatterns:vi,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:yi,defaultMatchWidth:`any`,parsePatterns:bi,defaultParseWidth:`any`})}})))()}var Ci;function wi(){return(wi=e((()=>{Kr(),Zr(),ei(),ci(),Si(),Ci={code:`fi`,formatDistance:Gr,formatLong:Xr,formatRelative:$r,localize:si,match:xi,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Ti,Ei;function Di(){return(Di=e((()=>{Ti={lessThanXSeconds:{one:`mindre enn ett sekund`,other:`mindre enn {{count}} sekunder`},xSeconds:{one:`ett sekund`,other:`{{count}} sekunder`},halfAMinute:`et halvt minutt`,lessThanXMinutes:{one:`mindre enn ett minutt`,other:`mindre enn {{count}} minutter`},xMinutes:{one:`ett minutt`,other:`{{count}} minutter`},aboutXHours:{one:`omtrent en time`,other:`omtrent {{count}} timer`},xHours:{one:`en time`,other:`{{count}} timer`},xDays:{one:`en dag`,other:`{{count}} dager`},aboutXWeeks:{one:`omtrent en uke`,other:`omtrent {{count}} uker`},xWeeks:{one:`en uke`,other:`{{count}} uker`},aboutXMonths:{one:`omtrent en måned`,other:`omtrent {{count}} måneder`},xMonths:{one:`en måned`,other:`{{count}} måneder`},aboutXYears:{one:`omtrent ett år`,other:`omtrent {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`over ett år`,other:`over {{count}} år`},almostXYears:{one:`nesten ett år`,other:`nesten {{count}} år`}},Ei=(e,t,n)=>{let r,i=Ti[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var Oi,ki,Ai,ji;function Mi(){return(Mi=e((()=>{Oi={full:`EEEE d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd.MM.y`},ki={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Ai={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},ji={date:N({formats:Oi,defaultWidth:`full`}),time:N({formats:ki,defaultWidth:`full`}),dateTime:N({formats:Ai,defaultWidth:`full`})}})))()}var Ni,Pi;function Fi(){return(Fi=e((()=>{Ni={lastWeek:`'forrige' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Pi=(e,t,n,r)=>Ni[e]})))()}var Ii,Li,Ri,zi,Bi,Vi,Hi;function Ui(){return(Ui=e((()=>{Ii={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`før Kristus`,`etter Kristus`]},Li={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},Ri={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`mai`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`des.`],wide:[`januar`,`februar`,`mars`,`april`,`mai`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`desember`]},zi={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn`,`man`,`tir`,`ons`,`tor`,`fre`,`lør`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},Bi={narrow:{am:`a`,pm:`p`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},abbreviated:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morgenen`,afternoon:`på ettermiddagen`,evening:`på kvelden`,night:`på natten`}},Vi=(e,t)=>Number(e)+`.`,Hi={ordinalNumber:Vi,era:P({values:Ii,defaultWidth:`wide`}),quarter:P({values:Li,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:Ri,defaultWidth:`wide`}),day:P({values:zi,defaultWidth:`wide`}),dayPeriod:P({values:Bi,defaultWidth:`wide`})}})))()}var Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na;function ra(){return(ra=e((()=>{Wi=/^(\d+)\.?/i,Gi=/\d+/i,Ki={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},qi={any:[/^f/i,/^e/i]},Ji={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Yi={any:[/1/i,/2/i,/3/i,/4/i]},Xi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Zi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Qi={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},$i={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},ea={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},ta={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},na={ordinalNumber:I({matchPattern:Wi,parsePattern:Gi,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:Ki,defaultMatchWidth:`wide`,parsePatterns:qi,defaultParseWidth:`any`}),quarter:F({matchPatterns:Ji,defaultMatchWidth:`wide`,parsePatterns:Yi,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:Xi,defaultMatchWidth:`wide`,parsePatterns:Zi,defaultParseWidth:`any`}),day:F({matchPatterns:Qi,defaultMatchWidth:`wide`,parsePatterns:$i,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:ea,defaultMatchWidth:`any`,parsePatterns:ta,defaultParseWidth:`any`})}})))()}var ia;function aa(){return(aa=e((()=>{Di(),Mi(),Fi(),Ui(),ra(),ia={code:`nb`,formatDistance:Ei,formatLong:ji,formatRelative:Pi,localize:Hi,match:na,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var oa,sa,ca;function la(){return(la=e((()=>{oa={lessThanXSeconds:{one:`mindre än en sekund`,other:`mindre än {{count}} sekunder`},xSeconds:{one:`en sekund`,other:`{{count}} sekunder`},halfAMinute:`en halv minut`,lessThanXMinutes:{one:`mindre än en minut`,other:`mindre än {{count}} minuter`},xMinutes:{one:`en minut`,other:`{{count}} minuter`},aboutXHours:{one:`ungefär en timme`,other:`ungefär {{count}} timmar`},xHours:{one:`en timme`,other:`{{count}} timmar`},xDays:{one:`en dag`,other:`{{count}} dagar`},aboutXWeeks:{one:`ungefär en vecka`,other:`ungefär {{count}} veckor`},xWeeks:{one:`en vecka`,other:`{{count}} veckor`},aboutXMonths:{one:`ungefär en månad`,other:`ungefär {{count}} månader`},xMonths:{one:`en månad`,other:`{{count}} månader`},aboutXYears:{one:`ungefär ett år`,other:`ungefär {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`över ett år`,other:`över {{count}} år`},almostXYears:{one:`nästan ett år`,other:`nästan {{count}} år`}},sa=[`noll`,`en`,`två`,`tre`,`fyra`,`fem`,`sex`,`sju`,`åtta`,`nio`,`tio`,`elva`,`tolv`],ca=(e,t,n)=>{let r,i=oa[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t<13?sa[t]:String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` sedan`:r}})))()}var ua,da,fa,pa;function ma(){return(ma=e((()=>{ua={full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`y-MM-dd`},da={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},fa={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},pa={date:N({formats:ua,defaultWidth:`full`}),time:N({formats:da,defaultWidth:`full`}),dateTime:N({formats:fa,defaultWidth:`full`})}})))()}var ha,ga;function _a(){return(_a=e((()=>{ha={lastWeek:`'i' EEEE's kl.' p`,yesterday:`'igår kl.' p`,today:`'idag kl.' p`,tomorrow:`'imorgon kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},ga=(e,t,n,r)=>ha[e]})))()}var va,ya,ba,xa,Sa,Ca,wa,Ta;function Ea(){return(Ea=e((()=>{va={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`före Kristus`,`efter Kristus`]},ya={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1:a kvartalet`,`2:a kvartalet`,`3:e kvartalet`,`4:e kvartalet`]},ba={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`maj`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januari`,`februari`,`mars`,`april`,`maj`,`juni`,`juli`,`augusti`,`september`,`oktober`,`november`,`december`]},xa={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sö`,`må`,`ti`,`on`,`to`,`fr`,`lö`],abbreviated:[`sön`,`mån`,`tis`,`ons`,`tors`,`fre`,`lör`],wide:[`söndag`,`måndag`,`tisdag`,`onsdag`,`torsdag`,`fredag`,`lördag`]},Sa={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`morg.`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},abbreviated:{am:`f.m.`,pm:`e.m.`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},wide:{am:`förmiddag`,pm:`eftermiddag`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`eftermiddag`,evening:`kväll`,night:`natt`}},Ca={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},abbreviated:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},wide:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morgonen`,afternoon:`på eftermiddagen`,evening:`på kvällen`,night:`på natten`}},wa=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+`:a`}return n+`:e`},Ta={ordinalNumber:wa,era:P({values:va,defaultWidth:`wide`}),quarter:P({values:ya,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:ba,defaultWidth:`wide`}),day:P({values:xa,defaultWidth:`wide`}),dayPeriod:P({values:Sa,defaultWidth:`wide`,formattingValues:Ca,defaultFormattingWidth:`wide`})}})))()}var Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za;function Ba(){return(Ba=e((()=>{Da=/^(\d+)(:a|:e)?/i,Oa=/\d+/i,ka={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},Aa={any:[/^f/i,/^[ev]/i]},ja={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},Ma={any:[/1/i,/2/i,/3/i,/4/i]},Na={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},Pa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Fa={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},Ia={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},La={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},Ra={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},za={ordinalNumber:I({matchPattern:Da,parsePattern:Oa,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:ka,defaultMatchWidth:`wide`,parsePatterns:Aa,defaultParseWidth:`any`}),quarter:F({matchPatterns:ja,defaultMatchWidth:`wide`,parsePatterns:Ma,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:Na,defaultMatchWidth:`wide`,parsePatterns:Pa,defaultParseWidth:`any`}),day:F({matchPatterns:Fa,defaultMatchWidth:`wide`,parsePatterns:Ia,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:La,defaultMatchWidth:`any`,parsePatterns:Ra,defaultParseWidth:`any`})}})))()}var Va;function Ha(){return(Ha=e((()=>{la(),ma(),_a(),Ea(),Ba(),Va={code:`sv`,formatDistance:ca,formatLong:pa,formatRelative:ga,localize:Ta,match:za,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Ua,Wa,Ga;function Ka(){return(Ka=e((()=>{r(),te(),Ua=`important`,Wa=` !`+Ua,Ga=c(class extends ne{constructor(e){if(super(e),e.type!==u.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?r.removeProperty(e):r[e]=null);for(let e in t){let n=t[e];if(n!=null){this.ft.add(e);let t=typeof n==`string`&&n.endsWith(Wa);e.includes(`-`)||t?r.setProperty(e,t?n.slice(0,-11):n,t?Ua:``):r[e]=n}}return n}})})))()}function qa(){return(qa=e((()=>{Ka()})))()}var Ja;function Ya(){return(Ya=e((()=>{Ja=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var Xa;function Za(){return(Za=e((()=>{Xa=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var Qa;function $a(){return($a=e((()=>{Qa=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valinnainen"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var eo;function to(){return(to=e((()=>{eo=JSON.parse(`{"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"]}`)})))()}var no;function ro(){return(ro=e((()=>{no=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valfritt"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var io,ao,oo;function so(){return(so=e((()=>{h(),io=d`
	/* Label component tokens with semantic fallbacks */
	label {
		/* Internal tokens - not part of public API */
		--_color: var(--w-c-input-label-color, var(--w-s-color-text));
		--_font-size: var(--w-c-input-label-font-size, var(--w-font-size-s));
		--_line-height: var(--w-c-input-label-line-height, var(--w-line-height-s));
		--_font-weight: var(--w-c-input-label-font-weight, 700);
		--_padding-bottom: var(--w-c-input-label-padding-bottom, 0.4rem);
		--_cursor: var(--w-c-input-label-cursor, pointer);
		--_display: var(--w-c-input-label-display, block);

		/* Apply styles */
		display: var(--_display);
		position: relative;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		font-weight: var(--_font-weight);
		padding-bottom: var(--_padding-bottom);
		cursor: var(--_cursor);
		color: var(--_color);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* Optional text styling */
	label span {
		--_padding-left: var(--w-c-input-optional-padding-left, 0.8rem);
		--_font-weight: var(--w-c-input-optional-font-weight, 400);
		--_font-size: var(--w-c-input-optional-font-size, var(--w-font-size-s));
		--_line-height: var(
			--w-c-input-optional-line-height,
			var(--w-line-height-s)
		);
		--_color: var(--w-c-input-optional-color, var(--w-s-color-text-subtle));

		padding-left: var(--_padding-left);
		font-weight: var(--_font-weight);
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		color: var(--_color);
	}

	[part="tooltip-target"] {
		appearance: none;
		background: transparent;
		border: none;
		height: 16px;
		margin: 0 0 0 4px;
		padding: 0;
		vertical-align: text-top;
	}

	w-tooltip {
		display: inline-block;
	}
`,ao=d`
	/* Help text component tokens with semantic fallbacks */
	:host {
		--_help-text-color: var(
			--w-c-input-help-text-color,
			var(--w-s-color-text-subtle)
		);
		--_help-text-font-size: var(
			--w-c-input-help-text-font-size,
			var(--w-font-size-xs)
		);
		--_help-text-line-height: var(
			--w-c-input-help-text-line-height,
			var(--w-line-height-xs)
		);
		--_help-text-margin-top: var(--w-c-input-help-text-margin-top, 0.4rem);
		--_help-text-display: var(--w-c-input-help-text-display, block);
	}

	/* Invalid state overrides color */
	:host([invalid]) {
		--_help-text-color: var(
			--w-c-input-help-text-color-invalid,
			var(--w-s-color-text-negative)
		);
	}

	.help-text {
		font-size: var(--_help-text-font-size);
		line-height: var(--_help-text-line-height);
		margin-top: var(--_help-text-margin-top);
		display: var(--_help-text-display);
		color: var(--_help-text-color);
	}
`,oo=d`
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

	/* custom calendar button */
	.w-datepicker-button {
		--padding-x: 14px;
		--padding-y: 14px;
		--border-radius: 2px; /* override to better fit inside the input field */
		position: absolute;
		right: 2px;
		top: 2px;
		pointer-events: auto; /* override parent’s none */
	}

	input[type="date"]::-webkit-inner-spin-button,
	input[type="date"]::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}
	input[type="date"],
	input[type="time"],
	input[type="datetime-local"],
	input[type="month"] {
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
`})))()}var co;function lo(){return(lo=e((()=>{h(),co=d`
	.w-datepicker__calendar {
		--_calendar-border-color: var(--calendar-border-color, initial);
		--_calendar-border-style: var(--calendar-border-style, none);
		--_calendar-border-width: var(--calendar-border-width, 0);
		--_calendar-border-radius: var(--calendar-border-radius, 0);
		position: relative;
		z-index: 30;

		border: var(--_calendar-border-width) var(--_calendar-border-style)
			var(--_calendar-border-color);
		border-radius: var(--_calendar-border-radius);
		padding: 16px;
	}
`})))()}var uo;function fo(){return(fo=e((()=>{h(),uo=d`
	/* === Day Cell === */
	.w-datepicker__day {
		/* No longer in use? */
		--_day-in-range-background: var(
			--day-in-range-background,
			var(--w-s-color-background-primary-subtle-active)
		);

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
`})))()}var po;function mo(){return(mo=e((()=>{h(),po=d`
	.w-datepicker__month {
		/* Sets default used in the day fragment */
		--day-width: 40px;

		--_month-color: var(--month-color, var(--w-s-color-text));
		--_month-font-size: var(--month-font-size, var(--w-font-size-m));
		--_month-line-height: var(--month-line-height, var(--w-line-height-m));

		--_month-table-min-width: var(
			--month-table-min-width,
			calc(var(--day-width) * 7)
		);

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
`})))()}function ho(e){if(typeof e!=`string`)return null;let t=e;yo.test(e)&&(t=`${e}T00:00:00Z`);let n=Date.parse(t);return Number.isNaN(n)?null:new Date(n)}function go(e=typeof navigator<`u`?navigator.userAgent:``){let t=bo.test(e),n=xo.test(e)&&!So.test(e);return t||n?`text`:`date`}function _o(e){let t=e===`en`?`en-GB`:e;return new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`,timeZone:`UTC`}).formatToParts(new Date(Date.UTC(2006,0,2))).map(e=>e.type===`day`?`dd`:e.type===`month`?`mm`:e.type===`year`?`yyyy`:e.value).join(``)}function vo(e,t){if(!yo.exec(e))return e;let[n,r,i]=e.split(`-`);return _o(t).replace(`yyyy`,n).replace(`mm`,r).replace(`dd`,i)}var yo,bo,xo,So;function Co(){return(Co=e((()=>{yo=/^\d{4}-\d{2}-\d{2}$/,bo=/iP(hone|od|ad)/,xo=/Safari/,So=/(Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android)/})))()}var wo,G,To,Eo,Do,K,q,J;function Oo(){return(Oo=e((()=>{a(),ve(),w(),ke(),Re(),et(),nt(),ct(),On(),An(),Mn(),In(),Ke(),Bn(),Hn(),Rn(),it(),Kn(),O(),Wn(),Jn(),Ar(),Lr(),wi(),aa(),Ha(),h(),o(),de(),be(),qa(),ee(),fe(),Ce(),ce(),me(),Ya(),Za(),$a(),to(),ro(),so(),lo(),fo(),mo(),Co(),wo=go(),G=`calendar`,To=`input`,Eo=`toggle`,Do=`wrapper`,K=`previous`,q={en:Ir,nb:ia,sv:Va,da:kr,fi:Ci},J=class extends ye(ae){static{this.shadowRootOptions={...ae.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[pe,io,ao,oo,co,uo,po]}get selectedDate(){return this.value?ho(this.value)??null:null}get month(){return rt(this.navigationDate)}#e;get weeks(){let e=this.month,t=this.navigationDate,n=tt({start:rt(e),end:Ln(e)},{locale:this.locale}).map(e=>({start:e,end:st(e,{locale:this.locale})})).map(e=>$e(e));if(zn(t,e)){let e=Fn(t,{locale:this.locale})-1,r=Le(t,D(t,{locale:this.locale}));n[e][r]=t}return n}get#t(){return this.lang||g()||`en`}get#n(){return wo===`text`&&this.value?vo(this.value,this.#t):this.value||``}async#r(e){e.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#i(){this.navigationDate=Oe(this.month,1)}#a(){this.navigationDate=qn(this.month,1)}#o;async#s(){await this.updateComplete,this.input.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}_onClickOutside(e){this.isCalendarOpen&&(this.contains(e.target)||(this.isCalendarOpen=!1))}#c(e){this.value=e.target.value}#l(){this.#y=!0,this.#C()}#u(e){e.preventDefault(),this.isCalendarOpen=!0}#d(e){if(e.key===` `)return this.#r(e);e.key===`,`&&e.preventDefault(),e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}async#f(e){let t=this.navigationDate,n=null;switch(e.key){case`ArrowUp`:n=Un(t,7);break;case`ArrowLeft`:n=Un(t,1);break;case`Home`:n=D(t,{locale:this.locale});break;case`PageUp`:n=qn(t,1);break;case`ArrowDown`:n=C(t,7);break;case`ArrowRight`:n=C(t,1);break;case`End`:n=st(t,{locale:this.locale});break;case`PageDown`:n=Oe(t,1);break;case`Escape`:this.isCalendarOpen=!1;break;case`Tab`:e.target.tagName===`TD`&&!e.shiftKey?(e.preventDefault(),this.previousMonthButton.focus()):e.target.id===K&&e.shiftKey&&(e.preventDefault(),(this.selectedCell||this.todayCell).focus())}n&&(e.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#p(e){let t=e.currentTarget.dataset.date;this.value=t,this.input.value=this.#n,this.#C(),this.isCalendarOpen=!1,this.#s()}#m(e){e.key===`Enter`&&this.#g(e)}#h(e){e.key===` `&&this.#g(e)}#g(e){let t=e.currentTarget.dataset.date;this.value=t,this.input.value=this.#n,this.#C(),this.isCalendarOpen=!1,this.toggleButton.focus(),this.#s()}#_;#v;#y;constructor(){super(),this.required=!1,this.optional=!1,this.invalid=!1,this.disabled=!1,this.readonly=!1,this.headerFormat=`MMMM yyyy`,this.weekdayFormat=`EEEEEE`,this.dayFormat=`PPPP`,this.isCalendarOpen=!1,this.navigationDate=Gn(),this.locale=Ir,this.#e=void 0,this.#o=``,this.#_=!1,this.#v=void 0,this.#y=!1,this.#S=e=>{e.preventDefault(),this.#y=!0,this.#C()},new re(this),le(Xa,eo,Qa,Ja,no);let e=g();e&&q[e]&&(this.locale=q[e]),this._onClickOutside=this._onClickOutside.bind(this)}resetFormControl(){this.value=this.#e,this.#y=!1,this.#x(),this.#C()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}get _error(){if(this.invalid&&this.helpText)return this.helpText}checkValidity(){return this.#C(),this.internals.checkValidity()}reportValidity(){return this.#y=!0,this.#C(),this.internals.checkValidity()}setCustomValidity(e){this.#o=e,e?(this.#C(),this.#b(e)):(this.#x(),this.#C())}#b(e){this.#_||(this.#v=this.helpText),this.#_=!0,this.invalid=!0,this.helpText=e}#x(){this.#_&&=(this.invalid=!1,this.helpText=this.#v,this.#v=void 0,!1)}#S;#C(){if(this.disabled){this.internals.setValidity({}),this.#x();return}let e={valueMissing:this.required&&!this.value,customError:this.#o!==``};if(Object.values(e).some(Boolean)){let t=e.customError?this.#o:this.input?.validationMessage||``;this.internals.setValidity(e,t,this.input),this.#y&&this.#b(t)}else this.internals.setValidity({}),this.#x()}connectedCallback(){super.connectedCallback(),this.#e=this.value,this.value!==void 0&&this.setValue(this.value),this.addEventListener(`invalid`,this.#S);let e=this.lang;if(e&&q[e]&&(this.locale=q[e]),this.value){let e=ho(this.value);e&&(this.navigationDate=e)}document.addEventListener(`mousedown`,this._onClickOutside),document.addEventListener(`touchend`,this._onClickOutside),document.addEventListener(`focusin`,this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.#S),document.removeEventListener(`mousedown`,this._onClickOutside),document.removeEventListener(`touchend`,this._onClickOutside),document.removeEventListener(`focusin`,this._onClickOutside)}updated(e){e.has(`value`)&&this.value!==void 0&&this.setValue(this.value),(e.has(`value`)||e.has(`required`)||e.has(`disabled`))&&this.#C()}firstUpdated(e){super.firstUpdated(e),this.#C()}render(){return i`
			<div class="w-datepicker-wrapper" id="${Do}">
				<label class="w-datepicker-input-label" for="${To}">
					${this.label}
					${this.optional&&!this.required?i`
									<span>
										${l._({id:`datepicker.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
									</span>
								`:ie}
					${this.tooltip?i`
									<button
										id="tooltip-target"
										part="tooltip-target"
										aria-describedby="tooltip"
									>
										<w-icon name="Info" size="small"></w-icon>
									</button>
									<w-tooltip
										for="tooltip-target"
										id="tooltip"
										exportparts="tooltip, arrow, beak, hover-bridge"
									>
										${this.tooltip}
									</w-tooltip>
								`:ie}
				</label>
				<div class="w-datepicker-input-wrapper">
					<input
						id="${To}"
						type="${wo}"
						name="${_(this.name)}"
						placeholder="${_(wo===`text`?_o(this.#t):void 0)}"
						.value="${this.#n}"
						class="w-datepicker-input"
						?required=${this.required}
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						aria-describedby="${_(this.helpText?`help-text`:this.ariaDescription?`aria-description`:void 0)}"
						aria-errormessage="${_(this._error?`help-text`:void 0)}"
						aria-invalid=${_(this.invalid?`true`:void 0)}
						@click="${this.#u}"
						@input="${this.#c}"
						@blur="${this.#l}"
						@keydown="${this.#d}"
					/>
					<w-button
						aria-label="${this.value?l.t({id:`datepicker.toggle.changeDate`,values:{currentDate:V(this.value,this.dayFormat)},message:`Change date, {currentDate}`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date`}):l.t({id:`datepicker.toggle.chooseDate`,message:`Choose date`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date`})}"
						aria-controls="${G}"
						class="w-datepicker-button"
						data-testid="${Eo}"
						id="${Eo}"
						variant="utilityQuiet"
						?disabled=${this.disabled||this.readonly}
						type="button"
						@click="${this.#r}"
					>
						<w-icon
							name="Calendar"
							size="small"
							locale="${g()}"
							class="flex"
						></w-icon>
					</w-button>
				</div>
				${this.helpText?i`<div id="help-text" class="help-text">${this.helpText}</div>`:ie}
			</div>
			<div
				class="w-dropdown__popover w-dropdown__popover--open"
				style="${Ga({display:this.isCalendarOpen?void 0:`none`})}"
			>
				<div
					aria-label="${l.t({id:`datepicker.calendar.roleDescription`,message:`Date picker`,comment:`Used by screen readers to announce that the calendar element is a date picker.`})}"
					aria-modal="true"
					role="dialog"
					class="w-datepicker__calendar"
					data-testid="${G}"
					id="${G}"
					@keydown="${this.#f}"
				>
					<div class="w-datepicker__month-nav">
						<w-button
							aria-label="${l.t({id:`datepicker.calendar.previousMonth`,message:`Previous month`,comment:`Screen reader label for the previous month button.`})}"
							class="w-datepicker__month__nav__button"
							id="${K}"
							data-testid="${K}"
							variant="utility"
							quiet
							small
							@click="${this.#a}"
						>
							<w-icon
								name="ChevronLeft"
								size="small"
								locale="${g()}"
								class="flex"
							></w-icon>
						</w-button>
						<div aria-live="polite" class="w-datepicker__month__nav__header">
							${V(this.month,this.headerFormat,{locale:this.locale})}
						</div>
						<w-button
							aria-label="${l.t({id:`datepicker.calendar.nextMonth`,message:`Next month`,comment:`Screen reader label for the next month button.`})}"
							class="w-datepicker__month__nav__button"
							data-testid="${G}-next"
							variant="utility"
							quiet
							small
							@click="${this.#i}"
						>
							<w-icon
								name="ChevronRight"
								size="small"
								locale="${g()}"
								class="flex"
							></w-icon>
						</w-button>
					</div>
					<div class="w-datepicker__month">
						<table class="w-datepicker__table" role="grid">
							<thead class="w-datepicker__weekdays">
								<tr>
									${this.weeks[0].map(e=>i`<th class="w-datepicker__weekday">
												${V(e,this.weekdayFormat,{locale:this.locale})}
											</th> `)}
								</tr>
							</thead>
							<tbody>
								${this.weeks.map(e=>i`<tr>
											${e.map(e=>{if(!zn(this.month,e))return i`<td></td>`;let t=this.isDayDisabled?this.isDayDisabled(e):!1,n=!!this.selectedDate&&Ge(e,this.selectedDate),r=e===this.navigationDate;return i`<td
													aria-current="${_(Vn(e)?`date`:void 0)}"
													aria-disabled="${t}"
													aria-label="${V(e,this.dayFormat,{locale:this.locale})}"
													aria-selected="${n}"
													class="${ue({"w-datepicker__day":!0,"w-datepicker__day--today":Vn(e),"w-datepicker__day--selected":n,"w-datepicker__day--disabled":t,"w-datepicker__day--navigation":r})}"
													data-navigation="${r}"
													data-date="${kn(e,{representation:`date`})}"
													role="gridcell"
													tabindex="${r?0:-1}"
													@click="${t?void 0:this.#p}"
													@keydown="${t?void 0:this.#m}"
													@keyup="${t?void 0:this.#h}"
												>
													<div>${jn(e)}</div>
												</td>`})}
										</tr>`)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		`}},m([s({reflect:!0})],J.prototype,`label`,void 0),m([s({type:Boolean,reflect:!0})],J.prototype,`required`,void 0),m([s({type:Boolean,reflect:!0})],J.prototype,`optional`,void 0),m([s({type:String,reflect:!0,attribute:`help-text`})],J.prototype,`helpText`,void 0),m([s({type:Boolean,reflect:!0})],J.prototype,`invalid`,void 0),m([s({type:String,reflect:!0})],J.prototype,`tooltip`,void 0),m([s({reflect:!0})],J.prototype,`lang`,void 0),m([s({reflect:!0})],J.prototype,`name`,void 0),m([s({reflect:!0})],J.prototype,`value`,void 0),m([s({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),m([s({type:Boolean,reflect:!0})],J.prototype,`readonly`,void 0),m([s({attribute:`header-format`})],J.prototype,`headerFormat`,void 0),m([s({attribute:`weekday-format`})],J.prototype,`weekdayFormat`,void 0),m([s({attribute:!1})],J.prototype,`isDayDisabled`,void 0),m([s({attribute:`day-format`})],J.prototype,`dayFormat`,void 0),m([f()],J.prototype,`isCalendarOpen`,void 0),m([f()],J.prototype,`navigationDate`,void 0),m([f()],J.prototype,`locale`,void 0),m([f()],J.prototype,`selectedDate`,null),m([f()],J.prototype,`month`,null),m([f()],J.prototype,`weeks`,null),m([p(`#${G}`)],J.prototype,`calendar`,void 0),m([p(`#${To}`,!0)],J.prototype,`input`,void 0),m([p(`#${Eo}`,!0)],J.prototype,`toggleButton`,void 0),m([p(`#${Do}`,!0)],J.prototype,`wrapper`,void 0),m([p(`#${K}`)],J.prototype,`previousMonthButton`,void 0),m([p(`[aria-current="date"]`)],J.prototype,`todayCell`,void 0),m([p(`[data-navigation="true"]`)],J.prototype,`selectedCell`,void 0),customElements.get(`w-datepicker`)||customElements.define(`w-datepicker`,J)})))()}var ko=t({Default:()=>Y,DisableCalendarDates:()=>$,Invalid:()=>Z,WithHelpText:()=>X,WithTooltip:()=>Q,__namedExportsOrder:()=>Io,default:()=>Fo}),Ao,jo,Mo,No,Po,Fo,Y,X,Z,Q,$,Io;function Lo(){return(Lo=e((()=>{_e(),oe(),h(),xe(),Ce(),Oo(),{events:Mo,args:No,argTypes:Po}=se(`w-datepicker`),Fo={title:`Forms/Datepicker`,render(e){return i(Ao||=Se([`
			<!-- Workaround for Storybook's overflow hidden -->
			<div style="min-height: 400px">
				<form method="get">
					<w-datepicker `,`></w-datepicker>
					<script type="module">
						const picker = document.querySelector("w-datepicker");
						picker.addEventListener("blur", console.log);
					<\/script>
					<input type="submit" hidden />
				</form>
			</div>
		`]),he(ge(e)))},args:No,argTypes:Po,parameters:{actions:{handles:Mo}}},Y={args:{label:`Date`}},X={args:{label:`Date`,optional:!0,required:!1,helpText:`Help text is available`}},Z={args:{label:`Date`,invalid:!0,helpText:`Description of how to fix the problem`}},Q={args:{label:`Date`,optional:!0,required:!1,helpText:`Help text is available, but might not be enough, or the added context is not important enough that we use help-text`,tooltip:`This tooltip adds supplementary information`}},$={args:{label:`Date`},render(e){return i(jo||=Se([`
			<!-- Workaround for Storybook's overflow hidden -->
			<div style="min-height: 400px">
				<w-datepicker `,`></w-datepicker>
			</div>
			<script type="module">
				const datePicker = document.querySelector("w-datepicker");
				// No working on Sundays!
				datePicker.isDayDisabled = (day) => day.getDay() === 0;
			<\/script>
		`]),he(ge(e)))}},Io=[`Default`,`WithHelpText`,`Invalid`,`WithTooltip`,`DisableCalendarDates`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date",
    optional: true,
    required: false,
    helpText: "Help text is available"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date",
    invalid: true,
    helpText: "Description of how to fix the problem"
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date",
    optional: true,
    required: false,
    helpText: "Help text is available, but might not be enough, or the added context is not important enough that we use help-text",
    tooltip: "This tooltip adds supplementary information"
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date"
  },
  render(args) {
    return html\`
            <!-- Workaround for Storybook's overflow hidden -->
            <div style="min-height: 400px">
                <w-datepicker \${spread(prespread(args))}></w-datepicker>
            </div>
            <script type="module">
                const datePicker = document.querySelector("w-datepicker");
                // No working on Sundays!
                datePicker.isDayDisabled = (day) => day.getDay() === 0;
            <\/script>
        \`;
  }
}`,...$.parameters?.docs?.source}}}})))()}export{ko as n,Lo as r,Y as t};