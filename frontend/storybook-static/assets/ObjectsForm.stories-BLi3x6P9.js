import{b as c}from"./fixtures-CVDKd118.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as P}from"./index-xf0-QVxD.js";import{a as I}from"./next-navigation-NquXCVrZ.js";import{u as B}from"./hooks-BTEbYsiw.js";import{M as E}from"./index-CgNoAOAF.js";import{O as N,o as R}from"./index-D1kxGfA8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./react-redux-nMrZmOyj.js";import"./index-DSvP83uV.js";import"./next-link-DAqOQ1Bk.js";import"./iconBase-TVnof3Ly.js";import"./index-CzYbgw1e.js";import"./index-DuyKIudj.js";import"./index-BKX182W5.js";import"./redux-toolkit.modern-0ojJP4C5.js";const V={selectOption:[{name:"object",placeholder:"Select object type"},{name:"count",placeholder:"Select image count"},{name:"duration",placeholder:"Select duration"},{name:"gender",placeholder:"Select gender"},{name:"clothing",placeholder:"Select clothing"}],button:{title:"Get Drawing"}},i={"objects-form":"_objects-form_e27rl_1"},f=()=>{const j=B(e=>e.selectedOptions),v=I(),{selectOption:x,button:_}=V,{object:a,gender:H,clothing:y,count:F,duration:w}=j||{},n=(a==null?void 0:a.value)==="human",l=a&&F&&w,C=n?l&&(H&&y):l;return s.jsxs("div",{className:P(i["objects-form"],{[i["objects-form--human"]]:n}),children:[x.map(e=>{const M=e.name==="gender"||e.name==="clothing";return s.jsx(N,{name:e.name,isClearable:!0,options:R[e.name],placeholder:e.placeholder,isVisible:M?n:!0,children:e.name},e.name)}),s.jsx(E,{disabled:!C,variant:"primary-with-arrow",onClick:()=>v.push("/drawing"),children:_.title})]})};f.__docgenInfo={description:"",methods:[],displayName:"ObjectsForm"};const ee={title:"Shared/ObjectsForm",component:f,tags:["autodocs"],parameters:{layout:"padded"}},t={parameters:{preloadedState:c}},r={parameters:{preloadedState:{...c,selectedOptions:{duration:{label:"5 min",value:300},object:{label:"Car",value:"car"},count:{label:"6 images",value:6}}}}},o={parameters:{preloadedState:{...c,selectedOptions:{duration:{label:"5 min",value:300}}}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    preloadedState: basePreloadedState
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,S,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    preloadedState: {
      ...basePreloadedState,
      selectedOptions: {
        duration: {
          label: '5 min',
          value: 300
        },
        object: {
          label: 'Car',
          value: 'car'
        },
        count: {
          label: '6 images',
          value: 6
        }
      }
    }
  }
}`,...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,g,O;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    preloadedState: {
      ...basePreloadedState,
      selectedOptions: {
        duration: {
          label: '5 min',
          value: 300
        }
      }
    }
  }
}`,...(O=(g=o.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};const ae=["HumanSelection","MinimalSelection","IncompleteSelection"];export{t as HumanSelection,o as IncompleteSelection,r as MinimalSelection,ae as __namedExportsOrder,ee as default};
