import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,d as n,h as r,l as i,r as a,s as o,t as s,x as c,y as l}from"./decorate-Bt2QF_uA.js";import{a as u,n as d,o as f,r as ee,t as te}from"./i18n-CkjYRTT1.js";import{n as ne,t as re}from"./index.m-DHqwZk2H.js";import{t as ie}from"./icon-CD69d68Q.js";import{n as ae,t as oe}from"./styles-Cw_r5k83.js";import{r as se,t as ce}from"./if-defined-DBI32Ir5.js";import{a as le,c as ue,i as de,l as fe,o as pe,r as me,s as he,t as ge}from"./floating-ui.dom-D3LAQY9j.js";import{t as _e}from"./button-B8HBPJYA.js";async function p(e){if(!e?.isShowing||(e?.waitForDOM&&await e?.waitForDOM(),!e?.targetEl||!e?.attentionEl))return;let t=e?.targetEl,n=e.attentionEl;return me(t,n,{placement:e?.directionName??x,middleware:[he({mainAxis:e?.distance??8,crossAxis:e?.skidding??0}),e?.flip&&de({crossAxis:e?.crossAxis,fallbackPlacements:e?.fallbackPlacements}),e?.flip&&ue({crossAxis:!0}),!e?.noArrow&&e?.arrowEl&&ge({element:e?.arrowEl}),le(),fe({apply(){Object.assign(n.style,{paddingRight:`${F}px`,paddingLeft:`${F}px`})}})]}).then(({x:t,y:r,middlewareData:i,placement:a})=>{if(e.actualDirection=a,e?.isCallout||Object.assign(n.style,{left:`${t}px`,top:`${r}px`}),i?.hide&&!e?.isCallout){let{referenceHidden:e}=i.hide;Object.assign(n.style,{visibility:e?`hidden`:``})}if(i?.arrow&&e?.arrowEl){let t=e?.arrowEl,{x:r,y:o}=i.arrow,s=window.getComputedStyle(n).direction===`rtl`,c=M(a).split(`-`)[1],l=``,u=``,d=``,f=``;if(c===`start`){let e=typeof r==`number`?`calc(${I}px - ${t.offsetWidth/2}px)`:``;l=typeof o==`number`?`calc(${I}px - ${t.offsetWidth/2}px)`:``,u=s?e:``,f=s?``:e}else if(c===`end`){let e=typeof r==`number`?`calc(${I}px - ${t.offsetWidth/2}px)`:``;u=s?``:e,f=s?e:``,d=typeof o==`number`?`calc(${I}px - ${t.offsetWidth/2}px)`:``}else f=typeof r==`number`?`${r}px`:``,l=typeof o==`number`?`${o}px`:``;Object.assign(t.style,{top:l,right:u,bottom:d,left:f}),P(t,N(a),a)}}),e}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{pe(),m=`top-start`,h=`top`,g=`top-end`,_=`right-start`,v=`right`,y=`right-end`,b=`bottom-start`,x=`bottom`,S=`bottom-end`,C=`left-start`,w=`left`,T=`left-end`,E=[m,h,g,_,v,y,b,x,S,C,w,T],D={[m]:b,[h]:x,[g]:S,[b]:m,[x]:h,[S]:g,[C]:_,[w]:v,[T]:y,[_]:C,[v]:w,[y]:T},O={[C]:-45,[w]:-45,[T]:-45,[m]:45,[h]:45,[g]:45,[_]:135,[v]:135,[y]:135,[b]:-135,[x]:-135,[S]:-135},k=e=>{let t;return t=/-/.test(e)?e.split(`-`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(``):e.charAt(0).toUpperCase()+e.slice(1),t},A=e=>e.split(`-`)[0],j=e=>D[A(e)],M=e=>D[e],N=e=>O[M(e)],P=(e,t,n)=>{Object.assign(e?.style,{borderTopLeftRadius:`4px`,zIndex:1,[`margin${k(j(n))}`]:`-0.5px`,transform:`rotate(${t}deg)`})},F=8,I=24})))()}var R;function z(){return(z=e((()=>{t(),R=l`
	.place-self-auto {
		place-self: auto;
	}
	.place-self-start {
		place-self: start;
	}
	.place-self-end {
		place-self: end;
	}
	.place-self-center {
		place-self: center;
	}
	.place-self-stretch {
		place-self: stretch;
	}

	.place-items-start {
		place-items: start;
	}
	.place-items-end {
		place-items: end;
	}
	.place-items-center {
		place-items: center;
	}
	.place-items-stretch {
		place-items: stretch;
	}

	.place-content-center {
		place-content: center;
	}
	.place-content-start {
		place-content: start;
	}
	.place-content-end {
		place-content: end;
	}
	.place-content-between {
		place-content: space-between;
	}
	.place-content-around {
		place-content: space-around;
	}
	.place-content-evenly {
		place-content: space-evenly;
	}

	.self-auto {
		align-self: auto;
	}
	.self-start {
		align-self: flex-start;
	}
	.self-center {
		align-self: center;
	}
	.self-end {
		align-self: flex-end;
	}
	.self-stretch {
		align-self: stretch;
	}

	.items-baseline {
		align-items: baseline;
	}
	.items-stretch {
		align-items: stretch;
	}
	.items-start {
		align-items: flex-start;
	}
	.items-center {
		align-items: center;
	}
	.items-end {
		align-items: flex-end;
	}

	.content-start {
		align-content: flex-start;
	}
	.content-center {
		align-content: center;
	}
	.content-end {
		align-content: flex-end;
	}
	.content-between {
		align-content: space-between;
	}
	.content-around {
		align-content: space-around;
	}
	.content-evenly {
		align-content: space-evenly;
	}

	.justify-self-auto {
		justify-self: auto;
	}
	.justify-self-start {
		justify-self: start;
	}
	.justify-self-center {
		justify-self: center;
	}
	.justify-self-end {
		justify-self: end;
	}
	.justify-self-stretch {
		justify-self: stretch;
	}

	.justify-items-start {
		justify-items: start;
	}
	.justify-items-center {
		justify-items: center;
	}
	.justify-items-end {
		justify-items: end;
	}
	.justify-items-stretch {
		justify-items: stretch;
	}

	.justify-start {
		justify-content: flex-start;
	}
	.justify-center {
		justify-content: center;
	}
	.justify-end {
		justify-content: flex-end;
	}
	.justify-between {
		justify-content: space-between;
	}
	.justify-around {
		justify-content: space-around;
	}
	.justify-evenly {
		justify-content: space-evenly;
	}

	.gap-0 {
		gap: 0;
	}
	.gap-1 {
		gap: 0.25rem;
	}
	.gap-2 {
		gap: 0.5rem;
	}
	.gap-4 {
		gap: 1rem;
	}
	.gap-6 {
		gap: 1.5rem;
	}
	.gap-8 {
		gap: 2rem;
	}
	.gap-10 {
		gap: 2.5rem;
	}
	.gap-12 {
		gap: 3rem;
	}
	.gap-14 {
		gap: 3.5rem;
	}
	.gap-16 {
		gap: 4rem;
	}

	.gap-x-0 {
		column-gap: 0;
	}
	.gap-x-1 {
		column-gap: 0.25rem;
	}
	.gap-x-2 {
		column-gap: 0.5rem;
	}
	.gap-x-4 {
		column-gap: 1rem;
	}
	.gap-x-6 {
		column-gap: 1.5rem;
	}
	.gap-x-8 {
		column-gap: 2rem;
	}
	.gap-x-10 {
		column-gap: 2.5rem;
	}
	.gap-x-12 {
		column-gap: 3rem;
	}
	.gap-x-14 {
		column-gap: 3.5rem;
	}
	.gap-x-16 {
		column-gap: 4rem;
	}

	.gap-y-0 {
		row-gap: 0;
	}
	.gap-y-1 {
		row-gap: 0.25rem;
	}
	.gap-y-2 {
		row-gap: 0.5rem;
	}
	.gap-y-4 {
		row-gap: 1rem;
	}
	.gap-y-6 {
		row-gap: 1.5rem;
	}
	.gap-y-8 {
		row-gap: 2rem;
	}
	.gap-y-10 {
		row-gap: 2.5rem;
	}
	.gap-y-12 {
		row-gap: 3rem;
	}
	.gap-y-14 {
		row-gap: 3.5rem;
	}
	.gap-y-16 {
		row-gap: 4rem;
	}

	.order-1 {
		order: 1;
	}
	.order-2 {
		order: 2;
	}
	.order-3 {
		order: 3;
	}
	.order-4 {
		order: 4;
	}
	.order-5 {
		order: 5;
	}
	.order-6 {
		order: 6;
	}
	.order-7 {
		order: 7;
	}
	.order-8 {
		order: 8;
	}
	.order-9 {
		order: 9;
	}
	.order-10 {
		order: 10;
	}
	.order-11 {
		order: 11;
	}
	.order-12 {
		order: 12;
	}
	.order-none {
		order: 0;
	}
	.order-first {
		order: -9999;
	}
	.order-last {
		order: 9999;
	}

	.flex-nowrap {
		flex-wrap: nowrap;
	}
	.flex-wrap {
		flex-wrap: wrap;
	}
	.flex-wrap-reverse {
		flex-wrap: wrap-reverse;
	}

	.shrink {
		flex-shrink: 1;
	}
	.shrink-0 {
		flex-shrink: 0;
	}

	.grow {
		flex-grow: 1;
	}
	.grow-0 {
		flex-grow: 0;
	}

	.flex-row {
		flex-direction: row;
	}
	.flex-row-reverse {
		flex-direction: row-reverse;
	}
	.flex-col {
		flex-direction: column;
	}
	.flex-col-reverse {
		flex-direction: column-reverse;
	}

	.basis-1 {
		flex-basis: 0.25rem;
	}
	.basis-2 {
		flex-basis: 0.5rem;
	}
	.basis-4 {
		flex-basis: 1rem;
	}
	.basis-8 {
		flex-basis: 2rem;
	}
	.basis-16 {
		flex-basis: 4rem;
	}
	.basis-1\/5 {
		flex-basis: 20%;
	}

	.flex-initial {
		flex: 0 1 auto;
	}
	.flex-1 {
		flex: 1 1 0%;
	}
	.flex-auto {
		flex: 1 1 auto;
	}
	.flex-none {
		flex: none;
	}

	.space-x-0 > * + * {
		margin-left: 0;
	}
	.space-x-1 > * + * {
		margin-left: 0.25rem;
	}
	.space-x-2 > * + * {
		margin-left: 0.5rem;
	}
	.space-x-4 > * + * {
		margin-left: 1rem;
	}
	.space-x-6 > * + * {
		margin-left: 1.5rem;
	}
	.space-x-8 > * + * {
		margin-left: 2rem;
	}
	.space-x-10 > * + * {
		margin-left: 2.5rem;
	}
	.space-x-12 > * + * {
		margin-left: 3rem;
	}
	.space-x-14 > * + * {
		margin-left: 3.5rem;
	}
	.space-x-16 > * + * {
		margin-left: 4rem;
	}

	.space-y-0 > * + * {
		margin-top: 0;
	}
	.space-y-1 > * + * {
		margin-top: 0.25rem;
	}
	.space-y-2 > * + * {
		margin-top: 0.5rem;
	}
	.space-y-4 > * + * {
		margin-top: 1rem;
	}
	.space-y-6 > * + * {
		margin-top: 1.5rem;
	}
	.space-y-8 > * + * {
		margin-top: 2rem;
	}
	.space-y-10 > * + * {
		margin-top: 2.5rem;
	}
	.space-y-12 > * + * {
		margin-top: 3rem;
	}
	.space-y-14 > * + * {
		margin-top: 3.5rem;
	}
	.space-y-16 > * + * {
		margin-top: 4rem;
	}

	.space-x-reverse > * + * {
		margin-right: 0;
		margin-left: 0;
	}
	.space-y-reverse > * + * {
		margin-bottom: 0;
		margin-top: 0;
	}

	.m-0 {
		margin: 0;
	}
	.m-1 {
		margin: 0.25rem;
	}
	.m-2 {
		margin: 0.5rem;
	}
	.m-4 {
		margin: 1rem;
	}
	.m-6 {
		margin: 1.5rem;
	}
	.m-8 {
		margin: 2rem;
	}
	.m-10 {
		margin: 2.5rem;
	}
	.m-12 {
		margin: 3rem;
	}
	.m-14 {
		margin: 3.5rem;
	}
	.m-16 {
		margin: 4rem;
	}

	.mt-0 {
		margin-top: 0;
	}
	.mt-1 {
		margin-top: 0.25rem;
	}
	.mt-2 {
		margin-top: 0.5rem;
	}
	.mt-4 {
		margin-top: 1rem;
	}
	.mt-6 {
		margin-top: 1.5rem;
	}
	.mt-8 {
		margin-top: 2rem;
	}
	.mt-10 {
		margin-top: 2.5rem;
	}
	.mt-12 {
		margin-top: 3rem;
	}
	.mt-14 {
		margin-top: 3.5rem;
	}
	.mt-16 {
		margin-top: 4rem;
	}

	.mr-0 {
		margin-right: 0;
	}
	.mr-1 {
		margin-right: 0.25rem;
	}
	.mr-2 {
		margin-right: 0.5rem;
	}
	.mr-4 {
		margin-right: 1rem;
	}
	.mr-6 {
		margin-right: 1.5rem;
	}
	.mr-8 {
		margin-right: 2rem;
	}
	.mr-10 {
		margin-right: 2.5rem;
	}
	.mr-12 {
		margin-right: 3rem;
	}
	.mr-14 {
		margin-right: 3.5rem;
	}
	.mr-16 {
		margin-right: 4rem;
	}

	.mb-0 {
		margin-bottom: 0;
	}
	.mb-1 {
		margin-bottom: 0.25rem;
	}
	.mb-2 {
		margin-bottom: 0.5rem;
	}
	.mb-4 {
		margin-bottom: 1rem;
	}
	.mb-6 {
		margin-bottom: 1.5rem;
	}
	.mb-8 {
		margin-bottom: 2rem;
	}
	.mb-10 {
		margin-bottom: 2.5rem;
	}
	.mb-12 {
		margin-bottom: 3rem;
	}
	.mb-14 {
		margin-bottom: 3.5rem;
	}
	.mb-16 {
		margin-bottom: 4rem;
	}

	.ml-0 {
		margin-left: 0;
	}
	.ml-1 {
		margin-left: 0.25rem;
	}
	.ml-2 {
		margin-left: 0.5rem;
	}
	.ml-4 {
		margin-left: 1rem;
	}
	.ml-6 {
		margin-left: 1.5rem;
	}
	.ml-8 {
		margin-left: 2rem;
	}
	.ml-10 {
		margin-left: 2.5rem;
	}
	.ml-12 {
		margin-left: 3rem;
	}
	.ml-14 {
		margin-left: 3.5rem;
	}
	.ml-16 {
		margin-left: 4rem;
	}

	.mx-0 {
		margin-left: 0;
		margin-right: 0;
	}
	.mx-1 {
		margin-left: 0.25rem;
		margin-right: 0.25rem;
	}
	.mx-2 {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}
	.mx-4 {
		margin-left: 1rem;
		margin-right: 1rem;
	}
	.mx-6 {
		margin-left: 1.5rem;
		margin-right: 1.5rem;
	}
	.mx-8 {
		margin-left: 2rem;
		margin-right: 2rem;
	}
	.mx-10 {
		margin-left: 2.5rem;
		margin-right: 2.5rem;
	}
	.mx-12 {
		margin-left: 3rem;
		margin-right: 3rem;
	}
	.mx-14 {
		margin-left: 3.5rem;
		margin-right: 3.5rem;
	}
	.mx-16 {
		margin-left: 4rem;
		margin-right: 4rem;
	}

	.my-0 {
		margin-top: 0;
		margin-bottom: 0;
	}
	.my-1 {
		margin-top: 0.25rem;
		margin-bottom: 0.25rem;
	}
	.my-2 {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.my-4 {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	.my-6 {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}
	.my-8 {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
	.my-10 {
		margin-top: 2.5rem;
		margin-bottom: 2.5rem;
	}
	.my-12 {
		margin-top: 3rem;
		margin-bottom: 3rem;
	}
	.my-14 {
		margin-top: 3.5rem;
		margin-bottom: 3.5rem;
	}
	.my-16 {
		margin-top: 4rem;
		margin-bottom: 4rem;
	}

	.p-0 {
		padding: 0;
	}
	.p-1 {
		padding: 0.25rem;
	}
	.p-2 {
		padding: 0.5rem;
	}
	.p-4 {
		padding: 1rem;
	}
	.p-6 {
		padding: 1.5rem;
	}
	.p-8 {
		padding: 2rem;
	}
	.p-10 {
		padding: 2.5rem;
	}
	.p-12 {
		padding: 3rem;
	}
	.p-14 {
		padding: 3.5rem;
	}
	.p-16 {
		padding: 4rem;
	}

	.pt-0 {
		padding-top: 0;
	}
	.pt-1 {
		padding-top: 0.25rem;
	}
	.pt-2 {
		padding-top: 0.5rem;
	}
	.pt-4 {
		padding-top: 1rem;
	}
	.pt-6 {
		padding-top: 1.5rem;
	}
	.pt-8 {
		padding-top: 2rem;
	}
	.pt-10 {
		padding-top: 2.5rem;
	}
	.pt-12 {
		padding-top: 3rem;
	}
	.pt-14 {
		padding-top: 3.5rem;
	}
	.pt-16 {
		padding-top: 4rem;
	}

	.pr-0 {
		padding-right: 0;
	}
	.pr-1 {
		padding-right: 0.25rem;
	}
	.pr-2 {
		padding-right: 0.5rem;
	}
	.pr-4 {
		padding-right: 1rem;
	}
	.pr-6 {
		padding-right: 1.5rem;
	}
	.pr-8 {
		padding-right: 2rem;
	}
	.pr-10 {
		padding-right: 2.5rem;
	}
	.pr-12 {
		padding-right: 3rem;
	}
	.pr-14 {
		padding-right: 3.5rem;
	}
	.pr-16 {
		padding-right: 4rem;
	}

	.pb-0 {
		padding-bottom: 0;
	}
	.pb-1 {
		padding-bottom: 0.25rem;
	}
	.pb-2 {
		padding-bottom: 0.5rem;
	}
	.pb-4 {
		padding-bottom: 1rem;
	}
	.pb-6 {
		padding-bottom: 1.5rem;
	}
	.pb-8 {
		padding-bottom: 2rem;
	}
	.pb-10 {
		padding-bottom: 2.5rem;
	}
	.pb-12 {
		padding-bottom: 3rem;
	}
	.pb-14 {
		padding-bottom: 3.5rem;
	}
	.pb-16 {
		padding-bottom: 4rem;
	}

	.pl-0 {
		padding-left: 0;
	}
	.pl-1 {
		padding-left: 0.25rem;
	}
	.pl-2 {
		padding-left: 0.5rem;
	}
	.pl-4 {
		padding-left: 1rem;
	}
	.pl-6 {
		padding-left: 1.5rem;
	}
	.pl-8 {
		padding-left: 2rem;
	}
	.pl-10 {
		padding-left: 2.5rem;
	}
	.pl-12 {
		padding-left: 3rem;
	}
	.pl-14 {
		padding-left: 3.5rem;
	}
	.pl-16 {
		padding-left: 4rem;
	}

	.px-0 {
		padding-left: 0;
		padding-right: 0;
	}
	.px-1 {
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}
	.px-2 {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
	.px-4 {
		padding-left: 1rem;
		padding-right: 1rem;
	}
	.px-6 {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
	.px-8 {
		padding-left: 2rem;
		padding-right: 2rem;
	}
	.px-10 {
		padding-left: 2.5rem;
		padding-right: 2.5rem;
	}
	.px-12 {
		padding-left: 3rem;
		padding-right: 3rem;
	}
	.px-14 {
		padding-left: 3.5rem;
		padding-right: 3.5rem;
	}
	.px-16 {
		padding-left: 4rem;
		padding-right: 4rem;
	}

	.py-0 {
		padding-top: 0;
		padding-bottom: 0;
	}
	.py-1 {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}
	.py-2 {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	.py-4 {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	.py-6 {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}
	.py-8 {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
	.py-10 {
		padding-top: 2.5rem;
		padding-bottom: 2.5rem;
	}
	.py-12 {
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
	.py-14 {
		padding-top: 3.5rem;
		padding-bottom: 3.5rem;
	}
	.py-16 {
		padding-top: 4rem;
		padding-bottom: 4rem;
	}
`})))()}var B;function V(){return(V=e((()=>{B=JSON.parse(`{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}`)})))()}var H;function U(){return(U=e((()=>{H=JSON.parse(`{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}`)})))()}var W;function G(){return(G=e((()=>{W=JSON.parse(`{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}`)})))()}var K;function q(){return(q=e((()=>{K=JSON.parse(`{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}`)})))()}var J;function Y(){return(Y=e((()=>{J=JSON.parse(`{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}`)})))()}var X;function ve(){return(ve=e((()=>{t(),X=c(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.bg-\\[--w-color-callout-background\\]{background-color:var(--w-color-callout-background)}.bg-\\[--w-s-color-surface-elevated-300\\]{background-color:var(--w-s-color-surface-elevated-300)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-b-0{border-bottom-width:0}.border-r-0{border-right-width:0}.border-\\[--w-color-callout-border\\]{border-color:var(--w-color-callout-border)}.border-\\[--w-s-color-background-inverted\\]{border-color:var(--w-s-color-background-inverted)}.border-\\[--w-s-color-surface-elevated-300\\]{border-color:var(--w-s-color-surface-elevated-300)}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-tl-4{border-top-left-radius:4px}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.contents{display:contents}.hidden{display:none}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.-bottom-\\[8px\\]{bottom:-8px}.-left-\\[8px\\]{left:-8px}.-right-\\[8px\\]{right:-8px}.-top-\\[8px\\]{top:-8px}.justify-center{justify-content:center}.absolute{position:absolute}.relative{position:relative}.static{position:static}.z-50{z-index:50}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-inverted{background-color:var(--w-s-color-background-inverted)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.drop-shadow-m{filter:drop-shadow(0 3px 8px #4040403d)drop-shadow(0 3px 6px #40404029)}.shadow-m{box-shadow:var(--w-shadow-m)}.h-\\[14px\\]{height:14px}.w-\\[14px\\]{width:14px}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.p-4{padding:.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.font-bold{font-weight:700}.resize{resize:both}.translate-z-0{--w-translate-z:0rem;transform:translateX(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotateZ(var(--w-rotate-z)) skewX(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotateZ(var(--w-rotate-z)) skewX(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`)})))()}var Z,ye,Q;function $(){return($=e((()=>{re(),f(),L(),t(),a(),ce(),ee(),oe(),z(),V(),U(),G(),q(),Y(),ve(),ie(),_e(),`${{primary:`s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]`,secondary:`s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active`,utility:`s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active`,destructive:`s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active`,pill:`s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`,disabled:`s-text-inverted s-bg-disabled`,quiet:`bg-transparent s-text-link hover:s-bg-hover active:s-bg-active`,utilityQuiet:`s-text bg-transparent hover:s-bg-hover active:s-bg-active`,negativeQuiet:`bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active`,loading:`s-text s-bg-subtle`,link:`s-text-link`}.link}`,Z={base:`border-2 relative flex items-center`,tooltip:`s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted rounded-4 py-6 px-8`,callout:`bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8`,highlight:`bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0`,popover:`bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0`,arrowBase:`absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform`,arrowDirectionLeftStart:`-left-[8px]`,arrowDirectionLeft:`-left-[8px]`,arrowDirectionLeftEnd:`-left-[8px]`,arrowDirectionRightStart:`-right-[8px]`,arrowDirectionRight:`-right-[8px]`,arrowDirectionRightEnd:`-right-[8px]`,arrowDirectionBottomStart:`-bottom-[8px]`,arrowDirectionBottom:`-bottom-[8px]`,arrowDirectionBottomEnd:`-bottom-[8px]`,arrowDirectionTopStart:`-top-[8px]`,arrowDirectionTop:`-top-[8px]`,arrowDirectionTopEnd:`-top-[8px]`,arrowTooltip:`s-bg-inverted border-[--w-s-color-background-inverted]`,arrowCallout:`bg-[--w-color-callout-background] border-[--w-color-callout-border]`,arrowPopover:`bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]`,arrowHighlight:`bg-[--w-color-callout-background] border-[--w-color-callout-border]`,content:`last-child:mb-0`,notCallout:`absolute z-50`},ye={"top-start":Z.arrowDirectionTopStart,top:Z.arrowDirectionTop,"top-end":Z.arrowDirectionTopEnd,"right-start":Z.arrowDirectionRightStart,right:Z.arrowDirectionRight,"right-end":Z.arrowDirectionRightEnd,"bottom-start":Z.arrowDirectionBottomStart,bottom:Z.arrowDirectionBottom,"bottom-end":Z.arrowDirectionBottomEnd,"left-start":Z.arrowDirectionLeftStart,left:Z.arrowDirectionLeft,"left-end":Z.arrowDirectionLeftEnd},Q=class extends i{static{this.styles=[ae,R,X,l`
			#attention {
				position: absolute;
				z-index: 50;
				visibility: var(--attention-visibility);
				display: var(--attention-display);
			}
			:host([popover]:not(:popover-open):not(dialog[open])) {
				display: contents;
			}
		`]}constructor(){super(),this.show=!1,this.tooltip=!1,this.callout=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.flip=!1,this.crossAxis=!1,this.fallbackPlacements=[],this.attentionState=null,te(H,K,W,B,J),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement=`bottom`,this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(D).includes(this.placement))throw Error(`Invalid "placement" attribute. Set its value to one of the following:\n${JSON.stringify(Object.keys(D))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>E.includes(e)))throw Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:\n${JSON.stringify(E)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener(`click`,this.handleDone),window.addEventListener(`scroll`,this.handleDone),window.addEventListener(`resize`,this.handleDone),window.addEventListener(`touch`,this.handleDone)),this.tooltip&&(window.addEventListener(`mouseover`,this.handleDone),window.addEventListener(`mouseout`,this.handleDone))}disconnectedCallback(){window.removeEventListener(`click`,this.handleDone),window.removeEventListener(`scroll`,this.handleDone),window.removeEventListener(`resize`,this.handleDone),window.removeEventListener(`touch`,this.handleDone),window.removeEventListener(`mouseover`,this.handleDone),window.removeEventListener(`mouseout`,this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl&&this.attentionState?p(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector(`#arrow`)}get _arrowDirection(){return D[this._actualDirection]}get _arrowClasses(){let e=ye[this._arrowDirection];return ne([Z.arrowBase,this._activeVariantClasses.arrow,e])}get _arrowHtml(){return this.noArrow?n:r`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){return this.callout?{wrapper:Z.callout,arrow:Z.arrowCallout}:this.popover?{wrapper:Z.popover,arrow:Z.arrowPopover}:this.tooltip?{wrapper:Z.tooltip,arrow:Z.arrowTooltip}:this.highlight?{wrapper:Z.highlight,arrow:Z.arrowHighlight}:{wrapper:``,arrow:``}}get _attentionEl(){return this.renderRoot.querySelector(`#attention`)}get _targetEl(){let e=(this.renderRoot?.querySelector(`slot[name='target']`))?.assignedElements()[0];return e instanceof HTMLElement?e:null}get _messageEl(){let e=this.renderRoot.querySelector(`slot[name='message']`)?.assignedElements()[0];return e instanceof HTMLElement?e:null}get _wrapperClasses(){return ne([Z.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return u._({id:`attention.aria.close`,message:`Close`,comment:`Aria label for the close button in attention`})}get _closeBtnHtml(){return r`
			<w-button
				aria-label="${this._ariaClose}"
				@click=${this.close}
				@keydown=${this.keypressed}
				variant="pill"
				small=""
				class="ml-8"
			>
				<w-icon
					name="Close"
					size="small"
					locale="${d()}"
					class="flex"
				></w-icon>
			</w-button>
		`}updated(){this._attentionEl&&(this.callout||this._attentionEl.style.setProperty(`--attention-visibility`,this.show?``:`hidden`),this.tooltip||this._attentionEl.style.setProperty(`--attention-display`,this.show?`flex`:`none`),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},p(this.attentionState))}pointingAtDirection(){switch(D[this._actualDirection]){case`top-start`:case`top`:case`top-end`:return u._({id:`attention.aria.pointingUp`,message:`pointing up`,comment:`Default screenreader message for top direction in the attention component`});case`right-start`:case`right`:case`right-end`:return u._({id:`attention.aria.pointingRight`,message:`pointing right`,comment:`Default screenreader message for right direction in the attention component`});case`bottom-start`:case`bottom`:case`bottom-end`:return u._({id:`attention.aria.pointingDown`,message:`pointing down`,comment:`Default screenreader message for bottom direction in the attention component`});case`left-start`:case`left`:case`left-end`:return u._({id:`attention.aria.pointingLeft`,message:`pointing left`,comment:`Default screenreader message for left direction in the attention component`});default:return``}}activeAttentionType(){switch(!0){case this.tooltip:return u._({id:`attention.aria.tooltip`,message:`tooltip`,comment:`Default screenreader message for tooltip in the attention component`});case this.callout:return u._({id:`attention.aria.callout`,message:`callout speech bubble`,comment:`Default screenreader message for callout speech bubble in the attention component`});case this.popover:return u._({id:`attention.aria.popover`,message:`popover speech bubble`,comment:`Default screenreader message for popover speech bubble in the attention component`});case this.highlight:return u._({id:`attention.aria.highlight`,message:`highlighted speech bubble`,comment:`Default screenreader message for highlighted speech bubble in the attention component`});default:return``}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?``:this.pointingAtDirection()}`}firstUpdated(){this._initialPlacement=this.placement,this.callout&&this._attentionEl&&(this._attentionEl.style.position=`relative`)}close(){let e=new CustomEvent(`close`,{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key===`Escape`&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?r``:r`
			<section class=${se(this.className?this.className:void 0)}>
				${this.placement===`right-start`||this.placement===`right`||this.placement===`right-end`||this.placement===`bottom-start`||this.placement===`bottom`||this.placement===`bottom-end`?r`
								<slot name="target"></slot>

								<div id="attention" class="${this._wrapperClasses}">
									<div
										role="${this.tooltip?`tooltip`:`img`}"
										aria-label="${this.defaultAriaLabel()}"
									>
										${this._arrowHtml}
									</div>
									<slot name="message"></slot>
									${this.canClose?this._closeBtnHtml:n}
								</div>
							`:r`
								<div id="attention" class="${this._wrapperClasses}">
									<slot name="message"></slot>
									<div
										role="${this.tooltip?`tooltip`:`img`}"
										aria-label="${this.defaultAriaLabel()}"
									>
										${this._arrowHtml}
									</div>
									${this.canClose?this._closeBtnHtml:n}
								</div>
								<slot name="target"></slot>
							`}
			</section>
		`}},s([o({type:Boolean,reflect:!0})],Q.prototype,`show`,void 0),s([o({type:String,reflect:!1})],Q.prototype,`placement`,void 0),s([o({type:Boolean,reflect:!0})],Q.prototype,`tooltip`,void 0),s([o({type:Boolean,reflect:!0})],Q.prototype,`callout`,void 0),s([o({type:Boolean,reflect:!0})],Q.prototype,`popover`,void 0),s([o({type:Boolean,reflect:!0})],Q.prototype,`highlight`,void 0),s([o({attribute:`can-close`,type:Boolean,reflect:!0})],Q.prototype,`canClose`,void 0),s([o({attribute:`no-arrow`,type:Boolean,reflect:!0})],Q.prototype,`noArrow`,void 0),s([o({type:Number})],Q.prototype,`distance`,void 0),s([o({type:Number})],Q.prototype,`skidding`,void 0),s([o({type:Boolean,reflect:!0})],Q.prototype,`flip`,void 0),s([o({attribute:`cross-axis`,type:Boolean,reflect:!0})],Q.prototype,`crossAxis`,void 0),s([o({attribute:`fallback-placements`,type:Array,reflect:!0,useDefault:!0})],Q.prototype,`fallbackPlacements`,void 0),customElements.get(`w-attention`)||customElements.define(`w-attention`,Q)})))()}export{$ as t};