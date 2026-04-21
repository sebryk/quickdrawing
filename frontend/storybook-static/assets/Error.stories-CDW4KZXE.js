import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./next-link-DAqOQ1Bk.js";const h="_root_15m8r_1",u="_title_15m8r_11",_="_text_15m8r_16",g="_link_15m8r_21",t={root:h,title:u,text:_,link:g},r={retryText:"Please try one more time, if the error persists",contactText:"contact us",backToText:"Back to",homeText:"home page"},p=({children:x})=>e.jsxs("div",{className:t.root,children:[e.jsx("h1",{className:t.title,children:x}),e.jsxs("p",{className:t.text,children:[r.retryText," ",e.jsx(n,{href:"/contact",className:t.link,children:r.contactText})]}),e.jsxs("p",{className:t.text,children:[r.backToText," ",e.jsx(n,{href:"/",className:t.link,children:r.homeText})]})]});p.__docgenInfo={description:"",methods:[],displayName:"Error",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const N={title:"Shared/Error",component:p,tags:["autodocs"]},o={args:{children:"Something went wrong"}},s={args:{children:"Page not found"}};var a,c,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'Something went wrong'
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,d,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Page not found'
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const k=["Default","NotFound"];export{o as Default,s as NotFound,k as __namedExportsOrder,N as default};
