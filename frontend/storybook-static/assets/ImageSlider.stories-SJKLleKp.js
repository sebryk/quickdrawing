import{b as d,s as y}from"./fixtures-CVDKd118.js";import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{N as O}from"./next-image-BEzG1YIz.js";import{s as j,a as k,g as q,e as F,f as N}from"./index-DEc6Y-os.js";import{t as A}from"./index-vKOwZ3ZJ.js";import{a as C,u as M}from"./hooks-BTEbYsiw.js";import{C as D}from"./index-DuaS2atm.js";import{F as T}from"./index-DY4nfkoJ.js";import{N as u}from"./index-Bf3-jLZE.js";import{P as U}from"./index-CnVss5Jv.js";import{P as B}from"./index-DPXMFhHu.js";import{P as L}from"./index-Cy2kdx4S.js";import"./redux-toolkit.modern-0ojJP4C5.js";import"./index-BKX182W5.js";import"./react-redux-nMrZmOyj.js";import"./index-DSvP83uV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-xf0-QVxD.js";import"./index-EmApDSk1.js";import"./iconBase-TVnof3Ly.js";import"./index-GN0Md-DF.js";import"./index-C16VHUmD.js";import"./index-C0NgA-YR.js";import"./index-DZqUQW2N.js";import"./index-jbvAWi6c.js";const o={"image-slider":"_image-slider_xi3qd_1","image-slider__img":"_image-slider__img_xi3qd_5","image-slider__button-wrapper":"_image-slider__button-wrapper_xi3qd_43","image-slider__button":"_image-slider__button_xi3qd_43"},h=({data:s})=>{var g,p,c;const i=C(),e=M(m=>m.imageSlider),b=M(m=>m.timer),P=(g=s==null?void 0:s[e.currentIndex])==null?void 0:g.imageUrl,w=(s==null?void 0:s.length)||0,n=()=>i(F()),t=()=>i(N());return r.jsxs("div",{className:o["image-slider"],children:[r.jsx("div",{tabIndex:0,role:"button",onClick:()=>i(A()),className:o["image-slider__button-wrapper"],children:b.isPaused&&e.isMouseMoving&&r.jsx(D,{variant:"play",className:o["image-slider__button"],isImageSliderFinished:e.isFinished})}),r.jsx(u,{variant:"close",onMouseOut:t,onMouseOver:n,onClick:()=>i(j()),isMouseMoving:e.isMouseMoving}),P&&r.jsx(O,{fill:!0,title:"img",sizes:"100vw",quality:100,className:o["image-slider__img"],alt:((p=s==null?void 0:s[e.currentIndex])==null?void 0:p.title)||"",src:((c=s==null?void 0:s[e.currentIndex])==null?void 0:c.imageUrl)||""}),r.jsx(u,{variant:"left",onMouseOut:t,onMouseOver:n,isVisible:e.isFinished,onClick:()=>i(k()),isMouseMoving:e.isMouseMoving,isDisabled:e.currentIndex===0||!e.isFinished}),r.jsx(u,{variant:"right",onMouseOut:t,onMouseOver:n,isVisible:e.isFinished,onClick:()=>i(q()),isMouseMoving:e.isMouseMoving,isDisabled:e.currentIndex===w-1||!e.isFinished}),r.jsxs(U,{onMouseOut:t,onMouseOver:n,isMouseMoving:e.isMouseMoving,children:[r.jsx(B,{data:s,currentIndex:e.currentIndex,isMouseMoving:e.isMouseMoving}),r.jsx(L,{data:s,isLoading:e.isLoading,isFinished:e.isFinished,currentIndex:e.currentIndex,progressIndex:e.progressIndex})]}),r.jsx(T,{data:s,onMouseOut:t,onMouseOver:n,currentIndex:e.currentIndex,isMouseMoving:e.isMouseMoving})]})};h.__docgenInfo={description:"",methods:[],displayName:"ImageSlider",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
   id: string
   title: string | null
   description: string | null
   link: string | null
   createdAt: string | null
   imageUrl: string | null
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"description",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"link",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"createdAt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"imageUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"AccountPin[]"},description:""}}};const de={title:"Shared/ImageSlider",component:h,tags:["autodocs"],args:{data:y},parameters:{layout:"fullscreen"}},a={parameters:{preloadedState:d}},l={parameters:{preloadedState:{...d,imageSlider:{...d.imageSlider,isFinished:!1,progressIndex:1},timer:{seconds:140,isActive:!0,isPaused:!1}}}};var v,x,_;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    preloadedState: basePreloadedState
  }
}`,...(_=(x=a.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var I,S,f;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    preloadedState: {
      ...basePreloadedState,
      imageSlider: {
        ...basePreloadedState.imageSlider,
        isFinished: false,
        progressIndex: 1
      },
      timer: {
        seconds: 140,
        isActive: true,
        isPaused: false
      }
    }
  }
}`,...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const ge=["Default","SessionInProgress"];export{a as Default,l as SessionInProgress,ge as __namedExportsOrder,de as default};
