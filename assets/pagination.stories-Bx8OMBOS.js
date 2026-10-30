import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{T as n,v as r}from"./decorate-r9jH0CjD.js";import{n as i,t as a}from"./dist-gZ_m6TlA.js";import{i as o,n as s,r as c}from"./utilities-DPMir1kO.js";import{t as l}from"./taggedTemplateLiteral-CWT6dLlS.js";import{t as u}from"./pagination-Hl1NjYZ9.js";var d=t({BasicPagination:()=>_,LastPageSelected:()=>y,ManyPagesWithLimitedVisible:()=>b,MiddlePageSelected:()=>v,SinglePage:()=>x,__namedExportsOrder:()=>S,default:()=>g}),f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{c(),i(),r(),u(),{events:p,args:m,argTypes:h}=a(`w-pagination`),g={title:`Navigation/Pagination`,render(e){return n(f||=l([`
			<w-pagination `,`></w-pagination>
			<script type="module">
				const pagination = document.querySelector("w-pagination");

				pagination.addEventListener("page-click", (event) => {
					event.preventDefault();
					pagination.currentPageNumber = event.detail.clickedPage;
				});
			<\/script>
		`]),o(s(e)))},args:m,argTypes:h,parameters:{actions:{handles:p}}},_={args:{"current-page":1,pages:5,"base-url":`/search?page=`}},v={args:{"current-page":4,pages:7,"base-url":`/search?page=`}},y={args:{"current-page":10,pages:10,"base-url":`/search?page=`}},b={args:{"current-page":15,pages:50,"visible-pages":5,"base-url":`/search?page=`}},x={args:{"current-page":1,pages:1,"base-url":`/search?page=`}},S=[`BasicPagination`,`MiddlePageSelected`,`LastPageSelected`,`ManyPagesWithLimitedVisible`,`SinglePage`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 1,
    pages: 5,
    "base-url": "/search?page="
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 4,
    pages: 7,
    "base-url": "/search?page="
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 10,
    pages: 10,
    "base-url": "/search?page="
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 15,
    pages: 50,
    "visible-pages": 5,
    "base-url": "/search?page="
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "current-page": 1,
    pages: 1,
    "base-url": "/search?page="
  }
}`,...x.parameters?.docs?.source}}}})))()}export{x as a,v as i,y as n,C as o,b as r,d as s,_ as t};