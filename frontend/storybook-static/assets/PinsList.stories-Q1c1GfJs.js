import{b as h,a as k}from"./fixtures-CVDKd118.js";import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{c as u}from"./index-xf0-QVxD.js";import{N as A}from"./next-image-BEzG1YIz.js";import{r as q}from"./index-DSvP83uV.js";import{F as x,a as j}from"./index-EmApDSk1.js";import{a as N,u as P}from"./hooks-BTEbYsiw.js";import{s as U,t as S}from"./index-_opbpoMt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-TVnof3Ly.js";import"./react-redux-nMrZmOyj.js";import"./redux-toolkit.modern-0ojJP4C5.js";const b="_pins_osl2f_1",B="_pins__empty_osl2f_6",E="_pin_osl2f_1",I="_pin__image_osl2f_83",C="_pin__placeholder_osl2f_112",D="_pin__body_osl2f_122",F="_pin__title_osl2f_128",e={pins:b,pins__empty:B,pin:E,"pin--selected":"_pin--selected_osl2f_42","pin__selected-icon":"_pin__selected-icon_osl2f_51","pin__preview-grid":"_pin__preview-grid_osl2f_55","pin__preview-grid--count-1":"_pin__preview-grid--count-1_osl2f_63","pin__preview-grid--count-2":"_pin__preview-grid--count-2_osl2f_67","pin__preview-grid--count-3":"_pin__preview-grid--count-3_osl2f_71","pin__preview-item":"_pin__preview-item_osl2f_75","pin__preview-item--third":"_pin__preview-item--third_osl2f_80",pin__image:I,"pin__selected-icon-bg":"_pin__selected-icon-bg_osl2f_98","pin__selected-icon-check":"_pin__selected-icon-check_osl2f_103",pin__placeholder:C,pin__body:D,pin__title:F},v=({boards:t})=>{const p=N(),w=P(n=>n.pins.selectedBoardId);return q.useEffect(()=>{p(U(t.map(n=>({id:n.id,title:n.name,description:n.description,link:null,createdAt:n.createdAt,imageUrl:n.imageUrl}))))},[t,p]),t.length===0?i.jsx("p",{className:e.pins__empty,children:"No Pinterest boards yet."}):i.jsx("section",{className:e.pins,children:t.map(n=>{const y=w===n.id,r=n.previewPins.length;return i.jsxs("button",{type:"button",onClick:()=>p(S({boardId:n.id,pins:n.pins})),className:u(e.pin,{[e["pin--selected"]]:y}),children:[i.jsxs("span",{className:e["pin__selected-icon"],children:[i.jsx(x,{className:e["pin__selected-icon-bg"]}),i.jsx(j,{className:e["pin__selected-icon-check"]})]}),i.jsx("div",{className:u(e["pin__preview-grid"],{[e["pin__preview-grid--count-1"]]:r===1,[e["pin__preview-grid--count-2"]]:r===2,[e["pin__preview-grid--count-3"]]:r===3}),children:r>0?n.previewPins.map((s,f)=>i.jsx("div",{className:u(e["pin__preview-item"],{[e["pin__preview-item--third"]]:r===3&&f===2}),children:s.imageUrl?i.jsx(A,{fill:!0,src:s.imageUrl,alt:`Board ${n.name??n.id} pin ${s.id}`,className:e.pin__image,sizes:"(max-width: 768px) 50vw, 25vw"}):i.jsx("div",{className:e.pin__placeholder,children:"No image"})},s.id)):i.jsx("div",{className:e.pin__placeholder,children:"No preview"})}),i.jsx("div",{className:e.pin__body,children:i.jsx("h3",{className:e.pin__title,children:n.name??"Untitled board"})})]},n.id)})})};v.__docgenInfo={description:"",methods:[],displayName:"PinsList",props:{boards:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`AccountBoard & {
   previewPins: AccountPin[]
   pins: AccountPin[]
}`,elements:[{name:"signature",type:"object",raw:`{
   id: string
   name: string | null
   description: string | null
   privacy: string | null
   createdAt: string | null
   imageUrl: string | null
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"description",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"privacy",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"createdAt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"imageUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
   previewPins: AccountPin[]
   pins: AccountPin[]
}`,signature:{properties:[{key:"previewPins",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
   id: string
   title: string | null
   description: string | null
   link: string | null
   createdAt: string | null
   imageUrl: string | null
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"description",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"link",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"createdAt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"imageUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"AccountPin[]",required:!0}},{key:"pins",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
   id: string
   title: string | null
   description: string | null
   link: string | null
   createdAt: string | null
   imageUrl: string | null
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"description",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"link",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"createdAt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"imageUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"AccountPin[]",required:!0}}]}}]}],raw:"AccountBoardWithPins[]"},description:""}}};const Q={title:"App/User/PinsList",component:v,tags:["autodocs"],args:{boards:k},parameters:{layout:"fullscreen"}},l={parameters:{preloadedState:h}},a={args:{boards:[]}};var o,m,c;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    preloadedState: basePreloadedState
  }
}`,...(c=(m=l.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var _,d,g;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    boards: []
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const V=["Default","Empty"];export{l as Default,a as Empty,V as __namedExportsOrder,Q as default};
