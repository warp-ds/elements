import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{a as n,c as r,g as i,h as a,l as o,n as s,p as c,s as l,t as u,y as d}from"./decorators-CPAv1fbk.js";import{i as ee,n as te,r as ne,t as re}from"./directive-DO4vjKj-.js";import{n as ie,t as ae}from"./class-map-ceDM4O4t.js";import{C as oe,N as f,P as se,S as ce,b as p,d as le,f as m,l as ue,p as de,u as fe,x as pe,y as me}from"./iframe-CS6EVC8h.js";import{a as he,n as ge,r as _e,t as ve}from"./utilities-DkJA1ACB.js";import{n as ye,t as be}from"./form-control-DGJoih1F.js";import{r as xe,t as Se}from"./if-defined-B0oikEng.js";import{t as Ce}from"./button-CbZ5oZgt.js";import{n as we,t as Te}from"./taggedTemplateLiteral-2dP4OITE.js";var Ee=t((()=>{})),De=t((()=>{})),Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,h=t((()=>{Oe=365.2425,ke=10**8*24*60*60*1e3,-ke,Ae=6048e5,je=864e5,Me=3600,Ne=Me*24,Ne*7,Pe=Ne*Oe,Fe=Pe/12,Fe*3,Ie=Symbol.for(`constructDateFrom`)}));function g(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&Ie in e?e[Ie](t):e instanceof Date?new e.constructor(t):new Date(t)}var _=t((()=>{h()}));function v(e,t){return g(t||e,e)}var y=t((()=>{_()}));function b(e,t,n){let r=v(e,n?.in);return isNaN(t)?g(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}var Le=t((()=>{_(),y()})),Re=t((()=>{})),ze=t((()=>{})),Be=t((()=>{})),Ve=t((()=>{}));function He(e,t,n){let r=v(e,n?.in);if(isNaN(t))return g(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=g(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}var Ue=t((()=>{_(),y()})),We=t((()=>{})),Ge=t((()=>{}));function Ke(e,t,n){return b(e,t*7,n)}var qe=t((()=>{Le()})),Je=t((()=>{})),Ye=t((()=>{})),Xe=t((()=>{})),Ze=t((()=>{})),Qe=t((()=>{})),$e=t((()=>{})),et=t((()=>{}));function tt(e){return g(e,Date.now())}var nt=t((()=>{_()})),rt=t((()=>{})),it=t((()=>{}));function at(e){let t=v(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),e-+n}var ot=t((()=>{y()}));function x(e,...t){let n=g.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}var S=t((()=>{_()}));function C(e,t){let n=v(e,t?.in);return n.setHours(0,0,0,0),n}var st=t((()=>{y()}));function ct(e,t,n){let[r,i]=x(n?.in,e,t),a=C(r),o=C(i),s=+a-at(a),c=+o-at(o);return Math.round((s-c)/je)}var lt=t((()=>{ot(),S(),h(),st()})),ut=t((()=>{})),dt=t((()=>{})),ft=t((()=>{})),pt=t((()=>{})),mt=t((()=>{})),ht=t((()=>{})),gt=t((()=>{})),_t=t((()=>{})),vt=t((()=>{})),yt=t((()=>{})),bt=t((()=>{})),xt=t((()=>{})),St=t((()=>{})),Ct=t((()=>{})),wt=t((()=>{})),Tt=t((()=>{}));function Et(e,t){let[n,r]=x(e,t.start,t.end);return{start:n,end:r}}var Dt=t((()=>{S()}));function Ot(e,t){let{start:n,end:r}=Et(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(g(n,o)),o.setDate(o.getDate()+s),o.setHours(0,0,0,0);return i?c.reverse():c}var kt=t((()=>{Dt(),_()})),At=t((()=>{})),jt=t((()=>{})),Mt=t((()=>{})),Nt=t((()=>{}));function w(){return Pt}var Pt,T=t((()=>{Pt={}}));function E(e,t){let n=w(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=v(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}var D=t((()=>{T(),y()}));function Ft(e,t){let{start:n,end:r}=Et(t?.in,e),i=+n>+r,a=E(i?r:n,t),o=E(i?n:r,t);a.setHours(15),o.setHours(15);let s=+o.getTime(),c=a,l=t?.step??1;if(!l)return[];l<0&&(l=-l,i=!i);let u=[];for(;+c<=s;)c.setHours(0),u.push(g(n,c)),c=Ke(c,l),c.setHours(15);return i?u.reverse():u}var It=t((()=>{Dt(),qe(),_(),D()})),Lt=t((()=>{})),Rt=t((()=>{})),zt=t((()=>{})),Bt=t((()=>{})),Vt=t((()=>{})),Ht=t((()=>{})),Ut=t((()=>{})),Wt=t((()=>{})),Gt=t((()=>{})),Kt=t((()=>{})),qt=t((()=>{})),Jt=t((()=>{})),Yt=t((()=>{})),Xt=t((()=>{})),Zt=t((()=>{}));function Qt(e,t){let n=w(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=v(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}var $t=t((()=>{T(),y()})),en=t((()=>{})),tn=t((()=>{})),nn,rn,an=t((()=>{nn={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},rn=(e,t,n)=>{let r,i=nn[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r}}));function O(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var k=t((()=>{})),on,sn,cn,ln,un=t((()=>{k(),on={full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},sn={full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},cn={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},ln={date:O({formats:on,defaultWidth:`full`}),time:O({formats:sn,defaultWidth:`full`}),dateTime:O({formats:cn,defaultWidth:`full`})}})),dn,fn,pn=t((()=>{dn={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},fn=(e,t,n,r)=>dn[e]}));function A(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var j=t((()=>{})),mn,hn,gn,_n,vn,yn,bn,xn,Sn=t((()=>{j(),mn={narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},hn={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},gn={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},_n={narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},vn={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},yn={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},bn=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},xn={ordinalNumber:bn,era:A({values:mn,defaultWidth:`wide`}),quarter:A({values:hn,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:A({values:gn,defaultWidth:`wide`}),day:A({values:_n,defaultWidth:`wide`}),dayPeriod:A({values:vn,defaultWidth:`wide`,formattingValues:yn,defaultFormattingWidth:`wide`})}}));function M(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?wn(s,e=>e.test(o)):Cn(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function Cn(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function wn(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}var N=t((()=>{}));function P(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var F=t((()=>{})),Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn=t((()=>{N(),F(),Tn=/^(\d+)(th|st|nd|rd)?/i,En=/\d+/i,Dn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},On={any:[/^b/i,/^(a|c)/i]},kn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},An={any:[/1/i,/2/i,/3/i,/4/i]},jn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Mn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Nn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Pn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Fn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},In={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ln={ordinalNumber:P({matchPattern:Tn,parsePattern:En,valueCallback:e=>parseInt(e,10)}),era:M({matchPatterns:Dn,defaultMatchWidth:`wide`,parsePatterns:On,defaultParseWidth:`any`}),quarter:M({matchPatterns:kn,defaultMatchWidth:`wide`,parsePatterns:An,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:M({matchPatterns:jn,defaultMatchWidth:`wide`,parsePatterns:Mn,defaultParseWidth:`any`}),day:M({matchPatterns:Nn,defaultMatchWidth:`wide`,parsePatterns:Pn,defaultParseWidth:`any`}),dayPeriod:M({matchPatterns:Fn,defaultMatchWidth:`any`,parsePatterns:In,defaultParseWidth:`any`})}})),zn,Bn=t((()=>{an(),un(),pn(),Sn(),Rn(),zn={code:`en-US`,formatDistance:rn,formatLong:ln,formatRelative:fn,localize:xn,match:Ln,options:{weekStartsOn:0,firstWeekContainsDate:1}}})),Vn=t((()=>{Bn()}));function Hn(e,t){let n=v(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}var Un=t((()=>{y()}));function Wn(e,t){let n=v(e,t?.in);return ct(n,Hn(n))+1}var Gn=t((()=>{lt(),Un(),y()}));function I(e,t){return E(e,{...t,weekStartsOn:1})}var L=t((()=>{D()}));function Kn(e,t){let n=v(e,t?.in),r=n.getFullYear(),i=g(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=I(i),o=g(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=I(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}var qn=t((()=>{_(),L(),y()}));function Jn(e,t){let n=Kn(e,t),r=g(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),I(r)}var Yn=t((()=>{_(),qn(),L()}));function Xn(e,t){let n=v(e,t?.in),r=I(n)-+Jn(n);return Math.round(r/Ae)+1}var Zn=t((()=>{h(),L(),Yn(),y()}));function Qn(e,t){let n=v(e,t?.in),r=n.getFullYear(),i=w(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=g(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=E(o,t),c=g(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=E(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}var $n=t((()=>{T(),_(),D(),y()}));function er(e,t){let n=w(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=Qn(e,t),a=g(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),E(a,t)}var tr=t((()=>{T(),_(),$n(),D()}));function nr(e,t){let n=v(e,t?.in),r=E(n,t)-+er(n,t);return Math.round(r/Ae)+1}var rr=t((()=>{h(),D(),tr(),y()}));function R(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var ir=t((()=>{})),z,ar=t((()=>{ir(),z={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return R(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):R(n+1,2)},d(e,t){return R(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return R(e.getHours()%12||12,t.length)},H(e,t){return R(e.getHours(),t.length)},m(e,t){return R(e.getMinutes(),t.length)},s(e,t){return R(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return R(Math.trunc(r*10**(n-3)),t.length)}}}));function or(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+R(a,2)}function sr(e,t){return e%60==0?(e>0?`-`:`+`)+R(Math.abs(e)/60,2):B(e,t)}function B(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=R(Math.trunc(r/60),2),a=R(r%60,2);return n+i+t+a}var V,cr,lr=t((()=>{Gn(),Zn(),qn(),rr(),$n(),ir(),ar(),V={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},cr={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return z.y(e,t)},Y:function(e,t,n,r){let i=Qn(e,r),a=i>0?i:1-i;return t===`YY`?R(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):R(a,t.length)},R:function(e,t){return R(Kn(e),t.length)},u:function(e,t){return R(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return R(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return R(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return z.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return R(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=nr(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):R(i,t.length)},I:function(e,t,n){let r=Xn(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):R(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):z.d(e,t)},D:function(e,t,n){let r=Wn(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):R(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return R(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return R(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return R(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?V.noon:r===0?V.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?V.evening:r>=12?V.afternoon:r>=4?V.morning:V.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return z.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):z.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):R(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):R(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):z.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):z.s(e,t)},S:function(e,t){return z.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return sr(r);case`XXXX`:case`XX`:return B(r);default:return B(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return sr(r);case`xxxx`:case`xx`:return B(r);default:return B(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+or(r,`:`);default:return`GMT`+B(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+or(r,`:`);default:return`GMT`+B(r,`:`)}},t:function(e,t,n){return R(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return R(+e,t.length)}}})),ur,dr,fr,pr,mr=t((()=>{ur=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},dr=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},fr=(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return ur(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`});break}return a.replace(`{{date}}`,ur(r,t)).replace(`{{time}}`,dr(i,t))},pr={p:dr,P:fr}}));function hr(e){return yr.test(e)}function gr(e){return br.test(e)}function _r(e,t,n){let r=vr(e,t,n);if(console.warn(r),xr.includes(e))throw RangeError(r)}function vr(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var yr,br,xr,Sr=t((()=>{yr=/^D+$/,br=/^Y+$/,xr=[`D`,`DD`,`YY`,`YYYY`]}));function Cr(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}var wr=t((()=>{}));function Tr(e){return!(!Cr(e)&&typeof e!=`number`||isNaN(+v(e)))}var Er=t((()=>{wr(),y()}));function H(e,t,n){let r=w(),i=n?.locale??r.locale??zn,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=v(e,n?.in);if(!Tr(s))throw RangeError(`Invalid time value`);let c=t.match(kr).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=pr[t];return n(e,i.formatLong)}return e}).join(``).match(Or).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:Dr(e)};if(cr[t])return{isToken:!0,value:e};if(t.match(Mr))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&gr(a)||!n?.useAdditionalDayOfYearTokens&&hr(a))&&_r(a,t,String(e));let o=cr[a[0]];return o(s,a,i.localize,l)}).join(``)}function Dr(e){let t=e.match(Ar);return t?t[1].replace(jr,`'`):e}var Or,kr,Ar,jr,Mr,Nr=t((()=>{Vn(),T(),lr(),mr(),Sr(),Er(),y(),Or=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,kr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ar=/^'([^]*?)'?$/,jr=/''/g,Mr=/[a-zA-Z]/})),Pr=t((()=>{})),Fr=t((()=>{})),Ir=t((()=>{})),Lr=t((()=>{})),Rr=t((()=>{}));function zr(e,t){let n=v(e,t?.in);if(isNaN(+n))throw RangeError(`Invalid time value`);let r=t?.format??`extended`,i=t?.representation??`complete`,a=``,o=``,s=r===`extended`?`-`:``,c=r===`extended`?`:`:``;if(i!==`time`){let e=R(n.getDate(),2),t=R(n.getMonth()+1,2);a=`${R(n.getFullYear(),4)}${s}${t}${s}${e}`}if(i!==`date`){let e=n.getTimezoneOffset();if(e!==0){let t=Math.abs(e),n=R(Math.trunc(t/60),2),r=R(t%60,2);o=`${e<0?`+`:`-`}${n}:${r}`}else o=`Z`;let t=R(n.getHours(),2),r=R(n.getMinutes(),2),i=R(n.getSeconds(),2),s=a===``?``:`T`,l=[t,r,i].join(c);a=`${a}${s}${l}${o}`}return a}var Br=t((()=>{ir(),y()})),Vr=t((()=>{})),Hr=t((()=>{})),Ur=t((()=>{})),Wr=t((()=>{})),Gr=t((()=>{})),Kr=t((()=>{}));function qr(e,t){return v(e,t?.in).getDate()}var Jr=t((()=>{y()}));function Yr(e,t){return v(e,t?.in).getDay()}var Xr=t((()=>{y()})),Zr=t((()=>{})),Qr=t((()=>{})),$r=t((()=>{})),ei=t((()=>{})),ti=t((()=>{})),ni=t((()=>{})),ri=t((()=>{})),ii=t((()=>{})),ai=t((()=>{})),oi=t((()=>{})),si=t((()=>{})),ci=t((()=>{})),li=t((()=>{})),ui=t((()=>{})),di=t((()=>{}));function fi(e,t){let n=v(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}var pi=t((()=>{y()}));function mi(e,t){let n=w(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=qr(v(e,t?.in));if(isNaN(i))return NaN;let a=r-Yr(fi(e,t));a<=0&&(a+=7);let o=i-a;return Math.ceil(o/7)+1}var hi=t((()=>{T(),Jr(),Xr(),pi(),y()})),gi=t((()=>{})),_i=t((()=>{})),vi=t((()=>{})),yi=t((()=>{})),bi=t((()=>{})),xi=t((()=>{})),Si=t((()=>{})),Ci=t((()=>{})),wi=t((()=>{})),Ti=t((()=>{})),Ei=t((()=>{})),Di=t((()=>{})),Oi=t((()=>{})),ki=t((()=>{})),Ai=t((()=>{})),ji=t((()=>{})),Mi=t((()=>{})),Ni=t((()=>{})),Pi=t((()=>{})),Fi=t((()=>{})),Ii=t((()=>{}));function Li(e,t,n){let[r,i]=x(n?.in,e,t);return+C(r)==+C(i)}var Ri=t((()=>{S(),st()})),zi=t((()=>{})),Bi=t((()=>{})),Vi=t((()=>{})),Hi=t((()=>{}));function Ui(e,t,n){let[r,i]=x(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}var Wi=t((()=>{S()})),Gi=t((()=>{})),Ki=t((()=>{})),qi=t((()=>{})),Ji=t((()=>{})),Yi=t((()=>{})),Xi=t((()=>{})),Zi=t((()=>{})),Qi=t((()=>{})),$i=t((()=>{})),ea=t((()=>{})),ta=t((()=>{})),na=t((()=>{})),ra=t((()=>{})),ia=t((()=>{})),aa=t((()=>{}));function oa(e,t){return Li(g(t?.in||e,e),tt(t?.in||e))}var sa=t((()=>{_(),nt(),Ri()})),ca=t((()=>{})),la=t((()=>{})),ua=t((()=>{})),da=t((()=>{})),fa=t((()=>{})),pa=t((()=>{})),ma=t((()=>{})),ha=t((()=>{})),ga=t((()=>{}));function _a(e,t){let n=v(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),v(n,t?.in)}var va=t((()=>{y()})),ya=t((()=>{})),ba=t((()=>{})),xa=t((()=>{})),Sa=t((()=>{})),Ca=t((()=>{})),wa=t((()=>{})),Ta=t((()=>{})),Ea=t((()=>{})),Da=t((()=>{})),Oa=t((()=>{})),ka=t((()=>{})),Aa=t((()=>{})),ja=t((()=>{})),Ma=t((()=>{})),Na=t((()=>{})),Pa=t((()=>{})),Fa=t((()=>{})),Ia=t((()=>{})),La=t((()=>{})),Ra=t((()=>{})),za=t((()=>{})),Ba=t((()=>{})),Va=t((()=>{})),Ha=t((()=>{})),Ua=t((()=>{})),Wa=t((()=>{})),Ga=t((()=>{})),Ka=t((()=>{})),qa=t((()=>{})),Ja=t((()=>{})),Ya=t((()=>{})),Xa=t((()=>{})),Za=t((()=>{})),Qa=t((()=>{})),$a=t((()=>{})),eo=t((()=>{})),to=t((()=>{})),no=t((()=>{})),ro=t((()=>{})),io=t((()=>{})),ao=t((()=>{})),oo=t((()=>{})),so=t((()=>{})),co=t((()=>{})),lo=t((()=>{})),uo=t((()=>{})),fo=t((()=>{})),po=t((()=>{})),mo=t((()=>{})),ho=t((()=>{})),go=t((()=>{})),_o=t((()=>{})),vo=t((()=>{})),yo=t((()=>{})),bo=t((()=>{})),xo=t((()=>{})),So=t((()=>{})),Co=t((()=>{})),wo=t((()=>{})),To=t((()=>{})),Eo=t((()=>{})),Do=t((()=>{})),Oo=t((()=>{}));function ko(e){return C(Date.now(),e)}var Ao=t((()=>{st()})),jo=t((()=>{})),Mo=t((()=>{})),No=t((()=>{})),Po=t((()=>{}));function Fo(e,t,n){return b(e,-t,n)}var Io=t((()=>{Le()})),Lo=t((()=>{})),Ro=t((()=>{})),zo=t((()=>{})),Bo=t((()=>{}));function Vo(e,t,n){return He(e,-t,n)}var Ho=t((()=>{Ue()})),Uo=t((()=>{})),Wo=t((()=>{})),Go=t((()=>{})),Ko=t((()=>{})),qo=t((()=>{})),Jo=t((()=>{})),Yo=t((()=>{})),Xo=t((()=>{})),Zo=t((()=>{})),Qo=t((()=>{Ee(),De(),Le(),Re(),ze(),Be(),Ve(),Ue(),We(),Ge(),qe(),Je(),Ye(),Xe(),Ze(),Qe(),$e(),et(),_(),nt(),rt(),it(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),kt(),At(),jt(),Mt(),Nt(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),$t(),en(),tn(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),Jr(),Xr(),Gn(),Zr(),Qr(),$r(),ei(),ti(),ni(),Zn(),qn(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),rr(),hi(),$n(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),wr(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Ri(),zi(),Bi(),Vi(),Hi(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),sa(),ca(),la(),Er(),ua(),da(),fa(),pa(),ma(),ha(),ga(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),st(),wo(),To(),L(),Yn(),Eo(),pi(),Do(),Oo(),Ao(),jo(),D(),tr(),Un(),Mo(),No(),Po(),Io(),Lo(),Ro(),zo(),Bo(),Ho(),Uo(),Wo(),Go(),Ko(),y(),qo(),Jo(),Yo(),Xo(),Zo()})),$o=t((()=>{})),es=t((()=>{})),ts=t((()=>{})),ns=t((()=>{})),rs=t((()=>{})),is=t((()=>{})),as=t((()=>{})),os=t((()=>{})),ss=t((()=>{})),cs=t((()=>{})),ls=t((()=>{})),us=t((()=>{})),ds=t((()=>{})),fs=t((()=>{})),ps=t((()=>{})),ms=t((()=>{})),hs=t((()=>{})),gs,_s,vs=t((()=>{gs={lessThanXSeconds:{one:`mindre end ét sekund`,other:`mindre end {{count}} sekunder`},xSeconds:{one:`1 sekund`,other:`{{count}} sekunder`},halfAMinute:`ét halvt minut`,lessThanXMinutes:{one:`mindre end ét minut`,other:`mindre end {{count}} minutter`},xMinutes:{one:`1 minut`,other:`{{count}} minutter`},aboutXHours:{one:`cirka 1 time`,other:`cirka {{count}} timer`},xHours:{one:`1 time`,other:`{{count}} timer`},xDays:{one:`1 dag`,other:`{{count}} dage`},aboutXWeeks:{one:`cirka 1 uge`,other:`cirka {{count}} uger`},xWeeks:{one:`1 uge`,other:`{{count}} uger`},aboutXMonths:{one:`cirka 1 måned`,other:`cirka {{count}} måneder`},xMonths:{one:`1 måned`,other:`{{count}} måneder`},aboutXYears:{one:`cirka 1 år`,other:`cirka {{count}} år`},xYears:{one:`1 år`,other:`{{count}} år`},overXYears:{one:`over 1 år`,other:`over {{count}} år`},almostXYears:{one:`næsten 1 år`,other:`næsten {{count}} år`}},_s=(e,t,n)=>{let r,i=gs[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})),ys,bs,xs,Ss,Cs=t((()=>{k(),ys={full:`EEEE 'den' d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd/MM/y`},bs={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},xs={full:`{{date}} 'kl'. {{time}}`,long:`{{date}} 'kl'. {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Ss={date:O({formats:ys,defaultWidth:`full`}),time:O({formats:bs,defaultWidth:`full`}),dateTime:O({formats:xs,defaultWidth:`full`})}})),ws,Ts,Es=t((()=>{ws={lastWeek:`'sidste' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`'på' eeee 'kl.' p`,other:`P`},Ts=(e,t,n,r)=>ws[e]})),Ds,Os,ks,As,js,Ms,Ns,Ps,Fs=t((()=>{j(),Ds={narrow:[`fvt`,`vt`],abbreviated:[`f.v.t.`,`v.t.`],wide:[`før vesterlandsk tidsregning`,`vesterlandsk tidsregning`]},Os={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`1. kvt.`,`2. kvt.`,`3. kvt.`,`4. kvt.`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},ks={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mar.`,`apr.`,`maj`,`jun.`,`jul.`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januar`,`februar`,`marts`,`april`,`maj`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`december`]},As={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn.`,`man.`,`tir.`,`ons.`,`tor.`,`fre.`,`lør.`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},js={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`}},Ms={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`}},Ns=(e,t)=>Number(e)+`.`,Ps={ordinalNumber:Ns,era:A({values:Ds,defaultWidth:`wide`}),quarter:A({values:Os,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:A({values:ks,defaultWidth:`wide`}),day:A({values:As,defaultWidth:`wide`}),dayPeriod:A({values:js,defaultWidth:`wide`,formattingValues:Ms,defaultFormattingWidth:`wide`})}})),Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys=t((()=>{N(),F(),Is=/^(\d+)(\.)?/i,Ls=/\d+/i,Rs={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},zs={any:[/^f/i,/^(v|e)/i]},Bs={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},Vs={any:[/1/i,/2/i,/3/i,/4/i]},Hs={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},Us={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ws={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Gs={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ks={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},qs={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Js={ordinalNumber:P({matchPattern:Is,parsePattern:Ls,valueCallback:e=>parseInt(e,10)}),era:M({matchPatterns:Rs,defaultMatchWidth:`wide`,parsePatterns:zs,defaultParseWidth:`any`}),quarter:M({matchPatterns:Bs,defaultMatchWidth:`wide`,parsePatterns:Vs,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:M({matchPatterns:Hs,defaultMatchWidth:`wide`,parsePatterns:Us,defaultParseWidth:`any`}),day:M({matchPatterns:Ws,defaultMatchWidth:`wide`,parsePatterns:Gs,defaultParseWidth:`any`}),dayPeriod:M({matchPatterns:Ks,defaultMatchWidth:`any`,parsePatterns:qs,defaultParseWidth:`any`})}})),Xs,Zs=t((()=>{vs(),Cs(),Es(),Fs(),Ys(),Xs={code:`da`,formatDistance:_s,formatLong:Ss,formatRelative:Ts,localize:Ps,match:Js,options:{weekStartsOn:1,firstWeekContainsDate:4}}})),Qs=t((()=>{})),$s=t((()=>{})),ec=t((()=>{})),tc=t((()=>{})),nc=t((()=>{})),rc,ic,ac,oc,sc=t((()=>{k(),rc={full:`EEEE, d MMMM yyyy`,long:`d MMMM yyyy`,medium:`d MMM yyyy`,short:`dd/MM/yyyy`},ic={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},ac={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},oc={date:O({formats:rc,defaultWidth:`full`}),time:O({formats:ic,defaultWidth:`full`}),dateTime:O({formats:ac,defaultWidth:`full`})}})),cc,lc=t((()=>{an(),pn(),Sn(),Rn(),sc(),cc={code:`en-GB`,formatDistance:rn,formatLong:oc,formatRelative:fn,localize:xn,match:Ln,options:{weekStartsOn:1,firstWeekContainsDate:4}}})),uc=t((()=>{})),dc=t((()=>{})),fc=t((()=>{})),pc=t((()=>{})),mc=t((()=>{})),hc=t((()=>{})),gc=t((()=>{})),_c=t((()=>{})),vc=t((()=>{}));function yc(e){return e.replace(/sekuntia?/,`sekunnin`)}function bc(e){return e.replace(/minuuttia?/,`minuutin`)}function xc(e){return e.replace(/tuntia?/,`tunnin`)}function Sc(e){return e.replace(/päivää?/,`päivän`)}function Cc(e){return e.replace(/(viikko|viikkoa)/,`viikon`)}function wc(e){return e.replace(/(kuukausi|kuukautta)/,`kuukauden`)}function U(e){return e.replace(/(vuosi|vuotta)/,`vuoden`)}var Tc,Ec,Dc=t((()=>{Tc={lessThanXSeconds:{one:`alle sekunti`,other:`alle {{count}} sekuntia`,futureTense:yc},xSeconds:{one:`sekunti`,other:`{{count}} sekuntia`,futureTense:yc},halfAMinute:{one:`puoli minuuttia`,other:`puoli minuuttia`,futureTense:e=>`puolen minuutin`},lessThanXMinutes:{one:`alle minuutti`,other:`alle {{count}} minuuttia`,futureTense:bc},xMinutes:{one:`minuutti`,other:`{{count}} minuuttia`,futureTense:bc},aboutXHours:{one:`noin tunti`,other:`noin {{count}} tuntia`,futureTense:xc},xHours:{one:`tunti`,other:`{{count}} tuntia`,futureTense:xc},xDays:{one:`päivä`,other:`{{count}} päivää`,futureTense:Sc},aboutXWeeks:{one:`noin viikko`,other:`noin {{count}} viikkoa`,futureTense:Cc},xWeeks:{one:`viikko`,other:`{{count}} viikkoa`,futureTense:Cc},aboutXMonths:{one:`noin kuukausi`,other:`noin {{count}} kuukautta`,futureTense:wc},xMonths:{one:`kuukausi`,other:`{{count}} kuukautta`,futureTense:wc},aboutXYears:{one:`noin vuosi`,other:`noin {{count}} vuotta`,futureTense:U},xYears:{one:`vuosi`,other:`{{count}} vuotta`,futureTense:U},overXYears:{one:`yli vuosi`,other:`yli {{count}} vuotta`,futureTense:U},almostXYears:{one:`lähes vuosi`,other:`lähes {{count}} vuotta`,futureTense:U}},Ec=(e,t,n)=>{let r=Tc[e],i=t===1?r.one:r.other.replace(`{{count}}`,String(t));return n?.addSuffix?n.comparison&&n.comparison>0?r.futureTense(i)+` kuluttua`:i+` sitten`:i}})),Oc,kc,Ac,jc,Mc=t((()=>{k(),Oc={full:`eeee d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`d.M.y`},kc={full:`HH.mm.ss zzzz`,long:`HH.mm.ss z`,medium:`HH.mm.ss`,short:`HH.mm`},Ac={full:`{{date}} 'klo' {{time}}`,long:`{{date}} 'klo' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},jc={date:O({formats:Oc,defaultWidth:`full`}),time:O({formats:kc,defaultWidth:`full`}),dateTime:O({formats:Ac,defaultWidth:`full`})}})),Nc,Pc,Fc=t((()=>{Nc={lastWeek:`'viime' eeee 'klo' p`,yesterday:`'eilen klo' p`,today:`'tänään klo' p`,tomorrow:`'huomenna klo' p`,nextWeek:`'ensi' eeee 'klo' p`,other:`P`},Pc=(e,t,n,r)=>Nc[e]})),Ic,Lc,W,Rc,G,zc,Bc,Vc,Hc,Uc=t((()=>{j(),Ic={narrow:[`eaa.`,`jaa.`],abbreviated:[`eaa.`,`jaa.`],wide:[`ennen ajanlaskun alkua`,`jälkeen ajanlaskun alun`]},Lc={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartaali`,`2. kvartaali`,`3. kvartaali`,`4. kvartaali`]},W={narrow:[`T`,`H`,`M`,`H`,`T`,`K`,`H`,`E`,`S`,`L`,`M`,`J`],abbreviated:[`tammi`,`helmi`,`maalis`,`huhti`,`touko`,`kesä`,`heinä`,`elo`,`syys`,`loka`,`marras`,`joulu`],wide:[`tammikuu`,`helmikuu`,`maaliskuu`,`huhtikuu`,`toukokuu`,`kesäkuu`,`heinäkuu`,`elokuu`,`syyskuu`,`lokakuu`,`marraskuu`,`joulukuu`]},Rc={narrow:W.narrow,abbreviated:W.abbreviated,wide:[`tammikuuta`,`helmikuuta`,`maaliskuuta`,`huhtikuuta`,`toukokuuta`,`kesäkuuta`,`heinäkuuta`,`elokuuta`,`syyskuuta`,`lokakuuta`,`marraskuuta`,`joulukuuta`]},G={narrow:[`S`,`M`,`T`,`K`,`T`,`P`,`L`],short:[`su`,`ma`,`ti`,`ke`,`to`,`pe`,`la`],abbreviated:[`sunn.`,`maan.`,`tiis.`,`kesk.`,`torst.`,`perj.`,`la`],wide:[`sunnuntai`,`maanantai`,`tiistai`,`keskiviikko`,`torstai`,`perjantai`,`lauantai`]},zc={narrow:G.narrow,short:G.short,abbreviated:G.abbreviated,wide:[`sunnuntaina`,`maanantaina`,`tiistaina`,`keskiviikkona`,`torstaina`,`perjantaina`,`lauantaina`]},Bc={narrow:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},abbreviated:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},wide:{am:`ap`,pm:`ip`,midnight:`keskiyöllä`,noon:`keskipäivällä`,morning:`aamupäivällä`,afternoon:`iltapäivällä`,evening:`illalla`,night:`yöllä`}},Vc=(e,t)=>Number(e)+`.`,Hc={ordinalNumber:Vc,era:A({values:Ic,defaultWidth:`wide`}),quarter:A({values:Lc,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:A({values:W,defaultWidth:`wide`,formattingValues:Rc,defaultFormattingWidth:`wide`}),day:A({values:G,defaultWidth:`wide`,formattingValues:zc,defaultFormattingWidth:`wide`}),dayPeriod:A({values:Bc,defaultWidth:`wide`})}})),Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl=t((()=>{N(),F(),Wc=/^(\d+)(\.)/i,Gc=/\d+/i,Kc={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},qc={any:[/^e/i,/^j/i]},Jc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},Yc={any:[/1/i,/2/i,/3/i,/4/i]},Xc={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},Zc={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},Qc={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},$c={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},el={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},tl={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},nl={ordinalNumber:P({matchPattern:Wc,parsePattern:Gc,valueCallback:e=>parseInt(e,10)}),era:M({matchPatterns:Kc,defaultMatchWidth:`wide`,parsePatterns:qc,defaultParseWidth:`any`}),quarter:M({matchPatterns:Jc,defaultMatchWidth:`wide`,parsePatterns:Yc,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:M({matchPatterns:Xc,defaultMatchWidth:`wide`,parsePatterns:Zc,defaultParseWidth:`any`}),day:M({matchPatterns:Qc,defaultMatchWidth:`wide`,parsePatterns:$c,defaultParseWidth:`any`}),dayPeriod:M({matchPatterns:el,defaultMatchWidth:`any`,parsePatterns:tl,defaultParseWidth:`any`})}})),il,al=t((()=>{Dc(),Mc(),Fc(),Uc(),rl(),il={code:`fi`,formatDistance:Ec,formatLong:jc,formatRelative:Pc,localize:Hc,match:nl,options:{weekStartsOn:1,firstWeekContainsDate:4}}})),ol=t((()=>{})),sl=t((()=>{})),cl=t((()=>{})),ll=t((()=>{})),ul=t((()=>{})),dl=t((()=>{})),fl=t((()=>{})),pl=t((()=>{})),ml=t((()=>{})),hl=t((()=>{})),gl=t((()=>{})),_l=t((()=>{})),vl=t((()=>{})),yl=t((()=>{})),bl=t((()=>{})),xl=t((()=>{})),Sl=t((()=>{})),Cl=t((()=>{})),wl=t((()=>{})),Tl=t((()=>{})),El=t((()=>{})),Dl=t((()=>{})),Ol=t((()=>{})),kl=t((()=>{})),Al=t((()=>{})),jl=t((()=>{})),Ml=t((()=>{})),Nl=t((()=>{})),Pl=t((()=>{})),Fl=t((()=>{})),Il=t((()=>{})),Ll,Rl,zl=t((()=>{Ll={lessThanXSeconds:{one:`mindre enn ett sekund`,other:`mindre enn {{count}} sekunder`},xSeconds:{one:`ett sekund`,other:`{{count}} sekunder`},halfAMinute:`et halvt minutt`,lessThanXMinutes:{one:`mindre enn ett minutt`,other:`mindre enn {{count}} minutter`},xMinutes:{one:`ett minutt`,other:`{{count}} minutter`},aboutXHours:{one:`omtrent en time`,other:`omtrent {{count}} timer`},xHours:{one:`en time`,other:`{{count}} timer`},xDays:{one:`en dag`,other:`{{count}} dager`},aboutXWeeks:{one:`omtrent en uke`,other:`omtrent {{count}} uker`},xWeeks:{one:`en uke`,other:`{{count}} uker`},aboutXMonths:{one:`omtrent en måned`,other:`omtrent {{count}} måneder`},xMonths:{one:`en måned`,other:`{{count}} måneder`},aboutXYears:{one:`omtrent ett år`,other:`omtrent {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`over ett år`,other:`over {{count}} år`},almostXYears:{one:`nesten ett år`,other:`nesten {{count}} år`}},Rl=(e,t,n)=>{let r,i=Ll[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})),Bl,Vl,Hl,Ul,Wl=t((()=>{k(),Bl={full:`EEEE d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd.MM.y`},Vl={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Hl={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Ul={date:O({formats:Bl,defaultWidth:`full`}),time:O({formats:Vl,defaultWidth:`full`}),dateTime:O({formats:Hl,defaultWidth:`full`})}})),Gl,Kl,ql=t((()=>{Gl={lastWeek:`'forrige' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Kl=(e,t,n,r)=>Gl[e]})),Jl,Yl,Xl,Zl,Ql,$l,eu,tu=t((()=>{j(),Jl={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`før Kristus`,`etter Kristus`]},Yl={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},Xl={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`mai`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`des.`],wide:[`januar`,`februar`,`mars`,`april`,`mai`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`desember`]},Zl={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn`,`man`,`tir`,`ons`,`tor`,`fre`,`lør`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},Ql={narrow:{am:`a`,pm:`p`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},abbreviated:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morgenen`,afternoon:`på ettermiddagen`,evening:`på kvelden`,night:`på natten`}},$l=(e,t)=>Number(e)+`.`,eu={ordinalNumber:$l,era:A({values:Jl,defaultWidth:`wide`}),quarter:A({values:Yl,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:A({values:Xl,defaultWidth:`wide`}),day:A({values:Zl,defaultWidth:`wide`}),dayPeriod:A({values:Ql,defaultWidth:`wide`})}})),nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu=t((()=>{N(),F(),nu=/^(\d+)\.?/i,ru=/\d+/i,iu={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},au={any:[/^f/i,/^e/i]},ou={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},su={any:[/1/i,/2/i,/3/i,/4/i]},cu={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},lu={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},uu={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},du={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},fu={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},pu={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},mu={ordinalNumber:P({matchPattern:nu,parsePattern:ru,valueCallback:e=>parseInt(e,10)}),era:M({matchPatterns:iu,defaultMatchWidth:`wide`,parsePatterns:au,defaultParseWidth:`any`}),quarter:M({matchPatterns:ou,defaultMatchWidth:`wide`,parsePatterns:su,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:M({matchPatterns:cu,defaultMatchWidth:`wide`,parsePatterns:lu,defaultParseWidth:`any`}),day:M({matchPatterns:uu,defaultMatchWidth:`wide`,parsePatterns:du,defaultParseWidth:`any`}),dayPeriod:M({matchPatterns:fu,defaultMatchWidth:`any`,parsePatterns:pu,defaultParseWidth:`any`})}})),gu,_u=t((()=>{zl(),Wl(),ql(),tu(),hu(),gu={code:`nb`,formatDistance:Rl,formatLong:Ul,formatRelative:Kl,localize:eu,match:mu,options:{weekStartsOn:1,firstWeekContainsDate:4}}})),vu=t((()=>{})),yu=t((()=>{})),bu=t((()=>{})),xu=t((()=>{})),Su=t((()=>{})),Cu=t((()=>{})),wu=t((()=>{})),Tu=t((()=>{})),Eu=t((()=>{})),Du=t((()=>{})),Ou=t((()=>{})),ku=t((()=>{})),Au=t((()=>{})),ju=t((()=>{})),Mu=t((()=>{})),Nu,Pu,Fu,Iu=t((()=>{Nu={lessThanXSeconds:{one:`mindre än en sekund`,other:`mindre än {{count}} sekunder`},xSeconds:{one:`en sekund`,other:`{{count}} sekunder`},halfAMinute:`en halv minut`,lessThanXMinutes:{one:`mindre än en minut`,other:`mindre än {{count}} minuter`},xMinutes:{one:`en minut`,other:`{{count}} minuter`},aboutXHours:{one:`ungefär en timme`,other:`ungefär {{count}} timmar`},xHours:{one:`en timme`,other:`{{count}} timmar`},xDays:{one:`en dag`,other:`{{count}} dagar`},aboutXWeeks:{one:`ungefär en vecka`,other:`ungefär {{count}} veckor`},xWeeks:{one:`en vecka`,other:`{{count}} veckor`},aboutXMonths:{one:`ungefär en månad`,other:`ungefär {{count}} månader`},xMonths:{one:`en månad`,other:`{{count}} månader`},aboutXYears:{one:`ungefär ett år`,other:`ungefär {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`över ett år`,other:`över {{count}} år`},almostXYears:{one:`nästan ett år`,other:`nästan {{count}} år`}},Pu=[`noll`,`en`,`två`,`tre`,`fyra`,`fem`,`sex`,`sju`,`åtta`,`nio`,`tio`,`elva`,`tolv`],Fu=(e,t,n)=>{let r,i=Nu[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t<13?Pu[t]:String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` sedan`:r}})),Lu,Ru,zu,Bu,Vu=t((()=>{k(),Lu={full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`y-MM-dd`},Ru={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},zu={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Bu={date:O({formats:Lu,defaultWidth:`full`}),time:O({formats:Ru,defaultWidth:`full`}),dateTime:O({formats:zu,defaultWidth:`full`})}})),Hu,Uu,Wu=t((()=>{Hu={lastWeek:`'i' EEEE's kl.' p`,yesterday:`'igår kl.' p`,today:`'idag kl.' p`,tomorrow:`'imorgon kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Uu=(e,t,n,r)=>Hu[e]})),Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u=t((()=>{j(),Gu={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`före Kristus`,`efter Kristus`]},Ku={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1:a kvartalet`,`2:a kvartalet`,`3:e kvartalet`,`4:e kvartalet`]},qu={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`maj`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januari`,`februari`,`mars`,`april`,`maj`,`juni`,`juli`,`augusti`,`september`,`oktober`,`november`,`december`]},Ju={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sö`,`må`,`ti`,`on`,`to`,`fr`,`lö`],abbreviated:[`sön`,`mån`,`tis`,`ons`,`tors`,`fre`,`lör`],wide:[`söndag`,`måndag`,`tisdag`,`onsdag`,`torsdag`,`fredag`,`lördag`]},Yu={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`morg.`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},abbreviated:{am:`f.m.`,pm:`e.m.`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},wide:{am:`förmiddag`,pm:`eftermiddag`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`eftermiddag`,evening:`kväll`,night:`natt`}},Xu={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},abbreviated:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},wide:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morgonen`,afternoon:`på eftermiddagen`,evening:`på kvällen`,night:`på natten`}},Zu=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+`:a`}return n+`:e`},Qu={ordinalNumber:Zu,era:A({values:Gu,defaultWidth:`wide`}),quarter:A({values:Ku,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:A({values:qu,defaultWidth:`wide`}),day:A({values:Ju,defaultWidth:`wide`}),dayPeriod:A({values:Yu,defaultWidth:`wide`,formattingValues:Xu,defaultFormattingWidth:`wide`})}})),ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd=t((()=>{N(),F(),ed=/^(\d+)(:a|:e)?/i,td=/\d+/i,nd={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},rd={any:[/^f/i,/^[ev]/i]},id={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},ad={any:[/1/i,/2/i,/3/i,/4/i]},od={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},sd={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},cd={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},ld={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},ud={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},dd={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},fd={ordinalNumber:P({matchPattern:ed,parsePattern:td,valueCallback:e=>parseInt(e,10)}),era:M({matchPatterns:nd,defaultMatchWidth:`wide`,parsePatterns:rd,defaultParseWidth:`any`}),quarter:M({matchPatterns:id,defaultMatchWidth:`wide`,parsePatterns:ad,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:M({matchPatterns:od,defaultMatchWidth:`wide`,parsePatterns:sd,defaultParseWidth:`any`}),day:M({matchPatterns:cd,defaultMatchWidth:`wide`,parsePatterns:ld,defaultParseWidth:`any`}),dayPeriod:M({matchPatterns:ud,defaultMatchWidth:`any`,parsePatterns:dd,defaultParseWidth:`any`})}})),md,hd=t((()=>{Iu(),Vu(),Wu(),$u(),pd(),md={code:`sv`,formatDistance:Fu,formatLong:Bu,formatRelative:Uu,localize:Qu,match:fd,options:{weekStartsOn:1,firstWeekContainsDate:4}}})),gd=t((()=>{})),_d=t((()=>{})),vd=t((()=>{})),yd=t((()=>{})),bd=t((()=>{})),xd=t((()=>{})),Sd=t((()=>{})),Cd=t((()=>{})),wd=t((()=>{})),Td=t((()=>{})),Ed=t((()=>{})),Dd=t((()=>{})),Od=t((()=>{$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),Zs(),Qs(),$s(),ec(),tc(),nc(),lc(),uc(),dc(),fc(),Bn(),pc(),mc(),hc(),gc(),_c(),vc(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd()})),kd,Ad,jd,Md=t((()=>{i(),ne(),kd=`important`,Ad=` !important`,jd=re(class extends te{constructor(e){if(super(e),e.type!==ee.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ad);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?kd:``):n[e]=r}}return c}})})),Nd=t((()=>{Md()})),Pd,Fd=t((()=>{Pd=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})),Id,Ld=t((()=>{Id=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})),Rd,zd=t((()=>{Rd=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})),Bd,Vd=t((()=>{Bd=JSON.parse(`{"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"]}`)})),Hd,Ud=t((()=>{Hd=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})),Wd,Gd=t((()=>{r(),Wd=d`
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
`})),Kd,qd=t((()=>{r(),Kd=d`
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
`})),Jd,Yd=t((()=>{r(),Jd=d`
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
`})),Xd,Zd=t((()=>{r(),Xd=d`
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
`}));function Qd(e){if(typeof e!=`string`)return null;let t=e;nf.test(e)&&(t=`${e}T00:00:00Z`);let n=Date.parse(t);return Number.isNaN(n)?null:new Date(n)}function $d(e=typeof navigator<`u`?navigator.userAgent:``){let t=rf.test(e),n=af.test(e)&&!of.test(e);return t||n?`text`:`date`}function ef(e){let t=e===`en`?`en-GB`:e;return new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`,timeZone:`UTC`}).formatToParts(new Date(Date.UTC(2006,0,2))).map(e=>e.type===`day`?`dd`:e.type===`month`?`mm`:e.type===`year`?`yyyy`:e.value).join(``)}function tf(e,t){if(!nf.exec(e))return e;let[n,r,i]=e.split(`-`);return ef(t).replace(`yyyy`,n).replace(`mm`,r).replace(`dd`,i)}var nf,rf,af,of,sf=t((()=>{nf=/^\d{4}-\d{2}-\d{2}$/,rf=/iP(hone|od|ad)/,af=/Safari/,of=/(Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android)/})),K,q,J,cf,lf,Y,X,Z,uf=t((()=>{se(),be(),Qo(),Od(),r(),u(),ae(),Se(),Nd(),le(),pe(),ue(),Fd(),Ld(),zd(),Vd(),Ud(),Gd(),qd(),Yd(),Zd(),sf(),de(),K=$d(),q=`calendar`,J=`input`,cf=`toggle`,lf=`wrapper`,Y=`previous`,X={en:cc,nb:gu,sv:md,da:Xs,fi:il},Z=class extends ye(o){static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[fe,Wd,Kd,Jd,Xd]}get selectedDate(){return this.value?Qd(this.value)??null:null}get month(){return fi(this.navigationDate)}#e;get weeks(){let e=this.month,t=this.navigationDate,n=Ft({start:fi(e),end:_a(e)},{locale:this.locale}).map(e=>({start:e,end:Qt(e,{locale:this.locale})})).map(e=>Ot(e));if(Ui(t,e)){let e=mi(t,{locale:this.locale})-1,r=ct(t,E(t,{locale:this.locale}));n[e][r]=t}return n}get#t(){return this.lang||p()||`en`}get#n(){return K===`text`&&this.value?tf(this.value,this.#t):this.value||``}resetFormControl(){this.value=this.#e}async#r(e){e.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#i(){this.navigationDate=He(this.month,1)}#a(){this.navigationDate=Vo(this.month,1)}async#o(){await this.updateComplete,this.input.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}_onClickOutside(e){this.isCalendarOpen&&(this.contains(e.target)||(this.isCalendarOpen=!1))}#s(e){this.value=e.target.value}#c(e){e.preventDefault(),this.isCalendarOpen=!0}#l(e){if(e.key===` `)return this.#r(e);e.key===`,`&&e.preventDefault(),e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}async#u(e){let t=this.navigationDate,n=null;switch(e.key){case`ArrowUp`:n=Fo(t,7);break;case`ArrowLeft`:n=Fo(t,1);break;case`Home`:n=E(t,{locale:this.locale});break;case`PageUp`:n=Vo(t,1);break;case`ArrowDown`:n=b(t,7);break;case`ArrowRight`:n=b(t,1);break;case`End`:n=Qt(t,{locale:this.locale});break;case`PageDown`:n=He(t,1);break;case`Escape`:this.isCalendarOpen=!1;break;case`Tab`:e.target.tagName===`TD`&&!e.shiftKey?(e.preventDefault(),this.previousMonthButton.focus()):e.target.id===Y&&e.shiftKey&&(e.preventDefault(),(this.selectedCell||this.todayCell).focus());break}n&&(e.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#d(e){let t=e.currentTarget.dataset.date;`key`in e?(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.value=t,this.input.value=this.#n,this.isCalendarOpen=!1,this.toggleButton.focus(),this.#o()):(this.value=t,this.input.value=this.#n,this.isCalendarOpen=!1,this.#o())}constructor(){super(),this.headerFormat=`MMMM yyyy`,this.weekdayFormat=`EEEEEE`,this.dayFormat=`PPPP`,this.isCalendarOpen=!1,this.navigationDate=ko(),this.locale=cc,this.#e=void 0,me(Id,Bd,Rd,Pd,Hd);let e=p();e&&X[e]&&(this.locale=X[e]),this._onClickOutside=this._onClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),this.#e=this.value;let e=this.lang;if(e&&X[e]&&(this.locale=X[e]),this.value){let e=Qd(this.value);e&&(this.navigationDate=e)}document.addEventListener(`mousedown`,this._onClickOutside),document.addEventListener(`touchend`,this._onClickOutside),document.addEventListener(`focusin`,this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._onClickOutside),document.removeEventListener(`touchend`,this._onClickOutside),document.removeEventListener(`focusin`,this._onClickOutside)}updated(e){e.has(`value`)&&this.setValue(this.value)}render(){return a`
			<div class="w-datepicker-wrapper" id="${lf}">
				<label class="w-datepicker-input-label" for="${J}"
					>${this.label}</label
				>
				<div class="w-datepicker-input-wrapper">
					<input
						id="${J}"
						type="${K}"
						name="${xe(this.name)}"
						placeholder="${xe(K===`text`?ef(this.#t):void 0)}"
						.value="${this.#n}"
						class="w-datepicker-input"
						@click="${this.#c}"
						@input="${this.#s}"
						@keydown="${this.#l}"
					/>
					<w-button
						aria-label="${this.value?f.t({id:`datepicker.toggle.changeDate`,values:{currentDate:H(this.value,this.dayFormat)},message:`Change date, {currentDate}`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date`}):f.t({id:`datepicker.toggle.chooseDate`,message:`Choose date`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date`})}"
						aria-controls="${q}"
						class="w-datepicker-button"
						data-testid="${cf}"
						id="${cf}"
						variant="utilityQuiet"
						type="button"
						@click="${this.#r}"
					>
						<w-icon
							name="Calendar"
							size="small"
							locale="${p()}"
							class="flex"
						></w-icon>
					</w-button>
				</div>
			</div>
			<div
				class="w-dropdown__popover w-dropdown__popover--open"
				style="${jd({display:this.isCalendarOpen?void 0:`none`})}"
			>
				<div
					aria-label="${f.t({id:`datepicker.calendar.roleDescription`,message:`Date picker`,comment:`Used by screen readers to announce that the calendar element is a date picker.`})}"
					aria-modal="true"
					role="dialog"
					class="w-datepicker__calendar"
					data-testid="${q}"
					id="${q}"
					@keydown="${this.#u}"
				>
					<div class="w-datepicker__month-nav">
						<w-button
							aria-label="${f.t({id:`datepicker.calendar.previousMonth`,message:`Previous month`,comment:`Screen reader label for the previous month button.`})}"
							class="w-datepicker__month__nav__button"
							id="${Y}"
							data-testid="${Y}"
							variant="utility"
							quiet
							small
							@click="${this.#a}"
						>
							<w-icon
								name="ChevronLeft"
								size="small"
								locale="${p()}"
								class="flex"
							></w-icon>
						</w-button>
						<div aria-live="polite" class="w-datepicker__month__nav__header">
							${H(this.month,this.headerFormat,{locale:this.locale})}
						</div>
						<w-button
							aria-label="${f.t({id:`datepicker.calendar.nextMonth`,message:`Next month`,comment:`Screen reader label for the next month button.`})}"
							class="w-datepicker__month__nav__button"
							data-testid="${q}-next"
							variant="utility"
							quiet
							small
							@click="${this.#i}"
						>
							<w-icon
								name="ChevronRight"
								size="small"
								locale="${p()}"
								class="flex"
							></w-icon>
						</w-button>
					</div>
					<div class="w-datepicker__month">
						<table class="w-datepicker__table" role="grid">
							<thead class="w-datepicker__weekdays">
								<tr>
									${this.weeks[0].map(e=>a`<th class="w-datepicker__weekday">
												${H(e,this.weekdayFormat,{locale:this.locale})}
											</th> `)}
								</tr>
							</thead>
							<tbody>
								${this.weeks.map(e=>a`<tr>
											${e.map(e=>{if(!Ui(this.month,e))return a`<td></td>`;let t=this.isDayDisabled?this.isDayDisabled(e):!1,n=!!this.selectedDate&&Li(e,this.selectedDate),r=e===this.navigationDate;return a`<td
													aria-current="${xe(oa(e)?`date`:void 0)}"
													aria-disabled="${t}"
													aria-label="${H(e,this.dayFormat,{locale:this.locale})}"
													aria-selected="${n}"
													class="${ie({"w-datepicker__day":!0,"w-datepicker__day--today":oa(e),"w-datepicker__day--selected":n,"w-datepicker__day--disabled":t,"w-datepicker__day--navigation":r})}"
													data-navigation="${r}"
													data-date="${zr(e,{representation:`date`})}"
													role="gridcell"
													tabindex="${r?0:-1}"
													@click="${t?void 0:this.#d}"
													@keydown="${t?void 0:this.#d}"
												>
													<div>${qr(e)}</div>
												</td>`})}
										</tr>`)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		`}},m([l({reflect:!0})],Z.prototype,`label`,void 0),m([l({reflect:!0})],Z.prototype,`lang`,void 0),m([l({reflect:!0})],Z.prototype,`name`,void 0),m([l({reflect:!0})],Z.prototype,`value`,void 0),m([l({attribute:`header-format`})],Z.prototype,`headerFormat`,void 0),m([l({attribute:`weekday-format`})],Z.prototype,`weekdayFormat`,void 0),m([l({attribute:!1})],Z.prototype,`isDayDisabled`,void 0),m([l({attribute:`day-format`})],Z.prototype,`dayFormat`,void 0),m([n()],Z.prototype,`isCalendarOpen`,void 0),m([n()],Z.prototype,`navigationDate`,void 0),m([n()],Z.prototype,`locale`,void 0),m([n()],Z.prototype,`selectedDate`,null),m([n()],Z.prototype,`month`,null),m([n()],Z.prototype,`weeks`,null),m([s(`#${q}`)],Z.prototype,`calendar`,void 0),m([s(`#${J}`,!0)],Z.prototype,`input`,void 0),m([s(`#${cf}`,!0)],Z.prototype,`toggleButton`,void 0),m([s(`#${lf}`,!0)],Z.prototype,`wrapper`,void 0),m([s(`#${Y}`)],Z.prototype,`previousMonthButton`,void 0),m([s(`[aria-current="date"]`)],Z.prototype,`todayCell`,void 0),m([s(`[data-navigation="true"]`)],Z.prototype,`selectedCell`,void 0),customElements.get(`w-datepicker`)||customElements.define(`w-datepicker`,Z)})),df=e({Default:()=>Q,DisableCalendarDates:()=>$,__namedExportsOrder:()=>vf,default:()=>_f}),ff,pf,mf,hf,gf,_f,Q,$,vf,yf=t((()=>{_e(),oe(),r(),ve(),Ce(),uf(),we(),{events:mf,args:hf,argTypes:gf}=ce(`w-datepicker`),_f={title:`Forms/Datepicker`,render(e){return a(ff||=Te([`
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
        `]),he(ge(e)))},args:hf,argTypes:gf,parameters:{actions:{handles:mf}}},Q={args:{label:`Date`}},$={args:{label:`Date`},render(e){return a(pf||=Te([`
            <!-- Workaround for Storybook's overflow hidden -->
            <div style="min-height: 400px">
                <w-datepicker `,`></w-datepicker>
            </div>
            <script type="module">
                const datePicker = document.querySelector("w-datepicker");
                // No working on Sundays!
                datePicker.isDayDisabled = (day) => day.getDay() === 0;
            <\/script>
        `]),he(ge(e)))}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date"
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
}`,...$.parameters?.docs?.source}}},vf=[`Default`,`DisableCalendarDates`]}));yf();export{Q as Default,$ as DisableCalendarDates,vf as __namedExportsOrder,_f as default,yf as n,df as t};