import{b as d}from"./fixtures-CVDKd118.js";import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DSvP83uV.js";import{R as P}from"./index-jbvAWi6c.js";import{I as j}from"./index-C1Jr0RgO.js";import{M as w}from"./index-CgNoAOAF.js";import{h as r,e as B}from"./index-DEc6Y-os.js";import{a as M,u as p}from"./hooks-BTEbYsiw.js";import{r as N}from"./index-BKX182W5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-TVnof3Ly.js";import"./index-xf0-QVxD.js";import"./next-link-DAqOQ1Bk.js";import"./redux-toolkit.modern-0ojJP4C5.js";import"./react-redux-nMrZmOyj.js";const k={titles:["The session is finished., Do you want to start a new session?","Do you want to finish this session?"],buttons:[{title:"No"},{title:"Yes"}]},D="_modal_1ve18_1",F="_modal__container_1ve18_14",E="_modal__close_1ve18_36",I="_modal__title_1ve18_43",a={modal:D,modal__container:F,modal__close:E,modal__title:I,"modal__buttons-wrap":"_modal__buttons-wrap_1ve18_51"},v=()=>{const t=M(),x=p(e=>e.imageSlider),b=p(e=>e.completionBar),l=c.useRef(null),{titles:m,buttons:y}=k,O=()=>{t(r()),t(N())};return c.useEffect(()=>{const e=s=>{l.current&&s.target instanceof Node&&!l.current.contains(s.target)&&t(r())};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),o.jsx("div",{className:a.modal,onMouseOver:()=>t(B()),children:o.jsxs("div",{ref:l,className:a.modal__container,children:[o.jsx(j,{type:"button",variant:"close",icon:P,className:a.modal__close,onClick:()=>t(r())}),o.jsx("p",{className:a.modal__title,children:x.isFinished&&b.completedPercentOfTime===100?m[0]:m[1]}),o.jsx("div",{className:a["modal__buttons-wrap"],children:y.map((e,s)=>o.jsx(w,{variant:"primary",onClick:s===0?()=>t(r()):O,children:e.title},e.title))})]})})};v.__docgenInfo={description:"",methods:[],displayName:"Modal"};const W={title:"Shared/ImageSlider/Modal",component:v,tags:["autodocs"],parameters:{layout:"fullscreen"}},n={parameters:{preloadedState:{...d,completionBar:{completedPercentOfTime:100,key:0,transitionDuration:"1s"},imageSlider:{...d.imageSlider,isFinished:!0}}}},i={parameters:{preloadedState:{...d,completionBar:{completedPercentOfTime:42,key:0,transitionDuration:"1s"},imageSlider:{...d.imageSlider,isFinished:!1}}}};var _,u,f;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    preloadedState: {
      ...basePreloadedState,
      completionBar: {
        completedPercentOfTime: 100,
        key: 0,
        transitionDuration: '1s'
      },
      imageSlider: {
        ...basePreloadedState.imageSlider,
        isFinished: true
      }
    }
  }
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var S,h,g;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    preloadedState: {
      ...basePreloadedState,
      completionBar: {
        completedPercentOfTime: 42,
        key: 0,
        transitionDuration: '1s'
      },
      imageSlider: {
        ...basePreloadedState.imageSlider,
        isFinished: false
      }
    }
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const X=["Finished","Interrupted"];export{n as Finished,i as Interrupted,X as __namedExportsOrder,W as default};
