import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as B}from"./index-DSvP83uV.js";import{B as p}from"./burger-button-BkX-eOou.js";import"./_commonjsHelpers-CqkleIqs.js";const f={title:"UI/Buttons/BurgerButton",component:p,tags:["autodocs"]},e={render:()=>{const[g,c]=B.useState(!1);return i.jsx(p,{isBurgerMenuOpen:g,toggleBurgerMenu:()=>c(m=>!m)})}},r={args:{isBurgerMenuOpen:!0,toggleBurgerMenu:()=>{}}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <BurgerButton isBurgerMenuOpen={open} toggleBurgerMenu={() => setOpen(prev => !prev)} />;
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var s,u,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    isBurgerMenuOpen: true,
    toggleBurgerMenu: () => undefined
  }
}`,...(a=(u=r.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const x=["Toggle","Open"];export{r as Open,e as Toggle,x as __namedExportsOrder,f as default};
