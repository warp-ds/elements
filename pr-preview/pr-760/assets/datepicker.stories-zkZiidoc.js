import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{C as n,_ as r,a as i,b as a,c as o,d as s,f as c,h as l,l as u,p as ee,r as te,s as d,t as f,u as ne,y as p}from"./decorate-D-MUTuIl.js";import{a as m,n as h,o as re,r as ie,t as ae}from"./i18n-CkjYRTT1.js";import{n as oe,t as se}from"./dist-CXTYkVAl.js";import{t as g}from"./query-BHY-nhsh.js";import{n as ce,t as le}from"./class-map-BbjNB0b1.js";import{t as ue}from"./icon-DmyEA4mQ.js";import{n as de,t as fe}from"./styles-Dxzaq_l3.js";import{i as pe,n as me,r as he}from"./utilities-C5YHrCuy.js";import{n as ge,t as _e}from"./FormControlMixin-BCJbRrUC.js";import{r as _,t as ve}from"./if-defined-CDQgRpqn.js";import{t as ye}from"./button-CCI-dxFp.js";import{t as be}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as xe}from"./tooltip-GVgJeJHe.js";var Se,Ce,we,Te,Ee,De,Oe,ke,Ae;function v(){return(v=e((()=>{Se=365.2425,Ce=10**8*24*60*60*1e3,-Ce,we=6048e5,Te=864e5,Ee=3600,De=Ee*24,De*7,Oe=De*Se,ke=Oe/12,ke*3,Ae=Symbol.for(`constructDateFrom`)})))()}function y(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&Ae in e?e[Ae](t):e instanceof Date?new e.constructor(t):new Date(t)}function b(){return(b=e((()=>{v()})))()}function x(e,t){return y(t||e,e)}function S(){return(S=e((()=>{b()})))()}function C(e,t,n){let r=x(e,n?.in);return isNaN(t)?y(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function w(){return(w=e((()=>{b(),S()})))()}function je(e,t,n){let r=x(e,n?.in);if(isNaN(t))return y(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=y(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}function Me(){return(Me=e((()=>{b(),S()})))()}function T(){return Ne}var Ne;function E(){return(E=e((()=>{Ne={}})))()}function D(e,t){let n=T(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=x(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function O(){return(O=e((()=>{E(),S()})))()}function Pe(e,t){return D(e,{...t,weekStartsOn:1})}function Fe(){return(Fe=e((()=>{O()})))()}function Ie(e,t){let n=x(e,t?.in),r=n.getFullYear(),i=y(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=Pe(i),o=y(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=Pe(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function Le(){return(Le=e((()=>{b(),Fe(),S()})))()}function Re(e){let t=x(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),e-+n}function ze(){return(ze=e((()=>{S()})))()}function k(e,...t){let n=y.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function A(){return(A=e((()=>{b()})))()}function j(e,t){let n=x(e,t?.in);return n.setHours(0,0,0,0),n}function M(){return(M=e((()=>{S()})))()}function Be(e,t,n){let[r,i]=k(n?.in,e,t),a=j(r),o=j(i),s=+a-Re(a),c=+o-Re(o);return Math.round((s-c)/Te)}function Ve(){return(Ve=e((()=>{ze(),A(),v(),M()})))()}function He(e,t){let n=Ie(e,t),r=y(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),Pe(r)}function Ue(){return(Ue=e((()=>{b(),Le(),Fe()})))()}function We(e,t,n){return C(e,t*7,n)}function Ge(){return(Ge=e((()=>{w()})))()}function Ke(e){return y(e,Date.now())}function qe(){return(qe=e((()=>{b()})))()}function Je(e,t,n){let[r,i]=k(n?.in,e,t);return+j(r)==+j(i)}function Ye(){return(Ye=e((()=>{A(),M()})))()}function Xe(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function Ze(){return(Ze=e((()=>{})))()}function Qe(e){return!(!Xe(e)&&typeof e!=`number`||isNaN(+x(e)))}function $e(){return($e=e((()=>{Ze(),S()})))()}function et(e,t){let[n,r]=k(e,t.start,t.end);return{start:n,end:r}}function tt(){return(tt=e((()=>{A()})))()}function nt(e,t){let{start:n,end:r}=et(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(y(n,o)),o.setDate(o.getDate()+s),o.setHours(0,0,0,0);return i?c.reverse():c}function rt(){return(rt=e((()=>{tt(),b()})))()}function it(e,t){let{start:n,end:r}=et(t?.in,e),i=+n>+r,a=D(i?r:n,t),o=D(i?n:r,t);a.setHours(15),o.setHours(15);let s=+o.getTime(),c=a,l=t?.step??1;if(!l)return[];l<0&&(l=-l,i=!i);let u=[];for(;+c<=s;)c.setHours(0),u.push(y(n,c)),c=We(c,l),c.setHours(15);return i?u.reverse():u}function at(){return(at=e((()=>{tt(),Ge(),b(),O()})))()}function ot(e,t){let n=x(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function st(){return(st=e((()=>{S()})))()}function ct(e,t){let n=x(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function lt(){return(lt=e((()=>{S()})))()}function ut(e,t){let n=T(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=x(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function dt(){return(dt=e((()=>{E(),S()})))()}var ft,pt;function mt(){return(mt=e((()=>{ft={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},pt=(e,t,n)=>{let r,i=ft[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r}})))()}function N(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var ht,gt,_t,vt;function yt(){return(yt=e((()=>{ht={full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},gt={full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},_t={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},vt={date:N({formats:ht,defaultWidth:`full`}),time:N({formats:gt,defaultWidth:`full`}),dateTime:N({formats:_t,defaultWidth:`full`})}})))()}var bt,xt;function St(){return(St=e((()=>{bt={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},xt=(e,t,n,r)=>bt[e]})))()}function P(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var Ct,wt,Tt,Et,Dt,Ot,kt,At;function jt(){return(jt=e((()=>{Ct={narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},wt={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},Tt={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},Et={narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},Dt={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},Ot={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},kt=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},At={ordinalNumber:kt,era:P({values:Ct,defaultWidth:`wide`}),quarter:P({values:wt,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:Tt,defaultWidth:`wide`}),day:P({values:Et,defaultWidth:`wide`}),dayPeriod:P({values:Dt,defaultWidth:`wide`,formattingValues:Ot,defaultFormattingWidth:`wide`})}})))()}function F(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?Nt(s,e=>e.test(o)):Mt(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function Mt(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Nt(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function I(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt;function qt(){return(qt=e((()=>{Pt=/^(\d+)(th|st|nd|rd)?/i,Ft=/\d+/i,It={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Lt={any:[/^b/i,/^(a|c)/i]},Rt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},zt={any:[/1/i,/2/i,/3/i,/4/i]},Bt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Vt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ht={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ut={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Wt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Gt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Kt={ordinalNumber:I({matchPattern:Pt,parsePattern:Ft,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:It,defaultMatchWidth:`wide`,parsePatterns:Lt,defaultParseWidth:`any`}),quarter:F({matchPatterns:Rt,defaultMatchWidth:`wide`,parsePatterns:zt,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:Bt,defaultMatchWidth:`wide`,parsePatterns:Vt,defaultParseWidth:`any`}),day:F({matchPatterns:Ht,defaultMatchWidth:`wide`,parsePatterns:Ut,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:Wt,defaultMatchWidth:`any`,parsePatterns:Gt,defaultParseWidth:`any`})}})))()}var Jt;function Yt(){return(Yt=e((()=>{mt(),yt(),St(),jt(),qt(),Jt={code:`en-US`,formatDistance:pt,formatLong:vt,formatRelative:xt,localize:At,match:Kt,options:{weekStartsOn:0,firstWeekContainsDate:1}}})))()}function Xt(e,t){let n=x(e,t?.in);return Be(n,ct(n))+1}function Zt(){return(Zt=e((()=>{Ve(),lt(),S()})))()}function Qt(e,t){let n=x(e,t?.in),r=Pe(n)-+He(n);return Math.round(r/we)+1}function $t(){return($t=e((()=>{v(),Fe(),Ue(),S()})))()}function en(e,t){let n=x(e,t?.in),r=n.getFullYear(),i=T(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=y(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=D(o,t),c=y(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=D(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function tn(){return(tn=e((()=>{E(),b(),O(),S()})))()}function nn(e,t){let n=T(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=en(e,t),a=y(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),D(a,t)}function rn(){return(rn=e((()=>{E(),b(),tn(),O()})))()}function an(e,t){let n=x(e,t?.in),r=D(n,t)-+nn(n,t);return Math.round(r/we)+1}function on(){return(on=e((()=>{v(),O(),rn(),S()})))()}function L(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var R;function sn(){return(sn=e((()=>{R={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return L(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):L(n+1,2)},d(e,t){return L(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return L(e.getHours()%12||12,t.length)},H(e,t){return L(e.getHours(),t.length)},m(e,t){return L(e.getMinutes(),t.length)},s(e,t){return L(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return L(Math.trunc(r*10**(n-3)),t.length)}}})))()}function cn(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+L(a,2)}function ln(e,t){return e%60==0?(e>0?`-`:`+`)+L(Math.abs(e)/60,2):z(e,t)}function z(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=L(Math.trunc(r/60),2),a=L(r%60,2);return n+i+t+a}var B,un;function dn(){return(dn=e((()=>{Zt(),$t(),Le(),on(),tn(),sn(),B={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},un={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return R.y(e,t)},Y:function(e,t,n,r){let i=en(e,r),a=i>0?i:1-i;return t===`YY`?L(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):L(a,t.length)},R:function(e,t){return L(Ie(e),t.length)},u:function(e,t){return L(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return L(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return L(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return R.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return L(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=an(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):L(i,t.length)},I:function(e,t,n){let r=Qt(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):L(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):R.d(e,t)},D:function(e,t,n){let r=Xt(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):L(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return L(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return L(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return L(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?B.noon:r===0?B.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?B.evening:r>=12?B.afternoon:r>=4?B.morning:B.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return R.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):R.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):L(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):L(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):R.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):R.s(e,t)},S:function(e,t){return R.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return ln(r);case`XXXX`:case`XX`:return z(r);default:return z(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return ln(r);case`xxxx`:case`xx`:return z(r);default:return z(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+cn(r,`:`);default:return`GMT`+z(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+cn(r,`:`);default:return`GMT`+z(r,`:`)}},t:function(e,t,n){return L(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return L(+e,t.length)}}})))()}var fn,pn,mn,hn;function gn(){return(gn=e((()=>{fn=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},pn=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},mn=(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return fn(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`})}return a.replace(`{{date}}`,fn(r,t)).replace(`{{time}}`,pn(i,t))},hn={p:pn,P:mn}})))()}function _n(e){return xn.test(e)}function vn(e){return Sn.test(e)}function yn(e,t,n){let r=bn(e,t,n);if(console.warn(r),Cn.includes(e))throw RangeError(r)}function bn(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var xn,Sn,Cn;function wn(){return(wn=e((()=>{xn=/^D+$/,Sn=/^Y+$/,Cn=[`D`,`DD`,`YY`,`YYYY`]})))()}function V(e,t,n){let r=T(),i=n?.locale??r.locale??Jt,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=x(e,n?.in);if(!Qe(s))throw RangeError(`Invalid time value`);let c=t.match(Dn).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=hn[t];return n(e,i.formatLong)}return e}).join(``).match(En).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:Tn(e)};if(un[t])return{isToken:!0,value:e};if(t.match(An))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&vn(a)||!n?.useAdditionalDayOfYearTokens&&_n(a))&&yn(a,t,String(e));let o=un[a[0]];return o(s,a,i.localize,l)}).join(``)}function Tn(e){let t=e.match(On);return t?t[1].replace(kn,`'`):e}var En,Dn,On,kn,An;function jn(){return(jn=e((()=>{Yt(),E(),dn(),gn(),wn(),$e(),S(),En=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Dn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,On=/^'([^]*?)'?$/,kn=/''/g,An=/[a-zA-Z]/})))()}function Mn(e,t){let n=x(e,t?.in);if(isNaN(+n))throw RangeError(`Invalid time value`);let r=t?.format??`extended`,i=t?.representation??`complete`,a=``,o=``,s=r===`extended`?`-`:``,c=r===`extended`?`:`:``;if(i!==`time`){let e=L(n.getDate(),2),t=L(n.getMonth()+1,2);a=`${L(n.getFullYear(),4)}${s}${t}${s}${e}`}if(i!==`date`){let e=n.getTimezoneOffset();if(e!==0){let t=Math.abs(e),n=L(Math.trunc(t/60),2),r=L(t%60,2);o=`${e<0?`+`:`-`}${n}:${r}`}else o=`Z`;let t=L(n.getHours(),2),r=L(n.getMinutes(),2),i=L(n.getSeconds(),2),s=a===``?``:`T`,l=[t,r,i].join(c);a=`${a}${s}${l}${o}`}return a}function Nn(){return(Nn=e((()=>{S()})))()}function Pn(e,t){return x(e,t?.in).getDate()}function Fn(){return(Fn=e((()=>{S()})))()}function In(e,t){return x(e,t?.in).getDay()}function Ln(){return(Ln=e((()=>{S()})))()}function Rn(e,t){let n=T(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=Pn(x(e,t?.in));if(isNaN(i))return NaN;let a=r-In(ot(e,t));a<=0&&(a+=7);let o=i-a;return Math.ceil(o/7)+1}function zn(){return(zn=e((()=>{E(),Fn(),Ln(),st(),S()})))()}function Bn(e,t){let n=x(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),x(n,t?.in)}function Vn(){return(Vn=e((()=>{S()})))()}function Hn(e,t,n){let[r,i]=k(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}function Un(){return(Un=e((()=>{A()})))()}function Wn(e,t){return Je(y(t?.in||e,e),Ke(t?.in||e))}function Gn(){return(Gn=e((()=>{b(),qe(),Ye()})))()}function Kn(e,t,n){return C(e,-t,n)}function qn(){return(qn=e((()=>{w()})))()}function Jn(e){return j(Date.now(),e)}function Yn(){return(Yn=e((()=>{M()})))()}function Xn(e,t,n){return je(e,-t,n)}function Zn(){return(Zn=e((()=>{Me()})))()}var Qn,$n;function er(){return(er=e((()=>{Qn={lessThanXSeconds:{one:`mindre end ét sekund`,other:`mindre end {{count}} sekunder`},xSeconds:{one:`1 sekund`,other:`{{count}} sekunder`},halfAMinute:`ét halvt minut`,lessThanXMinutes:{one:`mindre end ét minut`,other:`mindre end {{count}} minutter`},xMinutes:{one:`1 minut`,other:`{{count}} minutter`},aboutXHours:{one:`cirka 1 time`,other:`cirka {{count}} timer`},xHours:{one:`1 time`,other:`{{count}} timer`},xDays:{one:`1 dag`,other:`{{count}} dage`},aboutXWeeks:{one:`cirka 1 uge`,other:`cirka {{count}} uger`},xWeeks:{one:`1 uge`,other:`{{count}} uger`},aboutXMonths:{one:`cirka 1 måned`,other:`cirka {{count}} måneder`},xMonths:{one:`1 måned`,other:`{{count}} måneder`},aboutXYears:{one:`cirka 1 år`,other:`cirka {{count}} år`},xYears:{one:`1 år`,other:`{{count}} år`},overXYears:{one:`over 1 år`,other:`over {{count}} år`},almostXYears:{one:`næsten 1 år`,other:`næsten {{count}} år`}},$n=(e,t,n)=>{let r,i=Qn[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var tr,nr,rr,ir;function ar(){return(ar=e((()=>{tr={full:`EEEE 'den' d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd/MM/y`},nr={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},rr={full:`{{date}} 'kl'. {{time}}`,long:`{{date}} 'kl'. {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},ir={date:N({formats:tr,defaultWidth:`full`}),time:N({formats:nr,defaultWidth:`full`}),dateTime:N({formats:rr,defaultWidth:`full`})}})))()}var or,sr;function cr(){return(cr=e((()=>{or={lastWeek:`'sidste' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`'på' eeee 'kl.' p`,other:`P`},sr=(e,t,n,r)=>or[e]})))()}var lr,ur,dr,fr,pr,mr,hr,gr;function _r(){return(_r=e((()=>{lr={narrow:[`fvt`,`vt`],abbreviated:[`f.v.t.`,`v.t.`],wide:[`før vesterlandsk tidsregning`,`vesterlandsk tidsregning`]},ur={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`1. kvt.`,`2. kvt.`,`3. kvt.`,`4. kvt.`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},dr={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mar.`,`apr.`,`maj`,`jun.`,`jul.`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januar`,`februar`,`marts`,`april`,`maj`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`december`]},fr={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn.`,`man.`,`tir.`,`ons.`,`tor.`,`fre.`,`lør.`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},pr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`}},mr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`}},hr=(e,t)=>Number(e)+`.`,gr={ordinalNumber:hr,era:P({values:lr,defaultWidth:`wide`}),quarter:P({values:ur,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:dr,defaultWidth:`wide`}),day:P({values:fr,defaultWidth:`wide`}),dayPeriod:P({values:pr,defaultWidth:`wide`,formattingValues:mr,defaultFormattingWidth:`wide`})}})))()}var vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar;function jr(){return(jr=e((()=>{vr=/^(\d+)(\.)?/i,yr=/\d+/i,br={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},xr={any:[/^f/i,/^(v|e)/i]},Sr={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},Cr={any:[/1/i,/2/i,/3/i,/4/i]},wr={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},Tr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Er={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Dr={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Or={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},kr={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Ar={ordinalNumber:I({matchPattern:vr,parsePattern:yr,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:br,defaultMatchWidth:`wide`,parsePatterns:xr,defaultParseWidth:`any`}),quarter:F({matchPatterns:Sr,defaultMatchWidth:`wide`,parsePatterns:Cr,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:wr,defaultMatchWidth:`wide`,parsePatterns:Tr,defaultParseWidth:`any`}),day:F({matchPatterns:Er,defaultMatchWidth:`wide`,parsePatterns:Dr,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:Or,defaultMatchWidth:`any`,parsePatterns:kr,defaultParseWidth:`any`})}})))()}var Mr;function Nr(){return(Nr=e((()=>{er(),ar(),cr(),_r(),jr(),Mr={code:`da`,formatDistance:$n,formatLong:ir,formatRelative:sr,localize:gr,match:Ar,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Pr,Fr,Ir,Lr;function Rr(){return(Rr=e((()=>{Pr={full:`EEEE, d MMMM yyyy`,long:`d MMMM yyyy`,medium:`d MMM yyyy`,short:`dd/MM/yyyy`},Fr={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Ir={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},Lr={date:N({formats:Pr,defaultWidth:`full`}),time:N({formats:Fr,defaultWidth:`full`}),dateTime:N({formats:Ir,defaultWidth:`full`})}})))()}var zr;function Br(){return(Br=e((()=>{mt(),St(),jt(),qt(),Rr(),zr={code:`en-GB`,formatDistance:pt,formatLong:Lr,formatRelative:xt,localize:At,match:Kt,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}function Vr(e){return e.replace(/sekuntia?/,`sekunnin`)}function Hr(e){return e.replace(/minuuttia?/,`minuutin`)}function Ur(e){return e.replace(/tuntia?/,`tunnin`)}function Wr(e){return e.replace(/päivää?/,`päivän`)}function Gr(e){return e.replace(/(viikko|viikkoa)/,`viikon`)}function Kr(e){return e.replace(/(kuukausi|kuukautta)/,`kuukauden`)}function H(e){return e.replace(/(vuosi|vuotta)/,`vuoden`)}var qr,Jr;function Yr(){return(Yr=e((()=>{qr={lessThanXSeconds:{one:`alle sekunti`,other:`alle {{count}} sekuntia`,futureTense:Vr},xSeconds:{one:`sekunti`,other:`{{count}} sekuntia`,futureTense:Vr},halfAMinute:{one:`puoli minuuttia`,other:`puoli minuuttia`,futureTense:e=>`puolen minuutin`},lessThanXMinutes:{one:`alle minuutti`,other:`alle {{count}} minuuttia`,futureTense:Hr},xMinutes:{one:`minuutti`,other:`{{count}} minuuttia`,futureTense:Hr},aboutXHours:{one:`noin tunti`,other:`noin {{count}} tuntia`,futureTense:Ur},xHours:{one:`tunti`,other:`{{count}} tuntia`,futureTense:Ur},xDays:{one:`päivä`,other:`{{count}} päivää`,futureTense:Wr},aboutXWeeks:{one:`noin viikko`,other:`noin {{count}} viikkoa`,futureTense:Gr},xWeeks:{one:`viikko`,other:`{{count}} viikkoa`,futureTense:Gr},aboutXMonths:{one:`noin kuukausi`,other:`noin {{count}} kuukautta`,futureTense:Kr},xMonths:{one:`kuukausi`,other:`{{count}} kuukautta`,futureTense:Kr},aboutXYears:{one:`noin vuosi`,other:`noin {{count}} vuotta`,futureTense:H},xYears:{one:`vuosi`,other:`{{count}} vuotta`,futureTense:H},overXYears:{one:`yli vuosi`,other:`yli {{count}} vuotta`,futureTense:H},almostXYears:{one:`lähes vuosi`,other:`lähes {{count}} vuotta`,futureTense:H}},Jr=(e,t,n)=>{let r=qr[e],i=t===1?r.one:r.other.replace(`{{count}}`,String(t));return n?.addSuffix?n.comparison&&n.comparison>0?r.futureTense(i)+` kuluttua`:i+` sitten`:i}})))()}var Xr,Zr,Qr,$r;function ei(){return(ei=e((()=>{Xr={full:`eeee d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`d.M.y`},Zr={full:`HH.mm.ss zzzz`,long:`HH.mm.ss z`,medium:`HH.mm.ss`,short:`HH.mm`},Qr={full:`{{date}} 'klo' {{time}}`,long:`{{date}} 'klo' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},$r={date:N({formats:Xr,defaultWidth:`full`}),time:N({formats:Zr,defaultWidth:`full`}),dateTime:N({formats:Qr,defaultWidth:`full`})}})))()}var ti,ni;function ri(){return(ri=e((()=>{ti={lastWeek:`'viime' eeee 'klo' p`,yesterday:`'eilen klo' p`,today:`'tänään klo' p`,tomorrow:`'huomenna klo' p`,nextWeek:`'ensi' eeee 'klo' p`,other:`P`},ni=(e,t,n,r)=>ti[e]})))()}var ii,ai,U,oi,W,si,ci,li,ui;function di(){return(di=e((()=>{ii={narrow:[`eaa.`,`jaa.`],abbreviated:[`eaa.`,`jaa.`],wide:[`ennen ajanlaskun alkua`,`jälkeen ajanlaskun alun`]},ai={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartaali`,`2. kvartaali`,`3. kvartaali`,`4. kvartaali`]},U={narrow:[`T`,`H`,`M`,`H`,`T`,`K`,`H`,`E`,`S`,`L`,`M`,`J`],abbreviated:[`tammi`,`helmi`,`maalis`,`huhti`,`touko`,`kesä`,`heinä`,`elo`,`syys`,`loka`,`marras`,`joulu`],wide:[`tammikuu`,`helmikuu`,`maaliskuu`,`huhtikuu`,`toukokuu`,`kesäkuu`,`heinäkuu`,`elokuu`,`syyskuu`,`lokakuu`,`marraskuu`,`joulukuu`]},oi={narrow:U.narrow,abbreviated:U.abbreviated,wide:[`tammikuuta`,`helmikuuta`,`maaliskuuta`,`huhtikuuta`,`toukokuuta`,`kesäkuuta`,`heinäkuuta`,`elokuuta`,`syyskuuta`,`lokakuuta`,`marraskuuta`,`joulukuuta`]},W={narrow:[`S`,`M`,`T`,`K`,`T`,`P`,`L`],short:[`su`,`ma`,`ti`,`ke`,`to`,`pe`,`la`],abbreviated:[`sunn.`,`maan.`,`tiis.`,`kesk.`,`torst.`,`perj.`,`la`],wide:[`sunnuntai`,`maanantai`,`tiistai`,`keskiviikko`,`torstai`,`perjantai`,`lauantai`]},si={narrow:W.narrow,short:W.short,abbreviated:W.abbreviated,wide:[`sunnuntaina`,`maanantaina`,`tiistaina`,`keskiviikkona`,`torstaina`,`perjantaina`,`lauantaina`]},ci={narrow:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},abbreviated:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},wide:{am:`ap`,pm:`ip`,midnight:`keskiyöllä`,noon:`keskipäivällä`,morning:`aamupäivällä`,afternoon:`iltapäivällä`,evening:`illalla`,night:`yöllä`}},li=(e,t)=>Number(e)+`.`,ui={ordinalNumber:li,era:P({values:ii,defaultWidth:`wide`}),quarter:P({values:ai,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:U,defaultWidth:`wide`,formattingValues:oi,defaultFormattingWidth:`wide`}),day:P({values:W,defaultWidth:`wide`,formattingValues:si,defaultFormattingWidth:`wide`}),dayPeriod:P({values:ci,defaultWidth:`wide`})}})))()}var fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi;function Ti(){return(Ti=e((()=>{fi=/^(\d+)(\.)/i,pi=/\d+/i,mi={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},hi={any:[/^e/i,/^j/i]},gi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},_i={any:[/1/i,/2/i,/3/i,/4/i]},vi={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},yi={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},bi={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},xi={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},Si={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},Ci={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},wi={ordinalNumber:I({matchPattern:fi,parsePattern:pi,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:mi,defaultMatchWidth:`wide`,parsePatterns:hi,defaultParseWidth:`any`}),quarter:F({matchPatterns:gi,defaultMatchWidth:`wide`,parsePatterns:_i,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:vi,defaultMatchWidth:`wide`,parsePatterns:yi,defaultParseWidth:`any`}),day:F({matchPatterns:bi,defaultMatchWidth:`wide`,parsePatterns:xi,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:Si,defaultMatchWidth:`any`,parsePatterns:Ci,defaultParseWidth:`any`})}})))()}var Ei;function Di(){return(Di=e((()=>{Yr(),ei(),ri(),di(),Ti(),Ei={code:`fi`,formatDistance:Jr,formatLong:$r,formatRelative:ni,localize:ui,match:wi,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Oi,ki;function Ai(){return(Ai=e((()=>{Oi={lessThanXSeconds:{one:`mindre enn ett sekund`,other:`mindre enn {{count}} sekunder`},xSeconds:{one:`ett sekund`,other:`{{count}} sekunder`},halfAMinute:`et halvt minutt`,lessThanXMinutes:{one:`mindre enn ett minutt`,other:`mindre enn {{count}} minutter`},xMinutes:{one:`ett minutt`,other:`{{count}} minutter`},aboutXHours:{one:`omtrent en time`,other:`omtrent {{count}} timer`},xHours:{one:`en time`,other:`{{count}} timer`},xDays:{one:`en dag`,other:`{{count}} dager`},aboutXWeeks:{one:`omtrent en uke`,other:`omtrent {{count}} uker`},xWeeks:{one:`en uke`,other:`{{count}} uker`},aboutXMonths:{one:`omtrent en måned`,other:`omtrent {{count}} måneder`},xMonths:{one:`en måned`,other:`{{count}} måneder`},aboutXYears:{one:`omtrent ett år`,other:`omtrent {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`over ett år`,other:`over {{count}} år`},almostXYears:{one:`nesten ett år`,other:`nesten {{count}} år`}},ki=(e,t,n)=>{let r,i=Oi[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var ji,Mi,Ni,Pi;function Fi(){return(Fi=e((()=>{ji={full:`EEEE d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd.MM.y`},Mi={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Ni={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Pi={date:N({formats:ji,defaultWidth:`full`}),time:N({formats:Mi,defaultWidth:`full`}),dateTime:N({formats:Ni,defaultWidth:`full`})}})))()}var Ii,Li;function Ri(){return(Ri=e((()=>{Ii={lastWeek:`'forrige' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Li=(e,t,n,r)=>Ii[e]})))()}var zi,Bi,Vi,Hi,Ui,Wi,Gi;function Ki(){return(Ki=e((()=>{zi={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`før Kristus`,`etter Kristus`]},Bi={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},Vi={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`mai`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`des.`],wide:[`januar`,`februar`,`mars`,`april`,`mai`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`desember`]},Hi={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn`,`man`,`tir`,`ons`,`tor`,`fre`,`lør`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},Ui={narrow:{am:`a`,pm:`p`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},abbreviated:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morgenen`,afternoon:`på ettermiddagen`,evening:`på kvelden`,night:`på natten`}},Wi=(e,t)=>Number(e)+`.`,Gi={ordinalNumber:Wi,era:P({values:zi,defaultWidth:`wide`}),quarter:P({values:Bi,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:Vi,defaultWidth:`wide`}),day:P({values:Hi,defaultWidth:`wide`}),dayPeriod:P({values:Ui,defaultWidth:`wide`})}})))()}var qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa;function oa(){return(oa=e((()=>{qi=/^(\d+)\.?/i,Ji=/\d+/i,Yi={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Xi={any:[/^f/i,/^e/i]},Zi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Qi={any:[/1/i,/2/i,/3/i,/4/i]},$i={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},ea={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},ta={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},na={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},ra={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},ia={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},aa={ordinalNumber:I({matchPattern:qi,parsePattern:Ji,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:Yi,defaultMatchWidth:`wide`,parsePatterns:Xi,defaultParseWidth:`any`}),quarter:F({matchPatterns:Zi,defaultMatchWidth:`wide`,parsePatterns:Qi,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:$i,defaultMatchWidth:`wide`,parsePatterns:ea,defaultParseWidth:`any`}),day:F({matchPatterns:ta,defaultMatchWidth:`wide`,parsePatterns:na,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:ra,defaultMatchWidth:`any`,parsePatterns:ia,defaultParseWidth:`any`})}})))()}var sa;function ca(){return(ca=e((()=>{Ai(),Fi(),Ri(),Ki(),oa(),sa={code:`nb`,formatDistance:ki,formatLong:Pi,formatRelative:Li,localize:Gi,match:aa,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var la,ua,da;function fa(){return(fa=e((()=>{la={lessThanXSeconds:{one:`mindre än en sekund`,other:`mindre än {{count}} sekunder`},xSeconds:{one:`en sekund`,other:`{{count}} sekunder`},halfAMinute:`en halv minut`,lessThanXMinutes:{one:`mindre än en minut`,other:`mindre än {{count}} minuter`},xMinutes:{one:`en minut`,other:`{{count}} minuter`},aboutXHours:{one:`ungefär en timme`,other:`ungefär {{count}} timmar`},xHours:{one:`en timme`,other:`{{count}} timmar`},xDays:{one:`en dag`,other:`{{count}} dagar`},aboutXWeeks:{one:`ungefär en vecka`,other:`ungefär {{count}} veckor`},xWeeks:{one:`en vecka`,other:`{{count}} veckor`},aboutXMonths:{one:`ungefär en månad`,other:`ungefär {{count}} månader`},xMonths:{one:`en månad`,other:`{{count}} månader`},aboutXYears:{one:`ungefär ett år`,other:`ungefär {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`över ett år`,other:`över {{count}} år`},almostXYears:{one:`nästan ett år`,other:`nästan {{count}} år`}},ua=[`noll`,`en`,`två`,`tre`,`fyra`,`fem`,`sex`,`sju`,`åtta`,`nio`,`tio`,`elva`,`tolv`],da=(e,t,n)=>{let r,i=la[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t<13?ua[t]:String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` sedan`:r}})))()}var pa,ma,ha,ga;function _a(){return(_a=e((()=>{pa={full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`y-MM-dd`},ma={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},ha={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},ga={date:N({formats:pa,defaultWidth:`full`}),time:N({formats:ma,defaultWidth:`full`}),dateTime:N({formats:ha,defaultWidth:`full`})}})))()}var va,ya;function ba(){return(ba=e((()=>{va={lastWeek:`'i' EEEE's kl.' p`,yesterday:`'igår kl.' p`,today:`'idag kl.' p`,tomorrow:`'imorgon kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},ya=(e,t,n,r)=>va[e]})))()}var xa,Sa,Ca,wa,Ta,Ea,Da,Oa;function ka(){return(ka=e((()=>{xa={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`före Kristus`,`efter Kristus`]},Sa={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1:a kvartalet`,`2:a kvartalet`,`3:e kvartalet`,`4:e kvartalet`]},Ca={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`maj`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januari`,`februari`,`mars`,`april`,`maj`,`juni`,`juli`,`augusti`,`september`,`oktober`,`november`,`december`]},wa={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sö`,`må`,`ti`,`on`,`to`,`fr`,`lö`],abbreviated:[`sön`,`mån`,`tis`,`ons`,`tors`,`fre`,`lör`],wide:[`söndag`,`måndag`,`tisdag`,`onsdag`,`torsdag`,`fredag`,`lördag`]},Ta={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`morg.`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},abbreviated:{am:`f.m.`,pm:`e.m.`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},wide:{am:`förmiddag`,pm:`eftermiddag`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`eftermiddag`,evening:`kväll`,night:`natt`}},Ea={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},abbreviated:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},wide:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morgonen`,afternoon:`på eftermiddagen`,evening:`på kvällen`,night:`på natten`}},Da=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+`:a`}return n+`:e`},Oa={ordinalNumber:Da,era:P({values:xa,defaultWidth:`wide`}),quarter:P({values:Sa,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:Ca,defaultWidth:`wide`}),day:P({values:wa,defaultWidth:`wide`}),dayPeriod:P({values:Ta,defaultWidth:`wide`,formattingValues:Ea,defaultFormattingWidth:`wide`})}})))()}var Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha;function Ua(){return(Ua=e((()=>{Aa=/^(\d+)(:a|:e)?/i,ja=/\d+/i,Ma={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},Na={any:[/^f/i,/^[ev]/i]},Pa={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},Fa={any:[/1/i,/2/i,/3/i,/4/i]},Ia={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},La={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ra={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},za={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ba={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},Va={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},Ha={ordinalNumber:I({matchPattern:Aa,parsePattern:ja,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:Ma,defaultMatchWidth:`wide`,parsePatterns:Na,defaultParseWidth:`any`}),quarter:F({matchPatterns:Pa,defaultMatchWidth:`wide`,parsePatterns:Fa,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:Ia,defaultMatchWidth:`wide`,parsePatterns:La,defaultParseWidth:`any`}),day:F({matchPatterns:Ra,defaultMatchWidth:`wide`,parsePatterns:za,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:Ba,defaultMatchWidth:`any`,parsePatterns:Va,defaultParseWidth:`any`})}})))()}var Wa;function Ga(){return(Ga=e((()=>{fa(),_a(),ba(),ka(),Ua(),Wa={code:`sv`,formatDistance:da,formatLong:ga,formatRelative:ya,localize:Oa,match:Ha,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Ka,qa,Ja;function Ya(){return(Ya=e((()=>{a(),ne(),Ka=`important`,qa=` !important`,Ja=o(class extends u{constructor(e){if(super(e),e.type!==s.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(qa);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Ka:``):n[e]=r}}return r}})})))()}function Xa(){return(Xa=e((()=>{Ya()})))()}var Za;function Qa(){return(Qa=e((()=>{Za=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var $a;function eo(){return(eo=e((()=>{$a=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var to;function no(){return(no=e((()=>{to=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valinnainen"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var ro;function io(){return(io=e((()=>{ro=JSON.parse(`{"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"]}`)})))()}var ao;function oo(){return(oo=e((()=>{ao=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valfritt"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var so,co,lo;function uo(){return(uo=e((()=>{c(),so=n`
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
`,co=n`
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
`,lo=n`
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
`})))()}var fo;function po(){return(po=e((()=>{c(),fo=n`
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
`})))()}var mo;function ho(){return(ho=e((()=>{c(),mo=n`
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
`})))()}var go;function _o(){return(_o=e((()=>{c(),go=n`
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
`})))()}function vo(e){if(typeof e!=`string`)return null;let t=e;So.test(e)&&(t=`${e}T00:00:00Z`);let n=Date.parse(t);return Number.isNaN(n)?null:new Date(n)}function yo(e=typeof navigator<`u`?navigator.userAgent:``){let t=Co.test(e),n=wo.test(e)&&!To.test(e);return t||n?`text`:`date`}function bo(e){let t=e===`en`?`en-GB`:e;return new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`,timeZone:`UTC`}).formatToParts(new Date(Date.UTC(2006,0,2))).map(e=>e.type===`day`?`dd`:e.type===`month`?`mm`:e.type===`year`?`yyyy`:e.value).join(``)}function xo(e,t){if(!So.exec(e))return e;let[n,r,i]=e.split(`-`);return bo(t).replace(`yyyy`,n).replace(`mm`,r).replace(`dd`,i)}var So,Co,wo,To;function Eo(){return(Eo=e((()=>{So=/^\d{4}-\d{2}-\d{2}$/,Co=/iP(hone|od|ad)/,wo=/Safari/,To=/(Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android)/})))()}var Do,G,Oo,ko,Ao,K,q,J;function jo(){return(jo=e((()=>{re(),ge(),w(),Me(),Ve(),rt(),at(),dt(),jn(),Nn(),Fn(),zn(),Ye(),Un(),Gn(),Vn(),st(),Yn(),O(),qn(),Zn(),Nr(),Br(),Di(),ca(),Ga(),c(),te(),le(),ve(),Xa(),ue(),xe(),ie(),fe(),Qa(),eo(),no(),io(),oo(),uo(),po(),ho(),_o(),Eo(),Do=yo(),G=`calendar`,Oo=`input`,ko=`toggle`,Ao=`wrapper`,K=`previous`,q={en:zr,nb:sa,sv:Wa,da:Mr,fi:Ei},J=class extends _e(ee){static{this.shadowRootOptions={...ee.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[de,so,co,lo,fo,mo,go]}get selectedDate(){return this.value?vo(this.value)??null:null}get month(){return ot(this.navigationDate)}#e;get weeks(){let e=this.month,t=this.navigationDate,n=it({start:ot(e),end:Bn(e)},{locale:this.locale}).map(e=>({start:e,end:ut(e,{locale:this.locale})})).map(e=>nt(e));if(Hn(t,e)){let e=Rn(t,{locale:this.locale})-1,r=Be(t,D(t,{locale:this.locale}));n[e][r]=t}return n}get#t(){return this.lang||h()||`en`}get#n(){return Do===`text`&&this.value?xo(this.value,this.#t):this.value||``}async#r(e){e.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#i(){this.navigationDate=je(this.month,1)}#a(){this.navigationDate=Xn(this.month,1)}#o;async#s(){await this.updateComplete,this.input.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}_onClickOutside(e){this.isCalendarOpen&&(this.contains(e.target)||(this.isCalendarOpen=!1))}#c(e){this.value=e.target.value}#l(){this.#g=!0,this.#b()}#u(e){e.preventDefault(),this.isCalendarOpen=!0}#d(e){if(e.key===` `)return this.#r(e);e.key===`,`&&e.preventDefault(),e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}async#f(e){let t=this.navigationDate,n=null;switch(e.key){case`ArrowUp`:n=Kn(t,7);break;case`ArrowLeft`:n=Kn(t,1);break;case`Home`:n=D(t,{locale:this.locale});break;case`PageUp`:n=Xn(t,1);break;case`ArrowDown`:n=C(t,7);break;case`ArrowRight`:n=C(t,1);break;case`End`:n=ut(t,{locale:this.locale});break;case`PageDown`:n=je(t,1);break;case`Escape`:this.isCalendarOpen=!1;break;case`Tab`:e.target.tagName===`TD`&&!e.shiftKey?(e.preventDefault(),this.previousMonthButton.focus()):e.target.id===K&&e.shiftKey&&(e.preventDefault(),(this.selectedCell||this.todayCell).focus())}n&&(e.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#p(e){let t=e.currentTarget.dataset.date;`key`in e?(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.value=t,this.input.value=this.#n,this.#b(),this.isCalendarOpen=!1,this.toggleButton.focus(),this.#s()):(this.value=t,this.input.value=this.#n,this.#b(),this.isCalendarOpen=!1,this.#s())}#m;#h;#g;constructor(){super(),this.required=!1,this.optional=!1,this.invalid=!1,this.disabled=!1,this.readonly=!1,this.headerFormat=`MMMM yyyy`,this.weekdayFormat=`EEEEEE`,this.dayFormat=`PPPP`,this.isCalendarOpen=!1,this.navigationDate=Jn(),this.locale=zr,this.#e=void 0,this.#o=``,this.#m=!1,this.#h=void 0,this.#g=!1,this.#y=e=>{e.preventDefault(),this.#g=!0,this.#b()},ae($a,ro,to,Za,ao);let e=h();e&&q[e]&&(this.locale=q[e]),this._onClickOutside=this._onClickOutside.bind(this)}resetFormControl(){this.value=this.#e,this.#g=!1,this.#v(),this.#b()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}get _error(){if(this.invalid&&this.helpText)return this.helpText}checkValidity(){return this.#b(),this.internals.checkValidity()}reportValidity(){return this.#g=!0,this.#b(),this.internals.checkValidity()}setCustomValidity(e){this.#o=e,e?(this.#b(),this.#_(e)):(this.#v(),this.#b())}#_(e){this.#m||(this.#h=this.helpText),this.#m=!0,this.invalid=!0,this.helpText=e}#v(){this.#m&&=(this.invalid=!1,this.helpText=this.#h,this.#h=void 0,!1)}#y;#b(){if(this.disabled){this.internals.setValidity({}),this.#v();return}let e={valueMissing:this.required&&!this.value,customError:this.#o!==``};if(Object.values(e).some(Boolean)){let t=e.customError?this.#o:this.input?.validationMessage||``;this.internals.setValidity(e,t,this.input),this.#g&&this.#_(t);return}this.internals.setValidity({}),this.#v()}connectedCallback(){super.connectedCallback(),this.#e=this.value,this.value!==void 0&&this.setValue(this.value),this.addEventListener(`invalid`,this.#y);let e=this.lang;if(e&&q[e]&&(this.locale=q[e]),this.value){let e=vo(this.value);e&&(this.navigationDate=e)}document.addEventListener(`mousedown`,this._onClickOutside),document.addEventListener(`touchend`,this._onClickOutside),document.addEventListener(`focusin`,this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.#y),document.removeEventListener(`mousedown`,this._onClickOutside),document.removeEventListener(`touchend`,this._onClickOutside),document.removeEventListener(`focusin`,this._onClickOutside)}updated(e){e.has(`value`)&&this.value!==void 0&&this.setValue(this.value),(e.has(`value`)||e.has(`required`)||e.has(`disabled`))&&this.#b()}firstUpdated(e){super.firstUpdated(e),this.#b()}render(){return p`
			<div class="w-datepicker-wrapper" id="${Ao}">
				<label class="w-datepicker-input-label" for="${Oo}">
					${this.label}
					${this.optional&&!this.required?p`
									<span>
										${m._({id:`datepicker.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
									</span>
								`:l}
					${this.tooltip?p`
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
								`:l}
				</label>
				<div class="w-datepicker-input-wrapper">
					<input
						id="${Oo}"
						type="${Do}"
						name="${_(this.name)}"
						placeholder="${_(Do===`text`?bo(this.#t):void 0)}"
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
						aria-label="${this.value?m.t({id:`datepicker.toggle.changeDate`,values:{currentDate:V(this.value,this.dayFormat)},message:`Change date, {currentDate}`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date`}):m.t({id:`datepicker.toggle.chooseDate`,message:`Choose date`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date`})}"
						aria-controls="${G}"
						class="w-datepicker-button"
						data-testid="${ko}"
						id="${ko}"
						variant="utilityQuiet"
						?disabled=${this.disabled||this.readonly}
						type="button"
						@click="${this.#r}"
					>
						<w-icon
							name="Calendar"
							size="small"
							locale="${h()}"
							class="flex"
						></w-icon>
					</w-button>
				</div>
				${this.helpText?p`<div id="help-text" class="help-text">${this.helpText}</div>`:l}
			</div>
			<div
				class="w-dropdown__popover w-dropdown__popover--open"
				style="${Ja({display:this.isCalendarOpen?void 0:`none`})}"
			>
				<div
					aria-label="${m.t({id:`datepicker.calendar.roleDescription`,message:`Date picker`,comment:`Used by screen readers to announce that the calendar element is a date picker.`})}"
					aria-modal="true"
					role="dialog"
					class="w-datepicker__calendar"
					data-testid="${G}"
					id="${G}"
					@keydown="${this.#f}"
				>
					<div class="w-datepicker__month-nav">
						<w-button
							aria-label="${m.t({id:`datepicker.calendar.previousMonth`,message:`Previous month`,comment:`Screen reader label for the previous month button.`})}"
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
								locale="${h()}"
								class="flex"
							></w-icon>
						</w-button>
						<div aria-live="polite" class="w-datepicker__month__nav__header">
							${V(this.month,this.headerFormat,{locale:this.locale})}
						</div>
						<w-button
							aria-label="${m.t({id:`datepicker.calendar.nextMonth`,message:`Next month`,comment:`Screen reader label for the next month button.`})}"
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
								locale="${h()}"
								class="flex"
							></w-icon>
						</w-button>
					</div>
					<div class="w-datepicker__month">
						<table class="w-datepicker__table" role="grid">
							<thead class="w-datepicker__weekdays">
								<tr>
									${this.weeks[0].map(e=>p`<th class="w-datepicker__weekday">
												${V(e,this.weekdayFormat,{locale:this.locale})}
											</th> `)}
								</tr>
							</thead>
							<tbody>
								${this.weeks.map(e=>p`<tr>
											${e.map(e=>{if(!Hn(this.month,e))return p`<td></td>`;let t=this.isDayDisabled?this.isDayDisabled(e):!1,n=!!this.selectedDate&&Je(e,this.selectedDate),r=e===this.navigationDate;return p`<td
													aria-current="${_(Wn(e)?`date`:void 0)}"
													aria-disabled="${t}"
													aria-label="${V(e,this.dayFormat,{locale:this.locale})}"
													aria-selected="${n}"
													class="${ce({"w-datepicker__day":!0,"w-datepicker__day--today":Wn(e),"w-datepicker__day--selected":n,"w-datepicker__day--disabled":t,"w-datepicker__day--navigation":r})}"
													data-navigation="${r}"
													data-date="${Mn(e,{representation:`date`})}"
													role="gridcell"
													tabindex="${r?0:-1}"
													@click="${t?void 0:this.#p}"
													@keydown="${t?void 0:this.#p}"
												>
													<div>${Pn(e)}</div>
												</td>`})}
										</tr>`)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		`}},f([d({reflect:!0})],J.prototype,`label`,void 0),f([d({type:Boolean,reflect:!0})],J.prototype,`required`,void 0),f([d({type:Boolean,reflect:!0})],J.prototype,`optional`,void 0),f([d({type:String,reflect:!0,attribute:`help-text`})],J.prototype,`helpText`,void 0),f([d({type:Boolean,reflect:!0})],J.prototype,`invalid`,void 0),f([d({type:String,reflect:!0})],J.prototype,`tooltip`,void 0),f([d({reflect:!0})],J.prototype,`lang`,void 0),f([d({reflect:!0})],J.prototype,`name`,void 0),f([d({reflect:!0})],J.prototype,`value`,void 0),f([d({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),f([d({type:Boolean,reflect:!0})],J.prototype,`readonly`,void 0),f([d({attribute:`header-format`})],J.prototype,`headerFormat`,void 0),f([d({attribute:`weekday-format`})],J.prototype,`weekdayFormat`,void 0),f([d({attribute:!1})],J.prototype,`isDayDisabled`,void 0),f([d({attribute:`day-format`})],J.prototype,`dayFormat`,void 0),f([i()],J.prototype,`isCalendarOpen`,void 0),f([i()],J.prototype,`navigationDate`,void 0),f([i()],J.prototype,`locale`,void 0),f([i()],J.prototype,`selectedDate`,null),f([i()],J.prototype,`month`,null),f([i()],J.prototype,`weeks`,null),f([g(`#${G}`)],J.prototype,`calendar`,void 0),f([g(`#${Oo}`,!0)],J.prototype,`input`,void 0),f([g(`#${ko}`,!0)],J.prototype,`toggleButton`,void 0),f([g(`#${Ao}`,!0)],J.prototype,`wrapper`,void 0),f([g(`#${K}`)],J.prototype,`previousMonthButton`,void 0),f([g(`[aria-current="date"]`)],J.prototype,`todayCell`,void 0),f([g(`[data-navigation="true"]`)],J.prototype,`selectedCell`,void 0),customElements.get(`w-datepicker`)||customElements.define(`w-datepicker`,J)})))()}var Mo=t({Default:()=>Y,DisableCalendarDates:()=>$,Invalid:()=>Z,WithHelpText:()=>X,WithTooltip:()=>Q,__namedExportsOrder:()=>zo,default:()=>Ro}),No,Po,Fo,Io,Lo,Ro,Y,X,Z,Q,$,zo;function Bo(){return(Bo=e((()=>{he(),oe(),c(),ye(),xe(),jo(),{events:Fo,args:Io,argTypes:Lo}=se(`w-datepicker`),Ro={title:`Forms/Datepicker`,render(e){return p(No||=be([`
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
        `]),pe(me(e)))},args:Io,argTypes:Lo,parameters:{actions:{handles:Fo}}},Y={args:{label:`Date`}},X={args:{label:`Date`,optional:!0,required:!1,helpText:`Help text is available`}},Z={args:{label:`Date`,invalid:!0,helpText:`Description of how to fix the problem`}},Q={args:{label:`Date`,optional:!0,required:!1,helpText:`Help text is available, but might not be enough, or the added context is not important enough that we use help-text`,tooltip:`This tooltip adds supplementary information`}},$={args:{label:`Date`},render(e){return p(Po||=be([`
            <!-- Workaround for Storybook's overflow hidden -->
            <div style="min-height: 400px">
                <w-datepicker `,`></w-datepicker>
            </div>
            <script type="module">
                const datePicker = document.querySelector("w-datepicker");
                // No working on Sundays!
                datePicker.isDayDisabled = (day) => day.getDay() === 0;
            <\/script>
        `]),pe(me(e)))}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},zo=[`Default`,`WithHelpText`,`Invalid`,`WithTooltip`,`DisableCalendarDates`]})))()}export{Mo as n,Bo as r,Y as t};