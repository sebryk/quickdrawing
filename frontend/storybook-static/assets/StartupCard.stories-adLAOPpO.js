import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as I}from"./index-xf0-QVxD.js";import{r as m}from"./index-DSvP83uV.js";import{e as L}from"./index-EmApDSk1.js";import{M as b}from"./index-CgNoAOAF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-TVnof3Ly.js";import"./next-link-DAqOQ1Bk.js";var x={};const T=async()=>{const i=x.BACKEND_API_URL,t=await fetch(`${i}/auth/pinterest/url`,{cache:"no-store"});if(!t.ok)throw new Error("Failed to start Pinterest OAuth flow");return(await t.json()).url},C={buttons:[{title:"Quick session"},{title:"With",loggedInTitle:"To my account"}]},s={"startup-card":"_startup-card_1t6u8_1","startup-card__icon-wrapper":"_startup-card__icon-wrapper_1t6u8_14","startup-card__button":"_startup-card__button_1t6u8_18"},F=e.jsxs("span",{className:s["startup-card__icon-wrapper"],children:[e.jsx(L,{className:s["startup-card__icon"]}),e.jsx("span",{className:s["startup-card__text"],children:" Pinterest"})]}),U=({onQuickSession:i,userSlug:t,className:u,getAuthUrl:j=T})=>{const{buttons:E}=C,[p,l]=m.useState(""),[N,d]=m.useState(!1),k=async()=>{l(""),d(!0);try{const a=await j();window.location.assign(a)}catch{l("Pinterest auth failed. Please try again."),d(!1)}},v=()=>{t||k()};return e.jsxs("div",{className:I(s["startup-card"],u),children:[E.map((a,r)=>e.jsxs(b,{disabled:r===1&&N,className:s["startup-card__button"],variant:r===0?"primary":"accent",onClick:r===0?i:v,children:[r===1&&t?a.loggedInTitle:a.title," ",r===1&&!t&&F]},r)),p&&e.jsx("p",{children:p})]})};U.__docgenInfo={description:"",methods:[],displayName:"StartupCard",props:{onQuickSession:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},userSlug:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},getAuthUrl:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<string>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"}}},description:"",defaultValue:{value:`async () => {
   const backendUrl = process.env.BACKEND_API_URL
   const response = await fetch(\`\${backendUrl}/auth/pinterest/url\`, {
      cache: 'no-store',
   })

   if (!response.ok) {
      throw new Error('Failed to start Pinterest OAuth flow')
   }

   const payload = (await response.json()) as { url: string }
   return payload.url
}`,computed:!1}}}};const $={title:"App/Home/StartupCard",component:U,tags:["autodocs"],args:{className:"",onQuickSession:()=>{},userSlug:null,getAuthUrl:async()=>"https://example.com/pinterest-auth"}},n={},o={args:{userSlug:"artist-demo"}},c={args:{getAuthUrl:async()=>{throw new Error("Auth failed")}}};var g,h,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var f,w,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    userSlug: 'artist-demo'
  }
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var A,P,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    getAuthUrl: async () => {
      throw new Error('Auth failed');
    }
  }
}`,...(S=(P=c.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const H=["LoggedOut","LoggedIn","AuthFailure"];export{c as AuthFailure,o as LoggedIn,n as LoggedOut,H as __namedExportsOrder,$ as default};
